
# ReadonlySet







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

* [fromReadonlyArray](#fromreadonlyarray)
* [fromSet](#fromset)
* [toReadonlyArray](#toreadonlyarray)
* [toSet](#toset)

### Folding

* [reduceRight](#reduceright)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [chain](#chain)
* [compact](#compact)
* [difference](#difference)
* [elem](#elem)
* [empty](#empty)
* [every](#every)
* [filter](#filter)
* [filterMap](#filtermap)
* [foldMap](#foldmap)
* ~~[fromArray](#fromarray)~~ (deprecated)
* [insert](#insert)
* [intersection](#intersection)
* [isEmpty](#isempty)
* [isSubset](#issubset)
* [map](#map)
* [partition](#partition)
* [partitionMap](#partitionmap)
* [reduce](#reduce)
* [remove](#remove)
* [separate](#separate)
* [size](#size)
* [some](#some)
* [toggle](#toggle)
* [union](#union)

## Instances


### `getDifferenceMagma`




#### Signature

```typescript
export declare const getDifferenceMagma: <A>(E: Eq<A>) => Magma<ReadonlySet<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare function getEq<A>(E: Eq<A>): Eq<ReadonlySet<A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getIntersectionSemigroup`




#### Signature

```typescript
export declare const getIntersectionSemigroup: <A>(E: Eq<A>) => Semigroup<ReadonlySet<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare function getShow<A>(S: Show<A>): Show<ReadonlySet<A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionMonoid`




#### Signature

```typescript
export declare const getUnionMonoid: <A>(E: Eq<A>) => Monoid<ReadonlySet<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getUnionSemigroup`




#### Signature

```typescript
export declare const getUnionSemigroup: <A>(E: Eq<A>) => Semigroup<ReadonlySet<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `singleton`

Create a set with one element




#### Signature

```typescript
export declare const singleton: <A>(a: A) => ReadonlySet<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromReadonlyArray`

Create a `ReadonlySet` from a `ReadonlyArray`




#### Signature

```typescript
export declare const fromReadonlyArray: <A>(E: Eq<A>) => (as: readonly A[]) => ReadonlySet<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromSet`




#### Signature

```typescript
export declare const fromSet: <A>(s: Set<A>) => ReadonlySet<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toReadonlyArray`

Get a sorted `ReadonlyArray` of the values contained in a `ReadonlySet`.




#### Signature

```typescript
export declare const toReadonlyArray: <A>(O: Ord<A>) => (set: ReadonlySet<A>) => readonly A[]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toSet`




#### Signature

```typescript
export declare function toSet<A>(s: ReadonlySet<A>): Set<A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A>(O: Ord<A>) => <B>(b: B, f: (a: A, b: B) => B) => (fa: ReadonlySet<A>) => B
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
export declare const URI = 'ReadonlySet'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `chain`




#### Signature

```typescript
export declare function chain<B>(E: Eq<B>): <A>(f: (x: A) => ReadonlySet<B>) => (set: ReadonlySet<A>) => ReadonlySet<B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `compact`




#### Signature

```typescript
export declare const compact: <A>(E: Eq<A>) => (fa: ReadonlySet<Option<A>>) => ReadonlySet<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `difference`

Form the set difference (`x` - `y`)




#### Signature

```typescript
export declare function difference<A>(E: Eq<A>): {
  (that: ReadonlySet<A>): (me: ReadonlySet<A>) => ReadonlySet<A>
  (me: ReadonlySet<A>, that: ReadonlySet<A>): ReadonlySet<A>
}

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { difference } from '@fp-tx/core/ReadonlySet'
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
export declare function elem<A>(E: Eq<A>): {
  (a: A): (set: ReadonlySet<A>) => boolean
  (a: A, set: ReadonlySet<A>): boolean
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `empty`




#### Signature

```typescript
export declare const empty: ReadonlySet<never>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `every`




#### Signature

```typescript
export declare function every<A, B extends A>(refinement: Refinement<A, B>): Refinement<ReadonlySet<A>, ReadonlySet<B>>



export declare function every<A>(predicate: Predicate<A>): Predicate<ReadonlySet<A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filter`




#### Signature

```typescript
export declare function filter<A, B extends A>(refinement: Refinement<A, B>): (set: ReadonlySet<A>) => ReadonlySet<B>



export declare function filter<A>(predicate: Predicate<A>): <B extends A>(set: ReadonlySet<B>) => ReadonlySet<B>



export declare function filter<A>(predicate: Predicate<A>): (set: ReadonlySet<A>) => ReadonlySet<A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMap`




#### Signature

```typescript
export declare function filterMap<B>(E: Eq<B>): <A>(f: (a: A) => Option<B>) => (fa: ReadonlySet<A>) => ReadonlySet<B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMap`




#### Signature

```typescript
export declare function foldMap<A, M>(O: Ord<A>, M: Monoid<M>): (f: (a: A) => M) => (fa: ReadonlySet<A>) => M

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`fromArray`~~

Use [`fromReadonlyArray`](#fromreadonlyarray) instead.




#### Signature

```typescript
export declare const fromArray: <A>(E: Eq<A>) => (as: ReadonlyArray<A>) => ReadonlySet<A>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `insert`

Insert a value into a set




#### Signature

```typescript
export declare function insert<A>(E: Eq<A>): (a: A) => (set: ReadonlySet<A>) => ReadonlySet<A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intersection`

The set of elements which are in both the first and second set




#### Signature

```typescript
export declare function intersection<A>(E: Eq<A>): {
  (that: ReadonlySet<A>): (me: ReadonlySet<A>) => ReadonlySet<A>
  (me: ReadonlySet<A>, that: ReadonlySet<A>): ReadonlySet<A>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isEmpty`

Test whether a `ReadonlySet` is empty.




#### Signature

```typescript
export declare const isEmpty: <A>(set: ReadonlySet<A>) => boolean
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isSubset`

`true` if and only if every element in the first set is an element of the second set




#### Signature

```typescript
export declare function isSubset<A>(E: Eq<A>): {
  (that: ReadonlySet<A>): (me: ReadonlySet<A>) => boolean
  (me: ReadonlySet<A>, that: ReadonlySet<A>): boolean
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

Projects a Set through a function




#### Signature

```typescript
export declare function map<B>(E: Eq<B>): <A>(f: (x: A) => B) => (set: ReadonlySet<A>) => ReadonlySet<B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partition`




#### Signature

```typescript
export declare function partition<A, B extends A>(
  refinement: Refinement<A, B>,
): (set: ReadonlySet<A>) => Separated<ReadonlySet<A>, ReadonlySet<B>>



export declare function partition<A>(
  predicate: Predicate<A>,
): <B extends A>(set: ReadonlySet<B>) => Separated<ReadonlySet<B>, ReadonlySet<B>>



export declare function partition<A>(
  predicate: Predicate<A>,
): (set: ReadonlySet<A>) => Separated<ReadonlySet<A>, ReadonlySet<A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMap`




#### Signature

```typescript
export declare function partitionMap<B, C>(
  EB: Eq<B>,
  EC: Eq<C>,
): <A>(f: (a: A) => Either<B, C>) => (set: ReadonlySet<A>) => Separated<ReadonlySet<B>, ReadonlySet<C>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare function reduce<A>(O: Ord<A>): <B>(b: B, f: (b: B, a: A) => B) => (fa: ReadonlySet<A>) => B

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `remove`

Delete a value from a set




#### Signature

```typescript
export declare const remove: <A>(E: Eq<A>) => (a: A) => (set: ReadonlySet<A>) => ReadonlySet<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`




#### Signature

```typescript
export declare function separate<E, A>(
  EE: Eq<E>,
  EA: Eq<A>,
): (fa: ReadonlySet<Either<E, A>>) => Separated<ReadonlySet<E>, ReadonlySet<A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `size`

Calculate the number of elements in a `ReadonlySet`.




#### Signature

```typescript
export declare const size: <A>(set: ReadonlySet<A>) => number
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `some`




#### Signature

```typescript
export declare const some: <A>(predicate: Predicate<A>) => (set: ReadonlySet<A>) => boolean
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toggle`

Checks an element is a member of a set; If yes, removes the value from the set If no, inserts the value to the set




#### Signature

```typescript
export declare const toggle: <A>(E: Eq<A>) => (a: A) => (set: ReadonlySet<A>) => ReadonlySet<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `union`

Form the union of two sets




#### Signature

```typescript
export declare function union<A>(E: Eq<A>): {
  (that: ReadonlySet<A>): (me: ReadonlySet<A>) => ReadonlySet<A>
  (me: ReadonlySet<A>, that: ReadonlySet<A>): ReadonlySet<A>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti