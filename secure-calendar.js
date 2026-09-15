/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'NpfHphn2GTIyuEr6',ciphertext:'a8oXsUtkNlXWAh6TygW88R7I38vIRgfCIHulam165TSvPXY2EpFAdZkTB_ZXC08y0CTWht4ei_MnHVaWCLOlBKcXXDcBbSNXo3b4RygMWCXbNaly3UYHFx7BLMf1LWlNSPjre2G0BiH94MkZ0wrW7IxKrjfKNZ1UB1-0TycDS6akQyPFJbuYwiQhvb5krOviSy2nei0YaQhCdCjzk1oydOPqJfg3a86CvAAGXA8zsxoHHUuBYSdgx_DIoWwI7tU0AwN6q9p64DQSghZdvlXpa1REY5EnGcLo7Dx6xWVnDtWnEci1QzPAhgclKi5dPQ4p_AVJ5R4PJkKiqowxTBuy3Wr3Iifpc06-ngEzdvHVUkdXxjgfgcOFhxJXg87WFfBUVEq3PWNxhYkJkId59nH1PswM3t8cT4QWNsDUEZheXyu-4TqiWgDnltUhD7-J63J-SmzBIcAnsgLAVam_wuaZpxGQxW2QGqOHxAhYK7B70L5ciap1pKUvwEnQKrMIpzDSnU_K8fdtwNqGAdQpZjaP-ny-K7aLSisPpMrpgJ5i4qW2wEoGaqKMunyRCdb_RafUYzFEkrGnr-1xolW44cuG5E3tqBEijO53FeW7c2wh3DT8XQaomN0OXxWe8i6kt4lpu_nB2jEG29dpHWCxhMgd2KlpJIHEex9O2g1x8oUwcJQin_BMTaWWKy5toqcGlUSqdTs7BwMZMcWNfZWIa5TM_FhsNtKtFdD5yrgXFGfX5ajAUUG3HBznE7ziSXg3NzdhhJXf1M6l6Bsa-gkPIqnve4IDeA65qvA--OIbLXP6wodV2xqP7pQZc3dM3vZfYUUzfExxi4GNBF8vid1ubzSUtNBqD7wxs5K7J-z6bdv-1Af_K365OniXoqM6sezCgTlNGP5lxeea7ISeEn8P6h31e4NwFHk2fFEuBEODs3VZ6riPFtBNG0DgufmwPmGZrpJJYjALhUnYn_qXc78PBruEDFZ_kZ8mLXWqPzQadAifveUFwEWca0a6W50nZ1R-JdCzdHekHASPvBN9pLpLWPJL78V2Mc9_0U0U1GV7luzvlIWQcTKB9AyTa4jDjKT3UF2yLXMNvUFFq-HXQHZPPd52Z_PxyWuGbEsqzMiGAgQnrW9E85GBi3Wa8m1oR3DIBcHpHkNh6rf2SwQp4Ai9xmyWRNvwWO6LsF9Z-m8OeZWtH1PzvswxIKog_XUcMwg-0x4n0ep-FyQY_XW28UMl_-3GfmncLEHn1-hp2AwZe-XTSMA9woKOiXeJHs0EWoRFd7zw9NglZyLwgXHKORwTADxoRUm4CQlzWu_1pqnKlsYPRAlU8CdwrC3bjgYuS49Ip7Yyk2ctCjma251rI8aJtTznjs2U-GBHB7hXCVvifmrJyaCOxn0EpMlMTtZQT7p2kibHrZEh2ljE-SQ8acjkfpneYWchsOSwDDTqG_rgB6v0VJI8AbVDSweho-w6Q6DVuTkTyaCd7BkaXe1BuFxaOC9bWKATpbFqqlMjin2oJORT9N0BOkMTtaebhl0aMNY_3gPIwDXBQykHGBrCEwGZK2XjA6hbntSBD-z1s-qc5S-sJC4PR4jALMJNYCvt7BgyO4ndOv1A94Wl3gbyaR6im5zrh85gDDpfvP7rHdxJ-6MMKU9tQzdaekqwWGwhAqifsqXN2VTrmd8-LeEfRVQxXs2rFVg7pG35xyvRcwyAzgTT0YjEQvNR1LCtaikljST4_JVKXJ8xzjcGsXmRo2JHQd6oftMnwM1PT-nKffy-sWfPJVKC4rGyNxsBKsXROktLP4fwvpJVEBlpOQXLNPgOdohPLzjQ-fcPl5d0GZfOsFmdGl5tzAIirbB8CDrlGrdY0uNzXJfsY01Wrfx6l2yKf34N2GEI780DubVsJ90xWFzqwqTIRq2B80R2pn36lMjPPDK1yxmlR4Bj_r5LI8MYLAKdr6eeXedvZcwyzWF9QpZBhFbb3vDeUSC9U4sZd_wUs5uzwaRmx0FVz7AsiyHsoeWXK0iKdKALBiaqR4ZwZFd1izgrzjUOLQRJhP6pTfKo8CsuGOjsTkSyGyGR2fkOSMrX_f9CcQTLIndTA1pfGE3bp5pUNlHQGPDuQZQmsP6ClXJrl6ZiEYdReXy_ipz72MKe8gHEQhMNbnjuTGbqrjMHjw8GnkNz_MnoPrHfDKGZUDqNLGfxNoLIqNnnmg33emusfLodXKCZGh365gmsXl0P8HmiKk6KFzE08M9-RtkVQLfEXpFSJtdjnVVV8Zz4IaoNyDquW5HwToAjod4XXf-P2Cjehc803O-YtW6TNi84Zr15db7SuqWsfxUrUFGevRIMcelPVZ4kdeZf4rBJrtPq2734jibqhnRCZG1q_I1imnBjrDEAkw1gStSqSS1tzxjSuZ5Io8YHekhfBwAZyQSYSUN3IkdDFAkz-wmwbhp76BLULUSSAhQc1czPvYaPTr82IFxKDtf1vQc3qgyaBjDQcrBb3RQ_M8ofR1y-CORw_Yj0fBDHEbAFYNmh23V6IjBiA1SmQTrjMTj4MjAg_8y8YZMKlRUMfBx6Nt7l4vylST_2B0HZf-XNE_WSBcclDBmXeEaJAK7QW7tyFyjlCQpd9gHFjivHklULkT5WOb6coh9IFtJqMxa0yPg1aPRBCHJt8OWQZmfo6l1dcJPTcd4eneZM1BjrGzLpFoqOIHDx6aaO__DOW2Z4oKDNOHM7z2JSLLleTEEmMrOD439v6Axb0sH5rffR6m9i_cZais1q8LExXl9wBpUUz7B71L4BqtlsZ8w-PVzQLNlEVtgsMPnCURQAqj45DEqtViJ7OK2ajoNk6QEFLWK40QrVdxF5Xt44cC7fz5euaYbHgxe_Jrd0x0M0Iel_6MGfHrYQDjadYLLUDqrCw0M6ZfA5LsmlerJanbAL-ZSNxjxa_td6sZVlD6jkIric5XmAuaHZUrEh6QoWHvThmii_GcQocjWY07CrayUf7fnqiiOEsR2W80FM6xa9Dd8J3OReeis1gEHt1pYyUjD2MOdEvpOUYffe0S12dDGeD82RRmCl-xJ6Xx7UuGXv9AcYeQs3ODoqrov4uqTnx1ZrYThMDreGtU7hLTX2h2xGO25QVWbZlTmMCYCfXRNuOgOjycS9iPjehdH6d_eAVylK8LsoBygYgbXO2rV1-rxeDjiqIv2VhmvLOpflaCtoxZbtiGUq3PtRRl6kDNl3N0nuPv6T59YMPB6xgaC7RcFOV6mfMCpGM4o2xaTPGF2W-SKXHhZIiidJdPuKEMZnmBypTmXAURhuwEIndvS0mCXOTNNU8VkcC4a6mpFjphHpntdBP5gciuGVf-v3N8ejRLUNhdT5KOEngzWsjTl6vzwJkJzcn9XXroDfDJeYnf07b1ejTwHUz9byh41jbcEnYJ01-ICYe_L2U9BEy650DoaQoYG0E8mVLDOQMinKE3MCs31fBRAltWav2GYXE9l-1UpnUuI0ralqS7Km4APxSbnYewoJluvwCFtWjegoVf0GWNXbyo67nn3AIsz-bjLjImhNiJ073_7CfGUgfrSnd6Nou0czNAtt5YkCajIIJXgOGE8l4GaRsyQobsjDZNN0Q6VqIrQhvfJVxEEOqwAN-_D2f3NmDxQzyajXpHez2zuB-iCkSaU-4q7Zu6z42rI3v7FAH7oCjEueYANuIg6Y4FdQuZ3GUBfpuoOXLTiGJhreIvR2kXnsZeWuSoXo9BOQ_OlAwevzo0F_lyMwIw7vu4EPj6Nv23DTRVA52bfH11mPErMqMsnN_pbIXapLReo5EQoeqhz-whhtQpny-3ZRfA2Y5HL9PaQA46SQkktAnyMM8eDvKGoSYms5EDIc-lubCL4MDDL8xnQQRzcbY_V7FZaTlVPCymaEDcLG8VJuvDLy9nl9EC8vqn8cPpdRWV9TUQObUw3OVamc3W8aGd8In9kr6CTV0jZjzUffu3etj8y2xTHJkknHVvPz7pChS7FnPoMOk4LeEKDshEXKHxp8wgPKX-4L-SefUX1QfQaQPmknzsotUgMgjHbueEkq0fR956AmO2FHUXrZ53NobppZPyQM86jKfbPZLOL9P4jfKUBlKmwYDGQHTXYnFvXVN6fpYcN0cYLPhODjbkLKGBNc7jnh8S9StjTPiu0rYEvzZfInZiuiKVneak6wbkTBT0mCgz2Dpa3KJEwd_83DF3uw2OnSgwMMAO-5saIDVDAGcaV6ZcI37y7eENQIUzFYRmN9dyX3xJf0KrXdL6x-2_g5Aojj-8S33cZkPC1TAAH9Zn1aGIuOnD_eos_9nqA5ZWiy4HxdaTQObakHsaxiu2rqnJpaLatzzJEhM9_M0sMSRdgjidalgd20u9vWIDwfIvufP-0SBLWNPF5Qt8GQfwnmx10KxDPKJPDiMNtRYguf0qZC_1fxBCcHv4nmhRzfPZoSsRoHmtAJx_EGHi9jxAfBJ7x79mIGBwRYQo6Hke1UGhx38uNYgIYYn9_cV1U0QyTX2aPAcaqgTPSdjLLAP1mkQeo9WGGnL4zHYMItQ3rGuS54bJD9pd7pf-OsEUApSAchecApbhyzE8anDIfR7ukUbTGl8H2YagyeGZJ4m6LW-q8Eyj3RziZd0MhgblOfLv2teJQT4bnefMNM5vA_AnM2FMRdXUqrjM4Mif7fEFgP45csiSPe9KuHNYTuGC3915TRcZXNxZ2x2FNvcYSvD4BHvF0PV8HAPDK5wVjnSuPBq4asmrXhmBnch73lJrcLVbwtOneCesHUyiw_Pa9qEXPfG_HyBdPxpvUfxoim0veJ6ikY8s2Ex69GajJR7apWfhzgAvV3bxBAHSgwhl0nI1h5-i0XwXUUW8W1TJCMfVEOZvCBsQhu_NaLL9WizMIwt1PjzwKN3gsh3A737hCiFtWuExgC-ka1eAlmQew9JJzSqIxtGUQXsug4QYoeEanG5C7vz6u42vWQPMM0VN5-9EKY2vtapbU5BUvlwFpTDOLBtFK1WNoud0zF68v0-bvoMrt4iDZQf6zHDPty3Ky8X5ZQ-z_1FNxUV_E8c0vjfj0GT-ZNba0QmL-8VlBSuxMbMJ0dmvePTAIJ8xuvkWeYiRplPyH6VAlCFvb3wrw7GNiMg4Q6378xwYyi6SybLhsKwLMpIGINdnP76_AG5kz8H0KwwOo_t7VGXmd_vQGjTaIoYFNxB9oiv-sdIlbW5QGwlohD9ISCGDgpaScLhHrB2kKnfxcARG0XcStg-zlMZWDtGsdjW5pSKlktVPFpA-1XeR1qMbWoOmC-yZCmUOV8LyDYETeQr9SdphXMvBfxnV41Ahf2xPnFJwG3AntgpGvYeFuPpE74l6Y8paMwIRHnThHBbuY9-F38hXhWpJIN9UzxyYcwHm4wwC0cDiBGs8dMmOwh9e3llR3BqoFll77Q6k2ZjcCBYqVsxRYQXRLyDF262UnrFYjN_m0oSuaKo0c4gF84WuBFlBcKiYsbUH-KHf1voWZMjJ3Ok-WQ7rln8t591OhikvaMmbfRzjTsvho7-2qVQrDzKcntXRQR__YxW2V2LsSs7O4hOYxB16vXggYekpY0JdMc9KcxMSEUyd5QCFaSwqb0tiOdL8JyZ9XUYSR8GATUcrZQ0qtSoN_JvBaythh9x2aiaajZ_5IQOtegXcjABK5D7ezbHXqbeTQKPS6UZtTvZsUbLCosjmm2ZhwnInRpYjdkCnoO0Wc7ttMYxAVHQnOxa3DpjiXYeuas2UhXwE2wI2AAilyVtgNJM-SYabtOye7K42nTLpY_54mnS7k6b-JFoHus9EKTDZhTNUrAVFqRGpglZ--DDPt3RDeaUt1s7fRCNxM3DwbWQZuHhRNJ6ToCyZaI5OHQLBOSIRVNWqEvM-ETNmIwKtyU_4RVCbzGl2MMvq3EhI-af7NK-Zt3Rv36WcsZVcDuRZQhSE3GDZI13W63uJ4L-DcTVQQqMUcWpeZ6bUvMrEBXpV_TPC7uXWCl0JBrjRywSpDI8R9FaArqzL7QwKikYQ1bAYpbEz5cOwUnhc3UWPLwkJcrZwgi4guDw1sPWSexx9r4aO18Y-xwTuyX86lHe1up7WvDSUxyc6s3IxjU7FsFCtpX28zyyt2XiiJL3U1IBqq7hvaNrYgeo33b8PedHoD6xNmaHVl8hrPSgCuWrO0xFVv_uRHtc6tXuHQhx8tCoyDuVaYZJw8M2yLKwXpMIvP6-knj_tnIJEgW9-3IkK7GWDC7hnbcqIF0bToOmtcs-1PBu03kSuSzP0a0wLfC3uTxlF8T4sQ2UjFpVAWR8YRhXB1oE2ppfn4myZE3krCOcHKt-qoFFRILginQaTHmNYb7on0-opoV2ucWp-iE_PMgxByb5fKpAGMfvim4ebdbasafxU8TJ5_8g4L2Hp6igKVNU0yQgDNaGitDAdxmSee9eWBktWyuIns-L-p6J9fvTdSppowsuoaCDGG2Nx9UBbxrYXUmsdhMIgMPcDmOROVHjwWbOaNEqqWXp9a6gAKFBkeIRlnjsgHsNAID0eMoDHRvfg3guUFaxMh27Xq6t5bqGWPf1tooDIrJLSijiJ50OfrDVGRJhvVssXlkFScK8ZbFNvicSg9ikYYe4M5FPv_sPpTOCiWAFTV0BBGFQeA6vk10wCLrCsGYCKytW9_v4OtBtdV31X1DCezuV728at2G7IRO4VDiDhgPYzDi7np1zV35JpQNWw799DdSp0HMs3wRtZlbY09oEaXgQinOAxn21NMlnuiXEm_s-LT8OzcmNyRIzlMm49vQND3VmS35XIRH67S4U5vS4mj9CSwJpE1kQ6Bd_qMeRsrqMCFKVuvorFvbJT9neRGK0Rvj9fdqWW5UyanfyjiLra8s2IESI3M-y4TjkPjcPnhpLItZneKpdAekc50e3_A0Rci6Q2A1VqQ0_OX7BFSsl-SwOEa8joralCgqtrkioYKF3RC-2oRlXuabIGQW9XoJgJHaPsJIhq1rGVB6bKvHJ6ghkDlGfKn20bBDTwJRj__D1ggs2wA2PWkaPsJbgkF8k3oI-v9_nQ4W7czd3Bx8GrmqBtuCHwfzWXyLCW2aUaVwhKx4X0JBad29OJRiuhJbzvryjeDCnRboDbfHncioXUXeGFZ91CfRxstetPhgutv5-GtZ-NoppsJ6NdUvjWTuzuL8quOeb_uXHtpgY2TwVLzEraQ87KJZk02oDc6-wmeIX1JIsCrB-jchdtPp1YIa6jVBefrr5MbYcmnISbKaAGv3tIOa_Hjlbs9B9-iIjbbREIPMUMIB4oC6iUjyf_HdOR9FcIlo0XNVqlv91Oakn8f7_66YyoW2gtJJ-B6uZcjkQRPpt6r3EzXx8UYR86SR7vRnGiq3gPoYZ2x-qXl1cCNPw3w6Mcdd9djdkRptS8bUyx1U'};
let PEOPLE={},ONCE=[],BIRTHDAYS=[],REPEATS=[],SETTINGS={};
let DASHBOARD_ACCESS_KEY='';

const fromBase64Url=value=>{
  const normalized=value.replace(/-/g,'+').replace(/_/g,'/');
  const padded=normalized+'='.repeat((4-normalized.length%4)%4);
  const binary=atob(padded);
  return Uint8Array.from(binary,ch=>ch.charCodeAt(0));
};
const normalizeAccessKey=value=>{
  let candidate=(value||'').trim();
  if(!candidate)return'';
  try{if(/^https?:/i.test(candidate))candidate=new URL(candidate).hash}catch{}
  candidate=candidate.replace(/^#/,'').replace(/^(?:key|k)=/i,'');
  try{return decodeURIComponent(candidate)}catch{return candidate}
};
const accessKeyFromLocation=()=>normalizeAccessKey(location.hash);
const showUnlockError=message=>{
  const error=document.querySelector('#unlock-error');
  if(error){error.textContent=message;error.hidden=!message}
};
const prepareUnlockForm=message=>{
  const unlock=document.querySelector('#unlock');
  if(unlock)unlock.hidden=false;
  showUnlockError(message||'');
  const form=document.querySelector('#unlock-form');
  if(!form||form.dataset.ready)return;
  form.dataset.ready='true';
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const input=document.querySelector('#access-key');
    const candidate=normalizeAccessKey(input?.value||'');
    if(!candidate){showUnlockError('Paste the private link or access key.');return}
    location.hash='key='+candidate;
    location.reload();
  });
};
const preserveSecretLinks=()=>{
  if(!DASHBOARD_ACCESS_KEY)return;
  document.querySelectorAll('a[data-secure-link]').forEach(anchor=>{
    const url=new URL(anchor.getAttribute('href'),location.href);
    url.hash='key='+DASHBOARD_ACCESS_KEY;
    anchor.href=url.href;
  });
};
async function unlockCalendar(){
  const candidate=accessKeyFromLocation();
  if(!candidate){prepareUnlockForm('');return false}
  try{
    const rawKey=fromBase64Url(candidate);
    if(rawKey.byteLength!==32)throw new Error('key length');
    const cryptoKey=await crypto.subtle.importKey('raw',rawKey,{name:'AES-GCM'},false,['decrypt']);
    const plaintext=await crypto.subtle.decrypt(
      {name:'AES-GCM',iv:fromBase64Url(SECURE_PAYLOAD.iv)},
      cryptoKey,
      fromBase64Url(SECURE_PAYLOAD.ciphertext)
    );
    const data=JSON.parse(new TextDecoder().decode(plaintext));
    PEOPLE=data.people;ONCE=data.once;BIRTHDAYS=data.birthdays;REPEATS=data.repeats;SETTINGS=data.settings;
    DASHBOARD_ACCESS_KEY=candidate;
    preserveSecretLinks();
    return true;
  }catch(error){
    prepareUnlockForm('That private link or access key is not valid.');
    return false;
  }
}

const pad=n=>String(n).padStart(2,'0'),iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()),parse=s=>new Date(s+'T12:00:00'),monday=d=>{d=new Date(d);d.setHours(12,0,0,0);d.setDate(d.getDate()-((d.getDay()+6)%7));return d},mins=s=>{let[h,m]=s.split(':').map(Number);return h*60+m},dur=(a,b)=>{if(!a||!b)return'';let n=mins(b)-mins(a);return n>=60?Math.floor(n/60)+'h'+(n%60?' '+n%60+'m':''):n+'m'};
function holidayFor(date){return (SETTINGS.holidays||{})[iso(date)]||''}
function itemsFor(date){let key=iso(date),items=ONCE.filter(x=>x.date===key).map(x=>({...x}));for(const b of BIRTHDAYS)if(key.slice(5)===b.md)items.push({date:key,title:b.title,person:'family',birthday:true});for(const r of REPEATS)if(date.getDay()===r.weekday&&date>=parse(r.from)&&date<=parse(r.to))items.push({...r,date:key});return items.sort((a,b)=>(a.start||'').localeCompare(b.start||''));}
function weatherIcon(code){if(code===0)return'☀️';if(code<=2)return'🌤️';if(code===3)return'☁️';if(code===45||code===48)return'🌫️';if(code>=51&&code<=67)return'🌧️';if(code>=71&&code<=77)return'🌨️';if(code>=80&&code<=82)return'🌦️';if(code>=85&&code<=86)return'🌨️';if(code>=95)return'⛈️';return'🌡️'}
async function getWeather(){const config=SETTINGS.weather||{};const params=new URLSearchParams({latitude:config.latitude,longitude:config.longitude,daily:'weather_code,temperature_2m_max,temperature_2m_min',timezone:config.timezone||'auto',forecast_days:config.forecastDays||16});const data=await fetch('https://api.open-meteo.com/v1/forecast?'+params).then(r=>{if(!r.ok)throw new Error('weather');return r.json()});const weather={};data.daily.time.forEach((date,i)=>weather[date]={icon:weatherIcon(data.daily.weather_code[i]),high:Math.round(data.daily.temperature_2m_max[i]),low:Math.round(data.daily.temperature_2m_min[i])});return weather}
function scheduleDashboardRefresh(){const now=new Date(),next=new Date(now);next.setSeconds(0,0);next.setMinutes(0);next.setHours(now.getHours()+1);if(next.getHours()>22){next.setDate(next.getDate()+1);next.setHours(7,0,0,0)}else if(next.getHours()<7){next.setHours(7,0,0,0)}setTimeout(()=>location.reload(),Math.max(1000,next-now))}
function refreshWhenVisible(){let wasHidden=false;document.addEventListener('visibilitychange',()=>{if(document.hidden){wasHidden=true}else if(wasHidden){location.reload()}});window.addEventListener('pageshow',event=>{if(event.persisted)location.reload()})}
