#!/usr/bin/env node
/** Offline AES-256-GCM calendar maintenance. Never prints private payloads or keys. */
import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import { constants as fsConstants } from 'node:fs';
import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const MAX_BYTES = 8 * 1024 * 1024;
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const fail = message => { throw new Error(message); };
const assert = (condition, message) => { if (!condition) fail(message); };
const string = value => typeof value === 'string' && value.trim().length > 0;
const PRIVATE_COLLECTIONS = ['PEOPLE', 'ONCE', 'BIRTHDAYS', 'REPEATS', 'SETTINGS'];

export function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

/** Failures use structural labels, never private values or source excerpts. */
export function validatePayload(data) {
  assert(record(data), 'Payload must be an object.');
  const walk = value => {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      assert(!['__proto__', 'prototype', 'constructor'].includes(key), 'Unsafe object property in payload.');
      walk(child);
    }
  };
  walk(data);
  for (const key of ['people', 'once', 'birthdays', 'repeats', 'settings']) {
    assert(own(data, key), `Missing required ${key} collection.`);
  }
  assert(record(data.people) && Object.keys(data.people).length > 0, 'people must be a nonempty object.');
  const names = new Set();
  for (const [id, person] of Object.entries(data.people)) {
    assert(string(id) && record(person), 'Invalid person definition.');
    assert(string(person.name) && /^#[0-9a-f]{6}$/i.test(person.color), 'Each person needs a name and #RRGGBB color.');
    names.add(id.toLowerCase());
    names.add(person.name.toLowerCase());
  }
  const personRef = value => typeof value === 'string' && own(data.people, value);
  const event = (value, partial = false) => {
    assert(record(value), 'Each event or override must be an object.');
    if (!partial || own(value, 'title')) assert(string(value.title), 'An event title must be a nonempty string.');
    if (!partial || own(value, 'person')) assert(personRef(value.person), 'An event has an unknown person reference.');
    for (const field of ['start', 'end']) if (own(value, field)) {
      assert(typeof value[field] === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(value[field]), 'Event times must use HH:mm.');
    }
    for (const field of ['timeLabel', 'note', 'location', 'linkedTitle']) if (own(value, field)) {
      assert(typeof value[field] === 'string', 'Optional event text fields must be strings.');
    }
    if (own(value, 'homeGame')) assert(typeof value.homeGame === 'boolean', 'homeGame must be boolean.');
    if (own(value, 'responsible')) {
      assert(typeof value.responsible === 'string' && names.has(value.responsible.toLowerCase()), 'An event has an unknown responsible person.');
    }
    if (own(value, 'date')) assert(validDate(value.date), 'Event date must be a valid ISO date.');
  };
  for (const key of ['once', 'birthdays', 'repeats']) assert(Array.isArray(data[key]), `${key} must be an array.`);
  for (const value of data.once) {
    event(value);
    assert(validDate(value.date), 'One-time events require a valid ISO date.');
  }
  for (const value of data.birthdays) {
    assert(record(value) && string(value.title), 'Each birthday needs a title.');
    assert(typeof value.md === 'string' && /^\d{2}-\d{2}$/.test(value.md) && validDate(`2000-${value.md}`), 'Birthday md must be a valid MM-DD.');
    if (own(value, 'person')) assert(personRef(value.person), 'A birthday has an unknown person reference.');
  }
  for (const value of data.repeats) {
    event(value);
    assert(validDate(value.from) && validDate(value.to) && value.from <= value.to, 'Recurring events require an ordered ISO from/to range.');
    assert(Number.isInteger(value.weekday) && value.weekday >= 0 && value.weekday <= 6, 'Recurring weekday must be an integer from 0 to 6.');
    if (own(value, 'excludedDates')) {
      assert(Array.isArray(value.excludedDates) && value.excludedDates.every(validDate), 'excludedDates must be an ISO-date array.');
      assert(new Set(value.excludedDates).size === value.excludedDates.length, 'excludedDates must not contain duplicates.');
    }
    if (own(value, 'overrides')) {
      assert(record(value.overrides), 'overrides must be an object keyed by ISO dates.');
      for (const [date, override] of Object.entries(value.overrides)) {
        assert(validDate(date), 'An override key is not a valid ISO date.');
        event(override, true);
      }
    }
  }
  assert(record(data.settings), 'settings must be an object.');
  if (own(data.settings, 'holidays')) {
    assert(record(data.settings.holidays), 'holidays must be an object keyed by ISO dates.');
    for (const [date, label] of Object.entries(data.settings.holidays)) {
      assert(validDate(date) && typeof label === 'string', 'Each holiday needs an ISO date and a string label.');
    }
  }
  if (own(data.settings, 'weather')) {
    const weather = data.settings.weather;
    assert(record(weather), 'weather must be an object.');
    assert(Number.isFinite(weather.latitude) && weather.latitude >= -90 && weather.latitude <= 90, 'Invalid weather latitude.');
    assert(Number.isFinite(weather.longitude) && weather.longitude >= -180 && weather.longitude <= 180, 'Invalid weather longitude.');
    assert(string(weather.timezone), 'weather needs a timezone string.');
    try { new Intl.DateTimeFormat('en', { timeZone: weather.timezone }); } catch { fail('Invalid weather timezone.'); }
    assert(Number.isInteger(weather.forecastDays) && weather.forecastDays >= 1 && weather.forecastDays <= 16, 'forecastDays must be an integer from 1 to 16.');
  }
  return data;
}

