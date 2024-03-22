
# Monoid







### Constructors

* [max](#max)
* [min](#min)

### Model

* [Monoid](#monoid)

### Utilities

* [concatAll](#concatall)
* ~~[fold](#fold)~~ (deprecated)
* ~~[getDualMonoid](#getdualmonoid)~~ (deprecated)
* ~~[getEndomorphismMonoid](#getendomorphismmonoid)~~ (deprecated)
* ~~[getFunctionMonoid](#getfunctionmonoid)~~ (deprecated)
* ~~[getJoinMonoid](#getjoinmonoid)~~ (deprecated)
* ~~[getMeetMonoid](#getmeetmonoid)~~ (deprecated)
* ~~[getStructMonoid](#getstructmonoid)~~ (deprecated)
* ~~[getTupleMonoid](#gettuplemonoid)~~ (deprecated)
* ~~[monoidAll](#monoidall)~~ (deprecated)
* ~~[monoidAny](#monoidany)~~ (deprecated)
* ~~[monoidProduct](#monoidproduct)~~ (deprecated)
* ~~[monoidString](#monoidstring)~~ (deprecated)
* ~~[monoidSum](#monoidsum)~~ (deprecated)
* ~~[monoidVoid](#monoidvoid)~~ (deprecated)
* [reverse](#reverse)
* [struct](#struct)
* [tuple](#tuple)

## Constructors


### `max`

Get a monoid where `concat` will return the maximum, based on the provided bounded order.


The `empty` value is the `bottom` value.




#### Signature

```typescript
export declare const max: <A>(B: Bounded<A>) => Monoid<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as N from '@fp-tx/core/number'
import * as M from '@fp-tx/core/Monoid'

const M1 = M.max(N.Bounded)

assert.deepStrictEqual(M1.concat(1, 2), 2)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `min`

Get a monoid where `concat` will return the minimum, based on the provided bounded order.


The `empty` value is the `top` value.




#### Signature

```typescript
export declare const min: <A>(B: Bounded<A>) => Monoid<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as N from '@fp-tx/core/number'
import * as M from '@fp-tx/core/Monoid'

const M1 = M.min(N.Bounded)

assert.deepStrictEqual(M1.concat(1, 2), 1)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Monoid`




#### Signature

```typescript
export interface Monoid<A> extends Se.Semigroup<A> {
  readonly empty: A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `concatAll`

Given a sequence of `as`, concat them and return the total.


If `as` is empty, return the monoid `empty` value.




#### Signature

```typescript
export declare const concatAll: <A>(M: Monoid<A>) => (as: readonly A[]) => A
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { concatAll } from '@fp-tx/core/Monoid'
import * as N from '@fp-tx/core/number'

assert.deepStrictEqual(concatAll(N.MonoidSum)([1, 2, 3]), 6)
assert.deepStrictEqual(concatAll(N.MonoidSum)([]), 0)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`fold`~~

Use [`concatAll`](#concatall) instead.




#### Signature

```typescript
export declare const fold: <A>(M: Monoid<A>) => (as: readonly A[]) => A
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getDualMonoid`~~

Use [`reverse`](#reverse) instead.




#### Signature

```typescript
export declare const getDualMonoid: <A>(M: Monoid<A>) => Monoid<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getEndomorphismMonoid`~~

Use [`getEndomorphismMonoid`](./function#getendomorphismmonoid) instead.


**Note**. The execution order in [`getEndomorphismMonoid`](./function#getendomorphismmonoid) is reversed.




#### Signature

```typescript
export declare const getEndomorphismMonoid: <A = never>() => Monoid<Endomorphism<A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFunctionMonoid`~~

Use [`getMonoid`](./function#getmonoid) instead.




#### Signature

```typescript
export declare const getFunctionMonoid: <M>(M: Monoid<M>) => <A = never>() => Monoid<(a: A) => M>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getJoinMonoid`~~

Use [`max`](#max) instead.




#### Signature

```typescript
export declare const getJoinMonoid: <A>(B: Bounded<A>) => Monoid<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getMeetMonoid`~~

Use [`min`](#min) instead.




#### Signature

```typescript
export declare const getMeetMonoid: <A>(B: Bounded<A>) => Monoid<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getStructMonoid`~~

Use [`struct`](#struct) instead.




#### Signature

```typescript
export declare const getStructMonoid: <O extends ReadonlyRecord<string, any>>(monoids: {
  [K in keyof O]: Monoid<O[K]>
}) => Monoid<O>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getTupleMonoid`~~

Use [`tuple`](#tuple) instead.




#### Signature

```typescript
export declare const getTupleMonoid: <T extends ReadonlyArray<Monoid<any>>>(
  ...monoids: T
) => Monoid<{
  [K in keyof T]: T[K] extends Se.Semigroup<infer A> ? A : never
}>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`monoidAll`~~

Use [`MonoidAll`](./boolean#monoidall) instead.




#### Signature

```typescript
export declare const monoidAll: Monoid<boolean>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`monoidAny`~~

Use [`MonoidAny`](./boolean#monoidany) instead.




#### Signature

```typescript
export declare const monoidAny: Monoid<boolean>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`monoidProduct`~~

Use [`MonoidProduct`](./number#monoidproduct) instead.




#### Signature

```typescript
export declare const monoidProduct: Monoid<number>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`monoidString`~~

Use [`Monoid`](./string#monoid) instead.




#### Signature

```typescript
export declare const monoidString: Monoid<string>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`monoidSum`~~

Use [`MonoidSum`](./number#monoidsum) instead.




#### Signature

```typescript
export declare const monoidSum: Monoid<number>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`monoidVoid`~~

Use [`Monoid`](./void#monoid) instead.




#### Signature

```typescript
export declare const monoidVoid: Monoid<void>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`

The dual of a `Monoid`, obtained by swapping the arguments of `concat`.




#### Signature

```typescript
export declare const reverse: <A>(M: Monoid<A>) => Monoid<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reverse } from '@fp-tx/core/Monoid'
import * as S from '@fp-tx/core/string'

assert.deepStrictEqual(reverse(S.Monoid).concat('a', 'b'), 'ba')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `struct`

Given a struct of monoids returns a monoid for the struct.




#### Signature

```typescript
export declare const struct: <A>(monoids: { [K in keyof A]: Monoid<A[K]> }) => Monoid<{
  readonly [K_1 in keyof A]: A[K_1]
}>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { struct } from '@fp-tx/core/Monoid'
import * as N from '@fp-tx/core/number'

interface Point {
  readonly x: number
  readonly y: number
}

const M = struct<Point>({
  x: N.MonoidSum,
  y: N.MonoidSum,
})

assert.deepStrictEqual(M.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tuple`

Given a tuple of monoids returns a monoid for the tuple.




#### Signature

```typescript
export declare const tuple: <A extends readonly unknown[]>(
  ...monoids: { [K in keyof A]: Monoid<A[K]> }
) => Monoid<Readonly<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { tuple } from '@fp-tx/core/Monoid'
import * as B from '@fp-tx/core/boolean'
import * as N from '@fp-tx/core/number'
import * as S from '@fp-tx/core/string'

const M1 = tuple(S.Monoid, N.MonoidSum)
assert.deepStrictEqual(M1.concat(['a', 1], ['b', 2]), ['ab', 3])

const M2 = tuple(S.Monoid, N.MonoidSum, B.MonoidAll)
assert.deepStrictEqual(M2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti