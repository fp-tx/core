
# Field







### Model

* [Field](#field)

### Utilities

* ~~[fieldNumber](#fieldnumber)~~ (deprecated)
* [gcd](#gcd)
* [lcm](#lcm)

## Model


### `Field`




#### Signature

```typescript
export interface Field<A> extends Ring<A> {
  readonly degree: (a: A) => number
  readonly div: (x: A, y: A) => A
  readonly mod: (x: A, y: A) => A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`fieldNumber`~~

Use [`Field`](./number#field) instead.




#### Signature

```typescript
export declare const fieldNumber: Field<number>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `gcd`

The _greatest common divisor_ of two values




#### Signature

```typescript
export declare function gcd<A>(E: Eq<A>, field: Field<A>): (x: A, y: A) => A

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `lcm`

The _least common multiple_ of two values




#### Signature

```typescript
export declare function lcm<A>(E: Eq<A>, F: Field<A>): (x: A, y: A) => A

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti