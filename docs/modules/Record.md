
# Record







### Instances

* [Compactable](#compactable)
* [Filterable](#filterable)
* [FilterableWithIndex](#filterablewithindex)
* [Functor](#functor)
* [FunctorWithIndex](#functorwithindex)
* [getDifferenceMagma](#getdifferencemagma)
* [getEq](#geteq)
* [getIntersectionSemigroup](#getintersectionsemigroup)
* [getMonoid](#getmonoid)
* [getShow](#getshow)
* [getUnionMonoid](#getunionmonoid)
* [getUnionSemigroup](#getunionsemigroup)

### Conversions

* [fromEntries](#fromentries)
* [toArray](#toarray)
* [toEntries](#toentries)

### Filtering

* [compact](#compact)
* [filter](#filter)
* [filterMap](#filtermap)
* [getWitherable](#getwitherable)
* [partition](#partition)
* [partitionMap](#partitionmap)
* [separate](#separate)
* [wilt](#wilt)
* [wither](#wither)

### Folding

* [foldMap](#foldmap)
* [getFoldable](#getfoldable)
* [getFoldableWithIndex](#getfoldablewithindex)
* [reduce](#reduce)
* [reduceRight](#reduceright)

### Mapping

* [flap](#flap)
* [map](#map)

### Traversing

* [getTraversable](#gettraversable)
* [getTraversableWithIndex](#gettraversablewithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* ~~[Foldable](#foldable)~~ (deprecated)
* ~~[FoldableWithIndex](#foldablewithindex)~~ (deprecated)
* ~~[Traversable](#traversable)~~ (deprecated)
* ~~[TraversableWithIndex](#traversablewithindex)~~ (deprecated)
* ~~[Witherable](#witherable)~~ (deprecated)
* [collect](#collect)
* [deleteAt](#deleteat)
* [difference](#difference)
* [elem](#elem)
* ~~[empty](#empty)~~ (deprecated)
* [every](#every)
* [filterMapWithIndex](#filtermapwithindex)
* [filterWithIndex](#filterwithindex)
* [foldMapWithIndex](#foldmapwithindex)
* [fromFoldable](#fromfoldable)
* [fromFoldableMap](#fromfoldablemap)
* [has](#has)
* ~~[hasOwnProperty](#hasownproperty)~~ (deprecated)
* ~~[insertAt](#insertat)~~ (deprecated)
* [intersection](#intersection)
* [isEmpty](#isempty)
* [isSubrecord](#issubrecord)
* [keys](#keys)
* [lookup](#lookup)
* [mapWithIndex](#mapwithindex)
* [modifyAt](#modifyat)
* [partitionMapWithIndex](#partitionmapwithindex)
* [partitionWithIndex](#partitionwithindex)
* [pop](#pop)
* ~~[record](#record)~~ (deprecated)
* [reduceRightWithIndex](#reducerightwithindex)
* [reduceWithIndex](#reducewithindex)
* [sequence](#sequence)
* [singleton](#singleton)
* [size](#size)
* [some](#some)
* [toUnfoldable](#tounfoldable)
* [traverse](#traverse)
* [traverseWithIndex](#traversewithindex)
* [union](#union)
* [updateAt](#updateat)
* [upsertAt](#upsertat)

## Instances


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


### `FilterableWithIndex`




#### Signature

```typescript
export declare const FilterableWithIndex: FilterableWithIndex1<URI, string>
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
export declare const FunctorWithIndex: FunctorWithIndex1<URI, string>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getDifferenceMagma`

Produces a `Magma` with a `concat` function that combines two `Record`s by making the `difference`.




#### Signature

```typescript
export declare const getDifferenceMagma: <A>() => Magma<Record<string, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getDifferenceMagma, difference } from '@fp-tx/core/Record'
import { Magma } from '@fp-tx/core/Magma'

const r1 = { a: 3, c: 3 }
const r2 = { a: 1, b: 2 }
const m: Magma<Record<string, number>> = getDifferenceMagma<number>()
assert.deepStrictEqual(m.concat(r1, r2), difference(r2)(r1))
assert.deepStrictEqual(m.concat(r1, r2), { c: 3, b: 2 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`

Given an `Eq` for the base type, it produces an `Eq` for a `Record` of that base type.




#### Signature

```typescript
export declare const getEq: <K extends string, A>(E: Eq<A>) => Eq<Record<K, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getEq } from '@fp-tx/core/Record'
import { string } from 'fp-ts'
import { Eq } from '@fp-tx/core/Eq'

const eq: Eq<Record<string, string>> = getEq(string.Eq)
assert.deepStrictEqual(eq.equals({ a: 'foo' }, { b: 'bar' }), false)
assert.deepStrictEqual(eq.equals({ a: 'foo' }, { a: 'foo' }), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getIntersectionSemigroup`

Given a `Semigroup` in the base type, it produces a `Semigroup` in the `Record` of the base type. The resulting `Semigroup` concatenates two `Record`s by `intersection`.




#### Signature

```typescript
export declare const getIntersectionSemigroup: <A>(S: Se.Semigroup<A>) => Se.Semigroup<Record<string, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getIntersectionSemigroup } from '@fp-tx/core/Record'
import { Semigroup } from '@fp-tx/core/Semigroup'

const sNumber: Semigroup<number> = { concat: (x, y) => x - y }
const sRecord: Semigroup<Record<string, number>> = getIntersectionSemigroup(sNumber)
assert.deepStrictEqual(sRecord.concat({ a: 1, b: 2 }, { b: 3, c: 4 }), { b: -1 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`

Returns a `Monoid` instance for `Record`s, given a `Semigroup` instance for the base type. The `Monoid` makes the union of two `Record`s comining the overlapping entries with the provided `Semigroup`.




#### Signature

```typescript
export declare const getMonoid: <K extends string, A>(S: Semigroup<A>) => Monoid<Record<K, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { SemigroupSum } from '@fp-tx/core/number'
import { getMonoid } from '@fp-tx/core/Record'

const M = getMonoid(SemigroupSum)
assert.deepStrictEqual(M.concat({ foo: 123, bar: 234 }, { foo: 456, baz: 567 }), {
  foo: 579,
  bar: 234,
  baz: 567,
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`

Produces a `Show` for a `Record`, given a `Show` for the base type (a `Show` produces a human-readable representation of an instance). `Record` entries are sorted by key with the provided `Ord`.




#### Signature

```typescript
export declare function getShow(O: Ord<string>): <A>(S: Show<A>) => Show<Record<string, A>>



export declare function getShow<A>(S: Show<A>): Show<Record<string, A>>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getShow } from '@fp-tx/core/Record'
import { Show } from '@fp-tx/core/Show'
import { Ord } from '@fp-tx/core/string'

const sNumber: Show<number> = { show: (n: number) => `${n}` }
const sRecord: Show<Record<string, number>> = getShow(Ord)(sNumber)
assert.deepStrictEqual(sRecord.show({ b: 2, a: 1 }), '{ "a": 1, "b": 2 }')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionMonoid`

Same as `getMonoid`. Returns a `Monoid` instance for `Record`s given a `Semigroup` instance for the base type. The `Monoid` makes the union of two `Record`s combining the entries that have the same key with the provided `Semigroup`.




#### Signature

```typescript
export declare const getUnionMonoid: <A>(S: Se.Semigroup<A>) => Monoid<Record<string, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { SemigroupSum } from '@fp-tx/core/number'
import { getUnionMonoid } from '@fp-tx/core/Record'

const M = getUnionMonoid(SemigroupSum)
assert.deepStrictEqual(M.concat({ foo: 123, bar: 234 }, { foo: 456, baz: 567 }), {
  foo: 579,
  bar: 234,
  baz: 567,
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionSemigroup`

Given a `Semigroup` in the base type, it produces a `Semigroup` in the `Record` of the base type. The resulting `Semigroup` concatenates two `Record`s by `union`.




#### Signature

```typescript
export declare const getUnionSemigroup: <A>(S: Se.Semigroup<A>) => Se.Semigroup<Record<string, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getUnionSemigroup } from '@fp-tx/core/Record'
import { Semigroup } from '@fp-tx/core/Semigroup'

const sNumber: Semigroup<number> = { concat: (x, y) => x - y }
const sRecord: Semigroup<Record<string, number>> = getUnionSemigroup(sNumber)
assert.deepStrictEqual(sRecord.concat({ a: 1, b: 2 }, { b: 3, c: 4 }), { a: 1, b: -1, c: 4 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEntries`

Converts an `Array` of `[key, value]` tuples into a `Record`.




#### Signature

```typescript
export declare const fromEntries: <A>(fa: [string, A][]) => Record<string, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { fromEntries } from '@fp-tx/core/Record'

assert.deepStrictEqual(
  fromEntries([
    ['a', 1],
    ['b', 2],
    ['a', 3],
  ]),
  { b: 2, a: 3 },
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toArray`

Get a sorted `Array` of the key/value pairs contained in a `Record`. Sorted alphabetically by key.




#### Signature

```typescript
export declare const toArray: <K extends string, A>(r: Record<K, A>) => Array<[K, A]>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { toArray } from '@fp-tx/core/Record'

const x = { c: 3, a: 'foo', b: false }
assert.deepStrictEqual(toArray(x), [
  ['a', 'foo'],
  ['b', false],
  ['c', 3],
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toEntries`

Alias of [`toArray`](#toArray).




#### Signature

```typescript
export declare const toEntries: <K extends string, A>(r: Record<K, A>) => [K, A][]
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { toEntries } from '@fp-tx/core/Record'

assert.deepStrictEqual(toEntries({ b: 2, a: 1 }), [
  ['a', 1],
  ['b', 2],
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `compact`

Compact a `Record` of `Option`s discarding the `None` values and keeping the `Some` values.




#### Signature

```typescript
export declare const compact: <A>(fa: Record<string, Option<A>>) => Record<string, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { compact } from '@fp-tx/core/Record'
import { option } from 'fp-ts'

assert.deepStrictEqual(compact({ a: option.some('foo'), b: option.none, c: option.some('bar') }), {
  a: 'foo',
  c: 'bar',
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filter`

Given a `Predicate`, it produces a new `Record` keeping only the entries with a value that satisfies the provided predicate.




#### Signature

```typescript
export declare const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Record<string, A>) => Record<string, B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: Record<string, B>) => Record<string, B>
  <A>(predicate: Predicate<A>): (fa: Record<string, A>) => Record<string, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { filter } from '@fp-tx/core/Record'

assert.deepStrictEqual(filter((s: string) => s.length < 4)({ a: 'foo', b: 'bar', c: 'verylong' }), {
  a: 'foo',
  b: 'bar',
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMap`

Maps a `Record` with an iterating function that returns an `Option` and it keeps only the `Some` values discarding the `None`s.




#### Signature

```typescript
export declare const filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: Record<string, A>) => Record<string, B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { filterMap } from '@fp-tx/core/Record'
import { option } from 'fp-ts'

const f = (s: string) => (s.length < 4 ? option.some(`${s} is short`) : option.none)
assert.deepStrictEqual(filterMap(f)({ a: 'foo', b: 'bar', c: 'verylong' }), {
  a: 'foo is short',
  b: 'bar is short',
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getWitherable`




#### Signature

```typescript
export declare const getWitherable: (O: Ord<string>) => Witherable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partition`

Partition a `Record` into two parts according to a `Predicate`.




#### Signature

```typescript
export declare const partition: {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): (fa: Record<string, A>) => Separated<Record<string, A>, Record<string, B>>
  <A>(predicate: Predicate<A>): <B extends A>(fb: Record<string, B>) => Separated<Record<string, B>, Record<string, B>>
  <A>(predicate: Predicate<A>): (fa: Record<string, A>) => Separated<Record<string, A>, Record<string, A>>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { partition } from '@fp-tx/core/Record'

assert.deepStrictEqual(partition((s: string) => s.length < 4)({ a: 'foo', b: 'bar', c: 'verylong' }), {
  left: {
    c: 'verylong',
  },
  right: {
    a: 'foo',
    b: 'bar',
  },
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMap`

Maps a `Record` with a function returning an `Either` and partitions the resulting `Record` into `Left`s and `Right`s.




#### Signature

```typescript
export declare const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: Record<string, A>) => Separated<Record<string, B>, Record<string, C>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { partitionMap } from '@fp-tx/core/Record'
import { either } from 'fp-ts'

const f = (s: string) => (s.length < 4 ? either.right(`${s} is short`) : either.left(`${s} is not short`))
assert.deepStrictEqual(partitionMap(f)({ a: 'foo', b: 'bar', c: 'verylong' }), {
  left: {
    c: 'verylong is not short',
  },
  right: {
    a: 'foo is short',
    b: 'bar is short',
  },
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`

Separate a `Record` of `Either`s into `Left`s and `Right`s.




#### Signature

```typescript
export declare const separate: <A, B>(
  fa: Record<string, Either<A, B>>,
) => Separated<Record<string, A>, Record<string, B>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { separate } from '@fp-tx/core/Record'
import { either } from 'fp-ts'

assert.deepStrictEqual(separate({ a: either.right('foo'), b: either.left('bar'), c: either.right('baz') }), {
  right: {
    a: 'foo',
    c: 'baz',
  },
  left: {
    b: 'bar',
  },
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

Map and fold a `Record`. Map the `Record` passing each value to the iterating function. Then fold the results using the provided `Monoid`.




#### Signature

```typescript
export declare function foldMap(
  O: Ord<string>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Record<string, A>) => M



export declare function foldMap<M>(M: Monoid<M>): <A>(f: (a: A) => M) => (fa: Record<string, A>) => M

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { foldMap } from '@fp-tx/core/Record'
import { Ord } from '@fp-tx/core/string'
import { Monoid } from '@fp-tx/core/Monoid'

const m: Monoid<string> = { empty: '', concat: (x: string, y: string) => (x ? `${x} -> ${y}` : `${y}`) }
const f = (a: number) => `-${a}-`
const x = { c: 3, a: 1, b: 2 }
assert.deepStrictEqual(foldMap(Ord)(m)(f)(x), '-1- -> -2- -> -3-')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getFoldable`

Produces a `Foldable` instance for a `Record`, using the provided `Ord` to sort the `Record`'s entries by key.




#### Signature

```typescript
export declare const getFoldable: (O: Ord<string>) => Foldable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getFoldableWithIndex`

Produces a `FoldableWithIndex1` instance for a `Record`, using the provided `Ord` to sort the `Record`'s entries by key.




#### Signature

```typescript
export declare const getFoldableWithIndex: (O: Ord<string>) => FoldableWithIndex1<URI, string>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`

Reduces a `Record` passing each value to the iterating function. Entries are processed in order, sorted by key according to the given `Ord`.




#### Signature

```typescript
export declare function reduce(O: Ord<string>): <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Record<string, A>) => B



export declare function reduce<A, B>(b: B, f: (b: B, a: A) => B): (fa: Record<string, A>) => B

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduce } from '@fp-tx/core/Record'
import { Ord } from '@fp-tx/core/string'

const x = { c: 3, a: 'foo', b: false }
assert.deepStrictEqual(reduce(Ord)([] as string[], (b, a) => [...b, `-${a}-`])(x), ['-foo-', '-false-', '-3-'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`

Same as `reduce` but entries are processed _from the right_, i.e. in reverse order, from the last to the first entry, according to the given `Ord`.




#### Signature

```typescript
export declare function reduceRight(O: Ord<string>): <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Record<string, A>) => B



export declare function reduceRight<A, B>(b: B, f: (a: A, b: B) => B): (fa: Record<string, A>) => B

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduceRight } from '@fp-tx/core/Record'
import { Ord } from '@fp-tx/core/string'

const x = { c: 3, a: 'foo', b: false }
assert.deepStrictEqual(reduceRight(Ord)([] as string[], (a, b) => [...b, `-${a}-`])(x), [
  '-3-',
  '-false-',
  '-foo-',
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`

Takes a value and a `Record` of functions and returns a `Record` by applying each function to the input value.




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: Record<string, (a: A) => B>) => Record<string, B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { flap } from '@fp-tx/core/Record'

const fab = { x: (n: number) => `${n} times 2`, y: (n: number) => `${n * 2}` }
assert.deepStrictEqual(flap(3)(fab), {
  x: '3 times 2',
  y: '6',
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

Map a `Record` passing the values to the iterating function.




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => <K extends string>(fa: Record<K, A>) => Record<K, B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { map } from '@fp-tx/core/Record'

const f = (n: number) => `-${n}-`
assert.deepStrictEqual(map(f)({ a: 3, b: 5 }), { a: '-3-', b: '-5-' })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `getTraversable`

Produces a `Traversable` instance for a `Record`, using the provided `Ord` to sort the `Record`'s entries by key.




#### Signature

```typescript
export declare const getTraversable: (O: Ord<string>) => Traversable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getTraversableWithIndex`

Produces a `TraversableWithIndex` instance for a `Record`, using the provided `Ord` to sort the `Record`'s entries by key.




#### Signature

```typescript
export declare const getTraversableWithIndex: (O: Ord<string>) => TraversableWithIndex1<URI, string>
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
export declare const URI = 'Record'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`Foldable`~~

Use `getFoldable` instead.




#### Signature

```typescript
export declare const Foldable: Foldable1<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableWithIndex`~~

Use `getFoldableWithIndex` instead.




#### Signature

```typescript
export declare const FoldableWithIndex: FoldableWithIndex1<URI, string>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`Traversable`~~

Use `getTraversable` instead.




#### Signature

```typescript
export declare const Traversable: Traversable1<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`TraversableWithIndex`~~

Use the `getTraversableWithIndex` instead.




#### Signature

```typescript
export declare const TraversableWithIndex: TraversableWithIndex1<URI, string>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`Witherable`~~

Use `getWitherable` instead.




#### Signature

```typescript
export declare const Witherable: Witherable1<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `collect`

Map a `Record` into an `Array`. It passes each key/value pair to the iterating function and collects the results in an array, sorted alphabetically by the original key.




#### Signature

```typescript
export declare function collect(
  O: Ord<string>,
): <K extends string, A, B>(f: (k: K, a: A) => B) => (r: Record<K, A>) => Array<B>



export declare function collect<K extends string, A, B>(f: (k: K, a: A) => B): (r: Record<K, A>) => Array<B>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { collect } from '@fp-tx/core/Record'
import { Ord } from '@fp-tx/core/string'

const f = <A>(k: string, a: A) => `${k.toUpperCase()}-${a}`
const x = { c: 3, a: 'foo', b: false }
assert.deepStrictEqual(collect(Ord)(f)(x), ['A-foo', 'B-false', 'C-3'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `deleteAt`

Delete a key and value from a `Record`.




#### Signature

```typescript
export declare function deleteAt<K extends string>(
  k: K,
): <KS extends string, A>(r: Record<KS, A>) => Record<string extends K ? string : Exclude<KS, K>, A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { deleteAt } from '@fp-tx/core/Record'

assert.deepStrictEqual(deleteAt('a')({ a: 1, b: 2 }), { b: 2 })
assert.deepStrictEqual(deleteAt('c')({ a: 1, b: 2 }), { a: 1, b: 2 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `difference`

Difference between two `Record`s. Takes two `Record`s and produces a `Record` composed by the entries of the two inputs, removing the entries with the same key in both inputs.




#### Signature

```typescript
export declare const difference: <A>(second: Record<string, A>) => (first: Record<string, A>) => Record<string, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { difference } from '@fp-tx/core/Record'

assert.deepStrictEqual(difference({ a: 1 })({ a: 1, b: 2 }), { b: 2 })
assert.deepStrictEqual(difference({ a: 3 })({ a: 1, b: 2 }), { b: 2 })
assert.deepStrictEqual(difference({ a: 3, c: 3 })({ a: 1, b: 2 }), { b: 2, c: 3 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`

Given an `Eq` checks if a `Record` contains an entry with value equal to a provided value.




#### Signature

```typescript
export declare const elem: <A>(E: Eq<A>) => {
  (a: A): (fa: Record<string, A>) => boolean
  (a: A, fa: Record<string, A>): boolean
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { elem } from '@fp-tx/core/Record'
import { number } from 'fp-ts'

assert.deepStrictEqual(elem(number.Eq)(123, { foo: 123, bar: 234 }), true)
assert.deepStrictEqual(elem(number.Eq)(-7, { foo: 123, bar: 234 }), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`empty`~~

Use a new `{}` instead.




#### Signature

```typescript
export declare const empty: Record<string, never>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `every`

Test if every value in a `Record` satisfies the predicate.




#### Signature

```typescript
export declare const every: {
  <A, B extends A>(refinement: Refinement<A, B>): Refinement<Record<string, A>, Record<string, B>>
  <A>(predicate: Predicate<A>): Predicate<Record<string, A>>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { every } from '@fp-tx/core/Record'

assert.deepStrictEqual(every((n: number) => n >= 0)({ a: 1, b: 2 }), true)
assert.deepStrictEqual(every((n: number) => n >= 0)({ a: 1, b: -1 }), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMapWithIndex`

Maps a `Record` with an iterating function that takes key and value and returns an `Option`, keeping only the `Some` values and discarding `None`s.




#### Signature

```typescript
export declare const filterMapWithIndex: <K extends string, A, B>(
  f: (key: K, a: A) => Option<B>,
) => (fa: Record<K, A>) => Record<string, B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { filterMapWithIndex } from '@fp-tx/core/Record'
import { option } from 'fp-ts'

const f = (key: string, a: number) => (a >= 0 ? option.some(`${key}${a}`) : option.none)
assert.deepStrictEqual(filterMapWithIndex(f)({ a: -1, b: 2, c: 3 }), {
  b: 'b2',
  c: 'c3',
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterWithIndex`

Produce a new `Record` keeping only the entries that satisfy a predicate taking key and value as input.




#### Signature

```typescript
export declare function filterWithIndex<K extends string, A, B extends A>(
  refinementWithIndex: RefinementWithIndex<K, A, B>,
): (fa: Record<K, A>) => Record<string, B>



export declare function filterWithIndex<K extends string, A>(
  predicateWithIndex: PredicateWithIndex<K, A>,
): <B extends A>(fb: Record<K, B>) => Record<string, B>



export declare function filterWithIndex<K extends string, A>(
  predicateWithIndex: PredicateWithIndex<K, A>,
): (fa: Record<K, A>) => Record<string, A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { filterWithIndex } from '@fp-tx/core/Record'

assert.deepStrictEqual(
  filterWithIndex((s: string, v: number) => s.length <= 1 && v > 0)({ a: 1, b: -2, ccc: 3 }),
  {
    a: 1,
  },
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMapWithIndex`

Map and fold a `Record`. Map the `Record` passing each key/value pair to the iterating function. Then fold the results using the provided `Monoid`.




#### Signature

```typescript
export declare function foldMapWithIndex(
  O: Ord<string>,
): <M>(M: Monoid<M>) => <K extends string, A>(f: (k: K, a: A) => M) => (fa: Record<K, A>) => M



export declare function foldMapWithIndex<M>(
  M: Monoid<M>,
): <K extends string, A>(f: (k: K, a: A) => M) => (fa: Record<K, A>) => M

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { foldMapWithIndex } from '@fp-tx/core/Record'
import { Ord } from '@fp-tx/core/string'
import { Monoid } from '@fp-tx/core/Monoid'

const m: Monoid<string> = { empty: '', concat: (x: string, y: string) => (x ? `${x} -> ${y}` : `${y}`) }
const f = (k: string, a: number) => `${k}-${a}`
const x = { c: 3, a: 1, b: 2 }
assert.deepStrictEqual(foldMapWithIndex(Ord)(m)(f)(x), 'a-1 -> b-2 -> c-3')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromFoldable`

Create a `Record` from a foldable collection of key/value pairs, using the specified `Magma` to combine values for duplicate keys.




#### Signature

```typescript
export declare function fromFoldable<F extends URIS3, A>(
  M: Magma<A>,
  F: Foldable3<F>,
): <R, E>(fka: Kind3<F, R, E, [string, A]>) => Record<string, A>



export declare function fromFoldable<F extends URIS2, A>(
  M: Magma<A>,
  F: Foldable2<F>,
): <E>(fka: Kind2<F, E, [string, A]>) => Record<string, A>



export declare function fromFoldable<F extends URIS, A>(
  M: Magma<A>,
  F: Foldable1<F>,
): (fka: Kind<F, [string, A]>) => Record<string, A>



export declare function fromFoldable<F, A>(
  M: Magma<A>,
  F: FoldableHKT<F>,
): (fka: HKT<F, [string, A]>) => Record<string, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromFoldableMap`

Create a `Record` from a foldable collection using the specified functions to


- Map to key/value pairs - Combine values for duplicate keys.




#### Signature

```typescript
export declare function fromFoldableMap<F extends URIS3, B>(
  M: Magma<B>,
  F: Foldable3<F>,
): <R, E, A>(fa: Kind3<F, R, E, A>, f: (a: A) => [string, B]) => Record<string, B>



export declare function fromFoldableMap<F extends URIS2, B>(
  M: Magma<B>,
  F: Foldable2<F>,
): <E, A>(fa: Kind2<F, E, A>, f: (a: A) => [string, B]) => Record<string, B>



export declare function fromFoldableMap<F extends URIS, B>(
  M: Magma<B>,
  F: Foldable1<F>,
): <A>(fa: Kind<F, A>, f: (a: A) => [string, B]) => Record<string, B>



export declare function fromFoldableMap<F, B>(
  M: Magma<B>,
  F: FoldableHKT<F>,
): <A>(fa: HKT<F, A>, f: (a: A) => [string, B]) => Record<string, B>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { last } from '@fp-tx/core/Semigroup'
import { Foldable, zip } from '@fp-tx/core/Array'
import { identity } from '@fp-tx/core/function'
import { fromFoldableMap } from '@fp-tx/core/Record'

export const zipObject = <K extends string, A>(keys: Array<K>, values: Array<A>): Record<K, A> =>
  fromFoldableMap(last<A>(), Foldable)(zip(keys, values), identity)

assert.deepStrictEqual(zipObject(['a', 'b'], [1, 2, 3]), { a: 1, b: 2 })

interface User {
  readonly id: string
  readonly name: string
}

const users: Array<User> = [
  { id: 'id1', name: 'name1' },
  { id: 'id2', name: 'name2' },
  { id: 'id1', name: 'name3' },
]

assert.deepStrictEqual(
  fromFoldableMap(last<User>(), Foldable)(users, user => [user.id, user]),
  {
    id1: { id: 'id1', name: 'name3' },
    id2: { id: 'id2', name: 'name2' },
  },
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `has`

Test whether or not a key exists in a `Record`.


Note. This function is not pipeable because is a `Refinement`.




#### Signature

```typescript
export declare const has: <K extends string>(k: string, r: Record<K, unknown>) => k is K
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { has } from '@fp-tx/core/Record'

assert.deepStrictEqual(has('a', { a: 1, b: 2 }), true)
assert.deepStrictEqual(has('c', { a: 1, b: 2 }), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`hasOwnProperty`~~

Use [`has`](#has) instead.




#### Signature

```typescript
export declare const hasOwnProperty: <K extends string>(k: string, r: Record<K, unknown>) => k is K
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`insertAt`~~

Use [`upsertAt`](#upsertat) instead.




#### Signature

```typescript
export declare const insertAt: <A>(k: string, a: A) => (r: Record<string, A>) => Record<string, A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersection`

Intersection of two `Record`s. Takes two `Record`s and produces a `Record` combining only the entries of the two inputswith the same key. It uses the `concat` function of the provided `Magma` to combine the elements.




#### Signature

```typescript
export declare const intersection: <A>(
  M: Magma<A>,
) => (second: Record<string, A>) => (first: Record<string, A>) => Record<string, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { intersection } from '@fp-tx/core/Record'
import { Magma } from '@fp-tx/core/Magma'

const m1: Magma<number> = { concat: (x: number, y: number) => x + y }
assert.deepStrictEqual(intersection(m1)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 4 })
const m2: Magma<number> = { concat: (x: number) => x }
assert.deepStrictEqual(intersection(m2)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 1 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isEmpty`

Test whether a `Record` is empty.




#### Signature

```typescript
export declare const isEmpty: <A>(r: Record<string, A>) => boolean
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { isEmpty } from '@fp-tx/core/Record'

assert.deepStrictEqual(isEmpty({}), true)
assert.deepStrictEqual(isEmpty({ a: 3 }), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isSubrecord`

Test whether one `Record` contains all of the keys and values contained in another `Record`.




#### Signature

```typescript
export declare const isSubrecord: <A>(E: Eq<A>) => {
  (that: Record<string, A>): (me: Record<string, A>) => boolean
  (me: Record<string, A>, that: Record<string, A>): boolean
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { isSubrecord } from '@fp-tx/core/Record'
import { string } from 'fp-ts'

assert.deepStrictEqual(
  isSubrecord(string.Eq)({ a: 'foo', b: 'bar', c: 'baz' })({ a: 'foo', b: 'bar', c: 'baz' }),
  true,
)
assert.deepStrictEqual(isSubrecord(string.Eq)({ a: 'foo', b: 'bar', c: 'baz' })({ a: 'foo', c: 'baz' }), true)
assert.deepStrictEqual(
  isSubrecord(string.Eq)({ a: 'foo', b: 'bar', c: 'baz' })({ a: 'foo', b: 'not-bar', c: 'baz' }),
  false,
)
assert.deepStrictEqual(isSubrecord(string.Eq)({ a: 'foo', b: 'bar' })({ a: 'foo', b: 'bar', c: 'baz' }), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `keys`

The keys of a `Record`, sorted alphabetically.




#### Signature

```typescript
export declare const keys: <K extends string>(r: Record<K, unknown>) => Array<K>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { keys } from '@fp-tx/core/Record'

assert.deepStrictEqual(keys({ c: 1, a: 2, b: 3 }), ['a', 'b', 'c'])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `lookup`

Lookup the value for a key in a `Record`.




#### Signature

```typescript
export declare const lookup: {
  (k: string): <A>(r: Record<string, A>) => Option<A>
  <A>(k: string, r: Record<string, A>): Option<A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapWithIndex`

Map a `Record` passing the key/value pairs to the iterating function.




#### Signature

```typescript
export declare const mapWithIndex: <K extends string, A, B>(f: (k: K, a: A) => B) => (fa: Record<K, A>) => Record<K, B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { mapWithIndex } from '@fp-tx/core/Record'

const f = (k: string, n: number) => `${k.toUpperCase()}-${n}`
assert.deepStrictEqual(mapWithIndex(f)({ a: 3, b: 5 }), { a: 'A-3', b: 'B-5' })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyAt`

Applies a mapping function to one spcific key/value pair in a `Record`.




#### Signature

```typescript
export declare const modifyAt: <A>(
  k: string,
  f: (a: A) => A,
) => <K extends string>(r: Record<K, A>) => Option<Record<K, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
otherwise it returns `None`


```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMapWithIndex`

Maps a `Record` with a function returning an `Either` and partitions the resulting `Record` into `Left`s and `Right`s.




#### Signature

```typescript
export declare const partitionMapWithIndex: <K extends string, A, B, C>(
  f: (key: K, a: A) => Either<B, C>,
) => (fa: Record<K, A>) => Separated<Record<string, B>, Record<string, C>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { partitionMapWithIndex } from '@fp-tx/core/Record'
import { either } from 'fp-ts'

const f = (key: string, a: number) =>
  a >= 0 ? either.right(`${key} is >= 0 (${a})`) : either.left(`${key} is < 0 (${a})`)
assert.deepStrictEqual(partitionMapWithIndex(f)({ a: -1, b: 2, c: 123 }), {
  left: {
    a: 'a is < 0 (-1)',
  },
  right: {
    b: 'b is >= 0 (2)',
    c: 'c is >= 0 (123)',
  },
})

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionWithIndex`

Partition a `Record` into two parts according to a predicate that takes a key and a value.




#### Signature

```typescript
export declare function partitionWithIndex<K extends string, A, B extends A>(
  refinementWithIndex: RefinementWithIndex<K, A, B>,
): (fa: Record<K, A>) => Separated<Record<string, A>, Record<string, B>>



export declare function partitionWithIndex<K extends string, A>(
  predicateWithIndex: PredicateWithIndex<K, A>,
): <B extends A>(fb: Record<K, B>) => Separated<Record<string, B>, Record<string, B>>



export declare function partitionWithIndex<K extends string, A>(
  predicateWithIndex: PredicateWithIndex<K, A>,
): (fa: Record<K, A>) => Separated<Record<string, A>, Record<string, A>>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { partitionWithIndex } from '@fp-tx/core/Record'

assert.deepStrictEqual(
  partitionWithIndex((key: string, a: number) => key.length <= 1 && a > 0)({ a: -1, b: 2, ccc: 7 }),
  {
    left: {
      a: -1,
      ccc: 7,
    },
    right: {
      b: 2,
    },
  },
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `pop`

Delete a key and value from a `Record`, returning the value as well as the subsequent `Record`.




#### Signature

```typescript
export declare function pop<K extends string>(
  k: K,
): <KS extends string, A>(r: Record<KS, A>) => Option<[A, Record<string extends K ? string : Exclude<KS, K>, A>]>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
otherwise it returns `None`


```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`record`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `R.Functor` instead of `R.record` (where `R` is from `import R from 'fp-ts/Record'`)




#### Signature

```typescript
export declare const record: FunctorWithIndex1<URI, string> &
  FoldableWithIndex1<URI, string> &
  FilterableWithIndex1<URI, string> &
  TraversableWithIndex1<URI, string> &
  Witherable1<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRightWithIndex`

Same as `reduceWithIndex`, but reduce starting from the right (i.e. in reverse order, from the last to the first entry according to the given `Ord`).




#### Signature

```typescript
export declare function reduceRightWithIndex(
  O: Ord<string>,
): <K extends string, A, B>(b: B, f: (k: K, a: A, b: B) => B) => (fa: Record<K, A>) => B



export declare function reduceRightWithIndex<K extends string, A, B>(
  b: B,
  f: (k: K, a: A, b: B) => B,
): (fa: Record<K, A>) => B

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduceRightWithIndex } from '@fp-tx/core/Record'
import { Ord } from '@fp-tx/core/string'

const x = { c: 3, a: 'foo', b: false }
assert.deepStrictEqual(reduceRightWithIndex(Ord)([] as string[], (k, a, b) => [...b, `${k}-${a}`])(x), [
  'c-3',
  'b-false',
  'a-foo',
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceWithIndex`

Reduces a `Record` passing each key/value pair to the iterating function. Entries are processed in the order, sorted by key according to the given `Ord`.




#### Signature

```typescript
export declare function reduceWithIndex(
  O: Ord<string>,
): <K extends string, A, B>(b: B, f: (k: K, b: B, a: A) => B) => (fa: Record<K, A>) => B



export declare function reduceWithIndex<K extends string, A, B>(
  b: B,
  f: (k: K, b: B, a: A) => B,
): (fa: Record<K, A>) => B

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduceWithIndex } from '@fp-tx/core/Record'
import { Ord } from '@fp-tx/core/string'

const x = { c: 3, a: 'foo', b: false }
assert.deepStrictEqual(reduceWithIndex(Ord)([] as string[], (k, b, a) => [...b, `${k}-${a}`])(x), [
  'a-foo',
  'b-false',
  'c-3',
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sequence`

`Record` sequencing, i.e., take a `Record` in which elements are monads and return a monad of a `Record` of the base types. The following example for instance shows sequencing a `Record<string, Option<number>>` into an `Option<Record<string, number>>`.


`sequence` in `Record` is equivalent to `sequenceS` in `Apply.ts`.




#### Signature

```typescript
export declare function sequence<F extends URIS3>(
  F: Applicative3<F>,
): <K extends string, R, E, A>(ta: Record<K, Kind3<F, R, E, A>>) => Kind3<F, R, E, Record<K, A>>



export declare function sequence<F extends URIS3, E>(
  F: Applicative3C<F, E>,
): <K extends string, R, A>(ta: Record<K, Kind3<F, R, E, A>>) => Kind3<F, R, E, Record<K, A>>



export declare function sequence<F extends URIS2>(
  F: Applicative2<F>,
): <K extends string, E, A>(ta: Record<K, Kind2<F, E, A>>) => Kind2<F, E, Record<K, A>>



export declare function sequence<F extends URIS2, E>(
  F: Applicative2C<F, E>,
): <K extends string, A>(ta: Record<K, Kind2<F, E, A>>) => Kind2<F, E, Record<K, A>>



export declare function sequence<F extends URIS>(
  F: Applicative1<F>,
): <K extends string, A>(ta: Record<K, Kind<F, A>>) => Kind<F, Record<K, A>>



export declare function sequence<F>(
  F: Applicative<F>,
): <K extends string, A>(ta: Record<K, HKT<F, A>>) => HKT<F, Record<K, A>>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { sequence } from '@fp-tx/core/Record'
import { option } from 'fp-ts'
import { sequenceS } from '@fp-tx/core/Apply'

assert.deepStrictEqual(
  sequence(option.Applicative)({ a: option.some(1), b: option.some(2) }),
  option.some({ a: 1, b: 2 }),
)
assert.deepStrictEqual(sequence(option.Applicative)({ a: option.some(1), b: option.none }), option.none)
assert.deepStrictEqual(
  sequence(option.Applicative)({ a: option.some(1), b: option.some(2) }),
  sequenceS(option.Applicative)({ a: option.some(1), b: option.some(2) }),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `singleton`

Create a `Record` with one key/value pair.




#### Signature

```typescript
export declare const singleton: <A>(k: string, a: A) => Record<string, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { singleton } from '@fp-tx/core/Record'

assert.deepStrictEqual(singleton('a', 1), { a: 1 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `size`

Calculate the number of key/value pairs in a `Record`.




#### Signature

```typescript
export declare const size: <A>(r: Record<string, A>) => number
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { size } from '@fp-tx/core/Record'

assert.deepStrictEqual(size({ a: true, b: 2, c: 'three' }), 3)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `some`

Test if at least one value in a `Record` satisfies the predicate.




#### Signature

```typescript
export declare const some: <A>(predicate: (a: A) => boolean) => (r: Record<string, A>) => boolean
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { some } from '@fp-tx/core/Record'

assert.deepStrictEqual(some((n: number) => n >= 0)({ a: 1, b: -2 }), true)
assert.deepStrictEqual(some((n: number) => n >= 0)({ a: -1, b: -2 }), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUnfoldable`

Unfolds a `Record` into a list of key/value pairs.


Given an `Unfoldable` class type `U` such as `array` or `readonlyArray`, it uses the `unfold` function to create an instance of `U`, providing an iterating function that iterates over each key/value pair in the record sorted alphabetically by key.




#### Signature

```typescript
export declare function toUnfoldable<F extends URIS>(
  U: Unfoldable1<F>,
): <K extends string, A>(r: Record<K, A>) => Kind<F, [K, A]>



export declare function toUnfoldable<F>(U: Unfoldable<F>): <K extends string, A>(r: Record<K, A>) => HKT<F, [K, A]>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { array, readonlyArray } from 'fp-ts'
import { toUnfoldable } from '@fp-tx/core/Record'

assert.deepStrictEqual(toUnfoldable(array)({ b: 2, a: 1 }), [
  ['a', 1],
  ['b', 2],
])
assert.deepStrictEqual(toUnfoldable(readonlyArray)({ b: 2, a: 1 }), [
  ['a', 1],
  ['b', 2],
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse`




#### Signature

```typescript
export declare function traverse<F extends URIS4>(
  F: Applicative4<F>,
): <S, R, E, A, B>(
  f: (a: A) => Kind4<F, S, R, E, B>,
) => <K extends string>(ta: Record<K, A>) => Kind4<F, S, R, E, Record<K, B>>



export declare function traverse<F extends URIS3>(
  F: Applicative3<F>,
): <R, E, A, B>(f: (a: A) => Kind3<F, R, E, B>) => <K extends string>(ta: Record<K, A>) => Kind3<F, R, E, Record<K, B>>



export declare function traverse<F extends URIS3, E>(
  F: Applicative3C<F, E>,
): <R, A, B>(f: (a: A) => Kind3<F, R, E, B>) => <K extends string>(ta: Record<K, A>) => Kind3<F, R, E, Record<K, B>>



export declare function traverse<F extends URIS2>(
  F: Applicative2<F>,
): <E, A, B>(f: (a: A) => Kind2<F, E, B>) => <K extends string>(ta: Record<K, A>) => Kind2<F, E, Record<K, B>>



export declare function traverse<F extends URIS2, E>(
  F: Applicative2C<F, E>,
): <A, B>(f: (a: A) => Kind2<F, E, B>) => <K extends string>(ta: Record<K, A>) => Kind2<F, E, Record<K, B>>



export declare function traverse<F extends URIS>(
  F: Applicative1<F>,
): <A, B>(f: (a: A) => Kind<F, B>) => <K extends string>(ta: Record<K, A>) => Kind<F, Record<K, B>>



export declare function traverse<F>(
  F: Applicative<F>,
): <A, B>(f: (a: A) => HKT<F, B>) => <K extends string>(ta: Record<K, A>) => HKT<F, Record<K, B>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseWithIndex`




#### Signature

```typescript
export declare function traverseWithIndex<F extends URIS4>(
  F: Applicative4<F>,
): <K extends string, S, R, E, A, B>(
  f: (k: K, a: A) => Kind4<F, S, R, E, B>,
) => (ta: Record<K, A>) => Kind4<F, S, R, E, Record<K, B>>



export declare function traverseWithIndex<F extends URIS3>(
  F: Applicative3<F>,
): <K extends string, R, E, A, B>(
  f: (k: K, a: A) => Kind3<F, R, E, B>,
) => (ta: Record<K, A>) => Kind3<F, R, E, Record<K, B>>



export declare function traverseWithIndex<F extends URIS3, E>(
  F: Applicative3C<F, E>,
): <K extends string, R, A, B>(
  f: (k: K, a: A) => Kind3<F, R, E, B>,
) => (ta: Record<K, A>) => Kind3<F, R, E, Record<K, B>>



export declare function traverseWithIndex<F extends URIS2>(
  F: Applicative2<F>,
): <K extends string, E, A, B>(f: (k: K, a: A) => Kind2<F, E, B>) => (ta: Record<K, A>) => Kind2<F, E, Record<K, B>>



export declare function traverseWithIndex<F extends URIS2, E>(
  F: Applicative2C<F, E>,
): <K extends string, A, B>(f: (k: K, a: A) => Kind2<F, E, B>) => (ta: Record<K, A>) => Kind2<F, E, Record<K, B>>



export declare function traverseWithIndex<F extends URIS>(
  F: Applicative1<F>,
): <K extends string, A, B>(f: (k: K, a: A) => Kind<F, B>) => (ta: Record<K, A>) => Kind<F, Record<K, B>>



export declare function traverseWithIndex<F>(
  F: Applicative<F>,
): <K extends string, A, B>(f: (k: K, a: A) => HKT<F, B>) => (ta: Record<K, A>) => HKT<F, Record<K, B>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `union`

Union of two `Record`s. Takes two `Record`s and produces a `Record` combining all the entries of the two inputs. It uses the `concat` function of the provided `Magma` to combine the elements with the same key.




#### Signature

```typescript
export declare const union: <A>(
  M: Magma<A>,
) => (second: Record<string, A>) => (first: Record<string, A>) => Record<string, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { union } from '@fp-tx/core/Record'
import { Magma } from '@fp-tx/core/Magma'

const m1: Magma<number> = { concat: (x: number, y: number) => x + y }
assert.deepStrictEqual(union(m1)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 4, b: 2, c: 3 })
const m2: Magma<number> = { concat: (x: number) => x }
assert.deepStrictEqual(union(m2)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 1, b: 2, c: 3 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateAt`

Replace a key/value pair in a `Record`.




#### Signature

```typescript
export declare const updateAt: <A>(k: string, a: A) => <K extends string>(r: Record<K, A>) => Option<Record<K, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
otherwise it returns `None`


```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `upsertAt`

Insert or replace a key/value pair in a `Record`.




#### Signature

```typescript
export declare const upsertAt: <A>(k: string, a: A) => (r: Record<string, A>) => Record<string, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { upsertAt } from '@fp-tx/core/Record'

assert.deepStrictEqual(upsertAt('a', 5)({ a: 1, b: 2 }), { a: 5, b: 2 })
assert.deepStrictEqual(upsertAt('c', 5)({ a: 1, b: 2 }), { a: 1, b: 2, c: 5 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti