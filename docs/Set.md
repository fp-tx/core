
# Set







### Instances

* [getDifferenceMagma](#getdifferencemagma)
* [getEq](#geteq)
* [getIntersectionSemigroup](#getintersectionsemigroup)
* [getShow](#getshow)
* [getUnionMonoid](#getunionmonoid)
* [getUnionSemigroup](#getunionsemigroup)

### Constructors

* [singleton](#singleton)

### Conversions

* [fromArray](#fromarray)
* [toArray](#toarray)

### Folding

* [foldMap](#foldmap)
* [reduce](#reduce)
* [reduceRight](#reduceright)

### Utilities

* [chain](#chain)
* [compact](#compact)
* [difference](#difference)
* [elem](#elem)
* [empty](#empty)
* [every](#every)
* [filter](#filter)
* [filterMap](#filtermap)
* [insert](#insert)
* [intersection](#intersection)
* [isEmpty](#isempty)
* [isSubset](#issubset)
* [map](#map)
* [partition](#partition)
* [partitionMap](#partitionmap)
* [remove](#remove)
* [separate](#separate)
* [size](#size)
* [some](#some)
* ~~[subset](#subset)~~ (deprecated)
* [toggle](#toggle)
* [union](#union)

## Instances


### `getDifferenceMagma`




#### Signature

```typescript
export declare const getDifferenceMagma: <A>(E: Eq<A>) => Magma<Set<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare const getEq: <A>(E: Eq<A>) => Eq<Set<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getIntersectionSemigroup`




#### Signature

```typescript
export declare const getIntersectionSemigroup: <A>(E: Eq<A>) => Semigroup<Set<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare const getShow: <A>(S: Show<A>) => Show<Set<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionMonoid`




#### Signature

```typescript
export declare const getUnionMonoid: <A>(E: Eq<A>) => Monoid<Set<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionSemigroup`




#### Signature

```typescript
export declare const getUnionSemigroup: <A>(E: Eq<A>) => Semigroup<Set<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `singleton`

Create a set with one element




#### Signature

```typescript
export declare const singleton: <A>(a: A) => Set<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromArray`

Create a set from an array




#### Signature

```typescript
export declare const fromArray: <A>(E: Eq<A>) => (as: A[]) => Set<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toArray`

Get a sorted `Array` of the values contained in a `Set`.




#### Signature

```typescript
export declare const toArray: <A>(O: Ord<A>) => (set: Set<A>) => A[]
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`




#### Signature

```typescript
export declare const foldMap: <A, M>(O: Ord<A>, M: Monoid<M>) => (f: (a: A) => M) => (fa: Set<A>) => M
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <A>(O: Ord<A>) => <B>(b: B, f: (b: B, a: A) => B) => (fa: Set<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A>(O: Ord<A>) => <B>(b: B, f: (a: A, b: B) => B) => (fa: Set<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `chain`

Composes computations in sequence, using the return value of one computation to determine the next computation.




#### Signature

```typescript
export declare function chain<B>(E: Eq<B>): <A>(f: (x: A) => Set<B>) => (set: Set<A>) => Set<B>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `compact`




#### Signature

```typescript
export declare const compact: <A>(E: Eq<A>) => (fa: Set<Option<A>>) => Set<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `difference`

Form the set difference (`x` - `y`)




#### Signature

```typescript
export declare function difference<A>(E: Eq<A>): {
  (that: Set<A>): (me: Set<A>) => Set<A>
  (me: Set<A>, that: Set<A>): Set<A>
}

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { difference } from '@fp-tx/core/Set'
import * as N from '@fp-tx/core/number'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe(new Set([1, 2]), difference(N.Eq)(new Set([1, 3]))), new Set([2]))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`

Test if a value is a member of a set




#### Signature

```typescript
export declare const elem: <A>(E: Eq<A>) => {
  (a: A): (set: Set<A>) => boolean
  (a: A, set: Set<A>): boolean
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `empty`




#### Signature

```typescript
export declare const empty: Set<never>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `every`




#### Signature

```typescript
export declare const every: {
  <A, B extends A>(refinement: Refinement<A, B>): Refinement<Set<A>, Set<B>>
  <A>(predicate: Predicate<A>): Predicate<Set<A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filter`




#### Signature

```typescript
export declare function filter<A, B extends A>(refinement: Refinement<A, B>): (set: Set<A>) => Set<B>



export declare function filter<A>(predicate: Predicate<A>): <B extends A>(set: Set<B>) => Set<B>



export declare function filter<A>(predicate: Predicate<A>): (set: Set<A>) => Set<A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMap`




#### Signature

```typescript
export declare function filterMap<B>(E: Eq<B>): <A>(f: (a: A) => Option<B>) => (fa: Set<A>) => Set<B>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `insert`

Insert a value into a set




#### Signature

```typescript
export declare function insert<A>(E: Eq<A>): (a: A) => (set: Set<A>) => Set<A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersection`

The set of elements which are in both the first and second set




#### Signature

```typescript
export declare function intersection<A>(E: Eq<A>): {
  (that: Set<A>): (me: Set<A>) => Set<A>
  (me: Set<A>, that: Set<A>): Set<A>
}

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isEmpty`

Test whether a `Set` is empty.




#### Signature

```typescript
export declare const isEmpty: <A>(set: Set<A>) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isSubset`




#### Signature

```typescript
export declare const isSubset: <A>(E: Eq<A>) => (that: Set<A>) => (me: Set<A>) => boolean
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
export declare function map<B>(E: Eq<B>): <A>(f: (x: A) => B) => (set: Set<A>) => Set<B>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partition`




#### Signature

```typescript
export declare function partition<A, B extends A>(
  refinement: Refinement<A, B>,
): (set: Set<A>) => Separated<Set<A>, Set<B>>



export declare function partition<A>(predicate: Predicate<A>): <B extends A>(set: Set<B>) => Separated<Set<B>, Set<B>>



export declare function partition<A>(predicate: Predicate<A>): (set: Set<A>) => Separated<Set<A>, Set<A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMap`




#### Signature

```typescript
export declare function partitionMap<B, C>(
  EB: Eq<B>,
  EC: Eq<C>,
): <A>(f: (a: A) => Either<B, C>) => (set: Set<A>) => Separated<Set<B>, Set<C>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `remove`

Delete a value from a set




#### Signature

```typescript
export declare const remove: <A>(E: Eq<A>) => (a: A) => (set: Set<A>) => Set<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`




#### Signature

```typescript
export declare function separate<E, A>(EE: Eq<E>, EA: Eq<A>): (fa: Set<Either<E, A>>) => Separated<Set<E>, Set<A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `size`

Calculate the number of elements in a `Set`.




#### Signature

```typescript
export declare const size: <A>(set: Set<A>) => number
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `some`




#### Signature

```typescript
export declare const some: <A>(predicate: Predicate<A>) => (set: Set<A>) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`subset`~~

Use [`isSubset`](#issubset) instead.




#### Signature

```typescript
export declare const subset: <A>(E: Eq<A>) => {
  (that: Set<A>): (me: Set<A>) => boolean
  (me: Set<A>, that: Set<A>): boolean
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toggle`

Checks an element is a member of a set; If yes, removes the value from the set If no, inserts the value to the set




#### Signature

```typescript
export declare const toggle: <A>(E: Eq<A>) => (a: A) => (set: Set<A>) => Set<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `union`

Form the union of two sets




#### Signature

```typescript
export declare function union<A>(E: Eq<A>): {
  (that: Set<A>): (me: Set<A>) => Set<A>
  (me: Set<A>, that: Set<A>): Set<A>
}

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti