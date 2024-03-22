
# Reader







### Instances

* [Applicative](#applicative)
* [Apply](#apply)
* [Category](#category)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [Choice](#choice)
* [Functor](#functor)
* [Monad](#monad)
* [Pointed](#pointed)
* [Profunctor](#profunctor)
* [Strong](#strong)

### Combinators

* [tap](#tap)

### Constructors

* [ask](#ask)
* [asks](#asks)
* [asksReader](#asksreader)
* [asksReaderW](#asksreaderw)
* [id](#id)
* [of](#of)

### Do notation

* [Do](#do)
* [apS](#aps)
* [apSW](#apsw)
* [bind](#bind)
* [bindTo](#bindto)
* [bindW](#bindw)

### Instance methods

* [chainRec](#chainrec)

### Legacy

* [chain](#chain)
* [chainFirst](#chainfirst)
* [chainFirstW](#chainfirstw)
* [chainW](#chainw)

### Mapping

* [flap](#flap)
* [map](#map)

### Model

* [Reader](#reader)

### Sequencing

* [flatMap](#flatmap)
* [flatten](#flatten)
* [flattenW](#flattenw)

### Traversing

* [sequenceArray](#sequencearray)
* [traverseArray](#traversearray)
* [traverseArrayWithIndex](#traversearraywithindex)
* [traverseReadonlyArrayWithIndex](#traversereadonlyarraywithindex)
* [traverseReadonlyNonEmptyArrayWithIndex](#traversereadonlynonemptyarraywithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ApT](#apt)
* [ap](#ap)
* [apFirst](#apfirst)
* [apFirstW](#apfirstw)
* [apSecond](#apsecond)
* [apSecondW](#apsecondw)
* [apW](#apw)
* [compose](#compose)
* [do](#do)
* [first](#first)
* ~~[getMonoid](#getmonoid)~~ (deprecated)
* ~~[getSemigroup](#getsemigroup)~~ (deprecated)
* [left](#left)
* [let](#let)
* [local](#local)
* [promap](#promap)
* ~~[reader](#reader)~~ (deprecated)
* [right](#right)
* [second](#second)

## Instances


### `Applicative`




#### Signature

```typescript
export declare const Applicative: Applicative2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Apply`




#### Signature

```typescript
export declare const Apply: Apply2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Category`




#### Signature

```typescript
export declare const Category: Category2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain`




#### Signature

```typescript
export declare const Chain: chainable.Chain2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec`

ChainRec for `Reader`




#### Signature

```typescript
export declare const ChainRec: ChainRec2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

---


### `Choice`




#### Signature

```typescript
export declare const Choice: Choice2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Profunctor`




#### Signature

```typescript
export declare const Profunctor: Profunctor2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Strong`




#### Signature

```typescript
export declare const Strong: Strong2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Combinators


### `tap`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tap: {
  <R1, A, R2, _>(self: Reader<R1, A>, f: (a: A) => Reader<R2, _>): Reader<R1 & R2, A>
  <A, R2, _>(f: (a: A) => Reader<R2, _>): <R1>(self: Reader<R1, A>) => Reader<R2 & R1, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `ask`

Reads the current context




#### Signature

```typescript
export declare const ask: <R>() => Reader<R, R>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asks`

Projects a value from the global context in a Reader




#### Signature

```typescript
export declare const asks: <R, A>(f: (r: R) => A) => Reader<R, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksReader`

Effectfully accesses the environment.




#### Signature

```typescript
export declare const asksReader: <R, A>(f: (r: R) => Reader<R, A>) => Reader<R, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksReaderW`

Less strict version of [`asksReader`](#asksreader).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const asksReaderW: <R1, R2, A>(f: (r1: R1) => Reader<R2, A>) => Reader<R1 & R2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `id`




#### Signature

```typescript
export declare const id: Category2<URI>['id']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <R = unknown, A = never>(a: A) => Reader<R, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: Reader<unknown, {}>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, E, B>(
  name: Exclude<N, keyof A>,
  fb: Reader<E, B>,
) => (fa: Reader<E, A>) => Reader<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSW`

Less strict version of [`apS`](#aps).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const apSW: <A, N extends string, R2, B>(
  name: Exclude<N, keyof A>,
  fb: Reader<R2, B>,
) => <R1>(fa: Reader<R1, A>) => Reader<
  R1 & R2,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bind`




#### Signature

```typescript
export declare const bind: <N extends string, A, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Reader<E, B>,
) => (ma: Reader<E, A>) => Reader<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(
  name: N,
) => <E, A>(fa: Reader<E, A>) => Reader<E, { readonly [K in N]: A }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindW`

The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const bindW: <N extends string, A, R2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Reader<R2, B>,
) => <R1>(fa: Reader<R1, A>) => Reader<
  R1 & R2,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Instance methods


### `chainRec`




#### Signature

```typescript
export declare const chainRec: ChainRec2<URI>['chainRec']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: Reader<R, A>) => Reader<R, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirst`

Alias of `tap`.




#### Signature

```typescript
export declare const chainFirst: <A, R, B>(f: (a: A) => Reader<R, B>) => (first: Reader<R, A>) => Reader<R, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstW`

Alias of `tap`.




#### Signature

```typescript
export declare const chainFirstW: <R2, A, B>(
  f: (a: A) => Reader<R2, B>,
) => <R1>(ma: Reader<R1, A>) => Reader<R1 & R2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainW`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chainW: <R2, A, B>(f: (a: A) => Reader<R2, B>) => <R1>(ma: Reader<R1, A>) => Reader<R1 & R2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: Reader<E, (a: A) => B>) => Reader<E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

`map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types use the type constructor `F` to represent some computational context.




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => <R>(fa: Reader<R, A>) => Reader<R, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Reader`




#### Signature

```typescript
export interface Reader<R, A> {
  (r: R): A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `flatMap`




#### Signature

```typescript
export declare const flatMap: {
  <A, R2, B>(f: (a: A) => Reader<R2, B>): <R1>(ma: Reader<R1, A>) => Reader<R1 & R2, B>
  <R1, A, R2, B>(ma: Reader<R1, A>, f: (a: A) => Reader<R2, B>): Reader<R1 & R2, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`




#### Signature

```typescript
export declare const flatten: <R, A>(mma: Reader<R, Reader<R, A>>) => Reader<R, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flattenW`

Less strict version of [`flatten`](#flatten).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const flattenW: <R1, R2, A>(mma: Reader<R1, Reader<R2, A>>) => Reader<R1 & R2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequenceArray`

Equivalent to `ReadonlyArray#sequence(Applicative)`.




#### Signature

```typescript
export declare const sequenceArray: <R, A>(arr: ReadonlyArray<Reader<R, A>>) => Reader<R, ReadonlyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArray`

Equivalent to `ReadonlyArray#traverse(Applicative)`.




#### Signature

```typescript
export declare const traverseArray: <R, A, B>(
  f: (a: A) => Reader<R, B>,
) => (as: readonly A[]) => Reader<R, readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseArrayWithIndex: <R, A, B>(
  f: (index: number, a: A) => Reader<R, B>,
) => (as: ReadonlyArray<A>) => Reader<R, ReadonlyArray<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <A, R, B>(
  f: (index: number, a: A) => Reader<R, B>,
) => (as: readonly A[]) => Reader<R, readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndex`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, R, B>(
  f: (index: number, a: A) => Reader<R, B>,
) => (as: ReadonlyNonEmptyArray<A>) => Reader<R, ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Type lambdas


### `URI`




#### Signature

```typescript
export type URI = typeof URI
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URI`




#### Signature

```typescript
export declare const URI = 'Reader'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: Reader<unknown, readonly []>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <R, A>(fa: Reader<R, A>) => <B>(fab: Reader<R, (a: A) => B>) => Reader<R, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirst`

Combine two effectful actions, keeping only the result of the first.




#### Signature

```typescript
export declare const apFirst: <E, B>(second: Reader<E, B>) => <A>(first: Reader<E, A>) => Reader<E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirstW`

Less strict version of [`apFirst`](#apfirst).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const apFirstW: <R2, B>(second: Reader<R2, B>) => <R1, A>(first: Reader<R1, A>) => Reader<R1 & R2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecond`

Combine two effectful actions, keeping only the result of the second.




#### Signature

```typescript
export declare const apSecond: <E, B>(second: Reader<E, B>) => <A>(first: Reader<E, A>) => Reader<E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecondW`

Less strict version of [`apSecond`](#apsecond).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const apSecondW: <R2, B>(second: Reader<R2, B>) => <R1, A>(first: Reader<R1, A>) => Reader<R1 & R2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apW`

Less strict version of [`ap`](#ap).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const apW: <R2, A>(fa: Reader<R2, A>) => <R1, B>(fab: Reader<R1, (a: A) => B>) => Reader<R1 & R2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `compose`




#### Signature

```typescript
export declare const compose: <A, B>(ab: Reader<A, B>) => <C>(bc: Reader<B, C>) => Reader<A, C>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends ReaderIterable<any, any>, A>(
  yieldFunction: (unwrap: <R, A>(ma: Reader<R, A>) => ReaderIterable<R, A>) => Generator<MA, A>,
) => Reader<_.UnionToIntersection<MA extends ReaderIterable<infer R, any> ? R : never>, A>
```




---


### `first`




#### Signature

```typescript
export declare const first: Strong2<URI>['first']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getMonoid`~~

Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.




#### Signature

```typescript
export declare const getMonoid: <R, A>(M: Monoid<A>) => Monoid<Reader<R, A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getSemigroup`~~

Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.




#### Signature

```typescript
export declare const getSemigroup: <R, A>(S: Semigroup<A>) => Semigroup<Reader<R, A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `left`




#### Signature

```typescript
export declare const left: Choice2<URI>['left']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `let`




#### Signature

```typescript
export declare const let_: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => <E>(fa: Reader<E, A>) => Reader<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `local`

Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s `contramap`).




#### Signature

```typescript
export declare const local: <R2, R1>(f: (r2: R2) => R1) => <A>(ma: Reader<R1, A>) => Reader<R2, A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as R from '@fp-tx/core/Reader'
import * as string from '@fp-tx/core/string'

const calculateContentLen: R.Reader<string, number> = pipe(
  R.Do,
  R.bind('content', () => R.ask<string>()),
  R.map(({ content }) => string.size(content)),
)

// Calls calculateContentLen after adding a prefix to the Reader content.
const calculateModifiedContentLen: R.Reader<string, number> = pipe(
  calculateContentLen,
  R.local(s => 'Prefix ' + s),
)

const s = '12345'

assert.deepStrictEqual(
  "Modified 's' length: " +
    calculateModifiedContentLen(s) +
    '\n' +
    "Original 's' length: " +
    calculateContentLen(s),
  "Modified 's' length: 12\nOriginal 's' length: 5",
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `promap`




#### Signature

```typescript
export declare const promap: <E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fea: Reader<E, A>) => Reader<D, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`reader`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `R.Functor` instead of `R.reader` (where `R` is from `import R from 'fp-ts/Reader'`)




#### Signature

```typescript
export declare const reader: Monad2<URI> & Profunctor2<URI> & Category2<URI> & Strong2<URI> & Choice2<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`




#### Signature

```typescript
export declare const right: Choice2<URI>['right']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `second`




#### Signature

```typescript
export declare const second: Strong2<URI>['second']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti