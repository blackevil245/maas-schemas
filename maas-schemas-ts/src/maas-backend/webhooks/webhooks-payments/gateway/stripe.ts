/*

undefined
Stripe payment webhook schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/stripe.json';

// Request
// The purpose of this remains a mystery
export type Request = t.Branded<
  {
    payload?: {
      id?: string;
      type?: string;
      data?: {
        object?: {
          id?: string;
          amount?: number;
          amount_capturable?: number;
          amount_received?: number;
          charges?: {
            data?: Array<{
              id?: string;
              object?: string;
              amount?: number;
              amount_refunded?: number;
            }>;
          };
        };
      };
    } & {
      type: Defined;
      id: Defined;
      data: Defined;
    };
    params?: {
      gatewayName?: string & 'stripe';
    } & {
      gatewayName: Defined;
    };
  } & {
    params: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        payload: t.IntersectionC<
          [
            t.PartialC<{
              id: t.StringC;
              type: t.StringC;
              data: t.PartialC<{
                object: t.PartialC<{
                  id: t.StringC;
                  amount: t.NumberC;
                  amount_capturable: t.NumberC;
                  amount_received: t.NumberC;
                  charges: t.PartialC<{
                    data: t.ArrayC<
                      t.PartialC<{
                        id: t.StringC;
                        object: t.StringC;
                        amount: t.NumberC;
                        amount_refunded: t.NumberC;
                      }>
                    >;
                  }>;
                }>;
              }>;
            }>,
            t.TypeC<{
              type: typeof Defined;
              id: typeof Defined;
              data: typeof Defined;
            }>,
          ]
        >;
        params: t.IntersectionC<
          [
            t.PartialC<{
              gatewayName: t.IntersectionC<[t.StringC, t.LiteralC<'stripe'>]>;
            }>,
            t.TypeC<{
              gatewayName: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.TypeC<{
        params: typeof Defined;
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          id: t.string,
          type: t.string,
          data: t.partial({
            object: t.partial({
              id: t.string,
              amount: t.number,
              amount_capturable: t.number,
              amount_received: t.number,
              charges: t.partial({
                data: t.array(
                  t.partial({
                    id: t.string,
                    object: t.string,
                    amount: t.number,
                    amount_refunded: t.number,
                  }),
                ),
              }),
            }),
          }),
        }),
        t.type({
          type: Defined,
          id: Defined,
          data: Defined,
        }),
      ]),
      params: t.intersection([
        t.partial({
          gatewayName: t.intersection([t.string, t.literal('stripe')]),
        }),
        t.type({
          gatewayName: Defined,
        }),
      ]),
    }),
    t.type({
      params: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        id?: string;
        type?: string;
        data?: {
          object?: {
            id?: string;
            amount?: number;
            amount_capturable?: number;
            amount_received?: number;
            charges?: {
              data?: Array<{
                id?: string;
                object?: string;
                amount?: number;
                amount_refunded?: number;
              }>;
            };
          };
        };
      } & {
        type: Defined;
        id: Defined;
        data: Defined;
      };
      params?: {
        gatewayName?: string & 'stripe';
      } & {
        gatewayName: Defined;
      };
    } & {
      params: Defined;
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

// Stripe
// The default export. More information at the top.
export type Stripe = t.Branded<unknown, StripeBrand>;
export type StripeC = t.BrandC<t.UnknownC, StripeBrand>;
export const Stripe: StripeC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, StripeBrand> => true,
  'Stripe',
);
export interface StripeBrand {
  readonly Stripe: unique symbol;
}

export default Stripe;

// Success
