// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GlaccountsAPI from '../glaccounts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves a specific application transaction.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`
   */
  retrieve(
    transactionID: number,
    params: TransactionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationTransaction> {
    const { applicationId } = params;
    return this._client.get(path`/v1/applications/${applicationId}/transactions/${transactionID}`, options);
  }

  /**
   * Retrieves all the transactions for a specific application.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   */
  list(
    applicationID: number,
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get(path`/v1/applications/${applicationID}/transactions`, { query, ...options });
  }
}

/**
 * This is an object that represents a financial transaction tied to an application
 */
export interface ApplicationTransaction {
  /**
   * Application unique identifier associated with the transaction, if applicable.
   * Null if value is not set.
   */
  ApplicationId?: number | null;

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
  Journal?: Journal | null;

  /**
   * The payee's applicant unique identifier associated with the transaction, where
   * applicable.
   */
  PayeeApplicantId?: number | null;

  /**
   * The payment method used for the transaction.
   */
  PaymentMethod?: string | null;

  /**
   * Sum of all `Journal.Lines.Amount` entries in the transaction.
   */
  TotalAmount?: number;

  /**
   * The type of transaction that occurred.
   */
  TransactionTypeEnum?: 'Unknown' | 'Charge' | 'Payment' | 'Refund' | 'ReversePayment' | 'UnreversedPayment';
}

export interface Journal {
  /**
   * A collection of line items associated with the journal.
   */
  Lines?: Array<Journal.Line> | null;

  /**
   * Memo associated with the journal.
   */
  Memo?: string | null;
}

export namespace Journal {
  /**
   * This is an object that represents a line item for a journal entry.
   */
  export interface Line {
    /**
     * Amount of the line item.
     */
    Amount?: number;

    /**
     * A message that represents a general ledger account.
     */
    GLAccount?: GlaccountsAPI.GlAccountMessage | null;

    /**
     * Indicates whether the line item is a cash posting.
     */
    IsCashPosting?: boolean;

    /**
     * Memo for the line item.
     */
    Memo?: string | null;

    /**
     * PropertyId associated with the line item.
     */
    PropertyId?: number;

    /**
     * Reference number for the line item.
     */
    ReferenceNumber?: string | null;

    /**
     * UnitId associated with the line item.
     */
    UnitId?: number | null;
  }
}

export type TransactionListResponse = Array<ApplicationTransaction>;

export interface TransactionRetrieveParams {
  applicationId: number;
}

export interface TransactionListParams {
  /**
   * Filters results to specific transactions by their unique identifiers. If not
   * specified, all application transactions will be returned.
   */
  ids?: Array<number>;

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
   * Filters results to any application transaction whose start date is greater than
   * or equal to the specified value. The date must be formatted as YYYY-MM-DD
   */
  transactiondatefrom?: string;

  /**
   * Filters results to any application transaction whose end date is less than or
   * equal to the specified value. The date must be formatted as YYYY-MM-DD
   */
  transactiondateto?: string;

  /**
   * Filters results to any application transaction whose application transaction
   * type matches the specified types. If no type is specified, application
   * transactions with any type will be returned.
   */
  transactiontypes?: Array<'Charge' | 'Payment' | 'Refund' | 'ReversePayment' | 'UnreversedPayment'>;
}

export declare namespace Transactions {
  export {
    type ApplicationTransaction as ApplicationTransaction,
    type Journal as Journal,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };
}
