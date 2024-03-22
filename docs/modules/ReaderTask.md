
# ReaderTask







### Instances

* [ApplicativePar](#applicativepar)
* [ApplicativeSeq](#applicativeseq)
* [ApplyPar](#applypar)
* [ApplySeq](#applyseq)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [FromIO](#fromio)
* [FromReader](#fromreader)
* [FromTask](#fromtask)
* [Functor](#functor)
* [Monad](#monad)
* [MonadIO](#monadio)
* [MonadTask](#monadtask)
* [Pointed](#pointed)

### Combinators

* [tap](#tap)
* [tapIO](#tapio)
* [tapReader](#tapreader)
* [tapReaderIO](#tapreaderio)
* [tapTask](#taptask)

### Constructors

* [ask](#ask)
* [asks](#asks)
* [asksReaderTask](#asksreadertask)
* [asksReaderTaskW](#asksreadertaskw)
* [of](#of)

### Conversions

* [fromIO](#fromio)
* [fromReader](#fromreader)
* [fromReaderIO](#fromreaderio)
* [fromTask](#fromtask)

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
* [chainFirstIOK](#chainfirstiok)
* [chainFirstReaderIOK](#chainfirstreaderiok)
* [chainFirstReaderIOKW](#chainfirstreaderiokw)
* [chainFirstReaderK](#chainfirstreaderk)
* [chainFirstReaderKW](#chainfirstreaderkw)
* [chainFirstTaskK](#chainfirsttaskk)
* [chainFirstW](#chainfirstw)
* [chainIOK](#chainiok)
* [chainReaderIOK](#chainreaderiok)
* [chainReaderIOKW](#chainreaderiokw)
* [chainReaderK](#chainreaderk)
* [chainReaderKW](#chainreaderkw)
* [chainTaskK](#chaintaskk)
* [chainW](#chainw)

### Lifting

* [fromIOK](#fromiok)
* [fromReaderIOK](#fromreaderiok)
* [fromReaderK](#fromreaderk)
* [fromTaskK](#fromtaskk)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [flap](#flap)
* [map](#map)

### Model

* [ReaderTask](#readertask)

### Sequencing

* [flatMap](#flatmap)
* [flatMapIO](#flatmapio)
* [flatMapReader](#flatmapreader)
* [flatMapReaderIO](#flatmapreaderio)
* [flatMapTask](#flatmaptask)
* [flatten](#flatten)
* [flattenW](#flattenw)

### Traversing

* [sequenceArray](#sequencearray)
* [traverseArray](#traversearray)
* [traverseArrayWithIndex](#traversearraywithindex)
* [traverseReadonlyArrayWithIndex](#traversereadonlyarraywithindex)
* [traverseReadonlyArrayWithIndexSeq](#traversereadonlyarraywithindexseq)
* [traverseReadonlyNonEmptyArrayWithIndex](#traversereadonlynonemptyarraywithindex)
* [traverseReadonlyNonEmptyArrayWithIndexSeq](#traversereadonlynonemptyarraywithindexseq)
* [traverseSeqArray](#traverseseqarray)
* [traverseSeqArrayWithIndex](#traverseseqarraywithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ApT](#apt)
* [ap](#ap)
* [apFirst](#apfirst)
* [apSecond](#apsecond)
* [apW](#apw)
* [do](#do)
* ~~[getMonoid](#getmonoid)~~ (deprecated)
* ~~[getSemigroup](#getsemigroup)~~ (deprecated)
* [let](#let)
* [local](#local)
* ~~[readerTask](#readertask)~~ (deprecated)
* ~~[readerTaskSeq](#readertaskseq)~~ (deprecated)
* ~~[run](#run)~~ (deprecated)
* ~~[sequenceSeqArray](#sequenceseqarray)~~ (deprecated)

## Instances


### `ApplicativePar`

Runs computations in parallel.




#### Signature

```typescript
export declare const ApplicativePar: Applicative2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplicativeSeq`

Runs computations sequentially.




#### Signature

```typescript
export declare const ApplicativeSeq: Applicative2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplyPar`

Runs computations in parallel.




#### Signature

```typescript
export declare const ApplyPar: Apply2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplySeq`

Runs computations sequentially.




#### Signature

```typescript
export declare const ApplySeq: Apply2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain`




#### Signature

```typescript
export declare const Chain: chainable.Chain2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec`

ChainRec for `ReaderTask`




#### Signature

```typescript
export declare const ChainRec: ChainRec2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

---


### `FromIO`




#### Signature

```typescript
export declare const FromIO: FromIO2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromReader`




#### Signature

```typescript
export declare const FromReader: FromReader2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromTask`




#### Signature

```typescript
export declare const FromTask: FromTask2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO`




#### Signature

```typescript
export declare const MonadIO: MonadIO2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask`




#### Signature

```typescript
export declare const MonadTask: MonadTask2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Combinators


### `tap`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tap: {
  <R1, A, R2, _>(self: ReaderTask<R1, A>, f: (a: A) => ReaderTask<R2, _>): ReaderTask<R1 & R2, A>
  <A, R2, _>(f: (a: A) => ReaderTask<R2, _>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R2 & R1, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapIO`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapIO: {
  <A, _>(f: (a: A) => IO<_>): <R>(self: ReaderTask<R, A>) => ReaderTask<R, A>
  <R, A, _>(self: ReaderTask<R, A>, f: (a: A) => IO<_>): ReaderTask<R, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as RT from '@fp-tx/core/ReaderTask'
import * as Console from '@fp-tx/core/Console'

// Will produce `Hello, fp-ts` to the stdout
const effect = pipe(
  RT.ask<string>(),
  RT.tapIO(value => Console.log(`Hello, ${value}`)),
)

async function test() {
  assert.deepStrictEqual(await effect('fp-ts')(), 'fp-ts')
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapReader`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapReader: {
  <R2, A, _>(f: (a: A) => R.Reader<R2, _>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R1 & R2, A>
  <R1, R2, A, _>(self: ReaderTask<R1, A>, f: (a: A) => R.Reader<R2, _>): ReaderTask<R1 & R2, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapReaderIO`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapReaderIO: {
  <R2, A, _>(f: (a: A) => ReaderIO<R2, _>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R1 & R2, A>
  <R1, R2, A, _>(self: ReaderTask<R1, A>, f: (a: A) => ReaderIO<R2, _>): ReaderTask<R1 & R2, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapTask`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapTask: {
  <A, _>(f: (a: A) => Task<_>): <R>(self: ReaderTask<R, A>) => ReaderTask<R, A>
  <R, A, _>(self: ReaderTask<R, A>, f: (a: A) => Task<_>): ReaderTask<R, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as RT from '@fp-tx/core/ReaderTask'
import * as T from '@fp-tx/core/Task'

const effect = pipe(
  RT.ask<number>(),
  RT.tapTask(value => T.of(value + 1)),
)

async function test() {
  assert.deepStrictEqual(await effect(1)(), 1)
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `ask`

Reads the current context.




#### Signature

```typescript
export declare const ask: <R>() => ReaderTask<R, R>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asks`

Projects a value from the global context in a `ReaderTask`.




#### Signature

```typescript
export declare const asks: <R, A>(f: (r: R) => A) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksReaderTask`

Effectfully accesses the environment.




#### Signature

```typescript
export declare const asksReaderTask: <R, A>(f: (r: R) => ReaderTask<R, A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksReaderTaskW`

Less strict version of [`asksReaderTask`](#asksreadertask).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const asksReaderTaskW: <R1, R2, A>(f: (r1: R1) => ReaderTask<R2, A>) => ReaderTask<R1 & R2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <R = unknown, A = never>(a: A) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromIO`




#### Signature

```typescript
export declare const fromIO: <A, R = unknown>(fa: IO<A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReader`




#### Signature

```typescript
export declare const fromReader: <R, A>(fa: R.Reader<R, A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderIO`




#### Signature

```typescript
export declare const fromReaderIO: <R, A>(fa: ReaderIO<R, A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTask`




#### Signature

```typescript
export declare const fromTask: <A, R = unknown>(fa: Task<A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: ReaderTask<unknown, {}>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, E, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderTask<E, B>,
) => (fa: ReaderTask<E, A>) => ReaderTask<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


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
  fb: ReaderTask<R2, B>,
) => <R1>(fa: ReaderTask<R1, A>) => ReaderTask<
  R1 & R2,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bind`




#### Signature

```typescript
export declare const bind: <N extends string, A, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderTask<E, B>,
) => (ma: ReaderTask<E, A>) => ReaderTask<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(
  name: N,
) => <E, A>(fa: ReaderTask<E, A>) => ReaderTask<E, { readonly [K in N]: A }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindW`

The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const bindW: <N extends string, A, R2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderTask<R2, B>,
) => <R1>(fa: ReaderTask<R1, A>) => ReaderTask<
  R1 & R2,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Instance methods


### `chainRec`




#### Signature

```typescript
export declare const chainRec: ChainRec2<URI>['chainRec']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <A, R, B>(f: (a: A) => ReaderTask<R, B>) => (ma: ReaderTask<R, A>) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirst`

Alias of `tap`.




#### Signature

```typescript
export declare const chainFirst: <A, R, B>(
  f: (a: A) => ReaderTask<R, B>,
) => (first: ReaderTask<R, A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstIOK`

Alias of `tapIO`.




#### Signature

```typescript
export declare const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => <R>(first: ReaderTask<R, A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderIOK`

Alias of `tapReaderIO`.




#### Signature

```typescript
export declare const chainFirstReaderIOK: <A, R, B>(
  f: (a: A) => ReaderIO<R, B>,
) => (ma: ReaderTask<R, A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderIOKW`

Alias of `tapReaderIO`.


Less strict version of [`chainFirstReaderIOK`](#chainfirstreaderiok).




#### Signature

```typescript
export declare const chainFirstReaderIOKW: <A, R2, B>(
  f: (a: A) => ReaderIO<R2, B>,
) => <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderK`

Alias of `tapReader`.




#### Signature

```typescript
export declare const chainFirstReaderK: <A, R, B>(
  f: (a: A) => R.Reader<R, B>,
) => (ma: ReaderTask<R, A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderKW`

Alias of `tapReader`.


Less strict version of [`chainFirstReaderK`](#chainfirstreaderk).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2>(ma: ReaderTask<R2, A>) => ReaderTask<R1 & R2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstTaskK`

Alias of `tapTask`.




#### Signature

```typescript
export declare const chainFirstTaskK: <A, B>(f: (a: A) => T.Task<B>) => <R>(first: ReaderTask<R, A>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstW`

Alias of `tap`.




#### Signature

```typescript
export declare const chainFirstW: <R2, A, B>(
  f: (a: A) => ReaderTask<R2, B>,
) => <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOK`

Alias of `flatMapIO`.




#### Signature

```typescript
export declare const chainIOK: <A, B>(f: (a: A) => IO<B>) => <R>(first: ReaderTask<R, A>) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderIOK`

Alias of `flatMapReaderIO`.




#### Signature

```typescript
export declare const chainReaderIOK: <A, R, B>(
  f: (a: A) => ReaderIO<R, B>,
) => (ma: ReaderTask<R, A>) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderIOKW`

Alias of `flatMapReaderIO`.


Less strict version of [`chainReaderIOK`](#chainreaderiok).




#### Signature

```typescript
export declare const chainReaderIOKW: <A, R2, B>(
  f: (a: A) => ReaderIO<R2, B>,
) => <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderK`

Alias of `flatMapReader`.




#### Signature

```typescript
export declare const chainReaderK: <A, R, B>(f: (a: A) => R.Reader<R, B>) => (ma: ReaderTask<R, A>) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderKW`

Alias of `flatMapReader`.


Less strict version of [`chainReaderK`](#chainreaderk).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const chainReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2>(ma: ReaderTask<R2, A>) => ReaderTask<R1 & R2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskK`

Alias of `flatMapTask`.




#### Signature

```typescript
export declare const chainTaskK: <A, B>(f: (a: A) => T.Task<B>) => <R>(first: ReaderTask<R, A>) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainW`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chainW: <R2, A, B>(
  f: (a: A) => ReaderTask<R2, B>,
) => <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromIOK`




#### Signature

```typescript
export declare const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <R = unknown>(...a: A) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderIOK`




#### Signature

```typescript
export declare const fromReaderIOK: <A extends readonly unknown[], R, B>(
  f: (...a: A) => ReaderIO<R, B>,
) => (...a: A) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderK`




#### Signature

```typescript
export declare const fromReaderK: <A extends ReadonlyArray<unknown>, R, B>(
  f: (...a: A) => R.Reader<R, B>,
) => (...a: A) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskK`




#### Signature

```typescript
export declare const fromTaskK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => T.Task<B>,
) => <R = unknown>(...a: A) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the value to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <R, _>(self: ReaderTask<R, _>) => ReaderTask<R, A>
  <R, _, A>(self: ReaderTask<R, _>, a: A): ReaderTask<R, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the value to the void constant value.




#### Signature

```typescript
export declare const asUnit: <R, _>(self: ReaderTask<R, _>) => ReaderTask<R, void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: ReaderTask<E, (a: A) => B>) => ReaderTask<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

`map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types use the type constructor `F` to represent some computational context.




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => <R>(fa: ReaderTask<R, A>) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `ReaderTask`




#### Signature

```typescript
export interface ReaderTask<R, A> {
  (r: R): Task<A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `flatMap`




#### Signature

```typescript
export declare const flatMap: {
  <A, R2, B>(f: (a: A) => ReaderTask<R2, B>): <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B>
  <R1, A, R2, B>(ma: ReaderTask<R1, A>, f: (a: A) => ReaderTask<R2, B>): ReaderTask<R1 & R2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapIO`




#### Signature

```typescript
export declare const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): <R>(self: ReaderTask<R, A>) => ReaderTask<R, B>
  <R, A, B>(self: ReaderTask<R, A>, f: (a: A) => IO<B>): ReaderTask<R, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapReader`




#### Signature

```typescript
export declare const flatMapReader: {
  <A, R2, B>(f: (a: A) => R.Reader<R2, B>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B>
  <R1, A, R2, B>(self: ReaderTask<R1, A>, f: (a: A) => R.Reader<R2, B>): ReaderTask<R1 & R2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapReaderIO`




#### Signature

```typescript
export declare const flatMapReaderIO: {
  <A, R2, B>(f: (a: A) => ReaderIO<R2, B>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B>
  <R1, A, R2, B>(self: ReaderTask<R1, A>, f: (a: A) => ReaderIO<R2, B>): ReaderTask<R1 & R2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapTask`




#### Signature

```typescript
export declare const flatMapTask: {
  <A, B>(f: (a: A) => Task<B>): <R>(self: ReaderTask<R, A>) => ReaderTask<R, B>
  <R, A, B>(self: ReaderTask<R, A>, f: (a: A) => Task<B>): ReaderTask<R, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`




#### Signature

```typescript
export declare const flatten: <R, A>(mma: ReaderTask<R, ReaderTask<R, A>>) => ReaderTask<R, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flattenW`

Less strict version of [`flatten`](#flatten).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const flattenW: <R1, R2, A>(mma: ReaderTask<R1, ReaderTask<R2, A>>) => ReaderTask<R1 & R2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequenceArray`

Equivalent to `ReadonlyArray#sequence(Applicative)`.




#### Signature

```typescript
export declare const sequenceArray: <R, A>(arr: ReadonlyArray<ReaderTask<R, A>>) => ReaderTask<R, ReadonlyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArray`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseArray: <R, A, B>(
  f: (a: A) => ReaderTask<R, B>,
) => (as: readonly A[]) => ReaderTask<R, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseArrayWithIndex: <R, A, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
) => (as: ReadonlyArray<A>) => ReaderTask<R, ReadonlyArray<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <A, R, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
) => (as: readonly A[]) => ReaderTask<R, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndexSeq`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndexSeq: <R, A, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
) => (as: readonly A[]) => ReaderTask<R, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndex`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, R, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
) => (as: ReadonlyNonEmptyArray<A>) => ReaderTask<R, ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndexSeq`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndexSeq: <R, A, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
) => (as: ReadonlyNonEmptyArray<A>) => ReaderTask<R, ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseSeqArray`

Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseSeqArray: <R, A, B>(
  f: (a: A) => ReaderTask<R, B>,
) => (as: readonly A[]) => ReaderTask<R, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseSeqArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseSeqArrayWithIndex: <R, A, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
) => (as: ReadonlyArray<A>) => ReaderTask<R, ReadonlyArray<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Type lambdas


### `URI`




#### Signature

```typescript
export type URI = typeof URI
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URI`




#### Signature

```typescript
export declare const URI = 'ReaderTask'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: ReaderTask<unknown, readonly []>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <R, A>(fa: ReaderTask<R, A>) => <B>(fab: ReaderTask<R, (a: A) => B>) => ReaderTask<R, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirst`

Combine two effectful actions, keeping only the result of the first.




#### Signature

```typescript
export declare const apFirst: <E, B>(second: ReaderTask<E, B>) => <A>(first: ReaderTask<E, A>) => ReaderTask<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecond`

Combine two effectful actions, keeping only the result of the second.




#### Signature

```typescript
export declare const apSecond: <E, B>(second: ReaderTask<E, B>) => <A>(first: ReaderTask<E, A>) => ReaderTask<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apW`

Less strict version of [`ap`](#ap).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const apW: <R2, A>(
  fa: ReaderTask<R2, A>,
) => <R1, B>(fab: ReaderTask<R1, (a: A) => B>) => ReaderTask<R1 & R2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends ReaderTaskIterable<any, any>, A>(
  yieldFunction: (unwrap: <R, A>(ma: ReaderTask<R, A>) => ReaderTaskIterable<R, A>) => Generator<MA, A>,
) => ReaderTask<_.UnionToIntersection<MA extends ReaderTaskIterable<infer R, any> ? R : never>, A>
```




---


### ~~`getMonoid`~~

Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.




#### Signature

```typescript
export declare const getMonoid: <R, A>(M: Monoid<A>) => Monoid<ReaderTask<R, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getSemigroup`~~

Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.




#### Signature

```typescript
export declare const getSemigroup: <R, A>(S: Semigroup<A>) => Semigroup<ReaderTask<R, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `let`




#### Signature

```typescript
export declare const let_: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => <E>(fa: ReaderTask<E, A>) => ReaderTask<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `local`

Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s `contramap`).




#### Signature

```typescript
export declare const local: <R2, R1>(f: (r2: R2) => R1) => <A>(ma: ReaderTask<R1, A>) => ReaderTask<R2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`readerTask`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `RT.Functor` instead of `RT.readerTask` (where `RT` is from `import RT from 'fp-ts/ReaderTask'`)




#### Signature

```typescript
export declare const readerTask: MonadTask2<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`readerTaskSeq`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `RT.Functor` instead of `RT.readerTaskSeq` (where `RT` is from `import RT from 'fp-ts/ReaderTask'`)




#### Signature

```typescript
export declare const readerTaskSeq: typeof readerTask
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`run`~~




#### Signature

```typescript
export declare function run<R, A>(ma: ReaderTask<R, A>, r: R): Promise<A>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`sequenceSeqArray`~~

Use `traverseReadonlyArrayWithIndexSeq` instead.




#### Signature

```typescript
export declare const sequenceSeqArray: <R, A>(arr: ReadonlyArray<ReaderTask<R, A>>) => ReaderTask<R, ReadonlyArray<A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti