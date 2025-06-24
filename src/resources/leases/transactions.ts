// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TransactionsAPI from '../applications/transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves a specific lease transaction.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`
   *
   * @example
   * ```ts
   * const leaseTransaction =
   *   await client.leases.transactions.retrieve(0, {
   *     leaseId: 0,
   *   });
   * ```
   */
  retrieve(
    transactionID: number,
    params: TransactionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LeaseTransaction> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/transactions/${transactionID}`, options);
  }

  /**
   * Retrieves all the transactions for a specific lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   *
   * @example
   * ```ts
   * const leaseTransactions =
   *   await client.leases.transactions.list(0);
   * ```
   */
  list(
    leaseID: number,
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/transactions`, { query, ...options });
  }
}

/**
 * This is an object that represents a financial transaction
 */
export interface LeaseTransaction {
  /**
   * Check number associated with the transaction, if applicable.
   */
  CheckNumber?: string | null;

  /**
   * Date of the transaction.
   */
  Date?: string;

  /**
   * Transaction unique identifier.
   */
  Id?: number;

  /**
   * Journal associated with the transaction. The journal describes how the
   * transaction should be recorded for accounting purposes.
   */
  Journal?: TransactionsAPI.Journal | null;

  /**
   * Lease unique identifier associated with the transaction, if applicable. Null if
   * value is not set.
   */
  LeaseId?: number | null;

  /**
   * The payee's tenant unique identifier associated with the transaction, where
   * applicable.
   */
  PayeeTenantId?: number | null;

  /**
   * The payment method used for the transaction.
   */
  PaymentMethod?: string | null;

  /**
   * Sum of all `Journal.Lines.Amount` entries in the transaction.
   */
  TotalAmount?: number;

  /**
   * Type of transaction that occurred.
   */
  TransactionType?: string | null;

  /**
   * The type of transaction that occurred.
   */
  TransactionTypeEnum?:
    | 'Bill'
    | 'Check'
    | 'Charge'
    | 'Payment'
    | 'Credit'
    | 'Refund'
    | 'ApplyDeposit'
    | 'ElectronicFundsTransfer'
    | 'Other'
    | 'Deposit'
    | 'GeneralJournalEntry'
    | 'OwnerContribution'
    | 'ReversePayment'
    | 'ReverseElectronicFundsTransfer'
    | 'VendorCredit'
    | 'RentalApplicationFeePayment'
    | 'ReverseRentalApplicationFeePayment'
    | 'ReverseOwnerContribution'
    | 'VendorRefund'
    | 'UnreversedPayment'
    | 'UnreversedElectronicFundsTransfer'
    | 'UnreversedOwnerContribution'
    | 'UnreversedRentalApplicationFeePayment'
    | 'ReversedEftRefund';
}

export type TransactionListResponse = Array<LeaseTransaction>;

export interface TransactionRetrieveParams {
  leaseId: number;
}

export interface TransactionListParams {
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
   * Filters results to any lease transaction whose start date is greater than or
   * equal to the specified value.
   */
  transactiondatefrom?: string;

  /**
   * Filters results to any lease transaction whose end date is less than or equal to
   * the specified value.
   */
  transactiondateto?: string;

  /**
   * Filters results to any lease transaction whose lease transaction type matches
   * the specified status. If no type is specified, lease transactions with any type
   * will be returned.
   */
  transactiontypes?: Array<
    | 'Bill'
    | 'Check'
    | 'Charge'
    | 'Payment'
    | 'Credit'
    | 'Refund'
    | 'ApplyDeposit'
    | 'ElectronicFundsTransfer'
    | 'Other'
    | 'Deposit'
    | 'GeneralJournalEntry'
    | 'OwnerContribution'
    | 'ReversePayment'
    | 'ReverseElectronicFundsTransfer'
    | 'VendorCredit'
    | 'RentalApplicationFeePayment'
    | 'ReverseRentalApplicationFeePayment'
    | 'ReverseOwnerContribution'
    | 'VendorRefund'
    | 'UnreversedPayment'
    | 'UnreversedElectronicFundsTransfer'
    | 'UnreversedOwnerContribution'
    | 'UnreversedRentalApplicationFeePayment'
    | 'ReversedEftRefund'
  >;
}

export declare namespace Transactions {
  export {
    type LeaseTransaction as LeaseTransaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };
}
