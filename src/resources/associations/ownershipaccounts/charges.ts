// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Charges extends APIResource {
  /**
   * Creates a ledger charge.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Accounting > Bills</span> - `View` `Edit` In order
   * to associate the charge to a bill using the BillId property, you must have this
   * permission.
   *
   * @example
   * ```ts
   * const ownershipAccountTransaction =
   *   await client.associations.ownershipaccounts.charges.create(
   *     0,
   *     {
   *       Date: '2019-12-27',
   *       Lines: [{ Amount: 0, GlAccountId: 0 }],
   *     },
   *   );
   * ```
   */
  create(
    ownershipAccountID: number,
    body: ChargeCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.OwnershipAccountTransaction> {
    return this._client.post(path`/v1/associations/ownershipaccounts/${ownershipAccountID}/charges`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a specific ownership account ledger charge.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountLedgerCharge =
   *   await client.associations.ownershipaccounts.charges.retrieve(
   *     0,
   *     { ownershipAccountId: 0 },
   *   );
   * ```
   */
  retrieve(
    chargeID: number,
    params: ChargeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OwnershipAccountLedgerCharge> {
    const { ownershipAccountId } = params;
    return this._client.get(
      path`/v1/associations/ownershipaccounts/${ownershipAccountId}/charges/${chargeID}`,
      options,
    );
  }

  /**
   * Updates a charge.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const ownershipAccountTransaction =
   *   await client.associations.ownershipaccounts.charges.update(
   *     0,
   *     {
   *       ownershipAccountId: 0,
   *       Date: '2019-12-27',
   *       Lines: [{ Amount: 0, GLAccountId: 0 }],
   *     },
   *   );
   * ```
   */
  update(
    chargeID: number,
    params: ChargeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.OwnershipAccountTransaction> {
    const { ownershipAccountId, ...body } = params;
    return this._client.put(
      path`/v1/associations/ownershipaccounts/${ownershipAccountId}/charges/${chargeID}`,
      { body, ...options },
    );
  }

  /**
   * Retrieves all ledger charges for a specific ownership account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountLedgerCharges =
   *   await client.associations.ownershipaccounts.charges.list(
   *     0,
   *   );
   * ```
   */
  list(
    ownershipAccountID: number,
    query: ChargeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargeListResponse> {
    return this._client.get(path`/v1/associations/ownershipaccounts/${ownershipAccountID}/charges`, {
      query,
      ...options,
    });
  }
}

export interface OwnershipAccountLedgerCharge {
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
  Lines?: Array<OwnershipAccountLedgerCharge.Line> | null;

  /**
   * Memo associated with the charge.
   */
  Memo?: string | null;

  /**
   * Sum of all `Lines.Amount` entries in the charge.
   */
  TotalAmount?: number;
}

export namespace OwnershipAccountLedgerCharge {
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

export type ChargeListResponse = Array<OwnershipAccountLedgerCharge>;

export interface ChargeCreateParams {
  /**
   * Date of the charge. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * Collection of line items to be included in the charge. All existing line items
   * will be deleted and replaced with the line items in this request. At least 1
   * line item is required.
   */
  Lines: Array<ChargeCreateParams.Line>;

  /**
   * Unique identifier of the bill this charge is associated to. If provided, the
   * property of the ownership account ledger the charge is being created in must be
   * in at least one line item of the bill.
   */
  BillId?: number | null;

  /**
   * Memo associated with the charge. The value cannot exceed 65 characters.
   */
  Memo?: string | null;
}

export namespace ChargeCreateParams {
  export interface Line {
    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which the line item amount will be
     * recorded. The account must be a liability or income type.
     */
    GlAccountId: number;
  }
}

export interface ChargeRetrieveParams {
  /**
   * The ownership account identifier.
   */
  ownershipAccountId: number;
}

export interface ChargeUpdateParams {
  /**
   * Path param: The ownership account identifier.
   */
  ownershipAccountId: number;

  /**
   * Body param: Date of the charge. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * Body param: A collection of line items included in the charge. At least one line
   * item is required.
   */
  Lines: Array<ChargeUpdateParams.Line>;

  /**
   * Body param: Memo associated with the charge. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;
}

export namespace ChargeUpdateParams {
  export interface Line {
    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which the line item amount will be
     * recorded. The account must be a liability or income type.
     */
    GLAccountId: number;

    /**
     * Reference number associated with the charge. The value cannot exceed 30
     * characters.
     */
    ReferenceNumber?: string | null;
  }
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
    type OwnershipAccountLedgerCharge as OwnershipAccountLedgerCharge,
    type ChargeListResponse as ChargeListResponse,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeListParams as ChargeListParams,
  };
}
