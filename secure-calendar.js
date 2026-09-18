/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'DL1i4XUV3Qsoprnm',ciphertext:'eOQh21iUdqvKVT-Lffax9zezO-IB-JNAiTi9xOnW2H52qa2_jCiZ3RqA9uOmjn5yNWJlHHjgFQ1moBhOva1-jKiSCIvwvPIcuVoPfNWaJgPA7wvRGMXxiuq8SvSXJ70p1TzSnBrpG3zT0EFqj5dnQnZnaYhqFDZgXXEt-JWuzMnus9MWa6qyREE0zceTAYDKXQUCKQHCiIg4d-puZX48H34O9HdbdiHU7h3OX7OX_Q-8Qc8Fchk3fkyPQEaQi25X9nvE7DTEkhO0baEeCAbw5XqZ6FpXR_e4RKLsTQ2GSdGQBfZVyBJvtxerqw3CJl9VLcz56IDpkKWsM-Ib3Ut1CoEuH4CEJw36BxWp2hb8UQvJ3dkdN6lo4vrZLt0aC8JsBYc1qtnx3z0X8p-2cle81x1a4pWnfZx6TBWLgB35oGL68qvA1QOCkX_XB2079lSzcgMc2gL24UCaFI2F4GNR307PavcsZncF8rGSLoE-vfZmG__66ee5TC8Q46mk09_N1aseOqXZMJYt9wZec_HcEjIhkEKJhUOr1gy5IekpYL1_MuCy-CKGu9tcbMo9WkmT6IPRmW2x5xBL3M-yq6xB6UuNrNnTp7dTlB6x87edaHz5CB7UstKhdhD88lB1Y2shEbDlpUYZHQqht3m82kHDOFtpDNjj_0iM5dOm9lzcdrd4-Cc6IYMvraNpk31ycUz5XmsEmmfFaUs3fzYZ-u8T8ukrjYwfa-J6jfTrxuIAmQDJFm2L7j-u4a0lqDFdImToCnQS0W-vNr9EGXDjW_5q1Njv80v3fowOel70MPzzn8GusuGbbp80UK9Pes7J7LJPq0PHi_a5XCKbvaN9FV8k3B1vjEYVtfp5XygK97M2uSxOvn3H0cwQ0BdzklGN3x679dXmxAUdsPUJfHgnVrNrirIO95MrgYG-mtx_wBGoVR54_0jn7NFjExE0-EyzkG2ZfUxVDAwqXjofT-5ViVU0xhItK_jHZtG-Vs_rj3JiPndD0h8Oi0F8kmoS2EOTHzqvR2zIrmrH3ccwZEaSSXZasK65iG35A_TPcnZf1QdzNlmOr3ZxZtkRN5APPNiddsXNYtVdfvOWYdpDpbvrjk7rvODYbZMGqEiZp6UjGO26eCqZTWQ0hm_FjR_HdTQ4rodZWEiurvudDKqvvzj7s26Is91iq5OM-VWpDtVbHPAGJFqrZEIhTPS0n9NjgQ4EpR7shWJXc49nEXsRi7dNC_eCVFi9KYsFijvK-XaYI9d-qaAK_44j1IHhfYlFWLwRiAoVpD-tNsFsZ8jpbWTDRACDRcnrFR9ciptgSWs12ahLWiLE1HYb3EQKy_yg8KRcZmPP-D6DvInCf9MXtVu3jHlJPUWFg19-d-WMfXeBlLrjOMfMzQKj78F4Dzz9caP1dAURbg_8PitFyZzKGfyUmEwTrm5IbNP0GGB9Kg-PRTYkmthuxr3U70HO8W2NddNCGukq7WQY4SDP8M1akXCi6Amz3F-hjo5s-8ezOpUcwDIb-3pSCFtvMiDjbMzUPRZoUYm8LM8if-uA6uctI_3Ga713n3RosAWvny8jlR4FqTAdvcHByg7y7gUShVkkM7y1S103ctTElY1MpLBh7r9xsVoNV7ZpA6pk96mgrIZvvW5zth6Af-j-HXhGklS1tASuG0z6-zVaQ0VR9_X5v-SnWn-m7MgHiujVQO4tBUNeKu4SwOzzJrgkgP_4_tTtFzYtSXqvtpDklTWyspjfbBvBNCg6se4QE_RzB4AryPPV33x3riC7N_pBYprQ0A5tNFf4IAlT9cx38uLj7lzQyrUeHSK4H3nLP6sHwJTH8BPyXvq53KF45fVPB7H2SIp8IOTpuDdLNqOWmZ8DaFOwGD5iupfBWcJb66KrFgMtyIhGDNns2_tUxhyJ3JstkT8UH9UKd7QHDRTzJTt0xjC8gjEQS3eHKs_Luwf913AXSDuo-Oz5eRueydewVM74gavyL0L5XPLRabyLdT9fhowWgWhaoNcPegyRYL6jhO5hQxMqpjavfBsRX6XP_LSBjc1T7rIS7IhgBZarW7Z7XoeE73RUvjJrOsBzc1hTFCdAwNXN0b44iI5NGU9QwdZbx9Gq4FnFTNai1_vGoI2RAD1-1UqOxGAJ8oLR9z5nZtcbwKMmxH1T0RlCJIde8RtZlwihhR2is_NwUdG818ZJAC3YgJMrGy8gqRxcrzBPSOb8nkiybUolJSdxQfu-EjjUKukOT3wDjBHPEHoiIA4KK5Ejm5QHYeUdtOIOl75ZhqYP04nplMqJv4C8h8uD8HSi3Ws9Xj0Gk0UnRuAYtcI6XgJA1GeiuWC54Ytck9dTvr42laFUHmGcfU6Hm3n427kiid8CUto-qUs8lwWJ3_Lcmb_bWvSyVeORM93ADewe8ASF40VXmHqFHTcPPChzHH4CKPfcJMN664BkPsJhEePYuT5Br9pMjlP4Todim-u0iq0GIFGJKfgAaNSLCHsFb2VfgLvha5c_3GZ55JdNdvwu_cysdMP9q9w2frpdhouM765KdqLR3rf23qurYTqdriWrnocao0uLVaJJ9Hx1ebFGwoc69B7jBKfRlDlnd2dTHbWvFeKwJ5ZMZHCKXne_R36_SJShmDx36SgZeK4fcsHFWTDFu1_giVpM00XXZ5w6WtcBMfcco8O60JTHKxLPLaOSW8Lvvpx8XiuezZozF2gQNjeilyao00Q65J9AoSx-0JvvfDocbHFHhqnzjibFqCv3Gyus1srRGgt5a1kKV18HsKSTPWq76TvrgEiEnobOikrvO46FAGwm_URCwmjbTCCquFcL0vKZm-HagDHAjKwakwkCZVQ5KSQkwELDRtp_RhZ1UCtM-lVD5a0Rl64wN57j-EnG5l3a_QaGHl5rT56pl31fGHA9kLnAZ7mLmq7cf3qrGLA8ZIPxDNRGES20u8mpBCTRyaaJJVljQ_b5AOR0uKStGQDe1Kclqq7iHf2Er8DiejcbPiKiWp2sKhQ5H_L4L2NQYofhPQe0eUh8LrBgaQVY-2Gn1raLd41U-aIun-e5Xf7sp7680G1q0f6GKfJBo5CanlsgKilMemPzlyFB-qeddUibmEIT5PbI3DAmhR43X3EVOdM0_pS136PAGgh3B2FZ3liHFI378posO4qXz1PQ_t-iB3O3ifnH51tAljZdcwprlZLjrGOybteZaJpJ3OTRhW2F7PPOWh9TRamlmTP_WeWfjVniOPvhC5OQp8zFjkERWrqG1iWFnSO1myQSgyo70dmwJVMat6U6HM_1_RIs1iKbL_In75zn3DPVkabaxY3eorxVX5PVgsrHq6i0IgQlwoUBFlseiRQyBk8gIPzlC0tVSRXrBbPmVf_0f1bGskkT2bawiO0MzRXFLQGxW-x6LM1fe096VizLEl6FGxJCnT0CRGcSvt7BH2YIoMiTNKJwCw3V8Kao_78dAEW4o_zLfurWHyTX4ihWeO4XJAIpq8UAIooLGYJBHF8VZ-xOSYTMsWXHwTBUL_TCHzx5n1GHwjT-gDQ-HNnOzO2m4hnvQJAsX0rnKv02j1qo5LdwKm_iX8N-LupmTSjM4KjG1coOZTmny9jCD_iOQdlNRMhIBOqZ8-5OyG7regQrb5LeYPX3v3yMW71oOcs54llCoqdB6BHR6eZD_kdfiw2czmMHAdG72yf6e8GZNHQJSJfTf91sdJVfgzVHMbIMZ3mL7SNbGr0zQmnLMF4zWEiDvg6gRjKSHTjulxL5JIWCXSguGooLxXiawnea2x6E2GpGfgsC_mrGNUxP5qqywvdt3bUwxAQH8lLHHEYNCqSbD--DYzqj0BwTLa_q92kpAO_1dEIIityLqaeAHBjMmZe4FNjtTfmYno8PPl3eBRU8BxtXPSUpntB2NYchXpmtWfFZhDMutXGms-9kXMiW2DbbROixMksl7i9bnQhu2RhLkhCepYMujQQo7mNA0EKF7cshgQxmHyavb6HQ2PT01kEUS8280lfKbo2fK8-zMXmADl-09lz952YatRlyFXMVatTcx25kC58mng0L0mbb5K4huCIec9kCsXB4JC_QxvDk8oEanYM_aDW0mk1Zz0jDXGFeI8dReh_RyWPErHnv_3PIwxXpi67xQtNqVG7664kKwXBOlnGr2sselHTIH7ruBCSQ80sOhMTjjo04aau4wojHcM2EUoeywsE1rhmgbYybS1rTCBqO7Re07cH06OXYiJGdEO5hVNgR9Qy4wKAnQjV7wVgrUiFV00accH-w6ExXhfPWYDsKeFi5Y1WjoGwvL6jKFhps9gOS3fyUmER77OSLOnJWvQxO7JqjZJulJ3geTL773ds_wQQDaJaBzJn-RUnajPW7n05JSjkb8ba5XcsTRJ4Q-A_hGE4jYjDTXTvwl-EOq2yeXg8vLxWhQ0rRvwvY1b-okq4sMAwRjAzh-J5ZrUZQQEZoOJp9vJUKqE7XP2rmNwa9nvl_CoL4z3Gq53EY2kVZ0HEso-3-u83S5j1xqTehotLftib-fWwlJ9lb7fW6uSM4ymIbYxxpQNDZDO-MN17xKEgaQaTQKccSGfyPSHvweoigbvF6mCR9-zCnpn6mwvuY93gpEUbQuv-W0iS-phHvgWJaXRRdSU5Ac2cKqZqLqXRxxhcWf-R-eTv_rMn-fPD41W_Y2sjtVOc7iLEyP3z0KtKJdtlGfHXl2gp0IQ0Ucz-dMZwOiopitnePLgNLXrez9kWs8RNdAA6Zj5DPw4wr450eJjYeTbnqPQ_WH4Stw6HtFIO1Z-rHaBKXp_VlhZctO71NbyD8isavYLUXpgfVDrcJV5CcqZryW4edx0M2iGeKUq9X_jKNXEINh0rMEKzLlyxJLyMRFIeL6bo1MK86fnKrvOCBMktXwDbD3bzOAOOsJn9t83J2MPFtElZy6F2zUjmeyAbwLErt73LLyXnRTSSvY16VA__kfzeTdc4f8NpDb74lC2g0wIKoj03vNQ8pKY9KC9Azjvm4zUiKK9iviJnMLG8Y-sQWA6QBczS-LZHokx9yuzlbGzAwyAmJYpiUiFZuuKhGkGfDVnKyBuhAbfbsQWePclIqK-RWEcQx1qmqP8xWANu6OrM4JvA_isK_ywHAFk0akMl_vZXCHuofJxj8HvLNYG63dMc5iyY1Yacsjh8MaIROZYT64Fhk2-Rvzn3XFlxUMgeZhWT-NkYfdMywc7NINS1l2CpySLy73oTRRzxZYoqPgrldYPFQraOJFZDtuMqR4g4yjXiroYyH2ms5_Syme1eH7J4zCpEj8Otv_zZ3k8JP7LVpFmAJq_TZG1z5AGy3lKiKNBOZEz1GuI82yX7Wdn_5je8ZeZYMDKSqnpIwngNKv02KcIe83KRlfZ6_JioG8YACycsTb8ojGWJgRY6SwEaUmF7JOY7as6QCLIWmB-n0_di-aSQ3VofqXmp4pmJIslzWPTsjRNwQFf3N6zZsqapYzR6Pmj-_xkiGU5VqGZRY6vtKULcmmqwJ63q8osmT4eqLOSrI4FE6ftxZqxyTuHHCiH1Q7hi9eiiSaHc9284X4E1ePQd-jfo-5A6pmMZqWfmDtp02ioMs44hk6ClWtmLS9usm_VZ-DUqrk7iGeVQZhFNDdtp8oWktkUYujx3Fk4Xb5AqF2aqUJxkSp5AIbwEuNCCSY4c8jzCWH5clEGo-yr08g6pJi5v69NwWUg0prvAKobIvkGse-dfIAaFDhEpJ6q8HN12M80XfBfPImety6DCCZ_U1akFT09chJPT3ddDYojWrVWq1civKAItFWHg5aC_yOfryuw08m7XMCRjPu5Fup97KzjLxNh8UVQpaGkujpOf3fS36vnaDbQNPaDS3BWwLHi_xPSS6fRY5nJRsvmGfxMVA70ga9Q5_JL8lWv1W3GH4jOflFyMwddyS9oC3qE_eQDRMI1pwJnxl0DHTaDuFX9_S7hV3rMaE0kGYE8Pp-O0FlDYf2ccsx0rApCQayyDn0ApL1grPzEehiHptd3jpbq4JMfaxME3X62SkWdU11J0VCixaKgFMWrHxNI018s9S3FqeKbLBU6Nzkx0awLVUWNBOQBHCR7IwG4dxk_HC-qotzybL0fyFtqHCaKHed57M23G-kivnRrzKyMNTOw_XDqnlry9hzBMxAENlVDLyz7iAhKhCtJxKB2oXsXA8XUaEj1sHVzGv7PyuFN_zbDqJEMl22cLhpsstm2HzcYsgxC6m852VIb7vXGet-RQSMUzmWmjY3sdZKJUppUt5OIQ_-Vs7oM-SZR_zpdd3tiIeJYCiFB5X7FcbixEah3rXKiM0t7oc3O38vtnbNZATQFUf9Lywh_TKy88QtsW9QZoMwjCxeF1Iwaby7F3_ZF6EUETsuPx4HCjDEEhFDqN_VIdyNkYgPG7GzH5t4RXPcUFiMiOlOsTaDJHB1Mo02YYuNRY0Dgfl2Ps_0LE2hOcuVV48UIuglcO8v79fnU2ag6ai0SX7Jv3g1muyw-0m2UjCuvScRWAih3b0s7I5lYGvfM7sQ_yeN6Qiz2TAeYICulimEH3ne8TvNXBuDluVya77K6SpOsBxQy3WIMegoDx85GgMqrS-8qTaIbqn_YMByOjcfMJN2s4UpIg2ru1ZYrTH5Y6erpdPJ4tmryF-SQWhswBQ3TWCnlS-At-4DO8XdPEEnaIt6SVxBBSR8sJ6k7KvvOt1p0sksPlPblDHzLZK36VEiWKJRN4M8BvdZlYpa1SwYsbDQiWd8Z1h5iSb0Zqu0U1w33VqpkccOxewL9bQh8zSx0Fj700xN8-d55TWYK_WoHceSQ35a-62zVMX_0yGOYo-NBw0hcmC7_OIWhA8nMCZYFHyLyLgolahWriCu9mZrH5rlqSxhb7byub4N7EH8ehKIq6YN5BpqDM6a_Kxw4NEHbpzUnZ-N73qRPGAU9xfzRGaxT_nQZdXEcwhvNrq-qgtNK5cRhTVMxk2b6ycBImyi4deYYb9ceUMpYAjCLu1lYg0jRtCUnLYd334yKNo7k4awvZlfi5d5S7yWzvxNfWkxmW4uXFZu5UFpmOmVvppMO72WKTAvrLg_Dtfd6mdPNemzg0TbUKiQTJ-qzhkgZZP8mqsFkSggQKjKNDPiC13-WZ3GuZKeYDGdtUJEDlRJq0qknGBEh7Z5esKyFI7hCfQXfx8t7aS_qhBGS4oDbY0Of2JHOvfLkxLn8txYaua1egKvbiF5Po9a5JjBU-eN8rCc7SGnI8QiMIb1482MJizUdf2QAZqq7ALfG73aIx1GTQAV4Zq4KkXVgOu6s7Oata474puKsm5gnIRTcgc240b7C1u9CdXw8eWgWx9_FmN7_KduzgcxOmfweZVSaBwVa4Bpvly8ScDwj_CtECDevr8_iEd9LTS8pmW3IomgRXcAUE8ey-m9YnPwiZtQxWwV2906iLNIZzFfteUVdRcSS6e-V79FgSeCwo6w9OTL5p26MNCF69p9tfBIL76YbpJR3JG-ns2eaR3LfbcOVvA3xdEnDNGtUccUOdTdvn0P-ROWvvu3okPLwf9Zz3DP5kCiGE4QL-k0akIY_HqZAmr_WHjQPgDhxP4hTMGlC56Ze8VsGEU8kfyknthLgKLwQrPGlA8njqcLbsIFl21xB8S5FvMVLhrIBUFwYYOzmgGSeupSkaazPDYjSv64ld3oy2ANO33zuKH8SUWQsw'};
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
