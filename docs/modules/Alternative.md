
# Alternative







### Model

* [Alternative](#alternative)
* [Alternative1](#alternative1)
* [Alternative2](#alternative2)
* [Alternative2C](#alternative2c)
* [Alternative3](#alternative3)
* [Alternative3C](#alternative3c)
* [Alternative4](#alternative4)

### Utilities

* [altAll](#altall)
* [getAlternativeMonoid](#getalternativemonoid)

## Model


### `Alternative`




#### Signature

```typescript
export interface Alternative<F> extends Applicative<F>, Alt<F>, Zero<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alternative1`




#### Signature

```typescript
export interface Alternative1<F extends URIS> extends Applicative1<F>, Alt1<F>, Zero1<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alternative2`




#### Signature

```typescript
export interface Alternative2<F extends URIS2> extends Applicative2<F>, Alt2<F>, Zero2<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alternative2C`




#### Signature

```typescript
export interface Alternative2C<F extends URIS2, E> extends Applicative2C<F, E>, Alt2C<F, E>, Zero2C<F, E> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alternative3`




#### Signature

```typescript
export interface Alternative3<F extends URIS3> extends Applicative3<F>, Alt3<F>, Zero3<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alternative3C`




#### Signature

```typescript
export interface Alternative3C<F extends URIS3, E> extends Applicative3C<F, E>, Alt3C<F, E>, Zero3C<F, E> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alternative4`




#### Signature

```typescript
export interface Alternative4<F extends URIS4> extends Applicative4<F>, Alt4<F>, Zero4<F> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `altAll`




#### Signature

```typescript
export declare function altAll<F extends URIS4>(
  F: Alternative4<F>,
): <S, R, E, A>(as: ReadonlyArray<Kind4<F, S, R, E, A>>) => Kind4<F, S, R, E, A>



export declare function altAll<F extends URIS3>(
  F: Alternative3<F>,
): <R, E, A>(as: ReadonlyArray<Kind3<F, R, E, A>>) => Kind3<F, R, E, A>



export declare function altAll<F extends URIS3, E>(
  F: Alternative3C<F, E>,
): <R, A>(as: ReadonlyArray<Kind3<F, R, E, A>>) => Kind3<F, R, E, A>



export declare function altAll<F extends URIS2>(
  F: Alternative2<F>,
): <E, A>(as: ReadonlyArray<Kind2<F, E, A>>) => Kind2<F, E, A>



export declare function altAll<F extends URIS2, E>(
  F: Alternative2C<F, E>,
): <A>(as: ReadonlyArray<Kind2<F, E, A>>) => Kind2<F, E, A>



export declare function altAll<F extends URIS>(F: Alternative1<F>): <A>(as: ReadonlyArray<Kind<F, A>>) => Kind<F, A>



export declare function altAll<F>(F: Alternative<F>): <A>(as: ReadonlyArray<HKT<F, A>>) => HKT<F, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getAlternativeMonoid`

Lift a semigroup into a monoid alternative 'F', the inner values are concatenated using the provided `Semigroup`.




#### Signature

```typescript
export declare function getAlternativeMonoid<F extends URIS4>(
  F: Alternative4<F>,
): <A, S, R, E>(S: Semigroup<A>) => Monoid<Kind4<F, S, R, E, A>>



export declare function getAlternativeMonoid<F extends URIS3>(
  F: Alternative3<F>,
): <A, R, E>(S: Semigroup<A>) => Monoid<Kind3<F, R, E, A>>



export declare function getAlternativeMonoid<F extends URIS3, E>(
  F: Alternative3C<F, E>,
): <A, R>(S: Semigroup<A>) => Monoid<Kind3<F, R, E, A>>



export declare function getAlternativeMonoid<F extends URIS2>(
  F: Alternative2<F>,
): <A, E>(S: Semigroup<A>) => Monoid<Kind2<F, E, A>>



export declare function getAlternativeMonoid<F extends URIS2, E>(
  F: Alternative2C<F, E>,
): <A>(S: Semigroup<A>) => Monoid<Kind2<F, E, A>>



export declare function getAlternativeMonoid<F extends URIS>(
  F: Alternative1<F>,
): <A>(S: Semigroup<A>) => Monoid<Kind<F, A>>



export declare function getAlternativeMonoid<F>(F: Alternative<F>): <A>(S: Semigroup<A>) => Monoid<HKT<F, A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti