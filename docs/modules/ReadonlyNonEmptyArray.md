
# ReadonlyNonEmptyArray







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

### Comonad

* [extract](#extract)

### Constructors

* [makeBy](#makeby)
* [of](#of)
* [range](#range)
* [replicate](#replicate)

### Conversions

* [fromArray](#fromarray)
* [fromReadonlyArray](#fromreadonlyarray)

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

* [ReadonlyNonEmptyArray](#readonlynonemptyarray)

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
* [duplicate](#duplicate)
* [extend](#extend)
* ~~[filter](#filter)~~ (deprecated)
* ~~[filterWithIndex](#filterwithindex)~~ (deprecated)
* ~~[fold](#fold)~~ (deprecated)
* [getUnionSemigroup](#getunionsemigroup)
* [group](#group)
* [groupBy](#groupby)
* ~~[groupSort](#groupsort)~~ (deprecated)
* [head](#head)
* [init](#init)
* ~~[insertAt](#insertat)~~ (deprecated)
* [intercalate](#intercalate)
* [intersperse](#intersperse)
* [last](#last)
* [let](#let)
* [max](#max)
* [min](#min)
* [modifyAt](#modifyat)
* [modifyHead](#modifyhead)
* [modifyLast](#modifylast)
* [prependAll](#prependall)
* ~~[prependToAll](#prependtoall)~~ (deprecated)
* ~~[readonlyNonEmptyArray](#readonlynonemptyarray)~~ (deprecated)
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
export declare const Chain: Chain1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad`




#### Signature

```typescript
export declare const Comonad: Comonad1<URI>
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


### `FoldableWithIndex`




#### Signature

```typescript
export declare const FoldableWithIndex: FoldableWithIndex1<URI, number>
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


### `FunctorWithIndex`




#### Signature

```typescript
export declare const FunctorWithIndex: FunctorWithIndex1<URI, number>
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


### `TraversableWithIndex`




#### Signature

```typescript
export declare const TraversableWithIndex: TraversableWithIndex1<URI, number>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare const getEq: <A>(E: Eq<A>) => Eq<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getEq } from '@fp-tx/core/ReadonlyNonEmptyArray'
import * as N from '@fp-tx/core/number'

const E = getEq(N.Eq)
assert.strictEqual(E.equals([1, 2], [1, 2]), true)
assert.strictEqual(E.equals([1, 2], [1, 3]), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`

Builds a `Semigroup` instance for `ReadonlyNonEmptyArray`




#### Signature

```typescript
export declare const getSemigroup: <A = never>() => Se.Semigroup<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare const getShow: <A>(S: Show<A>) => Show<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Comonad


### `extract`




#### Signature

```typescript
export declare const extract: Comonad1<URI>['extract']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `makeBy`

Return a `ReadonlyNonEmptyArray` of length `n` with element `i` initialized with `f(i)`.


**Note**. `n` is normalized to a natural number.




#### Signature

```typescript
export declare const makeBy: <A>(f: (i: number) => A) => (n: number) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { makeBy } from '@fp-tx/core/ReadonlyNonEmptyArray'
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
export declare const of: <A>(a: A) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `range`

Create a `ReadonlyNonEmptyArray` containing a range of integers, including both endpoints.




#### Signature

```typescript
export declare const range: (start: number, end: number) => ReadonlyNonEmptyArray<number>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { range } from '@fp-tx/core/ReadonlyNonEmptyArray'

assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `replicate`

Create a `ReadonlyNonEmptyArray` containing a value repeated the specified number of times.


**Note**. `n` is normalized to a natural number.




#### Signature

```typescript
export declare const replicate: <A>(a: A) => (n: number) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { replicate } from '@fp-tx/core/ReadonlyNonEmptyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe(3, replicate('a')), ['a', 'a', 'a'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromArray`




#### Signature

```typescript
export declare const fromArray: <A>(as: A[]) => Option<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReadonlyArray`

Return a `ReadonlyNonEmptyArray` from a `ReadonlyArray` returning `none` if the input is empty.




#### Signature

```typescript
export declare const fromReadonlyArray: <A>(as: readonly A[]) => Option<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: ReadonlyNonEmptyArray<{}>
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
  fb: ReadonlyNonEmptyArray<B>,
) => (
  fa: ReadonlyNonEmptyArray<A>,
) => ReadonlyNonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
  f: (a: A) => ReadonlyNonEmptyArray<B>,
) => (
  ma: ReadonlyNonEmptyArray<A>,
) => ReadonlyNonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
) => <A>(fa: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<{ readonly [K in N]: A }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `alt`

Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to types of kind `* -> *`.


In case of `ReadonlyNonEmptyArray` concatenates the inputs into a single array.




#### Signature

```typescript
export declare const alt: <A>(
  that: LazyArg<ReadonlyNonEmptyArray<A>>,
) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    RNEA.alt(() => [4, 5]),
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
export declare const altW: <B>(
  that: LazyArg<ReadonlyNonEmptyArray<B>>,
) => <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B | A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3] as RNEA.ReadonlyNonEmptyArray<number>,
    RNEA.altW(() => ['a', 'b']),
  ),
  [1, 2, 3, 'a', 'b'],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`

**Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.




#### Signature

```typescript
export declare const foldMap: <S>(S: Se.Semigroup<S>) => <A>(f: (a: A) => S) => (as: ReadonlyNonEmptyArray<A>) => S
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMapWithIndex`

**Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.




#### Signature

```typescript
export declare const foldMapWithIndex: <S>(
  S: Se.Semigroup<S>,
) => <A>(f: (i: number, a: A) => S) => (as: ReadonlyNonEmptyArray<A>) => S
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (as: ReadonlyNonEmptyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (as: ReadonlyNonEmptyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRightWithIndex`




#### Signature

```typescript
export declare const reduceRightWithIndex: <A, B>(
  b: B,
  f: (i: number, a: A, b: B) => B,
) => (as: ReadonlyNonEmptyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceWithIndex`




#### Signature

```typescript
export declare const reduceWithIndex: <A, B>(
  b: B,
  f: (i: number, b: B, a: A) => B,
) => (as: ReadonlyNonEmptyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <A, B>(
  f: (a: A) => ReadonlyNonEmptyArray<B>,
) => (ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: ReadonlyNonEmptyArray<(a: A) => B>) => ReadonlyNonEmptyArray<B>
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
export declare const map: <A, B>(f: (a: A) => B) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapWithIndex`




#### Signature

```typescript
export declare const mapWithIndex: <A, B>(
  f: (i: number, a: A) => B,
) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `ReadonlyNonEmptyArray`




#### Signature

```typescript
export type ReadonlyNonEmptyArray<A> = ReadonlyArray<A> & {
  readonly 0: A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `matchLeft`

Break a `ReadonlyArray` into its first element and remaining elements.




#### Signature

```typescript
export declare const matchLeft: <A, B>(f: (head: A, tail: readonly A[]) => B) => (as: ReadonlyNonEmptyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchRight`

Break a `ReadonlyArray` into its initial elements and the last element.




#### Signature

```typescript
export declare const matchRight: <A, B>(f: (init: readonly A[], last: A) => B) => (as: ReadonlyNonEmptyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `chainFirst`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const chainFirst: <A, B>(
  f: (a: A) => ReadonlyNonEmptyArray<B>,
) => (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RA from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    RA.chainFirst(() => ['a', 'b']),
  ),
  [1, 1, 2, 2, 3, 3],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainWithIndex`




#### Signature

```typescript
export declare const chainWithIndex: <A, B>(
  f: (i: number, a: A) => ReadonlyNonEmptyArray<B>,
) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMap`




#### Signature

```typescript
export declare const flatMap: {
  <A, B>(f: (a: A, i: number) => ReadonlyNonEmptyArray<B>): (ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
  <A, B>(ma: ReadonlyNonEmptyArray<A>, f: (a: A, i: number) => ReadonlyNonEmptyArray<B>): ReadonlyNonEmptyArray<B>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    RNEA.flatMap(n => [`a${n}`, `b${n}`]),
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
export declare const flatten: <A>(mma: ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseWithIndex`




#### Signature

```typescript
export declare const traverseWithIndex: PipeableTraverseWithIndex1<URI, number>
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


### `traverse`




#### Signature

```typescript
export declare const traverse: PipeableTraverse1<URI>
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
export declare const URI = 'ReadonlyNonEmptyArray'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ap`




#### Signature

```typescript
export declare const ap: <A>(
  as: ReadonlyNonEmptyArray<A>,
) => <B>(fab: ReadonlyNonEmptyArray<(a: A) => B>) => ReadonlyNonEmptyArray<B>
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
export declare const apFirst: <B>(
  second: ReadonlyNonEmptyArray<B>,
) => <A>(first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
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
export declare const apSecond: <B>(
  second: ReadonlyNonEmptyArray<B>,
) => <A>(first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chop`

A useful recursion pattern for processing a `ReadonlyNonEmptyArray` to produce a new `ReadonlyNonEmptyArray`, often used for "chopping" up the input `ReadonlyNonEmptyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyNonEmptyArray` and produce a value and the tail of the `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const chop: <A, B>(
  f: (as: ReadonlyNonEmptyArray<A>) => readonly [B, readonly A[]],
) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chunksOf`

Splits a `ReadonlyNonEmptyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of the `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const chunksOf: (
  n: number,
) => <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concat`




#### Signature

```typescript
export declare function concat<A>(
  second: ReadonlyNonEmptyArray<A>,
): (first: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>



export declare function concat<A>(
  second: ReadonlyArray<A>,
): (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>



export declare function concat<A>(first: ReadonlyArray<A>, second: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A>



export declare function concat<A>(first: ReadonlyNonEmptyArray<A>, second: ReadonlyArray<A>): ReadonlyNonEmptyArray<A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concatAll`




#### Signature

```typescript
export declare const concatAll: <A>(S: Se.Semigroup<A>) => (as: ReadonlyNonEmptyArray<A>) => A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concatW`




#### Signature

```typescript
export declare function concatW<B>(
  second: ReadonlyNonEmptyArray<B>,
): <A>(first: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A | B>



export declare function concatW<B>(
  second: ReadonlyArray<B>,
): <A>(first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A | B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`cons`~~

Use [`prepend`](./ReadonlyArray#prepend) instead.




#### Signature

```typescript
export declare function cons<A>(head: A): (tail: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>



export declare function cons<A>(head: A, tail: ReadonlyArray<A>): ReadonlyNonEmptyArray<A>

```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `duplicate`




#### Signature

```typescript
export declare const duplicate: <A>(ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`




#### Signature

```typescript
export declare const extend: <A, B>(
  f: (as: ReadonlyNonEmptyArray<A>) => B,
) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`filter`~~

Use [`filter`](./ReadonlyArray#filter) instead.




#### Signature

```typescript
export declare function filter<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<B>>



export declare function filter<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyNonEmptyArray<B>) => Option<ReadonlyNonEmptyArray<B>>



export declare function filter<A>(
  predicate: Predicate<A>,
): (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>

```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`filterWithIndex`~~

Use [`filterWithIndex`](./ReadonlyArray#filterwithindex) instead.




#### Signature

```typescript
export declare const filterWithIndex: <A>(
  predicate: (i: number, a: A) => boolean,
) => (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`fold`~~

Use [`concatAll`](#concatall) instead.




#### Signature

```typescript
export declare const fold: <A>(S: Se.Semigroup<A>) => (as: ReadonlyNonEmptyArray<A>) => A
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionSemigroup`




#### Signature

```typescript
export declare const getUnionSemigroup: <A>(E: Eq<A>) => Se.Semigroup<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `group`

Group equal, consecutive elements of a `ReadonlyArray` into `ReadonlyNonEmptyArray`s.




#### Signature

```typescript
export declare function group<B>(E: Eq<B>): {
  <A extends B>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>
  <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<ReadonlyNonEmptyArray<A>>
}

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { group } from '@fp-tx/core/ReadonlyNonEmptyArray'
import * as N from '@fp-tx/core/number'

assert.deepStrictEqual(group(N.Eq)([1, 2, 1, 1]), [[1], [2], [1, 1]])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `groupBy`

Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning function on each element, and grouping the results according to values returned




#### Signature

```typescript
export declare const groupBy: <A>(
  f: (a: A) => string,
) => (as: readonly A[]) => Readonly<Record<string, ReadonlyNonEmptyArray<A>>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { groupBy } from '@fp-tx/core/ReadonlyNonEmptyArray'

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
  <A extends B>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>
  <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<ReadonlyNonEmptyArray<A>>
}

```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `head`




#### Signature

```typescript
export declare const head: <A>(as: ReadonlyNonEmptyArray<A>) => A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `init`

Get all but the last element of a non empty array, creating a new array.




#### Signature

```typescript
export declare const init: <A>(as: ReadonlyNonEmptyArray<A>) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { init } from '@fp-tx/core/ReadonlyNonEmptyArray'

assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
assert.deepStrictEqual(init([1]), [])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`insertAt`~~

Use [`insertAt`](./ReadonlyArray#insertat) instead.




#### Signature

```typescript
export declare const insertAt: <A>(i: number, a: A) => (as: readonly A[]) => Option<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intercalate`

Places an element in between members of a `ReadonlyNonEmptyArray`, then folds the results using the provided `Semigroup`.




#### Signature

```typescript
export declare const intercalate: <A>(S: Se.Semigroup<A>) => (middle: A) => (as: ReadonlyNonEmptyArray<A>) => A
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { intercalate } from '@fp-tx/core/ReadonlyNonEmptyArray'

assert.deepStrictEqual(intercalate(S.Semigroup)('-')(['a', 'b', 'c']), 'a-b-c')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersperse`

Places an element in between members of a `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const intersperse: <A>(middle: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { intersperse } from '@fp-tx/core/ReadonlyNonEmptyArray'

assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `last`




#### Signature

```typescript
export declare const last: <A>(as: ReadonlyNonEmptyArray<A>) => A
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
) => (
  fa: ReadonlyNonEmptyArray<A>,
) => ReadonlyNonEmptyArray<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `max`




#### Signature

```typescript
export declare const max: <A>(O: Ord<A>) => (as: ReadonlyNonEmptyArray<A>) => A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `min`




#### Signature

```typescript
export declare const min: <A>(O: Ord<A>) => (as: ReadonlyNonEmptyArray<A>) => A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyAt`




#### Signature

```typescript
export declare const modifyAt: <A>(
  i: number,
  f: (a: A) => A,
) => (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyHead`

Apply a function to the head, creating a new `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const modifyHead: <A>(f: Endomorphism<A>) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyLast`

Apply a function to the last element, creating a new `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const modifyLast: <A>(f: Endomorphism<A>) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `prependAll`

Prepend an element to every member of a `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const prependAll: <A>(middle: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { prependAll } from '@fp-tx/core/ReadonlyNonEmptyArray'

assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`prependToAll`~~

Use [`prependAll`](#prependall) instead.




#### Signature

```typescript
export declare const prependToAll: <A>(middle: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`readonlyNonEmptyArray`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `RNEA.Functor` instead of `RNEA.readonlyNonEmptyArray`




#### Signature

```typescript
export declare const readonlyNonEmptyArray: Monad1<URI> &
  Comonad1<URI> &
  TraversableWithIndex1<URI, number> &
  FunctorWithIndex1<URI, number> &
  FoldableWithIndex1<URI, number> &
  Alt1<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`




#### Signature

```typescript
export declare const reverse: <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rotate`

Rotate a `ReadonlyNonEmptyArray` by `n` steps.




#### Signature

```typescript
export declare const rotate: (n: number) => <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { rotate } from '@fp-tx/core/ReadonlyNonEmptyArray'

assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
assert.deepStrictEqual(rotate(-2)([1, 2, 3, 4, 5]), [3, 4, 5, 1, 2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`snoc`~~

Use [`append`](./ReadonlyArray#append) instead.




#### Signature

```typescript
export declare const snoc: <A>(init: readonly A[], end: A) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sort`




#### Signature

```typescript
export declare const sort: <B>(O: Ord<B>) => <A extends B>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sortBy`

Sort the elements of a `ReadonlyNonEmptyArray` in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`, etc...




#### Signature

```typescript
export declare const sortBy: <B>(
  ords: readonly Ord<B>[],
) => <A extends B>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
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

const sortByNameByAge = RNEA.sortBy([byName, byAge])

const persons: RNEA.ReadonlyNonEmptyArray<Person> = [
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

Splits a `ReadonlyNonEmptyArray` into two pieces, the first piece has max `n` elements.




#### Signature

```typescript
export declare const splitAt: (
  n: number,
) => <A>(as: ReadonlyNonEmptyArray<A>) => readonly [ReadonlyNonEmptyArray<A>, readonly A[]]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tail`




#### Signature

```typescript
export declare const tail: <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unappend`

Return the tuple of the `init` and the `last`.




#### Signature

```typescript
export declare const unappend: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [readonly A[], A]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { unappend } from '@fp-tx/core/ReadonlyNonEmptyArray'

assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`uncons`~~

Use [`unprepend`](#unprepend) instead.




#### Signature

```typescript
export declare const uncons: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [A, ReadonlyArray<A>]
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `union`




#### Signature

```typescript
export declare const union: <A>(
  E: Eq<A>,
) => (second: ReadonlyNonEmptyArray<A>) => (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `uniq`

Remove duplicates from a `ReadonlyNonEmptyArray`, keeping the first occurrence of an element.




#### Signature

```typescript
export declare const uniq: <A>(E: Eq<A>) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { uniq } from '@fp-tx/core/ReadonlyNonEmptyArray'
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
export declare const unprepend: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [A, readonly A[]]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { unprepend } from '@fp-tx/core/ReadonlyNonEmptyArray'

assert.deepStrictEqual(unprepend([1, 2, 3, 4]), [1, [2, 3, 4]])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`unsnoc`~~

Use [`unappend`](#unappend) instead.




#### Signature

```typescript
export declare const unsnoc: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [ReadonlyArray<A>, A]
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unzip`




#### Signature

```typescript
export declare const unzip: <A, B>(
  abs: ReadonlyNonEmptyArray<readonly [A, B]>,
) => readonly [ReadonlyNonEmptyArray<A>, ReadonlyNonEmptyArray<B>]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateAt`




#### Signature

```typescript
export declare const updateAt: <A>(
  i: number,
  a: A,
) => (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateHead`

Change the head, creating a new `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const updateHead: <A>(a: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateLast`

Change the last element, creating a new `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const updateLast: <A>(a: A) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zip`




#### Signature

```typescript
export declare function zip<B>(
  bs: ReadonlyNonEmptyArray<B>,
): <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<readonly [A, B]>



export declare function zip<A, B>(
  as: ReadonlyNonEmptyArray<A>,
  bs: ReadonlyNonEmptyArray<B>,
): ReadonlyNonEmptyArray<readonly [A, B]>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zipWith`




#### Signature

```typescript
export declare const zipWith: <A, B, C>(
  as: ReadonlyNonEmptyArray<A>,
  bs: ReadonlyNonEmptyArray<B>,
  f: (a: A, b: B) => C,
) => ReadonlyNonEmptyArray<C>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti