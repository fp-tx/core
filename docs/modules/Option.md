
# Option







### Instances

* [Alt](#alt)
* [Alternative](#alternative)
* [Applicative](#applicative)
* [Apply](#apply)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [Compactable](#compactable)
* [Extend](#extend)
* [Filterable](#filterable)
* [Foldable](#foldable)
* [FromEither](#fromeither)
* [Functor](#functor)
* [Monad](#monad)
* [MonadThrow](#monadthrow)
* [Pointed](#pointed)
* [Traversable](#traversable)
* [Witherable](#witherable)
* [Zero](#zero)
* [getEq](#geteq)
* [getMonoid](#getmonoid)
* [getOrd](#getord)
* [getShow](#getshow)

### Combinators

* [tap](#tap)
* [tapEither](#tapeither)

### Constructors

* [getLeft](#getleft)
* [getRight](#getright)
* [none](#none)
* [of](#of)
* [some](#some)

### Conversions

* [fromEither](#fromeither)
* [fromNullable](#fromnullable)
* [toNullable](#tonullable)
* [toUndefined](#toundefined)

### Do notation

* [Do](#do)
* [apS](#aps)
* [bind](#bind)
* [bindTo](#bindto)
* [guard](#guard)

### Error handling

* [getOrElse](#getorelse)
* [getOrElseW](#getorelsew)
* [orElse](#orelse)

### Filtering

* [compact](#compact)
* [filter](#filter)
* [filterMap](#filtermap)
* [partition](#partition)
* [partitionMap](#partitionmap)
* [separate](#separate)
* [wilt](#wilt)
* [wither](#wither)

### Folding

* [foldMap](#foldmap)
* [reduce](#reduce)
* [reduceRight](#reduceright)

### Instance methods

* [chainRec](#chainrec)

### Interop

* [tryCatch](#trycatch)
* [tryCatchK](#trycatchk)

### Legacy

* [alt](#alt)
* [altW](#altw)
* [chain](#chain)
* [chainFirst](#chainfirst)
* [chainFirstEitherK](#chainfirsteitherk)

### Lifting

* [fromEitherK](#fromeitherk)
* [fromNullableK](#fromnullablek)
* [fromPredicate](#frompredicate)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [flap](#flap)
* [map](#map)

### Model

* [None](#none)
* [Option](#option)
* [Some](#some)

### Pattern matching

* [fold](#fold)
* [foldW](#foldw)
* [match](#match)
* [matchW](#matchw)

### Refinements

* [isNone](#isnone)
* [isSome](#issome)

### Sequencing

* [chainEitherK](#chaineitherk)
* [chainNullableK](#chainnullablek)
* [flatMap](#flatmap)
* [flatten](#flatten)

### Traversing

* [sequence](#sequence)
* [sequenceArray](#sequencearray)
* [traverse](#traverse)
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
* [apSecond](#apsecond)
* [do](#do)
* [duplicate](#duplicate)
* [elem](#elem)
* [exists](#exists)
* [extend](#extend)
* ~~[getApplyMonoid](#getapplymonoid)~~ (deprecated)
* ~~[getApplySemigroup](#getapplysemigroup)~~ (deprecated)
* ~~[getFirstMonoid](#getfirstmonoid)~~ (deprecated)
* ~~[getLastMonoid](#getlastmonoid)~~ (deprecated)
* ~~[getRefinement](#getrefinement)~~ (deprecated)
* [let](#let)
* ~~[mapNullable](#mapnullable)~~ (deprecated)
* ~~[option](#option)~~ (deprecated)
* [throwError](#throwerror)
* [zero](#zero)

## Instances


### `Alt`




#### Signature

```typescript
export declare const Alt: Alt1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alternative`




#### Signature

```typescript
export declare const Alternative: Alternative1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative`




#### Signature

```typescript
export declare const Applicative: Applicative1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Apply`




#### Signature

```typescript
export declare const Apply: Apply1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain`




#### Signature

```typescript
export declare const Chain: chainable.Chain1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec`

ChainRec for `Option`




#### Signature

```typescript
export declare const ChainRec: ChainRec1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

---


### `Compactable`




#### Signature

```typescript
export declare const Compactable: Compactable1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Extend`




#### Signature

```typescript
export declare const Extend: Extend1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable`




#### Signature

```typescript
export declare const Filterable: Filterable1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable`




#### Signature

```typescript
export declare const Foldable: Foldable1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither`




#### Signature

```typescript
export declare const FromEither: FromEither1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow`




#### Signature

```typescript
export declare const MonadThrow: MonadThrow1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Traversable`




#### Signature

```typescript
export declare const Traversable: Traversable1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Witherable`




#### Signature

```typescript
export declare const Witherable: Witherable1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Zero`




#### Signature

```typescript
export declare const Zero: Zero1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare const getEq: <A>(E: Eq<A>) => Eq<Option<A>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { none, some, getEq } from '@fp-tx/core/Option'
import * as N from '@fp-tx/core/number'

const E = getEq(N.Eq)
assert.strictEqual(E.equals(none, none), true)
assert.strictEqual(E.equals(none, some(1)), false)
assert.strictEqual(E.equals(some(1), none), false)
assert.strictEqual(E.equals(some(1), some(2)), false)
assert.strictEqual(E.equals(some(1), some(1)), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`

Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are concatenated using the provided `Semigroup`


| x | y | concat(x, y) | | ------- | ------- | ------------------ | | none | none | none | | some(a) | none | some(a) | | none | some(b) | some(b) | | some(a) | some(b) | some(concat(a, b)) |




#### Signature

```typescript
export declare const getMonoid: <A>(S: Semigroup<A>) => Monoid<Option<A>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getMonoid, some, none } from '@fp-tx/core/Option'
import { SemigroupSum } from '@fp-tx/core/number'

const M = getMonoid(SemigroupSum)
assert.deepStrictEqual(M.concat(none, none), none)
assert.deepStrictEqual(M.concat(some(1), none), some(1))
assert.deepStrictEqual(M.concat(none, some(1)), some(1))
assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrd`

The `Ord` instance allows `Option` values to be compared with `compare`, whenever there is an `Ord` instance for the type the `Option` contains.


`None` is considered to be less than any `Some` value.




#### Signature

```typescript
export declare const getOrd: <A>(O: Ord<A>) => Ord<Option<A>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { none, some, getOrd } from '@fp-tx/core/Option'
import * as N from '@fp-tx/core/number'

const O = getOrd(N.Ord)
assert.strictEqual(O.compare(none, none), 0)
assert.strictEqual(O.compare(none, some(1)), -1)
assert.strictEqual(O.compare(some(1), none), 1)
assert.strictEqual(O.compare(some(1), some(2)), -1)
assert.strictEqual(O.compare(some(1), some(1)), 0)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare const getShow: <A>(S: Show<A>) => Show<Option<A>>
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
  <A, _>(self: Option<A>, f: (a: A) => Option<_>): Option<A>
  <A, _>(f: (a: A) => Option<_>): (self: Option<A>) => Option<A>
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
  <A, E, _>(f: (a: A) => Either<E, _>): (self: Option<A>) => Option<A>
  <A, E, _>(self: Option<A>, f: (a: A) => Either<E, _>): Option<A>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as O from '@fp-tx/core/Option'
import * as E from '@fp-tx/core/Either'

const compute = (value: number) =>
  pipe(
    O.of(value),
    O.tapEither(value => (value > 0 ? E.right('ok') : E.left('error'))),
  )

assert.deepStrictEqual(compute(1), O.of(1))
assert.deepStrictEqual(compute(-42), O.none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `getLeft`

Returns the `Left` value of an `Either` if possible.




#### Signature

```typescript
export declare const getLeft: <E, A>(ma: Either<E, A>) => Option<E>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getLeft, none, some } from '@fp-tx/core/Option'
import { right, left } from '@fp-tx/core/Either'

assert.deepStrictEqual(getLeft(right(1)), none)
assert.deepStrictEqual(getLeft(left('a')), some('a'))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getRight`

Returns the `Right` value of an `Either` if possible.




#### Signature

```typescript
export declare const getRight: <E, A>(ma: Either<E, A>) => Option<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getRight, none, some } from '@fp-tx/core/Option'
import { right, left } from '@fp-tx/core/Either'

assert.deepStrictEqual(getRight(right(1)), some(1))
assert.deepStrictEqual(getRight(left('a')), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `none`

`None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.




#### Signature

```typescript
export declare const none: Option<never>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <A>(a: A) => Option<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `some`

Constructs a `Some`. Represents an optional value that exists.




#### Signature

```typescript
export declare const some: <A>(a: A) => Option<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEither`

Transforms an `Either` to an `Option` discarding the error.


Alias of [getRight](#getright)




#### Signature

```typescript
export declare const fromEither: <A>(fa: Either<unknown, A>) => Option<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromNullable`

Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise returns the value wrapped in a `Some`.




#### Signature

```typescript
export declare const fromNullable: <A>(a: A) => Option<NonNullable<A>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { none, some, fromNullable } from '@fp-tx/core/Option'

assert.deepStrictEqual(fromNullable(undefined), none)
assert.deepStrictEqual(fromNullable(null), none)
assert.deepStrictEqual(fromNullable(1), some(1))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toNullable`

Extracts the value out of the structure, if it exists. Otherwise returns `null`.




#### Signature

```typescript
export declare const toNullable: <A>(ma: Option<A>) => A | null
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, toNullable } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'

assert.strictEqual(pipe(some(1), toNullable), 1)
assert.strictEqual(pipe(none, toNullable), null)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUndefined`

Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.




#### Signature

```typescript
export declare const toUndefined: <A>(ma: Option<A>) => A | undefined
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, toUndefined } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'

assert.strictEqual(pipe(some(1), toUndefined), 1)
assert.strictEqual(pipe(none, toUndefined), undefined)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: Option<{}>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  fb: Option<B>,
) => (fa: Option<A>) => Option<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bind`




#### Signature

```typescript
export declare const bind: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Option<B>,
) => (ma: Option<A>) => Option<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(name: N) => <A>(fa: Option<A>) => Option<{ readonly [K in N]: A }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `guard`




#### Signature

```typescript
export declare const guard: (b: boolean) => Option<void>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `getOrElse`

Extracts the value out of the structure, if it exists. Otherwise returns the given default value




#### Signature

```typescript
export declare const getOrElse: <A>(onNone: LazyArg<A>) => (ma: Option<A>) => A
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, getOrElse } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'

assert.strictEqual(
  pipe(
    some(1),
    getOrElse(() => 0),
  ),
  1,
)
assert.strictEqual(
  pipe(
    none,
    getOrElse(() => 0),
  ),
  0,
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElseW`

Less strict version of [`getOrElse`](#getorelse).


The `W` suffix (short for **W**idening) means that the handler return type will be merged.




#### Signature

```typescript
export declare const getOrElseW: <B>(onNone: LazyArg<B>) => <A>(ma: Option<A>) => B | A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElse`

Returns the provided `Option` `that` if `self` is `None`, otherwise returns `self`.




#### Signature

```typescript
export declare const orElse: {
  <B>(that: LazyArg<Option<B>>): <A>(self: Option<A>) => Option<A | B>
  <A, B>(self: Option<A>, that: LazyArg<Option<B>>): Option<A | B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `compact`




#### Signature

```typescript
export declare const compact: <A>(fa: Option<Option<A>>) => Option<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filter`




#### Signature

```typescript
export declare const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Option<A>) => Option<B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: Option<B>) => Option<B>
  <A>(predicate: Predicate<A>): (fa: Option<A>) => Option<A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMap`




#### Signature

```typescript
export declare const filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: Option<A>) => Option<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partition`




#### Signature

```typescript
export declare const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Option<A>) => Separated<Option<A>, Option<B>>
  <A>(predicate: Predicate<A>): <B extends A>(fb: Option<B>) => Separated<Option<B>, Option<B>>
  <A>(predicate: Predicate<A>): (fa: Option<A>) => Separated<Option<A>, Option<A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMap`




#### Signature

```typescript
export declare const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: Option<A>) => Separated<Option<B>, Option<C>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`




#### Signature

```typescript
export declare const separate: <A, B>(ma: Option<Either<A, B>>) => Separated<Option<A>, Option<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `wilt`




#### Signature

```typescript
export declare const wilt: PipeableWilt1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `wither`




#### Signature

```typescript
export declare const wither: PipeableWither1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`




#### Signature

```typescript
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Option<A>) => M
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Option<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Option<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Instance methods


### `chainRec`




#### Signature

```typescript
export declare const chainRec: ChainRec1<URI>['chainRec']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

## Interop


### `tryCatch`

Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in a `Some`.


See also [`tryCatchK`](#trycatchk).




#### Signature

```typescript
export declare const tryCatch: <A>(f: LazyArg<A>) => Option<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { none, some, tryCatch } from '@fp-tx/core/Option'

assert.deepStrictEqual(
  tryCatch(() => {
    throw new Error()
  }),
  none,
)
assert.deepStrictEqual(
  tryCatch(() => 1),
  some(1),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tryCatchK`

Converts a function that may throw to one returning a `Option`.




#### Signature

```typescript
export declare const tryCatchK: <A extends readonly unknown[], B>(f: (...a: A) => B) => (...a: A) => Option<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Legacy


### `alt`

Alias of `orElse`.




#### Signature

```typescript
export declare const alt: <A>(that: LazyArg<Option<A>>) => (fa: Option<A>) => Option<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `altW`

Alias of `orElse`.


Less strict version of [`alt`](#alt).


The `W` suffix (short for **W**idening) means that the return types will be merged.




#### Signature

```typescript
export declare const altW: <B>(that: LazyArg<Option<B>>) => <A>(fa: Option<A>) => Option<A | B>
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
export declare const chain: <A, B>(f: (a: A) => Option<B>) => (ma: Option<A>) => Option<B>
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
export declare const chainFirst: <A, B>(f: (a: A) => Option<B>) => (first: Option<A>) => Option<A>
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
export declare const chainFirstEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Option<A>) => Option<A>
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
  f: (...a: A) => Either<E, B>,
) => (...a: A) => Option<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromNullableK`

Returns a _smart constructor_ from a function that returns a nullable value.




#### Signature

```typescript
export declare const fromNullableK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => (...a: A) => Option<NonNullable<B>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { fromNullableK, none, some } from '@fp-tx/core/Option'

const f = (s: string): number | undefined => {
  const n = parseFloat(s)
  return isNaN(n) ? undefined : n
}

const g = fromNullableK(f)

assert.deepStrictEqual(g('1'), some(1))
assert.deepStrictEqual(g('a'), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromPredicate`

Returns a _smart constructor_ based on the given predicate.




#### Signature

```typescript
export declare function fromPredicate<A, B extends A>(refinement: Refinement<A, B>): (a: A) => Option<B>



export declare function fromPredicate<A>(predicate: Predicate<A>): <B extends A>(b: B) => Option<B>



export declare function fromPredicate<A>(predicate: Predicate<A>): (a: A) => Option<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { none, some, fromPredicate } from '@fp-tx/core/Option'

const getOption = fromPredicate((n: number) => n >= 0)

assert.deepStrictEqual(getOption(-1), none)
assert.deepStrictEqual(getOption(1), some(1))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the `Some` value of this `Option` to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <_>(self: Option<_>) => Option<A>
  <_, A>(self: Option<_>, a: A): Option<A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the `Some` value of this `Option` to the void constant value.




#### Signature

```typescript
export declare const asUnit: <_>(self: Option<_>) => Option<void>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: Option<(a: A) => B>) => Option<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => (fa: Option<A>) => Option<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `None`




#### Signature

```typescript
export interface None {
  readonly _tag: 'None'
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Option`




#### Signature

```typescript
export type Option<A> = None | Some<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Some`




#### Signature

```typescript
export interface Some<A> {
  readonly _tag: 'Some'
  readonly value: A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `fold`

Alias of [`match`](#match).




#### Signature

```typescript
export declare const fold: <A, B>(onNone: LazyArg<B>, onSome: (a: A) => B) => (ma: Option<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldW`

Alias of [`matchW`](#matchw).




#### Signature

```typescript
export declare const foldW: <B, A, C>(onNone: LazyArg<B>, onSome: (a: A) => C) => (ma: Option<A>) => B | C
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`

Takes a (lazy) default value, a function, and an `Option` value, if the `Option` value is `None` the default value is returned, otherwise the function is applied to the value inside the `Some` and the result is returned.




#### Signature

```typescript
export declare const match: <A, B>(onNone: LazyArg<B>, onSome: (a: A) => B) => (ma: Option<A>) => B
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, match } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'

assert.strictEqual(
  pipe(
    some(1),
    match(
      () => 'a none',
      a => `a some containing ${a}`,
    ),
  ),
  'a some containing 1',
)

assert.strictEqual(
  pipe(
    none,
    match(
      () => 'a none',
      a => `a some containing ${a}`,
    ),
  ),
  'a none',
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchW`

Less strict version of [`match`](#match).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchW: <B, A, C>(onNone: LazyArg<B>, onSome: (a: A) => C) => (ma: Option<A>) => B | C
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Refinements


### `isNone`

Returns `true` if the option is `None`, `false` otherwise.




#### Signature

```typescript
export declare const isNone: (fa: Option<unknown>) => fa is None
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, isNone } from '@fp-tx/core/Option'

assert.strictEqual(isNone(some(1)), false)
assert.strictEqual(isNone(none), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isSome`

Returns `true` if the option is an instance of `Some`, `false` otherwise.




#### Signature

```typescript
export declare const isSome: <A>(fa: Option<A>) => fa is Some<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, isSome } from '@fp-tx/core/Option'

assert.strictEqual(isSome(some(1)), true)
assert.strictEqual(isSome(none), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `chainEitherK`




#### Signature

```typescript
export declare const chainEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Option<A>) => Option<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainNullableK`

This is `chain` + `fromNullable`, useful when working with optional values.




#### Signature

```typescript
export declare const chainNullableK: <A, B>(f: (a: A) => B) => (ma: Option<A>) => Option<NonNullable<B>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, fromNullable, chainNullableK } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'

interface Employee {
  readonly company?: {
    readonly address?: {
      readonly street?: {
        readonly name?: string
      }
    }
  }
}

const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }

assert.deepStrictEqual(
  pipe(
    fromNullable(employee1.company),
    chainNullableK(company => company.address),
    chainNullableK(address => address.street),
    chainNullableK(street => street.name),
  ),
  some('high street'),
)

const employee2: Employee = { company: { address: { street: {} } } }

assert.deepStrictEqual(
  pipe(
    fromNullable(employee2.company),
    chainNullableK(company => company.address),
    chainNullableK(address => address.street),
    chainNullableK(street => street.name),
  ),
  none,
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMap`




#### Signature

```typescript
export declare const flatMap: {
  <A, B>(f: (a: A) => Option<B>): (ma: Option<A>) => Option<B>
  <A, B>(ma: Option<A>, f: (a: A) => Option<B>): Option<B>
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
export declare const flatten: <A>(mma: Option<Option<A>>) => Option<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequence`




#### Signature

```typescript
export declare const sequence: Traversable1<URI>['sequence']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sequenceArray`

Equivalent to `ReadonlyArray#sequence(Applicative)`.




#### Signature

```typescript
export declare const sequenceArray: <A>(arr: ReadonlyArray<Option<A>>) => Option<ReadonlyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse`




#### Signature

```typescript
export declare const traverse: PipeableTraverse1<URI>
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
export declare const traverseArray: <A, B>(f: (a: A) => Option<B>) => (as: readonly A[]) => Option<readonly B[]>
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
export declare const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Option<B>,
) => (as: ReadonlyArray<A>) => Option<ReadonlyArray<B>>
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
export declare const traverseReadonlyArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Option<B>,
) => (as: readonly A[]) => Option<readonly B[]>
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
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Option<B>,
) => (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<B>>
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
export declare const URI = 'Option'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: Option<readonly []>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <A>(fa: Option<A>) => <B>(fab: Option<(a: A) => B>) => Option<B>
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
export declare const apFirst: <B>(second: Option<B>) => <A>(first: Option<A>) => Option<A>
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
export declare const apSecond: <B>(second: Option<B>) => <A>(first: Option<A>) => Option<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends OptionIterable<any>, A>(
  yieldFunction: (unwrap: <A>(ma: Option<A>) => OptionIterable<A>) => Generator<MA, A>,
) => Option<A>
```




---


### `duplicate`




#### Signature

```typescript
export declare const duplicate: <A>(ma: Option<A>) => Option<Option<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`

Returns `true` if `ma` contains `a`




#### Signature

```typescript
export declare function elem<A>(E: Eq<A>): {
  (a: A): (ma: Option<A>) => boolean
  (a: A, ma: Option<A>): boolean
}

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, elem } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'
import * as N from '@fp-tx/core/number'

assert.strictEqual(pipe(some(1), elem(N.Eq)(1)), true)
assert.strictEqual(pipe(some(1), elem(N.Eq)(2)), false)
assert.strictEqual(pipe(none, elem(N.Eq)(1)), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `exists`

Returns `true` if the predicate is satisfied by the wrapped value




#### Signature

```typescript
export declare const exists: <A>(predicate: Predicate<A>) => (ma: Option<A>) => boolean
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some, none, exists } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'

assert.strictEqual(
  pipe(
    some(1),
    exists(n => n > 0),
  ),
  true,
)
assert.strictEqual(
  pipe(
    some(1),
    exists(n => n > 1),
  ),
  false,
)
assert.strictEqual(
  pipe(
    none,
    exists(n => n > 0),
  ),
  false,
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`




#### Signature

```typescript
export declare const extend: <A, B>(f: (wa: Option<A>) => B) => (wa: Option<A>) => Option<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getApplyMonoid`~~

Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.




#### Signature

```typescript
export declare const getApplyMonoid: <A>(M: Monoid<A>) => Monoid<Option<A>>
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
export declare const getApplySemigroup: <A>(S: Semigroup<A>) => Semigroup<Option<A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFirstMonoid`~~

Use

```ts
import { first } from '@fp-tx/core/Semigroup'
import { getMonoid } from '@fp-tx/core/Option'

getMonoid(first())
```

Instead.


Monoid returning the left-most non-`None` value


| x | y | concat(x, y) | | ------- | ------- | ------------ | | none | none | none | | some(a) | none | some(a) | | none | some(b) | some(b) | | some(a) | some(b) | some(a) |




#### Signature

```typescript
export declare const getFirstMonoid: <A = never>() => Monoid<Option<A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**

#### Example

```typescript
import { getFirstMonoid, some, none } from '@fp-tx/core/Option'

const M = getFirstMonoid<number>()
assert.deepStrictEqual(M.concat(none, none), none)
assert.deepStrictEqual(M.concat(some(1), none), some(1))
assert.deepStrictEqual(M.concat(none, some(2)), some(2))
assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getLastMonoid`~~

Use

```ts
import { last } from '@fp-tx/core/Semigroup'
import { getMonoid } from '@fp-tx/core/Option'

getMonoid(last())
```

Instead.


Monoid returning the right-most non-`None` value


| x | y | concat(x, y) | | ------- | ------- | ------------ | | none | none | none | | some(a) | none | some(a) | | none | some(b) | some(b) | | some(a) | some(b) | some(b) |




#### Signature

```typescript
export declare const getLastMonoid: <A = never>() => Monoid<Option<A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**

#### Example

```typescript
import { getLastMonoid, some, none } from '@fp-tx/core/Option'

const M = getLastMonoid<number>()
assert.deepStrictEqual(M.concat(none, none), none)
assert.deepStrictEqual(M.concat(some(1), none), some(1))
assert.deepStrictEqual(M.concat(none, some(2)), some(2))
assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getRefinement`~~

Use `Refinement` module instead.




#### Signature

```typescript
export declare function getRefinement<A, B extends A>(getOption: (a: A) => Option<B>): Refinement<A, B>

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
) => (fa: Option<A>) => Option<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### ~~`mapNullable`~~

Use [`chainNullableK`](#chainnullablek) instead.




#### Signature

```typescript
export declare const mapNullable: <A, B>(f: (a: A) => B) => (ma: Option<A>) => Option<NonNullable<B>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`option`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `O.Functor` instead of `O.option` (where `O` is from `import O from 'fp-ts/Option'`)




#### Signature

```typescript
export declare const option: Monad1<URI> &
  Foldable1<URI> &
  Alternative1<URI> &
  Extend1<URI> &
  Witherable1<URI> &
  MonadThrow1<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `throwError`




#### Signature

```typescript
export declare const throwError: MonadThrow1<URI>['throwError']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zero`




#### Signature

```typescript
export declare const zero: <A>() => Option<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti