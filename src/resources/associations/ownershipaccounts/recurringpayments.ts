// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RecurringcreditsAPI from './recurringcredits';
import * as RefundsAPI from './refunds';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Recurringpayments extends APIResource {
  /**
   * Creates a recurring payment that will post automatically on the specified
   * ownership account ledger.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const ownershipAccountRecurringPayment =
   *   await client.associations.ownershipaccounts.recurringpayments.create(
   *     0,
   *     {
   *       FirstOccurrenceDate: '2019-12-27',
   *       Frequency: 'Monthly',
   *       PaymentMethod: 'Check',
   *       PostDaysInAdvance: 0,
   *     },
   *   );
   * ```
   */
  create(
    ownershipAccountID: number,
    body: RecurringpaymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<OwnershipAccountRecurringPayment> {
    return this._client.post(
      path`/v1/associations/ownershipaccounts/${ownershipAccountID}/recurringpayments`,
      { body, ...options },
    );
  }

  /**
   * Retrieves a recurring payment.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountRecurringPayment =
   *   await client.associations.ownershipaccounts.recurringpayments.retrieve(
   *     0,
   *     { ownershipAccountId: 0 },
   *   );
   * ```
   */
  retrieve(
    paymentID: number,
    params: RecurringpaymentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OwnershipAccountRecurringPayment> {
    const { ownershipAccountId } = params;
    return this._client.get(
      path`/v1/associations/ownershipaccounts/${ownershipAccountId}/recurringpayments/${paymentID}`,
      options,
    );
  }
}

export interface OwnershipAccountRecurringPayment {
  /**
   * The total amount of the recurring payment based on sum of the `Lines.Amount`.
   */
  Amount?: number;

  /**
   * Specifies the period of time/occurrences the recurring payment will be
   * processed. Note, if the `Frequency` field is set to `OneTime` this field should
   * be set to `NULL` as any submitted value will be ignored.
   */
  Duration?: 'Unspecified' | 'UntilEndOfTerm' | 'SpecificNumber' | 'SpecificDate';

  /**
   * The date the first occurence this payment was processed.
   */
  FirstOccurrenceDate?: string;

  /**
   * Specifies the frequency at which the recurring payment will be processed.
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
   * The unique identifier of the recurring payment schedule.
   */
  Id?: number;

  /**
   * Line items describing how the payment is to be allocated when the recurring
   * transaction is processed.
   */
  Lines?: Array<RecurringcreditsAPI.RecurringTransactionLine> | null;

  /**
   * Memo associated with the recurring payment.
   */
  Memo?: string | null;

  /**
   * The next date the scheduled payment will be processed.
   */
  NextOccurrenceDate?: string;

  /**
   * The number of remaining times this recurring payment will be processed.
   */
  OccurrencesRemaining?: number | null;

  /**
   * The unique identifier of the ownership account that the recurring payment will
   * be applied to.
   */
  OwnershipAccountId?: number;

  /**
   * The payer of the transaction.
   */
  Payer?: RefundsAPI.Payee | null;

  /**
   * The method of payment for the transaction.
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
   * Specifies the number of days ahead of the transaction date the payment will post
   * on the lease ledger. This setting can be used to add the payment to the ledger
   * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
   * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
   * ledger on 8/5/2022, but will have transaction date of 8/10/2022.
   */
  PostDaysInAdvance?: number;
}

export interface PaymentRecurringTransaction {
  /**
   * The date the payment will first be processed. This value along with the
   * `Frequency` is also used as the basis for the date set on the transactions in
   * future occurrences.
   */
  FirstOccurrenceDate: string;

  /**
   * Specifies the frequency at which the recurring payment will be processed.
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
   * The payment method for the transaction.
   */
  PaymentMethod:
    | 'Check'
    | 'Cash'
    | 'MoneyOrder'
    | 'CashierCheck'
    | 'DirectDeposit'
    | 'CreditCard'
    | 'ElectronicPayment';

  /**
   * Specifies the number of days ahead of the transaction date the payment will post
   * on the lease ledger. This setting can be used to add the payment to the ledger
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
   * Line items describing how the payment is to be allocated when the payment is
   * processed.
   */
  Lines?: Array<RecurringcreditsAPI.RecurringTransactionLinePost> | null;

  /**
   * Memo associated with the recurring payment. This value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * Indicates the number of times the recurring payment should be processed. This
   * value is required if the `Duration` field is set to `SpecificNumber`. This value
   * can not exceed 100.
   */
  NumberOfOccurrences?: number | null;

  /**
   * The unique identifier of the user making the payment.
   */
  PayerUserId?: number | null;
}

export interface RecurringpaymentCreateParams {
  /**
   * The date the payment will first be processed. This value along with the
   * `Frequency` is also used as the basis for the date set on the transactions in
   * future occurrences.
   */
  FirstOccurrenceDate: string;

  /**
   * Specifies the frequency at which the recurring payment will be processed.
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
   * The payment method for the transaction.
   */
  PaymentMethod:
    | 'Check'
    | 'Cash'
    | 'MoneyOrder'
    | 'CashierCheck'
    | 'DirectDeposit'
    | 'CreditCard'
    | 'ElectronicPayment';

  /**
   * Specifies the number of days ahead of the transaction date the payment will post
   * on the lease ledger. This setting can be used to add the payment to the ledger
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
   * Line items describing how the payment is to be allocated when the payment is
   * processed.
   */
  Lines?: Array<RecurringcreditsAPI.RecurringTransactionLinePost> | null;

  /**
   * Memo associated with the recurring payment. This value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * Indicates the number of times the recurring payment should be processed. This
   * value is required if the `Duration` field is set to `SpecificNumber`. This value
   * can not exceed 100.
   */
  NumberOfOccurrences?: number | null;

  /**
   * The unique identifier of the user making the payment.
   */
  PayerUserId?: number | null;
}

export interface RecurringpaymentRetrieveParams {
  ownershipAccountId: number;
}

export declare namespace Recurringpayments {
  export {
    type OwnershipAccountRecurringPayment as OwnershipAccountRecurringPayment,
    type PaymentRecurringTransaction as PaymentRecurringTransaction,
    type RecurringpaymentCreateParams as RecurringpaymentCreateParams,
    type RecurringpaymentRetrieveParams as RecurringpaymentRetrieveParams,
  };
}
