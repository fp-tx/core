import { type Apply, type Apply1, type Apply2, type Apply2C, type Apply3, type Apply4, sequenceT } from '../src/Apply'
import { type FromTask, type FromTask1, type FromTask2, type FromTask3, type FromTask4 } from '../src/FromTask'
import { type HKT, type Kind, type Kind2, type Kind3, type Kind4, type URIS, type URIS2, type URIS3, type URIS4 } from '../src/HKT'
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
