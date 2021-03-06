/*

undefined
Common definitions for API schemas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/api-common.json';

// AcceptHeader
// SemVer versioning schemas for versioning our resources
export type AcceptHeader = t.Branded<string, AcceptHeaderBrand>;
export const AcceptHeader = t.brand(
  t.string,
  (x): x is t.Branded<string, AcceptHeaderBrand> =>
    typeof x !== 'string' ||
    x.match(
      RegExp(
        '\\bapplication/json[;,]\\s*version=((0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(-[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?)\\b',
      ),
    ) !== null,
  'AcceptHeader',
);
export interface AcceptHeaderBrand {
  readonly AcceptHeader: unique symbol;
}

// UserAgentHeader
// The purpose of this remains a mystery
export type UserAgentHeader = t.Branded<string, UserAgentHeaderBrand>;
export const UserAgentHeader = t.brand(
  t.string,
  (x): x is t.Branded<string, UserAgentHeaderBrand> =>
    typeof x !== 'string' || x.length >= 1,
  'UserAgentHeader',
);
export interface UserAgentHeaderBrand {
  readonly UserAgentHeader: unique symbol;
}

// Headers
// The purpose of this remains a mystery
export type Headers = t.Branded<
  {
    Accept?: AcceptHeader;
    'X-Whim-User-Agent'?: UserAgentHeader;
  },
  HeadersBrand
>;
export const Headers = t.brand(
  t.partial({
    Accept: AcceptHeader,
    'X-Whim-User-Agent': UserAgentHeader,
  }),
  (
    x,
  ): x is t.Branded<
    {
      Accept?: AcceptHeader;
      'X-Whim-User-Agent'?: UserAgentHeader;
    },
    HeadersBrand
  > => true,
  'Headers',
);
export interface HeadersBrand {
  readonly Headers: unique symbol;
}

// ApiCommon
// The default export. More information at the top.
export type ApiCommon = t.Branded<unknown, ApiCommonBrand>;
export const ApiCommon = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, ApiCommonBrand> => true,
  'ApiCommon',
);
export interface ApiCommonBrand {
  readonly ApiCommon: unique symbol;
}

export default ApiCommon;

// Success
