/** @since 2.0.0 */
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

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface ChainRec<F> extends Chain<F> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => HKT<F, E.Either<A, B>>) => HKT<F, B>
}

/**
 * @since 2.0.0
 * @category Model
 */
export interface ChainRec1<F extends URIS> extends Chain1<F> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => Kind<F, E.Either<A, B>>) => Kind<F, B>
}

/**
 * @since 2.0.0
 * @category Model
 */
export interface ChainRec2<F extends URIS2> extends Chain2<F> {
  readonly chainRec: <E, A, B>(a: A, f: (a: A) => Kind2<F, E, E.Either<A, B>>) => Kind2<F, E, B>
}

/**
 * @since 2.0.0
 * @category Model
 */
export interface ChainRec2C<F extends URIS2, E> extends Chain2C<F, E> {
  readonly chainRec: <A, B>(a: A, f: (a: A) => Kind2<F, E, E.Either<A, B>>) => Kind2<F, E, B>
}

/**
 * @since 2.0.0
 * @category Model
 */
export interface ChainRec3<F extends URIS3> extends Chain3<F> {
  readonly chainRec: <R, E, A, B>(a: A, f: (a: A) => Kind3<F, R, E, E.Either<A, B>>) => Kind3<F, R, E, B>
}

/**
 * @since 2.10.0
 * @category Model
 */
export interface ChainRec3C<F extends URIS3, E> extends Chain3C<F, E> {
  readonly chainRec: <R, A, B>(a: A, f: (a: A) => Kind3<F, R, E, E.Either<A, B>>) => Kind3<F, R, E, B>
}

/**
 * @since 2.10.0
 * @category Model
 */
export interface ChainRec4<F extends URIS4> extends Chain4<F> {
  readonly chainRec: <S, R, E, A, B>(a: A, f: (a: A) => Kind4<F, S, R, E, E.Either<A, B>>) => Kind4<F, S, R, E, B>
}

/** @since 2.0.0 */
export const tailRec = <A, B>(startWith: A, f: (a: A) => E.Either<A, B>): B => {
  let ab = f(startWith)
  while (ab._tag === 'Left') {
    ab = f(ab.left)
  }
  return ab.right
}

/**
 * @since 1.0.0
 * @category Utils
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
 * @since 1.0.0
 * @category Utils
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
 * @since 1.0.0
 * @category Utils
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
 * @since 1.0.0
 * @category Utils
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
 * @since 1.0.0
 * @category Utils
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
 * @since 1.0.0
 * @category Utils
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
 * @since 1.0.0
 * @category Utils
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
