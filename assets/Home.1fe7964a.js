import{_ as G,a as v}from"./index.f677347f.js";import{g as l,h as u,i as z,j as Y,r as c,o as X,f as Q,k as _,l as e,m as A,t as M,n as m}from"./vendor.054b4197.js";import{u as W,v as h}from"./global-nav.7e313d6c.js";import{u as q}from"./usePopoverControls.d469eb65.js";import{b as K,a as Z}from"./BaseFooter.610b64d0.js";function J(){const g=l(""),o=l({}),f=l({}),a=s=>{let i=document.getElementById(s);i.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden","false"),i.addEventListener("keydown",b);let n='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',t=i.querySelectorAll(n);t=Array.prototype.slice.call(t),o.value=t[0],f.value=t[t.length-1],o.value.focus();let E=document.getElementsByTagName("body")[0];E.className=E.className+" fsa-modal-scroll-fix",setTimeout(function(){i.focus()},200)},R=s=>{document.getElementById(s).setAttribute("aria-hidden","true");let n=document.getElementsByTagName("body")[0];n.className=n.className.replace(" fsa-modal-scroll-fix","");let t=document.querySelector("[data-modal-origin]");t&&(t.removeAttribute("data-modal-origin"),t.setAttribute("aria-expanded","false"),t.focus())},b=s=>{s.keyCode===9&&(s.shiftKey?document.activeElement===o.value&&(s.preventDefault(),f.value.focus()):document.activeElement===f.value&&(s.preventDefault(),o.value.focus())),s.keyCode===27&&closeModal()};return{setModalId:s=>{g.value=s},getModalId:()=>g.value,showModal:a,hideModal:R}}const $=u(()=>v(()=>import("./field.67c0fea2.js"),["assets/field.67c0fea2.js","assets/useErrorState.e56737de.js","assets/vendor.054b4197.js","assets/vendor.5b2dfc2b.css","assets/usePopoverControls.d469eb65.js","assets/index.f677347f.js","assets/index.fac3a5f5.css"])),ee=u(()=>v(()=>import("./field-group.4e2b8c4a.js"),["assets/field-group.4e2b8c4a.js","assets/useErrorState.e56737de.js","assets/vendor.054b4197.js","assets/vendor.5b2dfc2b.css","assets/usePopoverControls.d469eb65.js","assets/index.f677347f.js","assets/index.fac3a5f5.css"])),ae=u(()=>v(()=>import("./selection.a97ed48e.js"),["assets/selection.a97ed48e.js","assets/useErrorState.e56737de.js","assets/vendor.054b4197.js","assets/vendor.5b2dfc2b.css","assets/usePopoverControls.d469eb65.js","assets/index.f677347f.js","assets/index.fac3a5f5.css"])),le=u(()=>v(()=>import("./select-multi.1496b567.js"),["assets/select-multi.1496b567.js","assets/useErrorState.e56737de.js","assets/vendor.054b4197.js","assets/vendor.5b2dfc2b.css","assets/useUtilities.0a39ba39.js","assets/index.f677347f.js","assets/index.fac3a5f5.css"])),oe=u(()=>v(()=>import("./Page-Level-Help-Modal.24ddb5f1.js"),["assets/Page-Level-Help-Modal.24ddb5f1.js","assets/index.f677347f.js","assets/index.fac3a5f5.css","assets/vendor.054b4197.js","assets/vendor.5b2dfc2b.css","assets/global-nav.7e313d6c.js","assets/usePopoverControls.d469eb65.js","assets/BaseFooter.610b64d0.js"])),se=u(()=>v(()=>import("./inline-help.a78abd31.js"),["assets/inline-help.a78abd31.js","assets/usePopoverControls.d469eb65.js","assets/index.f677347f.js","assets/index.fac3a5f5.css","assets/vendor.054b4197.js","assets/vendor.5b2dfc2b.css"])),te=u(()=>v(()=>import("./range.2e30449d.js"),["assets/range.2e30449d.js","assets/index.f677347f.js","assets/index.fac3a5f5.css","assets/vendor.054b4197.js","assets/vendor.5b2dfc2b.css","assets/useErrorState.e56737de.js","assets/usePopoverControls.d469eb65.js"])),ie={components:{baseHeader:K,baseFooter:Z,field:$,fieldGroup:ee,selection:ae,selectMulti:le,pageLevelHelpModal:oe,inlineHelp:se,range:te},setup(g){z(),W();const{setModalId:o,getModalId:f,showModal:a,hideModal:R}=J(),{showPopover:b,hidePopover:S}=q(),p=l(h());o(p.value);const s=l(null),i=l(h()),n=l("10"),t=d=>{},E=l(null),P=l(h()),r=l(null),C=l(null),V=l(null),B=l(h()),U=[{id:"pie1",label:"Apple Pie",name:"piegroup"},{id:"pie2",label:"Pumpkin Pie",name:"piegroup"},{id:"pie3",label:"Keylime Pie",name:"piegroup"},{id:"pie4",label:"French Silk Pie",name:"piegroup"}],k=l(h()),w=[{groupId:"g0",groupData:[{id:"v0",label:"Select a Vehicle",name:"vehiclesGroup",val:0,isDisabled:!0,isSelected:!0}]},{groupId:"g1",groupLabel:"Small Vehicles",groupData:[{id:"v1",label:"Motor Scooter",val:"scoot",name:"small"},{id:"v2",label:"Cafe Racer",val:"cf",name:"small"},{id:"v3",label:"Can-Am",val:"can",name:"small"}]},{groupId:"g2",groupLabel:"Medium Vehicles",groupData:[{id:"v4",label:"4-Door Sedan",val:"sedan",name:"medium"},{id:"v5",label:"Sports Coupe",val:"Coupe",name:"medium"},{id:"v6",label:"Cross Over SUV",val:"xo",name:"medium"}]},{groupId:"g3",groupLabel:"Large Vehicles",groupData:[{id:"v7",label:"Minivan",val:"van",name:"large"},{id:"v8",label:"Pickup Truck",val:"truck",name:"large"},{id:"v9",label:"7 Passenger SUV",val:"suv",name:"large"},{id:"v10",label:"15 Passenger Van",val:"bigvan",name:"large"}]}],N=[{id:"a0",label:"Select all",val:"",name:"a0",behavior:"select-multi-all"},{id:"a1",label:"Aligator",val:"",name:"a1",behavior:""},{id:"a2",label:"Buffalo",val:"checked",name:"a2",behavior:""},{id:"a3",label:"Cow",val:"",name:"a3",behavior:""},{id:"a4",label:"Dolphin",val:"",name:"a4",behavior:""},{id:"a5",label:"Elephant",val:"",name:"a5",behavior:""},{id:"a6",label:"Frog",val:"",name:"a6",behavior:""},{id:"a7",label:"Goose",val:"",name:"a7",behavior:""}];let D=l(!1),O=l(!1),L=l(!1),T=l(!1),I=l(!1);const j=d=>{if(d=="name"&&(D.value=!D.value,E.value.setHasError(D.value)),d=="pies"&&(O.value=!O.value,r.value.setHasError(O.value)),d=="vehicle"&&(L.value=!L.value,C.value.setHasError(L.value)),d=="animal"&&(T.value=!T.value,V.value.setHasError(T.value)),d=="price-range"){I.value=!I.value;let F=s.value;F.setHasError(I.value),F.hasErrorCaller(I.value)}},H=l("Search Header Default"),y=l(""),x=d=>{H.value="Search Results:",y.value=d.phrase};return Y(()=>{}),{priceRangeFieldRef:s,priceRangeFieldId:i,handleRangeChange:t,rangeStep:n,nameField:E,nameFieldId:P,piesFieldId:B,pieField:r,vehicleId:k,vehicleField:C,animalField:V,setError:j,pieData:U,vehicleData:w,animalData:N,submitSearch:x,searchResults:y,headerText:H,showModal:a,hideModal:R,helpModalId:p,showPopover:b,hidePopover:S}}},ne={id:"main-content",tabindex:"-1"},re={class:"fsa-section"},de={class:"fsa-section__bd"},ce={class:"fsa-m-t--l"},_e={class:"fsa-level@m fsa-level--justify-between"},Ee=e("h1",{class:"fsa-m--none"},"Home",-1),ve={class:"fsa-level fsa-level--justify-between fsa-level--grow-auto"},ue=e("svg",{class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),me=m(" Help "),fe=[ue,me],pe={class:"fsa-section"},he={class:"fsa-section__bd"},ge={class:"fsa-grid"},Re={class:"fsa-grid__1/1 fsa-grid__1/2@m"},be=["id"],Se=e("p",null,[e("strong",null,"Note:"),m(" The low and high prices values will automatically adjust if one is exceeding the limits of the range..")],-1),Ie=[Se],Ae={class:"fsa-grid__1/1 fsa-grid__1/2@m"},Pe={class:"fsa-m-t--m"},De={class:"fsa-grid"},Oe={class:"fsa-grid__1/1 fsa-grid__1/2@m"},Le=["id"],Te=e("p",null,[e("strong",null,"Note:"),m(" Please provide your full legal given name, a it is written on your birth certificate.")],-1),Ce=[Te],Ve={class:"fsa-grid__1/1 fsa-grid__1/2@m"},He={class:"fsa-m-t--m"},ye={class:"fsa-grid"},Fe={class:"fsa-grid__1/1 fsa-grid__1/2@m"},Me=["id"],Be=e("p",null,[e("strong",null,"Note:"),m(" Select the pie that you like the most to bring to parties.")],-1),Ue=[Be],ke={class:"fsa-grid__1/1 fsa-grid__1/2@m"},we={class:"fsa-m-t--l"},Ne={class:"fsa-level fsa-level--justify-between fsa-level--align-top"},je=["id"],xe=e("p",null,[e("strong",null,"Note:"),m(" Select the vehicle that has the least amount of C0"),e("sub",null,"2"),m(" emissions.")],-1),Ge=[xe],ze={class:"fsa-m-t--l"},Ye={class:"fsa-level fsa-level--justify-between fsa-level--align-top"},Xe={class:"fsa-m-t--l"},Qe={class:"fsa-section"},We={class:"fsa-section__bd"},qe={class:"fsa-m-t--l"};function Ke(g,o,f,a,R,b){const S=c("baseHeader"),p=c("range"),s=c("field"),i=c("field-group"),n=c("selection"),t=c("selectMulti"),E=c("page-level-help-modal"),P=c("baseFooter");return X(),Q("div",null,[_(S,{onEmitSearch:a.submitSearch},null,8,["onEmitSearch"]),e("main",ne,[e("div",re,[e("div",de,[e("div",ce,[e("div",_e,[Ee,e("div",ve,[e("span",null,[e("button",{onClick:o[0]||(o[0]=r=>a.showModal(a.helpModalId)),class:"fsa-btn fsa-btn--block fsa-btn--flat",type:"button"},fe)])])])])])]),e("div",pe,[e("div",he,[e("div",ge,[e("div",Re,[_(p,{ID:a.priceRangeFieldId,onEmitRangeChange:a.handleRangeChange,EXTRA_FIELD_CLASSES:"fsa-field--fill",RANGE_LABEL:"Price Range",LOW_VALUE:"30",LOW_LABEL_TITLE:"lower price value",HIGH_VALUE:"70",HIGH_LABEL_TITLE:"higher price value",STEP:a.rangeStep,USE_PREFIX:"true",PREFIX:"$",USE_SUFFIX:"false",SUFFIX:"%",USE_ICON:"false",ICON_PATH:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z",ICON_SIZE_CLASS:"fsa-icon--size-2",ARIA_DESCRIBEDBY:a.priceRangeFieldId+"__help",HELP_MESSAGE:"Receive a better offer with a smaller price range",INPUT_ERROR_CLASS:"fsa-input--error",ERROR_MESSAGE:"That price range is not acceptable.",HAS_ERROR:"false",USE_POPOVER:"false",POPOVER_TYPE:"help",POPOVER_CLASSES:"fsa-popover--tr fsa-popover--size-small",POPOVER_ID:a.priceRangeFieldId+"-help-popover",POPOVER_HEADER:"Price Range Help",ref:"priceRangeFieldRef"},{default:A(()=>[e("div",{id:a.priceRangeFieldId+"-popup-body"},Ie,8,be)]),_:1},8,["ID","onEmitRangeChange","STEP","ARIA_DESCRIBEDBY","POPOVER_ID"])]),e("div",Ae,[e("p",Pe,[e("button",{onClick:o[1]||(o[1]=r=>a.setError("price-range")),class:"fsa-btn fsa-btn--secondary"},"Toggle Price Range Error")])])]),e("div",De,[e("div",Oe,[_(s,{ID:a.nameFieldId,EXTRA_FIELD_CLASSES:"",LABEL:"Full Name",INPUT_VALUE:"",INPUT_TYPE:"text",REQUIRED:"true",ARIA_REQUIRED:"true",BEHAVIOR:"",ARIA_DESCRIBEDBY:a.nameFieldId+"__help",HELP_MESSAGE:"Use your full name, please.",ERROR_MESSAGE:"Hey, you forgot your name, Buddy!",HAS_ERROR:"false",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fsa-popover--rt fsa-popover--size-small",POPOVER_ID:a.nameFieldId+"-help-popover",POPOVER_HEADER:"Name Field Help",ref:"nameField"},{default:A(()=>[e("div",{id:a.nameFieldId+"-popup-body"},Ce,8,Le)]),_:1},8,["ID","ARIA_DESCRIBEDBY","POPOVER_ID"])]),e("div",Ve,[e("p",He,[e("button",{onClick:o[2]||(o[2]=r=>a.setError("name")),class:"fsa-btn fsa-btn--secondary"},"Toggle Name Error")])])]),e("div",ye,[e("div",Fe,[_(i,{ID:a.piesFieldId,GROUP_TYPE:"radio",DISPLAY:"",LABEL:"Pick a Pie",DATA:a.pieData,REQUIRED:"",BEHAVIOR:"",EXTRA_FIELD_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"false",HELP_MESSAGE:"Select your favorite.",ERROR_MESSAGE:"Why don't you like my pies?",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fsa-popover--tr fsa-popover--size-small",POPOVER_ID:a.piesFieldId+"-help-popover",POPOVER_HEADER:"Pies Help",ref:"pieField"},{default:A(()=>[e("div",{id:a.piesFieldId+"-popup-body"},Ue,8,Me)]),_:1},8,["ID","DATA","POPOVER_ID"])]),e("div",ke,[e("p",we,[e("button",{onClick:o[3]||(o[3]=r=>a.setError("pies")),class:"fsa-btn fsa-btn--secondary"},"Toggle Pie Error")])])]),e("div",Ne,[e("span",null,[_(n,{ID:a.vehicleId,LABEL:"What do you drive?",DATA:a.vehicleData,REQUIRED:"true",SELECT_CLASSES:"",EXTRA_FIELD_CLASSES:"",EXTRA_SELECT_CLASSES:"fsa-select--fill",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"Select your ride.",ERROR_MESSAGE:"You must like walking!",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fsa-popover--rt fsa-popover--size-small",POPOVER_ID:a.vehicleId+"-help-popover",POPOVER_HEADER:"Vehicle Help",ref:"vehicleField"},{default:A(()=>[e("div",{id:a.vehicleId+"-popup-body"},Ge,8,je)]),_:1},8,["ID","DATA","POPOVER_ID"])]),e("span",null,[e("p",ze,[e("button",{onClick:o[4]||(o[4]=r=>a.setError("vehicle")),class:"fsa-btn fsa-btn--secondary"},"Toggle Vehicle Error")])])]),e("div",Ye,[e("span",null,[_(t,{ID:"animal",LABEL:"Select large animals.",DATA:a.animalData,REQUIRED:"false",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"false",HELP_MESSAGE:"Please don't feed them.",ERROR_MESSAGE:"Those are small ones, buddy!",ref:"animalField"},null,8,["DATA"])]),e("span",null,[e("p",Xe,[e("button",{onClick:o[5]||(o[5]=r=>a.setError("animal")),class:"fsa-btn fsa-btn--secondary"},"Toggle Animal Error")])])])])]),e("div",Qe,[e("div",We,[e("h2",null,M(a.headerText),1),e("span",qe,M(a.searchResults),1)])]),_(E,{MODAL_ID:a.helpModalId},null,8,["MODAL_ID"])]),_(P)])}var Ze=G(ie,[["render",Ke]]),oa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ze});export{oa as H,J as u};
