import{i as h,q as v,g as p,w as y,r as g,o as c,f as d,k as b,l as e,F as B,y as k,A as D,t as i}from"./vendor.28259ad5.js";import{b as E,a as F}from"./BaseFooter.0fc46b50.js";import{_ as I}from"./index.7296781b.js";import"./global-nav.52311828.js";const S={components:{baseHeader:E,baseFooter:F},setup(f){const o=h(),l=v(()=>o.getters["users/getUsers"]);let t=p([]),r=p(!0);const u=()=>{o.dispatch("users/getUsersFromApi")},_=a=>{let s=a.currentTarget.id;r.value=!r.value,r.value?(t.value=l.value.sort((n,m)=>n.id-m.id),document.getElementById(s).classList.remove("fsa-table__sort--descending"),document.getElementById(s).classList.add("fsa-table__sort--ascending"),document.getElementById(s).ariaSort="ascending"):(t.value=l.value.sort((n,m)=>m.id-n.id),document.getElementById(s).classList.remove("fsa-table__sort--ascending"),document.getElementById(s).classList.add("fsa-table__sort--descending"),document.getElementById(s).ariaSort="descending")};return y(l,a=>{t.value=a}),{users:t,getUsersData:u,toggleSort:_}}},U={id:"main-content",tabindex:"-1"},j={class:"fsa-section"},x={class:"fsa-section__bd"},L=e("h1",null,"Users",-1),A={class:"fsa-m-t--sm"},C={class:"fsa-m-t--l"},N=e("p",null,[e("a",{href:"https://jsonplaceholder.typicode.com/users",target:"_blank"},"https://jsonplaceholder.typicode.com/users")],-1),H={class:"fsa-m-b--l"},V={class:"fsa-table"},w=e("caption",null,[e("h2",null,"Dynamic Users Data")],-1),P={scope:"col","aria-sort":"ascending",class:"fsa-text-align--left"},q=e("th",{scope:"col"},"Name",-1),G=e("th",{scope:"col"},"Email",-1),T=e("th",{scope:"col"},"Phone",-1),$={key:0};function z(f,o,l,t,r,u){const _=g("baseHeader"),a=g("baseFooter");return c(),d("div",null,[b(_),e("main",U,[e("div",j,[e("div",x,[L,e("div",A,[e("p",C,[e("button",{onClick:o[0]||(o[0]=s=>t.getUsersData()),class:"fsa-btn fsa-btn--secondary"},"Get Data From API")]),N]),e("div",H,[e("table",V,[w,e("thead",null,[e("tr",null,[e("th",P,[e("button",{id:"tableSort-1",onClick:o[1]||(o[1]=s=>t.toggleSort(s)),class:"fsa-table__sort fsa-table__sort--ascending",type:"button"},"ID")]),q,G,T])]),t.users?(c(),d("tbody",$,[(c(!0),d(B,null,k(t.users,(s,n)=>(c(),d("tr",{key:n},[e("td",null,i(s.id),1),e("td",null,i(s.name),1),e("td",null,i(s.email),1),e("td",null,i(s.phone),1)]))),128))])):D("",!0)])])])])]),b(a)])}var Q=I(S,[["render",z]]);export{Q as default};
