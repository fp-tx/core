
# Semigroup







### Instances

* [first](#first)
* [last](#last)

### Constructors

* [constant](#constant)
* [max](#max)
* [min](#min)

### Model

* [Semigroup](#semigroup)

### Utilities

* [concatAll](#concatall)
* ~~[fold](#fold)~~ (deprecated)
* ~~[getDualSemigroup](#getdualsemigroup)~~ (deprecated)
* ~~[getFirstSemigroup](#getfirstsemigroup)~~ (deprecated)
* ~~[getFunctionSemigroup](#getfunctionsemigroup)~~ (deprecated)
* ~~[getIntercalateSemigroup](#getintercalatesemigroup)~~ (deprecated)
* ~~[getJoinSemigroup](#getjoinsemigroup)~~ (deprecated)
* ~~[getLastSemigroup](#getlastsemigroup)~~ (deprecated)
* ~~[getMeetSemigroup](#getmeetsemigroup)~~ (deprecated)
* ~~[getObjectSemigroup](#getobjectsemigroup)~~ (deprecated)
* ~~[getStructSemigroup](#getstructsemigroup)~~ (deprecated)
* ~~[getTupleSemigroup](#gettuplesemigroup)~~ (deprecated)
* [intercalate](#intercalate)
* [reverse](#reverse)
* ~~[semigroupAll](#semigroupall)~~ (deprecated)
* ~~[semigroupAny](#semigroupany)~~ (deprecated)
* ~~[semigroupProduct](#semigroupproduct)~~ (deprecated)
* ~~[semigroupString](#semigroupstring)~~ (deprecated)
* ~~[semigroupSum](#semigroupsum)~~ (deprecated)
* ~~[semigroupVoid](#semigroupvoid)~~ (deprecated)
* [struct](#struct)
* [tuple](#tuple)

## Instances


### `first`

Always return the first argument.




#### Signature

```typescript
export declare const first: <A = never>() => Semigroup<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/Semigroup'

assert.deepStrictEqual(S.first<number>().concat(1, 2), 1)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `last`

Always return the last argument.




#### Signature

```typescript
export declare const last: <A = never>() => Semigroup<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/Semigroup'

assert.deepStrictEqual(S.last<number>().concat(1, 2), 2)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `constant`




#### Signature

```typescript
export declare const constant: <A>(a: A) => Semigroup<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `max`

Get a semigroup where `concat` will return the maximum, based on the provided order.




#### Signature

```typescript
export declare const max: <A>(O: Or.Ord<A>) => Semigroup<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as N from '@fp-tx/core/number'
import * as S from '@fp-tx/core/Semigroup'

const S1 = S.max(N.Ord)

assert.deepStrictEqual(S1.concat(1, 2), 2)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `min`

Get a semigroup where `concat` will return the minimum, based on the provided order.




#### Signature

```typescript
export declare const min: <A>(O: Or.Ord<A>) => Semigroup<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as N from '@fp-tx/core/number'
import * as S from '@fp-tx/core/Semigroup'

const S1 = S.min(N.Ord)

assert.deepStrictEqual(S1.concat(1, 2), 1)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Semigroup`




#### Signature

```typescript
export interface Semigroup<A> extends Magma<A> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `concatAll`

Given a sequence of `as`, concat them and return the total.


If `as` is empty, return the provided `startWith` value.




#### Signature

```typescript
export declare const concatAll: <A>(S: Semigroup<A>) => (startWith: A) => (as: ReadonlyArray<A>) => A
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { concatAll } from '@fp-tx/core/Semigroup'
import * as N from '@fp-tx/core/number'

const sum = concatAll(N.SemigroupSum)(0)

assert.deepStrictEqual(sum([1, 2, 3]), 6)
assert.deepStrictEqual(sum([]), 0)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`fold`~~

Use [`concatAll`](#concatall) instead.




#### Signature

```typescript
export declare function fold<A>(S: Semigroup<A>): {
  (startWith: A): (as: ReadonlyArray<A>) => A
  (startWith: A, as: ReadonlyArray<A>): A
}

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getDualSemigroup`~~

Use [`reverse`](#reverse) instead.




#### Signature

```typescript
export declare const getDualSemigroup: <A>(S: Semigroup<A>) => Semigroup<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFirstSemigroup`~~

Use [`first`](#first) instead.




#### Signature

```typescript
export declare const getFirstSemigroup: <A = never>() => Semigroup<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFunctionSemigroup`~~

Use [`getSemigroup`](./function.ts.html#getSemigroup) instead.




#### Signature

```typescript
export declare const getFunctionSemigroup: <S>(S: Semigroup<S>) => <A = never>() => Semigroup<(a: A) => S>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getIntercalateSemigroup`~~

Use [`intercalate`](#intercalate) instead.




#### Signature

```typescript
export declare const getIntercalateSemigroup: <A>(middle: A) => (S: Semigroup<A>) => Semigroup<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getJoinSemigroup`~~

Use [`max`](#max) instead.




#### Signature

```typescript
export declare const getJoinSemigroup: <A>(O: Or.Ord<A>) => Semigroup<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getLastSemigroup`~~

Use [`last`](#last) instead.




#### Signature

```typescript
export declare const getLastSemigroup: <A = never>() => Semigroup<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getMeetSemigroup`~~

Use [`min`](#min) instead.




#### Signature

```typescript
export declare const getMeetSemigroup: <A>(O: Or.Ord<A>) => Semigroup<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getObjectSemigroup`~~

Use [`getAssignSemigroup`](./struct.ts.html#getAssignSemigroup) instead.




#### Signature

```typescript
export declare const getObjectSemigroup: <A extends object = never>() => Semigroup<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getStructSemigroup`~~

Use [`struct`](#struct) instead.




#### Signature

```typescript
export declare const getStructSemigroup: <O extends ReadonlyRecord<string, any>>(semigroups: {
  [K in keyof O]: Semigroup<O[K]>
}) => Semigroup<O>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getTupleSemigroup`~~

Use [`tuple`](#tuple) instead.




#### Signature

```typescript
export declare const getTupleSemigroup: <T extends ReadonlyArray<Semigroup<any>>>(
  ...semigroups: T
) => Semigroup<{
  [K in keyof T]: T[K] extends Semigroup<infer A> ? A : never
}>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `intercalate`

Between each pair of elements insert `middle`.




#### Signature

```typescript
export declare const intercalate: <A>(middle: A) => (S: Semigroup<A>) => Semigroup<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { intercalate } from '@fp-tx/core/Semigroup'
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

const S1 = pipe(S.Semigroup, intercalate(' + '))

assert.strictEqual(S1.concat('a', 'b'), 'a + b')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`

The dual of a `Semigroup`, obtained by swapping the arguments of `concat`.




#### Signature

```typescript
export declare const reverse: <A>(S: Semigroup<A>) => Semigroup<A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { reverse } from '@fp-tx/core/Semigroup'
import * as S from '@fp-tx/core/string'

assert.deepStrictEqual(reverse(S.Semigroup).concat('a', 'b'), 'ba')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`semigroupAll`~~

Use [`SemigroupAll`](./boolean.ts.html#SemigroupAll) instead.




#### Signature

```typescript
export declare const semigroupAll: Semigroup<boolean>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`semigroupAny`~~

Use [`SemigroupAny`](./boolean.ts.html#SemigroupAny) instead.




#### Signature

```typescript
export declare const semigroupAny: Semigroup<boolean>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`semigroupProduct`~~

Use [`SemigroupProduct`](./number.ts.html#SemigroupProduct) instead.




#### Signature

```typescript
export declare const semigroupProduct: Semigroup<number>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`semigroupString`~~

Use [`Semigroup`](./string.ts.html#Semigroup) instead.




#### Signature

```typescript
export declare const semigroupString: Semigroup<string>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`semigroupSum`~~

Use [`SemigroupSum`](./number.ts.html#SemigroupSum) instead.




#### Signature

```typescript
export declare const semigroupSum: Semigroup<number>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`semigroupVoid`~~

Use `void` module instead.




#### Signature

```typescript
export declare const semigroupVoid: Semigroup<void>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `struct`

Given a struct of semigroups returns a semigroup for the struct.




#### Signature

```typescript
export declare const struct: <A>(semigroups: { [K in keyof A]: Semigroup<A[K]> }) => Semigroup<{
  readonly [K_1 in keyof A]: A[K_1]
}>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { struct } from '@fp-tx/core/Semigroup'
import * as N from '@fp-tx/core/number'

interface Point {
  readonly x: number
  readonly y: number
}

const S = struct<Point>({
  x: N.SemigroupSum,
  y: N.SemigroupSum,
})

assert.deepStrictEqual(S.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tuple`

Given a tuple of semigroups returns a semigroup for the tuple.




#### Signature

```typescript
export declare const tuple: <A extends readonly unknown[]>(
  ...semigroups: { [K in keyof A]: Semigroup<A[K]> }
) => Semigroup<Readonly<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { tuple } from '@fp-tx/core/Semigroup'
import * as B from '@fp-tx/core/boolean'
import * as N from '@fp-tx/core/number'
import * as S from '@fp-tx/core/string'

const S1 = tuple(S.Semigroup, N.SemigroupSum)
assert.deepStrictEqual(S1.concat(['a', 1], ['b', 2]), ['ab', 3])

const S2 = tuple(S.Semigroup, N.SemigroupSum, B.SemigroupAll)
assert.deepStrictEqual(S2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti