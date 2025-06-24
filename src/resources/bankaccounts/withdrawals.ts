// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QuickdepositsAPI from './quickdeposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Withdrawals extends APIResource {
  /**
   * Creates a bank account withdrawal.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   */
  create(
    bankAccountID: number,
    body: WithdrawalCreateParams,
    options?: RequestOptions,
  ): APIPromise<Withdrawal> {
    return this._client.post(path`/v1/bankaccounts/${bankAccountID}/withdrawals`, { body, ...options });
  }

  /**
   * Retrieves a bank account withdrawal.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccounts</span> - `View`
   */
  retrieve(
    withdrawalID: number,
    params: WithdrawalRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Withdrawal> {
    const { bankAccountId } = params;
    return this._client.get(path`/v1/bankaccounts/${bankAccountId}/withdrawals/${withdrawalID}`, options);
  }

  /**
   * Updates a bank account withdrawal.
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
  update(
    withdrawalID: number,
    params: WithdrawalUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Withdrawal> {
    const { bankAccountId, ...body } = params;
    return this._client.put(path`/v1/bankaccounts/${bankAccountId}/withdrawals/${withdrawalID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all bank account withdrawals.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccounts</span> - `View`
   */
  list(
    bankAccountID: number,
    query: WithdrawalListParams,
    options?: RequestOptions,
  ): APIPromise<WithdrawalListResponse> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}/withdrawals`, { query, ...options });
  }
}

export interface Withdrawal {
  /**
   * An object that represents an accounting entity.
   */
  AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

  /**
   * Date the withdrawal was recorded.
   */
  EntryDate?: string;

  /**
   * Withdrawal unique identifier.
   */
  Id?: number;

  /**
   * Memo associated with the withdrawal, if applicable.
   */
  Memo?: string | null;

  /**
   * Offsetting general ledger account identifier. The offsetting GL account acts as
   * a label for this withdrawal. For instance, if you're withdrawing money due to a
   * bank fee, you might select the "Bank fees" expense account.
   */
  OffsetGLAccountId?: number;

  /**
   * Total amount of the withdrawal.
   */
  TotalAmount?: number;
}

export interface WithdrawalSave {
  /**
   * Object to represent an Accounting Entity
   */
  AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

  /**
   * Withdrawal amount.
   */
  Amount: number;

  /**
   * Date the withdrawal was recorded.
   */
  EntryDate: string;

  /**
   * Offsetting general ledger account identifier. The offsetting general ledger
   * account acts as a label for this withdrawal. For instance, if you're withdrawing
   * money due to a bank fee, you might select the "Bank fees" expense account.
   */
  OffsetGLAccountId: number;

  /**
   * Memo associated with the withdrawal, if applicable.
   */
  Memo?: string | null;
}

export type WithdrawalListResponse = Array<Withdrawal>;

export interface WithdrawalCreateParams {
  /**
   * Object to represent an Accounting Entity
   */
  AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

  /**
   * Withdrawal amount.
   */
  Amount: number;

  /**
   * Date the withdrawal was recorded.
   */
  EntryDate: string;

  /**
   * Offsetting general ledger account identifier. The offsetting general ledger
   * account acts as a label for this withdrawal. For instance, if you're withdrawing
   * money due to a bank fee, you might select the "Bank fees" expense account.
   */
  OffsetGLAccountId: number;

  /**
   * Memo associated with the withdrawal, if applicable.
   */
  Memo?: string | null;
}

export interface WithdrawalRetrieveParams {
  bankAccountId: number;
}

export interface WithdrawalUpdateParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: Object to represent an Accounting Entity
   */
  AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

  /**
   * Body param: Withdrawal amount.
   */
  Amount: number;

  /**
   * Body param: Date the withdrawal was recorded.
   */
  EntryDate: string;

  /**
   * Body param: Offsetting general ledger account identifier. The offsetting general
   * ledger account acts as a label for this withdrawal. For instance, if you're
   * withdrawing money due to a bank fee, you might select the "Bank fees" expense
   * account.
   */
  OffsetGLAccountId: number;

  /**
   * Body param: Memo associated with the withdrawal, if applicable.
   */
  Memo?: string | null;
}

export interface WithdrawalListParams {
  /**
   * Filters results to any transactions that were recorded on or before the
   * specified date. The value must be formatted as YYYY-MM-DD.
   */
  enddate: string;

  /**
   * Filters results to any transactions that were recorded on or after the specified
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

export declare namespace Withdrawals {
  export {
    type Withdrawal as Withdrawal,
    type WithdrawalSave as WithdrawalSave,
    type WithdrawalListResponse as WithdrawalListResponse,
    type WithdrawalCreateParams as WithdrawalCreateParams,
    type WithdrawalRetrieveParams as WithdrawalRetrieveParams,
    type WithdrawalUpdateParams as WithdrawalUpdateParams,
    type WithdrawalListParams as WithdrawalListParams,
  };
}
