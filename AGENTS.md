# Dashboard maintenance instructions

## Canonical target and access
Work only in `chadbray/weekly-board-d2898e38`, branch `main`. Website: https://chadbray.github.io/weekly-board-d2898e38/. Follow [CHATGPT-WORKFLOW.md](CHATGPT-WORKFLOW.md).

The owner approved retaining the current public/plaintext architecture on 9 October 2026. There is no access key or encryption required for current updates. Do not follow superseded encrypted-payload instructions. Do not create another dashboard, rotate keys, change visibility/collaborators, or introduce a private backend without separate authorization. Public readability is not permission to add secrets or sensitive personal information.

## Preserve data
`secure-calendar.js` is the source of truth, including existing runtime adjustments. Read current main before editing. Preserve all unrelated entries, order, unknown metadata, birthdays, people, settings and recurring exceptions. Do not restore cancelled items from history. Do not clean up existing duplicates without a request.

Before adding, search current effective events for matching person/date/time/title. An exact match is a no-op; a near match or concurrent edit needs reconciliation. Do not invent registration links or missing details. Use encrypted-helper commands only if the owner separately changes the architecture; they are retired here.

## Validation and concurrency
Run `node tools/calendar.mjs check`, `node --test tools/calendar.test.mjs`, and `git diff --check`. Event changes additionally require an explicit before/after comparison. See tools/README.md for a guard that limits changes to authorized one-time indices and append operations. Removals, recurrence edits and other changes need a tailored reviewed comparison.

Fetch immediately before writing. Use non-forced Git push or a connector write with the observed blob/branch SHA. If main changes, re-read and reapply the requested semantic edit to the new version; never overwrite with a stale complete file. Conflicting edits to the same event must stop. Do not auto-merge stale calendar files.

## Publishing and reporting
Commit only authorized paths using neutral messages without event details. Run checks before deployment. Confirm the Pages workflow for the exact commit, compare live assets against that commit, then verify requested dates and nearby dates, previous/next/Today and repeating-event exceptions. A green workflow alone is not confirmation of an event's visible correctness. State any check that could not be completed.

Instructions do not grant account access or tools. Never claim another ChatGPT account inherits this account's credentials. Do not ask for a key that the current dashboard does not use.
