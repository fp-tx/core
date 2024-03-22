
# NonEmptyArray







### Instances

* [Alt](#alt)
* [Applicative](#applicative)
* [Apply](#apply)
* [Chain](#chain)
* [Comonad](#comonad)
* [Foldable](#foldable)
* [FoldableWithIndex](#foldablewithindex)
* [Functor](#functor)
* [FunctorWithIndex](#functorwithindex)
* [Monad](#monad)
* [Pointed](#pointed)
* [Traversable](#traversable)
* [TraversableWithIndex](#traversablewithindex)
* [getEq](#geteq)
* [getSemigroup](#getsemigroup)
* [getShow](#getshow)

### Constructors

* [makeBy](#makeby)
* [of](#of)
* [range](#range)
* [replicate](#replicate)

### Conversions

* [fromArray](#fromarray)
* [fromReadonlyNonEmptyArray](#fromreadonlynonemptyarray)

### Do notation

* [Do](#do)
* [apS](#aps)
* [bind](#bind)
* [bindTo](#bindto)

### Error handling

* [alt](#alt)
* [altW](#altw)

### Folding

* [foldMap](#foldmap)
* [foldMapWithIndex](#foldmapwithindex)
* [reduce](#reduce)
* [reduceRight](#reduceright)
* [reduceRightWithIndex](#reducerightwithindex)
* [reduceWithIndex](#reducewithindex)

### Legacy

* [chain](#chain)

### Mapping

* [flap](#flap)
* [map](#map)
* [mapWithIndex](#mapwithindex)

### Model

* [NonEmptyArray](#nonemptyarray)

### Pattern matching

* [matchLeft](#matchleft)
* [matchRight](#matchright)

### Sequencing

* [chainFirst](#chainfirst)
* [chainWithIndex](#chainwithindex)
* [flatMap](#flatmap)
* [flatten](#flatten)
* [traverseWithIndex](#traversewithindex)

### Traversing

* [sequence](#sequence)
* [traverse](#traverse)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ap](#ap)
* [apFirst](#apfirst)
* [apSecond](#apsecond)
* [chop](#chop)
* [chunksOf](#chunksof)
* [concat](#concat)
* [concatAll](#concatall)
* [concatW](#concatw)
* ~~[cons](#cons)~~ (deprecated)
* [copy](#copy)
* [duplicate](#duplicate)
* [extend](#extend)
* [extract](#extract)
* ~~[filter](#filter)~~ (deprecated)
* ~~[filterWithIndex](#filterwithindex)~~ (deprecated)
* ~~[fold](#fold)~~ (deprecated)
* [getUnionSemigroup](#getunionsemigroup)
* [group](#group)
* [groupBy](#groupby)
* ~~[groupSort](#groupsort)~~ (deprecated)
* [head](#head)
* [init](#init)
* [insertAt](#insertat)
* [intercalate](#intercalate)
* [intersperse](#intersperse)
* [last](#last)
* [let](#let)
* [max](#max)
* [min](#min)
* [modifyAt](#modifyat)
* [modifyHead](#modifyhead)
* [modifyLast](#modifylast)
* ~~[nonEmptyArray](#nonemptyarray)~~ (deprecated)
* [prependAll](#prependall)
* ~~[prependToAll](#prependtoall)~~ (deprecated)
* [reverse](#reverse)
* [rotate](#rotate)
* ~~[snoc](#snoc)~~ (deprecated)
* [sort](#sort)
* [sortBy](#sortby)
* [splitAt](#splitat)
* [tail](#tail)
* [unappend](#unappend)
* ~~[uncons](#uncons)~~ (deprecated)
* [union](#union)
* [uniq](#uniq)
* [unprepend](#unprepend)
* ~~[unsnoc](#unsnoc)~~ (deprecated)
* [unzip](#unzip)
* [updateAt](#updateat)
* [updateHead](#updatehead)
* [updateLast](#updatelast)
* [zip](#zip)
* [zipWith](#zipwith)

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
export declare const Chain: Chain1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad`




#### Signature

```typescript
export declare const Comonad: Comonad1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable`




#### Signature

```typescript
export declare const Foldable: Foldable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FoldableWithIndex`




#### Signature

```typescript
export declare const FoldableWithIndex: FoldableWithIndex1<URI, number>
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


### `FunctorWithIndex`




#### Signature

```typescript
export declare const FunctorWithIndex: FunctorWithIndex1<URI, number>
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


### `Traversable`




#### Signature

```typescript
export declare const Traversable: Traversable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraversableWithIndex`




#### Signature

```typescript
export declare const TraversableWithIndex: TraversableWithIndex1<URI, number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare const getEq: <A>(E: Eq<A>) => Eq<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getEq } from '@fp-tx/core/NonEmptyArray'
import * as N from '@fp-tx/core/number'

const E = getEq(N.Eq)
assert.strictEqual(E.equals([1, 2], [1, 2]), true)
assert.strictEqual(E.equals([1, 2], [1, 3]), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`

Builds a `Semigroup` instance for `NonEmptyArray`




#### Signature

```typescript
export declare const getSemigroup: <A = never>() => Semigroup<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare const getShow: <A>(S: Show<A>) => Show<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `makeBy`

Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.


**Note**. `n` is normalized to a natural number.




#### Signature

```typescript
export declare const makeBy: <A>(f: (i: number) => A) => (n: number) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { makeBy } from '@fp-tx/core/NonEmptyArray'
import { pipe } from '@fp-tx/core/function'

const double = (n: number): number => n * 2
assert.deepStrictEqual(pipe(5, makeBy(double)), [0, 2, 4, 6, 8])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <A>(a: A) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `range`

Create a `NonEmptyArray` containing a range of integers, including both endpoints.




#### Signature

```typescript
export declare const range: (start: number, end: number) => NonEmptyArray<number>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { range } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `replicate`

Create a `NonEmptyArray` containing a value repeated the specified number of times.


**Note**. `n` is normalized to a natural number.




#### Signature

```typescript
export declare const replicate: <A>(a: A) => (n: number) => RNEA.ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { replicate } from '@fp-tx/core/NonEmptyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe(3, replicate('a')), ['a', 'a', 'a'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromArray`

Builds a `NonEmptyArray` from an `Array` returning `none` if `as` is an empty array




#### Signature

```typescript
export declare const fromArray: <A>(as: A[]) => Option<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReadonlyNonEmptyArray`




#### Signature

```typescript
export declare const fromReadonlyNonEmptyArray: <A>(as: ReadonlyNonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: NonEmptyArray<{}>
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
  fb: NonEmptyArray<B>,
) => (fa: NonEmptyArray<A>) => NonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
  f: (a: A) => NonEmptyArray<B>,
) => (ma: NonEmptyArray<A>) => NonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
) => <A>(fa: NonEmptyArray<A>) => NonEmptyArray<{ readonly [K in N]: A }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `alt`

Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to types of kind `* -> *`.


In case of `NonEmptyArray` concatenates the inputs into a single array.




#### Signature

```typescript
export declare const alt: <A>(that: LazyArg<NonEmptyArray<A>>) => (fa: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as NEA from '@fp-tx/core/NonEmptyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    NEA.alt(() => [4, 5]),
  ),
  [1, 2, 3, 4, 5],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `altW`

Less strict version of [`alt`](#alt).


The `W` suffix (short for **W**idening) means that the return types will be merged.




#### Signature

```typescript
export declare const altW: <B>(that: LazyArg<NonEmptyArray<B>>) => <A>(as: NonEmptyArray<A>) => NonEmptyArray<B | A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as NEA from '@fp-tx/core/NonEmptyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3] as NEA.NonEmptyArray<number>,
    NEA.altW(() => ['a', 'b']),
  ),
  [1, 2, 3, 'a', 'b'],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`




#### Signature

```typescript
export declare const foldMap: <S>(S: Semigroup<S>) => <A>(f: (a: A) => S) => (fa: NonEmptyArray<A>) => S
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMapWithIndex`




#### Signature

```typescript
export declare const foldMapWithIndex: <S>(
  S: Semigroup<S>,
) => <A>(f: (i: number, a: A) => S) => (fa: NonEmptyArray<A>) => S
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: NonEmptyArray<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: NonEmptyArray<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRightWithIndex`




#### Signature

```typescript
export declare const reduceRightWithIndex: <A, B>(b: B, f: (i: number, a: A, b: B) => B) => (fa: NonEmptyArray<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceWithIndex`




#### Signature

```typescript
export declare const reduceWithIndex: <A, B>(b: B, f: (i: number, b: B, a: A) => B) => (fa: NonEmptyArray<A>) => B
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
export declare const chain: <A, B>(f: (a: A) => NonEmptyArray<B>) => (ma: NonEmptyArray<A>) => NonEmptyArray<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: NonEmptyArray<(a: A) => B>) => NonEmptyArray<B>
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
export declare const map: <A, B>(f: (a: A) => B) => (as: NonEmptyArray<A>) => NonEmptyArray<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapWithIndex`




#### Signature

```typescript
export declare const mapWithIndex: <A, B>(f: (i: number, a: A) => B) => (as: NonEmptyArray<A>) => NonEmptyArray<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `NonEmptyArray`




#### Signature

```typescript
export interface NonEmptyArray<A> extends Array<A> {
  0: A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `matchLeft`

Break an `Array` into its first element and remaining elements.




#### Signature

```typescript
export declare const matchLeft: <A, B>(f: (head: A, tail: A[]) => B) => (as: NonEmptyArray<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchRight`

Break an `Array` into its initial elements and the last element.




#### Signature

```typescript
export declare const matchRight: <A, B>(f: (init: A[], last: A) => B) => (as: NonEmptyArray<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `chainFirst`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const chainFirst: <A, B>(f: (a: A) => NonEmptyArray<B>) => (first: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainWithIndex`




#### Signature

```typescript
export declare const chainWithIndex: <A, B>(
  f: (i: number, a: A) => NonEmptyArray<B>,
) => (as: NonEmptyArray<A>) => NonEmptyArray<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMap`




#### Signature

```typescript
export declare const flatMap: {
  <A, B>(f: (a: A, i: number) => NonEmptyArray<B>): (ma: NonEmptyArray<A>) => NonEmptyArray<B>
  <A, B>(ma: NonEmptyArray<A>, f: (a: A, i: number) => NonEmptyArray<B>): NonEmptyArray<B>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as NEA from '@fp-tx/core/NonEmptyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    NEA.flatMap(n => [`a${n}`, `b${n}`]),
  ),
  ['a1', 'b1', 'a2', 'b2', 'a3', 'b3'],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`




#### Signature

```typescript
export declare const flatten: <A>(mma: NonEmptyArray<NonEmptyArray<A>>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseWithIndex`




#### Signature

```typescript
export declare const traverseWithIndex: PipeableTraverseWithIndex1<URI, number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequence`




#### Signature

```typescript
export declare const sequence: Traversable1<URI>['sequence']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse`




#### Signature

```typescript
export declare const traverse: PipeableTraverse1<URI>
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
export declare const URI = 'NonEmptyArray'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ap`

Apply a function to an argument under a type constructor.




#### Signature

```typescript
export declare const ap: <A>(as: NonEmptyArray<A>) => <B>(fab: NonEmptyArray<(a: A) => B>) => NonEmptyArray<B>
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
export declare const apFirst: <B>(second: NonEmptyArray<B>) => <A>(first: NonEmptyArray<A>) => NonEmptyArray<A>
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
export declare const apSecond: <B>(second: NonEmptyArray<B>) => <A>(first: NonEmptyArray<A>) => NonEmptyArray<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chop`




#### Signature

```typescript
export declare const chop: <A, B>(f: (as: NonEmptyArray<A>) => [B, A[]]) => (as: NonEmptyArray<A>) => NonEmptyArray<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chunksOf`




#### Signature

```typescript
export declare const chunksOf: (n: number) => <A>(as: NonEmptyArray<A>) => NonEmptyArray<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concat`




#### Signature

```typescript
export declare function concat<A>(second: NonEmptyArray<A>): (first: Array<A>) => NonEmptyArray<A>



export declare function concat<A>(second: Array<A>): (first: NonEmptyArray<A>) => NonEmptyArray<A>



export declare function concat<A>(first: Array<A>, second: NonEmptyArray<A>): NonEmptyArray<A>



export declare function concat<A>(first: NonEmptyArray<A>, second: Array<A>): NonEmptyArray<A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concatAll`




#### Signature

```typescript
export declare const concatAll: <A>(S: Semigroup<A>) => (as: NonEmptyArray<A>) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concatW`




#### Signature

```typescript
export declare function concatW<B>(second: NonEmptyArray<B>): <A>(first: Array<A>) => NonEmptyArray<A | B>



export declare function concatW<B>(second: Array<B>): <A>(first: NonEmptyArray<A>) => NonEmptyArray<A | B>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`cons`~~

Use [`prepend`](./Array#prepend) instead.




#### Signature

```typescript
export declare function cons<A>(head: A): (tail: Array<A>) => NonEmptyArray<A>



export declare function cons<A>(head: A, tail: Array<A>): NonEmptyArray<A>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `copy`




#### Signature

```typescript
export declare const copy: <A>(as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `duplicate`




#### Signature

```typescript
export declare const duplicate: <A>(ma: NonEmptyArray<A>) => NonEmptyArray<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`




#### Signature

```typescript
export declare const extend: <A, B>(f: (as: NonEmptyArray<A>) => B) => (as: NonEmptyArray<A>) => NonEmptyArray<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extract`




#### Signature

```typescript
export declare const extract: Comonad1<URI>['extract']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`filter`~~

Use [`filter`](./Array#filter) instead.




#### Signature

```typescript
export declare function filter<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: NonEmptyArray<A>) => Option<NonEmptyArray<B>>



export declare function filter<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: NonEmptyArray<B>) => Option<NonEmptyArray<B>>



export declare function filter<A>(predicate: Predicate<A>): (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`filterWithIndex`~~

Use [`filterWithIndex`](./Array#filterwithindex) instead.




#### Signature

```typescript
export declare const filterWithIndex: <A>(
  predicate: (i: number, a: A) => boolean,
) => (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`fold`~~

Use [`concatAll`](#concatall) instead.




#### Signature

```typescript
export declare const fold: <A>(S: Semigroup<A>) => (fa: NonEmptyArray<A>) => A
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionSemigroup`




#### Signature

```typescript
export declare const getUnionSemigroup: <A>(E: Eq<A>) => Semigroup<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `group`

Group equal, consecutive elements of an array into non empty arrays.




#### Signature

```typescript
export declare function group<B>(E: Eq<B>): {
  <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<NonEmptyArray<A>>
  <A extends B>(as: Array<A>): Array<NonEmptyArray<A>>
}

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { group } from '@fp-tx/core/NonEmptyArray'
import * as N from '@fp-tx/core/number'

assert.deepStrictEqual(group(N.Ord)([1, 2, 1, 1]), [[1], [2], [1, 1]])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `groupBy`

Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning function on each element, and grouping the results according to values returned




#### Signature

```typescript
export declare const groupBy: <A>(f: (a: A) => string) => (as: A[]) => Record<string, NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { groupBy } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
  '1': ['a', 'b'],
  '2': ['ab'],
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`groupSort`~~

This is just `sort` followed by `group`.




#### Signature

```typescript
export declare function groupSort<B>(O: Ord<B>): {
  <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<NonEmptyArray<A>>
  <A extends B>(as: Array<A>): Array<NonEmptyArray<A>>
}

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `head`




#### Signature

```typescript
export declare const head: <A>(nea: NonEmptyArray<A>) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `init`

Get all but the last element of a non empty array, creating a new array.




#### Signature

```typescript
export declare const init: <A>(as: NonEmptyArray<A>) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { init } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
assert.deepStrictEqual(init([1]), [])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `insertAt`




#### Signature

```typescript
export declare const insertAt: <A>(i: number, a: A) => (as: A[]) => Option<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intercalate`

Places an element in between members of a `NonEmptyArray`, then folds the results using the provided `Semigroup`.




#### Signature

```typescript
export declare const intercalate: <A>(S: Semigroup<A>) => (middle: A) => (as: NonEmptyArray<A>) => A
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { intercalate } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(intercalate(S.Semigroup)('-')(['a', 'b', 'c']), 'a-b-c')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersperse`

Places an element in between members of an array




#### Signature

```typescript
export declare const intersperse: <A>(middle: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { intersperse } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `last`




#### Signature

```typescript
export declare const last: <A>(nea: NonEmptyArray<A>) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `let`




#### Signature

```typescript
export declare const let_: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => (fa: NonEmptyArray<A>) => NonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `max`




#### Signature

```typescript
export declare const max: <A>(ord: Ord<A>) => (nea: NonEmptyArray<A>) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `min`




#### Signature

```typescript
export declare const min: <A>(ord: Ord<A>) => (nea: NonEmptyArray<A>) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyAt`




#### Signature

```typescript
export declare const modifyAt: <A>(i: number, f: (a: A) => A) => (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyHead`

Apply a function to the head, creating a new `NonEmptyArray`.




#### Signature

```typescript
export declare const modifyHead: <A>(f: Endomorphism<A>) => (as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyLast`

Apply a function to the last element, creating a new `NonEmptyArray`.




#### Signature

```typescript
export declare const modifyLast: <A>(f: Endomorphism<A>) => (as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`nonEmptyArray`~~

This instance is deprecated, use small, specific instances instead.


For example if a function needs a `Functor` instance, pass `NEA.Functor` instead of `NEA.nonEmptyArray` (where `NEA` is from `import NEA from 'fp-ts/NonEmptyArray'`)




#### Signature

```typescript
export declare const nonEmptyArray: Monad1<URI> &
  Comonad1<URI> &
  TraversableWithIndex1<URI, number> &
  FunctorWithIndex1<URI, number> &
  FoldableWithIndex1<URI, number> &
  Alt1<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `prependAll`

Prepend an element to every member of an array




#### Signature

```typescript
export declare const prependAll: <A>(middle: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { prependAll } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`prependToAll`~~

Use [`prependAll`](#prependall) instead.




#### Signature

```typescript
export declare const prependToAll: <A>(middle: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`




#### Signature

```typescript
export declare const reverse: <A>(as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rotate`

Rotate a `NonEmptyArray` by `n` steps.




#### Signature

```typescript
export declare const rotate: (n: number) => <A>(as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { rotate } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
assert.deepStrictEqual(rotate(-2)([1, 2, 3, 4, 5]), [3, 4, 5, 1, 2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`snoc`~~

Use [`append`](./Array#append) instead.




#### Signature

```typescript
export declare const snoc: <A>(init: A[], end: A) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sort`




#### Signature

```typescript
export declare const sort: <B>(O: Ord<B>) => <A extends B>(as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sortBy`

Sort the elements of a `NonEmptyArray` in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`, etc...




#### Signature

```typescript
export declare const sortBy: <B>(ords: Ord<B>[]) => <A extends B>(as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as NEA from '@fp-tx/core/NonEmptyArray'
import { contramap } from '@fp-tx/core/Ord'
import * as S from '@fp-tx/core/string'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

interface Person {
  name: string
  age: number
}

const byName = pipe(
  S.Ord,
  contramap((p: Person) => p.name),
)

const byAge = pipe(
  N.Ord,
  contramap((p: Person) => p.age),
)

const sortByNameByAge = NEA.sortBy([byName, byAge])

const persons: NEA.NonEmptyArray<Person> = [
  { name: 'a', age: 1 },
  { name: 'b', age: 3 },
  { name: 'c', age: 2 },
  { name: 'b', age: 2 },
]

assert.deepStrictEqual(sortByNameByAge(persons), [
  { name: 'a', age: 1 },
  { name: 'b', age: 2 },
  { name: 'b', age: 3 },
  { name: 'c', age: 2 },
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `splitAt`

Splits a `NonEmptyArray` into two pieces, the first piece has max `n` elements.




#### Signature

```typescript
export declare const splitAt: (n: number) => <A>(as: NonEmptyArray<A>) => [NonEmptyArray<A>, A[]]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tail`




#### Signature

```typescript
export declare const tail: <A>(as: NonEmptyArray<A>) => A[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unappend`

Return the tuple of the `init` and the `last`.




#### Signature

```typescript
export declare const unappend: <A>(as: NonEmptyArray<A>) => [A[], A]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { unappend } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`uncons`~~

Use [`unprepend`](#unprepend) instead.




#### Signature

```typescript
export declare const uncons: <A>(as: NonEmptyArray<A>) => [A, Array<A>]
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `union`




#### Signature

```typescript
export declare const union: <A>(E: Eq<A>) => (second: NonEmptyArray<A>) => (first: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `uniq`

Remove duplicates from a `NonEmptyArray`, keeping the first occurrence of an element.




#### Signature

```typescript
export declare const uniq: <A>(E: Eq<A>) => (as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { uniq } from '@fp-tx/core/NonEmptyArray'
import * as N from '@fp-tx/core/number'

assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unprepend`

Return the tuple of the `head` and the `tail`.




#### Signature

```typescript
export declare const unprepend: <A>(as: NonEmptyArray<A>) => [A, A[]]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { unprepend } from '@fp-tx/core/NonEmptyArray'

assert.deepStrictEqual(unprepend([1, 2, 3]), [1, [2, 3]])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`unsnoc`~~

Use [`unappend`](#unappend) instead.




#### Signature

```typescript
export declare const unsnoc: <A>(as: NonEmptyArray<A>) => [Array<A>, A]
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unzip`




#### Signature

```typescript
export declare const unzip: <A, B>(abs: NonEmptyArray<[A, B]>) => [NonEmptyArray<A>, NonEmptyArray<B>]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateAt`




#### Signature

```typescript
export declare const updateAt: <A>(i: number, a: A) => (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateHead`

Change the head, creating a new `NonEmptyArray`.




#### Signature

```typescript
export declare const updateHead: <A>(a: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateLast`

Change the last element, creating a new `NonEmptyArray`.




#### Signature

```typescript
export declare const updateLast: <A>(a: A) => (as: NonEmptyArray<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zip`




#### Signature

```typescript
export declare function zip<B>(bs: NonEmptyArray<B>): <A>(as: NonEmptyArray<A>) => NonEmptyArray<[A, B]>



export declare function zip<A, B>(as: NonEmptyArray<A>, bs: NonEmptyArray<B>): NonEmptyArray<[A, B]>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zipWith`




#### Signature

```typescript
export declare const zipWith: <A, B, C>(
  as: NonEmptyArray<A>,
  bs: NonEmptyArray<B>,
  f: (a: A, b: B) => C,
) => NonEmptyArray<C>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti