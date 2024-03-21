
# Tree







### Instances

* [Applicative](#applicative)
* [Apply](#apply)
* [Chain](#chain)
* [Comonad](#comonad)
* [Foldable](#foldable)
* [Functor](#functor)
* [Monad](#monad)
* [Pointed](#pointed)
* [Traversable](#traversable)
* [getEq](#geteq)
* [getShow](#getshow)

### Constructors

* [make](#make)
* [of](#of)
* [unfoldForest](#unfoldforest)
* [unfoldForestM](#unfoldforestm)
* [unfoldTree](#unfoldtree)
* [unfoldTreeM](#unfoldtreem)

### Do notation

* [Do](#do)
* [apS](#aps)
* [bind](#bind)
* [bindTo](#bindto)

### Extract

* [extract](#extract)

### Folding

* [fold](#fold)
* [foldMap](#foldmap)
* [reduce](#reduce)
* [reduceRight](#reduceright)

### Legacy

* [chain](#chain)

### Mapping

* [flap](#flap)
* [map](#map)

### Model

* [Forest](#forest)
* [Tree](#tree)

### Sequencing

* [flatMap](#flatmap)
* [flatten](#flatten)

### Traversing

* [sequence](#sequence)
* [traverse](#traverse)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [ap](#ap)
* [apFirst](#apfirst)
* [apSecond](#apsecond)
* [chainFirst](#chainfirst)
* [drawForest](#drawforest)
* [drawTree](#drawtree)
* [duplicate](#duplicate)
* [elem](#elem)
* [exists](#exists)
* [extend](#extend)
* [let](#let)
* ~~[tree](#tree)~~ (deprecated)

## Instances


### `Applicative`




#### Signature

```typescript
export declare const Applicative: Applicative1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Apply`




#### Signature

```typescript
export declare const Apply: Apply1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Chain`




#### Signature

```typescript
export declare const Chain: Chain1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad`




#### Signature

```typescript
export declare const Comonad: Comonad1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Foldable`




#### Signature

```typescript
export declare const Foldable: Foldable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor`




#### Signature

```typescript
export declare const Functor: Functor1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad`




#### Signature

```typescript
export declare const Monad: Monad1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Pointed`




#### Signature

```typescript
export declare const Pointed: Pointed1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Traversable`




#### Signature

```typescript
export declare const Traversable: Traversable1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getEq`




#### Signature

```typescript
export declare function getEq<A>(E: Eq<A>): Eq<Tree<A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getShow`




#### Signature

```typescript
export declare function getShow<A>(S: Show<A>): Show<Tree<A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `make`




#### Signature

```typescript
export declare function make<A>(value: A, forest?: Forest<A>): Tree<A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `of`




#### Signature

```typescript
export declare const of: <A>(a: A) => Tree<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unfoldForest`

Build a (possibly infinite) forest from a list of seed values in breadth-first order.




#### Signature

```typescript
export declare function unfoldForest<A, B>(bs: Array<B>, f: (b: B) => [A, Array<B>]): Forest<A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unfoldForestM`

Monadic forest builder, in depth-first order




#### Signature

```typescript
export declare function unfoldForestM<M extends URIS4>(
  M: Monad4<M>,
): <S, R, E, A, B>(bs: Array<B>, f: (b: B) => Kind4<M, S, R, E, [A, Array<B>]>) => Kind4<M, S, R, E, Forest<A>>



export declare function unfoldForestM<M extends URIS3>(
  M: Monad3<M>,
): <R, E, A, B>(bs: Array<B>, f: (b: B) => Kind3<M, R, E, [A, Array<B>]>) => Kind3<M, R, E, Forest<A>>



export declare function unfoldForestM<M extends URIS3, E>(
  M: Monad3C<M, E>,
): <R, A, B>(bs: Array<B>, f: (b: B) => Kind3<M, R, E, [A, Array<B>]>) => Kind3<M, R, E, Forest<A>>



export declare function unfoldForestM<M extends URIS2>(
  M: Monad2<M>,
): <R, E, B>(bs: Array<B>, f: (b: B) => Kind2<M, R, [E, Array<B>]>) => Kind2<M, R, Forest<E>>



export declare function unfoldForestM<M extends URIS2, E>(
  M: Monad2C<M, E>,
): <A, B>(bs: Array<B>, f: (b: B) => Kind2<M, E, [A, Array<B>]>) => Kind2<M, E, Forest<A>>



export declare function unfoldForestM<M extends URIS>(
  M: Monad1<M>,
): <A, B>(bs: Array<B>, f: (b: B) => Kind<M, [A, Array<B>]>) => Kind<M, Forest<A>>



export declare function unfoldForestM<M>(
  M: MonadHKT<M>,
): <A, B>(bs: Array<B>, f: (b: B) => HKT<M, [A, Array<B>]>) => HKT<M, Forest<A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unfoldTree`

Build a (possibly infinite) tree from a seed value in breadth-first order.




#### Signature

```typescript
export declare function unfoldTree<A, B>(b: B, f: (b: B) => [A, Array<B>]): Tree<A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `unfoldTreeM`

Monadic tree builder, in depth-first order




#### Signature

```typescript
export declare function unfoldTreeM<M extends URIS4>(
  M: Monad4<M>,
): <S, R, E, A, B>(b: B, f: (b: B) => Kind4<M, S, R, E, [A, Array<B>]>) => Kind4<M, S, R, E, Tree<A>>



export declare function unfoldTreeM<M extends URIS3>(
  M: Monad3<M>,
): <R, E, A, B>(b: B, f: (b: B) => Kind3<M, R, E, [A, Array<B>]>) => Kind3<M, R, E, Tree<A>>



export declare function unfoldTreeM<M extends URIS3, E>(
  M: Monad3C<M, E>,
): <R, A, B>(b: B, f: (b: B) => Kind3<M, R, E, [A, Array<B>]>) => Kind3<M, R, E, Tree<A>>



export declare function unfoldTreeM<M extends URIS2>(
  M: Monad2<M>,
): <E, A, B>(b: B, f: (b: B) => Kind2<M, E, [A, Array<B>]>) => Kind2<M, E, Tree<A>>



export declare function unfoldTreeM<M extends URIS2, E>(
  M: Monad2C<M, E>,
): <A, B>(b: B, f: (b: B) => Kind2<M, E, [A, Array<B>]>) => Kind2<M, E, Tree<A>>



export declare function unfoldTreeM<M extends URIS>(
  M: Monad1<M>,
): <A, B>(b: B, f: (b: B) => Kind<M, [A, Array<B>]>) => Kind<M, Tree<A>>



export declare function unfoldTreeM<M>(
  M: MonadHKT<M>,
): <A, B>(b: B, f: (b: B) => HKT<M, [A, Array<B>]>) => HKT<M, Tree<A>>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Do notation


### `Do`




#### Signature

```typescript
export declare const Do: Tree<{}>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apS`




#### Signature

```typescript
export declare const apS: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  fb: Tree<B>,
) => (fa: Tree<A>) => Tree<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bind`




#### Signature

```typescript
export declare const bind: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Tree<B>,
) => (ma: Tree<A>) => Tree<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare const bindTo: <N extends string>(name: N) => <A>(fa: Tree<A>) => Tree<{ readonly [K in N]: A }>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Extract


### `extract`




#### Signature

```typescript
export declare const extract: <A>(wa: Tree<A>) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Folding


### `fold`

Fold a tree into a "summary" value in depth-first order.


For each node in the tree, apply `f` to the `value` and the result of applying `f` to each `forest`.


This is also known as the catamorphism on trees.




#### Signature

```typescript
export declare function fold<A, B>(f: (a: A, bs: Array<B>) => B): (tree: Tree<A>) => B

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { fold, make } from '@fp-tx/core/Tree'
import { concatAll } from '@fp-tx/core/Monoid'
import { MonoidSum } from '@fp-tx/core/number'

const t = make(1, [make(2), make(3)])

const sum = concatAll(MonoidSum)

// Sum the values in a tree:
assert.deepStrictEqual(fold((a: number, bs: Array<number>) => a + sum(bs))(t), 6)

// Find the maximum value in the tree:
assert.deepStrictEqual(fold((a: number, bs: Array<number>) => bs.reduce((b, acc) => Math.max(b, acc), a))(t), 3)

// Count the number of leaves in the tree:
assert.deepStrictEqual(fold((_: number, bs: Array<number>) => (bs.length === 0 ? 1 : sum(bs)))(t), 2)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMap`




#### Signature

```typescript
export declare const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Tree<A>) => M
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`




#### Signature

```typescript
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Tree<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`




#### Signature

```typescript
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Tree<A>) => B
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Legacy


### `chain`

Alias of `flatMap`.




#### Signature

```typescript
export declare const chain: <A, B>(f: (a: A) => Tree<B>) => (ma: Tree<A>) => Tree<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Mapping


### `flap`




#### Signature

```typescript
export declare const flap: <A>(a: A) => <B>(fab: Tree<(a: A) => B>) => Tree<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

`map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types use the type constructor `F` to represent some computational context.




#### Signature

```typescript
export declare const map: <A, B>(f: (a: A) => B) => (fa: Tree<A>) => Tree<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Forest`




#### Signature

```typescript
export type Forest<A> = Array<Tree<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Tree`




#### Signature

```typescript
export interface Tree<A> {
  readonly forest: Forest<A>
  readonly value: A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Sequencing


### `flatMap`




#### Signature

```typescript
export declare const flatMap: {
  <A, B>(f: (a: A) => Tree<B>): (ma: Tree<A>) => Tree<B>
  <A, B>(ma: Tree<A>, f: (a: A) => Tree<B>): Tree<B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `flatten`




#### Signature

```typescript
export declare const flatten: <A>(mma: Tree<Tree<A>>) => Tree<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Traversing


### `sequence`




#### Signature

```typescript
export declare const sequence: Traversable1<URI>['sequence']
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `traverse`




#### Signature

```typescript
export declare const traverse: PipeableTraverse1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Type lambdas


### `URI`




#### Signature

```typescript
export type URI = typeof URI
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URI`




#### Signature

```typescript
export declare const URI = 'Tree'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `ap`




#### Signature

```typescript
export declare const ap: <A>(fa: Tree<A>) => <B>(fab: Tree<(a: A) => B>) => Tree<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apFirst`

Combine two effectful actions, keeping only the result of the first.




#### Signature

```typescript
export declare const apFirst: <B>(second: Tree<B>) => <A>(first: Tree<A>) => Tree<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `apSecond`

Combine two effectful actions, keeping only the result of the second.




#### Signature

```typescript
export declare const apSecond: <B>(second: Tree<B>) => <A>(first: Tree<A>) => Tree<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chainFirst`

Composes computations in sequence, using the return value of one computation to determine the next computation and keeping only the result of the first.




#### Signature

```typescript
export declare const chainFirst: <A, B>(f: (a: A) => Tree<B>) => (first: Tree<A>) => Tree<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `drawForest`

Neat 2-dimensional drawing of a forest




#### Signature

```typescript
export declare function drawForest(forest: Forest<string>): string

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `drawTree`

Neat 2-dimensional drawing of a tree




#### Signature

```typescript
export declare function drawTree(tree: Tree<string>): string

```

#### Details

* Added in 1.0.0

#### Example

```typescript
import { make, drawTree } from '@fp-tx/core/Tree'

const fa = make('a', [make('b'), make('c'), make('d', [make('e'), make('f')])])

assert.strictEqual(
  drawTree(fa),
  `a
├─ b
├─ c
└─ d
├─ e
└─ f`,
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `duplicate`




#### Signature

```typescript
export declare const duplicate: <A>(wa: Tree<A>) => Tree<Tree<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `elem`




#### Signature

```typescript
export declare function elem<A>(E: Eq<A>): (a: A, fa: Tree<A>) => boolean

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `exists`




#### Signature

```typescript
export declare const exists: <A>(predicate: Predicate<A>) => (ma: Tree<A>) => boolean
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`




#### Signature

```typescript
export declare const extend: <A, B>(f: (wa: Tree<A>) => B) => (wa: Tree<A>) => Tree<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `let`




#### Signature

```typescript
export declare const let_: <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => (fa: Tree<A>) => Tree<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```




---


### ~~`tree`~~

This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor` instance, pass `T.Functor` instead of `T.tree` (where `T` is from `import T from 'fp-ts/Tree'`)




#### Signature

```typescript
export declare const tree: Monad1<URI> & Foldable1<URI> & Traversable1<URI> & Comonad1<URI>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti