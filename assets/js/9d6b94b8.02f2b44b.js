"use strict";(self.webpackChunk_fp_tx_core=self.webpackChunk_fp_tx_core||[]).push([[7117],{7688:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var l=i(3274),d=i(9779);const r={},s="Zero",o={id:"modules/Zero",title:"Zero",description:"Do notation",source:"@site/docs/modules/Zero.md",sourceDirName:"modules",slug:"/modules/Zero",permalink:"/modules/Zero",draft:!1,unlisted:!1,editUrl:"https://github.com/fp-tx/core/blob/main/docs/modules/Zero.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"WriterT",permalink:"/modules/WriterT"}},c={},t=[{value:"Do notation",id:"do-notation",level:3},{value:"Model",id:"model",level:3},{value:"Do notation",id:"do-notation-1",level:2},{value:"<code>guard</code>",id:"guard",level:3},{value:"Signature",id:"signature",level:4},{value:"Details",id:"details",level:4},{value:"License",id:"license",level:4},{value:"Model",id:"model-1",level:2},{value:"<code>Zero</code>",id:"zero-1",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Details",id:"details-1",level:4},{value:"License",id:"license-1",level:4},{value:"<code>Zero1</code>",id:"zero1",level:3},{value:"Signature",id:"signature-2",level:4},{value:"Details",id:"details-2",level:4},{value:"License",id:"license-2",level:4},{value:"<code>Zero2</code>",id:"zero2",level:3},{value:"Signature",id:"signature-3",level:4},{value:"Details",id:"details-3",level:4},{value:"License",id:"license-3",level:4},{value:"<code>Zero2C</code>",id:"zero2c",level:3},{value:"Signature",id:"signature-4",level:4},{value:"Details",id:"details-4",level:4},{value:"License",id:"license-4",level:4},{value:"<code>Zero3</code>",id:"zero3",level:3},{value:"Signature",id:"signature-5",level:4},{value:"Details",id:"details-5",level:4},{value:"License",id:"license-5",level:4},{value:"<code>Zero3C</code>",id:"zero3c",level:3},{value:"Signature",id:"signature-6",level:4},{value:"Details",id:"details-6",level:4},{value:"License",id:"license-6",level:4},{value:"<code>Zero4</code>",id:"zero4",level:3},{value:"Signature",id:"signature-7",level:4},{value:"Details",id:"details-7",level:4},{value:"License",id:"license-7",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"zero",children:"Zero"}),"\n",(0,l.jsx)(n.h3,{id:"do-notation",children:"Do notation"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#guard",children:"guard"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"model",children:"Model"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#zero",children:"Zero"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#zero1",children:"Zero1"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#zero2",children:"Zero2"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#zero2c",children:"Zero2C"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#zero3",children:"Zero3"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#zero3c",children:"Zero3C"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#zero4",children:"Zero4"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"do-notation-1",children:"Do notation"}),"\n",(0,l.jsx)(n.h3,{id:"guard",children:(0,l.jsx)(n.code,{children:"guard"})}),"\n",(0,l.jsx)(n.h4,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function guard<F extends URIS4>(\n  F: Zero4<F>,\n  P: Pointed4<F>,\n): <S, R, E>(b: boolean) => Kind4<F, S, R, E, void>\n\n\n\nexport declare function guard<F extends URIS3>(F: Zero3<F>, P: Pointed3<F>): <R, E>(b: boolean) => Kind3<F, R, E, void>\n\n\n\nexport declare function guard<F extends URIS3, E>(\n  F: Zero3C<F, E>,\n  P: Pointed3C<F, E>,\n): <R>(b: boolean) => Kind3<F, R, E, void>\n\n\n\nexport declare function guard<F extends URIS2>(F: Zero2<F>, P: Pointed2<F>): <E>(b: boolean) => Kind2<F, E, void>\n\n\n\nexport declare function guard<F extends URIS2, E>(\n  F: Zero2C<F, E>,\n  P: Pointed2C<F, E>,\n): (b: boolean) => Kind2<F, E, void>\n\n\n\nexport declare function guard<F extends URIS>(F: Zero1<F>, P: Pointed1<F>): (b: boolean) => Kind<F, void>\n\n\n\nexport declare function guard<F>(F: Zero<F>, P: Pointed<F>): (b: boolean) => HKT<F, void>\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"model-1",children:"Model"}),"\n",(0,l.jsx)(n.h3,{id:"zero-1",children:(0,l.jsx)(n.code,{children:"Zero"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-1",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Zero<F> {\n  readonly URI: F\n  readonly zero: <A>() => HKT<F, A>\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-1",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-1",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"zero1",children:(0,l.jsx)(n.code,{children:"Zero1"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-2",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Zero1<F extends URIS> {\n  readonly URI: F\n  readonly zero: <A>() => Kind<F, A>\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-2",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-2",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"zero2",children:(0,l.jsx)(n.code,{children:"Zero2"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-3",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Zero2<F extends URIS2> {\n  readonly URI: F\n  readonly zero: <E, A>() => Kind2<F, E, A>\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-3",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-3",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"zero2c",children:(0,l.jsx)(n.code,{children:"Zero2C"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-4",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Zero2C<F extends URIS2, E> {\n  readonly _E: E\n  readonly URI: F\n  readonly zero: <A>() => Kind2<F, E, A>\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-4",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-4",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"zero3",children:(0,l.jsx)(n.code,{children:"Zero3"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-5",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Zero3<F extends URIS3> {\n  readonly URI: F\n  readonly zero: <R, E, A>() => Kind3<F, R, E, A>\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-5",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-5",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"zero3c",children:(0,l.jsx)(n.code,{children:"Zero3C"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-6",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Zero3C<F extends URIS3, E> {\n  readonly _E: E\n  readonly URI: F\n  readonly zero: <R, A>() => Kind3<F, R, E, A>\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-6",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-6",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"zero4",children:(0,l.jsx)(n.code,{children:"Zero4"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-7",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Zero4<F extends URIS4> {\n  readonly URI: F\n  readonly zero: <S, R, E, A>() => Kind4<F, S, R, E, A>\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-7",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-7",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},9779:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var l=i(9474);const d={},r=l.createContext(d);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);