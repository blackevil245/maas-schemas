/*

undefined
Request schema for reverse geocoding providers

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/provider/geocoding-reverse/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<unknown, RequestBrand>;
export type RequestC = t.BrandC<t.UnknownC, RequestBrand>;
export const Request: RequestC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, RequestBrand> => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