function decodeBase64url(value, label) {
  assert(typeof value === 'string' && /^[A-Za-z0-9_-]+$/.test(value), `Invalid ${label} encoding.`);
  const decoded = Buffer.from(value, 'base64url');
  assert(decoded.toString('base64url') === value, `Noncanonical ${label} encoding.`);
  return decoded;
}

export function validateEnvelope(envelope) {
  assert(record(envelope) && Object.keys(envelope).sort().join(',') === 'algorithm,ciphertext,iv,version', 'Unexpected encrypted envelope shape.');
  assert(envelope.version === 1 && envelope.algorithm === 'AES-GCM', 'Unsupported envelope version or algorithm.');
  assert(decodeBase64url(envelope.iv, 'IV').length === 12, 'IV must contain 12 bytes.');
  assert(decodeBase64url(envelope.ciphertext, 'ciphertext').length > 16, 'Ciphertext must include encrypted content and a 16-byte authentication tag.');
  return envelope;
}

/** Parse only this small data literal; never evaluate repository JavaScript. */
export function extractEnvelope(source) {
  const code = withoutComments(source).replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g, value => ' '.repeat(value.length));
  const starts = new Set([...code.matchAll(/\bconst\s+SECURE_PAYLOAD\s*=\s*\{/g)].map(match => match.index));
  const matches = [...source.matchAll(/\bconst\s+SECURE_PAYLOAD\s*=\s*(\{[^{}]*\})\s*;/g)].filter(match => starts.has(match.index));
  assert(matches.length === 1, 'Expected exactly one const SECURE_PAYLOAD object declaration.');
  const match = matches[0];
  const literal = match[1];
  let position = 1;
  const result = Object.create(null);
  const whitespace = () => { while (/\s/.test(literal[position] || '') && position < literal.length) position++; };
  whitespace();
  while (literal[position] !== '}') {
    const property = /^(?:"([A-Za-z]+)"|'([A-Za-z]+)'|([A-Za-z]+))\s*:\s*(?:"([^"\\]*)"|'([^'\\]*)'|(\d+))/.exec(literal.slice(position));
    assert(property, 'Envelope must contain simple data properties only.');
    const key = property[1] ?? property[2] ?? property[3];
    assert(!own(result, key), 'Duplicate encrypted envelope property.');
    result[key] = property[4] ?? property[5] ?? Number(property[6]);
    position += property[0].length;
    whitespace();
    if (literal[position] === '}') break;
    assert(literal[position++] === ',', 'Invalid envelope property separator.');
    whitespace();
  }
  assert(position === literal.length - 1, 'Invalid encrypted envelope literal.');
  validateEnvelope(result);
  const start = match.index + match[0].indexOf('{');
  return { envelope: result, start, end: start + literal.length };
}

export function parseKey(value) {
  assert(typeof value === 'string', 'Supply an AES-256 key.');
  const text = value.trim();
  let key;
  if (/^[0-9a-f]{64}$/i.test(text)) key = Buffer.from(text, 'hex');
  else if (/^[A-Za-z0-9_-]{43}$/.test(text)) key = decodeBase64url(text, 'key');
  else if (/^[A-Za-z0-9+/]{43}=$/.test(text)) {
    key = Buffer.from(text, 'base64');
    assert(key.toString('base64') === text, 'Invalid key encoding.');
  } else fail('Key must be 32 bytes encoded as base64url, base64, or hexadecimal.');
  assert(key.length === 32, 'Key must contain exactly 32 bytes.');
  return key;
}

export function decryptEnvelope(envelope, key) {
  validateEnvelope(envelope);
  const encrypted = decodeBase64url(envelope.ciphertext, 'ciphertext');
  let plaintext;
  try {
    const decipher = createDecipheriv('aes-256-gcm', key, decodeBase64url(envelope.iv, 'IV'), { authTagLength: 16 });
    decipher.setAuthTag(encrypted.subarray(-16));
    plaintext = Buffer.concat([decipher.update(encrypted.subarray(0, -16)), decipher.final()]);
  } catch { fail('Key verification failed: the current payload could not be authenticated. No file was changed.'); }
  try {
    let value;
    try { value = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(plaintext)); }
    catch { fail('Authenticated payload is not valid UTF-8 JSON.'); }
    return validatePayload(value);
  } finally { plaintext.fill(0); }
}

export function encryptEnvelope(data, key) {
  validatePayload(data);
  const iv = randomBytes(12);
  const plaintext = Buffer.from(JSON.stringify(data), 'utf8');
  try {
    const cipher = createCipheriv('aes-256-gcm', key, iv, { authTagLength: 16 });
    const encrypted = Buffer.concat([cipher.update(plaintext), cipher.final(), cipher.getAuthTag()]);
    return { version: 1, algorithm: 'AES-GCM', iv: iv.toString('base64url'), ciphertext: encrypted.toString('base64url') };
  } finally { plaintext.fill(0); }
}

// Masks comments but preserves strings and byte offsets for conservative static checks.
function withoutComments(source) {
  return source.replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g,
    (match, quoted) => quoted || match.replace(/[^\n]/g, ' '));
}

function checkPrivateKeyLiterals(source) {
  assert(!/\bDASHBOARD_ACCESS_KEY\s*(?:=|:)\s*(?:"[^"\n]+"|'[^'\n]+'|`[^`]+`)/.test(source),
    'Nonempty hard-coded dashboard access key found in runtime.');
  assert(!/#(?:key|k)=[A-Za-z0-9_+/%=-]+/i.test(source),
    'Possible hard-coded private-link key found in runtime.');
}

function checkRuntimeData(source) {
  const clean = withoutComments(source);
  assert(!/\bONCE\s*\.\s*push\s*\(/i.test(clean), 'Unencrypted ONCE.push mutation found in runtime.');
  for (const name of PRIVATE_COLLECTIONS) {
    const initializers = new RegExp(`\\b${name}\\s*=\\s*([\\[{])`, 'gi');
    for (const match of clean.matchAll(initializers)) {
      const tail = clean.slice(match.index + match[0].length).trimStart();
      assert(tail.startsWith(match[1] === '[' ? ']' : '}'), 'Nonempty personal-data collection literal found in runtime.');
    }
  }
  assert(!/\b(?:title|person|responsible|linkedTitle)\s*:\s*['"][^'"]+['"][\s\S]{0,240}\b(?:date|from|md)\s*:\s*['"]\d{2,4}-\d{2}/i.test(clean)
    && !/\b(?:date|from|md)\s*:\s*['"]\d{2,4}-\d{2}[^'"]*['"][\s\S]{0,240}\b(?:title|person|responsible|linkedTitle)\s*:\s*['"][^'"]+['"]/i.test(clean),
  'Possible hard-coded personal event found in runtime.');
}

function checkSyntax(source, module = false) {
  const env = { ...process.env };
  delete env.CALENDAR_KEY;
  const result = spawnSync(process.execPath, ['--input-type', module ? 'module' : 'commonjs', '--check'],
    { input: source, encoding: 'utf8', maxBuffer: MAX_BYTES, env });
  assert(!result.error && result.status === 0, 'JavaScript syntax check failed. No source excerpts are printed.');
}

const SKIP_DIRS = new Set(['tools', 'test', 'tests', 'fixtures', 'node_modules', 'coverage', 'vendor']);
async function runtimeFiles(root, dir = root) {
  const files = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.isSymbolicLink()) continue;
    const filename = path.join(dir, entry.name);
    if (entry.isDirectory() && !SKIP_DIRS.has(entry.name)) files.push(...await runtimeFiles(root, filename));
    else if (entry.isFile() && /\.(?:html?|[cm]?js)$/i.test(entry.name)) files.push(filename);
  }
  return files;
}

async function readLimited(filename) {
  const stat = await fs.stat(filename);
  assert(stat.isFile() && stat.size <= MAX_BYTES, 'Expected a regular file no larger than 8 MiB.');
  return fs.readFile(filename, 'utf8');
}

export async function checkRepository(repo) {
  const root = await fs.realpath(repo);
  const securePath = path.join(root, 'secure-calendar.js');
  assert(!(await fs.lstat(securePath)).isSymbolicLink(), 'secure-calendar.js must not be a symbolic link.');
  const secure = await readLimited(securePath);
  const extracted = extractEnvelope(secure);
  const files = await runtimeFiles(root);
  assert(files.some(file => path.relative(root, file) === 'index.html'), 'Expected index.html at the repository root.');
  let scripts = 0;
  for (const file of files) {
    let source = file === securePath ? secure : await readLimited(file);
    if (file === securePath) source = source.slice(0, extracted.start) + '{}' + source.slice(extracted.end);
    checkPrivateKeyLiterals(source);
    if (/\.html?$/i.test(file)) {
      for (const match of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
        const attributes = match[1];
        if (/\bsrc\s*=/i.test(attributes)) continue;
        const typeMatch = /\btype\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(attributes);
        const type = (typeMatch?.[1] ?? typeMatch?.[2] ?? typeMatch?.[3] ?? '').toLowerCase();
        if (type && !['module', 'text/javascript', 'application/javascript'].includes(type)) continue;
        checkSyntax(match[2], type === 'module');
        checkRuntimeData(match[2]);
        scripts++;
      }
    } else {
      checkSyntax(source, file.endsWith('.mjs'));
      checkRuntimeData(source);
      scripts++;
    }
  }
  return { files: files.length, scripts };
}

function inside(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative));
}

async function privatePath(repo, filename, exists) {
  assert(filename && filename !== '-', 'A private JSON file path is required; stdout/stdin payloads are prohibited.');
  const requested = path.resolve(filename);
  assert(!inside(repo, requested), 'Plaintext paths must be outside the checkout.');
  const resolved = exists ? await fs.realpath(requested) : path.join(await fs.realpath(path.dirname(requested)), path.basename(requested));
  assert(!inside(repo, resolved), 'Plaintext paths must be outside the checkout, including symlink targets.');
  if (exists) assert((await fs.lstat(requested)).isFile(), 'Plaintext input must be a regular file, not a symlink.');
  return resolved;
}

async function readKey(useStdin) {
  if (process.env.CALENDAR_KEY !== undefined) {
    const value = process.env.CALENDAR_KEY;
    delete process.env.CALENDAR_KEY;
    assert(!useStdin, 'Choose either CALENDAR_KEY or stdin, not both.');
    return parseKey(value);
  }
  if (useStdin || !process.stdin.isTTY) {
    const chunks = [];
    let size = 0;
    for await (const chunk of process.stdin) {
      size += chunk.length;
      assert(size <= 256, 'Key input is too long.');
      chunks.push(chunk);
    }
    const raw = Buffer.concat(chunks);
    try { return parseKey(raw.toString('utf8')); } finally { raw.fill(0); chunks.forEach(chunk => chunk.fill(0)); }
  }
  process.stderr.write('AES-256 key (hidden): ');
  const input = process.stdin;
  const wasRaw = input.isRaw;
  input.setRawMode(true);
  input.resume();
  const raw = [];
  try {
    const value = await new Promise((resolve, reject) => {
      const finish = (error) => {
        input.removeListener('data', onData);
        input.removeListener('end', onEnd);
        input.removeListener('error', onError);
        error ? reject(error) : resolve(Buffer.from(raw).toString('utf8'));
      };
      const onEnd = () => finish(new Error('Key entry ended before submission.'));
      const onError = () => finish(new Error('Key entry failed.'));
      const onData = chunk => {
        for (const byte of chunk) {
          if (byte === 3 || byte === 4) return finish(new Error('Key entry cancelled.'));
          if (byte === 10 || byte === 13) return finish();
          if (byte === 127 || byte === 8) raw.pop();
          else if (byte >= 32 && byte <= 126) raw.push(byte);
          if (raw.length > 256) return finish(new Error('Key input is too long.'));
        }
      };
      input.on('data', onData);
      input.once('end', onEnd);
      input.once('error', onError);
    });
    return parseKey(value);
  } finally {
    raw.fill(0);
    input.setRawMode(wasRaw);
    input.pause();
    process.stderr.write('\n');
  }
}

