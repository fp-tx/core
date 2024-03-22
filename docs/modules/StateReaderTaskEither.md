
# StateReaderTaskEither







### Instances

* [Alt](#alt)
* [Applicative](#applicative)
* [Apply](#apply)
* [Bifunctor](#bifunctor)
* [Chain](#chain)
* [ChainRec](#chainrec)
* [FromEither](#fromeither)
* [FromIO](#fromio)
* [FromReader](#fromreader)
* [FromState](#fromstate)
* [FromTask](#fromtask)
* [Functor](#functor)
* [Monad](#monad)
* [MonadIO](#monadio)
* [MonadTask](#monadtask)
* [MonadThrow](#monadthrow)
* [Pointed](#pointed)

### Combinators

* [tap](#tap)
* [tapEither](#tapeither)
* [tapIO](#tapio)
* [tapReader](#tapreader)
* [tapTask](#taptask)

### Constructors

* [ask](#ask)
* [asks](#asks)
* [asksStateReaderTaskEither](#asksstatereadertaskeither)
* [asksStateReaderTaskEitherW](#asksstatereadertaskeitherw)
* [fromReaderTaskEither](#fromreadertaskeither)
* [get](#get)
* [gets](#gets)
* [left](#left)
* [leftIO](#leftio)
* [leftReader](#leftreader)
* [leftState](#leftstate)
* [leftTask](#lefttask)
* [modify](#modify)
* [of](#of)
* [put](#put)
* [right](#right)
* [rightIO](#rightio)
* [rightReader](#rightreader)
* [rightState](#rightstate)
* [rightTask](#righttask)

### Conversions

* [fromEither](#fromeither)
* [fromIO](#fromio)
* [fromIOEither](#fromioeither)
* [fromOption](#fromoption)
* [fromReader](#fromreader)
* [fromReaderEither](#fromreadereither)
* [fromState](#fromstate)
* [fromTask](#fromtask)
* [fromTaskEither](#fromtaskeither)

### Do notation

* [apSW](#apsw)

### Error handling

* [alt](#alt)
* [altW](#altw)
* [mapLeft](#mapleft)

### Filtering

* [filterOrElse](#filterorelse)
* [filterOrElseW](#filterorelsew)

### Instance methods

* [chainRec](#chainrec)

### Legacy

* [chain](#chain)
* [chainEitherK](#chaineitherk)
* [chainEitherKW](#chaineitherkw)
* [chainFirst](#chainfirst)
* [chainFirstEitherK](#chainfirsteitherk)
* [chainFirstEitherKW](#chainfirsteitherkw)
* [chainFirstIOK](#chainfirstiok)
* [chainFirstReaderK](#chainfirstreaderk)
* [chainFirstReaderKW](#chainfirstreaderkw)
* [chainFirstTaskK](#chainfirsttaskk)
* [chainFirstW](#chainfirstw)
* [chainIOEitherK](#chainioeitherk)
* [chainIOEitherKW](#chainioeitherkw)
* [chainIOK](#chainiok)
* [chainOptionK](#chainoptionk)
* [chainOptionKW](#chainoptionkw)
* [chainReaderK](#chainreaderk)
* [chainReaderKW](#chainreaderkw)
* [chainReaderTaskEitherK](#chainreadertaskeitherk)
* [chainReaderTaskEitherKW](#chainreadertaskeitherkw)
* [chainStateK](#chainstatek)
* [chainTaskEitherK](#chaintaskeitherk)
* [chainTaskEitherKW](#chaintaskeitherkw)
* [chainTaskK](#chaintaskk)
* [chainW](#chainw)

### Lifting

* [fromEitherK](#fromeitherk)
* [fromIOEitherK](#fromioeitherk)
* [fromIOK](#fromiok)
* [fromOptionK](#fromoptionk)
* [fromPredicate](#frompredicate)
* [fromReaderK](#fromreaderk)
* [fromReaderTaskEitherK](#fromreadertaskeitherk)
* [fromStateK](#fromstatek)
* [fromTaskEitherK](#fromtaskeitherk)
* [fromTaskK](#fromtaskk)

### Mapping

* [as](#as)
* [asUnit](#asunit)
* [bimap](#bimap)
* [flap](#flap)
* [map](#map)

### Model

* [StateReaderTaskEither](#statereadertaskeither)

### Sequencing

* [flatMap](#flatmap)
* [flatMapEither](#flatmapeither)
* [flatMapIO](#flatmapio)
* [flatMapIOEither](#flatmapioeither)
* [flatMapOption](#flatmapoption)
* [flatMapReader](#flatmapreader)
* [flatMapReaderTaskEither](#flatmapreadertaskeither)
* [flatMapState](#flatmapstate)
* [flatMapTask](#flatmaptask)
* [flatMapTaskEither](#flatmaptaskeither)
* [flatten](#flatten)
* [flattenW](#flattenw)

### Traversing

* [sequenceArray](#sequencearray)
* [traverseArray](#traversearray)
* [traverseArrayWithIndex](#traversearraywithindex)
* [traverseReadonlyArrayWithIndex](#traversereadonlyarraywithindex)
* [traverseReadonlyNonEmptyArrayWithIndex](#traversereadonlynonemptyarraywithindex)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ap](#ap)
* [apFirst](#apfirst)
* [apFirstW](#apfirstw)
* [apS](#aps)
* [apSecond](#apsecond)
* [apSecondW](#apsecondw)
* [apW](#apw)
* [bind](#bind)
* [bindTo](#bindto)
* [bindW](#bindw)
* [do](#do)
* ~~[evalState](#evalstate)~~ (deprecated)
* [evaluate](#evaluate)
* ~~[execState](#execstate)~~ (deprecated)
* [execute](#execute)
* [let](#let)
* [local](#local)
* ~~[run](#run)~~ (deprecated)
* ~~[stateReaderTaskEither](#statereadertaskeither)~~ (deprecated)
* ~~[stateReaderTaskEitherSeq](#statereadertaskeitherseq)~~ (deprecated)
* [throwError](#throwerror)

## Instances


### `Alt`




#### Signature

```typescript
export declare const Alt: Alt4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Applicative`




#### Signature

```typescript
export declare const Applicative: Applicative4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Apply`




#### Signature

```typescript
export declare const Apply: Apply4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Bifunctor`




#### Signature

```typescript
export declare const Bifunctor: Bifunctor4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain`




#### Signature

```typescript
export declare const Chain: chainable.Chain4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ChainRec`

ChainRec for `StateReaderTaskEither`




#### Signature

```typescript
export declare const ChainRec: ChainRec4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

---


### `FromEither`




#### Signature

```typescript
export declare const FromEither: FromEither4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromIO`




#### Signature

```typescript
export declare const FromIO: FromIO4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromReader`




#### Signature

```typescript
export declare const FromReader: FromReader4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromState`




#### Signature

```typescript
export declare const FromState: FromState4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `FromTask`




#### Signature

```typescript
export declare const FromTask: FromTask4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO`




#### Signature

```typescript
export declare const MonadIO: MonadIO4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask`




#### Signature

```typescript
export declare const MonadTask: MonadTask4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadThrow`




#### Signature

```typescript
export declare const MonadThrow: MonadThrow4<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed4<URI>
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
  <S, R1, E1, A, R2, E2, _>(
    self: StateReaderTaskEither<S, R1, E1, A>,
    f: (a: A) => StateReaderTaskEither<S, R2, E2, _>,
  ): StateReaderTaskEither<S, R1 & R2, E1 | E2, A>
  <A, S, R2, E2, _>(
    f: (a: A) => StateReaderTaskEither<S, R2, E2, _>,
  ): <R1, E1>(self: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E2 | E1, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapEither`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapEither: {
  <A, E2, _>(
    f: (a: A) => Either<E2, _>,
  ): <S, R1, E1>(self: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1, E2 | E1, A>
  <S, R1, E1, A, E2, _>(
    self: StateReaderTaskEither<S, R1, E1, A>,
    f: (a: A) => Either<E2, _>,
  ): StateReaderTaskEither<S, R1, E1 | E2, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapIO`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapIO: {
  <A, _>(f: (a: A) => IO<_>): <S, R, E>(self: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
  <S, R, E, A, _>(self: StateReaderTaskEither<S, R, E, A>, f: (a: A) => IO<_>): StateReaderTaskEither<S, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapReader`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapReader: {
  <A, R2, _>(
    f: (a: A) => Reader<R2, _>,
  ): <S, R1, E>(self: StateReaderTaskEither<S, R1, E, A>) => StateReaderTaskEither<S, R1 & R2, E, A>
  <S, R1, E, A, R2, _>(
    self: StateReaderTaskEither<S, R1, E, A>,
    f: (a: A) => Reader<R2, _>,
  ): StateReaderTaskEither<S, R1 & R2, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tapTask`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const tapTask: {
  <A, _>(f: (a: A) => Task<_>): <S, R, E>(self: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
  <S, R, E, A, _>(self: StateReaderTaskEither<S, R, E, A>, f: (a: A) => Task<_>): StateReaderTaskEither<S, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `ask`

Reads the current context.




#### Signature

```typescript
export declare const ask: <S, R, E = never>() => StateReaderTaskEither<S, R, E, R>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asks`

Projects a value from the global context in a `ReaderEither`.




#### Signature

```typescript
export declare const asks: <S, R, A, E = never>(f: (r: R) => A) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksStateReaderTaskEither`

Effectfully accesses the environment.




#### Signature

```typescript
export declare const asksStateReaderTaskEither: <R, S, E, A>(
  f: (r: R) => StateReaderTaskEither<S, R, E, A>,
) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asksStateReaderTaskEitherW`

Less strict version of [`asksStateReaderTaskEither`](#asksstatereadertaskeither).




#### Signature

```typescript
export declare const asksStateReaderTaskEitherW: <R1, S, R2, E, A>(
  f: (r1: R1) => StateReaderTaskEither<S, R2, E, A>,
) => StateReaderTaskEither<S, R1 & R2, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderTaskEither`




#### Signature

```typescript
export declare const fromReaderTaskEither: <R, E, A, S>(
  fa: ReaderTaskEither<R, E, A>,
) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `get`

Get the current state




#### Signature

```typescript
export declare const get: <S, R, E = never>() => StateReaderTaskEither<S, R, E, S>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `gets`

Get a value which depends on the current state




#### Signature

```typescript
export declare const gets: <S, R, E = never, A = never>(f: (s: S) => A) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `left`




#### Signature

```typescript
export declare const left: <S, R, E, A = never>(e: E) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftIO`




#### Signature

```typescript
export declare function leftIO<S, R, E, A = never>(me: IO<E>): StateReaderTaskEither<S, R, E, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftReader`




#### Signature

```typescript
export declare function leftReader<S, R, E, A = never>(me: Reader<R, E>): StateReaderTaskEither<S, R, E, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftState`




#### Signature

```typescript
export declare const leftState: <S, R, E, A = never>(me: State<S, E>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `leftTask`




#### Signature

```typescript
export declare function leftTask<S, R, E, A = never>(me: Task<E>): StateReaderTaskEither<S, R, E, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `modify`

Modify the state by applying a function to the current state




#### Signature

```typescript
export declare const modify: <S, R, E = never>(f: Endomorphism<S>) => StateReaderTaskEither<S, R, E, void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <S, R = unknown, E = never, A = never>(a: A) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `put`

Set the state




#### Signature

```typescript
export declare const put: <S, R, E = never>(s: S) => StateReaderTaskEither<S, R, E, void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `right`




#### Signature

```typescript
export declare const right: <S, R, E = never, A = never>(a: A) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightIO`




#### Signature

```typescript
export declare function rightIO<S, R, E = never, A = never>(ma: IO<A>): StateReaderTaskEither<S, R, E, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightReader`




#### Signature

```typescript
export declare function rightReader<S, R, E = never, A = never>(ma: Reader<R, A>): StateReaderTaskEither<S, R, E, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightState`




#### Signature

```typescript
export declare const rightState: <S, R, E = never, A = never>(ma: State<S, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `rightTask`




#### Signature

```typescript
export declare function rightTask<S, R, E = never, A = never>(ma: Task<A>): StateReaderTaskEither<S, R, E, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Conversions


### `fromEither`




#### Signature

```typescript
export declare const fromEither: <E, A, S, R = unknown>(fa: Either<E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIO`




#### Signature

```typescript
export declare const fromIO: <A, S, R = unknown, E = never>(fa: IO<A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOEither`




#### Signature

```typescript
export declare const fromIOEither: <E, A, S, R = unknown>(fa: IOEither<E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOption`




#### Signature

```typescript
export declare const fromOption: <E>(
  onNone: LazyArg<E>,
) => <A, S, R = unknown>(fa: Option<A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReader`




#### Signature

```typescript
export declare const fromReader: <R, A, S, E = never>(fa: Reader<R, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderEither`




#### Signature

```typescript
export declare const fromReaderEither: <R, E, A, S>(fa: ReaderEither<R, E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromState`




#### Signature

```typescript
export declare const fromState: <S, A, R = unknown, E = never>(fa: State<S, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTask`




#### Signature

```typescript
export declare const fromTask: <A, S, R = unknown, E = never>(fa: Task<A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskEither`




#### Signature

```typescript
export declare const fromTaskEither: <E, A, S, R = unknown>(fa: TaskEither<E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `apSW`

Less strict version of [`apS`](#aps).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apSW: <A, N extends string, S, R2, E2, B>(
  name: Exclude<N, keyof A>,
  fb: StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(
  fa: StateReaderTaskEither<S, R1, E1, A>,
) => StateReaderTaskEither<
  S,
  R1 & R2,
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




#### Signature

```typescript
export declare const alt: <S, R, E, A>(
  that: LazyArg<StateReaderTaskEither<S, R, E, A>>,
) => (fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `altW`

Less strict version of [`alt`](#alt).


The `W` suffix (short for **W**idening) means that the environment, the error and the return types will be merged.




#### Signature

```typescript
export declare const altW: <S, R2, E2, B>(
  that: () => StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1, A>(fa: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E2, B | A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapLeft`

Map a function over the third type argument of a bifunctor.




#### Signature

```typescript
export declare const mapLeft: <E, G>(
  f: (e: E) => G,
) => <S, R, A>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, G, A>
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
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <S, R, B extends A>(mb: StateReaderTaskEither<S, R, E, B>) => StateReaderTaskEither<S, R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
}
```

#### Details

* Added in 1.0.0


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
  ): <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <S, R, E1, B extends A>(mb: StateReaderTaskEither<S, R, E1, B>) => StateReaderTaskEither<S, R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Instance methods


### `chainRec`




#### Signature

```typescript
export declare const chainRec: ChainRec4<URI>['chainRec']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2022-present Jacob Alford

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <S, R, E, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R, E, B>,
) => (ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainEitherK`

Alias of `flatMapEither`.




#### Signature

```typescript
export declare const chainEitherK: <E, A, B>(
  f: (a: A) => E.Either<E, B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainEitherKW`

Alias of `flatMapEither`.


Less strict version of [`chainEitherK`](#chaineitherk).


The `W` suffix (short for **W**idening) means that the error types will be merged.


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainEitherKW: <E2, A, B>(
  f: (a: A) => Either<E2, B>,
) => <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
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
export declare const chainFirst: <S, R, E, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R, E, B>,
) => (ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstEitherK`

Alias of `tapEither`.




#### Signature

```typescript
export declare const chainFirstEitherK: <A, E, B>(
  f: (a: A) => E.Either<E, B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstEitherKW`

Alias of `tapEither`.


Less strict version of [`chainFirstEitherK`](#chainfirsteitherk).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => Either<E2, B>,
) => <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstIOK`

Alias of `tapIO`.




#### Signature

```typescript
export declare const chainFirstIOK: <A, B>(
  f: (a: A) => IO<B>,
) => <S, R, E>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderK`

Alias of `tapReader`.




#### Signature

```typescript
export declare const chainFirstReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <S, E>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstReaderKW`

Alias of `tapReader`.


Less strict version of [`chainFirstReaderK`](#chainFirstReaderK).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => Reader<R1, B>,
) => <S, R2, E>(ma: StateReaderTaskEither<S, R2, E, A>) => StateReaderTaskEither<S, R1 & R2, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirstTaskK`

Alias of `tapTask`.




#### Signature

```typescript
export declare const chainFirstTaskK: <A, B>(
  f: (a: A) => Task<B>,
) => <S, R, E>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
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
export declare const chainFirstW: <S, R2, E2, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(ma: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOEitherK`

Alias of `flatMapIOEither`.




#### Signature

```typescript
export declare const chainIOEitherK: <E, A, B>(
  f: (a: A) => IOEither<E, B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOEitherKW`

Alias of `flatMapIOEither`.


Less strict version of [`chainIOEitherK`](#chainioeitherk).




#### Signature

```typescript
export declare const chainIOEitherKW: <E2, A, B>(
  f: (a: A) => IOEither<E2, B>,
) => <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainIOK`

Alias of `flatMapIO`.




#### Signature

```typescript
export declare const chainIOK: <A, B>(
  f: (a: A) => IO<B>,
) => <S, R, E>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
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
) => <A, B>(
  f: (a: A) => Option<B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainOptionKW`

Use `flatMapOption`.


Less strict version of [`chainOptionK`](#chainoptionk).


The `W` suffix (short for **W**idening) means that the error types will be merged.




#### Signature

```typescript
export declare const chainOptionKW: <E2>(
  onNone: LazyArg<E2>,
) => <A, B>(
  f: (a: A) => Option<B>,
) => <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderK`

Alias of `flatMapReader`.




#### Signature

```typescript
export declare const chainReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <S, E>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderKW`

Alias of `flatMapReader`.


Less strict version of [`chainReaderK`](#chainReaderK).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const chainReaderKW: <A, R1, B>(
  f: (a: A) => Reader<R1, B>,
) => <S, R2, E>(ma: StateReaderTaskEither<S, R2, E, A>) => StateReaderTaskEither<S, R1 & R2, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderTaskEitherK`

Alias of `flatMapReaderTaskEither`.




#### Signature

```typescript
export declare const chainReaderTaskEitherK: <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => <S>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainReaderTaskEitherKW`

Alias of `flatMapReaderTaskEither`.


Less strict version of [`chainReaderTaskEitherK`](#chainreadertaskeitherk).




#### Signature

```typescript
export declare const chainReaderTaskEitherKW: <R, E2, A, B>(
  f: (a: A) => RTE.ReaderTaskEither<R, E2, B>,
) => <S, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E2 | E1, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainStateK`

Alias of `flatMapState`.




#### Signature

```typescript
export declare const chainStateK: <A, S, B>(
  f: (a: A) => State<S, B>,
) => <R, E>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskEitherK`

Alias of `flatMapTaskEither`.




#### Signature

```typescript
export declare const chainTaskEitherK: <E, A, B>(
  f: (a: A) => TaskEither<E, B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskEitherKW`

Alias of `flatMapTaskEither`.


Less strict version of [`chainTaskEitherK`](#chaintaskeitherk).




#### Signature

```typescript
export declare const chainTaskEitherKW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainTaskK`

Alias of `flatMapTask`.




#### Signature

```typescript
export declare const chainTaskK: <A, B>(
  f: (a: A) => Task<B>,
) => <S, R, E>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
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
export declare const chainW: <S, R2, E2, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(ma: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromEitherK`




#### Signature

```typescript
export declare const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => E.Either<E, B>,
) => <S, R = unknown>(...a: A) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOEitherK`




#### Signature

```typescript
export declare const fromIOEitherK: <E, A extends readonly unknown[], B>(
  f: (...a: A) => IOEither<E, B>,
) => <S, R = unknown>(...a: A) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromIOK`




#### Signature

```typescript
export declare const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <S, R = unknown, E = never>(...a: A) => StateReaderTaskEither<S, R, E, B>
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
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Option<B>,
) => <S, R = unknown>(...a: A) => StateReaderTaskEither<S, R, E, B>
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
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <S, R = unknown>(a: A) => StateReaderTaskEither<S, R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <S, R = unknown, B extends A = A>(b: B) => StateReaderTaskEither<S, R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <S, R = unknown>(a: A) => StateReaderTaskEither<S, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderK`




#### Signature

```typescript
export declare const fromReaderK: <A extends ReadonlyArray<unknown>, R, B>(
  f: (...a: A) => Reader<R, B>,
) => <S, E = never>(...a: A) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromReaderTaskEitherK`




#### Signature

```typescript
export declare const fromReaderTaskEitherK: <R, E, A extends readonly unknown[], B>(
  f: (...a: A) => RTE.ReaderTaskEither<R, E, B>,
) => <S>(...a: A) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromStateK`




#### Signature

```typescript
export declare const fromStateK: <A extends ReadonlyArray<unknown>, S, B>(
  f: (...a: A) => State<S, B>,
) => <R = unknown, E = never>(...a: A) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromTaskEitherK`




#### Signature

```typescript
export declare const fromTaskEitherK: <E, A extends readonly unknown[], B>(
  f: (...a: A) => TaskEither<E, B>,
) => <S, R = unknown>(...a: A) => StateReaderTaskEither<S, R, E, B>
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
  f: (...a: A) => Task<B>,
) => <S, R = unknown, E = never>(...a: A) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `as`

Maps the `Right` value of this `StateReaderTaskEither` to the specified constant value.




#### Signature

```typescript
export declare const as: {
  <A>(a: A): <S, R, E, _>(self: StateReaderTaskEither<S, R, E, _>) => StateReaderTaskEither<S, R, E, A>
  <S, R, E, _, A>(self: StateReaderTaskEither<S, R, E, _>, a: A): StateReaderTaskEither<S, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `asUnit`

Maps the `Right` value of this `StateReaderTaskEither` to the void constant value.




#### Signature

```typescript
export declare const asUnit: <S, R, E, _>(
  self: StateReaderTaskEither<S, R, E, _>,
) => StateReaderTaskEither<S, R, E, void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bimap`

Map a pair of functions over the two last type arguments of the bifunctor.




#### Signature

```typescript
export declare const bimap: <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B,
) => <S, R>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, G, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flap`




#### Signature

```typescript
export declare const flap: <A>(
  a: A,
) => <S, R, E, B>(fab: StateReaderTaskEither<S, R, E, (a: A) => B>) => StateReaderTaskEither<S, R, E, B>
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
export declare const map: <A, B>(
  f: (a: A) => B,
) => <S, R, E>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `StateReaderTaskEither`




#### Signature

```typescript
export interface StateReaderTaskEither<S, R, E, A> {
  (s: S): ReaderTaskEither<R, E, [A, S]>
}
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
  <A, S, R2, E2, B>(
    f: (a: A) => StateReaderTaskEither<S, R2, E2, B>,
  ): <R1, E1>(ma: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, B>
  <S, R1, E1, A, R2, E2, B>(
    ma: StateReaderTaskEither<S, R1, E1, A>,
    f: (a: A) => StateReaderTaskEither<S, R2, E2, B>,
  ): StateReaderTaskEither<S, R1 & R2, E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapEither`




#### Signature

```typescript
export declare const flatMapEither: {
  <A, E2, B>(
    f: (a: A) => Either<E2, B>,
  ): <S, R, E1>(self: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
  <S, R, E1, A, E2, B>(
    self: StateReaderTaskEither<S, R, E1, A>,
    f: (a: A) => Either<E2, B>,
  ): StateReaderTaskEither<S, R, E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapIO`




#### Signature

```typescript
export declare const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): <S, R, E>(self: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
  <S, R, E, A, B>(self: StateReaderTaskEither<S, R, E, A>, f: (a: A) => IO<B>): StateReaderTaskEither<S, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapIOEither`




#### Signature

```typescript
export declare const flatMapIOEither: {
  <A, E2, B>(
    f: (a: A) => IOEither<E2, B>,
  ): <S, R, E1>(self: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
  <S, R, E1, A, E2, B>(
    self: StateReaderTaskEither<S, R, E1, A>,
    f: (a: A) => IOEither<E2, B>,
  ): StateReaderTaskEither<S, R, E1 | E2, B>
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
  <A, E2, B>(
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): <S, R, E1>(self: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
  <S, R, E1, A, E2, B>(
    self: StateReaderTaskEither<S, R, E1, A>,
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): StateReaderTaskEither<S, R, E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapReader`




#### Signature

```typescript
export declare const flatMapReader: {
  <A, R2, B>(
    f: (a: A) => Reader<R2, B>,
  ): <S, R1, E>(self: StateReaderTaskEither<S, R1, E, A>) => StateReaderTaskEither<S, R1 & R2, E, B>
  <S, R1, E, A, R2, B>(
    self: StateReaderTaskEither<S, R1, E, A>,
    f: (a: A) => Reader<R2, B>,
  ): StateReaderTaskEither<S, R1 & R2, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapReaderTaskEither`




#### Signature

```typescript
export declare const flatMapReaderTaskEither: {
  <A, R2, E2, B>(
    f: (a: A) => ReaderTaskEither<R2, E2, B>,
  ): <S, R1, E1>(self: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, B>
  <S, R1, E1, A, R2, E2, B>(
    self: StateReaderTaskEither<S, R1, E1, A>,
    f: (a: A) => ReaderTaskEither<R2, E2, B>,
  ): StateReaderTaskEither<S, R1 & R2, E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapState`




#### Signature

```typescript
export declare const flatMapState: {
  <S, A, B>(
    f: (a: A) => State<S, B>,
  ): <R, E>(self: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
  <S, R, E, A, B>(self: StateReaderTaskEither<S, R, E, A>, f: (a: A) => State<S, B>): StateReaderTaskEither<S, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapTask`




#### Signature

```typescript
export declare const flatMapTask: {
  <A, B>(f: (a: A) => Task<B>): <S, R, E>(self: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
  <S, R, E, A, B>(self: StateReaderTaskEither<S, R, E, A>, f: (a: A) => Task<B>): StateReaderTaskEither<S, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatMapTaskEither`




#### Signature

```typescript
export declare const flatMapTaskEither: {
  <A, E2, B>(
    f: (a: A) => TaskEither<E2, B>,
  ): <S, R, E1>(self: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
  <S, R, E1, A, E2, B>(
    self: StateReaderTaskEither<S, R, E1, A>,
    f: (a: A) => TaskEither<E2, B>,
  ): StateReaderTaskEither<S, R, E1 | E2, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`




#### Signature

```typescript
export declare const flatten: <S, R, E, A>(
  mma: StateReaderTaskEither<S, R, E, StateReaderTaskEither<S, R, E, A>>,
) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flattenW`

Less strict version of [`flatten`](#flatten).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const flattenW: <S, R1, E1, R2, E2, A>(
  mma: StateReaderTaskEither<S, R1, E1, StateReaderTaskEither<S, R2, E2, A>>,
) => StateReaderTaskEither<S, R1 & R2, E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequenceArray`

Equivalent to `ReadonlyArray#sequence(Applicative)`.




#### Signature

```typescript
export declare const sequenceArray: <S, R, E, A>(
  arr: ReadonlyArray<StateReaderTaskEither<S, R, E, A>>,
) => StateReaderTaskEither<S, R, E, ReadonlyArray<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverseArray`

Equivalent to `ReadonlyArray#traverse(Applicative)`.




#### Signature

```typescript
export declare const traverseArray: <S, R, E, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R, E, B>,
) => (as: readonly A[]) => StateReaderTaskEither<S, R, E, readonly B[]>
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
export declare const traverseArrayWithIndex: <S, R, E, A, B>(
  f: (index: number, a: A) => StateReaderTaskEither<S, R, E, B>,
) => (as: ReadonlyArray<A>) => StateReaderTaskEither<S, R, E, ReadonlyArray<B>>
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
export declare const traverseReadonlyArrayWithIndex: <A, S, R, E, B>(
  f: (index: number, a: A) => StateReaderTaskEither<S, R, E, B>,
) => (as: readonly A[]) => StateReaderTaskEither<S, R, E, readonly B[]>
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
export declare const traverseReadonlyNonEmptyArrayWithIndex: <A, S, R, E, B>(
  f: (index: number, a: A) => StateReaderTaskEither<S, R, E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => StateReaderTaskEither<S, R, E, ReadonlyNonEmptyArray<B>>
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
export declare const URI = 'StateReaderTaskEither'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ap`




#### Signature

```typescript
export declare const ap: <S, R, E, A>(
  fa: StateReaderTaskEither<S, R, E, A>,
) => <B>(fab: StateReaderTaskEither<S, R, E, (a: A) => B>) => StateReaderTaskEither<S, R, E, B>
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
export declare const apFirst: <S, R, E, B>(
  second: StateReaderTaskEither<S, R, E, B>,
) => <A>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirstW`

Less strict version of [`apFirst`](#apfirst).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apFirstW: <S, R2, E2, A, B>(
  second: StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(first: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, S, R, E, B>(
  name: Exclude<N, keyof A>,
  fb: StateReaderTaskEither<S, R, E, B>,
) => (
  fa: StateReaderTaskEither<S, R, E, A>,
) => StateReaderTaskEither<S, R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
export declare const apSecond: <S, R, E, B>(
  second: StateReaderTaskEither<S, R, E, B>,
) => <A>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecondW`

Less strict version of [`apSecond`](#apsecond).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apSecondW: <S, R2, E2, A, B>(
  second: StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(first: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apW`

Less strict version of [`ap`](#ap).


The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const apW: <S, R2, E2, A>(
  fa: StateReaderTaskEither<S, R2, E2, A>,
) => <R1, E1, B>(fab: StateReaderTaskEither<S, R1, E1, (a: A) => B>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bind`




#### Signature

```typescript
export declare const bind: <N extends string, A, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => StateReaderTaskEither<S, R, E, B>,
) => (
  ma: StateReaderTaskEither<S, R, E, A>,
) => StateReaderTaskEither<S, R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
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
) => <S, R, E, A>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, { readonly [K in N]: A }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindW`

The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.




#### Signature

```typescript
export declare const bindW: <N extends string, A, S, R2, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(
  fa: StateReaderTaskEither<S, R1, E1, A>,
) => StateReaderTaskEither<
  S,
  R1 & R2,
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


### `do`




#### Signature

```typescript
export declare const do_: <MA extends StateReaderTaskEitherIterable<any, any, any, any>, A>(
  yieldFunction: (
    unwrap: <S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEitherIterable<S, R, E, A>,
  ) => Generator<MA, A>,
) => StateReaderTaskEither<
  _.UnionToIntersection<MA extends StateReaderTaskEitherIterable<infer S, any, any, any> ? S : never>,
  _.UnionToIntersection<MA extends StateReaderTaskEitherIterable<any, infer R, any, any> ? R : never>,
  MA extends StateReaderTaskEitherIterable<any, any, infer E, any> ? E : never,
  A
>
```




---


### ~~`evalState`~~

Use [`evaluate`](#evaluate) instead




#### Signature

```typescript
export declare const evalState: <S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `evaluate`

Run a computation in the `StateReaderTaskEither` monad, discarding the final state




#### Signature

```typescript
export declare const evaluate: <S>(
  s: S,
) => <R, E, A>(ma: StateReaderTaskEither<S, R, E, A>) => ReaderTaskEither<R, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`execState`~~

Use [`execute`](#execute) instead




#### Signature

```typescript
export declare const execState: <S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S) => ReaderTaskEither<R, E, S>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `execute`

Run a computation in the `StateReaderTaskEither` monad discarding the result




#### Signature

```typescript
export declare const execute: <S>(s: S) => <R, E, A>(ma: StateReaderTaskEither<S, R, E, A>) => ReaderTaskEither<R, E, S>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `let`




#### Signature

```typescript
export declare const let_: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => <S, R, E>(
  fa: StateReaderTaskEither<S, R, E, A>,
) => StateReaderTaskEither<S, R, E, { readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### `local`

Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s `contramap`).




#### Signature

```typescript
export declare const local: <R2, R1>(
  f: (r2: R2) => R1,
) => <S, E, A>(ma: StateReaderTaskEither<S, R1, E, A>) => StateReaderTaskEither<S, R2, E, A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`run`~~




#### Signature

```typescript
export declare function run<S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S, r: R): Promise<Either<E, [A, S]>>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`stateReaderTaskEither`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `SRTE.Functor` instead of `SRTE.stateReaderTaskEither`




#### Signature

```typescript
export declare const stateReaderTaskEither: Monad4<URI> &
  Bifunctor4<URI> &
  Alt4<URI> &
  MonadTask4<URI> &
  MonadThrow4<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`stateReaderTaskEitherSeq`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `SRTE.Functor` instead of `SRTE.stateReaderTaskEitherSeq`




#### Signature

```typescript
export declare const stateReaderTaskEitherSeq: typeof stateReaderTaskEither
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `throwError`




#### Signature

```typescript
export declare const throwError: MonadThrow4<URI>['throwError']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti