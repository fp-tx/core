
# FromState







### Constructors

* [get](#get)
* [gets](#gets)
* [modify](#modify)
* [put](#put)

### Model

* [FromState](#fromstate)
* [FromState2](#fromstate2)
* [FromState3](#fromstate3)
* [FromState3C](#fromstate3c)
* [FromState4](#fromstate4)

### Utilities

* [chainStateK](#chainstatek)
* [fromStateK](#fromstatek)

## Constructors


### `get`




#### Signature

```typescript
export declare function get<F extends URIS4>(F: FromState4<F>): <S, R, E>() => Kind4<F, S, R, E, S>



export declare function get<F extends URIS3>(F: FromState3<F>): <S, E>() => Kind3<F, S, E, S>



export declare function get<F extends URIS3, E>(F: FromState3C<F, E>): <S>() => Kind3<F, S, E, S>



export declare function get<F extends URIS2>(F: FromState2<F>): <S>() => Kind2<F, S, S>



export declare function get<F>(F: FromState<F>): <S>() => HKT2<F, S, S>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `gets`




#### Signature

```typescript
export declare function gets<F extends URIS4>(F: FromState4<F>): <S, R, E, A>(f: (s: S) => A) => Kind4<F, S, R, E, A>



export declare function gets<F extends URIS3>(F: FromState3<F>): <S, E, A>(f: (s: S) => A) => Kind3<F, S, E, A>



export declare function gets<F extends URIS3, E>(F: FromState3C<F, E>): <S, A>(f: (s: S) => A) => Kind3<F, S, E, A>



export declare function gets<F extends URIS2>(F: FromState2<F>): <S, A>(f: (s: S) => A) => Kind2<F, S, A>



export declare function gets<F>(F: FromState<F>): <S, A>(f: (s: S) => A) => HKT2<F, S, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modify`




#### Signature

```typescript
export declare function modify<F extends URIS4>(
  F: FromState4<F>,
): <S, R, E>(f: Endomorphism<S>) => Kind4<F, S, R, E, void>



export declare function modify<F extends URIS3>(F: FromState3<F>): <S, E>(f: Endomorphism<S>) => Kind3<F, S, E, void>



export declare function modify<F extends URIS3, E>(
  F: FromState3C<F, E>,
): <S>(f: Endomorphism<S>) => Kind3<F, S, E, void>



export declare function modify<F extends URIS2>(F: FromState2<F>): <S>(f: Endomorphism<S>) => Kind2<F, S, void>



export declare function modify<F>(F: FromState<F>): <S>(f: Endomorphism<S>) => HKT2<F, S, void>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `put`




#### Signature

```typescript
export declare function put<F extends URIS4>(F: FromState4<F>): <S, R, E>(s: S) => Kind4<F, S, R, E, void>



export declare function put<F extends URIS3>(F: FromState3<F>): <S, E>(s: S) => Kind3<F, S, E, void>



export declare function put<F extends URIS3, E>(F: FromState3C<F, E>): <S>(s: S) => Kind3<F, S, E, void>



export declare function put<F extends URIS2>(F: FromState2<F>): <S>(s: S) => Kind2<F, S, void>



export declare function put<F>(F: FromState<F>): <S>(s: S) => HKT2<F, S, void>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `FromState`




#### Signature

```typescript
export interface FromState<F> {
  readonly fromState: <S, A>(fa: State<S, A>) => HKT2<F, S, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromState2`




#### Signature

```typescript
export interface FromState2<F extends URIS2> {
  readonly fromState: <S, A>(fa: State<S, A>) => Kind2<F, S, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromState3`




#### Signature

```typescript
export interface FromState3<F extends URIS3> {
  readonly fromState: <S, A, E>(fa: State<S, A>) => Kind3<F, S, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromState3C`




#### Signature

```typescript
export interface FromState3C<F extends URIS3, E> {
  readonly _E: E
  readonly fromState: <S, A>(fa: State<S, A>) => Kind3<F, S, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromState4`




#### Signature

```typescript
export interface FromState4<F extends URIS4> {
  readonly fromState: <S, A, R, E>(fa: State<S, A>) => Kind4<F, S, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `chainStateK`




#### Signature

```typescript
export declare function chainStateK<M extends URIS4>(
  F: FromState4<M>,
  M: Chain4<M>,
): <A, S, B>(f: (a: A) => State<S, B>) => <R, E>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>



export declare function chainStateK<M extends URIS3>(
  F: FromState3<M>,
  M: Chain3<M>,
): <A, S, B>(f: (a: A) => State<S, B>) => <E>(ma: Kind3<M, S, E, A>) => Kind3<M, S, E, B>



export declare function chainStateK<M extends URIS2>(
  F: FromState2<M>,
  M: Chain2<M>,
): <A, S, B>(f: (a: A) => State<S, B>) => (ma: Kind2<M, S, A>) => Kind2<M, S, B>



export declare function chainStateK<M>(
  F: FromState<M>,
  M: Chain<M>,
): <A, S, B>(f: (a: A) => State<S, B>) => (ma: HKT2<M, S, A>) => HKT2<M, S, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromStateK`




#### Signature

```typescript
export declare function fromStateK<F extends URIS4>(
  F: FromState4<F>,
): <A extends ReadonlyArray<unknown>, S, B>(f: (...a: A) => State<S, B>) => <R, E>(...a: A) => Kind4<F, S, R, E, B>



export declare function fromStateK<F extends URIS3>(
  F: FromState3<F>,
): <A extends ReadonlyArray<unknown>, S, B>(f: (...a: A) => State<S, B>) => <E>(...a: A) => Kind3<F, S, E, B>



export declare function fromStateK<F extends URIS3, E>(
  F: FromState3C<F, E>,
): <A extends ReadonlyArray<unknown>, S, B>(f: (...a: A) => State<S, B>) => (...a: A) => Kind3<F, S, E, B>



export declare function fromStateK<F extends URIS2>(
  F: FromState2<F>,
): <A extends ReadonlyArray<unknown>, S, B>(f: (...a: A) => State<S, B>) => (...a: A) => Kind2<F, S, B>



export declare function fromStateK<F>(
  F: FromState<F>,
): <A extends ReadonlyArray<unknown>, S, B>(f: (...a: A) => State<S, B>) => (...a: A) => HKT2<F, S, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti