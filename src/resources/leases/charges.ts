// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Charges extends APIResource {
  /**
   * Creates a charge transaction on a specific lease ledger.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Accounting > Bills</span> - `View` `Edit` In order
   * to associate the charge to a bill using the BillId property, you must have this
   * permission.
   *
   * @example
   * ```ts
   * const leaseTransactions =
   *   await client.leases.charges.create(0);
   * ```
   */
  create(
    leaseID: number,
    body: ChargeCreateParams,
    options?: RequestOptions,
  ): APIPromise<ChargeCreateResponse> {
    return this._client.post(path`/v1/leases/${leaseID}/charges`, { body, ...options });
  }

  /**
   * Retrieves a specific lease charge.
   *
   * <h4>Required permissions(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   *
   * @example
   * ```ts
   * const leaseCharge = await client.leases.charges.retrieve(
   *   0,
   *   { leaseId: 0 },
   * );
   * ```
   */
  retrieve(
    chargeID: number,
    params: ChargeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LeaseCharge> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/charges/${chargeID}`, options);
  }

  /**
   * Updates a charge.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseTransaction = await client.leases.charges.update(
   *   0,
   *   {
   *     leaseId: 0,
   *     Date: '2019-12-27',
   *     Lines: [{ Amount: 0, GLAccountId: 0 }],
   *   },
   * );
   * ```
   */
  update(
    chargeID: number,
    params: ChargeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.LeaseTransaction> {
    const { leaseId, ...body } = params;
    return this._client.put(path`/v1/leases/${leaseId}/charges/${chargeID}`, { body, ...options });
  }

  /**
   * Retrieves all the charges for a specific lease.
   *
   * <h4>Required permissions(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   *
   * @example
   * ```ts
   * const leaseCharges = await client.leases.charges.list(0);
   * ```
   */
  list(
    leaseID: number,
    query: ChargeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargeListResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/charges`, { query, ...options });
  }
}

export interface LeaseCharge {
  /**
   * The bill identifier this charge is associated with, if applicable.
   */
  BillId?: number | null;

  /**
   * Date of the charge.
   */
  Date?: string;

  /**
   * Charge unique identifier.
   */
  Id?: number;

  /**
   * A collection of line items associated with the charge.
   */
  Lines?: Array<LeaseCharge.Line> | null;

  /**
   * Memo associated with the charge.
   */
  Memo?: string | null;

  /**
   * Sum of all `Lines.Amount` entries in the charge.
   */
  TotalAmount?: number;
}

export namespace LeaseCharge {
  export interface Line {
    /**
     * Amount of the line item.
     */
    Amount?: number;

    /**
     * Unique ientifier of the general ledger account associated with the charge.
     */
    GLAccountId?: number;
  }
}

/**
 * This is an object that represents a line item on a lease charge
 */
export interface LeaseChargeLine {
  /**
   * Line item amount.
   */
  Amount: number;

  /**
   * The general ledger account identifier under which the line item amount will be
   * recorded.
   */
  GLAccountId: number;

  /**
   * Reference number for the line item. The value cannot exceed 30 characters.
   */
  ReferenceNumber?: string | null;
}

export type ChargeCreateResponse = Array<TransactionsAPI.LeaseTransaction>;

export type ChargeListResponse = Array<LeaseCharge>;

export interface ChargeCreateParams {
  /**
   * Unique identifier of the bill this charge is associated to. If provided, the
   * property of the lease the charge is being created in must be in at least one
   * line item of the bill.
   */
  BillId?: number | null;

  /**
   * Date of the charge. The date must be formatted as YYYY-MM-DD.
   */
  Date?: string;

  /**
   * A collection of line items included in the charge. At least one line item is
   * required.
   */
  Lines?: Array<LeaseChargeLine> | null;

  /**
   * Memo associated with the charge. The value cannot exceed 65 characters.
   */
  Memo?: string | null;
}

export interface ChargeRetrieveParams {
  leaseId: number;
}

export interface ChargeUpdateParams {
  /**
   * Path param:
   */
  leaseId: number;

  /**
   * Body param: Date of the charge. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * Body param: Collection of line items to be included in the charge. All existing
   * line items will be deleted and replaced with the line items in this request. At
   * least 1 line item is required.
   */
  Lines: Array<LeaseChargeLine>;

  /**
   * Body param: Memo associated with the charge. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;
}

export interface ChargeListParams {
  /**
   * Filters results to any charge that has been associated to the indicated bill
   * ids.
   */
  billids?: Array<number>;

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

  /**
   * Filters results to any lease transaction whose start date is greater than or
   * equal to the specified value.
   */
  transactiondatefrom?: string;

  /**
   * Filters results to any lease transaction whose end date is less than or equal to
   * the specified value.
   */
  transactiondateto?: string;
}

export declare namespace Charges {
  export {
    type LeaseCharge as LeaseCharge,
    type LeaseChargeLine as LeaseChargeLine,
    type ChargeCreateResponse as ChargeCreateResponse,
    type ChargeListResponse as ChargeListResponse,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeListParams as ChargeListParams,
  };
}
