/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'iaLqHi5bsNgeiSTy',ciphertext:'MnJIHRQUOZjT7pVzDQ6iKmECAO2Wh2A3gAFHlZUJmdhSZjnB1lSFA4cB72VbE2m_CG_fUbVZ8wN3zJLR3XARW8Iknylap0qbkGrRTA22eOEF2fKE_JFrGGH0oM2fdLnbnUCjJUbaWfvp8wkb5sBDmXJnyrU8QmTKKUma7z8rYcTuSJJAoV9Pu31mKoDMmn-sLnUVdq_QiLyimcSJOqGXUlIXlJxDAMEIWjrbJjDJ51B16jqZKHEQw2OkF31DCrnTD84uC_qW3ayR5g4OvlKlLZO29qAsMbvbyFD75oDLtP7G0cEMMqAd6CuVleHQgkbFOobzOyoPISDoFK4GRsrGPLJjzI_cfuFcFBq3-fBgWpwr9AEsBQrUzWD1785ZiyvbsWZiYpr8QDFlhEiVcqHhcDofo0P5huKSMHfsULuFVRYaui6lFFX1XCtKAkWH2ZWow5jBkCyygvswM5WbKW1ege2FZpeTJ-tNfny4OStXlg6b920VwSOcacBpN4Rnq05BYdWg8N4rwsyrDKoTr33jBFzqfkkp9c9VrheN1GoKZHzLdLBmPNQi6Asb8eVaLHhRbhmbMlXs9o3_Juy9z6yz3e_wCls42NupWPy_kXnhL0AzV1SNQu8ZUJAZivzqJH6JbfkYel9w5ODsdxEjSgOvYefrTw-GWawmw_gaQBs57bAINKKxOTP39jG0346UIiqolqSbkjh7sGGD-7QaSP8B35dtqo_xxPchXFmp68vCWqSi0o173mJqi7sS81SRUloRYoh5EF-we0roySVKt7ab-0zH-tqsWYUda4Tkl7kExtKDPiLN0ZjsgVx7pGHxq4OkWLGg2HMNMbhEXqOw8ghDibfcdopvKv060p8z5wF-RuK_Ah_Rh1ZpDA4d68Qz7PIOcVDFIJRdSYmE1yaqW7AHkYrGJmgjJHr8fJ66iNRQyHKNEYPwILSL7hXkn9_xi_UYuXr-VdSpbH7mIniobtwL1MRqyBEHgQEfuke2avUyI3dk24lVAHGdzi5klOoHQswIplSBPHYHaOi8k4B3bRkK0f919nyqQ26kdFW6FSlxs-fJ2OUO9cGs8mN_5f06FvapPJ6ongdsKcgRSRqkGiyaKt7tc-esH_4kGNiitqpE2yaiBskwxsvvb4BFD5uylP0bHwGUt95LwbjFLHCRoU4wydSEUeTvl0cynrEiKIvFwPC_uJi1ddf5YwPWTikA29gmr65Stp5qRfcH0dPr-guJ1VMr8RdqRKhfYj_D5MqmFd9xMwL4Pt_ud_yYpb8byl1DusNOwm7-rLtLeIHE0OspVCAy0zYPrnyFfcr--B-ogFpX9AGqgYqJQ9H090pCiMEGwFTw7a-i6jmvlWB2HONhZw7GNuYFZvxUO_YjfZ6Zzqx6ESsg_ZPdfd9r5OoshZvmCMY_5o0ALYZLWAccIFHDxo3la-hwu28gmvcFq3nul8euxWcWhd3Sdr5-InF6VyoRcDkrykfhjIzIy5rYg8PUz4j2DN5kb7WyN89-JeaV8bd_6FZ53M4JFQEyCpDFNb6gHi_CZPgPikaCVEQfLNiA-8uYGuqsyxECOeOXB7WC4BAKOGxx42-X6JnWYm3cVWi3vO3pJ794d63oVd--vCiqSbCTe4qyKpKLKyRJaEW4anmPXAIPD1fOTqu-gtL8C8oRrqIU-Js7z7WLTJ14IASjRLMgG8dW89Acq8mo49-wTwKzCwuLD1YoJj2ELljKUAcf0CaKLLUJawIVptjwTp8uMrjsoO2kihrYAAC8mouLUGKkWagbIybr_9UCGI93d_JT6u4E4Zf5JrXm8p0wT860gKqGhYSa5VsJvsqftnOcJ8e-8GhRhGlel805UvhaVsVfRsN8VwkeagHR5El_1cCN4hVjJ4hsAyEGu9ZkXzqk-ShzDsv0bjYb4p94CRhSOLZNiFyhR5XHXD46aCgAdw9RhHOES7EbsJIOjp1EGJX9rUZ7uwXcFKiYuc7t6WUjg0vKoGOhL7TxlXcPgrB5Jh82Mq4HBlbtJD8pyDb9O5jKcdO2qgJSvyq6bJeywoLrQKAiP5PpJ0OCFxHWGn0tVMcsZCU3WJ6VxgTxYsbz47uvgxt0OTyKZ14cod9wuT8MGA6KbQ8whq4bMZsA6wd6gCGBz-olFBNz3KZv72TFWuTzAwbsBLy-U35TcNel5SmrGG2sWjMiuQBcnbJYcSaGqOuIIInsqld0VI1SiCdmHoIZb-MvwPqQ0lA8xP76h0kxSeJsz5lrqLlqNMNsLoVNBnH8Zdx0cLq_BF4QrJywdZbWapgkxtlakc8yKZj3OVS1G_hlNVczBf-eQUxNLonY8HA2g66Nz-sCK-kFDCfmCLyHZ-OF8Si2G8kwZV8NoqfCYGMI2s8nMnk_0CVZsIaCPcVwk8RvZwM-w3wDtP-vQAAO6XxX_a2gUim_s6BOTEmqvyoKzcNQX-4OG6md1J-Hw3IQVQRePJvklzVc3--PniiLTGCwMyQAc-Z_GwauhjysNNVVox99GJls2x8wESSrGS_mswdJvVdVxSAl8x4Xihwhcf8M-s4Zt0p4RTbEOUF5dvn4iYzcNyqTUJPYwwtr3DTBA60j4_QT2YgGM4_UpajDpu5oN2UYxV_xUrwZP6nfJKZNcGe0n6_LNVC9xVQb-ao3dKNXZe0vHSedunzvb2KgE4fcMk2-KOLZYLUJjq1R8qcX-dk1j-g1iTHC-l2Ni9qDDx-2X01xt0IgpF2vwftT2LzRovGFcSNAqNxiBQnxdBVdbn8k66J1sK69YSiuNbctL4WcsWyUuNkitBKelxocFhECZzT7DsNOeRm3chk7Myan5q-l9FvEN1ZL9lYAQZZUHe25S7yJ6x7ltm3TFxaWy7t-pVV8gh6l3BL8CFcEt_b--vjKGS7xrOElsPvebAuXds9BGE6T5P1nRP-m-cCHFPdbzx7s5nXgLOBSrsi16QRuhjDVT1BOkHy-YX-SHPBXTjNOsaSYpjOMsf-3sedzfWs_tfZ4xnGwyncbbujo4_wB_Png_lAHqGP7rZY_RCrdUQ-iMXVwIjjQiw4zftsXhfeRwFkO0gBkz1bo65mzp-EoLeIgjIcQ533IEbrZ-3WtQdq6r6J0zx1Tcso1gRUpPtrJNVpOqCkH6_NgYCxSO0UpXOsnjDmjob7nKE_gt2loF2jH5E8pIHfweVGuhCSXU0ZD3dzYsldEoRNIT_G9Sku63r06z_4V3K_cEGqxoQ39BjlhZtA_FxHlAB9EEhbWII1hVEKmV-OXGooPeBgWxhD2PUpAC8eY3d0IjQKgTIS4OVvjvQv2TMsZ-RmbrHx2YHTcKjZTMvDvs6AopsEQxbhIAiSVPKLQYReuURlIt_uDEgKDTxBoatH2HZvvyHiSkR0NhhtZwv_BKl6ADqDA1QvZ7NfH2PPhvGKxN-6XObPHdK9YOG3cbyVygjuKUI-ypExQaXJoX4nQyAsl5atM65nScMY_Z_11-vZSJmhqAFZ82m0YAQ66BDCTsoYQTErRirMJmNzmmU-j51Yj1-QrjF0nm2YMYgZnHuuZMVhId6wrlBJ0v8Qb1k8Cbns6xQbcClKOazyHp69b4lLm0qyWAkpGr8bQZeRlJGcj4ZK0j4eFh_lf5TQOVTm7VbIH9Plvt-Fz-GR1sBRkGrZI8G6yTyArIpvrcOxRJ0HHDAAqKikldqxMBINoJ9qkK-gTBIk_JsAcXml7xZLkBjKfXDnmsK6FA_AxxZkfWD3ROJc4E9jAuFEx5vjVxvCf0G8a8_Ndxxgogb-u55k0yZXDeCIWxJTw5PAJ14sYt_k_vYcztjX3yC9GVfuKt921eieNTbWjFCSaRyGcu7-cT1BEwcb0-3bDD2inQTRiYKe0UX1LCl2X8Dn6MhUuzduYSrgLnjgtXUZDvq0wAxonNY5KCj0xd2SA-Cnq1GA6TOXS34tmrjKg5bsqw6oVNORVqVicdEZ14jk-ylgLEJG2di6caGu0aZLDyq77iC_wHc2n5PFGHbEyNnfLM-aHpzRR5I-FnT5U56vSMD4sS7vkccc4zidARNPe5szYnIjpBczf78Lpy188lP4-xzFZIoOlwF_VAzmf4nT-7JwCnw9Wi3OEqgUjv6PQnqayOFL2ulFk83lLTFtRr6lMGRSM1Ew_UQdLiK1VeLznM3APM-k_lmf9IaS2oK9RmRNfUqiIJna0jBAMTT3oWyIqH9lOKPEWVEhtvBsuZxQe7giDs7t1hXhEWICSycWOL93TGk11D9DZNw0_khTj1qSXBrWal3IW5C7LaIQxagmEsQSxMcXX6DrMuMyA7ptplBjts0LdgYIT6L0uIQM6TvNwtu-6q0xJDmCiWz3-9XJGgHoX8FIZ-ezC6PVK3yrostmlC05EwoDLzomOcTNgH5NjLo_aOCD08amgD5O20RAFXlSAg8mYW5JrbMCy35N3QWhKygibNYVtIDXarOmauuyJ1C6SA_nzBYilOrDpHzrWW7Vd9fiuNGtiVo7wezFrfuYoCgLb-e-jEdxIg8aNYxqIvgs0qt-kilgTmKPGA-lU9CMYGUCT2YfJ1XMpeyD3m1HHrk8aiO8P1nlEcFMW1alhtEia12pAWcVzbcFUTdkR1wyC2PcwWq4RpDrCdLXqqTNSbjWYIh6SLXI4QWDLN_7tzDVQZusturuE_GrqWS4Evflx5FAupjPSNEryMjAZG8Itv27GEuykVLxKDm_OPA4o6sR1uehz7Myw2LtNcEhASmRVyhJrkGTrA7LDHHj6CIol7kIe34D8i4jmbWm_YLMTD9JbSRPKuLkLwcohErcpApzYwLG-nVh8gdfc0rHZAYobZepxOIwz6qwirVzmDndBOyy76g2d1nkcmZ5MmSxoaRs2aZLf9ChCwzJIEGojfDgcMg15OHTHfoYYRnxOt3boa1G3VjbE4n4VaNEoO1b3KUyCU-upJNjovd3IKKfg_pheEaArqbkUoZBYKDd707VtU5zxEhGHzJRHx8tZQPumhaQTRKRXfBsPdQ0X8OkXvC_IngBWwNwStgNuiWB9dqQLOxQIIOvMnMzfdToSJrQPf0qe54jU3e1Nxwi6jP-iomRyOxBKk4RQ-8Sdw-FxU47iaaJE-vw8LuBIZ_x85fQWrb5hFMD1AMfW1j-EDj2pziV3VTzE16zvxQnFIP1gfCYUbKOxyD_OhR-rwcB79MDOdWicbb7jrWhepjHvIlRUuNVtnM0v3dp528eldsXLvfZ5OFD8sasGLnes9MmM4sya9geRAdqyzHhlFA8y1MgkSguumChFnlEKvjmo25b7q-ekgQ-tloona9oYwDZqs12qeFV1AkW-z-V870_sKHNt8S-S9uUAQx8DsGqMsoDN20DZ9XopJK0PM7dyg4iv5hjK5MWdEKU-wqzNA-fm2sCfTVV4hk7o-RSQ30LUeRLdQ7MlQphlqSOtzhrDeDoIE18DEtEgViV6wXT7AJFEo0K15H_0FuWo2-6RgWUkAkPhknyDog6r7F2ldbd2JNj6zwTnUx6-_qi0d9cuvhdzl0Q0HIzqIV_LWF-45fiA93-lxhZtztUhfO6uvS3NLDUxtWlwVE6u6TTBHsD6AGAQmgsf-Grft76yT-F-3b2jgjgkKGXjq_2Cdi8swHgEoI7IQ2Jbs_jb1mT56KNnqtayJlvMZBTZCr8LnYlB9PYe0qmDG8cnnTUR4xQYkxgIn2x0q2QYMCQKo1ceIQWp8XdqFJW1ou_74muK0HVeoeXuXqgI3MHHN--ZsDPhbfv16rQL3ShxYThnhv1qXz7npM9Do07lA9NbL4mYp4IRTDdrcBokwGNx4_CM3QMEnpjwZ6JcVGV38WV467SUZhsaPNSmzMzo0SqYGatdwfurSlGxitQ83ml0WiZKN0yNgpXlStrHsXAGoiDXMIPHxDeFX1Qw9Z8cG1U5HKWO4OVQW7iZUcY4yCG6QmVzdqGmhYal2jK4xNyMtfjTxm1uxn54ko1IWLBSgap59oWl7vz3bNzKPSl6ONHrUxo6J-JuqL46mkyj5jmB2T5J_2wwxjJJFWSUB5H1S9DSMifrLoAbMK2gt5VwlK2w66gbIXONG809z2qQOJzW8jEanhvKTdrNrJ09IY7qspvwK69aDx0m735XLqTFC0-Gxj7prx-GeL1ZILsBeeJ3Fw4s_a86nixMlyqJFtIZ94ISHBM-N_glt-AeMZQZjq5plSJmeAwEQ1tB4UATkidgIuYnU456rhpmwr19OCFbhvuhWz2pv-bJ9zOmwBHttqR9sLdFgoA_KUbvw0oheWefKNmw3l3NoxiLleUaTXmWq-iPEJsJF2dhxLkAlSULC2eOdr58uQqZZUsKtUknB7FCqpk5iCeW9B6DxqM-At_dbJwSSnZhohdgDXSgPsdIVjoNfykOBx9FStntAo2FBHGeQEQPAynWeuPL0-ugjwUMkai09txEa_I5sOUPTHdfIu95Q64fu6as_uJqj2d04s7SG9minYMfn7sclKxnjYjHJKo9zrwVw2AhujGydFUwMuyk7H-p5dlgGFF6VFZYW1NLi8tNDQ3QYjhzz2zOFzlQ-dVrD7Df4KJ9dpkRwH_3pVY972J5NAQcD_LBOw2lk9ngJ8IezNMw0WBgPXeW2Ji3dLSPPND5x4ndFx-Daj6hMJUzvrd2pOBhxOJdQ2JsuiNGY1ayaYCJSeDEQCCglI8mqJK87kGN7EGcX8l2'};
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
