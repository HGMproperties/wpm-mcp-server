// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BalancesAPI from './balances';
import { BalanceCreateParams, BalanceListParams, Balances, ReconciliationBalance } from './balances';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Reconciliations extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);

  /**
   * Creates a reconciliation. Reconciliations can only be created for bank accounts
   * that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`
   */
  create(
    bankAccountID: number,
    body: ReconciliationCreateParams,
    options?: RequestOptions,
  ): APIPromise<Reconciliation> {
    return this._client.post(path`/v1/bankaccounts/${bankAccountID}/reconciliations`, { body, ...options });
  }

  /**
   * Retrieves a bank account reconciliation. Reconciliations can only be retrieved
   * for bank accounts that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   */
  retrieve(
    reconciliationID: number,
    params: ReconciliationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Reconciliation> {
    const { bankAccountId } = params;
    return this._client.get(
      path`/v1/bankaccounts/${bankAccountId}/reconciliations/${reconciliationID}`,
      options,
    );
  }

  /**
   * Updates a reconciliation. Reconciliations can only be updated for bank accounts
   * that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`
   */
  update(
    reconciliationID: number,
    params: ReconciliationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Reconciliation> {
    const { bankAccountId, ...body } = params;
    return this._client.put(path`/v1/bankaccounts/${bankAccountId}/reconciliations/${reconciliationID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all bank account reconciliations. Reconciliations can only be
   * retrieved for bank accounts that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   */
  list(
    bankAccountID: number,
    query: ReconciliationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReconciliationListResponse> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}/reconciliations`, { query, ...options });
  }

  /**
   * Clears transactions for a reconciliation. Reconciliation transactions can only
   * be cleared for bank accounts that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`
   */
  clearTransactions(
    reconciliationID: number,
    params: ReconciliationClearTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { bankAccountId, ...body } = params;
    return this._client.post(
      path`/v1/bankaccounts/${bankAccountId}/reconciliations/${reconciliationID}/cleartransactionsrequest`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Finalizes a manual reconciliation. Reconciliations can only be finalized for
   * bank accounts that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`
   */
  finalize(
    reconciliationID: number,
    params: ReconciliationFinalizeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { bankAccountId } = params;
    return this._client.post(
      path`/v1/bankaccounts/${bankAccountId}/reconciliations/${reconciliationID}/finalizerequest`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Retrieves all transactions, both cleared and uncleared, up to the Statement
   * Ending Date of the related reconciliation. This is true for pending and
   * completed reconciliations. Transactions can only be retrieved for bank accounts
   * that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   */
  listTransactions(
    reconciliationID: number,
    params: ReconciliationListTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<ReconciliationListTransactionsResponse> {
    const { bankAccountId, ...query } = params;
    return this._client.get(
      path`/v1/bankaccounts/${bankAccountId}/reconciliations/${reconciliationID}/transactions`,
      { query, ...options },
    );
  }

  /**
   * Un-clears transactions for a reconciliation. Reconciliation transactions can
   * only be un-cleared for bank accounts that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`
   */
  unclearTransactions(
    reconciliationID: number,
    params: ReconciliationUnclearTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { bankAccountId, ...body } = params;
    return this._client.post(
      path`/v1/bankaccounts/${bankAccountId}/reconciliations/${reconciliationID}/uncleartransactionsrequest`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface Reconciliation {
  /**
   * Reconciliation unique identifier.
   */
  Id?: number;

  /**
   * Indicates if reconciliation is completed.
   */
  IsFinished?: boolean;

  /**
   * Date the reconciliation statement ended.
   */
  StatementEndingDate?: string | null;
}

export type ReconciliationListResponse = Array<Reconciliation>;

export type ReconciliationListTransactionsResponse =
  Array<ReconciliationListTransactionsResponse.ReconciliationListTransactionsResponseItem>;

export namespace ReconciliationListTransactionsResponse {
  export interface ReconciliationListTransactionsResponseItem {
    /**
     * Check number associated with the transaction, if applicable.
     */
    CheckNumber?: string | null;

    /**
     * Date the reconciliation transaction entered.
     */
    EntryDate?: string;

    /**
     * Reconciliation transaction unique identifier.
     */
    Id?: number;

    /**
     * Memo associated with the transaction, if applicable.
     */
    Memo?: string | null;

    /**
     * The payee's user unique identifier.
     */
    PayeeUserId?: number | null;

    /**
     * The payment method used for the transaction.
     */
    PaymentMethod?:
      | 'None'
      | 'Check'
      | 'Cash'
      | 'MoneyOrder'
      | 'CashierCheck'
      | 'DirectDeposit'
      | 'CreditCard'
      | 'ElectronicPayment'
      | 'RetailCash';

    /**
     * Status of the reconciliation transaction.
     */
    ReconciliationStatus?: 'Unknown' | 'UnReconciled' | 'Cleared' | 'Reconciled';

    /**
     * Total amount of the reconciliation transaction.
     */
    TotalAmount?: number;

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
}

export interface ReconciliationCreateParams {
  /**
   * Ending balance of the pending reconciliation.
   */
  EndingBalance: number;

  /**
   * End date for the reconciliation statement period. The date must be formatted as
   * YYYY-MM-DD.
   */
  StatementEndingDate: string;

  /**
   * Sum of all checks and withdrawals for the reconciliation.
   */
  TotalChecksAndWithdrawals?: number | null;

  /**
   * Sum of all deposits and additions for the reconciliation.
   */
  TotalDepositsAndAdditions?: number | null;
}

export interface ReconciliationRetrieveParams {
  bankAccountId: number;
}

export interface ReconciliationUpdateParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: Date the reconciliation statement ended. The value must be formatted
   * as YYYY-MM-DD.
   */
  StatementEndingDate: string;
}

export interface ReconciliationListParams {
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

export interface ReconciliationClearTransactionsParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: The transaction identifiers to clear for the reconciliation
   */
  TransactionIds: Array<number>;
}

export interface ReconciliationFinalizeParams {
  bankAccountId: number;
}

export interface ReconciliationListTransactionsParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Query param: `limit` indicates the maximum number of results to be returned in
   * the response. `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Query param: `offset` indicates the position of the first record to return. The
   * `offset` is zero-based and the default is 0.
   */
  offset?: number;

  /**
   * Query param: `orderby` indicates the field(s) and direction to sort the results
   * in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk
   * Request Options</a> for more information.
   */
  orderby?: string;
}

export interface ReconciliationUnclearTransactionsParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: The transaction identifiers to un-clear for the reconciliation
   */
  TransactionIds: Array<number>;
}

Reconciliations.Balances = Balances;

export declare namespace Reconciliations {
  export {
    type Reconciliation as Reconciliation,
    type ReconciliationListResponse as ReconciliationListResponse,
    type ReconciliationListTransactionsResponse as ReconciliationListTransactionsResponse,
    type ReconciliationCreateParams as ReconciliationCreateParams,
    type ReconciliationRetrieveParams as ReconciliationRetrieveParams,
    type ReconciliationUpdateParams as ReconciliationUpdateParams,
    type ReconciliationListParams as ReconciliationListParams,
    type ReconciliationClearTransactionsParams as ReconciliationClearTransactionsParams,
    type ReconciliationFinalizeParams as ReconciliationFinalizeParams,
    type ReconciliationListTransactionsParams as ReconciliationListTransactionsParams,
    type ReconciliationUnclearTransactionsParams as ReconciliationUnclearTransactionsParams,
  };

  export {
    Balances as Balances,
    type ReconciliationBalance as ReconciliationBalance,
    type BalanceCreateParams as BalanceCreateParams,
    type BalanceListParams as BalanceListParams,
  };
}
