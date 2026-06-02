# Evidence: clone-facebook MVP

## Local runtime

Node version:

```text
v24.14.0
```

API test:

```text
cd clone-facebook && node tests/api.test.js
PASS api MVP flow
```

Server smoke test:

```text
cd clone-facebook && node src/server.js
FriendSpace MVP listening on http://localhost:3000
```

Feed endpoint:

```text
curl -sS http://127.0.0.1:3000/api/feed
{"posts":[]}
```

Frontend endpoint:

```text
curl -sS http://127.0.0.1:3000/ | head -c 120
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-sca
```

## Branding check

- Internal project name: clone-facebook.
- UI product name: FriendSpace.
- No Facebook/Meta logo, asset, UI copy, or identity used in app files.
