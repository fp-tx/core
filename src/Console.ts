/**
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import { type IO } from './IO'

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const log =
  <A>(a: A): IO<void> =>
  () =>
    console.log(a)

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const warn =
  <A>(a: A): IO<void> =>
  () =>
    console.warn(a)

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const error =
  <A>(a: A): IO<void> =>
  () =>
    console.error(a)

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const info =
  <A>(a: A): IO<void> =>
  () =>
    console.info(a)
