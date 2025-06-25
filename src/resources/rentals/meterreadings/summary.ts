// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SummaryAPI from '../../associations/meterreadings/summary';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Summary extends APIResource {
  /**
   * This endpoint can be used to both create and update a meter reading detail for a
   * property. <ul><li>There can only be one meter reading detail for a given
   * combination of MeterType and ReadingDate for a property.</li><li>If you are
   * updating an existing meter reading detail, use the query parameters to specify
   * the existing meter reading detail to update.</li><li>If you are creating a new
   * meter reading detail, do not pass any query parameters.</li><li>When adding a
   * new item to the Details array, leave out the `Id` field.</li><li>When updating
   * an existing item in the Details array, the `Id` field of the existing item must
   * be included.</li></ul>
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  create(
    propertyID: number,
    params: SummaryCreateParams,
    options?: RequestOptions,
  ): APIPromise<SummaryAPI.MeterReadingDetails> {
    const { metertype, readingdate, ...body } = params;
    return this._client.put(path`/v1/rentals/${propertyID}/meterreadings/summary`, {
      query: { metertype, readingdate },
      body,
      ...options,
    });
  }

  /**
   * Retrieves all meter reading details for a property.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(
    propertyID: number,
    query: SummaryListParams,
    options?: RequestOptions,
  ): APIPromise<SummaryAPI.MeterReadingDetails> {
    return this._client.get(path`/v1/rentals/${propertyID}/meterreadings/summary`, { query, ...options });
  }

  /**
   * Delete meter reading details for a property for a given date.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit` `Delete`
   */
  deleteAll(propertyID: number, params: SummaryDeleteAllParams, options?: RequestOptions): APIPromise<void> {
    const { metertype, readingdate } = params;
    return this._client.delete(path`/v1/rentals/${propertyID}/meterreadings/summary`, {
      query: { metertype, readingdate },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SummaryCreateParams {
  /**
   * Body param: Collection of detailed meter readings. At least one item is
   * required.
   */
  Details: Array<SummaryCreateParams.Detail>;

  /**
   * Body param: Type of meter being read.
   */
  MeterType: 'Electric' | 'Gas' | 'Oil' | 'Water' | 'Sewer';

  /**
   * Body param: Date the meter reading occurred on. Date must be formatted as
   * YYYY-MM-DD.
   */
  ReadingDate: string;

  /**
   * Query param: Filters results to the specified meter type.
   */
  metertype?: 'Electric' | 'Gas' | 'Oil' | 'Water' | 'Sewer';

  /**
   * Query param: Filters results to any meter readings whose entry date is equal to
   * the specified value. The value must be formatted as YYYY-MM-DD.
   */
  readingdate?: string;
}

export namespace SummaryCreateParams {
  export interface Detail {
    /**
     * Previous meter reading value.
     */
    PriorValue: number;

    /**
     * Unique identifier of the unit associated with the meter reading.
     */
    UnitId: number;

    /**
     * Current meter reading value.
     */
    Value: number;

    /**
     * Unique identifier of the detail being updated.
     */
    Id?: number | null;
  }
}

export interface SummaryListParams {
  /**
   * Filters results to the specified meter type.
   */
  metertype: 'Electric' | 'Gas' | 'Oil' | 'Water' | 'Sewer';

  /**
   * Filters results to any meter readings whose entry date is equal to the specified
   * value. The value must be formatted as YYYY-MM-DD.
   */
  readingdate: string;
}

export interface SummaryDeleteAllParams {
  /**
   * Filters results to the specified meter type.
   */
  metertype: 'Electric' | 'Gas' | 'Oil' | 'Water' | 'Sewer';

  /**
   * Filters results to any meter readings whose entry date is equal to the specified
   * value. The value must be formatted as YYYY-MM-DD.
   */
  readingdate: string;
}

export declare namespace Summary {
  export {
    type SummaryCreateParams as SummaryCreateParams,
    type SummaryListParams as SummaryListParams,
    type SummaryDeleteAllParams as SummaryDeleteAllParams,
  };
}
