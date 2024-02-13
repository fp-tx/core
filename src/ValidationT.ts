/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import {
  type ApplicativeComposition12C,
  type ApplicativeComposition22C,
  type ApplicativeCompositionHKT2C,
  getApplicativeComposition,
} from './Applicative'
import * as E from './Either'
import { type Either } from './Either'
import { type LazyArg } from './function'
import { type HKT, type Kind, type Kind2, type URIS, type URIS2 } from './HKT'
import * as _ from './internal'
import { type Monad, type Monad1, type Monad2 } from './Monad'
import { type Semigroup } from './Semigroup'

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export interface ValidationT<M, E, A> extends HKT<M, Either<E, A>> {}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */

export interface ValidationM<M, E> extends ApplicativeCompositionHKT2C<M, E.URI, E> {
  readonly chain: <A, B>(ma: ValidationT<M, E, A>, f: (a: A) => ValidationT<M, E, B>) => ValidationT<M, E, B>

  readonly alt: <A>(fa: ValidationT<M, E, A>, that: LazyArg<ValidationT<M, E, A>>) => ValidationT<M, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export type ValidationT1<M extends URIS, E, A> = Kind<M, Either<E, A>>

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */

export interface ValidationM1<M extends URIS, E> extends ApplicativeComposition12C<M, E.URI, E> {
  readonly chain: <A, B>(ma: ValidationT1<M, E, A>, f: (a: A) => ValidationT1<M, E, B>) => ValidationT1<M, E, B>

  readonly alt: <A>(fa: ValidationT1<M, E, A>, that: LazyArg<ValidationT1<M, E, A>>) => ValidationT1<M, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export type ValidationT2<M extends URIS2, R, E, A> = Kind2<M, R, Either<E, A>>

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */

export interface ValidationM2<M extends URIS2, E> extends ApplicativeComposition22C<M, E.URI, E> {
  readonly chain: <R, A, B>(
    ma: ValidationT2<M, R, E, A>,

    f: (a: A) => ValidationT2<M, R, E, B>,
  ) => ValidationT2<M, R, E, B>

  readonly alt: <R, A>(
    fa: ValidationT2<M, R, E, A>,
    that: LazyArg<ValidationT2<M, R, E, A>>,
  ) => ValidationT2<M, R, E, A>
}

/**
 * Use `EitherT` instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */

export function getValidationM<E, M extends URIS2>(S: Semigroup<E>, M: Monad2<M>): ValidationM2<M, E>
/** @deprecated Zone of Death */

export function getValidationM<E, M extends URIS>(S: Semigroup<E>, M: Monad1<M>): ValidationM1<M, E>
/** @deprecated Zone of Death */

export function getValidationM<E, M>(S: Semigroup<E>, M: Monad<M>): ValidationM<M, E>
/** @deprecated Zone of Death */

export function getValidationM<E, M>(S: Semigroup<E>, M: Monad<M>): ValidationM<M, E> {
  const A = getApplicativeComposition(M, E.getApplicativeValidation(S))

  return {
    map: A.map,
    ap: A.ap,
    of: A.of,
    chain: (ma, f) => M.chain(ma, e => (_.isLeft(e) ? M.of(_.left(e.left)) : f(e.right))),
    alt: (me, that) =>
      M.chain(me, e1 =>
        _.isRight(e1) ? M.of(e1) : M.map(that(), e2 => (_.isLeft(e2) ? _.left(S.concat(e1.left, e2.left)) : e2)),
      ),
  }
}
