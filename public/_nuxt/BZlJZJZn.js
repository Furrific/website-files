const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./_8yZcVZI.js","./CG7jSYJZ.js","./entry.C7zC3SjC.css","./D1r26KTP.js","./_a4cEaK9.js","./C-v3KzvZ.js","./Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{h as p,u as f}from"./_a4cEaK9.js";import{z as v,e as g,g as d,D as l,h,E as _,j as C,A as y,C as r}from"./CG7jSYJZ.js";import{q as w,w as m,e as P,s as $,j as N,u as j}from"./D1r26KTP.js";import{_ as D}from"./F-D3boDP.js";const E=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if($())return(await g(()=>import("./_8yZcVZI.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:f().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},T=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await C(`content-navigation-${p(a.value)}`,()=>E(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),O=T;export{O as default};
