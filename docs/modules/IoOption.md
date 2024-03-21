
# IoOption







### Instances

* [Alt](#alt)
* [Alternative](#alternative)
* [Applicative](#applicative)
* [Apply](#apply)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [Compactable](#compactable)
* [Filterable](#filterable)
* [FromEither](#fromeither)
* [FromIO](#fromio)
* [Functor](#functor)
* [Monad](#monad)
* [MonadIO](#monadio)
* [MonadThrow](#monadthrow)
* [Pointed](#pointed)
* [Zero](#zero)

### Combinators

* [tap](#tap)
* [tapEither](#tapeither)
* [tapIO](#tapio)

### Constructors

* [none](#none)
* [of](#of)
* [some](#some)

### Conversions

* [fromEither](#fromeither)
* [fromIO](#fromio)
* [fromIOEither](#fromioeither)
* [fromNullable](#fromnullable)
* [fromOption](#fromoption)
* [toNullable](#tonullable)
* [toUndefined](#toundefined)

### Do notation

* [Do](#do)
* [apS](#aps)
* [bind](#bind)
* [bindTo](#bindto)
* [guard](#guard)

### Error handling

* [alt](#alt)
* [altW](#altw)
* [getOrElse](#getorelse)
* [getOrElseW](#getorelsew)

### Filtering

* [compact](#compact)
* [filter](#filter)
* [filterMap](#filtermap)
* [partition](#partition)
* [partitionMap](#partitionmap)
* [separate](#separate)

### Instance methods

* [chainRec](#chainrec)

### Legacy

* [chain](#chain)
* [chainEitherK](#chaineitherk)
* [chainFirst](#chainfirst)
* [chainFirstEitherK](#chainfirsteitherk)
* [chainFirstIOK](#chainfirstiok)
* [chainIOK](#chainiok)
* [chainNullableK](#chainnullablek)
* [chainOptionK](#chainoptionk)

### Lifting

* [fromEitherK](#fromeitherk)
* [fromIOK](#fromiok)
* [fromNullableK](#fromnullablek)
* [fromOptionK](#fromoptionk)
* [fromPredicate](#frompredicate)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [flap](#flap)
* [map](#map)

### Model

* [IOOption](#iooption)

### Pattern matching

* [fold](#fold)
* [match](#match)
* [matchE](#matche)
* [matchEW](#matchew)
* [matchW](#matchw)

### Sequencing

* [flatMap](#flatmap)
* [flatMapEither](#flatmapeither)
* [flatMapIO](#flatmapio)
* [flatMapNullable](#flatmapnullable)
* [flatMapOption](#flatmapoption)
* [flatten](#flatten)

### Traversing

* [traverseReadonlyArrayWithIndex](#traversereadonlyarraywithindex)
* [traverseReadonlyNonEmptyArrayWithIndex](#traversereadonlynonemptyarraywithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ApT](#apt)
* [ap](#ap)
* [apFirst](#apfirst)
* [apSecond](#apsecond)
* [do](#do)
* [let](#let)
* [throwError](#throwerror)
* [zero](#zero)

## Instances


### `Alt`




#### Signature

```typescript
export declare const Alt: Alt1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alternative`




#### Signature

```typescript
export declare const Alternative: Alternative1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative`




#### Signature

```typescript
export declare const Applicative: Applicative1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Apply`




#### Signature

```typescript
export declare const Apply: Apply1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain`




#### Signature

```typescript
export declare const Chain: chainable.Chain1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec`

ChainRec for `IOOption`




#### Signature

```typescript
export declare const ChainRec: ChainRec1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Compactable`




#### Signature

```typescript
export declare const Compactable: Compactable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable`




#### Signature

```typescript
export declare const Filterable: Filterable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither`




#### Signature

```typescript
export declare const FromEither: FromEither1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO`




#### Signature

```typescript
export declare const FromIO: FromIO1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO`




#### Signature

```typescript
export declare const MonadIO: MonadIO1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow`




#### Signature

```typescript
export declare const MonadThrow: MonadThrow1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Zero`




#### Signature

```typescript
export declare const Zero: Zero1<URI>
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
  <A, _>(self: IOOption<A>, f: (a: A) => IOOption<_>): IOOption<A>
  <A, _>(f: (a: A) => IOOption<_>): (self: IOOption<A>) => IOOption<A>
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
  <A, E, _>(f: (a: A) => Either<E, _>): (self: IOOption<A>) => IOOption<A>
  <A, E, _>(self: IOOption<A>, f: (a: A) => Either<E, _>): IOOption<A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as IOO from '@fp-tx/core/IOOption'
import * as O from '@fp-tx/core/Option'
import * as E from '@fp-tx/core/Either'

const compute = (value: number) =>
  pipe(
    IOO.of(value),
    IOO.tapEither(value => (value > 0 ? E.right('ok') : E.left('error'))),
  )

assert.deepStrictEqual(compute(1)(), O.of(1))
assert.deepStrictEqual(compute(-1)(), O.none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapIO`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapIO: {
  <A, _>(f: (a: A) => IO<_>): (self: IOOption<A>) => IOOption<A>
  <A, _>(self: IOOption<A>, f: (a: A) => IO<_>): IOOption<A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as IOO from '@fp-tx/core/IOOption'
import * as O from '@fp-tx/core/Option'
import * as Console from '@fp-tx/core/Console'

// Will produce `Hello, fp-ts` to the stdout
const effectA = pipe(
  IOO.of('fp-ts'),
  IOO.tapIO(value => Console.log(`Hello, ${value}`)),
)

// No output to the stdout
const effectB = pipe(
  IOO.none as IOO.IOOption<string>,
  IOO.tapIO(value => Console.log(`Hello, ${value}`)),
)

async function test() {
  assert.deepStrictEqual(effectA(), O.of('fp-ts'))
  assert.deepStrictEqual(effectB(), O.none)
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `none`




#### Signature

```typescript
export declare const none: IOOption<never>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <A>(a: A) => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `some`




#### Signature

```typescript
export declare const some: <A>(a: A) => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEither`




#### Signature

```typescript
export declare const fromEither: <A>(fa: Either<unknown, A>) => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIO`




#### Signature

```typescript
export declare const fromIO: <A>(fa: IO<A>) => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOEither`




#### Signature

```typescript
export declare const fromIOEither: <A>(fa: IOEither<unknown, A>) => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromNullable`




#### Signature

```typescript
export declare const fromNullable: <A>(a: A) => IOOption<NonNullable<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <A>(fa: Option<A>) => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toNullable`




#### Signature

```typescript
export declare const toNullable: <A>(ma: IOOption<A>) => IO<A | null>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUndefined`




#### Signature

```typescript
export declare const toUndefined: <A>(ma: IOOption<A>) => IO<A | undefined>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: IOOption<{}>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  fb: IOOption<B>,
) => (fa: IOOption<A>) => IOOption<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bind`




#### Signature

```typescript
export declare const bind: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => IOOption<B>,
) => (ma: IOOption<A>) => IOOption<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(name: N) => <A>(fa: IOOption<A>) => IOOption<{ readonly [K in N]: A }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `guard`




#### Signature

```typescript
export declare const guard: (b: boolean) => IOOption<void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `alt`




#### Signature

```typescript
export declare const alt: <A>(second: LazyArg<IOOption<A>>) => (first: IOOption<A>) => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `altW`

Less strict version of [`alt`](#alt).


The `W` suffix (short for **W**idening) means that the return types will be merged.




#### Signature

```typescript
export declare const altW: <B>(second: LazyArg<IOOption<B>>) => <A>(first: IOOption<A>) => IOOption<A | B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElse`




#### Signature

```typescript
export declare const getOrElse: <A>(onNone: LazyArg<IO<A>>) => (fa: IOOption<A>) => IO<A>
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
export declare const getOrElseW: <B>(onNone: LazyArg<IO<B>>) => <A>(ma: IOOption<A>) => IO<A | B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `compact`




#### Signature

```typescript
export declare const compact: Compactable1<URI>['compact']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filter`




#### Signature

```typescript
export declare const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fb: IOOption<A>) => IOOption<B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: IOOption<B>) => IOOption<B>
  <A>(predicate: Predicate<A>): (fa: IOOption<A>) => IOOption<A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMap`




#### Signature

```typescript
export declare const filterMap: <A, B>(f: (a: A) => Option<B>) => (fga: IOOption<A>) => IOOption<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partition`




#### Signature

```typescript
export declare const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): (fb: IOOption<A>) => Separated<IOOption<A>, IOOption<B>>
  <A>(predicate: Predicate<A>): <B extends A>(fb: IOOption<B>) => Separated<IOOption<B>, IOOption<B>>
  <A>(predicate: Predicate<A>): (fa: IOOption<A>) => Separated<IOOption<A>, IOOption<A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMap`




#### Signature

```typescript
export declare const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: IOOption<A>) => Separated<IOOption<B>, IOOption<C>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`




#### Signature

```typescript
export declare const separate: Compactable1<URI>['separate']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Instance methods


### `chainRec`




#### Signature

```typescript
export declare const chainRec: ChainRec1<URI>['chainRec']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <A, B>(f: (a: A) => IOOption<B>) => (ma: IOOption<A>) => IOOption<B>
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
export declare const chainEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: IOOption<A>) => IOOption<B>
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
export declare const chainFirst: <A, B>(f: (a: A) => IOOption<B>) => (first: IOOption<A>) => IOOption<A>
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
export declare const chainFirstEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: IOOption<A>) => IOOption<A>
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
export declare const chainFirstIOK: <A, B>(f: (a: A) => I.IO<B>) => (first: IOOption<A>) => IOOption<A>
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
export declare const chainIOK: <A, B>(f: (a: A) => I.IO<B>) => (first: IOOption<A>) => IOOption<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainNullableK`

Alias of `flatMapNullable`.




#### Signature

```typescript
export declare const chainNullableK: <A, B>(
  f: (a: A) => B | null | undefined,
) => (ma: IOOption<A>) => IOOption<NonNullable<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionK`

Alias of `flatMapOption`.




#### Signature

```typescript
export declare const chainOptionK: <A, B>(f: (a: A) => Option<B>) => (ma: IOOption<A>) => IOOption<B>
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
  f: (...a: A) => Either<E, B>,
) => (...a: A) => IOOption<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOK`




#### Signature

```typescript
export declare const fromIOK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => I.IO<B>) => (...a: A) => IOOption<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromNullableK`




#### Signature

```typescript
export declare const fromNullableK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => (...a: A) => IOOption<NonNullable<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`




#### Signature

```typescript
export declare const fromOptionK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Option<B>,
) => (...a: A) => IOOption<B>
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
  <A, B extends A>(refinement: Refinement<A, B>): (a: A) => IOOption<B>
  <A>(predicate: Predicate<A>): <B extends A>(b: B) => IOOption<B>
  <A>(predicate: Predicate<A>): (a: A) => IOOption<A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the `Some` value of this `IOOption` to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <_>(self: IOOption<_>) => IOOption<A>
  <_, A>(self: IOOption<_>, a: A): IOOption<A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the `Some` value of this `IOOption` to the void constant value.




#### Signature

```typescript
export declare const asUnit: <_>(self: IOOption<_>) => IOOption<void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: IOOption<(a: A) => B>) => IOOption<B>
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
export declare const map: <A, B>(f: (a: A) => B) => (fa: IOOption<A>) => IOOption<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `IOOption`




#### Signature

```typescript
export interface IOOption<A> extends IO<Option<A>> {}
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
export declare const fold: <B, A>(onNone: () => I.IO<B>, onSome: (a: A) => I.IO<B>) => (ma: IOOption<A>) => I.IO<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`




#### Signature

```typescript
export declare const match: <B, A>(onNone: () => B, onSome: (a: A) => B) => (ma: IOOption<A>) => IO<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchE`

The `E` suffix (short for **E**ffect) means that the handlers return an effect (`IO`).




#### Signature

```typescript
export declare const matchE: <B, A>(onNone: () => IO<B>, onSome: (a: A) => IO<B>) => (ma: IOOption<A>) => IO<B>
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
export declare const matchEW: <B, C, A>(onNone: () => IO<B>, onSome: (a: A) => IO<C>) => (ma: IOOption<A>) => IO<B | C>
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
export declare const matchW: <B, A, C>(onNone: () => B, onSome: (a: A) => C) => (ma: IOOption<A>) => IO<B | C>
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
  <A, B>(f: (a: A) => IOOption<B>): (ma: IOOption<A>) => IOOption<B>
  <A, B>(ma: IOOption<A>, f: (a: A) => IOOption<B>): IOOption<B>
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
  <A, B, _>(f: (a: A) => Either<_, B>): (self: IOOption<A>) => IOOption<B>
  <A, B, _>(self: IOOption<A>, f: (a: A) => Either<_, B>): IOOption<B>
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
  <A, B>(f: (a: A) => IO<B>): (self: IOOption<A>) => IOOption<B>
  <A, B>(self: IOOption<A>, f: (a: A) => IO<B>): IOOption<B>
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
  <A, B>(f: (a: A) => B | null | undefined): (self: IOOption<A>) => IOOption<B>
  <A, B>(self: IOOption<A>, f: (a: A) => B | null | undefined): IOOption<B>
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
  <A, B>(f: (a: A) => Option<B>): (self: IOOption<A>) => IOOption<B>
  <A, B>(self: IOOption<A>, f: (a: A) => Option<B>): IOOption<B>
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
export declare const flatten: <A>(mma: IOOption<IOOption<A>>) => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <A, B>(
  f: (index: number, a: A) => IOOption<B>,
) => (as: readonly A[]) => IOOption<readonly B[]>
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
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, B>(
  f: (index: number, a: A) => IOOption<B>,
) => (as: ReadonlyNonEmptyArray<A>) => IOOption<ReadonlyNonEmptyArray<B>>
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
export declare const URI = 'IOOption'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: IOOption<readonly []>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <A>(fa: IOOption<A>) => <B>(fab: IOOption<(a: A) => B>) => IOOption<B>
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
export declare const apFirst: <B>(second: IOOption<B>) => <A>(first: IOOption<A>) => IOOption<A>
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
export declare const apSecond: <B>(second: IOOption<B>) => <A>(first: IOOption<A>) => IOOption<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends IOOptionIterable<any>, A>(
  yieldFunction: (unwrap: <A>(ma: IOOption<A>) => IOOptionIterable<A>) => Generator<MA, A>,
) => IOOption<A>
```




---


### `let`




#### Signature

```typescript
export declare const let_: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => (fa: IOOption<A>) => IOOption<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `throwError`




#### Signature

```typescript
export declare const throwError: MonadThrow1<URI>['throwError']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zero`




#### Signature

```typescript
export declare const zero: <A>() => IOOption<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti