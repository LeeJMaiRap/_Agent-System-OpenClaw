# Social Network MVP Architecture

## Goal

Build runnable local social network MVP with no production deploy. Avoid Facebook/Meta branding. Focus on core flows:

- Register, login, logout
- View own profile and other profiles
- Create text posts
- Show home feed
- Comment on posts
- React/like posts
- Add/remove friends or follows
- Basic search by display name

## Recommended Stack

Use simple full-stack Node app:

- Runtime: Node.js 20+
- Server: Express
- Database: SQLite
- SQLite driver: better-sqlite3 or sqlite3
- Auth/session: express-session with SQLite session store
- Password hashing: bcrypt
- Frontend: static HTML/CSS/vanilla JS served by Express
- Tests: Node test runner or Vitest + Supertest
- Dev tooling: nodemon optional

Why this stack:

- Single local process
- No external services
- SQLite file easy to reset
- Static frontend fast to implement
- Express routes easy to test
- Session auth simpler than JWT for local browser app

## Folder Structure

```text
clone-facebook/
  package.json
  README.md
  .gitignore
  data/
    app.db              # created at runtime, not committed
  src/
    server.js           # app bootstrap
    app.js              # express app setup
    db.js               # SQLite connection
    schema.sql          # database schema
    seed.js             # optional sample users/posts
    middleware/
      auth.js           # requireAuth, currentUser
    routes/
      auth.js
      users.js
      posts.js
      comments.js
      reactions.js
      relationships.js
      search.js
    services/
      authService.js
      feedService.js
      userService.js
      postService.js
    public/
      index.html
      login.html
      register.html
      profile.html
      app.js
      styles.css
  tests/
    auth.test.js
    posts.test.js
    feed.test.js
    relationships.test.js
```

Alternative for smallest MVP: skip `services/` and keep route handlers direct. Add services only when logic repeats.

## Server Architecture

Express app responsibilities:

1. Serve static frontend from `src/public`.
2. Parse JSON and form bodies.
3. Manage sessions with secure local defaults.
4. Mount API routes under `/api`.
5. Provide consistent error responses.

Recommended middleware:

- `express.json()`
- `express.urlencoded({ extended: false })`
- `express-session`
- SQLite-backed session store if available; memory store acceptable for short local MVP, but note limitation
- `currentUser` middleware that loads `req.user` from session user id

## Auth Approach

Use cookie session auth.

Flow:

1. `POST /api/auth/register` creates user after validation.
2. Password hashed with bcrypt.
3. Server stores `req.session.userId = user.id` after register/login.
4. Protected routes use `requireAuth`.
5. `POST /api/auth/logout` destroys session.

Validation rules:

- Email required, unique, lowercased
- Password minimum 8 chars
- Display name required, 2-80 chars
- Reject duplicate email
- Never return password hash

Local session config:

```js
cookie: {
  httpOnly: true,
  sameSite: 'lax',
  secure: false
}
```

## API Routes

### Auth

- `POST /api/auth/register`
  - body: `{ email, password, displayName }`
  - returns: current user
- `POST /api/auth/login`
  - body: `{ email, password }`
  - returns: current user
- `POST /api/auth/logout`
  - returns: `{ ok: true }`
- `GET /api/auth/me`
  - returns: current user or `null`

### Users

- `GET /api/users/:id`
  - profile data, counts, relationship status
- `PATCH /api/users/me`
  - update display name, bio, avatar URL optional

### Posts

- `POST /api/posts`
  - protected
  - body: `{ body }`
  - creates text post
- `GET /api/posts/:id`
  - post detail with author, counts, comments
- `DELETE /api/posts/:id`
  - owner only
- `GET /api/feed`
  - protected
  - returns own posts + accepted friends/following posts ordered newest first
- `GET /api/users/:id/posts`
  - profile timeline

### Comments

- `POST /api/posts/:id/comments`
  - protected
  - body: `{ body }`
- `DELETE /api/comments/:id`
  - owner or post owner

### Reactions

- `PUT /api/posts/:id/reaction`
  - protected
  - adds like reaction
- `DELETE /api/posts/:id/reaction`
  - protected
  - removes like reaction

### Relationships

Pick one model for MVP. Recommended: friend requests because closer to classic social network.

- `POST /api/users/:id/friend-request`
  - creates pending request
- `POST /api/friend-requests/:id/accept`
  - receiver accepts
- `POST /api/friend-requests/:id/reject`
  - receiver rejects
- `DELETE /api/users/:id/friend`
  - unfriend
