// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GlaccountsAPI from './glaccounts';
import * as QuickdepositsAPI from './bankaccounts/quickdeposits';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Glaccounts extends APIResource {
  /**
   * Creates a general ledger account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View` `Edit`
   */
  create(body: GlaccountCreateParams, options?: RequestOptions): APIPromise<GlAccountMessage> {
    return this._client.post('/v1/glaccounts', { body, ...options });
  }

  /**
   * Retrieves a specific general ledger account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`
   */
  retrieve(glAccountID: number, options?: RequestOptions): APIPromise<GlAccountMessage> {
    return this._client.get(path`/v1/glaccounts/${glAccountID}`, options);
  }

  /**
   * Updates a general ledger account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View` `Edit`
   */
  update(
    glAccountID: number,
    body: GlaccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GlAccountMessage> {
    return this._client.put(path`/v1/glaccounts/${glAccountID}`, { body, ...options });
  }

  /**
   * Retrieves a list of general ledger accounts.
   *
   * General ledger accounts are used to categorize transactions for accounting
   * purposes.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`
   */
  list(
    query: GlaccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlaccountListResponse> {
    return this._client.get('/v1/glaccounts', { query, ...options });
  }

  /**
   * Retrieves all general ledger account balances as of a given date. The response
   * includes the total balance of each account along with the subtotals for any
   * accounting entities (company, associations or rental properties) that have
   * transactions assigned to the account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`
   */
  listBalances(
    query: GlaccountListBalancesParams,
    options?: RequestOptions,
  ): APIPromise<GlaccountListBalancesResponse> {
    return this._client.get('/v1/glaccounts/balances', { query, ...options });
  }
}

/**
 * A message that represents a general ledger account.
 */
export interface GlAccountMessage {
  /**
   * General ledger account number.
   */
  AccountNumber?: string | null;

  /**
   * Describes the cash flow classification for the general ledger account.
   */
  CashFlowClassification?: 'OperatingActivities' | 'InvestingActivities' | 'FinancingActivities' | null;

  /**
   * Indicates the original name of the general ledger account if it is a default
   * account.
   */
  DefaultAccountName?: string | null;

  /**
   * Description of the general ledger account.
   */
  Description?: string | null;

  /**
   * Indicates whether transactions associated with the account should be excluded
   * from cash balances.
   */
  ExcludeFromCashBalances?: boolean;

  /**
   * General ledger account unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the account is active.
   */
  IsActive?: boolean;

  /**
   * Indicates whether the account is a bank account.
   */
  IsBankAccount?: boolean;

  /**
   * Indicates whether the account is a contra account.
   */
  IsContraAccount?: boolean;

  /**
   * Indicates if the general ledger account is a default for auto populating fields.
   */
  IsDefaultGLAccount?: boolean;

  /**
   * Name of the general ledger account.
   */
  Name?: string | null;

  /**
   * Unique identifier of the parent general ledger account, if applicable.
   */
  ParentGLAccountId?: number | null;

  /**
   * Children general ledger accounts. The relationship only goes one level deep.
   */
  SubAccounts?: Array<GlAccountMessage> | null;

  /**
   * Describes the subtype of the general ledger account.
   */
  SubType?:
    | 'CurrentAsset'
    | 'FixedAsset'
    | 'CurrentLiability'
    | 'LongTermLiability'
    | 'Equity'
    | 'Income'
    | 'NonOperatingIncome'
    | 'OperatingExpenses'
    | 'NonOperatingExpenses';

  /**
   * Describes the type of general ledger account.
   */
  Type?: 'Asset' | 'Liability' | 'Equity' | 'Income' | 'Expense';
}

export type GlaccountListResponse = Array<GlAccountMessage>;

export type GlaccountListBalancesResponse =
  Array<GlaccountListBalancesResponse.GlaccountListBalancesResponseItem>;

export namespace GlaccountListBalancesResponse {
  /**
   * Represents the balance amount of a general ledger account.
   */
  export interface GlaccountListBalancesResponseItem {
    /**
     * A collection of accounting entity balances that make up the `TotalBalance`.
     */
    AccountingEntityBalances?: Array<GlaccountListBalancesResponseItem.AccountingEntityBalance> | null;

    /**
     * A message that represents a general ledger account.
     */
    GLAccount?: GlaccountsAPI.GlAccountMessage | null;

    /**
     * The sum of transactions across all accounting entities (rental properties,
     * association properties and your company) that are associated with the given
     * general ledger account.
     */
    TotalBalance?: number;
  }

  export namespace GlaccountListBalancesResponseItem {
    /**
     * An object that represents an accounting entity's contribution to the general
     * ledger account total balance.
     */
    export interface AccountingEntityBalance {
      /**
       * An object that represents an accounting entity.
       */
      AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

      /**
       * The sum of transactions associated with the general ledger account for the given
       * accounting entity.
       */
      Balance?: number;
    }
  }
}

export interface GlaccountCreateParams {
  /**
   * General ledger account number. The account number cannot exceed 12 characters
   * and must be unique across all general ledger accounts.
   */
  AccountNumber: string;

  /**
   * Name of the general ledger account. The name cannot exceed 50 characters and
   * must be unique across all general ledger accounts.
   */
  Name: string;

  /**
   * Describes the subtype of the general ledger account.
   */
  SubType:
    | 'CurrentAsset'
    | 'FixedAsset'
    | 'CurrentLiability'
    | 'LongTermLiability'
    | 'Equity'
    | 'Income'
    | 'NonOperatingIncome'
    | 'OperatingExpenses'
    | 'NonOperatingExpenses';

  /**
   * Describes the cash flow classification for the general ledger account. Must be
   * null if `IsCashAsset` field is set to true.
   */
  CashFlowClassification?: 'OperatingActivities' | 'InvestingActivities' | 'FinancingActivities' | null;

  /**
   * Description of the general ledger account. The description cannot exceed 250
   * characters.
   */
  Description?: string | null;

  /**
   * Indicates if an account is a Cash Asset. Can only have a value if SubType is
   * `CurrentAsset`
   */
  IsCashAsset?: boolean | null;

  /**
   * Indicates whether the account is a contra account. Must be null if `IsCashAsset`
   * field is set to true.
   */
  IsContraAccount?: boolean | null;

  /**
   * Unique identifier of the parent general ledger account. Indicates if this is a
   * sub general ledger account.
   */
  ParentGLAccountId?: number | null;
}

export interface GlaccountUpdateParams {
  /**
   * Name of the general ledger account. The name cannot exceed 50 characters and
   * must be unique across all general ledger accounts.
   */
  Name: string;

  /**
   * Describes the subtype of the general ledger account.
   */
  SubType:
    | 'CurrentAsset'
    | 'FixedAsset'
    | 'CurrentLiability'
    | 'LongTermLiability'
    | 'Equity'
    | 'Income'
    | 'NonOperatingIncome'
    | 'OperatingExpenses'
    | 'NonOperatingExpenses';

  /**
   * General ledger account number. The account number cannot exceed 12 characters
   * and must be unique across all general ledger accounts.
   */
  AccountNumber?: string | null;

  /**
   * Describes the cash flow classification for the general ledger account. Must be
   * null if `IsCashAsset` field is set to true.
   */
  CashFlowClassification?: 'OperatingActivities' | 'InvestingActivities' | 'FinancingActivities' | null;

  /**
   * Description of the general ledger account. The description cannot exceed 250
   * characters.
   */
  Description?: string | null;

  /**
   * Indicates if an account is a Cash Asset. Can only have a value if SubType is
   * `CurrentAsset`
   */
  IsCashAsset?: boolean | null;

  /**
   * Indicates whether the account is a contra account. Must be null if `IsCashAsset`
   * field is set to true.
   */
  IsContraAccount?: boolean | null;

  /**
   * Unique identifier of the parent general ledger account. Indicates if this is a
   * sub general ledger account.
   */
  ParentGLAccountId?: number | null;
}

export interface GlaccountListParams {
  /**
   * Filters results by the specified general ledger account types.
   */
  accounttypes?: Array<'Asset' | 'Liability' | 'Equity' | 'Income' | 'Expense'>;

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

export interface GlaccountListBalancesParams {
  /**
   * The methodology in which revenues and expenses are recognized when calculating
   * the balances. Specifying `Cash` calculates balances based on when money changes
   * hands. Specifying `Accrual` calculates balances based on the period in which the
   * transaction originally happened.
   */
  accountingbasis: 'Accrual' | 'Cash';

  /**
   * Indicates the end date through which the balances will be calculated. This will
   * include all transactions in your account until this specified date.
   */
  asofdate: string;

  /**
   * Indicates whether to aggregate the AccountingEntityBalances by unit identifier
   * in the response. If the value is set to true the AccountingEntityBalances will
   * be aggregated by AccountingEntity.Unit.Id otherwise the response will have the
   * balances aggregated by AccountingEntity.Id.
   */
  aggregatebalancesbyunitid?: boolean;

  /**
   * Filters transactions used in calculating the general ledger account balances to
   * only those containing journal lines for with the specified entity id value. The
   * entity id specified must be of the type specified in `EntityType`.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that `EntityId` field refers to.
   */
  entitytype?: 'Association' | 'Rental' | 'RentalOwner';

  /**
   * Filters results to the specified set of general ledger account identifiers.
   */
  glaccountids?: Array<number>;

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

export declare namespace Glaccounts {
  export {
    type GlAccountMessage as GlAccountMessage,
    type GlaccountListResponse as GlaccountListResponse,
    type GlaccountListBalancesResponse as GlaccountListBalancesResponse,
    type GlaccountCreateParams as GlaccountCreateParams,
    type GlaccountUpdateParams as GlaccountUpdateParams,
    type GlaccountListParams as GlaccountListParams,
    type GlaccountListBalancesParams as GlaccountListBalancesParams,
  };
}
