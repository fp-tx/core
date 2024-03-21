
# Chain







### Model

* [Chain](#chain)
* [Chain1](#chain1)
* [Chain2](#chain2)
* [Chain2C](#chain2c)
* [Chain3](#chain3)
* [Chain3C](#chain3c)
* [Chain4](#chain4)

### Utilities

* [bind](#bind)
* [chainFirst](#chainfirst)

## Model


### `Chain`




#### Signature

```typescript
export interface Chain<F> extends Apply<F> {
  readonly chain: <A, B>(fa: HKT<F, A>, f: (a: A) => HKT<F, B>) => HKT<F, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain1`




#### Signature

```typescript
export interface Chain1<F extends URIS> extends Apply1<F> {
  readonly chain: <A, B>(fa: Kind<F, A>, f: (a: A) => Kind<F, B>) => Kind<F, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain2`




#### Signature

```typescript
export interface Chain2<F extends URIS2> extends Apply2<F> {
  readonly chain: <E, A, B>(fa: Kind2<F, E, A>, f: (a: A) => Kind2<F, E, B>) => Kind2<F, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain2C`




#### Signature

```typescript
export interface Chain2C<F extends URIS2, E> extends Apply2C<F, E> {
  readonly chain: <A, B>(fa: Kind2<F, E, A>, f: (a: A) => Kind2<F, E, B>) => Kind2<F, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain3`




#### Signature

```typescript
export interface Chain3<F extends URIS3> extends Apply3<F> {
  readonly chain: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain3C`




#### Signature

```typescript
export interface Chain3C<F extends URIS3, E> extends Apply3C<F, E> {
  readonly chain: <R, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain4`




#### Signature

```typescript
export interface Chain4<F extends URIS4> extends Apply4<F> {
  readonly chain: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, f: (a: A) => Kind4<F, S, R, E, B>) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `bind`




#### Signature

```typescript
export declare function bind<M extends URIS4>(
  M: Chain4<M>,
): <N extends string, A, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<M, S, R, E, B>,
) => (ma: Kind4<M, S, R, E, A>) => Kind4<
  M,
  S,
  R,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



export declare function bind<M extends URIS3>(
  M: Chain3<M>,
): <N extends string, A, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<M, R, E, B>,
) => (ma: Kind3<M, R, E, A>) => Kind3<
  M,
  R,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



export declare function bind<M extends URIS3, E>(
  M: Chain3C<M, E>,
): <N extends string, A, R, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<M, R, E, B>,
) => (ma: Kind3<M, R, E, A>) => Kind3<
  M,
  R,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



export declare function bind<M extends URIS2>(
  M: Chain2<M>,
): <N extends string, A, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind2<M, E, B>,
) => (ma: Kind2<M, E, A>) => Kind2<
  M,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



export declare function bind<M extends URIS2, E>(
  M: Chain2C<M, E>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind2<M, E, B>,
) => (ma: Kind2<M, E, A>) => Kind2<
  M,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



export declare function bind<M extends URIS>(
  M: Chain1<M>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind<M, B>,
) => (ma: Kind<M, A>) => Kind<
  M,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



export declare function bind<M>(M: Chain<M>): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => HKT<M, B>,
) => (ma: HKT<M, A>) => HKT<
  M,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirst`




#### Signature

```typescript
export declare function chainFirst<M extends URIS4>(
  M: Chain4<M>,
): <A, S, R, E, _>(f: (a: A) => Kind4<M, S, R, E, _>) => (first: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, A>



export declare function chainFirst<M extends URIS3>(
  M: Chain3<M>,
): <A, R, E, _>(f: (a: A) => Kind3<M, R, E, _>) => (first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>



export declare function chainFirst<M extends URIS3, E>(
  M: Chain3C<M, E>,
): <A, R, _>(f: (a: A) => Kind3<M, R, E, _>) => (first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>



export declare function chainFirst<M extends URIS2>(
  M: Chain2<M>,
): <A, E, _>(f: (a: A) => Kind2<M, E, _>) => (first: Kind2<M, E, A>) => Kind2<M, E, A>



export declare function chainFirst<M extends URIS2, E>(
  M: Chain2C<M, E>,
): <A, _>(f: (a: A) => Kind2<M, E, _>) => (first: Kind2<M, E, A>) => Kind2<M, E, A>



export declare function chainFirst<M extends URIS>(
  M: Chain1<M>,
): <A, _>(f: (a: A) => Kind<M, _>) => (first: Kind<M, A>) => Kind<M, A>



export declare function chainFirst<M>(M: Chain<M>): <A, _>(f: (a: A) => HKT<M, _>) => (first: HKT<M, A>) => HKT<M, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti