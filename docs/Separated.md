
# Separated







### Instances

* [Bifunctor](#bifunctor)
* [Functor](#functor)

### Constructors

* [separated](#separated)

### Error handling

* [mapLeft](#mapleft)

### Mapping

* [bimap](#bimap)
* [flap](#flap)
* [map](#map)

### Model

* [Separated](#separated)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [left](#left)
* [right](#right)

## Instances


### `Bifunctor`




#### Signature

```typescript
export declare const Bifunctor: Bifunctor2<URI>
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

## Constructors


### `separated`




#### Signature

```typescript
export declare const separated: <E, A>(left: E, right: A) => Separated<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `mapLeft`

Map a function over the first type argument of a bifunctor.




#### Signature

```typescript
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: Separated<E, A>) => Separated<G, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `bimap`

Map a pair of functions over the two type arguments of the bifunctor.




#### Signature

```typescript
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: Separated<E, A>) => Separated<G, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: Separated<E, (a: A) => B>) => Separated<E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Separated<E, A>) => Separated<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Separated`

A `Separated` type which holds `left` and `right` parts.




#### Signature

```typescript
export interface Separated<E, A> {
  readonly left: E
  readonly right: A
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
export declare const URI = 'Separated'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `left`




#### Signature

```typescript
export declare const left: <E, A>(s: Separated<E, A>) => E
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`




#### Signature

```typescript
export declare const right: <E, A>(s: Separated<E, A>) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti