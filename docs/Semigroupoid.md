
# Semigroupoid







### Model

* [Semigroupoid](#semigroupoid)
* [Semigroupoid2](#semigroupoid2)
* [Semigroupoid2C](#semigroupoid2c)
* [Semigroupoid3](#semigroupoid3)
* [Semigroupoid3C](#semigroupoid3c)
* [Semigroupoid4](#semigroupoid4)

## Model


### `Semigroupoid`




#### Signature

```typescript
export interface Semigroupoid<F> {
  readonly compose: <A, B, C>(bc: HKT2<F, B, C>, ab: HKT2<F, A, B>) => HKT2<F, A, C>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Semigroupoid2`




#### Signature

```typescript
export interface Semigroupoid2<F extends URIS2> {
  readonly compose: <A, B, C>(ab: Kind2<F, B, C>, la: Kind2<F, A, B>) => Kind2<F, A, C>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Semigroupoid2C`




#### Signature

```typescript
export interface Semigroupoid2C<F extends URIS2, A> {
  readonly _E: A
  readonly compose: <B, C>(ab: Kind2<F, B, C>, la: Kind2<F, A, B>) => Kind2<F, A, C>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Semigroupoid3`




#### Signature

```typescript
export interface Semigroupoid3<F extends URIS3> {
  readonly compose: <R, A, B, C>(ab: Kind3<F, R, B, C>, la: Kind3<F, R, A, B>) => Kind3<F, R, A, C>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Semigroupoid3C`




#### Signature

```typescript
export interface Semigroupoid3C<F extends URIS3, A> {
  readonly _E: A
  readonly compose: <R, B, C>(ab: Kind3<F, R, B, C>, la: Kind3<F, R, A, B>) => Kind3<F, R, A, C>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Semigroupoid4`




#### Signature

```typescript
export interface Semigroupoid4<F extends URIS4> {
  readonly compose: <S, R, A, B, C>(ab: Kind4<F, S, R, B, C>, la: Kind4<F, S, R, A, B>) => Kind4<F, S, R, A, C>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti