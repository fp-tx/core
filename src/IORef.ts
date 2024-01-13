/**
 * Mutable references in the `IO` monad
 *
 * @since 1.0.0
 */
import { type IO } from './IO'

/**
 * @since 1.0.0
 * @category Model
 * @example
 *   import { flatMap } from 'fp-ts/IO'
 *   import { newIORef } from 'fp-ts/IORef'
 *
 *   assert.strictEqual(flatMap(newIORef(1), ref => flatMap(ref.write(2), () => ref.read))(), 2)
 */
export class IORef<A> {
  /** @since 1.0.0 */
  readonly read: IO<A>
  constructor(private value: A) {
    this.read = () => this.value
    this.write = this.write.bind(this)
    this.modify = this.modify.bind(this)
  }
  /** @since 1.0.0 */
  write(a: A): IO<void> {
    return () => {
      this.value = a
    }
  }
  /** @since 1.0.0 */
  modify(f: (a: A) => A): IO<void> {
    return () => {
      this.value = f(this.value)
    }
  }
}

/**
 * @since 1.0.0
 * @category Constructors
 */
export function newIORef<A>(a: A): IO<IORef<A>> {
  return () => new IORef(a)
}
