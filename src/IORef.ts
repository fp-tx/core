/**
 * Mutable references in the `IO` monad
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type IO } from './IO'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { flatMap } from '@fp-tx/core/IO'
 * import { newIORef } from '@fp-tx/core/IORef'
 *
 * assert.strictEqual(flatMap(newIORef(1), ref => flatMap(ref.write(2), () => ref.read))(), 2)
 * ```
 *
 * @public
 */
export class IORef<A> {
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readonly read: IO<A>
  constructor(private value: A) {
    this.read = () => this.value
    this.write = this.write.bind(this)
    this.modify = this.modify.bind(this)
  }
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  write(a: A): IO<void> {
    return () => {
      this.value = a
    }
  }
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  modify(f: (a: A) => A): IO<void> {
    return () => {
      this.value = f(this.value)
    }
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function newIORef<A>(a: A): IO<IORef<A>> {
  return () => new IORef(a)
}
