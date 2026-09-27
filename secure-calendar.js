/*
 * Encrypted family dashboard runtime.
 * Calendar content is AES-256-GCM ciphertext. The key is supplied only in the
 * URL fragment and is never sent to GitHub or the weather service.
 * Authorised source and recovery details are kept outside this public repo.
 */
const SECURE_PAYLOAD={version:1,algorithm:'AES-GCM',iv:'f3aPZ4LS7aWTZ8Rr',ciphertext:'3Te5ih9EdhOd0tWhmxFctjJJddFitJvM8SMZyQYqC3CxRyQgGUeA-QhBUXhaqbXeyyYoNBCjf6gc9oN9RflEsqGaadDnq1qtA7k8gX80AZ7krzdTorSoNRMkNnVSOvYGW36dPnUNnCo99-sNuen9cFrajIqho6KCubBUEhHemq2kWMuDtxnrQ7hiklsq_VbayXJ-OCqRWcCTNSF9p2a_GGy5RcnLDZnF4LpqVOdf3if2XdxcgMqDbwyHWjYH3ZmpPLNPPWlWfanPFJApB8ydbRmmNGxRRAeXzNFwFRUgoFGJV_Goc_vA31hYUPigEo36cKAaRHRcd5bGfzp0IC3iMlk_xLAjR4XFX5Sw7icVzKwEj3Aj9tez1NlBo-_GmuBHR15nDmmADFIQ945KHxUL6j7vPlQcFU3rL0PPS3ivOlRxB4O0D-LUZdFG7mzN7EPtiEAHuOLX3M7xmELkye5mCIaGFjyFmRRdHdb0s13rxpvwu-l6br7g7jsEjcePP_mZSb1k5U8SLGrZ3NAveJbFB75SNzyKRxKa10QLP6soB5RWCrcAjforx9KL3bOojJgj4b7bV5FFL6OQdKf9koZ2f8eUABdj5nveaxL6-bkwDf3ug51_OCeYIfSsEqE6Yk9raurB32htn65KDYydT8zrevZEn4zAHEwyEFS3RNnVT4tITQGZunNIIKKFIxLF12s60La9ymolsCfMidNKu4BSE3ADgusKNIkX8wmYhjSSgoL1FbW9dAItylRmgoWorvkTIxAZMDzdn3OFf_aiKvVzQX3qeRmKxQTaBm_npGG7cn90zVDwO8k3945k-XBoCVtptwUs4UVJzsK9flkUyzlXmriU_qQgOPHmKIwNBIcnS6r5x37whrCPXela-zaAgsRwbv7s63Sy5Up03OGhRaifQ2jhm0sQVTQbVww1fAwDcRqyl6dhfPNM6YraSZl0EJXvKNhIQ49Wu7TOgha6kqh5dRxhZYNe30RKHelmapJz-OeOgcu37qK2hneQwnntzxbojtj6lxHBZZfmUBdNvZwThewm0zO3fcG6zyl2h89vYdKj0237VxmTJpByzFq6Lxm3ATFLX97ux8z3Hi0GnbwFmlTP73MkbKiy_ofBmRCbufpfdxaXKELC_sZGbJlUo94mJYJF64h4AE_hZsSWpJS67hW4yvBgtt8hw9eyXuz7HHR4FmsOW8P5ky3C_dw6Y_T863sqGIAa_H-III7WQhUJykE9U-JkHizDAxU0YfMjix4X4OZCtPwSxTwDImoGQ2YcQYU5XLVsQMJGaDNJlGcH7i91esIiuz1G383HMb38TS5bAcVIykswgagLqiArcV8JvERgsP62M-cPb7VI5eh72v5BAOFTxOZ0Xoz47nVJmMv2DzMiupIqaU2FnfO9Z1a_EycYNVhi0uNUzjhvjo8Gl4Cf5HIsKM8lh4FkJ9ADKE0UC-ZZuZ0y1EUeHCVriCT_eFbnA3yUZVFdzbf_1WB6Ghyr8qP7MLRbbXvEWj2SNKsk5wVxhTg7quD2QkKlAbkpgDKbyD0RWvIgrsaUdAaVxg14ACgWgQujVXAmQLPxK1nYgCkSKs9v2B7zueHHwMKu1lnuFm5I7ttp1ywVR9eaGg_NKs-G3BF6jFg6Vq6ERdIp1K9R5ORz9AiNZ_cteXk2D-LHfEegxrX00B5LB6Z1ug-Kp71qT1Opxfg1dlc9U2Ov7nlHx3FmyjvnHB9Zri5N29IdMqXeTirUpAFMurEFwdaCAs8f7V9uslAXQ7_lo-3KTDNm0zg9PVIIvynL17s3w0ZGeNfHaB61wpmdoeHKau_VMgGXAVt0bpOJbWAieLbpLRDgVkdhZ_x4EunyAUtbyT1FsS5zVDT9m9NXcs4c38Oxw6O0ylGxV8SPe-FWhgFcUzmlBXbi8YVSsjlFkcF-l-qAHHYBxSudLXTqI3rX419NEPulUPrTrcjkMcWksMxLtfrudTjDjgJjJk8wRUW8fy2VEVLeOJMhflbbyJKFMnyyDiJ0heXD3Nbime9fJewH0IVY1r0U5SWD-AvQ73zm8pgaR1-DtWP3V19BD1dkdytw0hqXxrzKWsVdD6-JU_KgboKGRo3lL0PHK_DZePdG86Ae_O-yOl6KN7Q_CzYO3eQCCmbuTqW7BFyvcTx3pIBA2JoPx9yikTySOEUkl6MjduqoXXcF1QcrMb2OSia8n95tWGYFc-sQ6kCErq0bDcUrB2JYu9k2_3n5c8ldz4FMlx5wgvuWdf0WgkzIDGUgd4WmB0smpwEQMfShuoQHHOY2zwg9uloqHvq8GdB-oTNvTC9SnKSScmsQUbvojJ4GR2MdpSftWBZR3T-kGqO8SpjErmjtqwEip7Z1CA5XFFZzToaaGwftDJRVtFcy5tLAwCMJ8lpQpaThVKfytlgbDIZIeF3fdS1J8qYhuS1k7DMHY9OtwZuEWw6H29rTKKHB_x0mC2Lk51kEr1b-ob84OG2SKxqpUvkGA5g1v7Ru-MZkwGR0NUyw6l-bxp_S8_ZMIkEfkw2dy9XSnkhZ0K0T5ineR51cdma-m5c2gOoMTn1oPcn1Pmrg_PE3g6PqoeonTRrPp2CRYfR_4AEqyEcyEzJNI2GKNrzUVjmTK-PuRfjS90NNp5gt36H-KmpdWoP0Kii430QFpbYmyyg2S8s9GZhNbAp0wZTOeK5Y7-PYQ4xaNspTpJXZji4Kk9RFdsGinCmE46LEgiwoLUjwf9jSzMr5ZVZoyr5GGOSI_St5MhSnRHOdJYloUIpkrgMtw15XDi4j7fUjJM9pL0iAVvElDAVpPBaANIAKjcC5x0R73TmFf6vIaJtPEHkarVAx5CtG9fhCAtLTqRSC6LYhN-EAyZ-rSWxNsRZRthsPSCvqUS9n3S6jPB3zV8VrboLxEbSwLa-g6WwQ60Q4KAqDHCGIIq0swvun8QmhIa0h9X9x8B5aOdOYkTSV0HvmI2aWxem1TJoUuEqu5g7ICUeEYCjDsCp7VI3lnnJ10oksGYbVWrWu6XDFnKzRC7Doqg-U-kIxY4NeiawUYwEP3CqL-fhXpO-I_VHHRVQXn-rn0DZKzoqojgry4p199KvO6Dsc2X52_2vqwpEZu-nQmeVSA0UNw-SRbLZzrStKdyh30i4POnvIPbCqmNxtLdGTSo8y14DkDXst-clHXBKOPAp6_jGW9HDfD4cyAh_ye_KUqrNKFlQqXW_4v4lHu59BPoAJfjeJ4PzHnn40uexspCo-Adv_7H9cs6C14gHuwJKzHbVyoLvDoLCrahy66yyC0nLOFPLU2O65wI1azpbXYVcBwCVV85PEXHWOlcEOah0Tzv8DMm7elq7cweB0M6rA_iswmt5a7ey-FZeA-ujTKvisO5NYI6Gp1L-iqzZL230yhU6-j42BA66EWqTj0oYmpg0i_wlr7v8skctVbALEVla_zDtt6fZbCQ0vhJL6DmHPK7UD--KjsO29HEuns-ppIZNxsdVm6KXUioLGTvxBHEq4pjtVkGlIcFMDXTAoiq0xYlB9Lyz3NAzK2seYtSpQPAcOi5Stpw_WPt77naxEa9dOpiQZFOg_RWtZKm2KndRUoNMrMNiiwFSV5N61lmrBqeuva4PHTKl-3BQP3o5Gs5HMG1J_WGIuL4ne_Z1TOkBEH-Itu2s04EF23rAAj5sqTbq_ofNIrEfsNz9vk6AQa-eEKAffZjcuNoqfzdhpTfYDhoKV1Ws_OgkjPMyjID9IX7Y6vD-fvoLjmYGfSqua4AM_DDzReLGJ-C7L-25cSKCqo64gaPGLCAzT_T1FSmHoc2zFDnpkVfPUmI4YEaTl_R28B1BgFccS8QC2e42DeFWwTHvUWmebDfTVvPqOD3tGC_iE-G85mqQshT6-BhDIRC1xRWoJ5Ub7x9pGw0D-kwodRqxQij6-4LoNgRQ0nuur6he76JeHA4IY9Sz2a0ovrLMtjUFsh0B5gy044ARsFqWICDMQ9aam4UaOzbHZBNDBocJNzihFGGFC0IKuQDSrQdQmgjPr_ypTmwGGXYnhjJDhh0IDz_AjKT2LeDWhmkYUxXzBhy7IwXsCfRs2gpsRZyBnA2hBMQg5hb4Zm0oIlU04Z8hfKNbdwGlnAWhmmNyVwjoZLiTbnu9-zFJkyh5AL01dROThgWm-5U4Vk9NHcbE8FmB5T9mWNmLOfiYJNkLuqrI_0mmiRfuLeAAG-IHcYu5BDV456c04l0jl7wbaKmwBX47NQWq5iDl1XuW0h9osdMaPr9yWoNSA0UrPPrtcZawMDFkyxt28SjlnIeSupN8pZDN7fxvf8Yddjtex5PYUY6OOJcUzodjGN3BRLxKUhnOGjE9yzrK23qKLMNctLlIUSfRKufkVlQEJw1LlkhCUq7WWz7s1I9qVqqU4QIB9ZO3wgs-n0Fc5KWpOyjmjA2C-cRaYxbiiig7pWDQSURUGtuP6iBb4hU3ckvOxa1N_7PeGGoH-AZa9bSY6lLl0NA8-3j_b_G_4aboPuHlkVjzjCheTJHdpohhL-zDsF1MjbzK6Rg7pvDC3OoLh_Tu3389bnmMpF-gk-sn38XvSVxh2RoKMlU1kbZtOe7duMV31woL4_N2xvID9tmhBE4zrqCI2dRM5mTcjLiBBcB5ZMWHAcpMTy4de95mx_r3wVTcYLupm_WuW1H-NcqnKlyIfZ3QeEkHaX520j22_-nrF-JXTVUpoHxK2zsiz-Ogoh_xrwZKo9X9waMyu1cKAZtv4yr-zGJWjqXzlTAX7xP4HHoNbvmKwl-xVqITX50iJNfGhNBcV4pOB_peQH_bFxH7UZtzj3XD0M4Yb08RFaGWsVQGSkuVM4JZVPtu4JeBhuFrQh7ZKRD8htYFsraIYcmlcn8g2YlD7gmyU4-ea6nge8he5HvqziI2jqLJ329b0iYYXSIei7aMTBn9M2iq1axPvAtKefbMPVChQqyqFS9L7tlDKc1Ok9c81f_n6DTKjJB-el9pQJVhMNM96tp7ux952diydtOAaT6aNoePNO-D7MbGKqmFi8Nj7PDRDYr923BLTi6utZadyiNRCjkorY0zJ7Dm7i3ygVkOS-eSDphFl6_X78Xx6_LmwGn9sqt54aFg2JlhlypABSLyPxOPKGhFWhapGgKvDLqjFDgDJvEXIVtu6mEhmuJ53OzobxUEPIWb9IzmzeNqNNmGwvsG0yp-bdvhDeOduxor2foHHurdjfnhYSfgJFsNCCNSULLzOmd-0XUgpo9mjwhydt1cftNMEFXJTc-aHffxhsMpRZF2djBu1javp4JnDYiFF1x0BxHUqiL2hzNph9y_eF2yvYZSifiLcvxhkSB2CXz8tjLM6C9RN1uEd9RmKZstT8ntkCpy7g8-QNp3aUQYkey7UzrEHyZYReA6tMOt4lcHOxRgXG_0D42rUmUHIT73D5xWY3hFZAQnE48FuqQpqxn8CKtA3Ah3wD31epO-dfFucbB_g6mXcC8SGu1P6OkEtDt3qImGD9BE4zrJO1ZUn180T6ob9IJrENtp-yIgnGRvoSlHD2dcc65AmimQv5iSwKhTaQ_bd30X4BUv3xDn0iYvijlaBo6B6NlEmmPJy_lWgdedKqVazahrx251wroJTqTQGkFHn3IrYixdk-QSiAdsRyWIAhwpK2lw4kO_JY9FyGiksYNskAroRqIKC5VOLmOfPctgGS34NgpBK8F6rtpKKYpP9LdFzTfRLqgLoL4SwpgW-uCQ0AKPvu9fCOQAXRb36CJFlnVROsLDiWFE_aw486o1IGHfEwz-XnWHwuCr_uuYmOr9a2jNsR7_CyDXb1wDH9no5zYqwhFPYTPtPhWxL2oEH3jROe9wyxLYEtKHrLdzgZabTrwEp3bH8qooe3g0ddfq0NdHWK8BJ5ukuuT7IF2hPvHSGIJ_mJvw4E808Sbizj8SPVk6xKIWBEq9Iu-D4mYpgZ6aAD53lBlol6qQV1pE8Ww3BP8NME81ArEIYd51Sp7jr3wkRgLpb2fBx-V2F0gavKUYXJG5ITe7yuHSprJYcsuauSdVwWulufCkjeMRaYHIC1EXPK4IZBdgF2roaPbDzue9UnniaYL2swCYdWhLnoPn8FPzJnXBfqaM08yKLKASJyza5ldX01ve9WzvBe5gFprit4xtLQtntZcvtxMlF_y3qmrZuRdBq_UU42fSXkDlmr5u7X4Nfsx728WRHUE-oB0N_bQssauOEusT-VJFYSNFwraNBkd2G2kEAcje-ds3g0jcNCw29qB1lTXzRCeiRxiEpZFGa5tjNQK9_YF0MZ4X7f-OGhbFynBZZwb83RoR6TxoOHxf8DDGdICb1TULQr0hSA66UDM8n5eeVo6bC9bvFB_cnKME4Ah8teC3MLvushsP0vURWCVjOv5BqopPiToi_kCXXCGv2irk2bMdVfMxRuTEWcar87xWszhOF0erutNSCb7Pd-z_dzhIIvUWXYFTSnqpGyzOQGq0L-HhX9AJ829Gx_1LcJa8CDY5Tmk3pkLiBqW35Gu8pWr7QYwB1BNu9is1f8miyFd6JfVcUnY-tnDZsUqrU-Gi1kOgXUhqWLXnAN3xcCQ2khjcVOIf3Qec8jaBAc8nFhO3_i-af0yISWYFrlc2OirtWWMQZZaw9otwbUhmjsCLfu3h_BpfIvGVTdhkd7v6JvaH7xPsNsvuGSNHW9FpiarGPiY3nX7CNFSthWZJJhXogFk5Y0PrHSJN6haVE1PUO6QJBUwZiaPZrqG5ZsKX3K_zvSLNC79B7nua9JNV8OsBG_fXqoCln_mrP6G0_lliCwGTLzmBFN0iN_KNVtyt-mu315pXAmwKEnx0dFnsJswBRatwt5b5n2FeNvIpZe-CuaOHy1g2KyFaVl7eeg9Q2tbCsS1TMqRb_AobCgTq4HkpVdI0Zn8VKpXtuISbAho_IapNRrnnOCdTVGarltLUPBARs6o4UQWpTsOc-B_BY7HzRuwjZ-DK346ripufSCB3wSImFl8PV9zwPNFSlikBuGgcyIxLrp1X1pIJJjxdPMct3AHL0oq4CZHsb6Jut2h7PJpEcVSB5jP8O7CVGNM69Q5NDUQm3Hy-8XcF1Z_xU8bRfwV3WnZc6hFp_BqrNDm1-yAmjEeHyRrqdRj8mOfwuTyU8I3_fiFSoAImPl-P_2-UF8RhkfoK3lzTn9Hds4ipXDLje95qlpETz7XaPVH2e0xTOKfKNFz0sFWzErLVGedMFJZBydgiC9ncdSFVXilhrnBLqEGy58_hjVr_SIuODij4sTgzjwA4ScwdPVXHO-HZRKPyWO7doQRDSACkzjqnagJCHm9-EaeEg2jMg7-WI6I40iHdvUukP8LR-thsKmgYfX4OJPPKGE_KPmKxjshpFclwXVAPHJLu2iKquMWtgidRdnv3ycKnkKM2wZS0HA43dwVTe-LzGbTJ24ebyq3xaS4C2CmLMM66IykwJGNRAe-L2rg418zY2z0Jxf8WHF0FXZ-u_2VJPEUbom6XyHALVjFk1qbI3TSTzvcdQVwoQBmIdPoA-VSjAY5ubBu_G7ARY_oY_aLNEslnlB0mnapmAKh_5GmOfzsRNbCFHTQR-Fk-Okn0wcRPkytyVmBUKggekn3DgvHYECsjTqfuKILZ23iCJY0gf8nYOnIMohyr7MieR2VYj8DwK6PBbtnppOrao99wccVkBrdBVX_L6ABD8yzksSyg0vzt9UvawrU-jUh7iTC6ACRZoJbiny0bCzHglk6e31_FQv6-T5dKHJuvTRysUPB4XE4iQk60zJKsefXyPlDfd5yv6T-GjtNzofIHSczhAMDcpnzKPNBYTLTqU5lzymC-bhX37gT0OGTUqagxMRjxn6WwG3ObUsQRq1CVlfuz_h4WOaLGvhfjILCwi2yp7DIz9PQLE2HcUwu_tn6TA8gyXC1_fP7Fy2LF6Ww3_04_g5z2my48TDJmPpKeOGZ0KQ2cZmMfqpZ_tYKI1feNIppOgufrzzEqBwge9utAfCPTrHMfkP-XjBJw3z8EXge23LnWS13Ehnft5JHVUx1A4mDArBYIGw_4Hkx0xDH738ZMLM1ia7EMXSW0cTIF62JPxAY1T4o0pkr7OD_kaWLzAB3wvXU8d9CHgcrZMo8PxQrU8nfv_ixpDM02bEPt_Dd3Pk7cLxDD7QlCa-X0Yq_dqEQp7OweZQjwqeIcQbSZY9uoRVtii-JrdVyng4PNAJzMm9bg9EGWbAoC8FahmP--YjTuyrneBRWOlGMwSUmmxCVBJl1FWQy7uPjoChFmwqWJdNPAr1ARt_NX0KHK-nnqaif27bbNoIvSgoh2cQ0qOAg'};
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
