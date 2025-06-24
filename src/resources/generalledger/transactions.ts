// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JournalentriesAPI from './journalentries';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves a specific general ledger transaction.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`
   */
  retrieve(
    transactionID: number,
    options?: RequestOptions,
  ): APIPromise<JournalentriesAPI.GeneralLedgerTransaction> {
    return this._client.get(path`/v1/generalledger/transactions/${transactionID}`, options);
  }

  /**
   * Retrieves a list of general ledger transactions.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`
   */
  list(query: TransactionListParams, options?: RequestOptions): APIPromise<TransactionListResponse> {
    return this._client.get('/v1/generalledger/transactions', { query, ...options });
  }
}

export type TransactionListResponse = Array<JournalentriesAPI.GeneralLedgerTransaction>;

export interface TransactionListParams {
  /**
   * Filters results to any transaction whose date is less than or equal to the
   * specified value.
   */
  enddate: string;

  /**
   * Filters results to transactions whose general ledger account belongs to the
   * specified set of general ledger account ids.
   */
  glaccountids: Array<number>;

  /**
   * Filters results to any transaction whose date is greater than or equal to the
   * specified value.
   */
  startdate: string;

  /**
   * Filters results to any transactions that were updated on or after the specified
   * date. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any transactions that were updated on or before the specified
   * date. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

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
  selectionentitytype?: 'Rental' | 'RentalOwner' | 'Association';

  /**
   * Filters results to any transaction containing journal lines for the unitId
   * specified. Only applicable when the SelectionEntityType is Rentals or
   * Associations.
   */
  selectionentityunitid?: number;
}

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };
}
