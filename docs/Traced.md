
# Traced







### Instances

* [Functor](#functor)
* [getComonad](#getcomonad)

### Mapping

* [flap](#flap)
* [map](#map)

### Model

* [Traced](#traced)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [censor](#censor)
* [listen](#listen)
* [listens](#listens)
* ~~[traced](#traced)~~ (deprecated)
* [tracks](#tracks)

## Instances


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getComonad`




#### Signature

```typescript
export declare function getComonad<P>(monoid: Monoid<P>): Comonad2C<URI, P>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: Traced<E, (a: A) => B>) => Traced<E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Traced<E, A>) => Traced<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Traced`




#### Signature

```typescript
export interface Traced<P, A> {
  (p: P): A
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
export declare const URI = 'Traced'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `censor`

Apply a function to the current position




#### Signature

```typescript
export declare function censor<P>(f: (p: P) => P): <A>(wa: Traced<P, A>) => Traced<P, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `listen`

Get the current position




#### Signature

```typescript
export declare function listen<P, A>(wa: Traced<P, A>): Traced<P, [A, P]>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `listens`

Get a value which depends on the current position




#### Signature

```typescript
export declare function listens<P, B>(f: (p: P) => B): <A>(wa: Traced<P, A>) => Traced<P, [A, B]>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`traced`~~

Use [`Functor`](#functor) instead.




#### Signature

```typescript
export declare const traced: Functor2<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tracks`

Extracts a value at a relative position which depends on the current value.




#### Signature

```typescript
export declare function tracks<P, A>(M: Monoid<P>, f: (a: A) => P): (wa: Traced<P, A>) => A

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti