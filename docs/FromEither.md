
# FromEither







### Constructors

* [fromOption](#fromoption)

### Lifting

* [fromPredicate](#frompredicate)

### Model

* [FromEither](#fromeither)
* [FromEither1](#fromeither1)
* [FromEither2](#fromeither2)
* [FromEither2C](#fromeither2c)
* [FromEither3](#fromeither3)
* [FromEither3C](#fromeither3c)
* [FromEither4](#fromeither4)

### Utilities

* [chainEitherK](#chaineitherk)
* [chainFirstEitherK](#chainfirsteitherk)
* [chainOptionK](#chainoptionk)
* [filterOrElse](#filterorelse)
* [fromEitherK](#fromeitherk)
* [fromOptionK](#fromoptionk)

## Constructors


### `fromOption`




#### Signature

```typescript
export declare function fromOption<F extends URIS4>(
  F: FromEither4<F>,
): <E>(onNone: LazyArg<E>) => <A, S, R>(fa: Option<A>) => Kind4<F, S, R, E, A>



export declare function fromOption<F extends URIS3>(
  F: FromEither3<F>,
): <E>(onNone: LazyArg<E>) => <A, R>(fa: Option<A>) => Kind3<F, R, E, A>



export declare function fromOption<F extends URIS3, E>(
  F: FromEither3C<F, E>,
): (onNone: LazyArg<E>) => <A, R>(fa: Option<A>) => Kind3<F, R, E, A>



export declare function fromOption<F extends URIS2>(
  F: FromEither2<F>,
): <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => Kind2<F, E, A>



export declare function fromOption<F extends URIS2, E>(
  F: FromEither2C<F, E>,
): (onNone: LazyArg<E>) => <A>(fa: Option<A>) => Kind2<F, E, A>



export declare function fromOption<F>(F: FromEither<F>): <E>(onNone: LazyArg<E>) => <A>(ma: Option<A>) => HKT2<F, E, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromPredicate`




#### Signature

```typescript
export declare function fromPredicate<F extends URIS4>(
  F: FromEither4<F>,
): {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <S, R>(a: A) => Kind4<F, S, R, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <S, R, B extends A>(b: B) => Kind4<F, S, R, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <S, R>(a: A) => Kind4<F, S, R, E, A>
}



export declare function fromPredicate<F extends URIS3>(
  F: FromEither3<F>,
): {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <R>(a: A) => Kind3<F, R, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <R, B extends A>(b: B) => Kind3<F, R, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(a: A) => Kind3<F, R, E, A>
}



export declare function fromPredicate<F extends URIS3, E>(
  F: FromEither3C<F, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <R>(a: A) => Kind3<F, R, E, B>
  <A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R, B extends A>(b: B) => Kind3<F, R, E, B>
  <A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(a: A) => Kind3<F, R, E, A>
}



export declare function fromPredicate<F extends URIS2>(
  F: FromEither2<F>,
): {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => Kind2<F, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => Kind2<F, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => Kind2<F, E, A>
}



export declare function fromPredicate<F extends URIS2, E>(
  F: FromEither2C<F, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => Kind2<F, E, B>
  <A>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => Kind2<F, E, B>
  <A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => Kind2<F, E, A>
}



export declare function fromPredicate<F>(F: FromEither<F>): {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => HKT2<F, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => HKT2<F, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => HKT2<F, E, A>
}

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `FromEither`




#### Signature

```typescript
export interface FromEither<F> {
  readonly fromEither: <E, A>(e: Either<E, A>) => HKT2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither1`




#### Signature

```typescript
export interface FromEither1<F extends URIS> {
  readonly fromEither: <A>(fa: Either<unknown, A>) => Kind<F, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither2`




#### Signature

```typescript
export interface FromEither2<F extends URIS2> {
  readonly fromEither: <E, A>(fa: Either<E, A>) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither2C`




#### Signature

```typescript
export interface FromEither2C<F extends URIS2, E> {
  readonly _E: E
  readonly fromEither: <A>(fa: Either<E, A>) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither3`




#### Signature

```typescript
export interface FromEither3<F extends URIS3> {
  readonly fromEither: <E, A, R>(fa: Either<E, A>) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither3C`




#### Signature

```typescript
export interface FromEither3C<F extends URIS3, E> {
  readonly _E: E
  readonly fromEither: <A, R>(fa: Either<E, A>) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromEither4`




#### Signature

```typescript
export interface FromEither4<F extends URIS4> {
  readonly fromEither: <E, A, S, R>(fa: Either<E, A>) => Kind4<F, S, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `chainEitherK`




#### Signature

```typescript
export declare function chainEitherK<M extends URIS4>(
  F: FromEither4<M>,
  M: Chain4<M>,
): <A, E, B>(f: (a: A) => Either<E, B>) => <S, R>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>



export declare function chainEitherK<M extends URIS3>(
  F: FromEither3<M>,
  M: Chain3<M>,
): <A, E, B>(f: (a: A) => Either<E, B>) => <R>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>



export declare function chainEitherK<M extends URIS3, E>(
  F: FromEither3C<M, E>,
  M: Chain3C<M, E>,
): <A, B>(f: (a: A) => Either<E, B>) => <R>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>



export declare function chainEitherK<M extends URIS2>(
  F: FromEither2<M>,
  M: Chain2<M>,
): <A, E, B>(f: (a: A) => Either<E, B>) => (ma: Kind2<M, E, A>) => Kind2<M, E, B>



export declare function chainEitherK<M extends URIS2, E>(
  F: FromEither2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(f: (a: A) => Either<E, B>) => (ma: Kind2<M, E, A>) => Kind2<M, E, B>



export declare function chainEitherK<M extends URIS>(
  F: FromEither1<M>,
  M: Chain1<M>,
): <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Kind<M, A>) => Kind<M, B>



export declare function chainEitherK<M>(
  F: FromEither<M>,
  M: Chain<M>,
): <A, E, B>(f: (a: A) => Either<E, B>) => (ma: HKT2<M, E, A>) => HKT2<M, E, B>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstEitherK`




#### Signature

```typescript
export declare function chainFirstEitherK<M extends URIS4>(
  F: FromEither4<M>,
  M: Chain4<M>,
): <A, E, B>(f: (a: A) => Either<E, B>) => <S, R>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, A>



export declare function chainFirstEitherK<M extends URIS3>(
  F: FromEither3<M>,
  M: Chain3<M>,
): <A, E, B>(f: (a: A) => Either<E, B>) => <R>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, A>



export declare function chainFirstEitherK<M extends URIS3, E>(
  F: FromEither3C<M, E>,
  M: Chain3C<M, E>,
): <A, B>(f: (a: A) => Either<E, B>) => <R>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, A>



export declare function chainFirstEitherK<M extends URIS2>(
  F: FromEither2<M>,
  M: Chain2<M>,
): <A, E, B>(f: (a: A) => Either<E, B>) => (ma: Kind2<M, E, A>) => Kind2<M, E, A>



export declare function chainFirstEitherK<M extends URIS2, E>(
  F: FromEither2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(f: (a: A) => Either<E, B>) => (ma: Kind2<M, E, A>) => Kind2<M, E, A>



export declare function chainFirstEitherK<M extends URIS>(
  F: FromEither1<M>,
  M: Chain1<M>,
): <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Kind<M, A>) => Kind<M, A>



export declare function chainFirstEitherK<M>(
  F: FromEither<M>,
  M: Chain<M>,
): <A, E, B>(f: (a: A) => Either<E, B>) => (ma: HKT2<M, E, A>) => HKT2<M, E, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionK`




#### Signature

```typescript
export declare function chainOptionK<F extends URIS4>(
  F: FromEither4<F>,
  M: Chain4<F>,
): <E>(onNone: LazyArg<E>) => <A, B>(f: (a: A) => Option<B>) => <S, R>(ma: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>



export declare function chainOptionK<F extends URIS3>(
  F: FromEither3<F>,
  M: Chain3<F>,
): <E>(onNone: LazyArg<E>) => <A, B>(f: (a: A) => Option<B>) => <R>(ma: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function chainOptionK<F extends URIS3, E>(
  F: FromEither3C<F, E>,
  M: Chain3C<F, E>,
): (onNone: LazyArg<E>) => <A, B>(f: (a: A) => Option<B>) => <R>(ma: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function chainOptionK<F extends URIS2>(
  F: FromEither2<F>,
  M: Chain2<F>,
): <E>(onNone: LazyArg<E>) => <A, B>(f: (a: A) => Option<B>) => (ma: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function chainOptionK<F extends URIS2, E>(
  F: FromEither2C<F, E>,
  M: Chain2C<F, E>,
): (onNone: LazyArg<E>) => <A, B>(f: (a: A) => Option<B>) => (ma: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function chainOptionK<F>(
  F: FromEither<F>,
  M: Chain<F>,
): <E>(onNone: LazyArg<E>) => <A, B>(f: (a: A) => Option<B>) => (ma: HKT2<F, E, A>) => HKT2<F, E, B>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterOrElse`




#### Signature

```typescript
export declare function filterOrElse<M extends URIS4>(
  F: FromEither4<M>,
  M: Chain4<M>,
): {
  <A, B extends A, E>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <S, R>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>
  <A, E>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <S, R, B extends A>(mb: Kind4<M, S, R, E, B>) => Kind4<M, S, R, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <S, R>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, A>
}



export declare function filterOrElse<M extends URIS3>(
  F: FromEither3<M>,
  M: Chain3<M>,
): {
  <A, B extends A, E>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <R>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <R, B extends A>(mb: Kind3<M, R, E, B>) => Kind3<M, R, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
}



export declare function filterOrElse<M extends URIS3, E>(
  F: FromEither3C<M, E>,
  M: Chain3C<M, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <R>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
  <A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R, B extends A>(mb: Kind3<M, R, E, B>) => Kind3<M, R, E, B>
  <A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
}



export declare function filterOrElse<M extends URIS2>(
  F: FromEither2<M>,
  M: Chain2<M>,
): {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (self: Kind2<M, E, A>) => Kind2<M, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(self: Kind2<M, E, B>) => Kind2<M, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (self: Kind2<M, E, A>) => Kind2<M, E, A>
}



export declare function filterOrElse<M extends URIS2, E>(
  F: FromEither2C<M, E>,
  M: Chain2C<M, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: Kind2<M, E, A>) => Kind2<M, E, B>
  <A>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(mb: Kind2<M, E, B>) => Kind2<M, E, B>
  <A>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: Kind2<M, E, A>) => Kind2<M, E, A>
}



export declare function filterOrElse<M extends URIS2>(
  F: FromEither<M>,
  M: Chain<M>,
): {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: HKT2<M, E, A>) => HKT2<M, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(mb: HKT2<M, E, B>) => HKT2<M, E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: HKT2<M, E, A>) => HKT2<M, E, A>
}

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromEitherK`




#### Signature

```typescript
export declare function fromEitherK<F extends URIS4>(
  F: FromEither4<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => Either<E, B>) => <S, R>(...a: A) => Kind4<F, S, R, E, B>



export declare function fromEitherK<F extends URIS3>(
  F: FromEither3<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => Either<E, B>) => <R>(...a: A) => Kind3<F, R, E, B>



export declare function fromEitherK<F extends URIS3, E>(
  F: FromEither3C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Either<E, B>) => <R>(...a: A) => Kind3<F, R, E, B>



export declare function fromEitherK<F extends URIS2>(
  F: FromEither2<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => Either<E, B>) => (...a: A) => Kind2<F, E, B>



export declare function fromEitherK<F extends URIS2, E>(
  F: FromEither2C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Either<E, B>) => (...a: A) => Kind2<F, E, B>



export declare function fromEitherK<F extends URIS>(
  F: FromEither1<F>,
): <E, A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Either<E, B>) => (...a: A) => Kind<F, B>



export declare function fromEitherK<F>(
  F: FromEither<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => Either<E, B>) => (...a: A) => HKT2<F, E, B>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`




#### Signature

```typescript
export declare function fromOptionK<F extends URIS4>(
  F: FromEither4<F>,
): <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => <S, R>(...a: A) => Kind4<F, S, R, E, B>



export declare function fromOptionK<F extends URIS3>(
  F: FromEither3<F>,
): <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => <R>(...a: A) => Kind3<F, R, E, B>



export declare function fromOptionK<F extends URIS3, E>(
  F: FromEither3C<F, E>,
): (
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => <R>(...a: A) => Kind3<F, R, E, B>



export declare function fromOptionK<F extends URIS2>(
  F: FromEither2<F>,
): <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => Kind2<F, E, B>



export declare function fromOptionK<F extends URIS2, E>(
  F: FromEither2C<F, E>,
): (
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => Kind2<F, E, B>



export declare function fromOptionK<F>(
  F: FromEither<F>,
): <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => HKT2<F, E, B>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti