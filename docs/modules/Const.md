
# Const







### Instances

* [Bifunctor](#bifunctor)
* [Contravariant](#contravariant)
* [Functor](#functor)
* [getApplicative](#getapplicative)
* [getApply](#getapply)
* [getBooleanAlgebra](#getbooleanalgebra)
* [getBounded](#getbounded)
* [getEq](#geteq)
* [getHeytingAlgebra](#getheytingalgebra)
* [getMonoid](#getmonoid)
* [getOrd](#getord)
* [getRing](#getring)
* [getSemigroup](#getsemigroup)
* [getSemiring](#getsemiring)
* [getShow](#getshow)

### Constructors

* [make](#make)

### Error handling

* [mapLeft](#mapleft)

### Mapping

* [bimap](#bimap)
* [flap](#flap)
* [map](#map)

### Model

* [Const](#const)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* ~~[const_](#const)~~ (deprecated)
* [contramap](#contramap)

## Instances


### `Bifunctor`




#### Signature

```typescript
export declare const Bifunctor: Bifunctor2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Contravariant`




#### Signature

```typescript
export declare const Contravariant: Contravariant2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicative`




#### Signature

```typescript
export declare function getApplicative<E>(M: Monoid<E>): Applicative2C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApply`




#### Signature

```typescript
export declare function getApply<E>(S: Semigroup<E>): Apply2C<URI, E>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getBooleanAlgebra`




#### Signature

```typescript
export declare const getBooleanAlgebra: <E, A>(H: BooleanAlgebra<E>) => BooleanAlgebra<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getBounded`




#### Signature

```typescript
export declare const getBounded: <E, A>(B: Bounded<E>) => Bounded<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare const getEq: <E, A>(E: Eq<E>) => Eq<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getHeytingAlgebra`




#### Signature

```typescript
export declare const getHeytingAlgebra: <E, A>(H: HeytingAlgebra<E>) => HeytingAlgebra<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`




#### Signature

```typescript
export declare const getMonoid: <E, A>(M: Monoid<E>) => Monoid<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrd`




#### Signature

```typescript
export declare const getOrd: <E, A>(O: Ord<E>) => Ord<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getRing`




#### Signature

```typescript
export declare const getRing: <E, A>(S: Ring<E>) => Ring<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`




#### Signature

```typescript
export declare const getSemigroup: <E, A>(S: Semigroup<E>) => Semigroup<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemiring`




#### Signature

```typescript
export declare const getSemiring: <E, A>(S: Semiring<E>) => Semiring<Const<E, A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare function getShow<E, A>(S: Show<E>): Show<Const<E, A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `make`




#### Signature

```typescript
export declare const make: <E, A = never>(e: E) => Const<E, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `mapLeft`

Map a function over the first type argument of a bifunctor.




#### Signature

```typescript
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: Const<E, A>) => Const<G, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `bimap`

Map a pair of functions over the two type arguments of the bifunctor.




#### Signature

```typescript
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: Const<E, A>) => Const<G, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: Const<E, (a: A) => B>) => Const<E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

`map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types use the type constructor `F` to represent some computational context.




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Const<E, A>) => Const<E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Const`




#### Signature

```typescript
export type Const<E, A> = E & {
  readonly _A: A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Type lambdas


### `URI`




#### Signature

```typescript
export type URI = typeof URI
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URI`




#### Signature

```typescript
export declare const URI = 'Const'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`const_`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `C.Functor` instead of `C.const_` (where `C` is from `import C from 'fp-ts/Const'`)




#### Signature

```typescript
export declare const const_: Functor2<URI> & Contravariant2<URI> & Bifunctor2<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `contramap`




#### Signature

```typescript
export declare const contramap: <A, B>(f: (b: B) => A) => <E>(fa: Const<E, A>) => Const<E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti