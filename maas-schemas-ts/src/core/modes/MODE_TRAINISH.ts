/*

undefined
Schema for MODE_TRAINISH meta field

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_TRAINISH.json';

// MODE_TRAINISH
// The default export. More information at the top.
export type MODE_TRAINISH = t.Branded<{}, MODE_TRAINISHBrand>;
export const MODE_TRAINISH = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, MODE_TRAINISHBrand> => true,
  'MODE_TRAINISH',
);
export interface MODE_TRAINISHBrand {
  readonly MODE_TRAINISH: unique symbol;
}

export default MODE_TRAINISH;

// Success
