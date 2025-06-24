// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Summary extends APIResource {
  /**
   * This endpoint can be used to both create and update a meter reading detail for
   * an association. <ul><li>There can only be one meter reading detail for a given
   * combination of MeterType and ReadingDate for an association</li><li>If you are
   * updating an existing meter reading detail, use the query parameters to specify
   * the existing meter reading detail to update.</li><li>If you are creating a new
   * meter reading detail, do not pass any query parameters.</li><li>When adding a
   * new item to the Details array, leave out the `Id` field.</li><li>When updating
   * an existing item in the Details array, the `Id` field of the existing item must
   * be included.</li></ul>
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const meterReadingDetails =
   *   await client.associations.meterreadings.summary.update(
   *     0,
   *     {
   *       Details: [{ PriorValue: 0, UnitId: 0, Value: 0 }],
   *       MeterType: 'Electric',
   *       ReadingDate: '2019-12-27',
   *     },
   *   );
   * ```
   */
  update(
    associationID: number,
    params: SummaryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MeterReadingDetails> {
    const { metertype, readingdate, ...body } = params;
    return this._client.put(path`/v1/associations/${associationID}/meterreadings/summary`, {
      query: { metertype, readingdate },
      body,
      ...options,
    });
  }

  /**
   * Retrieves all meter reading details for an association.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const meterReadingDetails =
   *   await client.associations.meterreadings.summary.list(0, {
   *     metertype: 'Electric',
   *     readingdate: '2019-12-27',
   *   });
   * ```
   */
  list(
    associationID: number,
    query: SummaryListParams,
    options?: RequestOptions,
  ): APIPromise<MeterReadingDetails> {
    return this._client.get(path`/v1/associations/${associationID}/meterreadings/summary`, {
      query,
      ...options,
    });
  }

  /**
   * Delete meter reading details for an association for a given date.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit` `Delete`
   *
   * @example
   * ```ts
   * await client.associations.meterreadings.summary.delete(0, {
   *   metertype: 'Electric',
   *   readingdate: '2019-12-27',
   * });
   * ```
   */
  delete(associationID: number, params: SummaryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { metertype, readingdate } = params;
    return this._client.delete(path`/v1/associations/${associationID}/meterreadings/summary`, {
      query: { metertype, readingdate },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MeterReadingDetails {
  /**
   * List of reading details for all units.
   */
  Details?: Array<MeterReadingDetails.Detail> | null;

  /**
   * Type of meter the reading is for.
   */
  MeterType?: 'Unknown' | 'Electric' | 'Gas' | 'Oil' | 'Water' | 'Sewer';

  /**
   * Requested date for meter reading details. Details will be the most recent
   * readings on or before this date.
   */
  ReadingDate?: string;
}

export namespace MeterReadingDetails {
  export interface Detail {
    /**
     * Unique identifier of the reading detail.
     */
    Id?: number;

    /**
     * Previous meter reading value.
     */
    PriorValue?: number;

    /**
     * Date the meter was read.
     */
    ReadingDate?: string;

    /**
     * Unique identifier of the unit.
     */
    UnitId?: number;

    /**
     * Number of the unit.
     */
    UnitNumber?: string | null;

    /**
     * Most recent meter reading value.
     */
    Value?: number;
  }
}

export interface MeterReadingDetailsPut {
  /**
   * Collection of detailed meter readings. At least one item is required.
   */
  Details: Array<MeterReadingDetailsPut.Detail>;

  /**
   * Type of meter being read.
   */
  MeterType: 'Electric' | 'Gas' | 'Oil' | 'Water' | 'Sewer';

  /**
   * Date the meter reading occurred on. Date must be formatted as YYYY-MM-DD.
   */
  ReadingDate: string;
}

export namespace MeterReadingDetailsPut {
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

export interface SummaryUpdateParams {
  /**
   * Body param: Collection of detailed meter readings. At least one item is
   * required.
   */
  Details: Array<SummaryUpdateParams.Detail>;

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

export namespace SummaryUpdateParams {
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

export interface SummaryDeleteParams {
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
    type MeterReadingDetails as MeterReadingDetails,
    type MeterReadingDetailsPut as MeterReadingDetailsPut,
    type SummaryUpdateParams as SummaryUpdateParams,
    type SummaryListParams as SummaryListParams,
    type SummaryDeleteParams as SummaryDeleteParams,
  };
}
