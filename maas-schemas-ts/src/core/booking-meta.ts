/*

undefined
TSP/mode-specific additional information. The TSP adapter should set MODE_{mode} with defined data, otherwise 'meta' can be used freely.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as MODE_WALK_ from 'maas-schemas-ts/core/modes/MODE_WALK';
import * as MODE_BICYCLE_ from 'maas-schemas-ts/core/modes/MODE_BICYCLE';
import * as MODE_CAR_ from 'maas-schemas-ts/core/modes/MODE_CAR';
import * as MODE_TRAM_ from 'maas-schemas-ts/core/modes/MODE_TRAM';
import * as MODE_SUBWAY_ from 'maas-schemas-ts/core/modes/MODE_SUBWAY';
import * as MODE_RAIL_ from 'maas-schemas-ts/core/modes/MODE_RAIL';
import * as MODE_BUS_ from 'maas-schemas-ts/core/modes/MODE_BUS';
import * as MODE_FERRY_ from 'maas-schemas-ts/core/modes/MODE_FERRY';
import * as MODE_CABLE_CAR_ from 'maas-schemas-ts/core/modes/MODE_CABLE_CAR';
import * as MODE_GONDOLA_ from 'maas-schemas-ts/core/modes/MODE_GONDOLA';
import * as MODE_FUNICULAR_ from 'maas-schemas-ts/core/modes/MODE_FUNICULAR';
import * as MODE_SHARED_BICYCLE_ from 'maas-schemas-ts/core/modes/MODE_SHARED_BICYCLE';
import * as MODE_SHARED_E_BICYCLE_ from 'maas-schemas-ts/core/modes/MODE_SHARED_E_BICYCLE';
import * as MODE_SHARED_CAR_ from 'maas-schemas-ts/core/modes/MODE_SHARED_CAR';
import * as MODE_TRANSIT_ from 'maas-schemas-ts/core/modes/MODE_TRANSIT';
import * as MODE_TRAIN_ from 'maas-schemas-ts/core/modes/MODE_TRAIN';
import * as MODE_TRAINISH_ from 'maas-schemas-ts/core/modes/MODE_TRAINISH';
import * as MODE_BUSISH_ from 'maas-schemas-ts/core/modes/MODE_BUSISH';
import * as MODE_TAXI_ from 'maas-schemas-ts/core/modes/MODE_TAXI';
import * as MODE_SCOOTER_ from 'maas-schemas-ts/core/modes/MODE_SCOOTER';

export const schemaId = 'http://maasglobal.com/core/booking-meta.json';

// BookingMeta
// The default export. More information at the top.
export type BookingMeta = t.Branded<
  {
    MODE_WALK?: MODE_WALK_.MODE_WALK;
    MODE_BICYCLE?: MODE_BICYCLE_.MODE_BICYCLE;
    MODE_CAR?: MODE_CAR_.MODE_CAR;
    MODE_TRAM?: MODE_TRAM_.MODE_TRAM;
    MODE_SUBWAY?: MODE_SUBWAY_.MODE_SUBWAY;
    MODE_RAIL?: MODE_RAIL_.MODE_RAIL;
    MODE_BUS?: MODE_BUS_.MODE_BUS;
    MODE_FERRY?: MODE_FERRY_.MODE_FERRY;
    MODE_CABLE_CAR?: MODE_CABLE_CAR_.MODE_CABLE_CAR;
    MODE_GONDOLA?: MODE_GONDOLA_.MODE_GONDOLA;
    MODE_FUNICULAR?: MODE_FUNICULAR_.MODE_FUNICULAR;
    MODE_SHARED_BICYCLE?: MODE_SHARED_BICYCLE_.MODE_SHARED_BICYCLE;
    MODE_SHARED_E_BICYCLE?: MODE_SHARED_E_BICYCLE_.MODE_SHARED_E_BICYCLE;
    MODE_SHARED_CAR?: MODE_SHARED_CAR_.MODE_SHARED_CAR;
    MODE_TRANSIT?: MODE_TRANSIT_.MODE_TRANSIT;
    MODE_TRAIN?: MODE_TRAIN_.MODE_TRAIN;
    MODE_TRAINISH?: MODE_TRAINISH_.MODE_TRAINISH;
    MODE_BUSISH?: MODE_BUSISH_.MODE_BUSISH;
    MODE_TAXI?: MODE_TAXI_.MODE_TAXI;
    MODE_SCOOTER?: MODE_SCOOTER_.MODE_SCOOTER;
  },
  BookingMetaBrand
>;
export const BookingMeta = t.brand(
  t.partial({
    MODE_WALK: MODE_WALK_.MODE_WALK,
    MODE_BICYCLE: MODE_BICYCLE_.MODE_BICYCLE,
    MODE_CAR: MODE_CAR_.MODE_CAR,
    MODE_TRAM: MODE_TRAM_.MODE_TRAM,
    MODE_SUBWAY: MODE_SUBWAY_.MODE_SUBWAY,
    MODE_RAIL: MODE_RAIL_.MODE_RAIL,
    MODE_BUS: MODE_BUS_.MODE_BUS,
    MODE_FERRY: MODE_FERRY_.MODE_FERRY,
    MODE_CABLE_CAR: MODE_CABLE_CAR_.MODE_CABLE_CAR,
    MODE_GONDOLA: MODE_GONDOLA_.MODE_GONDOLA,
    MODE_FUNICULAR: MODE_FUNICULAR_.MODE_FUNICULAR,
    MODE_SHARED_BICYCLE: MODE_SHARED_BICYCLE_.MODE_SHARED_BICYCLE,
    MODE_SHARED_E_BICYCLE: MODE_SHARED_E_BICYCLE_.MODE_SHARED_E_BICYCLE,
    MODE_SHARED_CAR: MODE_SHARED_CAR_.MODE_SHARED_CAR,
    MODE_TRANSIT: MODE_TRANSIT_.MODE_TRANSIT,
    MODE_TRAIN: MODE_TRAIN_.MODE_TRAIN,
    MODE_TRAINISH: MODE_TRAINISH_.MODE_TRAINISH,
    MODE_BUSISH: MODE_BUSISH_.MODE_BUSISH,
    MODE_TAXI: MODE_TAXI_.MODE_TAXI,
    MODE_SCOOTER: MODE_SCOOTER_.MODE_SCOOTER,
  }),
  (
    x,
  ): x is t.Branded<
    {
      MODE_WALK?: MODE_WALK_.MODE_WALK;
      MODE_BICYCLE?: MODE_BICYCLE_.MODE_BICYCLE;
      MODE_CAR?: MODE_CAR_.MODE_CAR;
      MODE_TRAM?: MODE_TRAM_.MODE_TRAM;
      MODE_SUBWAY?: MODE_SUBWAY_.MODE_SUBWAY;
      MODE_RAIL?: MODE_RAIL_.MODE_RAIL;
      MODE_BUS?: MODE_BUS_.MODE_BUS;
      MODE_FERRY?: MODE_FERRY_.MODE_FERRY;
      MODE_CABLE_CAR?: MODE_CABLE_CAR_.MODE_CABLE_CAR;
      MODE_GONDOLA?: MODE_GONDOLA_.MODE_GONDOLA;
      MODE_FUNICULAR?: MODE_FUNICULAR_.MODE_FUNICULAR;
      MODE_SHARED_BICYCLE?: MODE_SHARED_BICYCLE_.MODE_SHARED_BICYCLE;
      MODE_SHARED_E_BICYCLE?: MODE_SHARED_E_BICYCLE_.MODE_SHARED_E_BICYCLE;
      MODE_SHARED_CAR?: MODE_SHARED_CAR_.MODE_SHARED_CAR;
      MODE_TRANSIT?: MODE_TRANSIT_.MODE_TRANSIT;
      MODE_TRAIN?: MODE_TRAIN_.MODE_TRAIN;
      MODE_TRAINISH?: MODE_TRAINISH_.MODE_TRAINISH;
      MODE_BUSISH?: MODE_BUSISH_.MODE_BUSISH;
      MODE_TAXI?: MODE_TAXI_.MODE_TAXI;
      MODE_SCOOTER?: MODE_SCOOTER_.MODE_SCOOTER;
    },
    BookingMetaBrand
  > => true,
  'BookingMeta',
);
export interface BookingMetaBrand {
  readonly BookingMeta: unique symbol;
}

export default BookingMeta;

// Success
