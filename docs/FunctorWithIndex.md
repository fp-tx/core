
# FunctorWithIndex







### Model

* [FunctorWithIndex](#functorwithindex)
* [FunctorWithIndex1](#functorwithindex1)
* [FunctorWithIndex2](#functorwithindex2)
* [FunctorWithIndex2C](#functorwithindex2c)
* [FunctorWithIndex3](#functorwithindex3)
* [FunctorWithIndex3C](#functorwithindex3c)
* [FunctorWithIndex4](#functorwithindex4)

### Utilities

* ~~[FunctorWithIndexComposition](#functorwithindexcomposition)~~ (deprecated)
* ~~[FunctorWithIndexComposition11](#functorwithindexcomposition11)~~ (deprecated)
* ~~[FunctorWithIndexComposition12](#functorwithindexcomposition12)~~ (deprecated)
* ~~[FunctorWithIndexComposition12C](#functorwithindexcomposition12c)~~ (deprecated)
* ~~[FunctorWithIndexComposition21](#functorwithindexcomposition21)~~ (deprecated)
* ~~[FunctorWithIndexComposition22](#functorwithindexcomposition22)~~ (deprecated)
* ~~[FunctorWithIndexComposition22C](#functorwithindexcomposition22c)~~ (deprecated)
* ~~[FunctorWithIndexComposition2C1](#functorwithindexcomposition2c1)~~ (deprecated)
* ~~[getFunctorWithIndexComposition](#getfunctorwithindexcomposition)~~ (deprecated)
* [mapWithIndex](#mapwithindex)

## Model


### `FunctorWithIndex`




#### Signature

```typescript
export interface FunctorWithIndex<F, I> extends Functor<F> {
  readonly mapWithIndex: <A, B>(fa: HKT<F, A>, f: (i: I, a: A) => B) => HKT<F, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FunctorWithIndex1`




#### Signature

```typescript
export interface FunctorWithIndex1<F extends URIS, I> extends Functor1<F> {
  readonly mapWithIndex: <A, B>(fa: Kind<F, A>, f: (i: I, a: A) => B) => Kind<F, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FunctorWithIndex2`




#### Signature

```typescript
export interface FunctorWithIndex2<F extends URIS2, I> extends Functor2<F> {
  readonly mapWithIndex: <E, A, B>(fa: Kind2<F, E, A>, f: (i: I, a: A) => B) => Kind2<F, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FunctorWithIndex2C`




#### Signature

```typescript
export interface FunctorWithIndex2C<F extends URIS2, I, E> extends Functor2C<F, E> {
  readonly mapWithIndex: <A, B>(fa: Kind2<F, E, A>, f: (i: I, a: A) => B) => Kind2<F, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FunctorWithIndex3`




#### Signature

```typescript
export interface FunctorWithIndex3<F extends URIS3, I> extends Functor3<F> {
  readonly mapWithIndex: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (i: I, a: A) => B) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FunctorWithIndex3C`




#### Signature

```typescript
export interface FunctorWithIndex3C<F extends URIS3, I, E> extends Functor3C<F, E> {
  readonly mapWithIndex: <R, A, B>(fa: Kind3<F, R, E, A>, f: (i: I, a: A) => B) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FunctorWithIndex4`




#### Signature

```typescript
export interface FunctorWithIndex4<F extends URIS4, I> extends Functor4<F> {
  readonly mapWithIndex: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, f: (i: I, a: A) => B) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`FunctorWithIndexComposition`~~




#### Signature

```typescript
export interface FunctorWithIndexComposition<F, FI, G, GI> extends FunctorComposition<F, G> {
  readonly mapWithIndex: <A, B>(fga: HKT<F, HKT<G, A>>, f: (i: [FI, GI], a: A) => B) => HKT<F, HKT<G, B>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorWithIndexComposition11`~~




#### Signature

```typescript
export interface FunctorWithIndexComposition11<F extends URIS, FI, G extends URIS, GI>
  extends FunctorComposition11<F, G> {
  readonly mapWithIndex: <A, B>(fa: Kind<F, Kind<G, A>>, f: (i: [FI, GI], a: A) => B) => Kind<F, Kind<G, B>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorWithIndexComposition12`~~




#### Signature

```typescript
export interface FunctorWithIndexComposition12<F extends URIS, FI, G extends URIS2, GI>
  extends FunctorComposition12<F, G> {
  readonly mapWithIndex: <E, A, B>(fa: Kind<F, Kind2<G, E, A>>, f: (i: [FI, GI], a: A) => B) => Kind<F, Kind2<G, E, B>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorWithIndexComposition12C`~~




#### Signature

```typescript
export interface FunctorWithIndexComposition12C<F extends URIS, FI, G extends URIS2, GI, E>
  extends FunctorComposition12C<F, G, E> {
  readonly mapWithIndex: <A, B>(fa: Kind<F, Kind2<G, E, A>>, f: (i: [FI, GI], a: A) => B) => Kind<F, Kind2<G, E, B>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorWithIndexComposition21`~~




#### Signature

```typescript
export interface FunctorWithIndexComposition21<F extends URIS2, FI, G extends URIS, GI>
  extends FunctorComposition21<F, G> {
  readonly mapWithIndex: <E, A, B>(fa: Kind2<F, E, Kind<G, A>>, f: (i: [FI, GI], a: A) => B) => Kind2<F, E, Kind<G, B>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorWithIndexComposition22`~~




#### Signature

```typescript
export interface FunctorWithIndexComposition22<F extends URIS2, FI, G extends URIS2, GI>
  extends FunctorComposition22<F, G> {
  readonly mapWithIndex: <FE, GE, A, B>(
    fa: Kind2<F, FE, Kind2<G, GE, A>>,
    f: (i: [FI, GI], a: A) => B,
  ) => Kind2<F, FE, Kind2<G, GE, B>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorWithIndexComposition22C`~~




#### Signature

```typescript
export interface FunctorWithIndexComposition22C<F extends URIS2, FI, G extends URIS2, GI, E>
  extends FunctorComposition22C<F, G, E> {
  readonly mapWithIndex: <FE, A, B>(
    fa: Kind2<F, FE, Kind2<G, E, A>>,
    f: (i: [FI, GI], a: A) => B,
  ) => Kind2<F, FE, Kind2<G, E, B>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorWithIndexComposition2C1`~~




#### Signature

```typescript
export interface FunctorWithIndexComposition2C1<F extends URIS2, FI, G extends URIS, GI, E>
  extends FunctorComposition2C1<F, G, E> {
  readonly mapWithIndex: <A, B>(fa: Kind2<F, E, Kind<G, A>>, f: (i: [FI, GI], a: A) => B) => Kind2<F, E, Kind<G, B>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFunctorWithIndexComposition`~~

Use [`mapWithIndex`](#mapwithindex) instead.




#### Signature

```typescript
export declare function getFunctorWithIndexComposition<F extends URIS2, FI, G extends URIS2, GI, E>(
  F: FunctorWithIndex2<F, FI>,
  G: FunctorWithIndex2C<G, FI, E>,
): FunctorWithIndexComposition22C<F, FI, G, GI, E>



export declare function getFunctorWithIndexComposition<F extends URIS2, FI, G extends URIS2, GI>(
  F: FunctorWithIndex2<F, FI>,
  G: FunctorWithIndex2<G, FI>,
): FunctorWithIndexComposition22<F, FI, G, GI>



export declare function getFunctorWithIndexComposition<F extends URIS2, FI, G extends URIS, GI, E>(
  F: FunctorWithIndex2C<F, FI, E>,
  G: FunctorWithIndex1<G, GI>,
): FunctorWithIndexComposition2C1<F, FI, G, GI, E>



export declare function getFunctorWithIndexComposition<F extends URIS2, FI, G extends URIS, GI>(
  F: FunctorWithIndex2<F, FI>,
  G: FunctorWithIndex1<G, GI>,
): FunctorWithIndexComposition21<F, FI, G, GI>



export declare function getFunctorWithIndexComposition<F extends URIS, FI, G extends URIS2, GI, E>(
  F: FunctorWithIndex1<F, FI>,
  G: FunctorWithIndex2C<G, GI, E>,
): FunctorWithIndexComposition12C<F, FI, G, GI, E>



export declare function getFunctorWithIndexComposition<F extends URIS, FI, G extends URIS2, GI>(
  F: FunctorWithIndex1<F, FI>,
  G: FunctorWithIndex2<G, GI>,
): FunctorWithIndexComposition12<F, FI, G, GI>



export declare function getFunctorWithIndexComposition<F extends URIS, FI, G extends URIS, GI>(
  F: FunctorWithIndex1<F, FI>,
  G: FunctorWithIndex1<G, GI>,
): FunctorWithIndexComposition11<F, FI, G, GI>



export declare function getFunctorWithIndexComposition<F, FI, G, GI>(
  F: FunctorWithIndex<F, FI>,
  G: FunctorWithIndex<G, GI>,
): FunctorWithIndexComposition<F, FI, G, GI>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapWithIndex`

`mapWithIndex` composition.




#### Signature

```typescript
export declare function mapWithIndex<F extends URIS, I, G extends URIS, J>(
  F: FunctorWithIndex1<F, I>,
  G: FunctorWithIndex1<G, J>,
): <A, B>(f: (ij: readonly [I, J], a: A) => B) => (fa: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>



export declare function mapWithIndex<F, I, G, J>(
  F: FunctorWithIndex<F, I>,
  G: FunctorWithIndex<G, J>,
): <A, B>(f: (ij: readonly [I, J], a: A) => B) => (fa: HKT<F, HKT<G, A>>) => HKT<F, HKT<G, B>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti