import { type Apply, type Apply1, type Apply2, type Apply2C, type Apply3, type Apply4, sequenceT } from '../src/Apply'
import type * as ChnRec from '../src/ChainRec'
import * as E from '../src/Either'
import { type FromTask, type FromTask1, type FromTask2, type FromTask3, type FromTask4 } from '../src/FromTask'
import { constVoid, flow, tuple } from '../src/function'
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
} from '../src/HKT'
import type * as MT from '../src/MonadThrow'
import type * as P from '../src/Pointed'
import * as T from '../src/Task'

export const deepStrictEqual = <A>(actual: A, expected: A) => {
  expect(actual).toStrictEqual(expected)
}

export const strictEqual = <A>(actual: A, expected: A) => {
  expect(actual).toStrictEqual(expected)
}

export const double = (n: number): number => n * 2

export interface AssertParSeq {
  <F extends URIS4>(
    F: Apply4<F>,
    MT: FromTask4<F>,
    run: (fa: Kind4<F, unknown, unknown, unknown, unknown>) => Promise<unknown>,
  ): Promise<void>
  <F extends URIS3>(
    F: Apply3<F>,
    MT: FromTask3<F>,
    run: (fa: Kind3<F, unknown, unknown, unknown>) => Promise<unknown>,
  ): Promise<void>
  <F extends URIS2>(
    F: Apply2<F>,
    MT: FromTask2<F>,
    run: (fa: Kind2<F, unknown, unknown>) => Promise<unknown>,
  ): Promise<void>
  <F extends URIS2, E>(
    F: Apply2C<F, E>,
    MT: FromTask2<F>,
    run: (fa: Kind2<F, E, unknown>) => Promise<unknown>,
  ): Promise<void>
  <F extends URIS>(F: Apply1<F>, MT: FromTask1<F>, run: (fa: Kind<F, unknown>) => Promise<unknown>): Promise<void>
  <F>(F: Apply<F>, MT: FromTask<F>, run: (fa: HKT<F, unknown>) => Promise<unknown>): Promise<void>
}

export const assertParSeq =
  (expected: ReadonlyArray<string>): AssertParSeq =>
  async <F>(F: Apply<F>, MT: FromTask<F>, run: (fa: HKT<F, unknown>) => Promise<unknown>) => {
    const log: Array<string> = []
    const a = MT.fromTask(T.delay(100)(T.fromIO(() => log.push('a'))))
    const b = MT.fromTask(T.fromIO(() => log.push('b')))
    const ab = sequenceT(F)(a, b)
    await run(ab)
    deepStrictEqual(log, expected)
  }

export const assertPar = assertParSeq(['b', 'a'])

export const assertSeq = assertParSeq(['a', 'b'])

type FactAcc = readonly [current: bigint, acc: bigint]

export const factStart: (n: bigint) => FactAcc = n => [n, 1n]

export const fact: (fibAcc: FactAcc) => E.Either<FactAcc, bigint> = flow(
  E.fromPredicate(
    ([n]) => n <= 1n,
    ([n, acc]) => tuple(n - 1n, acc * n),
  ),
  E.map(([, acc]) => acc),
)

export const fact100 =
  93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n

export const fact100String = fact100.toString()

export function testFactM<M extends URIS4>(
  M: ChnRec.ChainRec4<M>,
  P: P.Pointed4<M>,
  test?: () => void,
): <S, R, E>(n: bigint) => Kind4<M, S, R, E, string>
export function testFactM<M extends URIS3>(
  M: ChnRec.ChainRec3<M>,
  P: P.Pointed3<M>,
  test?: () => void,
): <R, E>(n: bigint) => Kind3<M, R, E, string>
export function testFactM<M extends URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>,
  P: P.Pointed3C<M, E>,
  test?: () => void,
): <R>(n: bigint) => Kind3<M, R, E, string>
export function testFactM<M extends URIS2>(
  M: ChnRec.ChainRec2<M>,
  P: P.Pointed2<M>,
  test?: () => void,
): <E>(n: bigint) => Kind2<M, E, string>
export function testFactM<M extends URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>,
  P: P.Pointed2C<M, E>,
  test?: () => void,
): (n: bigint) => Kind2<M, E, string>
export function testFactM<M extends URIS>(
  M: ChnRec.ChainRec1<M>,
  P: P.Pointed1<M>,
  test?: () => void,
): (n: bigint) => Kind<M, string>
export function testFactM<M>(
  M: ChnRec.ChainRec<M>,
  P: P.Pointed<M>,
  test: () => void = constVoid,
): (n: bigint) => HKT<M, string> {
  return n =>
    M.map(
      M.chainRec(
        factStart(n),
        flow(fact, P.of, _ =>
          M.chain(_, _ => {
            test()
            return P.of(_)
          }),
        ),
      ),
      String,
    )
}

export function testShortCircuitM<M extends URIS4, S, R, E>(
  M: MT.MonadThrow4<M>,
  C: ChnRec.ChainRec4<M>,
  test?: () => void,
): Kind4<M, S, R, E, never>
export function testShortCircuitM<M extends URIS3, R, E>(
  M: MT.MonadThrow3<M>,
  C: ChnRec.ChainRec3<M>,
  test?: () => void,
): Kind3<M, R, E, never>
export function testShortCircuitM<M extends URIS3, R, E>(
  M: MT.MonadThrow3C<M, E>,
  C: ChnRec.ChainRec3C<M, E>,
  test?: () => void,
): Kind3<M, R, E, never>
export function testShortCircuitM<M extends URIS2, E>(
  M: MT.MonadThrow2<M>,
  C: ChnRec.ChainRec2<M>,
  test?: () => void,
): Kind2<M, E, never>
export function testShortCircuitM<M extends URIS2, E>(
  M: MT.MonadThrow2C<M, E>,
  C: ChnRec.ChainRec2C<M, E>,
  test?: () => void,
): Kind2<M, E, never>
export function testShortCircuitM<M extends URIS>(
  M: MT.MonadThrow1<M>,
  C: ChnRec.ChainRec1<M>,
  test?: () => void,
): Kind<M, never>
export function testShortCircuitM<M>(
  M: MT.MonadThrow<M>,
  C: ChnRec.ChainRec<M>,
  test: () => void = constVoid,
): HKT<M, never> {
  return C.chainRec(0, () => {
    test()
    return M.throwError('short circuit')
  })
}
