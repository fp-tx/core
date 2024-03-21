
# Number







### Instances

* [Bounded](#bounded)
* [Eq](#eq)
* [Field](#field)
* [MagmaSub](#magmasub)
* [MonoidProduct](#monoidproduct)
* [MonoidSum](#monoidsum)
* [Ord](#ord)
* [SemigroupProduct](#semigroupproduct)
* [SemigroupSum](#semigroupsum)
* [Show](#show)

### Refinements

* [isNumber](#isnumber)

## Instances


### `Bounded`




#### Signature

```typescript
export declare const Bounded: B.Bounded<number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Eq`




#### Signature

```typescript
export declare const Eq: E.Eq<number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Field`




#### Signature

```typescript
export declare const Field: F.Field<number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MagmaSub`




#### Signature

```typescript
export declare const MagmaSub: Magma<number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonoidProduct`

`number` monoid under multiplication.


The `empty` value is `1`.




#### Signature

```typescript
export declare const MonoidProduct: Monoid<number>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { MonoidProduct } from '@fp-tx/core/number'

assert.deepStrictEqual(MonoidProduct.concat(2, MonoidProduct.empty), 2)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonoidSum`

`number` monoid under addition.


The `empty` value is `0`.




#### Signature

```typescript
export declare const MonoidSum: Monoid<number>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { MonoidSum } from '@fp-tx/core/number'

assert.deepStrictEqual(MonoidSum.concat(2, MonoidSum.empty), 2)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Ord`




#### Signature

```typescript
export declare const Ord: O.Ord<number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `SemigroupProduct`

`number` semigroup under multiplication.




#### Signature

```typescript
export declare const SemigroupProduct: Semigroup<number>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { SemigroupProduct } from '@fp-tx/core/number'

assert.deepStrictEqual(SemigroupProduct.concat(2, 3), 6)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `SemigroupSum`

`number` semigroup under addition.




#### Signature

```typescript
export declare const SemigroupSum: Semigroup<number>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { SemigroupSum } from '@fp-tx/core/number'

assert.deepStrictEqual(SemigroupSum.concat(2, 3), 5)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Show`




#### Signature

```typescript
export declare const Show: S.Show<number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Refinements


### `isNumber`




#### Signature

```typescript
export declare const isNumber: Refinement<unknown, number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti