
# BoundedDistributiveLattice







### Constructors

* [getMinMaxBoundedDistributiveLattice](#getminmaxboundeddistributivelattice)

### Model

* [BoundedDistributiveLattice](#boundeddistributivelattice)

## Constructors


### `getMinMaxBoundedDistributiveLattice`




#### Signature

```typescript
export declare function getMinMaxBoundedDistributiveLattice<A>(
  O: Ord<A>,
): (min: A, max: A) => BoundedDistributiveLattice<A>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `BoundedDistributiveLattice`




#### Signature

```typescript
export interface BoundedDistributiveLattice<A> extends BoundedLattice<A>, DistributiveLattice<A> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti