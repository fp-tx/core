
# Task







### Instances

* [ApplicativePar](#applicativepar)
* [ApplicativeSeq](#applicativeseq)
* [ApplyPar](#applypar)
* [ApplySeq](#applyseq)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [FromIO](#fromio)
* [FromTask](#fromtask)
* [Functor](#functor)
* [Monad](#monad)
* [MonadIO](#monadio)
* [MonadTask](#monadtask)
* [Pointed](#pointed)
* [getRaceMonoid](#getracemonoid)

### Combinators

* [tap](#tap)
* [tapIO](#tapio)

### Constructors

* [of](#of)

### Conversions

* [fromIO](#fromio)

### Do notation

* [Do](#do)
* [apS](#aps)
* [bind](#bind)
* [bindTo](#bindto)

### Instance methods

* [chainRec](#chainrec)

### Legacy

* [chain](#chain)
* [chainFirst](#chainfirst)
* [chainFirstIOK](#chainfirstiok)
* [chainIOK](#chainiok)

### Lifting

* [fromIOK](#fromiok)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [flap](#flap)
* [map](#map)

### Model

* [Task](#task)

### Sequencing

* [flatMap](#flatmap)
* [flatMapIO](#flatmapio)
* [flatten](#flatten)

### Traversing

* [sequenceArray](#sequencearray)
* [sequenceSeqArray](#sequenceseqarray)
* [traverseArray](#traversearray)
* [traverseArrayWithIndex](#traversearraywithindex)
* [traverseReadonlyArrayWithIndex](#traversereadonlyarraywithindex)
* [traverseReadonlyArrayWithIndexSeq](#traversereadonlyarraywithindexseq)
* [traverseReadonlyNonEmptyArrayWithIndex](#traversereadonlynonemptyarraywithindex)
* [traverseReadonlyNonEmptyArrayWithIndexSeq](#traversereadonlynonemptyarraywithindexseq)
* [traverseSeqArray](#traverseseqarray)
* [traverseSeqArrayWithIndex](#traverseseqarraywithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ApT](#apt)
* [ap](#ap)
* [apFirst](#apfirst)
* [apSecond](#apsecond)
* [delay](#delay)
* [do](#do)
* ~~[fromTask](#fromtask)~~ (deprecated)
* ~~[getMonoid](#getmonoid)~~ (deprecated)
* ~~[getSemigroup](#getsemigroup)~~ (deprecated)
* [let](#let)
* [never](#never)
* ~~[task](#task)~~ (deprecated)
* ~~[taskSeq](#taskseq)~~ (deprecated)

## Instances


### `ApplicativePar`

Runs computations in parallel.




#### Signature

```typescript
export declare const ApplicativePar: Applicative1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplicativeSeq`

Runs computations sequentially.




#### Signature

```typescript
export declare const ApplicativeSeq: Applicative1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplyPar`

Runs computations in parallel.




#### Signature

```typescript
export declare const ApplyPar: Apply1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ApplySeq`

Runs computations sequentially.




#### Signature

```typescript
export declare const ApplySeq: Apply1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain`




#### Signature

```typescript
export declare const Chain: chainable.Chain1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec`

ChainRec for `Task`




#### Signature

```typescript
export declare const ChainRec: ChainRec1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

---


### `FromIO`




#### Signature

```typescript
export declare const FromIO: FromIO1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromTask`




#### Signature

```typescript
export declare const FromTask: FromTask1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO`




#### Signature

```typescript
export declare const MonadIO: MonadIO1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask`




#### Signature

```typescript
export declare const MonadTask: MonadTask1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed1<URI>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getRaceMonoid`

Monoid returning the first completed task.


Note: uses `Promise.race` internally.




#### Signature

```typescript
export declare function getRaceMonoid<A = never>(): Monoid<Task<A>>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import * as T from '@fp-tx/core/Task'

async function test() {
  const S = T.getRaceMonoid<string>()
  const fa = T.delay(20)(T.of('a'))
  const fb = T.delay(10)(T.of('b'))
  assert.deepStrictEqual(await S.concat(fa, fb)(), 'b')
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Combinators


### `tap`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tap: {
  <A, _>(self: Task<A>, f: (a: A) => Task<_>): Task<A>
  <A, _>(f: (a: A) => Task<_>): (self: Task<A>) => Task<A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapIO`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapIO: {
  <A, _>(f: (a: A) => IO<_>): (self: Task<A>) => Task<A>
  <A, _>(self: Task<A>, f: (a: A) => IO<_>): Task<A>
}
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as T from '@fp-tx/core/Task'
import * as Console from '@fp-tx/core/Console'

// Will produce `Hello, fp-ts` to the stdout
const effect = pipe(
  T.of('fp-ts'),
  T.tapIO(value => Console.log(`Hello, ${value}`)),
)

async function test() {
  assert.deepStrictEqual(await effect(), 'fp-ts')
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `of`




#### Signature

```typescript
export declare const of: <A>(a: A) => Task<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromIO`




#### Signature

```typescript
export declare const fromIO: <A>(fa: IO<A>) => Task<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: Task<{}>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  fb: Task<B>,
) => (fa: Task<A>) => Task<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bind`




#### Signature

```typescript
export declare const bind: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Task<B>,
) => (ma: Task<A>) => Task<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(name: N) => <A>(fa: Task<A>) => Task<{ readonly [K in N]: A }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Instance methods


### `chainRec`




#### Signature

```typescript
export declare const chainRec: ChainRec1<URI>['chainRec']
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <A, B>(f: (a: A) => Task<B>) => (ma: Task<A>) => Task<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirst`

Alias of `tap`.




#### Signature

```typescript
export declare const chainFirst: <A, B>(f: (a: A) => Task<B>) => (first: Task<A>) => Task<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstIOK`

Alias of `tapIO`.




#### Signature

```typescript
export declare const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => (first: Task<A>) => Task<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOK`

Alias of `flatMapIO`.




#### Signature

```typescript
export declare const chainIOK: <A, B>(f: (a: A) => IO<B>) => (first: Task<A>) => Task<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromIOK`




#### Signature

```typescript
export declare const fromIOK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => Task<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the value to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <_>(self: Task<_>) => Task<A>
  <_, A>(self: Task<_>, a: A): Task<A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the value to the void constant value.




#### Signature

```typescript
export declare const asUnit: <_>(self: Task<_>) => Task<void>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: Task<(a: A) => B>) => Task<B>
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
export declare const map: <A, B>(f: (a: A) => B) => (fa: Task<A>) => Task<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Task`




#### Signature

```typescript
export interface Task<A> {
  (): Promise<A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `flatMap`




#### Signature

```typescript
export declare const flatMap: {
  <A, B>(f: (a: A) => Task<B>): (ma: Task<A>) => Task<B>
  <A, B>(ma: Task<A>, f: (a: A) => Task<B>): Task<B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapIO`




#### Signature

```typescript
export declare const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): (self: Task<A>) => Task<B>
  <A, B>(self: Task<A>, f: (a: A) => IO<B>): Task<B>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`




#### Signature

```typescript
export declare const flatten: <A>(mma: Task<Task<A>>) => Task<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequenceArray`

Equivalent to `ReadonlyArray#sequence(Applicative)`.




#### Signature

```typescript
export declare const sequenceArray: <A>(arr: ReadonlyArray<Task<A>>) => Task<ReadonlyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sequenceSeqArray`

Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.




#### Signature

```typescript
export declare const sequenceSeqArray: <A>(arr: ReadonlyArray<Task<A>>) => Task<ReadonlyArray<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArray`

Equivalent to `ReadonlyArray#traverse(Applicative)`.




#### Signature

```typescript
export declare const traverseArray: <A, B>(f: (a: A) => Task<B>) => (as: readonly A[]) => Task<readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: readonly A[]) => Task<readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndexSeq`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndexSeq: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: readonly A[]) => Task<readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndex`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyNonEmptyArray<A>) => Task<ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndexSeq`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndexSeq: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyNonEmptyArray<A>) => Task<ReadonlyNonEmptyArray<B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseSeqArray`

Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseSeqArray: <A, B>(f: (a: A) => Task<B>) => (as: readonly A[]) => Task<readonly B[]>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseSeqArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.




#### Signature

```typescript
export declare const traverseSeqArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>
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
export declare const URI = 'Task'
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: Task<readonly []>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <A>(fa: Task<A>) => <B>(fab: Task<(a: A) => B>) => Task<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirst`

Combine two effectful actions, keeping only the result of the first.




#### Signature

```typescript
export declare const apFirst: <B>(second: Task<B>) => <A>(first: Task<A>) => Task<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecond`

Combine two effectful actions, keeping only the result of the second.




#### Signature

```typescript
export declare const apSecond: <B>(second: Task<B>) => <A>(first: Task<A>) => Task<B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `delay`

Creates a task that will complete after a time delay




#### Signature

```typescript
export declare function delay(millis: number): <A>(ma: Task<A>) => Task<A>

```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { sequenceT } from '@fp-tx/core/Apply'
import * as T from '@fp-tx/core/Task'
import { takeRight } from '@fp-tx/core/Array'

async function test() {
  const log: Array<string> = []
  const append = (message: string): T.Task<void> =>
    T.fromIO(() => {
      log.push(message)
    })
  const fa = append('a')
  const fb = T.delay(20)(append('b'))
  const fc = T.delay(10)(append('c'))
  const fd = append('d')
  await sequenceT(T.ApplyPar)(fa, fb, fc, fd)()
  assert.deepStrictEqual(takeRight(2)(log), ['c', 'b'])
}

test()

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends TaskIterable<any>, A>(
  yieldFunction: (unwrap: <A>(ma: Task<A>) => TaskIterable<A>) => Generator<MA, A>,
) => Task<A>
```




---


### ~~`fromTask`~~




#### Signature

```typescript
export declare const fromTask: <A>(fa: Task<A>) => Task<A>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getMonoid`~~

Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.


Lift a monoid into 'Task', the inner values are concatenated using the provided `Monoid`.




#### Signature

```typescript
export declare const getMonoid: <A>(M: Monoid<A>) => Monoid<Task<A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getSemigroup`~~

Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.




#### Signature

```typescript
export declare const getSemigroup: <A>(S: Semigroup<A>) => Semigroup<Task<A>>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `let`




#### Signature

```typescript
export declare const let_: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => (fa: Task<A>) => Task<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `never`

A `Task` that never completes.




#### Signature

```typescript
export declare const never: Task<never>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`task`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `T.Functor` instead of `T.task` (where `T` is from `import T from 'fp-ts/Task'`)




#### Signature

```typescript
export declare const task: Monad1<URI> & MonadTask1<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`taskSeq`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `T.Functor` instead of `T.taskSeq` (where `T` is from `import T from 'fp-ts/Task'`)




#### Signature

```typescript
export declare const taskSeq: Monad1<URI> & MonadTask1<URI>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti