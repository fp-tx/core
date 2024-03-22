
# ReaderEither







### Instances

* [Alt](#alt)
* [Applicative](#applicative)
* [Apply](#apply)
* [Bifunctor](#bifunctor)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [FromEither](#fromeither)
* [FromReader](#fromreader)
* [Functor](#functor)
* [Monad](#monad)
* [MonadThrow](#monadthrow)
* [Pointed](#pointed)

### Combinators

* [tap](#tap)
* [tapEither](#tapeither)
* [tapReader](#tapreader)

### Constructors

* [ask](#ask)
* [asks](#asks)
* [asksReaderEither](#asksreadereither)
* [asksReaderEitherW](#asksreadereitherw)
* [left](#left)
* [leftReader](#leftreader)
* [of](#of)
* [right](#right)
* [rightReader](#rightreader)

### Conversions

* [fromEither](#fromeither)
* [fromOption](#fromoption)
* [fromReader](#fromreader)
* [toUnion](#tounion)

### Do notation

* [Do](#do)
* [apS](#aps)
* [apSW](#apsw)
* [bind](#bind)
* [bindTo](#bindto)
* [bindW](#bindw)

### Error handling

* [alt](#alt)
* [altW](#altw)
* [getAltReaderValidation](#getaltreadervalidation)
* [getApplicativeReaderValidation](#getapplicativereadervalidation)
* [getOrElse](#getorelse)
* [getOrElseW](#getorelsew)
* [mapBoth](#mapboth)
* [mapError](#maperror)
* [orElse](#orelse)
* [orElseW](#orelsew)
* [orLeft](#orleft)
* [tapError](#taperror)

### Filtering

* [filterOrElse](#filterorelse)
* [filterOrElseW](#filterorelsew)
* [getCompactable](#getcompactable)
* [getFilterable](#getfilterable)

### Instance methods

* [chainRec](#chainrec)

### Legacy

* [bimap](#bimap)
* [chain](#chain)
* [chainEitherK](#chaineitherk)
* [chainEitherKW](#chaineitherkw)
* [chainFirst](#chainfirst)
* [chainFirstEitherK](#chainfirsteitherk)
* [chainFirstEitherKW](#chainfirsteitherkw)
* [chainFirstReaderK](#chainfirstreaderk)
* [chainFirstReaderKW](#chainfirstreaderkw)
* [chainFirstW](#chainfirstw)
* [chainOptionK](#chainoptionk)
* [chainOptionKW](#chainoptionkw)
* [chainReaderK](#chainreaderk)
* [chainReaderKW](#chainreaderkw)
* [chainW](#chainw)
* [fromOptionK](#fromoptionk)
* [mapLeft](#mapleft)
* [orElseFirst](#orelsefirst)
* [orElseFirstW](#orelsefirstw)

### Lifting

* [fromEitherK](#fromeitherk)
* [fromPredicate](#frompredicate)
* [fromReaderK](#fromreaderk)
* [liftNullable](#liftnullable)
* [liftOption](#liftoption)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [flap](#flap)
* [map](#map)

### Model

* [ReaderEither](#readereither)

### Pattern matching

* [fold](#fold)
* [foldW](#foldw)
* [match](#match)
* [matchE](#matche)
* [matchEW](#matchew)
* [matchW](#matchw)

### Sequencing

* [flatMap](#flatmap)
* [flatMapEither](#flatmapeither)
* [flatMapNullable](#flatmapnullable)
* [flatMapOption](#flatmapoption)
* [flatMapReader](#flatmapreader)
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
* [do](#do)
* ~~[getApplyMonoid](#getapplymonoid)~~ (deprecated)
* ~~[getApplySemigroup](#getapplysemigroup)~~ (deprecated)
* ~~[getReaderValidation](#getreadervalidation)~~ (deprecated)
* ~~[getSemigroup](#getsemigroup)~~ (deprecated)
* [let](#let)
* [local](#local)
* ~~[readerEither](#readereither)~~ (deprecated)
* [swap](#swap)
* [throwError](#throwerror)

## Instances


### `Alt`




#### Signature

```typescript
export declare const Alt: Alt3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative`




#### Signature

```typescript
export declare const Applicative: Applicative3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Apply`




#### Signature

```typescript
export declare const Apply: Apply3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Bifunctor`




#### Signature

```typescript
export declare const Bifunctor: Bifunctor3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain`




#### Signature

```typescript
export declare const Chain: chainable.Chain3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec`

ChainRec for `ReaderEither`




#### Signature

```typescript
export declare const ChainRec: ChainRec3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

---


### `FromEither`




#### Signature

```typescript
export declare const FromEither: FromEither3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromReader`




#### Signature

```typescript
export declare const FromReader: FromReader3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow`




#### Signature

```typescript
export declare const MonadThrow: MonadThrow3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed3<URI>
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
  <R1, E1, A, R2, E2, _>(
    self: ReaderEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): ReaderEither<R1 & R2, E1 | E2, A>
  <A, R2, E2, _>(
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): <R1, E1>(self: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E2 | E1, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapEither`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapEither: {
  <A, E2, _>(f: (a: A) => Either<E2, _>): <R1, E1>(self: ReaderEither<R1, E1, A>) => ReaderEither<R1, E1 | E2, A>
  <R1, E1, A, E2, _>(self: ReaderEither<R1, E1, A>, f: (a: A) => Either<E2, _>): ReaderEither<R1, E1 | E2, A>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as RE from '@fp-tx/core/ReaderEither'

const checkString = (value: string) =>
  pipe(
    RE.ask<number>(),
    RE.tapEither(minLength => (value.length > minLength ? E.right('ok') : E.left('error'))),
  )

assert.deepStrictEqual(checkString('')(1), E.left('error'))
assert.deepStrictEqual(checkString('fp-ts')(2), E.right(2))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapReader`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapReader: {
  <R2, A, E, _>(f: (a: A) => Reader<R2, _>): <R1>(self: ReaderEither<R1, E, A>) => ReaderEither<R1 & R2, E, A>
  <R1, R2, E, A, _>(self: ReaderEither<R1, E, A>, f: (a: A) => Reader<R2, _>): ReaderEither<R1 & R2, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `ask`

Reads the current context.




#### Signature

```typescript
export declare const ask: <R, E = never>() => ReaderEither<R, E, R>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asks`

Projects a value from the global context in a `ReaderEither`.




#### Signature

```typescript
export declare const asks: <R, A, E = never>(f: (r: R) => A) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksReaderEither`

Effectfully accesses the environment.




#### Signature

```typescript
export declare const asksReaderEither: <R, E, A>(f: (r: R) => ReaderEither<R, E, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksReaderEitherW`

Less strict version of [`asksReaderEither`](#asksreadereither).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const asksReaderEitherW: <R1, R2, E, A>(
  f: (r1: R1) => ReaderEither<R2, E, A>,
) => ReaderEither<R1 & R2, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `left`




#### Signature

```typescript
export declare const left: <R, E = never, A = never>(e: E) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftReader`




#### Signature

```typescript
export declare const leftReader: <R, E = never, A = never>(me: Reader<R, E>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <R = unknown, E = never, A = never>(a: A) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`




#### Signature

```typescript
export declare const right: <R, E = never, A = never>(a: A) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightReader`




#### Signature

```typescript
export declare const rightReader: <R, E = never, A = never>(ma: Reader<R, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEither`




#### Signature

```typescript
export declare const fromEither: <E, A, R = unknown>(fa: Either<E, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <E>(onNone: LazyArg<E>) => <A, R = unknown>(fa: Option<A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReader`




#### Signature

```typescript
export declare const fromReader: <R, A, E = never>(fa: Reader<R, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUnion`




#### Signature

```typescript
export declare const toUnion: <R, E, A>(fa: ReaderEither<R, E, A>) => Reader<R, E | A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: ReaderEither<unknown, never, {}>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, R, E, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderEither<R, E, B>,
) => (fa: ReaderEither<R, E, A>) => ReaderEither<R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSW`

Less strict version of [`apS`](#aps).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apSW: <A, N extends string, R2, E2, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderEither<R2, E2, B>,
) => <R1, E1>(
  fa: ReaderEither<R1, E1, A>,
) => ReaderEither<
  R1 & R2,
  E1 | E2,
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
export declare const bind: <N extends string, A, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderEither<R, E, A>) => ReaderEither<R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
) => <R, E, A>(fa: ReaderEither<R, E, A>) => ReaderEither<R, E, { readonly [K in N]: A }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindW`

The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const bindW: <N extends string, A, R2, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(
  fa: ReaderEither<R1, E1, A>,
) => ReaderEither<
  R1 & R2,
  E1 | E2,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `alt`

Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to types of kind `* -> *`.




#### Signature

```typescript
export declare const alt: <R, E, A>(
  that: () => ReaderEither<R, E, A>,
) => (fa: ReaderEither<R, E, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `altW`

Less strict version of [`alt`](#alt).


The `W` suffix (short for **W**idening) means that the environment, the error and the return types will be merged.




#### Signature

```typescript
export declare const altW: <R2, E2, B>(
  that: () => ReaderEither<R2, E2, B>,
) => <R1, E1, A>(fa: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E2, A | B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getAltReaderValidation`

The default [`Alt`](#alt) instance returns the last error, if you want to get all errors you need to provide a way to concatenate them via a `Semigroup`.


See [`getAltValidation`](./Either#getaltvalidation).




#### Signature

```typescript
export declare function getAltReaderValidation<E>(S: Semigroup<E>): Alt3C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicativeReaderValidation`

The default [`Applicative`](#applicative) instance returns the first error, if you want to get all errors you need to provide a way to concatenate them via a `Semigroup`.


See [`getApplicativeValidation`](./Either#getapplicativevalidation).




#### Signature

```typescript
export declare function getApplicativeReaderValidation<E>(S: Semigroup<E>): Applicative3C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElse`




#### Signature

```typescript
export declare const getOrElse: <E, R, A>(onLeft: (e: E) => Reader<R, A>) => (ma: ReaderEither<R, E, A>) => Reader<R, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElseW`

Less strict version of [`getOrElse`](#getorelse).


The `W` suffix (short for **W**idening) means that the handler return type will be merged.




#### Signature

```typescript
export declare const getOrElseW: <R2, E, B>(
  onLeft: (e: E) => Reader<R2, B>,
) => <R1, A>(ma: ReaderEither<R1, E, A>) => Reader<R1 & R2, A | B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapBoth`

Returns a `ReaderEither` whose failure and success channels have been mapped by the specified pair of functions, `f` and `g`.




#### Signature

```typescript
export declare const mapBoth: {
  <E, G, A, B>(f: (e: E) => G, g: (a: A) => B): <R>(self: ReaderEither<R, E, A>) => ReaderEither<R, G, B>
  <R, E, A, G, B>(self: ReaderEither<R, E, A>, f: (e: E) => G, g: (a: A) => B): ReaderEither<R, G, B>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as ReaderEither from '@fp-tx/core/ReaderEither'
import * as Either from '@fp-tx/core/Either'

const f = (s: string) => new Error(s)
const g = (n: number) => n * 2

assert.deepStrictEqual(ReaderEither.mapBoth(ReaderEither.right(1), f, g)({}), Either.right(2))
assert.deepStrictEqual(ReaderEither.mapBoth(ReaderEither.left('err'), f, g)({}), Either.left(new Error('err')))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapError`

Returns a `ReaderEither` with its error channel mapped using the specified function.




#### Signature

```typescript
export declare const mapError: {
  <R, E, G>(f: (e: E) => G): <A>(self: ReaderEither<R, E, A>) => ReaderEither<R, G, A>
  <R, E, A, G>(self: ReaderEither<R, E, A>, f: (e: E) => G): ReaderEither<R, G, A>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as ReaderEither from '@fp-tx/core/ReaderEither'
import * as Either from '@fp-tx/core/Either'

const f = (s: string) => new Error(s)

assert.deepStrictEqual(ReaderEither.mapError(ReaderEither.right(1), f)({}), Either.right(1))
assert.deepStrictEqual(ReaderEither.mapError(ReaderEither.left('err'), f)({}), Either.left(new Error('err')))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElse`




#### Signature

```typescript
export declare const orElse: <E1, R, E2, A>(
  onLeft: (e: E1) => ReaderEither<R, E2, A>,
) => (ma: ReaderEither<R, E1, A>) => ReaderEither<R, E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseW`

Less strict version of [`orElse`](#orelse).


The `W` suffix (short for **W**idening) means that the environment types and the return types will be merged.




#### Signature

```typescript
export declare const orElseW: <E1, R1, E2, B>(
  onLeft: (e: E1) => ReaderEither<R1, E2, B>,
) => <R2, A>(ma: ReaderEither<R2, E1, A>) => ReaderEither<R1 & R2, E2, A | B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orLeft`




#### Signature

```typescript
export declare const orLeft: <E1, R, E2>(
  onLeft: (e: E1) => Reader<R, E2>,
) => <A>(fa: ReaderEither<R, E1, A>) => ReaderEither<R, E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapError`

Returns an effect that effectfully "peeks" at the failure of this effect.




#### Signature

```typescript
export declare const tapError: {
  <E1, R2, E2, _>(
    onLeft: (e: E1) => ReaderEither<R2, E2, _>,
  ): <R1, A>(self: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, A>
  <R1, E1, A, R2, E2, _>(
    self: ReaderEither<R1, E1, A>,
    onLeft: (e: E1) => ReaderEither<R2, E2, _>,
  ): ReaderEither<R1 & R2, E1 | E2, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `filterOrElse`




#### Signature

```typescript
export declare const filterOrElse: {
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <R, B extends A>(mb: ReaderEither<R, E, B>) => ReaderEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterOrElseW`

Less strict version of [`filterOrElse`](#filterorelse).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const filterOrElseW: {
  <A, B extends A, E2>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E2,
  ): <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <R, E1, B extends A>(mb: ReaderEither<R, E1, B>) => ReaderEither<R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getCompactable`




#### Signature

```typescript
export declare const getCompactable: <E>(M: Monoid<E>) => Compactable3C<'ReaderEither', E>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getFilterable`




#### Signature

```typescript
export declare function getFilterable<E>(M: Monoid<E>): Filterable3C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Instance methods


### `chainRec`




#### Signature

```typescript
export declare const chainRec: ChainRec3<URI>['chainRec']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

## Legacy


### `bimap`

Alias of `mapBoth`.




#### Signature

```typescript
export declare const bimap: <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B,
) => <R>(fa: ReaderEither<R, E, A>) => ReaderEither<R, G, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainEitherK`

Alias of `flatMapEither`.




#### Signature

```typescript
export declare const chainEitherK: <E, A, B>(
  f: (a: A) => E.Either<E, B>,
) => <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainEitherKW`

Alias of `flatMapEither`.




#### Signature

```typescript
export declare const chainEitherKW: <E2, A, B>(
  f: (a: A) => Either<E2, B>,
) => <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, B>
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
export declare const chainFirst: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstEitherK`

Alias of `tapEither`.




#### Signature

```typescript
export declare const chainFirstEitherK: <A, E, B>(
  f: (a: A) => E.Either<E, B>,
) => <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstEitherKW`

Alias of `tapEither`.


Less strict version of [`chainFirstEitherK`](#chainfirsteitherk).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => Either<E2, B>,
) => <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderK`

Alias of `tapReader`.




#### Signature

```typescript
export declare const chainFirstReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <E>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderKW`

Alias of `tapReader`.


Less strict version of [`chainReaderK`](#chainreaderk).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => Reader<R1, B>,
) => <R2, E>(ma: ReaderEither<R2, E, A>) => ReaderEither<R1 & R2, E, A>
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
export declare const chainFirstW: <R2, E2, A, B>(
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionK`

Use `flatMapOption`.




#### Signature

```typescript
export declare const chainOptionK: <E>(
  onNone: LazyArg<E>,
) => <A, B>(f: (a: A) => Option<B>) => <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionKW`

Use `flatMapOption`.




#### Signature

```typescript
export declare const chainOptionKW: <E2>(
  onNone: LazyArg<E2>,
) => <A, B>(f: (a: A) => Option<B>) => <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderK`

Alias of `flatMapReader`.




#### Signature

```typescript
export declare const chainReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <E>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderKW`

Alias of `flatMapReader`.


Less strict version of [`chainReaderK`](#chainreaderk).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const chainReaderKW: <A, R2, B>(
  f: (a: A) => Reader<R2, B>,
) => <R1, E>(ma: ReaderEither<R1, E, A>) => ReaderEither<R1 & R2, E, B>
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
export declare const chainW: <R2, E2, A, B>(
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`

Use `liftOption`.




#### Signature

```typescript
export declare const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => <R = unknown>(...a: A) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapLeft`

Alias of `mapError`.




#### Signature

```typescript
export declare const mapLeft: <E, G>(f: (e: E) => G) => <R, A>(fa: ReaderEither<R, E, A>) => ReaderEither<R, G, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseFirst`

Alias of `tapError`.




#### Signature

```typescript
export declare const orElseFirst: <E, R, B>(
  onLeft: (e: E) => ReaderEither<R, E, B>,
) => <A>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseFirstW`

Alias of `tapError`.




#### Signature

```typescript
export declare const orElseFirstW: <E1, R2, E2, B>(
  onLeft: (e: E1) => ReaderEither<R2, E2, B>,
) => <R1, A>(ma: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromEitherK`




#### Signature

```typescript
export declare const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => E.Either<E, B>,
) => <R = unknown>(...a: A) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromPredicate`




#### Signature

```typescript
export declare const fromPredicate: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <R = unknown>(a: A) => ReaderEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R = unknown, B extends A = A>(b: B) => ReaderEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R = unknown>(a: A) => ReaderEither<R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderK`




#### Signature

```typescript
export declare const fromReaderK: <A extends ReadonlyArray<unknown>, R, B>(
  f: (...a: A) => Reader<R, B>,
) => <E = never>(...a: A) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `liftNullable`




#### Signature

```typescript
export declare const liftNullable: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => B | null | undefined,
  onNullable: (...a: A) => E,
) => <R>(...a: A) => ReaderEither<R, E, NonNullable<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `liftOption`




#### Signature

```typescript
export declare const liftOption: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => Option<B>,
  onNone: (...a: A) => E,
) => <R>(...a: A) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the `Right` value of this `ReaderEither` to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <R, E, _>(self: ReaderEither<R, E, _>) => ReaderEither<R, E, A>
  <R, E, _, A>(self: ReaderEither<R, E, _>, a: A): ReaderEither<R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the `Right` value of this `ReaderEither` to the void constant value.




#### Signature

```typescript
export declare const asUnit: <R, E, _>(self: ReaderEither<R, E, _>) => ReaderEither<R, E, void>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <R, E, B>(fab: ReaderEither<R, E, (a: A) => B>) => ReaderEither<R, E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <R, E>(fa: ReaderEither<R, E, A>) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `ReaderEither`




#### Signature

```typescript
export interface ReaderEither<R, E, A> extends Reader<R, Either<E, A>> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `fold`

Alias of [`matchE`](#matche).




#### Signature

```typescript
export declare const fold: <R, E, A, B>(
  onLeft: (e: E) => R.Reader<R, B>,
  onRight: (a: A) => R.Reader<R, B>,
) => (ma: ReaderEither<R, E, A>) => R.Reader<R, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldW`

Alias of [`matchEW`](#matchew).




#### Signature

```typescript
export declare const foldW: <E, R2, B, A, R3, C>(
  onLeft: (e: E) => R.Reader<R2, B>,
  onRight: (a: A) => R.Reader<R3, C>,
) => <R1>(ma: ReaderEither<R1, E, A>) => R.Reader<R1 & R2 & R3, B | C>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`




#### Signature

```typescript
export declare const match: <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
) => <R>(ma: ReaderEither<R, E, A>) => Reader<R, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchE`

The `E` suffix (short for **E**ffect) means that the handlers return an effect (`Reader`).




#### Signature

```typescript
export declare const matchE: <R, E, A, B>(
  onLeft: (e: E) => Reader<R, B>,
  onRight: (a: A) => Reader<R, B>,
) => (ma: ReaderEither<R, E, A>) => Reader<R, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchEW`

Less strict version of [`matchE`](#matche).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchEW: <E, R2, B, A, R3, C>(
  onLeft: (e: E) => Reader<R2, B>,
  onRight: (a: A) => Reader<R3, C>,
) => <R1>(ma: ReaderEither<R1, E, A>) => Reader<R1 & R2 & R3, B | C>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchW`

Less strict version of [`match`](#match).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchW: <E, B, A, C>(
  onLeft: (e: E) => B,
  onRight: (a: A) => C,
) => <R>(ma: Reader<R, Either<E, A>>) => Reader<R, B | C>
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
  <A, R2, E2, B>(
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): <R1, E1>(ma: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, B>
  <R1, E1, A, R2, E2, B>(
    ma: ReaderEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): ReaderEither<R1 & R2, E1 | E2, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapEither`




#### Signature

```typescript
export declare const flatMapEither: {
  <A, E2, B>(f: (a: A) => E.Either<E2, B>): <R, E1>(self: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, B>
  <R, E1, A, E2, B>(self: ReaderEither<R, E1, A>, f: (a: A) => E.Either<E2, B>): ReaderEither<R, E1 | E2, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapNullable`




#### Signature

```typescript
export declare const flatMapNullable: {
  <A, B, E2>(
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): <R, E1>(self: ReaderEither<R, E1, A>) => ReaderEither<R, E2 | E1, NonNullable<B>>
  <R, E1, A, B, E2>(
    self: ReaderEither<R, E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): ReaderEither<R, E1 | E2, NonNullable<B>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapOption`




#### Signature

```typescript
export declare const flatMapOption: {
  <A, B, E2>(
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): <R, E1>(self: ReaderEither<R, E1, A>) => ReaderEither<R, E2 | E1, B>
  <R, E1, A, B, E2>(
    self: ReaderEither<R, E1, A>,
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): ReaderEither<R, E1 | E2, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapReader`




#### Signature

```typescript
export declare const flatMapReader: {
  <A, R2, B>(f: (a: A) => Reader<R2, B>): <R1, E>(self: ReaderEither<R1, E, A>) => ReaderEither<R1 & R2, E, B>
  <R1, E, A, R2, B>(self: ReaderEither<R1, E, A>, f: (a: A) => Reader<R2, B>): ReaderEither<R1 & R2, E, B>
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
export declare const flatten: <R, E, A>(mma: ReaderEither<R, E, ReaderEither<R, E, A>>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flattenW`

Less strict version of [`flatten`](#flatten).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const flattenW: <R1, R2, E1, E2, A>(
  mma: ReaderEither<R1, E1, ReaderEither<R2, E2, A>>,
) => ReaderEither<R1 & R2, E1 | E2, A>
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
export declare const sequenceArray: <R, E, A>(
  arr: ReadonlyArray<ReaderEither<R, E, A>>,
) => ReaderEither<R, E, ReadonlyArray<A>>
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
export declare const traverseArray: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (as: readonly A[]) => ReaderEither<R, E, readonly B[]>
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
export declare const traverseArrayWithIndex: <R, E, A, B>(
  f: (index: number, a: A) => ReaderEither<R, E, B>,
) => (as: ReadonlyArray<A>) => ReaderEither<R, E, ReadonlyArray<B>>
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
export declare const traverseReadonlyArrayWithIndex: <A, R, E, B>(
  f: (index: number, a: A) => ReaderEither<R, E, B>,
) => (as: readonly A[]) => ReaderEither<R, E, readonly B[]>
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
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, R, E, B>(
  f: (index: number, a: A) => ReaderEither<R, E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => ReaderEither<R, E, ReadonlyNonEmptyArray<B>>
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
export declare const URI = 'ReaderEither'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: ReaderEither<unknown, never, readonly []>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <R, E, A>(
  fa: ReaderEither<R, E, A>,
) => <B>(fab: ReaderEither<R, E, (a: A) => B>) => ReaderEither<R, E, B>
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
export declare const apFirst: <R, E, B>(
  second: ReaderEither<R, E, B>,
) => <A>(first: ReaderEither<R, E, A>) => ReaderEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirstW`

Less strict version of [`apFirst`](#apfirst)


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apFirstW: <R2, E2, B>(
  second: ReaderEither<R2, E2, B>,
) => <R1, E1, A>(first: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, A>
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
export declare const apSecond: <R, E, B>(
  second: ReaderEither<R, E, B>,
) => <A>(first: ReaderEither<R, E, A>) => ReaderEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecondW`

Less strict version of [`apSecond`](#apsecond)


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apSecondW: <R2, E2, B>(
  second: ReaderEither<R2, E2, B>,
) => <R1, E1, A>(first: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apW`

Less strict version of [`ap`](#ap).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apW: <R2, E2, A>(
  fa: ReaderEither<R2, E2, A>,
) => <R1, E1, B>(fab: ReaderEither<R1, E1, (a: A) => B>) => ReaderEither<R1 & R2, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends ReaderEitherIterable<any, any, any>, A>(
  yieldFunction: (unwrap: <R, E, A>(ma: ReaderEither<R, E, A>) => ReaderEitherIterable<R, E, A>) => Generator<MA, A>,
) => ReaderEither<
  _.UnionToIntersection<MA extends ReaderEitherIterable<infer R, any, any> ? R : never>,
  MA extends ReaderEitherIterable<any, infer E, any> ? E : never,
  A
>
```




---


### ~~`getApplyMonoid`~~

Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.




#### Signature

```typescript
export declare const getApplyMonoid: <R, E, A>(M: Monoid<A>) => Monoid<ReaderEither<R, E, A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getApplySemigroup`~~

Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.




#### Signature

```typescript
export declare const getApplySemigroup: <R, E, A>(S: Semigroup<A>) => Semigroup<ReaderEither<R, E, A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getReaderValidation`~~

Use [`getApplicativeReaderValidation`](#getapplicativereadervalidation) and [`getAltReaderValidation`](#getaltreadervalidation) instead.




#### Signature

```typescript
export declare function getReaderValidation<E>(
  SE: Semigroup<E>,
): Monad3C<URI, E> & Bifunctor3<URI> & Alt3C<URI, E> & MonadThrow3C<URI, E>

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
export declare const getSemigroup: <R, E, A>(S: Semigroup<A>) => Semigroup<ReaderEither<R, E, A>>
```

#### Details

* Added in 0.1.0
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
) => <R, E>(
  fa: ReaderEither<R, E, A>,
) => ReaderEither<R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `local`

Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s `contramap`).




#### Signature

```typescript
export declare const local: <R2, R1>(f: (r2: R2) => R1) => <E, A>(ma: ReaderEither<R1, E, A>) => ReaderEither<R2, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`readerEither`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `RE.Functor` instead of `RE.readerEither` (where `R` is from `import R from 'fp-ts/ReaderEither'`)




#### Signature

```typescript
export declare const readerEither: Monad3<URI> & Bifunctor3<URI> & Alt3<URI> & MonadThrow3<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `swap`




#### Signature

```typescript
export declare const swap: <R, E, A>(ma: ReaderEither<R, E, A>) => ReaderEither<R, A, E>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `throwError`




#### Signature

```typescript
export declare const throwError: MonadThrow3<URI>['throwError']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti