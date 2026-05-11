# System Upgrades Log

Compounding improvements noticed during real work. One entry per task.

---

## 2026-05-11 - Portfolio plan kickoff
**Suggestion:** Create a reusable `references/brand-brief.md` template — a one-page questionnaire (goal, vibe, sections, branding state, content state, contact method, blog choice) that any future project can fill in once before kickoff.
**Why:** I had to ask 8 discovery questions across 2 rounds before I could give a real plan. Most of those questions repeat for any new site build.
**Impact:** Cuts kickoff from ~15 min of back-and-forth to a single file paste, and forces clarity before any code gets written.

---

## 2026-05-11 - Full site build (Phase 1–7)
**Suggestion:** Add a `.env.local.example` file to the repo with all required environment variable keys (no values) and comments explaining where to get each one.
**Why:** The Resend API key setup is a blocker for the contact form — without a clear example file, it's easy to forget which variables are needed when deploying to Vercel or onboarding on a new machine.
**Impact:** Zero-friction environment setup on any machine; prevents "form not working" issues post-deploy.

---

## 2026-05-12 - Animation upgrade (cursor, video, char reveal)
**Suggestion:** Keep a `/public/README-assets.md` that lists every expected asset file path, format, and dimension — so when you hand off photos/videos, you know exactly where to drop them and what size they should be.
**Why:** The hero video slot is `hero-video.mp4` and photo is `hero-photo.jpg` — easy to forget. Without a spec file, the wrong format or wrong path causes silent failures (video just doesn't play, photo doesn't show).
**Impact:** Saves a round-trip of "why isn't my photo showing?" when assets are added later.
