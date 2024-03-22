
# ReaderTaskEither







### Instances

* [Alt](#alt)
* [ApplicativePar](#applicativepar)
* [ApplicativeSeq](#applicativeseq)
* [ApplyPar](#applypar)
* [ApplySeq](#applyseq)
* [Bifunctor](#bifunctor)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [FromEither](#fromeither)
* [FromIO](#fromio)
* [FromReader](#fromreader)
* [FromTask](#fromtask)
* [Functor](#functor)
* [Monad](#monad)
* [MonadIO](#monadio)
* [MonadTask](#monadtask)
* [MonadThrow](#monadthrow)
* [Pointed](#pointed)
* ~~[getReaderTaskValidation](#getreadertaskvalidation)~~ (deprecated)

### Combinators

* [tap](#tap)
* [tapEither](#tapeither)
* [tapIO](#tapio)
* [tapReader](#tapreader)
* [tapReaderEither](#tapreadereither)
* [tapReaderIO](#tapreaderio)
* [tapReaderTask](#tapreadertask)
* [tapTask](#taptask)
* [tapTaskEither](#taptaskeither)

### Constructors

* [ask](#ask)
* [asks](#asks)
* [asksReaderTaskEither](#asksreadertaskeither)
* [asksReaderTaskEitherW](#asksreadertaskeitherw)
* [left](#left)
* [leftIO](#leftio)
* [leftReader](#leftreader)
* [leftReaderIO](#leftreaderio)
* [leftReaderTask](#leftreadertask)
* [leftTask](#lefttask)
* [of](#of)
* [right](#right)
* [rightIO](#rightio)
* [rightReader](#rightreader)
* [rightReaderIO](#rightreaderio)
* [rightReaderTask](#rightreadertask)
* [rightTask](#righttask)

### Conversions

* [fromEither](#fromeither)
* [fromIO](#fromio)
* [fromIOEither](#fromioeither)
* [fromNullable](#fromnullable)
* [fromOption](#fromoption)
* [fromReader](#fromreader)
* [fromReaderEither](#fromreadereither)
* [fromTask](#fromtask)
* [fromTaskEither](#fromtaskeither)
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
* [getAltReaderTaskValidation](#getaltreadertaskvalidation)
* [getApplicativeReaderTaskValidation](#getapplicativereadertaskvalidation)
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
* [chainFirstIOK](#chainfirstiok)
* [chainFirstReaderEitherK](#chainfirstreadereitherk)
* [chainFirstReaderEitherKW](#chainfirstreadereitherkw)
* [chainFirstReaderIOK](#chainfirstreaderiok)
* [chainFirstReaderIOKW](#chainfirstreaderiokw)
* [chainFirstReaderK](#chainfirstreaderk)
* [chainFirstReaderKW](#chainfirstreaderkw)
* [chainFirstReaderTaskK](#chainfirstreadertaskk)
* [chainFirstReaderTaskKW](#chainfirstreadertaskkw)
* [chainFirstTaskEitherK](#chainfirsttaskeitherk)
* [chainFirstTaskEitherKW](#chainfirsttaskeitherkw)
* [chainFirstTaskK](#chainfirsttaskk)
* [chainFirstW](#chainfirstw)
* [chainIOEitherK](#chainioeitherk)
* [chainIOEitherKW](#chainioeitherkw)
* [chainIOK](#chainiok)
* [chainNullableK](#chainnullablek)
* [chainOptionK](#chainoptionk)
* [chainOptionKW](#chainoptionkw)
* [chainReaderEitherK](#chainreadereitherk)
* [chainReaderEitherKW](#chainreadereitherkw)
* [chainReaderIOK](#chainreaderiok)
* [chainReaderIOKW](#chainreaderiokw)
* [chainReaderK](#chainreaderk)
* [chainReaderKW](#chainreaderkw)
* [chainReaderTaskK](#chainreadertaskk)
* [chainReaderTaskKW](#chainreadertaskkw)
* [chainTaskEitherK](#chaintaskeitherk)
* [chainTaskEitherKW](#chaintaskeitherkw)
* [chainTaskK](#chaintaskk)
* [chainW](#chainw)
* [fromNullableK](#fromnullablek)
* [fromOptionK](#fromoptionk)
* [mapLeft](#mapleft)
* [orElseFirst](#orelsefirst)
* [orElseFirstW](#orelsefirstw)

### Lifting

* [fromEitherK](#fromeitherk)
* [fromIOEitherK](#fromioeitherk)
* [fromIOK](#fromiok)
* [fromPredicate](#frompredicate)
* [fromReaderEitherK](#fromreadereitherk)
* [fromReaderIOK](#fromreaderiok)
* [fromReaderK](#fromreaderk)
* [fromReaderTaskK](#fromreadertaskk)
* [fromTaskEitherK](#fromtaskeitherk)
* [fromTaskK](#fromtaskk)
* [liftNullable](#liftnullable)
* [liftOption](#liftoption)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [flap](#flap)
* [map](#map)

### Model

* [ReaderTaskEither](#readertaskeither)

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
* [flatMapIO](#flatmapio)
* [flatMapIOEither](#flatmapioeither)
* [flatMapNullable](#flatmapnullable)
* [flatMapOption](#flatmapoption)
* [flatMapReader](#flatmapreader)
* [flatMapReaderEither](#flatmapreadereither)
* [flatMapReaderIO](#flatmapreaderio)
* [flatMapReaderTask](#flatmapreadertask)
* [flatMapTask](#flatmaptask)
* [flatMapTaskEither](#flatmaptaskeither)
* [flatten](#flatten)
* [flattenW](#flattenw)

### Traversing

* [sequenceArray](#sequencearray)
* [sequenceSeqArray](#sequenceseqarray)
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
* [apFirstW](#apfirstw)
* [apSecond](#apsecond)
* [apSecondW](#apsecondw)
* [apW](#apw)
* [bracket](#bracket)
* [bracketW](#bracketw)
* [do](#do)
* ~~[getApplyMonoid](#getapplymonoid)~~ (deprecated)
* ~~[getApplySemigroup](#getapplysemigroup)~~ (deprecated)
* ~~[getSemigroup](#getsemigroup)~~ (deprecated)
* [let](#let)
* [local](#local)
* ~~[readerTaskEither](#readertaskeither)~~ (deprecated)
* ~~[readerTaskEitherSeq](#readertaskeitherseq)~~ (deprecated)
* ~~[run](#run)~~ (deprecated)
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


### `ApplicativePar`

Runs computations in parallel.




#### Signature

```typescript
export declare const ApplicativePar: Applicative3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplicativeSeq`

Runs computations sequentially.




#### Signature

```typescript
export declare const ApplicativeSeq: Applicative3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplyPar`

Runs computations in parallel.




#### Signature

```typescript
export declare const ApplyPar: Apply3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplySeq`

Runs computations sequentially.




#### Signature

```typescript
export declare const ApplySeq: Apply3<URI>
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

ChainRec for `ReaderTaskEither`




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


### `FromIO`




#### Signature

```typescript
export declare const FromIO: FromIO3<URI>
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


### `FromTask`




#### Signature

```typescript
export declare const FromTask: FromTask3<URI>
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


### `MonadIO`




#### Signature

```typescript
export declare const MonadIO: MonadIO3<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask`




#### Signature

```typescript
export declare const MonadTask: MonadTask3<URI>
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

---


### ~~`getReaderTaskValidation`~~

Use [`getApplicativeReaderTaskValidation`](#getapplicativereadertaskvalidation) and [`getAltReaderTaskValidation`](#getaltreadertaskvalidation) instead.




#### Signature

```typescript
export declare function getReaderTaskValidation<E>(
  SE: Semigroup<E>,
): Monad3C<URI, E> & Bifunctor3<URI> & Alt3C<URI, E> & MonadTask3C<URI, E> & MonadThrow3C<URI, E>

```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Combinators


### `tap`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tap: {
  <R1, E1, A, R2, E2, _>(
    self: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderTaskEither<R2, E2, _>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, A>
  <A, R2, E2, _>(
    f: (a: A) => ReaderTaskEither<R2, E2, _>,
  ): <R1, E1>(self: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E2 | E1, A>
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
  <A, E2, _>(f: (a: A) => Either<E2, _>): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A>
  <R, E1, A, E2, _>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => Either<E2, _>): ReaderTaskEither<R, E1 | E2, A>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as RTE from '@fp-tx/core/ReaderTaskEither'

const checkString = (value: string) =>
  pipe(
    RTE.ask<number>(),
    RTE.tapEither(minLength => (value.length > minLength ? E.right('ok') : E.left('error'))),
  )

async function test() {
  assert.deepStrictEqual(await checkString('')(2)(), E.left('error'))
  assert.deepStrictEqual(await checkString('fp-ts')(2)(), E.right(2))
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapIO`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapIO: {
  <A, _>(f: (a: A) => IO<_>): <R, E>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
  <R, E, A, _>(self: ReaderTaskEither<R, E, A>, f: (a: A) => IO<_>): ReaderTaskEither<R, E, A>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RTE from '@fp-tx/core/ReaderTaskEither'
import * as E from '@fp-tx/core/Either'
import * as Console from '@fp-tx/core/Console'

// Will produce `Hello, fp-ts` to the stdout
const effect = RTE.tapIO(RTE.ask<string>(), value => Console.log(`Hello, ${value}`))

async function test() {
  assert.deepStrictEqual(await effect('fp-ts')(), E.of('fp-ts'))
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
  <A, R2, _>(f: (a: A) => Reader<R2, _>): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A>
  <R1, E, A, R2, _>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => Reader<R2, _>): ReaderTaskEither<R1 & R2, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapReaderEither`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapReaderEither: {
  <A, R2, E2, _>(
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): <R1, E1>(self: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A>
  <R1, E1, A, R2, E2, _>(
    self: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapReaderIO`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapReaderIO: {
  <A, R2, _>(f: (a: A) => ReaderIO<R2, _>): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A>
  <R1, E, A, R2, _>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderIO<R2, _>): ReaderTaskEither<R1 & R2, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapReaderTask`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapReaderTask: {
  <A, R2, _>(
    f: (a: A) => ReaderTask<R2, _>,
  ): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A>
  <R1, E, A, R2, _>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderTask<R2, _>): ReaderTaskEither<R1 & R2, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapTask`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapTask: {
  <A, _>(f: (a: A) => Task<_>): <R, E>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
  <R, E, A, _>(self: ReaderTaskEither<R, E, A>, f: (a: A) => Task<_>): ReaderTaskEither<R, E, A>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RTE from '@fp-tx/core/ReaderTaskEither'
import * as E from '@fp-tx/core/Either'
import * as T from '@fp-tx/core/Task'

const effect = RTE.tapTask(RTE.ask<number>(), value => T.of(value + 1))

async function test() {
  assert.deepStrictEqual(await effect(1)(), E.of(1))
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapTaskEither`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapTaskEither: {
  <A, E2, _>(
    f: (a: A) => TaskEither<E2, _>,
  ): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A>
  <R, E1, A, E2, _>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => TaskEither<E2, _>): ReaderTaskEither<R, E1 | E2, A>
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
export declare const ask: <R, E = never>() => ReaderTaskEither<R, E, R>
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
export declare const asks: <R, A, E = never>(f: (r: R) => A) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksReaderTaskEither`

Effectfully accesses the environment.




#### Signature

```typescript
export declare const asksReaderTaskEither: <R, E, A>(
  f: (r: R) => ReaderTaskEither<R, E, A>,
) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksReaderTaskEitherW`

Less strict version of [`asksReaderTaskEither`](#asksreadertaskeither).


The `W` suffix (short for **W**idening) means that the environment types will be merged.




#### Signature

```typescript
export declare const asksReaderTaskEitherW: <R1, R2, E, A>(
  f: (r1: R1) => ReaderTaskEither<R2, E, A>,
) => ReaderTaskEither<R1 & R2, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `left`




#### Signature

```typescript
export declare const left: <R, E = never, A = never>(e: E) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftIO`




#### Signature

```typescript
export declare const leftIO: <R, E = never, A = never>(me: IO<E>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftReader`




#### Signature

```typescript
export declare const leftReader: <R, E = never, A = never>(me: Reader<R, E>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftReaderIO`




#### Signature

```typescript
export declare const leftReaderIO: <R, E = never, A = never>(me: ReaderIO<R, E>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftReaderTask`




#### Signature

```typescript
export declare const leftReaderTask: <R, E = never, A = never>(me: ReaderTask<R, E>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftTask`




#### Signature

```typescript
export declare const leftTask: <R, E = never, A = never>(me: Task<E>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <R = unknown, E = never, A = never>(a: A) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`




#### Signature

```typescript
export declare const right: <R, E = never, A = never>(a: A) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightIO`




#### Signature

```typescript
export declare const rightIO: <R, E = never, A = never>(ma: IO<A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightReader`




#### Signature

```typescript
export declare const rightReader: <R, E = never, A = never>(ma: Reader<R, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightReaderIO`




#### Signature

```typescript
export declare const rightReaderIO: <R, E = never, A = never>(ma: ReaderIO<R, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightReaderTask`




#### Signature

```typescript
export declare const rightReaderTask: <R, E = never, A = never>(ma: ReaderTask<R, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightTask`




#### Signature

```typescript
export declare const rightTask: <R, E = never, A = never>(ma: Task<A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEither`




#### Signature

```typescript
export declare const fromEither: <E, A, R = unknown>(fa: Either<E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIO`




#### Signature

```typescript
export declare const fromIO: <A, R = unknown, E = never>(fa: IO<A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOEither`




#### Signature

```typescript
export declare const fromIOEither: <E, A, R = unknown>(fa: IOEither<E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromNullable`




#### Signature

```typescript
export declare const fromNullable: <E>(e: E) => <R, A>(a: A) => ReaderTaskEither<R, E, NonNullable<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <E>(onNone: LazyArg<E>) => <A, R = unknown>(fa: Option<A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReader`




#### Signature

```typescript
export declare const fromReader: <R, A, E = never>(fa: Reader<R, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderEither`




#### Signature

```typescript
export declare const fromReaderEither: <R, E, A>(fa: ReaderEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTask`




#### Signature

```typescript
export declare const fromTask: <A, R = unknown, E = never>(fa: Task<A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskEither`




#### Signature

```typescript
export declare const fromTaskEither: <E, A, R = unknown>(fa: TaskEither<E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUnion`




#### Signature

```typescript
export declare const toUnion: <R, E, A>(fa: ReaderTaskEither<R, E, A>) => ReaderTask<R, E | A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: ReaderTaskEither<unknown, never, {}>
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
  fb: ReaderTaskEither<R, E, B>,
) => (
  fa: ReaderTaskEither<R, E, A>,
) => ReaderTaskEither<R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
  fb: ReaderTaskEither<R2, E2, B>,
) => <R1, E1>(
  fa: ReaderTaskEither<R1, E1, A>,
) => ReaderTaskEither<
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
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => (
  ma: ReaderTaskEither<R, E, A>,
) => ReaderTaskEither<R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
) => <R, E, A>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, { readonly [K in N]: A }>
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
  f: (a: A) => ReaderTaskEither<R2, E2, B>,
) => <R1, E1>(
  fa: ReaderTaskEither<R1, E1, A>,
) => ReaderTaskEither<
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
  that: () => ReaderTaskEither<R, E, A>,
) => (fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
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
  that: () => ReaderTaskEither<R2, E2, B>,
) => <R1, E1, A>(fa: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E2, A | B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getAltReaderTaskValidation`

The default [`Alt`](#alt) instance returns the last error, if you want to get all errors you need to provide a way to concatenate them via a `Semigroup`.


See [`getAltValidation`](./Either#getaltvalidation).




#### Signature

```typescript
export declare function getAltReaderTaskValidation<E>(S: Semigroup<E>): Alt3C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicativeReaderTaskValidation`

The default [`ApplicativePar`](#applicativepar) instance returns the first error, if you want to get all errors you need to provide a way to concatenate them via a `Semigroup`.


See [`getApplicativeValidation`](./Either#getapplicativevalidation).




#### Signature

```typescript
export declare function getApplicativeReaderTaskValidation<E>(A: Apply1<T.URI>, S: Semigroup<E>): Applicative3C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElse`




#### Signature

```typescript
export declare const getOrElse: <R, E, A>(
  onLeft: (e: E) => ReaderTask<R, A>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, A>
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
  onLeft: (e: E) => ReaderTask<R2, B>,
) => <R1, A>(ma: ReaderTaskEither<R1, E, A>) => ReaderTask<R1 & R2, A | B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapBoth`

Returns a `ReaderTaskEither` whose failure and success channels have been mapped by the specified pair of functions, `f` and `g`.




#### Signature

```typescript
export declare const mapBoth: {
  <E, G, A, B>(f: (e: E) => G, g: (a: A) => B): <R>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, B>
  <R, E, A, G, B>(self: ReaderTaskEither<R, E, A>, f: (e: E) => G, g: (a: A) => B): ReaderTaskEither<R, G, B>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as ReaderTaskEither from '@fp-tx/core/ReaderTaskEither'
import * as Either from '@fp-tx/core/Either'

const f = (s: string) => new Error(s)
const g = (n: number) => n * 2

async function test() {
  assert.deepStrictEqual(await ReaderTaskEither.mapBoth(ReaderTaskEither.right(1), f, g)({})(), Either.right(2))
  assert.deepStrictEqual(
    await ReaderTaskEither.mapBoth(ReaderTaskEither.left('err'), f, g)({})(),
    Either.left(new Error('err')),
  )
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapError`

Returns a `ReaderTaskEither` with its error channel mapped using the specified function.




#### Signature

```typescript
export declare const mapError: {
  <R, E, G>(f: (e: E) => G): <A>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, A>
  <R, E, A, G>(self: ReaderTaskEither<R, E, A>, f: (e: E) => G): ReaderTaskEither<R, G, A>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as ReaderTaskEither from '@fp-tx/core/ReaderTaskEither'
import * as Either from '@fp-tx/core/Either'

const f = (s: string) => new Error(s)

async function test() {
  assert.deepStrictEqual(await ReaderTaskEither.mapError(ReaderTaskEither.right(1), f)({})(), Either.right(1))
  assert.deepStrictEqual(
    await ReaderTaskEither.mapError(ReaderTaskEither.left('err'), f)({})(),
    Either.left(new Error('err')),
  )
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElse`




#### Signature

```typescript
export declare const orElse: <R, E1, A, E2>(
  onLeft: (e: E1) => ReaderTaskEither<R, E2, A>,
) => (ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E2, A>
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
  onLeft: (e: E1) => ReaderTaskEither<R1, E2, B>,
) => <R2, A>(ma: ReaderTaskEither<R2, E1, A>) => ReaderTaskEither<R1 & R2, E2, A | B>
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
  onLeft: (e: E1) => ReaderTask<R, E2>,
) => <A>(fa: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E2, A>
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
    onLeft: (e: E1) => ReaderTaskEither<R2, E2, _>,
  ): <R1, A>(self: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A>
  <R1, E1, A, R2, E2, _>(
    self: ReaderTaskEither<R1, E1, A>,
    onLeft: (e: E1) => ReaderTaskEither<R2, E2, _>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, A>
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
  ): <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <R, B extends A>(mb: ReaderTaskEither<R, E, B>) => ReaderTaskEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
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
  ): <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <R, E1, B extends A>(mb: ReaderTaskEither<R, E1, B>) => ReaderTaskEither<R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A>
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
export declare const getCompactable: <E>(M: Monoid<E>) => Compactable3C<'ReaderTaskEither', E>
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
) => <R>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, B>
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
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
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
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
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
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
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
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
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
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstEitherKW`

Alias of `tapEither`.


Less strict version of [`chainFirstEitherK`](#chainfirsteitherk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => Either<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstIOK`

Alias of `tapIO`.




#### Signature

```typescript
export declare const chainFirstIOK: <A, B>(
  f: (a: A) => IO<B>,
) => <R, E>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderEitherK`

Alias of `tapReaderEither`.




#### Signature

```typescript
export declare const chainFirstReaderEitherK: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderEitherKW`

Alias of `tapReaderEither`.


Less strict version of [`chainFirstReaderEitherK`](#chainfirstreadereitherk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainFirstReaderEitherKW: <R2, E2, A, B>(
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderIOK`

Alias of `tapReaderIO`.




#### Signature

```typescript
export declare const chainFirstReaderIOK: <A, R, B>(
  f: (a: A) => ReaderIO<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


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
) => <R1, E>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A>
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
  f: (a: A) => R.Reader<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderKW`

Alias of `tapReader`.


Less strict version of [`chainFirstReaderK`](#chainfirstreaderk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2, E>(ma: ReaderTaskEither<R2, E, A>) => ReaderTaskEither<R1 & R2, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderTaskK`

Alias of `tapReaderTask`.




#### Signature

```typescript
export declare const chainFirstReaderTaskK: <A, R, B>(
  f: (a: A) => RT.ReaderTask<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderTaskKW`

Alias of `tapReaderTask`.


Less strict version of [`chainFirstReaderTaskK`](#chainfirstreadertaskk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainFirstReaderTaskKW: <A, R2, B>(
  f: (a: A) => RT.ReaderTask<R2, B>,
) => <R1, E>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstTaskEitherK`

Alias of `tapTaskEither`.




#### Signature

```typescript
export declare const chainFirstTaskEitherK: <E, A, B>(
  f: (a: A) => TaskEither<E, B>,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstTaskEitherKW`

Alias of `tapTaskEither`.


Less strict version of [`chainFirstTaskEitherK`](#chainfirsttaskeitherk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainFirstTaskEitherKW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstTaskK`

Alias of `tapTask`.




#### Signature

```typescript
export declare const chainFirstTaskK: <A, B>(
  f: (a: A) => T.Task<B>,
) => <R, E>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
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
  f: (a: A) => ReaderTaskEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOEitherK`

Alias of `flatMapIOEither`.




#### Signature

```typescript
export declare const chainIOEitherK: <E, A, B>(
  f: (a: A) => IOEither<E, B>,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOEitherKW`

Alias of `flatMapIOEither`.


Less strict version of [`chainIOEitherK`](#chainioeitherk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainIOEitherKW: <E2, A, B>(
  f: (a: A) => IOEither<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOK`

Alias of `flatMapIO`.




#### Signature

```typescript
export declare const chainIOK: <A, B>(
  f: (a: A) => IO<B>,
) => <R, E>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainNullableK`

Use `flatMapNullable`.




#### Signature

```typescript
export declare const chainNullableK: <E>(
  e: E,
) => <A, B>(
  f: (a: A) => B | null | undefined,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, NonNullable<B>>
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
) => <A, B>(f: (a: A) => Option<B>) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
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
) => <A, B>(f: (a: A) => Option<B>) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderEitherK`

Alias of `flatMapReaderEither`.




#### Signature

```typescript
export declare const chainReaderEitherK: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderEitherKW`

Alias of `flatMapReaderEither`.


Less strict version of [`chainReaderEitherK`](#chainreadereitherk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainReaderEitherKW: <R2, E2, A, B>(
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderIOK`

Alias of `flatMapReaderIO`.




#### Signature

```typescript
export declare const chainReaderIOK: <A, R, B>(
  f: (a: A) => ReaderIO<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


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
) => <R1, E>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B>
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
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderKW`

Alias of `flatMapReader`.


Less strict version of [`chainReaderK`](#chainreaderk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2, E>(ma: ReaderTaskEither<R2, E, A>) => ReaderTaskEither<R1 & R2, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderTaskK`

Alias of `flatMapReaderTask`.




#### Signature

```typescript
export declare const chainReaderTaskK: <A, R, B>(
  f: (a: A) => RT.ReaderTask<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderTaskKW`

Alias of `flatMapReaderTask`.


Less strict version of [`chainReaderTaskK`](#chainreadertaskk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainReaderTaskKW: <A, R2, B>(
  f: (a: A) => RT.ReaderTask<R2, B>,
) => <R1, E>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskEitherK`

Alias of `flatMapTaskEither`.




#### Signature

```typescript
export declare const chainTaskEitherK: <E, A, B>(
  f: (a: A) => TaskEither<E, B>,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskEitherKW`

Alias of `flatMapTaskEither`.


Less strict version of [`chainTaskEitherK`](#chaintaskeitherk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainTaskEitherKW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskK`

Alias of `flatMapTask`.




#### Signature

```typescript
export declare const chainTaskK: <A, B>(
  f: (a: A) => T.Task<B>,
) => <R, E>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
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
  f: (a: A) => ReaderTaskEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromNullableK`

Use `liftNullable`.




#### Signature

```typescript
export declare const fromNullableK: <E>(
  e: E,
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => <R = unknown>(...a: A) => ReaderTaskEither<R, E, NonNullable<B>>
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
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Option<B>,
) => <R = unknown>(...a: A) => ReaderTaskEither<R, E, B>
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
export declare const mapLeft: <E, G>(
  f: (e: E) => G,
) => <R, A>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, A>
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
  onLeft: (e: E) => ReaderTaskEither<R, E, B>,
) => <A>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
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
  onLeft: (e: E1) => ReaderTaskEither<R2, E2, B>,
) => <R1, A>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A>
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
) => <R = unknown>(...a: A) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOEitherK`




#### Signature

```typescript
export declare const fromIOEitherK: <E, A extends readonly unknown[], B>(
  f: (...a: A) => IOEither<E, B>,
) => <R = unknown>(...a: A) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOK`




#### Signature

```typescript
export declare const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <R = unknown, E = never>(...a: A) => ReaderTaskEither<R, E, B>
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
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <R = unknown>(a: A) => ReaderTaskEither<R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <R = unknown, B extends A = A>(b: B) => ReaderTaskEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R = unknown>(a: A) => ReaderTaskEither<R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderEitherK`




#### Signature

```typescript
export declare const fromReaderEitherK: <R, E, A extends readonly unknown[], B>(
  f: (...a: A) => ReaderEither<R, E, B>,
) => (...a: A) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderIOK`




#### Signature

```typescript
export declare const fromReaderIOK: <A extends readonly unknown[], R, B>(
  f: (...a: A) => ReaderIO<R, B>,
) => <E = never>(...a: A) => ReaderTaskEither<R, E, B>
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
) => <E = never>(...a: A) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderTaskK`




#### Signature

```typescript
export declare const fromReaderTaskK: <A extends readonly unknown[], R, B>(
  f: (...a: A) => RT.ReaderTask<R, B>,
) => <E = never>(...a: A) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskEitherK`




#### Signature

```typescript
export declare const fromTaskEitherK: <E, A extends readonly unknown[], B>(
  f: (...a: A) => TE.TaskEither<E, B>,
) => <R = unknown>(...a: A) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskK`




#### Signature

```typescript
export declare const fromTaskK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => T.Task<B>,
) => <R = unknown, E = never>(...a: A) => ReaderTaskEither<R, E, B>
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
) => <R>(...a: A) => ReaderTaskEither<R, E, NonNullable<B>>
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
) => <R>(...a: A) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the `Right` value of this `ReaderTaskEither` to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <R, E, _>(self: ReaderTaskEither<R, E, _>) => ReaderTaskEither<R, E, A>
  <R, E, _, A>(self: ReaderTaskEither<R, E, _>, a: A): ReaderTaskEither<R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the `Right` value of this `ReaderTaskEither` to the void constant value.




#### Signature

```typescript
export declare const asUnit: <R, E, _>(self: ReaderTaskEither<R, E, _>) => ReaderTaskEither<R, E, void>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <R, E, B>(fab: ReaderTaskEither<R, E, (a: A) => B>) => ReaderTaskEither<R, E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <R, E>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `ReaderTaskEither`




#### Signature

```typescript
export interface ReaderTaskEither<R, E, A> {
  (r: R): TaskEither<E, A>
}
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
  onLeft: (e: E) => RT.ReaderTask<R, B>,
  onRight: (a: A) => RT.ReaderTask<R, B>,
) => (ma: ReaderTaskEither<R, E, A>) => RT.ReaderTask<R, B>
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
  onLeft: (e: E) => RT.ReaderTask<R2, B>,
  onRight: (a: A) => RT.ReaderTask<R3, C>,
) => <R1>(ma: ReaderTaskEither<R1, E, A>) => RT.ReaderTask<R1 & R2 & R3, B | C>
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
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchE`

The `E` suffix (short for **E**ffect) means that the handlers return an effect (`ReaderTask`).




#### Signature

```typescript
export declare const matchE: <R, E, A, B>(
  onLeft: (e: E) => ReaderTask<R, B>,
  onRight: (a: A) => ReaderTask<R, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, B>
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
  onLeft: (e: E) => ReaderTask<R2, B>,
  onRight: (a: A) => ReaderTask<R3, C>,
) => <R1>(ma: ReaderTaskEither<R1, E, A>) => ReaderTask<R1 & R2 & R3, B | C>
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
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, B | C>
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
    f: (a: A) => ReaderTaskEither<R2, E2, B>,
  ): <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B>
  <R1, E1, A, R2, E2, B>(
    ma: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderTaskEither<R2, E2, B>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, B>
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
  <A, E2, B>(f: (a: A) => E.Either<E2, B>): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
  <R, E1, A, E2, B>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => E.Either<E2, B>): ReaderTaskEither<R, E1 | E2, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapIO`




#### Signature

```typescript
export declare const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): <R, E>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
  <R, E, A, B>(self: ReaderTaskEither<R, E, A>, f: (a: A) => IO<B>): ReaderTaskEither<R, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapIOEither`




#### Signature

```typescript
export declare const flatMapIOEither: {
  <A, E2, B>(f: (a: A) => IOEither<E2, B>): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
  <R, E1, A, E2, B>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => IOEither<E2, B>): ReaderTaskEither<R, E1 | E2, B>
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
  ): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E2 | E1, NonNullable<B>>
  <R, E1, A, B, E2>(
    self: ReaderTaskEither<R, E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): ReaderTaskEither<R, E1 | E2, NonNullable<B>>
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
  ): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E2 | E1, B>
  <R, E1, A, B, E2>(
    self: ReaderTaskEither<R, E1, A>,
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): ReaderTaskEither<R, E1 | E2, B>
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
  <A, R2, B>(f: (a: A) => Reader<R2, B>): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B>
  <R1, E, A, R2, B>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => Reader<R2, B>): ReaderTaskEither<R1 & R2, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapReaderEither`




#### Signature

```typescript
export declare const flatMapReaderEither: {
  <A, R2, E2, B>(
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): <R1, E1>(self: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B>
  <R1, E1, A, R2, E2, B>(
    self: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapReaderIO`




#### Signature

```typescript
export declare const flatMapReaderIO: {
  <A, R2, B>(f: (a: A) => ReaderIO<R2, B>): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B>
  <R1, E, A, R2, B>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderIO<R2, B>): ReaderTaskEither<R1 & R2, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapReaderTask`




#### Signature

```typescript
export declare const flatMapReaderTask: {
  <A, R2, B>(
    f: (a: A) => ReaderTask<R2, B>,
  ): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B>
  <R1, E, A, R2, B>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderTask<R2, B>): ReaderTaskEither<R1 & R2, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapTask`




#### Signature

```typescript
export declare const flatMapTask: {
  <A, B>(f: (a: A) => Task<B>): <R, E>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
  <R, E, A, B>(self: ReaderTaskEither<R, E, A>, f: (a: A) => Task<B>): ReaderTaskEither<R, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapTaskEither`




#### Signature

```typescript
export declare const flatMapTaskEither: {
  <A, E2, B>(
    f: (a: A) => TaskEither<E2, B>,
  ): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
  <R, E1, A, E2, B>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => TaskEither<E2, B>): ReaderTaskEither<R, E1 | E2, B>
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
export declare const flatten: <R, E, A>(
  mma: ReaderTaskEither<R, E, ReaderTaskEither<R, E, A>>,
) => ReaderTaskEither<R, E, A>
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
export declare const flattenW: <R1, E1, R2, E2, A>(
  mma: ReaderTaskEither<R1, E1, ReaderTaskEither<R2, E2, A>>,
) => ReaderTaskEither<R1 & R2, E1 | E2, A>
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
  arr: ReadonlyArray<ReaderTaskEither<R, E, A>>,
) => ReaderTaskEither<R, E, ReadonlyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sequenceSeqArray`

Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.




#### Signature

```typescript
export declare const sequenceSeqArray: <R, E, A>(
  arr: ReadonlyArray<ReaderTaskEither<R, E, A>>,
) => ReaderTaskEither<R, E, ReadonlyArray<A>>
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
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => (as: readonly A[]) => ReaderTaskEither<R, E, readonly B[]>
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
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
) => (as: ReadonlyArray<A>) => ReaderTaskEither<R, E, ReadonlyArray<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <A, R, E, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
) => (as: readonly A[]) => ReaderTaskEither<R, E, readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndexSeq`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndexSeq: <A, R, E, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
) => (as: readonly A[]) => ReaderTaskEither<R, E, readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndex`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, R, E, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => ReaderTaskEither<R, E, ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndexSeq`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndexSeq: <A, R, E, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => ReaderTaskEither<R, E, ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseSeqArray`

Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseSeqArray: <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => (as: readonly A[]) => ReaderTaskEither<R, E, readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseSeqArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseSeqArrayWithIndex: <R, E, A, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
) => (as: ReadonlyArray<A>) => ReaderTaskEither<R, E, ReadonlyArray<B>>
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
export declare const URI = 'ReaderTaskEither'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: ReaderTaskEither<unknown, never, readonly []>
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
  fa: ReaderTaskEither<R, E, A>,
) => <B>(fab: ReaderTaskEither<R, E, (a: A) => B>) => ReaderTaskEither<R, E, B>
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
  second: ReaderTaskEither<R, E, B>,
) => <A>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirstW`

Less strict version of [`apFirst`](#apfirst).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apFirstW: <R2, E2, B>(
  second: ReaderTaskEither<R2, E2, B>,
) => <R1, E1, A>(first: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A>
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
  second: ReaderTaskEither<R, E, B>,
) => <A>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecondW`

Less strict version of [`apSecond`](#apsecond).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apSecondW: <R2, E2, B>(
  second: ReaderTaskEither<R2, E2, B>,
) => <R1, E1, A>(first: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B>
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
  fa: ReaderTaskEither<R2, E2, A>,
) => <R1, E1, B>(fab: ReaderTaskEither<R1, E1, (a: A) => B>) => ReaderTaskEither<R1 & R2, E1 | E2, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bracket`

Make sure that a resource is cleaned up in the event of an exception (_). The release action is called regardless of whether the body action throws (_) or returns.


(*) i.e. returns a `Left`




#### Signature

```typescript
export declare function bracket<R, E, A, B>(
  acquire: ReaderTaskEither<R, E, A>,
  use: (a: A) => ReaderTaskEither<R, E, B>,
  release: (a: A, e: Either<E, B>) => ReaderTaskEither<R, E, void>,
): ReaderTaskEither<R, E, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bracketW`

Less strict version of [`bracket`](#bracket).




#### Signature

```typescript
export declare function bracketW<R1, E1, A, R2, E2, B, R3, E3>(
  acquire: ReaderTaskEither<R1, E1, A>,
  use: (a: A) => ReaderTaskEither<R2, E2, B>,
  release: (a: A, e: Either<E2, B>) => ReaderTaskEither<R3, E3, void>,
): ReaderTaskEither<R1 & R2 & R3, E1 | E2 | E3, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends ReaderTaskEitherIterable<any, any, any>, A>(
  yieldFunction: (
    unwrap: <R, E, A>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEitherIterable<R, E, A>,
  ) => Generator<MA, A>,
) => ReaderTaskEither<
  _.UnionToIntersection<MA extends ReaderTaskEitherIterable<infer R, any, any> ? R : never>,
  MA extends ReaderTaskEitherIterable<any, infer E, any> ? E : never,
  A
>
```




---


### ~~`getApplyMonoid`~~

Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.




#### Signature

```typescript
export declare const getApplyMonoid: <R, E, A>(M: Monoid<A>) => Monoid<ReaderTaskEither<R, E, A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getApplySemigroup`~~

Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.


Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values are concatenated using the provided `Semigroup`




#### Signature

```typescript
export declare const getApplySemigroup: <R, E, A>(S: Semigroup<A>) => Semigroup<ReaderTaskEither<R, E, A>>
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
export declare const getSemigroup: <R, E, A>(S: Semigroup<A>) => Semigroup<ReaderTaskEither<R, E, A>>
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
  fa: ReaderTaskEither<R, E, A>,
) => ReaderTaskEither<R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `local`

Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s `contramap`).




#### Signature

```typescript
export declare const local: <R2, R1>(
  f: (r2: R2) => R1,
) => <E, A>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R2, E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`readerTaskEither`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `RTE.Functor` instead of `RTE.readerTaskEither`




#### Signature

```typescript
export declare const readerTaskEither: Monad3<URI> & Bifunctor3<URI> & Alt3<URI> & MonadTask3<URI> & MonadThrow3<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`readerTaskEitherSeq`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `RTE.Functor` instead of `RTE.readerTaskEitherSeq`




#### Signature

```typescript
export declare const readerTaskEitherSeq: typeof readerTaskEither
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`run`~~




#### Signature

```typescript
export declare function run<R, E, A>(ma: ReaderTaskEither<R, E, A>, r: R): Promise<Either<E, A>>

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
export declare const swap: <R, E, A>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, A, E>
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