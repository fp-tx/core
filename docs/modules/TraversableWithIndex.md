
# TraversableWithIndex







### Utilities

* [PipeableTraverseWithIndex1](#pipeabletraversewithindex1)
* [PipeableTraverseWithIndex2](#pipeabletraversewithindex2)
* [TraversableWithIndex](#traversablewithindex)
* [TraversableWithIndex1](#traversablewithindex1)
* [TraversableWithIndex2](#traversablewithindex2)
* [TraversableWithIndex2C](#traversablewithindex2c)
* [TraverseWithIndex](#traversewithindex)
* [TraverseWithIndex1](#traversewithindex1)
* [TraverseWithIndex2](#traversewithindex2)
* [TraverseWithIndex2C](#traversewithindex2c)

## Utilities


### `PipeableTraverseWithIndex1`




#### Signature

```typescript
export interface PipeableTraverseWithIndex1<T extends URIS, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, E, B>(f: (i: I, a: A) => Kind3<F, R, E, B>) => (ta: Kind<T, A>) => Kind3<F, R, E, Kind<T, B>>
  <F extends URIS3, E>(
    F: Applicative3C<F, E>,
  ): <A, R, B>(f: (i: I, a: A) => Kind3<F, R, E, B>) => (ta: Kind<T, A>) => Kind3<F, R, E, Kind<T, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, E, B>(f: (i: I, a: A) => Kind2<F, E, B>) => (ta: Kind<T, A>) => Kind2<F, E, Kind<T, B>>
  <F extends URIS2, E>(
    F: Applicative2C<F, E>,
  ): <A, B>(f: (i: I, a: A) => Kind2<F, E, B>) => (ta: Kind<T, A>) => Kind2<F, E, Kind<T, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(f: (i: I, a: A) => Kind<F, B>) => (ta: Kind<T, A>) => Kind<F, Kind<T, B>>
  <F>(F: Applicative<F>): <A, B>(f: (i: I, a: A) => HKT<F, B>) => (ta: Kind<T, A>) => HKT<F, Kind<T, B>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `PipeableTraverseWithIndex2`




#### Signature

```typescript
export interface PipeableTraverseWithIndex2<T extends URIS2, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, FE, B>(
    f: (i: I, a: A) => Kind3<F, R, FE, B>,
  ) => <TE>(ta: Kind2<T, TE, A>) => Kind3<F, R, FE, Kind2<T, TE, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, FE, B>(f: (i: I, a: A) => Kind2<F, FE, B>) => <TE>(ta: Kind2<T, TE, A>) => Kind2<F, FE, Kind2<T, TE, B>>
  <F extends URIS2, FE>(
    F: Applicative2C<F, FE>,
  ): <A, B>(f: (i: I, a: A) => Kind2<F, FE, B>) => <TE>(ta: Kind2<T, TE, A>) => Kind2<F, FE, Kind2<T, TE, B>>
  <F extends URIS>(
    F: Applicative1<F>,
  ): <A, B>(f: (i: I, a: A) => Kind<F, B>) => <E>(ta: Kind2<T, E, A>) => Kind<F, Kind2<T, E, B>>
  <F>(F: Applicative<F>): <A, B>(f: (i: I, a: A) => HKT<F, B>) => <E>(ta: Kind2<T, E, A>) => HKT<F, Kind2<T, E, B>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraversableWithIndex`




#### Signature

```typescript
export interface TraversableWithIndex<T, I> extends FunctorWithIndex<T, I>, FoldableWithIndex<T, I>, Traversable<T> {
  readonly traverseWithIndex: TraverseWithIndex<T, I>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraversableWithIndex1`




#### Signature

```typescript
export interface TraversableWithIndex1<T extends URIS, I>
  extends FunctorWithIndex1<T, I>,
    FoldableWithIndex1<T, I>,
    Traversable1<T> {
  readonly traverseWithIndex: TraverseWithIndex1<T, I>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraversableWithIndex2`




#### Signature

```typescript
export interface TraversableWithIndex2<T extends URIS2, I>
  extends FunctorWithIndex2<T, I>,
    FoldableWithIndex2<T, I>,
    Traversable2<T> {
  readonly traverseWithIndex: TraverseWithIndex2<T, I>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraversableWithIndex2C`




#### Signature

```typescript
export interface TraversableWithIndex2C<T extends URIS2, I, E>
  extends FunctorWithIndex2C<T, I, E>,
    FoldableWithIndex2C<T, I, E>,
    Traversable2C<T, E> {
  readonly traverseWithIndex: TraverseWithIndex2C<T, I, E>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraverseWithIndex`




#### Signature

```typescript
export interface TraverseWithIndex<T, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, E, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, HKT<T, B>>
  <F extends URIS3, E>(
    F: Applicative3C<F, E>,
  ): <A, R, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, HKT<T, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, E, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, HKT<T, B>>
  <F extends URIS2, E>(
    F: Applicative2C<F, E>,
  ): <A, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, HKT<T, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind<F, B>) => Kind<F, HKT<T, B>>
  <F>(F: Applicative<F>): <A, B>(ta: HKT<T, A>, f: (i: I, a: A) => HKT<F, B>) => HKT<F, HKT<T, B>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraverseWithIndex1`




#### Signature

```typescript
export interface TraverseWithIndex1<T extends URIS, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, E, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, Kind<T, B>>
  <F extends URIS3, E>(
    F: Applicative3C<F, E>,
  ): <A, R, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, Kind<T, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, E, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, Kind<T, B>>
  <F extends URIS2, E>(
    F: Applicative2C<F, E>,
  ): <A, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, Kind<T, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind<F, B>) => Kind<F, Kind<T, B>>
  <F>(F: Applicative<F>): <A, B>(ta: Kind<T, A>, f: (i: I, a: A) => HKT<F, B>) => HKT<F, Kind<T, B>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraverseWithIndex2`




#### Signature

```typescript
export interface TraverseWithIndex2<T extends URIS2, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <TE, A, R, FE, B>(ta: Kind2<T, TE, A>, f: (i: I, a: A) => Kind3<F, R, FE, B>) => Kind3<F, R, FE, Kind2<T, TE, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <TE, A, FE, B>(ta: Kind2<T, TE, A>, f: (i: I, a: A) => Kind2<F, FE, B>) => Kind2<F, FE, Kind2<T, TE, B>>
  <F extends URIS2, FE>(
    F: Applicative2C<F, FE>,
  ): <TE, A, B>(ta: Kind2<T, TE, A>, f: (i: I, a: A) => Kind2<F, FE, B>) => Kind2<F, FE, Kind2<T, TE, B>>
  <F extends URIS>(
    F: Applicative1<F>,
  ): <E, A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind<F, B>) => Kind<F, Kind2<T, E, B>>
  <F>(F: Applicative<F>): <E, A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => HKT<F, B>) => HKT<F, Kind2<T, E, B>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `TraverseWithIndex2C`




#### Signature

```typescript
export interface TraverseWithIndex2C<T extends URIS2, I, E> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, FE, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind3<F, R, FE, B>) => Kind3<F, R, FE, Kind2<T, E, B>>
  <F extends URIS3>(
    F: Applicative3C<F, E>,
  ): <A, R, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, Kind2<T, E, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, FE, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind2<F, FE, B>) => Kind2<F, FE, Kind2<T, E, B>>
  <F extends URIS2>(
    F: Applicative2C<F, E>,
  ): <A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, Kind2<T, E, B>>
  <F extends URIS>(
    F: Applicative1<F>,
  ): <A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind<F, B>) => Kind<F, Kind2<T, E, B>>
  <F>(F: Applicative<F>): <A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => HKT<F, B>) => HKT<F, Kind2<T, E, B>>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti