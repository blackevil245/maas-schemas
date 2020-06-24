/*

undefined
Set of booking state transitions

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as State_ from 'maas-schemas-ts/core/components/state';
import * as Errors_ from 'maas-schemas-ts/core/components/errors';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/core/components/state-log.json';

// ObsoleteTime
// The purpose of this remains a mystery
export type ObsoleteTime = t.Branded<string, ObsoleteTimeBrand>;
export const ObsoleteTime = t.brand(
  t.string,
  (x): x is t.Branded<string, ObsoleteTimeBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[0-9]+$')) !== null,
  'ObsoleteTime',
);
export interface ObsoleteTimeBrand {
  readonly ObsoleteTime: unique symbol;
}

// BookingStateTransition
// The purpose of this remains a mystery
export type BookingStateTransition = t.Branded<
  {
    timestamp?: Units_.Time | ObsoleteTime;
    oldState?: State_.BookingState;
    newState?: State_.BookingState;
    invalid?: boolean;
    reason?: Errors_.Reason;
  } & {
    newState: Defined;
    oldState: Defined;
    timestamp: Defined;
  },
  BookingStateTransitionBrand
>;
export const BookingStateTransition = t.brand(
  t.intersection([
    t.partial({
      timestamp: t.union([Units_.Time, ObsoleteTime]),
      oldState: State_.BookingState,
      newState: State_.BookingState,
      invalid: t.boolean,
      reason: Errors_.Reason,
    }),
    t.type({
      newState: Defined,
      oldState: Defined,
      timestamp: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      timestamp?: Units_.Time | ObsoleteTime;
      oldState?: State_.BookingState;
      newState?: State_.BookingState;
      invalid?: boolean;
      reason?: Errors_.Reason;
    } & {
      newState: Defined;
      oldState: Defined;
      timestamp: Defined;
    },
    BookingStateTransitionBrand
  > => true,
  'BookingStateTransition',
);
export interface BookingStateTransitionBrand {
  readonly BookingStateTransition: unique symbol;
}

// StateLog
// The default export. More information at the top.
export type StateLog = t.Branded<Array<BookingStateTransition>, StateLogBrand>;
export const StateLog = t.brand(
  t.array(BookingStateTransition),
  (x): x is t.Branded<Array<BookingStateTransition>, StateLogBrand> => true,
  'StateLog',
);
export interface StateLogBrand {
  readonly StateLog: unique symbol;
}

export default StateLog;

// Success
