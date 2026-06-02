# FriendSpace MVP (`clone-facebook` internal test)

Small social network MVP. `clone-facebook` is internal test name only. UI/product name is FriendSpace. No Facebook/Meta branding, logos, assets, copy, or identity used.

## Stack

- Node.js built-in HTTP server
- JSON file persistence at `data/db.json`
- Static HTML/CSS/JS frontend
- Dependency-free tests with Node `fetch`

## Run

```bash
cd clone-facebook
node src/server.js
```

Open:

```text
http://localhost:3000
```

Optional if `npm` exists:

```bash
npm start
```

## Test

```bash
cd clone-facebook
node tests/api.test.js
```

Optional if `npm` exists:

```bash
npm test
```

## API

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/me`
- `PATCH /api/me`
- `GET /api/users/:username`
- `POST /api/users/:username/follow`
- `DELETE /api/users/:username/follow`
- `GET /api/feed`
- `POST /api/posts`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`
- `POST /api/posts/:id/like`
- `DELETE /api/posts/:id/like`
- `POST /api/posts/:id/comments`

## Data model

`users`, `sessions`, `posts`, `comments`, `likes`, `follows` in `data/db.json`.

## Manual QA checklist

- Register two users.
- Login/logout works.
- Update profile display name and bio.
- Create post.
- Edit own post.
- Delete own post.
- Like/unlike post.
- Comment on post.
- Follow another user.
- Feed shows own posts and followed users' posts.
- UI usable on narrow/mobile viewport.
