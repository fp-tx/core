
# MonadThrow







### Model

* [MonadThrow](#monadthrow)
* [MonadThrow1](#monadthrow1)
* [MonadThrow2](#monadthrow2)
* [MonadThrow2C](#monadthrow2c)
* [MonadThrow3](#monadthrow3)
* [MonadThrow3C](#monadthrow3c)
* [MonadThrow4](#monadthrow4)

## Model


### `MonadThrow`




#### Signature

```typescript
export interface MonadThrow<M> extends Monad<M> {
  readonly throwError: <E, A>(e: E) => HKT<M, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow1`




#### Signature

```typescript
export interface MonadThrow1<M extends URIS> extends Monad1<M> {
  readonly throwError: <E, A>(e: E) => Kind<M, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow2`




#### Signature

```typescript
export interface MonadThrow2<M extends URIS2> extends Monad2<M> {
  readonly throwError: <E, A>(e: E) => Kind2<M, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow2C`




#### Signature

```typescript
export interface MonadThrow2C<M extends URIS2, E> extends Monad2C<M, E> {
  readonly throwError: <A>(e: E) => Kind2<M, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow3`




#### Signature

```typescript
export interface MonadThrow3<M extends URIS3> extends Monad3<M> {
  readonly throwError: <R, E, A>(e: E) => Kind3<M, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow3C`




#### Signature

```typescript
export interface MonadThrow3C<M extends URIS3, E> extends Monad3C<M, E> {
  readonly throwError: <R, A>(e: E) => Kind3<M, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow4`




#### Signature

```typescript
export interface MonadThrow4<M extends URIS4> extends Monad4<M> {
  readonly throwError: <S, R, E, A>(e: E) => Kind4<M, S, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti