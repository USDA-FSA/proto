import{_ as u,a as E}from"./index.3c8ef0a3.js";import{y as p,u as v,f as n,z as h,g as i,o as b,c as R,i as _,a as e,t as d}from"./vendor.b751981a.js";import{b as S,a as A}from"./BaseFooter.81aa2728.js";import"./global-nav.bface2c2.js";const H=p(()=>E(()=>import("./field.567df14a.js"),["assets/field.567df14a.js","assets/useErrorState.960315c8.js","assets/vendor.b751981a.js","assets/vendor.5b2dfc2b.css","assets/usePopoverControls.d469eb65.js","assets/index.3c8ef0a3.js","assets/index.fac3a5f5.css"])),y={components:{baseHeader:S,baseFooter:A,field:H},setup(f){v();const a=n(null);let t=n(!1);const s=o=>{o=="name"&&(t.value=!t.value,a.value.setHasError(t.value))},l=n("Search Header Default"),r=n(""),c=o=>{l.value="Search Results:",r.value=o.phrase};return h(()=>{console.log("Home onMounted")}),{nameField:a,setError:s,submitSearch:c,searchResults:r,headerText:l}}},I={id:"main-content",tabindex:"-1"},g={class:"fsa-section"},B={class:"fsa-section__bd"},D=e("h1",null,"Home Page",-1),x={class:"fsa-level fsa-level--justify-between fsa-level--align-top"},T={class:"fsa-m-t--l"},F={class:"fsa-section"},N={class:"fsa-section__bd"},P={class:"fsa-m-t--l"};function j(f,a,t,s,l,r){const c=i("baseHeader"),o=i("field"),m=i("baseFooter");return b(),R("div",null,[_(c,{onEmitSearch:s.submitSearch},null,8,["onEmitSearch"]),e("main",I,[e("div",g,[e("div",B,[D,e("div",x,[e("span",null,[_(o,{ID:"name",EXTRA_CLASSES:"",LABEL:"Full Name",INPUT_VALUE:"",INPUT_TYPE:"text",REQUIRED:"true",ARIA_REQUIRED:"true",BEHAVIOR:"",ARIA_DESCRIBEDBY:"name__help",HELP_MESSAGE:"Use your full name, please.",ERROR_MESSAGE:"Hey, you forgot your name, Buddy!",HAS_ERROR:"false",ref:"nameField"},null,512)]),e("span",null,[e("p",T,[e("button",{onClick:a[0]||(a[0]=L=>s.setError("name")),class:"fsa-btn fsa-btn--secondary"},"Toggle Name Error")])])])])]),e("div",F,[e("div",N,[e("h2",null,d(s.headerText),1),e("span",P,d(s.searchResults),1)])])]),_(m)])}var O=u(y,[["render",j]]);export{O as default};
