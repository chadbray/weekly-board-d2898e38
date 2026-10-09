# Calendar validation for the current public dashboard

Node.js 20+; no dependencies. Run from the repository root:

```sh
node tools/calendar.mjs check
node --test tools/calendar.test.mjs
git diff --check
```

The current calendar is plaintext in `secure-calendar.js`. The old decrypt/encrypt commands are retired and explicitly fail. No access key is needed. `check` validates JavaScript syntax, inline scripts, essential navigation elements, the canonical asset reference and the effective calendar schema. It evaluates the checked-out calendar script in a JavaScript context without process, require, DOM or network bindings, with a timeout. This is not a security boundary for hostile code: review the source before running tools from an unfamiliar branch.

Output contains counts, a source SHA-256 and duplicate-group counts, never event text. Existing duplicate groups are reported and preserved. Validation does not decide whether an appointment is correct, whether an overnight time is intended, or whether all public content is appropriate.

## Preserve unrelated entries during one-time edits

Save the original `secure-calendar.js` outside the checkout before editing (for example using your editor). Its content is already public, but avoid creating unnecessary copies. Then:

```sh
node tools/calendar.mjs compare --before /absolute/path/to/original-script.js --allow-additions
node tools/calendar.mjs compare --before /absolute/path/to/original-script.js --allow-once 3,7
```

Use only the applicable command/options. Indices are zero-based positions in the effective `once` array of the original script, after its runtime adjustments. Do not authorize every index. The comparator rejects changes to unrelated collections/metadata and unapproved event indices, unexpected additions, removals/reordering and newly introduced duplicates. It preserves pre-existing duplicates. Adding and changing can combine the two options. It does not establish that the requested values are correct; inspect the intended changes separately.

With no edit options, `compare` proves the effective calendar is unchanged. This is required for instruction/check-only changes, together with a byte comparison of website assets. Recurrence changes, removals and other unsupported operations require a tailored reviewed semantic comparison, not disabling validation.

`check --expect-source-sha HASH` rejects a local source that changed since the printed hash was recorded. It does not replace a remote Git expected-SHA check. Before pushing, fetch/re-read main and reconcile any concurrent edit. Use a non-forced push or a connector's observed SHA guard.

The GitHub workflow runs validation and synthetic tests on PRs and main, and deploys only main after success. No tests include real appointments or keys. The live website still needs exact-commit asset comparison and requested-date/navigation verification.
