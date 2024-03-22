"use strict";(self.webpackChunk_fp_tx_core=self.webpackChunk_fp_tx_core||[]).push([[3160],{4993:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var i=l(3274),d=l(9779);const s={},r="Bounded",t={id:"modules/Bounded",title:"Bounded",description:"Model",source:"@site/docs/modules/Bounded.md",sourceDirName:"modules",slug:"/modules/Bounded",permalink:"/modules/Bounded",draft:!1,unlisted:!1,editUrl:"https://github.com/fp-tx/core/blob/main/docs/modules/Bounded.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"BooleanAlgebra",permalink:"/modules/BooleanAlgebra"},next:{title:"BoundedDistributiveLattice",permalink:"/modules/BoundedDistributiveLattice"}},c={},o=[{value:"Model",id:"model",level:3},{value:"Utils",id:"utils",level:3},{value:"Utilities",id:"utilities",level:3},{value:"Model",id:"model-1",level:2},{value:"<code>Bounded</code>",id:"bounded-1",level:3},{value:"Signature",id:"signature",level:4},{value:"Details",id:"details",level:4},{value:"License",id:"license",level:4},{value:"Utils",id:"utils-1",level:2},{value:"<code>clamp</code>",id:"clamp",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Details",id:"details-1",level:4},{value:"License",id:"license-1",level:4},{value:"<code>reverse</code>",id:"reverse",level:3},{value:"Signature",id:"signature-2",level:4},{value:"Details",id:"details-2",level:4},{value:"License",id:"license-2",level:4},{value:"Utilities",id:"utilities-1",level:2},{value:"<del><code>boundedNumber</code></del>",id:"boundednumber",level:3},{value:"Signature",id:"signature-3",level:4},{value:"Details",id:"details-3",level:4},{value:"License",id:"license-3",level:4}];function u(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bounded",children:"Bounded"}),"\n",(0,i.jsx)(n.h3,{id:"model",children:"Model"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#bounded",children:"Bounded"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"utils",children:"Utils"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#clamp",children:"clamp"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#reverse",children:"reverse"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"utilities",children:"Utilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.del,{children:(0,i.jsx)(n.a,{href:"#boundednumber",children:"boundedNumber"})})," (deprecated)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"model-1",children:"Model"}),"\n",(0,i.jsx)(n.h3,{id:"bounded-1",children:(0,i.jsx)(n.code,{children:"Bounded"})}),"\n",(0,i.jsx)(n.h4,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export interface Bounded<A> extends Ord<A> {\n  readonly bottom: A\n  readonly top: A\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"details",children:"Details"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"license",children:"License"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"utils-1",children:"Utils"}),"\n",(0,i.jsx)(n.h3,{id:"clamp",children:(0,i.jsx)(n.code,{children:"clamp"})}),"\n",(0,i.jsx)(n.p,{children:"Clamp a value between bottom and top values."}),"\n",(0,i.jsx)(n.h4,{id:"signature-1",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export declare const clamp: <A>(B: Bounded<A>) => (a: A) => A\n"})}),"\n",(0,i.jsx)(n.h4,{id:"details-1",children:"Details"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"license-1",children:"License"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"reverse",children:(0,i.jsx)(n.code,{children:"reverse"})}),"\n",(0,i.jsx)(n.p,{children:"Reverses the Ord of a bound and swaps top and bottom values."}),"\n",(0,i.jsx)(n.h4,{id:"signature-2",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export declare const reverse: <A>(B: Bounded<A>) => Bounded<A>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"details-2",children:"Details"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"license-2",children:"License"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"utilities-1",children:"Utilities"}),"\n",(0,i.jsx)(n.h3,{id:"boundednumber",children:(0,i.jsx)(n.del,{children:(0,i.jsx)(n.code,{children:"boundedNumber"})})}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"./number#bounded",children:(0,i.jsx)(n.code,{children:"Bounded"})})," instead."]}),"\n",(0,i.jsx)(n.h4,{id:"signature-3",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export declare const boundedNumber: Bounded<number>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"details-3",children:"Details"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added in 0.1.0"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Deprecated"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"license-3",children:"License"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9779:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>t});var i=l(9474);const d={},s=i.createContext(d);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);