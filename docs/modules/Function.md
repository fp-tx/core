
# Function







### Instances

* [getBooleanAlgebra](#getbooleanalgebra)
* [getMonoid](#getmonoid)
* [getRing](#getring)
* [getSemigroup](#getsemigroup)
* [getSemiring](#getsemiring)

### Lagacy

* [Lazy](#lazy)

### Utilities

* ~~[Endomorphism](#endomorphism)~~ (deprecated)
* [FunctionN](#functionn)
* [LazyArg](#lazyarg)
* ~~[Predicate](#predicate)~~ (deprecated)
* ~~[Refinement](#refinement)~~ (deprecated)
* [SK](#sk)
* [absurd](#absurd)
* [apply](#apply)
* [constFalse](#constfalse)
* [constNull](#constnull)
* [constTrue](#consttrue)
* [constUndefined](#constundefined)
* [constVoid](#constvoid)
* [constant](#constant)
* [decrement](#decrement)
* [flip](#flip)
* [flow](#flow)
* ~~[getEndomorphismMonoid](#getendomorphismmonoid)~~ (deprecated)
* [hole](#hole)
* [identity](#identity)
* [increment](#increment)
* ~~[not](#not)~~ (deprecated)
* [pipe](#pipe)
* [tuple](#tuple)
* [tupled](#tupled)
* [unsafeCoerce](#unsafecoerce)
* [untupled](#untupled)

## Instances


### `getBooleanAlgebra`




#### Signature

```typescript
export declare const getBooleanAlgebra: <B>(B: BooleanAlgebra<B>) => <A = never>() => BooleanAlgebra<(a: A) => B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoid`

Unary functions form a monoid as long as you can provide a monoid for the codomain.




#### Signature

```typescript
export declare const getMonoid: <M>(M: Monoid<M>) => <A = never>() => Monoid<(a: A) => M>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { Predicate } from '@fp-tx/core/Predicate'
import { getMonoid } from '@fp-tx/core/function'
import * as B from '@fp-tx/core/boolean'

const f: Predicate<number> = n => n <= 2
const g: Predicate<number> = n => n >= 0

const M1 = getMonoid(B.MonoidAll)<number>()

assert.deepStrictEqual(M1.concat(f, g)(1), true)
assert.deepStrictEqual(M1.concat(f, g)(3), false)

const M2 = getMonoid(B.MonoidAny)<number>()

assert.deepStrictEqual(M2.concat(f, g)(1), true)
assert.deepStrictEqual(M2.concat(f, g)(3), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getRing`




#### Signature

```typescript
export declare const getRing: <A, B>(R: Ring<B>) => Ring<(a: A) => B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`

Unary functions form a semigroup as long as you can provide a semigroup for the codomain.




#### Signature

```typescript
export declare const getSemigroup: <S>(S: Semigroup<S>) => <A = never>() => Semigroup<(a: A) => S>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { Predicate, getSemigroup } from '@fp-tx/core/function'
import * as B from '@fp-tx/core/boolean'

const f: Predicate<number> = n => n <= 2
const g: Predicate<number> = n => n >= 0

const S1 = getSemigroup(B.SemigroupAll)<number>()

assert.deepStrictEqual(S1.concat(f, g)(1), true)
assert.deepStrictEqual(S1.concat(f, g)(3), false)

const S2 = getSemigroup(B.SemigroupAny)<number>()

assert.deepStrictEqual(S2.concat(f, g)(1), true)
assert.deepStrictEqual(S2.concat(f, g)(3), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemiring`




#### Signature

```typescript
export declare const getSemiring: <A, B>(S: Semiring<B>) => Semiring<(a: A) => B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lagacy


### `Lazy`

Use `LazyArg` instead.




#### Signature

```typescript
export interface Lazy<A> {
  (): A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`Endomorphism`~~

Use `Endomorphism` module instead.




#### Signature

```typescript
export interface Endomorphism<A> {
  (a: A): A
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FunctionN`




#### Signature

```typescript
export interface FunctionN<A extends ReadonlyArray<unknown>, B> {
  (...args: A): B
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { FunctionN } from '@fp-tx/core/function'

export const sum: FunctionN<[number, number], number> = (a, b) => a + b

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `LazyArg`

A lazy argument.




#### Signature

```typescript
export interface LazyArg<A> {
  (): A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`Predicate`~~

Use `Predicate` module instead.




#### Signature

```typescript
export interface Predicate<A> {
  (a: A): boolean
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`Refinement`~~

Use `Refinement` module instead.




#### Signature

```typescript
export interface Refinement<A, B extends A> {
  (a: A): a is B
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `SK`




#### Signature

```typescript
export declare const SK: <A, B>(_: A, b: B) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `absurd`




#### Signature

```typescript
export declare function absurd<A>(_: never): A

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apply`




#### Signature

```typescript
export declare const apply: <A>(a: A) => <B>(f: (a: A) => B) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `constFalse`

A thunk that returns always `false`.




#### Signature

```typescript
export declare const constFalse: LazyArg<boolean>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `constNull`

A thunk that returns always `null`.




#### Signature

```typescript
export declare const constNull: LazyArg<null>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `constTrue`

A thunk that returns always `true`.




#### Signature

```typescript
export declare const constTrue: LazyArg<boolean>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `constUndefined`

A thunk that returns always `undefined`.




#### Signature

```typescript
export declare const constUndefined: LazyArg<undefined>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `constVoid`

A thunk that returns always `void`.




#### Signature

```typescript
export declare const constVoid: LazyArg<void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `constant`




#### Signature

```typescript
export declare function constant<A>(a: A): LazyArg<A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `decrement`




#### Signature

```typescript
export declare function decrement(n: number): number

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flip`

Flips the arguments of a curried function.




#### Signature

```typescript
export declare function flip<A, B, C>(f: (a: A) => (b: B) => C): (b: B) => (a: A) => C



export declare function flip<A, B, C>(f: (a: A, b: B) => C): (b: B, a: A) => C

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { flip } from '@fp-tx/core/function'

const f = (a: number) => (b: string) => a - b.length

assert.strictEqual(flip(f)('aaa')(2), -1)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flow`

Performs left-to-right function composition. The first argument may have any arity, the remaining arguments must be unary.


See also [`pipe`](#pipe).




#### Signature

```typescript
export declare function flow<A extends ReadonlyArray<unknown>, B>(ab: (...a: A) => B): (...a: A) => B



export declare function flow<A extends ReadonlyArray<unknown>, B, C>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
): (...a: A) => C



export declare function flow<A extends ReadonlyArray<unknown>, B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
): (...a: A) => D



export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
): (...a: A) => E



export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
): (...a: A) => F



export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
): (...a: A) => G



export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
): (...a: A) => H



export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
): (...a: A) => I



export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
): (...a: A) => J

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { flow } from '@fp-tx/core/function'

const len = (s: string): number => s.length
const double = (n: number): number => n * 2

const f = flow(len, double)

assert.strictEqual(f('aaa'), 6)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getEndomorphismMonoid`~~

Use `Endomorphism` module instead.




#### Signature

```typescript
export declare const getEndomorphismMonoid: <A = never>() => Monoid<Endomorphism<A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `hole`

Type hole simulation




#### Signature

```typescript
export declare const hole: <T>() => T
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `identity`




#### Signature

```typescript
export declare function identity<A>(a: A): A

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `increment`




#### Signature

```typescript
export declare function increment(n: number): number

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`not`~~

Use `Predicate` module instead.




#### Signature

```typescript
export declare function not<A>(predicate: Predicate<A>): Predicate<A>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `pipe`

Pipes the value of an expression into a pipeline of functions.


See also [`flow`](#flow).




#### Signature

```typescript
export declare function pipe<A>(a: A): A



export declare function pipe<A, B, C, D, E, F, G, H, I, J>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
): J



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
): K



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
): L



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
): M



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
): N



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
): O



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
): P



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
  pq: (p: P) => Q,
): Q



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
  pq: (p: P) => Q,
  qr: (q: Q) => R,
): R



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
  pq: (p: P) => Q,
  qr: (q: Q) => R,
  rs: (r: R) => S,
): S



export declare function pipe<A, B>(a: A, ab: (a: A) => B): B



export declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K,
  kl: (k: K) => L,
  lm: (l: L) => M,
  mn: (m: M) => N,
  no: (n: N) => O,
  op: (o: O) => P,
  pq: (p: P) => Q,
  qr: (q: Q) => R,
  rs: (r: R) => S,
  st: (s: S) => T,
): T



export declare function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C



export declare function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D



export declare function pipe<A, B, C, D, E>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): E



export declare function pipe<A, B, C, D, E, F>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
): F



export declare function pipe<A, B, C, D, E, F, G>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
): G



export declare function pipe<A, B, C, D, E, F, G, H>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
): H



export declare function pipe<A, B, C, D, E, F, G, H, I>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
): I

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'

const len = (s: string): number => s.length
const double = (n: number): number => n * 2

// without pipe
assert.strictEqual(double(len('aaa')), 6)

// with pipe
assert.strictEqual(pipe('aaa', len, double), 6)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tuple`




#### Signature

```typescript
export declare function tuple<T extends ReadonlyArray<any>>(...t: T): T

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tupled`

Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.




#### Signature

```typescript
export declare function tupled<A extends ReadonlyArray<unknown>, B>(f: (...a: A) => B): (a: A) => B

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { tupled } from '@fp-tx/core/function'

const add = tupled((x: number, y: number): number => x + y)

assert.strictEqual(add([1, 2]), 3)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unsafeCoerce`




#### Signature

```typescript
export declare const unsafeCoerce: <A, B>(a: A) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `untupled`

Inverse function of `tupled`




#### Signature

```typescript
export declare function untupled<A extends ReadonlyArray<unknown>, B>(f: (a: A) => B): (...a: A) => B

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti