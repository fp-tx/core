
# Endomorphism







### Instances

* [getMonoid](#getmonoid)
* [getSemigroup](#getsemigroup)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [Endomorphism](#endomorphism)

## Instances


### `getMonoid`

Endomorphism form a `Monoid` where the `empty` value is the `identity` function.




#### Signature

```typescript
export declare const getMonoid: <A = never>() => Monoid<Endomorphism<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`

Endomorphism form a `Semigroup` where the `concat` operation is the usual function composition.




#### Signature

```typescript
export declare const getSemigroup: <A = never>() => Semigroup<Endomorphism<A>>
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
export declare const URI = 'Endomorphism'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `Endomorphism`




#### Signature

```typescript
export interface Endomorphism<A> {
  (a: A): A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti