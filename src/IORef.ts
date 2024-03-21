/**
 * Mutable references in the `IO` monad
 *
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import { type IO } from './IO'

/**
 * @example
 *
 * ```typescript
 * import { flatMap } from '@fp-tx/core/IO'
 * import { newIORef } from '@fp-tx/core/IORef'
 *
 * assert.strictEqual(flatMap(newIORef(1), ref => flatMap(ref.write(2), () => ref.read))(), 2)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export class IORef<A> {
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readonly read: IO<A>
  constructor(private value: A) {
    this.read = () => this.value
    this.write = this.write.bind(this)
    this.modify = this.modify.bind(this)
  }
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  write(a: A): IO<void> {
    return () => {
      this.value = a
    }
  }
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  modify(f: (a: A) => A): IO<void> {
    return () => {
      this.value = f(this.value)
    }
  }
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function newIORef<A>(a: A): IO<IORef<A>> {
  return () => new IORef(a)
}
