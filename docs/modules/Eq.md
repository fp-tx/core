
# Eq







### Instances

* [Contravariant](#contravariant)
* [eqStrict](#eqstrict)
* [getMonoid](#getmonoid)
* [getSemigroup](#getsemigroup)

### Constructors

* [fromEquals](#fromequals)

### Model

* [Eq](#eq)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [contramap](#contramap)
* ~~[eq](#eq)~~ (deprecated)
* ~~[eqBoolean](#eqboolean)~~ (deprecated)
* ~~[eqDate](#eqdate)~~ (deprecated)
* ~~[eqNumber](#eqnumber)~~ (deprecated)
* ~~[eqString](#eqstring)~~ (deprecated)
* ~~[getStructEq](#getstructeq)~~ (deprecated)
* ~~[getTupleEq](#gettupleeq)~~ (deprecated)
* ~~[strictEqual](#strictequal)~~ (deprecated)
* [struct](#struct)
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


### `eqStrict`




#### Signature

```typescript
export declare const eqStrict: Eq<unknown>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`




#### Signature

```typescript
export declare const getMonoid: <A>() => Monoid<Eq<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`




#### Signature

```typescript
export declare const getSemigroup: <A>() => Semigroup<Eq<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `fromEquals`




#### Signature

```typescript
export declare const fromEquals: <A>(equals: (x: A, y: A) => boolean) => Eq<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Eq`




#### Signature

```typescript
export interface Eq<A> {
  readonly equals: (x: A, y: A) => boolean
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
export declare const URI = 'Eq'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `contramap`

A typical use case for `contramap` would be like, given some `User` type, to construct an `Eq<User>`.


We can do so with a function from `User -> X` where `X` is some value that we know how to compare for equality (meaning we have an `Eq<X>`)


For example, given the following `User` type, we want to construct an `Eq<User>` that just looks at the `key` field for each user (since it's known to be unique).


If we have a way of comparing `UUID`s for equality (`eqUUID: Eq<UUID>`) and we know how to go from `User -> UUID`, using `contramap` we can do this




#### Signature

```typescript
export declare const contramap: <A, B>(f: (b: B) => A) => (fa: Eq<A>) => Eq<B>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { contramap, Eq } from '@fp-tx/core/Eq'
import { pipe } from '@fp-tx/core/function'
import * as S from '@fp-tx/core/string'

type UUID = string

interface User {
  readonly key: UUID
  readonly firstName: string
  readonly lastName: string
}

const eqUUID: Eq<UUID> = S.Eq

const eqUserByKey: Eq<User> = pipe(
  eqUUID,
  contramap(user => user.key),
)

assert.deepStrictEqual(
  eqUserByKey.equals(
    { key: 'k1', firstName: 'a1', lastName: 'b1' },
    { key: 'k2', firstName: 'a1', lastName: 'b1' },
  ),
  false,
)
assert.deepStrictEqual(
  eqUserByKey.equals(
    { key: 'k1', firstName: 'a1', lastName: 'b1' },
    { key: 'k1', firstName: 'a2', lastName: 'b1' },
  ),
  true,
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`eq`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Contravariant` instance, pass `E.Contravariant` instead of `E.eq` (where `E` is from `import E from 'fp-ts/Eq'`)




#### Signature

```typescript
export declare const eq: Contravariant1<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`eqBoolean`~~

Use [`Eq`](./boolean#eq) instead.




#### Signature

```typescript
export declare const eqBoolean: Eq<boolean>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`eqDate`~~

Use [`Eq`](./Date#eq) instead.




#### Signature

```typescript
export declare const eqDate: Eq<Date>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`eqNumber`~~

Use [`Eq`](./number#eq) instead.




#### Signature

```typescript
export declare const eqNumber: Eq<number>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`eqString`~~

Use [`Eq`](./string#eq) instead.




#### Signature

```typescript
export declare const eqString: Eq<string>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getStructEq`~~

Use [`struct`](#struct) instead.




#### Signature

```typescript
export declare const getStructEq: <O extends ReadonlyRecord<string, any>>(eqs: {
  [K in keyof O]: Eq<O[K]>
}) => Eq<O>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getTupleEq`~~

Use [`tuple`](#tuple) instead.




#### Signature

```typescript
export declare const getTupleEq: <T extends ReadonlyArray<Eq<any>>>(
  ...eqs: T
) => Eq<{
  [K in keyof T]: T[K] extends Eq<infer A> ? A : never
}>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`strictEqual`~~

Use [`eqStrict`](#eqstrict) instead




#### Signature

```typescript
export declare const strictEqual: <A>(a: A, b: A) => boolean
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `struct`




#### Signature

```typescript
export declare const struct: <A>(eqs: { [K in keyof A]: Eq<A[K]> }) => Eq<{ readonly [K_1 in keyof A]: A[K_1] }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tuple`

Given a tuple of `Eq`s returns a `Eq` for the tuple




#### Signature

```typescript
export declare const tuple: <A extends readonly unknown[]>(...eqs: { [K in keyof A]: Eq<A[K]> }) => Eq<Readonly<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { tuple } from '@fp-tx/core/Eq'
import * as S from '@fp-tx/core/string'
import * as N from '@fp-tx/core/number'
import * as B from '@fp-tx/core/boolean'

const E = tuple(S.Eq, N.Eq, B.Eq)
assert.strictEqual(E.equals(['a', 1, true], ['a', 1, true]), true)
assert.strictEqual(E.equals(['a', 1, true], ['b', 1, true]), false)
assert.strictEqual(E.equals(['a', 1, true], ['a', 2, true]), false)
assert.strictEqual(E.equals(['a', 1, true], ['a', 1, false]), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti