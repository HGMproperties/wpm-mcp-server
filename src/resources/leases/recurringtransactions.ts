// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RecurringcreditsAPI from '../associations/ownershipaccounts/recurringcredits';
import * as OwnershipaccountsRecurringtransactionsAPI from '../associations/ownershipaccounts/recurringtransactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Recurringtransactions extends APIResource {
  /**
   * Retrieves all recurring transactions for a given lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   *
   * @example
   * ```ts
   * const recurringTransactions =
   *   await client.leases.recurringtransactions.list(0);
   * ```
   */
  list(
    leaseID: number,
    query: RecurringtransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecurringtransactionListResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/recurringtransactions`, { query, ...options });
  }

  /**
   * Retrieves all recurring transactions for all leases.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   *
   * @example
   * ```ts
   * const response =
   *   await client.leases.recurringtransactions.listAll();
   * ```
   */
  listAll(
    query: RecurringtransactionListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecurringtransactionListAllResponse> {
    return this._client.get('/v1/leases/recurringtransactions', { query, ...options });
  }
}

export type RecurringtransactionListResponse =
  Array<OwnershipaccountsRecurringtransactionsAPI.RecurringTransaction>;

export type RecurringtransactionListAllResponse =
  Array<RecurringtransactionListAllResponse.RecurringtransactionListAllResponseItem>;

export namespace RecurringtransactionListAllResponse {
  export interface RecurringtransactionListAllResponseItem {
    /**
     * Total amount of the recurring transaction.
     */
    Amount?: number;

    /**
     * The date the transaction was created.
     */
    CreatedDateTime?: string;

    /**
     * Specifies the period of time/occurrences the recurring transaction will be
     * processed. Note, if the `Frequency` field is set to `OneTime` this field should
     * be set to `NULL` as any submitted value will be ignored.
     */
    Duration?: 'Unspecified' | 'UntilEndOfTerm' | 'SpecificNumber' | 'SpecificDate';

    /**
     * The date the first occurrence of this transaction was processed.
     */
    FirstOccurrenceDate?: string | null;

    /**
     * Indicates the frequency at which the recurring transaction is processed.
     */
    Frequency?:
      | 'Monthly'
      | 'Weekly'
      | 'Every2Weeks'
      | 'Quarterly'
      | 'Yearly'
      | 'Every2Months'
      | 'Daily'
      | 'Every6Months'
      | 'OneTime';

    /**
     * The unique identifier for the recurring transaction schedule.
     */
    Id?: number;

    /**
     * Indicates if the recurring transaction schedule has expired.
     */
    IsExpired?: boolean;

    /**
     * The date the transaction was last updated.
     */
    LastUpdatedDateTime?: string;

    /**
     * The unique identifier for the corresponding Lease.
     */
    LeaseId?: number;

    /**
     * Line items describing how the transaction is to be allocated when it is
     * processed.
     */
    Lines?: Array<RecurringcreditsAPI.RecurringTransactionLine> | null;

    /**
     * Memo associated with the recurring transaction.
     */
    Memo?: string | null;

    /**
     * The next date the scheduled transaction will be processed.
     */
    NextOccurrenceDate?: string;

    /**
     * Offsetting general ledger account identifier. The offsetting general ledger
     * account acts as the expense account. Note, this field is only applicable for
     * `Credit` transaction types.
     */
    OffsettingGLAccountId?: number | null;

    /**
     * The number of days ahead of the transaction date the transaction will post on
     * the lease ledger. This setting is used to add the transaction to the ledger
     * ahead of it's due date for visibility. For example, if the `FirstOccurrenceDate`
     * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
     * ledger on 8/5/2022, but will have transaction date of 8/10/2022.
     */
    PostDaysInAdvance?: number;

    /**
     * The unique identifier of the scheduled Rent entity. This field is only
     * applicable for `Charge` transaction types.
     */
    RentId?: number | null;

    /**
     * Indicates the type of transaction to be applied to the ledger.
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

export interface RecurringtransactionListParams {
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

export interface RecurringtransactionListAllParams {
  /**
   * Filters results to recurring transactions created after the specified value. The
   * value must be formatted as YYYY-MM-DD HH:MM:SS. The maximum date range is 365
   * days.
   */
  createddatetimefrom?: string;

  /**
   * Filters results to recurring transactions created before the specified value.
   * The value must be formatted as YYYY-MM-DD HH:MM:SS. The maximum date range is
   * 365 days.
   */
  createddatetimeto?: string;

  /**
   * Filters results to recurring transactions last updated after the specified
   * value. The value must be formatted as YYYY-MM-DD HH:MM:SS. The maximum date
   * range is 365 days.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to recurring transactions last updated before the specified
   * value. The value must be formatted as YYYY-MM-DD HH:MM:SS. The maximum date
   * range is 365 days.
   */
  lastupdatedto?: string;

  /**
   * Filters results to only include records associated with the provided lease Ids.
   */
  leaseids?: Array<number>;

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

export declare namespace Recurringtransactions {
  export {
    type RecurringtransactionListResponse as RecurringtransactionListResponse,
    type RecurringtransactionListAllResponse as RecurringtransactionListAllResponse,
    type RecurringtransactionListParams as RecurringtransactionListParams,
    type RecurringtransactionListAllParams as RecurringtransactionListAllParams,
  };
}
