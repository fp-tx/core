/**
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import { type Alt3, type Alt3C } from './Alt'
import { type Applicative3, type Applicative3C, getApplicativeMonoid } from './Applicative'
import {
  ap as ap_,
  apFirst as apFirst_,
  type Apply3,
  apS as apS_,
  apSecond as apSecond_,
  getApplySemigroup as getApplySemigroup_,
} from './Apply'
import { type Bifunctor3 } from './Bifunctor'
import * as chainable from './Chain'
import { type ChainRec3 } from './ChainRec'
import * as ChnRec from './ChainRec'
import { compact as compact_, type Compactable3C, separate as separate_ } from './Compactable'
import * as E from './Either'
import { type Either } from './Either'
import * as ET from './EitherT'
import {
  filter as filter_,
  type Filterable3C,
  filterMap as filterMap_,
  partition as partition_,
  partitionMap as partitionMap_,
} from './Filterable'
import {
  chainOptionK as chainOptionK_,
  filterOrElse as filterOrElse_,
  type FromEither3,
  fromEitherK as fromEitherK_,
  fromOption as fromOption_,
  fromOptionK as fromOptionK_,
  fromPredicate as fromPredicate_,
  tapEither as tapEither_,
} from './FromEither'
import {
  ask as ask_,
  asks as asks_,
  type FromReader3,
  fromReaderK as fromReaderK_,
  tapReader as tapReader_,
} from './FromReader'
import { dual, flow, identity, type LazyArg, pipe, SK } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor3, let as let__ } from './Functor'
import * as _ from './internal'
import { type Monad3, type Monad3C } from './Monad'
import { type MonadThrow3, type MonadThrow3C } from './MonadThrow'
import { type Monoid } from './Monoid'
import { type Option } from './Option'
import { type Pointed3 } from './Pointed'
import { type Predicate } from './Predicate'
import * as R from './Reader'
import { type Reader } from './Reader'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface ReaderEither<R, E, A> extends Reader<R, Either<E, A>> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const left: <R, E = never, A = never>(e: E) => ReaderEither<R, E, A> = /*#__PURE__*/ ET.left(R.Pointed)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const right: <R, E = never, A = never>(a: A) => ReaderEither<R, E, A> = /*#__PURE__*/ ET.right(R.Pointed)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const rightReader: <R, E = never, A = never>(ma: Reader<R, A>) => ReaderEither<R, E, A> =
  /*#__PURE__*/ ET.rightF(R.Functor)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const leftReader: <R, E = never, A = never>(me: Reader<R, E>) => ReaderEither<R, E, A> = /*#__PURE__*/ ET.leftF(
  R.Functor,
)

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromEither: <E, A, R = unknown>(fa: Either<E, A>) => ReaderEither<R, E, A> = R.of

/**
 * @meta
 * {@since 1.0.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromReader: <R, A, E = never>(fa: Reader<R, A>) => ReaderEither<R, E, A> = rightReader

/**
 * @meta
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const match: <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
) => <R>(ma: ReaderEither<R, E, A>) => Reader<R, B> = /*#__PURE__*/ ET.match(R.Functor)

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchW: <E, B, A, C>(
  onLeft: (e: E) => B,
  onRight: (a: A) => C,
) => <R>(ma: Reader<R, Either<E, A>>) => Reader<R, B | C> = match as any

/**
 * The `E` suffix (short for **E**ffect) means that the handlers return an effect (`Reader`).
 *
 * @meta
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchE: <R, E, A, B>(
  onLeft: (e: E) => Reader<R, B>,
  onRight: (a: A) => Reader<R, B>,
) => (ma: ReaderEither<R, E, A>) => Reader<R, B> = /*#__PURE__*/ ET.matchE(R.Monad)

/**
 * Alias of [`matchE`](#matche).
 *
 * @meta
 * {@since 1.0.0}
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
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchEW: <E, R2, B, A, R3, C>(
  onLeft: (e: E) => Reader<R2, B>,
  onRight: (a: A) => Reader<R3, C>,
) => <R1>(ma: ReaderEither<R1, E, A>) => Reader<R1 & R2 & R3, B | C> = matchE as any

/**
 * Alias of [`matchEW`](#matchew).
 *
 * @meta
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const foldW = matchEW

/**
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getOrElse: <E, R, A>(onLeft: (e: E) => Reader<R, A>) => (ma: ReaderEither<R, E, A>) => Reader<R, A> =
  /*#__PURE__*/ ET.getOrElse(R.Monad)

/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * The `W` suffix (short for **W**idening) means that the handler return type will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getOrElseW: <R2, E, B>(
  onLeft: (e: E) => Reader<R2, B>,
) => <R1, A>(ma: ReaderEither<R1, E, A>) => Reader<R1 & R2, A | B> = getOrElse as any

/**
 * @meta
 * {@since 1.0.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const toUnion: <R, E, A>(fa: ReaderEither<R, E, A>) => Reader<R, E | A> = /*#__PURE__*/ ET.toUnion(R.Functor)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const local: <R2, R1>(f: (r2: R2) => R1) => <E, A>(ma: ReaderEither<R1, E, A>) => ReaderEither<R2, E, A> =
  R.local

/**
 * Less strict version of [`asksReaderEither`](#asksreadereither).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const asksReaderEitherW: <R1, R2, E, A>(f: (r1: R1) => ReaderEither<R2, E, A>) => ReaderEither<R1 & R2, E, A> =
  R.asksReaderW

/**
 * Effectfully accesses the environment.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const asksReaderEither: <R, E, A>(f: (r: R) => ReaderEither<R, E, A>) => ReaderEither<R, E, A> =
  asksReaderEitherW

/**
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElse: <E1, R, E2, A>(
  onLeft: (e: E1) => ReaderEither<R, E2, A>,
) => (ma: ReaderEither<R, E1, A>) => ReaderEither<R, E2, A> = /*#__PURE__*/ ET.orElse(R.Monad)

/**
 * Less strict version of [`orElse`](#orelse).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the return types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElseW: <E1, R1, E2, B>(
  onLeft: (e: E1) => ReaderEither<R1, E2, B>,
) => <R2, A>(ma: ReaderEither<R2, E1, A>) => ReaderEither<R1 & R2, E2, A | B> = orElse as any

/**
 * Returns an effect that effectfully "peeks" at the failure of this effect.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tapError: {
  <E1, R2, E2, _>(
    onLeft: (e: E1) => ReaderEither<R2, E2, _>,
  ): <R1, A>(self: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, A>
  <R1, E1, A, R2, E2, _>(
    self: ReaderEither<R1, E1, A>,
    onLeft: (e: E1) => ReaderEither<R2, E2, _>,
  ): ReaderEither<R1 & R2, E1 | E2, A>
} = /*#__PURE__*/ dual(2, ET.tapError(R.Monad))

/**
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orLeft: <E1, R, E2>(
  onLeft: (e: E1) => Reader<R, E2>,
) => <A>(fa: ReaderEither<R, E1, A>) => ReaderEither<R, E2, A> = /*#__PURE__*/ ET.orLeft(R.Monad)

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const swap: <R, E, A>(ma: ReaderEither<R, E, A>) => ReaderEither<R, A, E> = /*#__PURE__*/ ET.swap(R.Functor)

/* istanbul ignore next */
const _map: Monad3<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _ap: Monad3<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
/* istanbul ignore next */
const _alt: Alt3<URI>['alt'] = (fa, that) => pipe(fa, alt(that))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <R, E>(fa: ReaderEither<R, E, A>) => ReaderEither<R, E, B> =
  /*#__PURE__*/ ET.map(R.Functor)

/**
 * Returns a `ReaderEither` whose failure and success channels have been mapped by the specified pair of functions, `f`
 * and `g`.
 *
 * @example
 *
 * ```typescript
 * import * as ReaderEither from '@fp-tx/core/ReaderEither'
 * import * as Either from '@fp-tx/core/Either'
 *
 * const f = (s: string) => new Error(s)
 * const g = (n: number) => n * 2
 *
 * assert.deepStrictEqual(ReaderEither.mapBoth(ReaderEither.right(1), f, g)({}), Either.right(2))
 * assert.deepStrictEqual(ReaderEither.mapBoth(ReaderEither.left('err'), f, g)({}), Either.left(new Error('err')))
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapBoth: {
  <E, G, A, B>(f: (e: E) => G, g: (a: A) => B): <R>(self: ReaderEither<R, E, A>) => ReaderEither<R, G, B>
  <R, E, A, G, B>(self: ReaderEither<R, E, A>, f: (e: E) => G, g: (a: A) => B): ReaderEither<R, G, B>
} = /*#__PURE__*/ dual(3, ET.mapBoth(R.Functor))

/**
 * Alias of `mapBoth`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bimap: <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B,
) => <R>(fa: ReaderEither<R, E, A>) => ReaderEither<R, G, B> = mapBoth

/**
 * Returns a `ReaderEither` with its error channel mapped using the specified function.
 *
 * @example
 *
 * ```typescript
 * import * as ReaderEither from '@fp-tx/core/ReaderEither'
 * import * as Either from '@fp-tx/core/Either'
 *
 * const f = (s: string) => new Error(s)
 *
 * assert.deepStrictEqual(ReaderEither.mapError(ReaderEither.right(1), f)({}), Either.right(1))
 * assert.deepStrictEqual(ReaderEither.mapError(ReaderEither.left('err'), f)({}), Either.left(new Error('err')))
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapError: {
  <R, E, G>(f: (e: E) => G): <A>(self: ReaderEither<R, E, A>) => ReaderEither<R, G, A>
  <R, E, A, G>(self: ReaderEither<R, E, A>, f: (e: E) => G): ReaderEither<R, G, A>
} = /*#__PURE__*/ dual(2, ET.mapError(R.Functor))

/**
 * Alias of `mapError`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <R, A>(fa: ReaderEither<R, E, A>) => ReaderEither<R, G, A> = mapError

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ap: <R, E, A>(
  fa: ReaderEither<R, E, A>,
) => <B>(fab: ReaderEither<R, E, (a: A) => B>) => ReaderEither<R, E, B> = /*#__PURE__*/ ET.ap(R.Apply)

/**
 * Less strict version of [`ap`](#ap).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apW: <R2, E2, A>(
  fa: ReaderEither<R2, E2, A>,
) => <R1, E1, B>(fab: ReaderEither<R1, E1, (a: A) => B>) => ReaderEither<R1 & R2, E1 | E2, B> = ap as any

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const of: <R = unknown, E = never, A = never>(a: A) => ReaderEither<R, E, A> = right

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMap: {
  <A, R2, E2, B>(
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): <R1, E1>(ma: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, B>
  <R1, E1, A, R2, E2, B>(
    ma: ReaderEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): ReaderEither<R1 & R2, E1 | E2, B>
} = /*#__PURE__*/ dual(2, ET.flatMap(R.Monad))

/**
 * Less strict version of [`flatten`](#flatten).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flattenW: <R1, R2, E1, E2, A>(
  mma: ReaderEither<R1, E1, ReaderEither<R2, E2, A>>,
) => ReaderEither<R1 & R2, E1 | E2, A> = /*#__PURE__*/ flatMap(identity)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatten: <R, E, A>(mma: ReaderEither<R, E, ReaderEither<R, E, A>>) => ReaderEither<R, E, A> = flattenW

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const alt: <R, E, A>(that: () => ReaderEither<R, E, A>) => (fa: ReaderEither<R, E, A>) => ReaderEither<R, E, A> =
  /*#__PURE__*/ ET.alt(R.Monad)

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the environment, the error and the return types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const altW: <R2, E2, B>(
  that: () => ReaderEither<R2, E2, B>,
) => <R1, E1, A>(fa: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E2, A | B> = alt as any

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const throwError: MonadThrow3<URI>['throwError'] = left

/**
 * @meta
 * {@since 1.0.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const URI = 'ReaderEither'

/**
 * @meta
 * {@since 1.0.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind3<R, E, A> {
    readonly [URI]: ReaderEither<R, E, A>
  }
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getCompactable = <E>(M: Monoid<E>): Compactable3C<URI, E> => {
  const C = E.getCompactable(M)
  return {
    URI,
    _E: undefined as any,
    compact: compact_(R.Functor, C),
    separate: separate_(R.Functor, C, E.Functor),
  }
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getFilterable<E>(M: Monoid<E>): Filterable3C<URI, E> {
  const F = E.getFilterable(M)
  const C = getCompactable(M)

  const filter = filter_(R.Functor, F)
  const filterMap = filterMap_(R.Functor, F)
  const partition = partition_(R.Functor, F)
  const partitionMap = partitionMap_(R.Functor, F)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    compact: C.compact,
    separate: C.separate,
    filter: <R, A>(fa: ReaderEither<R, E, A>, predicate: Predicate<A>) => pipe(fa, filter(predicate)),
    filterMap: (fa, f) => pipe(fa, filterMap(f)),
    partition: <R, A>(fa: ReaderEither<R, E, A>, predicate: Predicate<A>) => pipe(fa, partition(predicate)),
    partitionMap: (fa, f) => pipe(fa, partitionMap(f)),
  }
}

/**
 * The default [`Applicative`](#applicative) instance returns the first error, if you want to get all errors you need to
 * provide a way to concatenate them via a `Semigroup`.
 *
 * See [`getApplicativeValidation`](./Either#getapplicativevalidation).
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getApplicativeReaderValidation<E>(S: Semigroup<E>): Applicative3C<URI, E> {
  const ap = ap_(R.Apply, E.getApplicativeValidation(S))
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
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getAltReaderValidation<E>(S: Semigroup<E>): Alt3C<URI, E> {
  const alt = ET.altValidation(R.Monad, S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    alt: (fa, that) => pipe(fa, alt(that)),
  }
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Functor: Functor3<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the `Right` value of this `ReaderEither` to the specified constant value.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const as: {
  <A>(a: A): <R, E, _>(self: ReaderEither<R, E, _>) => ReaderEither<R, E, A>
  <R, E, _, A>(self: ReaderEither<R, E, _>, a: A): ReaderEither<R, E, A>
} = dual(2, as_(Functor))

/**
 * Maps the `Right` value of this `ReaderEither` to the void constant value.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const asUnit: <R, E, _>(self: ReaderEither<R, E, _>) => ReaderEither<R, E, void> = asUnit_(Functor)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Pointed: Pointed3<URI> = {
  URI,
  of,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Apply: Apply3<URI> = {
  URI,
  map: _map,
  ap: _ap,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apFirst = /*#__PURE__*/ apFirst_(Apply)

/**
 * Less strict version of [`apFirst`](#apfirst)
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apFirstW: <R2, E2, B>(
  second: ReaderEither<R2, E2, B>,
) => <R1, E1, A>(first: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, A> = apFirst as any

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apSecond = /*#__PURE__*/ apSecond_(Apply)

/**
 * Less strict version of [`apSecond`](#apsecond)
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apSecondW: <R2, E2, B>(
  second: ReaderEither<R2, E2, B>,
) => <R1, E1, A>(first: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, B> = apSecond as any

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Applicative: Applicative3<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Chain: chainable.Chain3<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instance methods}
 * {@license MIT – Copyright (c) 2022-present Jacob Alford}
 * @public
 */
export const chainRec: ChainRec3<URI>['chainRec'] =
  <R2, E, A, B>(a: A, f: (a: A) => ReaderEither<R2, E, E.Either<A, B>>) =>
  <R1>(r: R1 & R2) => {
    let current = f(a)(r)
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (E.isRight(current) && E.isLeft(current.right)) {
        current = f(current.right.left)(r)
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
 * ChainRec for `ReaderEither`
 *
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2022-present Jacob Alford}
 * @public
 */
export const ChainRec: ChainRec3<URI> = {
  ...Chain,
  chainRec,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Monad: Monad3<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const FromEither: FromEither3<URI> = {
  URI,
  fromEither,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const FromReader: FromReader3<URI> = {
  URI,
  fromReader,
}

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Combinators}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tap: {
  <R1, E1, A, R2, E2, _>(
    self: ReaderEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): ReaderEither<R1 & R2, E1 | E2, A>
  <A, R2, E2, _>(
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): <R1, E1>(self: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E2 | E1, A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 * import * as RE from '@fp-tx/core/ReaderEither'
 *
 * const checkString = (value: string) =>
 *   pipe(
 *     RE.ask<number>(),
 *     RE.tapEither(minLength => (value.length > minLength ? E.right('ok') : E.left('error'))),
 *   )
 *
 * assert.deepStrictEqual(checkString('')(1), E.left('error'))
 * assert.deepStrictEqual(checkString('fp-ts')(2), E.right(2))
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Combinators}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tapEither: {
  <A, E2, _>(f: (a: A) => Either<E2, _>): <R1, E1>(self: ReaderEither<R1, E1, A>) => ReaderEither<R1, E1 | E2, A>
  <R1, E1, A, E2, _>(self: ReaderEither<R1, E1, A>, f: (a: A) => Either<E2, _>): ReaderEither<R1, E1 | E2, A>
} = /*#__PURE__*/ dual(2, tapEither_(FromEither, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Combinators}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tapReader: {
  <R2, A, E, _>(f: (a: A) => Reader<R2, _>): <R1>(self: ReaderEither<R1, E, A>) => ReaderEither<R1 & R2, E, A>
  <R1, R2, E, A, _>(self: ReaderEither<R1, E, A>, f: (a: A) => Reader<R2, _>): ReaderEither<R1 & R2, E, A>
} = /*#__PURE__*/ dual(2, tapReader_(FromReader, Chain))

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Bifunctor: Bifunctor3<URI> = {
  URI,
  bimap: mapBoth,
  mapLeft: mapError,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Alt: Alt3<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * Reads the current context.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ask: <R, E = never>() => ReaderEither<R, E, R> = /*#__PURE__*/ ask_(FromReader)

/**
 * Projects a value from the global context in a `ReaderEither`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const asks: <R, A, E = never>(f: (r: R) => A) => ReaderEither<R, E, A> = /*#__PURE__*/ asks_(FromReader)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromReaderK: <A extends ReadonlyArray<unknown>, R, B>(
  f: (...a: A) => Reader<R, B>,
) => <E = never>(...a: A) => ReaderEither<R, E, B> = /*#__PURE__*/ fromReaderK_(FromReader)

/**
 * Alias of `tapReader`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <E>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A> = tapReader

/**
 * Alias of `tapReader`.
 *
 * Less strict version of [`chainReaderK`](#chainreaderk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => Reader<R1, B>,
) => <R2, E>(ma: ReaderEither<R2, E, A>) => ReaderEither<R1 & R2, E, A> = tapReader

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const MonadThrow: MonadThrow3<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
  throwError,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromOption: <E>(onNone: LazyArg<E>) => <A, R = unknown>(fa: Option<A>) => ReaderEither<R, E, A> =
  /*#__PURE__*/ fromOption_(FromEither)

/**
 * Use `liftOption`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Option<B>,
) => <R = unknown>(...a: A) => ReaderEither<R, E, B> = /*#__PURE__*/ fromOptionK_(FromEither)

/**
 * Use `flatMapOption`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainOptionK: <E>(
  onNone: LazyArg<E>,
) => <A, B>(f: (a: A) => Option<B>) => <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B> =
  /*#__PURE__*/ chainOptionK_(FromEither, Chain)

/**
 * Use `flatMapOption`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainOptionKW: <E2>(
  onNone: LazyArg<E2>,
) => <A, B>(f: (a: A) => Option<B>) => <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, B> =
  /*#__PURE__*/ chainOptionK as any

/** @internal @packageDocumentation */
interface ReaderEitherTypeLambda extends _.TypeLambda {
  readonly type: ReaderEither<this['In'], this['Out1'], this['Target']>
}

/** @internal */
const _FromEither: _.FromEither<ReaderEitherTypeLambda> = {
  fromEither: FromEither.fromEither,
}

/** @internal */
const _FromReader: _.FromReader<ReaderEitherTypeLambda> = {
  fromReader: FromReader.fromReader,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const liftNullable: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => B | null | undefined,
  onNullable: (...a: A) => E,
) => <R>(...a: A) => ReaderEither<R, E, NonNullable<B>> = /*#__PURE__*/ _.liftNullable(_FromEither)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const liftOption: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => Option<B>,
  onNone: (...a: A) => E,
) => <R>(...a: A) => ReaderEither<R, E, B> = /*#__PURE__*/ _.liftOption(_FromEither)

/** @internal */
const _FlatMap: _.FlatMap<ReaderEitherTypeLambda> = {
  flatMap,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapNullable: {
  <A, B, E2>(
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): <R, E1>(self: ReaderEither<R, E1, A>) => ReaderEither<R, E2 | E1, NonNullable<B>>
  <R, E1, A, B, E2>(
    self: ReaderEither<R, E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): ReaderEither<R, E1 | E2, NonNullable<B>>
} = /*#__PURE__*/ _.flatMapNullable(_FromEither, _FlatMap)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapOption: {
  <A, B, E2>(
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): <R, E1>(self: ReaderEither<R, E1, A>) => ReaderEither<R, E2 | E1, B>
  <R, E1, A, B, E2>(
    self: ReaderEither<R, E1, A>,
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): ReaderEither<R, E1 | E2, B>
} = /*#__PURE__*/ _.flatMapOption(_FromEither, _FlatMap)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapEither: {
  <A, E2, B>(f: (a: A) => E.Either<E2, B>): <R, E1>(self: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, B>
  <R, E1, A, E2, B>(self: ReaderEither<R, E1, A>, f: (a: A) => E.Either<E2, B>): ReaderEither<R, E1 | E2, B>
} = /*#__PURE__*/ _.flatMapEither(_FromEither, _FlatMap)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapReader: {
  <A, R2, B>(f: (a: A) => Reader<R2, B>): <R1, E>(self: ReaderEither<R1, E, A>) => ReaderEither<R1 & R2, E, B>
  <R1, E, A, R2, B>(self: ReaderEither<R1, E, A>, f: (a: A) => Reader<R2, B>): ReaderEither<R1 & R2, E, B>
} = /*#__PURE__*/ _.flatMapReader(_FromReader, _FlatMap)

/**
 * Alias of `flatMapEither`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainEitherK: <E, A, B>(
  f: (a: A) => E.Either<E, B>,
) => <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B> = flatMapEither

/**
 * Alias of `flatMapEither`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainEitherKW: <E2, A, B>(
  f: (a: A) => Either<E2, B>,
) => <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, B> = flatMapEither

/**
 * Alias of `tapEither`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstEitherK: <A, E, B>(
  f: (a: A) => E.Either<E, B>,
) => <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A> = tapEither

/**
 * Alias of `tapEither`.
 *
 * Less strict version of [`chainFirstEitherK`](#chainfirsteitherk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => Either<E2, B>,
) => <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, A> = tapEither

/**
 * Alias of `flatMapReader`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <E>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B> = flatMapReader

/**
 * Alias of `flatMapReader`.
 *
 * Less strict version of [`chainReaderK`](#chainreaderk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainReaderKW: <A, R2, B>(
  f: (a: A) => Reader<R2, B>,
) => <R1, E>(ma: ReaderEither<R1, E, A>) => ReaderEither<R1 & R2, E, B> = flatMapReader

/**
 * @meta
 * {@since 1.0.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromPredicate: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <R = unknown>(a: A) => ReaderEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R = unknown, B extends A = A>(b: B) => ReaderEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R = unknown>(a: A) => ReaderEither<R, E, A>
} = /*#__PURE__*/ fromPredicate_(FromEither)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const filterOrElse: {
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <R, B extends A>(mb: ReaderEither<R, E, B>) => ReaderEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A>
} = /*#__PURE__*/ filterOrElse_(FromEither, Chain)

/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const filterOrElseW: {
  <A, B extends A, E2>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E2,
  ): <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <R, E1, B extends A>(mb: ReaderEither<R, E1, B>) => ReaderEither<R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <R, E1>(ma: ReaderEither<R, E1, A>) => ReaderEither<R, E1 | E2, A>
} = filterOrElse

/**
 * @meta
 * {@since 1.0.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => E.Either<E, B>,
) => <R = unknown>(...a: A) => ReaderEither<R, E, B> = /*#__PURE__*/ fromEitherK_(FromEither)

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Do: ReaderEither<unknown, never, {}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Do notation}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  let_ as let,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bind = /*#__PURE__*/ chainable.bind(Chain)

/**
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bindW: <N extends string, A, R2, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(
  fa: ReaderEither<R1, E1, A>,
) => ReaderEither<R1 & R2, E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> = bind as any

/**
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apS = /*#__PURE__*/ apS_(Apply)

/**
 * Less strict version of [`apS`](#aps).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apSW: <A, N extends string, R2, E2, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderEither<R2, E2, B>,
) => <R1, E1>(
  fa: ReaderEither<R1, E1, A>,
) => ReaderEither<R1 & R2, E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> = apS as any

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApT: ReaderEither<unknown, never, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

interface ReaderEitherIterable<R, E, A> {
  readonly value: ReaderEither<R, E, A>
  [Symbol.iterator]: () => Generator<ReaderEitherIterable<R, E, A>, A, any>
}

const do_: <MA extends ReaderEitherIterable<any, any, any>, A>(
  yieldFunction: (unwrap: <R, E, A>(ma: ReaderEither<R, E, A>) => ReaderEitherIterable<R, E, A>) => Generator<MA, A>,
) => ReaderEither<
  _.UnionToIntersection<MA extends ReaderEitherIterable<infer R, any, any> ? R : never>,
  MA extends ReaderEitherIterable<any, infer E, any> ? E : never,
  A
> = ChnRec.do(Pointed, ChainRec) as any

export {
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Do notation}
   * @public
   */
  do_ as do,
}

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndex = <A, R, E, B>(
  f: (index: number, a: A) => ReaderEither<R, E, B>,
): ((as: ReadonlyNonEmptyArray<A>) => ReaderEither<R, E, ReadonlyNonEmptyArray<B>>) =>
  flow(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(E.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyArrayWithIndex = <A, R, E, B>(
  f: (index: number, a: A) => ReaderEither<R, E, B>,
): ((as: ReadonlyArray<A>) => ReaderEither<R, E, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseArrayWithIndex: <R, E, A, B>(
  f: (index: number, a: A) => ReaderEither<R, E, B>,
) => (as: ReadonlyArray<A>) => ReaderEither<R, E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseArray = <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
): ((as: ReadonlyArray<A>) => ReaderEither<R, E, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sequenceArray: <R, E, A>(
  arr: ReadonlyArray<ReaderEither<R, E, A>>,
) => ReaderEither<R, E, ReadonlyArray<A>> = /*#__PURE__*/ traverseArray(identity)

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chain: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderEither<R, E, A>) => ReaderEither<R, E, B> = flatMap

/**
 * Alias of `flatMap`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainW: <R2, E2, A, B>(
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, B> = flatMap

/**
 * Alias of `tap`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirst: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A> = tap

/**
 * Alias of `tap`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstW: <R2, E2, A, B>(
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, A> = tap

/**
 * Alias of `tapError`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElseFirst: <E, R, B>(
  onLeft: (e: E) => ReaderEither<R, E, B>,
) => <A>(ma: ReaderEither<R, E, A>) => ReaderEither<R, E, A> = tapError

/**
 * Alias of `tapError`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const orElseFirstW: <E1, R2, E2, B>(
  onLeft: (e: E1) => ReaderEither<R2, E2, B>,
) => <R1, A>(ma: ReaderEither<R1, E1, A>) => ReaderEither<R1 & R2, E1 | E2, A> = tapError

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RE.Functor` instead of `RE.readerEither` (where `R` is from `import R from 'fp-ts/ReaderEither'`)
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const readerEither: Monad3<URI> & Bifunctor3<URI> & Alt3<URI> & MonadThrow3<URI> = {
  URI,
  bimap: mapBoth,
  mapLeft: mapError,
  map: _map,
  of,
  ap: _ap,
  chain: flatMap,
  alt: _alt,
  throwError: left,
}

/**
 * Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getApplySemigroup: <R, E, A>(S: Semigroup<A>) => Semigroup<ReaderEither<R, E, A>> =
  /*#__PURE__*/ getApplySemigroup_(Apply)

/**
 * Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getApplyMonoid: <R, E, A>(M: Monoid<A>) => Monoid<ReaderEither<R, E, A>> =
  /*#__PURE__*/ getApplicativeMonoid(Applicative)

/**
 * Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getSemigroup = <R, E, A>(S: Semigroup<A>): Semigroup<ReaderEither<R, E, A>> =>
  getApplySemigroup_(R.Apply)(E.getSemigroup(S))

/**
 * Use [`getApplicativeReaderValidation`](#getapplicativereadervalidation) and
 * [`getAltReaderValidation`](#getaltreadervalidation) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getReaderValidation<E>(
  SE: Semigroup<E>,
): Monad3C<URI, E> & Bifunctor3<URI> & Alt3C<URI, E> & MonadThrow3C<URI, E> {
  const applicativeReaderValidation = getApplicativeReaderValidation(SE)
  const altReaderValidation = getAltReaderValidation(SE)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: applicativeReaderValidation.ap,
    of,
    chain: flatMap,
    bimap: mapBoth,
    mapLeft: mapError,
    alt: altReaderValidation.alt,
    throwError,
  }
}
