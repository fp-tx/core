
# TaskEither







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
* [FromTask](#fromtask)
* [Functor](#functor)
* [Monad](#monad)
* [MonadIO](#monadio)
* [MonadTask](#monadtask)
* [MonadThrow](#monadthrow)
* [Pointed](#pointed)

### Combinators

* [tap](#tap)
* [tapEither](#tapeither)
* [tapIO](#tapio)
* [tapTask](#taptask)

### Constructors

* [left](#left)
* [leftIO](#leftio)
* [leftTask](#lefttask)
* [of](#of)
* [right](#right)
* [rightIO](#rightio)
* [rightTask](#righttask)

### Conversions

* [fromEither](#fromeither)
* [fromIO](#fromio)
* [fromIOEither](#fromioeither)
* [fromNullable](#fromnullable)
* [fromOption](#fromoption)
* [fromTask](#fromtask)
* [fromTaskOption](#fromtaskoption)
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
* [getAltTaskValidation](#getalttaskvalidation)
* [getApplicativeTaskValidation](#getapplicativetaskvalidation)
* [getOrElse](#getorelse)
* [getOrElseW](#getorelsew)
* [mapBoth](#mapboth)
* [mapError](#maperror)
* [orElse](#orelse)
* [orElseFirstIOK](#orelsefirstiok)
* [orElseFirstTaskK](#orelsefirsttaskk)
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

### Interop

* [taskify](#taskify)
* [tryCatch](#trycatch)
* [tryCatchK](#trycatchk)

### Legacy

* [bimap](#bimap)
* [chain](#chain)
* [chainEitherK](#chaineitherk)
* [chainEitherKW](#chaineitherkw)
* [chainFirst](#chainfirst)
* [chainFirstEitherK](#chainfirsteitherk)
* [chainFirstEitherKW](#chainfirsteitherkw)
* [chainFirstIOK](#chainfirstiok)
* [chainFirstTaskK](#chainfirsttaskk)
* [chainFirstW](#chainfirstw)
* [chainIOEitherK](#chainioeitherk)
* [chainIOEitherKW](#chainioeitherkw)
* [chainIOK](#chainiok)
* [chainNullableK](#chainnullablek)
* [chainOptionK](#chainoptionk)
* [chainOptionKW](#chainoptionkw)
* [chainTaskK](#chaintaskk)
* [chainTaskOptionK](#chaintaskoptionk)
* [chainTaskOptionKW](#chaintaskoptionkw)
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
* [fromTaskK](#fromtaskk)
* [fromTaskOptionK](#fromtaskoptionk)
* [liftNullable](#liftnullable)
* [liftOption](#liftoption)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [flap](#flap)
* [map](#map)

### Model

* [TaskEither](#taskeither)

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
* [flatMapTask](#flatmaptask)
* [flatMapTaskOption](#flatmaptaskoption)
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
* ~~[getTaskValidation](#gettaskvalidation)~~ (deprecated)
* [let](#let)
* [swap](#swap)
* ~~[taskEither](#taskeither)~~ (deprecated)
* ~~[taskEitherSeq](#taskeitherseq)~~ (deprecated)
* [throwError](#throwerror)

## Instances


### `Alt`




#### Signature

```typescript
export declare const Alt: Alt2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


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


### `Bifunctor`




#### Signature

```typescript
export declare const Bifunctor: Bifunctor2<URI>
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

ChainRec for `TaskEither`




#### Signature

```typescript
export declare const ChainRec: ChainRec2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither`




#### Signature

```typescript
export declare const FromEither: FromEither2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

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


### `MonadThrow`




#### Signature

```typescript
export declare const MonadThrow: MonadThrow2<URI>
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
  <E1, A, E2, _>(self: TaskEither<E1, A>, f: (a: A) => TaskEither<E2, _>): TaskEither<E1 | E2, A>
  <A, E2, _>(f: (a: A) => TaskEither<E2, _>): <E1>(self: TaskEither<E1, A>) => TaskEither<E2 | E1, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapEither`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapEither: {
  <A, E2, _>(f: (a: A) => Either<E2, _>): <E1>(self: TaskEither<E1, A>) => TaskEither<E2 | E1, A>
  <E1, A, E2, _>(self: TaskEither<E1, A>, f: (a: A) => Either<E2, _>): TaskEither<E1 | E2, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as TE from '@fp-tx/core/TaskEither'

const checkString = (value: string) =>
  pipe(
    TE.of(value),
    TE.tapEither(() => (value.length > 0 ? E.right('ok') : E.left('error'))),
  )

async function test() {
  assert.deepStrictEqual(await checkString('')(), E.left('error'))
  assert.deepStrictEqual(await checkString('fp-ts')(), E.right('fp-ts'))
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
  <A, _>(f: (a: A) => IO<_>): <E>(self: TaskEither<E, A>) => TaskEither<E, A>
  <E, A, _>(self: TaskEither<E, A>, f: (a: A) => IO<_>): TaskEither<E, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as TE from '@fp-tx/core/TaskEither'
import * as E from '@fp-tx/core/Either'
import * as Console from '@fp-tx/core/Console'

// Will produce `Hello, fp-ts` to the stdout
const effectA = TE.tapIO(TE.of(1), value => Console.log(`Hello, ${value}`))

// No output to the stdout
const effectB = pipe(
  TE.left('error'),
  TE.tapIO(value => Console.log(`Hello, ${value}`)),
)

async function test() {
  assert.deepStrictEqual(await effectA(), E.of(1))
  assert.deepStrictEqual(await effectB(), E.left('error'))
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapTask`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapTask: {
  <A, _>(f: (a: A) => Task<_>): <E>(self: TaskEither<E, A>) => TaskEither<E, A>
  <E, A, _>(self: TaskEither<E, A>, f: (a: A) => Task<_>): TaskEither<E, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as TE from '@fp-tx/core/TaskEither'
import * as T from '@fp-tx/core/Task'
import * as E from '@fp-tx/core/Either'

const effect = TE.tapIO(TE.of(1), value => T.of(value + 1))

async function test() {
  assert.deepStrictEqual(await effect(), E.of(1))
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `left`




#### Signature

```typescript
export declare const left: <E = never, A = never>(e: E) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftIO`




#### Signature

```typescript
export declare const leftIO: <E = never, A = never>(me: IO<E>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftTask`




#### Signature

```typescript
export declare const leftTask: <E = never, A = never>(me: Task<E>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <E = never, A = never>(a: A) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`




#### Signature

```typescript
export declare const right: <E = never, A = never>(a: A) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightIO`




#### Signature

```typescript
export declare const rightIO: <E = never, A = never>(ma: IO<A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightTask`




#### Signature

```typescript
export declare const rightTask: <E = never, A = never>(ma: Task<A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEither`




#### Signature

```typescript
export declare const fromEither: <E, A>(fa: Either<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIO`




#### Signature

```typescript
export declare const fromIO: <A, E = never>(fa: IO<A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOEither`




#### Signature

```typescript
export declare const fromIOEither: <E, A>(fa: IOEither<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromNullable`




#### Signature

```typescript
export declare const fromNullable: <E>(e: E) => <A>(a: A) => TaskEither<E, NonNullable<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTask`




#### Signature

```typescript
export declare const fromTask: <A, E = never>(fa: Task<A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskOption`




#### Signature

```typescript
export declare const fromTaskOption: <E>(onNone: LazyArg<E>) => <A>(fa: TaskOption<A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUnion`




#### Signature

```typescript
export declare const toUnion: <E, A>(fa: TaskEither<E, A>) => Task<E | A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: TaskEither<never, {}>
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
  fb: TaskEither<E, B>,
) => (fa: TaskEither<E, A>) => TaskEither<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSW`

Less strict version of [`apS`](#aps).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const apSW: <A, N extends string, E2, B>(
  name: Exclude<N, keyof A>,
  fb: TaskEither<E2, B>,
) => <E1>(fa: TaskEither<E1, A>) => TaskEither<
  E1 | E2,
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
  f: (a: A) => TaskEither<E, B>,
) => (ma: TaskEither<E, A>) => TaskEither<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
) => <E, A>(fa: TaskEither<E, A>) => TaskEither<E, { readonly [K in N]: A }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindW`

The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const bindW: <N extends string, A, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => TaskEither<E2, B>,
) => <E1>(fa: TaskEither<E1, A>) => TaskEither<
  E1 | E2,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `alt`

Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to types of kind `* -> *`.


In case of `TaskEither` returns `fa` if is a `Right` or the value returned by `that` otherwise.


See also [orElse](#orelse).




#### Signature

```typescript
export declare const alt: <E, A>(that: LazyArg<TaskEither<E, A>>) => (fa: TaskEither<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as TE from '@fp-tx/core/TaskEither'

async function test() {
  assert.deepStrictEqual(
    await pipe(
      TE.right(1),
      TE.alt(() => TE.right(2)),
    )(),
    E.right(1),
  )
  assert.deepStrictEqual(
    await pipe(
      TE.left('a'),
      TE.alt(() => TE.right(2)),
    )(),
    E.right(2),
  )
  assert.deepStrictEqual(
    await pipe(
      TE.left('a'),
      TE.alt(() => TE.left('b')),
    )(),
    E.left('b'),
  )
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `altW`

Less strict version of [`alt`](#alt).


The `W` suffix (short for **W**idening) means that the error and the return types will be merged.




#### Signature

```typescript
export declare const altW: <E2, B>(
  that: LazyArg<TaskEither<E2, B>>,
) => <E1, A>(fa: TaskEither<E1, A>) => TaskEither<E2, A | B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getAltTaskValidation`

The default [`Alt`](#alt) instance returns the last error, if you want to get all errors you need to provide a way to concatenate them via a `Semigroup`.


See [`getAltValidation`](./Either.ts.html#getaltvalidation).




#### Signature

```typescript
export declare function getAltTaskValidation<E>(S: Semigroup<E>): Alt2C<URI, E>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicativeTaskValidation`

The default [`ApplicativePar`](#applicativepar) instance returns the first error, if you want to get all errors you need to provide a way to concatenate them via a `Semigroup`.




#### Signature

```typescript
export declare function getApplicativeTaskValidation<E>(A: Apply1<T.URI>, S: Semigroup<E>): Applicative2C<URI, E>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as S from '@fp-tx/core/Semigroup'
import * as string from '@fp-tx/core/string'
import * as T from '@fp-tx/core/Task'
import * as TE from '@fp-tx/core/TaskEither'

interface User {
  readonly id: string
  readonly name: string
}

const remoteDatabase: ReadonlyArray<User> = [
  { id: 'id1', name: 'John' },
  { id: 'id2', name: 'Mary' },
  { id: 'id3', name: 'Joey' },
]

const fetchUser = (id: string): TE.TaskEither<string, User> =>
  pipe(
    remoteDatabase,
    RA.findFirst(user => user.id === id),
    TE.fromOption(() => `${id} not found`),
  )

async function test() {
  assert.deepStrictEqual(
    await pipe(['id4', 'id5'], RA.traverse(TE.ApplicativePar)(fetchUser))(),
    E.left('id4 not found'), // <= first error
  )

  const Applicative = TE.getApplicativeTaskValidation(T.ApplyPar, pipe(string.Semigroup, S.intercalate(', ')))

  assert.deepStrictEqual(
    await pipe(['id4', 'id5'], RA.traverse(Applicative)(fetchUser))(),
    E.left('id4 not found, id5 not found'), // <= all errors
  )
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElse`




#### Signature

```typescript
export declare const getOrElse: <E, A>(onLeft: (e: E) => Task<A>) => (ma: TaskEither<E, A>) => Task<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElseW`

Less strict version of [`getOrElse`](#getorelse).


The `W` suffix (short for **W**idening) means that the handler return type will be merged.




#### Signature

```typescript
export declare const getOrElseW: <E, B>(onLeft: (e: E) => Task<B>) => <A>(ma: TaskEither<E, A>) => Task<A | B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapBoth`

Returns a `TaskEither` whose failure and success channels have been mapped by the specified pair of functions, `f` and `g`.




#### Signature

```typescript
export declare const mapBoth: {
  <E, G, A, B>(f: (e: E) => G, g: (a: A) => B): (self: TaskEither<E, A>) => TaskEither<G, B>
  <E, A, G, B>(self: TaskEither<E, A>, f: (e: E) => G, g: (a: A) => B): TaskEither<G, B>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as TaskEither from '@fp-tx/core/TaskEither'
import * as Either from '@fp-tx/core/Either'

const f = (s: string) => new Error(s)
const g = (n: number) => n * 2

async function test() {
  assert.deepStrictEqual(await TaskEither.mapBoth(TaskEither.right(1), f, g)(), Either.right(2))
  assert.deepStrictEqual(await TaskEither.mapBoth(TaskEither.left('err'), f, g)(), Either.left(new Error('err')))
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapError`

Returns a `TaskEither` with its error channel mapped using the specified function.




#### Signature

```typescript
export declare const mapError: {
  <E, G>(f: (e: E) => G): <A>(self: TaskEither<E, A>) => TaskEither<G, A>
  <E, A, G>(self: TaskEither<E, A>, f: (e: E) => G): TaskEither<G, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as TaskEither from '@fp-tx/core/TaskEither'
import * as Either from '@fp-tx/core/Either'

const f = (s: string) => new Error(s)

async function test() {
  assert.deepStrictEqual(await TaskEither.mapError(TaskEither.right(1), f)(), Either.right(1))
  assert.deepStrictEqual(await TaskEither.mapError(TaskEither.left('err'), f)(), Either.left(new Error('err')))
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElse`

Returns `ma` if is a `Right` or the value returned by `onLeft` otherwise.


See also [alt](#alt).




#### Signature

```typescript
export declare const orElse: <E1, A, E2>(
  onLeft: (e: E1) => TaskEither<E2, A>,
) => (ma: TaskEither<E1, A>) => TaskEither<E2, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as TE from '@fp-tx/core/TaskEither'

async function test() {
  const errorHandler = TE.orElse((error: string) => TE.right(`recovering from ${error}...`))
  assert.deepStrictEqual(await pipe(TE.right('ok'), errorHandler)(), E.right('ok'))
  assert.deepStrictEqual(await pipe(TE.left('ko'), errorHandler)(), E.right('recovering from ko...'))
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseFirstIOK`




#### Signature

```typescript
export declare const orElseFirstIOK: <E, B>(onLeft: (e: E) => IO<B>) => <A>(ma: TaskEither<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseFirstTaskK`




#### Signature

```typescript
export declare const orElseFirstTaskK: <E, B>(
  onLeft: (e: E) => Task<B>,
) => <A>(ma: TaskEither<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseW`

Less strict version of [`orElse`](#orelse).


The `W` suffix (short for **W**idening) means that the return types will be merged.




#### Signature

```typescript
export declare const orElseW: <E1, E2, B>(
  onLeft: (e: E1) => TaskEither<E2, B>,
) => <A>(ma: TaskEither<E1, A>) => TaskEither<E2, A | B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orLeft`




#### Signature

```typescript
export declare const orLeft: <E1, E2>(onLeft: (e: E1) => Task<E2>) => <A>(fa: TaskEither<E1, A>) => TaskEither<E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapError`

Returns an effect that effectfully "peeks" at the failure of this effect.




#### Signature

```typescript
export declare const tapError: {
  <E1, E2, _>(onLeft: (e: E1) => TaskEither<E2, _>): <A>(self: TaskEither<E1, A>) => TaskEither<E1 | E2, A>
  <E1, A, E2, _>(self: TaskEither<E1, A>, onLeft: (e: E1) => TaskEither<E2, _>): TaskEither<E1 | E2, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `filterOrElse`




#### Signature

```typescript
export declare const filterOrElse: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: TaskEither<E, A>) => TaskEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(mb: TaskEither<E, B>) => TaskEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: TaskEither<E, A>) => TaskEither<E, A>
}
```

#### Details

* Added in 1.0.0


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
  ): <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <E1, B extends A>(mb: TaskEither<E1, B>) => TaskEither<E1 | E2, B>
  <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getCompactable`




#### Signature

```typescript
export declare const getCompactable: <E>(M: Monoid<E>) => Compactable2C<'TaskEither', E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getFilterable`




#### Signature

```typescript
export declare function getFilterable<E>(M: Monoid<E>): Filterable2C<URI, E>

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

* MIT – Copyright (c) 2017-present Giulio Canti

## Interop


### `taskify`

Convert a node style callback function to one returning a `TaskEither`


**Note**. If the function `f` admits multiple overloadings, `taskify` will pick last one. If you want a different behaviour, add an explicit type annotation

```ts
// readFile admits multiple overloadings

// const readFile: (a: string) => TaskEither<NodeJS.ErrnoException, Buffer>
const readFile = taskify(fs.readFile)

const readFile2: (filename: string, encoding: string) => TaskEither<NodeJS.ErrnoException, Buffer> = taskify(
  fs.readFile,
)
```




#### Signature

```typescript
export declare function taskify<L, R>(f: (cb: (e: L | null | undefined, r?: R) => void) => void): () => TaskEither<L, R>



export declare function taskify<A, L, R>(
  f: (a: A, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A) => TaskEither<L, R>



export declare function taskify<A, B, L, R>(
  f: (a: A, b: B, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A, b: B) => TaskEither<L, R>



export declare function taskify<A, B, C, L, R>(
  f: (a: A, b: B, c: C, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A, b: B, c: C) => TaskEither<L, R>



export declare function taskify<A, B, C, D, L, R>(
  f: (a: A, b: B, c: C, d: D, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A, b: B, c: C, d: D) => TaskEither<L, R>



export declare function taskify<A, B, C, D, E, L, R>(
  f: (a: A, b: B, c: C, d: D, e: E, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A, b: B, c: C, d: D, e: E) => TaskEither<L, R>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { taskify } from '@fp-tx/core/TaskEither'
import * as fs from 'fs'

// const stat: (a: string | Buffer) => TaskEither<NodeJS.ErrnoException, fs.Stats>
const stat = taskify(fs.stat)
assert.strictEqual(stat.length, 0)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tryCatch`

Transforms a `Promise` that may reject to a `Promise` that never rejects and returns an `Either` instead.


See also [`tryCatchK`](#trycatchk).




#### Signature

```typescript
export declare const tryCatch: <E, A>(f: LazyArg<Promise<A>>, onRejected: (reason: unknown) => E) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { left, right } from '@fp-tx/core/Either'
import { tryCatch } from '@fp-tx/core/TaskEither'

tryCatch(() => Promise.resolve(1), String)().then(result => {
  assert.deepStrictEqual(result, right(1))
})
tryCatch(() => Promise.reject('error'), String)().then(result => {
  assert.deepStrictEqual(result, left('error'))
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tryCatchK`

Converts a function returning a `Promise` to one returning a `TaskEither`.




#### Signature

```typescript
export declare const tryCatchK: <E, A extends readonly unknown[], B>(
  f: (...a: A) => Promise<B>,
  onRejected: (reason: unknown) => E,
) => (...a: A) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Legacy


### `bimap`

Alias of `mapBoth`.




#### Signature

```typescript
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: TaskEither<E, A>) => TaskEither<G, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <E, A, B>(f: (a: A) => TaskEither<E, B>) => (ma: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainEitherK`

Alias of `flatMapEither`.




#### Signature

```typescript
export declare const chainEitherK: <E, A, B>(f: (a: A) => E.Either<E, B>) => (ma: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainEitherKW`

Alias of `flatMapEither`.




#### Signature

```typescript
export declare const chainEitherKW: <E2, A, B>(
  f: (a: A) => Either<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
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
export declare const chainFirst: <E, A, B>(f: (a: A) => TaskEither<E, B>) => (ma: TaskEither<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstEitherK`

Alias of `tapEither`.




#### Signature

```typescript
export declare const chainFirstEitherK: <A, E, B>(
  f: (a: A) => E.Either<E, B>,
) => (ma: TaskEither<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstEitherKW`

Alias of `tapEither`.


Less strict version of [`chainFirstEitherK`](#chainfirsteitherk).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => E.Either<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, A>
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
export declare const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => <E>(first: TaskEither<E, A>) => TaskEither<E, A>
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
export declare const chainFirstTaskK: <A, B>(f: (a: A) => T.Task<B>) => <E>(first: TaskEither<E, A>) => TaskEither<E, A>
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
export declare const chainFirstW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOEitherK`

Alias of `flatMapIOEither`.




#### Signature

```typescript
export declare const chainIOEitherK: <E, A, B>(
  f: (a: A) => IOEither<E, B>,
) => (ma: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOEitherKW`

Alias of `flatMapIOEither`.


Less strict version of [`chainIOEitherK`](#chainioeitherk).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const chainIOEitherKW: <E2, A, B>(
  f: (a: A) => IOEither<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
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
export declare const chainIOK: <A, B>(f: (a: A) => IO<B>) => <E>(first: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainNullableK`

Use `flatMapNullable`.




#### Signature

```typescript
export declare const chainNullableK: <E>(
  e: E,
) => <A, B>(f: (a: A) => B | null | undefined) => (ma: TaskEither<E, A>) => TaskEither<E, NonNullable<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionK`

Use `flatMapOption`.




#### Signature

```typescript
export declare const chainOptionK: <E>(
  onNone: LazyArg<E>,
) => <A, B>(f: (a: A) => Option<B>) => (ma: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionKW`

Use `flatMapOption`.




#### Signature

```typescript
export declare const chainOptionKW: <E2>(
  onNone: LazyArg<E2>,
) => <A, B>(f: (a: A) => Option<B>) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
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
export declare const chainTaskK: <A, B>(f: (a: A) => T.Task<B>) => <E>(first: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskOptionK`

Use `flatMapTaskOption`.




#### Signature

```typescript
export declare const chainTaskOptionK: <E>(
  onNone: LazyArg<E>,
) => <A, B>(f: (a: A) => TaskOption<B>) => (ma: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskOptionKW`

Use `flatMapTaskOption`.


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const chainTaskOptionKW: <E2>(
  onNone: LazyArg<E2>,
) => <A, B>(f: (a: A) => TaskOption<B>) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E2 | E1, B>
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
export declare const chainW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
```

#### Details

* Added in 1.0.0


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
) => (...a: A) => TaskEither<E, NonNullable<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`

Use `liftOption`.




#### Signature

```typescript
export declare const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapLeft`

Alias of `mapError`.




#### Signature

```typescript
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: TaskEither<E, A>) => TaskEither<G, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseFirst`

Alias of `tapError`.




#### Signature

```typescript
export declare const orElseFirst: <E, B>(
  onLeft: (e: E) => TaskEither<E, B>,
) => <A>(ma: TaskEither<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseFirstW`

Alias of `tapError`.




#### Signature

```typescript
export declare const orElseFirstW: <E1, E2, B>(
  onLeft: (e: E1) => TaskEither<E2, B>,
) => <A>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromEitherK`




#### Signature

```typescript
export declare const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => E.Either<E, B>,
) => (...a: A) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOEitherK`




#### Signature

```typescript
export declare const fromIOEitherK: <E, A extends readonly unknown[], B>(
  f: (...a: A) => IOEither<E, B>,
) => (...a: A) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOK`




#### Signature

```typescript
export declare const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <E = never>(...a: A) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromPredicate`




#### Signature

```typescript
export declare const fromPredicate: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => TaskEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => TaskEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => TaskEither<E, A>
}
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
) => <E = never>(...a: A) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskOptionK`




#### Signature

```typescript
export declare const fromTaskOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends readonly unknown[], B>(f: (...a: A) => TaskOption<B>) => (...a: A) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `liftNullable`




#### Signature

```typescript
export declare const liftNullable: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => B | null | undefined,
  onNullable: (...a: A) => E,
) => (...a: A) => TaskEither<E, NonNullable<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `liftOption`




#### Signature

```typescript
export declare const liftOption: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => Option<B>,
  onNone: (...a: A) => E,
) => (...a: A) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the `Right` value of this `TaskEither` to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <E, _>(self: TaskEither<E, _>) => TaskEither<E, A>
  <E, _, A>(self: TaskEither<E, _>, a: A): TaskEither<E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the `Right` value of this `TaskEither` to the void constant value.




#### Signature

```typescript
export declare const asUnit: <E, _>(self: TaskEither<E, _>) => TaskEither<E, void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: TaskEither<E, (a: A) => B>) => TaskEither<E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `TaskEither`




#### Signature

```typescript
export interface TaskEither<E, A> extends Task<Either<E, A>> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `fold`

Alias of [`matchE`](#matche).




#### Signature

```typescript
export declare const fold: <E, A, B>(
  onLeft: (e: E) => T.Task<B>,
  onRight: (a: A) => T.Task<B>,
) => (ma: TaskEither<E, A>) => T.Task<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldW`

Alias of [`matchEW`](#matchew).




#### Signature

```typescript
export declare const foldW: <E, B, A, C>(
  onLeft: (e: E) => T.Task<B>,
  onRight: (a: A) => T.Task<C>,
) => (ma: TaskEither<E, A>) => T.Task<B | C>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`




#### Signature

```typescript
export declare const match: <E, B, A>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: TaskEither<E, A>) => Task<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchE`

The `E` suffix (short for **E**ffect) means that the handlers return an effect (`Task`).




#### Signature

```typescript
export declare const matchE: <E, A, B>(
  onLeft: (e: E) => Task<B>,
  onRight: (a: A) => Task<B>,
) => (ma: TaskEither<E, A>) => Task<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchEW`

Less strict version of [`matchE`](#matche).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchEW: <E, B, A, C>(
  onLeft: (e: E) => Task<B>,
  onRight: (a: A) => Task<C>,
) => (ma: TaskEither<E, A>) => Task<B | C>
```

#### Details

* Added in 1.0.0


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
) => (ma: TaskEither<E, A>) => Task<B | C>
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
  <A, E2, B>(f: (a: A) => TaskEither<E2, B>): <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <E1, A, E2, B>(ma: TaskEither<E1, A>, f: (a: A) => TaskEither<E2, B>): TaskEither<E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapEither`




#### Signature

```typescript
export declare const flatMapEither: {
  <A, E2, B>(f: (a: A) => E.Either<E2, B>): <E1>(self: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <E1, A, E2, B>(self: TaskEither<E1, A>, f: (a: A) => E.Either<E2, B>): TaskEither<E1 | E2, B>
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
  <A, B>(f: (a: A) => IO<B>): <E>(self: TaskEither<E, A>) => TaskEither<E, B>
  <E, A, B>(self: TaskEither<E, A>, f: (a: A) => IO<B>): TaskEither<E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapIOEither`




#### Signature

```typescript
export declare const flatMapIOEither: {
  <A, E2, B>(f: (a: A) => IOEither<E2, B>): <E1>(self: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <E1, A, E2, B>(self: TaskEither<E1, A>, f: (a: A) => IOEither<E2, B>): TaskEither<E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


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
  ): <E1>(self: TaskEither<E1, A>) => TaskEither<E2 | E1, NonNullable<B>>
  <E1, A, B, E2>(
    self: TaskEither<E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): TaskEither<E1 | E2, NonNullable<B>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapOption`




#### Signature

```typescript
export declare const flatMapOption: {
  <A, B, E2>(f: (a: A) => Option<B>, onNone: (a: A) => E2): <E1>(self: TaskEither<E1, A>) => TaskEither<E2 | E1, B>
  <E1, A, B, E2>(self: TaskEither<E1, A>, f: (a: A) => Option<B>, onNone: (a: A) => E2): TaskEither<E1 | E2, B>
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
  <A, B>(f: (a: A) => Task<B>): <E>(self: TaskEither<E, A>) => TaskEither<E, B>
  <E, A, B>(self: TaskEither<E, A>, f: (a: A) => Task<B>): TaskEither<E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapTaskOption`




#### Signature

```typescript
export declare const flatMapTaskOption: {
  <A, E2, B>(f: (a: A) => TaskOption<B>, onNone: (a: A) => E2): <E1>(self: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <E1, A, E2, B>(self: TaskEither<E1, A>, f: (a: A) => TaskOption<B>, onNone: (a: A) => E2): TaskEither<E1 | E2, B>
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
export declare const flatten: <E, A>(mma: TaskEither<E, TaskEither<E, A>>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flattenW`

Less strict version of [`flatten`](#flatten).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const flattenW: <E1, E2, A>(mma: TaskEither<E1, TaskEither<E2, A>>) => TaskEither<E1 | E2, A>
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
export declare const sequenceArray: <A, E>(arr: ReadonlyArray<TaskEither<E, A>>) => TaskEither<E, ReadonlyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sequenceSeqArray`

Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.




#### Signature

```typescript
export declare const sequenceSeqArray: <A, E>(arr: ReadonlyArray<TaskEither<E, A>>) => TaskEither<E, ReadonlyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArray`

Equivalent to `ReadonlyArray#traverse(Applicative)`.




#### Signature

```typescript
export declare const traverseArray: <A, B, E>(
  f: (a: A) => TaskEither<E, B>,
) => (as: readonly A[]) => TaskEither<E, readonly B[]>
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
export declare const traverseArrayWithIndex: <A, B, E>(
  f: (index: number, a: A) => TaskEither<E, B>,
) => (as: ReadonlyArray<A>) => TaskEither<E, ReadonlyArray<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <A, E, B>(
  f: (index: number, a: A) => TaskEither<E, B>,
) => (as: readonly A[]) => TaskEither<E, readonly B[]>
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
export declare const traverseReadonlyArrayWithIndexSeq: <A, E, B>(
  f: (index: number, a: A) => TaskEither<E, B>,
) => (as: readonly A[]) => TaskEither<E, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndex`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, E, B>(
  f: (index: number, a: A) => TaskEither<E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => TaskEither<E, ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndexSeq`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndexSeq: <A, E, B>(
  f: (index: number, a: A) => TaskEither<E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => TaskEither<E, ReadonlyNonEmptyArray<B>>
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
export declare const traverseSeqArray: <A, B, E>(
  f: (a: A) => TaskEither<E, B>,
) => (as: readonly A[]) => TaskEither<E, readonly B[]>
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
export declare const traverseSeqArrayWithIndex: <A, B, E>(
  f: (index: number, a: A) => TaskEither<E, B>,
) => (as: ReadonlyArray<A>) => TaskEither<E, ReadonlyArray<B>>
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
export declare const URI = 'TaskEither'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: TaskEither<never, readonly []>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <E, A>(fa: TaskEither<E, A>) => <B>(fab: TaskEither<E, (a: A) => B>) => TaskEither<E, B>
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
export declare const apFirst: <E, B>(second: TaskEither<E, B>) => <A>(first: TaskEither<E, A>) => TaskEither<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirstW`

Less strict version of [`apFirst`](#apfirst).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const apFirstW: <E2, B>(
  second: TaskEither<E2, B>,
) => <E1, A>(first: TaskEither<E1, A>) => TaskEither<E1 | E2, A>
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
export declare const apSecond: <E, B>(second: TaskEither<E, B>) => <A>(first: TaskEither<E, A>) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecondW`

Less strict version of [`apSecond`](#apsecond).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const apSecondW: <E2, B>(
  second: TaskEither<E2, B>,
) => <E1, A>(first: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apW`

Less strict version of [`ap`](#ap).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const apW: <E2, A>(
  fa: TaskEither<E2, A>,
) => <E1, B>(fab: TaskEither<E1, (a: A) => B>) => TaskEither<E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bracket`

Make sure that a resource is cleaned up in the event of an exception (_). The release action is called regardless of whether the body action throws (_) or returns.


(*) i.e. returns a `Left`




#### Signature

```typescript
export declare const bracket: <E, A, B>(
  acquire: TaskEither<E, A>,
  use: (a: A) => TaskEither<E, B>,
  release: (a: A, e: E.Either<E, B>) => TaskEither<E, void>,
) => TaskEither<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bracketW`

Less strict version of [`bracket`](#bracket).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const bracketW: <E1, A, E2, B, E3>(
  acquire: TaskEither<E1, A>,
  use: (a: A) => TaskEither<E2, B>,
  release: (a: A, e: E.Either<E2, B>) => TaskEither<E3, void>,
) => TaskEither<E1 | E2 | E3, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends TaskEitherIterable<any, any>, A>(
  yieldFunction: (unwrap: <E, A>(ma: TaskEither<E, A>) => TaskEitherIterable<E, A>) => Generator<MA, A>,
) => TaskEither<MA extends TaskEitherIterable<infer E, any> ? E : never, A>
```




---


### ~~`getApplyMonoid`~~

Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.




#### Signature

```typescript
export declare const getApplyMonoid: <E, A>(M: Monoid<A>) => Monoid<TaskEither<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getApplySemigroup`~~

Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.




#### Signature

```typescript
export declare const getApplySemigroup: <E, A>(S: Semigroup<A>) => Semigroup<TaskEither<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getSemigroup`~~

Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.




#### Signature

```typescript
export declare const getSemigroup: <E, A>(S: Semigroup<A>) => Semigroup<TaskEither<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getTaskValidation`~~

Use [`getApplicativeTaskValidation`](#getapplicativetaskvalidation) and [`getAltTaskValidation`](#getalttaskvalidation) instead.




#### Signature

```typescript
export declare function getTaskValidation<E>(
  SE: Semigroup<E>,
): Monad2C<URI, E> & Bifunctor2<URI> & Alt2C<URI, E> & MonadTask2C<URI, E> & MonadThrow2C<URI, E>

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
) => <E>(fa: TaskEither<E, A>) => TaskEither<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `swap`




#### Signature

```typescript
export declare const swap: <E, A>(ma: TaskEither<E, A>) => TaskEither<A, E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`taskEither`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `TE.Functor` instead of `TE.taskEither` (where `TE` is from `import TE from 'fp-ts/TaskEither'`)




#### Signature

```typescript
export declare const taskEither: Monad2<URI> & Bifunctor2<URI> & Alt2<URI> & MonadTask2<URI> & MonadThrow2<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`taskEitherSeq`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `TE.Functor` instead of `TE.taskEitherSeq` (where `TE` is from `import TE from 'fp-ts/TaskEither'`)




#### Signature

```typescript
export declare const taskEitherSeq: typeof taskEither
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `throwError`




#### Signature

```typescript
export declare const throwError: MonadThrow2<URI>['throwError']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti