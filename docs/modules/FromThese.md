
# FromThese







### Model

* [FromThese](#fromthese)
* [FromThese2](#fromthese2)
* [FromThese2C](#fromthese2c)
* [FromThese3](#fromthese3)
* [FromThese3C](#fromthese3c)
* [FromThese4](#fromthese4)

### Utilities

* [fromTheseK](#fromthesek)

## Model


### `FromThese`




#### Signature

```typescript
export interface FromThese<F> {
  readonly fromThese: <E, A>(e: These<E, A>) => HKT2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromThese2`




#### Signature

```typescript
export interface FromThese2<F extends URIS2> {
  readonly fromThese: <E, A>(fa: These<E, A>) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromThese2C`




#### Signature

```typescript
export interface FromThese2C<F extends URIS2, E> {
  readonly _E: E
  readonly fromThese: <A>(fa: These<E, A>) => Kind2<F, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromThese3`




#### Signature

```typescript
export interface FromThese3<F extends URIS3> {
  readonly fromThese: <E, A, R>(fa: These<E, A>) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromThese3C`




#### Signature

```typescript
export interface FromThese3C<F extends URIS3, E> {
  readonly _E: E
  readonly fromThese: <A, R>(fa: These<E, A>) => Kind3<F, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromThese4`




#### Signature

```typescript
export interface FromThese4<F extends URIS4> {
  readonly fromThese: <E, A, S, R>(fa: These<E, A>) => Kind4<F, S, R, E, A>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `fromTheseK`




#### Signature

```typescript
export declare function fromTheseK<F extends URIS4>(
  F: FromThese4<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => <S, R>(...a: A) => Kind4<F, S, R, E, B>



export declare function fromTheseK<F extends URIS3>(
  F: FromThese3<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => <R>(...a: A) => Kind3<F, R, E, B>



export declare function fromTheseK<F extends URIS3, E>(
  F: FromThese3C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => These<E, B>) => <R>(...a: A) => Kind3<F, R, E, B>



export declare function fromTheseK<F extends URIS2>(
  F: FromThese2<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => (...a: A) => Kind2<F, E, B>



export declare function fromTheseK<F extends URIS2, E>(
  F: FromThese2C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => These<E, B>) => (...a: A) => Kind2<F, E, B>



export declare function fromTheseK<F>(
  F: FromThese<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => (...a: A) => HKT2<F, E, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti