# Update this dashboard from ChatGPT

Upload this document to your own Family Calendar ChatGPT project, or save this instruction with its public link:

> Update my existing dashboard at https://github.com/chadbray/weekly-board-d2898e38 on main. Read AGENTS.md, README.md and CHATGPT-WORKFLOW.md from current main first. Use my own authorized GitHub connection. This dashboard currently uses public plaintext data and does not need an access key. Preserve all unrelated entries, avoid duplicates, handle concurrent edits, run the documented checks and verify the exact deployment and requested dates live. Do not create a replacement or change access settings.

## Setup once in your own account

1. Connect GitHub in the ChatGPT/Codex account you will use, with access to the existing repository. `josiebrayhub` already has collaborator write access; do not add a redundant grant. A particular session may still need its own connection enabled.
2. Confirm the session exposes a supported repository write action and can read current main. A search-only connection cannot publish. Do not paste a personal access token into chat.
3. Use a session with a local execution environment for the Node.js checks, or submit a branch/PR whose GitHub validation runs the same checks. For a cloud session without local execution, use the PR route and require its checks to pass before merging. Instructions cannot install missing tools or make one account inherit another's connection.
4. Save this document in that account's project. No dashboard key, private bookmark or new credential is needed. Do not save credentials in the project instructions.

## For each requested change

1. Fetch current main and record its SHA. Read the actual script and instructions; if the storage architecture has changed, reconcile the new workflow before writing.
2. Confirm person, date, start/end time, title and requested link/location. Keep missing information unknown. The owner has approved a public calendar, not unrestricted publication of sensitive information.
3. Inspect both canonical collections and existing runtime adjustments. Check effective events on the target date. Exact match: do nothing and report already present. Near match: establish whether it replaces an existing event. Do not append blindly.
4. Save the original script for comparison. Apply only the requested change. Preserve all unrelated data and date-specific exceptions. Review the exact diff; do not rewrite the entire file for a small change.
5. Run validation and synthetic tests. Use `compare` for supported one-time additions/edits, with only the explicitly approved indices. For removals or recurrence changes, build a tailored comparison proving all unrelated effective entries are unchanged. In a cloud-only session, include synthetic regression tests for the intended operation and inspect the PR validation result; do not claim to have run local checks.
6. Immediately re-read main before publishing. Use the expected blob/branch SHA or a non-forced Git push. If it changed, reapply the edit to the fresh version and rerun comparison. Stop if the same event has conflicting edits. An earlier file SHA does not make a multi-file update atomic; use a single Git commit/expected-parent update or an up-to-date PR.
7. Publish the authorized update. For a PR, inspect its latest diff and passing checks and ensure the base has not moved since comparison; repeat if it has. Use a neutral commit message without appointment details.
8. Wait for the exact commit's Pages run to succeed. Fetch live assets and compare with that commit, allowing only line-ending normalization. Open the dashboard and verify the changed and adjacent dates, previous/next and Today. Check birthdays and recurring exceptions when affected. If browser access is unavailable, disclose that visual verification remains incomplete; do not call it fully verified.
9. Return the same dashboard link, commit/run links, and a concise result. If blocked, name the missing capability once: account connection, write action, execution/check result, or browser verification. Do not request the obsolete access key or create another dashboard.

## No duplicate or lost-update shortcuts

Existing duplicates are not cleanup authorization. A retried addition must become a no-op. A green syntax/schema check does not prove every edit is intended. Source hashes guard stale local reads; Git expected-parent/blob checks guard remote races. Use both semantic comparison and concurrency checks.

Saving these instructions does not authorize any calendar additions. Each update must come from a specific user request.
