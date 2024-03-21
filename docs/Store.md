
# Store







### Instances

* [Comonad](#comonad)
* [Functor](#functor)

### Extract

* [extract](#extract)

### Mapping

* [flap](#flap)
* [map](#map)

### Model

* [Store](#store)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [duplicate](#duplicate)
* [experiment](#experiment)
* [extend](#extend)
* [peeks](#peeks)
* [seek](#seek)
* [seeks](#seeks)
* ~~[store](#store)~~ (deprecated)

## Instances


### `Comonad`




#### Signature

```typescript
export declare const Comonad: Comonad2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Extract


### `extract`




#### Signature

```typescript
export declare const extract: <E, A>(wa: Store<E, A>) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: Store<E, (a: A) => B>) => Store<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

`map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types use the type constructor `F` to represent some computational context.




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Store<E, A>) => Store<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Store`




#### Signature

```typescript
export interface Store<S, A> {
  readonly peek: (s: S) => A
  readonly pos: S
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Type lambdas


### `URI`




#### Signature

```typescript
export type URI = typeof URI
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URI`




#### Signature

```typescript
export declare const URI = 'Store'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `duplicate`




#### Signature

```typescript
export declare const duplicate: <E, A>(wa: Store<E, A>) => Store<E, Store<E, A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `experiment`

Extract a collection of values from positions which depend on the current position




#### Signature

```typescript
export declare function experiment<F extends URIS3>(
  F: Functor3<F>,
): <R, E, S>(f: (s: S) => Kind3<F, R, E, S>) => <A>(wa: Store<S, A>) => Kind3<F, R, E, A>



export declare function experiment<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <R, S>(f: (s: S) => Kind3<F, R, E, S>) => <A>(wa: Store<S, A>) => Kind3<F, R, E, A>



export declare function experiment<F extends URIS2>(
  F: Functor2<F>,
): <E, S>(f: (s: S) => Kind2<F, E, S>) => <A>(wa: Store<S, A>) => Kind2<F, E, A>



export declare function experiment<F extends URIS2, E>(
  F: Functor2C<F, E>,
): <S>(f: (s: S) => Kind2<F, E, S>) => <A>(wa: Store<S, A>) => Kind2<F, E, A>



export declare function experiment<F extends URIS>(
  F: Functor1<F>,
): <S>(f: (s: S) => Kind<F, S>) => <A>(wa: Store<S, A>) => Kind<F, A>



export declare function experiment<F>(
  F: FunctorHKT<F>,
): <S>(f: (s: S) => HKT<F, S>) => <A>(wa: Store<S, A>) => HKT<F, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`




#### Signature

```typescript
export declare const extend: <E, A, B>(f: (wa: Store<E, A>) => B) => (wa: Store<E, A>) => Store<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `peeks`

Extract a value from a position which depends on the current position




#### Signature

```typescript
export declare function peeks<S>(f: Endomorphism<S>): <A>(wa: Store<S, A>) => A

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `seek`

Reposition the focus at the specified position




#### Signature

```typescript
export declare function seek<S>(s: S): <A>(wa: Store<S, A>) => Store<S, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `seeks`

Reposition the focus at the specified position, which depends on the current position




#### Signature

```typescript
export declare function seeks<S>(f: Endomorphism<S>): <A>(wa: Store<S, A>) => Store<S, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`store`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Comonad` instance, pass `S.Comonad` instead of `S.store` (where `S` is from `import S from 'fp-ts/Store'`)




#### Signature

```typescript
export declare const store: Comonad2<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti