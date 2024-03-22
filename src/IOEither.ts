/**
 * `IOEither<E, A>` represents a synchronous computation that either yields a value of type `A` or fails yielding an
 * error of type `E`.
 *
 * If you want to represent a synchronous computation that never fails, please see `IO`. If you want to represent a
 * synchronous computation that may yield nothing, please see `IOOption`.
 *
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import { type Alt2, type Alt2C } from './Alt'
import { type Applicative2, type Applicative2C, getApplicativeMonoid } from './Applicative'
import {
  ap as ap_,
  apFirst as apFirst_,
  type Apply2,
  apS as apS_,
  apSecond as apSecond_,
  getApplySemigroup as getApplySemigroup_,
} from './Apply'
import { type Bifunctor2 } from './Bifunctor'
import * as chainable from './Chain'
import { type ChainRec2 } from './ChainRec'
import * as ChnRec from './ChainRec'
import { compact as compact_, type Compactable2C, separate as separate_ } from './Compactable'
import * as E from './Either'
import { type Either } from './Either'
import * as ET from './EitherT'
import {
  filter as filter_,
  type Filterable2C,
  filterMap as filterMap_,
  partition as partition_,
  partitionMap as partitionMap_,
} from './Filterable'
import {
  chainOptionK as chainOptionK_,
  filterOrElse as filterOrElse_,
  type FromEither2,
  fromEitherK as fromEitherK_,
  fromOption as fromOption_,
  fromOptionK as fromOptionK_,
  fromPredicate as fromPredicate_,
  tapEither as tapEither_,
} from './FromEither'
import { type FromIO2, fromIOK as fromIOK_, tapIO as tapIO_ } from './FromIO'
import { dual, flow, identity, type LazyArg, pipe, SK } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor2, let as let__ } from './Functor'
import * as _ from './internal'
import * as I from './IO'
import { type IO } from './IO'
import { type Monad2, type Monad2C } from './Monad'
import { type MonadIO2, type MonadIO2C } from './MonadIO'
import { type MonadThrow2, type MonadThrow2C } from './MonadThrow'
import { type Monoid } from './Monoid'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Option } from './Option'
import { type Pointed2 } from './Pointed'
import { type Predicate } from './Predicate'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface IOEither<E, A> extends IO<Either<E, A>> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const left: <E = never, A = never>(l: E) => IOEither<E, A> = /*#__PURE__*/ ET.left(I.Pointed)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const right: <E = never, A = never>(a: A) => IOEither<E, A> = /*#__PURE__*/ ET.right(I.Pointed)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const rightIO: <E = never, A = never>(ma: IO<A>) => IOEither<E, A> = /*#__PURE__*/ ET.rightF(I.Functor)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const leftIO: <E = never, A = never>(me: IO<E>) => IOEither<E, A> = /*#__PURE__*/ ET.leftF(I.Functor)

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromEither: <E, A>(fa: Either<E, A>) => IOEither<E, A> = I.of

/**
 * @meta
 * {@since 0.1.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromIO: <A, E = never>(fa: IO<A>) => IOEither<E, A> = rightIO

/**
 * @meta
 * {@since 0.1.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const match: <E, B, A>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: IOEither<E, A>) => IO<B> =
  /*#__PURE__*/ ET.match(I.Functor)

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchW: <E, B, A, C>(onLeft: (e: E) => B, onRight: (a: A) => C) => (ma: IOEither<E, A>) => IO<B | C> =
  match as any

/**
 * The `E` suffix (short for **E**ffect) means that the handlers return an effect (`IO`).
 *
 * @meta
 * {@since 0.1.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchE: <E, A, B>(onLeft: (e: E) => IO<B>, onRight: (a: A) => IO<B>) => (ma: IOEither<E, A>) => IO<B> =
  /*#__PURE__*/ ET.matchE(I.Monad)

/**
 * Alias of [`matchE`](#matche).
 *
 * @meta
 * {@since 0.1.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fold = matchE

/**
 * Less strict version of [`matchE`](#matche).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchEW: <E, B, A, C>(
  onLeft: (e: E) => IO<B>,
  onRight: (a: A) => IO<C>,
) => (ma: IOEither<E, A>) => IO<B | C> = matchE as any

/**
 * Alias of [`matchEW`](#matchew).
 *
 * @meta
 * {@since 0.1.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const foldW = matchEW

/**
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getOrElse: <E, A>(onLeft: (e: E) => IO<A>) => (ma: IOEither<E, A>) => IO<A> = /*#__PURE__*/ ET.getOrElse(
  I.Monad,
)

/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * The `W` suffix (short for **W**idening) means that the handler return type will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getOrElseW: <E, B>(onLeft: (e: E) => IO<B>) => <A>(ma: IOEither<E, A>) => IO<A | B> = getOrElse as any

/**
 * Constructs a new `IOEither` from a function that performs a side effect and might throw
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @meta
 * {@since 0.1.0}
 * {@category Interop}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tryCatch =
  <E, A>(f: LazyArg<A>, onThrow: (reason: unknown) => E): IOEither<E, A> =>
  () =>
    E.tryCatch(f, onThrow)

/**
 * Converts a function that may throw to one returning a `IOEither`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Interop}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tryCatchK =
  <A extends ReadonlyArray<unknown>, B, E>(
    f: (...a: A) => B,
    onThrow: (reason: unknown) => E,
  ): ((...a: A) => IOEither<E, B>) =>
  (...a) =>
    tryCatch(() => f(...a), onThrow)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const toUnion: <E, A>(fa: IOEither<E, A>) => IO<E | A> = /*#__PURE__*/ ET.toUnion(I.Functor)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElse: <E1, A, E2>(onLeft: (e: E1) => IOEither<E2, A>) => (ma: IOEither<E1, A>) => IOEither<E2, A> =
  /*#__PURE__*/ ET.orElse(I.Monad)

/**
 * Less strict version of [`orElse`](#orelse).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElseW: <E1, E2, B>(
  onLeft: (e: E1) => IOEither<E2, B>,
) => <A>(ma: IOEither<E1, A>) => IOEither<E2, A | B> = orElse as any

/**
 * Returns an effect that effectfully "peeks" at the failure of this effect.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tapError: {
  <E1, E2, _>(onLeft: (e: E1) => IOEither<E2, _>): <A>(self: IOEither<E1, A>) => IOEither<E1 | E2, A>
  <E1, A, E2, _>(self: IOEither<E1, A>, onLeft: (e: E1) => IOEither<E2, _>): IOEither<E1 | E2, A>
} = /*#__PURE__*/ dual(2, ET.tapError(I.Monad))

/**
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElseFirstIOK: <E, B>(onLeft: (e: E) => IO<B>) => <A>(ma: IOEither<E, A>) => IOEither<E, A> = onLeft =>
  tapError(fromIOK(onLeft))

/**
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orLeft: <E1, E2>(onLeft: (e: E1) => IO<E2>) => <A>(fa: IOEither<E1, A>) => IOEither<E2, A> =
  /*#__PURE__*/ ET.orLeft(I.Monad)

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const swap: <E, A>(ma: IOEither<E, A>) => IOEither<A, E> = /*#__PURE__*/ ET.swap(I.Functor)

/* istanbul ignore next */
const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _ap: Apply2<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
const _apSeq: Apply2<URI>['ap'] = (fab, fa) => flatMap(fab, f => pipe(fa, map(f)))
/* istanbul ignore next */
const _alt: Alt2<URI>['alt'] = (fa, that) => pipe(fa, alt(that))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: IOEither<E, A>) => IOEither<E, B> = /*#__PURE__*/ ET.map(I.Functor)

/**
 * Returns a `IOEither` whose failure and success channels have been mapped by the specified pair of functions, `f` and
 * `g`.
 *
 * @example
 *
 * ```typescript
 * import * as IOEither from '@fp-tx/core/IOEither'
 * import * as Either from '@fp-tx/core/Either'
 *
 * const f = (s: string) => new Error(s)
 * const g = (n: number) => n * 2
 *
 * assert.deepStrictEqual(IOEither.mapBoth(IOEither.right(1), f, g)(), Either.right(2))
 * assert.deepStrictEqual(IOEither.mapBoth(IOEither.left('err'), f, g)(), Either.left(new Error('err')))
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapBoth: {
  <E, G, A, B>(f: (e: E) => G, g: (a: A) => B): (self: IOEither<E, A>) => IOEither<G, B>
  <E, A, G, B>(self: IOEither<E, A>, f: (e: E) => G, g: (a: A) => B): IOEither<G, B>
} = /*#__PURE__*/ dual(3, ET.mapBoth(I.Functor))

/**
 * Alias of `mapBoth`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: IOEither<E, A>) => IOEither<G, B> = mapBoth

/**
 * Returns a `IOEither` with its error channel mapped using the specified function.
 *
 * @example
 *
 * ```typescript
 * import * as IOEither from '@fp-tx/core/IOEither'
 * import * as Either from '@fp-tx/core/Either'
 *
 * const f = (s: string) => new Error(s)
 *
 * assert.deepStrictEqual(IOEither.mapError(IOEither.right(1), f)(), Either.right(1))
 * assert.deepStrictEqual(IOEither.mapError(IOEither.left('err'), f)(), Either.left(new Error('err')))
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapError: {
  <E, G>(f: (e: E) => G): <A>(self: IOEither<E, A>) => IOEither<G, A>
  <E, A, G>(self: IOEither<E, A>, f: (e: E) => G): IOEither<G, A>
} = /*#__PURE__*/ dual(2, ET.mapError(I.Functor))

/**
 * Alias of `mapError`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: IOEither<E, A>) => IOEither<G, A> = mapError

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ap: <E, A>(fa: IOEither<E, A>) => <B>(fab: IOEither<E, (a: A) => B>) => IOEither<E, B> =
  /*#__PURE__*/ ET.ap(I.Apply)

/**
 * Less strict version of [`ap`](#ap).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apW: <E2, A>(fa: IOEither<E2, A>) => <E1, B>(fab: IOEither<E1, (a: A) => B>) => IOEither<E1 | E2, B> =
  ap as any

/**
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const of: <E = never, A = never>(a: A) => IOEither<E, A> = right

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMap: {
  <A, E2, B>(f: (a: A) => IOEither<E2, B>): <E1>(ma: IOEither<E1, A>) => IOEither<E1 | E2, B>
  <E1, A, E2, B>(ma: IOEither<E1, A>, f: (a: A) => IOEither<E2, B>): IOEither<E1 | E2, B>
} = /*#__PURE__*/ dual(2, ET.flatMap(I.Monad))

/**
 * Less strict version of [`flatten`](#flatten).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flattenW: <E1, E2, A>(mma: IOEither<E1, IOEither<E2, A>>) => IOEither<E1 | E2, A> =
  /*#__PURE__*/ flatMap(identity)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatten: <E, A>(mma: IOEither<E, IOEither<E, A>>) => IOEither<E, A> = flattenW

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const alt: <E, A>(that: LazyArg<IOEither<E, A>>) => (fa: IOEither<E, A>) => IOEither<E, A> =
  /*#__PURE__*/ ET.alt(I.Monad)

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the error and the return types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const altW: <E2, B>(that: LazyArg<IOEither<E2, B>>) => <E1, A>(fa: IOEither<E1, A>) => IOEither<E2, A | B> =
  alt as any

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const throwError: MonadThrow2<URI>['throwError'] = left

/**
 * @meta
 * {@since 0.1.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const URI = 'IOEither'

/**
 * @meta
 * {@since 0.1.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: IOEither<E, A>
  }
}

/**
 * The default [`ApplicativePar`](#applicativepar) instance returns the first error, if you want to get all errors you
 * need to provide a way to concatenate them via a `Semigroup`.
 *
 * See [`getApplicativeValidation`](./Either#getapplicativevalidation).
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getApplicativeIOValidation<E>(S: Semigroup<E>): Applicative2C<URI, E> {
  const ap = ap_(I.Apply, E.getApplicativeValidation(S))
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: (fab, fa) => pipe(fab, ap(fa)),
    of,
  }
}

/**
 * The default [`Alt`](#alt) instance returns the last error, if you want to get all errors you need to provide a way to
 * concatenate them via a `Semigroup`.
 *
 * See [`getAltValidation`](./Either#getaltvalidation).
 *
 * @meta
 * {@since 0.1.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getAltIOValidation<E>(S: Semigroup<E>): Alt2C<URI, E> {
  const alt = ET.altValidation(I.Monad, S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    alt: (fa, that) => pipe(fa, alt(that)),
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getCompactable = <E>(M: Monoid<E>): Compactable2C<URI, E> => {
  const C = E.getCompactable(M)
  return {
    URI,
    _E: undefined as any,
    compact: compact_(I.Functor, C),
    separate: separate_(I.Functor, C, E.Functor),
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getFilterable<E>(M: Monoid<E>): Filterable2C<URI, E> {
  const F = E.getFilterable(M)
  const C = getCompactable(M)

  const filter = filter_(I.Functor, F)
  const filterMap = filterMap_(I.Functor, F)
  const partition = partition_(I.Functor, F)
  const partitionMap = partitionMap_(I.Functor, F)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    compact: C.compact,
    separate: C.separate,
    filter: <A>(fa: IOEither<E, A>, predicate: Predicate<A>) => pipe(fa, filter(predicate)),
    filterMap: (fa, f) => pipe(fa, filterMap(f)),
    partition: <A>(fa: IOEither<E, A>, predicate: Predicate<A>) => pipe(fa, partition(predicate)),
    partitionMap: (fa, f) => pipe(fa, partitionMap(f)),
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the `Right` value of this `IOEither` to the specified constant value.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const as: {
  <A>(a: A): <E, _>(self: IOEither<E, _>) => IOEither<E, A>
  <E, _, A>(self: IOEither<E, _>, a: A): IOEither<E, A>
} = dual(2, as_(Functor))

/**
 * Maps the `Right` value of this `IOEither` to the void constant value.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const asUnit: <E, _>(self: IOEither<E, _>) => IOEither<E, void> = asUnit_(Functor)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Pointed: Pointed2<URI> = {
  URI,
  of,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  bimap: mapBoth,
  mapLeft: mapError,
}

/**
 * Runs computations in parallel.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApplyPar: Apply2<URI> = {
  URI,
  map: _map,
  ap: _ap,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apFirst = /*#__PURE__*/ apFirst_(ApplyPar)

/**
 * Less strict version of [`apFirst`](#apfirst).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apFirstW: <E2, B>(second: IOEither<E2, B>) => <E1, A>(first: IOEither<E1, A>) => IOEither<E1 | E2, A> =
  apFirst as any

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apSecond = /*#__PURE__*/ apSecond_(ApplyPar)

/**
 * Less strict version of [`apSecond`](#apsecond).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apSecondW: <E2, B>(second: IOEither<E2, B>) => <E1, A>(first: IOEither<E1, A>) => IOEither<E1 | E2, B> =
  apSecond as any

/**
 * Runs computations in parallel.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApplicativePar: Applicative2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

/**
 * Runs computations sequentially.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApplicativeSeq: Applicative2<URI> = {
  URI,
  map: _map,
  ap: _apSeq,
  of,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Chain: chainable.Chain2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instance Methods}
 * {@license MIT – Copyright (c) 2022-present Jacob Alford}
 * @public
 */
export const chainRec: ChainRec2<URI>['chainRec'] =
  <E, A, B>(a: A, f: (a: A) => IOEither<E, E.Either<A, B>>) =>
  () => {
    let current = f(a)()
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (E.isRight(current) && E.isLeft(current.right)) {
        current = f(current.right.left)()
        continue
      }
      if (E.isLeft(current)) {
        return current as E.Either<E, B>
      }
      if (E.isRight(current.right)) {
        return E.right(current.right.right) as E.Either<E, B>
      }
    }
  }

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2022-present Jacob Alford}
 * @public
 */
export const ChainRec: ChainRec2<URI> = {
  ...Chain,
  chainRec,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Monad: Monad2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const FromEither: FromEither2<URI> = {
  URI,
  fromEither,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const FromIO: FromIO2<URI> = {
  URI,
  fromIO,
}

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Combinators}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tap: {
  <E1, A, E2, _>(self: IOEither<E1, A>, f: (a: A) => IOEither<E2, _>): IOEither<E1 | E2, A>
  <A, E2, _>(f: (a: A) => IOEither<E2, _>): <E1>(self: IOEither<E1, A>) => IOEither<E2 | E1, A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as IOE from '@fp-tx/core/IOEither'
 * import * as E from '@fp-tx/core/Either'
 *
 * const compute = (value: string) =>
 *   pipe(
 *     IOE.of(value),
 *     IOE.tapEither(() => (value.length > 0 ? E.right('ok') : E.left('error'))),
 *   )
 *
 * assert.deepStrictEqual(compute('')(), E.left('error'))
 * assert.deepStrictEqual(compute('fp-ts')(), E.right('fp-ts'))
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Combinators}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tapEither: {
  <A, E2, _>(f: (a: A) => Either<E2, _>): <E1>(self: IOEither<E1, A>) => IOEither<E2 | E1, A>
  <E1, A, E2, _>(self: IOEither<E1, A>, f: (a: A) => Either<E2, _>): IOEither<E1 | E2, A>
} = /*#__PURE__*/ dual(2, tapEither_(FromEither, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as IOE from '@fp-tx/core/IOEither'
 * import * as E from '@fp-tx/core/Either'
 * import * as Console from '@fp-tx/core/Console'
 *
 * const sayHello = (value: string) => Console.log(`Hello, ${value}`)
 *
 * // Will produce `Hello, fp-ts` to the stdout
 * const effectA = IOE.tapIO(IOE.of('fp-ts'), sayHello)
 *
 * // No output to the stdout
 * const effectB = pipe(IOE.left<string>('error'), IOE.tapIO(sayHello))
 *
 * assert.deepStrictEqual(effectA(), E.right('fp-ts'))
 * assert.deepStrictEqual(effectB(), E.left('error'))
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Combinators}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): <E>(self: IOEither<E, A>) => IOEither<E, A>
  <E, A, _>(self: IOEither<E, A>, f: (a: A) => IO<_>): IOEither<E, A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Alt: Alt2<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const MonadIO: MonadIO2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
  fromIO: fromIO,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const MonadThrow: MonadThrow2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
  throwError,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => I.IO<B>,
) => <E = never>(...a: A) => IOEither<E, B> = /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `tapIO`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstIOK: <A, B>(f: (a: A) => I.IO<B>) => <E>(first: IOEither<E, A>) => IOEither<E, A> = tapIO

/**
 * @meta
 * {@since 0.1.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => IOEither<E, A> =
  /*#__PURE__*/ fromOption_(FromEither)

/**
 * Use `liftOption`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => IOEither<E, B> =
  /*#__PURE__*/ fromOptionK_(FromEither)

/**
 * Use `flatMapOption`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainOptionK: <E>(
  onNone: LazyArg<E>,
) => <A, B>(f: (a: A) => Option<B>) => (ma: IOEither<E, A>) => IOEither<E, B> = /*#__PURE__*/ chainOptionK_(
  FromEither,
  Chain,
)

/**
 * Use `flatMapOption`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainOptionKW: <E2>(
  onNone: LazyArg<E2>,
) => <A, B>(f: (a: A) => Option<B>) => <E1>(ma: IOEither<E1, A>) => IOEither<E1 | E2, B> =
  /*#__PURE__*/ chainOptionK as any

/** @internal @packageDocumentation */
interface IOEitherTypeLambda extends _.TypeLambda {
  readonly type: IOEither<this['Out1'], this['Target']>
}

/** @internal */
const _FromEither: _.FromEither<IOEitherTypeLambda> = {
  fromEither: FromEither.fromEither,
}

/** @internal */
const _FromIO: _.FromIO<IOEitherTypeLambda> = {
  fromIO,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const liftNullable: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => B | null | undefined,
  onNullable: (...a: A) => E,
) => (...a: A) => IOEither<E, NonNullable<B>> = /*#__PURE__*/ _.liftNullable(_FromEither)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const liftOption: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => Option<B>,
  onNone: (...a: A) => E,
) => (...a: A) => IOEither<E, B> = /*#__PURE__*/ _.liftOption(_FromEither)

/** @internal */
const _FlatMap: _.FlatMap<IOEitherTypeLambda> = {
  flatMap,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapNullable: {
  <A, B, E2>(
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): <E1>(self: IOEither<E1, A>) => IOEither<E2 | E1, NonNullable<B>>
  <E1, A, B, E2>(
    self: IOEither<E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): IOEither<E1 | E2, NonNullable<B>>
} = /*#__PURE__*/ _.flatMapNullable(_FromEither, _FlatMap)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapOption: {
  <A, B, E2>(f: (a: A) => Option<B>, onNone: (a: A) => E2): <E1>(self: IOEither<E1, A>) => IOEither<E2 | E1, B>
  <E1, A, B, E2>(self: IOEither<E1, A>, f: (a: A) => Option<B>, onNone: (a: A) => E2): IOEither<E1 | E2, B>
} = /*#__PURE__*/ _.flatMapOption(_FromEither, _FlatMap)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapEither: {
  <A, E2, B>(f: (a: A) => E.Either<E2, B>): <E1>(self: IOEither<E1, A>) => IOEither<E1 | E2, B>
  <E1, A, E2, B>(self: IOEither<E1, A>, f: (a: A) => E.Either<E2, B>): IOEither<E1 | E2, B>
} = /*#__PURE__*/ _.flatMapEither(_FromEither, _FlatMap)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): <E>(self: IOEither<E, A>) => IOEither<E, B>
  <E, A, B>(self: IOEither<E, A>, f: (a: A) => IO<B>): IOEither<E, B>
} = /*#__PURE__*/ _.flatMapIO(_FromIO, _FlatMap)

/**
 * Alias of `flatMapIO`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainIOK: <A, B>(f: (a: A) => I.IO<B>) => <E>(first: IOEither<E, A>) => IOEither<E, B> = flatMapIO

/**
 * Alias of `flatMapEither`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainEitherK: <E, A, B>(f: (a: A) => E.Either<E, B>) => (ma: IOEither<E, A>) => IOEither<E, B> =
  flatMapEither

/**
 * Alias of `flatMapEither`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainEitherKW: <E2, A, B>(
  f: (a: A) => Either<E2, B>,
) => <E1>(ma: IOEither<E1, A>) => IOEither<E1 | E2, B> = flatMapEither

/**
 * Alias of `tapEither`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstEitherK: <A, E, B>(f: (a: A) => E.Either<E, B>) => (ma: IOEither<E, A>) => IOEither<E, A> =
  tapEither

/**
 * Alias of `tapEither`.
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => E.Either<E2, B>,
) => <E1>(ma: IOEither<E1, A>) => IOEither<E1 | E2, A> = tapEither

/**
 * @meta
 * {@since 0.1.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromPredicate: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => IOEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => IOEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => IOEither<E, A>
} = /*#__PURE__*/ fromPredicate_(FromEither)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const filterOrElse: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: IOEither<E, A>) => IOEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(mb: IOEither<E, B>) => IOEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: IOEither<E, A>) => IOEither<E, A>
} = /*#__PURE__*/ filterOrElse_(FromEither, Chain)

/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const filterOrElseW: {
  <A, B extends A, E2>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E2,
  ): <E1>(ma: IOEither<E1, A>) => IOEither<E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <E1, B extends A>(mb: IOEither<E1, B>) => IOEither<E1 | E2, B>
  <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1>(ma: IOEither<E1, A>) => IOEither<E1 | E2, A>
} = filterOrElse

/**
 * @meta
 * {@since 0.1.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => E.Either<E, B>,
) => (...a: A) => IOEither<E, B> = /*#__PURE__*/ fromEitherK_(FromEither)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Make sure that a resource is cleaned up in the event of an exception (_). The release action is called regardless of
 * whether the body action throws (_) or returns.
 *
 * (*) i.e. returns a `Left`
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bracket = <E, A, B>(
  acquire: IOEither<E, A>,
  use: (a: A) => IOEither<E, B>,
  release: (a: A, e: Either<E, B>) => IOEither<E, void>,
): IOEither<E, B> => bracketW(acquire, use, release)

/**
 * Less strict version of [`bracket`](#bracket).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bracketW: <E1, A, E2, B, E3>(
  acquire: IOEither<E1, A>,
  use: (a: A) => IOEither<E2, B>,
  release: (a: A, e: E.Either<E2, B>) => IOEither<E3, void>,
) => IOEither<E1 | E2 | E3, B> = (acquire, use, release) =>
  flatMap(acquire, a => I.flatMap(use(a), e => flatMap(release(a, e), () => I.of(e))))

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Do: IOEither<never, {}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @meta
   * {@since 0.1.0}
   * {@category Do notation}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  let_ as let,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bind = /*#__PURE__*/ chainable.bind(Chain)

/**
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bindW: <N extends string, A, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => IOEither<E2, B>,
) => <E1>(fa: IOEither<E1, A>) => IOEither<E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  bind as any

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apS = /*#__PURE__*/ apS_(ApplyPar)

/**
 * Less strict version of [`apS`](#aps).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apSW: <A, N extends string, E2, B>(
  name: Exclude<N, keyof A>,
  fb: IOEither<E2, B>,
) => <E1>(fa: IOEither<E1, A>) => IOEither<E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  apS as any

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApT: IOEither<never, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

interface IOEitherIterable<E, A> {
  readonly value: IOEither<E, A>
  [Symbol.iterator]: () => Generator<IOEitherIterable<E, A>, A, any>
}

const do_: <MA extends IOEitherIterable<any, any>, A>(
  yieldFunction: (unwrap: <E, A>(ma: IOEither<E, A>) => IOEitherIterable<E, A>) => Generator<MA, A>,
) => IOEither<MA extends IOEitherIterable<infer E, any> ? E : never, A> = ChnRec.do(Pointed, ChainRec)

export {
  /**
   * @meta
   * {@since 0.1.0}
   * {@category Do notation}
   * @public
   */
  do_ as do,
}

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndex: <A, E, B>(
  f: (index: number, a: A) => IOEither<E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => IOEither<E, ReadonlyNonEmptyArray<B>> = f =>
  flow(I.traverseReadonlyNonEmptyArrayWithIndex(f), I.map(E.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyArrayWithIndex = <A, E, B>(
  f: (index: number, a: A) => IOEither<E, B>,
): ((as: ReadonlyArray<A>) => IOEither<E, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndexSeq =
  <A, E, B>(f: (index: number, a: A) => IOEither<E, B>) =>
  (as: ReadonlyNonEmptyArray<A>): IOEither<E, ReadonlyNonEmptyArray<B>> =>
  () => {
    const e = f(0, _.head(as))()
    if (_.isLeft(e)) {
      return e
    }
    const out: NonEmptyArray<B> = [e.right]
    for (let i = 1; i < as.length; i++) {
      const e = f(i, as[i])()
      if (_.isLeft(e)) {
        return e
      }
      out.push(e.right)
    }
    return _.right(out)
  }

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyArrayWithIndexSeq = <A, E, B>(
  f: (index: number, a: A) => IOEither<E, B>,
): ((as: ReadonlyArray<A>) => IOEither<E, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndexSeq(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseArrayWithIndex: <A, E, B>(
  f: (index: number, a: A) => IOEither<E, B>,
) => (as: ReadonlyArray<A>) => IOEither<E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseArray = <A, E, B>(
  f: (a: A) => IOEither<E, B>,
): ((as: ReadonlyArray<A>) => IOEither<E, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sequenceArray: <E, A>(arr: ReadonlyArray<IOEither<E, A>>) => IOEither<E, ReadonlyArray<A>> =
  /*#__PURE__*/ traverseArray(identity)

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseSeqArrayWithIndex: <A, E, B>(
  f: (index: number, a: A) => IOEither<E, B>,
) => (as: ReadonlyArray<A>) => IOEither<E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseSeqArray = <A, E, B>(
  f: (a: A) => IOEither<E, B>,
): ((as: ReadonlyArray<A>) => IOEither<E, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndexSeq((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sequenceSeqArray: <E, A>(arr: ReadonlyArray<IOEither<E, A>>) => IOEither<E, ReadonlyArray<A>> =
  /*#__PURE__*/ traverseSeqArray(identity)

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`ApplicativePar`](#applicativepar) instead
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Applicative: Applicative2<URI> = ApplicativePar

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chain: <E, A, B>(f: (a: A) => IOEither<E, B>) => (ma: IOEither<E, A>) => IOEither<E, B> = flatMap

/**
 * Alias of `flatMap`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainW: <E2, A, B>(f: (a: A) => IOEither<E2, B>) => <E1>(ma: IOEither<E1, A>) => IOEither<E1 | E2, B> =
  flatMap

/**
 * Alias of `tap`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirst: <E, A, B>(f: (a: A) => IOEither<E, B>) => (ma: IOEither<E, A>) => IOEither<E, A> = tap

/**
 * Alias of `tap`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstW: <E2, A, B>(
  f: (a: A) => IOEither<E2, B>,
) => <E1>(ma: IOEither<E1, A>) => IOEither<E1 | E2, A> = tap

/**
 * Alias of `tapError`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElseFirst: <E, B>(onLeft: (e: E) => IOEither<E, B>) => <A>(ma: IOEither<E, A>) => IOEither<E, A> =
  tapError

/**
 * Alias of `tapError`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElseFirstW: <E1, E2, B>(
  onLeft: (e: E1) => IOEither<E2, B>,
) => <A>(ma: IOEither<E1, A>) => IOEither<E1 | E2, A> = tapError

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `IOE.Functor` instead of `IOE.ioEither` (where `IOE` is from `import IOE from 'fp-ts/IOEither'`)
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ioEither: Monad2<URI> & Bifunctor2<URI> & Alt2<URI> & MonadIO2<URI> & MonadThrow2<URI> = {
  URI,
  bimap: mapBoth,
  mapLeft: mapError,
  map: _map,
  of,
  ap: _ap,
  chain: flatMap,
  alt: _alt,
  fromIO,
  throwError,
}

/**
 * Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getApplySemigroup: <E, A>(S: Semigroup<A>) => Semigroup<IOEither<E, A>> =
  /*#__PURE__*/ getApplySemigroup_(ApplyPar)

/**
 * Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getApplyMonoid: <E, A>(M: Monoid<A>) => Monoid<IOEither<E, A>> =
  /*#__PURE__*/ getApplicativeMonoid(ApplicativePar)

/**
 * Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getSemigroup = <E, A>(S: Semigroup<A>): Semigroup<IOEither<E, A>> =>
  getApplySemigroup_(I.Apply)(E.getSemigroup(S))

/**
 * Use [`getApplicativeIOValidation`](#getapplicativeiovalidation) and [`getAltIOValidation`](#getaltiovalidation).
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getIOValidation<E>(
  SE: Semigroup<E>,
): Monad2C<URI, E> & Bifunctor2<URI> & Alt2C<URI, E> & MonadIO2C<URI, E> & MonadThrow2C<URI, E> {
  const applicativeIOValidation = getApplicativeIOValidation(SE)
  const altIOValidation = getAltIOValidation(SE)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: applicativeIOValidation.ap,
    of,
    chain: flatMap,
    bimap: mapBoth,
    mapLeft: mapError,
    alt: altIOValidation.alt,
    fromIO,
    throwError,
  }
}
