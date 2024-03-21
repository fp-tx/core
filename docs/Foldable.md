
# Foldable







### Model

* [Foldable](#foldable)
* [Foldable1](#foldable1)
* [Foldable2](#foldable2)
* [Foldable2C](#foldable2c)
* [Foldable3](#foldable3)
* [Foldable3C](#foldable3c)
* [Foldable4](#foldable4)

### Utilities

* ~~[FoldableComposition](#foldablecomposition)~~ (deprecated)
* ~~[FoldableComposition11](#foldablecomposition11)~~ (deprecated)
* ~~[FoldableComposition12](#foldablecomposition12)~~ (deprecated)
* ~~[FoldableComposition12C](#foldablecomposition12c)~~ (deprecated)
* ~~[FoldableComposition21](#foldablecomposition21)~~ (deprecated)
* ~~[FoldableComposition22](#foldablecomposition22)~~ (deprecated)
* ~~[FoldableComposition22C](#foldablecomposition22c)~~ (deprecated)
* ~~[FoldableComposition2C1](#foldablecomposition2c1)~~ (deprecated)
* ~~[foldM](#foldm)~~ (deprecated)
* [foldMap](#foldmap)
* ~~[getFoldableComposition](#getfoldablecomposition)~~ (deprecated)
* [intercalate](#intercalate)
* [reduce](#reduce)
* [reduceM](#reducem)
* [reduceRight](#reduceright)
* ~~[toArray](#toarray)~~ (deprecated)
* [toReadonlyArray](#toreadonlyarray)
* [traverse_](#traverse)

## Model


### `Foldable`




#### Signature

```typescript
export interface Foldable<F> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: HKT<F, A>, f: (a: A) => M) => M
  readonly reduce: <A, B>(fa: HKT<F, A>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <A, B>(fa: HKT<F, A>, b: B, f: (a: A, b: B) => B) => B
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable1`




#### Signature

```typescript
export interface Foldable1<F extends URIS> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Kind<F, A>, f: (a: A) => M) => M
  readonly reduce: <A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <A, B>(fa: Kind<F, A>, b: B, f: (a: A, b: B) => B) => B
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable2`




#### Signature

```typescript
export interface Foldable2<F extends URIS2> {
  readonly foldMap: <M>(M: Monoid<M>) => <E, A>(fa: Kind2<F, E, A>, f: (a: A) => M) => M
  readonly reduce: <E, A, B>(fa: Kind2<F, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <E, A, B>(fa: Kind2<F, E, A>, b: B, f: (a: A, b: B) => B) => B
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable2C`




#### Signature

```typescript
export interface Foldable2C<F extends URIS2, E> {
  readonly _E: E
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Kind2<F, E, A>, f: (a: A) => M) => M
  readonly reduce: <A, B>(fa: Kind2<F, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <A, B>(fa: Kind2<F, E, A>, b: B, f: (a: A, b: B) => B) => B
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable3`




#### Signature

```typescript
export interface Foldable3<F extends URIS3> {
  readonly foldMap: <M>(M: Monoid<M>) => <R, E, A>(fa: Kind3<F, R, E, A>, f: (a: A) => M) => M
  readonly reduce: <R, E, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <R, E, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (a: A, b: B) => B) => B
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable3C`




#### Signature

```typescript
export interface Foldable3C<F extends URIS3, E> {
  readonly _E: E
  readonly foldMap: <M>(M: Monoid<M>) => <R, A>(fa: Kind3<F, R, E, A>, f: (a: A) => M) => M
  readonly reduce: <R, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <R, A, B>(fa: Kind3<F, R, E, A>, b: B, f: (a: A, b: B) => B) => B
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable4`




#### Signature

```typescript
export interface Foldable4<F extends URIS4> {
  readonly foldMap: <M>(M: Monoid<M>) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>, f: (a: A) => M) => M
  readonly reduce: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, b: B, f: (a: A, b: B) => B) => B
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`FoldableComposition`~~




#### Signature

```typescript
export interface FoldableComposition<F, G> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: HKT<F, HKT<G, A>>, f: (a: A) => M) => M
  readonly reduce: <A, B>(fga: HKT<F, HKT<G, A>>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <A, B>(fa: HKT<F, HKT<G, A>>, b: B, f: (a: A, b: B) => B) => B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableComposition11`~~




#### Signature

```typescript
export interface FoldableComposition11<F extends URIS, G extends URIS> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Kind<F, Kind<G, A>>, f: (a: A) => M) => M
  readonly reduce: <A, B>(fga: Kind<F, Kind<G, A>>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <A, B>(fa: Kind<F, Kind<G, A>>, b: B, f: (a: A, b: B) => B) => B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableComposition12`~~




#### Signature

```typescript
export interface FoldableComposition12<F extends URIS, G extends URIS2> {
  readonly foldMap: <M>(M: Monoid<M>) => <E, A>(fa: Kind<F, Kind2<G, E, A>>, f: (a: A) => M) => M
  readonly reduce: <E, A, B>(fga: Kind<F, Kind2<G, E, A>>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <E, A, B>(fa: Kind<F, Kind2<G, E, A>>, b: B, f: (a: A, b: B) => B) => B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableComposition12C`~~




#### Signature

```typescript
export interface FoldableComposition12C<F extends URIS, G extends URIS2, E> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Kind<F, Kind2<G, E, A>>, f: (a: A) => M) => M
  readonly reduce: <A, B>(fga: Kind<F, Kind2<G, E, A>>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <A, B>(fa: Kind<F, Kind2<G, E, A>>, b: B, f: (a: A, b: B) => B) => B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableComposition21`~~




#### Signature

```typescript
export interface FoldableComposition21<F extends URIS2, G extends URIS> {
  readonly foldMap: <M>(M: Monoid<M>) => <E, A>(fa: Kind2<F, E, Kind<G, A>>, f: (a: A) => M) => M
  readonly reduce: <E, A, B>(fga: Kind2<F, E, Kind<G, A>>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <E, A, B>(fa: Kind2<F, E, Kind<G, A>>, b: B, f: (a: A, b: B) => B) => B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableComposition22`~~




#### Signature

```typescript
export interface FoldableComposition22<F extends URIS2, G extends URIS2> {
  readonly foldMap: <M>(M: Monoid<M>) => <FE, GE, A>(fa: Kind2<F, FE, Kind2<G, GE, A>>, f: (a: A) => M) => M
  readonly reduce: <FE, GE, A, B>(fga: Kind2<F, FE, Kind2<G, GE, A>>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <FE, GE, A, B>(fa: Kind2<F, FE, Kind2<G, GE, A>>, b: B, f: (a: A, b: B) => B) => B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableComposition22C`~~




#### Signature

```typescript
export interface FoldableComposition22C<F extends URIS2, G extends URIS2, E> {
  readonly foldMap: <M>(M: Monoid<M>) => <FE, A>(fa: Kind2<F, FE, Kind2<G, E, A>>, f: (a: A) => M) => M
  readonly reduce: <FE, A, B>(fga: Kind2<F, FE, Kind2<G, E, A>>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <FE, A, B>(fa: Kind2<F, FE, Kind2<G, E, A>>, b: B, f: (a: A, b: B) => B) => B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FoldableComposition2C1`~~




#### Signature

```typescript
export interface FoldableComposition2C1<F extends URIS2, G extends URIS, E> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(fa: Kind2<F, E, Kind<G, A>>, f: (a: A) => M) => M
  readonly reduce: <A, B>(fga: Kind2<F, E, Kind<G, A>>, b: B, f: (b: B, a: A) => B) => B
  readonly reduceRight: <A, B>(fa: Kind2<F, E, Kind<G, A>>, b: B, f: (a: A, b: B) => B) => B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`foldM`~~

Use [`reduceM`](#reducem) instead




#### Signature

```typescript
export declare function foldM<M extends URIS3, F extends URIS>(
  M: Monad3<M>,
  F: Foldable1<F>,
): <R, E, A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind3<M, R, E, B>) => Kind3<M, R, E, B>



export declare function foldM<M extends URIS3, F extends URIS, E>(
  M: Monad3C<M, E>,
  F: Foldable1<F>,
): <R, A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind3<M, R, E, B>) => Kind3<M, R, E, B>



export declare function foldM<M extends URIS2, F extends URIS>(
  M: Monad2<M>,
  F: Foldable1<F>,
): <E, A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind2<M, E, B>) => Kind2<M, E, B>



export declare function foldM<M extends URIS2, F extends URIS, E>(
  M: Monad2C<M, E>,
  F: Foldable1<F>,
): <A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind2<M, E, B>) => Kind2<M, E, B>



export declare function foldM<M extends URIS, F extends URIS>(
  M: Monad1<M>,
  F: Foldable1<F>,
): <A, B>(fa: Kind<F, A>, b: B, f: (b: B, a: A) => Kind<M, B>) => Kind<M, B>



export declare function foldM<M, F>(
  M: Monad<M>,
  F: Foldable<F>,
): <A, B>(fa: HKT<F, A>, b: B, f: (b: B, a: A) => HKT<M, B>) => HKT<M, B>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMap`

`foldMap` composition.




#### Signature

```typescript
export declare function foldMap<F extends URIS, G extends URIS>(
  F: Foldable1<F>,
  G: Foldable1<G>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fga: Kind<F, Kind<G, A>>) => M



export declare function foldMap<F, G>(
  F: Foldable<F>,
  G: Foldable<G>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fga: HKT<F, HKT<G, A>>) => M

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFoldableComposition`~~

Use


- [reduce](#reduce) - [foldMap](#foldmap) - [reduceRight](#reduceright)


Instead.




#### Signature

```typescript
export declare function getFoldableComposition<F extends URIS2, G extends URIS2, E>(
  F: Foldable2<F>,
  G: Foldable2C<G, E>,
): FoldableComposition22C<F, G, E>



export declare function getFoldableComposition<F extends URIS2, G extends URIS2>(
  F: Foldable2<F>,
  G: Foldable2<G>,
): FoldableComposition22<F, G>



export declare function getFoldableComposition<F extends URIS2, G extends URIS, E>(
  F: Foldable2C<F, E>,
  G: Foldable1<G>,
): FoldableComposition2C1<F, G, E>



export declare function getFoldableComposition<F extends URIS2, G extends URIS>(
  F: Foldable2<F>,
  G: Foldable1<G>,
): FoldableComposition21<F, G>



export declare function getFoldableComposition<F extends URIS, G extends URIS2, E>(
  F: Foldable1<F>,
  G: Foldable2C<G, E>,
): FoldableComposition12C<F, G, E>



export declare function getFoldableComposition<F extends URIS, G extends URIS2>(
  F: Foldable1<F>,
  G: Foldable2<G>,
): FoldableComposition12<F, G>



export declare function getFoldableComposition<F extends URIS, G extends URIS>(
  F: Foldable1<F>,
  G: Foldable1<G>,
): FoldableComposition11<F, G>



export declare function getFoldableComposition<F, G>(F: Foldable<F>, G: Foldable<G>): FoldableComposition<F, G>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intercalate`

Fold a data structure, accumulating values in some `Monoid`, combining adjacent elements using the specified separator




#### Signature

```typescript
export declare function intercalate<M, F extends URIS3>(
  M: Monoid<M>,
  F: Foldable3<F>,
): <R, E>(middle: M, fm: Kind3<F, R, E, M>) => M



export declare function intercalate<M, F extends URIS2>(
  M: Monoid<M>,
  F: Foldable2<F>,
): <E>(middle: M, fm: Kind2<F, E, M>) => M



export declare function intercalate<M, F extends URIS2, E>(
  M: Monoid<M>,
  F: Foldable2C<F, E>,
): (middle: M, fm: Kind2<F, E, M>) => M



export declare function intercalate<M, F extends URIS>(M: Monoid<M>, F: Foldable1<F>): (middle: M, fm: Kind<F, M>) => M



export declare function intercalate<M, F>(M: Monoid<M>, F: Foldable<F>): (middle: M, fm: HKT<F, M>) => M

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { intercalate } from '@fp-tx/core/Foldable'
import * as S from '@fp-tx/core/string'
import { make, Foldable } from '@fp-tx/core/Tree'

const t = make('a', [make('b', []), make('c', []), make('d', [])])
assert.strictEqual(intercalate(S.Monoid, Foldable)('|', t), 'a|b|c|d')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`

`reduce` composition.




#### Signature

```typescript
export declare function reduce<F extends URIS, G extends URIS>(
  F: Foldable1<F>,
  G: Foldable1<G>,
): <B, A>(b: B, f: (b: B, a: A) => B) => (fga: Kind<F, Kind<G, A>>) => B



export declare function reduce<F, G>(
  F: Foldable<F>,
  G: Foldable<G>,
): <B, A>(b: B, f: (b: B, a: A) => B) => (fga: HKT<F, HKT<G, A>>) => B

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceM`

Similar to 'reduce', but the result is encapsulated in a monad.


Note: this function is not generally stack-safe, e.g., for monads which build up thunks a la `IO`.




#### Signature

```typescript
export declare function reduceM<M extends URIS3, F extends URIS>(
  M: Monad3<M>,
  F: Foldable1<F>,
): <B, A, R, E>(b: B, f: (b: B, a: A) => Kind3<M, R, E, B>) => (fa: Kind<F, A>) => Kind3<M, R, E, B>



export declare function reduceM<M extends URIS3, F extends URIS, E>(
  M: Monad3C<M, E>,
  F: Foldable1<F>,
): <B, A, R>(b: B, f: (b: B, a: A) => Kind3<M, R, E, B>) => (fa: Kind<F, A>) => Kind3<M, R, E, B>



export declare function reduceM<M extends URIS2, F extends URIS>(
  M: Monad2<M>,
  F: Foldable1<F>,
): <B, A, E>(b: B, f: (b: B, a: A) => Kind2<M, E, B>) => (fa: Kind<F, A>) => Kind2<M, E, B>



export declare function reduceM<M extends URIS2, F extends URIS, E>(
  M: Monad2C<M, E>,
  F: Foldable1<F>,
): <B, A>(b: B, f: (b: B, a: A) => Kind2<M, E, B>) => (fa: Kind<F, A>) => Kind2<M, E, B>



export declare function reduceM<M extends URIS, F extends URIS>(
  M: Monad1<M>,
  F: Foldable1<F>,
): <B, A>(b: B, f: (b: B, a: A) => Kind<M, B>) => (fa: Kind<F, A>) => Kind<M, B>



export declare function reduceM<M, F>(
  M: Monad<M>,
  F: Foldable<F>,
): <B, A>(b: B, f: (b: B, a: A) => HKT<M, B>) => (fa: HKT<F, A>) => HKT<M, B>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reduceM } from '@fp-tx/core/Foldable'
import { Monad, some } from '@fp-tx/core/Option'
import { make, Foldable } from '@fp-tx/core/Tree'
import { pipe } from '@fp-tx/core/function'

const t = make(1, [make(2, []), make(3, []), make(4, [])])
assert.deepStrictEqual(
  pipe(
    t,
    reduceM(Monad, Foldable)(0, (b, a) => (a > 2 ? some(b + a) : some(b))),
  ),
  some(7),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`

`reduceRight` composition.




#### Signature

```typescript
export declare function reduceRight<F extends URIS, G extends URIS>(
  F: Foldable1<F>,
  G: Foldable1<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (fga: Kind<F, Kind<G, A>>) => B



export declare function reduceRight<F, G>(
  F: Foldable<F>,
  G: Foldable<G>,
): <B, A>(b: B, f: (a: A, b: B) => B) => (fga: HKT<F, HKT<G, A>>) => B

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`toArray`~~

Use [`toReadonlyArray`](#toreadonlyarray) instead




#### Signature

```typescript
export declare const toArray: typeof toReadonlyArray
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toReadonlyArray`

Transforms a `Foldable` into a `toReadonlyArray`.




#### Signature

```typescript
export declare function toReadonlyArray<F extends URIS4>(
  F: Foldable4<F>,
): <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => ReadonlyArray<A>



export declare function toReadonlyArray<F extends URIS3>(
  F: Foldable3<F>,
): <R, E, A>(fa: Kind3<F, R, E, A>) => ReadonlyArray<A>



export declare function toReadonlyArray<F extends URIS3, E>(
  F: Foldable3C<F, E>,
): <R, A>(fa: Kind3<F, R, E, A>) => ReadonlyArray<A>



export declare function toReadonlyArray<F extends URIS2>(
  F: Foldable2<F>,
): <E, A>(fa: Kind2<F, E, A>) => ReadonlyArray<A>



export declare function toReadonlyArray<F extends URIS2, E>(
  F: Foldable2C<F, E>,
): <A>(fa: Kind2<F, E, A>) => ReadonlyArray<A>



export declare function toReadonlyArray<F extends URIS>(F: Foldable1<F>): <A>(fa: Kind<F, A>) => ReadonlyArray<A>



export declare function toReadonlyArray<F>(F: Foldable<F>): <A>(fa: HKT<F, A>) => ReadonlyArray<A>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { toReadonlyArray } from '@fp-tx/core/Foldable'
import { Foldable, make } from '@fp-tx/core/Tree'

const t = make(1, [make(2, []), make(3, []), make(4, [])])
assert.deepStrictEqual(toReadonlyArray(Foldable)(t), [1, 2, 3, 4])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse_`

Traverse a data structure, performing some effects encoded by an `Applicative` functor at each value, ignoring the final result.




#### Signature

```typescript
export declare function traverse_<M extends URIS3, F extends URIS>(
  M: Applicative3<M>,
  F: Foldable1<F>,
): <R, E, A, B>(fa: Kind<F, A>, f: (a: A) => Kind3<M, R, E, B>) => Kind3<M, R, E, void>



export declare function traverse_<M extends URIS2, F extends URIS>(
  M: Applicative2<M>,
  F: Foldable1<F>,
): <E, A, B>(fa: Kind<F, A>, f: (a: A) => Kind2<M, E, B>) => Kind2<M, E, void>



export declare function traverse_<M extends URIS2, F extends URIS, E>(
  M: Applicative2C<M, E>,
  F: Foldable1<F>,
): <A, B>(fa: Kind<F, A>, f: (a: A) => Kind2<M, E, B>) => Kind2<M, E, void>



export declare function traverse_<M extends URIS, F extends URIS>(
  M: Applicative1<M>,
  F: Foldable1<F>,
): <A, B>(fa: Kind<F, A>, f: (a: A) => Kind<M, B>) => Kind<M, void>



export declare function traverse_<M, F>(
  M: Applicative<M>,
  F: Foldable<F>,
): <A, B>(fa: HKT<F, A>, f: (a: A) => HKT<M, B>) => HKT<M, void>

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { Foldable } from '@fp-tx/core/Array'
import { traverse_ } from '@fp-tx/core/Foldable'
import { Applicative } from '@fp-tx/core/IO'

let log = ''
const append = (s: string) => () => (log += s)
traverse_(Applicative, Foldable)(['a', 'b', 'c'], append)()
assert.strictEqual(log, 'abc')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti