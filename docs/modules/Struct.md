
# Struct







### Instances

* [getAssignSemigroup](#getassignsemigroup)

### Utilities

* [evolve](#evolve)

## Instances


### `getAssignSemigroup`

Return a semigroup which works like `Object.assign`.




#### Signature

```typescript
export declare const getAssignSemigroup: <A extends object = never>() => Semigroup<A>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { getAssignSemigroup } from '@fp-tx/core/struct'

interface Person {
  readonly name: string
  readonly age: number
}

const S = getAssignSemigroup<Person>()
assert.deepStrictEqual(S.concat({ name: 'name', age: 23 }, { name: 'name', age: 24 }), { name: 'name', age: 24 })

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `evolve`

Creates a new object by recursively evolving a shallow copy of `a`, according to the `transformation` functions.




#### Signature

```typescript
export declare const evolve: <A, F extends { [K in keyof A]: (a: A[K]) => unknown }>(
  transformations: F,
) => (a: A) => { [K_1 in keyof F]: ReturnType<F[K_1]> }
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import { evolve } from '@fp-tx/core/struct'

assert.deepStrictEqual(
  pipe(
    { a: 'a', b: 1 },
    evolve({
      a: a => a.length,
      b: b => b * 2,
    }),
  ),
  { a: 1, b: 2 },
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti