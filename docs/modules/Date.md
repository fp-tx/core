
# Date







### Instances

* [Eq](#eq)
* [Ord](#ord)
* [eqDate](#eqdate)
* [eqMonth](#eqmonth)
* [eqYear](#eqyear)

### Constructors

* [create](#create)

### Utilities

* [now](#now)

## Instances


### `Eq`




#### Signature

```typescript
export declare const Eq: E.Eq<Date>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Ord`




#### Signature

```typescript
export declare const Ord: O.Ord<Date>
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { Ord } from '@fp-tx/core/Date'

assert.deepStrictEqual(Ord.compare(new Date(1, 1, 2020), new Date(1, 1, 2021)), -1)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `eqDate`




#### Signature

```typescript
export declare const eqDate: E.Eq<Date>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `eqMonth`




#### Signature

```typescript
export declare const eqMonth: E.Eq<Date>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `eqYear`




#### Signature

```typescript
export declare const eqYear: E.Eq<Date>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Constructors


### `create`

Returns the current `Date`




#### Signature

```typescript
export declare const create: IO<Date>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `now`

Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC




#### Signature

```typescript
export declare const now: IO<number>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti