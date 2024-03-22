
# Either







### Instances

* [Alt](#alt)
* [Applicative](#applicative)
* [Apply](#apply)
* [Bifunctor](#bifunctor)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [Extend](#extend)
* [Foldable](#foldable)
* [FromEither](#fromeither)
* [Functor](#functor)
* [Monad](#monad)
* [MonadThrow](#monadthrow)
* [Pointed](#pointed)
* [Traversable](#traversable)
* [getEq](#geteq)
* [getSemigroup](#getsemigroup)
* [getShow](#getshow)

### Combinators

* [tap](#tap)

### Constructors

* [left](#left)
* [of](#of)
* [right](#right)

### Conversions

* [fromNullable](#fromnullable)
* [fromOption](#fromoption)
* [toUnion](#tounion)

### Do notation

* [Do](#do)
* [apS](#aps)
* [apSW](#apsw)
* [bind](#bind)
* [bindTo](#bindto)
* [bindW](#bindw)

### Error handling

* [alt](#alt)
* [altW](#altw)
* [getAltValidation](#getaltvalidation)
* [getApplicativeValidation](#getapplicativevalidation)
* [getOrElse](#getorelse)
* [getOrElseW](#getorelsew)
* [mapLeft](#mapleft)
* [orElse](#orelse)
* [orElseW](#orelsew)

### Filtering

* [filterOrElse](#filterorelse)
* [filterOrElseW](#filterorelsew)
* [getCompactable](#getcompactable)
* [getFilterable](#getfilterable)
* [getWitherable](#getwitherable)

### Folding

* [foldMap](#foldmap)
* [reduce](#reduce)
* [reduceRight](#reduceright)

### Interop

* [tryCatch](#trycatch)
* [tryCatchK](#trycatchk)

### Legacy

* [chain](#chain)
* [chainFirst](#chainfirst)
* [chainFirstW](#chainfirstw)
* [chainNullableK](#chainnullablek)
* [chainOptionK](#chainoptionk)
* [chainOptionKW](#chainoptionkw)
* [chainW](#chainw)
* [fromNullableK](#fromnullablek)
* [fromOptionK](#fromoptionk)

### Lifting

* [fromPredicate](#frompredicate)
* [liftNullable](#liftnullable)
* [liftOption](#liftoption)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [bimap](#bimap)
* [flap](#flap)
* [map](#map)

### Model

* [Either](#either)
* [Left](#left)
* [Right](#right)

### Pattern matching

* [fold](#fold)
* [foldW](#foldw)
* [match](#match)
* [matchW](#matchw)

### Refinements

* [isLeft](#isleft)
* [isRight](#isright)

### Sequencing

* [flatMap](#flatmap)
* [flatMapNullable](#flatmapnullable)
* [flatMapOption](#flatmapoption)
* [flatten](#flatten)
* [flattenW](#flattenw)

### Traversing

* [sequence](#sequence)
* [sequenceArray](#sequencearray)
* [traverse](#traverse)
* [traverseArray](#traversearray)
* [traverseArrayWithIndex](#traversearraywithindex)
* [traverseReadonlyArrayWithIndex](#traversereadonlyarraywithindex)
* [traverseReadonlyNonEmptyArrayWithIndex](#traversereadonlynonemptyarraywithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ApT](#apt)
* ~~[Json](#json)~~ (deprecated)
* ~~[JsonArray](#jsonarray)~~ (deprecated)
* ~~[JsonRecord](#jsonrecord)~~ (deprecated)
* [ap](#ap)
* [apFirst](#apfirst)
* [apFirstW](#apfirstw)
* [apSecond](#apsecond)
* [apSecondW](#apsecondw)
* [apW](#apw)
* [do](#do)
* [duplicate](#duplicate)
* ~~[either](#either)~~ (deprecated)
* [elem](#elem)
* [exists](#exists)
* [extend](#extend)
* ~~[getApplyMonoid](#getapplymonoid)~~ (deprecated)
* ~~[getApplySemigroup](#getapplysemigroup)~~ (deprecated)
* ~~[getValidation](#getvalidation)~~ (deprecated)
* ~~[getValidationMonoid](#getvalidationmonoid)~~ (deprecated)
* ~~[getValidationSemigroup](#getvalidationsemigroup)~~ (deprecated)
* [let](#let)
* ~~[parseJSON](#parsejson)~~ (deprecated)
* ~~[stringifyJSON](#stringifyjson)~~ (deprecated)
* [swap](#swap)
* [throwError](#throwerror)
* [toError](#toerror)

## Instances


### `Alt`




#### Signature

```typescript
export declare const Alt: Alt2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative`




#### Signature

```typescript
export declare const Applicative: Applicative2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Apply`




#### Signature

```typescript
export declare const Apply: Apply2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


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


### `Chain`




#### Signature

```typescript
export declare const Chain: chainable.Chain2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec`




#### Signature

```typescript
export declare const ChainRec: ChnRec.ChainRec2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Extend`




#### Signature

```typescript
export declare const Extend: Extend2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable`




#### Signature

```typescript
export declare const Foldable: Foldable2<URI>
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


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow`




#### Signature

```typescript
export declare const MonadThrow: MonadThrow2<URI>
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


### `Traversable`




#### Signature

```typescript
export declare const Traversable: Traversable2<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare const getEq: <E, A>(EL: Eq<E>, EA: Eq<A>) => Eq<Either<E, A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroup`

Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are concatenated using the provided `Semigroup`




#### Signature

```typescript
export declare const getSemigroup: <E, A>(S: Semigroup<A>) => Semigroup<Either<E, A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getSemigroup, left, right } from '@fp-tx/core/Either'
import { SemigroupSum } from '@fp-tx/core/number'

const S = getSemigroup<string, number>(SemigroupSum)
assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare const getShow: <E, A>(SE: Show<E>, SA: Show<A>) => Show<Either<E, A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Combinators


### `tap`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tap: {
  <E1, A, E2, _>(self: Either<E1, A>, f: (a: A) => Either<E2, _>): Either<E1 | E2, A>
  <A, E2, _>(f: (a: A) => Either<E2, _>): <E1>(self: Either<E1, A>) => Either<E2 | E1, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `left`

Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this structure.




#### Signature

```typescript
export declare const left: <E = never, A = never>(e: E) => Either<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <E = never, A = never>(a: A) => Either<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`

Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias of this structure.




#### Signature

```typescript
export declare const right: <E = never, A = never>(a: A) => Either<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromNullable`

Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use the provided default as a `Left`.




#### Signature

```typescript
export declare const fromNullable: <E>(e: E) => <A>(a: A) => Either<E, NonNullable<A>>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { fromNullable, left, right } from '@fp-tx/core/Either'

const parse = fromNullable('nully')

assert.deepStrictEqual(parse(1), right(1))
assert.deepStrictEqual(parse(null), left('nully'))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => Either<E, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as O from '@fp-tx/core/Option'

assert.deepStrictEqual(
  pipe(
    O.some(1),
    E.fromOption(() => 'error'),
  ),
  E.right(1),
)
assert.deepStrictEqual(
  pipe(
    O.none,
    E.fromOption(() => 'error'),
  ),
  E.left('error'),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toUnion`




#### Signature

```typescript
export declare const toUnion: <E, A>(fa: Either<E, A>) => E | A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: Either<never, {}>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, E, B>(
  name: Exclude<N, keyof A>,
  fb: Either<E, B>,
) => (fa: Either<E, A>) => Either<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSW`

Less strict version of [`apS`](#aps).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const apSW: <A, N extends string, E2, B>(
  name: Exclude<N, keyof A>,
  fb: Either<E2, B>,
) => <E1>(fa: Either<E1, A>) => Either<
  E1 | E2,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bind`




#### Signature

```typescript
export declare const bind: <N extends string, A, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Either<E, B>,
) => (ma: Either<E, A>) => Either<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(
  name: N,
) => <E, A>(fa: Either<E, A>) => Either<E, { readonly [K in N]: A }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindW`

The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const bindW: <N extends string, A, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Either<E2, B>,
) => <E1>(fa: Either<E1, A>) => Either<
  E1 | E2,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Error handling


### `alt`

Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to types of kind `* -> *`.


In case of `Either` returns the left-most non-`Left` value (or the right-most `Left` value if both values are `Left`).


| x | y | `pipe(x, alt(() => y)` | | ---------- | ---------- | ---------------------- | | `left(a)` | `left(b)` | `left(b)` | | `left(a)` | `right(2)` | `right(2)` | | `right(1)` | `left(b)` | `right(1)` | | `right(1)` | `right(2)` | `right(1)` |




#### Signature

```typescript
export declare const alt: <E, A>(that: LazyArg<Either<E, A>>) => (fa: Either<E, A>) => Either<E, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    E.left('a'),
    E.alt(() => E.left('b')),
  ),
  E.left('b'),
)
assert.deepStrictEqual(
  pipe(
    E.left('a'),
    E.alt(() => E.right(2)),
  ),
  E.right(2),
)
assert.deepStrictEqual(
  pipe(
    E.right(1),
    E.alt(() => E.left('b')),
  ),
  E.right(1),
)
assert.deepStrictEqual(
  pipe(
    E.right(1),
    E.alt(() => E.right(2)),
  ),
  E.right(1),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `altW`

Less strict version of [`alt`](#alt).


The `W` suffix (short for **W**idening) means that the error and the return types will be merged.




#### Signature

```typescript
export declare const altW: <E2, B>(that: LazyArg<Either<E2, B>>) => <E1, A>(fa: Either<E1, A>) => Either<E2, A | B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getAltValidation`

The default [`Alt`](#alt) instance returns the last error, if you want to get all errors you need to provide a way to concatenate them via a `Semigroup`.




#### Signature

```typescript
export declare const getAltValidation: <E>(SE: Semigroup<E>) => Alt2C<'Either', E>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as S from '@fp-tx/core/Semigroup'
import * as string from '@fp-tx/core/string'

const parseString = (u: unknown): E.Either<string, string> =>
  typeof u === 'string' ? E.right(u) : E.left('not a string')

const parseNumber = (u: unknown): E.Either<string, number> =>
  typeof u === 'number' ? E.right(u) : E.left('not a number')

const parse = (u: unknown): E.Either<string, string | number> =>
  pipe(
    parseString(u),
    E.alt<string, string | number>(() => parseNumber(u)),
  )

assert.deepStrictEqual(parse(true), E.left('not a number')) // <= last error

const Alt = E.getAltValidation(pipe(string.Semigroup, S.intercalate(', ')))

const parseAll = (u: unknown): E.Either<string, string | number> =>
  Alt.alt<string | number>(parseString(u), () => parseNumber(u))

assert.deepStrictEqual(parseAll(true), E.left('not a string, not a number')) // <= all errors

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getApplicativeValidation`

The default [`Applicative`](#applicative) instance returns the first error, if you want to get all errors you need to provide a way to concatenate them via a `Semigroup`.




#### Signature

```typescript
export declare const getApplicativeValidation: <E>(SE: Semigroup<E>) => Applicative2C<'Either', E>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as A from '@fp-tx/core/Apply'
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'
import * as S from '@fp-tx/core/Semigroup'
import * as string from '@fp-tx/core/string'

const parseString = (u: unknown): E.Either<string, string> =>
  typeof u === 'string' ? E.right(u) : E.left('not a string')

const parseNumber = (u: unknown): E.Either<string, number> =>
  typeof u === 'number' ? E.right(u) : E.left('not a number')

interface Person {
  readonly name: string
  readonly age: number
}

const parsePerson = (input: Record<string, unknown>): E.Either<string, Person> =>
  pipe(E.Do, E.apS('name', parseString(input.name)), E.apS('age', parseNumber(input.age)))

assert.deepStrictEqual(parsePerson({}), E.left('not a string')) // <= first error

const Applicative = E.getApplicativeValidation(pipe(string.Semigroup, S.intercalate(', ')))

const apS = A.apS(Applicative)

const parsePersonAll = (input: Record<string, unknown>): E.Either<string, Person> =>
  pipe(E.Do, apS('name', parseString(input.name)), apS('age', parseNumber(input.age)))

assert.deepStrictEqual(parsePersonAll({}), E.left('not a string, not a number')) // <= all errors

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElse`

Returns the wrapped value if it's a `Right` or a default value if is a `Left`.




#### Signature

```typescript
export declare const getOrElse: <E, A>(onLeft: (e: E) => A) => (ma: Either<E, A>) => A
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { getOrElse, left, right } from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    right(1),
    getOrElse(() => 0),
  ),
  1,
)
assert.deepStrictEqual(
  pipe(
    left('error'),
    getOrElse(() => 0),
  ),
  0,
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getOrElseW`

Less strict version of [`getOrElse`](#getorelse).


The `W` suffix (short for **W**idening) means that the handler return type will be merged.




#### Signature

```typescript
export declare const getOrElseW: <E, B>(onLeft: (e: E) => B) => <A>(ma: Either<E, A>) => B | A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapLeft`

Map a function over the first type argument of a bifunctor.




#### Signature

```typescript
export declare const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: Either<E, A>) => Either<G, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElse`

Useful for recovering from errors.




#### Signature

```typescript
export declare const orElse: <E1, A, E2>(onLeft: (e: E1) => Either<E2, A>) => (ma: Either<E1, A>) => Either<E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `orElseW`

Less strict version of [`orElse`](#orelse).


The `W` suffix (short for **W**idening) means that the return types will be merged.




#### Signature

```typescript
export declare const orElseW: <E1, E2, B>(
  onLeft: (e: E1) => Either<E2, B>,
) => <A>(ma: Either<E1, A>) => Either<E2, B | A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Filtering


### `filterOrElse`




#### Signature

```typescript
export declare const filterOrElse: {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (self: Either<E, A>) => Either<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(self: Either<E, B>) => Either<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (self: Either<E, A>) => Either<E, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    E.right(1),
    E.filterOrElse(
      n => n > 0,
      () => 'error',
    ),
  ),
  E.right(1),
)
assert.deepStrictEqual(
  pipe(
    E.right(-1),
    E.filterOrElse(
      n => n > 0,
      () => 'error',
    ),
  ),
  E.left('error'),
)
assert.deepStrictEqual(
  pipe(
    E.left('a'),
    E.filterOrElse(
      n => n > 0,
      () => 'error',
    ),
  ),
  E.left('a'),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterOrElseW`

Less strict version of [`filterOrElse`](#filterorelse).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const filterOrElseW: {
  <A, B extends A, E2>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E2,
  ): <E1>(ma: Either<E1, A>) => Either<E1 | E2, B>
  <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1, B extends A>(mb: Either<E1, B>) => Either<E1 | E2, B>
  <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1>(ma: Either<E1, A>) => Either<E1 | E2, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getCompactable`

Builds a `Compactable` instance for `Either` given `Monoid` for the left side.




#### Signature

```typescript
export declare const getCompactable: <E>(M: Monoid<E>) => Compactable2C<'Either', E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getFilterable`

Builds a `Filterable` instance for `Either` given `Monoid` for the left side




#### Signature

```typescript
export declare const getFilterable: <E>(M: Monoid<E>) => Filterable2C<'Either', E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getWitherable`

Builds `Witherable` instance for `Either` given `Monoid` for the left side




#### Signature

```typescript
export declare const getWitherable: <E>(M: Monoid<E>) => Witherable2C<'Either', E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `foldMap`

Map each element of the structure to a monoid, and combine the results.




#### Signature

```typescript
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: Either<E, A>) => M
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as E from '@fp-tx/core/Either'
import * as S from '@fp-tx/core/string'

const yell = (a: string) => `${a}!`

assert.deepStrictEqual(pipe(E.right('a'), E.foldMap(S.Monoid)(yell)), 'a!')

assert.deepStrictEqual(pipe(E.left('e'), E.foldMap(S.Monoid)(yell)), S.Monoid.empty)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`

Left-associative fold of a structure.




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: Either<E, A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as E from '@fp-tx/core/Either'

const startWith = 'prefix'
const concat = (a: string, b: string) => `${a}:${b}`

assert.deepStrictEqual(pipe(E.right('a'), E.reduce(startWith, concat)), 'prefix:a')

assert.deepStrictEqual(pipe(E.left('e'), E.reduce(startWith, concat)), 'prefix')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`

Right-associative fold of a structure.




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: Either<E, A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as E from '@fp-tx/core/Either'

const startWith = 'postfix'
const concat = (a: string, b: string) => `${a}:${b}`

assert.deepStrictEqual(pipe(E.right('a'), E.reduceRight(startWith, concat)), 'a:postfix')

assert.deepStrictEqual(pipe(E.left('e'), E.reduceRight(startWith, concat)), 'postfix')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Interop


### `tryCatch`

Constructs a new `Either` from a function that might throw.


See also [`tryCatchK`](#trycatchk).




#### Signature

```typescript
export declare const tryCatch: <E, A>(f: LazyArg<A>, onThrow: (e: unknown) => E) => Either<E, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'

const unsafeHead = <A>(as: ReadonlyArray<A>): A => {
  if (as.length > 0) {
    return as[0]
  } else {
    throw new Error('empty array')
  }
}

const head = <A>(as: ReadonlyArray<A>): E.Either<Error, A> =>
  E.tryCatch(
    () => unsafeHead(as),
    e => (e instanceof Error ? e : new Error('unknown error')),
  )

assert.deepStrictEqual(head([]), E.left(new Error('empty array')))
assert.deepStrictEqual(head([1, 2, 3]), E.right(1))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tryCatchK`

Converts a function that may throw to one returning a `Either`.




#### Signature

```typescript
export declare const tryCatchK: <A extends readonly unknown[], B, E>(
  f: (...a: A) => B,
  onThrow: (error: unknown) => E,
) => (...a: A) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirst`

Alias of `tap`.




#### Signature

```typescript
export declare const chainFirst: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstW`

Alias of `tap`.




#### Signature

```typescript
export declare const chainFirstW: <E2, A, B>(
  f: (a: A) => Either<E2, B>,
) => <E1>(ma: Either<E1, A>) => Either<E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainNullableK`

Use `flatMapNullable`.




#### Signature

```typescript
export declare const chainNullableK: <E>(
  e: E,
) => <A, B>(f: (a: A) => B) => (ma: Either<E, A>) => Either<E, NonNullable<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionK`

Use `flatMapOption`.




#### Signature

```typescript
export declare const chainOptionK: <E>(
  onNone: LazyArg<E>,
) => <A, B>(f: (a: A) => Option<B>) => (ma: Either<E, A>) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionKW`

Use `flatMapOption`.




#### Signature

```typescript
export declare const chainOptionKW: <E2>(
  onNone: LazyArg<E2>,
) => <A, B>(f: (a: A) => Option<B>) => <E1>(ma: Either<E1, A>) => Either<E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainW`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chainW: <E2, A, B>(f: (a: A) => Either<E2, B>) => <E1>(ma: Either<E1, A>) => Either<E2 | E1, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromNullableK`

Use `liftNullable`.




#### Signature

```typescript
export declare const fromNullableK: <E>(
  e: E,
) => <A extends readonly unknown[], B>(f: (...a: A) => B) => (...a: A) => Either<E, NonNullable<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`

Use `liftOption`.




#### Signature

```typescript
export declare const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromPredicate`




#### Signature

```typescript
export declare const fromPredicate: {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => Either<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => Either<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => Either<E, A>
}
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { fromPredicate, left, right } from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(
  pipe(
    1,
    fromPredicate(
      n => n > 0,
      () => 'error',
    ),
  ),
  right(1),
)
assert.deepStrictEqual(
  pipe(
    -1,
    fromPredicate(
      n => n > 0,
      () => 'error',
    ),
  ),
  left('error'),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `liftNullable`




#### Signature

```typescript
export declare const liftNullable: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => B | null | undefined,
  onNullable: (...a: A) => E,
) => (...a: A) => Either<E, NonNullable<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `liftOption`




#### Signature

```typescript
export declare const liftOption: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => Option<B>,
  onNone: (...a: A) => E,
) => (...a: A) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the `Right` value of this `Either` to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <E, _>(self: Either<E, _>) => Either<E, A>
  <E, _, A>(self: Either<E, _>, a: A): Either<E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the `Right` value of this `Either` to the void constant value.




#### Signature

```typescript
export declare const asUnit: <E, _>(self: Either<E, _>) => Either<E, void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bimap`

Map a pair of functions over the two type arguments of the bifunctor.




#### Signature

```typescript
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: Either<E, A>) => Either<G, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <E, B>(fab: Either<E, (a: A) => B>) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => <E>(fa: Either<E, A>) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Either`




#### Signature

```typescript
export type Either<E, A> = Left<E> | Right<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Left`




#### Signature

```typescript
export interface Left<E> {
  readonly _tag: 'Left'
  readonly left: E
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Right`




#### Signature

```typescript
export interface Right<A> {
  readonly _tag: 'Right'
  readonly right: A
}
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
export declare const fold: <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: Either<E, A>) => B
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
export declare const foldW: <E, B, A, C>(onLeft: (e: E) => B, onRight: (a: A) => C) => (ma: Either<E, A>) => B | C
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `match`

Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function, if the value is a `Right` the inner value is applied to the second function.




#### Signature

```typescript
export declare const match: <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: Either<E, A>) => B
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { match, left, right } from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'

function onLeft(errors: Array<string>): string {
  return `Errors: ${errors.join(', ')}`
}

function onRight(value: number): string {
  return `Ok: ${value}`
}

assert.strictEqual(pipe(right(1), match(onLeft, onRight)), 'Ok: 1')
assert.strictEqual(pipe(left(['error 1', 'error 2']), match(onLeft, onRight)), 'Errors: error 1, error 2')

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchW`

Less strict version of [`match`](#match).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchW: <E, B, A, C>(onLeft: (e: E) => B, onRight: (a: A) => C) => (ma: Either<E, A>) => B | C
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Refinements


### `isLeft`

Returns `true` if the either is an instance of `Left`, `false` otherwise.




#### Signature

```typescript
export declare const isLeft: <E>(ma: Either<E, unknown>) => ma is Left<E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `isRight`

Returns `true` if the either is an instance of `Right`, `false` otherwise.




#### Signature

```typescript
export declare const isRight: <A>(ma: Either<unknown, A>) => ma is Right<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `flatMap`




#### Signature

```typescript
export declare const flatMap: {
  <A, E2, B>(f: (a: A) => Either<E2, B>): <E1>(ma: Either<E1, A>) => Either<E1 | E2, B>
  <E1, A, E2, B>(ma: Either<E1, A>, f: (a: A) => Either<E2, B>): Either<E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapNullable`




#### Signature

```typescript
export declare const flatMapNullable: {
  <A, B, E2>(
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): <E1>(self: Either<E1, A>) => Either<E2 | E1, NonNullable<B>>
  <E1, A, B, E2>(
    self: Either<E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): Either<E1 | E2, NonNullable<B>>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapOption`




#### Signature

```typescript
export declare const flatMapOption: {
  <A, B, E2>(f: (a: A) => Option<B>, onNone: (a: A) => E2): <E1>(self: Either<E1, A>) => Either<E2 | E1, B>
  <E1, A, B, E2>(self: Either<E1, A>, f: (a: A) => Option<B>, onNone: (a: A) => E2): Either<E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`

The `flatten` function is the conventional monad join operator. It is used to remove one level of monadic structure, projecting its bound argument into the outer level.




#### Signature

```typescript
export declare const flatten: <E, A>(mma: Either<E, Either<E, A>>) => Either<E, A>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'

assert.deepStrictEqual(E.flatten(E.right(E.right('a'))), E.right('a'))
assert.deepStrictEqual(E.flatten(E.right(E.left('e'))), E.left('e'))
assert.deepStrictEqual(E.flatten(E.left('e')), E.left('e'))

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flattenW`

Less strict version of [`flatten`](#flatten).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const flattenW: <E1, E2, A>(mma: Either<E1, Either<E2, A>>) => Either<E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequence`

Evaluate each monadic action in the structure from left to right, and collect the results.




#### Signature

```typescript
export declare const sequence: Traversable2<URI>['sequence']
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as E from '@fp-tx/core/Either'
import * as O from '@fp-tx/core/Option'

assert.deepStrictEqual(pipe(E.right(O.some('a')), E.sequence(O.Applicative)), O.some(E.right('a')))

assert.deepStrictEqual(pipe(E.right(O.none), E.sequence(O.Applicative)), O.none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sequenceArray`

Equivalent to `ReadonlyArray#sequence(Applicative)`.




#### Signature

```typescript
export declare const sequenceArray: <E, A>(as: ReadonlyArray<Either<E, A>>) => Either<E, ReadonlyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse`

Map each element of a structure to an action, evaluate these actions from left to right, and collect the results.




#### Signature

```typescript
export declare const traverse: PipeableTraverse2<URI>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { pipe } from '@fp-tx/core/function'
import * as RA from '@fp-tx/core/ReadonlyArray'
import * as E from '@fp-tx/core/Either'
import * as O from '@fp-tx/core/Option'

assert.deepStrictEqual(pipe(E.right(['a']), E.traverse(O.Applicative)(RA.head)), O.some(E.right('a')))

assert.deepStrictEqual(pipe(E.right([]), E.traverse(O.Applicative)(RA.head)), O.none)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArray`

Equivalent to `ReadonlyArray#traverse(Applicative)`.




#### Signature

```typescript
export declare const traverseArray: <E, A, B>(
  f: (a: A) => Either<E, B>,
) => (as: readonly A[]) => Either<E, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseArrayWithIndex: <E, A, B>(
  f: (index: number, a: A) => Either<E, B>,
) => (as: ReadonlyArray<A>) => Either<E, ReadonlyArray<B>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyArrayWithIndex`

Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseReadonlyArrayWithIndex: <A, E, B>(
  f: (index: number, a: A) => Either<E, B>,
) => (as: readonly A[]) => Either<E, readonly B[]>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseReadonlyNonEmptyArrayWithIndex`

Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.




#### Signature

```typescript
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, E, B>(
  f: (index: number, a: A) => Either<E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => Either<E, ReadonlyNonEmptyArray<B>>
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
export declare const URI = 'Either'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ApT`




#### Signature

```typescript
export declare const ApT: Either<never, readonly []>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`Json`~~

Use [`Json`](./Json) module instead.




#### Signature

```typescript
export type Json = boolean | number | string | null | JsonArray | JsonRecord
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`JsonArray`~~

Use [`Json`](./Json) module instead.




#### Signature

```typescript
export interface JsonArray extends ReadonlyArray<Json> {}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`JsonRecord`~~

Use [`Json`](./Json) module instead.




#### Signature

```typescript
export interface JsonRecord {
  readonly [key: string]: Json
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`




#### Signature

```typescript
export declare const ap: <E, A>(fa: Either<E, A>) => <B>(fab: Either<E, (a: A) => B>) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirst`

Combine two effectful actions, keeping only the result of the first.




#### Signature

```typescript
export declare const apFirst: <E, B>(second: Either<E, B>) => <A>(first: Either<E, A>) => Either<E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirstW`

Less strict version of [`apFirst`](#apfirst)


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const apFirstW: <E2, B>(second: Either<E2, B>) => <E1, A>(first: Either<E1, A>) => Either<E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecond`

Combine two effectful actions, keeping only the result of the second.




#### Signature

```typescript
export declare const apSecond: <E, B>(second: Either<E, B>) => <A>(first: Either<E, A>) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecondW`

Less strict version of [`apSecond`](#apsecond)


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const apSecondW: <E2, B>(second: Either<E2, B>) => <E1, A>(first: Either<E1, A>) => Either<E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apW`

Less strict version of [`ap`](#ap).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const apW: <E2, A>(fa: Either<E2, A>) => <E1, B>(fab: Either<E1, (a: A) => B>) => Either<E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `do`




#### Signature

```typescript
export declare const do_: <MA extends EitherIterable<any, any>, A>(
  yieldFunction: (unwrap: <E, A>(ma: Either<E, A>) => EitherIterable<E, A>) => Generator<MA, A>,
) => Either<MA extends EitherIterable<infer E, any> ? E : never, A>
```




---


### `duplicate`




#### Signature

```typescript
export declare const duplicate: <E, A>(ma: Either<E, A>) => Either<E, Either<E, A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`either`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `E.Functor` instead of `E.either` (where `E` is from `import E from 'fp-ts/Either'`)




#### Signature

```typescript
export declare const either: Monad2<URI> &
  Foldable2<URI> &
  Traversable2<URI> &
  Bifunctor2<URI> &
  Alt2<URI> &
  Extend2<URI> &
  ChnRec.ChainRec2<URI> &
  MonadThrow2<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`




#### Signature

```typescript
export declare function elem<A>(E: Eq<A>): {
  (a: A): <E>(ma: Either<E, A>) => boolean
  <E>(a: A, ma: Either<E, A>): boolean
}

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `exists`

Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.




#### Signature

```typescript
export declare const exists: <A>(predicate: Predicate<A>) => (ma: Either<unknown, A>) => boolean
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { exists, left, right } from '@fp-tx/core/Either'

const gt2 = exists((n: number) => n > 2)

assert.strictEqual(gt2(left('a')), false)
assert.strictEqual(gt2(right(1)), false)
assert.strictEqual(gt2(right(3)), true)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`




#### Signature

```typescript
export declare const extend: <E, A, B>(f: (wa: Either<E, A>) => B) => (wa: Either<E, A>) => Either<E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getApplyMonoid`~~

Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.




#### Signature

```typescript
export declare const getApplyMonoid: <E, A>(M: Monoid<A>) => Monoid<Either<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getApplySemigroup`~~

Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.


Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values are concatenated using the provided `Semigroup`




#### Signature

```typescript
export declare const getApplySemigroup: <E, A>(S: Semigroup<A>) => Semigroup<Either<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getValidation`~~

Use [`getApplicativeValidation`](#getapplicativevalidation) and [`getAltValidation`](#getaltvalidation) instead.




#### Signature

```typescript
export declare function getValidation<E>(
  SE: Semigroup<E>,
): Monad2C<URI, E> &
  Foldable2<URI> &
  Traversable2<URI> &
  Bifunctor2<URI> &
  Alt2C<URI, E> &
  Extend2<URI> &
  ChnRec.ChainRec2C<URI, E> &
  MonadThrow2C<URI, E>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getValidationMonoid`~~

Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.




#### Signature

```typescript
export declare const getValidationMonoid: <E, A>(SE: Semigroup<E>, MA: Monoid<A>) => Monoid<Either<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getValidationSemigroup`~~

Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.




#### Signature

```typescript
export declare const getValidationSemigroup: <E, A>(SE: Semigroup<E>, SA: Semigroup<A>) => Semigroup<Either<E, A>>
```

#### Details

* Added in 1.0.0
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
) => <E>(fa: Either<E, A>) => Either<E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### ~~`parseJSON`~~

Use [`parse`](./Json#parse) instead.




#### Signature

```typescript
export declare function parseJSON<E>(s: string, onError: (reason: unknown) => E): Either<E, Json>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`stringifyJSON`~~

Use [`stringify`](./Json#stringify) instead.




#### Signature

```typescript
export declare const stringifyJSON: <E>(u: unknown, onError: (reason: unknown) => E) => Either<E, string>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `swap`

Returns a `Right` if is a `Left` (and vice versa).




#### Signature

```typescript
export declare const swap: <E, A>(ma: Either<E, A>) => Either<A, E>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `throwError`




#### Signature

```typescript
export declare const throwError: MonadThrow2<URI>['throwError']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `toError`

Default value for the `onError` argument of `tryCatch`




#### Signature

```typescript
export declare function toError(e: unknown): Error

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti