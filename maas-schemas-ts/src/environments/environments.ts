/*

undefined
The base environments object with several environment groups and related meta data

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Units_ from 'maas-schemas-ts/core/components/units';
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

export const schemaId = 'http://maasglobal.com/environments/environments.json';

// Developer
// The purpose of this remains a mystery
export type Developer = t.Branded<
  {
    name?: Common_.PersonalName;
    email?: Common_.Email;
  } & {
    name: Defined;
  },
  DeveloperBrand
>;
export const Developer = t.brand(
  t.intersection([
    t.partial({
      name: Common_.PersonalName,
      email: Common_.Email,
    }),
    t.type({
      name: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: Common_.PersonalName;
      email?: Common_.Email;
    } & {
      name: Defined;
    },
    DeveloperBrand
  > => true,
  'Developer',
);
export interface DeveloperBrand {
  readonly Developer: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Developer)).decodeSync(examplesDeveloper) // => examplesDeveloper */
export const examplesDeveloper: NonEmptyArray<Developer> = ([
  { name: 'Alisha Admin', email: 'admin@example.com' },
  { name: 'Dennis Developer' },
] as unknown) as NonEmptyArray<Developer>;

// EnvironmentId
// The purpose of this remains a mystery
export type EnvironmentId = t.Branded<string & Units_.HostnameLabel, EnvironmentIdBrand>;
export const EnvironmentId = t.brand(
  t.intersection([t.string, Units_.HostnameLabel]),
  (x): x is t.Branded<string & Units_.HostnameLabel, EnvironmentIdBrand> => true,
  'EnvironmentId',
);
export interface EnvironmentIdBrand {
  readonly EnvironmentId: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentId)).decodeSync(examplesEnvironmentId) // => examplesEnvironmentId */
export const examplesEnvironmentId: NonEmptyArray<EnvironmentId> = ([
  'production',
  'testing',
  'environment13',
  'fantasy-topping',
] as unknown) as NonEmptyArray<EnvironmentId>;

// EnvironmentUrl
// The purpose of this remains a mystery
export type EnvironmentUrl = t.Branded<string & Units_.Url, EnvironmentUrlBrand>;
export const EnvironmentUrl = t.brand(
  t.intersection([t.string, Units_.Url]),
  (x): x is t.Branded<string & Units_.Url, EnvironmentUrlBrand> =>
    typeof x !== 'string' || x.match(RegExp('^https:')) !== null,
  'EnvironmentUrl',
);
export interface EnvironmentUrlBrand {
  readonly EnvironmentUrl: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentUrl)).decodeSync(examplesEnvironmentUrl) // => examplesEnvironmentUrl */
export const examplesEnvironmentUrl: NonEmptyArray<EnvironmentUrl> = ([
  'https://production.example.com/api/',
  'https://testing.example.com/api/',
  'https://environment13.example.com/api/',
  'https://fantasy-toppign.example.com/api/',
] as unknown) as NonEmptyArray<EnvironmentUrl>;

// EnvironmentLive
// Live environments are connected to actual payment and TSP services
export type EnvironmentLive = t.Branded<boolean, EnvironmentLiveBrand>;
export const EnvironmentLive = t.brand(
  t.boolean,
  (x): x is t.Branded<boolean, EnvironmentLiveBrand> => true,
  'EnvironmentLive',
);
export interface EnvironmentLiveBrand {
  readonly EnvironmentLive: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentLive)).decodeSync(examplesEnvironmentLive) // => examplesEnvironmentLive */
export const examplesEnvironmentLive: NonEmptyArray<EnvironmentLive> = ([
  true,
  false,
] as unknown) as NonEmptyArray<EnvironmentLive>;

// EnvironmentName
// The purpose of this remains a mystery
export type EnvironmentName = t.Branded<string, EnvironmentNameBrand>;
export const EnvironmentName = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentNameBrand> => true,
  'EnvironmentName',
);
export interface EnvironmentNameBrand {
  readonly EnvironmentName: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentName)).decodeSync(examplesEnvironmentName) // => examplesEnvironmentName */
export const examplesEnvironmentName: NonEmptyArray<EnvironmentName> = ([
  'production',
  'testing',
  'environment 13',
  'Fantasy Topping',
] as unknown) as NonEmptyArray<EnvironmentName>;

// EnvironmentDescription
// The purpose of this remains a mystery
export type EnvironmentDescription = t.Branded<string, EnvironmentDescriptionBrand>;
export const EnvironmentDescription = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentDescriptionBrand> => true,
  'EnvironmentDescription',
);
export interface EnvironmentDescriptionBrand {
  readonly EnvironmentDescription: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentDescription)).decodeSync(examplesEnvironmentDescription) // => examplesEnvironmentDescription */
export const examplesEnvironmentDescription: NonEmptyArray<EnvironmentDescription> = ([
  'Production environment',
  'Testing environment',
  'Add support for pizza customization',
] as unknown) as NonEmptyArray<EnvironmentDescription>;

// Environment
// The purpose of this remains a mystery
export type Environment = t.Branded<
  {
    id?: EnvironmentId;
    api?: EnvironmentUrl;
    live?: EnvironmentLive;
    contact?: Developer;
    name?: EnvironmentName;
    description?: EnvironmentDescription;
  } & {
    id: Defined;
    api: Defined;
    live: Defined;
    contact: Defined;
  },
  EnvironmentBrand
>;
export const Environment = t.brand(
  t.intersection([
    t.partial({
      id: EnvironmentId,
      api: EnvironmentUrl,
      live: EnvironmentLive,
      contact: Developer,
      name: EnvironmentName,
      description: EnvironmentDescription,
    }),
    t.type({
      id: Defined,
      api: Defined,
      live: Defined,
      contact: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: EnvironmentId;
      api?: EnvironmentUrl;
      live?: EnvironmentLive;
      contact?: Developer;
      name?: EnvironmentName;
      description?: EnvironmentDescription;
    } & {
      id: Defined;
      api: Defined;
      live: Defined;
      contact: Defined;
    },
    EnvironmentBrand
  > => true,
  'Environment',
);
export interface EnvironmentBrand {
  readonly Environment: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Environment)).decodeSync(examplesEnvironment) // => examplesEnvironment */
export const examplesEnvironment: NonEmptyArray<Environment> = ([
  {
    id: 'production',
    api: 'https://production.example.com/api/',
    live: true,
    contact: { name: 'Alisha Admin', email: 'admin@example.com' },
    description: 'Production environment',
  },
] as unknown) as NonEmptyArray<Environment>;

// DevEnvironment
// The purpose of this remains a mystery
export type DevEnvironment = t.Branded<
  Environment &
    ({
      live?: false;
    } & {
      live: Defined;
    }),
  DevEnvironmentBrand
>;
export const DevEnvironment = t.brand(
  t.intersection([
    Environment,
    t.intersection([
      t.partial({
        live: t.literal(false),
      }),
      t.type({
        live: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    Environment &
      ({
        live?: false;
      } & {
        live: Defined;
      }),
    DevEnvironmentBrand
  > => true,
  'DevEnvironment',
);
export interface DevEnvironmentBrand {
  readonly DevEnvironment: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(DevEnvironment)).decodeSync(examplesDevEnvironment) // => examplesDevEnvironment */
export const examplesDevEnvironment: NonEmptyArray<DevEnvironment> = ([
  {
    id: 'testing',
    api: 'https://testing.example.com/api/',
    live: false,
    contact: { name: 'Alisha Admin' },
    description: 'Testing environment',
  },
] as unknown) as NonEmptyArray<DevEnvironment>;

// EnvironmentGroupName
// The purpose of this remains a mystery
export type EnvironmentGroupName = t.Branded<string, EnvironmentGroupNameBrand>;
export const EnvironmentGroupName = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentGroupNameBrand> => true,
  'EnvironmentGroupName',
);
export interface EnvironmentGroupNameBrand {
  readonly EnvironmentGroupName: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentGroupName)).decodeSync(examplesEnvironmentGroupName) // => examplesEnvironmentGroupName */
export const examplesEnvironmentGroupName: NonEmptyArray<EnvironmentGroupName> = ([
  'Core Environments',
  'Development Environments',
] as unknown) as NonEmptyArray<EnvironmentGroupName>;

// EnvironmentGroupDescription
// The purpose of this remains a mystery
export type EnvironmentGroupDescription = t.Branded<
  string,
  EnvironmentGroupDescriptionBrand
>;
export const EnvironmentGroupDescription = t.brand(
  t.string,
  (x): x is t.Branded<string, EnvironmentGroupDescriptionBrand> => true,
  'EnvironmentGroupDescription',
);
export interface EnvironmentGroupDescriptionBrand {
  readonly EnvironmentGroupDescription: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentGroupDescription)).decodeSync(examplesEnvironmentGroupDescription) // => examplesEnvironmentGroupDescription */
export const examplesEnvironmentGroupDescription: NonEmptyArray<EnvironmentGroupDescription> = ([
  'The main environments used by paying customers',
  'Production like environments used for quality assurance',
  'Development environments used for feature development',
] as unknown) as NonEmptyArray<EnvironmentGroupDescription>;

// EnvironmentGroup
// The purpose of this remains a mystery
export type EnvironmentGroup = t.Branded<
  {
    name?: EnvironmentGroupName;
    envs?: Array<Environment>;
    description?: EnvironmentGroupDescription;
  } & {
    name: Defined;
    envs: Defined;
  },
  EnvironmentGroupBrand
>;
export const EnvironmentGroup = t.brand(
  t.intersection([
    t.partial({
      name: EnvironmentGroupName,
      envs: t.array(Environment),
      description: EnvironmentGroupDescription,
    }),
    t.type({
      name: Defined,
      envs: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: EnvironmentGroupName;
      envs?: Array<Environment>;
      description?: EnvironmentGroupDescription;
    } & {
      name: Defined;
      envs: Defined;
    },
    EnvironmentGroupBrand
  > => true,
  'EnvironmentGroup',
);
export interface EnvironmentGroupBrand {
  readonly EnvironmentGroup: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(EnvironmentGroup)).decodeSync(examplesEnvironmentGroup) // => examplesEnvironmentGroup */
export const examplesEnvironmentGroup: NonEmptyArray<EnvironmentGroup> = ([
  {
    name: 'Core Environments',
    envs: [
      {
        id: 'production',
        api: 'https://production.example.com/api/',
        live: true,
        contact: { name: 'Alisha Admin', email: 'admin@example.com' },
        description: 'Production environment',
      },
      {
        id: 'testing',
        api: 'https://testing.example.com/api/',
        live: false,
        contact: { name: 'Alisha Admin' },
        description: 'Testing environment',
      },
    ],
  },
  {
    name: 'Development Environments',
    envs: [
      {
        id: 'fantasy-topping',
        api: 'https://fantasy-topping.example.com/api/',
        live: false,
        contact: { name: 'Dennis Developer' },
        name: 'Fantasy Topping',
        description: 'Add support for pizza customization',
      },
    ],
  },
] as unknown) as NonEmptyArray<EnvironmentGroup>;

// Environments
// The default export. More information at the top.
export type Environments = t.Branded<
  {
    index?: Array<EnvironmentGroup>;
  } & {
    index: Defined;
  },
  EnvironmentsBrand
>;
export const Environments = t.brand(
  t.intersection([
    t.partial({
      index: t.array(EnvironmentGroup),
    }),
    t.type({
      index: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      index?: Array<EnvironmentGroup>;
    } & {
      index: Defined;
    },
    EnvironmentsBrand
  > => true,
  'Environments',
);
export interface EnvironmentsBrand {
  readonly Environments: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Environments)).decodeSync(examplesEnvironments) // => examplesEnvironments */
export const examplesEnvironments: NonEmptyArray<Environments> = ([
  {
    index: [
      {
        name: 'Core Environments',
        envs: [
          {
            id: 'production',
            api: 'https://production.example.com/api/',
            live: true,
            contact: { name: 'Alisha Admin', email: 'admin@example.com' },
            description: 'Production environment',
          },
          {
            id: 'testing',
            api: 'https://testing.example.com/api/',
            live: false,
            contact: { name: 'Alisha Admin' },
            description: 'Testing environment',
          },
        ],
      },
      {
        name: 'Development Environments',
        envs: [
          {
            id: 'fantasy-topping',
            api: 'https://fantasy-topping.example.com/api/',
            live: false,
            contact: { name: 'Dennis Developer' },
            name: 'Fantasy Topping',
            description: 'Add support for pizza customization',
          },
        ],
      },
    ],
  },
] as unknown) as NonEmptyArray<Environments>;

export default Environments;

// Success
