import test from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { checkRepository, decryptEnvelope, encryptEnvelope, extractEnvelope, parseKey, validateEnvelope, validatePayload } from './calendar.mjs';

// Only synthetic fixtures and fake keys. Never copy a real calendar into this suite.
const KEY = Buffer.alloc(32, 0xa7);
const OTHER_KEY = Buffer.alloc(32, 0xb8);
const tool = fileURLToPath(new URL('./calendar.mjs', import.meta.url));
const fixture = () => ({
  people: { adult: { name: 'Example Adult', color: '#123ABC' }, family: { name: 'Example Group', color: '#ABC123' } },
  once: [{ date: '2030-05-11', title: 'Synthetic appointment', person: 'adult', start: '09:00', end: '10:00', responsible: 'example adult' }],
  birthdays: [{ md: '02-29', title: 'Synthetic birthday' }],
  repeats: [{ title: 'Synthetic recurring event', person: 'adult', from: '2030-01-01', to: '2030-12-31', weekday: 1, start: '10:00', excludedDates: ['2030-05-06'], overrides: { '2030-05-13': { start: '11:00', end: '12:00' } } }],
  settings: { holidays: { '2030-01-01': 'Synthetic holiday' }, weather: { latitude: 0, longitude: 0, timezone: 'UTC', forecastDays: 7 } }
});
const prefix = '// Generic runtime only.\n';
const suffix = '\nlet PEOPLE={},ONCE=[],BIRTHDAYS=[],REPEATS=[],SETTINGS={};\n';
const runtime = data => `${prefix}const SECURE_PAYLOAD=${JSON.stringify(encryptEnvelope(data, KEY))};${suffix}`;
async function setup(t) {
  const base = await fs.mkdtemp(path.join(path.dirname(tool), '..', '.calendar-tests-'));
  const repo = path.join(base, 'repo');
  const privateDir = path.join(base, 'private');
  await fs.mkdir(repo);
  await fs.mkdir(privateDir, { mode: 0o700 });
  await fs.writeFile(path.join(repo, 'secure-calendar.js'), runtime(fixture()));
  await fs.writeFile(path.join(repo, 'index.html'), '<!doctype html><script src="secure-calendar.js"></script><script>const greeting = "Calendar";</script>');
  t.after(() => fs.rm(base, { recursive: true, force: true }));
  const run = (args, options = {}) => {
    const env = { ...process.env };
    delete env.CALENDAR_KEY;
    if (options.envKey) env.CALENDAR_KEY = options.envKey;
    return spawnSync(process.execPath, [tool, ...args, '--repo', repo], { encoding: 'utf8', input: options.key ?? KEY.toString('base64url'), env });
  };
  return { base, repo, privateDir, run };
}

test('AES-GCM round trip, 12-byte random IV, appended 16-byte tag', () => {
  const data = fixture();
  const one = encryptEnvelope(data, KEY);
  const two = encryptEnvelope(data, KEY);
  assert.notEqual(one.iv, two.iv);
  assert.equal(Buffer.from(one.iv, 'base64url').length, 12);
  assert.equal(Buffer.from(one.ciphertext, 'base64url').length, Buffer.byteLength(JSON.stringify(data)) + 16);
  assert.deepEqual(decryptEnvelope(one, KEY), data);
  assert.throws(() => decryptEnvelope(one, OTHER_KEY), /authenticated/);
  const bytes = Buffer.from(one.ciphertext, 'base64url'); bytes[0] ^= 1;
  assert.throws(() => decryptEnvelope({ ...one, ciphertext: bytes.toString('base64url') }, KEY), /authenticated/);
});

test('only 256-bit canonical key formats accepted', () => {
  for (const encoding of ['base64url', 'base64', 'hex']) assert.deepEqual(parseKey(KEY.toString(encoding)), KEY);
  for (const invalid of ['short', 'a'.repeat(42), 'a'.repeat(66), 'https://example.test/#secret']) assert.throws(() => parseKey(invalid));
});

test('envelope parser accepts simple JS object without evaluating code', () => {
  const envelope = encryptEnvelope(fixture(), KEY);
  const source = `const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'${envelope.iv}',ciphertext:'${envelope.ciphertext}'};`;
  assert.deepEqual({ ...extractEnvelope(source).envelope }, envelope);
  assert.throws(() => extractEnvelope(source + source), /exactly one/);
  assert.throws(() => extractEnvelope('// ' + source), /exactly one/);
  assert.throws(() => extractEnvelope('/* ' + source + ' */'), /exactly one/);
  assert.throws(() => extractEnvelope(JSON.stringify(source)), /exactly one/);
  assert.throws(() => extractEnvelope(source.replace('version:1', 'version:(process.exit())')));
  assert.throws(() => extractEnvelope(source.replace('version:1', 'version:1,version:1')), /Duplicate/);
  assert.throws(() => validateEnvelope({ ...envelope, iv: 'bad' }));
  assert.throws(() => validateEnvelope({ ...envelope, extra: true }));
});

test('schema rejects invalid dates, times, people, exceptions and settings without printing private values', () => {
  assert.equal(validatePayload(fixture()).once.length, 1);
  const edits = [
    d => { d.once[0].date = '2030-02-30'; }, d => { d.once[0].start = '24:00'; },
    d => { d.once[0].person = 'absent'; }, d => { d.once[0].responsible = 'absent'; },
    d => { d.birthdays[0].md = '02-30'; }, d => { d.repeats[0].weekday = 7; },
    d => { d.repeats[0].from = '2031-01-01'; }, d => { d.repeats[0].excludedDates = ['bad']; },
    d => { d.repeats[0].excludedDates = ['2030-01-01', '2030-01-01']; },
    d => { d.repeats[0].overrides = { '2030-02-30': {} }; },
    d => { d.repeats[0].overrides['2030-05-13'].person = 'absent'; },
    d => { d.repeats[0].overrides['2030-05-13'].start = '25:00'; },
    d => { d.settings.weather.latitude = 91; }, d => { d.settings.weather.timezone = 'Invalid/Zone'; },
    d => { d.settings.holidays = { 'bad-date': 'Synthetic' }; }
  ];
  for (const edit of edits) { const data = fixture(); edit(data); assert.throws(() => validatePayload(data)); }
  const poison = fixture(); poison.settings = JSON.parse('{"__proto__":{}}');
  assert.throws(() => validatePayload(poison), /Unsafe/);
});

test('check validates runtime and inline syntax, skips helper/test sources', async t => {
  const { repo, run } = await setup(t);
  await fs.mkdir(path.join(repo, 'tools'));
  await fs.writeFile(path.join(repo, 'tools', 'calendar.test.mjs'), 'ONCE.push({date:"2030-01-01",title:"Synthetic"}); invalid syntax !!!');
  const result = run(['check']);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /No key needed/);
  await fs.appendFile(path.join(repo, 'index.html'), '<script>function broken( {</script>');
  await assert.rejects(checkRepository(repo), /syntax/);
});

test('check rejects plaintext collection literals, inline pushes and event objects', async t => {
  const { repo } = await setup(t);
  for (const script of [
    'ONCE.push({title:"Synthetic"});',
    'let ONCE=[{title:"Synthetic"}];',
    'const extra={date:"2030-01-01",title:"Synthetic"};'
  ]) {
    await fs.writeFile(path.join(repo, 'index.html'), `<script>${script}</script>`);
    await assert.rejects(checkRepository(repo), /Unencrypted|personal/);
  }
});

test('CLI decrypt writes only outside checkout with restrictive mode and never overwrites', async t => {
  const { repo, privateDir, run } = await setup(t);
  const output = path.join(privateDir, 'calendar.json');
  const result = run(['decrypt', '--out', output, '--key-stdin']);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(await fs.readFile(output, 'utf8')), fixture());
  assert.equal((await fs.stat(output)).mode & 0o777, 0o600);
  assert.doesNotMatch(result.stdout + result.stderr, /Synthetic appointment|Example Adult/);
  assert.equal(run(['decrypt', '--out', output]).status, 1);
  assert.equal(run(['decrypt', '--out', path.join(repo, 'leak.json')]).status, 1);
  await fs.symlink(repo, path.join(privateDir, 'checkout-link'));
  assert.equal(run(['decrypt', '--out', path.join(privateDir, 'checkout-link', 'leak.json')]).status, 1);
  await assert.rejects(fs.stat(path.join(repo, 'leak.json')), { code: 'ENOENT' });
});

