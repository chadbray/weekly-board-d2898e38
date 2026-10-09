#!/usr/bin/env node
/** Validate the current public dashboard. Does not publish or print event contents. */
import * as fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
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

export function readCalendar(source) {
  // Run only the checked-out calendar script in an isolated JS context, with no
  // process, require, network or DOM bindings. VM is not a hostile-code boundary.
  assert(typeof source === 'string' && source.length < 8 * 1024 * 1024, 'Invalid source size.');
  assert(!/\bconst\s+SECURE_PAYLOAD\s*=/.test(source), 'Storage mode changed; reconcile the workflow before editing.');
  let json;
  try {
    json = vm.runInNewContext(source + '\nJSON.stringify({people:PEOPLE,once:ONCE,birthdays:BIRTHDAYS,repeats:REPEATS,settings:SETTINGS})', Object.create(null), {
      timeout: 1000, contextCodeGeneration: { strings: false, wasm: false }
    });
  } catch { fail('Calendar runtime evaluation failed; no event contents are printed.'); }
  return validatePayload(JSON.parse(json));
}
const stable = value => JSON.stringify(value, function (key, item) {
  return record(item) ? Object.fromEntries(Object.keys(item).sort().map(k => [k, item[k]])) : item;
});
function duplicates(events) {
  const counts = new Map();
  for (const e of events) {
    const key = stable([e.person,e.date,e.start ?? '',e.end ?? '',e.title.trim().toLowerCase()]);
    counts.set(key,(counts.get(key) || 0)+1);
  }
  return counts;
}
export function compareCalendars(before, after, { allowedOnce = [], allowAdditions = false } = {}) {
  validatePayload(before); validatePayload(after);
  assert(allowedOnce.every(i => Number.isInteger(i) && i >= 0 && i < before.once.length), 'Invalid permitted event index.');
  assert(new Set(allowedOnce).size === allowedOnce.length, 'Duplicate permitted index.');
  assert(after.once.length >= before.once.length, 'Removal/reordering requires a separately reviewed comparison.');
  assert(allowAdditions || after.once.length === before.once.length, 'Unexpected added event.');
  for (const key of new Set([...Object.keys(before), ...Object.keys(after)])) {
    if (key !== 'once') assert(stable(before[key]) === stable(after[key]), 'An unrelated calendar collection changed.');
  }
  for (let i=0;i<before.once.length;i++) {
    if (!allowedOnce.includes(i)) assert(stable(before.once[i]) === stable(after.once[i]), 'An unrelated event changed.');
  }
  const prior = duplicates(before.once);
  for (const [key,count] of duplicates(after.once)) assert(count <= Math.max(1,prior.get(key) || 0), 'A new duplicate event was introduced.');
  return { added: after.once.length-before.once.length, modified: allowedOnce.filter(i=>stable(before.once[i])!==stable(after.once[i])).length };
}
function syntax(source, module = false) {
  const result = spawnSync(process.execPath,['--input-type',module ? 'module':'commonjs','--check'],{input:source,encoding:'utf8'});
  assert(!result.error && result.status===0,'JavaScript syntax check failed; no source excerpts are printed.');
}
export async function checkRepository(repo) {
  const source=await fs.readFile(path.join(repo,'secure-calendar.js'),'utf8');
  const html=await fs.readFile(path.join(repo,'index.html'),'utf8');
  syntax(source);
  assert(/<script\b[^>]*\bsrc=["']secure-calendar\.js(?:\?[^"']*)?["']/i.test(html),'Canonical script reference is missing.');
  for (const id of ['prev','next','today','week']) assert(new RegExp('id=["\x27]'+id+'["\x27]').test(html),'A navigation/display element is missing.');
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (!/\bsrc\s*=/i.test(match[1])) syntax(match[2], /type=["']module["']/.test(match[1]));
  }
  assert(!/#(?:key|k)=[A-Za-z0-9_+/%=-]+/i.test(source+html),'Unexpected private-link key in public assets.');
  const data=readCalendar(source);
  return { events:data.once.length, duplicateGroups:[...duplicates(data.once).values()].filter(n=>n>1).length,
    sha256:createHash('sha256').update(source).digest('hex') };
}
async function main(args) {
  const command=args.shift();
  const options={};
  while(args.length) {
    const key=args.shift();
    assert(['--repo','--before','--allow-once','--allow-additions','--expect-source-sha'].includes(key),'Unknown option.');
    assert(!(key in options),'Duplicate option.');
    options[key]=key==='--allow-additions' ? true : args.shift();
    assert(options[key]!==undefined,'Missing option value.');
  }
  const repo=path.resolve(options['--repo'] || fileURLToPath(new URL('..',import.meta.url)));
  assert(['check','compare'].includes(command),'Use check or compare. Encryption commands are retired for the current public dashboard.');
  const result=await checkRepository(repo);
  if(options['--expect-source-sha']) assert(result.sha256===options['--expect-source-sha'],'Source changed since it was read; reload and reconcile.');
  if(command==='compare') {
    assert(options['--before'],'compare requires --before with the original script.');
    const before=readCalendar(await fs.readFile(options['--before'],'utf8'));
    const after=readCalendar(await fs.readFile(path.join(repo,'secure-calendar.js'),'utf8'));
    const allowedOnce=options['--allow-once'] ? options['--allow-once'].split(',').map(v=>/^\d+$/.test(v)?Number(v):NaN) : [];
    console.log(JSON.stringify(compareCalendars(before,after,{allowedOnce,allowAdditions:options['--allow-additions']===true})));
  }
  console.log(JSON.stringify({ok:true,...result}));
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch(error=>{console.error(error.message);process.exitCode=1;});
}
