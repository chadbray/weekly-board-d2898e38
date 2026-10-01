/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={"version":1,"algorithm":"AES-GCM","iv":"yacfMwVrA8GCes-Y","ciphertext":"S4PUyaLWLU_H6VPcMbgDa_9WB6XD-I1iCwL4MO_5WtRFGAxWgVEPjxZM2RazjKS-AVkWP4_ZnZVynaSQOBDME4h7gR55f04--N3GU6TN8LbDI386MsWHicAdjfbMyJLbPOndlyp0u79IfeOvGeUKeAVnnkoQPQjSZV9z16Qfo7ktgIxoj-d8kcxM8wpOPcl8KLkEx-8S6bw6dmetsHMMi12ckkPFq2LT5Tjfl-l8stSoX1QhkVdOOXCqceCGEH6FcoYtmuKQ0stuatqGRue9DhFPvEwI3DiU5lPkGJjovvSyTe0_e65qr-yQQHLn9IduJD62mjvZ27_Bp8EqFaN0ekwFDNKlALf6Fcd_vFJTP0MnXBwNkCWsHiSOSjTw9nSz3WKMCPc0keCQrPKZav1LZ61vR0jgSzE6Z8xOMwXHJ7SwXSqF7fAaY7u5tjjRe_P0gi1el71L03r-onMo6mUjgt0E5jTRAMDhbBvEW-tvhczj1uEtEHrrl-ihPmsb4MWBptpVU0dfPjwtD1U1OdVYOpUwJwZCntZr8MnKwhTM_TaziojuuKESbcPp2IZa5C8Hcsig4nRTtU-FQDa3wVS_h4XBf3k1E9Oqm1UdUR5YTqDpdX-7Tzhk8A7DX_ORwwbiTi_HBsfPh2BAKZyFg6Zn_OxWV8qF4jKYa5nmRaGdkDzdaBOTbDHdJVnw15Xgd-jQ8PLrP65lThtCoOeAymGGbcbL1rKzAHxjyGTWsVUHHNfeXckD0YI_JKwcV44XD6VV_Kh-jhK2kNHYvUlWXFviJv6wqFALS-8MRkabthMj13fpzw3XpUrGLUcfIdKEn1Jqpc0uKOIv52HL9TIO7BUuiyCBUvsCJavWpUSsHcV_LFfXlihOkDxxK4lj9Wfxecpj0daIvUGhyVgmxIrQwiA4PCkKVmnTXu50Aoa-PC2kkLGnmitRsXEZlv6hTvpOfcY3qRw4pI4FeMRbjI-VtNkJ0ihxKyyrL1H8WgV98qCKqNqGFHx2Wb6l54iwcTy34evuR6Pd5lZ5YRQ3ppC1-HvgITwtdyVWCppbZxMM24pFyetEyLMLGuXBmQZsDbTjbG_JDZNchur1A_zh0wAYzmdg43RKlcAheIfLl6FY544QDin4xRIhsgP-SPyBAN0jZkUDWB42YDb2JegiNdPPKBC0QKrTgTulgvYWDKIw8X3GDyr5qeHkGljsFsvgDU4B31weXdY8HqL7bsRBtEfhVw8XvZPSDgJFLWSHC0-jJtTULY8LVUxWAx0E2RKNa_GN9mo_mzbZf9mQxP0nIth58uKsF7ona-VPB5yhWvtqO_d5jqkgip2htDi1VE_OH6YfN_qYo0LxhTBBZBmB-xIEJKCP-oCVl8ZCM4fTyVlEcPw5nx-DiXUqovfDLjslX3CQcs5YeL63Xu73AF0qLqyLvlb1u532rUHtYyfFlENmbAibqYJ9pO6ilhHETtPj-Lw8X-_W_GNMWRLqLchEJTGvXzoKZ03tvw-3uKD6fbYTSHw-5oslnJkrV4JUlAraiZrH5LjdqxmOYJE6gxReHaXJKIFiwKccAllmBund02i9Q7W8ERwDH70iEoQOwy7n1Gk8CVw2qdzy2aO1QmWCdoHYzvz-1XryoTiR3ulpbWnujtFb6o2fUQd70yCo23XFwN9C9W2peL5soxZ9nu6_WxYuaIw-GYg32fAJ7BuBxURkWKZbuj1esjTS5OFzf8i7UWs7QbNFwa-NY7idwnWVhGyVmcuFAneYOtrUbh4GO3q58s9br9Fm9ka3G8_0DBVWA15HJllZYNJy1T5Km1sCe9-RfzFJN7Ufx-QKpcqpV9xw016zv4nbjOYsgX2yZefCu8rkJQYUHqGJTpkS8Yt8FDrjn_pipjuR62fFdTxgxU8v_RS20Qsug_c412LdJXQWj24JmtwR-gf8Ake6Z4C9AO8e8mcYtCtnB8cCWX_rCiSr3FYtRDHGC6mafGkXiw50AWVt7i4mJ9EwEnKmcJ_ttPzymGagDVcWePqy_h6ycAYUjk_OZqFoG0qK2jL97Cx7C4E2XShQwBcDUV6KwZ338561BQ8_6ActAqzdejT4pl_4qnlUd-pToaa9vuQYN_4XxyN4riBeijgXnu54XCof-y_ala10CsHAwHbelwBha5Dl2eKc46ZAlZi4n8d2xskTlQ4mIgZe2501Nk7SsVAZq1Ql0Z7XRtXhSALBDCfkIdCH-cKO8kJhUMzCtwqLxtVZbO5-5w24Gru2xP3PoXlVW3X72pmRq4BAHwpJikhbpqxtI6oNJ0zd6onkJ7iZuIHqLhcaovbMlLgkBCWaaYPaML8WkitvcnGo9rMFzWhdf04v60FJWSC-iYVSDa8Wbekc2T2ww-wA0IrjDscWwu_5rGJKm9QL1fDpyShWzLE918QAJI6REdvO2YKvJEID64eajsWPtksKZU-vY7jsyiP14vRvNwyfWXRQggspQDvt00ItUpPU6uwGekDCAS65nqpIbgwRAWgmbg11zfyQGD40Bs4O2WNy8db4oxxv_l81zYCXVTI9fNxU0d1zQhLmyK4jiqrQWNonvPYw8FYOYvbRjajh5uTBahvuxvojxrnkb-Tg8KXp57KagCLZj5rlJeUSFPIx1-8B9uxOZQ19k9UOiaMxDAO-NKhZpA8Eltj4QoSvEHluc3iLp1L0LvLT-gtXC-jZOmP0CWhLqJVD9G-J4UvWoB-ClvXPKCIKioTz6BgGc326-Mq5gsPYU7NFpnZ6lcqA6W2pr-sN-vmhsTawZxWhxpAmfkkl7knez5swnDVNbMHkcx0tXATLnwdQ96h5r7Mh2sEz09cAKMOUg0gCfjB-CORtfHV6ls47klz3iHtBX4_QUiA_F9nM39jh_aZGPXreeV4PwLsIUeEKH0QA8WGPitgn0LhNZVP1YnHo60SPQ7FthMjUCwEJxmr3pP-LaXTAFZeIVn9xYSUg0G4LERXohm_0roWG0S6aJI2E-LBTVDri2BerhHvV2jJRqNQF0e0cUsLj7Tiil0S4kZC8EKeM-EzXYgxIXm62TbCmphkechlld08-h6veUtDN8w0alxGPSn9e0wXaKqupeym5tCEU6mDCKnYgSPic_FvOvDPa_UKbN3xuB55Kr7Ooi_vbvzU52YW9_c6vv7tr-nTyBVZw1lrJwsFDVp3QZC-ivEtLTf4vwoB3aVJMCs-w0YSC9tp8iabom2s5jX6U7-chm244bO1UJgXKtKqOn9aFuDPCTcjCsqANEfvoGPcbmja8xmAC9DIe0MfTqhw92amuTE5b7FmwOo7j3MffS622QE0aL_p4ECLOn_C0ou2rHS09PQNL4ocpjj6ImqAr6H7lzKf2qqbSRLmz2xKxlB0llqQHctvoy_tNu7ubKpm5mg7dcb0NPnR45fDrumNcMb1qrxbXp-7xtk31OVkEduslmnoD_WZZwkOqtKoRHPtmJo1wP_0gtXsgwHyeRdZ0MytGzivb5422hn6nu7LGN0UsJTgMMGUHTa4cS7MuppjPgv3s8QRV75SlXZxbhITin0kGA2S7fCv_qK3XdQ3tmh5YIFqZx3vPBoerAwJjvLMq5-mDK15WsvchfnZzNUzl0aOCXsAxEWahf2iUcy2QvBLts-GjuLGTxx6e09InIht6w5_j3W5Z62r8tNGjjS3stfmiUgOAmwbj0WRjRh1rwv9DnBf8YEjoafT6-rWxp3t1yBWei_RhJbROTrXAdGD2LdEEidTJY4rkgYgioIQg82sGVC-oUO5ruTC8z6TkOq6d6cVeEKJW5ia3katKZDKS17j_qoof6dc-8amTXA5FY3y9sBrtGP7sOr52gdqiconC4gGhKa50CdXQHGaBAfzmeBVSUtyqgpueeukGuQ4A79NNaPilaTYU-Ci6PW1U9SVdbGPPKj0FT3SzjF8z856sNOwyVAnuHEf1LRGViC0q_C-aF0s5w2avdoU9M4pCQHOsABz5RQfw0erPi8aEkd4NkhXndtB4BUMd2npsUP4IXpTNSS3dK4w27XjcxIBx4_4DT9KojcCO-MmZsEEG5Zu03xm9oyQxNhk-MQrBuZJCSpSF3JxpYokLgmsL-KR--OVQTsfIJPt4SjOrLILx26uGqcWl2hH0s5G6kuYo_EoCC9nkVMnc8CaHZNOMmdwgPc3lOGwrKYMMr6EXVQFEhDnHU6oINa8rc5ytMFLKSsUURxi-xbgZ0Yv5sIpiWM-e_o67c2oeoyBJIc5aW_rKobh3LO7ME4PySlhvU2DfcxLkwn81RA4Zl47wKE1mPuTyfsu5eQuahX4BQn7Xoam8eIxRnWTnJiuMRdMlyVNbNadW244AZfmdyt-8mt9HpnT5j7S6TLIqbxY6jhmSMgb5sWnBg_iPQ_XzvrIfzH9-myGqOJfGldkTy8MuI22RPJAgNaFxuWUg1celNL-zgIqGcwMw4ZsPkRcMeZ3wC29ZqWndVfZ9m5lXEJe6SlkUPQl6-9YNwm9Rr3HQGiKK3gKp6xC5MplAxnwqZj2yv5s1H0IckcMI1XhAEUPAHFaKwRfmUnbspJsK7_b_bU5xdHebQJEWjrxTcrJgcKLh1Vlplfk4VjSHMyxHiehwHKnZTEM-4C3FBh1B359aZoVfo8FSrufrLuV3eDCkFyjwHv67LwGXDd58ltxNln-f0MaWXTh-iRoADd8yLIGXCH13YmEbsId0lVefGmIxlHcrbGq3CHTJpF5gqSWCGc_oKbrwJ9Y7fbdnw9CyfPTAgncBsX48sGKFcsoZrAnWZ4Byju9jVVILyeYIctS2TIw-7K9eWQPHfkue6cY7IHHjShdK5sDE9oc4Xnl9GVQDEiMS4GTLOJ3Ih2AIzo15plemEE6hDG4KxwbMTOVOwhjpiEwqGyEaCpyvWE9Z78QRiS69CGhzM3dyEWOCNahCb89fGrfJI6---2LerX5KaHLeuPbQvkEjpOr7Q1Xp_tk6BLN8JkSyz5HIjfx31csO3rGfI_rUZAWTYOJMPA89mupPSBL7MmMz_eQCWohquf91834vu8U--0AUXwr-h5k4asC-lX9L29ryQGvTR2t4n3a3-3RKUzAn2bdxK4uaD_w2F5MdX9EX6egrYUcOjZbclOK6sXIWOYsEHTicGFiSyuvry8t1mnk4sKQVdpEFbGYbxexIp9f3glwJfGGcHFP8f9T0tUa2ZTH57vjp8AyMoTo6p6jdLHQfR5RkQGcrrK9sWNd-WkZs9dXXHcy_P0Zi-Rd6ACSDPECd7EBp-IYs7R7uSVRwgsgl5KoRJSXAj6L-j71RzMWIQye9CoE3VJCvRLUGnWP7rkAXhcc4UyEWBgJw1l1i5pjGNkh8NoksxWBP-9vZbFA2pxWMELzFA00OFAxD29-B6k-mEgfVImLWlZC4qr515tv5vCqksO47B7AB8Nq-2rHGLJ2BK0JeWE2lGa28WetBIcA0pZ6HSPa5gfF9Lll_mDs2H5yy9eqgQwCtx-rzJs8qajUGiVK4yGqX39nJwENSHAtE4sgTI-sGrXpMHUQfXIlTlp2EBmdzwYQ1oQFmCE1TRPNguX5p2A4oqmr1x002LIeJqdE2dK6rkmot8APgWjoBbF7-hlheZ5Pu_vUH5kmxWwMheJGI9tdSYsoauc_tynVCDNhVQ73Z458BnroOwn14dDiM4moy9u6f85RclIGTZoAAVQvDv8Ji21nYxkZk5s-fQ9n3rttr5IlC-Dbc6zx3BhWn-GN9K7n42KlvqAZuUdHc2rXbi4jiYAH118vmMhvwaW-sZiIVhrOxnabA29_7j5wypgvQarkQHfFN-2XFuT2-1Y-oIsF0aA4hokvWHPaURhTKUtWsJ0pRDIvZ4YK44dTlIr3GTAaE7ZmVGmS6rhB6aV_JzroAL0nRd7whUiHTZj1MfTEKqbfVo9wtx6A_fevNzKI1LVfJy6j5MuuBnIK9zXcruw36SWxMrxXhQwKbpGkzUcYLUY3GyiqaxRkldsfhyiC7tsgukM8l5Y27wKh1FAK3MIybairil-ma6V2huo7z78a9uHTaxG6GQPrB8cTQ6PLBTT29iXSAJTBlx-3qGcGvnbzJOrcFntHgE2qUhWG-0w90ooPGTchQGev9W4ZZTXuZFYOJ2ZJYvn8bmiCEBD5vxwUOWH_SEo11txsFmCdXziX2W-HAmDJaZrUuuI8WHlUmdNAW2vq_TXWvIR6__iGR4n9rh2q0hs63imx35jJGWvtedpkn5p_fWdapj5vmi5_2awHzMpUx_5DLNJLDBec3u2PTXDrUASdsivXDo0oIz1vBH3tJGyqkpmQ2IxkYzR-WycO5c-XXQVjJ_DCBNPbvKGDbhvg6jgK5aD87Kc3UDM39gB9jQFstHcDR6CAk8lP6BPWpIqlJiyYNaeIYYRj-n5xfz8dbc9jWSTC07pkjVadmy4YzptuHXtsIVfzTnpI5r_-ZMmqowuF74Gll4FncKqcPzydsFV_VA83uvwi6n1XTCuEAlfDTZzX5d6aNAog3976wj0NirB13fAXXaqrrAhtbOspVIW3VBStlTVVwSqRcsG6IhJHFpsPDVvHpfwVe8F5B8aF4grJEvao9oZXyuSYsRikBRk29-a0z0kvvESUL8TBeGSEOmLRKP6TRHwSIFMzLTsGR6vAJpk0wLhNY4-AWD3QOegHn0BxauiTvy9xfBZR7Epahdn-Wk33FpFi_x33H1mf_O_VeZ2hsAhEsngsK0NCeixMbdKoC7vpvjUwYZ1z7IdeRI2duRSUD85xZK0lIpMx2fkmzcjx0GgqIdH2ZJQDCTQUzLjLK6-Z304v0gx7t7qIrfqxa_43smx0wq8t94fv2tGLmT84g0Jyg0JLhRDY6j2aLthluE7gbZswLEBjpBq2BmV1ItBKHbuyay72whI1YmdwsKtjafbRzIuDZYtmMTJLXB2sz4FAj_9wudEkw0ZP1wLLbE5jk1PdzxtjKeiPDiSvXHHpxWfdeiNeNs1nBZOCTGIDXm_ou7MtLNLnHr_hNer28fxDl33j2fPPfkKVMHYAbnAMaPJUc2BegZ5uU41wBHtNeT7d9xYkP3yKudiX0xQKQtWmxqDl_dCkLimYD5P7P7fjdLvNJAOEVIbV0HlkaRlX2s11V-8tnBs23QVp811SwJCZYJV1Z5wfGJqLDSX6gMqwce-5wbPMt5mAmndPyNeEtQcYKraIuT5sil1MC2B4iPL4HZtBdEhMT1jKFOYuEt9foWEpllcUjPs6P2oYX282ST5VQvJY_oMSjIPx9lCDg14ehMdmlFEqIl6rGhVGlTVa3iVFFVOwUbx1FoFHtDHM34Lmr5loUnKIgHRFGmSgd-Em-Ir5GrEsndbZOU5NpO-Nt3SWqjNdQvf1zGSMv1_hyZA8dhr93JYETGTqgbWA0s52dQCUIOlVd0OiIke33xmWtFXodKRSFEC6oD92tDkr538Q6VAszUQBetf9WTwEACekEps6GYMI589r2xs2pc-4X8uAENWyXm1aEuB-WE0mMcjd0Ucmys_f-y7dUYWou6GaJemwwd2_oSq1p21YQ-Ij9TLO1qXOazt0X5tUj0MtAtrBG2G5ebM-ckAfQ1ERffs5Ts04ZhUq9SZFCOEfxiOlevXziRzAr7YuHnZFemm2UtRCYe-eh6ZCO2kEOak_thofoiFv33lCEMuOKLe3Lj_BaOz04EGeDwX7xFI58mj9Bm9CsR5zjLG-cgx0tMwolD2m74MmTgVX8ewSSjnorcXnxqy64VjG8s_TBIFCYfbPMHWKJfHMfEq1qqnD8UdBIG0P7rBBBDqCTkywx4bXtdbh1Pd7KpiGhWJgDIoaavSrqd-aNXRJtIDCetwIBnfZykPZvhocrlC4yttVaUf2P_ofexm-COipw7O49JBE8NMlwmhApjS1tfSvNp778Xkuthjo7CyS6lbO8UzH7jsp4Y4WqOhBj9REGPPrv9fZcRQOD9QcUfdGrRwKQ2kbF_3Eg5eZucc8YZnasw20a2SYBo5Yaw6dJkZ7s9M9mD5v62LDGPGjnxc_TjAbFrUu-9gBG7vMjX17XILG24lPf3QjVvSHRi_06BI0s6dAD3WNcbHx8Po5y4OE1HkLgYc2Au1v2Ng5fUdb_i9jxDBqJ5AmggY7udx5xRplgI6ox7R7NidLryoCPeYenkBLtD59Pz41g8hw6Z1ZCpYNik9LykfVX7zBSnSiskRs5vTi-IFsSHInTxrdnF5dZwDUG4iCpFQ98NW3v0whokl8wPvRmtjOSdPavXJXnaw2RZ7z4SCHPPEgOHEyNmmlclGnjWtYJRj-enT65COe9MJuXWtO93mcNMiYjabkjzuf3ohFPiOmf21c1WUYZ9O3uHjBvpT2zquNyReB2EzjvGS1h1pDrfmnbUqKWlq0YOqLYFZD151-esm94Q2qYHDtFYyU_Bc448_Eb-_wvH6kLhD20vpsM5JU46Gyg03Sy68BfR9mPj3HHbSDM6ItryOYCOm8NO5d16XUMGX9Sz-ehEW8yBHPsM5UrOCIlbGKv_TMLNlH1iD6wVQRYzqd5LqC-SekzAxU_LZd9_Q0-t8UVK61QFr4X_vwoPuOKdUTWBw4wBoMxkuxAkdu1hsT9QOCgIhOuV5ClS1UgeQBcZVMM5nMPRhvGpQ3Z1lRjVyX4_znscf3i3FODpWVDgs92oTWNacpbuTuMQMfwt5Jtf0HltdE_0mQP0ZIpxqKV1Q"};
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
function itemsFor(date){let key=iso(date),items=ONCE.filter(x=>x.date===key).map(x=>({...x}));if(key==='2026-10-10')items.push({date:key,title:'Parent-teacher meeting',person:'penelope',start:'09:45',location:'School'});for(const b of BIRTHDAYS)if(key.slice(5)===b.md)items.push({date:key,title:b.title,person:'family',birthday:true});for(const r of REPEATS){const football=/football|fußball/i.test([r.title,r.activity,r.label,r.name].filter(Boolean).join(' '));if(date.getDay()===r.weekday&&date>=parse(r.from)&&date<=parse(r.to)&&!(football&&key==='2026-10-12')&&!((key==='2026-10-19'||key==='2026-10-26')&&((r.person==='penelope'&&r.start==='16:15'&&r.end==='17:00')||(r.person==='chad'&&r.start==='15:30'&&r.end==='16:15')||(r.person==='josie'&&r.start==='17:00')))){items.push({...r,...(football&&key==='2026-10-05'?{start:'16:15',end:'17:15'}:{}),date:key})}};return items.sort((a,b)=>(a.start||'').localeCompare(b.start||''));}
function weatherIcon(code){if(code===0)return'☀️';if(code<=2)return'🌤️';if(code===3)return'☁️';if(code===45||code===48)return'🌫️';if(code>=51&&code<=67)return'🌧️';if(code>=71&&code<=77)return'🌨️';if(code>=80&&code<=82)return'🌦️';if(code>=85&&code<=86)return'🌨️';if(code>=95)return'⛈️';return'🌡️'}
async function getWeather(){const config=SETTINGS.weather||{};const params=new URLSearchParams({latitude:config.latitude,longitude:config.longitude,daily:'weather_code,temperature_2m_max,temperature_2m_min',timezone:config.timezone||'auto',forecast_days:config.forecastDays||16});const data=await fetch('https://api.open-meteo.com/v1/forecast?'+params).then(r=>{if(!r.ok)throw new Error('weather');return r.json()});const weather={};data.daily.time.forEach((date,i)=>weather[date]={icon:weatherIcon(data.daily.weather_code[i]),high:Math.round(data.daily.temperature_2m_max[i]),low:Math.round(data.daily.temperature_2m_min[i])});return weather}
function scheduleDashboardRefresh(){const now=new Date(),next=new Date(now);next.setSeconds(0,0);next.setMinutes(0);next.setHours(now.getHours()+1);if(next.getHours()>22){next.setDate(next.getDate()+1);next.setHours(7,0,0,0)}else if(next.getHours()<7){next.setHours(7,0,0,0)}setTimeout(()=>location.reload(),Math.max(1000,next-now))}
function refreshWhenVisible(){let wasHidden=false;document.addEventListener('visibilitychange',()=>{if(document.hidden){wasHidden=true}else if(wasHidden){location.reload()}});window.addEventListener('pageshow',event=>{if(event.persisted)location.reload()})}