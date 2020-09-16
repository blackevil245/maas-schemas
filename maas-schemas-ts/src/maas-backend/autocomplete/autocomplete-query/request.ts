/*

undefined
Request schema for autocomplete

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as Address_ from '../../../core/components/address';
import * as UnitsGeo_ from '../../../core/components/units-geo';
import * as ApiCommon_ from '../../../core/components/api-common';

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
  'http://maasglobal.com/maas-backend/autocomplete/autocomplete-query/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      name?: Address_.PlaceName;
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
      count?: number;
      radius?: UnitsGeo_.Distance;
    } & {
      name: Defined;
    };
    headers?: ApiCommon_.Headers;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    identityId: typeof Units_.IdentityId;
    payload: t.IntersectionC<
      [
        t.PartialC<{
          name: typeof Address_.PlaceName;
          lat: typeof UnitsGeo_.RelaxedLatitude;
          lon: typeof UnitsGeo_.RelaxedLongitude;
          count: t.NumberC;
          radius: typeof UnitsGeo_.Distance;
        }>,
        t.TypeC<{
          name: typeof Defined;
        }>,
      ]
    >;
    headers: typeof ApiCommon_.Headers;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    payload: t.intersection([
      t.partial({
        name: Address_.PlaceName,
        lat: UnitsGeo_.RelaxedLatitude,
        lon: UnitsGeo_.RelaxedLongitude,
        count: t.number,
        radius: UnitsGeo_.Distance,
      }),
      t.type({
        name: Defined,
      }),
    ]),
    headers: ApiCommon_.Headers,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        name?: Address_.PlaceName;
        lat?: UnitsGeo_.RelaxedLatitude;
        lon?: UnitsGeo_.RelaxedLongitude;
        count?: number;
        radius?: UnitsGeo_.Distance;
      } & {
        name: Defined;
      };
      headers?: ApiCommon_.Headers;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
