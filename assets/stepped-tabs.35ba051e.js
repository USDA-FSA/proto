import{i as v,s as T,g as f,w as S,j as w,o as t,f as a,l as o,F as A,x,z as D,y as h,A as c,n as m,t as b}from"./vendor.054b4197.js";import{u as y}from"./global-nav.7e313d6c.js";import{u as B}from"./useUtilities.0a39ba39.js";import{_ as k}from"./index.f677347f.js";const C={props:{ID:String,TABS_DATA:Array},setup(i,{emit:r}){v(),y();const{getPropertyFromId:d,setPropertyFromId:l}=B(),_=T(()=>{let s=i.TABS_DATA;return s||null}),n=f(null),e=f({complete:"fsa-stepped-tabs__label--complete",active:"fsa-stepped-tabs__label--active",incomplete:"fsa-stepped-tabs__label--incomplete"}),p=s=>e.value[d(s,"status",n.value)],g=s=>{r("emitSelectedTab",s)},u=s=>{console.log("component Stepped Tabs _data",s),n.value=s};return S(_,s=>{u(s)}),w(()=>{i.TABS_DATA&&u(i.TABS_DATA)}),{setSelected:g,getTabStatusClass:p,tabsData:n}}},I={"aria-label":"Breadcrumbs"},j=["id"],z={class:"fsa-stepped-tabs__bd"},F={class:"fsa-stepped-tabs__list"},N=["onClick"],P={class:"fsa-stepped-tabs__text"},E={key:0,class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},V=["d"],M={class:"fsa-stepped-tabs__text"},U={key:0,class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},L=["d"];function q(i,r,d,l,_,n){return t(),a("nav",I,[o("div",{id:d.ID,class:"fsa-stepped-tabs"},[o("div",z,[o("ol",F,[(t(!0),a(A,null,x(l.tabsData,e=>(t(),a("li",{key:e.id,class:"fsa-stepped-tabs__item"},[e.isEnabled?(t(),a("a",{key:0,onClick:D(p=>l.setSelected(e.id),["prevent"]),class:h("fsa-stepped-tabs__label "+l.getTabStatusClass(e.id)),href:"#"},[o("span",P,[e.useIcon=="true"?(t(),a("svg",E,[o("path",{d:e.iconPath},null,8,V)])):c("",!0),m(" "+b(e.label),1)])],10,N)):c("",!0),e.isEnabled?c("",!0):(t(),a("span",{key:1,class:h("fsa-stepped-tabs__label "+l.getTabStatusClass(e.id))},[o("span",M,[e.useIcon=="true"?(t(),a("svg",U,[o("path",{d:e.iconPath},null,8,L)])):c("",!0),m(" "+b(e.label),1)])],2))]))),128))])])],8,j)])}var O=k(C,[["render",q]]);export{O as default};
