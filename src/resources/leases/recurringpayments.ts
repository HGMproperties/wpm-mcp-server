// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Recurringpayments extends APIResource {
  /**
   * Creates a recurring payment that will post automatically on the specified lease
   * ledger.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseRecurringPayment =
   *   await client.leases.recurringpayments.create(0, {
   *     FirstOccurrenceDate: '2019-12-27',
   *     Frequency: 'Monthly',
   *     PaymentMethod: 'Check',
   *     PostDaysInAdvance: 0,
   *   });
   * ```
   */
  create(
    leaseID: number,
    body: RecurringpaymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<LeaseRecurringPayment> {
    return this._client.post(path`/v1/leases/${leaseID}/recurringpayments`, { body, ...options });
  }

  /**
   * Retrieves a recurring payment.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`
   *
   * @example
   * ```ts
   * const leaseRecurringPayment =
   *   await client.leases.recurringpayments.retrieve(0, {
   *     leaseId: 0,
   *   });
   * ```
   */
  retrieve(
    paymentID: number,
    params: RecurringpaymentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LeaseRecurringPayment> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/recurringpayments/${paymentID}`, options);
  }
}

export interface LeaseRecurringPayment {
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
   * The date the first occurrence this payment was processed.
   */
  FirstOccurrenceDate?: string;

  /**
   * Indicates the frequency at which the recurring payment is processed.
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
   * The unique identifier for the recurring payment schedule.
   */
  Id?: number;

  /**
   * The unique identifier of the lease that the recurring payment will be applied
   * to.
   */
  LeaseId?: number;

  /**
   * Line items describing how the payment is to be allocated when the recurring
   * transaction is processed.
   */
  Lines?: Array<LeaseRecurringPayment.Line> | null;

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
   * The payer of the transaction.
   */
  Payer?: LeaseRecurringPayment.Payer | null;

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
   * on the lease ledger. This setting can be used to add the charge to the ledger
   * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
   * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
   * ledger on 8/5/2022, but will have transaction date of 8/10/2022.
   */
  PostDaysInAdvance?: number;
}

export namespace LeaseRecurringPayment {
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

  /**
   * The payer of the transaction.
   */
  export interface Payer {
    /**
     * A link to the resource endpoint associated with the payer.
     */
    Href?: string | null;

    /**
     * The payer user unique identifier.
     */
    Id?: number;

    /**
     * The name of the payer.
     */
    Name?: string | null;

    /**
     * The payer user entity type.
     */
    Type?:
      | 'Tenant'
      | 'AssociationTenant'
      | 'AssociationOwner'
      | 'RentalOwner'
      | 'Vendor'
      | 'Staff'
      | 'Applicant';
  }
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
  Lines?: Array<RecurringpaymentCreateParams.Line> | null;

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

export namespace RecurringpaymentCreateParams {
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

export interface RecurringpaymentRetrieveParams {
  leaseId: number;
}

export declare namespace Recurringpayments {
  export {
    type LeaseRecurringPayment as LeaseRecurringPayment,
    type RecurringpaymentCreateParams as RecurringpaymentCreateParams,
    type RecurringpaymentRetrieveParams as RecurringpaymentRetrieveParams,
  };
}
