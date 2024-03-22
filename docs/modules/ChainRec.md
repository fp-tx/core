
# ChainRec







### Model

* [ChainRec](#chainrec)
* [ChainRec1](#chainrec1)
* [ChainRec2](#chainrec2)
* [ChainRec2C](#chainrec2c)
* [ChainRec3](#chainrec3)
* [ChainRec3C](#chainrec3c)
* [ChainRec4](#chainrec4)

### Utils

* [chainRec2](#chainrec2)
* [chainRec3](#chainrec3)
* [forever](#forever)
* [tailRec2](#tailrec2)
* [tailRec3](#tailrec3)
* [untilSome](#untilsome)
* [whileSome](#whilesome)

### Utilities

* [KindGenerator2](#kindgenerator2)
* [do](#do)
* [tailRec](#tailrec)

## Model


### `ChainRec`




#### Signature

```typescript
export interface ChainRec<F> extends Chain<F> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => HKT<F, E.Either<A, B>>) => HKT<F, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec1`




#### Signature

```typescript
export interface ChainRec1<F extends URIS> extends Chain1<F> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => Kind<F, E.Either<A, B>>) => Kind<F, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec2`




#### Signature

```typescript
export interface ChainRec2<F extends URIS2> extends Chain2<F> {
  readonly chainRec: <E, A, B>(a: A, f: (a: A) => Kind2<F, E, E.Either<A, B>>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec2C`




#### Signature

```typescript
export interface ChainRec2C<F extends URIS2, E> extends Chain2C<F, E> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => Kind2<F, E, E.Either<A, B>>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec3`




#### Signature

```typescript
export interface ChainRec3<F extends URIS3> extends Chain3<F> {
  readonly chainRec: <R, E, A, B>(a: A, f: (a: A) => Kind3<F, R, E, E.Either<A, B>>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec3C`




#### Signature

```typescript
export interface ChainRec3C<F extends URIS3, E> extends Chain3C<F, E> {
  readonly chainRec: <R, A, B>(a: A, f: (a: A) => Kind3<F, R, E, E.Either<A, B>>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec4`




#### Signature

```typescript
export interface ChainRec4<F extends URIS4> extends Chain4<F> {
  readonly chainRec: <S, R, E, A, B>(a: A, f: (a: A) => Kind4<F, S, R, E, E.Either<A, B>>) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utils


### `chainRec2`




#### Signature

```typescript
export declare function chainRec2<M extends URIS4>(
  M: ChainRec4<M>,
): <S, R, E, A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind4<M, S, R, E, E.Either<[A, B], C>>) => Kind4<M, S, R, E, C>



export declare function chainRec2<M extends URIS3>(
  M: ChainRec3<M>,
): <R, E, A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind3<M, R, E, E.Either<[A, B], C>>) => Kind3<M, R, E, C>



export declare function chainRec2<M extends URIS3, E>(
  M: ChainRec3C<M, E>,
): <R, A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind3<M, R, E, E.Either<[A, B], C>>) => Kind3<M, R, E, C>



export declare function chainRec2<M extends URIS2>(
  M: ChainRec2<M>,
): <E, A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind2<M, E, E.Either<[A, B], C>>) => Kind2<M, E, C>



export declare function chainRec2<M extends URIS2, E>(
  M: ChainRec2C<M, E>,
): <A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind2<M, E, E.Either<[A, B], C>>) => Kind2<M, E, C>



export declare function chainRec2<M extends URIS>(
  M: ChainRec1<M>,
): <A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind<M, E.Either<[A, B], C>>) => Kind<M, C>

```

#### Details

* Added in 0.1.0


#### License

* Copyright (c) 2022-present Jacob Alford

---


### `chainRec3`




#### Signature

```typescript
export declare function chainRec3<M extends URIS4>(
  M: ChainRec4<M>,
): <S, R, E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => Kind4<M, S, R, E, E.Either<[A, B, C], D>>,
) => Kind4<M, S, R, E, D>



export declare function chainRec3<M extends URIS3>(
  M: ChainRec3<M>,
): <R, E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => Kind3<M, R, E, E.Either<[A, B, C], D>>,
) => Kind3<M, R, E, D>



export declare function chainRec3<M extends URIS3, E>(
  M: ChainRec3C<M, E>,
): <R, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => Kind3<M, R, E, E.Either<[A, B, C], D>>,
) => Kind3<M, R, E, D>



export declare function chainRec3<M extends URIS2>(
  M: ChainRec2<M>,
): <E, A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => Kind2<M, E, E.Either<[A, B, C], D>>) => Kind2<M, E, D>



export declare function chainRec3<M extends URIS2, E>(
  M: ChainRec2C<M, E>,
): <A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => Kind2<M, E, E.Either<[A, B, C], D>>) => Kind2<M, E, D>



export declare function chainRec3<M extends URIS>(
  M: ChainRec1<M>,
): <A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => Kind<M, E.Either<[A, B, C], D>>) => Kind<M, D>

```

#### Details

* Added in 0.1.0


#### License

* Copyright (c) 2022-present Jacob Alford

---


### `forever`




#### Signature

```typescript
export declare function forever<M extends URIS4>(
  M: ChainRec4<M>,
): <S, R, E, A, B>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>



export declare function forever<M extends URIS3>(
  M: ChainRec3<M>,
): <R, E, A, B>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>



export declare function forever<M extends URIS3, E>(
  M: ChainRec3C<M, E>,
): <R, A, B>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>



export declare function forever<M extends URIS2>(M: ChainRec2<M>): <E, A, B>(ma: Kind2<M, E, A>) => Kind2<M, E, B>



export declare function forever<M extends URIS2, E>(M: ChainRec2C<M, E>): <A, B>(ma: Kind2<M, E, A>) => Kind2<M, E, B>



export declare function forever<M extends URIS>(M: ChainRec1<M>): <A, B>(ma: Kind<M, A>) => Kind<M, B>

```

#### Details

* Added in 0.1.0


#### License

* Copyright (c) 2022-present Jacob Alford

---


### `tailRec2`




#### Signature

```typescript
export declare const tailRec2: <A, B, C>(a: A, b: B, f: (a: A, b: B) => E.Either<readonly [A, B], C>) => C
```

#### Details

* Added in 0.1.0


#### License

* Copyright (c) 2022-present Jacob Alford

---


### `tailRec3`




#### Signature

```typescript
export declare const tailRec3: <A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => E.Either<readonly [A, B, C], D>,
) => D
```

#### Details

* Added in 0.1.0


#### License

* Copyright (c) 2022-present Jacob Alford

---


### `untilSome`




#### Signature

```typescript
export declare function untilSome<M extends URIS4>(
  M: ChainRec4<M>,
): <S, R, E, A>(ma: Kind4<M, S, R, E, O.Option<A>>) => Kind4<M, S, R, E, A>



export declare function untilSome<M extends URIS3>(
  M: ChainRec3<M>,
): <R, E, A>(ma: Kind3<M, R, E, O.Option<A>>) => Kind3<M, R, E, A>



export declare function untilSome<M extends URIS3, E>(
  M: ChainRec3C<M, E>,
): <R, A>(ma: Kind3<M, R, E, O.Option<A>>) => Kind3<M, R, E, A>



export declare function untilSome<M extends URIS2>(
  M: ChainRec2<M>,
): <E, A>(ma: Kind2<M, E, O.Option<A>>) => Kind2<M, E, A>



export declare function untilSome<M extends URIS2, E>(
  M: ChainRec2C<M, E>,
): <A>(ma: Kind2<M, E, O.Option<A>>) => Kind2<M, E, A>



export declare function untilSome<M extends URIS>(M: ChainRec1<M>): <A>(ma: Kind<M, O.Option<A>>) => Kind<M, A>

```

#### Details

* Added in 0.1.0


#### License

* Copyright (c) 2022-present Jacob Alford

---


### `whileSome`




#### Signature

```typescript
export declare function whileSome<M extends URIS4, A>(
  M: ChainRec4<M>,
  Mn: Mn.Monoid<A>,
): <S, R, E>(ma: Kind4<M, S, R, E, O.Option<A>>) => Kind4<M, S, R, E, A>



export declare function whileSome<M extends URIS3, A>(
  M: ChainRec3<M>,
  Mn: Mn.Monoid<A>,
): <R, E>(ma: Kind3<M, R, E, O.Option<A>>) => Kind3<M, R, E, A>



export declare function whileSome<M extends URIS3, E, A>(
  M: ChainRec3C<M, E>,
  Mn: Mn.Monoid<A>,
): <R>(ma: Kind3<M, R, E, O.Option<A>>) => Kind3<M, R, E, A>



export declare function whileSome<M extends URIS2, A>(
  M: ChainRec2<M>,
  Mn: Mn.Monoid<A>,
): <E>(ma: Kind2<M, E, O.Option<A>>) => Kind2<M, E, A>



export declare function whileSome<M extends URIS2, E, A>(
  M: ChainRec2C<M, E>,
  Mn: Mn.Monoid<A>,
): (ma: Kind2<M, E, O.Option<A>>) => Kind2<M, E, A>



export declare function whileSome<M extends URIS, A>(
  M: ChainRec1<M>,
  Mn: Mn.Monoid<A>,
): (ma: Kind<M, O.Option<A>>) => Kind<M, A>

```

#### Details

* Added in 0.1.0


#### License

* Copyright (c) 2022-present Jacob Alford

## Utilities


### `KindGenerator2`




#### Signature

```typescript
export interface KindGenerator2<M extends URIS2, E, out A> {
  [Symbol.iterator](): Generator<KindGenerator2<M, E, A>, A>
  readonly value: Kind2<M, E, A>
}
```




---


### `do`




#### Signature

```typescript
declare function do_<M extends URIS4>(P: Pointed4<M>, M: ChainRec4<M>): DoFunction4<M>



declare function do_<M extends URIS3>(P: Pointed3<M>, M: ChainRec3<M>): DoFunction3<M>



declare function do_<M extends URIS3, E>(P: Pointed3C<M, E>, M: ChainRec3C<M, E>): DoFunction3C<M, E>



declare function do_<M extends URIS2>(P: Pointed2<M>, M: ChainRec2<M>): DoFunction2<M>



declare function do_<M extends URIS2, E>(P: Pointed2C<M, E>, M: ChainRec2C<M, E>): DoFunction2C<M, E>



declare function do_<M extends URIS>(P: Pointed1<M>, M: ChainRec1<M>): DoFunction1<M>

```




---


### `tailRec`




#### Signature

```typescript
export declare const tailRec: <A, B>(startWith: A, f: (a: A) => E.Either<A, B>) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti