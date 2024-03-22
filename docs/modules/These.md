
# These







### Instances

* [Bifunctor](#bifunctor)
* [Foldable](#foldable)
* [FromEither](#fromeither)
* [FromThese](#fromthese)
* [Functor](#functor)
* [Pointed](#pointed)
* [Traversable](#traversable)
* [getApplicative](#getapplicative)
* [getApply](#getapply)
* [getChain](#getchain)
* [getEq](#geteq)
* [getMonad](#getmonad)
* [getSemigroup](#getsemigroup)
* [getShow](#getshow)

### Constructors

* [both](#both)
* [left](#left)
* [leftOrBoth](#leftorboth)
* [of](#of)
* [right](#right)
* [rightOrBoth](#rightorboth)

### Conversions

* [fromOption](#fromoption)
* [fromOptions](#fromoptions)
* [getLeft](#getleft)
* [getLeftOnly](#getleftonly)
* [getRight](#getright)
* [getRightOnly](#getrightonly)
* [toTuple2](#totuple2)

### Error handling

* [mapLeft](#mapleft)

### Folding

* [foldMap](#foldmap)
* [reduce](#reduce)
* [reduceRight](#reduceright)

### Lifting

* [fromOptionK](#fromoptionk)
* [fromPredicate](#frompredicate)

### Mapping

* [bimap](#bimap)
* [flap](#flap)
* [map](#map)

### Model

* [Both](#both)
* [These](#these)

### Pattern matching

* [fold](#fold)
* [foldW](#foldw)
* [match](#match)
* [matchW](#matchw)

### Refinements

* [isBoth](#isboth)
* [isLeft](#isleft)
* [isRight](#isright)

### Traversing

* [sequence](#sequence)
* [traverse](#traverse)
* [traverseReadonlyArrayWithIndex](#traversereadonlyarraywithindex)
* [traverseReadonlyNonEmptyArrayWithIndex](#traversereadonlynonemptyarraywithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ApT](#apt)
* [elem](#elem)
* [exists](#exists)
* [swap](#swap)
* ~~[these](#these)~~ (deprecated)
* ~~[toTuple](#totuple)~~ (deprecated)

## Instances


### `Bifunctor`




#### Signature

```typescript
export declare const Bifunctor: Bifunctor2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable`




#### Signature

```typescript
export declare const Foldable: Foldable2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither`




#### Signature

```typescript
export declare const FromEither: FromEither2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromThese`




#### Signature

```typescript
export declare const FromThese: FromThese2<URI>
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


### `Traversable`




#### Signature

```typescript
export declare const Traversable: Traversable2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicative`




#### Signature

```typescript
export declare function getApplicative<E>(S: Semigroup<E>): Applicative2C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApply`




#### Signature

```typescript
export declare const getApply: <E>(S: Semigroup<E>) => Apply2C<'These', E>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getChain`




#### Signature

```typescript
export declare function getChain<E>(S: Semigroup<E>): Chain2C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare function getEq<E, A>(EE: Eq<E>, EA: Eq<A>): Eq<These<E, A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonad`




#### Signature

```typescript
export declare function getMonad<E>(S: Semigroup<E>): Monad2C<URI, E> & MonadThrow2C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`




#### Signature

```typescript
export declare function getSemigroup<E, A>(SE: Semigroup<E>, SA: Semigroup<A>): Semigroup<These<E, A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare function getShow<E, A>(SE: Show<E>, SA: Show<A>): Show<These<E, A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `both`




#### Signature

```typescript
export declare function both<E, A>(left: E, right: A): These<E, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `left`




#### Signature

```typescript
export declare function left<E = never, A = never>(left: E): These<E, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftOrBoth`




#### Signature

```typescript
export declare function leftOrBoth<E>(e: E): <A>(ma: Option<A>) => These<E, A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { leftOrBoth, left, both } from '@fp-tx/core/These'
import { none, some } from '@fp-tx/core/Option'

assert.deepStrictEqual(leftOrBoth('a')(none), left('a'))
assert.deepStrictEqual(leftOrBoth('a')(some(1)), both('a', 1))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <E = never, A = never>(right: A) => These<E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`




#### Signature

```typescript
export declare function right<E = never, A = never>(right: A): These<E, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightOrBoth`




#### Signature

```typescript
export declare function rightOrBoth<A>(a: A): <E>(me: Option<E>) => These<E, A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { rightOrBoth, right, both } from '@fp-tx/core/These'
import { none, some } from '@fp-tx/core/Option'

assert.deepStrictEqual(rightOrBoth(1)(none), right(1))
assert.deepStrictEqual(rightOrBoth(1)(some('a')), both('a', 1))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => These<E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptions`

Takes a pair of `Option`s and attempts to create a `These` from them




#### Signature

```typescript
export declare const fromOptions: <E, A>(fe: Option<E>, fa: Option<A>) => Option<These<E, A>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { fromOptions, left, right, both } from '@fp-tx/core/These'
import { none, some } from '@fp-tx/core/Option'

assert.deepStrictEqual(fromOptions(none, none), none)
assert.deepStrictEqual(fromOptions(some('a'), none), some(left('a')))
assert.deepStrictEqual(fromOptions(none, some(1)), some(right(1)))
assert.deepStrictEqual(fromOptions(some('a'), some(1)), some(both('a', 1)))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getLeft`

Returns an `E` value if possible




#### Signature

```typescript
export declare function getLeft<E, A>(fa: These<E, A>): Option<E>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getLeft, left, right, both } from '@fp-tx/core/These'
import { none, some } from '@fp-tx/core/Option'

assert.deepStrictEqual(getLeft(left('a')), some('a'))
assert.deepStrictEqual(getLeft(right(1)), none)
assert.deepStrictEqual(getLeft(both('a', 1)), some('a'))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getLeftOnly`

Returns the `E` value if and only if the value is constructed with `Left`




#### Signature

```typescript
export declare function getLeftOnly<E, A>(fa: These<E, A>): Option<E>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getLeftOnly, left, right, both } from '@fp-tx/core/These'
import { none, some } from '@fp-tx/core/Option'

assert.deepStrictEqual(getLeftOnly(left('a')), some('a'))
assert.deepStrictEqual(getLeftOnly(right(1)), none)
assert.deepStrictEqual(getLeftOnly(both('a', 1)), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getRight`

Returns an `A` value if possible




#### Signature

```typescript
export declare function getRight<E, A>(fa: These<E, A>): Option<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getRight, left, right, both } from '@fp-tx/core/These'
import { none, some } from '@fp-tx/core/Option'

assert.deepStrictEqual(getRight(left('a')), none)
assert.deepStrictEqual(getRight(right(1)), some(1))
assert.deepStrictEqual(getRight(both('a', 1)), some(1))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getRightOnly`

Returns the `A` value if and only if the value is constructed with `Right`




#### Signature

```typescript
export declare function getRightOnly<E, A>(fa: These<E, A>): Option<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getRightOnly, left, right, both } from '@fp-tx/core/These'
import { none, some } from '@fp-tx/core/Option'

assert.deepStrictEqual(getRightOnly(left('a')), none)
assert.deepStrictEqual(getRightOnly(right(1)), some(1))
assert.deepStrictEqual(getRightOnly(both('a', 1)), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toTuple2`




#### Signature

```typescript
export declare const toTuple2: <E, A>(e: LazyArg<E>, a: LazyArg<A>) => (fa: These<E, A>) => readonly [E, A]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { toTuple2, left, right, both } from '@fp-tx/core/These'

assert.deepStrictEqual(
  toTuple2(
    () => 'a',
    () => 1,
  )(left('b')),
  ['b', 1],
)
assert.deepStrictEqual(
  toTuple2(
    () => 'a',
    () => 1,
  )(right(2)),
  ['a', 2],
)
assert.deepStrictEqual(
  toTuple2(
    () => 'a',
    () => 1,
  )(both('b', 2)),
  ['b', 2],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `mapLeft`

Map a function over the first type argument of a bifunctor.




#### Signature

```typescript
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: These<E, A>) => These<G, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`




#### Signature

```typescript
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: These<E, A>) => M
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: These<E, A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: These<E, A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromOptionK`




#### Signature

```typescript
export declare const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => These<E, B>
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
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => These<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => These<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => These<E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `bimap`

Map a pair of functions over the two type arguments of the bifunctor.




#### Signature

```typescript
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: These<E, A>) => These<G, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: These<E, (a: A) => B>) => These<E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: These<E, A>) => These<E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Both`




#### Signature

```typescript
export interface Both<E, A> {
  readonly _tag: 'Both'
  readonly left: E
  readonly right: A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `These`




#### Signature

```typescript
export type These<E, A> = Either<E, A> | Both<E, A>
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
export declare const fold: <E, A, B>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B,
) => (fa: These<E, A>) => B
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
export declare const foldW: <E, B, A, C, D>(
  onLeft: (e: E) => B,
  onRight: (a: A) => C,
  onBoth: (e: E, a: A) => D,
) => (fa: These<E, A>) => B | C | D
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`




#### Signature

```typescript
export declare const match: <E, A, B>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B,
) => (fa: These<E, A>) => B
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
export declare const matchW: <E, B, A, C, D>(
  onLeft: (e: E) => B,
  onRight: (a: A) => C,
  onBoth: (e: E, a: A) => D,
) => (fa: These<E, A>) => B | C | D
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Refinements


### `isBoth`

Returns `true` if the these is an instance of `Both`, `false` otherwise




#### Signature

```typescript
export declare function isBoth<E, A>(fa: These<E, A>): fa is Both<E, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isLeft`

Returns `true` if the these is an instance of `Left`, `false` otherwise




#### Signature

```typescript
export declare const isLeft: <E>(fa: These<E, unknown>) => fa is Left<E>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isRight`

Returns `true` if the these is an instance of `Right`, `false` otherwise




#### Signature

```typescript
export declare const isRight: <A>(fa: These<unknown, A>) => fa is Right<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequence`




#### Signature

```typescript
export declare const sequence: Traversable2<URI>['sequence']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse`




#### Signature

```typescript
export declare const traverse: PipeableTraverse2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(S))`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <E>(
  S: Semigroup<E>,
) => <A, B>(f: (index: number, a: A) => These<E, B>) => (as: readonly A[]) => These<E, readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndex`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(S))`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndex: <E>(
  S: Semigroup<E>,
) => <A, B>(
  f: (index: number, a: A) => These<E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => These<E, ReadonlyNonEmptyArray<B>>
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
export declare const URI = 'These'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: These<never, readonly []>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`




#### Signature

```typescript
export declare const elem: <A>(E: Eq<A>) => (a: A) => <E>(ma: These<E, A>) => boolean
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `exists`




#### Signature

```typescript
export declare const exists: <A>(predicate: Predicate<A>) => (ma: These<unknown, A>) => boolean
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `swap`




#### Signature

```typescript
export declare const swap: <E, A>(fa: These<E, A>) => These<A, E>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`these`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `T.Functor` instead of `T.these` (where `T` is from `import T from 'fp-ts/These'`)




#### Signature

```typescript
export declare const these: Functor2<URI> & Bifunctor2<URI> & Foldable2<URI> & Traversable2<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`toTuple`~~

Use [`toTuple2`](#totuple2) instead.




#### Signature

```typescript
export declare const toTuple: <E, A>(e: E, a: A) => (fa: These<E, A>) => [E, A]
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti