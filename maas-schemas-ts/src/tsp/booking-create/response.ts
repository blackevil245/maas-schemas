/*

undefined
Response schema for creating a booking through a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as State_ from 'maas-schemas-ts/core/components/state';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

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

export const schemaId = 'http://maasglobal.com/tsp/bookings-create/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    tspId?: Booking_.TspId;
    state?: State_.BookingState;
    cost?: Booking_.Cost;
    leg?: BookingOption_.Leg;
    meta?: BookingMeta_.BookingMeta;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    tspProduct?: BookingOption_.TspProduct;
    configurator?: Configurator_.Configurator;
    customerSelection?: CustomerSelection_.CustomerSelection;
    customer?: BookingOption_.Customer;
  } & {
    tspId: Defined;
    state: Defined;
    meta: Defined;
    terms: Defined;
    token: Defined;
    tspProduct: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      state: State_.BookingState,
      cost: Booking_.Cost,
      leg: BookingOption_.Leg,
      meta: BookingMeta_.BookingMeta,
      terms: Booking_.Terms,
      token: Booking_.Token,
      tspProduct: BookingOption_.TspProduct,
      configurator: Configurator_.Configurator,
      customerSelection: CustomerSelection_.CustomerSelection,
      customer: BookingOption_.Customer,
    }),
    t.type({
      tspId: Defined,
      state: Defined,
      meta: Defined,
      terms: Defined,
      token: Defined,
      tspProduct: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      state?: State_.BookingState;
      cost?: Booking_.Cost;
      leg?: BookingOption_.Leg;
      meta?: BookingMeta_.BookingMeta;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      tspProduct?: BookingOption_.TspProduct;
      configurator?: Configurator_.Configurator;
      customerSelection?: CustomerSelection_.CustomerSelection;
      customer?: BookingOption_.Customer;
    } & {
      tspId: Defined;
      state: Defined;
      meta: Defined;
      terms: Defined;
      token: Defined;
      tspProduct: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}
/** nonEmptyArray(Response).decode(examplesResponse) // => { _tag: 'Right', right: examplesResponse } */
export const examplesResponse: NonEmptyArray<Response> = ([
  {
    leg: {
      from: {
        name: 'Siltasaarenkatu 1, Helsinki',
        address:
          'streetName:Siltasaarenkatu|streetNumber:1|city:Helsinki|zipCode:00530|country:Suomi',
        lat: 60.177252,
        lon: 24.950388,
      },
      to: {
        name: 'Ida Aalbergin tie 3, Helsinki',
        address:
          'streetName:Ida%20Aalbergin%20tie|streetNumber:1|city:Helsinki|zipCode:00400|country:Suomi',
        lat: 60.231538,
        lon: 24.892568,
      },
      startTime: 1572440451838,
      endTime: 1572441571838,
      mode: 'TAXI',
      departureDelay: 900000,
    },
    customer: {
      email: 'test@example.com',
      phone: '+358400001010',
      locale: 'en',
      clientId: 'whim',
      lastName: 'Tester',
      opaqueId: 'cafecaca',
      firstName: 'Test',
    },
    state: 'RESERVED',
    tspId: 'deadbeefdeadbeefdeadcafebeef',
    terms: {
      reusable: false,
      validity: { endTime: 1572355249017, startTime: 1572355193128 },
      reconcilable: false,
    },
    tspProduct: { id: 'testtaxi1-product1' },
    meta: {
      MODE_TAXI: {
        driver: {},
        taxiCenter: { name: 'Taksi Test1', phone: '+358400001010' },
        vehicleType: 'any',
      },
    },
    cost: { amount: 22, currency: 'EUR' },
    tspProductId: 'testtaxi1-product1',
    token: {},
  },
] as unknown) as NonEmptyArray<Response>;

export default Response;

// Success
