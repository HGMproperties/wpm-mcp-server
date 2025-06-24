// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Quickdeposits extends APIResource {
  /**
   * Creates a quick deposit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`
   */
  create(
    bankAccountID: number,
    body: QuickdepositCreateParams,
    options?: RequestOptions,
  ): APIPromise<QuickDeposit> {
    return this._client.post(path`/v1/bankaccounts/${bankAccountID}/quickdeposits`, { body, ...options });
  }

  /**
   * Retrieves a quick deposit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   */
  retrieve(
    quickDepositID: number,
    params: QuickdepositRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<QuickDeposit> {
    const { bankAccountId } = params;
    return this._client.get(path`/v1/bankaccounts/${bankAccountId}/quickdeposits/${quickDepositID}`, options);
  }

  /**
   * Updates a quick deposit.
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
    quickDepositID: number,
    params: QuickdepositUpdateParams,
    options?: RequestOptions,
  ): APIPromise<QuickDeposit> {
    const { bankAccountId, ...body } = params;
    return this._client.put(path`/v1/bankaccounts/${bankAccountId}/quickdeposits/${quickDepositID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all quick deposits.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   */
  list(
    bankAccountID: number,
    query: QuickdepositListParams,
    options?: RequestOptions,
  ): APIPromise<QuickdepositListResponse> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}/quickdeposits`, { query, ...options });
  }
}

/**
 * An object that represents an accounting entity.
 */
export interface AccountingEntity {
  /**
   * The type of accounting entity.
   */
  AccountingEntityType?: 'Association' | 'Rental' | 'Company';

  /**
   * A link to the accounting entity resource.
   */
  Href?: string | null;

  /**
   * The accounting entity unique identifier.
   */
  Id?: number;

  /**
   * An object that represents a unit for a building.
   */
  Unit?: AccountingEntity.Unit | null;
}

export namespace AccountingEntity {
  /**
   * An object that represents a unit for a building.
   */
  export interface Unit {
    /**
     * A link to the unit resource.
     */
    Href?: string | null;

    /**
     * The unit unique identifier
     */
    Id?: number;
  }
}

/**
 * Object to represent an Accounting Entity
 */
export interface AccountingEntitySave {
  /**
   * The type of the accounting entity
   */
  AccountingEntityType: 'Association' | 'Rental' | 'Company';

  /**
   * The unique identifier of the accounting entity
   */
  Id: number;

  /**
   * The unit unique identifier for the accounting entity.
   */
  UnitId?: number | null;
}

export interface QuickDeposit {
  /**
   * An object that represents an accounting entity.
   */
  AccountingEntity?: AccountingEntity | null;

  /**
   * Date the quick deposit was recorded.
   */
  EntryDate?: string;

  /**
   * Quick deposit unique identifier.
   */
  Id?: number;

  /**
   * Memo associated with the quick deposit, if applicable.
   */
  Memo?: string | null;

  /**
   * Offsetting general ledger account identifier. The offsetting general ledger
   * account acts as a label for this deposit.
   */
  OffsetGLAccountId?: number;

  /**
   * Amount included in the quick deposit.
   */
  TotalAmount?: number;
}

export interface QuickDepositSave {
  /**
   * Object to represent an Accounting Entity
   */
  AccountingEntity: AccountingEntitySave;

  /**
   * Amount to be deposited.
   */
  Amount: number;

  /**
   * Date the quick deposit was recorded.
   */
  EntryDate: string;

  /**
   * Offsetting general ledger account identifier. The offsetting general ledger
   * account acts as a label for this deposit. For instance, if you're depositing
   * money collected from a washing machine, you might select the "Laundry income"
   * account.
   */
  OffsetGLAccountId: number;

  /**
   * Memo associated with the quick deposit.
   */
  Memo?: string | null;
}

export type QuickdepositListResponse = Array<QuickDeposit>;

export interface QuickdepositCreateParams {
  /**
   * Object to represent an Accounting Entity
   */
  AccountingEntity: AccountingEntitySave;

  /**
   * Amount to be deposited.
   */
  Amount: number;

  /**
   * Date the quick deposit was recorded.
   */
  EntryDate: string;

  /**
   * Offsetting general ledger account identifier. The offsetting general ledger
   * account acts as a label for this deposit. For instance, if you're depositing
   * money collected from a washing machine, you might select the "Laundry income"
   * account.
   */
  OffsetGLAccountId: number;

  /**
   * Memo associated with the quick deposit.
   */
  Memo?: string | null;
}

export interface QuickdepositRetrieveParams {
  bankAccountId: number;
}

export interface QuickdepositUpdateParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: Object to represent an Accounting Entity
   */
  AccountingEntity: AccountingEntitySave;

  /**
   * Body param: Amount to be deposited.
   */
  Amount: number;

  /**
   * Body param: Date the quick deposit was recorded.
   */
  EntryDate: string;

  /**
   * Body param: Offsetting general ledger account identifier. The offsetting general
   * ledger account acts as a label for this deposit. For instance, if you're
   * depositing money collected from a washing machine, you might select the "Laundry
   * income" account.
   */
  OffsetGLAccountId: number;

  /**
   * Body param: Memo associated with the quick deposit.
   */
  Memo?: string | null;
}

export interface QuickdepositListParams {
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

export declare namespace Quickdeposits {
  export {
    type AccountingEntity as AccountingEntity,
    type AccountingEntitySave as AccountingEntitySave,
    type QuickDeposit as QuickDeposit,
    type QuickDepositSave as QuickDepositSave,
    type QuickdepositListResponse as QuickdepositListResponse,
    type QuickdepositCreateParams as QuickdepositCreateParams,
    type QuickdepositRetrieveParams as QuickdepositRetrieveParams,
    type QuickdepositUpdateParams as QuickdepositUpdateParams,
    type QuickdepositListParams as QuickdepositListParams,
  };
}
