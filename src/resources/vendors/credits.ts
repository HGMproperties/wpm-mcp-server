// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QuickdepositsAPI from '../bankaccounts/quickdeposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Credits extends APIResource {
  /**
   * Creates a credit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`
   */
  create(vendorID: number, body: CreditCreateParams, options?: RequestOptions): APIPromise<VendorCredit> {
    return this._client.post(path`/v1/vendors/${vendorID}/credits`, { body, ...options });
  }

  /**
   * Retrieves a credit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`
   */
  retrieve(
    vendorCreditID: number,
    params: CreditRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VendorCredit> {
    const { vendorId } = params;
    return this._client.get(path`/v1/vendors/${vendorId}/credits/${vendorCreditID}`, options);
  }
}

export interface VendorCredit {
  /**
   * Date the vendor credit was made.
   */
  EntryDate?: string;

  /**
   * Vendor credit unique identifier.
   */
  Id?: number;

  /**
   * A collection of line items associated with the vendor credit.
   */
  Lines?: Array<VendorCredit.Line> | null;

  /**
   * Memo associated with the vendor credit, if applicable.
   */
  Memo?: string | null;

  /**
   * The invoice or reference number that the vendor assigned to the credit.
   */
  ReferenceNumber?: string | null;
}

export namespace VendorCredit {
  export interface Line {
    /**
     * An object that represents an accounting entity.
     */
    AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

    /**
     * Amount of the vendor credit line item.
     */
    Amount?: number;

    /**
     * Unique identifier of the general ledger account associated with the vendor
     * credit.
     */
    GLAccountId?: number;

    /**
     * Vendor credit line item unique identifier.
     */
    Id?: number;

    /**
     * Memo for the vendor credit line item.
     */
    Memo?: string | null;
  }
}

export interface CreditCreateParams {
  /**
   * Date the vendor credit was made. The date must be formatted as YYYY-MM-DD.
   */
  EntryDate: string;

  /**
   * A collection of line items associated with the vendor credit. At least one line
   * item is required and cannot exceed 100 line items.
   */
  Lines: Array<CreditCreateParams.Line>;

  /**
   * Memo associated with the vendor credit, if applicable. The value cannot exceed
   * 40 characters.
   */
  Memo?: string | null;

  /**
   * The invoice or reference number that the vendor assigned to the credit. The
   * value cannot exceed 40 characters.
   */
  ReferenceNumber?: string | null;
}

export namespace CreditCreateParams {
  export interface Line {
    /**
     * Object to represent an Accounting Entity
     */
    AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

    /**
     * Amount of the vendor credit line item. Must be between 0.01 and 9999999.99.
     */
    Amount: number;

    /**
     * Unique identifier of the general ledger account associated with the vendor
     * credit. The account cannot be a bank account.
     */
    GLAccountId: number;

    /**
     * Memo for the vendor credit line item. Cannot exceed 240 characters.
     */
    Memo?: string | null;
  }
}

export interface CreditRetrieveParams {
  vendorId: number;
}

export declare namespace Credits {
  export {
    type VendorCredit as VendorCredit,
    type CreditCreateParams as CreditCreateParams,
    type CreditRetrieveParams as CreditRetrieveParams,
  };
}
