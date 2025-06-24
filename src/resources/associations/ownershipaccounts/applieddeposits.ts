// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Applieddeposits extends APIResource {
  /**
   * Withholds an association owner deposit by reallocating the funds from a
   * liability account to an income account to cover an expense(s).
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
   *             <span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountTransaction =
   *   await client.associations.ownershipaccounts.applieddeposits.create(
   *     0,
   *     {
   *       DepositLiabilityGLAccountId: 0,
   *       EntryDate: '2019-12-27',
   *     },
   *   );
   * ```
   */
  create(
    ownershipAccountID: number,
    body: ApplieddepositCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.OwnershipAccountTransaction> {
    return this._client.post(path`/v1/associations/ownershipaccounts/${ownershipAccountID}/applieddeposits`, {
      body,
      ...options,
    });
  }

  /**
   * Updates an ownership account deposit withholding.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
   *             <span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountTransaction =
   *   await client.associations.ownershipaccounts.applieddeposits.update(
   *     0,
   *     {
   *       ownershipAccountId: 0,
   *       DepositLiabilityGLAccountId: 0,
   *       EntryDate: '2019-12-27',
   *     },
   *   );
   * ```
   */
  update(
    depositID: number,
    params: ApplieddepositUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.OwnershipAccountTransaction> {
    const { ownershipAccountId, ...body } = params;
    return this._client.put(
      path`/v1/associations/ownershipaccounts/${ownershipAccountId}/applieddeposits/${depositID}`,
      { body, ...options },
    );
  }
}

export interface ApplieddepositCreateParams {
  /**
   * The identifier of the liability general ledger account from which to withhold
   * the funds. Note, the specified liability account must have a positive balance.
   */
  DepositLiabilityGLAccountId: number;

  /**
   * Date of the deposit withholding. The date must be formatted as YYYY-MM-DD.
   */
  EntryDate: string;

  /**
   * Line items specifying the income accounts the deposit will be applied to. The
   * total amount of the line items can not exceed the balance of the liability
   * account.
   */
  Lines?: Array<ApplieddepositCreateParams.Line> | null;

  /**
   * Memo associated with the withholding. Memo cannot exceed 65 characters.
   */
  Memo?: string | null;
}

export namespace ApplieddepositCreateParams {
  export interface Line {
    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * General Ledger Account identifier under which the line item amount will be
     * recorded. Must be an Income account.
     */
    GLAccountId: number;
  }
}

export interface ApplieddepositUpdateParams {
  /**
   * Path param:
   */
  ownershipAccountId: number;

  /**
   * Body param: The identifier of the liability general ledger account from which to
   * withhold the funds.
   */
  DepositLiabilityGLAccountId: number;

  /**
   * Body param: Date of the deposit withholding. The date must be formatted as
   * YYYY-MM-DD.
   */
  EntryDate: string;

  /**
   * Body param: Line items specifying the income accounts the deposit will be
   * applied to.
   */
  Lines?: Array<ApplieddepositUpdateParams.Line> | null;

  /**
   * Body param: Memo associated with the withholding. Memo cannot exceed 65
   * characters.
   */
  Memo?: string | null;
}

export namespace ApplieddepositUpdateParams {
  export interface Line {
    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * General Ledger Account identifier under which the line item amount will be
     * recorded. Must be an Income account.
     */
    GLAccountId: number;
  }
}

export declare namespace Applieddeposits {
  export {
    type ApplieddepositCreateParams as ApplieddepositCreateParams,
    type ApplieddepositUpdateParams as ApplieddepositUpdateParams,
  };
}
