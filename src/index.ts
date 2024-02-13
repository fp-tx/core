/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */

import * as alt from './Alt'
import * as alternative from './Alternative'
import * as applicative from './Applicative'
import * as apply from './Apply'
import * as array from './Array'
import * as bifunctor from './Bifunctor'
import * as boolean from './boolean'
import * as booleanAlgebra from './BooleanAlgebra'
import * as bounded from './Bounded'
import * as boundedDistributiveLattice from './BoundedDistributiveLattice'
import * as boundedJoinSemilattice from './BoundedJoinSemilattice'
import * as boundedLattice from './BoundedLattice'
import * as boundedMeetSemilattice from './BoundedMeetSemilattice'
import * as category from './Category'
import * as chain from './Chain'
import * as chainRec from './ChainRec'
import * as choice from './Choice'
import * as comonad from './Comonad'
import * as compactable from './Compactable'
import * as console from './Console'
import * as const_ from './Const'
import * as contravariant from './Contravariant'
import * as date from './Date'
import * as distributiveLattice from './DistributiveLattice'
import * as either from './Either'
import * as eitherT from './EitherT'
import * as endomorphism from './Endomorphism'
import * as eq from './Eq'
import * as extend from './Extend'
import * as field from './Field'
import * as filterable from './Filterable'
import * as filterableWithIndex from './FilterableWithIndex'
import * as foldable from './Foldable'
import * as foldableWithIndex from './FoldableWithIndex'
import * as fromEither from './FromEither'
import * as fromIO from './FromIO'
import * as fromReader from './FromReader'
import * as fromState from './FromState'
import * as fromTask from './FromTask'
import * as fromThese from './FromThese'
import * as function_ from './function'
import * as functor from './Functor'
import * as functorWithIndex from './FunctorWithIndex'
import * as group from './Group'
import * as heytingAlgebra from './HeytingAlgebra'
import * as hkt from './HKT'
import * as identity from './Identity'
import * as invariant from './Invariant'
import * as io from './IO'
import * as ioEither from './IOEither'
import * as ioOption from './IOOption'
import * as ioRef from './IORef'
import * as joinSemilattice from './JoinSemilattice'
import * as json from './Json'
import * as lattice from './Lattice'
import * as magma from './Magma'
import * as map from './Map'
import * as meetSemilattice from './MeetSemilattice'
import * as monad from './Monad'
import * as monadIO from './MonadIO'
import * as monadTask from './MonadTask'
import * as monadThrow from './MonadThrow'
import * as monoid from './Monoid'
import * as naturalTransformation from './NaturalTransformation'
import * as nonEmptyArray from './NonEmptyArray'
import * as number from './number'
import * as option from './Option'
import * as optionT from './OptionT'
import * as ord from './Ord'
import * as ordering from './Ordering'
import * as pipeable from './pipeable'
import * as pointed from './Pointed'
import * as predicate from './Predicate'
import * as profunctor from './Profunctor'
import * as random from './Random'
import * as reader from './Reader'
import * as readerEither from './ReaderEither'
import * as readerIO from './ReaderIO'
import * as readerT from './ReaderT'
import * as readerTask from './ReaderTask'
import * as readerTaskEither from './ReaderTaskEither'
import * as readonlyArray from './ReadonlyArray'
import * as readonlyMap from './ReadonlyMap'
import * as readonlyNonEmptyArray from './ReadonlyNonEmptyArray'
import * as readonlyRecord from './ReadonlyRecord'
import * as readonlySet from './ReadonlySet'
import * as readonlyTuple from './ReadonlyTuple'
import * as record from './Record'
import * as refinement from './Refinement'
import * as ring from './Ring'
import * as semigroup from './Semigroup'
import * as semigroupoid from './Semigroupoid'
import * as semiring from './Semiring'
import * as separated from './Separated'
import * as set from './Set'
import * as show from './Show'
import * as state from './State'
import * as stateReaderTaskEither from './StateReaderTaskEither'
import * as stateT from './StateT'
import * as store from './Store'
import * as string from './string'
import * as strong from './Strong'
import * as struct from './struct'
import * as task from './Task'
import * as taskEither from './TaskEither'
import * as taskOption from './TaskOption'
import * as taskThese from './TaskThese'
import * as these from './These'
import * as theseT from './TheseT'
import * as traced from './Traced'
import * as traversable from './Traversable'
import * as traversableWithIndex from './TraversableWithIndex'
import * as tree from './Tree'
import * as tuple from './Tuple'
import * as unfoldable from './Unfoldable'
import * as validationT from './ValidationT'
import * as void_ from './void'
import * as witherable from './Witherable'
import * as writer from './Writer'
import * as writerT from './WriterT'
import * as zero from './Zero'

export {
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  alt,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  alternative,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  applicative,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  apply,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  array,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  bifunctor,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  boolean,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  booleanAlgebra,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  bounded,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  boundedDistributiveLattice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  boundedJoinSemilattice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  boundedLattice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  boundedMeetSemilattice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  category,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  chain,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  chainRec,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  choice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  comonad,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  compactable,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  console,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  const_ as const,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  contravariant,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  date,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  distributiveLattice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  either,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Monad transformers
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  eitherT,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  endomorphism,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  eq,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  extend,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  field,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  filterable,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  filterableWithIndex,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  foldable,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  foldableWithIndex,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  fromEither,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  fromIO,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  fromReader,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  fromState,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  fromTask,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  fromThese,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  function_ as function,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  functor,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  functorWithIndex,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  group,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  heytingAlgebra,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  hkt,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  identity,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  invariant,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  io,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  ioEither,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  ioOption,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  ioRef,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  joinSemilattice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  json,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  lattice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  magma,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  map,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  meetSemilattice,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  monad,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  monadIO,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  monadTask,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  monadThrow,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  monoid,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  naturalTransformation,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  nonEmptyArray,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  number,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  option,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Monad transformers
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  optionT,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  ord,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  ordering,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  pipeable,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  pointed,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  predicate,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  profunctor,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  random,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  reader,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readerEither,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readerIO,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Monad transformers
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readerT,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readerTask,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readerTaskEither,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readonlyArray,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readonlyMap,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readonlyNonEmptyArray,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readonlyRecord,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readonlySet,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  readonlyTuple,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  record,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  refinement,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  ring,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  semigroup,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  semigroupoid,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  semiring,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  separated,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  set,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  show,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  state,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  stateReaderTaskEither,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Monad transformers
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  stateT,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  store,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  string,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  strong,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  struct,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  task,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  taskEither,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  taskOption,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  taskThese,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  these,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Monad transformers
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  theseT,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  traced,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  traversable,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  traversableWithIndex,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  tree,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  tuple,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  unfoldable,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  validationT,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Zone of death
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @deprecated Use applicative validation instead
   * @public
   */
  void_ as void,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  witherable,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Data types
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  writer,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Monad transformers
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  writerT,
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Model
   * @remarks
   * Original License: MIT – Copyright (c) 2017-present Giulio Canti
   * @public
   */
  zero,
}
