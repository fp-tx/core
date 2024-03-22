
# FoldableWithIndex







### Model

* [FoldableWithIndex](#foldablewithindex)
* [FoldableWithIndex1](#foldablewithindex1)
* [FoldableWithIndex2](#foldablewithindex2)
* [FoldableWithIndex2C](#foldablewithindex2c)
* [FoldableWithIndex3](#foldablewithindex3)
* [FoldableWithIndex3C](#foldablewithindex3c)
* [FoldableWithIndex4](#foldablewithindex4)

### Utilities

* ~~[FoldableWithIndexComposition](#foldablewithindexcomposition)~~ (deprecated)
* ~~[FoldableWithIndexComposition11](#foldablewithindexcomposition11)~~ (deprecated)
* ~~[FoldableWithIndexComposition12](#foldablewithindexcomposition12)~~ (deprecated)
* ~~[FoldableWithIndexComposition12C](#foldablewithindexcomposition12c)~~ (deprecated)
* ~~[FoldableWithIndexComposition21](#foldablewithindexcomposition21)~~ (deprecated)
* ~~[FoldableWithIndexComposition22](#foldablewithindexcomposition22)~~ (deprecated)
* ~~[FoldableWithIndexComposition22C](#foldablewithindexcomposition22c)~~ (deprecated)
* ~~[FoldableWithIndexComposition2C1](#foldablewithindexcomposition2c1)~~ (deprecated)
* [foldMapWithIndex](#foldmapwithindex)
* ~~[getFoldableWithIndexComposition](#getfoldablewithindexcomposition)~~ (deprecated)
* [reduceRightWithIndex](#reducerightwithindex)
* [reduceWithIndex](#reducewithindex)

## Model


### `FoldableWithIndex`




#### Signature

```typescript
export interface FoldableWithIndex<F, I> extends Foldable<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(fa: HKT<F, A>, f: (i: I, a: A) => M) => M
  readonly reduceRightWithIndex: <A, B>(fa: HKT<F, A>, b: B, f: (i: I, a: A, b: B) => B) => B
  readonly reduceWithIndex: <A, B>(fa: HKT<F, A>, b: B, f: (i: I, b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FoldableWithIndex1`




#### Signature

```typescript
export interface FoldableWithIndex1<F extends URIS, I> extends Foldable1<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(fa: Kind<F, A>, f: (i: I, a: A) => M) => M
  readonly reduceRightWithIndex: <A, B>(fa: Kind<F, A>, b: B, f: (i: I, a: A, b: B) => B) => B
  readonly reduceWithIndex: <A, B>(fa: Kind<F, A>, b: B, f: (i: I, b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FoldableWithIndex2`




#### Signature

```typescript
export interface FoldableWithIndex2<F extends URIS2, I> extends Foldable2<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <E, A>(fa: Kind2<F, E, A>, f: (i: I, a: A) => M) => M
  readonly reduceRightWithIndex: <E, A, B>(fa: Kind2<F, E, A>, b: B, f: (i: I, a: A, b: B) => B) => B
  readonly reduceWithIndex: <E, A, B>(fa: Kind2<F, E, A>, b: B, f: (i: I, b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FoldableWithIndex2C`




#### Signature

```typescript
export interface FoldableWithIndex2C<F extends URIS2, I, E> extends Foldable2C<F, E> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(fa: Kind2<F, E, A>, f: (i: I, a: A) => M) => M
  readonly reduceRightWithIndex: <A, B>(fa: Kind2<F, E, A>, b: B, f: (i: I, a: A, b: B) => B) => B
  readonly reduceWithIndex: <A, B>(fa: Kind2<F, E, A>, b: B, f: (i: I, b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FoldableWithIndex3`




#### Signature

```typescript
export interface FoldableWithIndex3<F extends URIS3, I> extends Foldable3<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <R, E, A>(fa: Kind3<F, R, E, A>, f: (i: I, a: A) => M) => M
  readonly reduceRightWithIndex: <R, E, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (i: I, a: A, b: B) => B) => B
  readonly reduceWithIndex: <R, E, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (i: I, b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FoldableWithIndex3C`




#### Signature

```typescript
export interface FoldableWithIndex3C<F extends URIS3, I, E> extends Foldable3C<F, E> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <R, A>(fa: Kind3<F, R, E, A>, f: (i: I, a: A) => M) => M
  readonly reduceRightWithIndex: <R, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (i: I, a: A, b: B) => B) => B
  readonly reduceWithIndex: <R, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (i: I, b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FoldableWithIndex4`




#### Signature

```typescript
export interface FoldableWithIndex4<F extends URIS4, I> extends Foldable4<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>, f: (i: I, a: A) => M) => M
  readonly reduceRightWithIndex: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, b: B, f: (i: I, a: A, b: B) => B) => B
  readonly reduceWithIndex: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, b: B, f: (i: I, b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`FoldableWithIndexComposition`~~




#### Signature

```typescript
export interface FoldableWithIndexComposition<F, FI, G, GI> extends FoldableComposition<F, G> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(fga: HKT<F, HKT<G, A>>, f: (i: [FI, GI], a: A) => M) => M
  readonly reduceRightWithIndex: <A, B>(fga: HKT<F, HKT<G, A>>, b: B, f: (i: [FI, GI], a: A, b: B) => B) => B
  readonly reduceWithIndex: <A, B>(fga: HKT<F, HKT<G, A>>, b: B, f: (i: [FI, GI], b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableWithIndexComposition11`~~




#### Signature

```typescript
export interface FoldableWithIndexComposition11<F extends URIS, FI, G extends URIS, GI>
  extends FoldableComposition11<F, G> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(fga: Kind<F, Kind<G, A>>, f: (i: [FI, GI], a: A) => M) => M
  readonly reduceRightWithIndex: <A, B>(fga: Kind<F, Kind<G, A>>, b: B, f: (i: [FI, GI], a: A, b: B) => B) => B
  readonly reduceWithIndex: <A, B>(fga: Kind<F, Kind<G, A>>, b: B, f: (i: [FI, GI], b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableWithIndexComposition12`~~




#### Signature

```typescript
export interface FoldableWithIndexComposition12<F extends URIS, FI, G extends URIS2, GI>
  extends FoldableComposition12<F, G> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <E, A>(fga: Kind<F, Kind2<G, E, A>>, f: (i: [FI, GI], a: A) => M) => M
  readonly reduceRightWithIndex: <E, A, B>(fga: Kind<F, Kind2<G, E, A>>, b: B, f: (i: [FI, GI], a: A, b: B) => B) => B
  readonly reduceWithIndex: <E, A, B>(fga: Kind<F, Kind2<G, E, A>>, b: B, f: (i: [FI, GI], b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableWithIndexComposition12C`~~




#### Signature

```typescript
export interface FoldableWithIndexComposition12C<F extends URIS, FI, G extends URIS2, GI, E>
  extends FoldableComposition12C<F, G, E> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(fga: Kind<F, Kind2<G, E, A>>, f: (i: [FI, GI], a: A) => M) => M
  readonly reduceRightWithIndex: <A, B>(fga: Kind<F, Kind2<G, E, A>>, b: B, f: (i: [FI, GI], a: A, b: B) => B) => B
  readonly reduceWithIndex: <A, B>(fga: Kind<F, Kind2<G, E, A>>, b: B, f: (i: [FI, GI], b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableWithIndexComposition21`~~




#### Signature

```typescript
export interface FoldableWithIndexComposition21<F extends URIS2, FI, G extends URIS, GI>
  extends FoldableComposition21<F, G> {
  readonly foldMapWithIndex: <M>(
    M: Monoid<M>,
  ) => <FE, A>(fga: Kind2<F, FE, Kind<G, A>>, f: (i: [FI, GI], a: A) => M) => M
  readonly reduceRightWithIndex: <FE, A, B>(fga: Kind2<F, FE, Kind<G, A>>, b: B, f: (i: [FI, GI], a: A, b: B) => B) => B
  readonly reduceWithIndex: <FE, A, B>(fga: Kind2<F, FE, Kind<G, A>>, b: B, f: (i: [FI, GI], b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableWithIndexComposition22`~~




#### Signature

```typescript
export interface FoldableWithIndexComposition22<F extends URIS2, FI, G extends URIS2, GI>
  extends FoldableComposition22<F, G> {
  readonly foldMapWithIndex: <M>(
    M: Monoid<M>,
  ) => <FE, GE, A>(fga: Kind2<F, FE, Kind2<G, GE, A>>, f: (i: [FI, GI], a: A) => M) => M
  readonly reduceRightWithIndex: <FE, GE, A, B>(
    fga: Kind2<F, FE, Kind2<G, GE, A>>,
    b: B,
    f: (i: [FI, GI], a: A, b: B) => B,
  ) => B
  readonly reduceWithIndex: <FE, GE, A, B>(
    fga: Kind2<F, FE, Kind2<G, GE, A>>,
    b: B,
    f: (i: [FI, GI], b: B, a: A) => B,
  ) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableWithIndexComposition22C`~~




#### Signature

```typescript
export interface FoldableWithIndexComposition22C<F extends URIS2, FI, G extends URIS2, GI, E>
  extends FoldableComposition22C<F, G, E> {
  readonly foldMapWithIndex: <M>(
    M: Monoid<M>,
  ) => <FE, A>(fga: Kind2<F, FE, Kind2<G, E, A>>, f: (i: [FI, GI], a: A) => M) => M
  readonly reduceRightWithIndex: <FE, A, B>(
    fga: Kind2<F, FE, Kind2<G, E, A>>,
    b: B,
    f: (i: [FI, GI], a: A, b: B) => B,
  ) => B
  readonly reduceWithIndex: <FE, A, B>(fga: Kind2<F, FE, Kind2<G, E, A>>, b: B, f: (i: [FI, GI], b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableWithIndexComposition2C1`~~




#### Signature

```typescript
export interface FoldableWithIndexComposition2C1<F extends URIS2, FI, G extends URIS, GI, FE>
  extends FoldableComposition2C1<F, G, FE> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(fga: Kind2<F, FE, Kind<G, A>>, f: (i: [FI, GI], a: A) => M) => M
  readonly reduceRightWithIndex: <A, B>(fga: Kind2<F, FE, Kind<G, A>>, b: B, f: (i: [FI, GI], a: A, b: B) => B) => B
  readonly reduceWithIndex: <A, B>(fga: Kind2<F, FE, Kind<G, A>>, b: B, f: (i: [FI, GI], b: B, a: A) => B) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMapWithIndex`

`foldMapWithIndex` composition.




#### Signature

```typescript
export declare function foldMapWithIndex<F extends URIS, I, G extends URIS, J>(
  F: FoldableWithIndex1<F, I>,
  G: FoldableWithIndex1<G, J>,
): <M>(M: Monoid<M>) => <A>(f: (ij: readonly [I, J], a: A) => M) => (fga: Kind<F, Kind<G, A>>) => M



export declare function foldMapWithIndex<F, I, G, J>(
  F: FoldableWithIndex<F, I>,
  G: FoldableWithIndex<G, J>,
): <M>(M: Monoid<M>) => <A>(f: (ij: readonly [I, J], a: A) => M) => (fga: HKT<F, HKT<G, A>>) => M

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFoldableWithIndexComposition`~~

Use


- [reduceWithIndex](#reducewithindex) - [foldMapWithIndex](#foldmapwithindex) - [reduceRightWithIndex](#reducerightwithindex)


Instead.




#### Signature

```typescript
export declare function getFoldableWithIndexComposition<F extends URIS2, FI, G extends URIS2, GI, E>(
  F: FoldableWithIndex2<F, FI>,
  G: FoldableWithIndex2C<G, GI, E>,
): FoldableWithIndexComposition22C<F, FI, G, GI, E>



export declare function getFoldableWithIndexComposition<F extends URIS2, FI, G extends URIS2, GI>(
  F: FoldableWithIndex2<F, FI>,
  G: FoldableWithIndex2<G, GI>,
): FoldableWithIndexComposition22<F, FI, G, GI>



export declare function getFoldableWithIndexComposition<F extends URIS2, FI, G extends URIS, GI, E>(
  F: FoldableWithIndex2C<F, FI, E>,
  G: FoldableWithIndex1<G, GI>,
): FoldableWithIndexComposition2C1<F, FI, G, GI, E>



export declare function getFoldableWithIndexComposition<F extends URIS2, FI, G extends URIS, GI>(
  F: FoldableWithIndex2<F, FI>,
  G: FoldableWithIndex1<G, GI>,
): FoldableWithIndexComposition21<F, FI, G, GI>



export declare function getFoldableWithIndexComposition<F extends URIS, FI, G extends URIS2, GI>(
  F: FoldableWithIndex1<F, FI>,
  G: FoldableWithIndex2<G, GI>,
): FoldableWithIndexComposition12<F, FI, G, GI>



export declare function getFoldableWithIndexComposition<F extends URIS, FI, G extends URIS2, GI>(
  F: FoldableWithIndex1<F, FI>,
  G: FoldableWithIndex2<G, GI>,
): FoldableWithIndexComposition12<F, FI, G, GI>



export declare function getFoldableWithIndexComposition<F extends URIS, FI, G extends URIS, GI>(
  F: FoldableWithIndex1<F, FI>,
  G: FoldableWithIndex1<G, GI>,
): FoldableWithIndexComposition11<F, FI, G, GI>



export declare function getFoldableWithIndexComposition<F, FI, G, GI>(
  F: FoldableWithIndex<F, FI>,
  G: FoldableWithIndex<G, GI>,
): FoldableWithIndexComposition<F, FI, G, GI>

```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRightWithIndex`

`reduceRightWithIndex` composition.




#### Signature

```typescript
export declare function reduceRightWithIndex<F extends URIS, I, G extends URIS, J>(
  F: FoldableWithIndex1<F, I>,
  G: FoldableWithIndex1<G, J>,
): <B, A>(b: B, f: (ij: readonly [I, J], a: A, b: B) => B) => (fga: Kind<F, Kind<G, A>>) => B



export declare function reduceRightWithIndex<F, I, G, J>(
  F: FoldableWithIndex<F, I>,
  G: FoldableWithIndex<G, J>,
): <B, A>(b: B, f: (ij: readonly [I, J], a: A, b: B) => B) => (fga: HKT<F, HKT<G, A>>) => B

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceWithIndex`

`reduceWithIndex` composition.




#### Signature

```typescript
export declare function reduceWithIndex<F extends URIS, I, G extends URIS, J>(
  F: FoldableWithIndex1<F, I>,
  G: FoldableWithIndex1<G, J>,
): <B, A>(b: B, f: (ij: readonly [I, J], b: B, a: A) => B) => (fga: Kind<F, Kind<G, A>>) => B



export declare function reduceWithIndex<F, I, G, J>(
  F: FoldableWithIndex<F, I>,
  G: FoldableWithIndex<G, J>,
): <B, A>(b: B, f: (ij: readonly [I, J], b: B, a: A) => B) => (fga: HKT<F, HKT<G, A>>) => B

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti