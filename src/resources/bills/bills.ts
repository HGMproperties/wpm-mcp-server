// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BillsAPI from './bills';
import * as GlaccountsAPI from '../glaccounts';
import * as QuickdepositsAPI from '../bankaccounts/quickdeposits';
import * as FilesAPI from './files';
import {
  BillFileMessage,
  FileDeleteParams,
  FileDownloadParams,
  FileListParams,
  FileListResponse,
  FileRetrieveParams,
  FileUploadParams,
  FileUploadResponse,
  Files,
} from './files';
import * as PaymentsAPI from './payments';
import {
  BillPaymentLinePostMessage,
  BillPaymentMessage,
  PaymentCreateMultipleParams,
  PaymentCreateParams,
  PaymentListParams,
  PaymentListResponse,
  PaymentRetrieveParams,
  Payments,
} from './payments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bills extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);

  /**
   * Creates a bill.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`
   */
  create(body: BillCreateParams, options?: RequestOptions): APIPromise<BillMessage> {
    return this._client.post('/v1/bills', { body, ...options });
  }

  /**
   * Retrieves a single bill.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`
   */
  retrieve(billID: number, options?: RequestOptions): APIPromise<BillMessage> {
    return this._client.get(path`/v1/bills/${billID}`, options);
  }

  /**
   * Use this operation to update any of the writable fields of an existing bill
   * resource. When updating this resource keep the following in mind:
   *
   * <ul><li>Writable fields omitted from the request or that do not have a value in the request message are set to `NULL`. If you do not want to update the field, submit the original field value.</li><li>When a bill has an existing payment any edits to the line items that change the total bill amount must result in the new total bill amount being equal to or greater than the amount paid.</li><li>When adding a new line item leave the `LineItem.Id` field empty.</li><li>You cannot update a bill that has a pending EFT associated with it.</li></ul>
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`
   */
  update(billID: number, body: BillUpdateParams, options?: RequestOptions): APIPromise<BillMessage> {
    return this._client.put(path`/v1/bills/${billID}`, { body, ...options });
  }

  /**
   * Retrieves a list of bills.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`
   */
  list(
    query: BillListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillListResponse> {
    return this._client.get('/v1/bills', { query, ...options });
  }
}

/**
 * Bill mark up.
 */
export interface BillMarkupSaveMessage {
  /**
   * The mark up amount. The value should be relative to the markup `Type`. If the
   * mark up `Type` is `Percent` the value cannot exceed 100.
   */
  Amount: number;

  /**
   * The markup type.
   */
  Type: 'Percent' | 'Amount';
}

export interface BillMessage {
  /**
   * The current approval status for the bill.
   */
  ApprovalStatus?: 'NotNeeded' | 'ApprovalRequired' | 'Approved' | 'Pending' | 'Rejected';

  /**
   * Date of the bill.
   */
  Date?: string;

  /**
   * The date that payment is due to the vendor.
   */
  DueDate?: string;

  /**
   * Bill unique identifier.
   */
  Id?: number;

  /**
   * A collection of line items associated with the bill.
   */
  Lines?: Array<BillMessage.Line> | null;

  /**
   * A description of what the invoice was for.
   */
  Memo?: string | null;

  /**
   * The date that payment was made to the vendor.
   */
  PaidDate?: string | null;

  /**
   * The invoice or reference number that the vendor assigned to the invoice.
   */
  ReferenceNumber?: string | null;

  /**
   * Unique identifier of the vendor who submitted the bill.
   */
  VendorId?: number;

  /**
   * Unique identifier of the work order associated with this bill.
   */
  WorkOrderId?: number | null;
}

export namespace BillMessage {
  /**
   * Bill line items.
   */
  export interface Line {
    /**
     * An object that represents an accounting entity.
     */
    AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

    /**
     * Line item amount.
     */
    Amount?: number;

    /**
     * A message that represents a general ledger account.
     */
    GLAccount?: GlaccountsAPI.GlAccountMessage | null;

    /**
     * The bill line item unique identifier.
     */
    Id?: number;

    /**
     * Bill mark up.
     */
    Markup?: Line.Markup | null;

    /**
     * Description of the line item.
     */
    Memo?: string | null;
  }

  export namespace Line {
    /**
     * Bill mark up.
     */
    export interface Markup {
      /**
       * The mark up amount.
       */
      Amount?: number;

      /**
       * The markup type.
       */
      Type?: 'Percent' | 'Amount';
    }
  }
}

export type BillListResponse = Array<BillMessage>;

export interface BillCreateParams {
  /**
   * The date that the bill was received. This date typically corresponds with a Bill
   * Received Date, Invoice Date, or Invoice Received Date from an invoice. The date
   * must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * The date that payment is due to the vendor. The due date must be after the value
   * in the `Date` field. The date must be formatted as YYYY-MM-DD.
   */
  DueDate: string;

  /**
   * A collection of line items associated with the bill.
   */
  Lines: Array<BillCreateParams.Line>;

