// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SummaryAPI from './summary';
import {
  MeterReadingDetails,
  MeterReadingDetailsPut,
  Summary,
  SummaryDeleteParams,
  SummaryListParams,
  SummaryUpdateParams,
} from './summary';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Meterreadings extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);

  /**
   * Retrieves all meter readings for an association.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const meterReadings =
   *   await client.associations.meterreadings.list(0, {
   *     readingdatefrom: '2019-12-27',
   *     readingdateto: '2019-12-27',
   *   });
   * ```
   */
  list(
    associationID: number,
    query: MeterreadingListParams,
    options?: RequestOptions,
  ): APIPromise<MeterreadingListResponse> {
    return this._client.get(path`/v1/associations/${associationID}/meterreadings`, { query, ...options });
  }
}

export interface MeterReading {
  /**
   * Indicates if charges were created for the meter reading.
   */
  ChargesCreated?: boolean;

  /**
   * Date the meter reading was recorded.
   */
  ReadingDate?: string;

  /**
   * Meter type for the meter reading.
   */
  ResponseMeterType?: 'Unknown' | 'Electric' | 'Gas' | 'Oil' | 'Water' | 'Sewer';

  /**
   * The amount used between the prior reading and this reading, calculated by
   * subtracting prior value from value. Usage will be the basis used when charging
   * tenants for a reading.
   */
  Usage?: number;

  /**
   * Total value across all units for the meter reading.
   */
  Value?: number;
}

export type MeterreadingListResponse = Array<MeterReading>;

export interface MeterreadingListParams {
  /**
   * Filters results to any meter readings whose entry date that is greater than or
   * equal to the specified value. The value must be formatted as YYYY-MM-DD. The
   * maximum date range is 365 days.
   */
  readingdatefrom: string;

  /**
   * Filters results to any meter readings whose entry date is less than or equal to
   * the specified value. The value must be formatted as YYYY-MM-DD. The maximum date
   * range is 365 days.
   */
  readingdateto: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to the specified meter types.
   */
  metertypes?: Array<'Electric' | 'Gas' | 'Oil' | 'Water' | 'Sewer'>;

  /**
   * `offset` indicates the position of the first record to return. The `offset` is
   * zero-based and the default is 0.
   */
  offset?: number;

  /**
   * `orderby` indicates the field(s) and direction to sort the results in the
   * response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request
   * Options</a> for more information.
   */
  orderby?: string;
}

Meterreadings.Summary = Summary;

export declare namespace Meterreadings {
  export {
    type MeterReading as MeterReading,
    type MeterreadingListResponse as MeterreadingListResponse,
    type MeterreadingListParams as MeterreadingListParams,
  };

  export {
    Summary as Summary,
    type MeterReadingDetails as MeterReadingDetails,
    type MeterReadingDetailsPut as MeterReadingDetailsPut,
    type SummaryUpdateParams as SummaryUpdateParams,
    type SummaryListParams as SummaryListParams,
    type SummaryDeleteParams as SummaryDeleteParams,
  };
}
