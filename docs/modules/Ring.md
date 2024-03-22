
# Ring







### Model

* [Ring](#ring)

### Utilities

* ~~[getFunctionRing](#getfunctionring)~~ (deprecated)
* ~~[getTupleRing](#gettuplering)~~ (deprecated)
* [negate](#negate)
* [tuple](#tuple)

## Model


### `Ring`




#### Signature

```typescript
export interface Ring<A> extends Semiring<A> {
  readonly sub: (x: A, y: A) => A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`getFunctionRing`~~

Use [`getRing`](./function#getring) instead.




#### Signature

```typescript
export declare const getFunctionRing: <A, B>(R: Ring<B>) => Ring<(a: A) => B>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getTupleRing`~~

Use [`tuple`](#tuple) instead.




#### Signature

```typescript
export declare const getTupleRing: <T extends ReadonlyArray<Ring<any>>>(
  ...rings: T
) => Ring<{
  [K in keyof T]: T[K] extends Ring<infer A> ? A : never
}>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `negate`

`negate x` can be used as a shorthand for `zero - x`




#### Signature

```typescript
export declare const negate: <A>(R: Ring<A>) => (a: A) => A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tuple`

Given a tuple of `Ring`s returns a `Ring` for the tuple




#### Signature

```typescript
export declare const tuple: <A extends readonly unknown[]>(
  ...rings: { [K in keyof A]: Ring<A[K]> }
) => Ring<Readonly<A>>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { tuple } from '@fp-tx/core/Ring'
import * as N from '@fp-tx/core/number'

const R = tuple(N.Field, N.Field, N.Field)
assert.deepStrictEqual(R.add([1, 2, 3], [4, 5, 6]), [5, 7, 9])
assert.deepStrictEqual(R.mul([1, 2, 3], [4, 5, 6]), [4, 10, 18])
assert.deepStrictEqual(R.one, [1, 1, 1])
assert.deepStrictEqual(R.sub([1, 2, 3], [4, 5, 6]), [-3, -3, -3])
assert.deepStrictEqual(R.zero, [0, 0, 0])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti