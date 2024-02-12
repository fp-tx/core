/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Applicative2C } from './Applicative'
import { type Apply1, type Apply2C, getApplySemigroup } from './Apply'
import { type Bifunctor2 } from './Bifunctor'
import { type Chain2C } from './Chain'
import { type Either } from './Either'
import {
  type FromEither2,
  fromOption as fromOption_,
  fromOptionK as fromOptionK_,
  fromPredicate as fromPredicate_,
} from './FromEither'
import { type FromIO2, fromIOK as fromIOK_ } from './FromIO'
import { type FromTask2, fromTaskK as fromTaskK_ } from './FromTask'
import { type FromThese2, fromTheseK as fromTheseK_ } from './FromThese'
import { flow, type LazyArg, pipe, SK } from './function'
import { flap as flap_, type Functor2 } from './Functor'
import * as _ from './internal'
import { type IO } from './IO'
import { type IOEither } from './IOEither'
import { type Monad2C } from './Monad'
import { type MonadTask2C } from './MonadTask'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Option } from './Option'
import { type Pointed2 } from './Pointed'
import { type Predicate } from './Predicate'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import * as T from './Task'
import { type Task } from './Task'
import * as TH from './These'
import { type These } from './These'
import * as TT from './TheseT'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface TaskThese<E, A> extends Task<These<E, A>> {}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const left: <E = never, A = never>(e: E) => TaskThese<E, A> = /*#__PURE__*/ TT.left(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const right: <E = never, A = never>(a: A) => TaskThese<E, A> = /*#__PURE__*/ TT.right(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const both: <E, A>(e: E, a: A) => TaskThese<E, A> = /*#__PURE__*/ TT.both(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const rightTask: <E = never, A = never>(ma: Task<A>) => TaskThese<E, A> = /*#__PURE__*/ TT.rightF(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const leftTask: <E = never, A = never>(me: Task<E>) => TaskThese<E, A> = /*#__PURE__*/ TT.leftF(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const rightIO: <E = never, A = never>(ma: IO<A>) => TaskThese<E, A> = /*#__PURE__*/ flow(T.fromIO, rightTask)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const leftIO: <E = never, A = never>(me: IO<E>) => TaskThese<E, A> = /*#__PURE__*/ flow(T.fromIO, leftTask)

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromEither: <E, A>(fa: Either<E, A>) => TaskThese<E, A> = T.of

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromThese: <E, A>(fa: These<E, A>) => TaskThese<E, A> = T.of

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromIO: <A, E = never>(fa: IO<A>) => TaskThese<E, A> = rightIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromIOEither: <E, A>(fa: IOEither<E, A>) => TaskThese<E, A> = /*#__PURE__*/ T.fromIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromTask: <A, E = never>(fa: Task<A>) => TaskThese<E, A> = rightTask

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const match: <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B,
) => (fa: TaskThese<E, A>) => Task<B> = /*#__PURE__*/ TT.match(T.Functor)

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const matchW: <E, B, A, C, D>(
  onLeft: (e: E) => B,
  onRight: (a: A) => C,
  onBoth: (e: E, a: A) => D,
) => (ma: TaskThese<E, A>) => T.Task<B | C | D> = match as any

/**
 * The `E` suffix (short for **E**ffect) means that the handlers return an effect (`Task`).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const matchE: <E, B, A>(
  onLeft: (e: E) => Task<B>,
  onRight: (a: A) => Task<B>,
  onBoth: (e: E, a: A) => Task<B>,
) => (fa: TaskThese<E, A>) => Task<B> = /*#__PURE__*/ TT.matchE(T.Monad)

/**
 * Alias of [`matchE`](#matche).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fold = matchE

/**
 * Less strict version of [`matchE`](#matche).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const matchEW: <E, B, A, C, D>(
  onLeft: (e: E) => Task<B>,
  onRight: (a: A) => Task<C>,
  onBoth: (e: E, a: A) => Task<D>,
) => (fa: TaskThese<E, A>) => Task<B | C | D> = fold as any

/**
 * Alias of [`matchEW`](#matchew).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const foldW = matchEW

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const swap: <E, A>(fa: TaskThese<E, A>) => TaskThese<A, E> = /*#__PURE__*/ TT.swap(T.Functor)

const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _bimap: Bifunctor2<URI>['bimap'] = (fa, f, g) => pipe(fa, bimap(f, g))
/* istanbul ignore next */
const _mapLeft: Bifunctor2<URI>['mapLeft'] = (fa, f) => pipe(fa, mapLeft(f))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: TaskThese<E, A>) => TaskThese<E, B> = /*#__PURE__*/ TT.map(
  T.Functor,
)

/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: TaskThese<E, A>) => TaskThese<G, B> =
  /*#__PURE__*/ TT.bimap(T.Functor)

/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: TaskThese<E, A>) => TaskThese<G, A> = /*#__PURE__*/ TT.mapLeft(
  T.Functor,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const of: <E = never, A = never>(a: A) => TaskThese<E, A> = right

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const URI = 'TaskThese'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: TaskThese<E, A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const getApply = <E>(A: Apply1<T.URI>, S: Semigroup<E>): Apply2C<URI, E> => {
  const ap = TT.ap(A, S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: (fab, fa) => pipe(fab, ap(fa)),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getApplicative<E>(A: Apply1<T.URI>, S: Semigroup<E>): Applicative2C<URI, E> {
  const { ap } = getApply(A, S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap,
    of,
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getChain<E>(S: Semigroup<E>): Chain2C<URI, E> {
  const A = getApply(T.ApplicativePar, S)
  const chain = TT.chain(T.Monad, S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: A.ap,
    chain: (ma, f) => pipe(ma, chain(f)),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getMonad<E>(S: Semigroup<E>): Monad2C<URI, E> & MonadTask2C<URI, E> {
  const A = getApplicative(T.ApplicativePar, S)
  const C = getChain(S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: A.ap,
    of,
    chain: C.chain,
    fromIO,
    fromTask,
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Pointed: Pointed2<URI> = {
  URI,
  of,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const FromEither: FromEither2<URI> = {
  URI,
  fromEither,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => TaskThese<E, A> =
  /*#__PURE__*/ fromOption_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => TaskThese<E, B> =
  /*#__PURE__*/ fromOptionK_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromPredicate: {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => TaskThese<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => TaskThese<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => TaskThese<E, A>
} = /*#__PURE__*/ fromPredicate_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const FromThese: FromThese2<URI> = {
  URI,
  fromThese,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromTheseK: <A extends ReadonlyArray<unknown>, E, B>(
  f: (...a: A) => TH.These<E, B>,
) => (...a: A) => TaskThese<E, B> = /*#__PURE__*/ fromTheseK_(FromThese)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const FromIO: FromIO2<URI> = {
  URI,
  fromIO,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <E = never>(...a: A) => TaskThese<E, B> = /*#__PURE__*/ fromIOK_(FromIO)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const FromTask: FromTask2<URI> = {
  URI,
  fromIO,
  fromTask,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromTaskK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => T.Task<B>,
) => <E = never>(...a: A) => TaskThese<E, B> = /*#__PURE__*/ fromTaskK_(FromTask)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const toTuple2: <E, A>(e: LazyArg<E>, a: LazyArg<A>) => (fa: TaskThese<E, A>) => Task<readonly [E, A]> =
  /*#__PURE__*/ TT.toTuple2(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const ApT: TaskThese<never, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(T.ApplicativePar, S))`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndex = <E>(
  S: Semigroup<E>,
): (<A, B>(
  f: (index: number, a: A) => TaskThese<E, B>,
) => (as: ReadonlyNonEmptyArray<A>) => TaskThese<E, ReadonlyNonEmptyArray<B>>) => {
  const g = TH.traverseReadonlyNonEmptyArrayWithIndex(S)
  return f => flow(T.traverseReadonlyNonEmptyArrayWithIndex(f), T.map(g(SK)))
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(T.ApplicativePar, S))`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const traverseReadonlyArrayWithIndex =
  <E>(S: Semigroup<E>) =>
  <A, B>(f: (index: number, a: A) => TaskThese<E, B>): ((as: ReadonlyArray<A>) => TaskThese<E, ReadonlyArray<B>>) => {
    const g = traverseReadonlyNonEmptyArrayWithIndex(S)(f)
    return as => (_.isNonEmpty(as) ? g(as) : ApT)
  }

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(T.ApplicativeSeq, S))`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndexSeq =
  <E>(S: Semigroup<E>) =>
  <A, B>(f: (index: number, a: A) => TaskThese<E, B>) =>
  (as: ReadonlyNonEmptyArray<A>): TaskThese<E, ReadonlyNonEmptyArray<B>> =>
  () =>
    _.tail(as).reduce<Promise<These<E, NonEmptyArray<B>>>>(
      (acc, a, i) =>
        acc.then(ebs =>
          TH.isLeft(ebs) ? acc : (
            f(i + 1, a)().then(eb => {
              if (TH.isLeft(eb)) {
                return eb
              }
              if (TH.isBoth(eb)) {
                const right = ebs.right
                right.push(eb.right)
                return TH.isBoth(ebs) ? TH.both(S.concat(ebs.left, eb.left), right) : TH.both(eb.left, right)
              }
              ebs.right.push(eb.right)
              return ebs
            })
          ),
        ),
      f(0, _.head(as))().then(TH.map(_.singleton)),
    )

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(T.ApplicativeSeq, S))`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const traverseReadonlyArrayWithIndexSeq =
  <E>(S: Semigroup<E>) =>
  <A, B>(f: (index: number, a: A) => TaskThese<E, B>): ((as: ReadonlyArray<A>) => TaskThese<E, ReadonlyArray<B>>) => {
    const g = traverseReadonlyNonEmptyArrayWithIndexSeq(S)(f)
    return as => (_.isNonEmpty(as) ? g(as) : ApT)
  }

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`Functor`](#functor) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const functorTaskThese: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * Use [`Bifunctor`](#bifunctor) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const bifunctorTaskThese: Bifunctor2<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

/**
 * Use [`toTuple2`](#totuple2) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const toTuple = <E, A>(e: E, a: A): ((fa: TaskThese<E, A>) => Task<[E, A]>) =>
  toTuple2(
    () => e,
    () => a,
  ) as any

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `TT.Functor` instead of `TT.taskThese` (where `TT` is from `import TT from 'fp-ts/TaskThese'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const taskThese: Functor2<URI> & Bifunctor2<URI> = {
  URI,
  map: _map,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const getSemigroup = <E, A>(SE: Semigroup<E>, SA: Semigroup<A>): Semigroup<TaskThese<E, A>> =>
  getApplySemigroup(T.ApplySeq)(TH.getSemigroup(SE, SA))
