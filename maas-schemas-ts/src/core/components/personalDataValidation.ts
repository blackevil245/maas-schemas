/*

undefined
MaaS personal data validation rules

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/core/components/personalDataValidation.json';

// PersonalDataValidation
// The default export. More information at the top.
export type PersonalDataValidation = t.Branded<
  {
    id?: number;
    name?: string;
    type?: 'value' | 'enum' | 'length' | 'regex' | 'date' | 'dateDurationUntilNow';
    operator?: '>' | '>=' | '<' | '<=' | '=' | '!=' | 'in';
    config?: {
      path?: string;
      remoteSource?: string;
      value?: string | number | boolean;
      enum?: Array<{
        value?: string | number | boolean;
        name?: string;
        description?: string;
        meta?: {};
      }>;
      length?: number;
      regex?: string;
      date?: string | number;
      dateDurationUntilNow?: {
        month?: number;
        day?: number;
        hour?: number;
      };
      meta?: {};
    };
    errorCode?: string;
  },
  PersonalDataValidationBrand
>;
export type PersonalDataValidationC = t.BrandC<
  t.PartialC<{
    id: t.NumberC;
    name: t.StringC;
    type: t.UnionC<
      [
        t.LiteralC<'value'>,
        t.LiteralC<'enum'>,
        t.LiteralC<'length'>,
        t.LiteralC<'regex'>,
        t.LiteralC<'date'>,
        t.LiteralC<'dateDurationUntilNow'>,
      ]
    >;
    operator: t.UnionC<
      [
        t.LiteralC<'>'>,
        t.LiteralC<'>='>,
        t.LiteralC<'<'>,
        t.LiteralC<'<='>,
        t.LiteralC<'='>,
        t.LiteralC<'!='>,
        t.LiteralC<'in'>,
      ]
    >;
    config: t.PartialC<{
      path: t.StringC;
      remoteSource: t.StringC;
      value: t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>;
      enum: t.ArrayC<
        t.PartialC<{
          value: t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>;
          name: t.StringC;
          description: t.StringC;
          meta: t.TypeC<{}>;
        }>
      >;
      length: t.NumberC;
      regex: t.StringC;
      date: t.UnionC<[t.StringC, t.NumberC]>;
      dateDurationUntilNow: t.PartialC<{
        month: t.NumberC;
        day: t.NumberC;
        hour: t.NumberC;
      }>;
      meta: t.TypeC<{}>;
    }>;
    errorCode: t.StringC;
  }>,
  PersonalDataValidationBrand
>;
export const PersonalDataValidation: PersonalDataValidationC = t.brand(
  t.partial({
    id: t.number,
    name: t.string,
    type: t.union([
      t.literal('value'),
      t.literal('enum'),
      t.literal('length'),
      t.literal('regex'),
      t.literal('date'),
      t.literal('dateDurationUntilNow'),
    ]),
    operator: t.union([
      t.literal('>'),
      t.literal('>='),
      t.literal('<'),
      t.literal('<='),
      t.literal('='),
      t.literal('!='),
      t.literal('in'),
    ]),
    config: t.partial({
      path: t.string,
      remoteSource: t.string,
      value: t.union([t.string, t.number, t.boolean]),
      enum: t.array(
        t.partial({
          value: t.union([t.string, t.number, t.boolean]),
          name: t.string,
          description: t.string,
          meta: t.type({}),
        }),
      ),
      length: t.number,
      regex: t.string,
      date: t.union([t.string, t.number]),
      dateDurationUntilNow: t.partial({
        month: t.number,
        day: t.number,
        hour: t.number,
      }),
      meta: t.type({}),
    }),
    errorCode: t.string,
  }),
  (
    x,
  ): x is t.Branded<
    {
      id?: number;
      name?: string;
      type?: 'value' | 'enum' | 'length' | 'regex' | 'date' | 'dateDurationUntilNow';
      operator?: '>' | '>=' | '<' | '<=' | '=' | '!=' | 'in';
      config?: {
        path?: string;
        remoteSource?: string;
        value?: string | number | boolean;
        enum?: Array<{
          value?: string | number | boolean;
          name?: string;
          description?: string;
          meta?: {};
        }>;
        length?: number;
        regex?: string;
        date?: string | number;
        dateDurationUntilNow?: {
          month?: number;
          day?: number;
          hour?: number;
        };
        meta?: {};
      };
      errorCode?: string;
    },
    PersonalDataValidationBrand
  > => true,
  'PersonalDataValidation',
);
export interface PersonalDataValidationBrand {
  readonly PersonalDataValidation: unique symbol;
}

export default PersonalDataValidation;

// Success
