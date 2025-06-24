// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QuickdepositsAPI from '../bankaccounts/quickdeposits';
import * as JournalentriesAPI from './journalentries';
import {
  GeneralLedgerTransaction,
  JournalEntryLineSave,
  Journalentries,
  JournalentryCreateParams,
  JournalentryUpdateParams,
  UnitAgreement,
} from './journalentries';
import * as TransactionsAPI from './transactions';
import { TransactionListParams, TransactionListResponse, Transactions } from './transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Generalledger extends APIResource {
  journalentries: JournalentriesAPI.Journalentries = new JournalentriesAPI.Journalentries(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);

  /**
   * Retrieves all general ledger entries
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`
   */
  list(query: GeneralledgerListParams, options?: RequestOptions): APIPromise<GeneralledgerListResponse> {
    return this._client.get('/v1/generalledger', { query, ...options });
  }
}

export type GeneralledgerListResponse = Array<GeneralledgerListResponse.GeneralledgerListResponseItem>;

export namespace GeneralledgerListResponse {
  export interface GeneralledgerListResponseItem {
    /**
     * The general ledger account balance based on the date range requested.
     */
    BeginningBalance?: number;

    /**
     * Entries applied to the general ledger account.
     */
    Entries?: Array<GeneralledgerListResponseItem.Entry> | null;

    /**
     * Unique identifier of the general ledger account associated with the entries.
     */
    GLAccountId?: number;

    /**
     * Name of the general ledger account associated with the entries.
     */
    GLAccountName?: string | null;

    /**
     * The sum of the entry amounts that were recorded under this general ledger
     * account within the date range requested.
     */
    TotalAmount?: number;
  }

  export namespace GeneralledgerListResponseItem {
    export interface Entry {
      /**
       * An object that represents an accounting entity.
       */
      AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

      /**
       * Entry amount.
       */
      Amount?: number;

      /**
       * The general ledger account balance after this entry was recorded.
       */
      Balance?: number;

      /**
       * Date of the transaction.
       */
      Date?: string;

      /**
       * Transaction description.
       */
      Description?: string | null;

      /**
       * The unique identifier of the transaction associated with the entry.
       */
      Id?: number;

      /**
       * Indicates the type of transaction that occurred.
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
  }
}

export interface GeneralledgerListParams {
  /**
   * The methodology in which revenues and expenses are recognized when calculating
   * the balances. Specifying `Cash` calculates balances based on when money changes
   * hands. Specifying `Accrual` calculates balances based on the period in which the
   * transaction originally happened.
   */
  accountingbasis: 'Accrual' | 'Cash';

  /**
   * Filters results to any entries whose end date is less than or equal to the
   * specified value.
   */
  enddate: string;

  /**
   * Filters results to entries whose general ledger account belongs to the specified
   * set of general ledger account ids.
   */
  glaccountids: Array<number>;

  /**
   * Filters results to any entries whose start date is greater than or equal to the
   * specified value.
   */
  startdate: string;

  /**
   * Filters results to any general ledger entry containing line items associated
   * with the specified entity identifier. This filter is used in conjunction with
   * the `EntityType` field which must be set to the type of entity this identifier
   * references.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that `EntityId` field refers to.
   */
  entitytype?: 'Company' | 'Rental' | 'RentalOwner' | 'Association';

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

Generalledger.Journalentries = Journalentries;
Generalledger.Transactions = Transactions;

export declare namespace Generalledger {
  export {
    type GeneralledgerListResponse as GeneralledgerListResponse,
    type GeneralledgerListParams as GeneralledgerListParams,
  };

  export {
    Journalentries as Journalentries,
    type GeneralLedgerTransaction as GeneralLedgerTransaction,
    type JournalEntryLineSave as JournalEntryLineSave,
    type UnitAgreement as UnitAgreement,
    type JournalentryCreateParams as JournalentryCreateParams,
    type JournalentryUpdateParams as JournalentryUpdateParams,
  };

  export {
    Transactions as Transactions,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };
}
