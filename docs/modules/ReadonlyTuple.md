
# ReadonlyTuple







### Instances

* [Bifunctor](#bifunctor)
* [Comonad](#comonad)
* [Foldable](#foldable)
* [Functor](#functor)
* [Semigroupoid](#semigroupoid)
* [Traversable](#traversable)
* [getApplicative](#getapplicative)
* [getApply](#getapply)
* [getChain](#getchain)
* [getChainRec](#getchainrec)
* [getMonad](#getmonad)

### Error handling

* [mapLeft](#mapleft)

### Extract

* [extract](#extract)

### Folding

* [foldMap](#foldmap)
* [reduce](#reduce)
* [reduceRight](#reduceright)

### Mapping

* [bimap](#bimap)
* [flap](#flap)
* [map](#map)
* [mapFst](#mapfst)
* [mapSnd](#mapsnd)

### Traversing

* [sequence](#sequence)
* [traverse](#traverse)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [compose](#compose)
* [duplicate](#duplicate)
* [extend](#extend)
* [fst](#fst)
* ~~[readonlyTuple](#readonlytuple)~~ (deprecated)
* [snd](#snd)
* [swap](#swap)

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


### `Comonad`




#### Signature

```typescript
export declare const Comonad: Comonad2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable`




#### Signature

```typescript
export declare const Foldable: Foldable2<URI>
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


### `Semigroupoid`




#### Signature

```typescript
export declare const Semigroupoid: Semigroupoid2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Traversable`




#### Signature

```typescript
export declare const Traversable: Traversable2<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicative`




#### Signature

```typescript
export declare function getApplicative<M>(M: Monoid<M>): Applicative2C<URI, M>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApply`




#### Signature

```typescript
export declare function getApply<S>(S: Semigroup<S>): Apply2C<URI, S>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getChain`




#### Signature

```typescript
export declare function getChain<S>(S: Semigroup<S>): Chain2C<URI, S>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getChainRec`




#### Signature

```typescript
export declare function getChainRec<M>(M: Monoid<M>): ChainRec2C<URI, M>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonad`




#### Signature

```typescript
export declare function getMonad<M>(M: Monoid<M>): Monad2C<URI, M>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `mapLeft`

Alias of [`mapSnd`](#mapsnd).




#### Signature

```typescript
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: readonly [A, E]) => readonly [A, G]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Extract


### `extract`




#### Signature

```typescript
export declare const extract: <E, A>(wa: readonly [A, E]) => A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`




#### Signature

```typescript
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: readonly [A, E]) => M
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: readonly [A, E]) => B
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: readonly [A, E]) => B
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
export declare const bimap: <E, G, A, B>(
  mapSnd: (e: E) => G,
  mapFst: (a: A) => B,
) => (fa: readonly [A, E]) => readonly [B, G]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: readonly [(a: A) => B, E]) => readonly [B, E]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

Alias of [`mapFst`](#mapfst).




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: readonly [A, E]) => readonly [B, E]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapFst`

Map a function over the first component of a `ReadonlyTuple`.


This is the `map` operation of the `Functor` instance.




#### Signature

```typescript
export declare const mapFst: <A, B>(f: (a: A) => B) => <E>(fa: readonly [A, E]) => readonly [B, E]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapSnd`

Map a function over the second component of a `ReadonlyTuple`.


This is the `mapLeft` operation of the `Bifunctor` instance.




#### Signature

```typescript
export declare const mapSnd: <E, G>(f: (e: E) => G) => <A>(fa: readonly [A, E]) => readonly [A, G]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequence`




#### Signature

```typescript
export declare const sequence: Traversable2<URI>['sequence']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse`




#### Signature

```typescript
export declare const traverse: PipeableTraverse2<URI>
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
export declare const URI = 'ReadonlyTuple'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `compose`




#### Signature

```typescript
export declare const compose: <A, B>(ab: readonly [B, A]) => <C>(bc: readonly [C, B]) => readonly [C, A]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `duplicate`




#### Signature

```typescript
export declare const duplicate: <E, A>(wa: readonly [A, E]) => readonly [readonly [A, E], E]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`




#### Signature

```typescript
export declare const extend: <E, A, B>(f: (wa: readonly [A, E]) => B) => (wa: readonly [A, E]) => readonly [B, E]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fst`




#### Signature

```typescript
export declare function fst<A, E>(ea: readonly [A, E]): A

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`readonlyTuple`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `RT.Functor` instead of `RT.readonlyTuple`




#### Signature

```typescript
export declare const readonlyTuple: Semigroupoid2<URI> &
  Bifunctor2<URI> &
  Comonad2<URI> &
  Foldable2<URI> &
  Traversable2<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `snd`




#### Signature

```typescript
export declare function snd<A, E>(ea: readonly [A, E]): E

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `swap`




#### Signature

```typescript
export declare const swap: <A, E>(ea: readonly [A, E]) => readonly [E, A]
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti