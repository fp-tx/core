
# FromIO







### Model

* [FromIO](#fromio)
* [FromIO1](#fromio1)
* [FromIO2](#fromio2)
* [FromIO2C](#fromio2c)
* [FromIO3](#fromio3)
* [FromIO3C](#fromio3c)
* [FromIO4](#fromio4)

### Utilities

* [chainFirstIOK](#chainfirstiok)
* [chainIOK](#chainiok)
* [fromIOK](#fromiok)

## Model


### `FromIO`




#### Signature

```typescript
export interface FromIO<F> {
  readonly fromIO: <A>(fa: IO<A>) => HKT<F, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO1`




#### Signature

```typescript
export interface FromIO1<F extends URIS> {
  readonly fromIO: <A>(fa: IO<A>) => Kind<F, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO2`




#### Signature

```typescript
export interface FromIO2<F extends URIS2> {
  readonly fromIO: <A, E>(fa: IO<A>) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO2C`




#### Signature

```typescript
export interface FromIO2C<F extends URIS2, E> {
  readonly _E: E
  readonly fromIO: <A>(fa: IO<A>) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO3`




#### Signature

```typescript
export interface FromIO3<F extends URIS3> {
  readonly fromIO: <A, R, E>(fa: IO<A>) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO3C`




#### Signature

```typescript
export interface FromIO3C<F extends URIS3, E> {
  readonly _E: E
  readonly fromIO: <A, R>(fa: IO<A>) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO4`




#### Signature

```typescript
export interface FromIO4<F extends URIS4> {
  readonly fromIO: <A, S, R, E>(fa: IO<A>) => Kind4<F, S, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `chainFirstIOK`




#### Signature

```typescript
export declare function chainFirstIOK<M extends URIS4>(
  F: FromIO4<M>,
  M: Chain4<M>,
): <A, B>(f: (a: A) => IO<B>) => <S, R, E>(first: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, A>



export declare function chainFirstIOK<M extends URIS3>(
  F: FromIO3<M>,
  M: Chain3<M>,
): <A, B>(f: (a: A) => IO<B>) => <R, E>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>



export declare function chainFirstIOK<M extends URIS3, E>(
  F: FromIO3C<M, E>,
  M: Chain3C<M, E>,
): <A, B>(f: (a: A) => IO<B>) => <R, E>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>



export declare function chainFirstIOK<M extends URIS2>(
  F: FromIO2<M>,
  M: Chain2<M>,
): <A, B>(f: (a: A) => IO<B>) => <E>(first: Kind2<M, E, A>) => Kind2<M, E, A>



export declare function chainFirstIOK<M extends URIS2, E>(
  F: FromIO2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(f: (a: A) => IO<B>) => <E>(first: Kind2<M, E, A>) => Kind2<M, E, A>



export declare function chainFirstIOK<M extends URIS>(
  F: FromIO1<M>,
  M: Chain1<M>,
): <A, B>(f: (a: A) => IO<B>) => (first: Kind<M, A>) => Kind<M, A>



export declare function chainFirstIOK<M>(
  F: FromIO<M>,
  M: Chain<M>,
): <A, B>(f: (a: A) => IO<B>) => (first: HKT<M, A>) => HKT<M, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOK`




#### Signature

```typescript
export declare function chainIOK<M extends URIS4>(
  F: FromIO4<M>,
  M: Chain4<M>,
): <A, B>(f: (a: A) => IO<B>) => <S, R, E>(first: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>



export declare function chainIOK<M extends URIS3>(
  F: FromIO3<M>,
  M: Chain3<M>,
): <A, B>(f: (a: A) => IO<B>) => <R, E>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, B>



export declare function chainIOK<M extends URIS3, E>(
  F: FromIO3C<M, E>,
  M: Chain3C<M, E>,
): <A, B>(f: (a: A) => IO<B>) => <R>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, B>



export declare function chainIOK<M extends URIS2>(
  F: FromIO2<M>,
  M: Chain2<M>,
): <A, B>(f: (a: A) => IO<B>) => <E>(first: Kind2<M, E, A>) => Kind2<M, E, B>



export declare function chainIOK<M extends URIS2, E>(
  F: FromIO2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(f: (a: A) => IO<B>) => (first: Kind2<M, E, A>) => Kind2<M, E, B>



export declare function chainIOK<M extends URIS>(
  F: FromIO1<M>,
  M: Chain1<M>,
): <A, B>(f: (a: A) => IO<B>) => (first: Kind<M, A>) => Kind<M, B>



export declare function chainIOK<M>(
  F: FromIO<M>,
  M: Chain<M>,
): <A, B>(f: (a: A) => IO<B>) => (first: HKT<M, A>) => HKT<M, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOK`




#### Signature

```typescript
export declare function fromIOK<F extends URIS4>(
  F: FromIO4<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => <S, R, E>(...a: A) => Kind4<F, S, R, E, B>



export declare function fromIOK<F extends URIS3>(
  F: FromIO3<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => <R, E>(...a: A) => Kind3<F, R, E, B>



export declare function fromIOK<F extends URIS3, E>(
  F: FromIO3C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => <R>(...a: A) => Kind3<F, R, E, B>



export declare function fromIOK<F extends URIS2>(
  F: FromIO2<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => <E>(...a: A) => Kind2<F, E, B>



export declare function fromIOK<F extends URIS2, E>(
  F: FromIO2C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => Kind2<F, E, B>



export declare function fromIOK<F extends URIS>(
  F: FromIO1<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => Kind<F, B>



export declare function fromIOK<F>(
  F: FromIO<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti