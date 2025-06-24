// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BankaccountsAPI from './bankaccounts';
import * as QuickdepositsAPI from './quickdeposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transfers extends APIResource {
  /**
   * Creates a bank account transfer.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   */
  create(bankAccountID: number, body: TransferCreateParams, options?: RequestOptions): APIPromise<Transfer> {
    return this._client.post(path`/v1/bankaccounts/${bankAccountID}/transfers`, { body, ...options });
  }

  /**
   * Retrieves a bank account transfer.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   */
  retrieve(
    transferID: number,
    params: TransferRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BankaccountsAPI.Account> {
    const { bankAccountId } = params;
    return this._client.get(path`/v1/bankaccounts/${bankAccountId}/transfers/${transferID}`, options);
  }

  /**
   * Updates a bank account transfer.
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
  update(transferID: number, params: TransferUpdateParams, options?: RequestOptions): APIPromise<Transfer> {
    const { bankAccountId, ...body } = params;
    return this._client.put(path`/v1/bankaccounts/${bankAccountId}/transfers/${transferID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all bank account transfers.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   */
  list(
    bankAccountID: number,
    query: TransferListParams,
    options?: RequestOptions,
  ): APIPromise<TransferListResponse> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}/transfers`, { query, ...options });
  }
}

export interface Transfer {
  /**
   * An object that represents an accounting entity.
   */
  AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

  /**
   * Date the transfer was recorded.
   */
  EntryDate?: string;

  /**
   * Transfer unique identifier.
   */
  Id?: number;

  /**
   * Memo associated with the transfer, if applicable.
   */
  Memo?: string | null;

  /**
   * Total amount of the transfer.
   */
  TotalAmount?: number;

  /**
   * Bank account identifier the money was transferred to.
   */
  TransferToBankAccountId?: number;
}

export interface TransferSave {
  /**
   * A rental property, association or company to associate with the transfer.
   */
  AccountingEntity: TransferSave.AccountingEntity;

  /**
   * The date the transfer was recorded.
   */
  EntryDate: string;

  /**
   * Total amount to transfer.
   */
  TotalAmount: number;

  /**
   * Bank account identifier the money will be transferred to.
   */
  TransferToBankAccountId: number;

  /**
   * Memo associated with the transfer, if applicable.
   */
  Memo?: string | null;
}

export namespace TransferSave {
  /**
   * A rental property, association or company to associate with the transfer.
   */
  export interface AccountingEntity {
    /**
     * The type of accounting entity.
     */
    AccountingEntityType: 'Association' | 'Rental' | 'Company';

    /**
     * The accounting entity unique identifier.
     */
    Id: number;

    /**
     * The unit unique identifier for the accounting entity.
     */
    UnitId?: number | null;
  }
}

export type TransferListResponse = Array<Transfer>;

export interface TransferCreateParams {
  /**
   * A rental property, association or company to associate with the transfer.
   */
  AccountingEntity: TransferCreateParams.AccountingEntity;

  /**
   * The date the transfer was recorded.
   */
  EntryDate: string;

  /**
   * Total amount to transfer.
   */
  TotalAmount: number;

  /**
   * Bank account identifier the money will be transferred to.
   */
  TransferToBankAccountId: number;

  /**
   * Memo associated with the transfer, if applicable.
   */
  Memo?: string | null;
}

export namespace TransferCreateParams {
  /**
   * A rental property, association or company to associate with the transfer.
   */
  export interface AccountingEntity {
    /**
     * The type of accounting entity.
     */
    AccountingEntityType: 'Association' | 'Rental' | 'Company';

    /**
     * The accounting entity unique identifier.
     */
    Id: number;

    /**
     * The unit unique identifier for the accounting entity.
     */
    UnitId?: number | null;
  }
}

export interface TransferRetrieveParams {
  /**
   * The bank account identifier.
   */
  bankAccountId: number;
}

export interface TransferUpdateParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: A rental property, association or company to associate with the
   * transfer.
   */
  AccountingEntity: TransferUpdateParams.AccountingEntity;

  /**
   * Body param: The date the transfer was recorded.
   */
  EntryDate: string;

  /**
   * Body param: Total amount to transfer.
   */
  TotalAmount: number;

  /**
   * Body param: Bank account identifier the money will be transferred to.
   */
  TransferToBankAccountId: number;

  /**
   * Body param: Memo associated with the transfer, if applicable.
   */
  Memo?: string | null;
}

export namespace TransferUpdateParams {
  /**
   * A rental property, association or company to associate with the transfer.
   */
  export interface AccountingEntity {
    /**
     * The type of accounting entity.
     */
    AccountingEntityType: 'Association' | 'Rental' | 'Company';

    /**
     * The accounting entity unique identifier.
     */
    Id: number;

    /**
     * The unit unique identifier for the accounting entity.
     */
    UnitId?: number | null;
  }
}

export interface TransferListParams {
  /**
   * Filters results to any transfers that were recorded on or before the specified
   * date. The value must be formatted as YYYY-MM-DD.
   */
  enddate: string;

  /**
   * Filters results to any transfers that were recorded on or after the specified
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

export declare namespace Transfers {
  export {
    type Transfer as Transfer,
    type TransferSave as TransferSave,
    type TransferListResponse as TransferListResponse,
    type TransferCreateParams as TransferCreateParams,
    type TransferRetrieveParams as TransferRetrieveParams,
    type TransferUpdateParams as TransferUpdateParams,
    type TransferListParams as TransferListParams,
  };
}
