# FriendSpace MVP Product Requirements

Internal project name: `clone-facebook`  
UI product name: `FriendSpace`

## Brand constraints

- Do not use Facebook, Meta, Instagram, WhatsApp, Messenger, or related branding.
- Do not use Facebook/Meta logos, icons, color marks, assets, UI copy, layout clones, slogans, or identity cues.
- Use original FriendSpace naming, copy, visual style, and assets.

## Objective

Build a runnable social network MVP where people can create accounts, maintain profiles, publish posts, follow others, view a feed, like posts, and comment on posts across responsive web layouts.

## Personas

1. **New member**
   - Wants quick signup, login, and basic profile setup.
   - Needs clear onboarding and safe defaults.

2. **Active poster**
   - Wants to share short text updates.
   - Needs visible post creation, edit/delete ownership controls if included, and feedback after publishing.

3. **Social reader**
   - Wants to follow people and browse recent updates.
   - Needs feed ordering, profile links, likes, and comments.

4. **QA evaluator**
   - Wants to verify MVP behavior quickly.
   - Needs deterministic flows, clear errors, and testable acceptance criteria.

## Core user stories

### Auth

- As visitor, I can register with name, email, and password so I can join FriendSpace.
- As member, I can log in and log out so my account stays private.
- As member, I see validation errors for invalid credentials or duplicate email.
- As logged-out visitor, I cannot create posts, like, comment, follow, or access protected member pages.

### Profile

- As member, I can view my profile so I can see my public info and posts.
- As member, I can update display name, bio, and optional avatar URL/image so my profile reflects me.
- As member, I can view another member profile so I can decide whether to follow them.
- As profile viewer, I can see follower/following counts and user posts.

### Posts

- As member, I can create text posts so I can share updates.
- As member, I can see my new post appear without page confusion.
- As member, I can delete my own posts so I control my content.
- As member, I cannot delete posts owned by others.

### Likes

- As member, I can like a post so I can react to it.
- As member, I can unlike a liked post so I can reverse my reaction.
- As viewer, I can see accurate like count per post.

### Comments

- As member, I can add a comment to a post so I can participate in discussion.
- As viewer, I can see comments tied to correct post.
- As member, I can delete my own comments.
- As member, I cannot delete comments owned by others.

### Feed

- As member, I can view a home feed so I can read recent posts.
- As member, I can see my posts and posts from followed members in reverse chronological order.
- As member, I can navigate from feed items to author profiles.
- As new member with no follows, I see useful empty state and suggested next action.

### Follow

- As member, I can follow another member so their posts appear in my feed.
- As member, I can unfollow someone so their posts no longer appear in my following-based feed.
- As member, I cannot follow myself.
- As profile viewer, I can see follow/unfollow state clearly.

### Responsive UI

- As mobile user, I can use all MVP features on narrow screens without horizontal scrolling.
- As desktop user, I can use all MVP features with clear layout and navigation.
- As keyboard user, I can reach main controls through keyboard navigation.

## MVP requirements

### Functional requirements

1. **Authentication**
   - Register, login, logout.
   - Persist authenticated session.
   - Validate required fields.
   - Protect member-only routes/actions.

2. **User profile**
   - Store display name, email, bio, avatar value, created timestamp.
   - Show public profile page.
   - Allow current member to edit own profile.
   - Show profile post list and social counts.

3. **Posts**
   - Create text-only posts.
   - Enforce non-empty content and reasonable max length.
   - Show author, timestamp, content, like count, comment count.
   - Allow owner deletion.

4. **Likes**
   - Toggle like/unlike per member per post.
   - Prevent duplicate likes from same member.
   - Update counts after action.

5. **Comments**
   - Create text comments on posts.
   - Enforce non-empty content and reasonable max length.
   - Show author, timestamp, content.
   - Allow owner deletion.

6. **Feed**
   - Home feed for authenticated members.
   - Include own posts and followed members' posts.
   - Sort newest first.
   - Show empty state when no posts available.

7. **Follow system**
   - Follow/unfollow other members.
   - Prevent self-follow and duplicate follows.
   - Use follow state to drive feed membership.

8. **Responsive UI**
   - Mobile, tablet, desktop layouts.
   - Persistent navigation to feed, profile, member discovery/search if included, and logout.
   - Clear loading, empty, success, and error states.

### Non-functional requirements

- Runnable MVP with local setup documented by engineering.
- No external brand dependency.
- Basic accessibility: labels, focus states, keyboard reachability, sufficient contrast.
- Basic security: password hashing, server-side authorization checks, no trust in client-only permissions.
- Basic data integrity: ownership checks, duplicate prevention for likes/follows.

## Non-goals

- Facebook/Meta visual recreation or brand parody.
- Private messaging.
- Groups, pages, events, marketplace, reels/stories, ads.
- Media upload beyond optional avatar value unless engineering chooses lightweight support.
- Advanced search, recommendations, notifications, moderation tooling.
- Production-scale infrastructure, payments, analytics, or third-party auth.
- Infinite scroll required; pagination or limited feed acceptable for MVP.

## Acceptance criteria

### Auth

- Given visitor submits valid registration data, account is created and user becomes logged in or can log in immediately.
- Given duplicate email registration, system shows clear error and does not create second account.
- Given valid credentials, user can log in and access feed.
- Given logout, protected pages/actions require login again.
- Given logged-out visitor attempts protected action, action fails and login path/message appears.

### Profile

- Given member edits display name/bio/avatar, profile page shows updated values.
- Given member views another profile, public info, posts, follower count, and following count display.
- Given member views own profile, edit affordance is available.
- Given member views someone else's profile, own-profile edit affordance is not available.

### Posts

- Given member creates non-empty post, post appears in feed/profile with author and timestamp.
- Given empty post submission, system blocks submission and shows validation message.
- Given owner deletes own post, post no longer appears in feed/profile.
- Given non-owner views post, delete control is absent or action is rejected server-side.

### Likes

- Given member likes unliked post, like count increases by one and state shows liked.
- Given member unlikes liked post, like count decreases by one and state shows unliked.
- Given repeated like attempts by same member, duplicate like is not created.

### Comments

- Given member comments with non-empty text, comment appears under correct post with author and timestamp.
- Given empty comment submission, system blocks submission and shows validation message.
- Given owner deletes own comment, comment disappears.
- Given non-owner tries comment deletion, action is unavailable or rejected server-side.

### Feed

- Given member follows another member, followed member's new posts appear in home feed.
- Given member unfollows another member, that member's posts no longer appear in following-based feed after refresh/reload.
- Given multiple posts, feed sorts newest first.
- Given no feed content, empty state explains what to do next.

### Follow

- Given member views other profile, follow action is available when not following.
- Given member follows profile, button/state changes to unfollow and counts update.
- Given member unfollows profile, button/state changes to follow and counts update.
- Given member views own profile, follow self action is unavailable and self-follow cannot be created.

### Responsive UI

- Given viewport around 375px width, core flows remain usable with no horizontal scrolling.
- Given desktop viewport, navigation and feed remain readable and controls visible.
- Given keyboard-only navigation, main controls can be focused and activated.

### Brand compliance

- Given product UI and repository assets are reviewed, no Facebook/Meta names, logos, slogans, copied UI copy, or proprietary assets appear except internal project name `clone-facebook` where required by task context.
- Given user-facing UI is reviewed, product name appears as `FriendSpace` and not Facebook/Meta.

## QA checklist seed

- [ ] Register new user with valid data.
- [ ] Attempt duplicate email registration.
- [ ] Log in and log out.
- [ ] Confirm protected pages/actions require authentication.
- [ ] Edit own profile and verify persistence.
- [ ] View another user's profile.
- [ ] Create valid post.
- [ ] Attempt empty post.
- [ ] Delete own post.
- [ ] Confirm non-owner cannot delete another user's post.
- [ ] Like and unlike post.
- [ ] Confirm duplicate like prevention.
- [ ] Add valid comment.
- [ ] Attempt empty comment.
- [ ] Delete own comment.
- [ ] Confirm non-owner cannot delete another user's comment.
- [ ] Follow and unfollow another member.
- [ ] Confirm self-follow is impossible.
- [ ] Confirm feed includes own and followed users' posts, newest first.
- [ ] Confirm empty feed state appears for new/isolated user.
- [ ] Test mobile viewport around 375px.
- [ ] Test desktop viewport.
- [ ] Test keyboard navigation for main controls.
- [ ] Review UI/assets/copy for no Facebook/Meta branding or identity reuse.
