import{p as D,g as B,q as U,s as H,w as T,j as N,v as P,o,f as r,l as s,F as p,x as y,y as L,t as h,z as C,A as E}from"./vendor.054b4197.js";import{_ as F}from"./index.94f1a9ed.js";function V(){const l=D();return{goto:(d,n="")=>{d.includes("http")?n=="_blank"?window.open(d,n):window.location.href=d:l.push(d)}}}var x,I=new Uint8Array(16);function O(){if(!x&&(x=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!x))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return x(I)}var j=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function z(l){return typeof l=="string"&&j.test(l)}var _=[];for(var w=0;w<256;++w)_.push((w+256).toString(16).substr(1));function G(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,d=(_[l[a+0]]+_[l[a+1]]+_[l[a+2]]+_[l[a+3]]+"-"+_[l[a+4]]+_[l[a+5]]+"-"+_[l[a+6]]+_[l[a+7]]+"-"+_[l[a+8]]+_[l[a+9]]+"-"+_[l[a+10]]+_[l[a+11]]+_[l[a+12]]+_[l[a+13]]+_[l[a+14]]+_[l[a+15]]).toLowerCase();if(!z(d))throw TypeError("Stringified UUID is invalid");return d}function R(l,a,d){l=l||{};var n=l.random||(l.rng||O)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,a){d=d||0;for(var b=0;b<16;++b)a[d+b]=n[b];return a}return G(n)}function K(){let l=B(!1),a=U({}),d=U({});const n=i=>{l=i},b=(i,c)=>{console.log("openMenu"),a=i,d=c;let u=i.getAttribute("aria-controls");i.setAttribute("aria-expanded","true"),document.getElementById(u).setAttribute("aria-hidden","false"),n(!0)},m=(i,c=!1)=>{let u=i.getAttribute("aria-controls");u&&(i.setAttribute("aria-expanded","false"),document.getElementById(u).setAttribute("aria-hidden","true"),n(!1))},e=i=>{i.addEventListener("focus",f)},t=i=>{i.removeEventListener("focus",f)},f=i=>{i.currentTarget},S=i=>{if(l&&a)try{let c=a.contains(i.target),u=d.contains(i.target);!c&&!u&&(k("closeAllMenus"),n(!1))}catch{}},A=i=>{l&&i.keyCode==27&&(k("closeAllMenus"),n(!1))},k=(i,c=null)=>{let u=document.getElementsByClassName("fsa-nav-global__link--has-sub-menu");for(let v=0;v<u.length;v++){let g=u[v];g.cb=k,M(i,g)}},M=(i,c)=>{i=="addFocusListeners"?e(c):i=="removeFocusListeners"?t(c):i=="closeAllMenus"&&m(c,!0)};return{isMenuOpen:l,theItem:a,theMenu:d,openMenu:b,closeMenu:m,loopItems:k,listenForKeys:A,documentClickHandler:S}}const X={props:{NAV_DATA:Object,EXTRA_CLASSES:String,USE_SEARCH:String,USE_SCOPED_SEARCH:String},setup(l,{emit:a}){const{openMenu:d,closeMenu:n,loopItems:b,listenForKeys:m,documentClickHandler:e}=K(),{goto:t}=V(),f=B({}),S=H(()=>l.NAV_DATA),A=c=>{let u=c.main,v=c.side?c.side:[];return u.forEach(g=>{g.uid&&(g.uid=R())}),v.forEach(g=>{g.uid&&(g.uid=R())}),{main:u,side:v}};T(S,c=>{f.value=A(c)});function k(c){let u=c.currentTarget,v=c.currentTarget.nextSibling,g=u.getAttribute("aria-expanded");b("closeAllMenus"),g=="true"?n(u,v):d(u,v)}const M=c=>{let u=document.getElementById("searchPhrase").value;console.log("p",u),a("emitSearch",{type:"default",phrase:u})},i=c=>{let u=document.getElementById("searchPhrase").value,v=document.getElementById("scopedCategory").selected;a("emitSearch",{type:"scoped",scope:v,phrase:u})};return N(()=>{window.addEventListener("keydown",m),document.addEventListener("click",e),b("addFocusListeners")}),P(()=>{window.removeEventListener("keydown",m),document.removeEventListener("click",e),b("removeFocusListeners")}),{navData:f,goto:t,openMenu:d,closeMenu:n,loopItems:b,listenForKeys:m,toggleMenu:k,doSearch:M,doScopedSearch:i}}},q={class:"fsa-nav-global"},J={class:"fsa-nav-global__bd"},Q={class:"fsa-nav-global__list","aria-label":"Primary Navigation",id:"primary-navigation"},W=["data-control-id"],Y={key:0},Z=["id","aria-controls"],$=["id"],ee=["id"],se=["aria-labelledby"],ae=["id"],ne=["aria-labelledby"],le=["onClick"],te={key:1},oe=["id","aria-controls"],re=["id"],ie=["id"],de={class:"fsa-nav-global__sub-menu-bd"},ce=["aria-labelledby"],ue=["onClick"],_e={key:2},fe=["id","aria-controls"],he=["id"],be=["id"],ve=["aria-labelledby"],ge=["id"],pe=["aria-labelledby"],ye=["onClick"],me={key:3},ke=["id","aria-controls"],Ce=["id"],Se=["id"],Ee={class:"fsa-nav-global__sub-menu-bd"},xe=["aria-labelledby"],Ae=["onClick"],Me={key:4},we=["onClick"],Be={class:"fsa-nav-global__text"},Ue={key:0,class:"fsa-nav-global__aside"},Le={class:"fsa-level"},Re=["onClick"],De={class:"fsa-level fsa-level--inline fsa-level--gutter-xs"},He=["d"],Te={key:1,class:"fsa-nav-global__search"},Ne={class:"fsa-search fsa-search--small",role:"search"},Pe={class:"fsa-search__bd"},Fe=s("div",{class:"fsa-search__entry fsa-search__entry--grow"},[s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"searchPhrase"},"Search [app-name]"),s("input",{placeholder:"Search",class:"fsa-input fsa-input--small fsa-search__input",id:"searchPhrase",type:"search",name:"searchPhrase"})],-1),Ve={class:"fsa-search__submit"},Ie=s("span",{class:"fsa-search__text"},"Search",-1),Oe=[Ie],je={key:2,class:"fsa-nav-global__search"},ze={class:"fsa-search fsa-search--small",role:"search"},Ge={class:"fsa-search__bd"},Ke=s("div",{class:"fsa-search__entry fsa-search__entry--grow"},[s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"scopedSearchPhrase"},"Search [app-name]"),s("input",{placeholder:"Search",class:"fsa-input fsa-input--small fsa-search__input",id:"scopedSearchPhrase",type:"search",name:"scopedSearchPhrase"})],-1),Xe={class:"fsa-search__entry"},qe=s("label",{class:"fsa-search__label fsa-search__label--sr-only",for:"scopedCategory"},"Search Category",-1),Je={class:"fsa-select fsa-select--small fsa-search__select",name:"scopedCategory",id:"scopedCategory"},Qe=["value","selected"],We={class:"fsa-search__submit"},Ye=s("span",{class:"fsa-search__text"},"Search",-1),Ze=[Ye];function $e(l,a,d,n,b,m){return o(),r("nav",null,[s("div",q,[s("div",J,[s("ul",Q,[(o(!0),r(p,null,y(n.navData.main,e=>(o(),r("li",{key:e.uid,"data-control-id":e.uid,class:L("fsa-nav-global__list-item "+e.columnClass)},[e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="true"?(o(),r("div",Y,[s("button",{id:e.uid+"-BTN",onClick:a[0]||(a[0]=(...t)=>n.toggleMenu&&n.toggleMenu(...t)),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},h(e.label),9,$)],8,Z),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",{class:"fsa-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[(o(!0),r(p,null,y(e.children,t=>(o(),r("div",{key:t.id,class:"fsa-nav-global__sub-menu-group"},[s("h3",{class:"fsa-nav-global__sub-menu-title",id:t.uid},h(t.header),9,ae),s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":t.uid},[(o(!0),r(p,null,y(t.group,f=>(o(),r("li",{key:f.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:"#",onClick:C(S=>n.goto(f.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},h(f.label),9,le)]))),128))],8,ne)]))),128))],8,se)],8,ee)])):e.hasChild=="true"&&e.multiColumn=="true"&&e.hasHeaders=="false"?(o(),r("div",te,[s("button",{id:e.uid+"-BTN",onClick:a[1]||(a[1]=(...t)=>n.toggleMenu&&n.toggleMenu(...t)),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},h(e.label),9,re)],8,oe),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",de,[s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(o(!0),r(p,null,y(e.children,t=>(o(),r("li",{key:t.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:"#",onClick:C(f=>n.goto(t.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},h(t.label),9,ue)]))),128))],8,ce)])],8,ie)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="true"?(o(),r("div",_e,[s("button",{id:e.uid+"-BTN",onClick:a[2]||(a[2]=(...t)=>n.toggleMenu&&n.toggleMenu(...t)),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},h(e.label),9,he)],8,fe),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[(o(!0),r(p,null,y(e.children,t=>(o(),r("div",{key:t.uid,class:"fsa-nav-global__sub-menu-bd","aria-labelledby":e.uid+"-SUB"},[s("h3",{class:"fsa-nav-global__sub-menu-title",id:t.uid},h(t.header),9,ge),s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":t.uid},[(o(!0),r(p,null,y(t.group,f=>(o(),r("li",{key:f.uid,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:"#",onClick:C(S=>n.goto(f.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},h(f.label),9,ye)]))),128))],8,pe)],8,ve))),128))],8,be)])):e.hasChild=="true"&&e.multiColumn=="false"&&e.hasHeaders=="false"?(o(),r("div",me,[s("button",{id:e.uid+"-BTN",onClick:a[3]||(a[3]=(...t)=>n.toggleMenu&&n.toggleMenu(...t)),class:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",type:"button","aria-expanded":"false","aria-controls":e.uid},[s("span",{class:"fsa-nav-global__text",id:e.uid+"-SUB"},h(e.label),9,Ce)],8,ke),s("div",{class:"fsa-nav-global__sub-menu",id:e.uid,"aria-hidden":"true"},[s("div",Ee,[s("ul",{class:"fsa-nav-global__sub-menu-list","aria-labelledby":e.uid+"-SUB"},[(o(!0),r(p,null,y(e.children,t=>(o(),r("li",{key:t.id,class:"fsa-nav-global__sub-menu-item"},[s("a",{href:"#",onClick:C(f=>n.goto(t.path),["prevent"]),class:"fsa-nav-global__sub-menu-link"},h(t.label),9,Ae)]))),128))],8,xe)])],8,Se)])):(o(),r("div",Me,[s("a",{href:"#",onClick:C(t=>n.goto(e.path),["prevent"]),class:"fsa-nav-global__link"},[s("span",Be,h(e.label),1)],8,we)]))],10,W))),128))]),n.navData.side?(o(),r("div",Ue,[s("div",Le,[(o(!0),r(p,null,y(n.navData.side,e=>(o(),r("span",{key:e.uid},[s("a",{href:"#",onClick:C(t=>n.goto(e.path),["prevent"])},[s("span",De,[e.icon?(o(),r("svg",{key:0,class:L(e.icon.class),"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:e.icon.path},null,8,He)],2)):E("",!0),s("span",null,h(e.label),1)])],8,Re)]))),128))])])):E("",!0),d.USE_SEARCH=="true"?(o(),r("div",Te,[s("div",Ne,[s("div",Pe,[Fe,s("div",Ve,[s("button",{onClick:a[4]||(a[4]=(...e)=>n.doSearch&&n.doSearch(...e)),class:"fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon"},Oe)])])])])):E("",!0),d.USE_SCOPED_SEARCH=="true"?(o(),r("div",je,[s("div",ze,[s("div",Ge,[Ke,s("div",Xe,[qe,s("select",Je,[(o(!0),r(p,null,y(l.SCOPED_SEARCH_CATEGORIES,e=>(o(),r("option",{key:e.label,value:e.val,selected:e.selected},h(e.label),9,Qe))),128))])]),s("div",We,[s("button",{onClick:a[5]||(a[5]=(...e)=>n.doScopedSearch&&n.doScopedSearch(...e)),class:"fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon"},Ze)])])])])):E("",!0)])])])}var as=F(X,[["render",$e]]);export{as as g,V as u,R as v};
