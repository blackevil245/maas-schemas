/*

undefined
Schema for MODE_SUBWAY meta field

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_SUBWAY.json';

// MODE_SUBWAY
// The default export. More information at the top.
export type MODE_SUBWAY = t.Branded<{}, MODE_SUBWAYBrand>;
export const MODE_SUBWAY = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, MODE_SUBWAYBrand> => true,
  'MODE_SUBWAY',
);
export interface MODE_SUBWAYBrand {
  readonly MODE_SUBWAY: unique symbol;
}

export default MODE_SUBWAY;

// Success
