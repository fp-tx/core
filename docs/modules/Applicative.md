
# Applicative







### Model

* [Applicative](#applicative)
* [Applicative1](#applicative1)
* [Applicative2](#applicative2)
* [Applicative2C](#applicative2c)
* [Applicative3](#applicative3)
* [Applicative3C](#applicative3c)
* [Applicative4](#applicative4)

### Utilities

* ~~[ApplicativeComposition](#applicativecomposition)~~ (deprecated)
* ~~[ApplicativeComposition11](#applicativecomposition11)~~ (deprecated)
* ~~[ApplicativeComposition12](#applicativecomposition12)~~ (deprecated)
* ~~[ApplicativeComposition12C](#applicativecomposition12c)~~ (deprecated)
* ~~[ApplicativeComposition21](#applicativecomposition21)~~ (deprecated)
* ~~[ApplicativeComposition22](#applicativecomposition22)~~ (deprecated)
* ~~[ApplicativeComposition22C](#applicativecomposition22c)~~ (deprecated)
* ~~[ApplicativeComposition2C1](#applicativecomposition2c1)~~ (deprecated)
* ~~[ApplicativeCompositionHKT1](#applicativecompositionhkt1)~~ (deprecated)
* ~~[ApplicativeCompositionHKT2](#applicativecompositionhkt2)~~ (deprecated)
* ~~[ApplicativeCompositionHKT2C](#applicativecompositionhkt2c)~~ (deprecated)
* ~~[getApplicativeComposition](#getapplicativecomposition)~~ (deprecated)
* [getApplicativeMonoid](#getapplicativemonoid)

## Model


### `Applicative`




#### Signature

```typescript
export interface Applicative<F> extends Apply<F>, Pointed<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative1`




#### Signature

```typescript
export interface Applicative1<F extends URIS> extends Apply1<F>, Pointed1<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative2`




#### Signature

```typescript
export interface Applicative2<F extends URIS2> extends Apply2<F>, Pointed2<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative2C`




#### Signature

```typescript
export interface Applicative2C<F extends URIS2, E> extends Apply2C<F, E>, Pointed2C<F, E> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative3`




#### Signature

```typescript
export interface Applicative3<F extends URIS3> extends Apply3<F>, Pointed3<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative3C`




#### Signature

```typescript
export interface Applicative3C<F extends URIS3, E> extends Apply3C<F, E>, Pointed3C<F, E> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative4`




#### Signature

```typescript
export interface Applicative4<F extends URIS4> extends Apply4<F>, Pointed4<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`ApplicativeComposition`~~




#### Signature

```typescript
export interface ApplicativeComposition<F, G> extends FunctorComposition<F, G> {
  readonly ap: <A, B>(fgab: HKT<F, HKT<G, (a: A) => B>>, fga: HKT<F, HKT<G, A>>) => HKT<F, HKT<G, B>>
  readonly of: <A>(a: A) => HKT<F, HKT<G, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeComposition11`~~




#### Signature

```typescript
export interface ApplicativeComposition11<F extends URIS, G extends URIS> extends FunctorComposition11<F, G> {
  readonly ap: <A, B>(fgab: Kind<F, Kind<G, (a: A) => B>>, fga: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>
  readonly of: <A>(a: A) => Kind<F, Kind<G, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeComposition12`~~




#### Signature

```typescript
export interface ApplicativeComposition12<F extends URIS, G extends URIS2> extends FunctorComposition12<F, G> {
  readonly ap: <E, A, B>(
    fgab: Kind<F, Kind2<G, E, (a: A) => B>>,
    fga: Kind<F, Kind2<G, E, A>>,
  ) => Kind<F, Kind2<G, E, B>>
  readonly of: <E, A>(a: A) => Kind<F, Kind2<G, E, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeComposition12C`~~




#### Signature

```typescript
export interface ApplicativeComposition12C<F extends URIS, G extends URIS2, E> extends FunctorComposition12C<F, G, E> {
  readonly ap: <A, B>(fgab: Kind<F, Kind2<G, E, (a: A) => B>>, fga: Kind<F, Kind2<G, E, A>>) => Kind<F, Kind2<G, E, B>>
  readonly of: <A>(a: A) => Kind<F, Kind2<G, E, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeComposition21`~~




#### Signature

```typescript
export interface ApplicativeComposition21<F extends URIS2, G extends URIS> extends FunctorComposition21<F, G> {
  readonly ap: <E, A, B>(
    fgab: Kind2<F, E, Kind<G, (a: A) => B>>,
    fga: Kind2<F, E, Kind<G, A>>,
  ) => Kind2<F, E, Kind<G, B>>
  readonly of: <E, A>(a: A) => Kind2<F, E, Kind<G, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeComposition22`~~




#### Signature

```typescript
export interface ApplicativeComposition22<F extends URIS2, G extends URIS2> extends FunctorComposition22<F, G> {
  readonly ap: <FE, GE, A, B>(
    fgab: Kind2<F, FE, Kind2<G, GE, (a: A) => B>>,
    fga: Kind2<F, FE, Kind2<G, GE, A>>,
  ) => Kind2<F, FE, Kind2<G, GE, B>>
  readonly of: <FE, GE, A>(a: A) => Kind2<F, FE, Kind2<G, GE, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeComposition22C`~~




#### Signature

```typescript
export interface ApplicativeComposition22C<F extends URIS2, G extends URIS2, E> extends FunctorComposition22C<F, G, E> {
  readonly ap: <FE, A, B>(
    fgab: Kind2<F, FE, Kind2<G, E, (a: A) => B>>,
    fga: Kind2<F, FE, Kind2<G, E, A>>,
  ) => Kind2<F, FE, Kind2<G, E, B>>
  readonly of: <FE, A>(a: A) => Kind2<F, FE, Kind2<G, E, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeComposition2C1`~~




#### Signature

```typescript
export interface ApplicativeComposition2C1<F extends URIS2, G extends URIS, E> extends FunctorComposition2C1<F, G, E> {
  readonly ap: <A, B>(fgab: Kind2<F, E, Kind<G, (a: A) => B>>, fga: Kind2<F, E, Kind<G, A>>) => Kind2<F, E, Kind<G, B>>
  readonly of: <A>(a: A) => Kind2<F, E, Kind<G, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeCompositionHKT1`~~




#### Signature

```typescript
export interface ApplicativeCompositionHKT1<F, G extends URIS> extends FunctorCompositionHKT1<F, G> {
  readonly ap: <A, B>(fgab: HKT<F, Kind<G, (a: A) => B>>, fga: HKT<F, Kind<G, A>>) => HKT<F, Kind<G, B>>
  readonly of: <A>(a: A) => HKT<F, Kind<G, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeCompositionHKT2`~~




#### Signature

```typescript
export interface ApplicativeCompositionHKT2<F, G extends URIS2> extends FunctorCompositionHKT2<F, G> {
  readonly ap: <E, A, B>(fgab: HKT<F, Kind2<G, E, (a: A) => B>>, fga: HKT<F, Kind2<G, E, A>>) => HKT<F, Kind2<G, E, B>>
  readonly of: <E, A>(a: A) => HKT<F, Kind2<G, E, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ApplicativeCompositionHKT2C`~~




#### Signature

```typescript
export interface ApplicativeCompositionHKT2C<F, G extends URIS2, E> extends FunctorCompositionHKT2C<F, G, E> {
  readonly ap: <A, B>(fgab: HKT<F, Kind2<G, E, (a: A) => B>>, fga: HKT<F, Kind2<G, E, A>>) => HKT<F, Kind2<G, E, B>>
  readonly of: <A>(a: A) => HKT<F, Kind2<G, E, A>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getApplicativeComposition`~~

Use [`ap`](./Apply#ap) instead.




#### Signature

```typescript
export declare function getApplicativeComposition<F extends URIS2, G extends URIS2, E>(
  F: Applicative2<F>,
  G: Applicative2C<G, E>,
): ApplicativeComposition22C<F, G, E>



export declare function getApplicativeComposition<F, G extends URIS>(
  F: Applicative<F>,
  G: Applicative1<G>,
): ApplicativeCompositionHKT1<F, G>



export declare function getApplicativeComposition<F, G>(
  F: Applicative<F>,
  G: Applicative<G>,
): ApplicativeComposition<F, G>



export declare function getApplicativeComposition<F extends URIS2, G extends URIS2>(
  F: Applicative2<F>,
  G: Applicative2<G>,
): ApplicativeComposition22<F, G>



export declare function getApplicativeComposition<F extends URIS2, G extends URIS2, E>(
  F: Applicative2<F>,
  G: Applicative2C<G, E>,
): ApplicativeComposition22C<F, G, E>



export declare function getApplicativeComposition<F extends URIS2, G extends URIS>(
  F: Applicative2<F>,
  G: Applicative1<G>,
): ApplicativeComposition21<F, G>



export declare function getApplicativeComposition<F extends URIS, G extends URIS2>(
  F: Applicative1<F>,
  G: Applicative2<G>,
): ApplicativeComposition12<F, G>



export declare function getApplicativeComposition<F extends URIS, G extends URIS2, E>(
  F: Applicative1<F>,
  G: Applicative2C<G, E>,
): ApplicativeComposition12C<F, G, E>



export declare function getApplicativeComposition<F extends URIS, G extends URIS>(
  F: Applicative1<F>,
  G: Applicative1<G>,
): ApplicativeComposition11<F, G>



export declare function getApplicativeComposition<F, G extends URIS2>(
  F: Applicative<F>,
  G: Applicative2<G>,
): ApplicativeCompositionHKT2<F, G>



export declare function getApplicativeComposition<F, G extends URIS2, E>(
  F: Applicative<F>,
  G: Applicative2C<G, E>,
): ApplicativeCompositionHKT2C<F, G, E>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicativeMonoid`

Lift a monoid into 'F', the inner values are concatenated using the provided `Monoid`.




#### Signature

```typescript
export declare function getApplicativeMonoid<F extends URIS4>(
  F: Applicative4<F>,
): <A, S, R, E>(M: Monoid<A>) => Monoid<Kind4<F, S, R, E, A>>



export declare function getApplicativeMonoid<F extends URIS3>(
  F: Applicative3<F>,
): <A, R, E>(M: Monoid<A>) => Monoid<Kind3<F, R, E, A>>



export declare function getApplicativeMonoid<F extends URIS3, E>(
  F: Applicative3C<F, E>,
): <A, R>(M: Monoid<A>) => Monoid<Kind3<F, R, E, A>>



export declare function getApplicativeMonoid<F extends URIS2>(
  F: Applicative2<F>,
): <A, E>(M: Monoid<A>) => Monoid<Kind2<F, E, A>>



export declare function getApplicativeMonoid<F extends URIS2, E>(
  F: Applicative2C<F, E>,
): <A>(M: Monoid<A>) => Monoid<Kind2<F, E, A>>



export declare function getApplicativeMonoid<F extends URIS>(
  F: Applicative1<F>,
): <A>(M: Monoid<A>) => Monoid<Kind<F, A>>



export declare function getApplicativeMonoid<F>(F: Applicative<F>): <A>(M: Monoid<A>) => Monoid<HKT<F, A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti