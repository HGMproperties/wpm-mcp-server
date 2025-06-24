// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Charges extends APIResource {
  /**
   * Creates a charge on a specific application ledger.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   */
  create(
    applicationID: number,
    body: ChargeCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.ApplicationTransaction> {
    return this._client.post(path`/v1/applications/${applicationID}/charges`, { body, ...options });
  }

  /**
   * Retrieves a specific application charge.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`
   */
  retrieve(
    transactionID: number,
    params: ChargeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Charge> {
    const { applicationId } = params;
    return this._client.get(path`/v1/applications/${applicationId}/charges/${transactionID}`, options);
  }

  /**
   * Updates a charge on a specific application ledger.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   */
  update(
    transactionID: number,
    params: ChargeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.ApplicationTransaction> {
    const { applicationId, ...body } = params;
    return this._client.put(path`/v1/applications/${applicationId}/charges/${transactionID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all the charges for a specific application.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   */
  list(
    applicationID: number,
    query: ChargeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargeListResponse> {
    return this._client.get(path`/v1/applications/${applicationID}/charges`, { query, ...options });
  }
}

/**
 * This is an object that represents a charge tied to an application
 */
export interface Charge {
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
  Lines?: Array<Charge.Line> | null;

  /**
   * Memo associated with the charge.
   */
  Memo?: string | null;

  /**
   * Sum of all `Lines.Amount` entries in the charge.
   */
  TotalAmount?: number;
}

export namespace Charge {
  export interface Line {
    /**
     * Amount of the line item.
     */
    Amount?: number;

    /**
     * Unique identifier of the general ledger account associated with the charge.
     */
    GLAccountId?: number;
  }
}

/**
 * This is an object that represents a line item on an application charge
 */
export interface ChargeLineSave {
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
   * The general ledger account description under which the line item amount will be
   * recorded. The value cannot exceed 245 characters
   */
  Memo?: string | null;

  /**
   * Reference number for the line item. The value cannot exceed 30 characters.
   */
  ReferenceNumber?: string | null;
}

export type ChargeListResponse = Array<Charge>;

export interface ChargeCreateParams {
  /**
   * Date of the charge. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * A collection of line items included in the charge. At least one line item is
   * required.
   */
  Lines?: Array<ChargeLineSave> | null;

  /**
   * Memo associated with the charge. The value cannot exceed 65 characters.
   */
  Memo?: string | null;
}

export interface ChargeRetrieveParams {
  applicationId: number;
}

export interface ChargeUpdateParams {
  /**
   * Path param:
   */
  applicationId: number;

  /**
   * Body param: Date of the charge. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * Body param: A collection of line items included in the charge. At least one line
   * item is required.
   */
  Lines?: Array<ChargeLineSave> | null;

  /**
   * Body param: Memo associated with the charge. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;
}

export interface ChargeListParams {
  /**
   * Filters results by charge ids
   */
  chargeids?: Array<number>;

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
   * Filters results to any application transaction whose start date is greater than
   * or equal to the specified value.
   */
  transactiondatefrom?: string;

  /**
   * Filters results to any application transaction whose end date is less than or
   * equal to the specified value.
   */
  transactiondateto?: string;
}

export declare namespace Charges {
  export {
    type Charge as Charge,
    type ChargeLineSave as ChargeLineSave,
    type ChargeListResponse as ChargeListResponse,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeListParams as ChargeListParams,
  };
}
