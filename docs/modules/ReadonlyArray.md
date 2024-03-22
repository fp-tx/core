
# ReadonlyArray







### Instances

* [Alt](#alt)
* [Alternative](#alternative)
* [Applicative](#applicative)
* [Apply](#apply)
* [Chain](#chain)
* [ChainRecBreadthFirst](#chainrecbreadthfirst)
* [ChainRecDepthFirst](#chainrecdepthfirst)
* [Compactable](#compactable)
* [Extend](#extend)
* [Filterable](#filterable)
* [FilterableWithIndex](#filterablewithindex)
* [Foldable](#foldable)
* [FoldableWithIndex](#foldablewithindex)
* [FromEither](#fromeither)
* [Functor](#functor)
* [FunctorWithIndex](#functorwithindex)
* [Monad](#monad)
* [Pointed](#pointed)
* [Traversable](#traversable)
* [TraversableWithIndex](#traversablewithindex)
* [Unfoldable](#unfoldable)
* [Witherable](#witherable)
* [Zero](#zero)
* [getDifferenceMagma](#getdifferencemagma)
* [getEq](#geteq)
* [getIntersectionSemigroup](#getintersectionsemigroup)
* [getMonoid](#getmonoid)
* [getOrd](#getord)
* [getSemigroup](#getsemigroup)
* [getShow](#getshow)
* [getUnionMonoid](#getunionmonoid)
* [getUnionSemigroup](#getunionsemigroup)

### Constructors

* [makeBy](#makeby)
* [of](#of)
* [replicate](#replicate)

### Conversions

* [fromArray](#fromarray)
* [fromEither](#fromeither)
* [fromOption](#fromoption)
* [toArray](#toarray)

### Do notation

* [Do](#do)
* [apS](#aps)
* [bind](#bind)
* [bindTo](#bindto)
* [guard](#guard)

### Error handling

* [alt](#alt)
* [altW](#altw)

### Filtering

* [compact](#compact)
* [filter](#filter)
* [filterMap](#filtermap)
* [filterMapWithIndex](#filtermapwithindex)
* [filterWithIndex](#filterwithindex)
* [partition](#partition)
* [partitionMap](#partitionmap)
* [partitionMapWithIndex](#partitionmapwithindex)
* [partitionWithIndex](#partitionwithindex)
* [separate](#separate)
* [wilt](#wilt)
* [wither](#wither)

### Folding

* [foldMap](#foldmap)
* [foldMapWithIndex](#foldmapwithindex)
* [reduce](#reduce)
* [reduceRight](#reduceright)
* [reduceRightWithIndex](#reducerightwithindex)
* [reduceWithIndex](#reducewithindex)

### Legacy

* [chain](#chain)

### Lifting

* [fromEitherK](#fromeitherk)
* [fromOptionK](#fromoptionk)
* [fromPredicate](#frompredicate)

### Mapping

* [flap](#flap)
* [map](#map)
* [mapWithIndex](#mapwithindex)

### Pattern matching

* [foldLeft](#foldleft)
* [foldRight](#foldright)
* [match](#match)
* [matchLeft](#matchleft)
* [matchLeftW](#matchleftw)
* [matchRight](#matchright)
* [matchRightW](#matchrightw)
* [matchW](#matchw)

### Refinements

* [isEmpty](#isempty)
* [isNonEmpty](#isnonempty)

### Sequencing

* [chainFirst](#chainfirst)
* [chainRecBreadthFirst](#chainrecbreadthfirst)
* [chainRecDepthFirst](#chainrecdepthfirst)
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

### Unsafe

* [unsafeDeleteAt](#unsafedeleteat)
* [unsafeInsertAt](#unsafeinsertat)
* [unsafeUpdateAt](#unsafeupdateat)

### Utilities

* [Spanned](#spanned)
* [ap](#ap)
* [apFirst](#apfirst)
* [apSecond](#apsecond)
* [append](#append)
* [appendW](#appendw)
* [chop](#chop)
* [chunksOf](#chunksof)
* [comprehension](#comprehension)
* [concat](#concat)
* [concatW](#concatw)
* ~~[cons](#cons)~~ (deprecated)
* [deleteAt](#deleteat)
* [difference](#difference)
* [dropLeft](#dropleft)
* [dropLeftWhile](#dropleftwhile)
* [dropRight](#dropright)
* [duplicate](#duplicate)
* [elem](#elem)
* [empty](#empty)
* [every](#every)
* [exists](#exists)
* [extend](#extend)
* [filterE](#filtere)
* [findFirst](#findfirst)
* [findFirstMap](#findfirstmap)
* [findIndex](#findindex)
* [findLast](#findlast)
* [findLastIndex](#findlastindex)
* [findLastMap](#findlastmap)
* [head](#head)
* [init](#init)
* [insertAt](#insertat)
* [intercalate](#intercalate)
* [intersection](#intersection)
* [intersperse](#intersperse)
* [isOutOfBound](#isoutofbound)
* [last](#last)
* [lefts](#lefts)
* [let](#let)
* [lookup](#lookup)
* [modifyAt](#modifyat)
* [prepend](#prepend)
* [prependAll](#prependall)
* ~~[prependToAll](#prependtoall)~~ (deprecated)
* [prependW](#prependw)
* ~~[range](#range)~~ (deprecated)
* ~~[readonlyArray](#readonlyarray)~~ (deprecated)
* [reverse](#reverse)
* [rights](#rights)
* [rotate](#rotate)
* [scanLeft](#scanleft)
* [scanRight](#scanright)
* [size](#size)
* ~~[snoc](#snoc)~~ (deprecated)
* [some](#some)
* [sort](#sort)
* [sortBy](#sortby)
* [spanLeft](#spanleft)
* [splitAt](#splitat)
* [tail](#tail)
* [takeLeft](#takeleft)
* [takeLeftWhile](#takeleftwhile)
* [takeRight](#takeright)
* [unfold](#unfold)
* [union](#union)
* [uniq](#uniq)
* [unzip](#unzip)
* [updateAt](#updateat)
* [zero](#zero)
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
export declare const Chain: Chain1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRecBreadthFirst`




#### Signature

```typescript
export declare const ChainRecBreadthFirst: ChainRec1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRecDepthFirst`




#### Signature

```typescript
export declare const ChainRecDepthFirst: ChainRec1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

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


### `FilterableWithIndex`




#### Signature

```typescript
export declare const FilterableWithIndex: FilterableWithIndex1<URI, number>
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


### `Unfoldable`




#### Signature

```typescript
export declare const Unfoldable: Unfoldable1<URI>
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


### `getDifferenceMagma`




#### Signature

```typescript
export declare const getDifferenceMagma: <A>(E: Eq<A>) => Magma<readonly A[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`

Derives an `Eq` over the `ReadonlyArray` of a given element type from the `Eq` of that type. The derived `Eq` defines two arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of different lengths, the result is non equality.




#### Signature

```typescript
export declare const getEq: <A>(E: Eq<A>) => Eq<readonly A[]>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { getEq } from '@fp-tx/core/ReadonlyArray'

const E = getEq(S.Eq)
assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
assert.strictEqual(E.equals(['a'], []), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getIntersectionSemigroup`




#### Signature

```typescript
export declare const getIntersectionSemigroup: <A>(E: Eq<A>) => Semigroup<readonly A[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`

Returns a `Monoid` for `ReadonlyArray<A>`.




#### Signature

```typescript
export declare const getMonoid: <A = never>() => Monoid<readonly A[]>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getMonoid } from '@fp-tx/core/ReadonlyArray'

const M = getMonoid<number>()
assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrd`

Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between two such arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have the same length, the result is equality.




#### Signature

```typescript
export declare const getOrd: <A>(O: Ord<A>) => Ord<readonly A[]>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getOrd } from '@fp-tx/core/ReadonlyArray'
import * as S from '@fp-tx/core/string'

const O = getOrd(S.Ord)
assert.strictEqual(O.compare(['b'], ['a']), 1)
assert.strictEqual(O.compare(['a'], ['a']), 0)
assert.strictEqual(O.compare(['a'], ['b']), -1)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`




#### Signature

```typescript
export declare const getSemigroup: <A = never>() => Semigroup<readonly A[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare const getShow: <A>(S: Show<A>) => Show<readonly A[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionMonoid`




#### Signature

```typescript
export declare const getUnionMonoid: <A>(E: Eq<A>) => Monoid<readonly A[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionSemigroup`




#### Signature

```typescript
export declare const getUnionSemigroup: <A>(E: Eq<A>) => Semigroup<readonly A[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `makeBy`

Return a `ReadonlyArray` of length `n` with element `i` initialized with `f(i)`.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const makeBy: <A>(n: number, f: (i: number) => A) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { makeBy } from '@fp-tx/core/ReadonlyArray'

const double = (n: number): number => n * 2
assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <A>(a: A) => ReadonlyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `replicate`

Create a `ReadonlyArray` containing a value repeated the specified number of times.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const replicate: <A>(n: number, a: A) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { replicate } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromArray`




#### Signature

```typescript
export declare const fromArray: <A>(as: A[]) => readonly A[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromEither`

Transforms an `Either` to a `ReadonlyArray`.




#### Signature

```typescript
export declare const fromEither: <A>(fa: Either<unknown, A>) => ReadonlyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <A>(fa: Option<A>) => ReadonlyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toArray`




#### Signature

```typescript
export declare const toArray: <A>(as: readonly A[]) => A[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: ReadonlyArray<{}>
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
  fb: readonly B[],
) => (fa: readonly A[]) => readonly { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }[]
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
  f: (a: A) => readonly B[],
) => (ma: readonly A[]) => readonly { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(name: N) => <A>(fa: readonly A[]) => readonly { readonly [K in N]: A }[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `guard`




#### Signature

```typescript
export declare const guard: (b: boolean) => readonly void[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `alt`

Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to types of kind `* -> *`.


In case of `ReadonlyArray` concatenates the inputs into a single array.




#### Signature

```typescript
export declare const alt: <A>(that: LazyArg<ReadonlyArray<A>>) => (fa: ReadonlyArray<A>) => ReadonlyArray<A>
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
    RA.alt(() => [4, 5]),
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
export declare const altW: <B>(that: LazyArg<readonly B[]>) => <A>(fa: readonly A[]) => readonly (B | A)[]
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
    RA.altW(() => ['a', 'b']),
  ),
  [1, 2, 3, 'a', 'b'],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `compact`




#### Signature

```typescript
export declare const compact: <A>(fa: ReadonlyArray<Option<A>>) => ReadonlyArray<A>
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
  <A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => ReadonlyArray<B>
  <A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
  <A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>
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
export declare const filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: ReadonlyArray<A>) => ReadonlyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMapWithIndex`




#### Signature

```typescript
export declare const filterMapWithIndex: <A, B>(f: (i: number, a: A) => Option<B>) => (fa: readonly A[]) => readonly B[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterWithIndex`




#### Signature

```typescript
export declare const filterWithIndex: {
  <A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (as: ReadonlyArray<A>) => ReadonlyArray<B>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>
}
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
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): (as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<B>>
  <A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => Separated<ReadonlyArray<B>, ReadonlyArray<B>>
  <A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<A>>
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
) => (fa: ReadonlyArray<A>) => Separated<ReadonlyArray<B>, ReadonlyArray<C>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMapWithIndex`




#### Signature

```typescript
export declare const partitionMapWithIndex: <A, B, C>(
  f: (i: number, a: A) => Either<B, C>,
) => (fa: readonly A[]) => Separated<readonly B[], readonly C[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionWithIndex`




#### Signature

```typescript
export declare const partitionWithIndex: {
  <A, B extends A>(
    refinementWithIndex: RefinementWithIndex<number, A, B>,
  ): (as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<B>>
  <A>(
    predicateWithIndex: PredicateWithIndex<number, A>,
  ): <B extends A>(bs: ReadonlyArray<B>) => Separated<ReadonlyArray<B>, ReadonlyArray<B>>
  <A>(
    predicateWithIndex: PredicateWithIndex<number, A>,
  ): (as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`




#### Signature

```typescript
export declare const separate: <A, B>(fa: readonly Either<A, B>[]) => Separated<readonly A[], readonly B[]>
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
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: ReadonlyArray<A>) => M
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMapWithIndex`




#### Signature

```typescript
export declare const foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: number, a: A) => M) => (fa: readonly A[]) => M
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: ReadonlyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: ReadonlyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRightWithIndex`




#### Signature

```typescript
export declare const reduceRightWithIndex: <A, B>(b: B, f: (i: number, a: A, b: B) => B) => (fa: ReadonlyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceWithIndex`




#### Signature

```typescript
export declare const reduceWithIndex: <A, B>(b: B, f: (i: number, b: B, a: A) => B) => (fa: ReadonlyArray<A>) => B
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
export declare const chain: <A, B>(f: (a: A) => ReadonlyArray<B>) => (ma: ReadonlyArray<A>) => ReadonlyArray<B>
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
) => (...a: A) => ReadonlyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`




#### Signature

```typescript
export declare const fromOptionK: <A extends readonly unknown[], B>(
  f: (...a: A) => Option<B>,
) => (...a: A) => readonly B[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromPredicate`




#### Signature

```typescript
export declare function fromPredicate<A, B extends A>(refinement: Refinement<A, B>): (a: A) => ReadonlyArray<B>



export declare function fromPredicate<A>(predicate: Predicate<A>): <B extends A>(b: B) => ReadonlyArray<B>



export declare function fromPredicate<A>(predicate: Predicate<A>): (a: A) => ReadonlyArray<A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: readonly ((a: A) => B)[]) => readonly B[]
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
export declare const map: <A, B>(f: (a: A) => B) => (fa: ReadonlyArray<A>) => ReadonlyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapWithIndex`




#### Signature

```typescript
export declare const mapWithIndex: <A, B>(f: (i: number, a: A) => B) => (fa: ReadonlyArray<A>) => ReadonlyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `foldLeft`

Alias of [`matchLeft`](#matchleft).




#### Signature

```typescript
export declare const foldLeft: <A, B>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (head: A, tail: ReadonlyArray<A>) => B,
) => (as: ReadonlyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldRight`

Alias of [`matchRight`](#matchright).




#### Signature

```typescript
export declare const foldRight: <A, B>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (init: ReadonlyArray<A>, last: A) => B,
) => (as: ReadonlyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`




#### Signature

```typescript
export declare const match: <B, A>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (as: ReadonlyNonEmptyArray<A>) => B,
) => (as: ReadonlyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchLeft`

Break a `ReadonlyArray` into its first element and remaining elements.




#### Signature

```typescript
export declare const matchLeft: <B, A>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (head: A, tail: ReadonlyArray<A>) => B,
) => (as: ReadonlyArray<A>) => B
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { matchLeft } from '@fp-tx/core/ReadonlyArray'

const len: <A>(as: ReadonlyArray<A>) => number = matchLeft(
  () => 0,
  (_, tail) => 1 + len(tail),
)
assert.strictEqual(len([1, 2, 3]), 3)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchLeftW`

Less strict version of [`matchLeft`](#matchleft).




#### Signature

```typescript
export declare const matchLeftW: <B, A, C>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (head: A, tail: readonly A[]) => C,
) => (as: readonly A[]) => B | C
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
export declare const matchRight: <B, A>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (init: ReadonlyArray<A>, last: A) => B,
) => (as: ReadonlyArray<A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchRightW`

Less strict version of [`matchRight`](#matchright).




#### Signature

```typescript
export declare const matchRightW: <B, A, C>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (init: readonly A[], last: A) => C,
) => (as: readonly A[]) => B | C
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
export declare const matchW: <B, A, C>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (as: RNEA.ReadonlyNonEmptyArray<A>) => C,
) => (as: readonly A[]) => B | C
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Refinements


### `isEmpty`

Test whether a `ReadonlyArray` is empty.




#### Signature

```typescript
export declare const isEmpty: <A>(as: readonly A[]) => as is readonly []
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { isEmpty } from '@fp-tx/core/ReadonlyArray'

assert.strictEqual(isEmpty([]), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isNonEmpty`

Test whether a `ReadonlyArray` is non empty.




#### Signature

```typescript
export declare const isNonEmpty: <A>(as: ReadonlyArray<A>) => as is ReadonlyNonEmptyArray<A>
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
export declare const chainFirst: <A, B>(f: (a: A) => ReadonlyArray<B>) => (first: ReadonlyArray<A>) => ReadonlyArray<A>
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
assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    RA.chainFirst(() => []),
  ),
  [],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainRecBreadthFirst`




#### Signature

```typescript
export declare const chainRecBreadthFirst: <A, B>(f: (a: A) => readonly Either<A, B>[]) => (a: A) => readonly B[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainRecDepthFirst`




#### Signature

```typescript
export declare const chainRecDepthFirst: <A, B>(f: (a: A) => readonly Either<A, B>[]) => (a: A) => readonly B[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainWithIndex`




#### Signature

```typescript
export declare const chainWithIndex: <A, B>(f: (i: number, a: A) => readonly B[]) => (as: readonly A[]) => readonly B[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMap`

Composes computations in sequence, using the return value of one computation to determine the next computation.




#### Signature

```typescript
export declare const flatMap: {
  <A, B>(f: (a: A, i: number) => ReadonlyArray<B>): (ma: ReadonlyArray<A>) => ReadonlyArray<B>
  <A, B>(ma: ReadonlyArray<A>, f: (a: A, i: number) => ReadonlyArray<B>): ReadonlyArray<B>
}
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
    RA.flatMap(n => [`a${n}`, `b${n}`]),
  ),
  ['a1', 'b1', 'a2', 'b2', 'a3', 'b3'],
)
assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    RA.flatMap(() => []),
  ),
  [],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`




#### Signature

```typescript
export declare const flatten: <A>(mma: ReadonlyArray<ReadonlyArray<A>>) => ReadonlyArray<A>
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
export declare const URI = 'ReadonlyArray'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Unsafe


### `unsafeDeleteAt`




#### Signature

```typescript
export declare const unsafeDeleteAt: <A>(i: number, as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unsafeInsertAt`




#### Signature

```typescript
export declare const unsafeInsertAt: <A>(i: number, a: A, as: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unsafeUpdateAt`




#### Signature

```typescript
export declare const unsafeUpdateAt: <A>(i: number, a: A, as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `Spanned`




#### Signature

```typescript
export interface Spanned<I, R> {
  readonly init: ReadonlyArray<I>
  readonly rest: ReadonlyArray<R>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <A>(fa: ReadonlyArray<A>) => <B>(fab: ReadonlyArray<(a: A) => B>) => ReadonlyArray<B>
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
export declare const apFirst: <B>(second: readonly B[]) => <A>(first: readonly A[]) => readonly A[]
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
export declare const apSecond: <B>(second: readonly B[]) => <A>(first: readonly A[]) => readonly B[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `append`

Append an element to the end of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const append: <A>(end: A) => (init: readonly A[]) => RNEA.ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { append } from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `appendW`

Less strict version of [`append`](#append).




#### Signature

```typescript
export declare const appendW: <B>(end: B) => <A>(init: readonly A[]) => RNEA.ReadonlyNonEmptyArray<B | A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chop`

A useful recursion pattern for processing a `ReadonlyArray` to produce a new `ReadonlyArray`, often used for "chopping" up the input `ReadonlyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `ReadonlyArray` and produce a value and the tail of the `ReadonlyArray`.




#### Signature

```typescript
export declare const chop: <A, B>(
  f: (as: RNEA.ReadonlyNonEmptyArray<A>) => readonly [B, readonly A[]],
) => (as: readonly A[]) => readonly B[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { Eq } from '@fp-tx/core/Eq'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

const group = <A>(S: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>) => {
  return RA.chop(as => {
    const { init, rest } = pipe(
      as,
      RA.spanLeft((a: A) => S.equals(a, as[0])),
    )
    return [init, rest]
  })
}
assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chunksOf`

Splits a `ReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of the `ReadonlyArray`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive definition of `chunksOf`; it satisfies the property that:


Whenever `n` evenly divides the length of `as`.




#### Signature

```typescript
export declare const chunksOf: (n: number) => <A>(as: readonly A[]) => readonly RNEA.ReadonlyNonEmptyArray<A>[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { chunksOf } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `comprehension`

`ReadonlyArray` comprehension.




#### Signature

```typescript
export declare function comprehension<A, B, C, D, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>, ReadonlyArray<C>, ReadonlyArray<D>],
  f: (a: A, b: B, c: C, d: D) => R,
  g?: (a: A, b: B, c: C, d: D) => boolean,
): ReadonlyArray<R>



export declare function comprehension<A, B, C, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>, ReadonlyArray<C>],
  f: (a: A, b: B, c: C) => R,
  g?: (a: A, b: B, c: C) => boolean,
): ReadonlyArray<R>



export declare function comprehension<A, B, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>],
  f: (a: A, b: B) => R,
  g?: (a: A, b: B) => boolean,
): ReadonlyArray<R>



export declare function comprehension<A, R>(
  input: readonly [ReadonlyArray<A>],
  f: (a: A) => R,
  g?: (a: A) => boolean,
): ReadonlyArray<R>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { comprehension } from '@fp-tx/core/ReadonlyArray'
import { tuple } from '@fp-tx/core/function'

assert.deepStrictEqual(
  comprehension(
    [
      [1, 2, 3],
      ['a', 'b'],
    ],
    tuple,
    (a, b) => (a + b.length) % 2 === 0,
  ),
  [
    [1, 'a'],
    [1, 'b'],
    [3, 'a'],
    [3, 'b'],
  ],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concat`




#### Signature

```typescript
export declare const concat: <A>(second: ReadonlyArray<A>) => (first: ReadonlyArray<A>) => ReadonlyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concatW`




#### Signature

```typescript
export declare const concatW: <B>(second: readonly B[]) => <A>(first: readonly A[]) => readonly (B | A)[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`cons`~~

Use [`prepend`](#prepend) instead.




#### Signature

```typescript
export declare const cons: typeof RNEA.cons
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `deleteAt`

Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds




#### Signature

```typescript
export declare const deleteAt: (i: number) => <A>(as: readonly A[]) => Option<readonly A[]>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { deleteAt } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
assert.deepStrictEqual(deleteAt(1)([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `difference`

Creates an array of array values not included in the other given array using a `Eq` for equality comparisons. The order and references of result values are determined by the first array.




#### Signature

```typescript
export declare function difference<A>(E: Eq<A>): {
  (xs: ReadonlyArray<A>): (ys: ReadonlyArray<A>) => ReadonlyArray<A>
  (xs: ReadonlyArray<A>, ys: ReadonlyArray<A>): ReadonlyArray<A>
}

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { difference } from '@fp-tx/core/ReadonlyArray'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2], difference(N.Eq)([2, 3])), [1])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `dropLeft`

Drop a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const dropLeft: (n: number) => <A>(as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RA from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

const input: ReadonlyArray<number> = [1, 2, 3]
assert.deepStrictEqual(pipe(input, RA.dropLeft(2)), [3])
assert.strictEqual(pipe(input, RA.dropLeft(0)), input)
assert.strictEqual(pipe(input, RA.dropLeft(-1)), input)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `dropLeftWhile`

Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array




#### Signature

```typescript
export declare function dropLeftWhile<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyArray<A>) => ReadonlyArray<B>



export declare function dropLeftWhile<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>



export declare function dropLeftWhile<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { dropLeftWhile } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `dropRight`

Drop a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const dropRight: (n: number) => <A>(as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RA from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

const input: ReadonlyArray<number> = [1, 2, 3]
assert.deepStrictEqual(pipe(input, RA.dropRight(2)), [1])
assert.strictEqual(pipe(input, RA.dropRight(0)), input)
assert.strictEqual(pipe(input, RA.dropRight(-1)), input)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `duplicate`




#### Signature

```typescript
export declare const duplicate: <A>(wa: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`

Test if a value is a member of an array. Takes a `Eq<A>` as a single argument which returns the function to use to search for a value of type `A` in an array of type `ReadonlyArray<A>`.




#### Signature

```typescript
export declare function elem<A>(E: Eq<A>): {
  (a: A): (as: ReadonlyArray<A>) => boolean
  (a: A, as: ReadonlyArray<A>): boolean
}

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { elem } from '@fp-tx/core/ReadonlyArray'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(2)), true)
assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(0)), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `empty`

An empty array




#### Signature

```typescript
export declare const empty: ReadonlyArray<never>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `every`

Check if a predicate holds true for every array member.




#### Signature

```typescript
export declare function every<A, B extends A>(
  refinement: Refinement<A, B>,
): Refinement<ReadonlyArray<A>, ReadonlyArray<B>>



export declare function every<A>(predicate: Predicate<A>): Predicate<ReadonlyArray<A>>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { every } from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

const isPositive = (n: number): boolean => n > 0

assert.deepStrictEqual(pipe([1, 2, 3], every(isPositive)), true)
assert.deepStrictEqual(pipe([1, 2, -3], every(isPositive)), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `exists`

Alias of [`some`](#some)




#### Signature

```typescript
export declare const exists: <A>(
  predicate: Predicate<A>,
) => (as: ReadonlyArray<A>) => as is RNEA.ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`




#### Signature

```typescript
export declare const extend: <A, B>(f: (fa: ReadonlyArray<A>) => B) => (wa: ReadonlyArray<A>) => ReadonlyArray<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterE`

Filter values inside a context.




#### Signature

```typescript
export declare const filterE: import('./Witherable.js').FilterE1<'ReadonlyArray'>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as T from '@fp-tx/core/Task'

const filterE = RA.filterE(T.ApplicativePar)
async function test() {
  assert.deepStrictEqual(
    await pipe(
      [-1, 2, 3],
      filterE(n => T.of(n > 0)),
    )(),
    [2, 3],
  )
}
test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findFirst`

Find the first element which satisfies a predicate (or a refinement) function




#### Signature

```typescript
export declare function findFirst<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => Option<B>



export declare function findFirst<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => Option<B>



export declare function findFirst<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Option<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { findFirst } from '@fp-tx/core/ReadonlyArray'
import { some } from '@fp-tx/core/Option'

type X = {
  readonly a: number
  readonly b: number
}

assert.deepStrictEqual(
  findFirst((x: X) => x.a === 1)([
    { a: 1, b: 1 },
    { a: 1, b: 2 },
  ]),
  some({ a: 1, b: 1 }),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findFirstMap`

Find the first element returned by an option based selector function




#### Signature

```typescript
export declare const findFirstMap: <A, B>(f: (a: A) => Option<B>) => (as: readonly A[]) => Option<B>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { findFirstMap } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

interface Person {
  readonly name: string
  readonly age?: number
}

const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]

// returns the name of the first person that has an age
assert.deepStrictEqual(
  findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons),
  some('Mary'),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findIndex`

Find the first index for which a predicate holds




#### Signature

```typescript
export declare const findIndex: <A>(predicate: Predicate<A>) => (as: readonly A[]) => Option<number>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { findIndex } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findLast`

Find the last element which satisfies a predicate function




#### Signature

```typescript
export declare function findLast<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => Option<B>



export declare function findLast<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => Option<B>



export declare function findLast<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Option<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { findLast } from '@fp-tx/core/ReadonlyArray'
import { some } from '@fp-tx/core/Option'

type X = {
  readonly a: number
  readonly b: number
}

assert.deepStrictEqual(
  findLast((x: X) => x.a === 1)([
    { a: 1, b: 1 },
    { a: 1, b: 2 },
  ]),
  some({ a: 1, b: 2 }),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findLastIndex`

Returns the index of the last element of the list which matches the predicate




#### Signature

```typescript
export declare const findLastIndex: <A>(predicate: Predicate<A>) => (as: readonly A[]) => Option<number>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { findLastIndex } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

interface X {
  readonly a: number
  readonly b: number
}
const xs: ReadonlyArray<X> = [
  { a: 1, b: 0 },
  { a: 1, b: 1 },
]
assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findLastMap`

Find the last element returned by an option based selector function




#### Signature

```typescript
export declare const findLastMap: <A, B>(f: (a: A) => Option<B>) => (as: readonly A[]) => Option<B>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { findLastMap } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

interface Person {
  readonly name: string
  readonly age?: number
}

const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]

// returns the name of the last person that has an age
assert.deepStrictEqual(
  findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons),
  some('Joey'),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `head`

Get the first element in an array, or `None` if the array is empty




#### Signature

```typescript
export declare const head: <A>(as: readonly A[]) => Option<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { head } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(head([1, 2, 3]), some(1))
assert.deepStrictEqual(head([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `init`

Get all but the last element of an array, creating a new array, or `None` if the array is empty




#### Signature

```typescript
export declare const init: <A>(as: readonly A[]) => Option<readonly A[]>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { init } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
assert.deepStrictEqual(init([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `insertAt`

Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds




#### Signature

```typescript
export declare const insertAt: <A>(i: number, a: A) => (as: readonly A[]) => Option<RNEA.ReadonlyNonEmptyArray<A>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { insertAt } from '@fp-tx/core/ReadonlyArray'
import { some } from '@fp-tx/core/Option'

assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intercalate`

Places an element in between members of a `ReadonlyArray`, then folds the results using the provided `Monoid`.




#### Signature

```typescript
export declare const intercalate: <A>(M: Monoid<A>) => (middle: A) => (as: readonly A[]) => A
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { intercalate } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(intercalate(S.Monoid)('-')(['a', 'b', 'c']), 'a-b-c')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersection`

Creates an array of unique values that are included in all given arrays using a `Eq` for equality comparisons. The order and references of result values are determined by the first array.




#### Signature

```typescript
export declare function intersection<A>(E: Eq<A>): {
  (xs: ReadonlyArray<A>): (ys: ReadonlyArray<A>) => ReadonlyArray<A>
  (xs: ReadonlyArray<A>, ys: ReadonlyArray<A>): ReadonlyArray<A>
}

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { intersection } from '@fp-tx/core/ReadonlyArray'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2], intersection(N.Eq)([2, 3])), [2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersperse`

Places an element in between members of an array




#### Signature

```typescript
export declare const intersperse: <A>(middle: A) => (as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { intersperse } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isOutOfBound`

Test whether an array contains a particular index




#### Signature

```typescript
export declare const isOutOfBound: <A>(i: number, as: ReadonlyArray<A>) => boolean
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `last`

Get the last element in an array, or `None` if the array is empty




#### Signature

```typescript
export declare const last: <A>(as: readonly A[]) => Option<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { last } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(last([1, 2, 3]), some(3))
assert.deepStrictEqual(last([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `lefts`

Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order




#### Signature

```typescript
export declare const lefts: <E, A>(as: readonly Either<E, A>[]) => readonly E[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { lefts } from '@fp-tx/core/ReadonlyArray'
import { left, right } from '@fp-tx/core/Either'

assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `let`




#### Signature

```typescript
export declare const let_: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => (fa: readonly A[]) => readonly { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }[]
```




---


### `lookup`

This function provides a safe way to read a value at a particular index from an array




#### Signature

```typescript
export declare function lookup(i: number): <A>(as: ReadonlyArray<A>) => Option<A>



export declare function lookup<A>(i: number, as: ReadonlyArray<A>): Option<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { lookup } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), some(2))
assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyAt`

Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out of bounds




#### Signature

```typescript
export declare const modifyAt: <A>(i: number, f: (a: A) => A) => (as: readonly A[]) => Option<readonly A[]>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { modifyAt } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

const double = (x: number): number => x * 2
assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
assert.deepStrictEqual(modifyAt(1, double)([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `prepend`

Prepend an element to the front of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const prepend: <A>(head: A) => (tail: readonly A[]) => RNEA.ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { prepend } from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `prependAll`

Prepend an element to every member of an array




#### Signature

```typescript
export declare const prependAll: <A>(middle: A) => (as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { prependAll } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`prependToAll`~~

Use [`prependAll`](#prependall) instead.




#### Signature

```typescript
export declare const prependToAll: <A>(middle: A) => (as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `prependW`

Less strict version of [`prepend`](#prepend).




#### Signature

```typescript
export declare const prependW: <B>(head: B) => <A>(tail: readonly A[]) => RNEA.ReadonlyNonEmptyArray<B | A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`range`~~

Use `ReadonlyNonEmptyArray` module instead.




#### Signature

```typescript
export declare const range: (start: number, end: number) => RNEA.ReadonlyNonEmptyArray<number>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`readonlyArray`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `RA.Functor` instead of `RA.readonlyArray`




#### Signature

```typescript
export declare const readonlyArray: FunctorWithIndex1<URI, number> &
  Monad1<URI> &
  Unfoldable1<URI> &
  Alternative1<URI> &
  Extend1<URI> &
  FilterableWithIndex1<URI, number> &
  FoldableWithIndex1<URI, number> &
  TraversableWithIndex1<URI, number> &
  Witherable1<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`

Reverse an array, creating a new array




#### Signature

```typescript
export declare const reverse: <A>(as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { reverse } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rights`

Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order




#### Signature

```typescript
export declare const rights: <E, A>(as: readonly Either<E, A>[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { rights } from '@fp-tx/core/ReadonlyArray'
import { right, left } from '@fp-tx/core/Either'

assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rotate`

Rotate a `ReadonlyArray` by `n` steps.




#### Signature

```typescript
export declare const rotate: (n: number) => <A>(as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { rotate } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `scanLeft`

Same as `reduce` but it carries over the intermediate steps.




#### Signature

```typescript
export declare const scanLeft: <A, B>(b: B, f: (b: B, a: A) => B) => (as: readonly A[]) => RNEA.ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { scanLeft } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `scanRight`

Fold an array from the right, keeping all intermediate results instead of only the final result




#### Signature

```typescript
export declare const scanRight: <A, B>(
  b: B,
  f: (a: A, b: B) => B,
) => (as: readonly A[]) => RNEA.ReadonlyNonEmptyArray<B>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { scanRight } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `size`

Calculate the number of elements in a `ReadonlyArray`.




#### Signature

```typescript
export declare const size: <A>(as: readonly A[]) => number
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`snoc`~~

Use [`append`](#append) instead.




#### Signature

```typescript
export declare const snoc: <A>(init: readonly A[], end: A) => RNEA.ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `some`

Check if a predicate holds true for any array member.




#### Signature

```typescript
export declare const some: <A>(predicate: Predicate<A>) => (as: readonly A[]) => as is RNEA.ReadonlyNonEmptyArray<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { some } from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

const isPositive = (n: number): boolean => n > 0

assert.deepStrictEqual(pipe([-1, -2, 3], some(isPositive)), true)
assert.deepStrictEqual(pipe([-1, -2, -3], some(isPositive)), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sort`

Sort the elements of an array in increasing order, creating a new array




#### Signature

```typescript
export declare const sort: <B>(O: Ord<B>) => <A extends B>(as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { sort } from '@fp-tx/core/ReadonlyArray'
import * as N from '@fp-tx/core/number'

assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sortBy`

Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`, etc...




#### Signature

```typescript
export declare const sortBy: <B>(ords: readonly Ord<B>[]) => <A extends B>(as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { sortBy } from '@fp-tx/core/ReadonlyArray'
import { contramap } from '@fp-tx/core/Ord'
import * as S from '@fp-tx/core/string'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

interface Person {
  readonly name: string
  readonly age: number
}
const byName = pipe(
  S.Ord,
  contramap((p: Person) => p.name),
)
const byAge = pipe(
  N.Ord,
  contramap((p: Person) => p.age),
)

const sortByNameByAge = sortBy([byName, byAge])

const persons = [
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


### `spanLeft`

Split an array into two parts:


1. The longest initial subarray for which all elements satisfy the specified predicate 2. The remaining elements




#### Signature

```typescript
export declare function spanLeft<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => Spanned<B, A>



export declare function spanLeft<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => Spanned<B, B>



export declare function spanLeft<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Spanned<A, A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { spanLeft } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(spanLeft((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), { init: [1, 3], rest: [2, 4, 5] })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `splitAt`

Splits a `ReadonlyArray` into two pieces, the first piece has max `n` elements.




#### Signature

```typescript
export declare const splitAt: (n: number) => <A>(as: readonly A[]) => readonly [readonly A[], readonly A[]]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { splitAt } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [
  [1, 2],
  [3, 4, 5],
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tail`

Get all but the first element of an array, creating a new array, or `None` if the array is empty




#### Signature

```typescript
export declare const tail: <A>(as: readonly A[]) => Option<readonly A[]>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { tail } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
assert.deepStrictEqual(tail([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `takeLeft`

Keep only a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const takeLeft: (n: number) => <A>(as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RA from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

const input: ReadonlyArray<number> = [1, 2, 3]
assert.deepStrictEqual(pipe(input, RA.takeLeft(2)), [1, 2])

// out of bounds
assert.strictEqual(pipe(input, RA.takeLeft(4)), input)
assert.strictEqual(pipe(input, RA.takeLeft(-1)), input)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `takeLeftWhile`

Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new array




#### Signature

```typescript
export declare function takeLeftWhile<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyArray<A>) => ReadonlyArray<B>



export declare function takeLeftWhile<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>



export declare function takeLeftWhile<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { takeLeftWhile } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(takeLeftWhile((n: number) => n % 2 === 0)([2, 4, 3, 6]), [2, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `takeRight`

Keep only a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const takeRight: (n: number) => <A>(as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as RA from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

const input: ReadonlyArray<number> = [1, 2, 3]
assert.deepStrictEqual(pipe(input, RA.takeRight(2)), [2, 3])

// out of bounds
assert.strictEqual(pipe(input, RA.takeRight(4)), input)
assert.strictEqual(pipe(input, RA.takeRight(-1)), input)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unfold`




#### Signature

```typescript
export declare const unfold: <A, B>(b: B, f: (b: B) => Option<readonly [A, B]>) => readonly A[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `union`

Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons




#### Signature

```typescript
export declare function union<A>(E: Eq<A>): {
  (xs: ReadonlyArray<A>): (ys: ReadonlyArray<A>) => ReadonlyArray<A>
  (xs: ReadonlyArray<A>, ys: ReadonlyArray<A>): ReadonlyArray<A>
}

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { union } from '@fp-tx/core/ReadonlyArray'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2], union(N.Eq)([2, 3])), [1, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `uniq`

Remove duplicates from an array, keeping the first occurrence of an element.




#### Signature

```typescript
export declare const uniq: <A>(E: Eq<A>) => (as: readonly A[]) => readonly A[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { uniq } from '@fp-tx/core/ReadonlyArray'
import * as N from '@fp-tx/core/number'

assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unzip`

The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays




#### Signature

```typescript
export declare const unzip: <A, B>(as: readonly (readonly [A, B])[]) => readonly [readonly A[], readonly B[]]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { unzip } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(
  unzip([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ]),
  [
    [1, 2, 3],
    ['a', 'b', 'c'],
  ],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateAt`

Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds




#### Signature

```typescript
export declare const updateAt: <A>(i: number, a: A) => (as: readonly A[]) => Option<readonly A[]>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { updateAt } from '@fp-tx/core/ReadonlyArray'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
assert.deepStrictEqual(updateAt(1, 1)([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zero`




#### Signature

```typescript
export declare const zero: <A>() => ReadonlyArray<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zip`

Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the longer array are discarded




#### Signature

```typescript
export declare function zip<B>(bs: ReadonlyArray<B>): <A>(as: ReadonlyArray<A>) => ReadonlyArray<readonly [A, B]>



export declare function zip<A, B>(as: ReadonlyArray<A>, bs: ReadonlyArray<B>): ReadonlyArray<readonly [A, B]>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { zip } from '@fp-tx/core/ReadonlyArray'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2, 3], zip(['a', 'b', 'c', 'd'])), [
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zipWith`

Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one input array is short, excess elements of the longer array are discarded.




#### Signature

```typescript
export declare const zipWith: <A, B, C>(fa: readonly A[], fb: readonly B[], f: (a: A, b: B) => C) => readonly C[]
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { zipWith } from '@fp-tx/core/ReadonlyArray'

assert.deepStrictEqual(
  zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n),
  ['a1', 'b2', 'c3'],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti