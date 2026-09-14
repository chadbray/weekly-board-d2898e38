/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'rpwWenVZV0KXaNFc',ciphertext:'P-kSd3R9Im7hyOuLhkNMu4g4HVwYB_GhSBF4sDilmu1KWyN1AEAk2i_EBu-mR9XUSp5oducIrtTwyx4QvNzp0cv2kny2LGt1z70_06ybwvHzNc33V5wi1Jbkm_OZhtikfcc-JaiGHEYaiweX08WGbYnCZ4jRq-GKpP-4d9GPN2YbGnWzxrx61de1lPPHQUpt6vYtF4BJK441msCG8d4mptBhYj5bFbtJ4IXuPOZbytciTCEizlKKJSQR2ClwrWco8TJAwd45ZqyjshWGwHGi0EIFmwaTSX9Ss6O_y3VeHWmLTRImCVPJ0ZtlF0gBPSSZd-ALZvh50QVOZf5vDh86UIaIBCAgjkzB1n7V4rDxPGKUoYlVy8BDV_w_ivWO-UngJiS4E8Eay6WiKq6oH6qNfb3CoALtiH3oQ-wpP7Fn6jAKJUp015bW8u1VWCNbFPRBs1id1UlkIFU7cTYb-Bcl4mUEIle-J2vN-92ZKrYsdYkd5HgyyoMOkNcerpU9BKb8iTzOLHJtNonyC3MTxjDapF-SQuJZDJjBCL3BImPFDfb7OQytcZsWX5oK2jq4C9tT4h6MNZdDFFzOxF-4UEIYj0hzG7O1p9yNIefyiPx-4I8mxkBnb65NwO9swpGSJKO-Go_DNLCrsvs_gjHi2bF4i0uCudPXths9aaGV8TM9wUdeb7zR5rGO6aTy0vTqqbmX_gTs9bLQfb_WmnNtr1_ynst5xcy5iXPy4Lgf1wXCTkrcCMybGQILucjq_4USNoRxyhMxN93_RX1OZxLkqOvU_LZC5ihT4eZ3avg-4hPreRIz6V-fgGJShfb99j92PXdODBM73asuTOTG0lVoQbiVTpIeoEzAgasxysfezHXK1pIzr2wKsBuUaUaFfczsldfnCtbMcWQftO_37xcPUhRWAtdH03GyeqdRwAXXqmVClnIJBvM6MHJjksU_Xs_3q87Mcu6syXxrCJnC88pTTuhphLq2y63OqiYI0gTjC0yEURWy9PyZtVCofW3Y2pOOx5Tqsv9DJzj0Z75W4DPxj-kimLuuzOHvz9jf2bmgulVMdfUPjXQIlPPwLHFDCLvGXs0wBX5ECunOmdAWfb3_ttjGiKwDt9wAeUBCIGlllzWPNS_n-f0EdnJVBD1SATRs0TTLd_6Yik-KTh22Z63Kwn3vCA2UM3ZnBg-sLfgI1vVY9rZTbXHCjBSAbCqm3Mgl8tViSxet0RTQAstAKaIoa-PZtkoucL4H4OAzbCF-L7vfzX5WbsKbknq48vr-v-zfIjzngs6itUlmOQm-gou446ZJm9xBqEy0NBeSWdzkhGFPdlwTRYqymYWSikkQ0Jh_Z6OqbUUSVvb98v1anhy_cR4j1kcm5uTfB09u72US-hmFMV1OjJOCGI1nxLLQc5WCUEwVcHN4ToCBxhYlu1itBIClqp1gjGmUuwW1XfdE6D6DExx3W4IuUVGE_rDUM746H79_9LOTMu-s-CAxAN6tnhuNYTkwrJNOiC2NVAX4w0Wsh2VAZTZfwHhvyKtUv4Ue5077d03YYx8-6kQ-D0eqBdwfsvXiZ3BO6CRc5zNAtNgjjRMuXI9W7s7HlmlsIyfuH0otURHSapwOruvPxFoFR4xCCL7_pNxQSAIb2qH8dzDyuUO4sJ7Djo3AF3qYTXnBJavWT3-45vCM7mG4CZmsBa0lro0Y6lz9I9vefid-dr2UBxCPuWyEuwwH9oZnMnp_ZCFQGztptnzzq5O2x0xr0NwFqsZhevHycM_g9juhR9zAHyf5lUf1oshVVUOqtADitYF_on7-tpOckCvlNTqVptpJqvT_ZKiEybaLlFjcGUWo8FTptmPqn-2zDXXC0sSBVXObk0vdzIsOzEKGPj3NLDfihU_Yibhf2xeJBBp_PNpjuaW7UTB5S8XkW-mktLuqQdhABNs6n9cwpa6-2zqhPQ9UETG-gSI3ArAShHQRyohOWSIQNV8Ati2E1rBuZi2YL1y2HIeeScBnz_RwPkg1j4SZpGFDdmFD4n_IJovwMLhLf3-DO-8nrnOtJGEhRdiJZX9TmwTHWfKz5uUrSPLToOBAsHerL-slGCuobDsOX0EYApqwAVJDHdZJ2o-6rJstsXPFt2_DPvSCM12CRWXM3ybTTIcYvejI02beIJrxRGuaC__8RgQcmNiURuTuMDSu_hUC59RGkJAX2vYqdBILrpqeVjDwTXczRbwPHvSyqqh7-T9-vIDJJ2uigi1FqnBAmipGNonG26D-YhyCV4wUlj9_vZa0iCyXEo-6ik6crqJio3DhDiMY1SrGVKHDBM0miN3dq4JQIHzSmgXOlIueG4fAaF0dSJdOVgDIq8303leFmM6Ea7XbF-1XW-zNSwDwu2hQ6GKeTcLMzavCbiptP2bgzcQnPOyswtUqEzrDpefp0raMAR5VKnXLYd-mqCpIioKAL1qQ6ifgUsIh9KIk81Jt3t_cDR4CMll1gpFkbtrmgxqSI_KAfiKh0w3MAWthtvVoJHewzEkDo1AGiZiOMvGINS5ysc5hA4r3SR4fvV-PqZUcRGwTmt5HEenMchGHqRpVVkMSIvgjXDhm1iBgT6ZXJaDuDTpdtpS8XnttCS9TaSZ4ZjsM_8-payCOHO8Z3k2oQrpLCy4hoRkidTEDu-ux5bvrWLCHyWU3l6Xyjx0u3kD2Fotnf1u1JK8fnuW-sUMKWuG4fUnRSvV19FTscZYlyd5tKjUBlemUIKZypbIUrsOCtlDJ7SkRmhcOJtv8_lgXBRORjHNpiuX8o7Bl_ji7dl0t2wzFlPqiB-D1CC5wFuqm-jDqjejGdlyoALbLd0o8x--ObHEBYRPr_BCxBwSglUVHTyHtpYI8AgcHARVzKWXI9qIv5YLFXeJk7PQhssBVYyBzOPPgzgeWBv5DSIQklBM0T4rH7rXiQRz5DLZ2unmSediCUqQlUlAZhKN6ttafgdsReMMVGTy3M2-X3sxw0bdzfT7Mx2y0V02i1RgxBItXg0QtxU9zdDbL-ULkwqp-qjUdKofNsFbxIl6ii2T8AS0TOLNfN8bHEnb7a5pcUQJiWkTLV6aU3hEuR_G5gTW3eq7pZ6afo0qpksVpMhJVTAPNLo5r9R34rN-SZ_liNvlCTnKpTvdHW6-jguVqZs_VbEb4HzMd9x_p_p68aCUEf_7CaMWoQO4HeqKpJtYO4ui-WhHdiouaSapuk4uEWhbEJ2DP5AHr9fqpbrTPRULFe70w7StfOEKiF7v28YqIttrgOUZ14C7N5i14vyTAnfnTgYR1n2mO6ountV0hO-79aVWJI0PLyGvKsVtRRr2Z4OL8YYddflBRUANqE8hAuinNNzxwI7SpL_VyyltPXqQYjTCAkJvIVYgTwH6c2a_TQXLau9Qm-UNACLgjljGFT-UfjqSwywSoIhSxHzcpG78osyDaurkpb2A4DfyCqO9Hf7U_6UG8OSq6WYC2712qNj3kzf29qQ5s6VHjmiuqLmvbfVZAbGANxLWQ8xZetcNLFW1hnELv2nkNHU01u-X0-bt0NCnsZJZcj4mZd4e5P1ogBPT6GruGKIoFg7yZYYYM6j3qChef4GlpwwA1dW6DPN-HNjLwlpqhlF8b5dUKtZfuOoO_nsKB1BZSyp1CmCQoyU8mnHlpJxOBcr5pOYXgJ7kUZpfneZgvndLPlURA42GbL-YlGfZX5KhortV8WLGQNHTrDrXSc4tgu6S7hNIzwbzB6avqqTwS5OHQEy19oFasfAT7riX_WcWersc_8pTilAByVNsUql9dZOrbdO1KdlVfF7yRF1ZhREqcZ2oEwSqeROu5mAsued0W2qEbbdo04txdLc6gRH9737NeM1RS5u1iXsLNJKR-qYrr-MhEO9hbS2_LSWA-Qg9cOBf6WUCUs9MX_Ik_GKRSmGPD0i1rVLHqCBYZmlCsVavhd4Dz9zvNXWoA9DkE_qaC5xulnSNp3443sRnUxI9VrMLp2OPGk3_kKAx_M13NhtvJ2AY5gDqbZs5T0r4_yhUsTfCU6GMuJMHtFoIDTWBbsgpbaIRLFJWL0trzl93wZCAJy-E2Ye6P7tRYPjDRU6nEMijTMTPi_LQ8sMtVsbQOxMgyWo_925CxnLXvkyAIuJf0uO7BdSn-ID1YlyP9LfiGl_ZygOrdAaqRU2xCpbD2CToIx5AiYLIxnFlP7SJb8OPIwaMiBVIsvSWAzvSipIpsr5ZDAorI13m-xVfFXAc-jagba2q1kgDyIf4GrDeLAGCHn_73DZADBoAqb0m8l_GTE67hDrX2qoQxmSzxqAFwYrfmUHoKtWfl0y17ImsKBwhugpmE2my7l22Mn_hVlwb4z7SW12sJ4frWlZcyPz_p_gJKvNQuhkJASLeoL7ZiS4qxb8wNQMjgPG17jWWVzZtqJTL7jfrkMaYQ4tOKBL2I_1AMA0lZcMdcl4KArfuWI5ODcP6ED7HKGRcJl0uaUt6zycBITm1E5JLDNn-_jB7j8v7AmjArrAet57PtiH2nYmFUWgJPbIO-N1xl_45foxBZGhY-GDScSlrtt8--teJXODD0JcLXjAexYRrcaYTLB2cV5Axovf-_vCYHTVab8XrYJ2oZGphkFqVX1RIMEhKgMetW_kku-cao1ffZ2IjxynfgyeLPYRbLeBzeWFtvTgpEb_Ay2OVCLkBJkFCK9JRKgn-k20bcczpVGUytANmWjhrbbArS8Nu5DDK126wEsWTVQSvQL3s3b40UNiWMW2CO4zjNEVK2CdZLlrifC_IYp9hMrmT-8vjRKRP9f_oWhE57B22I-eYb8z0L9cA5Hl8o4Udek9IlLccH0JmX3fKJDNDWtVk1UV9IZnPosBuUZ9BrBl0y54Z2zK2axnYaH5XS0qcuc9uad8301koe0-o9hBzRiRTimPWQjB0a5ez-LnhA8Lsh4FrnjGCTm-XwdwHo7qiLRqHeOckJsKL7kry9iX6b_t-Knw5A62_UcN1B9gNBCVcbWeP0LnzD1j27KopIV7N4Wky-ZXfTSXEMW5TG8DPZuVYUdIbTrRJwjhShbQuVvdN7xMdvTUjpzHoxiAMne-AXQRgBaVeTZ8vinyEVza1M0Yqlv3y6LDP-xjPulHzAF6vN3tK1JFj1pl9Xf5oP9LuwFyBBoa8Um7zNywLSTwOyFF8chO8Wvxz1cBiE3NJpCfQx47I4_-E1DVR8J_qdg52RGc-gFKlx_g8h1bpY8E9guGMA8T-eJDaLvfiU04-w-Hv43lKhMnTuH4_Nr9C6Fkw4yUX5X9t_NyR8ndqmMO4OojwARSVkS3T4O9Wh9mUC47nMwiRBBoTL7EWLIwczbAg_IXGoqGhEBBzwIjH4uQ0TH72SuAPoLsK_mmRd8ERa9jucB4j1ZMfOMSdc8IhziEMM5tfbNVYLLpYuTidroOFv08N9_xY6CceGeAYLwQJuIwHZoWp1v2702CvscuhLd1PwgdS9_QMswVIFI-NzuFE6Z00fT4Z8IXFSWptmFBW6iyLSESWxKwNVjbDxBUWMRq8d6qacWFBcPiR-DRSIph3RVUIbCRS3rbmPoE-6_t1Q4EE7yzPPWcGX583BA97T3ZhomGDl1L9f-QFYKA60pvwcDJbD6E-PfRNy7MpqS1bj2RKpG2vXrLSt4LXOhtfbaFV0Jul4-pf7o402SwmxYFUlfEV5lGvYTn44x-D-qb3qGs4r3dWVzRk15aFV-U2gUhRn9-ZAM5H16s-dVPTVd9LSMbpd-w8eLBlau9RKCzWy0_NhFk3xVHrMPEXcqmHEJYDf3dbqNjoy6Wh-H2FrRr3OFX5jHUBrWIpkvPZg0OVEqCi0e4mhqFTp4x3oQA6khtCfoBTIMUqOeTP1nHQXIZCLMl1PhTc5wubE5m6Qr-uaRRr1_QqvxtKlMtyKL9zvPX_OHnqTQhWvknclfexFCda3zqGVn-M8HI7f9X_QH0fcBcj6zj_s-0VcHelMg-CsaJnsHgPmG8LXd8zvg-_-OIg8hfvPsB2mDVD2qVZtqaVEeDk8q8-UJ5FCn-jbIHXllddlHj1xulIzdueG5wROhTU9R6fjS1_drJibOOHCqnhtzwClM-v-qw-4voKJyFRZk7aDpWgmIHugragbmCUHwhqLqd5O0K2VrAX7QryL2X20657BLPSW1CO9P4Zd4o3YxedyyPh-z_6I76a9j3IkOfEAudZPsUaWngnuvnOfD0mp_-tkt8mgEXc6ZlQowgdmtxV-C_wgnM-G3-wZn-Da4sdDJe2nH_-vGg9UGCPVgJxYlHj2GBydg-KksRf6vS4Xd_vnobRyCGXpGSpxmlnwuLiD1NM7UU5nNIurcRLESO9hlEL_cSMJ9c685bc4oTYOITxsWOpRfGy_xXEJyzBygGfTvXgzMERlCFu-2dl44CNnuu_OalAE0mcii8d-DfP7vW4Ykgk_MUFRvkYuBHVXdB7uw3EqxP0zNYH-esn_5JlFZNv4v1xNnnBtRBLZU41I5M_ST0DUZiV4ed9TNlhn3mldfjV7dl6YNZ2n2GiDqImMVarc6wg5PgTSC9rFvhMRrP_Swq22OfBzZlWkqAhblwrtppuuTepNEf7xFVtqRFOT07DQ'};
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
