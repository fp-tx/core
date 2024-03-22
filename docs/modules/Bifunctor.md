
# Bifunctor







### Model

* [Bifunctor](#bifunctor)
* [Bifunctor2](#bifunctor2)
* [Bifunctor2C](#bifunctor2c)
* [Bifunctor3](#bifunctor3)
* [Bifunctor3C](#bifunctor3c)
* [Bifunctor4](#bifunctor4)

## Model


### `Bifunctor`




#### Signature

```typescript
export interface Bifunctor<F> {
  readonly bimap: <E, A, G, B>(fea: HKT2<F, E, A>, f: (e: E) => G, g: (a: A) => B) => HKT2<F, G, B>
  readonly mapLeft: <E, A, G>(fea: HKT2<F, E, A>, f: (e: E) => G) => HKT2<F, G, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Bifunctor2`




#### Signature

```typescript
export interface Bifunctor2<F extends URIS2> {
  readonly bimap: <E, A, G, B>(fea: Kind2<F, E, A>, f: (e: E) => G, g: (a: A) => B) => Kind2<F, G, B>
  readonly mapLeft: <E, A, G>(fea: Kind2<F, E, A>, f: (e: E) => G) => Kind2<F, G, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Bifunctor2C`




#### Signature

```typescript
export interface Bifunctor2C<F extends URIS2, E> {
  readonly _E: E
  readonly bimap: <A, G, B>(fea: Kind2<F, E, A>, f: (e: E) => G, g: (a: A) => B) => Kind2<F, G, B>
  readonly mapLeft: <A, M>(fea: Kind2<F, E, A>, f: (e: E) => M) => Kind2<F, M, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Bifunctor3`




#### Signature

```typescript
export interface Bifunctor3<F extends URIS3> {
  readonly bimap: <R, E, A, G, B>(fea: Kind3<F, R, E, A>, f: (e: E) => G, g: (a: A) => B) => Kind3<F, R, G, B>
  readonly mapLeft: <R, E, A, G>(fea: Kind3<F, R, E, A>, f: (e: E) => G) => Kind3<F, R, G, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Bifunctor3C`




#### Signature

```typescript
export interface Bifunctor3C<F extends URIS3, E> {
  readonly _E: E
  readonly bimap: <R, A, G, B>(fea: Kind3<F, R, E, A>, f: (e: E) => G, g: (a: A) => B) => Kind3<F, R, G, B>
  readonly mapLeft: <R, A, G>(fea: Kind3<F, R, E, A>, f: (e: E) => G) => Kind3<F, R, G, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Bifunctor4`




#### Signature

```typescript
export interface Bifunctor4<F extends URIS4> {
  readonly bimap: <S, R, E, A, G, B>(fea: Kind4<F, S, R, E, A>, f: (e: E) => G, g: (a: A) => B) => Kind4<F, S, R, G, B>
  readonly mapLeft: <S, R, E, A, G>(fea: Kind4<F, S, R, E, A>, f: (e: E) => G) => Kind4<F, S, R, G, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti