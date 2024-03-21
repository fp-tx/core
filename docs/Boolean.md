
# Boolean







### Instances

* [BooleanAlgebra](#booleanalgebra)
* [Eq](#eq)
* [MonoidAll](#monoidall)
* [MonoidAny](#monoidany)
* [Ord](#ord)
* [SemigroupAll](#semigroupall)
* [SemigroupAny](#semigroupany)
* [Show](#show)

### Pattern matching

* [fold](#fold)
* [foldW](#foldw)
* [match](#match)
* [matchW](#matchw)

### Refinements

* [isBoolean](#isboolean)

## Instances


### `BooleanAlgebra`




#### Signature

```typescript
export declare const BooleanAlgebra: BA.BooleanAlgebra<boolean>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Eq`




#### Signature

```typescript
export declare const Eq: E.Eq<boolean>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonoidAll`

`boolean` monoid under conjunction.


The `empty` value is `true`.




#### Signature

```typescript
export declare const MonoidAll: Monoid<boolean>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { MonoidAll } from '@fp-tx/core/boolean'

assert.deepStrictEqual(MonoidAll.concat(true, true), true)
assert.deepStrictEqual(MonoidAll.concat(true, false), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonoidAny`

`boolean` monoid under disjunction.


The `empty` value is `false`.




#### Signature

```typescript
export declare const MonoidAny: Monoid<boolean>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { MonoidAny } from '@fp-tx/core/boolean'

assert.deepStrictEqual(MonoidAny.concat(true, true), true)
assert.deepStrictEqual(MonoidAny.concat(true, false), true)
assert.deepStrictEqual(MonoidAny.concat(false, false), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Ord`




#### Signature

```typescript
export declare const Ord: O.Ord<boolean>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `SemigroupAll`

`boolean` semigroup under conjunction.




#### Signature

```typescript
export declare const SemigroupAll: Semigroup<boolean>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { SemigroupAll } from '@fp-tx/core/boolean'

assert.deepStrictEqual(SemigroupAll.concat(true, true), true)
assert.deepStrictEqual(SemigroupAll.concat(true, false), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `SemigroupAny`

`boolean` semigroup under disjunction.




#### Signature

```typescript
export declare const SemigroupAny: Semigroup<boolean>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { SemigroupAny } from '@fp-tx/core/boolean'

assert.deepStrictEqual(SemigroupAny.concat(true, true), true)
assert.deepStrictEqual(SemigroupAny.concat(true, false), true)
assert.deepStrictEqual(SemigroupAny.concat(false, false), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Show`




#### Signature

```typescript
export declare const Show: S.Show<boolean>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `fold`

Alias of [`match`](#match).




#### Signature

```typescript
export declare const fold: <A>(onFalse: LazyArg<A>, onTrue: LazyArg<A>) => (value: boolean) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldW`

Alias of [`matchW`](#matchw).




#### Signature

```typescript
export declare const foldW: <A, B>(onFalse: LazyArg<A>, onTrue: LazyArg<B>) => (value: boolean) => A | B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`

Defines the fold over a boolean value. Takes two thunks `onTrue`, `onFalse` and a `boolean` value. If `value` is false, `onFalse()` is returned, otherwise `onTrue()`.




#### Signature

```typescript
export declare const match: <A>(onFalse: LazyArg<A>, onTrue: LazyArg<A>) => (value: boolean) => A
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { some, map } from '@fp-tx/core/Option'
import { pipe } from '@fp-tx/core/function'
import { match } from '@fp-tx/core/boolean'

assert.deepStrictEqual(
  pipe(
    some(true),
    map(
      match(
        () => 'false',
        () => 'true',
      ),
    ),
  ),
  some('true'),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchW`

Less strict version of [`match`](#match).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchW: <A, B>(onFalse: LazyArg<A>, onTrue: LazyArg<B>) => (value: boolean) => A | B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Refinements


### `isBoolean`




#### Signature

```typescript
export declare const isBoolean: Refinement<unknown, boolean>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti