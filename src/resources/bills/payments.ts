// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PaymentsAPI from './payments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payments extends APIResource {
  /**
   * Creates a bill payment.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`
   *             <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   */
  create(
    billID: number,
    body: PaymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<BillPaymentMessage> {
    return this._client.post(path`/v1/bills/${billID}/payments`, { body, ...options });
  }

  /**
   * Retrieves specific bill payment.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`
   */
  retrieve(
    paymentID: number,
    params: PaymentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BillPaymentMessage> {
    const { billId } = params;
    return this._client.get(path`/v1/bills/${billId}/payments/${paymentID}`, options);
  }

  /**
   * Retrieves a list of bill payments for a specific bill.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`
   */
  list(
    billID: number,
    query: PaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentListResponse> {
    return this._client.get(path`/v1/bills/${billID}/payments`, { query, ...options });
  }

  /**
   * Creates a payment for multiple bills with one check.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`
   *             <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   */
  createMultiple(
    body: PaymentCreateMultipleParams,
    options?: RequestOptions,
  ): APIPromise<BillPaymentMessage> {
    return this._client.post('/v1/bills/payments', { body, ...options });
  }
}

export interface BillPaymentLinePostMessage {
  /**
   * The amount that is being paid toward the bill line item.
   */
  Amount: number;

  /**
   * The unique identifier of the bill line item toward which the payment is being
   * made.
   */
  BillLineId: number;
}

export interface BillPaymentMessage {
  /**
   * A collection of vendor credits that was applied in the bill payment.
   */
  AppliedVendorCredits?: Array<BillPaymentMessage.AppliedVendorCredit> | null;

  /**
   * Unique identifier of the bank account that the payment was made from.
   */
  BankAccountId?: number;

  /**
   * Number of the check used to make the payment.
   */
  CheckNumber?: string | null;

  /**
   * Date the payment was made.
   */
  EntryDate?: string;

  /**
   * Bill payment unique identifier.
   */
  Id?: number;

  /**
   * A collection of payment line items.
   */
  Lines?: Array<BillPaymentMessage.Line> | null;

  /**
   * A high-level description of the payment.
   */
  Memo?: string | null;

  /**
   * A collection of bill identifiers that the payment was applied to.
   */
  PaidBillIds?: Array<number> | null;
}

export namespace BillPaymentMessage {
  export interface AppliedVendorCredit {
    /**
     * A link to the resource endpoint associated with the vendor credit.
     */
    Href?: string | null;

    /**
     * The vendor credit id applied to the bill payment.
     */
    Id?: number;
  }

  /**
   * Payment line items.
   */
  export interface Line {
    /**
     * The accounting entity associated with the payment line item.
     */
    AccountingEntity?: Line.AccountingEntity | null;

    /**
     * Line item amount.
     */
    Amount?: number;

    /**
     * The general ledger account the line item is allocated to.
     */
    GLAccountId?: number;
  }

  export namespace Line {
    /**
     * The accounting entity associated with the payment line item.
     */
    export interface AccountingEntity {
      /**
       * Indicates the type of the accounting entity.
       */
      AccountingEntityType?: 'Association' | 'Rental' | 'Company';

      /**
       * The accounting entity unique identifier.
       */
      Id?: number;

      /**
       * The unit unique identifier for the accounting entity
       */
      UnitId?: number | null;
    }
  }
}

export type PaymentListResponse = Array<BillPaymentMessage>;

export interface PaymentCreateParams {
  /**
   * Unique identifier of the bank account that the payment was made from.
   */
  BankAccountId: number;

  /**
   * Date the payment was made.
   */
  EntryDate: string;

  /**
   * A collection of payment line items.
   */
  Lines: Array<BillPaymentLinePostMessage>;

  /**
   * Number of the check used to make the payment. The value cannot exceed 30
   * characters.
   */
  CheckNumber?: string | null;

  /**
   * A high-level description of the payment. The value cannot exceed 240 characters.
   */
  Memo?: string | null;

  /**
   * Unique identifiers of the vendor credits to apply to the payment.
   */
  VendorCreditIds?: Array<number> | null;
}

export interface PaymentRetrieveParams {
  billId: number;
}

export interface PaymentListParams {
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

export interface PaymentCreateMultipleParams {
  /**
   * Unique identifier of the bank account that the payment was made from.
   */
  BankAccountId: number;

  /**
   * Unique identifiers of bills for full payment. Bill ids cannot be present here if
   * they are part of the `PaymentAllocations` collection.
   */
  BillIds: Array<number>;

  /**
   * Date the payment was made.
   */
  EntryDate: string;

  /**
   * A collection of payment allocations for individual bills. Bill ids cannot be
   * present here if they are fully paid as part of the `BillIds` collection.
   */
  PaymentAllocations?: Array<PaymentCreateMultipleParams.PaymentAllocation> | null;

  /**
   * Indicates whether to queue local check printing. Bank account associated with
   * the bill must have check printing enabled to be true.
   */
  QueueChecksForPrinting?: boolean | null;

  /**
   * Unique identifiers of the vendor credits to apply to the payment.
   */
  VendorCreditIds?: Array<number> | null;
}

export namespace PaymentCreateMultipleParams {
  export interface PaymentAllocation {
    /**
     * Unique identifier of the bill.
     */
    BillId?: number | null;

    /**
     * A collection of payment line items.
     */
    Lines?: Array<PaymentsAPI.BillPaymentLinePostMessage> | null;
  }
}

export declare namespace Payments {
  export {
    type BillPaymentLinePostMessage as BillPaymentLinePostMessage,
    type BillPaymentMessage as BillPaymentMessage,
    type PaymentListResponse as PaymentListResponse,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentRetrieveParams as PaymentRetrieveParams,
    type PaymentListParams as PaymentListParams,
    type PaymentCreateMultipleParams as PaymentCreateMultipleParams,
  };
}
