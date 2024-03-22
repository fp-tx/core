"use strict";(self.webpackChunk_fp_tx_core=self.webpackChunk_fp_tx_core||[]).push([[9809],{2773:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var l=i(3274),s=i(9779);const d={},r="Store",c={id:"modules/Store",title:"Store",description:"Instances",source:"@site/docs/modules/Store.md",sourceDirName:"modules",slug:"/modules/Store",permalink:"/modules/Store",draft:!1,unlisted:!1,editUrl:"https://github.com/fp-tx/core/blob/main/docs/modules/Store.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"StateT",permalink:"/modules/StateT"},next:{title:"String",permalink:"/modules/String"}},t={},a=[{value:"Instances",id:"instances",level:3},{value:"Extract",id:"extract",level:3},{value:"Mapping",id:"mapping",level:3},{value:"Model",id:"model",level:3},{value:"Type lambdas",id:"type-lambdas",level:3},{value:"Utilities",id:"utilities",level:3},{value:"Instances",id:"instances-1",level:2},{value:"<code>Comonad</code>",id:"comonad",level:3},{value:"Signature",id:"signature",level:4},{value:"Details",id:"details",level:4},{value:"License",id:"license",level:4},{value:"<code>Functor</code>",id:"functor",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Details",id:"details-1",level:4},{value:"License",id:"license-1",level:4},{value:"Extract",id:"extract-1",level:2},{value:"<code>extract</code>",id:"extract-2",level:3},{value:"Signature",id:"signature-2",level:4},{value:"Details",id:"details-2",level:4},{value:"License",id:"license-2",level:4},{value:"Mapping",id:"mapping-1",level:2},{value:"<code>flap</code>",id:"flap",level:3},{value:"Signature",id:"signature-3",level:4},{value:"Details",id:"details-3",level:4},{value:"License",id:"license-3",level:4},{value:"<code>map</code>",id:"map",level:3},{value:"Signature",id:"signature-4",level:4},{value:"Details",id:"details-4",level:4},{value:"License",id:"license-4",level:4},{value:"Model",id:"model-1",level:2},{value:"<code>Store</code>",id:"store-1",level:3},{value:"Signature",id:"signature-5",level:4},{value:"Details",id:"details-5",level:4},{value:"License",id:"license-5",level:4},{value:"Type lambdas",id:"type-lambdas-1",level:2},{value:"<code>URI</code>",id:"uri",level:3},{value:"Signature",id:"signature-6",level:4},{value:"Details",id:"details-6",level:4},{value:"License",id:"license-6",level:4},{value:"<code>URI</code>",id:"uri-1",level:3},{value:"Signature",id:"signature-7",level:4},{value:"Details",id:"details-7",level:4},{value:"License",id:"license-7",level:4},{value:"Utilities",id:"utilities-1",level:2},{value:"<code>duplicate</code>",id:"duplicate",level:3},{value:"Signature",id:"signature-8",level:4},{value:"Details",id:"details-8",level:4},{value:"License",id:"license-8",level:4},{value:"<code>experiment</code>",id:"experiment",level:3},{value:"Signature",id:"signature-9",level:4},{value:"Details",id:"details-9",level:4},{value:"License",id:"license-9",level:4},{value:"<code>extend</code>",id:"extend",level:3},{value:"Signature",id:"signature-10",level:4},{value:"Details",id:"details-10",level:4},{value:"License",id:"license-10",level:4},{value:"<code>peeks</code>",id:"peeks",level:3},{value:"Signature",id:"signature-11",level:4},{value:"Details",id:"details-11",level:4},{value:"License",id:"license-11",level:4},{value:"<code>seek</code>",id:"seek",level:3},{value:"Signature",id:"signature-12",level:4},{value:"Details",id:"details-12",level:4},{value:"License",id:"license-12",level:4},{value:"<code>seeks</code>",id:"seeks",level:3},{value:"Signature",id:"signature-13",level:4},{value:"Details",id:"details-13",level:4},{value:"License",id:"license-13",level:4},{value:"<del><code>store</code></del>",id:"store-2",level:3},{value:"Signature",id:"signature-14",level:4},{value:"Details",id:"details-14",level:4},{value:"License",id:"license-14",level:4}];function h(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"store",children:"Store"}),"\n",(0,l.jsx)(n.h3,{id:"instances",children:"Instances"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#comonad",children:"Comonad"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#functor",children:"Functor"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"extract",children:"Extract"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#extract",children:"extract"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"mapping",children:"Mapping"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#flap",children:"flap"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#map",children:"map"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"model",children:"Model"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#store",children:"Store"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"type-lambdas",children:"Type lambdas"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#uri",children:"URI"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#uri",children:"URI"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"utilities",children:"Utilities"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#duplicate",children:"duplicate"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#experiment",children:"experiment"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#extend",children:"extend"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#peeks",children:"peeks"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#seek",children:"seek"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#seeks",children:"seeks"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.del,{children:(0,l.jsx)(n.a,{href:"#store",children:"store"})})," (deprecated)"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"instances-1",children:"Instances"}),"\n",(0,l.jsx)(n.h3,{id:"comonad",children:(0,l.jsx)(n.code,{children:"Comonad"})}),"\n",(0,l.jsx)(n.h4,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const Comonad: Comonad2<URI>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"functor",children:(0,l.jsx)(n.code,{children:"Functor"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-1",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const Functor: Functor2<URI>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-1",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-1",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"extract-1",children:"Extract"}),"\n",(0,l.jsx)(n.h3,{id:"extract-2",children:(0,l.jsx)(n.code,{children:"extract"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-2",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const extract: <E, A>(wa: Store<E, A>) => A\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-2",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-2",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"mapping-1",children:"Mapping"}),"\n",(0,l.jsx)(n.h3,{id:"flap",children:(0,l.jsx)(n.code,{children:"flap"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-3",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const flap: <A>(a: A) => <E, B>(fab: Store<E, (a: A) => B>) => Store<E, B>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-3",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-3",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"map",children:(0,l.jsx)(n.code,{children:"map"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"map"})," can be used to turn functions ",(0,l.jsx)(n.code,{children:"(a: A) => B"})," into functions ",(0,l.jsx)(n.code,{children:"(fa: F<A>) => F<B>"})," whose argument and return types use the type constructor ",(0,l.jsx)(n.code,{children:"F"})," to represent some computational context."]}),"\n",(0,l.jsx)(n.h4,{id:"signature-4",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Store<E, A>) => Store<E, B>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-4",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-4",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"model-1",children:"Model"}),"\n",(0,l.jsx)(n.h3,{id:"store-1",children:(0,l.jsx)(n.code,{children:"Store"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-5",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export interface Store<S, A> {\n  readonly peek: (s: S) => A\n  readonly pos: S\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-5",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-5",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"type-lambdas-1",children:"Type lambdas"}),"\n",(0,l.jsx)(n.h3,{id:"uri",children:(0,l.jsx)(n.code,{children:"URI"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-6",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export type URI = typeof URI\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-6",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-6",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"uri-1",children:(0,l.jsx)(n.code,{children:"URI"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-7",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const URI = 'Store'\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-7",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-7",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"utilities-1",children:"Utilities"}),"\n",(0,l.jsx)(n.h3,{id:"duplicate",children:(0,l.jsx)(n.code,{children:"duplicate"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-8",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const duplicate: <E, A>(wa: Store<E, A>) => Store<E, Store<E, A>>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-8",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-8",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"experiment",children:(0,l.jsx)(n.code,{children:"experiment"})}),"\n",(0,l.jsx)(n.p,{children:"Extract a collection of values from positions which depend on the current position"}),"\n",(0,l.jsx)(n.h4,{id:"signature-9",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function experiment<F extends URIS3>(\n  F: Functor3<F>,\n): <R, E, S>(f: (s: S) => Kind3<F, R, E, S>) => <A>(wa: Store<S, A>) => Kind3<F, R, E, A>\n\n\n\nexport declare function experiment<F extends URIS3, E>(\n  F: Functor3C<F, E>,\n): <R, S>(f: (s: S) => Kind3<F, R, E, S>) => <A>(wa: Store<S, A>) => Kind3<F, R, E, A>\n\n\n\nexport declare function experiment<F extends URIS2>(\n  F: Functor2<F>,\n): <E, S>(f: (s: S) => Kind2<F, E, S>) => <A>(wa: Store<S, A>) => Kind2<F, E, A>\n\n\n\nexport declare function experiment<F extends URIS2, E>(\n  F: Functor2C<F, E>,\n): <S>(f: (s: S) => Kind2<F, E, S>) => <A>(wa: Store<S, A>) => Kind2<F, E, A>\n\n\n\nexport declare function experiment<F extends URIS>(\n  F: Functor1<F>,\n): <S>(f: (s: S) => Kind<F, S>) => <A>(wa: Store<S, A>) => Kind<F, A>\n\n\n\nexport declare function experiment<F>(\n  F: FunctorHKT<F>,\n): <S>(f: (s: S) => HKT<F, S>) => <A>(wa: Store<S, A>) => HKT<F, A>\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-9",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-9",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"extend",children:(0,l.jsx)(n.code,{children:"extend"})}),"\n",(0,l.jsx)(n.h4,{id:"signature-10",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const extend: <E, A, B>(f: (wa: Store<E, A>) => B) => (wa: Store<E, A>) => Store<E, B>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-10",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-10",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"peeks",children:(0,l.jsx)(n.code,{children:"peeks"})}),"\n",(0,l.jsx)(n.p,{children:"Extract a value from a position which depends on the current position"}),"\n",(0,l.jsx)(n.h4,{id:"signature-11",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function peeks<S>(f: Endomorphism<S>): <A>(wa: Store<S, A>) => A\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-11",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-11",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"seek",children:(0,l.jsx)(n.code,{children:"seek"})}),"\n",(0,l.jsx)(n.p,{children:"Reposition the focus at the specified position"}),"\n",(0,l.jsx)(n.h4,{id:"signature-12",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function seek<S>(s: S): <A>(wa: Store<S, A>) => Store<S, A>\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-12",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-12",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"seeks",children:(0,l.jsx)(n.code,{children:"seeks"})}),"\n",(0,l.jsx)(n.p,{children:"Reposition the focus at the specified position, which depends on the current position"}),"\n",(0,l.jsx)(n.h4,{id:"signature-13",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare function seeks<S>(f: Endomorphism<S>): <A>(wa: Store<S, A>) => Store<S, A>\n\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-13",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-13",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"store-2",children:(0,l.jsx)(n.del,{children:(0,l.jsx)(n.code,{children:"store"})})}),"\n",(0,l.jsxs)(n.p,{children:["This instance is deprecated, use small, specific instances instead. For example if a function needs a ",(0,l.jsx)(n.code,{children:"Comonad"})," instance, pass ",(0,l.jsx)(n.code,{children:"S.Comonad"})," instead of ",(0,l.jsx)(n.code,{children:"S.store"})," (where ",(0,l.jsx)(n.code,{children:"S"})," is from ",(0,l.jsx)(n.code,{children:"import S from 'fp-ts/Store'"}),")"]}),"\n",(0,l.jsx)(n.h4,{id:"signature-14",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"export declare const store: Comonad2<URI>\n"})}),"\n",(0,l.jsx)(n.h4,{id:"details-14",children:"Details"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added in 0.1.0"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Deprecated"})}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"license-14",children:"License"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"MIT \u2013 Copyright (c) 2017-present Giulio Canti"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9779:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var l=i(9474);const s={},d=l.createContext(s);function r(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);