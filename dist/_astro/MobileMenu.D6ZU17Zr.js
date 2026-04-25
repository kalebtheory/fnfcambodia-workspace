import{j as e,A as y,m as o}from"./proxy.C5_WDy6B.js";import{r as d}from"./index.CdJzaNS0.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,r)=>r?r.toUpperCase():s.toLowerCase()),g=a=>{const t=w(a);return t.charAt(0).toUpperCase()+t.slice(1)},b=(...a)=>a.filter((t,s,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===s).join(" ").trim(),v=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=d.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:x="",children:n,iconNode:p,...i},h)=>d.createElement("svg",{ref:h,...j,width:t,height:t,stroke:a,strokeWidth:r?Number(s)*24/Number(t):s,className:b("lucide",x),...!n&&!v(i)&&{"aria-hidden":"true"},...i},[...p.map(([l,c])=>d.createElement(l,c)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(a,t)=>{const s=d.forwardRef(({className:r,...x},n)=>d.createElement(k,{ref:n,iconNode:t,className:b(`lucide-${f(g(a))}`,`lucide-${a}`,r),...x}));return s.displayName=g(a),s};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_=m("chevron-right",N);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],A=m("menu",C);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],M=m("user-plus",$);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],E=m("x",z);function W({navLinks:a,currentPath:t,registerPath:s,registerLabel:r,logoSrc:x}){const[n,p]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>p(!n),className:"lg:hidden p-4 -ml-4 text-brand-light hover:text-brand-gold transition-colors active:scale-95","aria-label":"Toggle Menu",children:n?e.jsx(E,{size:26}):e.jsx(A,{size:26})}),e.jsx(y,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden pointer-events-auto",onClick:()=>p(!1)}),e.jsx(o.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.6,type:"spring",damping:30,stiffness:120},className:"fixed top-0 right-0 z-40 w-full xs:w-[85%] max-w-sm h-screen bg-brand-dark/95 backdrop-blur-3xl pt-28 px-6 flex flex-col overflow-y-auto pb-40 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] lg:hidden pointer-events-auto",children:e.jsxs("div",{className:"flex flex-col gap-2 text-2xl sm:text-3xl font-display font-medium mb-8",children:[a.map((i,h)=>{if(i.submenu)return e.jsxs(o.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:h*.05+.2,type:"spring",stiffness:100,damping:20},className:"mb-4",children:[e.jsx("span",{className:"block text-brand-gold uppercase tracking-[0.2em] text-[10px] font-black mb-2 opacity-100 px-4",children:i.label}),e.jsx("div",{className:"flex flex-col gap-1 ml-2 pl-2 border-l border-white/5",children:i.submenu.map(c=>{const u=t===c.path;return e.jsxs("a",{href:c.path,className:`w-full block py-3 px-4 rounded-xl transition-all duration-300 uppercase tracking-tight flex items-center gap-3 ${u?"text-brand-gold bg-white/5 translate-x-3":"text-white/60 hover:text-white hover:bg-white/5"}`,children:[u&&e.jsx(o.div,{layoutId:"mobile-sub-dot",className:"w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(255,212,63,0.8)] shrink-0"}),c.label]},c.path)})})]},i.label);const l=t.startsWith(i.path);return e.jsx(o.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:h*.05+.2,type:"spring",stiffness:100,damping:20},children:e.jsx("a",{href:i.path,className:`relative w-full block py-4 px-4 rounded-xl transition-all duration-300 uppercase tracking-tighter group ${l?"text-white bg-white/5 translate-x-2":"text-white/60 hover:text-white hover:bg-white/5"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:`${l?"text-brand-gold font-bold":""}`,children:i.label}),l&&e.jsx(o.div,{layoutId:"mobile-active-indicator",className:"absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-brand-gold rounded-r-full shadow-[0_0_20px_rgba(255,212,63,0.5)]"}),e.jsx(_,{size:20,className:`opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${l?"text-brand-gold opacity-100":""}`})]})})},i.path)}),e.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:a.length*.05+.3},className:"h-[1px] bg-white/5 my-4 mx-4"}),e.jsx(o.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:(a.length+2)*.05+.4,type:"spring",stiffness:100,damping:20},className:"mt-6 mx-2",children:e.jsxs("a",{href:s,className:"bg-brand-gold text-black w-full py-5 text-center font-bold rounded-2xl flex items-center justify-center gap-3 text-base sm:text-lg uppercase tracking-widest shadow-[0_20px_40px_rgba(212,175,55,0.25)] hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all",children:[e.jsx(M,{size:20,strokeWidth:2.5}),r]})})]})})]})})]})}export{W as default};
