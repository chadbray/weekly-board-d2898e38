# Family dashboard: one canonical public calendar

- Repository: https://github.com/chadbray/weekly-board-d2898e38
- Branch: `main`
- Dashboard: https://chadbray.github.io/weekly-board-d2898e38/
- **Start here for ChatGPT updates:** [CHATGPT-WORKFLOW.md](CHATGPT-WORKFLOW.md)

The current dashboard is public and has no password or encryption. Anyone who can access the website or repository can read its calendar. The owner confirmed this setup on 9 October 2026. Do not ask for an old access key, restore encryption, change sharing or recreate the dashboard during routine updates. Do not add secrets or sensitive information merely because the calendar is public.

`secure-calendar.js` contains the canonical calendar collections and their existing runtime adjustments. `index.html` renders them. Preserve both the raw entries and their effective behavior; changing only an initial array can be counteracted by later adjustments. There is no separate database, write API, or automatic connection between ChatGPT accounts.

Use the requesting person's own authorized GitHub connection. Repository access and the tools available in that ChatGPT session are separate checks. The reusable workflow describes both, including what to do when a session cannot write or execute validation.

Run `node tools/calendar.mjs check` and `node --test tools/calendar.test.mjs` (Node.js 20+). For event edits, also compare the before/after calendar as described in [tools/README.md](tools/README.md). These are schema, preservation and syntax checks, not a privacy guarantee or substitute for verifying the requested dates live.

The Pages workflow validates before publishing `main`. Pull requests run validation without deploying. Publish only authorized changes, keep event details out of commit messages, and verify the exact deployed commit and live assets before reporting success. Existing duplicate entries are reported, not automatically deleted.
