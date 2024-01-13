<h3 align="center">
   <img src="https://github.com/fp-tx/core/assets/7153123/268066f8-90e5-427a-9d15-9ccc99ee2632" alt="fp-tx" />
</h3>

# fp-tx

fp-tx is a continuation of fp-ts, a functional programming library for TypeScript inspired by PureScript and Haskell.

## Motivation

Effect has officially replaced fp-ts, and there are many upsides to Effect. For example, there is no need to worry about picking an effect type, there is only one: Effect. It handles synchronous and asynchronous computation, stack-safe recursion, graceful exits, dependency composition, and comes with pre-constructed services and providers.

However, the core philosophy of fp-ts, inspired by typeclasses and monadic composition, makes it a valuable choice. The effect types in fp-ts are dead simple, easy to understand, and their inner mechanisms are transparent to users of the library. The downsides to this approach, namely: stack traces, error handling as a discipline, and stack safety are greatly outweighed by the purely functional nature and design of the library.

`@fp-tx` was written as a passion project to revive fp-ts and improve on its critical downsides.

## Migration

The API surface of `@fp-tx/core` for versions 0.x and 1.x are intentionally identical to `fp-ts`. This is so that existing libraries and apps can migrate by simply replacing the import `fp-ts(/(lib | es6))/*` with `@fp-tx/core/*`

## Comparison to fp-ts

### ES Modules

fp-ts has a critical weakness which inspired this entire project: incompatibility with Node ESModules. Within the last few years, certain libraries have adopted an ESM only philosophy which greatly restricted interoperability with other parts of the JavaScript ecosystem, like fp-ts. fp-ts supports two module types: CommonJS and ES6 (a name for tree-shakable module code for browsers and bundlers). However, when Node adopted ESM it took a hard stance for when it would parse module code. If a `package.json` has `"type": "module"` it will interpret JS files as containing `import` / `export` (ESM). And it will restrict any JS file which contains require, requiring those files to have a `.cjs` extension. And the opposite is true, if the `package.json` omits or lists `"type": "commonjs"` Node will interpret JS files as containing `require`, and interpret `.mjs` as containing `import` and `export`. The compatibility issue arises when a library forces a Node project to be written in ESM.  That project will no longer be compatible with fp-ts.

### New Features

`@fp-tx/core` comes with juicy new features, below are a list of current and future features which aim to improve fp-ts in key areas while maintaining its core set of values.

#### `ChainRec`

`@fp-tx/core` comes with a complete suite of `ChainRec` instances (see [@jacob-alford/chain-rec](https://github.com/jacob-alford/chain-rec)). ChainRec largely overcomes the stack-safety problem when constructing recursive effects.

#### `do` notation

Inspired by effect's `gen` notation and powered by `ChainRec`, `@fp-tx/core` comes with `do` notation for any data type which supports a `ChainRec` instance.

```ts
import * as E from '@fp-tx/core/Either'

declare const lastLogin_: E.Either<string, Date>

declare const name_: E.Either<Error, string>

//    ↓↓↓↓↓↓↓↓ has type E.Either<string | Date, string>
const greeting = E.do(function* ($) {
  const lastLogin = yield* $(lastLogin_)
  //    ↑↑↑↑↑↑↑↑↑ has type Date
  const name = yield* $(name_)
  //    ↑↑↑↑ has type string
  return `Welcome ${name}!  Your last login was ${lastLogin.toLocaleString()}`
})
```

## Roadmap

### `0.x` and `1.x`

`@fp-tx/core` is starting off with `0.x` to ensure that the build and pack processes – which guarantee compatibility with all library types and build processes – is solid. A version starting with `0.x` permits breaking changes between minor version updates, this means that if you've installed any `0.x` version, the package manager you choose will not update a minor version automatically. Once the build process has been thoroughly tested, `1.0` will be forthcoming.

Additionally, the following modules are planned for release once development of the organization slows down:

- `StateReaderTask`
- `StateTaskEither`
- `StateTask`
- `StateEither`
- `Bifoldable` and `Bitraversable`: a port of [`@jacob-alford/bifold-traverse`](https://github.com/jacob-alford/bifold-traverse)

### `2.0`

2.0 will be the coveted 3.0 release of `fp-ts` which took a few different forms before being cancelled for effect. `@fp-tx/core` will largely be the same to make transitioning easier, but will properly adopt much needed improvements:

- A new HKT mechanism: `TypeLambda`s like those in `@effect/typeclass`, the n-ary HKT system proposal by @skeate, or others!
- Combinator widening by default
- A better and publicly exposed `dual` system

## Contribution and Community

`@fp-tx` readily welcomes community run libraries with a few caveats. The library must use `@fp-tx/build-tools` under the hood, and have been constructed using the GitHub template or `@fp-tx/create`. This guarantees that `@fp-tx` libraries will be compatible with other JavaScript libraries. These template constructors are not currently available but are planned for the near future.

## `@fp-tx` Organization Roadmap

1. `@fp-tx/schema` – a port of [`schemata-ts`](https://github.com/jacob-alford/schemata-ts), a modern feature rich schema validation library
2. `@fp-tx/parser` – based on [`parser-ts`](https://github.com/gcanti/parser-ts), a port of `purescript-eulalie`
3. `@fp-tx/trout` – bidirectional type-safe route declarations
4. `@fp-tx/services` – common services such as `Fs`, `HttpRequests`, and `Logging`
5. `@fp-tx/providers` – platform agnostic service implementations
6. `@fp-tx/node` – service implementations for Node apps
7. `@fp-tx/web` – service implementations for the browser
8. `@fp-tx/template` – a template repository for `fp-tx` libraries
9. `@fp-tx/create` – a CLI tool for generating new `fp-tx` libraries
