/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type IO } from './IO'

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const log =
  <A>(a: A): IO<void> =>
  () =>
    console.log(a)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const warn =
  <A>(a: A): IO<void> =>
  () =>
    console.warn(a)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const error =
  <A>(a: A): IO<void> =>
  () =>
    console.error(a)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const info =
  <A>(a: A): IO<void> =>
  () =>
    console.info(a)
