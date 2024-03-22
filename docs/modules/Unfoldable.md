
# Unfoldable







### Model

* [Unfoldable](#unfoldable)
* [Unfoldable1](#unfoldable1)
* [Unfoldable2](#unfoldable2)
* [Unfoldable2C](#unfoldable2c)
* [Unfoldable3](#unfoldable3)
* [Unfoldable3C](#unfoldable3c)
* [Unfoldable4](#unfoldable4)

## Model


### `Unfoldable`




#### Signature

```typescript
export interface Unfoldable<F> {
  readonly unfold: <A, B>(b: B, f: (b: B) => Option<[A, B]>) => HKT<F, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Unfoldable1`




#### Signature

```typescript
export interface Unfoldable1<F extends URIS> {
  readonly unfold: <A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind<F, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Unfoldable2`




#### Signature

```typescript
export interface Unfoldable2<F extends URIS2> {
  readonly unfold: <E, A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Unfoldable2C`




#### Signature

```typescript
export interface Unfoldable2C<F extends URIS2, E> {
  readonly _E: E
  readonly unfold: <A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Unfoldable3`




#### Signature

```typescript
export interface Unfoldable3<F extends URIS3> {
  readonly unfold: <R, E, A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Unfoldable3C`




#### Signature

```typescript
export interface Unfoldable3C<F extends URIS3, E> {
  readonly _E: E
  readonly unfold: <R, A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Unfoldable4`




#### Signature

```typescript
export interface Unfoldable4<F extends URIS4> {
  readonly unfold: <S, R, E, A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind4<F, S, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti