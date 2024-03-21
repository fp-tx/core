
# FilterableWithIndex







### Model

* [FilterableWithIndex](#filterablewithindex)
* [FilterableWithIndex1](#filterablewithindex1)
* [FilterableWithIndex2](#filterablewithindex2)
* [FilterableWithIndex2C](#filterablewithindex2c)
* [FilterableWithIndex3](#filterablewithindex3)
* [FilterableWithIndex3C](#filterablewithindex3c)
* [FilterableWithIndex4](#filterablewithindex4)

### Utilities

* [FilterWithIndex](#filterwithindex)
* [FilterWithIndex1](#filterwithindex1)
* [FilterWithIndex2](#filterwithindex2)
* [FilterWithIndex2C](#filterwithindex2c)
* [FilterWithIndex3](#filterwithindex3)
* [FilterWithIndex3C](#filterwithindex3c)
* [FilterWithIndex4](#filterwithindex4)
* [PartitionWithIndex](#partitionwithindex)
* [PartitionWithIndex1](#partitionwithindex1)
* [PartitionWithIndex2](#partitionwithindex2)
* [PartitionWithIndex2C](#partitionwithindex2c)
* [PartitionWithIndex3](#partitionwithindex3)
* [PartitionWithIndex3C](#partitionwithindex3c)
* [PartitionWithIndex4](#partitionwithindex4)
* [PredicateWithIndex](#predicatewithindex)
* [RefinementWithIndex](#refinementwithindex)

## Model


### `FilterableWithIndex`




#### Signature

```typescript
export interface FilterableWithIndex<F, I> extends FunctorWithIndex<F, I>, Filterable<F> {
  readonly filterMapWithIndex: <A, B>(fa: HKT<F, A>, f: (i: I, a: A) => Option<B>) => HKT<F, B>
  readonly filterWithIndex: FilterWithIndex<F, I>
  readonly partitionMapWithIndex: <A, B, C>(
    fa: HKT<F, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<HKT<F, B>, HKT<F, C>>
  readonly partitionWithIndex: PartitionWithIndex<F, I>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterableWithIndex1`




#### Signature

```typescript
export interface FilterableWithIndex1<F extends URIS, I> extends FunctorWithIndex1<F, I>, Filterable1<F> {
  readonly filterMapWithIndex: <A, B>(fa: Kind<F, A>, f: (i: I, a: A) => Option<B>) => Kind<F, B>
  readonly filterWithIndex: FilterWithIndex1<F, I>
  readonly partitionMapWithIndex: <A, B, C>(
    fa: Kind<F, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind<F, B>, Kind<F, C>>
  readonly partitionWithIndex: PartitionWithIndex1<F, I>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterableWithIndex2`




#### Signature

```typescript
export interface FilterableWithIndex2<F extends URIS2, I> extends FunctorWithIndex2<F, I>, Filterable2<F> {
  readonly filterMapWithIndex: <E, A, B>(fa: Kind2<F, E, A>, f: (i: I, a: A) => Option<B>) => Kind2<F, E, B>
  readonly filterWithIndex: FilterWithIndex2<F, I>
  readonly partitionMapWithIndex: <E, A, B, C>(
    fa: Kind2<F, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
  readonly partitionWithIndex: PartitionWithIndex2<F, I>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterableWithIndex2C`




#### Signature

```typescript
export interface FilterableWithIndex2C<F extends URIS2, I, E> extends FunctorWithIndex2C<F, I, E>, Filterable2C<F, E> {
  readonly filterMapWithIndex: <A, B>(fa: Kind2<F, E, A>, f: (i: I, a: A) => Option<B>) => Kind2<F, E, B>
  readonly filterWithIndex: FilterWithIndex2C<F, I, E>
  readonly partitionMapWithIndex: <A, B, C>(
    fa: Kind2<F, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
  readonly partitionWithIndex: PartitionWithIndex2C<F, I, E>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterableWithIndex3`




#### Signature

```typescript
export interface FilterableWithIndex3<F extends URIS3, I> extends FunctorWithIndex3<F, I>, Filterable3<F> {
  readonly filterMapWithIndex: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (i: I, a: A) => Option<B>) => Kind3<F, R, E, B>
  readonly filterWithIndex: FilterWithIndex3<F, I>
  readonly partitionMapWithIndex: <R, E, A, B, C>(
    fa: Kind3<F, R, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
  readonly partitionWithIndex: PartitionWithIndex3<F, I>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterableWithIndex3C`




#### Signature

```typescript
export interface FilterableWithIndex3C<F extends URIS3, I, E> extends FunctorWithIndex3C<F, I, E>, Filterable3C<F, E> {
  readonly filterMapWithIndex: <R, A, B>(fa: Kind3<F, R, E, A>, f: (i: I, a: A) => Option<B>) => Kind3<F, R, E, B>
  readonly filterWithIndex: FilterWithIndex3C<F, I, E>
  readonly partitionMapWithIndex: <R, A, B, C>(
    fa: Kind3<F, R, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
  readonly partitionWithIndex: PartitionWithIndex3C<F, I, E>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterableWithIndex4`




#### Signature

```typescript
export interface FilterableWithIndex4<F extends URIS4, I> extends FunctorWithIndex4<F, I>, Filterable4<F> {
  readonly filterMapWithIndex: <S, R, E, A, B>(
    fa: Kind4<F, S, R, E, A>,
    f: (i: I, a: A) => Option<B>,
  ) => Kind4<F, S, R, E, B>
  readonly filterWithIndex: FilterWithIndex4<F, I>
  readonly partitionMapWithIndex: <S, R, E, A, B, C>(
    fa: Kind4<F, S, R, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind4<F, S, R, E, B>, Kind4<F, S, R, E, C>>
  readonly partitionWithIndex: PartitionWithIndex4<F, I>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `FilterWithIndex`




#### Signature

```typescript
export interface FilterWithIndex<F, I> {
  <A, B extends A>(fa: HKT<F, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): HKT<F, B>
  <A>(fa: HKT<F, A>, predicateWithIndex: PredicateWithIndex<I, A>): HKT<F, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterWithIndex1`




#### Signature

```typescript
export interface FilterWithIndex1<F extends URIS, I> {
  <A, B extends A>(fa: Kind<F, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind<F, B>
  <A>(fa: Kind<F, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind<F, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterWithIndex2`




#### Signature

```typescript
export interface FilterWithIndex2<F extends URIS2, I> {
  <E, A, B extends A>(fa: Kind2<F, E, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind2<F, E, B>
  <E, A>(fa: Kind2<F, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind2<F, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterWithIndex2C`




#### Signature

```typescript
export interface FilterWithIndex2C<F extends URIS2, I, E> {
  <A, B extends A>(fa: Kind2<F, E, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind2<F, E, B>
  <A>(fa: Kind2<F, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind2<F, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterWithIndex3`




#### Signature

```typescript
export interface FilterWithIndex3<F extends URIS3, I> {
  <R, E, A, B extends A>(fa: Kind3<F, R, E, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind3<F, R, E, B>
  <R, E, A>(fa: Kind3<F, R, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind3<F, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterWithIndex3C`




#### Signature

```typescript
export interface FilterWithIndex3C<F extends URIS3, I, E> {
  <R, A, B extends A>(fa: Kind3<F, R, E, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind3<F, R, E, B>
  <R, A>(fa: Kind3<F, R, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind3<F, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FilterWithIndex4`




#### Signature

```typescript
export interface FilterWithIndex4<F extends URIS4, I> {
  <S, R, E, A, B extends A>(
    fa: Kind4<F, S, R, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Kind4<F, S, R, E, B>
  <S, R, E, A>(fa: Kind4<F, S, R, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind4<F, S, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PartitionWithIndex`




#### Signature

```typescript
export interface PartitionWithIndex<F, I> {
  <A, B extends A>(fa: HKT<F, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Separated<HKT<F, A>, HKT<F, B>>
  <A>(fa: HKT<F, A>, predicateWithIndex: PredicateWithIndex<I, A>): Separated<HKT<F, A>, HKT<F, A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PartitionWithIndex1`




#### Signature

```typescript
export interface PartitionWithIndex1<F extends URIS, I> {
  <A, B extends A>(fa: Kind<F, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Separated<Kind<F, A>, Kind<F, B>>
  <A>(fa: Kind<F, A>, predicateWithIndex: PredicateWithIndex<I, A>): Separated<Kind<F, A>, Kind<F, A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PartitionWithIndex2`




#### Signature

```typescript
export interface PartitionWithIndex2<F extends URIS2, I> {
  <E, A, B extends A>(
    fa: Kind2<F, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <E, A>(fa: Kind2<F, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PartitionWithIndex2C`




#### Signature

```typescript
export interface PartitionWithIndex2C<F extends URIS2, I, E> {
  <A, B extends A>(
    fa: Kind2<F, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <A>(fa: Kind2<F, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PartitionWithIndex3`




#### Signature

```typescript
export interface PartitionWithIndex3<F extends URIS3, I> {
  <R, E, A, B extends A>(
    fa: Kind3<F, R, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <R, E, A>(
    fa: Kind3<F, R, E, A>,
    predicateWithIndex: PredicateWithIndex<I, A>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PartitionWithIndex3C`




#### Signature

```typescript
export interface PartitionWithIndex3C<F extends URIS3, I, E> {
  <R, A, B extends A>(
    fa: Kind3<F, R, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <R, A>(
    fa: Kind3<F, R, E, A>,
    predicateWithIndex: PredicateWithIndex<I, A>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PartitionWithIndex4`




#### Signature

```typescript
export interface PartitionWithIndex4<F extends URIS4, I> {
  <S, R, E, A, B extends A>(
    fa: Kind4<F, S, R, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
  <S, R, E, A>(
    fa: Kind4<F, S, R, E, A>,
    predicateWithIndex: PredicateWithIndex<I, A>,
  ): Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, A>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PredicateWithIndex`




#### Signature

```typescript
export type PredicateWithIndex<I, A> = (i: I, a: A) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `RefinementWithIndex`




#### Signature

```typescript
export type RefinementWithIndex<I, A, B extends A> = (i: I, a: A) => a is B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti