
# String







### Instances

* [Eq](#eq)
* [Monoid](#monoid)
* [Ord](#ord)
* [Semigroup](#semigroup)
* [Show](#show)

### Refinements

* [isString](#isstring)

### Utilities

* [empty](#empty)
* [endsWith](#endswith)
* [includes](#includes)
* [isEmpty](#isempty)
* [replace](#replace)
* [size](#size)
* [slice](#slice)
* [split](#split)
* [startsWith](#startswith)
* [toLowerCase](#tolowercase)
* [toUpperCase](#touppercase)
* [trim](#trim)
* [trimLeft](#trimleft)
* [trimRight](#trimright)

## Instances


### `Eq`




#### Signature

```typescript
export declare const Eq: E.Eq<string>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'

assert.deepStrictEqual(S.Eq.equals('a', 'a'), true)
assert.deepStrictEqual(S.Eq.equals('a', 'b'), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monoid`

`string` monoid under concatenation.


The `empty` value is `''`.




#### Signature

```typescript
export declare const Monoid: M.Monoid<string>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'

assert.deepStrictEqual(S.Monoid.concat('a', 'b'), 'ab')
assert.deepStrictEqual(S.Monoid.concat('a', S.Monoid.empty), 'a')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Ord`




#### Signature

```typescript
export declare const Ord: O.Ord<string>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'

assert.deepStrictEqual(S.Ord.compare('a', 'a'), 0)
assert.deepStrictEqual(S.Ord.compare('a', 'b'), -1)
assert.deepStrictEqual(S.Ord.compare('b', 'a'), 1)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Semigroup`

`string` semigroup under concatenation.




#### Signature

```typescript
export declare const Semigroup: S.Semigroup<string>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'

assert.deepStrictEqual(S.Semigroup.concat('a', 'b'), 'ab')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Show`




#### Signature

```typescript
export declare const Show: Sh.Show<string>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'

assert.deepStrictEqual(S.Show.show('a'), '"a"')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Refinements


### `isString`




#### Signature

```typescript
export declare const isString: Refinement<unknown, string>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'

assert.deepStrictEqual(S.isString('a'), true)
assert.deepStrictEqual(S.isString(1), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `empty`

An empty `string`.




#### Signature

```typescript
export declare const empty = ''
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `endsWith`




#### Signature

```typescript
export declare const endsWith: (searchString: string, position?: number) => (s: string) => boolean
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('abc', S.endsWith('c')), true)
assert.deepStrictEqual(pipe('ab', S.endsWith('c')), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `includes`




#### Signature

```typescript
export declare const includes: (searchString: string, position?: number) => (s: string) => boolean
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('abc', S.includes('b')), true)
assert.deepStrictEqual(pipe('abc', S.includes('d')), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isEmpty`

Test whether a `string` is empty.




#### Signature

```typescript
export declare const isEmpty: (s: string) => boolean
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('', S.isEmpty), true)
assert.deepStrictEqual(pipe('a', S.isEmpty), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `replace`




#### Signature

```typescript
export declare const replace: (searchValue: string | RegExp, replaceValue: string) => (s: string) => string
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('abc', S.replace('b', 'd')), 'adc')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `size`

Calculate the number of characters in a `string`.




#### Signature

```typescript
export declare const size: (s: string) => number
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('abc', S.size), 3)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `slice`




#### Signature

```typescript
export declare const slice: (start: number, end: number) => (s: string) => string
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('abcd', S.slice(1, 3)), 'bc')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `split`




#### Signature

```typescript
export declare const split: (separator: string | RegExp) => (s: string) => ReadonlyNonEmptyArray<string>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('abc', S.split('')), ['a', 'b', 'c'])
assert.deepStrictEqual(pipe('', S.split('')), [''])

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `startsWith`




#### Signature

```typescript
export declare const startsWith: (searchString: string, position?: number) => (s: string) => boolean
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('abc', S.startsWith('a')), true)
assert.deepStrictEqual(pipe('bc', S.startsWith('a')), false)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toLowerCase`




#### Signature

```typescript
export declare const toLowerCase: (s: string) => string
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('A', S.toLowerCase), 'a')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUpperCase`




#### Signature

```typescript
export declare const toUpperCase: (s: string) => string
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('a', S.toUpperCase), 'A')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `trim`




#### Signature

```typescript
export declare const trim: (s: string) => string
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe(' a ', S.trim), 'a')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `trimLeft`




#### Signature

```typescript
export declare const trimLeft: (s: string) => string
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe(' a ', S.trimLeft), 'a ')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `trimRight`




#### Signature

```typescript
export declare const trimRight: (s: string) => string
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as S from '@fp-tx/core/string'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe(' a ', S.trimRight), ' a')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti