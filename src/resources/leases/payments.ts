// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payments extends APIResource {
  /**
   * Creates a lease ledger payment.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseTransaction =
   *   await client.leases.payments.create(0, {
   *     Date: '2019-12-27',
   *     Lines: [{ Amount: 0, GLAccountId: 0 }],
   *     PaymentMethod: 'Check',
   *     SendEmailReceipt: true,
   *   });
   * ```
   */
  create(
    leaseID: number,
    body: PaymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.LeaseTransaction> {
    return this._client.post(path`/v1/leases/${leaseID}/payments`, { body, ...options });
  }

  /**
   * Updates a ledger payment. Each line item must have a unique general ledger
   * account identifier. PaymentMethod, Date, Memo, and the total Amount cannot be
   * changed for payments with a PaymentMethod of `BuildiumEFT`, `BuildiumCC` or
   * `RetailCash`.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseTransaction =
   *   await client.leases.payments.update(0, {
   *     leaseId: 0,
   *     Date: '2019-12-27',
   *     Lines: [{ Amount: 0, GLAccountId: 0 }],
   *     PaymentMethod: 'Check',
   *   });
   * ```
   */
  update(
    paymentID: number,
    params: PaymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.LeaseTransaction> {
    const { leaseId, ...body } = params;
    return this._client.put(path`/v1/leases/${leaseId}/payments/${paymentID}`, { body, ...options });
  }
}

/**
 * This is an object that represents a line item on a lease ledger payment
 */
export interface LeaseLedgerPaymentLine {
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
  Lines: Array<LeaseLedgerPaymentLine>;

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
   * An indicator for whether or not to send an email receipt to the payee. If the
   * payee does not have an email address set, no email will be sent.
   */
  SendEmailReceipt: boolean;

  /**
   * A brief note describing the reason for the payment. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * The payee's user unique identifier.
   */
  PayeeUserId?: number | null;

  /**
   * The reference Number of the transaction. The value cannot exceed 30 characters.
   */
  ReferenceNumber?: string | null;
}

export interface PaymentUpdateParams {
  /**
   * Path param:
   */
  leaseId: number;

  /**
   * Body param: The date of the transaction. The date must be formatted as
   * YYYY-MM-DD.
   */
  Date: string;

  /**
   * Body param: A collection of line items included in the payment. At least one
   * line item is required.
   */
  Lines: Array<LeaseLedgerPaymentLine>;

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
   * Body param: A brief note describing the reason for the payment. The value cannot
   * exceed 65 characters.
   */
  Memo?: string | null;

  /**
   * Body param: The payee's user unique identifier.
   */
  PayeeUserId?: number | null;

  /**
   * Body param: The reference Number of the transaction. The value cannot exceed 30
   * characters.
   */
  ReferenceNumber?: string | null;
}

export declare namespace Payments {
  export {
    type LeaseLedgerPaymentLine as LeaseLedgerPaymentLine,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentUpdateParams as PaymentUpdateParams,
  };
}
