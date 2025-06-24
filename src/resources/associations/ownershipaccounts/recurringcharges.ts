// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Recurringcharges extends APIResource {
  /**
   * Creates a recurring charge transaction that will post automatically on the
   * specified ownership account ledger.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const ownershipAccountChargeRecurringTransaction =
   *   await client.associations.ownershipaccounts.recurringcharges.create(
   *     0,
   *     {
   *       Amount: 0,
   *       FirstOccurrenceDate: '2019-12-27',
   *       Frequency: 'Monthly',
   *       GLAccountId: 0,
   *       PostDaysInAdvance: 0,
   *     },
   *   );
   * ```
   */
  create(
    ownershipAccountID: number,
    body: RecurringchargeCreateParams,
    options?: RequestOptions,
  ): APIPromise<OwnershipAccountChargeRecurringTransaction> {
    return this._client.post(
      path`/v1/associations/ownershipaccounts/${ownershipAccountID}/recurringcharges`,
      { body, ...options },
    );
  }

  /**
   * Retrieves a recurring charge.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountChargeRecurringTransaction =
   *   await client.associations.ownershipaccounts.recurringcharges.retrieve(
   *     0,
   *     { ownershipAccountId: 0 },
   *   );
   * ```
   */
  retrieve(
    transactionID: number,
    params: RecurringchargeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OwnershipAccountChargeRecurringTransaction> {
    const { ownershipAccountId } = params;
    return this._client.get(
      path`/v1/associations/ownershipaccounts/${ownershipAccountId}/recurringcharges/${transactionID}`,
      options,
    );
  }
}

export interface ChargeRecurringTransaction {
  /**
   * The amount to record when applying the charge to the lease ledger.
   */
  Amount: number;

  /**
   * The date the charge will first be processed. This value along with the
   * `Frequency` is also used as the basis for the date set on the transactions in
   * future occurrences.
   */
  FirstOccurrenceDate: string;

  /**
   * Specifies the frequency at which the recurring charge will be processed.
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
   * The general ledger account unique identifier under which the charge amount will
   * be recorded. The general ledger account can only be an income or liability
   * account.
   */
  GLAccountId: number;

  /**
   * Specifies the number of days ahead of the transaction date the charge will post
   * on the lease ledger. This setting can be used to add the charge to the ledger
   * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
   * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
   * ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value
   * must be between 0 to 45 or set to 60, 75 or 90.
   */
  PostDaysInAdvance: number;

  /**
   * Specifies the period of time/occurrences the recurring payment will be
   * processed. Note, if the `Frequency` field is set to `OneTime` this field should
   * be set to `NULL` as any submitted value will be ignored.
   */
  Duration?: 'UntilEndOfTerm' | 'SpecificNumber' | null;

  /**
   * Memo associated with the recurring charge. This value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * Indicates the number of times the recurring transaction should be processed.
   * This value is required if the `Duration` field is set to `SpecificNumber`. This
   * value can not exceed 100.
   */
  NumberOfOccurrences?: number | null;
}

export interface OwnershipAccountChargeRecurringTransaction {
  /**
   * The amount of the recurring charge.
   */
  Amount?: number;

  /**
   * Specifies the period of time/occurrences the recurring charge will be processed.
   * Note, if the `Frequency` field is set to `OneTime` this field should be set to
   * `NULL` as any submitted value will be ignored.
   */
  Duration?: 'Unspecified' | 'UntilEndOfTerm' | 'SpecificNumber' | 'SpecificDate';

  /**
   * The date the first occurence this charge was processed.
   */
  FirstOccurrenceDate?: string | null;

  /**
   * Indicates the frequency at which the recurring charge is processed.
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
   * The general ledger account unique identifier the recurring charge is applied to.
   */
  GLAccountId?: number | null;

  /**
   * The unique identifier of the recurring charge schedule.
   */
  Id?: number;

  /**
   * Memo associated with the recurring charge.
   */
  Memo?: string | null;

  /**
   * The next date the scheduled charge will be processed.
   */
  NextOccurrenceDate?: string;

  /**
   * The number of remaining times this recurring charge will be processed.
   */
  OccurrencesRemaining?: number | null;

  /**
   * The unique identifier of the ownership account that the recurring charge will be
   * applied to.
   */
  OwnershipAccountId?: number;

  /**
   * Specifies the number of days ahead of the transaction date the charge will post
   * on the lease ledger. This setting can be used to add the charge to the ledger
   * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
   * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
   * ledger on 8/5/2022, but will have transaction date of 8/10/2022.
   */
  PostDaysInAdvance?: number;

  /**
   * The unique identifier of the scheduled Rent entity. If the charge is not
   * associated with a Rent entity then the value will be `NULL`.
   */
  RentId?: number | null;
}

export interface RecurringchargeCreateParams {
  /**
   * The amount to record when applying the charge to the lease ledger.
   */
  Amount: number;

  /**
   * The date the charge will first be processed. This value along with the
   * `Frequency` is also used as the basis for the date set on the transactions in
   * future occurrences.
   */
  FirstOccurrenceDate: string;

  /**
   * Specifies the frequency at which the recurring charge will be processed.
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
   * The general ledger account unique identifier under which the charge amount will
   * be recorded. The general ledger account can only be an income or liability
   * account.
   */
  GLAccountId: number;

  /**
   * Specifies the number of days ahead of the transaction date the charge will post
   * on the lease ledger. This setting can be used to add the charge to the ledger
   * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
   * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
   * ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value
   * must be between 0 to 45 or set to 60, 75 or 90.
   */
  PostDaysInAdvance: number;

  /**
   * Specifies the period of time/occurrences the recurring payment will be
   * processed. Note, if the `Frequency` field is set to `OneTime` this field should
   * be set to `NULL` as any submitted value will be ignored.
   */
  Duration?: 'UntilEndOfTerm' | 'SpecificNumber' | null;

  /**
   * Memo associated with the recurring charge. This value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * Indicates the number of times the recurring transaction should be processed.
   * This value is required if the `Duration` field is set to `SpecificNumber`. This
   * value can not exceed 100.
   */
  NumberOfOccurrences?: number | null;
}

export interface RecurringchargeRetrieveParams {
  ownershipAccountId: number;
}

export declare namespace Recurringcharges {
  export {
    type ChargeRecurringTransaction as ChargeRecurringTransaction,
    type OwnershipAccountChargeRecurringTransaction as OwnershipAccountChargeRecurringTransaction,
    type RecurringchargeCreateParams as RecurringchargeCreateParams,
    type RecurringchargeRetrieveParams as RecurringchargeRetrieveParams,
  };
}
