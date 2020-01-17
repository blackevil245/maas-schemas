/*

undefined
MaaS internationalization schemas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/i18n.json';

// Locale
// The purpose of this remains a mystery
export type Locale = t.Branded<string, LocaleBrand>;
export const Locale = t.brand(
  t.string,
  (x): x is t.Branded<string, LocaleBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^[a-z]{2,3}(?:-[a-zA-Z]{4})?(?:-[A-Z]{2,3})?$')) !== null,
  'Locale',
);
export interface LocaleBrand {
  readonly Locale: unique symbol;
}

// I18n
// The default export. More information at the top.
export type I18n = t.Branded<unknown, I18nBrand>;
export const I18n = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, I18nBrand> => true,
  'I18n',
);
export interface I18nBrand {
  readonly I18n: unique symbol;
}

export default I18n;

// Success