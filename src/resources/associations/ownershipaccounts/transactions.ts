// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransactionsAPI from '../../applications/transactions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves a specific ownership account ledger transaction.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountTransaction =
   *   await client.associations.ownershipaccounts.transactions.retrieve(
   *     0,
   *     { ownershipAccountId: 0 },
   *   );
   * ```
   */
  retrieve(
    transactionID: number,
    params: TransactionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OwnershipAccountTransaction> {
    const { ownershipAccountId } = params;
    return this._client.get(
      path`/v1/associations/ownershipaccounts/${ownershipAccountId}/transactions/${transactionID}`,
      options,
    );
  }

  /**
   * Retrieves all ledger transactions for a specific ownership account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountTransactions =
   *   await client.associations.ownershipaccounts.transactions.list(
   *     0,
   *   );
   * ```
   */
  list(
    ownershipAccountID: number,
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get(path`/v1/associations/ownershipaccounts/${ownershipAccountID}/transactions`, {
      query,
      ...options,
    });
  }
}

/**
 * This is an object that represents a financial transaction
 */
export interface OwnershipAccountTransaction {
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
   * Ownership account unique identifier associated with the transaction, if
   * applicable. Null if value is not set.
   */
  OwnershipAccountId?: number | null;

  /**
   * The payee's association owner unique identifier associated with the transaction,
   * where applicable.
   */
  PayeeAssociationOwnerId?: number | null;

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

export type TransactionListResponse = Array<OwnershipAccountTransaction>;

export interface TransactionRetrieveParams {
  /**
   * The ownership account identifier.
   */
  ownershipAccountId: number;
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
    type OwnershipAccountTransaction as OwnershipAccountTransaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };
}