  /**
   * The unique identifier of the vendor or supplier who sent you an invoice.
   */
  VendorId: number;

  /**
   * A description of what the invoice was for. The value cannot exceed 245
   * characters.
   */
  Memo?: string | null;

  /**
   * The reference or invoice number that the vendor assigned to the invoice. The
   * value cannot exceed 40 characters.
   */
  ReferenceNumber?: string | null;

  /**
   * Unique identifier of the work order associated with this bill.
   */
  WorkOrderId?: number | null;
}

export namespace BillCreateParams {
  /**
   * Bill line item.
   */
  export interface Line {
    /**
     * Object to represent an Accounting Entity
     */
    AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which the line item amount will be
     * recorded. The following general ledger accounts are not valid: Accounts Payable,
     * Accounts Receivable, Undeposited Funds or any general leger account referencing
     * a bank account.
     */
    GlAccountId: number;

    /**
     * Bill mark up.
     */
    Markup?: BillsAPI.BillMarkupSaveMessage | null;

    /**
     * Memo for the line item. The value cannot exceed 240 characters.
     */
    Memo?: string | null;
  }
}

export interface BillUpdateParams {
  /**
   * The date that an invoice was received. This date typically corresponds with a
   * Bill Received Date, Invoice Date, or Invoice Received Date from an invoice. The
   * date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * The date that payment for a bill is due to the vendor. The date must be
   * formatted as YYYY-MM-DD.
   */
  DueDate: string;

  /**
   * The unique identifier of the vendor or supplier who sent you an invoice.
   */
  VendorId: number;

  /**
   * A collection of line items associated with the bill.
   */
  Lines?: Array<BillUpdateParams.Line> | null;

  /**
   * A description of what the invoice was for. The value cannot exceed 245
   * characters.
   */
  Memo?: string | null;

  /**
   * The reference or invoice number that the vendor assigned to the invoice. The
   * value cannot exceed 40 characters.
   */
  ReferenceNumber?: string | null;
}

export namespace BillUpdateParams {
  /**
   * Bill line item.
   */
  export interface Line {
    /**
     * Object to represent an Accounting Entity
     */
    AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which the line item amount will be
     * recorded. The following general ledger accounts are not valid: Accounts Payable,
     * Accounts Receivable, Undeposited Funds or any general leger account referencing
     * a bank account.
     */
    GlAccountId: number;

    /**
     * Bill line item unique identifier.
     */
    Id?: number | null;

    /**
     * Bill mark up.
     */
    Markup?: BillsAPI.BillMarkupSaveMessage | null;

    /**
     * Memo for the line item. The value cannot exceed 240 characters.
     */
    Memo?: string | null;
  }
}

export interface BillListParams {
  /**
   * Filters the results to bills matching the specified approval statuses. If no
   * approval status is specified, bills with any status will be returned.
   */
  approvalstatuses?: Array<'NotNeeded' | 'ApprovalRequired' | 'Approved' | 'Pending' | 'Rejected'>;

  /**
   * Filters results to any bill containing line items associated with the specified
   * entity identifier. This filter is used in conjunction with the `EntityType`
   * field which must be set to the type of entity this identifier references.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that `EntityId` refers to. This field is required
   * if `EntityId` is specified.
   */
  entitytype?: 'Rental' | 'RentalOwner' | 'Association';

  /**
   * Filters results to any bill whose paid date is greater than or equal to the
   * specified value.
   */
  frompaiddate?: string;

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
   * Filters results by the bill's paid status. If no status is specified, bills with
   * any status will be returned.
   */
  paidstatus?: 'Paid' | 'Unpaid' | 'UncollectedMarkups';

  /**
   * Filters results to bills whose reference number contains the specified value.
   */
  referencenumber?: string;

  /**
   * Filters results to any bill whose paid date is less than or equal to the
   * specified value.
   */
  topaiddate?: string;

  /**
   * Filters results to bills associated with a specific vendor.
   */
  vendorid?: number;
}

Bills.Files = Files;
Bills.Payments = Payments;

export declare namespace Bills {
  export {
    type BillMarkupSaveMessage as BillMarkupSaveMessage,
    type BillMessage as BillMessage,
    type BillListResponse as BillListResponse,
    type BillCreateParams as BillCreateParams,
    type BillUpdateParams as BillUpdateParams,
    type BillListParams as BillListParams,
  };

  export {
    Files as Files,
    type BillFileMessage as BillFileMessage,
    type FileListResponse as FileListResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileDownloadParams as FileDownloadParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Payments as Payments,
    type BillPaymentLinePostMessage as BillPaymentLinePostMessage,
    type BillPaymentMessage as BillPaymentMessage,
    type PaymentListResponse as PaymentListResponse,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentRetrieveParams as PaymentRetrieveParams,
    type PaymentListParams as PaymentListParams,
    type PaymentCreateMultipleParams as PaymentCreateMultipleParams,
  };
}
