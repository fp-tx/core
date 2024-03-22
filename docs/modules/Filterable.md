
# Filterable







### Model

* [Filterable](#filterable)
* [Filterable1](#filterable1)
* [Filterable2](#filterable2)
* [Filterable2C](#filterable2c)
* [Filterable3](#filterable3)
* [Filterable3C](#filterable3c)
* [Filterable4](#filterable4)

### Utilities

* [Filter](#filter)
* [Filter1](#filter1)
* [Filter2](#filter2)
* [Filter2C](#filter2c)
* [Filter3](#filter3)
* [Filter3C](#filter3c)
* [Filter4](#filter4)
* ~~[FilterableComposition](#filterablecomposition)~~ (deprecated)
* ~~[FilterableComposition11](#filterablecomposition11)~~ (deprecated)
* ~~[FilterableComposition12](#filterablecomposition12)~~ (deprecated)
* ~~[FilterableComposition12C](#filterablecomposition12c)~~ (deprecated)
* ~~[FilterableComposition21](#filterablecomposition21)~~ (deprecated)
* ~~[FilterableComposition22](#filterablecomposition22)~~ (deprecated)
* ~~[FilterableComposition22C](#filterablecomposition22c)~~ (deprecated)
* ~~[FilterableComposition23C](#filterablecomposition23c)~~ (deprecated)
* ~~[FilterableComposition2C1](#filterablecomposition2c1)~~ (deprecated)
* [Partition](#partition)
* [Partition1](#partition1)
* [Partition2](#partition2)
* [Partition2C](#partition2c)
* [Partition3](#partition3)
* [Partition3C](#partition3c)
* [Partition4](#partition4)
* [filter](#filter)
* [filterMap](#filtermap)
* ~~[getFilterableComposition](#getfilterablecomposition)~~ (deprecated)
* [partition](#partition)
* [partitionMap](#partitionmap)

## Model


### `Filterable`




#### Signature

```typescript
export interface Filterable<F> extends Functor<F>, Compactable<F> {
  readonly filter: Filter<F>
  readonly filterMap: <A, B>(fa: HKT<F, A>, f: (a: A) => Option<B>) => HKT<F, B>
  readonly partition: Partition<F>
  readonly partitionMap: <A, B, C>(fa: HKT<F, A>, f: (a: A) => Either<B, C>) => Separated<HKT<F, B>, HKT<F, C>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable1`




#### Signature

```typescript
export interface Filterable1<F extends URIS> extends Functor1<F>, Compactable1<F> {
  readonly filter: Filter1<F>
  readonly filterMap: <A, B>(fa: Kind<F, A>, f: (a: A) => Option<B>) => Kind<F, B>
  readonly partition: Partition1<F>
  readonly partitionMap: <A, B, C>(fa: Kind<F, A>, f: (a: A) => Either<B, C>) => Separated<Kind<F, B>, Kind<F, C>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable2`




#### Signature

```typescript
export interface Filterable2<F extends URIS2> extends Functor2<F>, Compactable2<F> {
  readonly filter: Filter2<F>
  readonly filterMap: <E, A, B>(fa: Kind2<F, E, A>, f: (a: A) => Option<B>) => Kind2<F, E, B>
  readonly partition: Partition2<F>
  readonly partitionMap: <E, A, B, C>(
    fa: Kind2<F, E, A>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable2C`




#### Signature

```typescript
export interface Filterable2C<F extends URIS2, E> extends Functor2C<F, E>, Compactable2C<F, E> {
  readonly filter: Filter2C<F, E>
  readonly filterMap: <A, B>(fa: Kind2<F, E, A>, f: (a: A) => Option<B>) => Kind2<F, E, B>
  readonly partition: Partition2C<F, E>
  readonly partitionMap: <A, B, C>(
    fa: Kind2<F, E, A>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable3`




#### Signature

```typescript
export interface Filterable3<F extends URIS3> extends Functor3<F>, Compactable3<F> {
  readonly filter: Filter3<F>
  readonly filterMap: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => Option<B>) => Kind3<F, R, E, B>
  readonly partition: Partition3<F>
  readonly partitionMap: <R, E, A, B, C>(
    fa: Kind3<F, R, E, A>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable3C`




#### Signature

```typescript
export interface Filterable3C<F extends URIS3, E> extends Functor3C<F, E>, Compactable3C<F, E> {
  readonly filter: Filter3C<F, E>
  readonly filterMap: <R, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => Option<B>) => Kind3<F, R, E, B>
  readonly partition: Partition3C<F, E>
  readonly partitionMap: <R, A, B, C>(
    fa: Kind3<F, R, E, A>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filterable4`




#### Signature

```typescript
export interface Filterable4<F extends URIS4> extends Functor4<F>, Compactable4<F> {
  readonly filter: Filter4<F>
  readonly filterMap: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, f: (a: A) => Option<B>) => Kind4<F, S, R, E, B>
  readonly partition: Partition4<F>
  readonly partitionMap: <S, R, E, A, B, C>(
    fa: Kind4<F, S, R, E, A>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind4<F, S, R, E, B>, Kind4<F, S, R, E, C>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `Filter`




#### Signature

```typescript
export interface Filter<F> {
  <A, B extends A>(fa: HKT<F, A>, refinement: Refinement<A, B>): HKT<F, B>
  <A>(fa: HKT<F, A>, predicate: Predicate<A>): HKT<F, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filter1`




#### Signature

```typescript
export interface Filter1<F extends URIS> {
  <A, B extends A>(fa: Kind<F, A>, refinement: Refinement<A, B>): Kind<F, B>
  <A>(fa: Kind<F, A>, predicate: Predicate<A>): Kind<F, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filter2`




#### Signature

```typescript
export interface Filter2<F extends URIS2> {
  <E, A, B extends A>(fa: Kind2<F, E, A>, refinement: Refinement<A, B>): Kind2<F, E, B>
  <E, A>(fa: Kind2<F, E, A>, predicate: Predicate<A>): Kind2<F, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filter2C`




#### Signature

```typescript
export interface Filter2C<F extends URIS2, E> {
  <A, B extends A>(fa: Kind2<F, E, A>, refinement: Refinement<A, B>): Kind2<F, E, B>
  <A>(fa: Kind2<F, E, A>, predicate: Predicate<A>): Kind2<F, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filter3`




#### Signature

```typescript
export interface Filter3<F extends URIS3> {
  <R, E, A, B extends A>(fa: Kind3<F, R, E, A>, refinement: Refinement<A, B>): Kind3<F, R, E, B>
  <R, E, A>(fa: Kind3<F, R, E, A>, predicate: Predicate<A>): Kind3<F, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filter3C`




#### Signature

```typescript
export interface Filter3C<F extends URIS3, E> {
  <R, A, B extends A>(fa: Kind3<F, R, E, A>, refinement: Refinement<A, B>): Kind3<F, R, E, B>
  <R, A>(fa: Kind3<F, R, E, A>, predicate: Predicate<A>): Kind3<F, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Filter4`




#### Signature

```typescript
export interface Filter4<F extends URIS4> {
  <S, R, E, A, B extends A>(fa: Kind4<F, S, R, E, A>, refinement: Refinement<A, B>): Kind4<F, S, R, E, B>
  <S, R, E, A>(fa: Kind4<F, S, R, E, A>, predicate: Predicate<A>): Kind4<F, S, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition`~~




#### Signature

```typescript
export interface FilterableComposition<F, G> extends FunctorComposition<F, G>, CompactableComposition<F, G> {
  readonly filter: <A>(fa: HKT<F, HKT<G, A>>, predicate: Predicate<A>) => HKT<F, HKT<G, A>>
  readonly filterMap: <A, B>(fa: HKT<F, HKT<G, A>>, f: (a: A) => Option<B>) => HKT<F, HKT<G, B>>
  readonly partition: <A>(
    fa: HKT<F, HKT<G, A>>,
    predicate: Predicate<A>,
  ) => Separated<HKT<F, HKT<G, A>>, HKT<F, HKT<G, A>>>
  readonly partitionMap: <A, B, C>(
    fa: HKT<F, HKT<G, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<HKT<F, HKT<G, B>>, HKT<F, HKT<G, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition11`~~




#### Signature

```typescript
export interface FilterableComposition11<F extends URIS, G extends URIS>
  extends FunctorComposition11<F, G>,
    CompactableComposition11<F, G> {
  readonly filter: <A>(fa: Kind<F, Kind<G, A>>, predicate: Predicate<A>) => Kind<F, Kind<G, A>>
  readonly filterMap: <A, B>(fa: Kind<F, Kind<G, A>>, f: (a: A) => Option<B>) => Kind<F, Kind<G, B>>
  readonly partition: <A>(
    fa: Kind<F, Kind<G, A>>,
    predicate: Predicate<A>,
  ) => Separated<Kind<F, Kind<G, A>>, Kind<F, Kind<G, A>>>
  readonly partitionMap: <A, B, C>(
    fa: Kind<F, Kind<G, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind<F, Kind<G, B>>, Kind<F, Kind<G, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition12`~~




#### Signature

```typescript
export interface FilterableComposition12<F extends URIS, G extends URIS2>
  extends FunctorComposition12<F, G>,
    CompactableComposition12<F, G> {
  readonly filter: <E, A>(fa: Kind<F, Kind2<G, E, A>>, predicate: Predicate<A>) => Kind<F, Kind2<G, E, A>>
  readonly filterMap: <E, A, B>(fa: Kind<F, Kind2<G, E, A>>, f: (a: A) => Option<B>) => Kind<F, Kind2<G, E, B>>
  readonly partition: <E, A>(
    fa: Kind<F, Kind2<G, E, A>>,
    predicate: Predicate<A>,
  ) => Separated<Kind<F, Kind2<G, E, A>>, Kind<F, Kind2<G, E, A>>>
  readonly partitionMap: <E, A, B, C>(
    fa: Kind<F, Kind2<G, E, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind<F, Kind2<G, E, B>>, Kind<F, Kind2<G, E, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition12C`~~




#### Signature

```typescript
export interface FilterableComposition12C<F extends URIS, G extends URIS2, E>
  extends FunctorComposition12C<F, G, E>,
    CompactableComposition12C<F, G, E> {
  readonly filter: <A>(fa: Kind<F, Kind2<G, E, A>>, predicate: Predicate<A>) => Kind<F, Kind2<G, E, A>>
  readonly filterMap: <A, B>(fa: Kind<F, Kind2<G, E, A>>, f: (a: A) => Option<B>) => Kind<F, Kind2<G, E, B>>
  readonly partition: <A>(
    fa: Kind<F, Kind2<G, E, A>>,
    predicate: Predicate<A>,
  ) => Separated<Kind<F, Kind2<G, E, A>>, Kind<F, Kind2<G, E, A>>>
  readonly partitionMap: <A, B, C>(
    fa: Kind<F, Kind2<G, E, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind<F, Kind2<G, E, B>>, Kind<F, Kind2<G, E, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition21`~~




#### Signature

```typescript
export interface FilterableComposition21<F extends URIS2, G extends URIS>
  extends FunctorComposition21<F, G>,
    CompactableComposition21<F, G> {
  readonly filter: <E, A>(fa: Kind2<F, E, Kind<G, A>>, predicate: Predicate<A>) => Kind2<F, E, Kind<G, A>>
  readonly filterMap: <E, A, B>(fa: Kind2<F, E, Kind<G, A>>, f: (a: A) => Option<B>) => Kind2<F, E, Kind<G, B>>
  readonly partition: <E, A>(
    fa: Kind2<F, E, Kind<G, A>>,
    predicate: Predicate<A>,
  ) => Separated<Kind2<F, E, Kind<G, A>>, Kind2<F, E, Kind<G, A>>>
  readonly partitionMap: <E, A, B, C>(
    fa: Kind2<F, E, Kind<G, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind2<F, E, Kind<G, B>>, Kind2<F, E, Kind<G, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition22`~~




#### Signature

```typescript
export interface FilterableComposition22<F extends URIS2, G extends URIS2>
  extends FunctorComposition22<F, G>,
    CompactableComposition22<F, G> {
  readonly filter: <FE, GE, A>(
    fa: Kind2<F, FE, Kind2<G, GE, A>>,
    predicate: Predicate<A>,
  ) => Kind2<F, FE, Kind2<G, GE, A>>
  readonly filterMap: <FE, GE, A, B>(
    fa: Kind2<F, FE, Kind2<G, GE, A>>,
    f: (a: A) => Option<B>,
  ) => Kind2<F, FE, Kind2<G, GE, B>>
  readonly partition: <FE, GE, A>(
    fa: Kind2<F, FE, Kind2<G, GE, A>>,
    predicate: Predicate<A>,
  ) => Separated<Kind2<F, FE, Kind2<G, GE, A>>, Kind2<F, FE, Kind2<G, GE, A>>>
  readonly partitionMap: <FE, GE, A, B, C>(
    fa: Kind2<F, FE, Kind2<G, GE, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind2<F, FE, Kind2<G, GE, B>>, Kind2<F, FE, Kind2<G, GE, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition22C`~~




#### Signature

```typescript
export interface FilterableComposition22C<F extends URIS2, G extends URIS2, E>
  extends FunctorComposition22<F, G>,
    CompactableComposition22<F, G> {
  readonly filter: <FE, A>(fa: Kind2<F, FE, Kind2<G, E, A>>, predicate: Predicate<A>) => Kind2<F, FE, Kind2<G, E, A>>
  readonly filterMap: <FE, A, B>(
    fa: Kind2<F, FE, Kind2<G, E, A>>,
    f: (a: A) => Option<B>,
  ) => Kind2<F, FE, Kind2<G, E, B>>
  readonly partition: <FE, A>(
    fa: Kind2<F, FE, Kind2<G, E, A>>,
    predicate: Predicate<A>,
  ) => Separated<Kind2<F, FE, Kind2<G, E, A>>, Kind2<F, FE, Kind2<G, E, A>>>
  readonly partitionMap: <FE, A, B, C>(
    fa: Kind2<F, FE, Kind2<G, E, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind2<F, FE, Kind2<G, E, B>>, Kind2<F, FE, Kind2<G, E, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition23C`~~




#### Signature

```typescript
export interface FilterableComposition23C<F extends URIS2, G extends URIS3, E>
  extends FunctorComposition23<F, G>,
    CompactableComposition23<F, G> {
  readonly filter: <R, FE, A>(
    fa: Kind2<F, FE, Kind3<G, R, E, A>>,
    predicate: Predicate<A>,
  ) => Kind2<F, FE, Kind3<G, R, E, A>>
  readonly filterMap: <R, FE, A, B>(
    fa: Kind2<F, FE, Kind3<G, R, E, A>>,
    f: (a: A) => Option<B>,
  ) => Kind2<F, FE, Kind3<G, R, E, B>>
  readonly partition: <R, FE, A>(
    fa: Kind2<F, FE, Kind3<G, R, E, A>>,
    predicate: Predicate<A>,
  ) => Separated<Kind2<F, FE, Kind3<G, R, E, A>>, Kind2<F, FE, Kind3<G, R, E, A>>>
  readonly partitionMap: <R, FE, A, B, C>(
    fa: Kind2<F, FE, Kind3<G, R, E, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind2<F, FE, Kind3<G, R, E, B>>, Kind2<F, FE, Kind3<G, R, E, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FilterableComposition2C1`~~




#### Signature

```typescript
export interface FilterableComposition2C1<F extends URIS2, G extends URIS, E>
  extends FunctorComposition21<F, G>,
    CompactableComposition21<F, G> {
  readonly filter: <A>(fa: Kind2<F, E, Kind<G, A>>, predicate: Predicate<A>) => Kind2<F, E, Kind<G, A>>
  readonly filterMap: <A, B>(fa: Kind2<F, E, Kind<G, A>>, f: (a: A) => Option<B>) => Kind2<F, E, Kind<G, B>>
  readonly partition: <A>(
    fa: Kind2<F, E, Kind<G, A>>,
    predicate: Predicate<A>,
  ) => Separated<Kind2<F, E, Kind<G, A>>, Kind2<F, E, Kind<G, A>>>
  readonly partitionMap: <A, B, C>(
    fa: Kind2<F, E, Kind<G, A>>,
    f: (a: A) => Either<B, C>,
  ) => Separated<Kind2<F, E, Kind<G, B>>, Kind2<F, E, Kind<G, C>>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Partition`




#### Signature

```typescript
export interface Partition<F> {
  <A, B extends A>(fa: HKT<F, A>, refinement: Refinement<A, B>): Separated<HKT<F, A>, HKT<F, B>>
  <A>(fa: HKT<F, A>, predicate: Predicate<A>): Separated<HKT<F, A>, HKT<F, A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Partition1`




#### Signature

```typescript
export interface Partition1<F extends URIS> {
  <A, B extends A>(fa: Kind<F, A>, refinement: Refinement<A, B>): Separated<Kind<F, A>, Kind<F, B>>
  <A>(fa: Kind<F, A>, predicate: Predicate<A>): Separated<Kind<F, A>, Kind<F, A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Partition2`




#### Signature

```typescript
export interface Partition2<F extends URIS2> {
  <E, A, B extends A>(fa: Kind2<F, E, A>, refinement: Refinement<A, B>): Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <E, A>(fa: Kind2<F, E, A>, predicate: Predicate<A>): Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Partition2C`




#### Signature

```typescript
export interface Partition2C<F extends URIS2, E> {
  <A, B extends A>(fa: Kind2<F, E, A>, refinement: Refinement<A, B>): Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <A>(fa: Kind2<F, E, A>, predicate: Predicate<A>): Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Partition3`




#### Signature

```typescript
export interface Partition3<F extends URIS3> {
  <R, E, A, B extends A>(
    fa: Kind3<F, R, E, A>,
    refinement: Refinement<A, B>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <R, E, A>(fa: Kind3<F, R, E, A>, predicate: Predicate<A>): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Partition3C`




#### Signature

```typescript
export interface Partition3C<F extends URIS3, E> {
  <R, A, B extends A>(
    fa: Kind3<F, R, E, A>,
    refinement: Refinement<A, B>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <R, A>(fa: Kind3<F, R, E, A>, predicate: Predicate<A>): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Partition4`




#### Signature

```typescript
export interface Partition4<F extends URIS4> {
  <S, R, E, A, B extends A>(
    fa: Kind4<F, S, R, E, A>,
    refinement: Refinement<A, B>,
  ): Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
  <S, R, E, A>(fa: Kind4<F, S, R, E, A>, predicate: Predicate<A>): Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, A>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filter`

`filter` composition.




#### Signature

```typescript
export declare function filter<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Filterable2C<G, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <R>(fga: Kind2<F, R, Kind2<G, E, A>>) => Kind2<F, R, Kind2<G, E, B>>
  <A>(predicate: Predicate<A>): <R, B extends A>(fgb: Kind2<F, R, Kind2<G, E, B>>) => Kind2<F, R, Kind2<G, E, B>>
  <A>(predicate: Predicate<A>): <R>(fga: Kind2<F, R, Kind2<G, E, A>>) => Kind2<F, R, Kind2<G, E, A>>
}



export declare function filter<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Filterable2C<G, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (fga: Kind<F, Kind2<G, E, A>>) => Kind<F, Kind2<G, E, B>>
  <A>(predicate: Predicate<A>): <B extends A>(fgb: Kind<F, Kind2<G, E, B>>) => Kind<F, Kind2<G, E, B>>
  <A>(predicate: Predicate<A>): (fga: Kind<F, Kind2<G, E, A>>) => Kind<F, Kind2<G, E, A>>
}



export declare function filter<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Filterable1<G>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (fga: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>
  <A>(predicate: Predicate<A>): <B extends A>(fgb: Kind<F, Kind<G, B>>) => Kind<F, Kind<G, B>>
  <A>(predicate: Predicate<A>): (fga: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, A>>
}



export declare function filter<F, G>(
  F: Functor<F>,
  G: Filterable<G>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (fga: HKT<F, HKT<G, A>>) => HKT<F, HKT<G, B>>
  <A>(predicate: Predicate<A>): <B extends A>(fgb: HKT<F, HKT<G, B>>) => HKT<F, HKT<G, B>>
  <A>(predicate: Predicate<A>): (fga: HKT<F, HKT<G, A>>) => HKT<F, HKT<G, A>>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMap`

`filterMap` composition.




#### Signature

```typescript
export declare function filterMap<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Filterable2C<G, E>,
): <A, B>(f: (a: A) => Option<B>) => <FE>(fga: Kind2<F, FE, Kind2<G, E, A>>) => Kind2<F, FE, Kind2<G, E, B>>



export declare function filterMap<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Filterable2C<G, E>,
): <A, B>(f: (a: A) => Option<B>) => (fga: Kind<F, Kind2<G, E, A>>) => Kind<F, Kind2<G, E, B>>



export declare function filterMap<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Filterable1<G>,
): <A, B>(f: (a: A) => Option<B>) => (fga: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>



export declare function filterMap<F, G>(
  F: Functor<F>,
  G: Filterable<G>,
): <A, B>(f: (a: A) => Option<B>) => (fga: HKT<F, HKT<G, A>>) => HKT<F, HKT<G, B>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFilterableComposition`~~

Use


- [`filter`](#filter) - [`filterMap`](#filtermap) - [`partition`](#partition) - [`partitionMap`](#partitionmap)


Instead.




#### Signature

```typescript
export declare function getFilterableComposition<F extends URIS2, G extends URIS3, E>(
  F: Functor2<F>,
  G: Filterable3C<G, E>,
): FilterableComposition23C<F, G, E>



export declare function getFilterableComposition<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Filterable2C<G, E>,
): FilterableComposition22C<F, G, E>



export declare function getFilterableComposition<F extends URIS2, G extends URIS2>(
  F: Functor2<F>,
  G: Filterable2<G>,
): FilterableComposition22<F, G>



export declare function getFilterableComposition<F extends URIS2, G extends URIS, E>(
  F: Functor2C<F, E>,
  G: Filterable1<G>,
): FilterableComposition2C1<F, G, E>



export declare function getFilterableComposition<F extends URIS2, G extends URIS>(
  F: Functor2<F>,
  G: Filterable1<G>,
): FilterableComposition21<F, G>



export declare function getFilterableComposition<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Filterable2C<G, E>,
): FilterableComposition12C<F, G, E>



export declare function getFilterableComposition<F extends URIS, G extends URIS2>(
  F: Functor1<F>,
  G: Filterable2<G>,
): FilterableComposition12<F, G>



export declare function getFilterableComposition<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Filterable1<G>,
): FilterableComposition11<F, G>



export declare function getFilterableComposition<F, G>(F: Functor<F>, G: Filterable<G>): FilterableComposition<F, G>

```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partition`

`partition` composition.




#### Signature

```typescript
export declare function partition<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Filterable2C<G, E>,
): {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): <R>(fga: Kind2<F, R, Kind2<G, E, A>>) => Separated<Kind2<F, R, Kind2<G, E, A>>, Kind2<F, R, Kind2<G, E, B>>>
  <A>(
    predicate: Predicate<A>,
  ): <R, B extends A>(
    fgb: Kind2<F, R, Kind2<G, E, B>>,
  ) => Separated<Kind2<F, R, Kind2<G, E, B>>, Kind2<F, R, Kind2<G, E, B>>>
  <A>(
    predicate: Predicate<A>,
  ): <R>(fga: Kind2<F, R, Kind2<G, E, A>>) => Separated<Kind2<F, R, Kind2<G, E, A>>, Kind2<F, R, Kind2<G, E, A>>>
}



export declare function partition<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Filterable2C<G, E>,
): {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): (fga: Kind<F, Kind2<G, E, A>>) => Separated<Kind<F, Kind2<G, E, A>>, Kind<F, Kind2<G, E, B>>>
  <A>(
    predicate: Predicate<A>,
  ): <B extends A>(fgb: Kind<F, Kind2<G, E, B>>) => Separated<Kind<F, Kind2<G, E, B>>, Kind<F, Kind2<G, E, B>>>
  <A>(
    predicate: Predicate<A>,
  ): (fga: Kind<F, Kind2<G, E, A>>) => Separated<Kind<F, Kind2<G, E, A>>, Kind<F, Kind2<G, E, A>>>
}



export declare function partition<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Filterable1<G>,
): {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): (fga: Kind<F, Kind<G, A>>) => Separated<Kind<F, Kind<G, A>>, Kind<F, Kind<G, B>>>
  <A>(
    predicate: Predicate<A>,
  ): <B extends A>(fgb: Kind<F, Kind<G, B>>) => Separated<Kind<F, Kind<G, B>>, Kind<F, Kind<G, B>>>
  <A>(predicate: Predicate<A>): (fga: Kind<F, Kind<G, A>>) => Separated<Kind<F, Kind<G, A>>, Kind<F, Kind<G, A>>>
}



export declare function partition<F, G>(
  F: Functor<F>,
  G: Filterable<G>,
): {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): (fga: HKT<F, HKT<G, A>>) => Separated<HKT<F, HKT<G, A>>, HKT<F, HKT<G, B>>>
  <A>(predicate: Predicate<A>): <B extends A>(fgb: HKT<F, HKT<G, B>>) => Separated<HKT<F, HKT<G, B>>, HKT<F, HKT<G, B>>>
  <A>(predicate: Predicate<A>): (fga: HKT<F, HKT<G, A>>) => Separated<HKT<F, HKT<G, A>>, HKT<F, HKT<G, A>>>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMap`

`partitionMap` composition.




#### Signature

```typescript
export declare function partitionMap<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Filterable2C<G, E>,
): <A, B, C>(
  f: (a: A) => Either<B, C>,
) => <FE>(fa: Kind2<F, FE, Kind2<G, E, A>>) => Separated<Kind2<F, FE, Kind2<G, E, B>>, Kind2<F, FE, Kind2<G, E, C>>>



export declare function partitionMap<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Filterable2C<G, E>,
): <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: Kind<F, Kind2<G, E, A>>) => Separated<Kind<F, Kind2<G, E, B>>, Kind<F, Kind2<G, E, C>>>



export declare function partitionMap<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Filterable1<G>,
): <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: Kind<F, Kind<G, A>>) => Separated<Kind<F, Kind<G, B>>, Kind<F, Kind<G, C>>>



export declare function partitionMap<F, G>(
  F: Functor<F>,
  G: Filterable<G>,
): <A, B, C>(f: (a: A) => Either<B, C>) => (fa: HKT<F, HKT<G, A>>) => Separated<HKT<F, HKT<G, B>>, HKT<F, HKT<G, C>>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti