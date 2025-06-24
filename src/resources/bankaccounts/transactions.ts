// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QuickdepositsAPI from './quickdeposits';
import * as RefundsAPI from '../associations/ownershipaccounts/refunds';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves a specific bank account transaction.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Account</span> - `View`
   */
  retrieve(
    transactionID: number,
    params: TransactionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BankAccountTransaction> {
    const { bankAccountId } = params;
    return this._client.get(path`/v1/bankaccounts/${bankAccountId}/transactions/${transactionID}`, options);
  }

  /**
   * Retrieves all bank account transactions.
   *
   *             Note: When using the `orderby` query string parameter, the only supported parameter is `EntryDate`.
   *
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   */
  list(
    bankAccountID: number,
    query: TransactionListParams,
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}/transactions`, { query, ...options });
  }
}

/**
 * Bank account transaction.
 */
export interface BankAccountTransaction {
  /**
   * The total amount of the transaction.
   */
  Amount?: number;

  /**
   * The bank account balance after this transaction was applied.
   */
  Balance?: number;

  /**
   * Check number associated with the transaction, if applicable.
   */
  CheckNumber?: string | null;

  /**
   * Date of the transaction.
   */
  EntryDate?: string;

  /**
   * Transaction unique identifier.
   */
  Id?: number;

  /**
   * Memo associated with the transaction, if applicable.
   */
  Memo?: string | null;

  /**
   * The entity that made the payment.
   */
  PaidBy?: Array<BankAccountTransaction.PaidBy> | null;

  /**
   * The entity that received the payment.
   */
  PaidTo?: Array<RefundsAPI.Payee> | null;

  /**
   * Indicates the reconciliation status of the transaction.
   */
  ReconciliationStatus?: 'Unknown' | 'UnReconciled' | 'Cleared' | 'Reconciled';

  /**
   * Type of transaction.
   */
  TransactionType?:
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

export namespace BankAccountTransaction {
  /**
   * Transaction line item.
   */
  export interface PaidBy {
    /**
     * An object that represents an accounting entity.
     */
    AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

    /**
     * Amount of the line item.
     */
    Amount?: number;
  }
}

export type TransactionListResponse = Array<BankAccountTransaction>;

export interface TransactionRetrieveParams {
  bankAccountId: number;
}

export interface TransactionListParams {
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

  /**
   * Filters results to any transaction containing journal lines for an entity
   * associated with the specified entity id value. The id must be of the type
   * specified in SelectionEntityType.
   */
  selectionentityid?: number;

  /**
   * Specifies the type of entity that SelectionEntityId refers to.
   */
  selectionentitytype?: 'Company' | 'Rental' | 'RentalOwner' | 'Association';
}

export declare namespace Transactions {
  export {
    type BankAccountTransaction as BankAccountTransaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };
}
