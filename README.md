# Family dashboard — canonical repository

This is the **only active dashboard and the only repository to update**:

- Repository: [chadbray/weekly-board-d2898e38](https://github.com/chadbray/weekly-board-d2898e38)
- Branch: `main`
- Website: [open the dashboard](https://chadbray.github.io/weekly-board-d2898e38/)

Keep using your existing private bookmark, including its access-key fragment. The plain website URL opens the unlock screen. Retired copies are not sources for new updates.

## Ask ChatGPT to update it

> Update my existing family dashboard in chadbray/weekly-board-d2898e38, branch main. Read AGENTS.md and README.md first. Preserve the existing private link, update the encrypted calendar, and verify the Pages deployment. Do not create another dashboard or add event details to the public HTML.

An authorized maintainer needs the existing key locally to read or change calendar content. The key is not stored in this repository. If it is unavailable, stop rather than adding plaintext events or creating a replacement key.

## One source of truth

| File | Purpose |
| --- | --- |
| `secure-calendar.js` | Generic runtime and the single AES-256-GCM encrypted payload. All people, events, birthdays, repeating events, exceptions, locations and calendar settings belong inside that payload. |
| `index.html` | Mobile dashboard layout and presentation only. No calendar additions or private values. |
| `tools/calendar.mjs` | Offline decrypt/edit/encrypt helper; requires Node.js 20 or later. |
| `tools/calendar.test.mjs` | Synthetic regression tests with no real calendar data. |
| `.github/workflows/pages.yml` | Checks and publishes the website from `main`. |
| `robots.txt`, `.nojekyll` | Static hosting support. |

There are no one-off event workflows, trigger files, other live views, or separate plaintext source repository.

## Safe maintenance

1. Read `AGENTS.md`. Start from the latest `main` and keep a recoverable Git commit.
2. Decrypt to a temporary file **outside this checkout**, edit only the requested data, and encrypt back using the same key. See `tools/README.md` for commands and key input options.
3. Keep date-specific changes in the encrypted data: `excludedDates` suppresses a repeating event on listed dates; `overrides` changes that repeat on a specific ISO date. Do not encode personal exceptions in JavaScript logic.
4. Run `node tools/calendar.mjs check` and `node --test tools/calendar.test.mjs`. Compare the effective calendar on changed dates, adjacent dates, birthdays, and repeating-event exceptions. An encrypted round trip alone is not enough.
5. Commit only the public shell, helper/tests, documentation, and encrypted payload. Never commit decrypted JSON, a full private link, an access key, `.env` files, or event text in a commit message or workflow.
6. Push the authorized update to `main`, confirm the exact commit's Pages workflow succeeds, then verify the published files and unlock behavior. Delete the temporary plaintext file when finished.

## Access and privacy

This repository and its GitHub Pages shell are public. Calendar content is encrypted in the browser using a key from the private link's URL fragment. It is a shared-key design, not an account login restricted to named people: anyone with the complete private link can unlock it. Do not forward it beyond authorized users.

The current-tree checks help prevent accidental plaintext additions. They do not erase or audit historical Git revisions, old workflow logs or external copies. Search-engine directives are not access control.
