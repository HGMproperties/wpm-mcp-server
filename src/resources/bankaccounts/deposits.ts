// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QuickdepositsAPI from './quickdeposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deposits extends APIResource {
  /**
   * Creates a deposit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   */
  create(bankAccountID: number, body: DepositCreateParams, options?: RequestOptions): APIPromise<Deposit> {
    return this._client.post(path`/v1/bankaccounts/${bankAccountID}/deposits`, { body, ...options });
  }

  /**
   * Retrieves a bank account deposit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   *
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for deposits associated with a Company) </span>
   */
  retrieve(depositID: number, params: DepositRetrieveParams, options?: RequestOptions): APIPromise<Deposit> {
    const { bankAccountId } = params;
    return this._client.get(path`/v1/bankaccounts/${bankAccountId}/deposits/${depositID}`, options);
  }

  /**
   * Updates a deposit.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   */
  update(depositID: number, params: DepositUpdateParams, options?: RequestOptions): APIPromise<Deposit> {
    const { bankAccountId, ...body } = params;
    return this._client.put(path`/v1/bankaccounts/${bankAccountId}/deposits/${depositID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all bank account deposits.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   *
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for deposits associated with a Company) </span>
   */
  list(
    bankAccountID: number,
    query: DepositListParams,
    options?: RequestOptions,
  ): APIPromise<DepositListResponse> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}/deposits`, { query, ...options });
  }
}

export interface Deposit {
  /**
   * Date the deposit was recorded.
   */
  EntryDate?: string;

  /**
   * Deposit unique identifier.
   */
  Id?: number;

  /**
   * A collection of line items associated with the deposit.
   */
  Lines?: Array<Deposit.Line> | null;

  /**
   * Memo associated with the deposit, if applicable.
   */
  Memo?: string | null;

  /**
   * A collection of payment transaction identifiers that were included in this
   * deposit transaction.
   */
  PaymentTransactionIds?: Array<number> | null;

  /**
   * Sum of all `Journal.Lines.Amount` entries in the deposit.
   */
  TotalAmount?: number;
}

export namespace Deposit {
  export interface Line {
    /**
     * An object that represents an accounting entity.
     */
    AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

    /**
     * Amount of the line item.
     */
    Amount?: number;

    /**
     * The general ledger account identifier under which the line item amount is
     * recorded.
     */
    GLAccountId?: number;

    /**
     * The unique identifier of the line item.
     */
    Id?: number;

    /**
     * Memo for the line item.
     */
    Memo?: string | null;

    /**
     * Reference number for the line item.
     */
    ReferenceNumber?: string | null;
  }
}

export interface DepositLineSave {
  /**
   * Object to represent an Accounting Entity
   */
  AccountingEntity?: QuickdepositsAPI.AccountingEntitySave | null;

  /**
   * Amount of the line item.
   */
  Amount?: number | null;

  /**
   * The general ledger account identifier under which the line item amount will be
   * recorded.
   */
  GLAccountId?: number | null;

  /**
   * Memo for the line item.
   */
  Memo?: string | null;

  /**
   * Reference number for the line item.
   */
  ReferenceNumber?: string | null;
}

export type DepositListResponse = Array<Deposit>;

export interface DepositCreateParams {
  /**
   * Date the deposit was recorded.
   */
  EntryDate: string;

  /**
   * A collection of line items to associate with the deposit.
   */
  Lines?: Array<DepositLineSave> | null;

  /**
   * Memo associated with the deposit, if applicable.
   */
  Memo?: string | null;

  /**
   * A collection of payment transaction identifiers that were included in this
   * deposit transaction.
   */
  PaymentTransactionIds?: Array<number> | null;
}

export interface DepositRetrieveParams {
  bankAccountId: number;
}

export interface DepositUpdateParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: Date the deposit was recorded.
   */
  EntryDate: string;

  /**
   * Body param: A collection of line items associated with the deposit.
   */
  Lines?: Array<DepositLineSave> | null;

  /**
   * Body param: Memo associated with the deposit, if applicable.
   */
  Memo?: string | null;
}

export interface DepositListParams {
  /**
   * Filters results to any deposits that were recorded on or before the specified
   * date. The value must be formatted as YYYY-MM-DD.
   */
  enddate: string;

  /**
   * Filters results to any deposits that were recorded on or after the specified
   * date. The value must be formatted as YYYY-MM-DD.
   */
  startdate: string;

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

export declare namespace Deposits {
  export {
    type Deposit as Deposit,
    type DepositLineSave as DepositLineSave,
    type DepositListResponse as DepositListResponse,
    type DepositCreateParams as DepositCreateParams,
    type DepositRetrieveParams as DepositRetrieveParams,
    type DepositUpdateParams as DepositUpdateParams,
    type DepositListParams as DepositListParams,
  };
}
