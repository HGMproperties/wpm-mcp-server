// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RentAPI from './rent';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rent extends APIResource {
  /**
   * Creates a rent schedule.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseRentMessage = await client.leases.rent.create(
   *   0,
   *   {
   *     BackdateCharges: true,
   *     Charges: [
   *       {
   *         Amount: 0,
   *         GlAccountId: 0,
   *         NextDueDate: '2019-12-27',
   *       },
   *     ],
   *     RentCycle: 'Monthly',
   *   },
   * );
   * ```
   */
  create(leaseID: number, body: RentCreateParams, options?: RequestOptions): APIPromise<LeaseRentMessage> {
    return this._client.post(path`/v1/leases/${leaseID}/rent`, { body, ...options });
  }

  /**
   * The rent schedule provides details (dollar amount, day of the month, etc) of the
   * recurring charges that are applied to the lease ledger each rent cycle. A lease
   * may have more than one rent schedule associated with it if the rent terms change
   * within the duration of the lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   *
   * @example
   * ```ts
   * const leaseRentMessages = await client.leases.rent.retrieve(
   *   0,
   * );
   * ```
   */
  retrieve(
    leaseID: number,
    query: RentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RentRetrieveResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/rent`, { query, ...options });
  }

  /**
   * Updates a rent schedule.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseRentMessage = await client.leases.rent.update(
   *   0,
   *   {
   *     leaseId: 0,
   *     BackdateCharges: true,
   *     Charges: [
   *       {
   *         Amount: 0,
   *         GlAccountId: 0,
   *         NextDueDate: '2019-12-27',
   *       },
   *     ],
   *     RentCycle: 'Monthly',
   *   },
   * );
   * ```
   */
  update(rentID: number, params: RentUpdateParams, options?: RequestOptions): APIPromise<LeaseRentMessage> {
    const { leaseId, ...body } = params;
    return this._client.put(path`/v1/leases/${leaseId}/rent/${rentID}`, { body, ...options });
  }

  /**
   * The rent schedule provides details (dollar amount, day of the month, etc) of the
   * recurring charges that are applied to the lease ledger each rent cycle. A lease
   * may have more than one rent schedule associated with it if the rent terms change
   * within the duration of the lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   *
   * @example
   * ```ts
   * const response = await client.leases.rent.retrieveAll();
   * ```
   */
  retrieveAll(
    query: RentRetrieveAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RentRetrieveAllResponse> {
    return this._client.get('/v1/leases/rent', { query, ...options });
  }
}

export interface LeaseRentCharge {
  /**
   * Amount of the rent charge.
   */
  Amount?: number;

  /**
   * The day of the month the rent charge is due.
   */
  DueOnDayOfTheMonth?: number | null;

  /**
   * First date for the rent charge.
   */
  FirstChargeDate?: string;

  /**
   * General ledger account unique identifier the rent charge is related to.
   */
  GLAccountId?: number;

  /**
   * Rent charge unique identifier.
   */
  Id?: number;

  /**
   * Memo for the rent charge.
   */
  Memo?: string | null;

  /**
   * Number of days ahead of the due date the charge will post on the lease ledger.
   */
  PostDaysInAdvance?: number;
}

export interface LeaseRentMessage {
  /**
   * Indicates whether backdated charges should be created when creating or editing
   * rents. This field will always return false, even if backdated charges exist.
   */
  BackdateCharges?: boolean;

  /**
   * A collection of charges associated with the rent.
   */
  Charges?: Array<LeaseRentCharge> | null;

  /**
   * Unique identifier of user that created the rent.
   */
  CreatedByUserId?: number | null;

  /**
   * The date and time the rent was created.
   */
  CreatedDateTime?: string | null;

  /**
   * End date of the rent.
   */
  EndDate?: string | null;

  /**
   * Rent unique identifier.
   */
  Id?: number;

  /**
   * Determines the frequency at which rent is charged.
   */
  RentCycle?:
    | 'None'
    | 'Monthly'
    | 'Weekly'
    | 'Every2Weeks'
    | 'Quarterly'
    | 'Yearly'
    | 'Every2Months'
    | 'Daily'
    | 'Every6Months'
    | 'OneTime';

  /**
   * Start date of the rent.
   */
  StartDate?: string;

  /**
   * Total amount of the rent.
   */
  TotalAmount?: number;
}

export type RentRetrieveResponse = Array<LeaseRentMessage>;

export type RentRetrieveAllResponse = Array<RentRetrieveAllResponse.RentRetrieveAllResponseItem>;

export namespace RentRetrieveAllResponse {
  export interface RentRetrieveAllResponseItem {
    /**
     * Indicates whether backdated charges should be created when creating or editing
     * rents. This field will always return false, even if backdated charges exist.
     */
    BackdateCharges?: boolean;

    /**
     * A collection of charges associated with the rent.
     */
    Charges?: Array<RentAPI.LeaseRentCharge> | null;

    /**
     * Unique identifier of user that created the rent.
     */
    CreatedByUserId?: number | null;

    /**
     * The date and time the rent was created.
     */
    CreatedDateTime?: string | null;

    /**
     * End date of the rent.
     */
    EndDate?: string | null;

    /**
     * Rent unique identifier.
     */
    Id?: number;

    /**
     * Date and time the rent was last updated.
     */
    LastUpdatedDateTime?: string | null;

    /**
     * The unique identifier of the lease that the rent will be applied to.
     */
    LeaseId?: number;

    /**
     * Determines the frequency at which rent is charged.
     */
    RentCycle?:
      | 'None'
      | 'Monthly'
      | 'Weekly'
      | 'Every2Weeks'
      | 'Quarterly'
      | 'Yearly'
      | 'Every2Months'
      | 'Daily'
      | 'Every6Months'
      | 'OneTime';

    /**
     * Start date of the rent.
     */
    StartDate?: string;

    /**
     * Total amount of the rent.
     */
    TotalAmount?: number;
  }
}

export interface RentCreateParams {
  /**
   * Indicates if charges that should have posted prior to the date of Rent creation
   * should be posted immediately with the appropriate dates.
   */
  BackdateCharges: boolean;

  /**
   * List of charges to apply to the lease.
   */
  Charges: Array<RentCreateParams.Charge>;

  /**
   * Indicates the cadence of when rent charges will be applied.
   */
  RentCycle:
    | 'Monthly'
    | 'Weekly'
    | 'Every2Weeks'
    | 'Quarterly'
    | 'Yearly'
    | 'Every2Months'
    | 'Daily'
    | 'Every6Months';

  /**
   * Indicates the start of the rent schedule. The date must be formatted as
   * YYYY-MM-DD. If no rent schedules exist on a lease, this date must match the
   * lease start date.
   */
  StartDate?: string | null;
}

export namespace RentCreateParams {
  export interface Charge {
    /**
     * The amount of the rent charge.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which to record the rent charge.
     */
    GlAccountId: number;

    /**
     * Indicates the next date the rent charge will be applied. This date will also be
     * used as the start date for the calculating the `Cycle` of when to apply the next
     * charge. The date must be formatted as YYYY-MM-DD.
     */
    NextDueDate: string;

    /**
     * Memo for the rent charge.
     */
    Memo?: string | null;

    /**
     * Number of days in advance of the due date to post the rent charge
     */
    PostDaysInAdvance?: number | null;
  }
}

export interface RentRetrieveParams {
  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

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

export interface RentUpdateParams {
  /**
   * Path param:
   */
  leaseId: number;

  /**
   * Body param: Indicates if charges that should have posted prior to the date of
   * Rent creation should be posted immediately with the appropriate dates.
   */
  BackdateCharges: boolean;

  /**
   * Body param: List of charges to apply to the lease.
   */
  Charges: Array<RentUpdateParams.Charge>;

  /**
   * Body param: Indicates the cadence of when rent charges will be applied.
   */
  RentCycle:
    | 'Monthly'
    | 'Weekly'
    | 'Every2Weeks'
    | 'Quarterly'
    | 'Yearly'
    | 'Every2Months'
    | 'Daily'
    | 'Every6Months';
}

export namespace RentUpdateParams {
  export interface Charge {
    /**
     * The amount of the rent charge.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which to record the rent charge.
     */
    GlAccountId: number;

    /**
     * Indicates the next date the rent charge will be applied. This date will also be
     * used as the start date for the calculating the `Cycle` of when to apply the next
     * charge. The date must be formatted as YYYY-MM-DD.
     */
    NextDueDate: string;

    /**
     * Memo for the rent charge.
     */
    Memo?: string | null;

    /**
     * Number of days in advance of the due date to post the rent charge
     */
    PostDaysInAdvance?: number | null;
  }
}

export interface RentRetrieveAllParams {
  /**
   * Filters results to only rents that were created after this date. The value must
   * be in UTC and formatted as `YYYY-MM-DDTHH:MM:SSZ`. The maximum date range is 365
   * days.
   */
  createddatetimefrom?: string;

  /**
   * Filters results to only rents that were created before this date.The value must
   * be in UTC and formatted as `YYYY-MM-DDTHH:MM:SSZ`. The maximum date range is 365
   * days.
   */
  createddatetimeto?: string;

  /**
   * Filters results to any rents that were updated on or after the specified date.
   * The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum date
   * range is 365 days.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any rents were updated on or before the specified date.The
   * value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum date
   * range is 365 days.
   */
  lastupdatedto?: string;

  /**
   * Filters results to only include rents whose lease belongs to the specified set
   * of lease ids.
   */
  leaseids?: Array<number>;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

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

export declare namespace Rent {
  export {
    type LeaseRentCharge as LeaseRentCharge,
    type LeaseRentMessage as LeaseRentMessage,
    type RentRetrieveResponse as RentRetrieveResponse,
    type RentRetrieveAllResponse as RentRetrieveAllResponse,
    type RentCreateParams as RentCreateParams,
    type RentRetrieveParams as RentRetrieveParams,
    type RentUpdateParams as RentUpdateParams,
    type RentRetrieveAllParams as RentRetrieveAllParams,
  };
}
