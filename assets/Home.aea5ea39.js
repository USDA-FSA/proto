import{_ as X,a as _}from"./index.7296781b.js";import{g as l,h as E,i as Y,j as G,r as c,o as z,f as Q,k as r,l as e,m as T,t as M,n as S}from"./vendor.28259ad5.js";import{u as q}from"./useNavigation.1f355f07.js";import{u as K}from"./usePopoverControls.d469eb65.js";import{b as W,a as Z}from"./BaseFooter.0fc46b50.js";import{v as f}from"./v4.90f1a8cc.js";function J(){const g=l(""),o=l({}),p=l({}),a=s=>{let d=document.getElementById(s);d.setAttribute("aria-expanded",!0),d.setAttribute("aria-hidden","false"),d.addEventListener("keydown",I);let i='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',t=d.querySelectorAll(i);t=Array.prototype.slice.call(t),o.value=t[0],p.value=t[t.length-1],o.value.focus();let m=document.getElementsByTagName("body")[0];m.className=m.className+" fsa-modal-scroll-fix",setTimeout(function(){d.focus()},200)},b=s=>{document.getElementById(s).setAttribute("aria-hidden","true");let i=document.getElementsByTagName("body")[0];i.className=i.className.replace(" fsa-modal-scroll-fix","");let t=document.querySelector("[data-modal-origin]");t&&(t.removeAttribute("data-modal-origin"),t.setAttribute("aria-expanded","false"),t.focus())},I=s=>{s.keyCode===9&&(s.shiftKey?document.activeElement===o.value&&(s.preventDefault(),p.value.focus()):document.activeElement===p.value&&(s.preventDefault(),o.value.focus())),s.keyCode===27&&closeModal()};return{setModalId:s=>{g.value=s},getModalId:()=>g.value,showModal:a,hideModal:b}}const $=E(()=>_(()=>import("./field.f8e7f114.js"),["assets/field.f8e7f114.js","assets/useErrorState.6d65ed00.js","assets/vendor.28259ad5.js","assets/vendor.54c94b66.css","assets/usePopoverControls.d469eb65.js","assets/index.7296781b.js","assets/index.fac3a5f5.css"])),ee=E(()=>_(()=>import("./field-group.ea177047.js"),["assets/field-group.ea177047.js","assets/useErrorState.6d65ed00.js","assets/vendor.28259ad5.js","assets/vendor.54c94b66.css","assets/usePopoverControls.d469eb65.js","assets/index.7296781b.js","assets/index.fac3a5f5.css"])),ae=E(()=>_(()=>import("./selection.5daf1b6f.js"),["assets/selection.5daf1b6f.js","assets/useErrorState.6d65ed00.js","assets/vendor.28259ad5.js","assets/vendor.54c94b66.css","assets/usePopoverControls.d469eb65.js","assets/index.7296781b.js","assets/index.fac3a5f5.css"])),le=E(()=>_(()=>import("./select-multi.19c496cd.js"),["assets/select-multi.19c496cd.js","assets/useErrorState.6d65ed00.js","assets/vendor.28259ad5.js","assets/vendor.54c94b66.css","assets/index.7296781b.js","assets/index.fac3a5f5.css"])),oe=E(()=>_(()=>import("./Page-Level-Help-Modal.276c5ab8.js"),["assets/Page-Level-Help-Modal.276c5ab8.js","assets/index.7296781b.js","assets/index.fac3a5f5.css","assets/vendor.28259ad5.js","assets/vendor.54c94b66.css","assets/useNavigation.1f355f07.js","assets/usePopoverControls.d469eb65.js","assets/BaseFooter.0fc46b50.js","assets/global-nav.52311828.js","assets/v4.90f1a8cc.js"])),se=E(()=>_(()=>import("./inline-help.bda7b6da.js"),["assets/inline-help.bda7b6da.js","assets/usePopoverControls.d469eb65.js","assets/index.7296781b.js","assets/index.fac3a5f5.css","assets/vendor.28259ad5.js","assets/vendor.54c94b66.css"])),te=E(()=>_(()=>import("./spinbox.2202e6d7.js"),["assets/spinbox.2202e6d7.js","assets/index.7296781b.js","assets/index.fac3a5f5.css","assets/vendor.28259ad5.js","assets/vendor.54c94b66.css"])),ie={components:{baseHeader:W,baseFooter:Z,field:$,fieldGroup:ee,selection:ae,selectMulti:le,pageLevelHelpModal:oe,inlineHelp:se,spinbox:te},setup(g){Y(),q();const{setModalId:o,getModalId:p,showModal:a,hideModal:b}=J(),{showPopover:I,hidePopover:R}=K(),v=l(f());o(v.value);const s=l(f()),d=l(f()),i=25,t=n=>{let h=document.getElementById(d);n.val+i>h.value&&(h.value=n.val+i)},m=n=>{let h=document.getElementById(s);n.val+i<h.value&&(h.value=n.val+i)},A=l(null),u=l(f()),F=l(null),C=l(null),y=l(null),B=l(f()),U=[{id:"pie1",label:"Apple Pie",name:"piegroup"},{id:"pie2",label:"Pumpkin Pie",name:"piegroup"},{id:"pie3",label:"Keylime Pie",name:"piegroup"},{id:"pie4",label:"French Silk Pie",name:"piegroup"}],x=l(f()),w=[{groupId:"g0",groupData:[{id:"v0",label:"Select a Vehicle",name:"vehiclesGroup",val:0,isDisabled:!0,isSelected:!0}]},{groupId:"g1",groupLabel:"Small Vehicles",groupData:[{id:"v1",label:"Motor Scooter",val:"scoot",name:"small"},{id:"v2",label:"Cafe Racer",val:"cf",name:"small"},{id:"v3",label:"Can-Am",val:"can",name:"small"}]},{groupId:"g2",groupLabel:"Medium Vehicles",groupData:[{id:"v4",label:"4-Door Sedan",val:"sedan",name:"medium"},{id:"v5",label:"Sports Coupe",val:"Coupe",name:"medium"},{id:"v6",label:"Cross Over SUV",val:"xo",name:"medium"}]},{groupId:"g3",groupLabel:"Large Vehicles",groupData:[{id:"v7",label:"Minivan",val:"van",name:"large"},{id:"v8",label:"Pickup Truck",val:"truck",name:"large"},{id:"v9",label:"7 Passenger SUV",val:"suv",name:"large"},{id:"v10",label:"15 Passenger Van",val:"bigvan",name:"large"}]}],N=[{id:"a0",label:"Select all",val:"",name:"a0",behavior:"select-multi-all"},{id:"a1",label:"Aligator",val:"",name:"a1",behavior:""},{id:"a2",label:"Buffalo",val:"checked",name:"a2",behavior:""},{id:"a3",label:"Cow",val:"",name:"a3",behavior:""},{id:"a4",label:"Dolphin",val:"",name:"a4",behavior:""},{id:"a5",label:"Elephant",val:"",name:"a5",behavior:""},{id:"a6",label:"Frog",val:"",name:"a6",behavior:""},{id:"a7",label:"Goose",val:"",name:"a7",behavior:""}];let P=l(!1),D=l(!1),L=l(!1),O=l(!1);const k=n=>{n=="name"&&(P.value=!P.value,A.value.setHasError(P.value)),n=="pies"&&(D.value=!D.value,F.value.setHasError(D.value)),n=="vehicle"&&(L.value=!L.value,C.value.setHasError(L.value)),n=="animal"&&(O.value=!O.value,y.value.setHasError(O.value))},H=l("Search Header Default"),V=l(""),j=n=>{H.value="Search Results:",V.value=n.phrase};return G(()=>{console.log("Home onMounted")}),{priceRangeLowFieldId:s,priceRangeHighFieldId:d,nameField:A,nameFieldId:u,piesFieldId:B,pieField:F,vehicleId:x,vehicleField:C,animalField:y,setError:k,pieData:U,vehicleData:w,animalData:N,submitSearch:j,searchResults:V,headerText:H,showModal:a,hideModal:b,helpModalId:v,showPopover:I,hidePopover:R,priceRangeStep:i,handleSpinboxLow:t,handleSpinboxHigh:m}}},ne={id:"main-content",tabindex:"-1"},de={class:"fsa-section"},re={class:"fsa-section__bd"},ce={class:"fsa-m-t--l"},_e={class:"fsa-level@m fsa-level--justify-between"},Ee=e("h1",{class:"fsa-m--none"},"Home",-1),ve={class:"fsa-level fsa-level--justify-between fsa-level--grow-auto"},me=e("svg",{class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1),ue=S(" Help "),fe=[me,ue],pe={class:"fsa-section"},he={class:"fsa-section__bd"},Se={class:"fsa-grid"},ge={class:"fsa-grid__1/1 fsa-grid__1/2@m"},be={class:"fsa-field"},Ie=["for"],Re={class:"fsa-level"},Ae=e("div",null," - ",-1),Pe=["id"],De=e("div",{class:"fsa-grid__1/1 fsa-grid__1/2@m"},[e("p",{class:"fsa-m-t--m"})],-1),Le={class:"fsa-grid"},Oe={class:"fsa-grid__1/1 fsa-grid__1/2@m"},Te=["id"],Fe=e("p",null,[e("strong",null,"Note:"),S(" Please provide your full legal given name, a it is written on your birth certificate.")],-1),Ce=[Fe],ye={class:"fsa-grid__1/1 fsa-grid__1/2@m"},He={class:"fsa-m-t--m"},Ve={class:"fsa-grid"},Me={class:"fsa-grid__1/1 fsa-grid__1/2@m"},Be=["id"],Ue=e("p",null,[e("strong",null,"Note:"),S(" Select the pie that you like the most to bring to parties.")],-1),xe=[Ue],we={class:"fsa-grid__1/1 fsa-grid__1/2@m"},Ne={class:"fsa-m-t--l"},ke={class:"fsa-level fsa-level--justify-between fsa-level--align-top"},je=["id"],Xe=e("p",null,[e("strong",null,"Note:"),S(" Select the vehicle that has the least amount of C0"),e("sub",null,"2"),S(" emissions.")],-1),Ye=[Xe],Ge={class:"fsa-m-t--l"},ze={class:"fsa-level fsa-level--justify-between fsa-level--align-top"},Qe={class:"fsa-m-t--l"},qe={class:"fsa-section"},Ke={class:"fsa-section__bd"},We={class:"fsa-m-t--l"};function Ze(g,o,p,a,b,I){const R=c("baseHeader"),v=c("spinbox"),s=c("field"),d=c("field-group"),i=c("selection"),t=c("selectMulti"),m=c("page-level-help-modal"),A=c("baseFooter");return z(),Q("div",null,[r(R,{onEmitSearch:a.submitSearch},null,8,["onEmitSearch"]),e("main",ne,[e("div",de,[e("div",re,[e("div",ce,[e("div",_e,[Ee,e("div",ve,[e("span",null,[e("button",{onClick:o[0]||(o[0]=u=>a.showModal(a.helpModalId)),class:"fsa-btn fsa-btn--block fsa-btn--flat",type:"button"},fe)])])])])])]),e("div",pe,[e("div",he,[e("div",Se,[e("div",ge,[e("div",be,[e("label",{class:"fsa-field__label",for:a.priceRangeHighFieldId},"Price Range",8,Ie),e("div",Re,[r(v,{ID:a.priceRangeLowFieldId,INPUT_VALUE:"100",LABEL_TITLE:"lower price",STEP:a.priceRangeStep,USE_PREFIX:"true",PREFIX:"$",USE_SUFFIX:"false",SUFFIX:"%",USE_ICON:"false",ICON_PATH:"",ICON_SIZE_CLASS:"",onEmitSpin:a.handleSpinboxLow,ARIA_DESCRIBEDBY:a.priceRangeLowFieldId},null,8,["ID","STEP","onEmitSpin","ARIA_DESCRIBEDBY"]),Ae,r(v,{ID:a.priceRangeHighFieldId,INPUT_VALUE:"500",LABEL_TITLE:"higher price",STEP:a.priceRangeStep,USE_PREFIX:"true",PREFIX:"$",USE_SUFFIX:"false",SUFFIX:"%",USE_ICON:"false",ICON_PATH:"",ICON_SIZE_CLASS:"",onEmitSpin:a.handleSpinboxHigh,ARIA_DESCRIBEDBY:a.priceRangeHighFieldId},null,8,["ID","STEP","onEmitSpin","ARIA_DESCRIBEDBY"])]),e("span",{class:"fsa-field__help",id:a.priceRangeHighFieldId+"-help"},"Provide a range of price.",8,Pe)])]),De]),e("div",Le,[e("div",Oe,[r(s,{ID:a.nameFieldId,EXTRA_FIELD_CLASSES:"",LABEL:"Full Name",INPUT_VALUE:"",INPUT_TYPE:"text",REQUIRED:"true",ARIA_REQUIRED:"true",BEHAVIOR:"",ARIA_DESCRIBEDBY:a.nameFieldId+"__help",HELP_MESSAGE:"Use your full name, please.",ERROR_MESSAGE:"Hey, you forgot your name, Buddy!",HAS_ERROR:"false",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fsa-popover--rt fsa-popover--size-small",POPOVER_ID:a.nameFieldId+"-help-popover",POPOVER_HEADER:"Name Field Help",ref:"nameField"},{default:T(()=>[e("div",{id:a.nameFieldId+"-popup-body"},Ce,8,Te)]),_:1},8,["ID","ARIA_DESCRIBEDBY","POPOVER_ID"])]),e("div",ye,[e("p",He,[e("button",{onClick:o[1]||(o[1]=u=>a.setError("name")),class:"fsa-btn fsa-btn--secondary"},"Toggle Name Error")])])]),e("div",Ve,[e("div",Me,[r(d,{ID:a.piesFieldId,GROUP_TYPE:"radio",DISPLAY:"",LABEL:"Pick a Pie",DATA:a.pieData,REQUIRED:"",BEHAVIOR:"",EXTRA_FIELD_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"false",HELP_MESSAGE:"Select your favorite.",ERROR_MESSAGE:"Why don't you like my pies?",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fsa-popover--tr fsa-popover--size-small",POPOVER_ID:a.piesFieldId+"-help-popover",POPOVER_HEADER:"Pies Help",ref:"pieField"},{default:T(()=>[e("div",{id:a.piesFieldId+"-popup-body"},xe,8,Be)]),_:1},8,["ID","DATA","POPOVER_ID"])]),e("div",we,[e("p",Ne,[e("button",{onClick:o[2]||(o[2]=u=>a.setError("pies")),class:"fsa-btn fsa-btn--secondary"},"Toggle Pie Error")])])]),e("div",ke,[e("span",null,[r(i,{ID:a.vehicleId,LABEL:"What do you drive?",DATA:a.vehicleData,REQUIRED:"true",SELECT_CLASSES:"",EXTRA_FIELD_CLASSES:"",EXTRA_SELECT_CLASSES:"fsa-select--fill",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"true",HELP_MESSAGE:"Select your ride.",ERROR_MESSAGE:"You must like walking!",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fsa-popover--rt fsa-popover--size-small",POPOVER_ID:a.vehicleId+"-help-popover",POPOVER_HEADER:"Vehicle Help",ref:"vehicleField"},{default:T(()=>[e("div",{id:a.vehicleId+"-popup-body"},Ye,8,je)]),_:1},8,["ID","DATA","POPOVER_ID"])]),e("span",null,[e("p",Ge,[e("button",{onClick:o[3]||(o[3]=u=>a.setError("vehicle")),class:"fsa-btn fsa-btn--secondary"},"Toggle Vehicle Error")])])]),e("div",ze,[e("span",null,[r(t,{ID:"animal",LABEL:"Select large animals.",DATA:a.animalData,REQUIRED:"false",EXTRA_CLASSES:"",FIELD_ERROR_CLASS:"",ARIA_REQUIRED:"false",HELP_MESSAGE:"Please don't feed them.",ERROR_MESSAGE:"Those are small ones, buddy!",ref:"animalField"},null,8,["DATA"])]),e("span",null,[e("p",Qe,[e("button",{onClick:o[4]||(o[4]=u=>a.setError("animal")),class:"fsa-btn fsa-btn--secondary"},"Toggle Animal Error")])])])])]),e("div",qe,[e("div",Ke,[e("h2",null,M(a.headerText),1),e("span",We,M(a.searchResults),1)])]),r(m,{MODAL_ID:a.helpModalId},null,8,["MODAL_ID"])]),r(A)])}var Je=X(ie,[["render",Ze]]),ta=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Je});export{ta as H,J as u};
