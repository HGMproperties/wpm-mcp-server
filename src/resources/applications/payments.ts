// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payments extends APIResource {
  /**
   * Creates an application ledger payment.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   */
  create(
    applicationID: number,
    body: PaymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.ApplicationTransaction> {
    return this._client.post(path`/v1/applications/${applicationID}/payments`, { body, ...options });
  }

  /**
   * Updates an application ledger payment. Each line item must have a unique general
   * ledger account identifier. PaymentMethod, Date, Memo, and the total Amount
   * cannot be changed for payments with a PaymentMethod of `BuildiumEFT`,
   * `BuildiumCC` or `RetailCash`.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   */
  update(
    transactionID: number,
    params: PaymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.ApplicationTransaction> {
    const { applicationId, ...body } = params;
    return this._client.put(path`/v1/applications/${applicationId}/payments/${transactionID}`, {
      body,
      ...options,
    });
  }
}

/**
 * This is an object that represents a line item on an application ledger payment
 */
export interface PaymentLineSave {
  /**
   * Amount of the line item.
   */
  Amount: number;

  /**
   * The general ledger account identifier under which the line item amount will be
   * recorded.
   */
  GLAccountId: number;
}

export interface PaymentCreateParams {
  /**
   * The date of the transaction. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * A collection of line items included in the payment. At least one line item is
   * required.
   */
  Lines: Array<PaymentLineSave>;

  /**
   * The payment method used for the transaction.
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
   * An indicator for whether to send an email receipt to the payee. If the payee
   * does not have an email address set, no email will be sent.
   */
  SendEmailReceipt: boolean;

  /**
   * Memo associated with the payment. The value cannot exceed 65 characters.
   */
  Memo?: string | null;

  /**
   * The reference Number of the transaction. The value cannot exceed 30 characters.
   */
  ReferenceNumber?: string | null;
}

export interface PaymentUpdateParams {
  /**
   * Path param: The application unique identifier.
   */
  applicationId: number;

  /**
   * Body param: The date of the transaction. The date must be formatted as
   * YYYY-MM-DD.
   */
  Date: string;

  /**
   * Body param: A collection of line items included in the payment. At least one
   * line item is required.
   */
  Lines: Array<PaymentLineSave>;

  /**
   * Body param: The payment method used for the transaction.
   */
  PaymentMethod:
    | 'Check'
    | 'Cash'
    | 'MoneyOrder'
    | 'CashierCheck'
    | 'DirectDeposit'
    | 'CreditCard'
    | 'ElectronicPayment'
    | 'BuildiumEFT'
    | 'BuildiumCC'
    | 'RetailCash';

  /**
   * Body param: Memo associated with the payment. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * Body param: The reference Number of the transaction. The value cannot exceed 30
   * characters.
   */
  ReferenceNumber?: string | null;
}

export declare namespace Payments {
  export {
    type PaymentLineSave as PaymentLineSave,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentUpdateParams as PaymentUpdateParams,
  };
}
