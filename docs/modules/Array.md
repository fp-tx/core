
# Array







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

* [fromEither](#fromeither)
* [fromOption](#fromoption)

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
* ~~[array](#array)~~ (deprecated)
* [chop](#chop)
* [chunksOf](#chunksof)
* [comprehension](#comprehension)
* [concat](#concat)
* [concatW](#concatw)
* ~~[cons](#cons)~~ (deprecated)
* [copy](#copy)
* [deleteAt](#deleteat)
* [difference](#difference)
* [dropLeft](#dropleft)
* [dropLeftWhile](#dropleftwhile)
* [dropRight](#dropright)
* [duplicate](#duplicate)
* [elem](#elem)
* ~~[empty](#empty)~~ (deprecated)
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
export declare const Chain: Chain1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRecBreadthFirst`




#### Signature

```typescript
export declare const ChainRecBreadthFirst: ChainRec1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRecDepthFirst`




#### Signature

```typescript
export declare const ChainRecDepthFirst: ChainRec1<URI>
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


### `Extend`




#### Signature

```typescript
export declare const Extend: Extend1<URI>
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


### `FilterableWithIndex`




#### Signature

```typescript
export declare const FilterableWithIndex: FilterableWithIndex1<URI, number>
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


### `Unfoldable`




#### Signature

```typescript
export declare const Unfoldable: Unfoldable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Witherable`




#### Signature

```typescript
export declare const Witherable: Witherable1<URI>
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

---


### `getDifferenceMagma`

Get a `Magma` for `Array` where the `concat` function is the differnce between the first and the second array, i.e. the result contains all the elements of the first array for which their is no equal element in the second array according to the `Eq` provided.




#### Signature

```typescript
export declare const getDifferenceMagma: <A>(E: Eq<A>) => Magma<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getDifferenceMagma } from '@fp-tx/core/Array'
import { Eq } from '@fp-tx/core/number'

const S = getDifferenceMagma<number>(Eq)
assert.deepStrictEqual(S.concat([1, 2], [2, 3]), [1])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`

Derives an `Eq` over the `Array` of a given element type from the `Eq` of that type. The derived `Eq` defines two arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays of different lengths, the result is non equality.




#### Signature

```typescript
export declare const getEq: <A>(E: Eq<A>) => Eq<Array<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { getEq } from '@fp-tx/core/Array'

const E = getEq(S.Eq)
assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
assert.strictEqual(E.equals(['a'], []), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getIntersectionSemigroup`

Get a `Semigroup` based on the intersection of the elements of `Array`s. Only elements present in the two arrays which are equal according to the provided `Eq` are included in the result.




#### Signature

```typescript
export declare const getIntersectionSemigroup: <A>(E: Eq<A>) => Semigroup<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getIntersectionSemigroup } from '@fp-tx/core/Array'
import { Eq } from '@fp-tx/core/number'

const S = getIntersectionSemigroup<number>(Eq)
assert.deepStrictEqual(S.concat([1, 2], [2, 3]), [2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`

Returns a `Monoid` for `Array<A>` based on the concatenation of `Array`s.




#### Signature

```typescript
export declare const getMonoid: <A = never>() => Monoid<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getMonoid } from '@fp-tx/core/Array'

const M = getMonoid<number>()
assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrd`

Derives an `Ord` over the `Array` of a given element type from the `Ord` of that type. The ordering between two such arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing order, in case of equality over all the pairwise elements; the longest array is considered the greatest, if both arrays have the same length, the result is equality.




#### Signature

```typescript
export declare const getOrd: <A>(O: Ord<A>) => Ord<Array<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getOrd } from '@fp-tx/core/Array'
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

Get a `Semigroup` based on the concatenation of `Array`s. See also [`getMonoid`](#getMonoid).




#### Signature

```typescript
export declare const getSemigroup: <A = never>() => Semigroup<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getSemigroup } from '@fp-tx/core/Array'

const S = getSemigroup<number>()
assert.deepStrictEqual(S.concat([1, 2], [2, 3]), [1, 2, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`

`getShow` makes a `Show` for an `Array<A>` from a `Show` for an `A`.




#### Signature

```typescript
export declare const getShow: <A>(S: Show<A>) => Show<Array<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getShow } from '@fp-tx/core/Array'

const numShow = { show: (n: number) => (n >= 0 ? `${n}` : `(${-n})`) }
assert.deepStrictEqual(getShow(numShow).show([-2, -1, 0, 1]), '[(2), (1), 0, 1]')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionMonoid`

Get a `Monoid` based on the union of the elements of `Array`s. Elements which equal according to the provided `Eq` are included only once in the result.




#### Signature

```typescript
export declare const getUnionMonoid: <A>(E: Eq<A>) => Monoid<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getUnionMonoid } from '@fp-tx/core/Array'
import { Eq } from '@fp-tx/core/number'

const M = getUnionMonoid<number>(Eq)
assert.deepStrictEqual(M.concat([1, 2], [2, 3]), [1, 2, 3])
assert.deepStrictEqual(M.empty, [])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionSemigroup`

Get a `Semigroup` based on the union of the elements of `Array`s. Elements which equal according to the provided `Eq` are included only once in the result. See also [`getUnionMonoid`](#getUnionMonoid).




#### Signature

```typescript
export declare const getUnionSemigroup: <A>(E: Eq<A>) => Semigroup<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getUnionSemigroup } from '@fp-tx/core/Array'
import { Eq } from '@fp-tx/core/number'

const S = getUnionSemigroup<number>(Eq)
assert.deepStrictEqual(S.concat([1, 2], [2, 3]), [1, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `makeBy`

Return a `Array` of length `n` with element `i` initialized with `f(i)`.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const makeBy: <A>(n: number, f: (i: number) => A) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { makeBy } from '@fp-tx/core/Array'

const double = (i: number): number => i * 2
assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
assert.deepStrictEqual(makeBy(-3, double), [])
assert.deepStrictEqual(makeBy(4.32164, double), [0, 2, 4, 6])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`

Given an element of the base type, `of` builds an `Array` containing just that element of the base type (this is useful for building a `Monad`).




#### Signature

```typescript
export declare const of: <A>(a: A) => Array<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { of } from '@fp-tx/core/Array'

assert.deepStrictEqual(of('a'), ['a'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `replicate`

Create a `Array` containing a value repeated the specified number of times.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const replicate: <A>(n: number, a: A) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { replicate } from '@fp-tx/core/Array'

assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
assert.deepStrictEqual(replicate(-3, 'a'), [])
assert.deepStrictEqual(replicate(2.985647, 'a'), ['a', 'a'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEither`

Create an array from an `Either`. The resulting array will contain the content of the `Either` if it is `Right` and it will be empty if the `Either` is `Left`.




#### Signature

```typescript
export declare const fromEither: <A>(fa: Either<unknown, A>) => Array<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { fromEither } from '@fp-tx/core/Array'
import { either } from 'fp-ts'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe(either.right('r'), fromEither), ['r'])
assert.deepStrictEqual(pipe(either.left('l'), fromEither), [])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`

Create an array from an `Option`. The resulting array will contain the content of the `Option` if it is `Some` and it will be empty if the `Option` is `None`.




#### Signature

```typescript
export declare const fromOption: <A>(fa: Option<A>) => Array<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { fromOption } from '@fp-tx/core/Array'
import { option } from 'fp-ts'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe(option.some('a'), fromOption), ['a'])
assert.deepStrictEqual(pipe(option.none, fromOption), [])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: Array<{}>
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
  fb: B[],
) => (fa: A[]) => { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }[]
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
  f: (a: A) => B[],
) => (ma: A[]) => { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(name: N) => <A>(fa: A[]) => { readonly [K in N]: A }[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `guard`




#### Signature

```typescript
export declare const guard: (b: boolean) => void[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `alt`

Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to types of kind `* -> *`.


In case of `Array` concatenates the inputs into a single array.




#### Signature

```typescript
export declare const alt: <A>(that: LazyArg<Array<A>>) => (fa: Array<A>) => Array<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as A from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    A.alt(() => [4, 5]),
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
export declare const altW: <B>(that: LazyArg<B[]>) => <A>(fa: A[]) => (B | A)[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as A from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    A.altW(() => ['a', 'b']),
  ),
  [1, 2, 3, 'a', 'b'],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `compact`

Compact an array of `Option`s discarding the `None` values and keeping the `Some` values. It returns a new array containing the values of the `Some` options.




#### Signature

```typescript
export declare const compact: <A>(fa: Array<Option<A>>) => Array<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { compact } from '@fp-tx/core/Array'
import { option } from 'fp-ts'

assert.deepStrictEqual(compact([option.some('a'), option.none, option.some('b')]), ['a', 'b'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filter`

Given an iterating function that is a `Predicate` or a `Refinement`, `filter` creates a new `Array` containing the elements of the original `Array` for which the iterating function is `true`.




#### Signature

```typescript
export declare const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Array<B>
  <A>(predicate: Predicate<A>): <B extends A>(bs: Array<B>) => Array<B>
  <A>(predicate: Predicate<A>): (as: Array<A>) => Array<A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { filter } from '@fp-tx/core/Array'
import { isString } from '@fp-tx/core/string'

assert.deepStrictEqual(filter(isString)(['a', 1, {}, 'b', 5]), ['a', 'b'])
assert.deepStrictEqual(filter((x: number) => x > 0)([-3, 1, -2, 5]), [1, 5])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMap`

Maps an array with an iterating function that returns an `Option` and it keeps only the `Some` values discarding the `None`s.




#### Signature

```typescript
export declare const filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: Array<A>) => Array<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { filterMap } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'
import { option } from 'fp-ts'

const f = (s: string) => (s.length === 1 ? option.some(s.toUpperCase()) : option.none)
assert.deepStrictEqual(pipe(['a', 'no', 'neither', 'b'], filterMap(f)), ['A', 'B'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMapWithIndex`

Maps an array with an iterating function that takes the index and the value of each element and returns an `Option`. It keeps only the `Some` values discarding the `None`s.


Same as [`filterMap`](#filterMap), but with an iterating function which takes also the index as input.




#### Signature

```typescript
export declare const filterMapWithIndex: <A, B>(f: (i: number, a: A) => Option<B>) => (fa: A[]) => B[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { filterMapWithIndex } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'
import { option } from 'fp-ts'

const f = (i: number, s: string) => (i % 2 === 1 ? option.some(s.toUpperCase()) : option.none)
assert.deepStrictEqual(pipe(['a', 'no', 'neither', 'b'], filterMapWithIndex(f)), ['NO', 'B'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterWithIndex`

Same as [`filter`](#filter), but passing also the index to the iterating function.




#### Signature

```typescript
export declare const filterWithIndex: {
  <A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (as: Array<A>) => Array<B>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): <B extends A>(bs: Array<B>) => Array<B>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): (as: Array<A>) => Array<A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { filterWithIndex } from '@fp-tx/core/Array'

const f = (index: number, x: number) => x > 0 && index <= 2
assert.deepStrictEqual(filterWithIndex(f)([-3, 1, -2, 5]), [1])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partition`

Given an iterating function that is a `Predicate` or a `Refinement`, `partition` creates two new `Array`s: `right` containing the elements of the original `Array` for which the iterating function is `true`, `left` containing the elements for which it is false.




#### Signature

```typescript
export declare const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Separated<Array<A>, Array<B>>
  <A>(predicate: Predicate<A>): <B extends A>(bs: Array<B>) => Separated<Array<B>, Array<B>>
  <A>(predicate: Predicate<A>): (as: Array<A>) => Separated<Array<A>, Array<A>>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { partition } from '@fp-tx/core/Array'
import { isString } from '@fp-tx/core/string'

assert.deepStrictEqual(partition(isString)(['a', 1, {}, 'b', 5]), { left: [1, {}, 5], right: ['a', 'b'] })
assert.deepStrictEqual(partition((x: number) => x > 0)([-3, 1, -2, 5]), { left: [-3, -2], right: [1, 5] })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMap`

Given an iterating function that returns an `Either`, `partitionMap` applies the iterating function to each element and it creates two `Array`s: `right` containing the values of `Right` results, `left` containing the values of `Left` results.




#### Signature

```typescript
export declare const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: Array<A>) => Separated<Array<B>, Array<C>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { partitionMap } from '@fp-tx/core/Array'
import { Either, left, right } from '@fp-tx/core/Either'

const upperIfString = <B>(x: B): Either<B, string> => (typeof x === 'string' ? right(x.toUpperCase()) : left(x))
assert.deepStrictEqual(partitionMap(upperIfString)([-2, 'hello', 6, 7, 'world']), {
  left: [-2, 6, 7],
  right: ['HELLO', 'WORLD'],
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMapWithIndex`

Same as [`partitionMap`](#partitionMap), but passing also the index to the iterating function.




#### Signature

```typescript
export declare const partitionMapWithIndex: <A, B, C>(
  f: (i: number, a: A) => Either<B, C>,
) => (fa: A[]) => Separated<B[], C[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { partitionMapWithIndex } from '@fp-tx/core/Array'
import { Either, left, right } from '@fp-tx/core/Either'

const upperIfStringBefore3 = <B>(index: number, x: B): Either<B, string> =>
  index < 3 && typeof x === 'string' ? right(x.toUpperCase()) : left(x)
assert.deepStrictEqual(partitionMapWithIndex(upperIfStringBefore3)([-2, 'hello', 6, 7, 'world']), {
  left: [-2, 6, 7, 'world'],
  right: ['HELLO'],
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionWithIndex`

Same as [`partition`](#partition), but passing also the index to the iterating function.




#### Signature

```typescript
export declare const partitionWithIndex: {
  <A, B extends A>(
    refinementWithIndex: RefinementWithIndex<number, A, B>,
  ): (as: Array<A>) => Separated<Array<A>, Array<B>>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): <B extends A>(bs: Array<B>) => Separated<Array<B>, Array<B>>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): (as: Array<A>) => Separated<Array<A>, Array<A>>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { partitionWithIndex } from '@fp-tx/core/Array'

assert.deepStrictEqual(partitionWithIndex((index, x: number) => index < 3 && x > 0)([-2, 5, 6, 7]), {
  left: [-2, 7],
  right: [5, 6],
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`

Separate an array of `Either`s into `Left`s and `Right`s, creating two new arrays: one containing all the left values and one containing all the right values.




#### Signature

```typescript
export declare const separate: <A, B>(fa: Either<A, B>[]) => Separated<A[], B[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { separate } from '@fp-tx/core/Array'
import { either } from 'fp-ts'

assert.deepStrictEqual(separate([either.right('r1'), either.left('l1'), either.right('r2')]), {
  left: ['l1'],
  right: ['r1', 'r2'],
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `wilt`




#### Signature

```typescript
export declare const wilt: PipeableWilt1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `wither`




#### Signature

```typescript
export declare const wither: PipeableWither1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`

Map and fold an `Array`. Map the `Array` passing each value to the iterating function. Then fold the results using the provided `Monoid`.




#### Signature

```typescript
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Array<A>) => M
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { foldMap } from '@fp-tx/core/Array'

const monoid = { concat: (a: string, b: string) => a + b, empty: '' }
const f = (s: string) => s.toUpperCase()
assert.deepStrictEqual(foldMap(monoid)(f)(['a', 'b', 'c']), 'ABC')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMapWithIndex`

Same as [`foldMap`](#foldMap) but passing also the index to the iterating function.




#### Signature

```typescript
export declare const foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: number, a: A) => M) => (fa: Array<A>) => M
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { foldMapWithIndex } from '@fp-tx/core/Array'

const monoid = { concat: (a: string, b: string) => a + b, empty: '' }
const f = (index: number, s: string) => `${s.toUpperCase()}(${index})`
assert.deepStrictEqual(foldMapWithIndex(monoid)(f)(['a', 'b', 'c']), 'A(0)B(1)C(2)')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`

Reduces an `Array`.


`reduce` executes the supplied iterating function on each element of the array, in order, passing in the element and the return value from the calculation on the preceding element.


The first time that the iterating function is called there is no "return value of the previous calculation", the initial value is used in its place.




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Array<A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduce } from '@fp-tx/core/Array'

assert.deepStrictEqual(reduce(5, (acc: number, cur: number) => acc * cur)([2, 3]), 5 * 2 * 3)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`

Same as [`reduce`](#reduce) but applied from the end to the start.


_Note_: the iterating function in this case takes the accumulator as the last argument.




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Array<A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduceRight } from '@fp-tx/core/Array'

assert.deepStrictEqual(reduceRight('', (cur: string, acc: string) => acc + cur)(['a', 'b', 'c']), 'cba')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRightWithIndex`

Same as [`reduceRight`](#reduceRight) but passing also the index to the iterating function.




#### Signature

```typescript
export declare const reduceRightWithIndex: <A, B>(b: B, f: (i: number, a: A, b: B) => B) => (fa: Array<A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduceRightWithIndex } from '@fp-tx/core/Array'

const f = (index: number, cur: unknown, acc: string) =>
  acc + (typeof cur === 'string' ? cur.toUpperCase() + index : '')
assert.deepStrictEqual(reduceRightWithIndex('', f)([2, 'a', 'b', null]), 'B2A1')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceWithIndex`

Same as [`reduce`](#reduce) but passing also the index to the iterating function.




#### Signature

```typescript
export declare const reduceWithIndex: <A, B>(b: B, f: (i: number, b: B, a: A) => B) => (fa: Array<A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduceWithIndex } from '@fp-tx/core/Array'

const f = (index: number, acc: string, cur: unknown) =>
  acc + (typeof cur === 'string' ? cur.toUpperCase() + index : '')
assert.deepStrictEqual(reduceWithIndex('', f)([2, 'a', 'b', null]), 'A1B2')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <A, B>(f: (a: A) => Array<B>) => (ma: Array<A>) => Array<B>
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
) => (...a: A) => Array<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`




#### Signature

```typescript
export declare const fromOptionK: <A extends readonly unknown[], B>(f: (...a: A) => Option<B>) => (...a: A) => B[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromPredicate`

Create an array with one element, if the element satisfies the predicate, otherwise it returns an empty array.




#### Signature

```typescript
export declare function fromPredicate<A, B extends A>(refinement: Refinement<A, B>): (a: A) => Array<B>



export declare function fromPredicate<A>(predicate: Predicate<A>): <B extends A>(b: B) => Array<B>



export declare function fromPredicate<A>(predicate: Predicate<A>): (a: A) => Array<A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { fromPredicate } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'
import { isString } from '@fp-tx/core/string'

assert.deepStrictEqual(pipe('a', fromPredicate(isString)), ['a'])
assert.deepStrictEqual(pipe(7, fromPredicate(isString)), [])

assert.deepStrictEqual(
  pipe(
    7,
    fromPredicate(x => x > 0),
  ),
  [7],
)
assert.deepStrictEqual(
  pipe(
    -3,
    fromPredicate(x => x > 0),
  ),
  [],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`

Given an input an `Array` of functions, `flap` returns an `Array` containing the results of applying each function to the given input.




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: ((a: A) => B)[]) => B[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { flap } from '@fp-tx/core/Array'

const funs = [
  (n: number) => `Double: ${n * 2}`,
  (n: number) => `Triple: ${n * 3}`,
  (n: number) => `Square: ${n * n}`,
]
assert.deepStrictEqual(flap(4)(funs), ['Double: 8', 'Triple: 12', 'Square: 16'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

`map` can be used to turn functions `(a: A) => B` into functions `(fa: Array<A>) => Array<B>`. In practice it applies the base function to each element of the array and collects the results in a new array.




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => (fa: Array<A>) => Array<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { map } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

const f = (n: number) => n * 2
assert.deepStrictEqual(pipe([1, 2, 3], map(f)), [2, 4, 6])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapWithIndex`

Same as [`map`](#map), but the iterating function takes both the index and the value of the element.




#### Signature

```typescript
export declare const mapWithIndex: <A, B>(f: (i: number, a: A) => B) => (fa: Array<A>) => Array<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { mapWithIndex } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

const f = (i: number, s: string) => `${s} - ${i}`
assert.deepStrictEqual(pipe(['a', 'b', 'c'], mapWithIndex(f)), ['a - 0', 'b - 1', 'c - 2'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `foldLeft`

Alias of [`matchLeft`](#matchleft).




#### Signature

```typescript
export declare const foldLeft: <A, B>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (head: A, tail: Array<A>) => B,
) => (as: Array<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldRight`

Alias of [`matchRight`](#matchright).




#### Signature

```typescript
export declare const foldRight: <A, B>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (init: Array<A>, last: A) => B,
) => (as: Array<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`

Takes an array, if the array is empty it returns the result of `onEmpty`, otherwise it passes the array to `onNonEmpty` and returns the result.




#### Signature

```typescript
export declare const match: <B, A>(onEmpty: LazyArg<B>, onNonEmpty: (as: NonEmptyArray<A>) => B) => (as: Array<A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { match } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

const matcher = match(
  () => 'No elements',
  as => `Found ${as.length} element(s)`,
)
assert.deepStrictEqual(pipe([1, 2, 3, 4], matcher), 'Found 4 element(s)')
assert.deepStrictEqual(pipe([], matcher), 'No elements')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchLeft`

Takes an array, if the array is empty it returns the result of `onEmpty`, otherwise it passes the array to `onNonEmpty` broken into its first element and remaining elements.




#### Signature

```typescript
export declare const matchLeft: <B, A>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (head: A, tail: Array<A>) => B,
) => (as: Array<A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { matchLeft } from '@fp-tx/core/Array'

const len: <A>(as: Array<A>) => number = matchLeft(
  () => 0,
  (_, tail) => 1 + len(tail),
)
assert.strictEqual(len([1, 2, 3]), 3)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchLeftW`

Less strict version of [`matchLeft`](#matchleft). It will work when `onEmpty` and `onNonEmpty` have different return types.




#### Signature

```typescript
export declare const matchLeftW: <B, A, C>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (head: A, tail: A[]) => C,
) => (as: A[]) => B | C
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { matchLeftW } from '@fp-tx/core/Array'

const f = matchLeftW(
  () => 0,
  (head: string, tail: string[]) => `Found "${head}" followed by ${tail.length} elements`,
)
assert.strictEqual(f(['a', 'b', 'c']), 'Found "a" followed by 2 elements')
assert.strictEqual(f([]), 0)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchRight`

Takes an array, if the array is empty it returns the result of `onEmpty`, otherwise it passes the array to `onNonEmpty` broken into its initial elements and the last element.




#### Signature

```typescript
export declare const matchRight: <B, A>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (init: Array<A>, last: A) => B,
) => (as: Array<A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { matchRight } from '@fp-tx/core/Array'

const len: <A>(as: Array<A>) => number = matchRight(
  () => 0,
  (head, _) => 1 + len(head),
)
assert.strictEqual(len([1, 2, 3]), 3)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchRightW`

Less strict version of [`matchRight`](#matchright). It will work when `onEmpty` and `onNonEmpty` have different return types.




#### Signature

```typescript
export declare const matchRightW: <B, A, C>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (init: A[], last: A) => C,
) => (as: A[]) => B | C
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { matchRightW } from '@fp-tx/core/Array'

const f = matchRightW(
  () => 0,
  (head: string[], tail: string) => `Found ${head.length} elements folllowed by "${tail}"`,
)
assert.strictEqual(f(['a', 'b', 'c']), 'Found 2 elements folllowed by "c"')
assert.strictEqual(f([]), 0)

```

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
  onNonEmpty: (as: NEA.NonEmptyArray<A>) => C,
) => (as: A[]) => B | C
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { matchW } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

const matcherW = matchW(
  () => 'No elements',
  as => as.length,
)
assert.deepStrictEqual(pipe([1, 2, 3, 4], matcherW), 4)
assert.deepStrictEqual(pipe([], matcherW), 'No elements')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Refinements


### `isEmpty`

Test whether an array is empty




#### Signature

```typescript
export declare const isEmpty: <A>(as: A[]) => as is []
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { isEmpty } from '@fp-tx/core/Array'

assert.strictEqual(isEmpty([]), true)
assert.strictEqual(isEmpty(['a']), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isNonEmpty`

Test whether an array is non empty narrowing down the type to `NonEmptyArray<A>`




#### Signature

```typescript
export declare const isNonEmpty: <A>(as: Array<A>) => as is NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { isNonEmpty } from '@fp-tx/core/Array'

assert.strictEqual(isNonEmpty([]), false)
assert.strictEqual(isNonEmpty(['a']), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `chainFirst`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const chainFirst: <A, B>(f: (a: A) => Array<B>) => (first: Array<A>) => Array<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as A from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    A.chainFirst(() => ['a', 'b']),
  ),
  [1, 1, 2, 2, 3, 3],
)
assert.deepStrictEqual(
  pipe(
    [1, 2, 3],
    A.chainFirst(() => []),
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
export declare const chainRecBreadthFirst: <A, B>(f: (a: A) => Array<Either<A, B>>) => (a: A) => Array<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainRecDepthFirst`




#### Signature

```typescript
export declare const chainRecDepthFirst: <A, B>(f: (a: A) => Array<Either<A, B>>) => (a: A) => Array<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainWithIndex`

Same as [`chain`](#chain), but passing also the index to the iterating function.




#### Signature

```typescript
export declare const chainWithIndex: <A, B>(f: (i: number, a: A) => B[]) => (as: A[]) => B[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { chainWithIndex, replicate } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

const f = (index: number, x: string) => replicate(2, `${x}${index}`)
assert.deepStrictEqual(pipe(['a', 'b', 'c'], chainWithIndex(f)), ['a0', 'a0', 'b1', 'b1', 'c2', 'c2'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMap`

Composes computations in sequence, using the return value of one computation to determine the next computation.


In other words it takes a function `f` that produces an array from a single element of the base type `A` and returns a new function which applies `f` to each element of the input array (like [`map`](#map)) and, instead of returning an array of arrays, concatenates the results into a single array (like [`flatten`](#flatten)).




#### Signature

```typescript
export declare const flatMap: {
  <A, B>(f: (a: A, i: number) => Array<B>): (ma: Array<A>) => Array<B>
  <A, B>(ma: Array<A>, f: (a: A, i: number) => Array<B>): Array<B>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { flatMap, map, replicate } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

const f = (n: number) => replicate(n, `${n}`)
assert.deepStrictEqual(pipe([1, 2, 3], map(f)), [['1'], ['2', '2'], ['3', '3', '3']])
assert.deepStrictEqual(pipe([1, 2, 3], flatMap(f)), ['1', '2', '2', '3', '3', '3'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`

Takes an array of arrays of `A` and flattens them into an array of `A` by concatenating the elements of each array in order.




#### Signature

```typescript
export declare const flatten: <A>(mma: Array<Array<A>>) => Array<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { flatten } from '@fp-tx/core/Array'

assert.deepStrictEqual(flatten([['a'], ['b', 'c'], ['d', 'e', 'f']]), ['a', 'b', 'c', 'd', 'e', 'f'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseWithIndex`

Same as [`traverse`](#traverse) but passing also the index to the iterating function.




#### Signature

```typescript
export declare const traverseWithIndex: PipeableTraverseWithIndex1<URI, number>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { traverseWithIndex } from '@fp-tx/core/Array'
import { Applicative, left, right } from '@fp-tx/core/Either'

const f = (index: number, x: unknown) =>
  typeof x === 'string' ? right(x.toUpperCase() + index) : left(new Error('not a string'))
assert.deepStrictEqual(traverseWithIndex(Applicative)(f)(['a', 'b']), right(['A0', 'B1']))
assert.deepStrictEqual(traverseWithIndex(Applicative)(f)(['a', 5]), left(new Error('not a string')))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequence`

`sequence` takes an `Array` where elements are `HKT<A>` (higher kinded type) and, using an applicative of that `HKT`, returns an `HKT` of `Array<A>`.


E.g. it can turn an `Array<Either<Error, string>>` into an `Either<Error, Array<string>>`.


`sequence` requires an `Applicative` of the `HKT` you are targeting, e.g. to turn an `Array<Either<E, A>>` into an `Either<E, Array<A>>`, it needs an `Applicative` for `Either`, to to turn an `Array<Option<A>>` into an `Option<Array<A>>`, it needs an `Applicative` for `Option`.




#### Signature

```typescript
export declare const sequence: Traversable1<URI>['sequence']
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { sequence } from '@fp-tx/core/Array'
import { Applicative, left, right } from '@fp-tx/core/Either'

assert.deepStrictEqual(sequence(Applicative)([right('a'), right('b')]), right(['a', 'b']))
assert.deepStrictEqual(
  sequence(Applicative)([right('a'), left(new Error('not a string'))]),
  left(new Error('not a string')),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse`

Given an iterating function that returns a `HKT` (higher kinded type), `traverse` applies the iterating function to each element of the `Array` and then [`sequence`](#sequence)-s the results using the provided `Applicative`.


E.g. suppose you have an `Array` and you want to format each element with a function that returns a result or an error as `f = (a: A) => Either<Error, B>`, using `traverse` you can apply `f` to all elements and directly obtain as a result an `Either<Error,Array<B>>` i.e. an `Array<B>` if all the results are `B`, or an `Error` if some of the results are `Error`s.




#### Signature

```typescript
export declare const traverse: PipeableTraverse1<URI>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { traverse } from '@fp-tx/core/Array'
import { Applicative, left, right } from '@fp-tx/core/Either'

const f = (x: unknown) => (typeof x === 'string' ? right(x.toUpperCase()) : left(new Error('not a string')))
assert.deepStrictEqual(traverse(Applicative)(f)(['a', 'b']), right(['A', 'B']))
assert.deepStrictEqual(traverse(Applicative)(f)(['a', 5]), left(new Error('not a string')))

```

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
export declare const URI = 'Array'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Unsafe


### `unsafeDeleteAt`




#### Signature

```typescript
export declare const unsafeDeleteAt: <A>(i: number, as: A[]) => A[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unsafeInsertAt`




#### Signature

```typescript
export declare const unsafeInsertAt: <A>(i: number, a: A, as: Array<A>) => NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unsafeUpdateAt`




#### Signature

```typescript
export declare const unsafeUpdateAt: <A>(i: number, a: A, as: A[]) => A[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `Spanned`

Type returned by [`spanLeft`](#spanLeft) composed of an `init` array and a `rest` array.




#### Signature

```typescript
export interface Spanned<I, R> {
  init: Array<I>
  rest: Array<R>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <A>(fa: Array<A>) => <B>(fab: Array<(a: A) => B>) => Array<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { ap, map, of } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

// a curried function with 3 input parameteres
const f = (s1: string) => (n: number) => (s2: string) => s1 + n + s2

// let's use `ap` to iterate `f` over an array for each input parameter
assert.deepStrictEqual(pipe(['a', 'b'], map(f), ap([1, 2]), ap(['😀', '😫', '😎'])), [
  'a1😀',
  'a1😫',
  'a1😎',
  'a2😀',
  'a2😫',
  'a2😎',
  'b1😀',
  'b1😫',
  'b1😎',
  'b2😀',
  'b2😫',
  'b2😎',
])

// given Array implements the Applicative interface with the `of` method,
// we can write exactly the same thing in a more symmetric way
// using `of` on `f` and `ap` on each array in input
assert.deepStrictEqual(
  pipe(of(f), ap(['a', 'b']), ap([1, 2]), ap(['😀', '😫', '😎'])),
  pipe(['a', 'b'], map(f), ap([1, 2]), ap(['😀', '😫', '😎'])),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirst`

Combine two effectful actions, keeping only the result of the first.




#### Signature

```typescript
export declare const apFirst: <B>(second: B[]) => <A>(first: A[]) => A[]
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
export declare const apSecond: <B>(second: B[]) => <A>(first: A[]) => B[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `append`

Append an element to the end of a `Array`, creating a new `NonEmptyArray`.




#### Signature

```typescript
export declare const append: <A>(end: A) => (init: Array<A>) => NEA.NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { append } from '@fp-tx/core/Array'
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
export declare const appendW: <A, B>(end: B) => (init: Array<A>) => NEA.NonEmptyArray<A | B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { appendW } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2, 3], appendW('d')), [1, 2, 3, 'd'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`array`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `A.Functor` instead of `A.array` (where `A` is from `import A from 'fp-ts/Array'`)




#### Signature

```typescript
export declare const array: FunctorWithIndex1<URI, number> &
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

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chop`

A useful recursion pattern for processing an array to produce a new array, often used for "chopping" up the input array. Typically chop is called with some function that will consume an initial prefix of the array and produce a value and the rest of the array.




#### Signature

```typescript
export declare const chop: <A, B>(f: (as: NEA.NonEmptyArray<A>) => [B, A[]]) => (as: A[]) => B[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { Eq } from '@fp-tx/core/Eq'
import * as A from '@fp-tx/core/Array'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
  return A.chop(as => {
    const { init, rest } = pipe(
      as,
      A.spanLeft((a: A) => S.equals(a, as[0])),
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

Splits an array into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of the array. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive definition of `chunksOf`; it satisfies the property that


Whenever `n` evenly divides the length of `xs`.




#### Signature

```typescript
export declare const chunksOf: (n: number) => <A>(as: A[]) => NEA.NonEmptyArray<A>[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { chunksOf } from '@fp-tx/core/Array'

assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `comprehension`

`Array` comprehension.




#### Signature

```typescript
export declare function comprehension<A, B, C, D, R>(
  input: [Array<A>, Array<B>, Array<C>, Array<D>],
  f: (a: A, b: B, c: C, d: D) => R,
  g?: (a: A, b: B, c: C, d: D) => boolean,
): Array<R>



export declare function comprehension<A, B, C, R>(
  input: [Array<A>, Array<B>, Array<C>],
  f: (a: A, b: B, c: C) => R,
  g?: (a: A, b: B, c: C) => boolean,
): Array<R>



export declare function comprehension<A, B, R>(
  input: [Array<A>, Array<B>],
  f: (a: A, b: B) => R,
  g?: (a: A, b: B) => boolean,
): Array<R>



export declare function comprehension<A, R>(input: [Array<A>], f: (a: A) => R, g?: (a: A) => boolean): Array<R>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { comprehension } from '@fp-tx/core/Array'
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
export declare const concat: <A>(second: Array<A>) => (first: Array<A>) => Array<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `concatW`




#### Signature

```typescript
export declare const concatW: <B>(second: B[]) => <A>(first: A[]) => (B | A)[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`cons`~~

Use `prepend` instead.




#### Signature

```typescript
export declare const cons: typeof NEA.cons
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `copy`

This function takes an array and makes a new array containing the same elements.




#### Signature

```typescript
export declare const copy: <A>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `deleteAt`

Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds.




#### Signature

```typescript
export declare const deleteAt: (i: number) => <A>(as: A[]) => Option<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { deleteAt } from '@fp-tx/core/Array'
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
  (xs: Array<A>): (ys: Array<A>) => Array<A>
  (xs: Array<A>, ys: Array<A>): Array<A>
}

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { difference } from '@fp-tx/core/Array'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2], difference(N.Eq)([2, 3])), [1])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `dropLeft`

Creates a new `Array` which is a copy of the input dropping a max number of elements from the start.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const dropLeft: (n: number) => <A>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { dropLeft } from '@fp-tx/core/Array'

assert.deepStrictEqual(dropLeft(2)([1, 2, 3]), [3])
assert.deepStrictEqual(dropLeft(5)([1, 2, 3]), [])
assert.deepStrictEqual(dropLeft(0)([1, 2, 3]), [1, 2, 3])
assert.deepStrictEqual(dropLeft(-2)([1, 2, 3]), [1, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `dropLeftWhile`

Creates a new `Array` which is a copy of the input dropping the longest initial subarray for which all element satisfy the specified predicate.




#### Signature

```typescript
export declare function dropLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Array<B>



export declare function dropLeftWhile<A>(predicate: Predicate<A>): <B extends A>(bs: Array<B>) => Array<B>



export declare function dropLeftWhile<A>(predicate: Predicate<A>): (as: Array<A>) => Array<A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { dropLeftWhile } from '@fp-tx/core/Array'

assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `dropRight`

Creates a new `Array` which is a copy of the input dropping a max number of elements from the end.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const dropRight: (n: number) => <A>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { dropRight } from '@fp-tx/core/Array'

assert.deepStrictEqual(dropRight(2)([1, 2, 3]), [1])
assert.deepStrictEqual(dropRight(5)([1, 2, 3]), [])
assert.deepStrictEqual(dropRight(0)([1, 2, 3]), [1, 2, 3])
assert.deepStrictEqual(dropRight(-2)([1, 2, 3]), [1, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `duplicate`

`duplicate` returns an array containing the whole input `Array`, then to the input `Array` dropping the first element, then to the input `Array` dropping the first two elements, etc.




#### Signature

```typescript
export declare const duplicate: <A>(wa: Array<A>) => Array<Array<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { duplicate } from '@fp-tx/core/Array'

assert.deepStrictEqual(duplicate(['a', 'b', 'c']), [['a', 'b', 'c'], ['b', 'c'], ['c']])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`

Test if a value is a member of an `Array`. Takes a `Eq<A>` as a single argument which returns the function to use to search for a value of type `A` in an `Array<A>`.




#### Signature

```typescript
export declare const elem: <A>(E: Eq<A>) => {
  (a: A): (as: Array<A>) => boolean
  (a: A, as: Array<A>): boolean
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { elem } from '@fp-tx/core/Array'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(2)), true)
assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(0)), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`empty`~~

Use a new `[]` instead.




#### Signature

```typescript
export declare const empty: Array<never>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `every`

`every` tells if the provided predicate holds true for every element in the `Array`.




#### Signature

```typescript
export declare const every: {
  <A, B extends A>(refinement: Refinement<A, B>): Refinement<Array<A>, Array<B>>
  <A>(predicate: Predicate<A>): Predicate<Array<A>>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { every } from '@fp-tx/core/Array'

assert.equal(every((x: number) => x >= 0)([1, 2, 3]), true)
assert.equal(every((x: number) => x >= 0)([-1, 2, 3]), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `exists`

Alias of [`some`](#some)




#### Signature

```typescript
export declare const exists: <A>(predicate: Predicate<A>) => (as: Array<A>) => as is NEA.NonEmptyArray<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`

Given an iterating function that takes `Array<A>` as input, `extend` returns an array containing the results of the iterating function applied to the whole input `Array`, then to the input `Array` without the first element, then to the input `Array` without the first two elements, etc.




#### Signature

```typescript
export declare const extend: <A, B>(f: (as: Array<A>) => B) => (as: Array<A>) => Array<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { extend } from '@fp-tx/core/Array'

const f = (a: string[]) => a.join(',')
assert.deepStrictEqual(extend(f)(['a', 'b', 'c']), ['a,b,c', 'b,c', 'c'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterE`

Filter values inside a context.




#### Signature

```typescript
export declare const filterE: import('./Witherable.js').FilterE1<'Array'>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findFirst`

Find the first element which satisfies a predicate (or a refinement) function. It returns an `Option` containing the element or `None` if not found.




#### Signature

```typescript
export declare function findFirst<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Option<B>



export declare function findFirst<A>(predicate: Predicate<A>): <B extends A>(bs: Array<B>) => Option<B>



export declare function findFirst<A>(predicate: Predicate<A>): (as: Array<A>) => Option<A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { findFirst } from '@fp-tx/core/Array'
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

Given a selector function which takes an element and returns an option, this function applies the selector to each element of the array and returns the first `Some` result. Otherwise it returns `None`.




#### Signature

```typescript
export declare const findFirstMap: <A, B>(f: (a: A) => Option<B>) => (as: Array<A>) => Option<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { findFirstMap } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

interface Person {
  readonly name: string
  readonly age: number
}

const persons: Array<Person> = [
  { name: 'John', age: 16 },
  { name: 'Mary', age: 45 },
  { name: 'Joey', age: 28 },
]

const nameOfPersonAbove18 = (p: Person) => (p.age <= 18 ? none : some(p.name))
const nameOfPersonAbove70 = (p: Person) => (p.age <= 70 ? none : some(p.name))
assert.deepStrictEqual(findFirstMap(nameOfPersonAbove18)(persons), some('Mary'))
assert.deepStrictEqual(findFirstMap(nameOfPersonAbove70)(persons), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findIndex`

`findIndex` returns an `Option` containing the first index for which a predicate holds. It returns `None` if no element satisfies the predicate. Similar to [`findFirst`](#findFirst) but returning the index instead of the element.




#### Signature

```typescript
export declare const findIndex: <A>(predicate: Predicate<A>) => (as: Array<A>) => Option<number>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { findIndex } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `findLast`

Find the last element which satisfies a predicate function. It returns an `Option` containing the element or `None` if not found.




#### Signature

```typescript
export declare function findLast<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Option<B>



export declare function findLast<A>(predicate: Predicate<A>): <B extends A>(bs: Array<B>) => Option<B>



export declare function findLast<A>(predicate: Predicate<A>): (as: Array<A>) => Option<A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { findLast } from '@fp-tx/core/Array'
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

Returns the index of the last element of the list which matches the predicate. It returns an `Option` containing the index or `None` if not found.




#### Signature

```typescript
export declare const findLastIndex: <A>(predicate: Predicate<A>) => (as: Array<A>) => Option<number>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { findLastIndex } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

interface X {
  readonly a: number
  readonly b: number
}
const xs: Array<X> = [
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

Given a selector function which takes an element and returns an option, this function applies the selector to each element of the array starting from the end and returns the last `Some` result. Otherwise it returns `None`.




#### Signature

```typescript
export declare const findLastMap: <A, B>(f: (a: A) => Option<B>) => (as: Array<A>) => Option<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { findLastMap } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

interface Person {
  readonly name: string
  readonly age: number
}

const persons: Array<Person> = [
  { name: 'John', age: 16 },
  { name: 'Mary', age: 45 },
  { name: 'Joey', age: 28 },
]

const nameOfPersonAbove18 = (p: Person) => (p.age <= 18 ? none : some(p.name))
const nameOfPersonAbove70 = (p: Person) => (p.age <= 70 ? none : some(p.name))
assert.deepStrictEqual(findLastMap(nameOfPersonAbove18)(persons), some('Joey'))
assert.deepStrictEqual(findLastMap(nameOfPersonAbove70)(persons), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `head`

Get the first element in an array, or `None` if the array is empty




#### Signature

```typescript
export declare const head: <A>(as: Array<A>) => Option<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { head } from '@fp-tx/core/Array'
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
export declare const init: <A>(as: A[]) => Option<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { init } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
assert.deepStrictEqual(init([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `insertAt`

Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds.




#### Signature

```typescript
export declare const insertAt: <A>(i: number, a: A) => (as: A[]) => Option<NEA.NonEmptyArray<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { insertAt } from '@fp-tx/core/Array'
import { some } from '@fp-tx/core/Option'

assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intercalate`

Places an element in between members of an `Array`, then folds the results using the provided `Monoid`.




#### Signature

```typescript
export declare const intercalate: <A>(M: Monoid<A>) => (middle: A) => (as: Array<A>) => A
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { intercalate } from '@fp-tx/core/Array'

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
  (xs: Array<A>): (ys: Array<A>) => Array<A>
  (xs: Array<A>, ys: Array<A>): Array<A>
}

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { intersection } from '@fp-tx/core/Array'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2], intersection(N.Eq)([2, 3])), [2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersperse`

Creates a new `Array` placing an element in between members of the input `Array`.




#### Signature

```typescript
export declare const intersperse: <A>(middle: A) => (as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { intersperse } from '@fp-tx/core/Array'

assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isOutOfBound`

Test whether an array contains a particular index




#### Signature

```typescript
export declare const isOutOfBound: <A>(i: number, as: Array<A>) => boolean
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { isOutOfBound } from '@fp-tx/core/Array'

assert.strictEqual(isOutOfBound(1, ['a', 'b', 'c']), false)
assert.strictEqual(isOutOfBound(-1, ['a', 'b', 'c']), true)
assert.strictEqual(isOutOfBound(3, ['a', 'b', 'c']), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `last`

Get the last element in an array, or `None` if the array is empty




#### Signature

```typescript
export declare const last: <A>(as: Array<A>) => Option<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { last } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(last([1, 2, 3]), some(3))
assert.deepStrictEqual(last([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `lefts`

Takes an `Array` of `Either` and produces a new `Array` containing the values of all the `Left` elements in the same order.




#### Signature

```typescript
export declare const lefts: <E, A>(as: Either<E, A>[]) => E[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { lefts } from '@fp-tx/core/Array'
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
) => (fa: A[]) => { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }[]
```




---


### `lookup`

This function provides a safe way to read a value at a particular index from an array. It returns a `none` if the index is out of bounds, and a `some` of the element if the index is valid.




#### Signature

```typescript
export declare const lookup: {
  (i: number): <A>(as: Array<A>) => Option<A>
  <A>(i: number, as: Array<A>): Option<A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { lookup } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), some(2))
assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyAt`

Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out of bounds.




#### Signature

```typescript
export declare const modifyAt: <A>(i: number, f: (a: A) => A) => (as: A[]) => Option<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { modifyAt } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

const double = (x: number): number => x * 2
assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
assert.deepStrictEqual(modifyAt(1, double)([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `prepend`

Prepend an element to the front of a `Array`, creating a new `NonEmptyArray`.




#### Signature

```typescript
export declare const prepend: <A>(head: A) => (tail: Array<A>) => NEA.NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { prepend } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `prependAll`

Creates a new `Array`, prepending an element to every member of the input `Array`.




#### Signature

```typescript
export declare const prependAll: <A>(middle: A) => (as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { prependAll } from '@fp-tx/core/Array'

assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`prependToAll`~~

Use `prependAll` instead




#### Signature

```typescript
export declare const prependToAll: <A>(middle: A) => (as: A[]) => A[]
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `prependW`

Less strict version of [`prepend`](#prepend).




#### Signature

```typescript
export declare const prependW: <A, B>(head: B) => (tail: Array<A>) => NEA.NonEmptyArray<A | B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { prependW } from '@fp-tx/core/Array'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([2, 3, 4], prependW('a')), ['a', 2, 3, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`range`~~

Use `NonEmptyArray` module instead.




#### Signature

```typescript
export declare const range: (start: number, end: number) => NEA.NonEmptyArray<number>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`

Reverse an array, creating a new array




#### Signature

```typescript
export declare const reverse: <A>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reverse } from '@fp-tx/core/Array'

assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rights`

Takes an `Array` of `Either` and produces a new `Array` containing the values of all the `Right` elements in the same order.




#### Signature

```typescript
export declare const rights: <E, A>(as: Either<E, A>[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { rights } from '@fp-tx/core/Array'
import { right, left } from '@fp-tx/core/Either'

assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rotate`

Creates a new `Array` rotating the input `Array` by `n` steps.




#### Signature

```typescript
export declare const rotate: (n: number) => <A>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { rotate } from '@fp-tx/core/Array'

assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `scanLeft`

Same as `reduce` but it carries over the intermediate steps




#### Signature

```typescript
export declare const scanLeft: <A, B>(b: B, f: (b: B, a: A) => B) => (as: A[]) => NEA.NonEmptyArray<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { scanLeft } from '@fp-tx/core/Array'

assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `scanRight`

Fold an array from the right, keeping all intermediate results instead of only the final result




#### Signature

```typescript
export declare const scanRight: <A, B>(b: B, f: (a: A, b: B) => B) => (as: A[]) => NEA.NonEmptyArray<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { scanRight } from '@fp-tx/core/Array'

assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `size`

Calculate the number of elements in a `Array`.




#### Signature

```typescript
export declare const size: <A>(as: A[]) => number
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { size } from '@fp-tx/core/Array'

assert.strictEqual(size(['a', 'b', 'c']), 3)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`snoc`~~

Use `append` instead.




#### Signature

```typescript
export declare const snoc: <A>(init: A[], end: A) => NEA.NonEmptyArray<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `some`

`some` tells if the provided predicate holds true at least for one element in the `Array`.




#### Signature

```typescript
export declare const some: <A>(predicate: Predicate<A>) => (as: A[]) => as is NEA.NonEmptyArray<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { some } from '@fp-tx/core/Array'

assert.equal(some((x: number) => x >= 0)([1, 2, 3]), true)
assert.equal(some((x: number) => x >= 10)([1, 2, 3]), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sort`

Sort the elements of an array in increasing order, creating a new array




#### Signature

```typescript
export declare const sort: <B>(O: Ord<B>) => <A extends B>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { sort } from '@fp-tx/core/Array'
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
export declare const sortBy: <B>(ords: Ord<B>[]) => <A extends B>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { sortBy } from '@fp-tx/core/Array'
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
export declare function spanLeft<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Spanned<B, A>



export declare function spanLeft<A>(predicate: Predicate<A>): <B extends A>(bs: Array<B>) => Spanned<B, B>



export declare function spanLeft<A>(predicate: Predicate<A>): (as: Array<A>) => Spanned<A, A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { spanLeft } from '@fp-tx/core/Array'

const isOdd = (n: number) => n % 2 === 1
assert.deepStrictEqual(spanLeft(isOdd)([1, 3, 2, 4, 5]), { init: [1, 3], rest: [2, 4, 5] })
assert.deepStrictEqual(spanLeft(isOdd)([0, 2, 4, 5]), { init: [], rest: [0, 2, 4, 5] })
assert.deepStrictEqual(spanLeft(isOdd)([1, 3, 5]), { init: [1, 3, 5], rest: [] })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `splitAt`

Splits an `Array` into two pieces, the first piece has max `n` elements.




#### Signature

```typescript
export declare const splitAt: (n: number) => <A>(as: A[]) => [A[], A[]]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { splitAt } from '@fp-tx/core/Array'

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
export declare const tail: <A>(as: A[]) => Option<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { tail } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
assert.deepStrictEqual(tail([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `takeLeft`

Keep only a max number of elements from the start of an `Array`, creating a new `Array`.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const takeLeft: (n: number) => <A>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { takeLeft } from '@fp-tx/core/Array'

assert.deepStrictEqual(takeLeft(2)([1, 2, 3, 4, 5]), [1, 2])
assert.deepStrictEqual(takeLeft(7)([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
assert.deepStrictEqual(takeLeft(0)([1, 2, 3, 4, 5]), [])
assert.deepStrictEqual(takeLeft(-1)([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `takeLeftWhile`

Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new array




#### Signature

```typescript
export declare function takeLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (as: Array<A>) => Array<B>



export declare function takeLeftWhile<A>(predicate: Predicate<A>): <B extends A>(bs: Array<B>) => Array<B>



export declare function takeLeftWhile<A>(predicate: Predicate<A>): (as: Array<A>) => Array<A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { takeLeftWhile } from '@fp-tx/core/Array'

assert.deepStrictEqual(takeLeftWhile((n: number) => n % 2 === 0)([2, 4, 3, 6]), [2, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `takeRight`

Keep only a max number of elements from the end of an `Array`, creating a new `Array`.


**Note**. `n` is normalized to a non negative integer.




#### Signature

```typescript
export declare const takeRight: (n: number) => <A>(as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { takeRight } from '@fp-tx/core/Array'

assert.deepStrictEqual(takeRight(2)([1, 2, 3, 4, 5]), [4, 5])
assert.deepStrictEqual(takeRight(7)([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
assert.deepStrictEqual(takeRight(0)([1, 2, 3, 4, 5]), [])
assert.deepStrictEqual(takeRight(-1)([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unfold`

`unfold` takes a function `f` which returns an `Option` of a tuple containing an outcome value and an input for the following iteration. `unfold` applies `f` to the initial value `b` and then recursively to the second element of the tuple contained in the returned `option` of the previous calculation until `f` returns `Option.none`.




#### Signature

```typescript
export declare const unfold: <A, B>(b: B, f: (b: B) => Option<readonly [A, B]>) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { unfold } from '@fp-tx/core/Array'
import { option } from 'fp-ts'

const f = (n: number) => {
  if (n <= 0) return option.none
  const returnValue = n * 2
  const inputForNextRound = n - 1
  return option.some([returnValue, inputForNextRound] as const)
}
assert.deepStrictEqual(unfold(5, f), [10, 8, 6, 4, 2])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `union`

Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons




#### Signature

```typescript
export declare function union<A>(E: Eq<A>): {
  (xs: Array<A>): (ys: Array<A>) => Array<A>
  (xs: Array<A>, ys: Array<A>): Array<A>
}

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { union } from '@fp-tx/core/Array'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe([1, 2], union(N.Eq)([2, 3])), [1, 2, 3])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `uniq`

Creates a new `Array` removing duplicate elements, keeping the first occurrence of an element, based on a `Eq<A>`.




#### Signature

```typescript
export declare const uniq: <A>(E: Eq<A>) => (as: A[]) => A[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { uniq } from '@fp-tx/core/Array'
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
export declare const unzip: <A, B>(as: [A, B][]) => [A[], B[]]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { unzip } from '@fp-tx/core/Array'

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

Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds.




#### Signature

```typescript
export declare const updateAt: <A>(i: number, a: A) => (as: A[]) => Option<A[]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { updateAt } from '@fp-tx/core/Array'
import { some, none } from '@fp-tx/core/Option'

assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
assert.deepStrictEqual(updateAt(1, 1)([]), none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zero`

Makes an empty `Array`, useful for building a [`Monoid`](#Monoid)




#### Signature

```typescript
export declare const zero: <A>() => Array<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zip`

Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the longer array are discarded




#### Signature

```typescript
export declare function zip<B>(bs: Array<B>): <A>(as: Array<A>) => Array<[A, B]>



export declare function zip<A, B>(as: Array<A>, bs: Array<B>): Array<[A, B]>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { zip } from '@fp-tx/core/Array'
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
export declare const zipWith: <A, B, C>(fa: A[], fb: B[], f: (a: A, b: B) => C) => C[]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { zipWith } from '@fp-tx/core/Array'

assert.deepStrictEqual(
  zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n),
  ['a1', 'b2', 'c3'],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti