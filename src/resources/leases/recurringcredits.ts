// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Recurringcredits extends APIResource {
  /**
   * Creates a recurring credit transaction on the specified lease ledger.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseRecurringCredit =
   *   await client.leases.recurringcredits.create(0, {
   *     CreditType: 'WaiveUnpaid',
   *     FirstOccurrenceDate: '2019-12-27',
   *     Frequency: 'Monthly',
   *     PostDaysInAdvance: 0,
   *   });
   * ```
   */
  create(
    leaseID: number,
    body: RecurringcreditCreateParams,
    options?: RequestOptions,
  ): APIPromise<LeaseRecurringCredit> {
    return this._client.post(path`/v1/leases/${leaseID}/recurringcredits`, { body, ...options });
  }

  /**
   * Retrieves a recurring credit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   *
   * @example
   * ```ts
   * const leaseRecurringCredit =
   *   await client.leases.recurringcredits.retrieve(0, {
   *     leaseId: 0,
   *   });
   * ```
   */
  retrieve(
    transactionID: number,
    params: RecurringcreditRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LeaseRecurringCredit> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/recurringcredits/${transactionID}`, options);
  }
}

export interface LeaseRecurringCredit {
  /**
   * The total amount of the recurring credit based on sum of the `Lines.Amount`.
   */
  Amount?: number;

  /**
   * Indicates how the credit will be applied.
   *
   * <ul><li>WaiveUnpaid - This credit type allows for reversing one or more charges without losing record of what has changed.</li><li>Exchange - This credit type allows for one of the following: 1) Reimburse a resident for a out-of-pocket expense, 2) Compensate for a service, 3) Write-off a resident balance considered uncollectable.</li><li>PreviouslyDeposited - This credit type allows for issuing a credit against payments that have already been deposited.</li></ul>
   */
  CreditType?: 'WaiveUnpaid' | 'Exchange' | 'PreviouslyDeposited';

  /**
   * Specifies the period of time/occurrences the recurring payment will be
   * processed. Note, if the `Frequency` field is set to `OneTime` this field should
   * be set to `NULL` as any submitted value will be ignored.
   */
  Duration?: 'Unspecified' | 'UntilEndOfTerm' | 'SpecificNumber' | 'SpecificDate';

  /**
   * The date the first occurrence this credit was processed.
   */
  FirstOccurrenceDate?: string | null;

  /**
   * Indicates the frequency at which the recurring credit is processed.
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
   * The unique identifier of the recurring credit schedule.
   */
  Id?: number;

  /**
   * The unique identifier of the lease that the recurring credit will be applied to.
   */
  LeaseId?: number;

  /**
   * Line items describing how the credit is to be allocated when the recurring
   * transaction is processed.
   */
  Lines?: Array<LeaseRecurringCredit.Line> | null;

  /**
   * Memo associated with the recurring credit.
   */
  Memo?: string | null;

  /**
   * The next date the scheduled credit will be processed.
   */
  NextOccurrenceDate?: string;

  /**
   * The number of remaining times this recurring credit will be processed.
   */
  OccurrencesRemaining?: number | null;

  /**
   * Offsetting general ledger account identifier. The offsetting general ledger
   * account acts as the expense account.
   */
  OffsettingGLAccountId?: number | null;

  /**
   * Specifies the number of days ahead of the transaction date the credit will post
   * on the lease ledger. This setting can be used to add the charge to the ledger
   * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
   * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
   * ledger on 8/5/2022, but will have transaction date of 8/10/2022.
   */
  PostDaysInAdvance?: number;

  /**
   * Indicates whether to apply a posting rule when processing the transaction that
   * would only record the credit if a prior payment has been made.
   *
   * Set the field value to the <b>Rent Income</b> general ledger account identifier
   * if the credit should only be recorded when a payment was made and applied to the
   * <b>Rent Income</b> general ledger account.
   *
   * Set the field value to the <b>Accounts Receivable</b> general ledger account
   * identifier if the credit should only be recorded when a payment was made and
   * applied to _any_ general ledger account.
   *
   * Set the field value to <b>null</b> to always record the credit.
   */
  PostingRuleGLAccountId?: number | null;
}

export namespace LeaseRecurringCredit {
  export interface Line {
    /**
     * Amount of the line item.
     */
    Amount?: number;

    /**
     * The general ledger account unique identifier the recurring transaction is
     * related to.
     */
    GLAccountId?: number;
  }
}

export interface RecurringcreditCreateParams {
  /**
   * Indicates how the credit will be applied.
   *
   * <ul><li>WaiveUnpaid - This credit type allows for reversing one or more charges without losing record of what has changed.</li><li>Exchange - This credit type allows for one of the following: 1) Reimburse a resident for a out-of-pocket expense, 2) Compensate for a service, 3) Write-off a resident balance considered uncollectable.</li><li>PreviouslyDeposited - This credit type allows for issuing a credit against payments that have already been deposited.</li></ul>
   */
  CreditType: 'WaiveUnpaid' | 'Exchange' | 'PreviouslyDeposited';

  /**
   * The date the credit will first be processed. This value along with the
   * `Frequency` is also used as the basis for the date set on the transactions in
   * future occurrences.
   */
  FirstOccurrenceDate: string;

  /**
   * Specifies the frequency at which the recurring credit will be processed.
   */
  Frequency:
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
   * Specifies the number of days ahead of the transaction date the credit will post
   * on the lease ledger. This setting can be used to add the credit to the ledger
   * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
   * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
   * ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value
   * must be between 0 to 45 or set to 60, 75 or 90.
   */
  PostDaysInAdvance: number;

  /**
   * Specifies the period of time/occurrences the recurring credit will be processed.
   * Note, if the `Frequency` field is set to `OneTime` this field should be set to
   * `NULL` as any submitted value will be ignored.
   */
  Duration?: 'UntilEndOfTerm' | 'SpecificNumber' | null;

  /**
   * Line items describing how the credit is to be allocated when the recurring
   * credit is processed.
   */
  Lines?: Array<RecurringcreditCreateParams.Line> | null;

  /**
   * Memo associated with the recurring credit. This value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * Indicates the number of times the recurring credit should be processed. This
   * value is required if the `Duration` field is set to `SpecificNumber`. This value
   * can not exceed 100.
   */
  NumberOfOccurrences?: number | null;

  /**
   * Sets the offsetting general ledger account identifier for the credit.
   *
   * This value must be provided when the `CreditType` field is set to `Exchange` or
   * `PreviouslyDeposited`.
   *
   * When the `CreditType` is `Exchange` this must be an _expense_ general ledger
   * account type.
   *
   * When the `CreditType` is `PreviouslyDeposited` this must be an _equity_ general
   * ledger account type.
   */
  OffsettingGLAccountId?: number | null;

  /**
   * Indicates whether to apply a posting rule when processing the transaction that
   * would only record the credit if a prior payment has been made.
   *
   * Set the field value to the <b>Rent Income</b> general ledger account identifier
   * if the credit should only be recorded when a payment was made and applied to the
   * <b>Rent Income</b> general ledger account.
   *
   * Set the field value to the <b>Accounts Receivable</b> general ledger account
   * identifier if the credit should only be recorded when a payment was made and
   * applied to _any_ general ledger account.
   *
   * Set the field value to <b>null</b> to always record the credit.
   */
  PostingRuleGlAccountId?: number | null;
}

export namespace RecurringcreditCreateParams {
  export interface Line {
    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which the line item amount will be
     * recorded. The account must be a liability or income type.
     */
    GLAccountId: number;
  }
}

export interface RecurringcreditRetrieveParams {
  leaseId: number;
}

export declare namespace Recurringcredits {
  export {
    type LeaseRecurringCredit as LeaseRecurringCredit,
    type RecurringcreditCreateParams as RecurringcreditCreateParams,
    type RecurringcreditRetrieveParams as RecurringcreditRetrieveParams,
  };
}