test('CLI encrypt authenticates current key first, preserves all runtime bytes, uses fresh IV', async t => {
  const { repo, privateDir, run } = await setup(t);
  const secure = path.join(repo, 'secure-calendar.js');
  const input = path.join(privateDir, 'edited.json');
  const changed = fixture(); changed.once[0].title = 'Different synthetic appointment';
  await fs.writeFile(input, JSON.stringify(changed));
  const before = await fs.readFile(secure, 'utf8');
  const rejected = run(['encrypt', '--in', input], { key: OTHER_KEY.toString('base64url') });
  assert.equal(rejected.status, 1);
  assert.match(rejected.stderr, /Key verification failed/);
  assert.equal(await fs.readFile(secure, 'utf8'), before);
  const result = run(['encrypt', '--in', input, '--key-stdin']);
  assert.equal(result.status, 0, result.stderr);
  const after = await fs.readFile(secure, 'utf8');
  const old = extractEnvelope(before); const updated = extractEnvelope(after);
  assert.equal(before.slice(0, old.start), after.slice(0, updated.start));
  assert.equal(before.slice(old.end), after.slice(updated.end));
  assert.notEqual(old.envelope.iv, updated.envelope.iv);
  assert.deepEqual(decryptEnvelope(updated.envelope, KEY), changed);
  assert.doesNotMatch(result.stdout + result.stderr + after, /Different synthetic|Example Adult/);
});

test('CLI rejects plaintext input in checkout or through symlink, malformed JSON, CLI key flags', async t => {
  const { repo, privateDir, run } = await setup(t);
  const inside = path.join(repo, 'calendar.json');
  await fs.writeFile(inside, JSON.stringify(fixture()));
  assert.equal(run(['encrypt', '--in', inside]).status, 1);
  const link = path.join(privateDir, 'inside.json'); await fs.symlink(inside, link);
  assert.equal(run(['encrypt', '--in', link]).status, 1);
  const bad = path.join(privateDir, 'bad.json'); await fs.writeFile(bad, '{"Sensitive sample text');
  const rejected = run(['encrypt', '--in', bad]);
  assert.equal(rejected.status, 1);
  assert.doesNotMatch(rejected.stderr, /Sensitive sample text/);
  const argument = run(['decrypt', '--out', path.join(privateDir, 'out.json'), '--key', KEY.toString('base64url')]);
  assert.equal(argument.status, 1);
  assert.doesNotMatch(argument.stderr, new RegExp(KEY.toString('base64url')));
});

test('temporary environment key is supported without printing it', async t => {
  const { privateDir, run } = await setup(t);
  const result = run(['decrypt', '--out', path.join(privateDir, 'env.json')], { envKey: KEY.toString('base64url') });
  assert.equal(result.status, 0, result.stderr);
  assert.doesNotMatch(result.stdout + result.stderr, new RegExp(KEY.toString('base64url')));
});


test('check rejects hard-coded access keys and private links but permits empty/dynamic key flow', async t => {
  const { repo } = await setup(t);
  const index = path.join(repo, 'index.html');
  await fs.writeFile(index, `<script>const DASHBOARD_ACCESS_KEY=''; const candidate = ''; location.hash='key='+candidate;</script>`);
  await checkRepository(repo);
  for (const source of [
    `<script>const DASHBOARD_ACCESS_KEY='synthetic-key';</script>`,
    `<script>const link='https://example.invalid/#key=synthetic-key';</script>`,
    `<a href="https://example.invalid/#k=synthetic-key">Private link</a>`
  ]) {
    await fs.writeFile(index, source);
    await assert.rejects(checkRepository(repo), /key found/);
  }
});
