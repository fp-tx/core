/**
 * `IOOption<A>` represents a synchronous computation that either yields a value of type `A` or nothing.
 *
 * If you want to represent a synchronous computation that never fails, please see `IO`. If you want to represent a
 * synchronous computation that may fail, please see `IOEither`.
 *
 * @since 2.12.0
 */
import { type Alt1 } from './Alt'
import { type Alternative1 } from './Alternative'
import { type Applicative1 } from './Applicative'
import { apFirst as apFirst_, type Apply1, apS as apS_, apSecond as apSecond_ } from './Apply'
import * as chainable from './Chain'
import { type ChainRec1 } from './ChainRec'
import * as ChnRec from './ChainRec'
import { compact as compact_, type Compactable1, separate as separate_ } from './Compactable'
import { type Either } from './Either'
import {
  filter as filter_,
  type Filterable1,
  filterMap as filterMap_,
  partition as partition_,
  partitionMap as partitionMap_,
} from './Filterable'
import { type FromEither1, fromEitherK as fromEitherK_, tapEither as tapEither_ } from './FromEither'
import { type FromIO1, fromIOK as fromIOK_, tapIO as tapIO_ } from './FromIO'
import { dual, flow, identity, type LazyArg, pipe, SK } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import * as _ from './internal'
import * as I from './IO'
import { type IO } from './IO'
import { type IOEither } from './IOEither'
import { type Monad1 } from './Monad'
import { type MonadIO1 } from './MonadIO'
import { type MonadThrow1 } from './MonadThrow'
import * as O from './Option'
import { type Option } from './Option'
import * as OT from './OptionT'
import { type Pointed1 } from './Pointed'
import { type Predicate } from './Predicate'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Separated } from './Separated'
import { guard as guard_, type Zero1 } from './Zero'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.12.0
 * @category Model
 */
export interface IOOption<A> extends IO<Option<A>> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @since 2.12.0
 * @category Constructors
 */
export const some: <A>(a: A) => IOOption<A> = /*#__PURE__*/ OT.some(I.Pointed)

/**
 * @since 2.12.0
 * @category Lifting
 */
export const fromPredicate: {
  <A, B extends A>(refinement: Refinement<A, B>): (a: A) => IOOption<B>
  <A>(predicate: Predicate<A>): <B extends A>(b: B) => IOOption<B>
  <A>(predicate: Predicate<A>): (a: A) => IOOption<A>
} = /*#__PURE__*/ OT.fromPredicate(I.Pointed)

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @since 2.12.0
 * @category Conversions
 */
export const fromOption: <A>(fa: Option<A>) => IOOption<A> = I.of

/**
 * @since 2.12.0
 * @category Conversions
 */
export const fromEither: <A>(fa: Either<unknown, A>) => IOOption<A> = /*#__PURE__*/ OT.fromEither(I.Pointed)

/**
 * @since 2.12.0
 * @category Conversions
 */
export const fromIO: <A>(fa: IO<A>) => IOOption<A> = /*#__PURE__*/ OT.fromF(I.Functor)

/**
 * @since 2.12.0
 * @category Conversions
 */
export const fromIOEither: <A>(fa: IOEither<unknown, A>) => IOOption<A> = /*#__PURE__*/ I.map(O.fromEither)

/**
 * @since 2.12.0
 * @category Pattern matching
 */
export const match: <B, A>(onNone: () => B, onSome: (a: A) => B) => (ma: IOOption<A>) => IO<B> = /*#__PURE__*/ OT.match(
  I.Functor,
)

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @since 2.12.0
 * @category Pattern matching
 */
export const matchW: <B, A, C>(onNone: () => B, onSome: (a: A) => C) => (ma: IOOption<A>) => IO<B | C> = match as any

/**
 * The `E` suffix (short for **E**ffect) means that the handlers return an effect (`IO`).
 *
 * @since 2.12.0
 * @category Pattern matching
 */
export const matchE: <B, A>(onNone: () => IO<B>, onSome: (a: A) => IO<B>) => (ma: IOOption<A>) => IO<B> =
  /*#__PURE__*/ OT.matchE(I.Chain)

/**
 * Alias of [`matchE`](#matche).
 *
 * @since 2.12.0
 * @category Pattern matching
 */
export const fold = matchE

/**
 * Less strict version of [`matchE`](#matche).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @since 2.12.0
 * @category Pattern matching
 */
export const matchEW: <B, C, A>(onNone: () => IO<B>, onSome: (a: A) => IO<C>) => (ma: IOOption<A>) => IO<B | C> =
  matchE as any

/**
 * @since 2.12.0
 * @category Error handling
 */
export const getOrElse: <A>(onNone: LazyArg<IO<A>>) => (fa: IOOption<A>) => IO<A> = /*#__PURE__*/ OT.getOrElse(I.Monad)

/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * The `W` suffix (short for **W**idening) means that the handler return type will be merged.
 *
 * @since 2.12.0
 * @category Error handling
 */
export const getOrElseW: <B>(onNone: LazyArg<IO<B>>) => <A>(ma: IOOption<A>) => IO<A | B> = getOrElse as any

/**
 * @since 2.12.0
 * @category Conversions
 */
export const toUndefined: <A>(ma: IOOption<A>) => IO<A | undefined> = I.map(O.toUndefined)

/**
 * @since 2.12.0
 * @category Conversions
 */
export const toNullable: <A>(ma: IOOption<A>) => IO<A | null> = I.map(O.toNullable)

/**
 * @since 2.12.0
 * @category Conversions
 */
export const fromNullable: <A>(a: A) => IOOption<NonNullable<A>> = /*#__PURE__*/ OT.fromNullable(I.Pointed)

/**
 * @since 2.12.0
 * @category Lifting
 */
export const fromNullableK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => (...a: A) => IOOption<NonNullable<B>> = /*#__PURE__*/ OT.fromNullableK(I.Pointed)

/**
 * Alias of `flatMapNullable`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainNullableK: <A, B>(
  f: (a: A) => B | null | undefined,
) => (ma: IOOption<A>) => IOOption<NonNullable<B>> = /*#__PURE__*/ OT.chainNullableK(I.Monad)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @since 2.12.0
 * @category Lifting
 */
export const fromOptionK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => IOOption<B> =
  /*#__PURE__*/ OT.fromOptionK(I.Pointed)

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @since 2.12.0
 * @category Mapping
 */
export const map: <A, B>(f: (a: A) => B) => (fa: IOOption<A>) => IOOption<B> = /*#__PURE__*/ OT.map(I.Functor)

/** @since 2.12.0 */
export const ap: <A>(fa: IOOption<A>) => <B>(fab: IOOption<(a: A) => B>) => IOOption<B> = /*#__PURE__*/ OT.ap(I.Apply)

/**
 * @since 2.12.0
 * @category Constructors
 */
export const of: <A>(a: A) => IOOption<A> = some

/**
 * @since 2.14.0
 * @category Sequencing
 */
export const flatMap: {
  <A, B>(f: (a: A) => IOOption<B>): (ma: IOOption<A>) => IOOption<B>
  <A, B>(ma: IOOption<A>, f: (a: A) => IOOption<B>): IOOption<B>
} = /*#__PURE__*/ dual(2, OT.flatMap(I.Monad))

/**
 * @since 2.12.0
 * @category Sequencing
 */
export const flatten: <A>(mma: IOOption<IOOption<A>>) => IOOption<A> = /*#__PURE__*/ flatMap(identity)

/**
 * @since 2.12.0
 * @category Error handling
 */
export const alt: <A>(second: LazyArg<IOOption<A>>) => (first: IOOption<A>) => IOOption<A> = /*#__PURE__*/ OT.alt(
  I.Monad,
)

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be merged.
 *
 * @since 2.12.0
 * @category Error handling
 */
export const altW: <B>(second: LazyArg<IOOption<B>>) => <A>(first: IOOption<A>) => IOOption<A | B> = alt as any

/** @since 2.12.0 */
export const zero: <A>() => IOOption<A> = /*#__PURE__*/ OT.zero(I.Pointed)

/** @since 1.0.0 */
export const throwError: MonadThrow1<URI>['throwError'] = zero

/**
 * @since 2.12.0
 * @category Constructors
 */
export const none: IOOption<never> = /*#__PURE__*/ zero()

/**
 * @since 2.12.0
 * @category Filtering
 */
export const compact: Compactable1<URI>['compact'] = /*#__PURE__*/ compact_(I.Functor, O.Compactable)

/**
 * @since 2.12.0
 * @category Filtering
 */
export const separate: Compactable1<URI>['separate'] = /*#__PURE__*/ separate_(I.Functor, O.Compactable, O.Functor)

/**
 * @since 2.12.0
 * @category Filtering
 */
export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fb: IOOption<A>) => IOOption<B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: IOOption<B>) => IOOption<B>
  <A>(predicate: Predicate<A>): (fa: IOOption<A>) => IOOption<A>
} = /*#__PURE__*/ filter_(I.Functor, O.Filterable)

/**
 * @since 2.12.0
 * @category Filtering
 */
export const filterMap: <A, B>(f: (a: A) => Option<B>) => (fga: IOOption<A>) => IOOption<B> = /*#__PURE__*/ filterMap_(
  I.Functor,
  O.Filterable,
)

/**
 * @since 2.12.0
 * @category Filtering
 */
export const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): (fb: IOOption<A>) => Separated<IOOption<A>, IOOption<B>>
  <A>(predicate: Predicate<A>): <B extends A>(fb: IOOption<B>) => Separated<IOOption<B>, IOOption<B>>
  <A>(predicate: Predicate<A>): (fa: IOOption<A>) => Separated<IOOption<A>, IOOption<A>>
} = /*#__PURE__*/ partition_(I.Functor, O.Filterable)

/**
 * @since 2.12.0
 * @category Filtering
 */
export const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: IOOption<A>) => Separated<IOOption<B>, IOOption<C>> = /*#__PURE__*/ partitionMap_(I.Functor, O.Filterable)

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

const _map: Functor1<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _ap: Apply1<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
/* istanbul ignore next */
const _alt: Alt1<URI>['alt'] = (fa, that) => pipe(fa, alt(that))
/* istanbul ignore next */
const _filter: Filterable1<URI>['filter'] = <A>(fa: IOOption<A>, predicate: Predicate<A>) => pipe(fa, filter(predicate))
/* istanbul ignore next */
const _filterMap: Filterable1<URI>['filterMap'] = (fa, f) => pipe(fa, filterMap(f))
/* istanbul ignore next */
const _partition: Filterable1<URI>['partition'] = <A>(fa: IOOption<A>, predicate: Predicate<A>) =>
  pipe(fa, partition(predicate))
/* istanbul ignore next */
const _partitionMap: Filterable1<URI>['partitionMap'] = (fa, f) => pipe(fa, partitionMap(f))

/**
 * @since 2.12.0
 * @category Type lambdas
 */
export const URI = 'IOOption'

/**
 * @since 2.12.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: IOOption<A>
  }
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const Functor: Functor1<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the `Some` value of this `IOOption` to the specified constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const as: {
  <A>(a: A): <_>(self: IOOption<_>) => IOOption<A>
  <_, A>(self: IOOption<_>, a: A): IOOption<A>
} = dual(2, as_(Functor))

/**
 * Maps the `Some` value of this `IOOption` to the void constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const asUnit: <_>(self: IOOption<_>) => IOOption<void> = asUnit_(Functor)

/**
 * @since 2.12.0
 * @category Mapping
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @since 2.12.0
 * @category Instances
 */
export const Pointed: Pointed1<URI> = {
  URI,
  of,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const Apply: Apply1<URI> = {
  URI,
  map: _map,
  ap: _ap,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @since 2.12.0
 */
export const apFirst = /*#__PURE__*/ apFirst_(Apply)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @since 2.12.0
 */
export const apSecond = /*#__PURE__*/ apSecond_(Apply)

/**
 * @since 2.12.0
 * @category Instances
 */
export const Applicative: Applicative1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const Chain: chainable.Chain1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
}

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChainRec1<URI>['chainRec'] =
  <A, B>(a: A, f: (a: A) => IOOption<Either<A, B>>) =>
  () => {
    let current = f(a)()
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (O.isSome(current) && _.isLeft(current.value)) {
        current = f(current.value.left)()
        continue
      }
      if (O.isNone(current)) {
        return current as O.Option<B>
      }
      if (_.isRight(current.value)) {
        return O.some(current.value.right) as O.Option<B>
      }
    }
  }

/**
 * ChainRec for `IOOption`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChainRec1<URI> = {
  ...Chain,
  chainRec,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const FromEither: FromEither1<URI> = {
  URI,
  fromEither,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const FromIO: FromIO1<URI> = {
  URI,
  fromIO,
}

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.15.0
 * @category Combinators
 */
export const tap: {
  <A, _>(self: IOOption<A>, f: (a: A) => IOOption<_>): IOOption<A>
  <A, _>(f: (a: A) => IOOption<_>): (self: IOOption<A>) => IOOption<A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as IOO from 'fp-ts/IOOption'
 *   import * as O from 'fp-ts/Option'
 *   import * as E from 'fp-ts/Either'
 *
 *   const compute = (value: number) =>
 *     pipe(
 *       IOO.of(value),
 *       IOO.tapEither(value => (value > 0 ? E.right('ok') : E.left('error'))),
 *     )
 *
 *   assert.deepStrictEqual(compute(1)(), O.of(1))
 *   assert.deepStrictEqual(compute(-1)(), O.none)
 */
export const tapEither: {
  <A, E, _>(f: (a: A) => Either<E, _>): (self: IOOption<A>) => IOOption<A>
  <A, E, _>(self: IOOption<A>, f: (a: A) => Either<E, _>): IOOption<A>
} = /*#__PURE__*/ dual(2, tapEither_(FromEither, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as IOO from 'fp-ts/IOOption'
 *   import * as O from 'fp-ts/Option'
 *   import * as Console from 'fp-ts/Console'
 *
 *   // Will produce `Hello, fp-ts` to the stdout
 *   const effectA = pipe(
 *     IOO.of('fp-ts'),
 *     IOO.tapIO(value => Console.log(`Hello, ${value}`)),
 *   )
 *
 *   // No output to the stdout
 *   const effectB = pipe(
 *     IOO.none as IOO.IOOption<string>,
 *     IOO.tapIO(value => Console.log(`Hello, ${value}`)),
 *   )
 *
 *   async function test() {
 *     assert.deepStrictEqual(effectA(), O.of('fp-ts'))
 *     assert.deepStrictEqual(effectB(), O.none)
 *   }
 *
 *   test()
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): (self: IOOption<A>) => IOOption<A>
  <A, _>(self: IOOption<A>, f: (a: A) => IO<_>): IOOption<A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

/**
 * @since 2.12.0
 * @category Instances
 */
export const Alt: Alt1<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const Zero: Zero1<URI> = {
  URI,
  zero,
}

/**
 * @since 2.12.0
 * @category Do notation
 */
export const guard = /*#__PURE__*/ guard_(Zero, Pointed)

/**
 * @since 2.12.0
 * @category Instances
 */
export const Alternative: Alternative1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  alt: _alt,
  zero,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const Monad: Monad1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const MonadIO: MonadIO1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
  fromIO,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const MonadThrow: MonadThrow1<URI> = {
  ...Monad,
  throwError,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const Compactable: Compactable1<URI> = {
  URI,
  compact,
  separate,
}

/**
 * @since 2.12.0
 * @category Instances
 */
export const Filterable: Filterable1<URI> = {
  URI,
  map: _map,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
}

/** @internal */
interface IOOptionTypeLambda extends _.TypeLambda {
  readonly type: IOOption<this['Target']>
}

/** @internal */
const _FlatMap: _.FlatMap<IOOptionTypeLambda> = {
  flatMap,
}

/** @internal */
const _FromIO: _.FromIO<IOOptionTypeLambda> = {
  fromIO: FromIO.fromIO,
}

/** @internal */
const _FromEither: _.FromEither<IOOptionTypeLambda> = {
  fromEither,
}

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): (self: IOOption<A>) => IOOption<B>
  <A, B>(self: IOOption<A>, f: (a: A) => IO<B>): IOOption<B>
} = _.flatMapIO(_FromIO, _FlatMap)

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapOption: {
  <A, B>(f: (a: A) => Option<B>): (self: IOOption<A>) => IOOption<B>
  <A, B>(self: IOOption<A>, f: (a: A) => Option<B>): IOOption<B>
} = /*#__PURE__*/ dual(
  2,
  <A, B>(self: IOOption<A>, f: (a: A) => Option<B>): IOOption<B> => flatMap(self, fromOptionK(f)),
)

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapEither: {
  <A, B, _>(f: (a: A) => Either<_, B>): (self: IOOption<A>) => IOOption<B>
  <A, B, _>(self: IOOption<A>, f: (a: A) => Either<_, B>): IOOption<B>
} = /*#__PURE__*/ _.flatMapEither(_FromEither, _FlatMap)

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapNullable: {
  <A, B>(f: (a: A) => B | null | undefined): (self: IOOption<A>) => IOOption<B>
  <A, B>(self: IOOption<A>, f: (a: A) => B | null | undefined): IOOption<B>
} = /*#__PURE__*/ dual(
  2,
  <A, B>(self: IOOption<A>, f: (a: A) => B | null | undefined): IOOption<B> => flatMap(self, fromNullableK(f)),
)

/**
 * @since 2.12.0
 * @category Lifting
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => I.IO<B>) => (...a: A) => IOOption<B> =
  /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainIOK: <A, B>(f: (a: A) => I.IO<B>) => (first: IOOption<A>) => IOOption<B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainFirstIOK: <A, B>(f: (a: A) => I.IO<B>) => (first: IOOption<A>) => IOOption<A> = tapIO

/**
 * @since 2.12.0
 * @category Lifting
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Either<E, B>,
) => (...a: A) => IOOption<B> = /*#__PURE__*/ fromEitherK_(FromEither)

/**
 * Alias of `flatMapEither`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: IOOption<A>) => IOOption<B> = flatMapEither

/**
 * Alias of `tapEither`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainFirstEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: IOOption<A>) => IOOption<A> = tapEither

/**
 * Alias of `flatMapOption`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainOptionK: <A, B>(f: (a: A) => Option<B>) => (ma: IOOption<A>) => IOOption<B> = flatMapOption

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.12.0
 * @category Do notation
 */
export const Do: IOOption<{}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @since 2.12.0
 * @category Do notation
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @since 2.13.0
   * @category Do notation
   */
  let_ as let,
}

/**
 * @since 2.12.0
 * @category Do notation
 */
export const bind = /*#__PURE__*/ chainable.bind(Chain)

/**
 * @since 2.12.0
 * @category Do notation
 */
export const apS = /*#__PURE__*/ apS_(Apply)

/** @since 2.12.0 */
export const ApT: IOOption<readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

interface IOOptionIterable<A> {
  readonly value: IOOption<A>
  [Symbol.iterator]: () => Generator<IOOptionIterable<A>, A, any>
}

const do_: <MA extends IOOptionIterable<any>, A>(
  yieldFunction: (unwrap: <A>(ma: IOOption<A>) => IOOptionIterable<A>) => Generator<MA, A>,
) => IOOption<A> = ChnRec.do(Pointed, ChainRec)

export {
  /**
   * @since 1.0.0
   * @category Do notation
   */
  do_ as do,
}

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.12.0
 * @category Traversing
 */
export const traverseReadonlyNonEmptyArrayWithIndex = <A, B>(
  f: (index: number, a: A) => IOOption<B>,
): ((as: ReadonlyNonEmptyArray<A>) => IOOption<ReadonlyNonEmptyArray<B>>) =>
  flow(I.traverseReadonlyNonEmptyArrayWithIndex(f), I.map(O.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.12.0
 * @category Traversing
 */
export const traverseReadonlyArrayWithIndex = <A, B>(
  f: (index: number, a: A) => IOOption<B>,
): ((as: ReadonlyArray<A>) => IOOption<ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chain: <A, B>(f: (a: A) => IOOption<B>) => (ma: IOOption<A>) => IOOption<B> = flatMap

/**
 * Alias of `tap`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainFirst: <A, B>(f: (a: A) => IOOption<B>) => (first: IOOption<A>) => IOOption<A> = tap
