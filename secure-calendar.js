/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'iF4bNOYNgLtVUH4c',ciphertext:'KbRE298Pu168Qc0DnHFdZCp2e9P7IIjvUVvq34ez2AArWqwmNnT3qVPuY0KwKdzwjKmZTbbG5dGfgMo6T9gIhhRkXB3zIMtaKXktxjRq7Xaf8v0dz2ksyxYbwUF0Jgl1yfm6pAbtLbywYVzLnZ0yWFFho8vsBjExkkNnnZ4cmnhfBc2s-ixxI5YM-ZHc5heUf7rm79G7ZmiDdMHRqyk_aoxvT1tkxsSG-c9FDtmmMMWHXiO4YlYBCtEvLjvXoqHrQcKXmtvmLMqMjQr46v9GeJ9D_qLRSnBPmXkGyTY-mawvQVYm27vNsHIzyS2QyESFvdZwqs2uaPfRk1M_-eX3QnbPAeqmP7121gXo_OO2cHji2XPMacjc1ctBPPgtbrmTzpW-fvgZnhQt3y8HmPkZf43RuEfPcxBMe0xUMYSXsVyTw_WaAXFblsFswwsHae2pl8WqUh_VS2gPlXtsKtpg5LhSoE7gxkUNxRyARgb_sBpE0qCW9cW7eYVry_1VaveY159YWfWYkSyuUCEGadkkc4GnqVVHlRMxjCVPT3QurWXhL-Edn32oCckXexuroufuEitQoZINxvPzVO8sXB3xrutEslyv_-bgLU2EKWYBQ2E7AB8g9JR2Dgk8s7h3h_DZxWLEtl3r0lbrUTl4pkJLmakCerbnjU7zxGiCT_yrLoSkKzXgt-SOcLCerevm0xRpZHIFQkvkKsWzIWjqSIBMS1EVTX4FHhae30UzZSXDDJ6rhaSX6YW2WNKtaeVwfQJ-BO8tgFbPx3crIIzRCoNtnRs5vazNzDABzr_Iv0mwLtBOezXTKWC3LyqLxAEy3RFx1reHkUOUBPUXP0RaNXmmvaiupBUOhks1SUL1d24-0A9Z8nlud4gX6V9GNmJIwmPvqlKTS9GoJ-NwYTkdsk9l5T70oeNByg5AvpGAoCtubVq1ATDld55Oba0PPBrn-cz5WeGyKmAU9TaJfuPZYJIwW9agekHYRbuTnHgJxXVxUL4_IkgHmBHnoD8F5oWTU-L0Lv6wO2Y1z8Uc1n6WB3aGMmoeGckNr49926qG5ZYFDE6LyjmMNHcL5Lqx5l8LXXkwhWIqeCpu-qD-GPIX5acu1jhnCeIPdQ6WEx-NhmUqWthxc-i7dEtoI2-UTBgwEt1dyMdozJN6qEQrgKjkCFwWyocKj0z-XOy97f4eSLTpJDuKpOF27o5zDpOgZZNRMWtS9WHX88DcMHe0WhJ_XVlN5GoExhuSY-65NoyYIbxIKW6JY4LNJFCQ8W8R_rXWAhhjUo1V2fBZpU8qkDEpVY82tBlvWlP-oPrk2F90BE62VoHMLHEci8TyuXpUFjBFmQ4mBxBwKCFb6sFWWMgQAAeg-l0eW_ALSB0EhTATxd3xJNNBw2mBh_KS1JrhlRAHA4Bex27G5D9t7B6kPEVd120aJUXmm8l7zWfzprXa4Kdva45gJIm8bhXJPGtuwNf6KH5GyQ0-OcfNjj0otIhHhXSPOy3W4YhlaH97jMLS1PXiFuPOxrPsYp-xlkovHEHSSLvofLERDo1oJCCu9vU2gY3UEEUE8mvwzp24dSjkXowxZkgNbwObkqbToAoA1GKhTz8apzvCghHXyxQI6PNNY502KL2NZkYg5uiULdutLXTVHekmDD3rFPwBEbNJEfURbyxAXZzae05GYzmmEqIootYOILvUldorBodHEP9CNJWdxhR07b_kjm4lmbZpB96jBgiN9F0Q14TRaLiEAA8HNzaAlg5K3aTPAjpxXXf6wUVWXgjiViakoDC75z3fOZ2iauo2uGO8wm_tOKfqNBu2eFuT47xEdu0apueOS8U4QV-_LbS2mVMjKnOTge4qHQwR7EgTMEcWzszmAKhWTrocDMXbX_IDZNKZZlHxFTria8pv68o1FMbemZiZg1Bd5KQWK_sWb5x6AuLyqArgrECXngRGvKs4Cqe9SB1R75hxOnmEOyZlRWiFTq0vZlTSquoZHt8gaDePeEM0AEkIumWACiLhHrj1NLK_N4oZMBlcgKtb37jefCqjMvsgH-pe4aPaArKIo_C-zZhg8QgvA77BK__hF_FnKj17AeAKhAmzqT7Uuhy9lJ_wMzRYSjxo_Skjg_MUqd9y8cdAQ-4dcIlD2lhnamnk3B90EfvRID-R-euVg6gOi5RWDbyx6s9CCHLx_z0ZntpeaAXBNzIdjR_5UF4UlnMK0nLfr-4cim1JsfP5eBZnIS8zndXkkQvLtjrze0sJ5esk9ZiBboz5PavqOPDL7G9IWDvPwuju7acfK4RNhYjNLliQPpORHnJ7PPTBh7bR71urW9JItQ7VCFJZIULNXdtpXFa92llwaXYChNP6c8yYQATNdhuAZAFn5-Oq79E5RkaEpvWclkFF0qF_m19OwJn9VYr0zRsMIENgkwsZbg0f26IDSyB_3P6iSevEEcAVF7F3rg9lONJIynBqEUdMFlzhD9wueRQWZDZz8p_dAM5htWLl4wUogPa9yRYiN_mY_RYjVwIuYuaCzbGrUOGb_yJTkbGTnyTrmth54mB-vw-J7vOWw35rxkwPFsC8QIhSRJrBnQMaPsfD5WzVIETJvqSASFnrDzSl_v5BQPIIOd3RpsXvvfTMGSgOPv5y0Ew0bJMexBybJF5ClaGDM3xGUA4vgh98JtKTolKtau1PHrfrO0S3g3fZdhVanPz8DXCI5GzUpmWiBZkuY6bYbeSdiOAQ8TxuxUzBWGhbHtabO6GhLcH34eufhBQrv-ykySPys0_3xEDjhntLMtOcC33guCvrDiU45Ta15CmDLmf4_L-boL-Un0d6O2kKmWOOvZTeA_db6c7Kam5JykJXHHq30jAypNHYqd1VV-t0vGCWRrpXdT-MTZLpQY4hPMVWCHSQOLydbBXOxngmyvK1IHjk3t9SDQy2EsXBv4Qots4UMZOpIEmZczgOyv4zoQ9-jgPeUStBvAWsyiWCbRtAk6aweDF0nUIs1W2T7RHw5R_vOo63ZIojfb-WzTorQ3WQWC8tx1XFsMTRXs1SJwvxorLqV2kvHrltVbOjCB6Hz3L66Bcu-fG3ReqqlY4Fsy8OiUvBvzFMPuvUX_0Vu_xqTYElb9koUoKZHxTm_R0Kd76TZnLA2hS1FgUckommLzqp9CGdhTqCIIiaP83kwoBj72b9rGVVU9G2IR70ASoBVFn5mpuZ44ad9VG24RNm-m19hgtK4icDzPcfzJEZ47BCKv6wRNsjFGrtw1CwR7ybEuKTJp53sfNlU0MGvINAy0R0NN8lYFYkSq75uiSFd2GM2KbzOldsy4BAPdaMIJYit-7-NCYtKr-V5yMqIwXQ4YHxGweLdAtDWmLturygg5byjg6bstQqORTz62TayDjKjx6LZKw1Ca3J8xlFhmMuYd_urMXkuOpXevum23n7L451bm16ULRSRcr0j4fe3KKjsf7bZ_AlZ-OJM57NHvY5-Xpy434G-IFNbHOwVoDyijgtevrGlH1ZAjMqz5AknZDJhdTHBb3BLfENSutZTmdG1vVL7UtFBEuHGHedDXDqYO4w9LOTnGVLj-n4XFsyjge_Z6nYnJcmSvPZ27cAw-yKqhYuc5ZGT135HiMk1deM9_x1QKUxPiZ0CqkK0T_80uDJ1b7TH0b920rGgG5BrFclnlSkUemdq_I5D3SZz0_YIB1GPUiKmEEl0RAO5j2uQEIzrzffm8tZD6R39oY3orcs8VtgIXqN1yf9d5yj7n75I-1qf_lrGMzLbSAtGADZRvJZbw89HSomPv-sOw2Dg6Yd7S5oukhsvSYQn5UZbRxK_CTnpES7PmVd78T6qAxVjLAF19wCic_fyxLDAIVlD0FhtKJUNbGpYLZvd7hOY_kLVwaxPOZHdDDHKjbEzyBiwdXZx8-sYXmoiIjprC7Tcya4M3jpUUP4kk4B2HpqM3Sh-1jrC704wfToUCf0n-EKUYUnxyXebtHXGTuV4ZJHdVlKXodabiqvDK8zgYhMlD80cz1CydYD2YUk2AaNWMi9zJWtfGr7u6NVnjt2VwtO7WCncVboSLYVj34zhghvFCXjzEh16GSPqyqmYaexFTZHFBV5EmCn-y1HxXDZ6dsIBrjiDEdzGEejroOen1t2VI2_rWgeinjw-qH1iSlYg7E9WW-ckYs98aJZjDO2ugeH84noowfKDvNA4kQwP2Ah9pgiTd7u-fTfo5yzwNUo0nTEY8jbgF_IAejs3ktfCiPs5oeXAgNTucoHNYPbYiAaMPjjbskMo05dhCyEbznTEfw8AQ2cQ9ZACmXUwUoxa33VhBdhd3GE6Oy2ufLa-kg-l3f7XSOFRxFiTOIggtq0s1cNi8TidAOKjAg62HpVjPgbXC3djIm4O1J00UM6eCPlgk_sIGxr_BW-s56Rv52xGMOlE4yuhapFcQxa4oDpvmkyfZALaA1rKvhpp34i7uRnWHTBGFKj-sKZa2p1Jhx31-eRF_lPmAhWW2KsE_-7Z6-e-clG2enOMWYfY6uyrzBL4L35r_4vNMFLBCykIhtEHFMEVJPEvw0KTuITZ8UjXSqQssge9Cd47_sjeEqaX0QFMEETUbAK0SyBD61-8SlMS5hoo2DrPyliwmh1i5RZnFUGVpmUQ9DKbok3Z3sC0FGv5jbxkX_5rEyy1cQehX3z7lpTWgeQW0tHDeYE6zxObY3sxv5uKZVATtevDDPjygXLZ_65n51-SXd9RkR2iQiWpc4VZIMghMYbpP6_YXSfRxis1sexaAeKSpyES4TSdCVem_-L5cCcMzlWBlpjnImOubDza9DEueMPInT1GDPob8b4h6oIC_GGF6JjWwVj9g7sth-RsVCoC3jVbA2QSQOqN_av3XP14OpYOKVs9WiBF9j0UENlqjr7ovmlB65JNXnXHV13HmlIUt-_Zsneg4Ch7D5L7IJGVGCFID66h-FaymVmuO5wCD0I7ajil0UyaJzf9pPWNXx-SX8ztj6HNzpkrdOMnKCN40WqWYI-TTWr2dazqcF86JLuiXbBn_SbmhuH3A-g6_GZ80SyVj8kDQZ0TnsnDsNm8K4cwcWINUKtUX0yXB4WHOouB8HM2ZfawdUtoMwROuCrb8Q5uT_OiOp4Q1g-jeiE0r6lUIb-jZ3uMZynX7pmRNzA47uoV0Yqc6ZqlofU83Nn4vyycRLzE-AkG8K9dx5Q_rxcC_drR5fi772ATMcRho-f7ynEZ_h739Jyx9rlgwJjdPxZX0i5BcG7v3RnXkP6JSWzyJn1Fw-WIj8L6OBg9tEneCDwlBcU5O40VQR373TPZvmszd5FE2myXhqaIUEX4I28v4e5QwJzr5znrsR4LImh0qBMPUtwr_ZrQ8o9V3WQsOAJhHD9KTB2mR_PZhksTavhGzuvb2RMUgNCbMlF_Bf2Qh9arS4SkwkKqoSvvcwp3W5HSiKUorFuhTgVvJKJRbcqC3KxRP4BHVut9m1DkCmd7EqD8PsCWjMYL-HVn9tPLAMIo-RrGNDTkDH0XGbGGLjvAPjn_3GXMvrKHPvK8iKNvo3QfwFETSUFzNTYp6Oew3EsgOWIuQsOUwkELQ-cnoPZY1G3-mLK7thOYNbh7IGk22UZZVhk8QbNkY1W5l9LOREShDCtgQ7YGz0OjCFOoy__iYmxyPa_d5BKHKvVnvutpukAHzlRJS4OdhFtDdpzCc7eW4ietzMZmZSJY0-nAoASQx2iKQD8tsQGwXuIStwBBpwXSoNHxc4zxJmykH_ZYW6V7XCZEm_EsdfL8YvwlzuS2BKEG_I-gZiSR52t_4HQ3H2Qj8vqgHGZFa5DtiWHV1x-fX44yUA3u2UxRJYgS6YjmP8B7bVFvNQaMWeemo2D7SnRPecaC9G30FE6ZUXrQaEbLo7L0FTFBUP89aMWt1GpsHVrNfq1i3MS75kCgAd2bcPjd38Foi6pD6LtCgp82YHY5ErlsqDa2-ejzxjm1kL8oIVWSLoSjQ4drKmAqffKeqf9MPA04QA1nbMP2Mas3zeBwqj505CGq_L4FD-IkeYDucRVfyb93OSjAybmbWul009a9M5ORrCYBr9WYj8rO25a0_6cCRAttcVlxNSkRhk_gW_hiwDo_jeSR6sHHh8A6TwKu5kaa_NNtVxzcFYPYiUKkHz7LeCXhYRwTTTTvzctOxc595OFiJ6jeZ8uxxNdlhq86mHiApXDc8-yAQy3V4Kn-Pb2n26iscrTNbMFzfAGlbVUw_lVjxqgitVZtL1sIEvJdnc55a9P7D9K_uEmczE4qe4TJ3JoFd7lSkovEpr_aRFeecJjSsVG8EAFotjBZUHqoIEeSSW0TKi44J6HZjIGAVkhjambwAjNJwy5DiEL5tMdJM6vDaHhVoCqzn36lnyPIulCag8cJ_2mK8URpBHfap9G6P-Gksjzeu9MK_TlrRmUwlj8yHUfLE5NRk_CpZ4MPaZfvACFvwm9ETL5FMAjDulY2oit9oKQ9Zu7KbWQ1iFqLgDGkwg-_JgVS-pfbgPKBc9QX0IFgLgr91NZyk0LyTbEN_TIHaA1EIx7J7mZUvdBWcjJpASOGjUgjPSelWSybz3m1HCcBLMqHxHT9EnKGMVuH09nNqwxRcR2Yu41XSZkhCVRZxICOor0KfJDBi5IFahTgD_wUtEXxszmdclewc7NKl8B5vIDsznY68WRhmtZev_sm830irNzmA4f_ZAW4MIcbjIfIlz4Dd1VtYLXedOQ8pJq0cug4lqAEl9YW13dMHu9RYkof6QlX_obPTKQK2lDm-sCuT9kwwcvAtdK5f2rayokzjcXz9pJOf2lpd6nV4wMYrR9WDl2HpG2BkeAyuW0ji3iz4Xm7K9WetRpgfFdrjYYorjKYwgGgxUxBcDNzSyt8S6WXZ0JHXg9NDqSZVM5NUr3ABPV_nNqcIv88gzo6WIHGBUe2XLyRzBo1_nAaLIuiMIhPfFhFlcgJJmFu_25LR1eB3iWCFKQHAUbI-CVnq1CXbDcwo6hZ3D1pPVhI1zhW4pZwhYGeEaOVuZd5bGS6iCCG5daU4nd0aOEIlTeBZv8HZTNBNIqoMgCfsCzNtoFoN7R2y9dIHx4b2RbqZHTwq5dO3htKJO13G9Riu4oNmBV620XBi-9qicPmYjVK0D0mgoFZwvE5dX3Q2s4VV_qsmbkD0-RhX765w0ZXIaM4xuqxsqAuL9IPnMp4_rbXfFZ2OdZ0gZKuLZNSdObGHDYoLY2NeOQpnZEBpwfIYrqythq1eo56VF2cfTKHa15XjpMJz363ahW4fT9HwjoNCzklLWqEN4rWoOkBOIgwxKKu_Vkj0STzoiJx4qrLd5DR2D1enPcGLfHdVlhd6xN2bxeC54BnAL_ic20OwzKFkF93yvcfxJaJr0gpDLrrt_dHynys8ghMhi8kHpE2GMAoaDxOE6mLWJzElXp6rrfqAtGJ_MQjWLDYVBU2Li3X15AvLDvZFLJMI2QZfxEGuUvtdmBs3kKxHTonUmVAVS2eBkR6EDFadfkrJXLQGYyW2HkdVXoQHpYDMO_j6m2EU66q5Ku-jNPc0A1lFQcw0KJTX4fviFgzQdszYcYr3JfsMOdqJFrobDsnfpAfl08-zP_pvz7gedrZx11rOf4XOJGZMshFSnw_FvY7s1MELwGT1Cjytz4Clbn28B_l0P0P4JMPxcMo1EoEg9rbdV4S32TtUoA0AKBERodOMTkfCCf8pZf2qjMhIQGEFJORLW6z4u0dQvPxNacXOcDiWUH5BcvWZmUBN4KJRXif3gVK3sl6qI7PNb5NYohbhJAGqlF-eJVHqRyt0lkRwljwVchh-izBnzGNs9hP3LnQWfBvr3CI6eT-9b14-8lpflpeduhYxDOTQequdoFbZROC6eCdrjHWjhuEXnZjBbSVtv_81HshKUq0MIV3JGW13RS7h-4oL1tKYOFwCUAZcVNiYQB5b3IVVUzD6w1dK8SbvAk7ZEXK24SiWx-nJYekDMEwiJK6uKlYCOxbY3o2rzdLj6CCQlIPfaXzVoUqJaUMFUDQNPzbERTJmxH55vVPy8wEGwSGJwMSpn8f5v58SIHNWHgAtygBDH4X8fd43xA5OobuI9QIn4uj917UrSzSXnYKxrs7uWLgVsPmgq7v8EWt4EQVmScA_EFN-cpMJm-KgD4am99ST49AUFM39Za7NMSDDS5hQES9dZ5jCUNAutDIny3EZUh93dkU8swWGYVmpi1cSpJVaXj_JflvcZZzWWYvH3C2McgiUc'};
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
function itemsFor(date){let key=iso(date),items=ONCE.filter(x=>x.date===key).map(x=>({...x}));for(const b of BIRTHDAYS)if(key.slice(5)===b.md)items.push({date:key,title:b.title,person:'family',birthday:true});for(const r of REPEATS)if(date.getDay()===r.weekday&&date>=parse(r.from)&&date<=parse(r.to)&&!((key==='2026-10-19'||key==='2026-10-26')&&((r.person==='penelope'&&r.start==='16:15'&&r.end==='17:00')||(r.person==='chad'&&r.start==='15:30'&&r.end==='16:15')||(r.person==='josie'&&r.start==='17:00'))))items.push({...r,date:key});return items.sort((a,b)=>(a.start||'').localeCompare(b.start||''));}
function weatherIcon(code){if(code===0)return'☀️';if(code<=2)return'🌤️';if(code===3)return'☁️';if(code===45||code===48)return'🌫️';if(code>=51&&code<=67)return'🌧️';if(code>=71&&code<=77)return'🌨️';if(code>=80&&code<=82)return'🌦️';if(code>=85&&code<=86)return'🌨️';if(code>=95)return'⛈️';return'🌡️'}
async function getWeather(){const config=SETTINGS.weather||{};const params=new URLSearchParams({latitude:config.latitude,longitude:config.longitude,daily:'weather_code,temperature_2m_max,temperature_2m_min',timezone:config.timezone||'auto',forecast_days:config.forecastDays||16});const data=await fetch('https://api.open-meteo.com/v1/forecast?'+params).then(r=>{if(!r.ok)throw new Error('weather');return r.json()});const weather={};data.daily.time.forEach((date,i)=>weather[date]={icon:weatherIcon(data.daily.weather_code[i]),high:Math.round(data.daily.temperature_2m_max[i]),low:Math.round(data.daily.temperature_2m_min[i])});return weather}
function scheduleDashboardRefresh(){const now=new Date(),next=new Date(now);next.setSeconds(0,0);next.setMinutes(0);next.setHours(now.getHours()+1);if(next.getHours()>22){next.setDate(next.getDate()+1);next.setHours(7,0,0,0)}else if(next.getHours()<7){next.setHours(7,0,0,0)}setTimeout(()=>location.reload(),Math.max(1000,next-now))}
function refreshWhenVisible(){let wasHidden=false;document.addEventListener('visibilitychange',()=>{if(document.hidden){wasHidden=true}else if(wasHidden){location.reload()}});window.addEventListener('pageshow',event=>{if(event.persisted)location.reload()})}
