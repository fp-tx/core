
# Writer







### Instances

* [Functor](#functor)
* [getApplicative](#getapplicative)
* [getApply](#getapply)
* [getChain](#getchain)
* [getMonad](#getmonad)
* [getPointed](#getpointed)

### Constructors

* [tell](#tell)

### Mapping

* [flap](#flap)
* [map](#map)

### Model

* [Writer](#writer)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [censor](#censor)
* ~~[evalWriter](#evalwriter)~~ (deprecated)
* [evaluate](#evaluate)
* ~~[execWriter](#execwriter)~~ (deprecated)
* [execute](#execute)
* [listen](#listen)
* [listens](#listens)
* [pass](#pass)
* ~~[writer](#writer)~~ (deprecated)

## Instances


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
export declare const getApplicative: <W>(M: Monoid<W>) => Applicative2C<'Writer', W>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApply`




#### Signature

```typescript
export declare const getApply: <W>(S: Semigroup<W>) => Apply2C<'Writer', W>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getChain`




#### Signature

```typescript
export declare function getChain<W>(S: Semigroup<W>): Chain2C<URI, W>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonad`




#### Signature

```typescript
export declare function getMonad<W>(M: Monoid<W>): Monad2C<URI, W>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getPointed`




#### Signature

```typescript
export declare const getPointed: <W>(M: Monoid<W>) => Pointed2C<'Writer', W>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `tell`

Appends a value to the accumulator




#### Signature

```typescript
export declare const tell: <W>(w: W) => Writer<W, void>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: Writer<E, (a: A) => B>) => Writer<E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Writer<E, A>) => Writer<E, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Writer`




#### Signature

```typescript
export interface Writer<W, A> {
  (): [A, W]
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
export declare const URI = 'Writer'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `censor`

Modify the final accumulator value by applying a function




#### Signature

```typescript
export declare const censor: <W>(f: (w: W) => W) => <A>(fa: Writer<W, A>) => Writer<W, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`evalWriter`~~

Use [`evaluate`](#evaluate) instead




#### Signature

```typescript
export declare const evalWriter: <W, A>(fa: Writer<W, A>) => A
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `evaluate`




#### Signature

```typescript
export declare const evaluate: <W, A>(fa: Writer<W, A>) => A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`execWriter`~~

Use [`execute`](#execute) instead




#### Signature

```typescript
export declare const execWriter: <W, A>(fa: Writer<W, A>) => W
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `execute`




#### Signature

```typescript
export declare const execute: <W, A>(fa: Writer<W, A>) => W
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `listen`

Modifies the result to include the changes to the accumulator




#### Signature

```typescript
export declare const listen: <W, A>(fa: Writer<W, A>) => Writer<W, [A, W]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `listens`

Projects a value from modifications made to the accumulator during an action




#### Signature

```typescript
export declare const listens: <W, B>(f: (w: W) => B) => <A>(fa: Writer<W, A>) => Writer<W, [A, B]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `pass`

Applies the returned function to the accumulator




#### Signature

```typescript
export declare const pass: <W, A>(fa: Writer<W, [A, (w: W) => W]>) => Writer<W, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`writer`~~

Use [`Functor`](#functor) instead.




#### Signature

```typescript
export declare const writer: Functor2<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti