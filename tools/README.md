# Offline calendar updates

Requires Node.js 20 or newer. No dependencies, account connection, network calls, or package installation. Run commands from this repository's root. The helper only changes the `SECURE_PAYLOAD` object in `secure-calendar.js`; it does not publish or push anything.

## Recommended workflow

Keep the private JSON in a local folder outside this checkout, outside other repositories, and preferably outside cloud-synced folders. Do not send the JSON or private URL/key in a commit, issue, log, or chat. Anyone holding the calendar's URL-fragment key can decrypt its public payload.

```sh
mkdir -p "$HOME/.private-calendar"
chmod 700 "$HOME/.private-calendar"
node tools/calendar.mjs check
node --test tools/calendar.test.mjs
node tools/calendar.mjs decrypt --out "$HOME/.private-calendar/calendar.json"
```

The last command asks for the AES-256 key with terminal echo disabled. Paste just the key, not the entire private calendar URL. Accepted forms: 43-character base64url, 44-character padded base64, or 64-character hexadecimal, all decoding to 32 bytes. Never put the key in command arguments. The helper will not print it or write it to a file.

Edit the private JSON in your editor. Keep the `people`, `once`, `birthdays`, `repeats`, and `settings` collections. Then:

```sh
node tools/calendar.mjs encrypt --in "$HOME/.private-calendar/calendar.json"
node tools/calendar.mjs check
node --test tools/calendar.test.mjs
git diff --check
git diff --stat
```

Encryption first authenticates and validates the existing payload with the supplied key. A wrong key stops the operation without changing the file; there is no key-rotation mode. A successful update retains that verified key, creates a fresh random 12-byte IV, and replaces only the encrypted envelope. The 16-byte GCM authentication tag is appended to the ciphertext. Runtime code remains byte-for-byte unchanged.

Review the changed paths before committing. Normally only `secure-calendar.js` changes for an event update. Remove the private JSON after you no longer need it; ordinary deletion does not promise secure erasure, particularly on SSDs or synced storage. The helper deliberately never deletes private input files for you.

Decrypt creates a new file with permissions `0600` and refuses to overwrite any existing path. To decrypt again, choose a new outside-checkout filename. Both commands reject plaintext paths inside the checkout, including resolved symlink targets; encrypt also rejects a symlink input file. A `--repo /absolute/path/to/checkout` option is available when running from elsewhere. The default repository is the parent directory of this `tools` folder.

## Optional noninteractive key input

Prefer the hidden prompt. For a pipe, add `--key-stdin`; redirected non-TTY stdin also works. This Bash example reads the key without echo or command-history exposure, then sends it on stdin:

```sh
IFS= read -r -s -p 'AES-256 key: ' CALENDAR_INPUT
printf '\n'
printf '%s' "$CALENDAR_INPUT" | node tools/calendar.mjs encrypt --in "$HOME/.private-calendar/calendar.json" --key-stdin
unset CALENDAR_INPUT
```

Alternatively, after the same hidden `read`, provide a temporary environment value for exactly one invocation:

```sh
CALENDAR_KEY="$CALENDAR_INPUT" node tools/calendar.mjs encrypt --in "$HOME/.private-calendar/calendar.json"
unset CALENDAR_INPUT
```

Do not use `set -x` or shell debugging around secret input. Environment values can be observable to other local processes, so stdin or the hidden prompt is preferable. Do not persist the key in `.env`, shell startup files, JSON, or a key file. The helper removes its environment copy before key use and never passes it to syntax-check subprocesses. JavaScript cannot guarantee that every in-memory string is erased.

## Validated data

- `people`: nonempty object of person IDs mapping to `{name, color}`, where `color` is `#RRGGBB`.
- `once`: event objects with `date` (`YYYY-MM-DD`), `title`, and a known `person` ID.
- Optional event fields: `start`/`end` (`HH:mm`), `timeLabel`, `note`, `location`, `linkedTitle` strings and `homeGame` boolean. `responsible`, when present, must match a known person ID or display name, case-insensitively.
- `birthdays`: objects with a `title` and real `MM-DD` in `md`, including leap-day birthdays.
- `repeats`: event fields plus inclusive `from`/`to` ISO dates and integer `weekday` from 0 (Sunday) to 6 (Saturday). Optional `excludedDates` is a unique list of valid ISO dates; optional `overrides` maps valid ISO dates to partial event objects, such as `{"2030-05-13":{"start":"11:00","end":"12:00"}}`.
- `settings`: object. Optional `holidays` maps ISO dates to string labels; optional `weather` has numeric `latitude`/`longitude`, a recognized `timezone`, and integer `forecastDays` from 1 to 16.

Validation checks structural fields, real dates, time formats, person references and repeat exceptions. It does not decide whether an event is correct, whether overnight timings are intended, or whether an exception belongs on a scheduled weekday. Unknown metadata is preserved. Invalid object keys associated with prototype pollution are rejected.

## What `check` does

`check` requires no key. It validates the encrypted envelope's shape and encodings, parses JavaScript files and executable inline HTML scripts for syntax, and rejects hard-coded dashboard access keys/private-link keys, `ONCE.push`, nonempty personal collection initializers, and common hard-coded event-object patterns in runtime code. It does not execute repository code. It skips helper/test/fixture directories so synthetic data in tests is not mistaken for leaked calendar data. No dependencies are downloaded.

This is a targeted guard, not a general-purpose privacy scanner or proof that no private data exists anywhere in the repository. It cannot authenticate ciphertext without a key, inspect Git history, or detect arbitrary secrets or every possible event representation. Decrypt/encrypt additionally authenticate the current payload and validate its schema. `.gitignore` guards common secret and plaintext filenames as defense in depth; already-tracked files are not protected by ignore rules.

Tests use only synthetic events and fake keys. Never replace their fixtures with private calendar data.
