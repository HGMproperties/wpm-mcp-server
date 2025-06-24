// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AnnouncementsAPI from './communications/announcements';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Budgets extends APIResource {
  /**
   * Creates a budget.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View` `Edit`
   */
  create(body: BudgetCreateParams, options?: RequestOptions): APIPromise<BudgetMessage> {
    return this._client.post('/v1/budgets', { body, ...options });
  }

  /**
   * Retrieves a budget.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View`
   */
  retrieve(budgetID: number, options?: RequestOptions): APIPromise<BudgetMessage> {
    return this._client.get(path`/v1/budgets/${budgetID}`, options);
  }

  /**
   * Updates a budget.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View` `Edit`
   */
  update(budgetID: number, body: BudgetUpdateParams, options?: RequestOptions): APIPromise<BudgetMessage> {
    return this._client.put(path`/v1/budgets/${budgetID}`, { body, ...options });
  }

  /**
   * Retrieves all budgets.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View`
   */
  list(
    query: BudgetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BudgetListResponse> {
    return this._client.get('/v1/budgets', { query, ...options });
  }
}

export interface BudgetDetailsSaveMessage {
  /**
   * The general ledger account identifier to record the budget details under.
   */
  GLAccountId: number;

  /**
   * The budget detailed as monthly amounts
   */
  MonthlyAmounts: BudgetDetailsSaveMessage.MonthlyAmounts;
}

export namespace BudgetDetailsSaveMessage {
  /**
   * The budget detailed as monthly amounts
   */
  export interface MonthlyAmounts {
    /**
     * The amount for April.
     */
    April: number;

    /**
     * The amount for August.
     */
    August: number;

    /**
     * The amount for December.
     */
    December: number;

    /**
     * The amount for February.
     */
    February: number;

    /**
     * The amount for January.
     */
    January: number;

    /**
     * The amount for July.
     */
    July: number;

    /**
     * The amount for June.
     */
    June: number;

    /**
     * The amount for March.
     */
    March: number;

    /**
     * The amount for May.
     */
    May: number;

    /**
     * The amount for November.
     */
    November: number;

    /**
     * The amount for October.
     */
    October: number;

    /**
     * The amount for September.
     */
    September: number;
  }
}

export interface BudgetMessage {
  /**
   * The details of the budget.
   */
  Details?: Array<BudgetMessage.Detail> | null;

  /**
   * End date of the budget.
   */
  EndDate?: string;

  /**
   * Budget unique identifier.
   */
  Id?: number;

  /**
   * Name of the budget.
   */
  Name?: string | null;

  /**
   * Property information.
   */
  Property?: AnnouncementsAPI.PropertyMessage | null;

  /**
   * Start date of the budget.
   */
  StartDate?: string;
}

export namespace BudgetMessage {
  export interface Detail {
    /**
     * The general ledger account unique identifier the budget is related to.
     */
    GLAccountId?: number;

    /**
     * Describes the subtype of the general ledger account.
     */
    GLAccountSubType?:
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
     * The monthly amounts in the budget.
     */
    MonthlyAmounts?: Detail.MonthlyAmounts | null;

    /**
     * Sum of all monthly amounts in the budget.
     */
    TotalAmount?: number;
  }

  export namespace Detail {
    /**
     * The monthly amounts in the budget.
     */
    export interface MonthlyAmounts {
      /**
       * The amount for April.
       */
      April?: number;

      /**
       * The amount for August.
       */
      August?: number;

      /**
       * The amount for December.
       */
      December?: number;

      /**
       * The amount for February.
       */
      February?: number;

      /**
       * The amount for January.
       */
      January?: number;

      /**
       * The amount for July.
       */
      July?: number;

      /**
       * The amount for June.
       */
      June?: number;

      /**
       * The amount for March.
       */
      March?: number;

      /**
       * The amount for May.
       */
      May?: number;

      /**
       * The amount for November.
       */
      November?: number;

      /**
       * The amount for October.
       */
      October?: number;

      /**
       * The amount for September.
       */
      September?: number;
    }
  }
}

export type BudgetListResponse = Array<BudgetMessage>;

export interface BudgetCreateParams {
  /**
   * The financial details associated with the budget.
   */
  Details: Array<BudgetDetailsSaveMessage>;

  /**
   * The fiscal year for the budget. The value must be formatted as YYYY.
   */
  FiscalYear: number;

  /**
   * Name of the budget.
   */
  Name: string;

  /**
   * Property unique identifier that the budget belongs to.
   */
  PropertyId: number;

  /**
   * The month the fiscal year starts for the budget.
   */
  StartMonth:
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';
}

export interface BudgetUpdateParams {
  /**
   * The financial details associated with the budget.
   */
  Details: Array<BudgetDetailsSaveMessage>;

  /**
   * Name of the budget.
   */
  Name: string;
}

export interface BudgetListParams {
  /**
   * Filters results to any budgets that end in the given fiscal year. FiscalYear
   * must be a positive number.
   */
  fiscalyear?: number;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to any budgets whose name _contains_ the specified value.
   */
  name?: string;

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
   * Filters results to any budget associated to any of the specified set of property
   * ids.
   */
  propertyids?: Array<number>;
}

export declare namespace Budgets {
  export {
    type BudgetDetailsSaveMessage as BudgetDetailsSaveMessage,
    type BudgetMessage as BudgetMessage,
    type BudgetListResponse as BudgetListResponse,
    type BudgetCreateParams as BudgetCreateParams,
    type BudgetUpdateParams as BudgetUpdateParams,
    type BudgetListParams as BudgetListParams,
  };
}
