/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Chain, type Chain1, type Chain2, type Chain2C, type Chain3, type Chain3C, type Chain4 } from './Chain'
import * as E from './Either'
import { constUndefined, tuple } from './function'
import {
  type HKT,
  type Kind,
  type Kind2,
  type Kind3,
  type Kind4,
  type URIS,
  type URIS2,
  type URIS3,
  type URIS4,
} from './HKT'
import type * as Mn from './Monoid'
import * as O from './Option'
import {
  type Pointed,
  type Pointed1,
  type Pointed2,
  type Pointed2C,
  type Pointed3,
  type Pointed3C,
  type Pointed4,
} from './Pointed'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface ChainRec<F> extends Chain<F> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => HKT<F, E.Either<A, B>>) => HKT<F, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface ChainRec1<F extends URIS> extends Chain1<F> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => Kind<F, E.Either<A, B>>) => Kind<F, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface ChainRec2<F extends URIS2> extends Chain2<F> {
  readonly chainRec: <E, A, B>(a: A, f: (a: A) => Kind2<F, E, E.Either<A, B>>) => Kind2<F, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface ChainRec2C<F extends URIS2, E> extends Chain2C<F, E> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => Kind2<F, E, E.Either<A, B>>) => Kind2<F, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface ChainRec3<F extends URIS3> extends Chain3<F> {
  readonly chainRec: <R, E, A, B>(a: A, f: (a: A) => Kind3<F, R, E, E.Either<A, B>>) => Kind3<F, R, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface ChainRec3C<F extends URIS3, E> extends Chain3C<F, E> {
  readonly chainRec: <R, A, B>(a: A, f: (a: A) => Kind3<F, R, E, E.Either<A, B>>) => Kind3<F, R, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface ChainRec4<F extends URIS4> extends Chain4<F> {
  readonly chainRec: <S, R, E, A, B>(a: A, f: (a: A) => Kind4<F, S, R, E, E.Either<A, B>>) => Kind4<F, S, R, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const tailRec = <A, B>(startWith: A, f: (a: A) => E.Either<A, B>): B => {
  let ab = f(startWith)
  while (ab._tag === 'Left') {
    ab = f(ab.left)
  }
  return ab.right
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Utils
 * @public
 */
export function forever<M extends URIS4>(
  M: ChainRec4<M>,
): <S, R, E, A, B>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>
export function forever<M extends URIS3>(M: ChainRec3<M>): <R, E, A, B>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
export function forever<M extends URIS3, E>(M: ChainRec3C<M, E>): <R, A, B>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
export function forever<M extends URIS2>(M: ChainRec2<M>): <E, A, B>(ma: Kind2<M, E, A>) => Kind2<M, E, B>
export function forever<M extends URIS2, E>(M: ChainRec2C<M, E>): <A, B>(ma: Kind2<M, E, A>) => Kind2<M, E, B>
export function forever<M extends URIS>(M: ChainRec1<M>): <A, B>(ma: Kind<M, A>) => Kind<M, B>
export function forever<M>(M: ChainRec<M>): <A, B>(ma: HKT<M, A>) => HKT<M, B> {
  return ma => M.chainRec(void 0, () => M.map(ma, E.left))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Utils
 * @public
 */
export function whileSome<M extends URIS4, A>(
  M: ChainRec4<M>,
  Mn: Mn.Monoid<A>,
): <S, R, E>(ma: Kind4<M, S, R, E, O.Option<A>>) => Kind4<M, S, R, E, A>
export function whileSome<M extends URIS3, A>(
  M: ChainRec3<M>,
  Mn: Mn.Monoid<A>,
): <R, E>(ma: Kind3<M, R, E, O.Option<A>>) => Kind3<M, R, E, A>
export function whileSome<M extends URIS3, E, A>(
  M: ChainRec3C<M, E>,
  Mn: Mn.Monoid<A>,
): <R>(ma: Kind3<M, R, E, O.Option<A>>) => Kind3<M, R, E, A>
export function whileSome<M extends URIS2, A>(
  M: ChainRec2<M>,
  Mn: Mn.Monoid<A>,
): <E>(ma: Kind2<M, E, O.Option<A>>) => Kind2<M, E, A>
export function whileSome<M extends URIS2, E, A>(
  M: ChainRec2C<M, E>,
  Mn: Mn.Monoid<A>,
): (ma: Kind2<M, E, O.Option<A>>) => Kind2<M, E, A>
export function whileSome<M extends URIS, A>(
  M: ChainRec1<M>,
  Mn: Mn.Monoid<A>,
): (ma: Kind<M, O.Option<A>>) => Kind<M, A>
export function whileSome<M, A>(M: ChainRec<M>, Mn: Mn.Monoid<A>): (ma: HKT<M, O.Option<A>>) => HKT<M, A> {
  return ma =>
    M.chainRec(Mn.empty, v =>
      M.map(
        ma,
        O.fold(
          () => E.right(v),
          x => E.left(Mn.concat(v, x)),
        ),
      ),
    )
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Utils
 * @public
 */
export function untilSome<M extends URIS4>(
  M: ChainRec4<M>,
): <S, R, E, A>(ma: Kind4<M, S, R, E, O.Option<A>>) => Kind4<M, S, R, E, A>
export function untilSome<M extends URIS3>(
  M: ChainRec3<M>,
): <R, E, A>(ma: Kind3<M, R, E, O.Option<A>>) => Kind3<M, R, E, A>
export function untilSome<M extends URIS3, E>(
  M: ChainRec3C<M, E>,
): <R, A>(ma: Kind3<M, R, E, O.Option<A>>) => Kind3<M, R, E, A>
export function untilSome<M extends URIS2>(M: ChainRec2<M>): <E, A>(ma: Kind2<M, E, O.Option<A>>) => Kind2<M, E, A>
export function untilSome<M extends URIS2, E>(M: ChainRec2C<M, E>): <A>(ma: Kind2<M, E, O.Option<A>>) => Kind2<M, E, A>
export function untilSome<M extends URIS>(M: ChainRec1<M>): <A>(ma: Kind<M, O.Option<A>>) => Kind<M, A>
export function untilSome<M>(M: ChainRec<M>): <A>(ma: HKT<M, O.Option<A>>) => HKT<M, A> {
  return ma => M.chainRec(void 0, () => M.map(ma, E.fromOption(constUndefined)))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Utils
 * @public
 */
export function chainRec2<M extends URIS4>(
  M: ChainRec4<M>,
): <S, R, E, A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind4<M, S, R, E, E.Either<[A, B], C>>) => Kind4<M, S, R, E, C>
export function chainRec2<M extends URIS3>(
  M: ChainRec3<M>,
): <R, E, A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind3<M, R, E, E.Either<[A, B], C>>) => Kind3<M, R, E, C>
export function chainRec2<M extends URIS3, E>(
  M: ChainRec3C<M, E>,
): <R, A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind3<M, R, E, E.Either<[A, B], C>>) => Kind3<M, R, E, C>
export function chainRec2<M extends URIS2>(
  M: ChainRec2<M>,
): <E, A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind2<M, E, E.Either<[A, B], C>>) => Kind2<M, E, C>
export function chainRec2<M extends URIS2, E>(
  M: ChainRec2C<M, E>,
): <A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind2<M, E, E.Either<[A, B], C>>) => Kind2<M, E, C>
export function chainRec2<M extends URIS>(
  M: ChainRec1<M>,
): <A, B, C>(a: A, b: B, f: (a: A, b: B) => Kind<M, E.Either<[A, B], C>>) => Kind<M, C>
export function chainRec2<M>(
  M: ChainRec<M>,
): <A, B, C>(a: A, b: B, f: (a: A, b: B) => HKT<M, E.Either<[A, B], C>>) => HKT<M, C> {
  return (a, b, f) => M.chainRec(tuple(a, b), ([a, b]) => f(a, b))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Utils
 * @public
 */
export function chainRec3<M extends URIS4>(
  M: ChainRec4<M>,
): <S, R, E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => Kind4<M, S, R, E, E.Either<[A, B, C], D>>,
) => Kind4<M, S, R, E, D>
export function chainRec3<M extends URIS3>(
  M: ChainRec3<M>,
): <R, E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => Kind3<M, R, E, E.Either<[A, B, C], D>>,
) => Kind3<M, R, E, D>
export function chainRec3<M extends URIS3, E>(
  M: ChainRec3C<M, E>,
): <R, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => Kind3<M, R, E, E.Either<[A, B, C], D>>,
) => Kind3<M, R, E, D>
export function chainRec3<M extends URIS2>(
  M: ChainRec2<M>,
): <E, A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => Kind2<M, E, E.Either<[A, B, C], D>>) => Kind2<M, E, D>
export function chainRec3<M extends URIS2, E>(
  M: ChainRec2C<M, E>,
): <A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => Kind2<M, E, E.Either<[A, B, C], D>>) => Kind2<M, E, D>
export function chainRec3<M extends URIS>(
  M: ChainRec1<M>,
): <A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => Kind<M, E.Either<[A, B, C], D>>) => Kind<M, D>
export function chainRec3<M>(
  M: ChainRec<M>,
): <A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => HKT<M, E.Either<[A, B, C], D>>) => HKT<M, D> {
  return (a, b, c, f) => M.chainRec(tuple(a, b, c), ([a, b, c]) => f(a, b, c))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Utils
 * @public
 */
export const tailRec2: <A, B, C>(a: A, b: B, f: (a: A, b: B) => E.Either<readonly [A, B], C>) => C = (ai, bi, f) => {
  let result = f(ai, bi)
  while (E.isLeft(result)) {
    const [a, b] = result.left
    result = f(a, b)
  }
  return result.right
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Utils
 * @public
 */
export const tailRec3: <A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => E.Either<readonly [A, B, C], D>) => D = (
  ai,
  bi,
  ci,
  f,
) => {
  let result = f(ai, bi, ci)
  while (E.isLeft(result)) {
    const [a, b, c] = result.left
    result = f(a, b, c)
  }
  return result.right
}

function do_<M extends URIS4>(P: Pointed4<M>, M: ChainRec4<M>): DoFunction4<M>
function do_<M extends URIS3>(P: Pointed3<M>, M: ChainRec3<M>): DoFunction3<M>
function do_<M extends URIS3, E>(P: Pointed3C<M, E>, M: ChainRec3C<M, E>): DoFunction3C<M, E>
function do_<M extends URIS2>(P: Pointed2<M>, M: ChainRec2<M>): DoFunction2<M>
function do_<M extends URIS2, E>(P: Pointed2C<M, E>, M: ChainRec2C<M, E>): DoFunction2C<M, E>
function do_<M extends URIS>(P: Pointed1<M>, M: ChainRec1<M>): DoFunction1<M>
function do_<M>(P: Pointed<M>, M: ChainRec<M>): DoFunction<M> {
  return <MA extends KindGenerator<M, any>, A>(
    yieldFunction: (unwrap: <A>(ma: HKT<M, A>) => KindGenerator<M, A>) => Generator<MA, A, any>,
  ) => {
    const iterator = yieldFunction(unwrap)
    const state = iterator.next()
    const go = (state: IteratorResult<MA, A>): HKT<M, E.Either<IteratorResult<MA, A>, A>> => {
      if (state.done) {
        return P.of(E.right(state.value))
      }
      return M.map(state.value.value, a => E.left(iterator.next(a)))
    }
    return M.chainRec(state, go)
  }
}

export {
  /** @internal */
  do_ as do,
}

// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------

class SingletonGenerator<T, A> implements Generator<T, A> {
  private finished = false

  constructor(public readonly value: T) {}

  next(this: SingletonGenerator<T, A>, value: A): IteratorResult<T, A> {
    if (this.finished) {
      return { done: true, value }
    }
    this.finished = true
    return { done: false, value: this.value }
  }

  return(this: SingletonGenerator<T, A>, value: A) {
    return this.next(value)
  }

  throw(e: unknown): IteratorResult<T, A> {
    throw e
  }

  [Symbol.iterator](): Generator<T, A> {
    return new SingletonGenerator<T, A>(this.value)
  }
}

interface KindGenerator4<M extends URIS4, S, R, E, A> {
  readonly value: Kind4<M, S, R, E, A>
  [Symbol.iterator](): Generator<KindGenerator4<M, S, R, E, A>, A>
}

interface KindGenerator3<M extends URIS3, R, E, A> {
  readonly value: Kind3<M, R, E, A>
  [Symbol.iterator](): Generator<KindGenerator3<M, R, E, A>, A>
}

export interface KindGenerator2<M extends URIS2, E, out A> {
  readonly value: Kind2<M, E, A>
  [Symbol.iterator](): Generator<KindGenerator2<M, E, A>, A>
}

interface KindGenerator1<M extends URIS, A> {
  readonly value: Kind<M, A>
  [Symbol.iterator](): Generator<KindGenerator1<M, A>, A>
}

interface KindGenerator<M, A> {
  readonly value: HKT<M, A>
  [Symbol.iterator](): Generator<KindGenerator<M, A>, A>
}

function kindGenerator<M extends URIS4, S, R, E, A>(ma: Kind4<M, S, R, A, A>): KindGenerator4<M, S, R, E, A>
function kindGenerator<M extends URIS3, R, E, A>(ma: Kind3<M, R, E, A>): KindGenerator3<M, R, E, A>
function kindGenerator<M extends URIS2, E, A>(ma: Kind2<M, E, A>): KindGenerator2<M, E, A>
function kindGenerator<M extends URIS, A>(ma: Kind<M, A>): KindGenerator1<M, A>
function kindGenerator<M, A>(ma: HKT<M, A>): KindGenerator<M, A> {
  class KindGenerator<A> {
    constructor(public readonly value: HKT<M, A>) {}
    [Symbol.iterator](this: KindGenerator<A>): Generator<KindGenerator<A>, A> {
      return new SingletonGenerator<KindGenerator<A>, A>(this)
    }
  }
  return new KindGenerator<A>(ma)
}

function unwrap<M extends URIS4, S, R, E, A>(ma: Kind4<M, S, R, E, A>): KindGenerator4<M, S, R, E, A>
function unwrap<M extends URIS3, R, E, A>(ma: Kind3<M, R, E, A>): KindGenerator3<M, R, E, A>
function unwrap<M extends URIS2, E, A>(ma: Kind2<M, E, A>): KindGenerator2<M, E, A>
function unwrap<M extends URIS, A>(ma: Kind<M, A>): KindGenerator1<M, A>
function unwrap<M, A>(ma: HKT<M, A>): KindGenerator<M, A>
function unwrap(ma: any): any {
  return kindGenerator(ma)
}

type DoFunction4<M extends URIS4> = <MA extends KindGenerator4<M, any, any, any, any>, A>(
  yieldFunction: (
    unwrap: <S, R, E, A>(ma: Kind4<M, S, R, E, A>) => KindGenerator4<M, S, R, E, A>,
  ) => Generator<MA, A, any>,
) => Kind4<
  M,
  MA extends KindGenerator4<M, infer S, any, any, any> ? S : never,
  MA extends KindGenerator4<M, any, infer R, any, any> ? R : never,
  MA extends KindGenerator4<M, any, any, infer E, any> ? E : never,
  A
>

type DoFunction3<M extends URIS3> = <MA extends KindGenerator3<M, any, any, any>, A>(
  yieldFunction: (unwrap: <R, E, A>(ma: Kind3<M, R, E, A>) => KindGenerator3<M, R, E, A>) => Generator<MA, A, any>,
) => Kind3<
  M,
  MA extends KindGenerator3<M, infer R, any, any> ? R : never,
  MA extends KindGenerator3<M, any, infer E, any> ? E : never,
  A
>

type DoFunction3C<M extends URIS3, E> = <MA extends KindGenerator3<M, any, E, any>, A>(
  yieldFunction: (unwrap: <R, A>(ma: Kind3<M, R, E, A>) => KindGenerator3<M, R, E, A>) => Generator<MA, A, any>,
) => Kind3<M, MA extends KindGenerator3<M, infer R, E, any> ? R : never, E, A>

type DoFunction2<M extends URIS2> = <MA extends KindGenerator2<M, any, any>, A>(
  yieldFunction: (unwrap: <E, A>(ma: Kind2<M, E, A>) => KindGenerator2<M, E, A>) => Generator<MA, A, any>,
) => MA extends KindGenerator2<M, infer E, any> ? Kind2<M, E, A> : never

type DoFunction2C<M extends URIS2, E> = <MA extends KindGenerator2<M, any, any>, A>(
  yieldFunction: (unwrap: <A>(ma: Kind2<M, E, A>) => KindGenerator2<M, E, A>) => Generator<MA, A, any>,
) => Kind2<M, E, A>

type DoFunction1<M extends URIS> = <MA extends KindGenerator1<M, any>, A>(
  yieldFunction: (unwrap: <A>(ma: Kind<M, A>) => KindGenerator1<M, A>) => Generator<MA, A, any>,
) => Kind<M, A>

type DoFunction<M> = <MA extends KindGenerator<M, any>, A>(
  yieldFunction: (unwrap: <A>(ma: HKT<M, A>) => KindGenerator<M, A>) => Generator<MA, A, any>,
) => HKT<M, A>
