import * as ChnRec from '../src/ChainRec'
import * as E from '../src/Either'
import { flow, pipe, tuple } from '../src/function'
import * as IO from '../src/IO'
import * as IOO from '../src/IOOption'
import { ChainRec as IOOChainRec } from '../src/IOOption'
import * as N from '../src/number'
import * as O from '../src/Option'
import * as St from '../src/State'
import { ChainRec as StateChainRec } from '../src/State'

describe('forever', () => {
  it('should finish only on a throw', () => {
    let count = 0
    const testFn = ChnRec.forever(IO.ChainRec)(() => {
      if (count === 100) {
        throw new Error('count is 100')
      }
      count++
    })
    expect(testFn).toThrow()
    expect(count).toStrictEqual(100)
  })
})

describe('whileSome', () => {
  it('counts up while Some', () => {
    const countUp = ChnRec.whileSome(
      StateChainRec,
      N.MonoidSum,
    )(
      pipe(
        St.gets(O.fromPredicate((n: number) => n <= 5)),
        St.chainFirst(() => St.modify(n => n + 1)),
      ),
    )

    const [result] = countUp(0)
    expect(result).toStrictEqual(15)
  })
})

describe('untilSome', () => {
  it('counts up until Some', () => {
    const countUp = ChnRec.untilSome(StateChainRec)(
      pipe(
        St.gets(O.fromPredicate((n: number) => n >= 5)),
        St.chainFirst(() => St.modify(n => n + 1)),
      ),
    )

    const [result] = countUp(0)
    expect(result).toStrictEqual(5)
  })
})

describe('chainRec2', () => {
  it('short circuits once product is 100', () => {
    const runTest = ChnRec.chainRec2(IOOChainRec)(0, 0, (a, b) =>
      pipe(
        tuple(a, b),
        IOO.fromPredicate(([a, b]) => a * b < 100),
        IOO.map(([a, b]) => E.left(tuple(a + 1, b + 1))),
      ),
    )

    const result = runTest()

    expect(result).toStrictEqual(O.none)
  })
})

describe('chainRec3', () => {
  it('short circuits once product is 100', () => {
    const runTest = ChnRec.chainRec3(IOOChainRec)(0, 0, 0, (a, b, c) =>
      pipe(
        tuple(a, b, c),
        IOO.fromPredicate(([a, b, c]) => a * b * c < 100),
        IOO.map(([a, b, c]) => E.left(tuple(a + 1, b + 1, c + 1))),
      ),
    )

    const result = runTest()

    expect(result).toStrictEqual(O.none)
  })
})

describe('tailRec2', () => {
  it('should finalize', () => {
    const [a, b] = ChnRec.tailRec2(
      0,
      0,
      flow(
        tuple,
        E.fromPredicate(
          ([a, b]) => a * b >= 100,
          ([a, b]) => tuple(a + 1, b + 1),
        ),
      ),
    )

    expect(a).toStrictEqual(10)
    expect(b).toStrictEqual(10)
  })
})

describe('tailRec3', () => {
  it('should finalize', () => {
    const [a, b, c] = ChnRec.tailRec3(
      0,
      0,
      0,
      flow(
        tuple,
        E.fromPredicate(
          ([a, b, c]) => a * b * c >= 100,
          ([a, b, c]) => tuple(a + 1, b + 1, c + 1),
        ),
      ),
    )

    expect(a).toStrictEqual(5)
    expect(b).toStrictEqual(5)
    expect(c).toStrictEqual(5)
  })
})