function parseArgs(argv) {
  const [command, ...args] = argv;
  assert(['decrypt', 'encrypt', 'check'].includes(command), 'Use decrypt, encrypt, or check. See README for usage.');
  const parsed = { command, repo: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), keyStdin: false };
  const seen = new Set();
  for (let i = 0; i < args.length; i++) {
    const option = args[i];
    assert(['--repo', '--in', '--out', '--key-stdin'].includes(option) && !seen.has(option), 'Unknown or repeated command option. Keys must never be passed in command arguments.');
    seen.add(option);
    if (option === '--key-stdin') parsed.keyStdin = true;
    else {
      assert(args[i + 1] && !args[i + 1].startsWith('--'), 'A command option is missing its path.');
      parsed[option.slice(2)] = args[++i];
    }
  }
  assert(command === 'decrypt' ? parsed.out && !parsed.in : command === 'encrypt' ? parsed.in && !parsed.out : !parsed.in && !parsed.out && !parsed.keyStdin,
    'decrypt requires --out; encrypt requires --in; check takes only optional --repo.');
  return parsed;
}

export async function main(argv = process.argv.slice(2)) {
  assert(Number(process.versions.node.split('.')[0]) >= 20, 'Node.js 20 or newer is required.');
  const args = parseArgs(argv);
  const repo = await fs.realpath(args.repo);
  const result = await checkRepository(repo);
  if (args.command === 'check') {
    process.stdout.write(`OK: envelope, ${result.files} runtime files and ${result.scripts} scripts checked. No key needed.\n`);
    return;
  }
  const plaintextPath = await privatePath(repo, args.in || args.out, args.command === 'encrypt');
  const securePath = path.join(repo, 'secure-calendar.js');
  const source = await readLimited(securePath);
  const parsed = extractEnvelope(source);
  const key = await readKey(args.keyStdin);
  try {
    // Authentication of CURRENT data is mandatory even when replacing every event.
    // This prevents a mistyped key from silently rotating the published calendar key.
    const current = decryptEnvelope(parsed.envelope, key);
    if (args.command === 'decrypt') {
      const flags = fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | (fsConstants.O_NOFOLLOW || 0);
      const output = await fs.open(plaintextPath, flags, 0o600);
      try {
        await output.writeFile(`${JSON.stringify(current, null, 2)}\n`, 'utf8');
        await output.sync();
      } catch (error) {
        await output.close();
        await fs.unlink(plaintextPath).catch(() => {});
        throw error;
      }
      await output.close();
      process.stdout.write('Decrypted JSON saved outside the checkout with owner-only permissions. No plaintext printed.\n');
    } else {
      let next;
      try { next = JSON.parse(await readLimited(plaintextPath)); }
      catch (error) {
        if (error instanceof SyntaxError) fail('Private input is not valid JSON. No contents are printed.');
        throw error;
      }
      validatePayload(next);
      const replacement = JSON.stringify(encryptEnvelope(next, key));
      const updated = source.slice(0, parsed.start) + replacement + source.slice(parsed.end);
      checkSyntax(updated);
      assert(await readLimited(securePath) === source, 'Runtime changed during this operation. Retry from the latest checkout.');
      const temp = path.join(repo, `.calendar-envelope-${randomBytes(8).toString('hex')}.tmp`);
      try {
        await fs.writeFile(temp, updated, { flag: 'wx', mode: (await fs.stat(securePath)).mode & 0o777 });
        await fs.rename(temp, securePath);
      } finally { await fs.unlink(temp).catch(() => {}); }
      process.stdout.write('Encrypted envelope updated with a fresh IV and the verified existing key. Runtime code unchanged.\n');
    }
  } finally { key.fill(0); }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => {
    // OS/JSON parser errors can contain paths or excerpts; expose only safe messages.
    const safe = !error.code && error.constructor === Error;
    process.stderr.write(`Error: ${safe ? error.message : 'File operation or validation failed. Check paths, permissions and input structure.'}\n`);
    process.exitCode = 1;
  });
}
