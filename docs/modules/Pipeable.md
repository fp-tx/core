
# Pipeable







### Pipeable helper

* [alt](#alt)
* [ap](#ap)
* [bimap](#bimap)
* [chain](#chain)
* [compose](#compose)
* [contramap](#contramap)
* [extend](#extend)
* [filter](#filter)
* [filterMap](#filtermap)
* [filterMapWithIndex](#filtermapwithindex)
* [filterWithIndex](#filterwithindex)
* [foldMap](#foldmap)
* [foldMapWithIndex](#foldmapwithindex)
* [map](#map)
* [mapLeft](#mapleft)
* [mapWithIndex](#mapwithindex)
* [partition](#partition)
* [partitionMap](#partitionmap)
* [partitionMapWithIndex](#partitionmapwithindex)
* [partitionWithIndex](#partitionwithindex)
* [promap](#promap)
* [reduce](#reduce)
* [reduceRight](#reduceright)
* [reduceRightWithIndex](#reducerightwithindex)
* [reduceWithIndex](#reducewithindex)

### Utilities

* ~~[PipeableAlt](#pipeablealt)~~ (deprecated)
* ~~[PipeableAlt1](#pipeablealt1)~~ (deprecated)
* ~~[PipeableAlt2](#pipeablealt2)~~ (deprecated)
* ~~[PipeableAlt2C](#pipeablealt2c)~~ (deprecated)
* ~~[PipeableAlt3](#pipeablealt3)~~ (deprecated)
* ~~[PipeableAlt3C](#pipeablealt3c)~~ (deprecated)
* ~~[PipeableAlt4](#pipeablealt4)~~ (deprecated)
* ~~[PipeableApply](#pipeableapply)~~ (deprecated)
* ~~[PipeableApply1](#pipeableapply1)~~ (deprecated)
* ~~[PipeableApply2](#pipeableapply2)~~ (deprecated)
* ~~[PipeableApply2C](#pipeableapply2c)~~ (deprecated)
* ~~[PipeableApply3](#pipeableapply3)~~ (deprecated)
* ~~[PipeableApply3C](#pipeableapply3c)~~ (deprecated)
* ~~[PipeableApply4](#pipeableapply4)~~ (deprecated)
* ~~[PipeableBifunctor](#pipeablebifunctor)~~ (deprecated)
* ~~[PipeableBifunctor2](#pipeablebifunctor2)~~ (deprecated)
* ~~[PipeableBifunctor3](#pipeablebifunctor3)~~ (deprecated)
* ~~[PipeableBifunctor3C](#pipeablebifunctor3c)~~ (deprecated)
* ~~[PipeableBifunctor4](#pipeablebifunctor4)~~ (deprecated)
* ~~[PipeableChain](#pipeablechain)~~ (deprecated)
* ~~[PipeableChain1](#pipeablechain1)~~ (deprecated)
* ~~[PipeableChain2](#pipeablechain2)~~ (deprecated)
* ~~[PipeableChain2C](#pipeablechain2c)~~ (deprecated)
* ~~[PipeableChain3](#pipeablechain3)~~ (deprecated)
* ~~[PipeableChain3C](#pipeablechain3c)~~ (deprecated)
* ~~[PipeableChain4](#pipeablechain4)~~ (deprecated)
* ~~[PipeableCompactable](#pipeablecompactable)~~ (deprecated)
* ~~[PipeableCompactable1](#pipeablecompactable1)~~ (deprecated)
* ~~[PipeableCompactable2](#pipeablecompactable2)~~ (deprecated)
* ~~[PipeableCompactable2C](#pipeablecompactable2c)~~ (deprecated)
* ~~[PipeableCompactable3](#pipeablecompactable3)~~ (deprecated)
* ~~[PipeableCompactable3C](#pipeablecompactable3c)~~ (deprecated)
* ~~[PipeableCompactable4](#pipeablecompactable4)~~ (deprecated)
* ~~[PipeableContravariant](#pipeablecontravariant)~~ (deprecated)
* ~~[PipeableContravariant1](#pipeablecontravariant1)~~ (deprecated)
* ~~[PipeableContravariant2](#pipeablecontravariant2)~~ (deprecated)
* ~~[PipeableContravariant2C](#pipeablecontravariant2c)~~ (deprecated)
* ~~[PipeableContravariant3](#pipeablecontravariant3)~~ (deprecated)
* ~~[PipeableContravariant3C](#pipeablecontravariant3c)~~ (deprecated)
* ~~[PipeableContravariant4](#pipeablecontravariant4)~~ (deprecated)
* ~~[PipeableExtend](#pipeableextend)~~ (deprecated)
* ~~[PipeableExtend1](#pipeableextend1)~~ (deprecated)
* ~~[PipeableExtend2](#pipeableextend2)~~ (deprecated)
* ~~[PipeableExtend2C](#pipeableextend2c)~~ (deprecated)
* ~~[PipeableExtend3](#pipeableextend3)~~ (deprecated)
* ~~[PipeableExtend3C](#pipeableextend3c)~~ (deprecated)
* ~~[PipeableExtend4](#pipeableextend4)~~ (deprecated)
* ~~[PipeableFilterable](#pipeablefilterable)~~ (deprecated)
* ~~[PipeableFilterable1](#pipeablefilterable1)~~ (deprecated)
* ~~[PipeableFilterable2](#pipeablefilterable2)~~ (deprecated)
* ~~[PipeableFilterable2C](#pipeablefilterable2c)~~ (deprecated)
* ~~[PipeableFilterable3](#pipeablefilterable3)~~ (deprecated)
* ~~[PipeableFilterable3C](#pipeablefilterable3c)~~ (deprecated)
* ~~[PipeableFilterable4](#pipeablefilterable4)~~ (deprecated)
* ~~[PipeableFilterableWithIndex](#pipeablefilterablewithindex)~~ (deprecated)
* ~~[PipeableFilterableWithIndex1](#pipeablefilterablewithindex1)~~ (deprecated)
* ~~[PipeableFilterableWithIndex2](#pipeablefilterablewithindex2)~~ (deprecated)
* ~~[PipeableFilterableWithIndex2C](#pipeablefilterablewithindex2c)~~ (deprecated)
* ~~[PipeableFilterableWithIndex3](#pipeablefilterablewithindex3)~~ (deprecated)
* ~~[PipeableFilterableWithIndex3C](#pipeablefilterablewithindex3c)~~ (deprecated)
* ~~[PipeableFilterableWithIndex4](#pipeablefilterablewithindex4)~~ (deprecated)
* ~~[PipeableFoldable](#pipeablefoldable)~~ (deprecated)
* ~~[PipeableFoldable1](#pipeablefoldable1)~~ (deprecated)
* ~~[PipeableFoldable2](#pipeablefoldable2)~~ (deprecated)
* ~~[PipeableFoldable2C](#pipeablefoldable2c)~~ (deprecated)
* ~~[PipeableFoldable3](#pipeablefoldable3)~~ (deprecated)
* ~~[PipeableFoldable3C](#pipeablefoldable3c)~~ (deprecated)
* ~~[PipeableFoldable4](#pipeablefoldable4)~~ (deprecated)
* ~~[PipeableFoldableWithIndex](#pipeablefoldablewithindex)~~ (deprecated)
* ~~[PipeableFoldableWithIndex1](#pipeablefoldablewithindex1)~~ (deprecated)
* ~~[PipeableFoldableWithIndex2](#pipeablefoldablewithindex2)~~ (deprecated)
* ~~[PipeableFoldableWithIndex2C](#pipeablefoldablewithindex2c)~~ (deprecated)
* ~~[PipeableFoldableWithIndex3](#pipeablefoldablewithindex3)~~ (deprecated)
* ~~[PipeableFoldableWithIndex3C](#pipeablefoldablewithindex3c)~~ (deprecated)
* ~~[PipeableFoldableWithIndex4](#pipeablefoldablewithindex4)~~ (deprecated)
* ~~[PipeableFunctor](#pipeablefunctor)~~ (deprecated)
* ~~[PipeableFunctor1](#pipeablefunctor1)~~ (deprecated)
* ~~[PipeableFunctor2](#pipeablefunctor2)~~ (deprecated)
* ~~[PipeableFunctor2C](#pipeablefunctor2c)~~ (deprecated)
* ~~[PipeableFunctor3](#pipeablefunctor3)~~ (deprecated)
* ~~[PipeableFunctor3C](#pipeablefunctor3c)~~ (deprecated)
* ~~[PipeableFunctor4](#pipeablefunctor4)~~ (deprecated)
* ~~[PipeableFunctorWithIndex](#pipeablefunctorwithindex)~~ (deprecated)
* ~~[PipeableFunctorWithIndex1](#pipeablefunctorwithindex1)~~ (deprecated)
* ~~[PipeableFunctorWithIndex2](#pipeablefunctorwithindex2)~~ (deprecated)
* ~~[PipeableFunctorWithIndex2C](#pipeablefunctorwithindex2c)~~ (deprecated)
* ~~[PipeableFunctorWithIndex3](#pipeablefunctorwithindex3)~~ (deprecated)
* ~~[PipeableFunctorWithIndex3C](#pipeablefunctorwithindex3c)~~ (deprecated)
* ~~[PipeableFunctorWithIndex4](#pipeablefunctorwithindex4)~~ (deprecated)
* ~~[PipeableMonadThrow](#pipeablemonadthrow)~~ (deprecated)
* ~~[PipeableMonadThrow1](#pipeablemonadthrow1)~~ (deprecated)
* ~~[PipeableMonadThrow2](#pipeablemonadthrow2)~~ (deprecated)
* ~~[PipeableMonadThrow2C](#pipeablemonadthrow2c)~~ (deprecated)
* ~~[PipeableMonadThrow3](#pipeablemonadthrow3)~~ (deprecated)
* ~~[PipeableMonadThrow3C](#pipeablemonadthrow3c)~~ (deprecated)
* ~~[PipeableMonadThrow4](#pipeablemonadthrow4)~~ (deprecated)
* ~~[PipeableProfunctor](#pipeableprofunctor)~~ (deprecated)
* ~~[PipeableProfunctor2](#pipeableprofunctor2)~~ (deprecated)
* ~~[PipeableProfunctor2C](#pipeableprofunctor2c)~~ (deprecated)
* ~~[PipeableProfunctor3](#pipeableprofunctor3)~~ (deprecated)
* ~~[PipeableProfunctor3C](#pipeableprofunctor3c)~~ (deprecated)
* ~~[PipeableProfunctor4](#pipeableprofunctor4)~~ (deprecated)
* ~~[PipeableSemigroupoid](#pipeablesemigroupoid)~~ (deprecated)
* ~~[PipeableSemigroupoid2](#pipeablesemigroupoid2)~~ (deprecated)
* ~~[PipeableSemigroupoid2C](#pipeablesemigroupoid2c)~~ (deprecated)
* ~~[PipeableSemigroupoid3](#pipeablesemigroupoid3)~~ (deprecated)
* ~~[PipeableSemigroupoid3C](#pipeablesemigroupoid3c)~~ (deprecated)
* ~~[PipeableSemigroupoid4](#pipeablesemigroupoid4)~~ (deprecated)
* ~~[pipe](#pipe)~~ (deprecated)
* ~~[pipeable](#pipeable)~~ (deprecated)

## Pipeable helper


### `alt`

Returns a pipeable `alt`




#### Signature

```typescript
export declare function alt<F extends URIS4>(
  F: Alt4<F>,
): <S, R, E, A>(that: LazyArg<Kind4<F, S, R, E, A>>) => (fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>



export declare function alt<F extends URIS3>(
  F: Alt3<F>,
): <R, E, A>(that: LazyArg<Kind3<F, R, E, A>>) => (fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>



export declare function alt<F extends URIS3, E>(
  F: Alt3C<F, E>,
): <R, A>(that: LazyArg<Kind3<F, R, E, A>>) => (fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>



export declare function alt<F extends URIS2>(
  F: Alt2<F>,
): <E, A>(that: LazyArg<Kind2<F, E, A>>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>



export declare function alt<F extends URIS2, E>(
  F: Alt2C<F, E>,
): <A>(that: LazyArg<Kind2<F, E, A>>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>



export declare function alt<F extends URIS>(
  F: Alt1<F>,
): <A>(that: LazyArg<Kind<F, A>>) => (fa: Kind<F, A>) => Kind<F, A>



export declare function alt<F>(F: Alt<F>): <A>(that: LazyArg<HKT<F, A>>) => (fa: HKT<F, A>) => HKT<F, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `ap`

Returns a pipeable `ap`




#### Signature

```typescript
export declare function ap<F extends URIS4>(
  F: Apply4<F>,
): <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => <B>(fab: Kind4<F, S, R, E, (a: A) => B>) => Kind4<F, S, R, E, B>



export declare function ap<F extends URIS3>(
  F: Apply3<F>,
): <R, E, A>(fa: Kind3<F, R, E, A>) => <B>(fab: Kind3<F, R, E, (a: A) => B>) => Kind3<F, R, E, B>



export declare function ap<F extends URIS3, E>(
  F: Apply3C<F, E>,
): <R, A>(fa: Kind3<F, R, E, A>) => <B>(fab: Kind3<F, R, E, (a: A) => B>) => Kind3<F, R, E, B>



export declare function ap<F extends URIS2>(
  F: Apply2<F>,
): <E, A>(fa: Kind2<F, E, A>) => <B>(fab: Kind2<F, E, (a: A) => B>) => Kind2<F, E, B>



export declare function ap<F extends URIS2, E>(
  F: Apply2C<F, E>,
): <A>(fa: Kind2<F, E, A>) => <B>(fab: Kind2<F, E, (a: A) => B>) => Kind2<F, E, B>



export declare function ap<F extends URIS>(
  F: Apply1<F>,
): <A>(fa: Kind<F, A>) => <B>(fab: Kind<F, (a: A) => B>) => Kind<F, B>



export declare function ap<F>(F: Apply<F>): <A>(fa: HKT<F, A>) => <B>(fab: HKT<F, (a: A) => B>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bimap`

Returns a pipeable `bimap`




#### Signature

```typescript
export declare function bimap<F extends URIS4>(
  F: Bifunctor4<F>,
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => <S, R>(fea: Kind4<F, S, R, E, A>) => Kind4<F, S, R, G, B>



export declare function bimap<F extends URIS3>(
  F: Bifunctor3<F>,
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => <R>(fea: Kind3<F, R, E, A>) => Kind3<F, R, G, B>



export declare function bimap<F extends URIS3, E>(
  F: Bifunctor3C<F, E>,
): <G, A, B>(f: (e: E) => G, g: (a: A) => B) => <R>(fea: Kind3<F, R, E, A>) => Kind3<F, R, G, B>



export declare function bimap<F extends URIS2>(
  F: Bifunctor2<F>,
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: Kind2<F, E, A>) => Kind2<F, G, B>



export declare function bimap<F extends URIS2, E>(
  F: Bifunctor2C<F, E>,
): <G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: Kind2<F, E, A>) => Kind2<F, G, B>



export declare function bimap<F>(
  F: Bifunctor<F>,
): <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fea: HKT2<F, E, A>) => HKT2<F, G, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `chain`

Returns a pipeable `chain`




#### Signature

```typescript
export declare function chain<F extends URIS4>(
  F: Chain4<F>,
): <A, S, R, E, B>(f: (a: A) => Kind4<F, S, R, E, B>) => (fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>



export declare function chain<F extends URIS3>(
  F: Chain3<F>,
): <A, R, E, B>(f: (a: A) => Kind3<F, R, E, B>) => (fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function chain<F extends URIS3, E>(
  F: Chain3C<F, E>,
): <A, R, B>(f: (a: A) => Kind3<F, R, E, B>) => (fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function chain<F extends URIS2>(
  F: Chain2<F>,
): <A, E, B>(f: (a: A) => Kind2<F, E, B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function chain<F extends URIS2, E>(
  F: Chain2C<F, E>,
): <A, B>(f: (a: A) => Kind2<F, E, B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function chain<F extends URIS>(
  F: Chain1<F>,
): <A, B>(f: (a: A) => Kind<F, B>) => (fa: Kind<F, A>) => Kind<F, B>



export declare function chain<F>(F: Chain<F>): <A, B>(f: (a: A) => HKT<F, B>) => (fa: HKT<F, A>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `compose`

Returns a pipeable `compose`




#### Signature

```typescript
export declare function compose<F extends URIS4>(
  F: Semigroupoid4<F>,
): <S, R, E, A>(ea: Kind4<F, S, R, E, A>) => <B>(ab: Kind4<F, S, R, A, B>) => Kind4<F, S, R, E, B>



export declare function compose<F extends URIS3>(
  F: Semigroupoid3<F>,
): <R, E, A>(ea: Kind3<F, R, E, A>) => <B>(ab: Kind3<F, R, A, B>) => Kind3<F, R, E, B>



export declare function compose<F extends URIS3, E>(
  F: Semigroupoid3C<F, E>,
): <R, A>(ea: Kind3<F, R, E, A>) => <B>(ab: Kind3<F, R, A, B>) => Kind3<F, R, E, B>



export declare function compose<F extends URIS2>(
  F: Semigroupoid2<F>,
): <E, A>(ea: Kind2<F, E, A>) => <B>(ab: Kind2<F, A, B>) => Kind2<F, E, B>



export declare function compose<F extends URIS2, E>(
  F: Semigroupoid2C<F, E>,
): <A>(ea: Kind2<F, E, A>) => <B>(ab: Kind2<F, A, B>) => Kind2<F, E, B>



export declare function compose<F>(
  F: Semigroupoid<F>,
): <E, A>(ea: HKT2<F, E, A>) => <B>(ab: HKT2<F, A, B>) => HKT2<F, E, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `contramap`

Returns a pipeable `contramap`




#### Signature

```typescript
export declare function contramap<F extends URIS4>(
  F: Contravariant4<F>,
): <A, B>(f: (b: B) => A) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>



export declare function contramap<F extends URIS3>(
  F: Contravariant3<F>,
): <A, B>(f: (b: B) => A) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function contramap<F extends URIS3, E>(
  F: Contravariant3C<F, E>,
): <A, B>(f: (b: B) => A) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function contramap<F extends URIS2>(
  F: Contravariant2<F>,
): <A, B>(f: (b: B) => A) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function contramap<F extends URIS2, E>(
  F: Contravariant2C<F, E>,
): <A, B>(f: (b: B) => A) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function contramap<F extends URIS>(
  F: Contravariant1<F>,
): <A, B>(f: (b: B) => A) => (fa: Kind<F, A>) => Kind<F, B>



export declare function contramap<F>(F: Contravariant<F>): <A, B>(f: (b: B) => A) => (fa: HKT<F, A>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `extend`

Returns a pipeable `extend`




#### Signature

```typescript
export declare function extend<F extends URIS4>(
  F: Extend4<F>,
): <S, R, E, A, B>(f: (wa: Kind4<F, S, R, E, A>) => B) => (wa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>



export declare function extend<F extends URIS3>(
  F: Extend3<F>,
): <R, E, A, B>(f: (wa: Kind3<F, R, E, A>) => B) => (wa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function extend<F extends URIS3, E>(
  F: Extend3C<F, E>,
): <R, A, B>(f: (wa: Kind3<F, R, E, A>) => B) => (wa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function extend<F extends URIS2>(
  F: Extend2<F>,
): <E, A, B>(f: (wa: Kind2<F, E, A>) => B) => (wa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function extend<F extends URIS2, E>(
  F: Extend2C<F, E>,
): <A, B>(f: (wa: Kind2<F, E, A>) => B) => (wa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function extend<F extends URIS>(
  F: Extend1<F>,
): <A, B>(f: (wa: Kind<F, A>) => B) => (wa: Kind<F, A>) => Kind<F, B>



export declare function extend<F>(F: Extend<F>): <A, B>(f: (wa: HKT<F, A>) => B) => (wa: HKT<F, A>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filter`

Returns a pipeable `filter`




#### Signature

```typescript
export declare function filter<F extends URIS4>(
  F: Filterable4<F>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
  <A>(predicate: Predicate<A>): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}



export declare function filter<F extends URIS3>(
  F: Filterable3<F>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
  <A>(predicate: Predicate<A>): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}



export declare function filter<F extends URIS3, E>(
  F: Filterable3C<F, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
  <A>(predicate: Predicate<A>): <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}



export declare function filter<F extends URIS2>(
  F: Filterable2<F>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
  <A>(predicate: Predicate<A>): <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
}



export declare function filter<F extends URIS2, E>(
  F: Filterable2C<F, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Kind2<F, E, A>) => Kind2<F, E, B>
  <A>(predicate: Predicate<A>): (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}



export declare function filter<F extends URIS>(
  F: Filterable1<F>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Kind<F, A>) => Kind<F, B>
  <A>(predicate: Predicate<A>): (fa: Kind<F, A>) => Kind<F, A>
}



export declare function filter<F>(F: Filterable<F>): {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: HKT<F, A>) => HKT<F, B>
  <A>(predicate: Predicate<A>): (fa: HKT<F, A>) => HKT<F, A>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMap`

Returns a pipeable `filterMap`




#### Signature

```typescript
export declare function filterMap<F extends URIS4>(
  F: Filterable4<F>,
): <A, B>(f: (a: A) => Option<B>) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>



export declare function filterMap<F extends URIS3>(
  F: Filterable3<F>,
): <A, B>(f: (a: A) => Option<B>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function filterMap<F extends URIS3, E>(
  F: Filterable3C<F, E>,
): <A, B>(f: (a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function filterMap<F extends URIS2>(
  F: Filterable2<F>,
): <A, B>(f: (a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function filterMap<F extends URIS2, E>(
  F: Filterable2C<F, E>,
): <A, B>(f: (a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function filterMap<F extends URIS>(
  F: Filterable1<F>,
): <A, B>(f: (a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, B>



export declare function filterMap<F>(F: Filterable<F>): <A, B>(f: (a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterMapWithIndex`

Returns a pipeable `filterMapWithIndex`




#### Signature

```typescript
export declare function filterMapWithIndex<F extends URIS4, I>(
  F: FilterableWithIndex4<F, I>,
): <A, B>(f: (i: I, a: A) => Option<B>) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>



export declare function filterMapWithIndex<F extends URIS3, I>(
  F: FilterableWithIndex3<F, I>,
): <A, B>(f: (i: I, a: A) => Option<B>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function filterMapWithIndex<F extends URIS3, I, E>(
  F: FilterableWithIndex3C<F, I, E>,
): <A, B>(f: (i: I, a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function filterMapWithIndex<F extends URIS2, I>(
  F: FilterableWithIndex2<F, I>,
): <A, B>(f: (i: I, a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function filterMapWithIndex<F extends URIS2, I, E>(
  F: FilterableWithIndex2C<F, I, E>,
): <A, B>(f: (i: I, a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function filterMapWithIndex<F extends URIS, I>(
  F: FilterableWithIndex1<F, I>,
): <A, B>(f: (i: I, a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, B>



export declare function filterMapWithIndex<F, I>(
  F: FilterableWithIndex<F, I>,
): <A, B>(f: (i: I, a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `filterWithIndex`

Returns a pipeable `filterWithIndex`




#### Signature

```typescript
export declare function filterWithIndex<F extends URIS4, I>(
  F: FilterableWithIndex4<F, I>,
): {
  <A, B extends A>(
    refinement: RefinementWithIndex<I, A, B>,
  ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
  <A>(predicate: PredicateWithIndex<I, A>): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}



export declare function filterWithIndex<F extends URIS3, I>(
  F: FilterableWithIndex3<F, I>,
): {
  <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
  <A>(predicate: PredicateWithIndex<I, A>): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}



export declare function filterWithIndex<F extends URIS3, I, E>(
  F: FilterableWithIndex3C<F, I, E>,
): {
  <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
  <A>(predicate: PredicateWithIndex<I, A>): <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}



export declare function filterWithIndex<F extends URIS2, I>(
  F: FilterableWithIndex2<F, I>,
): {
  <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
  <A>(predicate: PredicateWithIndex<I, A>): <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
}



export declare function filterWithIndex<F extends URIS2, E, I>(
  F: FilterableWithIndex2C<F, I, E>,
): {
  <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: Kind2<F, E, A>) => Kind2<F, E, B>
  <A>(predicate: PredicateWithIndex<I, A>): (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}



export declare function filterWithIndex<F extends URIS, I>(
  F: FilterableWithIndex1<F, I>,
): {
  <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: Kind<F, A>) => Kind<F, B>
  <A>(predicate: PredicateWithIndex<I, A>): (fa: Kind<F, A>) => Kind<F, A>
}



export declare function filterWithIndex<F, I>(
  F: FilterableWithIndex<F, I>,
): {
  <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: HKT<F, A>) => HKT<F, B>
  <A>(predicate: PredicateWithIndex<I, A>): (fa: HKT<F, A>) => HKT<F, A>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMap`

Returns a pipeable `foldMap`




#### Signature

```typescript
export declare function foldMap<F extends URIS4>(
  F: Foldable4<F>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => M



export declare function foldMap<F extends URIS3>(
  F: Foldable3<F>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <R, E>(fa: Kind3<F, R, E, A>) => M



export declare function foldMap<F extends URIS3, E>(
  F: Foldable3C<F, E>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <R>(fa: Kind3<F, R, E, A>) => M



export declare function foldMap<F extends URIS2>(
  F: Foldable2<F>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: Kind2<F, E, A>) => M



export declare function foldMap<F extends URIS2, E>(
  F: Foldable2C<F, E>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Kind2<F, E, A>) => M



export declare function foldMap<F extends URIS>(
  F: Foldable1<F>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Kind<F, A>) => M



export declare function foldMap<F>(F: Foldable<F>): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: HKT<F, A>) => M

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `foldMapWithIndex`

Returns a pipeable `foldMapWithIndex`




#### Signature

```typescript
export declare function foldMapWithIndex<F extends URIS4, I>(
  F: FoldableWithIndex4<F, I>,
): <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => M



export declare function foldMapWithIndex<F extends URIS3, I>(
  F: FoldableWithIndex3<F, I>,
): <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <R, E>(fa: Kind3<F, R, E, A>) => M



export declare function foldMapWithIndex<F extends URIS3, I, E>(
  F: FoldableWithIndex3C<F, I, E>,
): <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <R>(fa: Kind3<F, R, E, A>) => M



export declare function foldMapWithIndex<F extends URIS2, I>(
  F: FoldableWithIndex2<F, I>,
): <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <E>(fa: Kind2<F, E, A>) => M



export declare function foldMapWithIndex<F extends URIS2, I, E>(
  F: FoldableWithIndex2C<F, I, E>,
): <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: Kind2<F, E, A>) => M



export declare function foldMapWithIndex<F extends URIS, I>(
  F: FoldableWithIndex1<F, I>,
): <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: Kind<F, A>) => M



export declare function foldMapWithIndex<F, I>(
  F: FoldableWithIndex<F, I>,
): <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: HKT<F, A>) => M

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

Returns a pipeable `map`




#### Signature

```typescript
export declare function map<F extends URIS4>(
  F: Functor4<F>,
): <A, B>(f: (a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>



export declare function map<F extends URIS3>(
  F: Functor3<F>,
): <A, B>(f: (a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function map<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <A, B>(f: (a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function map<F extends URIS2>(
  F: Functor2<F>,
): <A, B>(f: (a: A) => B) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function map<F extends URIS2, E>(
  F: Functor2C<F, E>,
): <A, B>(f: (a: A) => B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function map<F extends URIS>(F: Functor1<F>): <A, B>(f: (a: A) => B) => (fa: Kind<F, A>) => Kind<F, B>



export declare function map<F>(F: Functor<F>): <A, B>(f: (a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapLeft`

Returns a pipeable `mapLeft`




#### Signature

```typescript
export declare function mapLeft<F extends URIS4>(
  F: Bifunctor4<F>,
): <E, G>(f: (e: E) => G) => <S, R, A>(fea: Kind4<F, S, R, E, A>) => Kind4<F, S, R, G, A>



export declare function mapLeft<F extends URIS3>(
  F: Bifunctor3<F>,
): <E, G>(f: (e: E) => G) => <R, A>(fea: Kind3<F, R, E, A>) => Kind3<F, R, G, A>



export declare function mapLeft<F extends URIS3, E>(
  F: Bifunctor3C<F, E>,
): <E, G>(f: (e: E) => G) => <R, A>(fea: Kind3<F, R, E, A>) => Kind3<F, R, G, A>



export declare function mapLeft<F extends URIS2>(
  F: Bifunctor2<F>,
): <E, G>(f: (e: E) => G) => <A>(fea: Kind2<F, E, A>) => Kind2<F, G, A>



export declare function mapLeft<F extends URIS2, E>(
  F: Bifunctor2C<F, E>,
): <E, G>(f: (e: E) => G) => <A>(fea: Kind2<F, E, A>) => Kind2<F, G, A>



export declare function mapLeft<F>(F: Bifunctor<F>): <E, G>(f: (e: E) => G) => <A>(fea: HKT2<F, E, A>) => HKT2<F, G, A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `mapWithIndex`

Returns a pipeable `mapWithIndex`




#### Signature

```typescript
export declare function mapWithIndex<F extends URIS4, I>(
  F: FunctorWithIndex4<F, I>,
): <A, B>(f: (i: I, a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>



export declare function mapWithIndex<F extends URIS3, I>(
  F: FunctorWithIndex3<F, I>,
): <A, B>(f: (i: I, a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function mapWithIndex<F extends URIS3, I, E>(
  F: FunctorWithIndex3C<F, I, E>,
): <A, B>(f: (i: I, a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>



export declare function mapWithIndex<F extends URIS2, I>(
  F: FunctorWithIndex2<F, I>,
): <A, B>(f: (i: I, a: A) => B) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function mapWithIndex<F extends URIS2, I, E>(
  F: FunctorWithIndex2C<F, I, E>,
): <A, B>(f: (i: I, a: A) => B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>



export declare function mapWithIndex<F extends URIS, I>(
  F: FunctorWithIndex1<F, I>,
): <A, B>(f: (i: I, a: A) => B) => (fa: Kind<F, A>) => Kind<F, B>



export declare function mapWithIndex<F, I>(
  F: FunctorWithIndex<F, I>,
): <A, B>(f: (i: I, a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partition`

Returns a pipeable `partition`




#### Signature

```typescript
export declare function partition<F extends URIS4>(
  F: Filterable4<F>,
): {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
  <A>(
    predicate: Predicate<A>,
  ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, A>>
}



export declare function partition<F extends URIS3>(
  F: Filterable3<F>,
): {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <A>(predicate: Predicate<A>): <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}



export declare function partition<F extends URIS3, E>(
  F: Filterable3C<F, E>,
): {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <A>(predicate: Predicate<A>): <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}



export declare function partition<F extends URIS2>(
  F: Filterable2<F>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <A>(predicate: Predicate<A>): <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}



export declare function partition<F extends URIS2, E>(
  F: Filterable2C<F, E>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <A>(predicate: Predicate<A>): (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}



export declare function partition<F extends URIS>(
  F: Filterable1<F>,
): {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Kind<F, A>) => Separated<Kind<F, A>, Kind<F, B>>
  <A>(predicate: Predicate<A>): (fa: Kind<F, A>) => Separated<Kind<F, A>, Kind<F, A>>
}



export declare function partition<F>(F: Filterable<F>): {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, B>>
  <A>(predicate: Predicate<A>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, A>>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMap`

Returns a pipeable `partitionMap`




#### Signature

```typescript
export declare function partitionMap<F extends URIS4>(
  F: Filterable4<F>,
): <A, B, C>(
  f: (a: A) => Either<B, C>,
) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, B>, Kind4<F, S, R, E, C>>



export declare function partitionMap<F extends URIS3>(
  F: Filterable3<F>,
): <A, B, C>(
  f: (a: A) => Either<B, C>,
) => <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>



export declare function partitionMap<F extends URIS3, E>(
  F: Filterable3C<F, E>,
): <A, B, C>(f: (a: A) => Either<B, C>) => <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>



export declare function partitionMap<F extends URIS2>(
  F: Filterable2<F>,
): <A, B, C>(f: (a: A) => Either<B, C>) => <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>



export declare function partitionMap<F extends URIS2, E>(
  F: Filterable2C<F, E>,
): <A, B, C>(f: (a: A) => Either<B, C>) => (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>



export declare function partitionMap<F extends URIS>(
  F: Filterable1<F>,
): <A, B, C>(f: (a: A) => Either<B, C>) => (fa: Kind<F, A>) => Separated<Kind<F, B>, Kind<F, C>>



export declare function partitionMap<F>(
  F: Filterable<F>,
): <A, B, C>(f: (a: A) => Either<B, C>) => (fa: HKT<F, A>) => Separated<HKT<F, B>, HKT<F, C>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionMapWithIndex`

Returns a pipeable `partitionMapWithIndex`




#### Signature

```typescript
export declare function partitionMapWithIndex<F extends URIS4, I>(
  F: FilterableWithIndex4<F, I>,
): <A, B, C>(
  f: (i: I, a: A) => Either<B, C>,
) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, B>, Kind4<F, S, R, E, C>>



export declare function partitionMapWithIndex<F extends URIS3, I>(
  F: FilterableWithIndex3<F, I>,
): <A, B, C>(
  f: (i: I, a: A) => Either<B, C>,
) => <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>



export declare function partitionMapWithIndex<F extends URIS3, I, E>(
  F: FilterableWithIndex3C<F, I, E>,
): <A, B, C>(
  f: (i: I, a: A) => Either<B, C>,
) => <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>



export declare function partitionMapWithIndex<F extends URIS2, I>(
  F: FilterableWithIndex2<F, I>,
): <A, B, C>(f: (i: I, a: A) => Either<B, C>) => <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>



export declare function partitionMapWithIndex<F extends URIS2, I, E>(
  F: FilterableWithIndex2C<F, I, E>,
): <A, B, C>(f: (i: I, a: A) => Either<B, C>) => (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>



export declare function partitionMapWithIndex<F extends URIS, I>(
  F: FilterableWithIndex1<F, I>,
): <A, B, C>(f: (i: I, a: A) => Either<B, C>) => (fa: Kind<F, A>) => Separated<Kind<F, B>, Kind<F, C>>



export declare function partitionMapWithIndex<F, I>(
  F: FilterableWithIndex<F, I>,
): <A, B, C>(f: (i: I, a: A) => Either<B, C>) => (fa: HKT<F, A>) => Separated<HKT<F, B>, HKT<F, C>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `partitionWithIndex`

Returns a pipeable `partitionWithIndex`




#### Signature

```typescript
export declare function partitionWithIndex<F extends URIS4, I>(
  F: FilterableWithIndex4<F, I>,
): {
  <A, B extends A>(
    refinement: RefinementWithIndex<I, A, B>,
  ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
  <A>(
    predicate: PredicateWithIndex<I, A>,
  ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, A>>
}



export declare function partitionWithIndex<F extends URIS3, I>(
  F: FilterableWithIndex3<F, I>,
): {
  <A, B extends A>(
    refinement: RefinementWithIndex<I, A, B>,
  ): <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <A>(
    predicate: PredicateWithIndex<I, A>,
  ): <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}



export declare function partitionWithIndex<F extends URIS3, I, E>(
  F: FilterableWithIndex3C<F, I, E>,
): {
  <A, B extends A>(
    refinement: RefinementWithIndex<I, A, B>,
  ): <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <A>(
    predicate: PredicateWithIndex<I, A>,
  ): <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}



export declare function partitionWithIndex<F extends URIS2, I>(
  F: FilterableWithIndex2<F, I>,
): {
  <A, B extends A>(
    refinement: RefinementWithIndex<I, A, B>,
  ): <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <A>(predicate: PredicateWithIndex<I, A>): <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}



export declare function partitionWithIndex<F extends URIS2, I, E>(
  F: FilterableWithIndex2C<F, I, E>,
): {
  <A, B extends A>(
    refinement: RefinementWithIndex<I, A, B>,
  ): (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <A>(predicate: PredicateWithIndex<I, A>): (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}



export declare function partitionWithIndex<F extends URIS, I>(
  F: FilterableWithIndex1<F, I>,
): {
  <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: Kind<F, A>) => Separated<Kind<F, A>, Kind<F, B>>
  <A>(predicate: PredicateWithIndex<I, A>): (fa: Kind<F, A>) => Separated<Kind<F, A>, Kind<F, A>>
}



export declare function partitionWithIndex<F, I>(
  F: FilterableWithIndex<F, I>,
): {
  <A, B extends A>(refinement: RefinementWithIndex<I, A, B>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, B>>
  <A>(predicate: PredicateWithIndex<I, A>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, A>>
}

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `promap`

Returns a pipeable `promap`




#### Signature

```typescript
export declare function promap<F extends URIS4>(
  F: Profunctor4<F>,
): <E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => <S, R>(fbc: Kind4<F, S, R, E, A>) => Kind4<F, S, R, D, B>



export declare function promap<F extends URIS3>(
  F: Profunctor3<F>,
): <E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => <R>(fbc: Kind3<F, R, E, A>) => Kind3<F, R, D, B>



export declare function promap<F extends URIS3, E>(
  F: Profunctor3C<F, E>,
): <A, D, B>(f: (d: D) => E, g: (a: A) => B) => <R>(fbc: Kind3<F, R, E, A>) => Kind3<F, R, D, B>



export declare function promap<F extends URIS2>(
  F: Profunctor2<F>,
): <E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: Kind2<F, E, A>) => Kind2<F, D, B>



export declare function promap<F extends URIS2, E>(
  F: Profunctor2C<F, E>,
): <A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: Kind2<F, E, A>) => Kind2<F, D, B>



export declare function promap<F>(
  F: Profunctor<F>,
): <E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: HKT2<F, E, A>) => HKT2<F, D, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduce`

Returns a pipeable `reduce`




#### Signature

```typescript
export declare function reduce<F extends URIS4>(
  F: Foldable4<F>,
): <A, B>(b: B, f: (b: B, a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => B



export declare function reduce<F extends URIS3>(
  F: Foldable3<F>,
): <A, B>(b: B, f: (b: B, a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => B



export declare function reduce<F extends URIS3, E>(
  F: Foldable3C<F, E>,
): <A, B>(b: B, f: (b: B, a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => B



export declare function reduce<F extends URIS2>(
  F: Foldable2<F>,
): <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: Kind2<F, E, A>) => B



export declare function reduce<F extends URIS2, E>(
  F: Foldable2C<F, E>,
): <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Kind2<F, E, A>) => B



export declare function reduce<F extends URIS>(
  F: Foldable1<F>,
): <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Kind<F, A>) => B



export declare function reduce<F>(F: Foldable<F>): <A, B>(b: B, f: (b: B, a: A) => B) => (fa: HKT<F, A>) => B

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRight`

Returns a pipeable `reduceRight`




#### Signature

```typescript
export declare function reduceRight<F extends URIS4>(
  F: Foldable4<F>,
): <A, B>(b: B, f: (a: A, b: B) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => B



export declare function reduceRight<F extends URIS3>(
  F: Foldable3<F>,
): <A, B>(b: B, f: (a: A, b: B) => B) => <R, E>(fa: Kind3<F, R, E, A>) => B



export declare function reduceRight<F extends URIS3, E>(
  F: Foldable3C<F, E>,
): <A, B>(b: B, f: (a: A, b: B) => B) => <R>(fa: Kind3<F, R, E, A>) => B



export declare function reduceRight<F extends URIS2>(
  F: Foldable2<F>,
): <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: Kind2<F, E, A>) => B



export declare function reduceRight<F extends URIS2, E>(
  F: Foldable2C<F, E>,
): <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Kind2<F, E, A>) => B



export declare function reduceRight<F extends URIS>(
  F: Foldable1<F>,
): <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Kind<F, A>) => B



export declare function reduceRight<F>(F: Foldable<F>): <A, B>(b: B, f: (a: A, b: B) => B) => (fa: HKT<F, A>) => B

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceRightWithIndex`

Returns a pipeable `reduceRightWithIndex`




#### Signature

```typescript
export declare function reduceRightWithIndex<F extends URIS4, I>(
  F: FoldableWithIndex4<F, I>,
): <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => B



export declare function reduceRightWithIndex<F extends URIS3, I>(
  F: FoldableWithIndex3<F, I>,
): <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <R, E>(fa: Kind3<F, R, E, A>) => B



export declare function reduceRightWithIndex<F extends URIS3, I, E>(
  F: FoldableWithIndex3C<F, I, E>,
): <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <R>(fa: Kind3<F, R, E, A>) => B



export declare function reduceRightWithIndex<F extends URIS2, I>(
  F: FoldableWithIndex2<F, I>,
): <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <E>(fa: Kind2<F, E, A>) => B



export declare function reduceRightWithIndex<F extends URIS2, I, E>(
  F: FoldableWithIndex2C<F, I, E>,
): <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: Kind2<F, E, A>) => B



export declare function reduceRightWithIndex<F extends URIS, I>(
  F: FoldableWithIndex1<F, I>,
): <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: Kind<F, A>) => B



export declare function reduceRightWithIndex<F, I>(
  F: FoldableWithIndex<F, I>,
): <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: HKT<F, A>) => B

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reduceWithIndex`

Returns a pipeable `reduceWithIndex`




#### Signature

```typescript
export declare function reduceWithIndex<F extends URIS4, I>(
  F: FoldableWithIndex4<F, I>,
): <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => B



export declare function reduceWithIndex<F extends URIS3, I>(
  F: FoldableWithIndex3<F, I>,
): <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => B



export declare function reduceWithIndex<F extends URIS3, I, E>(
  F: FoldableWithIndex3C<F, I, E>,
): <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => B



export declare function reduceWithIndex<F extends URIS2, I>(
  F: FoldableWithIndex2<F, I>,
): <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <E>(fa: Kind2<F, E, A>) => B



export declare function reduceWithIndex<F extends URIS2, I, E>(
  F: FoldableWithIndex2C<F, I, E>,
): <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: Kind2<F, E, A>) => B



export declare function reduceWithIndex<F extends URIS, I>(
  F: FoldableWithIndex1<F, I>,
): <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: Kind<F, A>) => B



export declare function reduceWithIndex<F, I>(
  F: FoldableWithIndex<F, I>,
): <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: HKT<F, A>) => B

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`PipeableAlt`~~




#### Signature

```typescript
export interface PipeableAlt<F> {
  readonly alt: <A>(that: LazyArg<HKT<F, A>>) => (fa: HKT<F, A>) => HKT<F, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableAlt1`~~




#### Signature

```typescript
export interface PipeableAlt1<F extends URIS> {
  readonly alt: <A>(that: LazyArg<Kind<F, A>>) => (fa: Kind<F, A>) => Kind<F, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableAlt2`~~




#### Signature

```typescript
export interface PipeableAlt2<F extends URIS2> {
  readonly alt: <E, A>(that: LazyArg<Kind2<F, E, A>>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableAlt2C`~~




#### Signature

```typescript
export interface PipeableAlt2C<F extends URIS2, E> {
  readonly alt: <A>(that: LazyArg<Kind2<F, E, A>>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableAlt3`~~




#### Signature

```typescript
export interface PipeableAlt3<F extends URIS3> {
  readonly alt: <R, E, A>(that: LazyArg<Kind3<F, R, E, A>>) => (fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableAlt3C`~~




#### Signature

```typescript
export interface PipeableAlt3C<F extends URIS3, E> {
  readonly alt: <R, A>(that: LazyArg<Kind3<F, R, E, A>>) => (fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableAlt4`~~




#### Signature

```typescript
export interface PipeableAlt4<F extends URIS4> {
  readonly alt: <S, R, E, A>(that: LazyArg<Kind4<F, S, R, E, A>>) => (fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableApply`~~




#### Signature

```typescript
export interface PipeableApply<F> extends PipeableFunctor<F> {
  readonly ap: <A>(fa: HKT<F, A>) => <B>(fab: HKT<F, (a: A) => B>) => HKT<F, B>
  readonly apFirst: <B>(fb: HKT<F, B>) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly apSecond: <B>(fb: HKT<F, B>) => <A>(fa: HKT<F, A>) => HKT<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableApply1`~~




#### Signature

```typescript
export interface PipeableApply1<F extends URIS> extends PipeableFunctor1<F> {
  readonly ap: <A>(fa: Kind<F, A>) => <B>(fab: Kind<F, (a: A) => B>) => Kind<F, B>
  readonly apFirst: <B>(fb: Kind<F, B>) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly apSecond: <B>(fb: Kind<F, B>) => <A>(fa: Kind<F, A>) => Kind<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableApply2`~~




#### Signature

```typescript
export interface PipeableApply2<F extends URIS2> extends PipeableFunctor2<F> {
  readonly ap: <E, A>(fa: Kind2<F, E, A>) => <B>(fab: Kind2<F, E, (a: A) => B>) => Kind2<F, E, B>
  readonly apFirst: <E, B>(fb: Kind2<F, E, B>) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly apSecond: <E, B>(fb: Kind2<F, E, B>) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableApply2C`~~




#### Signature

```typescript
export interface PipeableApply2C<F extends URIS2, E> extends PipeableFunctor2C<F, E> {
  readonly ap: <A>(fa: Kind2<F, E, A>) => <B>(fab: Kind2<F, E, (a: A) => B>) => Kind2<F, E, B>
  readonly apFirst: <B>(fb: Kind2<F, E, B>) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly apSecond: <B>(fb: Kind2<F, E, B>) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableApply3`~~




#### Signature

```typescript
export interface PipeableApply3<F extends URIS3> extends PipeableFunctor3<F> {
  readonly ap: <R, E, A>(fa: Kind3<F, R, E, A>) => <B>(fab: Kind3<F, R, E, (a: A) => B>) => Kind3<F, R, E, B>
  readonly apFirst: <R, E, B>(fb: Kind3<F, R, E, B>) => <A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly apSecond: <R, E, B>(fb: Kind3<F, R, E, B>) => <A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableApply3C`~~




#### Signature

```typescript
export interface PipeableApply3C<F extends URIS3, E> extends PipeableFunctor3C<F, E> {
  readonly ap: <R, A>(fa: Kind3<F, R, E, A>) => <B>(fab: Kind3<F, R, E, (a: A) => B>) => Kind3<F, R, E, B>
  readonly apFirst: <R, B>(fb: Kind3<F, R, E, B>) => <A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly apSecond: <R, B>(fb: Kind3<F, R, E, B>) => <A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableApply4`~~




#### Signature

```typescript
export interface PipeableApply4<F extends URIS4> extends PipeableFunctor4<F> {
  readonly ap: <S, R, E, A>(
    fa: Kind4<F, S, R, E, A>,
  ) => <B>(fab: Kind4<F, S, R, E, (a: A) => B>) => Kind4<F, S, R, E, B>
  readonly apFirst: <S, R, E, B>(fb: Kind4<F, S, R, E, B>) => <A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly apSecond: <S, R, E, B>(fb: Kind4<F, S, R, E, B>) => <A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableBifunctor`~~




#### Signature

```typescript
export interface PipeableBifunctor<F> {
  readonly bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: HKT2<F, E, A>) => HKT2<F, G, B>
  readonly mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: HKT2<F, E, A>) => HKT2<F, G, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableBifunctor2`~~




#### Signature

```typescript
export interface PipeableBifunctor2<F extends URIS2> {
  readonly bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: Kind2<F, E, A>) => Kind2<F, G, B>
  readonly mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: Kind2<F, E, A>) => Kind2<F, G, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableBifunctor3`~~




#### Signature

```typescript
export interface PipeableBifunctor3<F extends URIS3> {
  readonly bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, G, B>
  readonly mapLeft: <E, G>(f: (e: E) => G) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, G, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableBifunctor3C`~~




#### Signature

```typescript
export interface PipeableBifunctor3C<F extends URIS3, E> {
  readonly bimap: <G, A, B>(f: (e: E) => G, g: (a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, G, B>
  readonly mapLeft: <G>(f: (e: E) => G) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, G, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableBifunctor4`~~




#### Signature

```typescript
export interface PipeableBifunctor4<F extends URIS4> {
  readonly bimap: <E, G, A, B>(
    f: (e: E) => G,
    g: (a: A) => B,
  ) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, G, B>
  readonly mapLeft: <E, G>(f: (e: E) => G) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, G, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableChain`~~




#### Signature

```typescript
export interface PipeableChain<F> extends PipeableApply<F> {
  readonly chain: <A, B>(f: (a: A) => HKT<F, B>) => (ma: HKT<F, A>) => HKT<F, B>
  readonly chainFirst: <A, B>(f: (a: A) => HKT<F, B>) => (ma: HKT<F, A>) => HKT<F, A>
  readonly flatten: <A>(mma: HKT<F, HKT<F, A>>) => HKT<F, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableChain1`~~




#### Signature

```typescript
export interface PipeableChain1<F extends URIS> extends PipeableApply1<F> {
  readonly chain: <A, B>(f: (a: A) => Kind<F, B>) => (ma: Kind<F, A>) => Kind<F, B>
  readonly chainFirst: <A, B>(f: (a: A) => Kind<F, B>) => (ma: Kind<F, A>) => Kind<F, A>
  readonly flatten: <A>(mma: Kind<F, Kind<F, A>>) => Kind<F, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableChain2`~~




#### Signature

```typescript
export interface PipeableChain2<F extends URIS2> extends PipeableApply2<F> {
  readonly chain: <E, A, B>(f: (a: A) => Kind2<F, E, B>) => (ma: Kind2<F, E, A>) => Kind2<F, E, B>
  readonly chainFirst: <E, A, B>(f: (a: A) => Kind2<F, E, B>) => (ma: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly flatten: <E, A>(mma: Kind2<F, E, Kind2<F, E, A>>) => Kind2<F, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableChain2C`~~




#### Signature

```typescript
export interface PipeableChain2C<F extends URIS2, E> extends PipeableApply2C<F, E> {
  readonly chain: <A, B>(f: (a: A) => Kind2<F, E, B>) => (ma: Kind2<F, E, A>) => Kind2<F, E, B>
  readonly chainFirst: <A, B>(f: (a: A) => Kind2<F, E, B>) => (ma: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly flatten: <A>(mma: Kind2<F, E, Kind2<F, E, A>>) => Kind2<F, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableChain3`~~




#### Signature

```typescript
export interface PipeableChain3<F extends URIS3> extends PipeableApply3<F> {
  readonly chain: <R, E, A, B>(f: (a: A) => Kind3<F, R, E, B>) => (ma: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
  readonly chainFirst: <R, E, A, B>(f: (a: A) => Kind3<F, R, E, B>) => (ma: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly flatten: <R, E, A>(mma: Kind3<F, R, E, Kind3<F, R, E, A>>) => Kind3<F, R, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableChain3C`~~




#### Signature

```typescript
export interface PipeableChain3C<F extends URIS3, E> extends PipeableApply3C<F, E> {
  readonly chain: <R, A, B>(f: (a: A) => Kind3<F, R, E, B>) => (ma: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
  readonly chainFirst: <R, A, B>(f: (a: A) => Kind3<F, R, E, B>) => (ma: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly flatten: <R, A>(mma: Kind3<F, R, E, Kind3<F, R, E, A>>) => Kind3<F, R, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableChain4`~~




#### Signature

```typescript
export interface PipeableChain4<F extends URIS4> extends PipeableApply4<F> {
  readonly chain: <S, R, E, A, B>(
    f: (a: A) => Kind4<F, S, R, E, B>,
  ) => (ma: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
  readonly chainFirst: <S, R, E, A, B>(
    f: (a: A) => Kind4<F, S, R, E, B>,
  ) => (ma: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly flatten: <S, R, E, A>(mma: Kind4<F, S, R, E, Kind4<F, S, R, E, A>>) => Kind4<F, S, R, E, A>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableCompactable`~~




#### Signature

```typescript
export interface PipeableCompactable<F> {
  readonly compact: <A>(fa: HKT<F, Option<A>>) => HKT<F, A>
  readonly separate: <A, B>(fa: HKT<F, Either<A, B>>) => Separated<HKT<F, A>, HKT<F, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableCompactable1`~~




#### Signature

```typescript
export interface PipeableCompactable1<F extends URIS> {
  readonly compact: <A>(fa: Kind<F, Option<A>>) => Kind<F, A>
  readonly separate: <A, B>(fa: Kind<F, Either<A, B>>) => Separated<Kind<F, A>, Kind<F, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableCompactable2`~~




#### Signature

```typescript
export interface PipeableCompactable2<F extends URIS2> {
  readonly compact: <E, A>(fa: Kind2<F, E, Option<A>>) => Kind2<F, E, A>
  readonly separate: <E, A, B>(fa: Kind2<F, E, Either<A, B>>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableCompactable2C`~~




#### Signature

```typescript
export interface PipeableCompactable2C<F extends URIS2, E> {
  readonly compact: <A>(fa: Kind2<F, E, Option<A>>) => Kind2<F, E, A>
  readonly separate: <A, B>(fa: Kind2<F, E, Either<A, B>>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableCompactable3`~~




#### Signature

```typescript
export interface PipeableCompactable3<F extends URIS3> {
  readonly compact: <R, E, A>(fa: Kind3<F, R, E, Option<A>>) => Kind3<F, R, E, A>
  readonly separate: <R, E, A, B>(fa: Kind3<F, R, E, Either<A, B>>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableCompactable3C`~~




#### Signature

```typescript
export interface PipeableCompactable3C<F extends URIS3, E> {
  readonly compact: <R, A>(fa: Kind3<F, R, E, Option<A>>) => Kind3<F, R, E, A>
  readonly separate: <R, A, B>(fa: Kind3<F, R, E, Either<A, B>>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableCompactable4`~~




#### Signature

```typescript
export interface PipeableCompactable4<F extends URIS4> {
  readonly compact: <S, R, E, A>(fa: Kind4<F, S, R, E, Option<A>>) => Kind4<F, S, R, E, A>
  readonly separate: <S, R, E, A, B>(
    fa: Kind4<F, S, R, E, Either<A, B>>,
  ) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableContravariant`~~




#### Signature

```typescript
export interface PipeableContravariant<F> {
  readonly contramap: <A, B>(f: (b: B) => A) => (fa: HKT<F, A>) => HKT<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableContravariant1`~~




#### Signature

```typescript
export interface PipeableContravariant1<F extends URIS> {
  readonly contramap: <A, B>(f: (b: B) => A) => (fa: Kind<F, A>) => Kind<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableContravariant2`~~




#### Signature

```typescript
export interface PipeableContravariant2<F extends URIS2> {
  readonly contramap: <A, B>(f: (b: B) => A) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableContravariant2C`~~




#### Signature

```typescript
export interface PipeableContravariant2C<F extends URIS2, E> {
  readonly contramap: <A, B>(f: (b: B) => A) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableContravariant3`~~




#### Signature

```typescript
export interface PipeableContravariant3<F extends URIS3> {
  readonly contramap: <A, B>(f: (b: B) => A) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableContravariant3C`~~




#### Signature

```typescript
export interface PipeableContravariant3C<F extends URIS3, E> {
  readonly contramap: <A, B>(f: (b: B) => A) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableContravariant4`~~




#### Signature

```typescript
export interface PipeableContravariant4<F extends URIS4> {
  readonly contramap: <A, B>(f: (b: B) => A) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableExtend`~~




#### Signature

```typescript
export interface PipeableExtend<F> extends PipeableFunctor<F> {
  readonly duplicate: <A>(wa: HKT<F, A>) => HKT<F, HKT<F, A>>
  readonly extend: <A, B>(f: (wa: HKT<F, A>) => B) => (wa: HKT<F, A>) => HKT<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableExtend1`~~




#### Signature

```typescript
export interface PipeableExtend1<F extends URIS> extends PipeableFunctor1<F> {
  readonly duplicate: <A>(wa: Kind<F, A>) => Kind<F, Kind<F, A>>
  readonly extend: <A, B>(f: (wa: Kind<F, A>) => B) => (wa: Kind<F, A>) => Kind<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableExtend2`~~




#### Signature

```typescript
export interface PipeableExtend2<F extends URIS2> extends PipeableFunctor2<F> {
  readonly duplicate: <E, A>(wa: Kind2<F, E, A>) => Kind2<F, E, Kind2<F, E, A>>
  readonly extend: <E, A, B>(f: (wa: Kind2<F, E, A>) => B) => (wa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableExtend2C`~~




#### Signature

```typescript
export interface PipeableExtend2C<F extends URIS2, E> extends PipeableFunctor2C<F, E> {
  readonly duplicate: <A>(wa: Kind2<F, E, A>) => Kind2<F, E, Kind2<F, E, A>>
  readonly extend: <A, B>(f: (wa: Kind2<F, E, A>) => B) => (wa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableExtend3`~~




#### Signature

```typescript
export interface PipeableExtend3<F extends URIS3> extends PipeableFunctor3<F> {
  readonly duplicate: <R, E, A>(wa: Kind3<F, R, E, A>) => Kind3<F, R, E, Kind3<F, R, E, A>>
  readonly extend: <R, E, A, B>(f: (wa: Kind3<F, R, E, A>) => B) => (wa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableExtend3C`~~




#### Signature

```typescript
export interface PipeableExtend3C<F extends URIS3, E> extends PipeableFunctor3C<F, E> {
  readonly duplicate: <R, A>(wa: Kind3<F, R, E, A>) => Kind3<F, R, E, Kind3<F, R, E, A>>
  readonly extend: <R, A, B>(f: (wa: Kind3<F, R, E, A>) => B) => (wa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableExtend4`~~




#### Signature

```typescript
export interface PipeableExtend4<F extends URIS4> extends PipeableFunctor4<F> {
  readonly duplicate: <S, R, E, A>(wa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, Kind4<F, S, R, E, A>>
  readonly extend: <S, R, E, A, B>(
    f: (wa: Kind4<F, S, R, E, A>) => B,
  ) => (wa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterable`~~




#### Signature

```typescript
export interface PipeableFilterable<F> extends PipeableCompactable<F> {
  readonly filter: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: HKT<F, A>) => HKT<F, B>
    <A>(predicate: Predicate<A>): (fa: HKT<F, A>) => HKT<F, A>
  }
  readonly filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, B>
  readonly partition: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, B>>
    <A>(predicate: Predicate<A>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, A>>
  }
  readonly partitionMap: <A, B, C>(f: (a: A) => Either<B, C>) => (fa: HKT<F, A>) => Separated<HKT<F, B>, HKT<F, C>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterable1`~~




#### Signature

```typescript
export interface PipeableFilterable1<F extends URIS> extends PipeableCompactable1<F> {
  readonly filter: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: Kind<F, A>) => Kind<F, B>
    <A>(predicate: Predicate<A>): (fa: Kind<F, A>) => Kind<F, A>
  }
  readonly filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, B>
  readonly partition: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: Kind<F, A>) => Separated<Kind<F, A>, Kind<F, B>>
    <A>(predicate: Predicate<A>): (fa: Kind<F, A>) => Separated<Kind<F, A>, Kind<F, A>>
  }
  readonly partitionMap: <A, B, C>(f: (a: A) => Either<B, C>) => (fa: Kind<F, A>) => Separated<Kind<F, B>, Kind<F, C>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterable2`~~




#### Signature

```typescript
export interface PipeableFilterable2<F extends URIS2> extends PipeableCompactable2<F> {
  readonly filter: {
    <A, B extends A>(refinement: Refinement<A, B>): <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
    <A>(predicate: Predicate<A>): <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  }
  readonly filterMap: <A, B>(f: (a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
  readonly partition: {
    <A, B extends A>(refinement: Refinement<A, B>): <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
    <A>(predicate: Predicate<A>): <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, A>>
  }
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterable2C`~~




#### Signature

```typescript
export interface PipeableFilterable2C<F extends URIS2, E> extends PipeableCompactable2C<F, E> {
  readonly filter: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: Kind2<F, E, A>) => Kind2<F, E, B>
    <A>(predicate: Predicate<A>): (fa: Kind2<F, E, A>) => Kind2<F, E, A>
  }
  readonly filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
  readonly partition: {
    <A, B extends A>(refinement: Refinement<A, B>): (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
    <A>(predicate: Predicate<A>): (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, A>>
  }
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterable3`~~




#### Signature

```typescript
export interface PipeableFilterable3<F extends URIS3> extends PipeableCompactable3<F> {
  readonly filter: {
    <A, B extends A>(refinement: Refinement<A, B>): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
    <A>(predicate: Predicate<A>): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  }
  readonly filterMap: <A, B>(f: (a: A) => Option<B>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly partition: {
    <A, B extends A>(
      refinement: Refinement<A, B>,
    ): <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
    <A>(predicate: Predicate<A>): <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
  }
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterable3C`~~




#### Signature

```typescript
export interface PipeableFilterable3C<F extends URIS3, E> extends PipeableCompactable3C<F, E> {
  readonly filter: {
    <A, B extends A>(refinement: Refinement<A, B>): <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
    <A>(predicate: Predicate<A>): <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  }
  readonly filterMap: <A, B>(f: (a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly partition: {
    <A, B extends A>(
      refinement: Refinement<A, B>,
    ): <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
    <A>(predicate: Predicate<A>): <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
  }
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterable4`~~




#### Signature

```typescript
export interface PipeableFilterable4<F extends URIS4> extends PipeableCompactable4<F> {
  readonly filter: {
    <A, B extends A>(refinement: Refinement<A, B>): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
    <A>(predicate: Predicate<A>): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  }
  readonly filterMap: <A, B>(f: (a: A) => Option<B>) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly partition: {
    <A, B extends A>(
      refinement: Refinement<A, B>,
    ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
    <A>(
      predicate: Predicate<A>,
    ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, A>>
  }
  readonly partitionMap: <A, B, C>(
    f: (a: A) => Either<B, C>,
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, B>, Kind4<F, S, R, E, C>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterableWithIndex`~~




#### Signature

```typescript
export interface PipeableFilterableWithIndex<F, I> extends PipeableFilterable<F> {
  readonly filterMapWithIndex: <A, B>(f: (i: I, a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, B>
  readonly filterWithIndex: {
    <A, B extends A>(refinementWithIndex: RefinementWithIndex<I, A, B>): (fa: HKT<F, A>) => HKT<F, B>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): (fa: HKT<F, A>) => HKT<F, A>
  }
  readonly partitionMapWithIndex: <A, B, C>(
    f: (i: I, a: A) => Either<B, C>,
  ) => (fa: HKT<F, A>) => Separated<HKT<F, B>, HKT<F, C>>
  readonly partitionWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, B>>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): (fa: HKT<F, A>) => Separated<HKT<F, A>, HKT<F, A>>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterableWithIndex1`~~




#### Signature

```typescript
export interface PipeableFilterableWithIndex1<F extends URIS, I> extends PipeableFilterable1<F> {
  readonly filterMapWithIndex: <A, B>(f: (i: I, a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, B>
  readonly filterWithIndex: {
    <A, B extends A>(refinementWithIndex: RefinementWithIndex<I, A, B>): (fa: Kind<F, A>) => Kind<F, B>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): (fa: Kind<F, A>) => Kind<F, A>
  }
  readonly partitionMapWithIndex: <A, B, C>(
    f: (i: I, a: A) => Either<B, C>,
  ) => (fa: Kind<F, A>) => Separated<Kind<F, B>, Kind<F, C>>
  readonly partitionWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): (fa: Kind<F, A>) => Separated<Kind<F, A>, Kind<F, B>>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): (fa: Kind<F, A>) => Separated<Kind<F, A>, Kind<F, A>>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterableWithIndex2`~~




#### Signature

```typescript
export interface PipeableFilterableWithIndex2<F extends URIS2, I> extends PipeableFilterable2<F> {
  readonly filterMapWithIndex: <A, B>(f: (i: I, a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
  readonly filterWithIndex: {
    <A, B extends A>(refinementWithIndex: RefinementWithIndex<I, A, B>): <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  }
  readonly partitionMapWithIndex: <A, B, C>(
    f: (i: I, a: A) => Either<B, C>,
  ) => <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
  readonly partitionWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
    <A>(
      predicateWithIndex: PredicateWithIndex<I, A>,
    ): <E>(fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, A>>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterableWithIndex2C`~~




#### Signature

```typescript
export interface PipeableFilterableWithIndex2C<F extends URIS2, I, E> extends PipeableFilterable2C<F, E> {
  readonly filterMapWithIndex: <A, B>(f: (i: I, a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
  readonly filterWithIndex: {
    <A, B extends A>(refinementWithIndex: RefinementWithIndex<I, A, B>): (fa: Kind2<F, E, A>) => Kind2<F, E, B>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): (fa: Kind2<F, E, A>) => Kind2<F, E, A>
  }
  readonly partitionMapWithIndex: <A, B, C>(
    f: (i: I, a: A) => Either<B, C>,
  ) => (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
  readonly partitionWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, B>>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): (fa: Kind2<F, E, A>) => Separated<Kind2<F, E, A>, Kind2<F, E, A>>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterableWithIndex3`~~




#### Signature

```typescript
export interface PipeableFilterableWithIndex3<F extends URIS3, I> extends PipeableFilterable3<F> {
  readonly filterMapWithIndex: <A, B>(
    f: (i: I, a: A) => Option<B>,
  ) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly filterWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  }
  readonly partitionMapWithIndex: <A, B, C>(
    f: (i: I, a: A) => Either<B, C>,
  ) => <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
  readonly partitionWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
    <A>(
      predicateWithIndex: PredicateWithIndex<I, A>,
    ): <R, E>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterableWithIndex3C`~~




#### Signature

```typescript
export interface PipeableFilterableWithIndex3C<F extends URIS3, I, E> extends PipeableFilterable3C<F, E> {
  readonly filterMapWithIndex: <A, B>(f: (i: I, a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly filterWithIndex: {
    <A, B extends A>(refinementWithIndex: RefinementWithIndex<I, A, B>): <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  }
  readonly partitionMapWithIndex: <A, B, C>(
    f: (i: I, a: A) => Either<B, C>,
  ) => <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
  readonly partitionWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
    <A>(
      predicateWithIndex: PredicateWithIndex<I, A>,
    ): <R>(fa: Kind3<F, R, E, A>) => Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFilterableWithIndex4`~~




#### Signature

```typescript
export interface PipeableFilterableWithIndex4<F extends URIS4, I> extends PipeableFilterable4<F> {
  readonly filterMapWithIndex: <A, B>(
    f: (i: I, a: A) => Option<B>,
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly filterWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
    <A>(predicateWithIndex: PredicateWithIndex<I, A>): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  }
  readonly partitionMapWithIndex: <A, B, C>(
    f: (i: I, a: A) => Either<B, C>,
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, B>, Kind4<F, S, R, E, C>>
  readonly partitionWithIndex: {
    <A, B extends A>(
      refinementWithIndex: RefinementWithIndex<I, A, B>,
    ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
    <A>(
      predicateWithIndex: PredicateWithIndex<I, A>,
    ): <S, R, E>(fa: Kind4<F, S, R, E, A>) => Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, A>>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldable`~~




#### Signature

```typescript
export interface PipeableFoldable<F> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: HKT<F, A>) => M
  readonly reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: HKT<F, A>) => B
  readonly reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: HKT<F, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldable1`~~




#### Signature

```typescript
export interface PipeableFoldable1<F extends URIS> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Kind<F, A>) => M
  readonly reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Kind<F, A>) => B
  readonly reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Kind<F, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldable2`~~




#### Signature

```typescript
export interface PipeableFoldable2<F extends URIS2> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: Kind2<F, E, A>) => M
  readonly reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: Kind2<F, E, A>) => B
  readonly reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: Kind2<F, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldable2C`~~




#### Signature

```typescript
export interface PipeableFoldable2C<F extends URIS2, E> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Kind2<F, E, A>) => M
  readonly reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Kind2<F, E, A>) => B
  readonly reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Kind2<F, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldable3`~~




#### Signature

```typescript
export interface PipeableFoldable3<F extends URIS3> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <R, E>(fa: Kind3<F, R, E, A>) => M
  readonly reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => B
  readonly reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <R, E>(fa: Kind3<F, R, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldable3C`~~




#### Signature

```typescript
export interface PipeableFoldable3C<F extends URIS3, E> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <R>(fa: Kind3<F, R, E, A>) => M
  readonly reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => B
  readonly reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <R>(fa: Kind3<F, R, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldable4`~~




#### Signature

```typescript
export interface PipeableFoldable4<F extends URIS4> {
  readonly foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => M
  readonly reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => B
  readonly reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldableWithIndex`~~




#### Signature

```typescript
export interface PipeableFoldableWithIndex<F, I> extends PipeableFoldable<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: HKT<F, A>) => M
  readonly reduceRightWithIndex: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: HKT<F, A>) => B
  readonly reduceWithIndex: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: HKT<F, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldableWithIndex1`~~




#### Signature

```typescript
export interface PipeableFoldableWithIndex1<F extends URIS, I> extends PipeableFoldable1<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: Kind<F, A>) => M
  readonly reduceRightWithIndex: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: Kind<F, A>) => B
  readonly reduceWithIndex: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: Kind<F, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldableWithIndex2`~~




#### Signature

```typescript
export interface PipeableFoldableWithIndex2<F extends URIS2, I> extends PipeableFoldable2<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <E>(fa: Kind2<F, E, A>) => M
  readonly reduceRightWithIndex: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <E>(fa: Kind2<F, E, A>) => B
  readonly reduceWithIndex: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <E>(fa: Kind2<F, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldableWithIndex2C`~~




#### Signature

```typescript
export interface PipeableFoldableWithIndex2C<F extends URIS2, I, E> extends PipeableFoldable2C<F, E> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => (fa: Kind2<F, E, A>) => M
  readonly reduceRightWithIndex: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => (fa: Kind2<F, E, A>) => B
  readonly reduceWithIndex: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => (fa: Kind2<F, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldableWithIndex3`~~




#### Signature

```typescript
export interface PipeableFoldableWithIndex3<F extends URIS3, I> extends PipeableFoldable3<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <R, E>(fa: Kind3<F, R, E, A>) => M
  readonly reduceRightWithIndex: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <R, E>(fa: Kind3<F, R, E, A>) => B
  readonly reduceWithIndex: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldableWithIndex3C`~~




#### Signature

```typescript
export interface PipeableFoldableWithIndex3C<F extends URIS3, I, E> extends PipeableFoldable3C<F, E> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <R>(fa: Kind3<F, R, E, A>) => M
  readonly reduceRightWithIndex: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <R>(fa: Kind3<F, R, E, A>) => B
  readonly reduceWithIndex: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFoldableWithIndex4`~~




#### Signature

```typescript
export interface PipeableFoldableWithIndex4<F extends URIS4, I> extends PipeableFoldable4<F> {
  readonly foldMapWithIndex: <M>(M: Monoid<M>) => <A>(f: (i: I, a: A) => M) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => M
  readonly reduceRightWithIndex: <A, B>(b: B, f: (i: I, a: A, b: B) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => B
  readonly reduceWithIndex: <A, B>(b: B, f: (i: I, b: B, a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => B
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctor`~~




#### Signature

```typescript
export interface PipeableFunctor<F> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctor1`~~




#### Signature

```typescript
export interface PipeableFunctor1<F extends URIS> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: Kind<F, A>) => Kind<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctor2`~~




#### Signature

```typescript
export interface PipeableFunctor2<F extends URIS2> {
  readonly map: <A, B>(f: (a: A) => B) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctor2C`~~




#### Signature

```typescript
export interface PipeableFunctor2C<F extends URIS2, E> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctor3`~~




#### Signature

```typescript
export interface PipeableFunctor3<F extends URIS3> {
  readonly map: <A, B>(f: (a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctor3C`~~




#### Signature

```typescript
export interface PipeableFunctor3C<F extends URIS3, E> {
  readonly map: <A, B>(f: (a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctor4`~~




#### Signature

```typescript
export interface PipeableFunctor4<F extends URIS4> {
  readonly map: <A, B>(f: (a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctorWithIndex`~~




#### Signature

```typescript
export interface PipeableFunctorWithIndex<F, I> extends PipeableFunctor<F> {
  readonly mapWithIndex: <A, B>(f: (i: I, a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctorWithIndex1`~~




#### Signature

```typescript
export interface PipeableFunctorWithIndex1<F extends URIS, I> extends PipeableFunctor1<F> {
  readonly mapWithIndex: <A, B>(f: (i: I, a: A) => B) => (fa: Kind<F, A>) => Kind<F, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctorWithIndex2`~~




#### Signature

```typescript
export interface PipeableFunctorWithIndex2<F extends URIS2, I> extends PipeableFunctor2<F> {
  readonly mapWithIndex: <A, B>(f: (i: I, a: A) => B) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctorWithIndex2C`~~




#### Signature

```typescript
export interface PipeableFunctorWithIndex2C<F extends URIS2, I, E> extends PipeableFunctor2C<F, E> {
  readonly mapWithIndex: <A, B>(f: (i: I, a: A) => B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctorWithIndex3`~~




#### Signature

```typescript
export interface PipeableFunctorWithIndex3<F extends URIS3, I> extends PipeableFunctor3<F> {
  readonly mapWithIndex: <A, B>(f: (i: I, a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctorWithIndex3C`~~




#### Signature

```typescript
export interface PipeableFunctorWithIndex3C<F extends URIS3, I, E> extends PipeableFunctor3C<F, E> {
  readonly mapWithIndex: <A, B>(f: (i: I, a: A) => B) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableFunctorWithIndex4`~~




#### Signature

```typescript
export interface PipeableFunctorWithIndex4<F extends URIS4, I> extends PipeableFunctor4<F> {
  readonly mapWithIndex: <A, B>(f: (i: I, a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableMonadThrow`~~




#### Signature

```typescript
export interface PipeableMonadThrow<F> {
  readonly filterOrElse: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: HKT<F, A>) => HKT<F, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: HKT<F, A>) => HKT<F, A>
  }
  readonly fromEither: <E, A>(ma: Either<E, A>) => HKT<F, A>
  readonly fromOption: <E>(onNone: LazyArg<E>) => <A>(ma: Option<A>) => HKT<F, A>
  readonly fromPredicate: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => HKT<F, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => HKT<F, A>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableMonadThrow1`~~




#### Signature

```typescript
export interface PipeableMonadThrow1<F extends URIS> {
  readonly filterOrElse: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: Kind<F, A>) => Kind<F, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: Kind<F, A>) => Kind<F, A>
  }
  readonly fromEither: <E, A>(ma: Either<E, A>) => Kind<F, A>
  readonly fromOption: <E>(onNone: LazyArg<E>) => <A>(ma: Option<A>) => Kind<F, A>
  readonly fromPredicate: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => Kind<F, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => Kind<F, A>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableMonadThrow2`~~




#### Signature

```typescript
export interface PipeableMonadThrow2<F extends URIS2> {
  readonly filterOrElse: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: Kind2<F, E, A>) => Kind2<F, E, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: Kind2<F, E, A>) => Kind2<F, E, A>
  }
  readonly fromEither: <E, A>(ma: Either<E, A>) => Kind2<F, E, A>
  readonly fromOption: <E>(onNone: LazyArg<E>) => <A>(ma: Option<A>) => Kind2<F, E, A>
  readonly fromPredicate: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => Kind2<F, E, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => Kind2<F, E, A>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableMonadThrow2C`~~




#### Signature

```typescript
export interface PipeableMonadThrow2C<F extends URIS2, E> {
  readonly filterOrElse: {
    <A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: Kind2<F, E, A>) => Kind2<F, E, B>
    <A>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: Kind2<F, E, A>) => Kind2<F, E, A>
  }
  readonly fromEither: <A>(ma: Either<E, A>) => Kind2<F, E, A>
  readonly fromOption: (onNone: LazyArg<E>) => <A>(ma: Option<A>) => Kind2<F, E, A>
  readonly fromPredicate: {
    <A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => Kind2<F, E, B>
    <A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => Kind2<F, E, A>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableMonadThrow3`~~




#### Signature

```typescript
export interface PipeableMonadThrow3<F extends URIS3> {
  readonly filterOrElse: {
    <E, A, B extends A>(
      refinement: Refinement<A, B>,
      onFalse: (a: A) => E,
    ): <R>(ma: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  }
  readonly fromEither: <R, E, A>(ma: Either<E, A>) => Kind3<F, R, E, A>
  readonly fromOption: <E>(onNone: LazyArg<E>) => <R, A>(ma: Option<A>) => Kind3<F, R, E, A>
  readonly fromPredicate: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <U>(a: A) => Kind3<F, U, E, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(a: A) => Kind3<F, R, E, A>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableMonadThrow3C`~~




#### Signature

```typescript
export interface PipeableMonadThrow3C<F extends URIS3, E> {
  readonly filterOrElse: {
    <A, B extends A>(
      refinement: Refinement<A, B>,
      onFalse: (a: A) => E,
    ): <R>(ma: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
    <A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  }
  readonly fromEither: <R, A>(ma: Either<E, A>) => Kind3<F, R, E, A>
  readonly fromOption: (onNone: LazyArg<E>) => <R, A>(ma: Option<A>) => Kind3<F, R, E, A>
  readonly fromPredicate: {
    <A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <U>(a: A) => Kind3<F, U, E, B>
    <A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(a: A) => Kind3<F, R, E, A>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableMonadThrow4`~~




#### Signature

```typescript
export interface PipeableMonadThrow4<F extends URIS4> {
  readonly filterOrElse: {
    <E, A, B extends A>(
      refinement: Refinement<A, B>,
      onFalse: (a: A) => E,
    ): <S, R>(ma: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <S, R>(ma: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  }
  readonly fromEither: <S, R, E, A>(ma: Either<E, A>) => Kind4<F, S, R, E, A>
  readonly fromOption: <E>(onNone: LazyArg<E>) => <S, R, A>(ma: Option<A>) => Kind4<F, S, R, E, A>
  readonly fromPredicate: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <S, R>(a: A) => Kind4<F, S, R, E, B>
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <S, R>(a: A) => Kind4<F, S, R, E, A>
  }
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableProfunctor`~~




#### Signature

```typescript
export interface PipeableProfunctor<F> {
  readonly promap: <E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: HKT2<F, E, A>) => HKT2<F, D, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableProfunctor2`~~




#### Signature

```typescript
export interface PipeableProfunctor2<F extends URIS2> extends PipeableFunctor2<F> {
  readonly promap: <E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: Kind2<F, E, A>) => Kind2<F, D, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableProfunctor2C`~~




#### Signature

```typescript
export interface PipeableProfunctor2C<F extends URIS2, E> extends PipeableFunctor2C<F, E> {
  readonly promap: <A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: Kind2<F, E, A>) => Kind2<F, D, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableProfunctor3`~~




#### Signature

```typescript
export interface PipeableProfunctor3<F extends URIS3> extends PipeableFunctor3<F> {
  readonly promap: <R, E, A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: Kind3<F, R, E, A>) => Kind3<F, R, D, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableProfunctor3C`~~




#### Signature

```typescript
export interface PipeableProfunctor3C<F extends URIS3, E> extends PipeableFunctor3C<F, E> {
  readonly promap: <R, A, D, B>(f: (d: D) => E, g: (a: A) => B) => (fbc: Kind3<F, R, E, A>) => Kind3<F, R, D, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableProfunctor4`~~




#### Signature

```typescript
export interface PipeableProfunctor4<F extends URIS4> extends PipeableFunctor4<F> {
  readonly promap: <S, R, E, A, D, B>(
    f: (d: D) => E,
    g: (a: A) => B,
  ) => (fbc: Kind4<F, S, R, E, A>) => Kind4<F, S, R, D, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableSemigroupoid`~~




#### Signature

```typescript
export interface PipeableSemigroupoid<F> {
  readonly compose: <E, A>(la: HKT2<F, E, A>) => <B>(ab: HKT2<F, A, B>) => HKT2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableSemigroupoid2`~~




#### Signature

```typescript
export interface PipeableSemigroupoid2<F extends URIS2> {
  readonly compose: <E, A>(la: Kind2<F, E, A>) => <B>(ab: Kind2<F, A, B>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableSemigroupoid2C`~~




#### Signature

```typescript
export interface PipeableSemigroupoid2C<F extends URIS2, E> {
  readonly compose: <A>(la: Kind2<F, E, A>) => <B>(ab: Kind2<F, A, B>) => Kind2<F, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableSemigroupoid3`~~




#### Signature

```typescript
export interface PipeableSemigroupoid3<F extends URIS3> {
  readonly compose: <R, E, A>(la: Kind3<F, R, E, A>) => <B>(ab: Kind3<F, R, A, B>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableSemigroupoid3C`~~




#### Signature

```typescript
export interface PipeableSemigroupoid3C<F extends URIS3, E> {
  readonly compose: <R, A>(la: Kind3<F, R, E, A>) => <B>(ab: Kind3<F, R, A, B>) => Kind3<F, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`PipeableSemigroupoid4`~~




#### Signature

```typescript
export interface PipeableSemigroupoid4<F extends URIS4> {
  readonly compose: <S, R, E, A>(la: Kind4<F, S, R, E, A>) => <B>(ab: Kind4<F, S, R, A, B>) => Kind4<F, S, R, E, B>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`pipe`~~

Use `pipe` from `function` module instead.




#### Signature

```typescript
export declare const pipe: typeof pipeFromFunctionModule
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`pipeable`~~




#### Signature

```typescript
export declare function pipeable<F extends URIS4, I>(
  I: {
    readonly URI: F
  } & I,
): (I extends Chain4<F>
  ? PipeableChain4<F>
  : I extends Apply4<F>
    ? PipeableApply4<F>
    : I extends Functor4<F>
      ? PipeableFunctor4<F>
      : {}) &
  (I extends Contravariant4<F> ? PipeableContravariant4<F> : {}) &
  (I extends FunctorWithIndex4<F, infer Ix> ? PipeableFunctorWithIndex4<F, Ix> : {}) &
  (I extends Bifunctor4<F> ? PipeableBifunctor4<F> : {}) &
  (I extends Extend4<F> ? PipeableExtend4<F> : {}) &
  (I extends FoldableWithIndex4<F, infer Ix>
    ? PipeableFoldableWithIndex4<F, Ix>
    : I extends Foldable4<F>
      ? PipeableFoldable4<F>
      : {}) &
  (I extends Alt4<F> ? PipeableAlt4<F> : {}) &
  (I extends FilterableWithIndex4<F, infer Ix>
    ? PipeableFilterableWithIndex4<F, Ix>
    : I extends Filterable4<F>
      ? PipeableFilterable4<F>
      : I extends Compactable4<F>
        ? PipeableCompactable4<F>
        : {}) &
  (I extends Profunctor4<F> ? PipeableProfunctor4<F> : {}) &
  (I extends Semigroupoid4<F> ? PipeableSemigroupoid4<F> : {}) &
  (I extends MonadThrow4<F> ? PipeableMonadThrow4<F> : {})



export declare function pipeable<F extends URIS3, I>(
  I: {
    readonly URI: F
  } & I,
): (I extends Chain3<F>
  ? PipeableChain3<F>
  : I extends Apply3<F>
    ? PipeableApply3<F>
    : I extends Functor3<F>
      ? PipeableFunctor3<F>
      : {}) &
  (I extends Contravariant3<F> ? PipeableContravariant3<F> : {}) &
  (I extends FunctorWithIndex3<F, infer Ix> ? PipeableFunctorWithIndex3<F, Ix> : {}) &
  (I extends Bifunctor3<F> ? PipeableBifunctor3<F> : {}) &
  (I extends Extend3<F> ? PipeableExtend3<F> : {}) &
  (I extends FoldableWithIndex3<F, infer Ix>
    ? PipeableFoldableWithIndex3<F, Ix>
    : I extends Foldable3<F>
      ? PipeableFoldable3<F>
      : {}) &
  (I extends Alt3<F> ? PipeableAlt3<F> : {}) &
  (I extends FilterableWithIndex3<F, infer Ix>
    ? PipeableFilterableWithIndex3<F, Ix>
    : I extends Filterable3<F>
      ? PipeableFilterable3<F>
      : I extends Compactable3<F>
        ? PipeableCompactable3<F>
        : {}) &
  (I extends Profunctor3<F> ? PipeableProfunctor3<F> : {}) &
  (I extends Semigroupoid3<F> ? PipeableSemigroupoid3<F> : {}) &
  (I extends MonadThrow3<F> ? PipeableMonadThrow3<F> : {})



export declare function pipeable<F extends URIS3, I, E>(
  I: {
    readonly URI: F
  } & I,
): (I extends Chain3C<F, E>
  ? PipeableChain3C<F, E>
  : I extends Apply3C<F, E>
    ? PipeableApply3C<F, E>
    : I extends Functor3C<F, E>
      ? PipeableFunctor3C<F, E>
      : {}) &
  (I extends Contravariant3C<F, E> ? PipeableContravariant3C<F, E> : {}) &
  (I extends FunctorWithIndex3C<F, infer Ix, E> ? PipeableFunctorWithIndex3C<F, Ix, E> : {}) &
  (I extends Bifunctor3C<F, E> ? PipeableBifunctor3C<F, E> : {}) &
  (I extends Extend3C<F, E> ? PipeableExtend3C<F, E> : {}) &
  (I extends FoldableWithIndex3C<F, infer Ix, E>
    ? PipeableFoldableWithIndex3C<F, Ix, E>
    : I extends Foldable3C<F, E>
      ? PipeableFoldable3C<F, E>
      : {}) &
  (I extends Alt3C<F, E> ? PipeableAlt3C<F, E> : {}) &
  (I extends FilterableWithIndex3C<F, infer Ix, E>
    ? PipeableFilterableWithIndex3C<F, Ix, E>
    : I extends Filterable3C<F, E>
      ? PipeableFilterable3C<F, E>
      : I extends Compactable3C<F, E>
        ? PipeableCompactable3C<F, E>
        : {}) &
  (I extends Profunctor3C<F, E> ? PipeableProfunctor3C<F, E> : {}) &
  (I extends Semigroupoid3C<F, E> ? PipeableSemigroupoid3C<F, E> : {}) &
  (I extends MonadThrow3C<F, E> ? PipeableMonadThrow3C<F, E> : {})



export declare function pipeable<F extends URIS2, I, E>(
  I: {
    readonly URI: F
    readonly _E: E
  } & I,
): (I extends Chain2C<F, E>
  ? PipeableChain2C<F, E>
  : I extends Apply2C<F, E>
    ? PipeableApply2C<F, E>
    : I extends Functor2C<F, E>
      ? PipeableFunctor2C<F, E>
      : {}) &
  (I extends Contravariant2C<F, E> ? PipeableContravariant2C<F, E> : {}) &
  (I extends FunctorWithIndex2C<F, infer Ix, E> ? PipeableFunctorWithIndex2C<F, Ix, E> : {}) &
  (I extends Extend2C<F, E> ? PipeableExtend2C<F, E> : {}) &
  (I extends FoldableWithIndex2C<F, infer Ix, E>
    ? PipeableFoldableWithIndex2C<F, Ix, E>
    : I extends Foldable2C<F, E>
      ? PipeableFoldable2C<F, E>
      : {}) &
  (I extends Alt2C<F, E> ? PipeableAlt2C<F, E> : {}) &
  (I extends FilterableWithIndex2C<F, infer Ix, E>
    ? PipeableFilterableWithIndex2C<F, Ix, E>
    : I extends Filterable2C<F, E>
      ? PipeableFilterable2C<F, E>
      : I extends Compactable2C<F, E>
        ? PipeableCompactable2C<F, E>
        : {}) &
  (I extends Profunctor2C<F, E> ? PipeableProfunctor2C<F, E> : {}) &
  (I extends Semigroupoid2C<F, E> ? PipeableSemigroupoid2C<F, E> : {}) &
  (I extends MonadThrow2C<F, E> ? PipeableMonadThrow2C<F, E> : {})



export declare function pipeable<F extends URIS2, I>(
  I: {
    readonly URI: F
  } & I,
): (I extends Chain2<F>
  ? PipeableChain2<F>
  : I extends Apply2<F>
    ? PipeableApply2<F>
    : I extends Functor2<F>
      ? PipeableFunctor2<F>
      : {}) &
  (I extends Contravariant2<F> ? PipeableContravariant2<F> : {}) &
  (I extends FunctorWithIndex2<F, infer Ix> ? PipeableFunctorWithIndex2<F, Ix> : {}) &
  (I extends Bifunctor2<F> ? PipeableBifunctor2<F> : {}) &
  (I extends Extend2<F> ? PipeableExtend2<F> : {}) &
  (I extends FoldableWithIndex2<F, infer Ix>
    ? PipeableFoldableWithIndex2<F, Ix>
    : I extends Foldable2<F>
      ? PipeableFoldable2<F>
      : {}) &
  (I extends Alt2<F> ? PipeableAlt2<F> : {}) &
  (I extends FilterableWithIndex2<F, infer Ix>
    ? PipeableFilterableWithIndex2<F, Ix>
    : I extends Filterable2<F>
      ? PipeableFilterable2<F>
      : I extends Compactable2<F>
        ? PipeableCompactable2<F>
        : {}) &
  (I extends Profunctor2<F> ? PipeableProfunctor2<F> : {}) &
  (I extends Semigroupoid2<F> ? PipeableSemigroupoid2<F> : {}) &
  (I extends MonadThrow2<F> ? PipeableMonadThrow2<F> : {})



export declare function pipeable<F extends URIS, I>(
  I: {
    readonly URI: F
  } & I,
): (I extends Chain1<F>
  ? PipeableChain1<F>
  : I extends Apply1<F>
    ? PipeableApply1<F>
    : I extends Functor1<F>
      ? PipeableFunctor1<F>
      : {}) &
  (I extends Contravariant1<F> ? PipeableContravariant1<F> : {}) &
  (I extends FunctorWithIndex1<F, infer Ix> ? PipeableFunctorWithIndex1<F, Ix> : {}) &
  (I extends Extend1<F> ? PipeableExtend1<F> : {}) &
  (I extends FoldableWithIndex1<F, infer Ix>
    ? PipeableFoldableWithIndex1<F, Ix>
    : I extends Foldable1<F>
      ? PipeableFoldable1<F>
      : {}) &
  (I extends Alt1<F> ? PipeableAlt1<F> : {}) &
  (I extends FilterableWithIndex1<F, infer Ix>
    ? PipeableFilterableWithIndex1<F, Ix>
    : I extends Filterable1<F>
      ? PipeableFilterable1<F>
      : I extends Compactable1<F>
        ? PipeableCompactable1<F>
        : {}) &
  (I extends MonadThrow1<F> ? PipeableMonadThrow1<F> : {})



export declare function pipeable<F, I>(
  I: {
    readonly URI: F
  } & I,
): (I extends Chain<F>
  ? PipeableChain<F>
  : I extends Apply<F>
    ? PipeableApply<F>
    : I extends Functor<F>
      ? PipeableFunctor<F>
      : {}) &
  (I extends Contravariant<F> ? PipeableContravariant<F> : {}) &
  (I extends FunctorWithIndex<F, infer Ix> ? PipeableFunctorWithIndex<F, Ix> : {}) &
  (I extends Bifunctor<F> ? PipeableBifunctor<F> : {}) &
  (I extends Extend<F> ? PipeableExtend<F> : {}) &
  (I extends FoldableWithIndex<F, infer Ix>
    ? PipeableFoldableWithIndex<F, Ix>
    : I extends Foldable<F>
      ? PipeableFoldable<F>
      : {}) &
  (I extends Alt<F> ? PipeableAlt<F> : {}) &
  (I extends FilterableWithIndex<F, infer Ix>
    ? PipeableFilterableWithIndex<F, Ix>
    : I extends Filterable<F>
      ? PipeableFilterable<F>
      : I extends Compactable<F>
        ? PipeableCompactable<F>
        : {}) &
  (I extends Profunctor<F> ? PipeableProfunctor<F> : {}) &
  (I extends Semigroupoid<F> ? PipeableSemigroupoid<F> : {}) &
  (I extends MonadThrow<F> ? PipeableMonadThrow<F> : {})

```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti