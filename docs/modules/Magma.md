
# Magma







### Model

* [Magma](#magma)

### Utilities

* [concatAll](#concatall)
* [endo](#endo)
* [filterFirst](#filterfirst)
* [filterSecond](#filtersecond)
* [reverse](#reverse)

## Model


### `Magma`




#### Signature

```typescript
export interface Magma<A> {
  readonly concat: (x: A, y: A) => A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `concatAll`

Given a sequence of `as`, concat them and return the total.


If `as` is empty, return the provided `startWith` value.




#### Signature

```typescript
export declare const concatAll: <A>(M: Magma<A>) => (startWith: A) => (as: readonly A[]) => A
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { concatAll } from '@fp-tx/core/Magma'
import * as N from '@fp-tx/core/number'

const subAll = concatAll(N.MagmaSub)(0)

assert.deepStrictEqual(subAll([1, 2, 3]), -6)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `endo`




#### Signature

```typescript
export declare const endo: <A>(f: Endomorphism<A>) => (M: Magma<A>) => Magma<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterFirst`




#### Signature

```typescript
export declare const filterFirst: <A>(predicate: Predicate<A>) => (M: Magma<A>) => Magma<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterSecond`




#### Signature

```typescript
export declare const filterSecond: <A>(predicate: Predicate<A>) => (M: Magma<A>) => Magma<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`

The dual of a `Magma`, obtained by swapping the arguments of `concat`.




#### Signature

```typescript
export declare const reverse: <A>(M: Magma<A>) => Magma<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { reverse, concatAll } from '@fp-tx/core/Magma'
import * as N from '@fp-tx/core/number'

const subAll = concatAll(reverse(N.MagmaSub))(0)

assert.deepStrictEqual(subAll([1, 2, 3]), 2)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti