import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { ensureDb, hashPassword, now, publicUser, readDb, resetDb, uid, verifyPassword, writeDb } from './db.js';

const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = path.resolve('public');
const isTest = process.env.NODE_ENV === 'test';
ensureDb();

function send(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}
function bad(res, status, message) { send(res, status, { error: message }); }
function parseCookies(req) {
  return Object.fromEntries((req.headers.cookie || '').split(';').filter(Boolean).map(v => {
    const [k, ...rest] = v.trim().split('=');
    return [k, decodeURIComponent(rest.join('='))];
  }));
}
function setSession(res, token) { res.setHeader('Set-Cookie', `session=${token}; HttpOnly; SameSite=Lax; Path=/`); }
function clearSession(res) { res.setHeader('Set-Cookie', 'session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0'); }
async function body(req) {
  let raw = '';
  for await (const chunk of req) raw += chunk;
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}
function currentUser(req, db) {
  const token = parseCookies(req).session || req.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return null;
  const session = db.sessions.find(s => s.token === token);
  if (!session) return null;
  return db.users.find(u => u.id === session.userId) || null;
}
function requireUser(req, res, db) {
  const user = currentUser(req, db);
  if (!user) bad(res, 401, 'Authentication required');
  return user;
}
function enrichPost(db, post) {
  const author = publicUser(db.users.find(u => u.id === post.authorId));
  const comments = db.comments.filter(c => c.postId === post.id).map(c => ({ ...c, author: publicUser(db.users.find(u => u.id === c.authorId)) }));
  return { ...post, author, likesCount: db.likes.filter(l => l.postId === post.id).length, comments };
}
function serveStatic(req, res) {
  let file = req.url === '/' ? '/index.html' : req.url;
  file = file.split('?')[0];
  const full = path.normalize(path.join(PUBLIC_DIR, file));
  if (!full.startsWith(PUBLIC_DIR)) return bad(res, 403, 'Forbidden');
  if (!fs.existsSync(full) || fs.statSync(full).isDirectory()) return bad(res, 404, 'Not found');
  const ext = path.extname(full);
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
  res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' });
  fs.createReadStream(full).pipe(res);
}

async function api(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const db = readDb();

  if (isTest && req.method === 'POST' && url.pathname === '/api/test/reset') { resetDb(); return send(res, 200, { ok: true }); }

  if (req.method === 'POST' && url.pathname === '/api/auth/register') {
    const b = await body(req);
    const username = String(b.username || '').trim().toLowerCase();
    const displayName = String(b.displayName || '').trim();
    if (!username || !displayName || !b.password || String(b.password).length < 6) return bad(res, 400, 'username, displayName, password(6+) required');
    if (!/^[a-z0-9_]{3,24}$/.test(username)) return bad(res, 400, 'username must be 3-24 chars: a-z 0-9 _');
    if (db.users.some(u => u.username === username)) return bad(res, 409, 'username already exists');
    const user = { id: uid('usr'), username, displayName, bio: '', passwordHash: hashPassword(String(b.password)), createdAt: now(), updatedAt: now() };
    db.users.push(user);
    const token = uid('ses');
    db.sessions.push({ token, userId: user.id, createdAt: now() });
    writeDb(db); setSession(res, token); return send(res, 201, { user: publicUser(user), token });
  }
  if (req.method === 'POST' && url.pathname === '/api/auth/login') {
    const b = await body(req);
    const user = db.users.find(u => u.username === String(b.username || '').trim().toLowerCase());
    if (!user || !verifyPassword(String(b.password || ''), user.passwordHash)) return bad(res, 401, 'invalid credentials');
    const token = uid('ses'); db.sessions.push({ token, userId: user.id, createdAt: now() }); writeDb(db); setSession(res, token); return send(res, 200, { user: publicUser(user), token });
  }
  if (req.method === 'POST' && url.pathname === '/api/auth/logout') {
    const user = requireUser(req, res, db); if (!user) return;
    const token = parseCookies(req).session || req.headers.authorization?.replace(/^Bearer\s+/i, '');
    writeDb({ ...db, sessions: db.sessions.filter(s => s.token !== token) }); clearSession(res); return send(res, 200, { ok: true });
  }
  if (req.method === 'GET' && url.pathname === '/api/me') {
    const user = currentUser(req, db); return send(res, 200, { user: publicUser(user) });
  }
  if (req.method === 'PATCH' && url.pathname === '/api/me') {
    const user = requireUser(req, res, db); if (!user) return;
    const b = await body(req); user.displayName = String(b.displayName || user.displayName).trim(); user.bio = String(b.bio || '').slice(0, 240); user.updatedAt = now(); writeDb(db); return send(res, 200, { user: publicUser(user) });
  }
  if (req.method === 'GET' && url.pathname.startsWith('/api/users/')) {
    const username = url.pathname.split('/').pop();
    const user = db.users.find(u => u.username === username);
    if (!user) return bad(res, 404, 'user not found');
    return send(res, 200, { user: publicUser(user), followersCount: db.follows.filter(f => f.followingId === user.id).length, followingCount: db.follows.filter(f => f.followerId === user.id).length });
  }
  if (req.method === 'POST' && url.pathname.match(/^\/api\/users\/[^/]+\/follow$/)) {
    const me = requireUser(req, res, db); if (!me) return;
    const username = url.pathname.split('/')[3]; const target = db.users.find(u => u.username === username);
    if (!target) return bad(res, 404, 'user not found'); if (target.id === me.id) return bad(res, 400, 'cannot follow yourself');
    if (!db.follows.some(f => f.followerId === me.id && f.followingId === target.id)) db.follows.push({ id: uid('fol'), followerId: me.id, followingId: target.id, createdAt: now() });
    writeDb(db); return send(res, 200, { following: true });
  }
  if (req.method === 'DELETE' && url.pathname.match(/^\/api\/users\/[^/]+\/follow$/)) {
    const me = requireUser(req, res, db); if (!me) return;
    const username = url.pathname.split('/')[3]; const target = db.users.find(u => u.username === username);
    if (!target) return bad(res, 404, 'user not found');
    writeDb({ ...db, follows: db.follows.filter(f => !(f.followerId === me.id && f.followingId === target.id)) }); return send(res, 200, { following: false });
  }
  if (req.method === 'POST' && url.pathname === '/api/posts') {
    const me = requireUser(req, res, db); if (!me) return;
    const b = await body(req); const content = String(b.content || '').trim();
    if (!content || content.length > 500) return bad(res, 400, 'content required, max 500 chars');
    const post = { id: uid('pst'), authorId: me.id, content, createdAt: now(), updatedAt: now() };
    db.posts.push(post); writeDb(db); return send(res, 201, { post: enrichPost(db, post) });
  }
  if (req.method === 'PATCH' && url.pathname.match(/^\/api\/posts\/[^/]+$/)) {
    const me = requireUser(req, res, db); if (!me) return;
    const post = db.posts.find(p => p.id === url.pathname.split('/').pop()); if (!post) return bad(res, 404, 'post not found');
    if (post.authorId !== me.id) return bad(res, 403, 'only owner can edit');
    const b = await body(req); const content = String(b.content || '').trim(); if (!content || content.length > 500) return bad(res, 400, 'content required, max 500 chars');
    post.content = content; post.updatedAt = now(); writeDb(db); return send(res, 200, { post: enrichPost(db, post) });
  }
  if (req.method === 'DELETE' && url.pathname.match(/^\/api\/posts\/[^/]+$/)) {
    const me = requireUser(req, res, db); if (!me) return;
    const id = url.pathname.split('/').pop(); const post = db.posts.find(p => p.id === id); if (!post) return bad(res, 404, 'post not found');
    if (post.authorId !== me.id) return bad(res, 403, 'only owner can delete');
    writeDb({ ...db, posts: db.posts.filter(p => p.id !== id), comments: db.comments.filter(c => c.postId !== id), likes: db.likes.filter(l => l.postId !== id) }); return send(res, 200, { ok: true });
  }
  if (req.method === 'POST' && url.pathname.match(/^\/api\/posts\/[^/]+\/like$/)) {
    const me = requireUser(req, res, db); if (!me) return;
    const postId = url.pathname.split('/')[3]; if (!db.posts.some(p => p.id === postId)) return bad(res, 404, 'post not found');
    if (!db.likes.some(l => l.postId === postId && l.userId === me.id)) db.likes.push({ id: uid('lik'), postId, userId: me.id, createdAt: now() });
    writeDb(db); return send(res, 200, { liked: true });
  }
  if (req.method === 'DELETE' && url.pathname.match(/^\/api\/posts\/[^/]+\/like$/)) {
    const me = requireUser(req, res, db); if (!me) return;
    const postId = url.pathname.split('/')[3]; writeDb({ ...db, likes: db.likes.filter(l => !(l.postId === postId && l.userId === me.id)) }); return send(res, 200, { liked: false });
  }
  if (req.method === 'POST' && url.pathname.match(/^\/api\/posts\/[^/]+\/comments$/)) {
    const me = requireUser(req, res, db); if (!me) return;
    const postId = url.pathname.split('/')[3]; if (!db.posts.some(p => p.id === postId)) return bad(res, 404, 'post not found');
    const b = await body(req); const content = String(b.content || '').trim(); if (!content || content.length > 300) return bad(res, 400, 'comment required, max 300 chars');
    const comment = { id: uid('cmt'), postId, authorId: me.id, content, createdAt: now() }; db.comments.push(comment); writeDb(db); return send(res, 201, { comment });
  }
  if (req.method === 'GET' && url.pathname === '/api/feed') {
    const me = currentUser(req, db);
    const following = me ? db.follows.filter(f => f.followerId === me.id).map(f => f.followingId) : [];
    const visible = me ? new Set([me.id, ...following]) : null;
    const posts = db.posts.filter(p => !visible || visible.has(p.authorId)).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map(p => enrichPost(db, p));
    return send(res, 200, { posts });
  }
  return bad(res, 404, 'not found');
}

const server = http.createServer((req, res) => req.url.startsWith('/api/') ? api(req, res).catch(err => bad(res, 500, err.message)) : serveStatic(req, res));
server.listen(PORT, () => console.log(`FriendSpace MVP listening on http://localhost:${PORT}`));
export default server;
