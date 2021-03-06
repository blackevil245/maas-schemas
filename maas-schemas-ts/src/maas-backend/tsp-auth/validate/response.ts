/*

undefined
Response schema for tsp-auth validate

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';

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
  'http://maasglobal.com/maas-backend/tsp-auth/validate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    location?: Common_.WhimDeepLink;
  } & {
    location: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      location: Common_.WhimDeepLink,
    }),
    t.type({
      location: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      location?: Common_.WhimDeepLink;
    } & {
      location: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
