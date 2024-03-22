
# TaskThese







### Instances

* [Bifunctor](#bifunctor)
* [FromEither](#fromeither)
* [FromIO](#fromio)
* [FromTask](#fromtask)
* [FromThese](#fromthese)
* [Functor](#functor)
* [Pointed](#pointed)
* [getApplicative](#getapplicative)
* [getApply](#getapply)
* [getChain](#getchain)
* [getMonad](#getmonad)

### Constructors

* [both](#both)
* [left](#left)
* [leftIO](#leftio)
* [leftTask](#lefttask)
* [of](#of)
* [right](#right)
* [rightIO](#rightio)
* [rightTask](#righttask)

### Conversions

* [fromEither](#fromeither)
* [fromIO](#fromio)
* [fromIOEither](#fromioeither)
* [fromOption](#fromoption)
* [fromTask](#fromtask)
* [fromThese](#fromthese)

### Error handling

* [mapLeft](#mapleft)

### Lifting

* [fromIOK](#fromiok)
* [fromOptionK](#fromoptionk)
* [fromPredicate](#frompredicate)
* [fromTaskK](#fromtaskk)
* [fromTheseK](#fromthesek)

### Mapping

* [bimap](#bimap)
* [flap](#flap)
* [map](#map)

### Model

* [TaskThese](#taskthese)

### Pattern matching

* [fold](#fold)
* [foldW](#foldw)
* [match](#match)
* [matchE](#matche)
* [matchEW](#matchew)
* [matchW](#matchw)

### Traversing

* [traverseReadonlyArrayWithIndex](#traversereadonlyarraywithindex)
* [traverseReadonlyArrayWithIndexSeq](#traversereadonlyarraywithindexseq)
* [traverseReadonlyNonEmptyArrayWithIndex](#traversereadonlynonemptyarraywithindex)
* [traverseReadonlyNonEmptyArrayWithIndexSeq](#traversereadonlynonemptyarraywithindexseq)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ApT](#apt)
* ~~[bifunctorTaskThese](#bifunctortaskthese)~~ (deprecated)
* ~~[functorTaskThese](#functortaskthese)~~ (deprecated)
* ~~[getSemigroup](#getsemigroup)~~ (deprecated)
* [swap](#swap)
* ~~[taskThese](#taskthese)~~ (deprecated)
* ~~[toTuple](#totuple)~~ (deprecated)
* [toTuple2](#totuple2)

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


### `FromEither`




#### Signature

```typescript
export declare const FromEither: FromEither2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO`




#### Signature

```typescript
export declare const FromIO: FromIO2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromTask`




#### Signature

```typescript
export declare const FromTask: FromTask2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromThese`




#### Signature

```typescript
export declare const FromThese: FromThese2<URI>
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

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicative`




#### Signature

```typescript
export declare function getApplicative<E>(A: Apply1<T.URI>, S: Semigroup<E>): Applicative2C<URI, E>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApply`




#### Signature

```typescript
export declare const getApply: <E>(A: Apply1<T.URI>, S: Semigroup<E>) => Apply2C<'TaskThese', E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getChain`




#### Signature

```typescript
export declare function getChain<E>(S: Semigroup<E>): Chain2C<URI, E>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonad`




#### Signature

```typescript
export declare function getMonad<E>(S: Semigroup<E>): Monad2C<URI, E> & MonadTask2C<URI, E>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `both`




#### Signature

```typescript
export declare const both: <E, A>(e: E, a: A) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `left`




#### Signature

```typescript
export declare const left: <E = never, A = never>(e: E) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftIO`




#### Signature

```typescript
export declare const leftIO: <E = never, A = never>(me: IO<E>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftTask`




#### Signature

```typescript
export declare const leftTask: <E = never, A = never>(me: Task<E>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <E = never, A = never>(a: A) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`




#### Signature

```typescript
export declare const right: <E = never, A = never>(a: A) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightIO`




#### Signature

```typescript
export declare const rightIO: <E = never, A = never>(ma: IO<A>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightTask`




#### Signature

```typescript
export declare const rightTask: <E = never, A = never>(ma: Task<A>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEither`




#### Signature

```typescript
export declare const fromEither: <E, A>(fa: Either<E, A>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIO`




#### Signature

```typescript
export declare const fromIO: <A, E = never>(fa: IO<A>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOEither`




#### Signature

```typescript
export declare const fromIOEither: <E, A>(fa: IOEither<E, A>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTask`




#### Signature

```typescript
export declare const fromTask: <A, E = never>(fa: Task<A>) => TaskThese<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromThese`




#### Signature

```typescript
export declare const fromThese: <E, A>(fa: These<E, A>) => TaskThese<E, A>
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
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: TaskThese<E, A>) => TaskThese<G, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromIOK`




#### Signature

```typescript
export declare const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <E = never>(...a: A) => TaskThese<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`




#### Signature

```typescript
export declare const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => TaskThese<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromPredicate`




#### Signature

```typescript
export declare const fromPredicate: {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => TaskThese<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => TaskThese<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => TaskThese<E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskK`




#### Signature

```typescript
export declare const fromTaskK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => T.Task<B>,
) => <E = never>(...a: A) => TaskThese<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTheseK`




#### Signature

```typescript
export declare const fromTheseK: <A extends ReadonlyArray<unknown>, E, B>(
  f: (...a: A) => TH.These<E, B>,
) => (...a: A) => TaskThese<E, B>
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
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: TaskThese<E, A>) => TaskThese<G, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: TaskThese<E, (a: A) => B>) => TaskThese<E, B>
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
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: TaskThese<E, A>) => TaskThese<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `TaskThese`




#### Signature

```typescript
export interface TaskThese<E, A> extends Task<These<E, A>> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `fold`

Alias of [`matchE`](#matche).




#### Signature

```typescript
export declare const fold: <E, B, A>(
  onLeft: (e: E) => T.Task<B>,
  onRight: (a: A) => T.Task<B>,
  onBoth: (e: E, a: A) => T.Task<B>,
) => (fa: TaskThese<E, A>) => T.Task<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldW`

Alias of [`matchEW`](#matchew).




#### Signature

```typescript
export declare const foldW: <E, B, A, C, D>(
  onLeft: (e: E) => T.Task<B>,
  onRight: (a: A) => T.Task<C>,
  onBoth: (e: E, a: A) => T.Task<D>,
) => (fa: TaskThese<E, A>) => T.Task<B | C | D>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`




#### Signature

```typescript
export declare const match: <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B,
) => (fa: TaskThese<E, A>) => Task<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchE`

The `E` suffix (short for **E**ffect) means that the handlers return an effect (`Task`).




#### Signature

```typescript
export declare const matchE: <E, B, A>(
  onLeft: (e: E) => Task<B>,
  onRight: (a: A) => Task<B>,
  onBoth: (e: E, a: A) => Task<B>,
) => (fa: TaskThese<E, A>) => Task<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchEW`

Less strict version of [`matchE`](#matche).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchEW: <E, B, A, C, D>(
  onLeft: (e: E) => Task<B>,
  onRight: (a: A) => Task<C>,
  onBoth: (e: E, a: A) => Task<D>,
) => (fa: TaskThese<E, A>) => Task<B | C | D>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchW`

Less strict version of [`match`](#match).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchW: <E, B, A, C, D>(
  onLeft: (e: E) => B,
  onRight: (a: A) => C,
  onBoth: (e: E, a: A) => D,
) => (ma: TaskThese<E, A>) => T.Task<B | C | D>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(T.ApplicativePar, S))`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <E>(
  S: Semigroup<E>,
) => <A, B>(f: (index: number, a: A) => TaskThese<E, B>) => (as: readonly A[]) => TaskThese<E, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndexSeq`

Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(T.ApplicativeSeq, S))`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndexSeq: <E>(
  S: Semigroup<E>,
) => <A, B>(f: (index: number, a: A) => TaskThese<E, B>) => (as: readonly A[]) => TaskThese<E, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndex`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(T.ApplicativePar, S))`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndex: <E>(
  S: Semigroup<E>,
) => <A, B>(
  f: (index: number, a: A) => TaskThese<E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => TaskThese<E, ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndexSeq`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(T.ApplicativeSeq, S))`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndexSeq: <E>(
  S: Semigroup<E>,
) => <A, B>(
  f: (index: number, a: A) => TaskThese<E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => TaskThese<E, ReadonlyNonEmptyArray<B>>
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
export declare const URI = 'TaskThese'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: TaskThese<never, readonly []>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`bifunctorTaskThese`~~

Use [`Bifunctor`](#bifunctor) instead.




#### Signature

```typescript
export declare const bifunctorTaskThese: Bifunctor2<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`functorTaskThese`~~

Use [`Functor`](#functor) instead.




#### Signature

```typescript
export declare const functorTaskThese: Functor2<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getSemigroup`~~

Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.




#### Signature

```typescript
export declare const getSemigroup: <E, A>(SE: Semigroup<E>, SA: Semigroup<A>) => Semigroup<TaskThese<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `swap`




#### Signature

```typescript
export declare const swap: <E, A>(fa: TaskThese<E, A>) => TaskThese<A, E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`taskThese`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `TT.Functor` instead of `TT.taskThese` (where `TT` is from `import TT from 'fp-ts/TaskThese'`)




#### Signature

```typescript
export declare const taskThese: Functor2<URI> & Bifunctor2<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`toTuple`~~

Use [`toTuple2`](#totuple2) instead.




#### Signature

```typescript
export declare const toTuple: <E, A>(e: E, a: A) => (fa: TaskThese<E, A>) => T.Task<[E, A]>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toTuple2`




#### Signature

```typescript
export declare const toTuple2: <E, A>(e: LazyArg<E>, a: LazyArg<A>) => (fa: TaskThese<E, A>) => Task<readonly [E, A]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti