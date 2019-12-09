/*

undefined
MaaS booking terms and condition for its business engine

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Cost_ from 'maas-schemas-ts/core/components/cost';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';
import * as Units_ from 'maas-schemas-ts/core/components/units';

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

export const schemaId = 'http://maasglobal.com/core/components/terms.json';

// Seat
// Ticket's seat information for long distance trains, coaches or flights
export type Seat = t.Branded<
  {
    route?: string;
    number?: string | number;
    coach?: string | number;
  },
  SeatBrand
>;
export const Seat = t.brand(
  t.partial({
    route: t.string,
    number: t.union([t.string, t.number]),
    coach: t.union([t.string, t.number]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      route?: string;
      number?: string | number;
      coach?: string | number;
    },
    SeatBrand
  > => true,
  'Seat',
);
export interface SeatBrand {
  readonly Seat: unique symbol;
}

// Cancellation
// The purpose of this remains a mystery
export type Cancellation = t.Branded<
  {
    cancellable?: boolean;
    cost?: Cost_.Cost;
    fare?: Fare_.Fare;
    refunded?: boolean;
  } & {
    cancellable: Defined;
    refunded: Defined;
  },
  CancellationBrand
>;
export const Cancellation = t.brand(
  t.intersection([
    t.partial({
      cancellable: t.boolean,
      cost: Cost_.Cost,
      fare: Fare_.Fare,
      refunded: t.boolean,
    }),
    t.type({
      cancellable: Defined,
      refunded: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      cancellable?: boolean;
      cost?: Cost_.Cost;
      fare?: Fare_.Fare;
      refunded?: boolean;
    } & {
      cancellable: Defined;
      refunded: Defined;
    },
    CancellationBrand
  > => true,
  'Cancellation',
);
export interface CancellationBrand {
  readonly Cancellation: unique symbol;
}

// Amendment
// The purpose of this remains a mystery
export type Amendment = t.Branded<
  {
    amendable?: boolean;
    cost?: Cost_.Cost;
    fare?: Fare_.Fare;
  } & {
    amendable: Defined;
  },
  AmendmentBrand
>;
export const Amendment = t.brand(
  t.intersection([
    t.partial({
      amendable: t.boolean,
      cost: Cost_.Cost,
      fare: Fare_.Fare,
    }),
    t.type({
      amendable: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      amendable?: boolean;
      cost?: Cost_.Cost;
      fare?: Fare_.Fare;
    } & {
      amendable: Defined;
    },
    AmendmentBrand
  > => true,
  'Amendment',
);
export interface AmendmentBrand {
  readonly Amendment: unique symbol;
}

// Terms
// The default export. More information at the top.
export type Terms = t.Branded<
  {
    type?: string;
    seatings?: Array<Seat>;
    validity?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      startTimeReturn?: Units_.Time;
      endTimeReturn?: Units_.Time;
    } & {
      startTime: Defined;
      endTime: Defined;
    };
    reusable?: boolean;
    reconcilable?: boolean;
    restrictions?: {
      singleDevice?: boolean;
      skipRestrictionCheck?: boolean;
      freeTicket?: {};
    };
    cancellation?: {
      cancellationFormActionUrl?: Units_.Url;
      outward?: Cancellation;
      return?: Cancellation;
    };
    amendment?: {
      outward?: Amendment;
      return?: Amendment;
    };
    fareRates?: Array<
      {
        amount?: number;
        currency?: Units_.Currency;
        timeInterval?: number;
        startAt?: number;
        type?: 'maxRate' | 'missedReturnPenalty' | 'extra';
      } & {
        amount: Defined;
        currency: Defined;
      }
    >;
  },
  TermsBrand
>;
export const Terms = t.brand(
  t.partial({
    type: t.string,
    seatings: t.array(Seat),
    validity: t.intersection([
      t.partial({
        startTime: Units_.Time,
        endTime: Units_.Time,
        startTimeReturn: Units_.Time,
        endTimeReturn: Units_.Time,
      }),
      t.type({
        startTime: Defined,
        endTime: Defined,
      }),
    ]),
    reusable: t.boolean,
    reconcilable: t.boolean,
    restrictions: t.partial({
      singleDevice: t.boolean,
      skipRestrictionCheck: t.boolean,
      freeTicket: t.type({}),
    }),
    cancellation: t.partial({
      cancellationFormActionUrl: Units_.Url,
      outward: Cancellation,
      return: Cancellation,
    }),
    amendment: t.partial({
      outward: Amendment,
      return: Amendment,
    }),
    fareRates: t.array(
      t.intersection([
        t.partial({
          amount: t.number,
          currency: Units_.Currency,
          timeInterval: t.number,
          startAt: t.number,
          type: t.union([
            t.literal('maxRate'),
            t.literal('missedReturnPenalty'),
            t.literal('extra'),
          ]),
        }),
        t.type({
          amount: Defined,
          currency: Defined,
        }),
      ]),
    ),
  }),
  (
    x,
  ): x is t.Branded<
    {
      type?: string;
      seatings?: Array<Seat>;
      validity?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
        startTimeReturn?: Units_.Time;
        endTimeReturn?: Units_.Time;
      } & {
        startTime: Defined;
        endTime: Defined;
      };
      reusable?: boolean;
      reconcilable?: boolean;
      restrictions?: {
        singleDevice?: boolean;
        skipRestrictionCheck?: boolean;
        freeTicket?: {};
      };
      cancellation?: {
        cancellationFormActionUrl?: Units_.Url;
        outward?: Cancellation;
        return?: Cancellation;
      };
      amendment?: {
        outward?: Amendment;
        return?: Amendment;
      };
      fareRates?: Array<
        {
          amount?: number;
          currency?: Units_.Currency;
          timeInterval?: number;
          startAt?: number;
          type?: 'maxRate' | 'missedReturnPenalty' | 'extra';
        } & {
          amount: Defined;
          currency: Defined;
        }
      >;
    },
    TermsBrand
  > => true,
  'Terms',
);
export interface TermsBrand {
  readonly Terms: unique symbol;
}

export default Terms;

// Success
