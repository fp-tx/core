/**
 * Multi-way trees (aka rose trees) and forests, where a forest is
 *
 * ```ts
 * type Forest<A> = Array<Tree<A>>
 * ```
 *
 * @since 2.0.0
 */
import { type Applicative as ApplicativeHKT, type Applicative1 } from './Applicative'
import { apFirst as apFirst_, type Apply1, apS as apS_, apSecond as apSecond_ } from './Apply'
import * as A from './Array'
import { bind as bind_, type Chain1, chainFirst as chainFirst_ } from './Chain'
import { type Comonad1 } from './Comonad'
import { type Eq, fromEquals } from './Eq'
import { type Extend1 } from './Extend'
import { type Foldable1 } from './Foldable'
import { dual, identity, pipe } from './function'
import { bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import { type HKT, type Kind, type Kind2, type Kind3, type Kind4, type URIS, type URIS2, type URIS3, type URIS4 } from './HKT'
import * as _ from './internal'
import { type Monad as MonadHKT, type Monad1, type Monad2, type Monad2C, type Monad3, type Monad3C, type Monad4 } from './Monad'
import { type Monoid } from './Monoid'
import { type Pointed1 } from './Pointed'
import { type Predicate } from './Predicate'
import { type Show } from './Show'
import { type PipeableTraverse1, type Traversable1 } from './Traversable'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export type Forest<A> = Array<Tree<A>>

/**
 * @since 2.0.0
 * @category Model
 */
export interface Tree<A> {
  readonly value: A
  readonly forest: Forest<A>
}

/**
 * @since 2.0.0
 * @category Constructors
 */
export function make<A>(value: A, forest: Forest<A> = []): Tree<A> {
  return {
    value,
    forest,
  }
}

/**
 * @since 2.0.0
 * @category Instances
 */
export function getShow<A>(S: Show<A>): Show<Tree<A>> {
  const show = (t: Tree<A>): string => {
    return A.isEmpty(t.forest) ?
        `make(${S.show(t.value)})`
      : `make(${S.show(t.value)}, [${t.forest.map(show).join(', ')}])`
  }
  return {
    show,
  }
}

/**
 * @since 2.0.0
 * @category Instances
 */
export function getEq<A>(E: Eq<A>): Eq<Tree<A>> {
  // eslint-disable-next-line prefer-const
  let SA: Eq<Array<Tree<A>>>
  const R: Eq<Tree<A>> = fromEquals((x, y) => E.equals(x.value, y.value) && SA.equals(x.forest, y.forest))
  SA = A.getEq(R)
  return R
}

const draw = (indentation: string, forest: Forest<string>): string => {
  let r = ''
  const len = forest.length
  let tree: Tree<string>
  for (let i = 0; i < len; i++) {
    tree = forest[i]
    const isLast = i === len - 1
    r += indentation + (isLast ? '└' : '├') + '─ ' + tree.value
    r += draw(indentation + (len > 1 && !isLast ? '│  ' : '   '), tree.forest)
  }
  return r
}

/**
 * Neat 2-dimensional drawing of a forest
 *
 * @since 2.0.0
 */
export function drawForest(forest: Forest<string>): string {
  return draw('\n', forest)
}

/**
 * Neat 2-dimensional drawing of a tree
 *
 * @since 2.0.0
 * @example
 *   import { make, drawTree } from 'fp-ts/Tree'
 *
 *   const fa = make('a', [make('b'), make('c'), make('d', [make('e'), make('f')])])
 *
 *   assert.strictEqual(
 *     drawTree(fa),
 *     `a
 *   ├─ b
 *   ├─ c
 *   └─ d
 *      ├─ e
 *      └─ f`,
 *   )
 */
export function drawTree(tree: Tree<string>): string {
  return tree.value + drawForest(tree.forest)
}

/**
 * Build a (possibly infinite) tree from a seed value in breadth-first order.
 *
 * @since 2.0.0
 * @category Constructors
 */
export function unfoldTree<A, B>(b: B, f: (b: B) => [A, Array<B>]): Tree<A> {
  const [a, bs] = f(b)
  return { value: a, forest: unfoldForest(bs, f) }
}

/**
 * Build a (possibly infinite) forest from a list of seed values in breadth-first order.
 *
 * @since 2.0.0
 * @category Constructors
 */
export function unfoldForest<A, B>(bs: Array<B>, f: (b: B) => [A, Array<B>]): Forest<A> {
  return bs.map(b => unfoldTree(b, f))
}

/**
 * Monadic tree builder, in depth-first order
 *
 * @since 2.0.0
 * @category Constructors
 */
export function unfoldTreeM<M extends URIS4>(
  M: Monad4<M>,
): <S, R, E, A, B>(b: B, f: (b: B) => Kind4<M, S, R, E, [A, Array<B>]>) => Kind4<M, S, R, E, Tree<A>>
export function unfoldTreeM<M extends URIS3>(
  M: Monad3<M>,
): <R, E, A, B>(b: B, f: (b: B) => Kind3<M, R, E, [A, Array<B>]>) => Kind3<M, R, E, Tree<A>>
export function unfoldTreeM<M extends URIS3, E>(
  M: Monad3C<M, E>,
): <R, A, B>(b: B, f: (b: B) => Kind3<M, R, E, [A, Array<B>]>) => Kind3<M, R, E, Tree<A>>
export function unfoldTreeM<M extends URIS2>(
  M: Monad2<M>,
): <E, A, B>(b: B, f: (b: B) => Kind2<M, E, [A, Array<B>]>) => Kind2<M, E, Tree<A>>
export function unfoldTreeM<M extends URIS2, E>(
  M: Monad2C<M, E>,
): <A, B>(b: B, f: (b: B) => Kind2<M, E, [A, Array<B>]>) => Kind2<M, E, Tree<A>>
export function unfoldTreeM<M extends URIS>(
  M: Monad1<M>,
): <A, B>(b: B, f: (b: B) => Kind<M, [A, Array<B>]>) => Kind<M, Tree<A>>
export function unfoldTreeM<M>(M: MonadHKT<M>): <A, B>(b: B, f: (b: B) => HKT<M, [A, Array<B>]>) => HKT<M, Tree<A>>
export function unfoldTreeM<M>(M: MonadHKT<M>): <A, B>(b: B, f: (b: B) => HKT<M, [A, Array<B>]>) => HKT<M, Tree<A>> {
  const unfoldForestMM = unfoldForestM(M)
  return (b, f) => M.chain(f(b), ([a, bs]) => M.map(unfoldForestMM(bs, f), ts => ({ value: a, forest: ts })))
}

/**
 * Monadic forest builder, in depth-first order
 *
 * @since 2.0.0
 * @category Constructors
 */
export function unfoldForestM<M extends URIS4>(
  M: Monad4<M>,
): <S, R, E, A, B>(bs: Array<B>, f: (b: B) => Kind4<M, S, R, E, [A, Array<B>]>) => Kind4<M, S, R, E, Forest<A>>
export function unfoldForestM<M extends URIS3>(
  M: Monad3<M>,
): <R, E, A, B>(bs: Array<B>, f: (b: B) => Kind3<M, R, E, [A, Array<B>]>) => Kind3<M, R, E, Forest<A>>
export function unfoldForestM<M extends URIS3, E>(
  M: Monad3C<M, E>,
): <R, A, B>(bs: Array<B>, f: (b: B) => Kind3<M, R, E, [A, Array<B>]>) => Kind3<M, R, E, Forest<A>>
export function unfoldForestM<M extends URIS2>(
  M: Monad2<M>,
): <R, E, B>(bs: Array<B>, f: (b: B) => Kind2<M, R, [E, Array<B>]>) => Kind2<M, R, Forest<E>>
export function unfoldForestM<M extends URIS2, E>(
  M: Monad2C<M, E>,
): <A, B>(bs: Array<B>, f: (b: B) => Kind2<M, E, [A, Array<B>]>) => Kind2<M, E, Forest<A>>
export function unfoldForestM<M extends URIS>(
  M: Monad1<M>,
): <A, B>(bs: Array<B>, f: (b: B) => Kind<M, [A, Array<B>]>) => Kind<M, Forest<A>>
export function unfoldForestM<M>(
  M: MonadHKT<M>,
): <A, B>(bs: Array<B>, f: (b: B) => HKT<M, [A, Array<B>]>) => HKT<M, Forest<A>>
export function unfoldForestM<M>(
  M: MonadHKT<M>,
): <A, B>(bs: Array<B>, f: (b: B) => HKT<M, [A, Array<B>]>) => HKT<M, Forest<A>> {
  const traverseM = A.traverse(M)
  return (bs, f) =>
    pipe(
      bs,
      traverseM(b => unfoldTreeM(M)(b, f)),
    )
}

/**
 * Fold a tree into a "summary" value in depth-first order.
 *
 * For each node in the tree, apply `f` to the `value` and the result of applying `f` to each `forest`.
 *
 * This is also known as the catamorphism on trees.
 *
 * @since 2.6.0
 * @category Folding
 * @example
 *   import { fold, make } from 'fp-ts/Tree'
 *   import { concatAll } from 'fp-ts/Monoid'
 *   import { MonoidSum } from 'fp-ts/number'
 *
 *   const t = make(1, [make(2), make(3)])
 *
 *   const sum = concatAll(MonoidSum)
 *
 *   // Sum the values in a tree:
 *   assert.deepStrictEqual(fold((a: number, bs: Array<number>) => a + sum(bs))(t), 6)
 *
 *   // Find the maximum value in the tree:
 *   assert.deepStrictEqual(fold((a: number, bs: Array<number>) => bs.reduce((b, acc) => Math.max(b, acc), a))(t), 3)
 *
 *   // Count the number of leaves in the tree:
 *   assert.deepStrictEqual(fold((_: number, bs: Array<number>) => (bs.length === 0 ? 1 : sum(bs)))(t), 2)
 */
export function fold<A, B>(f: (a: A, bs: Array<B>) => B): (tree: Tree<A>) => B {
  const go = (tree: Tree<A>): B => f(tree.value, tree.forest.map(go))
  return go
}

/* istanbul ignore next */
const _map: Monad1<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _ap: Monad1<URI>['ap'] = (fab, fa) => flatMap(fab, f => pipe(fa, map(f)))
/* istanbul ignore next */
const _reduce = <A, B>(fa: Tree<A>, b: B, f: (b: B, a: A) => B): B => pipe(fa, reduce(b, f))
/* istanbul ignore next */
const _foldMap: Foldable1<URI>['foldMap'] = M => {
  const foldMapM = foldMap(M)
  return (fa, f) => pipe(fa, foldMapM(f))
}
/* istanbul ignore next */
const _reduceRight = <A, B>(fa: Tree<A>, b: B, f: (a: A, b: B) => B): B => pipe(fa, reduceRight(b, f))
/* istanbul ignore next */
const _extend: Extend1<URI>['extend'] = (wa, f) => pipe(wa, extend(f))
/* istanbul ignore next */
const _traverse = <F>(F: ApplicativeHKT<F>): (<A, B>(ta: Tree<A>, f: (a: A) => HKT<F, B>) => HKT<F, Tree<B>>) => {
  const traverseF = traverse(F)
  return (ta, f) => pipe(ta, traverseF(f))
}

/** @since 2.0.0 */
export const ap: <A>(fa: Tree<A>) => <B>(fab: Tree<(a: A) => B>) => Tree<B> = fa => fab => _ap(fab, fa)

/**
 * @since 2.14.0
 * @category Sequencing
 */
export const flatMap: {
  <A, B>(f: (a: A) => Tree<B>): (ma: Tree<A>) => Tree<B>
  <A, B>(ma: Tree<A>, f: (a: A) => Tree<B>): Tree<B>
} = /*#__PURE__*/ dual(2, <A, B>(ma: Tree<A>, f: (a: A) => Tree<B>): Tree<B> => {
  const { value, forest } = f(ma.value)
  const concat = A.getMonoid<Tree<B>>().concat
  return {
    value,
    forest: concat(forest, ma.forest.map(flatMap(f))),
  }
})

/** @since 2.0.0 */
export const extend: <A, B>(f: (wa: Tree<A>) => B) => (wa: Tree<A>) => Tree<B> = f => wa => ({
  value: f(wa),
  forest: wa.forest.map(extend(f)),
})

/** @since 2.0.0 */
export const duplicate: <A>(wa: Tree<A>) => Tree<Tree<A>> = /*#__PURE__*/ extend(identity)

/**
 * @since 2.0.0
 * @category Sequencing
 */
export const flatten: <A>(mma: Tree<Tree<A>>) => Tree<A> = /*#__PURE__*/ flatMap(identity)

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const map: <A, B>(f: (a: A) => B) => (fa: Tree<A>) => Tree<B> = f => fa => ({
  value: f(fa.value),
  forest: fa.forest.map(map(f)),
})

/**
 * @since 2.0.0
 * @category Folding
 */
export const reduce =
  <A, B>(b: B, f: (b: B, a: A) => B) =>
  (fa: Tree<A>): B => {
    let r: B = f(b, fa.value)
    const len = fa.forest.length
    for (let i = 0; i < len; i++) {
      r = pipe(fa.forest[i], reduce(r, f))
    }
    return r
  }

/**
 * @since 2.0.0
 * @category Folding
 */
export const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Tree<A>) => M = M => f =>
  reduce(M.empty, (acc, a) => M.concat(acc, f(a)))

/**
 * @since 2.0.0
 * @category Folding
 */
export const reduceRight =
  <A, B>(b: B, f: (a: A, b: B) => B) =>
  (fa: Tree<A>): B => {
    let r: B = b
    const len = fa.forest.length
    for (let i = len - 1; i >= 0; i--) {
      r = pipe(fa.forest[i], reduceRight(r, f))
    }
    return f(fa.value, r)
  }

/**
 * @since 2.6.2
 * @category Extract
 */
export const extract: <A>(wa: Tree<A>) => A = wa => wa.value

/**
 * @since 2.6.3
 * @category Traversing
 */
export const traverse: PipeableTraverse1<URI> = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(f: (a: A) => HKT<F, B>) => (ta: Tree<A>) => HKT<F, Tree<B>>) => {
  const traverseF = A.traverse(F)
  const out =
    <A, B>(f: (a: A) => HKT<F, B>) =>
    (ta: Tree<A>): HKT<F, Tree<B>> =>
      F.ap(
        F.map(f(ta.value), (value: B) => (forest: Forest<B>) => ({
          value,
          forest,
        })),
        pipe(ta.forest, traverseF(out(f))),
      )
  return out
}

/**
 * @since 2.6.3
 * @category Traversing
 */
export const sequence: Traversable1<URI>['sequence'] = <F>(
  F: ApplicativeHKT<F>,
): (<A>(ta: Tree<HKT<F, A>>) => HKT<F, Tree<A>>) => traverse(F)(identity)

/**
 * @since 2.7.0
 * @category Constructors
 */
export const of: <A>(a: A) => Tree<A> = a => make(a)

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export const URI = 'Tree'

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: Tree<A>
  }
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Functor: Functor1<URI> = {
  URI,
  map: _map,
}

/**
 * @since 2.10.0
 * @category Mapping
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @since 2.10.0
 * @category Instances
 */
export const Pointed: Pointed1<URI> = {
  URI,
  of,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Apply: Apply1<URI> = {
  URI,
  map: _map,
  ap: _ap,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @since 2.0.0
 */
export const apFirst = /*#__PURE__*/ apFirst_(Apply)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @since 2.0.0
 */
export const apSecond = /*#__PURE__*/ apSecond_(Apply)

/**
 * @since 2.7.0
 * @category Instances
 */
export const Applicative: Applicative1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Chain: Chain1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Monad: Monad1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
}

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.0.0
 */
export const chainFirst: <A, B>(f: (a: A) => Tree<B>) => (first: Tree<A>) => Tree<A> = /*#__PURE__*/ chainFirst_(Chain)

/**
 * @since 2.7.0
 * @category Instances
 */
export const Foldable: Foldable1<URI> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Traversable: Traversable1<URI> = {
  URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Comonad: Comonad1<URI> = {
  URI,
  map: _map,
  extend: _extend,
  extract,
}

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 * @category Do notation
 */
export const Do: Tree<{}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @since 2.8.0
 * @category Do notation
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @since 2.13.0
   * @category Do notation
   */
  let_ as let,
}

/**
 * @since 2.8.0
 * @category Do notation
 */
export const bind = /*#__PURE__*/ bind_(Chain)

/**
 * @since 2.8.0
 * @category Do notation
 */
export const apS = /*#__PURE__*/ apS_(Apply)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/** @since 2.0.0 */
export function elem<A>(E: Eq<A>): (a: A, fa: Tree<A>) => boolean {
  const go = (a: A, fa: Tree<A>): boolean => E.equals(a, fa.value) || fa.forest.some(tree => go(a, tree))
  return go
}

/** @since 2.11.0 */
export const exists =
  <A>(predicate: Predicate<A>) =>
  (ma: Tree<A>): boolean =>
    predicate(ma.value) || ma.forest.some(exists(predicate))

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @since 2.0.0
 * @category Legacy
 */
export const chain: <A, B>(f: (a: A) => Tree<B>) => (ma: Tree<A>) => Tree<B> = flatMap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `T.Functor` instead of `T.tree` (where `T` is from `import T from 'fp-ts/Tree'`)
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const tree: Monad1<URI> & Foldable1<URI> & Traversable1<URI> & Comonad1<URI> = {
  URI,
  map: _map,
  of,
  ap: _ap,
  chain: flatMap,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
  extract,
  extend: _extend,
}
