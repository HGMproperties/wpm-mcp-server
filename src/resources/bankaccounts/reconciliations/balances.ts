// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Balances extends APIResource {
  /**
   * Updates a bank account reconciliation's balance. Reconciliation balances can
   * only be updated for bank accounts that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`
   */
  create(
    reconciliationID: number,
    params: BalanceCreateParams,
    options?: RequestOptions,
  ): APIPromise<ReconciliationBalance> {
    const { bankAccountId, ...body } = params;
    return this._client.put(
      path`/v1/bankaccounts/${bankAccountId}/reconciliations/${reconciliationID}/balances`,
      { body, ...options },
    );
  }

  /**
   * Retrieves a bank account reconciliation's balance. Reconciliation balances can
   * only be retrieved for bank accounts that are not linked externally.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
   */
  list(
    reconciliationID: number,
    params: BalanceListParams,
    options?: RequestOptions,
  ): APIPromise<ReconciliationBalance> {
    const { bankAccountId } = params;
    return this._client.get(
      path`/v1/bankaccounts/${bankAccountId}/reconciliations/${reconciliationID}/balances`,
      options,
    );
  }
}

export interface ReconciliationBalance {
  /**
   * Cleared balance of the reconciliation.
   */
  ClearedBalance?: ReconciliationBalance.ClearedBalance | null;

  /**
   * Difference between beginning balance and ending balance of the reconciliation.
   */
  Difference?: number;

  /**
   * Statement balance of the reconciliation.
   */
  StatementBalance?: ReconciliationBalance.StatementBalance | null;
}

export namespace ReconciliationBalance {
  /**
   * Cleared balance of the reconciliation.
   */
  export interface ClearedBalance {
    /**
     * Beginning balance of the reconciliation cleared balance.
     */
    BeginningBalance?: number;

    /**
     * Ending balance of the reconciliation cleared balance.
     */
    EndingBalance?: number;

    /**
     * Total amount of checks and withdrawals of the reconciliation cleared balance.
     */
    TotalChecksAndWithdrawals?: number;

    /**
     * Total amount of deposits and additions of the reconciliation cleared balance.
     */
    TotalDepositsAndAdditions?: number;
  }

  /**
   * Statement balance of the reconciliation.
   */
  export interface StatementBalance {
    /**
     * Beginning balance of the reconciliation statement balance.
     */
    BeginningBalance?: number;

    /**
     * Ending balance of the reconciliation statement balance.
     */
    EndingBalance?: number;

    /**
     * Total amount of checks and withdrawals of the reconciliation statement balance.
     */
    TotalChecksAndWithdrawals?: number;

    /**
     * Total amount of deposits and additions of the reconciliation statement balance.
     */
    TotalDepositsAndAdditions?: number;
  }
}

export interface BalanceCreateParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: Ending balance of the reconciliation statement balance.
   */
  EndingBalance: number;

  /**
   * Body param: Total amount of checks and withdrawals of the reconciliation
   * statement balance.
   */
  TotalChecksAndWithdrawals: number;

  /**
   * Body param: Total amount of deposits and additions of the reconciliation
   * statement balance.
   */
  TotalDepositsAndAdditions: number;
}

export interface BalanceListParams {
  bankAccountId: number;
}

export declare namespace Balances {
  export {
    type ReconciliationBalance as ReconciliationBalance,
    type BalanceCreateParams as BalanceCreateParams,
    type BalanceListParams as BalanceListParams,
  };
}
