
# Ord







### Instances

* [Contravariant](#contravariant)
* [getMonoid](#getmonoid)
* [getSemigroup](#getsemigroup)

### Constructors

* [fromCompare](#fromcompare)

### Defaults

* [equalsDefault](#equalsdefault)

### Model

* [Ord](#ord)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [between](#between)
* [clamp](#clamp)
* [contramap](#contramap)
* [equals](#equals)
* [geq](#geq)
* ~~[getDualOrd](#getdualord)~~ (deprecated)
* ~~[getTupleOrd](#gettupleord)~~ (deprecated)
* [gt](#gt)
* [leq](#leq)
* [lt](#lt)
* [max](#max)
* [min](#min)
* ~~[ord](#ord)~~ (deprecated)
* ~~[ordBoolean](#ordboolean)~~ (deprecated)
* ~~[ordDate](#orddate)~~ (deprecated)
* ~~[ordNumber](#ordnumber)~~ (deprecated)
* ~~[ordString](#ordstring)~~ (deprecated)
* [reverse](#reverse)
* [trivial](#trivial)
* [tuple](#tuple)

## Instances


### `Contravariant`




#### Signature

```typescript
export declare const Contravariant: Contravariant1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`

Returns a `Monoid` such that:


- Its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2` - Its `empty` value is an `Ord` that always considers compared elements equal




#### Signature

```typescript
export declare const getMonoid: <A = never>() => Monoid<Ord<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { sort } from '@fp-tx/core/Array'
import { contramap, reverse, getMonoid } from '@fp-tx/core/Ord'
import * as S from '@fp-tx/core/string'
import * as B from '@fp-tx/core/boolean'
import { pipe } from '@fp-tx/core/function'
import { concatAll } from '@fp-tx/core/Monoid'
import * as N from '@fp-tx/core/number'

interface User {
  readonly id: number
  readonly name: string
  readonly age: number
  readonly rememberMe: boolean
}

const byName = pipe(
  S.Ord,
  contramap((p: User) => p.name),
)

const byAge = pipe(
  N.Ord,
  contramap((p: User) => p.age),
)

const byRememberMe = pipe(
  B.Ord,
  contramap((p: User) => p.rememberMe),
)

const M = getMonoid<User>()

const users: Array<User> = [
  { id: 1, name: 'Guido', age: 47, rememberMe: false },
  { id: 2, name: 'Guido', age: 46, rememberMe: true },
  { id: 3, name: 'Giulio', age: 44, rememberMe: false },
  { id: 4, name: 'Giulio', age: 44, rememberMe: true },
]

// sort by name, then by age, then by `rememberMe`
const O1 = concatAll(M)([byName, byAge, byRememberMe])
assert.deepStrictEqual(sort(O1)(users), [
  { id: 3, name: 'Giulio', age: 44, rememberMe: false },
  { id: 4, name: 'Giulio', age: 44, rememberMe: true },
  { id: 2, name: 'Guido', age: 46, rememberMe: true },
  { id: 1, name: 'Guido', age: 47, rememberMe: false },
])

// now `rememberMe = true` first, then by name, then by age
const O2 = concatAll(M)([reverse(byRememberMe), byName, byAge])
assert.deepStrictEqual(sort(O2)(users), [
  { id: 4, name: 'Giulio', age: 44, rememberMe: true },
  { id: 2, name: 'Guido', age: 46, rememberMe: true },
  { id: 3, name: 'Giulio', age: 44, rememberMe: false },
  { id: 1, name: 'Guido', age: 47, rememberMe: false },
])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`

A typical use case for the `Semigroup` instance of `Ord` is merging two or more orderings.


For example the following snippet builds an `Ord` for a type `User` which sorts by `created` date descending, and **then** `lastName`




#### Signature

```typescript
export declare const getSemigroup: <A = never>() => Semigroup<Ord<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as D from '@fp-tx/core/Date'
import { pipe } from '@fp-tx/core/function'
import { contramap, getSemigroup, Ord, reverse } from '@fp-tx/core/Ord'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as S from '@fp-tx/core/string'

interface User {
  readonly id: string
  readonly lastName: string
  readonly created: Date
}

const ordByLastName: Ord<User> = pipe(
  S.Ord,
  contramap(user => user.lastName),
)

const ordByCreated: Ord<User> = pipe(
  D.Ord,
  contramap(user => user.created),
)

const ordUserByCreatedDescThenLastName = getSemigroup<User>().concat(reverse(ordByCreated), ordByLastName)

assert.deepStrictEqual(
  RA.sort(ordUserByCreatedDescThenLastName)([
    { id: 'c', lastName: 'd', created: new Date(1973, 10, 30) },
    { id: 'a', lastName: 'b', created: new Date(1973, 10, 30) },
    { id: 'e', lastName: 'f', created: new Date(1980, 10, 30) },
  ]),
  [
    { id: 'e', lastName: 'f', created: new Date(1980, 10, 30) },
    { id: 'a', lastName: 'b', created: new Date(1973, 10, 30) },
    { id: 'c', lastName: 'd', created: new Date(1973, 10, 30) },
  ],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `fromCompare`




#### Signature

```typescript
export declare const fromCompare: <A>(compare: (first: A, second: A) => Ordering) => Ord<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Defaults


### `equalsDefault`




#### Signature

```typescript
export declare const equalsDefault: <A>(compare: (first: A, second: A) => Ordering) => (x: A, y: A) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Ord`




#### Signature

```typescript
export interface Ord<A> extends Eq<A> {
  readonly compare: (first: A, second: A) => Ordering
}
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
export declare const URI = 'Ord'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `between`

Test whether a value is between a minimum and a maximum (inclusive)




#### Signature

```typescript
export declare const between: <A>(O: Ord<A>) => (low: A, hi: A) => (a: A) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `clamp`

Clamp a value between a minimum and a maximum




#### Signature

```typescript
export declare const clamp: <A>(O: Ord<A>) => (low: A, hi: A) => (a: A) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `contramap`

A typical use case for `contramap` would be like, given some `User` type, to construct an `Ord<User>`.


We can do so with a function from `User -> X` where `X` is some value that we know how to compare for ordering (meaning we have an `Ord<X>`)




#### Signature

```typescript
export declare const contramap: <A, B>(f: (b: B) => A) => (fa: Ord<A>) => Ord<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import { contramap, Ord } from '@fp-tx/core/Ord'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as S from '@fp-tx/core/string'

interface User {
  readonly firstName: string
  readonly lastName: string
}

const ordLastName: Ord<string> = S.Ord

const ordByLastName: Ord<User> = pipe(
  ordLastName,
  contramap(user => user.lastName),
)

assert.deepStrictEqual(
  RA.sort(ordByLastName)([
    { firstName: 'a', lastName: 'd' },
    { firstName: 'c', lastName: 'b' },
  ]),
  [
    { firstName: 'c', lastName: 'b' },
    { firstName: 'a', lastName: 'd' },
  ],
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `equals`




#### Signature

```typescript
export declare const equals: <A>(O: Ord<A>) => (second: A) => (first: A) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `geq`

Test whether one value is _non-strictly greater than_ another




#### Signature

```typescript
export declare const geq: <A>(O: Ord<A>) => (first: A, second: A) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getDualOrd`~~

Use [`reverse`](#reverse) instead.




#### Signature

```typescript
export declare const getDualOrd: <A>(O: Ord<A>) => Ord<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getTupleOrd`~~

Use [`tuple`](#tuple) instead.




#### Signature

```typescript
export declare const getTupleOrd: <T extends ReadonlyArray<Ord<any>>>(
  ...ords: T
) => Ord<{
  [K in keyof T]: T[K] extends Ord<infer A> ? A : never
}>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `gt`

Test whether one value is _strictly greater than_ another




#### Signature

```typescript
export declare const gt: <A>(O: Ord<A>) => (first: A, second: A) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leq`

Test whether one value is _non-strictly less than_ another




#### Signature

```typescript
export declare const leq: <A>(O: Ord<A>) => (first: A, second: A) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `lt`

Test whether one value is _strictly less than_ another




#### Signature

```typescript
export declare const lt: <A>(O: Ord<A>) => (first: A, second: A) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `max`

Take the maximum of two values. If they are considered equal, the first argument is chosen




#### Signature

```typescript
export declare const max: <A>(O: Ord<A>) => (first: A, second: A) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `min`

Take the minimum of two values. If they are considered equal, the first argument is chosen




#### Signature

```typescript
export declare const min: <A>(O: Ord<A>) => (first: A, second: A) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ord`~~

Use [`Contravariant`](#contravariant) instead.




#### Signature

```typescript
export declare const ord: Contravariant1<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ordBoolean`~~

Use [`Ord`](./boolean#ord) instead.




#### Signature

```typescript
export declare const ordBoolean: Ord<boolean>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ordDate`~~

Use [`Ord`](./Date#ord) instead.




#### Signature

```typescript
export declare const ordDate: Ord<Date>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ordNumber`~~

Use [`Ord`](./number#ord) instead.




#### Signature

```typescript
export declare const ordNumber: Ord<number>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ordString`~~

Use [`Ord`](./string#ord) instead.




#### Signature

```typescript
export declare const ordString: Ord<string>
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
export declare const reverse: <A>(O: Ord<A>) => Ord<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `trivial`




#### Signature

```typescript
export declare const trivial: Ord<unknown>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tuple`

Given a tuple of `Ord`s returns an `Ord` for the tuple.




#### Signature

```typescript
export declare const tuple: <A extends readonly unknown[]>(...ords: { [K in keyof A]: Ord<A[K]> }) => Ord<Readonly<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { tuple } from '@fp-tx/core/Ord'
import * as B from '@fp-tx/core/boolean'
import * as S from '@fp-tx/core/string'
import * as N from '@fp-tx/core/number'

const O = tuple(S.Ord, N.Ord, B.Ord)
assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti