
# Pointed







### Model

* [Pointed](#pointed)
* [Pointed1](#pointed1)
* [Pointed2](#pointed2)
* [Pointed2C](#pointed2c)
* [Pointed3](#pointed3)
* [Pointed3C](#pointed3c)
* [Pointed4](#pointed4)

## Model


### `Pointed`




#### Signature

```typescript
export interface Pointed<F> {
  readonly of: <A>(a: A) => HKT<F, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed1`




#### Signature

```typescript
export interface Pointed1<F extends URIS> {
  readonly of: <A>(a: A) => Kind<F, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed2`




#### Signature

```typescript
export interface Pointed2<F extends URIS2> {
  readonly of: <E, A>(a: A) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed2C`




#### Signature

```typescript
export interface Pointed2C<F extends URIS2, E> {
  readonly _E: E
  readonly of: <A>(a: A) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed3`




#### Signature

```typescript
export interface Pointed3<F extends URIS3> {
  readonly of: <R, E, A>(a: A) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed3C`




#### Signature

```typescript
export interface Pointed3C<F extends URIS3, E> {
  readonly _E: E
  readonly of: <R, A>(a: A) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed4`




#### Signature

```typescript
export interface Pointed4<F extends URIS4> {
  readonly of: <S, R, E, A>(a: A) => Kind4<F, S, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti