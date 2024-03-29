/**
 * The `Chain` type class extends the `Apply` type class with a `chain` operation which composes computations in
 * sequence, using the return value of one computation to determine the next computation.
 *
 * Instances must satisfy the following law in addition to the `Apply` laws:
 *
 * 1. Associativity: `F.chain(F.chain(fa, afb), bfc) <-> F.chain(fa, a => F.chain(afb(a), bfc))`
 *
 * Note. `Apply`'s `ap` can be derived: `(fab, fa) => F.chain(fab, f => F.map(fa, f))`
 *
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import { type Apply, type Apply1, type Apply2, type Apply2C, type Apply3, type Apply3C, type Apply4 } from './Apply'
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

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Chain<F> extends Apply<F> {
  readonly chain: <A, B>(fa: HKT<F, A>, f: (a: A) => HKT<F, B>) => HKT<F, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Chain1<F extends URIS> extends Apply1<F> {
  readonly chain: <A, B>(fa: Kind<F, A>, f: (a: A) => Kind<F, B>) => Kind<F, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Chain2<F extends URIS2> extends Apply2<F> {
  readonly chain: <E, A, B>(fa: Kind2<F, E, A>, f: (a: A) => Kind2<F, E, B>) => Kind2<F, E, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Chain2C<F extends URIS2, E> extends Apply2C<F, E> {
  readonly chain: <A, B>(fa: Kind2<F, E, A>, f: (a: A) => Kind2<F, E, B>) => Kind2<F, E, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Chain3<F extends URIS3> extends Apply3<F> {
  readonly chain: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Chain3C<F extends URIS3, E> extends Apply3C<F, E> {
  readonly chain: <R, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Chain4<F extends URIS4> extends Apply4<F> {
  readonly chain: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, f: (a: A) => Kind4<F, S, R, E, B>) => Kind4<F, S, R, E, B>
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function chainFirst<M extends URIS4>(
  M: Chain4<M>,
): <A, S, R, E, _>(f: (a: A) => Kind4<M, S, R, E, _>) => (first: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, A>
export function chainFirst<M extends URIS3>(
  M: Chain3<M>,
): <A, R, E, _>(f: (a: A) => Kind3<M, R, E, _>) => (first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
export function chainFirst<M extends URIS3, E>(
  M: Chain3C<M, E>,
): <A, R, _>(f: (a: A) => Kind3<M, R, E, _>) => (first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
export function chainFirst<M extends URIS2>(
  M: Chain2<M>,
): <A, E, _>(f: (a: A) => Kind2<M, E, _>) => (first: Kind2<M, E, A>) => Kind2<M, E, A>
export function chainFirst<M extends URIS2, E>(
  M: Chain2C<M, E>,
): <A, _>(f: (a: A) => Kind2<M, E, _>) => (first: Kind2<M, E, A>) => Kind2<M, E, A>
export function chainFirst<M extends URIS>(
  M: Chain1<M>,
): <A, _>(f: (a: A) => Kind<M, _>) => (first: Kind<M, A>) => Kind<M, A>
export function chainFirst<M>(M: Chain<M>): <A, _>(f: (a: A) => HKT<M, _>) => (first: HKT<M, A>) => HKT<M, A>
export function chainFirst<M>(M: Chain<M>): <A, _>(f: (a: A) => HKT<M, _>) => (first: HKT<M, A>) => HKT<M, A> {
  const tapM = tap(M)
  return f => first => tapM(first, f)
}

/** @internal */
export function tap<M extends URIS4>(
  M: Chain4<M>,
): <S, R1, E1, A, R2, E2, _>(
  first: Kind4<M, S, R1, E1, A>,
  f: (a: A) => Kind4<M, S, R2, E2, _>,
) => Kind4<M, S, R1 & R2, E1 | E2, A>
/** @internal */
export function tap<M extends URIS3>(
  M: Chain3<M>,
): <R1, E1, A, R2, E2, _>(first: Kind3<M, R1, E1, A>, f: (a: A) => Kind3<M, R2, E2, _>) => Kind3<M, R1 & R2, E1 | E2, A>
/** @internal */
export function tap<M extends URIS2>(
  M: Chain2<M>,
): <E1, A, E2, _>(first: Kind2<M, E1, A>, f: (a: A) => Kind2<M, E2, _>) => Kind2<M, E1 | E2, A>
/** @internal */
export function tap<M extends URIS>(M: Chain1<M>): <A, _>(first: Kind<M, A>, f: (a: A) => Kind<M, _>) => Kind<M, A>
/** @internal */
export function tap<M>(M: Chain<M>): <A, _>(first: HKT<M, A>, f: (a: A) => HKT<M, _>) => HKT<M, A>
/** @internal */
export function tap<M>(M: Chain<M>): <A, _>(first: HKT<M, A>, f: (a: A) => HKT<M, _>) => HKT<M, A> {
  return (first, f) => M.chain(first, a => M.map(f(a), () => a))
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function bind<M extends URIS4>(
  M: Chain4<M>,
): <N extends string, A, S, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind4<M, S, R, E, B>,
) => (ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>
export function bind<M extends URIS3>(
  M: Chain3<M>,
): <N extends string, A, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<M, R, E, B>,
) => (ma: Kind3<M, R, E, A>) => Kind3<M, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>
export function bind<M extends URIS3, E>(
  M: Chain3C<M, E>,
): <N extends string, A, R, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind3<M, R, E, B>,
) => (ma: Kind3<M, R, E, A>) => Kind3<M, R, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>
export function bind<M extends URIS2>(
  M: Chain2<M>,
): <N extends string, A, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind2<M, E, B>,
) => (ma: Kind2<M, E, A>) => Kind2<M, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>
export function bind<M extends URIS2, E>(
  M: Chain2C<M, E>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind2<M, E, B>,
) => (ma: Kind2<M, E, A>) => Kind2<M, E, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>
export function bind<M extends URIS>(
  M: Chain1<M>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Kind<M, B>,
) => (ma: Kind<M, A>) => Kind<M, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>
export function bind<M>(
  M: Chain<M>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => HKT<M, B>,
) => (ma: HKT<M, A>) => HKT<M, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>
export function bind<M>(
  M: Chain<M>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => HKT<M, B>,
) => (ma: HKT<M, A>) => HKT<M, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> {
  return (name, f) => ma => M.chain(ma, a => M.map(f(a), b => Object.assign({}, a, { [name]: b }) as any))
}
