// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QuickdepositsAPI from '../quickdeposits';
import * as FilesAPI from './files';
import {
  CheckFile,
  FileDeleteParams,
  FileListParams,
  FileListResponse,
  FileRetrieveParams,
  FileUploadParams,
  FileUploadResponse,
  Files,
} from './files';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Checks extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Creates a check.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   */
  create(bankAccountID: number, body: CheckCreateParams, options?: RequestOptions): APIPromise<Check> {
    return this._client.post(path`/v1/bankaccounts/${bankAccountID}/checks`, { body, ...options });
  }

  /**
   * Retrieves a bank account check.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   *
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>
   */
  retrieve(checkID: number, params: CheckRetrieveParams, options?: RequestOptions): APIPromise<Check> {
    const { bankAccountId } = params;
    return this._client.get(path`/v1/bankaccounts/${bankAccountId}/checks/${checkID}`, options);
  }

  /**
   * Updates a check.
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
  update(checkID: number, params: CheckUpdateParams, options?: RequestOptions): APIPromise<Check> {
    const { bankAccountId, ...body } = params;
    return this._client.put(path`/v1/bankaccounts/${bankAccountId}/checks/${checkID}`, { body, ...options });
  }

  /**
   * Retrieves all bank account checks.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   *
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>
   */
  list(
    bankAccountID: number,
    query: CheckListParams,
    options?: RequestOptions,
  ): APIPromise<CheckListResponse> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}/checks`, { query, ...options });
  }
}

export interface Check {
  /**
   * Check number.
   */
  CheckNumber?: string | null;

  /**
   * Date the check was recorded.
   */
  EntryDate?: string;

  /**
   * Check unique identifier.
   */
  Id?: number;

  /**
   * A collection of line items associated with the check.
   */
  Lines?: Array<Check.Line> | null;

  /**
   * Memo associated with the check, if applicable.
   */
  Memo?: string | null;

  /**
   * Payee of the check.
   */
  Payee?: Check.Payee | null;

  /**
   * Sum of all `Journal.Lines.Amount` entries in the check.
   */
  TotalAmount?: number;
}

export namespace Check {
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
     * General ledger account unique identifier the line item is related to.
     */
    GLAccountId?: number | null;

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

  /**
   * Payee of the check.
   */
  export interface Payee {
    /**
     * A link to the resource endpoint associated with the payee.
     */
    Href?: string | null;

    /**
     * The payee user identifier.
     */
    Id?: number;

    /**
     * The entity type for the payee.
     */
    Type?: 'Vendor' | 'RentalOwner';
  }
}

export interface CheckLineSave {
  /**
   * Accounting entity associated with the line item.
   */
  AccountingEntity: CheckLineSave.AccountingEntity;

  /**
   * Amount of the line item.
   */
  Amount: number;

  /**
   * The general ledger account identifier under which the line item amount will be
   * recorded.
   */
  GLAccountId: number;

  /**
   * Memo for the line item.
   */
  Memo?: string | null;

  /**
   * Reference number for the line item.
   */
  ReferenceNumber?: string | null;
}

export namespace CheckLineSave {
  /**
   * Accounting entity associated with the line item.
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

export interface CheckPayeeSave {
  /**
   * The payee user identifier.
   */
  Id: number;

  /**
   * The payee entity type.
   */
  Type: 'Vendor' | 'RentalOwner';
}

export type CheckListResponse = Array<Check>;

export interface CheckCreateParams {
  /**
   * Date the check was recorded.
   */
  EntryDate: string;

  /**
   * A collection of line items to associate with the check.
   */
  Lines: Array<CheckLineSave>;

  /**
   * Payee of the transaction.
   */
  Payee: CheckPayeeSave;

  /**
   * Check number.
   */
  CheckNumber?: string | null;

  /**
   * Memo associated with the check, if applicable.
   */
  Memo?: string | null;
}

export interface CheckRetrieveParams {
  bankAccountId: number;
}

export interface CheckUpdateParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: Date the check was recorded.
   */
  EntryDate: string;

  /**
   * Body param: A collection of line items to associate with the check.
   */
  Lines: Array<CheckLineSave>;

  /**
   * Body param: Payee of the transaction.
   */
  Payee: CheckPayeeSave;

  /**
   * Body param: Check number.
   */
  CheckNumber?: string | null;

  /**
   * Body param: Memo associated with the check, if applicable.
   */
  Memo?: string | null;
}

export interface CheckListParams {
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

Checks.Files = Files;

export declare namespace Checks {
  export {
    type Check as Check,
    type CheckLineSave as CheckLineSave,
    type CheckPayeeSave as CheckPayeeSave,
    type CheckListResponse as CheckListResponse,
    type CheckCreateParams as CheckCreateParams,
    type CheckRetrieveParams as CheckRetrieveParams,
    type CheckUpdateParams as CheckUpdateParams,
    type CheckListParams as CheckListParams,
  };

  export {
    Files as Files,
    type CheckFile as CheckFile,
    type FileListResponse as FileListResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileUploadParams as FileUploadParams,
  };
}