- `GET /api/friend-requests`
  - incoming pending requests

Simpler alternative: follow/unfollow only. If schedule tight, use follows instead of friend requests.

### Search

- `GET /api/search/users?q=term`
  - returns matching users by display name/email prefix, limited to 20

## Database Schema

SQLite schema:

```sql
PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  display_name TEXT NOT NULL,
  bio TEXT NOT NULL DEFAULT '',
  avatar_url TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE reactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  type TEXT NOT NULL DEFAULT 'like',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (post_id, user_id, type),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE friend_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  requester_id INTEGER NOT NULL,
  receiver_id INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (requester_id, receiver_id),
  CHECK (requester_id <> receiver_id),
  CHECK (status IN ('pending', 'accepted', 'rejected')),
  FOREIGN KEY (requester_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_posts_user_created ON posts(user_id, created_at DESC);
CREATE INDEX idx_comments_post_created ON comments(post_id, created_at ASC);
CREATE INDEX idx_reactions_post ON reactions(post_id);
CREATE INDEX idx_friend_requests_receiver_status ON friend_requests(receiver_id, status);
CREATE INDEX idx_friend_requests_requester_status ON friend_requests(requester_id, status);
CREATE INDEX idx_users_display_name ON users(display_name);
```

Friend lookup rule:

```sql
-- accepted friendship exists where either direction matches
status = 'accepted'
AND (
  (requester_id = ? AND receiver_id = ?)
  OR (requester_id = ? AND receiver_id = ?)
)
```

Feed query can select posts from:

- current user
- users with accepted friendship in either direction

## Frontend Pages

Keep frontend static and API-driven.

Pages:

- `register.html`: account creation
- `login.html`: login form
- `index.html`: feed, composer, friend requests
- `profile.html?id=123`: profile/timeline

Shared `app.js` responsibilities:

- Fetch `/api/auth/me` on page load
- Redirect unauthenticated users from protected pages
- Submit forms with `fetch`
- Render posts, comments, likes, friend actions
- Show simple errors inline

CSS can stay one file. Use neutral names and text like "Social MVP", not Facebook-like branding.

## Test Approach

Use API tests first. Frontend can be manually smoke-tested.

Recommended tests:

### Auth tests

- register creates user and session
- duplicate email rejected
- login succeeds with valid password
- login fails with wrong password
- logout clears session

### Post/feed tests

- unauthenticated post create rejected
- authenticated user creates post
- owner can delete own post
- non-owner cannot delete post
- feed shows own posts
- feed shows accepted friends' posts
- feed hides unrelated users' posts

### Comment/reaction tests

- user comments on visible post
- user likes post once
- duplicate like prevented by unique constraint
- unlike removes reaction

### Relationship tests

- user cannot friend self
- request creates pending row
- receiver accepts request
- accepted users see each other in feed
- unfriend removes or updates relationship

Test database:

- Use temporary SQLite file per test run, or `:memory:` if schema initialization supports it.
- Reset schema before each test file.
- Use Supertest agent to preserve cookies across requests.

## Local Run Plan

Commands should be simple:

```bash
npm install
npm run db:init
npm run seed
npm run dev
npm test
```

Suggested scripts:

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js",
    "db:init": "node src/db-init.js",
    "seed": "node src/seed.js",
    "test": "node --test"
  }
}
```

## Implementation Order

1. Create Express app and health route.
2. Add SQLite connection and schema init.
3. Build auth register/login/logout/me.
4. Build static pages for login/register/feed.
5. Add posts and feed.
6. Add profile pages.
7. Add comments and likes.
8. Add friend requests.
9. Add search.
10. Add tests and seed data.

## Risks and Mitigations

- Scope creep: keep MVP text-only; no image upload.
- Auth bugs: use bcrypt and server sessions; never store plaintext passwords.
- Session store limitation: memory sessions vanish on restart; acceptable for local MVP, or use SQLite session store.
- Feed complexity: start with own posts only, then add accepted friends.
- Relationship complexity: if friend requests slow work, switch to follow/unfollow.
- Frontend complexity: avoid framework; use small render functions and forms.
- SQLite locking: fine for local MVP; keep writes short.
- Content moderation/privacy: not required for local MVP, but avoid public deploy.
- Brand/legal issue: use generic product names and neutral UI.

## Final Recommendation

Use Node/Express/SQLite with cookie sessions and static vanilla JS frontend. Implement friend-request social graph if time allows; otherwise use follow/unfollow. Keep data model small, text-only, and API-tested with Supertest. This gives fastest path to runnable local social network MVP in workspace.
