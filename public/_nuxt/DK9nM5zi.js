const __vite__fileDeps=["./IzB2E89h.js","./CxzpZiUI.js","./entry.tGIuF0RL.css","./9qG83-8N.js","./DMo25wYI.js","./C-v3KzvZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{q as m,w as c,e as v,s as l,j as d,u as g,a as y}from"./9qG83-8N.js";import{j as h,q as _,r as w,s as C,v as x,f as P,x as $,y as N,k as j,m as p}from"./CxzpZiUI.js";import{h as f,u as E}from"./DMo25wYI.js";import{_ as T}from"./WcsLOn1O.js";const S=async t=>{const{content:e}=h().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${v(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(l())return(await _(()=>import("./IzB2E89h.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:E().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},b="$s";function D(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=b+n,r=x(),s=w(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(C(i))return r.payload.state[a]=i,i;s.value=i}return s}const R=P({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=$(t),n=N(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&D("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await y(`content-navigation-${f(n.value)}`,()=>S(n.value));return{navigation:o}},render(t){const e=j(),{navigation:n}=t,o=s=>p(T,{to:s._path},()=>s.title),a=(s,i)=>p("ul",i?{"data-level":i}:null,s.map(u=>u.children?p("li",null,[o(u),a(u.children,i+1)]):p("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=R;export{Q as default};