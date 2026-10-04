# Dashboard maintenance instructions

## Canonical target

Work only in `chadbray/weekly-board-d2898e38`, branch `main`. This is the one active family dashboard. Do not recreate or update retired repositories or introduce another view or source copy.

## Confidentiality and source of truth

- This repository is public. Treat all family information and keys as confidential.
- All private content belongs in the encrypted `SECURE_PAYLOAD` in `secure-calendar.js`. `index.html` is presentation only; runtime logic must be generic.
- Never add `ONCE.push(...)` calendar content, names, appointments, dates, locations, private URLs, or family-specific exceptions to public HTML, scripts, workflows, documentation, issues, commits, or logs.
- Obtain the existing key only through an authorized private local flow. Never fetch a URL containing it or send it to any service. Preserve it; do not rotate or replace it as part of routine updates.
- Use `tools/calendar.mjs` to decrypt to a temporary file outside this checkout and encrypt the edited data back. Never commit that temporary file. Clean it up after verification.
- If the key is unavailable or invalid, pause the data update. Do not bypass encryption with plaintext additions.

## Data changes

- Preserve unrelated entries, event order, birthdays, people and settings.
- Preserve existing recurring-event exceptions. Use encrypted repeat `excludedDates` and `overrides` rather than hard-coded runtime conditions.
- Do not restore old cancelled or superseded events from Git history without an explicit request.
- `start`/`end` are 24-hour `HH:mm` times; `date`, `from`, `to`, and exception keys use `YYYY-MM-DD`; weekdays are Sunday `0` through Saturday `6`.
- Keep times, labels, locations and adult responsibility exactly as requested. Unknown information remains unknown.

## Verification and publishing

Run `node tools/calendar.mjs check` and `node --test tools/calendar.test.mjs` before publishing. Verify the effective events on changed dates and nearby recurring dates, rather than checking counts alone. Check navigation, Today, and the no-key/invalid-key unlock states when UI/runtime changes.

Use a normal, recoverable commit and a non-forced update from the latest branch head. Publishing must be authorized. Confirm the exact commit's Pages run and the live files before reporting deployment success. Explain any checks not run.

Do not delete repositories, rewrite history, change repository visibility, rotate credentials, or change sharing as routine cleanup. These require separate authorization. Current-file removal does not remove historical public exposure.
