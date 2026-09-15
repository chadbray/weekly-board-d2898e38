/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'Hg4RO_Mjsn38NYRW',ciphertext:'KUCTJfVppnkiiJ6nFvH1KoDYaI6b24t02LNRDu0trrbY02Ye6m-aqyIHmQ_PBnUZI3QL45rHi4dzCnEwbTDRp3NpbcrhlSpjE_X9PB8VbUqUQmjCCvJnIZT21rJe-nUUEHgU09HzsyF5ow1ZNt-UsNr4AWVUwhGb-GJFuRdyJIqURoMqHDrzJjh9-or1B63e4SzcJqGkI9otw-lqH2fbyzWmzywBVV5GD1ouNUpZt3VmZth9CSOCswbSUcnbakA-smLCe2hkagtdVOVny5zt7o2Yf4LZoUYNS9n6S3f86jieKIlUiF7f4SvJl-pYDV14WSA4YeYsPzI6t_uBiH4BgNn4ryPVAEP7qGREAO_vZZw5ZmtTGSfu6it5l6LzcoGlte_rAEVmgo2Xb-bGxMVO1cPZRyB5XL_58LZ6JiEOHFszs-vahhqMd7CeMFcQqJPsy5HCo-mGHgqikEB2--OT6TVXeDgrF5cHD4fCsZ7eU_aYuok_4VwK6Ki8vEglWCs7EUz0mfnSzrNHFhT3Q7CrrwbIh-ANmjMgfVZgyClceWB7CAE1kYjRFvRA_9lofSkHOsh8mD_pvt31yjDhP0wLkkfghmOfYKk8IOEALHPOozHg5SFdJoLhlbnIVhQIiO0FKjI8qppHoHoB5LeCcflkfmNIMMV0mQB0f5W5DhJxmMc0HW3s2H1w2MynCwkv93IA9Jf7JGF7ao2Y4Cb5mDa34NwyQPAYbvZTafzYsqaFmqtB_PCBWRlpcL9v8OdytuyW8ejMiqCg_-GiCysRVz3rXFsU_cCkrvZ5QuCrTMosckyEtA7WIDY6ceYS6ndj0RXdQUe_3RdIqbvI33LceLdCvoUNGWTw8Y8JFA439D0_1WS0CSGWKngPg3kplv0RD3Pe-9SDUiyFspadWcDPng4q9pwooN_CaNOHI-qQYiS7cM4eMnH_fvbzOHM7Jrses18AUEC912ODuMza9_D7hkoCtvhUZgbKOMyjGy1Ae3Ck5KD-YXJr9_tIHA3N-ErNLG5GlQsTOlEpLaRPu06pExUo7DnmjjV_eOjkTdB9N0_F3cqE7UsQUxAqgC_X17CGwT4HadGPJK81X1eb71gVYfYTkQaCvStwCHIDSYSO9u49gumvLYp9aHz0dC_nAHsZ-tlxnUqJbwX3zcfLnjYNurPuyX6b5TIYTNiQQkr8G1SUS9Mt4CHUdq2yxw2XlWd6smcWi0LZAxYUUTCqorPYWnR0IpYSpnW_LjOu77cu2V-TTvdMlPJlL7-zOIN6dfTMCMxqZw-PzyoklfJX_DbYLWHf_d7ZB9p9HzdJOCo0Qfp3cQd_NEaib3zk0KAyH5lhLiNxzfkakexcf_llYm8cjTp1l0dWkkFPEd6vbTQEzTWVhc7WDe5Z5U6ENyXuypfCvitTB0C4ZobTN_kHPhmKfQnihGrMYbnHboyQafYvrsf4994bIGffIgrAK8HArplhVBV6yQbE2Sp_sBM2nq3luQ1IItq2GJUSDLDlAzwv9297BXNTP4cU0yzljIKzetTqcANgFyhGEn3G-BCL_7lMIyYDFZakNnP71kwUCTs5fg81uOtTicWv_3OVgJcMHdsHn404xspb2A0NeGqSJ49zAmHqxVgyBB_bc96735K0xV7Z34lIoaSMdCZnxJILBVs-qZ5SuiDkE2FyNMLp89zBu_zX98-lO1eNNJT7lbRyN-vBoL2gPcgpVWIGXlYmWfaK6Jr4b-v9S6D_HG6uPxZ33KQRU0ClhsTSNE-50fT3_0fBPasyST-f-kZXO6MLaCd3OxwJsdBadcqp-hblLOmkyH1zcOCY7-6z3rO_iBwyZlXHplpoeH8kWxLofHCLT3IhuxppWjMx_ViteDaOsBotNk0AoKiUMEoTZiC9vofUYW01-OWBZfqAKxcb8JSuuJGlbhVOkuSLdVJ35MbLSwQUcGIIcx4GbGJD_hOS9Xv2i6_d_UoNzNh_kWHesVl1PkKptRjEeYRNRg0YDPbFh_vW4zqAJOAYwp887akPjjd7RuhV1TQgVGDAMiUAXCrugHdR4N69j4hShbId0zxWRaDHCTKKDQK8wZjcA3Zs5qXP5zxqZ0QlRwvSUTNqr4BkDVNUA1OVosnJqhkXWnjNI7xz1K3crKbCn7h9JckO-WHLiiQhVet7h0x1seXQv0WBma2jXBKI4gCUWF-aCtPpRaD7noFRPw53O6KGyqvacDfXKWEVuoqas9kCoQTgRt6Umg3UtoeZBup5E0k1iD5ZV8EZEBHJdxSDw5hLdZig7pJS6wIJKzzL8zjCCFPbjYc9hD1xdnSQq9i3j2hKblQ2t3u52pHHdJYbYCip3V6WpjJYUtRJgS7H8rumFsmK6pGGY2neBMKkOgt_0u-jjzny-ghGMebH6G9InsC0pn8aLUGO1FeMFTSNB-mdAzfWr3apsUIy-nSCiFfhjGE4ufztihYap7Eg_jcqVNE7UMW4gQFODCaq7bFsdN2uJoAbBiFZmZC0bj9xNWTM8BN9wUFvl1KLAO6TYW_sCWYqZ4Mk2TXkDAMgRNKYqFDtQT7BCmpXyL9uF5GE4dzsUd2Sno7mFfY5ByktTLqauD_SOtCiRvs8MCPw9_YNF5PQ1FH__r199F_SCYGepXEZ-QrpuzotNfFdldpj3OcPf-9FLav9mveV576kWITVuILn4Rx6--T4qqY_MZkOteVuC2t39izJXaoFu9NBseZUJqANUPQHt8VJMR6wMU4yJTgPB1vsiWwUhao8ew5_HHyIalWrIspaIx27UQlVs8yQ_3V4XLw-1zV8W8diC2RxRPFUxdgXmLRKxE59Kvzvw9R5_ZgJnfL5_aZ5ESfVdIr3e0w5cOsI4L6hnUB55LE4zE8EdTcJMef0WxDAyZ-bqNK6UyjnsfSdJKxsNMt6-YFZfsfAhq24ztWIjE5LiDnlw6q4J-eU-79ymxMMqe7aFwtT3ESHeZn8gHocLPPvH5vbLaO3o1UKppo9wLSkwVhI9P1u5AnH77lSAuEGa9tJc7943FZjAfoIB3qoxFrXiuNA-s6dKiIUzhCi1pPYkCIQVqw6u4-DvPjCUFWP-SHutl_eco94iu7KM1TH6ypD0ZpbAMCq-c5tCIEtHI9y7HR-uJLOufEWK3yLpZgnZ_fY47rM3KasubG30LAwk_PjHm0S-IliSaHSFKZ7D2c5pCNGx9Nhx6A_RCmgo7dMjFt8qOOikMAle1lbGoJ-OE3gxkI3R4e1j6G54er91dVxcquzyggZbvXHugmk1H__OlXGUrgQTPoeVBCtGSeVnjYGHenGTiOBpZHXz-WQVFJOCNlC56Zc3VKL5uCQCig5w7Txo09MYzkgmVskMrLVMNYBTrbXDaKIolgmcAgQy0Rf3B7zD6e4BloetQlCndm2vJt2YI7kNFKcH9Rxr9hQaZffG7PgN5cqxXPkmI4aW5doFhygKJ_qhGWzkuJOZNLtdLXjyDqhXEmw_KbkZQLMH3xeBV9qfXO8vVm5FPfhDNXWew8rW6LKvpMY7WettgTlPzKs1bOnXzOQhoZtn257YlVyc45W4EFEUaoIjHcakwyYQ2xFYRHlcOZQ30xYbKYP3k7iRR9LdA-L0gPb2db9WSZqhDxXeghxszSyB3xmzWkFdam89Mu2mu4KRHQG-uit-uxzWdwzIoh5-e4M4k6tDdwOVADmBnoJV-AujFFAN2LpLll8-sCxroOxYrTEFI0PdOIoldp0kmmr8MR5YhJhBJkKCGeGSnGfdpuFhTEo74OSq-_W3G9AWsyJ5NQLsCXghh1cMl6Nb_m0NePwo7k1AAOfrBF-7Eq1qpoqHUX-QwJVSH65tPG0wbkkzaqeDssnGZ6TxsbUlwp8vm7UVtFM0qFZfdR9UHkw90WTzLwQsve0kpe0TkTZPY1QFUzhQQmn4MdpcMXyFw_h0uKWji-OE2wZnWqYtYRF7tRJ5xuChx-AoUhPEDXKJnLh0n0hvnB3JEVtOGU-ClKEBk5EKQTjgb40SgIuu7GKzlvJpk_wKE8LBcxzQ4S79mZANcXc0V2niJiTuKnqQF2TRMa3HbcKpFtqTI4EZ7XjtVpO_2P2XsH9qzqIOTez1MT7knrwqlI7wUqFO_5gSJqApiAa7XJa44-WdOicVTjSR7HLlIZnUN9Tlnc4GzdZyvT5UaBOjZmwalf9M8zZz6GgezYw6jXYTWV-AzwbWJE9ZN30FiBq28j1etCamKl03ZA-bIjCvIIfXuiTUWGWFfr0ESFjilMKIAmqnLiglNvWIxwCxRCP-1A_XbvOKqe7rPKmHZ4y-8bvTeG3qaZ0l6pgbPCP8eVvApalOTMpW0DQNibQGrzmX-4oTn6UsAZ4wjotXXYKJ4oW14t_6RI9wyXBuerLkCdgTHKQMOs9-lYNCjN64rR8ndmBINlWIUU4sr8KkYKq-_MdGcsKuVLeIPI-fxANczKf11-qgPF22O7kEQs1UcdqxB7VUgYRKuhCZM3sCnzdzcHW5NRl-_Li3_ngEAixYSWGuOnIk9VhiohAWZ6wapbgCvwd4sQFuG-5z4uptD2UUoL1njAtrdknJ3XPbRp0U9gTGwSPg_RQ2i0L2ks2qpw_MEZpGpS90Efo3Y_xJQTEF4RU1i-S3qhKxdhTiaqySBEYdmpA8WrnEsuPPuloKHJwZhRiJh0rXcopmllEwUEXpFdXNAA8AATLqmU6asfU3E-Qn0cr-HKUk9ayBbX9yRHIA_cmq8dvqwHMRPqZ3KaEDs6MncqcqcbChSDdq5-Fgc6PljO3N8yNmx2pO52HWce0MdOCAQRTzxZYLFCOyb448Ft1L4rx_Zvt7_tacB0EP8BedJ6_BvnubDqL7EsfhnQhwDSKTmVnPk99qHxG-aq-Zvx2FXYlSLar40XxhP6Zjef6Tdizu336l54-eFW1cGHpwfKEew4J5zXOzoAsLN6ES12wY65fWv7W3g_bJ4QPQ_LI90HdEVH1AfOFbkKtGW8KB2zcx7nzSux9RQi_ZJgRicCuCG0GwG-fYn2QkgwJRng0NOkZq57dRGr3sHnNyvo-yBx3XDQ7pBuHWPbNKo3yfaU6wcjJVkvu558op_syX-j5YTkZNYrtZrlXyHfCn0J_oZpU5UstGuIeraEy2O9GXZRtZQQ0pb5szq097FJgtmBOb9MUfE7MWczokv408tN_vOQSCkgF3JB_g5LFPix-upoSLBPS17RwcwZYyjbkftHMqaKjUE7mb5-WZITfW02FanAIkQ32XhG7a2xwnCQTJZeo_pqZ48WUC-Qt2rr9qCYr-2W7EdLS8if5fMEWEKiCpn2Fqwo5ApAHUCiH38uDnnUPWSMk5KocBd7eycPQMI0ENeiqASKtb6XYbYPE1fsGeT8x6QUDJGvMLqlTEQhauUuys8TMyAdvSG0zCgREMzpeC0KCcFv6FaWxM1q_UM7Kwnspf3w02gQB9GNzvqcnxGeljGgtrnda2KqQhKUWylSj921AzGLhrKwCxmJtsvvddKn5tPE4_DuKwOTZmx6JhSOzUPmYtqd2dxx61S5vg43zYk_HJyey3xLViDTwqJZsPeH27I86CSzv8k8mWHanbHpNTxBZ8hEM7UBKitiwOhr8KsE7VyaaHGLJOuoS_xn8PdsP4PaDKk90swl4lgcA5DDglQayiRpXANJhkKn8_hv1gQAmgpUD2ke9AX1G5sLG-pe13oej-QyFYriPvyVAdjMp4GkAdMrY0jp0hNWicwiDGhw7b7j2fQ-OHQ2Uqy-qlVytz28mOBQE-2sKjEzp5zJX-qCwdXp4pmyqkc2FqDTOvqYuYt76xlDlGKvXLm_SaHn3oQbdcMcky3qsXieAQNihW4g7Fp2ARL-zQVJV6Pi8ddP3qQFbLX11luj9X5jHHuyZ6SaU0vIhjkV_v7dGeT-C0LWVQiyiGTyiCW_ovxq3AqgrzPKx9tEIo1abQVpPDGRHpSkFG68_AyaH35nnnJip2mSeev4ot3g8EtCeBlGUD43fKRaylTkxvTWYkRO2stnmKIecYIePIN58eWyiVqmB8l-HoHqH4jHkg22IvX8O6XNkQjyhuChlxVq1XSebCEoqiugwAHse2JhGF-hSojzBwdnIg7O0zQu6Dg_BNuVnWCV-1i6DiCClnpqG4Ks619XFxFk7DAFvkVm1yWMPsDYBhnggkomwXgE2eAgzhcVSTrHkMGg6LcLXVwxIli21dcx9aqIFk18JCC1fYGe4RDpKp9X4WImFsQtDs5xjkPzd7MfqyLEc0BD1Z-xHlMQMDPSKHOU8ilThyTyrEnSOR1Wz8v0iFmGSw_orN8sRRDRwKaZK8g2oFuR8j0Fh4OIFal2tEyL0fn_Ihb4CIUAX2Kien-RGLsp81JJ9uCNrhX_hO7XpPk79nifvC3cgOWI77hXkM_zL3eHtnVXpDoBQH6jdnBFHbsgXmJaYTA4hJMvn4dF52SAUyyUWcPP8z6dTXk-7toteuPt7z6-TtW2ZY0FO1AmRfw09ZGybdNnnCaNs_XfzmrMBlZY16Mpjse9DHcrvALuRbdUF0cSRrTBQ8R1UCR-il9PGcG-Sqgs-BwufKvYOqryHhYJtXkbprE8UxEfr9kIXIl7ozvqt77__dxhE5v8RFyVk8S7q0JImA_sH4bBcXVplK0juOiTwxpRFszQIoPMfWPjXu1Ld8_IMausNPjpjR93qY5vNO-xUzdOl6Qi9gCaXR961hjOk46TpcQ3dNzWgZl_6O9vd7a_k6q74YV_9BeQoe2LJclkTyx47ytSru0fUxDF11mrTPtksR57zIOX4MMVzQp0FB8NgHAH_qqf_SCa0MxZfSbpszUQBZB3bwN8PTm-wsWimADfflyFa8rx7b7G2A6Qn'};
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
