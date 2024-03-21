
# Compactable







### Model

* [Compactable](#compactable)
* [Compactable1](#compactable1)
* [Compactable2](#compactable2)
* [Compactable2C](#compactable2c)
* [Compactable3](#compactable3)
* [Compactable3C](#compactable3c)
* [Compactable4](#compactable4)

### Utilities

* ~~[CompactableComposition](#compactablecomposition)~~ (deprecated)
* ~~[CompactableComposition11](#compactablecomposition11)~~ (deprecated)
* ~~[CompactableComposition12](#compactablecomposition12)~~ (deprecated)
* ~~[CompactableComposition12C](#compactablecomposition12c)~~ (deprecated)
* ~~[CompactableComposition21](#compactablecomposition21)~~ (deprecated)
* ~~[CompactableComposition22](#compactablecomposition22)~~ (deprecated)
* ~~[CompactableComposition22C](#compactablecomposition22c)~~ (deprecated)
* ~~[CompactableComposition23](#compactablecomposition23)~~ (deprecated)
* ~~[CompactableComposition23C](#compactablecomposition23c)~~ (deprecated)
* ~~[CompactableComposition2C1](#compactablecomposition2c1)~~ (deprecated)
* ~~[Separated](#separated)~~ (deprecated)
* [compact](#compact)
* ~~[getCompactableComposition](#getcompactablecomposition)~~ (deprecated)
* [separate](#separate)

## Model


### `Compactable`




#### Signature

```typescript
export interface Compactable<F> {
  readonly compact: <A>(fa: HKT<F, Option<A>>) => HKT<F, A>
  readonly separate: <A, B>(fa: HKT<F, Either<A, B>>) => S.Separated<HKT<F, A>, HKT<F, B>>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Compactable1`




#### Signature

```typescript
export interface Compactable1<F extends URIS> {
  readonly compact: <A>(fa: Kind<F, Option<A>>) => Kind<F, A>
  readonly separate: <A, B>(fa: Kind<F, Either<A, B>>) => S.Separated<Kind<F, A>, Kind<F, B>>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Compactable2`




#### Signature

```typescript
export interface Compactable2<F extends URIS2> {
  readonly compact: <E, A>(fa: Kind2<F, E, Option<A>>) => Kind2<F, E, A>
  readonly separate: <E, A, B>(fa: Kind2<F, E, Either<A, B>>) => S.Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Compactable2C`




#### Signature

```typescript
export interface Compactable2C<F extends URIS2, E> {
  readonly _E: E
  readonly compact: <A>(fa: Kind2<F, E, Option<A>>) => Kind2<F, E, A>
  readonly separate: <A, B>(fa: Kind2<F, E, Either<A, B>>) => S.Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Compactable3`




#### Signature

```typescript
export interface Compactable3<F extends URIS3> {
  readonly compact: <R, E, A>(fa: Kind3<F, R, E, Option<A>>) => Kind3<F, R, E, A>
  readonly separate: <R, E, A, B>(fa: Kind3<F, R, E, Either<A, B>>) => S.Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Compactable3C`




#### Signature

```typescript
export interface Compactable3C<F extends URIS3, E> {
  readonly _E: E
  readonly compact: <R, A>(fa: Kind3<F, R, E, Option<A>>) => Kind3<F, R, E, A>
  readonly separate: <R, A, B>(fa: Kind3<F, R, E, Either<A, B>>) => S.Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Compactable4`




#### Signature

```typescript
export interface Compactable4<F extends URIS4> {
  readonly compact: <S, R, E, A>(fa: Kind4<F, S, R, E, Option<A>>) => Kind4<F, S, R, E, A>
  readonly separate: <S, R, E, A, B>(
    fa: Kind4<F, S, R, E, Either<A, B>>,
  ) => S.Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`CompactableComposition`~~




#### Signature

```typescript
export interface CompactableComposition<F, G> extends FunctorComposition<F, G> {
  readonly compact: <A>(fga: HKT<F, HKT<G, Option<A>>>) => HKT<F, HKT<G, A>>
  readonly separate: <A, B>(fge: HKT<F, HKT<G, Either<A, B>>>) => Separated<HKT<F, HKT<G, A>>, HKT<F, HKT<G, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition11`~~




#### Signature

```typescript
export interface CompactableComposition11<F extends URIS, G extends URIS> extends FunctorComposition11<F, G> {
  readonly compact: <A>(fga: Kind<F, Kind<G, Option<A>>>) => Kind<F, Kind<G, A>>
  readonly separate: <A, B>(fge: Kind<F, Kind<G, Either<A, B>>>) => Separated<Kind<F, Kind<G, A>>, Kind<F, Kind<G, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition12`~~




#### Signature

```typescript
export interface CompactableComposition12<F extends URIS, G extends URIS2> extends FunctorComposition12<F, G> {
  readonly compact: <E, A>(fga: Kind<F, Kind2<G, E, Option<A>>>) => Kind<F, Kind2<G, E, A>>
  readonly separate: <E, A, B>(
    fge: Kind<F, Kind2<G, E, Either<A, B>>>,
  ) => Separated<Kind<F, Kind2<G, E, A>>, Kind<F, Kind2<G, E, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition12C`~~




#### Signature

```typescript
export interface CompactableComposition12C<F extends URIS, G extends URIS2, E> extends FunctorComposition12C<F, G, E> {
  readonly compact: <A>(fga: Kind<F, Kind2<G, E, Option<A>>>) => Kind<F, Kind2<G, E, A>>
  readonly separate: <A, B>(
    fge: Kind<F, Kind2<G, E, Either<A, B>>>,
  ) => Separated<Kind<F, Kind2<G, E, A>>, Kind<F, Kind2<G, E, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition21`~~




#### Signature

```typescript
export interface CompactableComposition21<F extends URIS2, G extends URIS> extends FunctorComposition21<F, G> {
  readonly compact: <FE, A>(fga: Kind2<F, FE, Kind<G, Option<A>>>) => Kind2<F, FE, Kind<G, A>>
  readonly separate: <FE, A, B>(
    fge: Kind2<F, FE, Kind<G, Either<A, B>>>,
  ) => Separated<Kind2<F, FE, Kind<G, A>>, Kind2<F, FE, Kind<G, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition22`~~




#### Signature

```typescript
export interface CompactableComposition22<F extends URIS2, G extends URIS2> extends FunctorComposition22<F, G> {
  readonly compact: <FE, GE, A>(fga: Kind2<F, FE, Kind2<G, GE, Option<A>>>) => Kind2<F, FE, Kind2<G, GE, A>>
  readonly separate: <FE, GE, A, B>(
    fge: Kind2<F, FE, Kind2<G, GE, Either<A, B>>>,
  ) => Separated<Kind2<F, FE, Kind2<G, GE, A>>, Kind2<F, FE, Kind2<G, GE, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition22C`~~




#### Signature

```typescript
export interface CompactableComposition22C<F extends URIS2, G extends URIS2, E> extends FunctorComposition22C<F, G, E> {
  readonly compact: <FE, A>(fga: Kind2<F, FE, Kind2<G, E, Option<A>>>) => Kind2<F, FE, Kind2<G, E, A>>
  readonly separate: <FE, A, B>(
    fge: Kind2<F, FE, Kind2<G, E, Either<A, B>>>,
  ) => Separated<Kind2<F, FE, Kind2<G, E, A>>, Kind2<F, FE, Kind2<G, E, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition23`~~




#### Signature

```typescript
export interface CompactableComposition23<F extends URIS2, G extends URIS3> extends FunctorComposition23<F, G> {
  readonly compact: <R, FE, GE, A>(fga: Kind2<F, FE, Kind3<G, R, GE, Option<A>>>) => Kind2<F, FE, Kind3<G, R, GE, A>>
  readonly separate: <R, FE, GE, A, B>(
    fge: Kind2<F, FE, Kind3<G, R, GE, Either<A, B>>>,
  ) => Separated<Kind2<F, FE, Kind3<G, R, GE, A>>, Kind2<F, FE, Kind3<G, R, GE, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition23C`~~




#### Signature

```typescript
export interface CompactableComposition23C<F extends URIS2, G extends URIS3, E> extends FunctorComposition23C<F, G, E> {
  readonly compact: <FE, R, A>(fga: Kind2<F, FE, Kind3<G, R, E, Option<A>>>) => Kind2<F, FE, Kind3<G, R, E, A>>
  readonly separate: <FE, R, A, B>(
    fge: Kind2<F, FE, Kind3<G, R, E, Either<A, B>>>,
  ) => Separated<Kind2<F, FE, Kind3<G, R, E, A>>, Kind2<F, FE, Kind3<G, R, E, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`CompactableComposition2C1`~~




#### Signature

```typescript
export interface CompactableComposition2C1<F extends URIS2, G extends URIS, E> extends FunctorComposition2C1<F, G, E> {
  readonly compact: <A>(fga: Kind2<F, E, Kind<G, Option<A>>>) => Kind2<F, E, Kind<G, A>>
  readonly separate: <A, B>(
    fge: Kind2<F, E, Kind<G, Either<A, B>>>,
  ) => Separated<Kind2<F, E, Kind<G, A>>, Kind2<F, E, Kind<G, B>>>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`Separated`~~

Use [`Separated`](./Separated.ts.html#separated) instead.




#### Signature

```typescript
export interface Separated<A, B> {
  readonly left: A
  readonly right: B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `compact`

`compact` composition.




#### Signature

```typescript
export declare function compact<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Compactable2C<G, E>,
): <FE, A>(fa: Kind2<F, FE, Kind2<G, E, Option<A>>>) => Kind2<F, FE, Kind2<G, E, A>>



export declare function compact<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Compactable2C<G, E>,
): <A>(fa: Kind<F, Kind2<G, E, Option<A>>>) => Kind<F, Kind2<G, E, A>>



export declare function compact<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Compactable1<G>,
): <A>(fa: Kind<F, Kind<G, Option<A>>>) => Kind<F, Kind<G, A>>



export declare function compact<F, G>(
  F: Functor<F>,
  G: Compactable<G>,
): <A>(fa: HKT<F, HKT<G, Option<A>>>) => HKT<F, HKT<G, A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getCompactableComposition`~~

Use [`compact`](#compact) and [`separate`](#separate) instead.




#### Signature

```typescript
export declare function getCompactableComposition<F extends URIS2, G extends URIS3, E>(
  F: Functor2<F>,
  G: Compactable3C<G, E> & Functor3C<G, E>,
): CompactableComposition23C<F, G, E>



export declare function getCompactableComposition<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Compactable2C<G, E> & Functor2C<G, E>,
): CompactableComposition22C<F, G, E>



export declare function getCompactableComposition<F extends URIS2, G extends URIS2>(
  F: Functor2<F>,
  G: Compactable2<G> & Functor2<G>,
): CompactableComposition22<F, G>



export declare function getCompactableComposition<F extends URIS2, G extends URIS, E>(
  F: Functor2C<F, E>,
  G: Compactable1<G> & Functor1<G>,
): CompactableComposition2C1<F, G, E>



export declare function getCompactableComposition<F extends URIS2, G extends URIS>(
  F: Functor2<F>,
  G: Compactable1<G> & Functor1<G>,
): CompactableComposition21<F, G>



export declare function getCompactableComposition<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Compactable2C<G, E> & Functor2C<G, E>,
): CompactableComposition12<F, G>



export declare function getCompactableComposition<F extends URIS, G extends URIS2>(
  F: Functor1<F>,
  G: Compactable2<G> & Functor2<G>,
): CompactableComposition12<F, G>



export declare function getCompactableComposition<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Compactable1<G> & Functor1<G>,
): CompactableComposition11<F, G>



export declare function getCompactableComposition<F, G>(
  F: Functor<F>,
  G: Compactable<G> & Functor<G>,
): CompactableComposition<F, G>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `separate`

`separate` composition.




#### Signature

```typescript
export declare function separate<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  C: Compactable2C<G, E>,
  G: Functor2<G>,
): <FE, A, B>(
  fge: Kind2<F, FE, Kind2<G, E, Either<A, B>>>,
) => S.Separated<Kind2<F, FE, Kind2<G, E, A>>, Kind2<F, FE, Kind2<G, E, B>>>



export declare function separate<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  C: Compactable2C<G, E>,
  G: Functor2<G>,
): <A, B>(fge: Kind<F, Kind2<G, E, Either<A, B>>>) => S.Separated<Kind<F, Kind2<G, E, A>>, Kind<F, Kind2<G, E, B>>>



export declare function separate<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  C: Compactable1<G>,
  G: Functor1<G>,
): <A, B>(fge: Kind<F, Kind<G, Either<A, B>>>) => S.Separated<Kind<F, Kind<G, A>>, Kind<F, Kind<G, B>>>



export declare function separate<F, G>(
  F: Functor<F>,
  C: Compactable<G>,
  G: Functor<G>,
): <A, B>(fge: HKT<F, HKT<G, Either<A, B>>>) => S.Separated<HKT<F, HKT<G, A>>, HKT<F, HKT<G, B>>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti