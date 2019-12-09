/*

undefined
Partial (Points only) GeoJSON Schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Address_ from 'maas-schemas-ts/core/components/address';

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

export const schemaId = 'http://maasglobal.com/core/components/geolocation.json';

// Geometry
// The purpose of this remains a mystery
export type Geometry = t.Branded<
  {
    type?: 'Point';
    coordinates?: UnitsGeo_.ShortLocation;
  } & {
    type: Defined;
    coordinates: Defined;
  },
  GeometryBrand
>;
export const Geometry = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('Point'),
      coordinates: UnitsGeo_.ShortLocation,
    }),
    t.type({
      type: Defined,
      coordinates: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'Point';
      coordinates?: UnitsGeo_.ShortLocation;
    } & {
      type: Defined;
      coordinates: Defined;
    },
    GeometryBrand
  > => true,
  'Geometry',
);
export interface GeometryBrand {
  readonly Geometry: unique symbol;
}

// Properties
// The purpose of this remains a mystery
export type Properties = t.Branded<
  {
    name?: string;
    streetNumber?: string;
    streetName?: string;
    city?: string;
    country?: string;
    countryCode?: string;
    houseNumber?: number;
    zipcode?: Address_.ZipCode;
  } & {
    name: Defined;
  },
  PropertiesBrand
>;
export const Properties = t.brand(
  t.intersection([
    t.partial({
      name: t.string,
      streetNumber: t.string,
      streetName: t.string,
      city: t.string,
      country: t.string,
      countryCode: t.string,
      houseNumber: t.number,
      zipcode: Address_.ZipCode,
    }),
    t.type({
      name: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: string;
      streetNumber?: string;
      streetName?: string;
      city?: string;
      country?: string;
      countryCode?: string;
      houseNumber?: number;
      zipcode?: Address_.ZipCode;
    } & {
      name: Defined;
    },
    PropertiesBrand
  > => true,
  'Properties',
);
export interface PropertiesBrand {
  readonly Properties: unique symbol;
}

// Feature
// The purpose of this remains a mystery
export type Feature = t.Branded<
  {
    type?: 'Feature';
    geometry?: Geometry;
    properties?: Properties;
  } & {
    type: Defined;
    geometry: Defined;
    properties: Defined;
  },
  FeatureBrand
>;
export const Feature = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('Feature'),
      geometry: Geometry,
      properties: Properties,
    }),
    t.type({
      type: Defined,
      geometry: Defined,
      properties: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'Feature';
      geometry?: Geometry;
      properties?: Properties;
    } & {
      type: Defined;
      geometry: Defined;
      properties: Defined;
    },
    FeatureBrand
  > => true,
  'Feature',
);
export interface FeatureBrand {
  readonly Feature: unique symbol;
}

// FeatureCollection
// The purpose of this remains a mystery
export type FeatureCollection = t.Branded<
  {
    type?: 'FeatureCollection';
    features?: Array<Feature>;
  } & {
    type: Defined;
    features: Defined;
  },
  FeatureCollectionBrand
>;
export const FeatureCollection = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('FeatureCollection'),
      features: t.array(Feature),
    }),
    t.type({
      type: Defined,
      features: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'FeatureCollection';
      features?: Array<Feature>;
    } & {
      type: Defined;
      features: Defined;
    },
    FeatureCollectionBrand
  > => true,
  'FeatureCollection',
);
export interface FeatureCollectionBrand {
  readonly FeatureCollection: unique symbol;
}

// Geolocation
// The default export. More information at the top.
export type Geolocation = t.Branded<unknown, GeolocationBrand>;
export const Geolocation = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, GeolocationBrand> => true,
  'Geolocation',
);
export interface GeolocationBrand {
  readonly Geolocation: unique symbol;
}

export default Geolocation;

// Success
