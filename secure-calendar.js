/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'n1b-8jQt_R9RkvZY',ciphertext:'D6NdEzy-76gz1ABUliDbCyMRuwzq0dRLsVylZWiw7xoF_b4UQgP6AjR2SFd37_9XeFxMcdGT34-9ymKQmVTJ5xvvAEKerqBH6o6hArTO-tiYcjVhOwZn1JP2jU9vaB-GKiAHnjdOzqMW_VA-HUKVexw-wO89JCW5nIZJHCle-WNVEB9pV3j1sV6wj65UH6anMr4VyEDbLzYI_86EXcSVN8XT1q2O7w4YLDCsFQZer3X5dcHVPVRFUCNrcj2xIif08YVBOvWkmb6v8sIqDat0WdTmP7s4PQfxbj-Ewe-vmc60uFXvqxnqTAdGu1k8phitW28n0mN1tnUGO_x_iQmvHuPdFY5ahbPvfxJKsjCeGi1q5_9I4_37O6giSgOSifroWeNWrZ-VHgxKp3PDKV7BViWebCxVJZ2RkR088Qz3D4HE5WwekpNUAV0VWjyGBbT2O52qYqK5OYd2KAvMmohWnemcOalmhblvCuw3bQrIeSbLtNdn7vb_w_0gIjLKULqcn6CQvUWCLNp4xVLoe4QrU5r3ecOmWAY0gssaGT4zzqjUnBF80UXbSwVbT2uxHI95XVdNkkK4Wzck-ys-RsI4v5tewCiQyvh_spn7J0aANvMsIjTKESYfB4ScIQ43swhcA8YYlDeyJyuxPAK8_nxjJQv7bThLOgqx_3XGMNDjFf1-F_4cePGa9BbA_O2yTDsKWfKYqXvfhPdRxp7b2k3_h_99mu1f65PRhZlqZEbbL1lYeGkZSk2DBVH00tkmHaIYlS7iSwGUpnI4zH8LBluJj98ApTSVQb32P8nZQ0ULhTLAu7lLw5Psn593X-ucxndUenRIXTQVle5OUtfCG0zA-zTpfHFMgXzPDPOIe_OvfHQp5lb9_kLqenO55n1AyZEZWZH3-K1ULjpM3bXUUf_1MZ4oOKChtu-78GN-qCNbYpRU4Av_01YJca3Z00kcRUYY7-W83Q3Jtd6jykUAc25XNeBPoQETg8Enfk_TiKGdU4ElZWnRFDcQsR9nzfXbXbtAcFWSeAVxSBxIYfZNTWk574TPxcc8Pwg0n58RZG3wnNI4UZlCbJwIgdHXSmnfWkevqZdwQWNJqRPOwvtQzpuFaj-Z6lFKss8IzYZwP1zr3kLZhnqKX9Obox0XPiWJyrvbwnxwVT5pzKOP6RsAE_ZfioWCMC19uWgEw2fjga62FMBMmpZRkV5aliwwUAWXLhclpXczsOGsMQRbn-_JVcYltj3WnFhZApXYspj1f8CzpjVswnTcX_Yl-xriHo4tqc2Uf0c67OKoWS_ac2kgDRZl2fTe7fku0gnR4iqfMuXtXze9ay0uEfJTyqatSlCySwjoPJuYir5SFtqvGOis4jhCcNPopKNaLdHXfAfU8FuHoz1deN7OLhb1kWZgkwMTJcUCUvOx5upiejs-DhrfKPzREGjdSt7Drrh8U-0YkLFi4HeA9kKoVBxoSZjlsi9TE1h6KvVzBBD6q0ilV5zB96-SZz_rxsSc3GOo9NVhD-fBbt1QOkbnMLId9MUakpFTngbflnkYIlTT_pOZEokv-altVYu-f2TnyZcZ8dUPeIeCQPxJ6UVUtM-430rFB35VRQ6vkisFVizOa-32zONskNFJqTyQFjQlMpu9so75yaqR5YBhA_50Z5Jb_cKJZ47G8DgpeqX15284QA60bkznbmMM308NmUE1Mes1CC0hGVkMsz7KgxvHLLyf-vOyMtt_LH0zXM_eAQciq34-XdQYNaTyaOlhI6Z1q-uez4RVi6lvXV7WW3qLPDV47d6qbQDk58bWNtDHPp6I2By0LH8RHDjoTttvrPJaBgD3ywEtbOCv-zl2uPawanoHimt3j6jw2lIpprQIRybEFA2c7Dlc3bOfXtAJlQejHmtPb7htrR3I1GCRKrTSiRB753I0GzOBpEoHCd4ersOeC801CK6jHflFerYILaUzOFBSDX41uAQ29wR4F2fGBymk-NZPBD2GsiHb_4FHnwy9jMRyBCltvoqh2lmXzr5lyy9NBK-bHe-DnydPdKKwv8nkiOq5w2sdCPwh01G5ogV33DMEiX0A0TKggn6puRm9jw3TWYVyEgcZr5m9XUHPYteofCVu3FJKK5JsIrGXLDHpWCMA9HD1IunPbqzu7SMklCFI0G7Cksc2ZBURQY8KrrvedC3BKM3fAw3mvQYy4tfQlH92a9k23-7Xb4HkSpPEHZP4FnOcenFxqLLbY9SZTkLLIaIJ_mQrqwC7fgvnIPqDLNXp1N--OUVlcB7WQN4C7yuJCJQyEMsgQywzA2C2N7i3vFYOpujrhhRaqHlKfoA-YRjtwfFYBIANutNMRJ-5a9UXFJs21_Jenl5C4SBeIJ5a4-FyBz_MQWU2xmmaNuMWocrPb63Y5wzYwkYLMR2oYyS098d7jZcz2MqCXcyUyyzJrue0iGetz_5zm8yby3wxjs1rc-5nWpBeVmLMYjd4OUmFsX3-MofzRv8H19TYbyo2_VJYlsN3duqRgOgcs1JSO8uXokdt4SABQmXSol4mFBFUmx0Cs6H8BG7qcdPRlTPAX7IbcfmgaNkmx8AySo4bUmmB2Li3qT27vHeNcTvTXgIEPwoinZGqrMkRmhgweuL_EZfmaVO1edf3egXyn8QJApytK_BhUpWGZWwdKS0in6vbnAFTnrDQWmgWlAR7TcS3jJvRzuxsE5ZQglIIbikUgrrH4St3Kv5P45Rqj8wq0gGgNjEO_j2xGlI70o-EQcL3xUt-XM9hmubBh9k5OLfxi3o3wl8qv0P3O711wOg3tdCOLp0PLxlPbM0BHtaGcTTFTeClVmguxnq_1aAUr7t7NIJFGwvsIYqe3hyGZrhRwfa0gWdax7AFFErv8HQlDLb-Jw9ukzNV0sZm0vkcAuW9QyyLlak7tY0sSmt2AzaVeaTf1cmDn7UGuO1IoZsSeIar0t7b2FgXad026Fq4DLZlXZF9bDbpSzUOgefb8DZj3HWuSZ2l2hTKelrKLt4IAGw75JsoK__wioKumpylCPdNVTGQYn7-F1NkzuykIEHHh-PpkLKRUW2v6lPFaUN2xe7l9Zc6odQk2TUZQBruGqw4XkqMMHryxWZ5NtIq-zWIpGhCcUtlf4oOQAHXw4ATQT-fqlUdHyu6BWgy-l1r-ZMjNgKsgacm1DXaSzenKipgoYPm6vLG9b-c3Qp_lo7JP2jqHKt-nbBepau0JhGg2ypupyECdEyQFJgnR0mlX-1qvTG5gSwEOZLvozrDIHlt9DT0hahxkUEsBTZs_yiAmTYDDTR4t4ZwGI5Lo7tPcMaKC4xeTReCVTNYJWgCpORsDEUov-AmgCaSaWL2y88rre2sbcrekOGjGX6hJv5zCPt3rJCkpvdlfD2llhYYJ6ywL54j1XnWi80IYRnCrDNlEujwAPw9G1uY9RXwXZ8gxWG403ncXvD-8dC3AMFGhB-IGF78Q_TLlIbcSOVOEWHhcZ9vo_kAH6o1gFPP9MReosKCdEwO0rsDg7se19meu1I5jwCzT8R4AqEYRtqR3yve403poUew8j8Mc1xbysFn7660fVKERSr_RUkKHCFdvDuNv2jV_gE2m9iQWhASfulTZHQGeN56ZJShKh1Teb1cJqRt3-zAOlwKN1TG-15Tp78oMQPtj4DjE4uX3wsv4mi7AzwmbuAYNPn42ojCF5cNZSbLMh9R1hcmmuKG3cFxwyW_GVAgg6Yorf1xegPhqPf2LatELoIDqlsuEbuC8SZhDgXcSterpKWsOtUBvTocWO1tsD3mZuAybvs9dukXzpjNFZSQps2epwKXNab3bw0X-C8Fpo8hKDcnORtxmpQXDTGSr6jMJkd3cRPY3CElmJwSqNW3v0DFBrHrWPUNu7Mj-7dgNCYn8hZLYw9KDJcTYN9hKMxl0tIuL8He9h8u5ye09XnC7DyH-ChOnrueDWfkgXcNNNhlII33tlzmPASkkfQoZ_X6okpZzWQ-FLYv67EPEezt0MV9Cdbyo7guSeGjam-I2F-ooXpHR_RHfDIX-wCxWkluWbyRv5z85jAnuAp7G2Cdp_eG327WREqSRPX77_xEMzcYhVf-hcy0kljxfmxmNTbBcTeXDia3FRo6mua6lHx_bZUG7GR-eE_G8oAI34LszoXOasybJ-VEOAubDztU843AqlFw7s5at7VLaZ_Yl4ktPg1YuGW04X7tzqaKTMoHNzNxBa2gL9tu7LlQmU4h5x2n4bWTp1mY5mODJJulJ5h_3A2Jk21Z7-ARicAn5hBYAA1L5-mE1mITT7tsZUEj7qELXV9FubPoQLiT0uYr4eJiDV_RO6InvUP4g4p7xJlA-Hk5rcilT64x8iAsabml3cBZQ-aoWWyWdEz-HMS8t2ygb-IU-YZHmKfAuULPjYEwqSi9VfBwM9Z6xSBp9uH4YvdYlsFiOY-ry-EZt8G5cQ-SDVxFWGCpNnDaa-ta_7rRccc9dlIiaiVDQdjr53hcTkeC0ekchTiUrqCLnbnFubYRSOOI2cHC2fC5_rHd0jMtgL9cypISVUuvwEigOhesk-jEFn5NbAsOSa2mq4vbkO6HUPDq_RTNr_BgVhAEnzzufz8GTNGiV1aTOicRENrVRS-z_NX9ZX_K1Vi_kf5tUjR6j_LzK57I70G58B9-A6sjuYu57MQQylHeU-ud1U-uYVLu1tzd76r5HQ4tuIl4JEYNy6_hEYp4zWdmxopYy--0R8r0ur8ZNM4lGdak7GeWbaQyfakPB41CRB2OenHUgf6SbRmIMRDTTwrZ1ODZ58FGIddGUbcZtQPisMmDtm50VNe5xNj6tfvg2aywOcHPdBVvkGLLx3pDxndXswLW7dOAlt_w0-qxYTRveJD8KonCNobFgHfSSlNrHmsFH_VweLE5FfkCelepO3y1K4jnkQEJ_cXIgjPbHFrX0Jk2odpniAIaO983nUtsx4c4x6aWWIZMNpPM027qX9O5JsELfN92w3V9zKnbTKn7OIz2C5_oDxBozSBPi_xyYo1UFvuAXDGPAFD7plEAHKdv0vkpy5B4mRrtC2QxdMcaceXnehBp3H2CqP9andVilMZJp86xmTA_1ZZHS71BL3K8NAa7q8dGKr7HExiknDa6lGYG9qKKU_8t7lBW99n4I2qu6_J6hMF-OSHa0IjuTUDlCwgynd8_-lQ03v6_INun1sIuRBFtMRAa0FtBW0ivki6QCib41jWEIYlsHPAV_dJtR33UJcHzZEwanre_zNI9kBAW23YgLW2DzJUNFc7Y_VbnqMQR9_bV16lKJflsguDmyvlKCELW3o-RZFW05RlcrKR7_z0lRO8Y1Qsb3MJwquN0-BCAYrMHS8RD0M3R0XYmWvgoT_Zt1xDg8_6-PRc0klEbfrusQMZbvX9HDbOF66LYoqyNWu-JfGa-SaDEe_AFJhurNZtiEUnTiz_VC3wTZaNKX9Yw9e5z3r94uacH8_n8yDkVB0-Tulu48ibrGzegl4LD3-iWzgfjphrwtjX--l7ctxaAvFBa45sOCJPWM9JnSeUQMTTAepuD92liXCsmHe5mTMVctIzTgjic071eyzXr5kWzgb3msbLtOTZPnAc75lj8vVdQXoCf3fEhp1Uo776V2lZE-y3nfX_BLgmABVt4jwVGv2nxCGN7ycj_13j_Y1m0rz19ib5hgkx7K1Hr7wdkksUJ_OFNt6g17CnbToPkfBX36QcHo2EWhzTxqQnHUf4snH2WK7z8aM7msi5DlCJNgU057VQQ73KV_xPYYYnIRnMUrM1nbiAmR9H8aOgRWl-Mdbd40Akh2NaRmWDLelAe3_IjG7o-k3-kyDlp1sU3I-_msyRCdBS2Q2NpWZY9FplCw3AiiWvGVwq609QjAUNi-WiPUDR-EnH-kV5LkRR2_nCWLr7wsRxjS_iZqveNNdaj_Ps-tv6_otsreGbLhoEcTrrpXHkdKqmIJ16yuRMXEHLXh9ToNeZ5E2wkz4dP1olmuSMUKcicdqe5sa-XpH1pHvdN_jR1LQAu_wQx7CMdxcDGekf1i5gYR18qmipm2SYDGnt8F0QMrUf7gRulPUoRRsdY4Ac_cUMeX6oUXNdEgAf7wvIVzZ8nFAGN7Vkpw7TijGfKIbB0TyRkN3MDv35P47p5GcVosPJNL4bE2Rc8LPQf0aEyJeVpe3ksUo5LhFjHOkLosZHddVjwhc0DTpGQtQ34rXYStBOiy0Wa5BPQLmETXawXdt0TSYcAHvPjpZ07Xwcj8FwjKn9LqNXudDqN13nlrRMSE2id1DuLsZI1Ec9f0jn3AcjKtoQ9P-5h8DDYT7LPoQEABm1ckUEj-Eydu59V2o9YAsI8KmgMOkcV89-FQVAlsChXeXYSWwt3quTXFj46cSJzdIiAwEhahN7v_Q-JWnOcxxuvaeq6KQP5ruU2_PrJF9Mx3inwf5n9CE3YctkHIrgo8E8SPBSaOMPnEV4q6SJvAte94TzXmusI5JtGNVlTQlIPYKIo64_wyS9ZKqHwpmA1DU4ACyFRDSFM1hMQv14xriyhzwlfEH8OCD8qy8QwnhmvIVu3Wrtg-rcjG3MNrsMOePzNWEU5mmPBvd0fkLVQOZ1XEBu4nZvXHqHs85OcHPUnEciDFTAd4J7XhduMxx-y-5WmLWywIdcSVITWdXLpCGW46Zewq-P93QgSenvACU7oo35vjln0NQTmqUQmmVt6AaWJWA2Ad3J9ZcDym38fIuIRPbEiRGPZgLMtzSzp_vkV99m3tk20lvsX8qo'};
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
