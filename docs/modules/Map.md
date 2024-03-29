
# Map







### Instances

* [Compactable](#compactable)
* [Filterable](#filterable)
* [Functor](#functor)
* [getDifferenceMagma](#getdifferencemagma)
* [getEq](#geteq)
* [getIntersectionSemigroup](#getintersectionsemigroup)
* [getMonoid](#getmonoid)
* [getShow](#getshow)
* [getUnionMonoid](#getunionmonoid)
* [getUnionSemigroup](#getunionsemigroup)

### Constructors

* [fromFoldable](#fromfoldable)

### Filtering

* [compact](#compact)
* [filter](#filter)
* [filterMap](#filtermap)
* [getFilterableWithIndex](#getfilterablewithindex)
* [getWitherable](#getwitherable)
* [partition](#partition)
* [partitionMap](#partitionmap)
* [separate](#separate)

### Folding

* [foldMap](#foldmap)
* [foldMapWithIndex](#foldmapwithindex)
* [getFoldable](#getfoldable)
* [getFoldableWithIndex](#getfoldablewithindex)
* [reduce](#reduce)
* [reduceRight](#reduceright)
* [reduceRightWithIndex](#reducerightwithindex)
* [reduceWithIndex](#reducewithindex)

### Mapping

* [flap](#flap)
* [map](#map)
* [mapWithIndex](#mapwithindex)

### Traversing

* [getTraversableWithIndex](#gettraversablewithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [collect](#collect)
* [deleteAt](#deleteat)
* [difference](#difference)
* [elem](#elem)
* ~~[empty](#empty)~~ (deprecated)
* [filterMapWithIndex](#filtermapwithindex)
* [filterWithIndex](#filterwithindex)
* ~~[insertAt](#insertat)~~ (deprecated)
* [intersection](#intersection)
* [isEmpty](#isempty)
* [isSubmap](#issubmap)
* [keys](#keys)
* [lookup](#lookup)
* [lookupWithKey](#lookupwithkey)
* ~~[map_](#map)~~ (deprecated)
* [member](#member)
* [modifyAt](#modifyat)
* [partitionMapWithIndex](#partitionmapwithindex)
* [partitionWithIndex](#partitionwithindex)
* [pop](#pop)
* [singleton](#singleton)
* [size](#size)
* [toArray](#toarray)
* [toUnfoldable](#tounfoldable)
* [union](#union)
* [updateAt](#updateat)
* [upsertAt](#upsertat)
* [values](#values)

## Instances


### `Compactable`




#### Signature

```typescript
export declare const Compactable: Compactable2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable`




#### Signature

```typescript
export declare const Filterable: Filterable2<URI>
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


### `getDifferenceMagma`




#### Signature

```typescript
export declare const getDifferenceMagma: <K>(E: Eq<K>) => <A>() => Magma<Map<K, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare const getEq: <K, A>(SK: Eq<K>, SA: Eq<A>) => Eq<Map<K, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getIntersectionSemigroup`




#### Signature

```typescript
export declare const getIntersectionSemigroup: <K, A>(E: Eq<K>, S: Semigroup<A>) => Semigroup<Map<K, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`

Gets `Monoid` instance for Maps given `Semigroup` instance for their values




#### Signature

```typescript
export declare function getMonoid<K, A>(SK: Eq<K>, SA: Semigroup<A>): Monoid<Map<K, A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare const getShow: <K, A>(SK: Show<K>, SA: Show<A>) => Show<Map<K, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionMonoid`




#### Signature

```typescript
export declare const getUnionMonoid: <K, A>(E: Eq<K>, S: Semigroup<A>) => Monoid<Map<K, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionSemigroup`




#### Signature

```typescript
export declare const getUnionSemigroup: <K, A>(E: Eq<K>, S: Semigroup<A>) => Semigroup<Map<K, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `fromFoldable`

Create a map from a foldable collection of key/value pairs, using the specified `Magma` to combine values for duplicate keys.




#### Signature

```typescript
export declare function fromFoldable<F extends URIS3, K, A>(
  E: Eq<K>,
  M: Magma<A>,
  F: Foldable3<F>,
): <R, E>(fka: Kind3<F, R, E, [K, A]>) => Map<K, A>



export declare function fromFoldable<F extends URIS2, K, A>(
  E: Eq<K>,
  M: Magma<A>,
  F: Foldable2<F>,
): <E>(fka: Kind2<F, E, [K, A]>) => Map<K, A>



export declare function fromFoldable<F extends URIS, K, A>(
  E: Eq<K>,
  M: Magma<A>,
  F: Foldable1<F>,
): (fka: Kind<F, [K, A]>) => Map<K, A>



export declare function fromFoldable<F, K, A>(E: Eq<K>, M: Magma<A>, F: Foldable<F>): (fka: HKT<F, [K, A]>) => Map<K, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `compact`




#### Signature

```typescript
export declare const compact: <K, A>(fa: Map<K, O.Option<A>>) => Map<K, A>
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
  <A, B extends A>(refinement: Refinement<A, B>): <K>(fa: Map<K, A>) => Map<K, B>
  <A>(predicate: Predicate<A>): <K, B extends A>(fb: Map<K, B>) => Map<K, B>
  <A>(predicate: Predicate<A>): <K>(fa: Map<K, A>) => Map<K, A>
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
export declare const filterMap: <A, B>(f: (a: A) => Option<B>) => <K>(fa: Map<K, A>) => Map<K, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getFilterableWithIndex`




#### Signature

```typescript
export declare function getFilterableWithIndex<K = never>(): FilterableWithIndex2C<URI, K, K>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getWitherable`




#### Signature

```typescript
export declare function getWitherable<K>(O: Ord<K>): Witherable2C<URI, K> & TraversableWithIndex2C<URI, K, K>

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
  <A, B extends A>(refinement: Refinement<A, B>): <K>(fa: Map<K, A>) => Separated<Map<K, A>, Map<K, B>>
  <A>(predicate: Predicate<A>): <K, B extends A>(fb: Map<K, B>) => Separated<Map<K, B>, Map<K, B>>
  <A>(predicate: Predicate<A>): <K>(fa: Map<K, A>) => Separated<Map<K, A>, Map<K, A>>
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
) => <K>(fa: Map<K, A>) => Separated<Map<K, B>, Map<K, C>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`




#### Signature

```typescript
export declare const separate: <K, A, B>(fa: Map<K, Either<A, B>>) => Separated<Map<K, A>, Map<K, B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`




#### Signature

```typescript
export declare const foldMap: <K>(O: Ord<K>) => <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (m: Map<K, A>) => M
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMapWithIndex`




#### Signature

```typescript
export declare const foldMapWithIndex: <K>(
  O: Ord<K>,
) => <M>(M: Monoid<M>) => <A>(f: (k: K, a: A) => M) => (m: Map<K, A>) => M
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getFoldable`




#### Signature

```typescript
export declare const getFoldable: <K>(O: Ord<K>) => Foldable2C<'Map', K>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getFoldableWithIndex`




#### Signature

```typescript
export declare const getFoldableWithIndex: <K>(O: Ord<K>) => FoldableWithIndex2C<'Map', K, K>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <K>(O: Ord<K>) => <B, A>(b: B, f: (b: B, a: A) => B) => (m: Map<K, A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <K>(O: Ord<K>) => <B, A>(b: B, f: (a: A, b: B) => B) => (m: Map<K, A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRightWithIndex`




#### Signature

```typescript
export declare const reduceRightWithIndex: <K>(
  O: Ord<K>,
) => <B, A>(b: B, f: (k: K, a: A, b: B) => B) => (m: Map<K, A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceWithIndex`




#### Signature

```typescript
export declare const reduceWithIndex: <K>(O: Ord<K>) => <B, A>(b: B, f: (k: K, b: B, a: A) => B) => (m: Map<K, A>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: Map<E, (a: A) => B>) => Map<E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <K>(fa: Map<K, A>) => Map<K, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapWithIndex`




#### Signature

```typescript
export declare const mapWithIndex: <K, A, B>(f: (k: K, a: A) => B) => (fa: Map<K, A>) => Map<K, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `getTraversableWithIndex`




#### Signature

```typescript
export declare const getTraversableWithIndex: <K>(O: Ord<K>) => TraversableWithIndex2C<'Map', K, K>
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
export declare const URI = 'Map'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `collect`




#### Signature

```typescript
export declare function collect<K>(O: Ord<K>): <A, B>(f: (k: K, a: A) => B) => (m: Map<K, A>) => Array<B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `deleteAt`

Delete a key and value from a map




#### Signature

```typescript
export declare const deleteAt: <K>(E: Eq<K>) => (k: K) => <A>(m: Map<K, A>) => Map<K, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `difference`




#### Signature

```typescript
export declare const difference: <K>(E: Eq<K>) => <A>(_second: Map<K, A>) => (first: Map<K, A>) => Map<K, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`

Test whether or not a value is a member of a map




#### Signature

```typescript
export declare const elem: <A>(E: Eq<A>) => {
  (a: A): <K>(m: Map<K, A>) => boolean
  <K>(a: A, m: Map<K, A>): boolean
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`empty`~~

Use a `new Map()` instead.




#### Signature

```typescript
export declare const empty: Map<never, never>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMapWithIndex`




#### Signature

```typescript
export declare const filterMapWithIndex: <K, A, B>(f: (k: K, a: A) => O.Option<B>) => (fa: Map<K, A>) => Map<K, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterWithIndex`




#### Signature

```typescript
export declare function filterWithIndex<K, A, B extends A>(p: (k: K, a: A) => a is B): (m: Map<K, A>) => Map<K, B>



export declare function filterWithIndex<K, A>(p: (k: K, a: A) => boolean): <B extends A>(m: Map<K, B>) => Map<K, B>



export declare function filterWithIndex<K, A>(p: (k: K, a: A) => boolean): (m: Map<K, A>) => Map<K, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`insertAt`~~

Use [`upsertAt`](#upsertat) instead.




#### Signature

```typescript
export declare const insertAt: <K>(E: Eq<K>) => <A>(k: K, a: A) => (m: Map<K, A>) => Map<K, A>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersection`




#### Signature

```typescript
export declare const intersection: <K, A>(
  E: Eq<K>,
  M: Magma<A>,
) => (second: Map<K, A>) => (first: Map<K, A>) => Map<K, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isEmpty`

Test whether or not a map is empty




#### Signature

```typescript
export declare const isEmpty: <K, A>(m: Map<K, A>) => boolean
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isSubmap`

Test whether or not one `Map` contains all of the keys and values contained in another `Map`




#### Signature

```typescript
export declare const isSubmap: <K, A>(
  SK: Eq<K>,
  SA: Eq<A>,
) => {
  (that: Map<K, A>): (me: Map<K, A>) => boolean
  (me: Map<K, A>, that: Map<K, A>): boolean
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `keys`

Get a sorted `Array` of the keys contained in a `Map`.




#### Signature

```typescript
export declare const keys: <K>(O: Ord<K>) => <A>(m: Map<K, A>) => K[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `lookup`

Lookup the value for a key in a `Map`.




#### Signature

```typescript
export declare const lookup: <K>(E: Eq<K>) => {
  (k: K): <A>(m: Map<K, A>) => Option<A>
  <A>(k: K, m: Map<K, A>): Option<A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `lookupWithKey`

Lookup the value for a key in a `Map`. If the result is a `Some`, the existing key is also returned.




#### Signature

```typescript
export declare function lookupWithKey<K>(E: Eq<K>): {
  (k: K): <A>(m: Map<K, A>) => Option<[K, A]>
  <A>(k: K, m: Map<K, A>): Option<[K, A]>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`map_`~~

Use [`Filterable`](#filterable) instead.




#### Signature

```typescript
export declare const map_: Filterable2<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `member`

Test whether or not a key exists in a map




#### Signature

```typescript
export declare const member: <K>(E: Eq<K>) => {
  (k: K): <A>(m: Map<K, A>) => boolean
  <A>(k: K, m: Map<K, A>): boolean
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modifyAt`




#### Signature

```typescript
export declare const modifyAt: <K>(E: Eq<K>) => <A>(k: K, f: (a: A) => A) => (m: Map<K, A>) => O.Option<Map<K, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMapWithIndex`




#### Signature

```typescript
export declare const partitionMapWithIndex: <K, A, B, C>(
  f: (k: K, a: A) => Either<B, C>,
) => (fa: Map<K, A>) => Separated<Map<K, B>, Map<K, C>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionWithIndex`




#### Signature

```typescript
export declare function partitionWithIndex<K, A, B extends A>(
  predicateWithIndex: (k: K, a: A) => a is B,
): (fa: Map<K, A>) => Separated<Map<K, A>, Map<K, B>>



export declare function partitionWithIndex<K, A>(
  predicateWithIndex: (k: K, a: A) => boolean,
): <B extends A>(fb: Map<K, B>) => Separated<Map<K, B>, Map<K, B>>



export declare function partitionWithIndex<K, A>(
  predicateWithIndex: (k: K, a: A) => boolean,
): (fa: Map<K, A>) => Separated<Map<K, A>, Map<K, A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `pop`

Delete a key and value from a map, returning the value as well as the subsequent map




#### Signature

```typescript
export declare function pop<K>(E: Eq<K>): (k: K) => <A>(m: Map<K, A>) => Option<[A, Map<K, A>]>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `singleton`

Create a map with one key/value pair




#### Signature

```typescript
export declare const singleton: <K, A>(k: K, a: A) => Map<K, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `size`

Calculate the number of key/value pairs in a map




#### Signature

```typescript
export declare const size: <K, A>(m: Map<K, A>) => number
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toArray`

Get a sorted `Array` of the key/value pairs contained in a `Map`.




#### Signature

```typescript
export declare function toArray<K>(O: Ord<K>): <A>(m: Map<K, A>) => Array<[K, A]>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUnfoldable`

Unfolds a map into a list of key/value pairs




#### Signature

```typescript
export declare function toUnfoldable<K, F extends URIS>(
  ord: Ord<K>,
  U: Unfoldable1<F>,
): <A>(d: Map<K, A>) => Kind<F, [K, A]>



export declare function toUnfoldable<K, F>(ord: Ord<K>, U: Unfoldable<F>): <A>(d: Map<K, A>) => HKT<F, [K, A]>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `union`




#### Signature

```typescript
export declare const union: <K, A>(E: Eq<K>, M: Magma<A>) => (second: Map<K, A>) => (first: Map<K, A>) => Map<K, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `updateAt`




#### Signature

```typescript
export declare const updateAt: <K>(E: Eq<K>) => <A>(k: K, a: A) => (m: Map<K, A>) => O.Option<Map<K, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `upsertAt`

Insert or replace a key/value pair in a `Map`.




#### Signature

```typescript
export declare const upsertAt: <K>(E: Eq<K>) => <A>(k: K, a: A) => (m: Map<K, A>) => Map<K, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `values`

Get a sorted `Array` of the values contained in a `Map`.




#### Signature

```typescript
export declare const values: <A>(O: Ord<A>) => <K>(m: Map<K, A>) => A[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti