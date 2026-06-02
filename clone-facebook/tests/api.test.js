import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';

const port = 3100;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['src/server.js'], { cwd: new URL('..', import.meta.url), env: { ...process.env, PORT: String(port), NODE_ENV: 'test' }, stdio: ['ignore', 'pipe', 'pipe'] });

function wait(ms){return new Promise(r=>setTimeout(r,ms));}
async function ready(){for(let i=0;i<50;i++){try{await fetch(base);return;}catch{await wait(100)}}throw new Error('server not ready');}
async function json(path,{method='GET',body,token}={}){const r=await fetch(base+path,{method,headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`}:{})},body:body?JSON.stringify(body):undefined});const data=await r.json();if(!r.ok)throw new Error(`${r.status} ${data.error}`);return data;}

try{
  await ready();
  await json('/api/test/reset',{method:'POST'});

  const alice = await json('/api/auth/register',{method:'POST',body:{username:'alice',displayName:'Alice',password:'secret1'}});
  const bob = await json('/api/auth/register',{method:'POST',body:{username:'bob',displayName:'Bob',password:'secret2'}});
  assert.ok(alice.token); assert.ok(bob.token);

  const login = await json('/api/auth/login',{method:'POST',body:{username:'alice',password:'secret1'}});
  assert.equal(login.user.username,'alice');

  const profile = await json('/api/me',{method:'PATCH',token:alice.token,body:{displayName:'Alice A',bio:'Builder'},});
  assert.equal(profile.user.bio,'Builder');

  const created = await json('/api/posts',{method:'POST',token:alice.token,body:{content:'Hello FriendSpace'}});
  assert.equal(created.post.content,'Hello FriendSpace');

  const edited = await json(`/api/posts/${created.post.id}`,{method:'PATCH',token:alice.token,body:{content:'Edited post'}});
  assert.equal(edited.post.content,'Edited post');

  await json(`/api/posts/${created.post.id}/like`,{method:'POST',token:bob.token});
  await json(`/api/posts/${created.post.id}/comments`,{method:'POST',token:bob.token,body:{content:'Nice update'}});
  await json('/api/users/alice/follow',{method:'POST',token:bob.token});

  const bobFeed = await json('/api/feed',{token:bob.token});
  assert.equal(bobFeed.posts.length,1);
  assert.equal(bobFeed.posts[0].likesCount,1);
  assert.equal(bobFeed.posts[0].comments[0].content,'Nice update');

  await json(`/api/posts/${created.post.id}/like`,{method:'DELETE',token:bob.token});
  const unliked = await json('/api/feed',{token:bob.token});
  assert.equal(unliked.posts[0].likesCount,0);

  await json(`/api/posts/${created.post.id}`,{method:'DELETE',token:alice.token});
  const empty = await json('/api/feed',{token:bob.token});
  assert.equal(empty.posts.length,0);

  await json('/api/auth/logout',{method:'POST',token:alice.token});
  console.log('PASS api MVP flow');
} finally {
  server.kill();
}
