// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApplicationsAPI from './applications';
import * as ChargesAPI from './charges';
import {
  Charge,
  ChargeCreateParams,
  ChargeLineSave,
  ChargeListParams,
  ChargeListResponse,
  ChargeRetrieveParams,
  ChargeUpdateParams,
  Charges,
} from './charges';
import * as PaymentsAPI from './payments';
import { PaymentCreateParams, PaymentLineSave, PaymentUpdateParams, Payments } from './payments';
import * as RefundsAPI from './refunds';
import { Refund, RefundCreateParams, RefundRetrieveParams, Refunds } from './refunds';
import * as TransactionsAPI from './transactions';
import {
  ApplicationTransaction,
  Journal,
  TransactionListParams,
  TransactionListResponse,
  TransactionRetrieveParams,
  Transactions,
} from './transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Applications extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  charges: ChargesAPI.Charges = new ChargesAPI.Charges(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
  refunds: RefundsAPI.Refunds = new RefundsAPI.Refunds(this._client);

  /**
   * Creates a payment on the application ledger. Note that the recorded payment will
   * be automatically allocated to the general ledger accounts based on the payment
   * allocation settings. These settings can be found under the Settings >
   * Application Settings > Residents page in your account. If you'd like to specify
   * the GL accounts the payment should apply to, please use the
   * <a href="#operation/ExternalApiApplicationLedgerPayments_CreateApplicationLedgerPayment">Create
   * a payment</a> endpoint.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   */
  createAutoPay(
    applicationID: number,
    body: ApplicationCreateAutoPayParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.ApplicationTransaction> {
    return this._client.post(path`/v1/applications/${applicationID}/autoallocatedpayments`, {
      body,
      ...options,
    });
  }

  /**
   * Reverses an application ledger payment. Note, this action can only be taken on a
   * payment that has been deposited.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   */
  createPayReversal(
    applicationID: number,
    body: ApplicationCreatePayReversalParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.ApplicationTransaction> {
    return this._client.post(path`/v1/applications/${applicationID}/reversepayments`, { body, ...options });
  }

  /**
   * Retrieves a list of applications that have outstanding balances. Applications
   * with a zero or credit balance will not be returned in the results.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Outstanding Balances</span> - `View`
   */
  listBalances(
    query: ApplicationListBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApplicationListBalancesResponse> {
    return this._client.get('/v1/applications/outstandingbalances', { query, ...options });
  }
}

export interface OutstandingBalancesLine {
  /**
   * General ledger account unique identifier.
   */
  GlAccountId?: number;

  /**
   * Total balance of the account on the line item.
   */
  TotalBalance?: number;
}

/**
 * Fee assessed by the bank for the application reversed payment.
 */
export interface ReversePaymentOtherBankCharge {
  /**
   * Expense general ledger account to associate the bank fee.
   */
  GLAccountId: number;

  /**
   * Total amount of the bank fee.
   */
  TotalAmount: number;
}

export type ApplicationListBalancesResponse =
  Array<ApplicationListBalancesResponse.ApplicationListBalancesResponseItem>;

export namespace ApplicationListBalancesResponse {
  /**
   * This is an object that represents outstanding balances tied to applications.
   */
  export interface ApplicationListBalancesResponseItem {
    /**
     * Application unique identifier.
     */
    ApplicationId?: number;

    /**
     * Outstanding balance due from within the last 30 days.
     */
    Balance0To30Days?: number;

    /**
     * Outstanding balance due from within 31 to 60 days ago.
     */
    Balance31To60Days?: number;

    /**
     * Outstanding balance due from within 61 to 90 days ago.
     */
    Balance61To90Days?: number;

    /**
     * Outstanding balance due from over 90 days ago.
     */
    BalanceOver90Days?: number;

    /**
     * Breakdown of outstanding balance due by general ledger account.
     */
    Balances?: Array<ApplicationsAPI.OutstandingBalancesLine> | null;

    /**
     * Property unique identifier.
     */
    PropertyId?: number;

    /**
     * Total outstanding balance due.
     */
    TotalBalance?: number;

    /**
     * Property unit unique identifier.
     */
    UnitId?: number | null;
  }
}

export interface ApplicationCreateAutoPayParams {
  /**
   * The date of the transaction. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

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
   * The total amount of the payment being created.
   */
  TotalAmount: number;

  /**
   * A brief note describing the reason for the payment. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * The reference Number of the transaction. The value cannot exceed 30 characters.
   */
  ReferenceNumber?: string | null;
}

export interface ApplicationCreatePayReversalParams {
  /**
   * Date of the transaction. The date must be formatted as YYYY-MM-DD.
   */
  EntryDate: string;

  /**
   * Transaction identifier of the payment to reverse. Note, this payment transaction
   * must be deposited.
   */
  PaymentTransactionId: number;

  /**
   * Fee assessed by the bank for the application reversed payment.
   */
  BankFee?: ReversePaymentOtherBankCharge | null;

  /**
   * Fee assessed by the bank for the application reversed payment.
   */
  DepositTrustAccountBankFee?: ReversePaymentOtherBankCharge | null;

  /**
   * Non-sufficient funds (NSF) charge to the application.
   */
  NSFCharge?: ApplicationCreatePayReversalParams.NsfCharge | null;
}

export namespace ApplicationCreatePayReversalParams {
  /**
   * Non-sufficient funds (NSF) charge to the application.
   */
  export interface NsfCharge {
    /**
     * Income general ledger income account to record the charge under.
     */
    GLAccountId: number;

    /**
     * Total amount to charge the applicant.
     */
    TotalAmount: number;
  }
}

export interface ApplicationListBalancesParams {
  /**
   * Filters results to specific applications by their unique identifiers. If not
   * specified, all application outstanding balances will be returned.
   */
  applicationids?: Array<number>;

  /**
   * Filters results to applications in specific statuses. If not specified, all
   * application outstanding balances will be returned.
   */
  applicationstatuses?: Array<
    | 'Undecided'
    | 'Approved'
    | 'Rejected'
    | 'AddedToLease'
    | 'Cancelled'
    | 'Deferred'
    | 'New'
    | 'Draft'
    | 'AddedToDraftLease'
  >;

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

Applications.Transactions = Transactions;
Applications.Charges = Charges;
Applications.Payments = Payments;
Applications.Refunds = Refunds;

export declare namespace Applications {
  export {
    type OutstandingBalancesLine as OutstandingBalancesLine,
    type ReversePaymentOtherBankCharge as ReversePaymentOtherBankCharge,
    type ApplicationListBalancesResponse as ApplicationListBalancesResponse,
    type ApplicationCreateAutoPayParams as ApplicationCreateAutoPayParams,
    type ApplicationCreatePayReversalParams as ApplicationCreatePayReversalParams,
    type ApplicationListBalancesParams as ApplicationListBalancesParams,
  };

  export {
    Transactions as Transactions,
    type ApplicationTransaction as ApplicationTransaction,
    type Journal as Journal,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Charges as Charges,
    type Charge as Charge,
    type ChargeLineSave as ChargeLineSave,
    type ChargeListResponse as ChargeListResponse,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeListParams as ChargeListParams,
  };

  export {
    Payments as Payments,
    type PaymentLineSave as PaymentLineSave,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentUpdateParams as PaymentUpdateParams,
  };

  export {
    Refunds as Refunds,
    type Refund as Refund,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };
}
