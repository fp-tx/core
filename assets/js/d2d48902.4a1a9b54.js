"use strict";(self.webpackChunk_fp_tx_core=self.webpackChunk_fp_tx_core||[]).push([[1722],{8861:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var l=i(3274),s=i(9779);const d={},c="Traced",r={id:"modules/Traced",title:"Traced",description:"Instances",source:"@site/docs/modules/Traced.md",sourceDirName:"modules",slug:"/modules/Traced",permalink:"/modules/Traced",draft:!1,unlisted:!1,editUrl:"https://github.com/fp-tx/core/blob/main/docs/modules/Traced.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"TheseT",permalink:"/modules/TheseT"},next:{title:"Traversable",permalink:"/modules/Traversable"}},a={},t=[{value:"Instances",id:"instances",level:3},{value:"Mapping",id:"mapping",level:3},{value:"Model",id:"model",level:3},{value:"Type lambdas",id:"type-lambdas",level:3},{value:"Utilities",id:"utilities",level:3},{value:"Instances",id:"instances-1",level:2},{value:"<code>Functor</code>",id:"functor",level:3},{value:"Signature",id:"signature",level:4},{value:"Details",id:"details",level:4},{value:"License",id:"license",level:4},{value:"<code>getComonad</code>",id:"getcomonad",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Details",id:"details-1",level:4},{value:"License",id:"license-1",level:4},{value:"Mapping",id:"mapping-1",level:2},{value:"<code>flap</code>",id:"flap",level:3},{value:"Signature",id:"signature-2",level:4},{value:"Details",id:"details-2",level:4},{value:"License",id:"license-2",level:4},{value:"<code>map</code>",id:"map",level:3},{value:"Signature",id:"signature-3",level:4},{value:"Details",id:"details-3",level:4},{value:"License",id:"license-3",level:4},{value:"Model",id:"model-1",level:2},{value:"<code>Traced</code>",id:"traced-1",level:3},{value:"Signature",id:"signature-4",level:4},{value:"Details",id:"details-4",level:4},{value:"License",id:"license-4",level:4},{value:"Type lambdas",id:"type-lambdas-1",level:2},{value:"<code>URI</code>",id:"uri",level:3},{value:"Signature",id:"signature-5",level:4},{value:"Details",id:"details-5",level:4},{value:"License",id:"license-5",level:4},{value:"<code>URI</code>",id:"uri-1",level:3},{value:"Signature",id:"signature-6",level:4},{value:"Details",id:"details-6",level:4},{value:"License",id:"license-6",level:4},{value:"Utilities",id:"utilities-1",level:2},{value:"<code>censor</code>",id:"censor",level:3},{value:"Signature",id:"signature-7",level:4},{value:"Details",id:"details-7",level:4},{value:"License",id:"license-7",level:4},{value:"<code>listen</code>",id:"listen",level:3},{value:"Signature",id:"signature-8",level:4},{value:"Details",id:"details-8",level:4},{value:"License",id:"license-8",level:4},{value:"<code>listens</code>",id:"listens",level:3},{value:"Signature",id:"signature-9",level:4},{value:"Details",id:"details-9",level:4},{value:"License",id:"license-9",level:4},{value:"<del><code>traced</code></del>",id:"traced-2",level:3},{value:"Signature",id:"signature-10",level:4},{value:"Details",id:"details-10",level:4},{value:"License",id:"license-10",level:4},{value:"<code>tracks</code>",id:"tracks",level:3},{value:"Signature",id:"signature-11",level:4},{value:"Details",id:"details-11",level:4},{value:"License",id:"license-11",level:4}];function h(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"traced",children:"Traced"}),"\n",(0,l.jsx)(n.h3,{id:"instances",children:"Instances"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#functor",children:"Functor"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#getcomonad",children:"getComonad"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"mapping",children:"Mapping"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#flap",children:"flap"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#map",children:"map"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"model",children:"Model"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#traced",children:"Traced"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"type-lambdas",children:"Type lambdas"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#uri",children:"URI"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#uri",children:"URI"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"utilities",children:"Utilities"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#censor",children:"censor"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#listen",children:"listen"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#listens",children:"listens"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.del,{children:(0,l.jsx)(n.a,{href:"#traced",children:"traced"})})," (deprecated)"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#tracks",children:"tracks"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"instances-1",children:"Instances"}),"\n",(0,l.jsx)(n.h3,{id:"functor",children:(0,l.jsx)(n.code,{children:"Functor"})}),"\n",(0,l.jsx)(n.h4,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const Functor: Functor2<URI>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"getcomonad",children:(0,l.jsx)(n.code,{children:"getComonad"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-1",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function getComonad<P>(monoid: Monoid<P>): Comonad2C<URI, P>\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-1",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-1",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"mapping-1",children:"Mapping"}),"\n",(0,l.jsx)(n.h3,{id:"flap",children:(0,l.jsx)(n.code,{children:"flap"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-2",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const flap: <A>(a: A) => <E, B>(fab: Traced<E, (a: A) => B>) => Traced<E, B>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-2",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-2",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"map",children:(0,l.jsx)(n.code,{children:"map"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"map"})," can be used to turn functions ",(0,l.jsx)(n.code,{children:"(a: A) => B"})," into functions ",(0,l.jsx)(n.code,{children:"(fa: F<A>) => F<B>"})," whose argument and return types use the type constructor ",(0,l.jsx)(n.code,{children:"F"})," to represent some computational context."]}),"\n",(0,l.jsx)(n.h4,{id:"signature-3",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Traced<E, A>) => Traced<E, B>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-3",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-3",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"model-1",children:"Model"}),"\n",(0,l.jsx)(n.h3,{id:"traced-1",children:(0,l.jsx)(n.code,{children:"Traced"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-4",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Traced<P, A> {\n  (p: P): A\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-4",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-4",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"type-lambdas-1",children:"Type lambdas"}),"\n",(0,l.jsx)(n.h3,{id:"uri",children:(0,l.jsx)(n.code,{children:"URI"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-5",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export type URI = typeof URI\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-5",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-5",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"uri-1",children:(0,l.jsx)(n.code,{children:"URI"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-6",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const URI = 'Traced'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-6",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-6",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"utilities-1",children:"Utilities"}),"\n",(0,l.jsx)(n.h3,{id:"censor",children:(0,l.jsx)(n.code,{children:"censor"})}),"\n",(0,l.jsx)(n.p,{children:"Apply a function to the current position"}),"\n",(0,l.jsx)(n.h4,{id:"signature-7",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function censor<P>(f: (p: P) => P): <A>(wa: Traced<P, A>) => Traced<P, A>\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-7",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-7",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"listen",children:(0,l.jsx)(n.code,{children:"listen"})}),"\n",(0,l.jsx)(n.p,{children:"Get the current position"}),"\n",(0,l.jsx)(n.h4,{id:"signature-8",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function listen<P, A>(wa: Traced<P, A>): Traced<P, [A, P]>\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-8",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-8",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"listens",children:(0,l.jsx)(n.code,{children:"listens"})}),"\n",(0,l.jsx)(n.p,{children:"Get a value which depends on the current position"}),"\n",(0,l.jsx)(n.h4,{id:"signature-9",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function listens<P, B>(f: (p: P) => B): <A>(wa: Traced<P, A>) => Traced<P, [A, B]>\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-9",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-9",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"traced-2",children:(0,l.jsx)(n.del,{children:(0,l.jsx)(n.code,{children:"traced"})})}),"\n",(0,l.jsxs)(n.p,{children:["Use ",(0,l.jsx)(n.a,{href:"#functor",children:(0,l.jsx)(n.code,{children:"Functor"})})," instead."]}),"\n",(0,l.jsx)(n.h4,{id:"signature-10",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const traced: Functor2<URI>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-10",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Deprecated"})}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-10",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"tracks",children:(0,l.jsx)(n.code,{children:"tracks"})}),"\n",(0,l.jsx)(n.p,{children:"Extracts a value at a relative position which depends on the current value."}),"\n",(0,l.jsx)(n.h4,{id:"signature-11",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function tracks<P, A>(M: Monoid<P>, f: (a: A) => P): (wa: Traced<P, A>) => A\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-11",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-11",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9779:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var l=i(9474);const s={},d=l.createContext(s);function c(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);