/*

undefined
Remote request schema, e.g. how TSP should call MaaS-backend

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../core/booking';
import * as BookingOption_ from '../../core/booking-option';
import * as BookingMeta_ from '../../core/booking-meta';
import * as Errors_ from '../../core/components/errors';

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

export const schemaId =
  'http://maasglobal.com/tsp/webhooks-bookings-update/remote-request.json';

// RemoteRequest
// The default export. More information at the top.
export type RemoteRequest = t.Branded<
  {
    tspId?: Booking_.TspId;
    cost?: Booking_.Cost;
    state?:
      | 'RESERVED'
      | 'CONFIRMED'
      | 'ARRIVED'
      | 'ACTIVATED'
      | 'EXPIRED'
      | 'CANCELLED'
      | 'REJECTED';
    leg?: BookingOption_.LegDelta;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    reason?: Errors_.Reason;
  } & {
    tspId: Defined;
    state: Defined;
  },
  RemoteRequestBrand
>;
export const RemoteRequest = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      cost: Booking_.Cost,
      state: t.union([
        t.literal('RESERVED'),
        t.literal('CONFIRMED'),
        t.literal('ARRIVED'),
        t.literal('ACTIVATED'),
        t.literal('EXPIRED'),
        t.literal('CANCELLED'),
        t.literal('REJECTED'),
      ]),
      leg: BookingOption_.LegDelta,
      meta: BookingMeta_.BookingMeta,
      terms: Booking_.Terms,
      token: Booking_.Token,
      reason: Errors_.Reason,
    }),
    t.type({
      tspId: Defined,
      state: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      cost?: Booking_.Cost;
      state?:
        | 'RESERVED'
        | 'CONFIRMED'
        | 'ARRIVED'
        | 'ACTIVATED'
        | 'EXPIRED'
        | 'CANCELLED'
        | 'REJECTED';
      leg?: BookingOption_.LegDelta;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      reason?: Errors_.Reason;
    } & {
      tspId: Defined;
      state: Defined;
    },
    RemoteRequestBrand
  > => true,
  'RemoteRequest',
);
export interface RemoteRequestBrand {
  readonly RemoteRequest: unique symbol;
}

export default RemoteRequest;

// Success
