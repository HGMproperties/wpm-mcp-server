// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QuickdepositsAPI from '../bankaccounts/quickdeposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Refunds extends APIResource {
  /**
   * Creates a refund.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`
   *             <span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   */
  create(vendorID: number, body: RefundCreateParams, options?: RequestOptions): APIPromise<VendorRefund> {
    return this._client.post(path`/v1/vendors/${vendorID}/refunds`, { body, ...options });
  }

  /**
   * Retrieves a refund.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`
   */
  retrieve(
    vendorRefundID: number,
    params: RefundRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VendorRefund> {
    const { vendorId } = params;
    return this._client.get(path`/v1/vendors/${vendorId}/refunds/${vendorRefundID}`, options);
  }
}

export interface VendorRefund {
  /**
   * Unique identifier of the bank account that the refund was deposited into.
   */
  BankAccountId?: number;

  /**
   * Date the refund was recorded.
   */
  EntryDate?: string;

  /**
   * Transaction unique identifier.
   */
  Id?: number;

  /**
   * A collection of line items associated with the vendor refund.
   */
  Lines?: Array<VendorRefund.Line> | null;

  /**
   * Memo for the vendor refund.
   */
  Memo?: string | null;

  /**
   * The payment method used for the vendor refund.
   */
  PaymentMethod?:
    | 'None'
    | 'Check'
    | 'Cash'
    | 'MoneyOrder'
    | 'CashierCheck'
    | 'DirectDeposit'
    | 'CreditCard'
    | 'ElectronicPayment'
    | 'RetailCash';

  /**
   * Reference number for the vendor refund.
   */
  ReferenceNumber?: string | null;
}

export namespace VendorRefund {
  export interface Line {
    /**
     * An object that represents an accounting entity.
     */
    AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

    /**
     * Amount of the vendor refund line item.
     */
    Amount?: number;

    /**
     * Unique identifier of the general ledger account associated with the vendor
     * refund.
     */
    GLAccountId?: number;

    /**
     * Vendor refund line item unique identifier.
     */
    Id?: number;

    /**
     * Memo for the vendor refund line item.
     */
    Memo?: string | null;
  }
}

export interface RefundCreateParams {
  /**
   * Date the vendor refund was made.
   */
  EntryDate: string;

  /**
   * A collection of line items associated with the vendor refund.
   */
  Lines: Array<RefundCreateParams.Line>;

  /**
   * The payment method used for the refund.
   */
  PaymentMethod:
    | 'Check'
    | 'Cash'
    | 'MoneyOrder'
    | 'CashierCheck'
    | 'DirectDeposit'
    | 'CreditCard'
    | 'ElectronicPayment';

  /**
   * Unique identifier of the bank account that the refund was deposited into.
   */
  BankAccountId?: number | null;

  /**
   * Memo associated with the vendor refund, if applicable. Memo cannot exceed 65
   * characters
   */
  Memo?: string | null;

  /**
   * The invoice or reference number that the vendor assigned to the refund.
   * Reference number cannot exceed 45 characters.
   */
  ReferenceNumber?: string | null;
}

export namespace RefundCreateParams {
  export interface Line {
    /**
     * Object to represent an Accounting Entity
     */
    AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

    /**
     * Amount of the vendor refund line item.
     */
    Amount: number;

    /**
     * Unique identifier of the general ledger account associated with the vendor
     * refund.
     */
    GLAccountId: number;

    /**
     * Memo for the vendor refund line item. Memo cannot exceed 215 characters.
     */
    Memo?: string | null;
  }
}

export interface RefundRetrieveParams {
  vendorId: number;
}

export declare namespace Refunds {
  export {
    type VendorRefund as VendorRefund,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };
}
