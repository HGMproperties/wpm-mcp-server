// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApplicationsAPI from '../../applications/applications';
import * as AssociationsAPI from '../associations';
import * as OwnersAPI from '../owners/owners';
import * as ApplieddepositsAPI from './applieddeposits';
import { ApplieddepositCreateParams, ApplieddepositUpdateParams, Applieddeposits } from './applieddeposits';
import * as ChargesAPI from './charges';
import {
  ChargeCreateParams,
  ChargeListParams,
  ChargeListResponse,
  ChargeRetrieveParams,
  ChargeUpdateParams,
  Charges,
  OwnershipAccountLedgerCharge,
} from './charges';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import * as PartialpaymentsettingsAPI from './partialpaymentsettings';
import { PartialpaymentsettingPatchAllParams, Partialpaymentsettings } from './partialpaymentsettings';
import * as PaymentsAPI from './payments';
import {
  OwnershipAccountLedgerPaymentLineSave,
  PaymentCreateParams,
  PaymentUpdateParams,
  Payments,
} from './payments';
import * as RecurringchargesAPI from './recurringcharges';
import {
  ChargeRecurringTransaction,
  OwnershipAccountChargeRecurringTransaction,
  RecurringchargeCreateParams,
  RecurringchargeRetrieveParams,
  Recurringcharges,
} from './recurringcharges';
import * as RecurringcreditsAPI from './recurringcredits';
import {
  CreditRecurringTransaction,
  OwnershipAccountRecurringCredit,
  RecurringTransactionLine,
  RecurringTransactionLinePost,
  RecurringcreditCreateParams,
  RecurringcreditRetrieveParams,
  Recurringcredits,
} from './recurringcredits';
import * as RecurringpaymentsAPI from './recurringpayments';
import {
  OwnershipAccountRecurringPayment,
  PaymentRecurringTransaction,
  RecurringpaymentCreateParams,
  RecurringpaymentRetrieveParams,
  Recurringpayments,
} from './recurringpayments';
import * as RecurringtransactionsAPI from './recurringtransactions';
import {
  RecurringTransaction,
  RecurringtransactionListParams,
  RecurringtransactionListResponse,
  Recurringtransactions,
} from './recurringtransactions';
import * as RefundsAPI from './refunds';
import { OwnershipAccountRefund, Payee, RefundCreateParams, RefundRetrieveParams, Refunds } from './refunds';
import * as TransactionsAPI from './transactions';
import {
  OwnershipAccountTransaction,
  TransactionListParams,
  TransactionListResponse,
  TransactionRetrieveParams,
  Transactions,
} from './transactions';
import * as ArchitecturalrequestsAPI from './architecturalrequests/architecturalrequests';
import {
  ArchitecturalrequestCreateParams,
  ArchitecturalrequestListParams,
  ArchitecturalrequestListResponse,
  Architecturalrequests,
  AssociationArchitecturalRequest,
  CreatedByUser,
  LastUpdatedByUser,
} from './architecturalrequests/architecturalrequests';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Ownershipaccounts extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  architecturalrequests: ArchitecturalrequestsAPI.Architecturalrequests =
    new ArchitecturalrequestsAPI.Architecturalrequests(this._client);
  charges: ChargesAPI.Charges = new ChargesAPI.Charges(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
  refunds: RefundsAPI.Refunds = new RefundsAPI.Refunds(this._client);
  applieddeposits: ApplieddepositsAPI.Applieddeposits = new ApplieddepositsAPI.Applieddeposits(this._client);
  recurringtransactions: RecurringtransactionsAPI.Recurringtransactions =
    new RecurringtransactionsAPI.Recurringtransactions(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  partialpaymentsettings: PartialpaymentsettingsAPI.Partialpaymentsettings =
    new PartialpaymentsettingsAPI.Partialpaymentsettings(this._client);
  recurringcharges: RecurringchargesAPI.Recurringcharges = new RecurringchargesAPI.Recurringcharges(
    this._client,
  );
  recurringcredits: RecurringcreditsAPI.Recurringcredits = new RecurringcreditsAPI.Recurringcredits(
    this._client,
  );
  recurringpayments: RecurringpaymentsAPI.Recurringpayments = new RecurringpaymentsAPI.Recurringpayments(
    this._client,
  );

  /**
   * Creates an ownership account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Associations > Owners</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationOwnershipAccount =
   *   await client.associations.ownershipaccounts.create({
   *     DateOfPurchase: '2019-12-27',
   *     ReplaceExistingOwnershipAccount: true,
   *     SendWelcomeEmail: true,
   *     UnitId: 0,
   *   });
   * ```
   */
  create(
    body: OwnershipaccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationOwnershipAccount> {
    return this._client.post('/v1/associations/ownershipaccounts', { body, ...options });
  }

  /**
   * Retrieves a specific ownership account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   *
   * @example
   * ```ts
   * const associationOwnershipAccount =
   *   await client.associations.ownershipaccounts.retrieve(0);
   * ```
   */
  retrieve(ownershipAccountID: number, options?: RequestOptions): APIPromise<AssociationOwnershipAccount> {
    return this._client.get(path`/v1/associations/ownershipaccounts/${ownershipAccountID}`, options);
  }

  /**
   * Updates an ownership account.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationOwnershipAccount =
   *   await client.associations.ownershipaccounts.update(0, {
   *     DateOfPurchase: '2019-12-27',
   *   });
   * ```
   */
  update(
    ownershipAccountID: number,
    body: OwnershipaccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationOwnershipAccount> {
    return this._client.put(path`/v1/associations/ownershipaccounts/${ownershipAccountID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a list of ownership accounts.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   *
   * @example
   * ```ts
   * const associationOwnershipAccounts =
   *   await client.associations.ownershipaccounts.list();
   * ```
   */
  list(
    query: OwnershipaccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OwnershipaccountListResponse> {
    return this._client.get('/v1/associations/ownershipaccounts', { query, ...options });
  }

  /**
   * Creates a payment on the ownership account ledger. Note that the recorded
   * payment will be automatically allocated to the general ledger accounts based on
   * the payment allocation settings. These settings can be found under the
   * Settings > Application Settings > Residents page in your account. If you'd like
   * to specify the general ledger accounts the payment should apply to, please use
   * the
   * <a href="#operation/ExternalApiOwnershipAccountLedgerPayments_CreateOwnershipAccountLedgerPayment">Create
   * a payment</a> endpoint.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const ownershipAccountTransaction =
   *   await client.associations.ownershipaccounts.autoPayments(
   *     0,
   *     {
   *       Date: '2019-12-27',
   *       PaymentMethod: 'Check',
   *       SendEmailReceipt: true,
   *       TotalAmount: 0,
   *     },
   *   );
   * ```
   */
  autoPayments(
    ownershipAccountID: number,
    body: OwnershipaccountAutoPaymentsParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.OwnershipAccountTransaction> {
    return this._client.post(
      path`/v1/associations/ownershipaccounts/${ownershipAccountID}/autoallocatedpayments`,
      { body, ...options },
    );
  }

  /**
   * Creates a ledger credit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const ownershipAccountTransaction =
   *   await client.associations.ownershipaccounts.credits(0, {
   *     CreditType: 'WaiveUnpaid',
   *     Date: '2019-12-27',
   *     Lines: [{ Amount: 0, GlAccountId: 0 }],
   *   });
   * ```
   */
  credits(
    ownershipAccountID: number,
    body: OwnershipaccountCreditsParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.OwnershipAccountTransaction> {
    return this._client.post(path`/v1/associations/ownershipaccounts/${ownershipAccountID}/credits`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a list of ownership account outstanding balances.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Outstanding Balances</span> - `View`
   *
   * @example
   * ```ts
   * const response =
   *   await client.associations.ownershipaccounts.getBalances();
   * ```
   */
  getBalances(
    query: OwnershipaccountGetBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OwnershipaccountGetBalancesResponse> {
    return this._client.get('/v1/associations/ownershipaccounts/outstandingbalances', { query, ...options });
  }
}

/**
 * This object represents a home owner association ownership account.
 */
export interface AssociationOwnershipAccount {
  /**
   * Association unique identifier that the ownership account belongs to.
   */
  AssociationId?: number;

  /**
   * Association owners associated with the ownership account
   */
  AssociationOwnerIds?: Array<number> | null;

  /**
   * Comments about the ownership account.
   */
  Comments?: string | null;

  /**
   * Date the unit(s) where purchased by the owner.
   */
  DateOfPurchase?: string;

  /**
   * Date the unit(s) where sold by the owner.
   */
  DateOfSale?: string | null;

  /**
   * Indicates the delinquency status of the ownership account
   */
  DelinquencyStatus?: 'NoDelinquency' | 'InCollections' | 'InForeclosure' | 'Foreclosed';

  /**
   * Association ownership account unique identifier.
   */
  Id?: number;

  /**
   * Indicates the status of the ownership account.
   */
  Status?: 'Active' | 'Past' | 'Future';

  /**
   * Association unit unique identifier that the ownership account is related to.
   */
  UnitId?: number;
}

export type OwnershipaccountListResponse = Array<AssociationOwnershipAccount>;

export type OwnershipaccountGetBalancesResponse =
  Array<OwnershipaccountGetBalancesResponse.OwnershipaccountGetBalancesResponseItem>;

export namespace OwnershipaccountGetBalancesResponse {
  export interface OwnershipaccountGetBalancesResponseItem {
    /**
     * Association unique identifier .
     */
    AssociationId?: number;

    /**
     * Outstanding balance due from within the last 30 days.
     */
    Balance0To30Days?: number;

    /**
     * Outstanding balance due from within 31 to 60 days ago.
     */
    Balance31To60Days?: number;

    /**
     * Outstanding balance due from within 61 to 90 days ago.
     */
    Balance61To90Days?: number;

    /**
     * Outstanding balance due from over 90 days ago.
     */
    BalanceOver90Days?: number;

    /**
     * Breakdown of outstanding balance due by general ledger account.
     */
    Balances?: Array<ApplicationsAPI.OutstandingBalancesLine> | null;

    /**
     * Ownership account unique identifier.
     */
    OwnershipAccountId?: number;

    /**
     * Date of notification for outstanding balance.
     */
    PastDueEmailSentDate?: string | null;

    /**
     * Total outstanding balance due.
     */
    TotalBalance?: number;

    /**
     * Association unit unique identifier.
     */
    UnitId?: number | null;
  }
}

export interface OwnershipaccountCreateParams {
  /**
   * Date the unit was purchased by the owner. Must be formatted as YYYY-MM-DD. If an
   * existing association ownership account is being replaced then this date must be
   * after the existing ownership accounts date of sale.
   */
  DateOfPurchase: string;

  /**
   * Indicates whether to replace an ownership account if one already exists for this
   * unit. If this value is false and an ownership account exists the request will
   * fail.This protects against inadvertently overwriting of an existing ownership
   * account. If the value is true and an ownership account exists then the existing
   * ownership account will be marked as with a status of Past and the newly created
   * ownership account will be Active for the unit.
   */
  ReplaceExistingOwnershipAccount: boolean;

  /**
   * Indicates whether to send an owner portal welcome email to all of the
   * association owners assigned to this ownership account. Once the owners sign into
   * the portal, they can make online payments, view important documents, submit
   * requests, and more.
   */
  SendWelcomeEmail: boolean;

  /**
   * Association unit unique identifier that the ownership account is related to.
   */
  UnitId: number;

  /**
   * Recurring association fee charge. If provided, a recurring transaction will be
   * created that adds a charge in the amount specified to the ownership account
   * ledger with the frequency indicated in RecurringFrequency.
   */
  AssociationFee?: number | null;

  /**
   * Current or former association owners to assign to this ownership account. Values
   * must be an active association owner identifiers. The request must include at
   * least one owner in this property OR the `AssociationOwners` property.
   */
  AssociationOwnerIds?: Array<number> | null;

  /**
   * Create new association owner(s) and assigns them to this new ownership account.
   * The request must include at least one owner in this property OR the
   * `AssociationOwnerIds` property.
   */
  AssociationOwners?: Array<OwnershipaccountCreateParams.AssociationOwner> | null;

  /**
   * Indicates the frequency of the recurring association fee. This field is required
   * if `AssociationFee` has a value.
   */
  RecurringFrequency?:
    | 'Monthly'
    | 'Weekly'
    | 'Every2Weeks'
    | 'Quarterly'
    | 'Yearly'
    | 'Every2Months'
    | 'Daily'
    | 'Every6Months'
    | 'OneTime'
    | null;
}

export namespace OwnershipaccountCreateParams {
  /**
   * This object represents the Association Owner to add when Creating a new
   * OwnershipAccount
   */
  export interface AssociationOwner {
    /**
     * First name of the owner. The value cannot exceed 127 characters.
     */
    FirstName: string;

    /**
     * Indicates if the association owner occupies a unit(s) within the association.
     */
    IsOwnerOccupied: boolean;

    /**
     * Last name of the owner. The value cannot exceed 127 characters.
     */
    LastName: string;

    /**
     * Address.
     */
    PrimaryAddress: AssociationsAPI.SaveAddress;

    /**
     * Address.
     */
    AlternateAddress?: AssociationsAPI.SaveAddress | null;

    /**
     * Alternate email of owner.
     */
    AlternateEmail?: string | null;

    /**
     * Board member term.
     */
    BoardMemberTerm?: OwnersAPI.AssociationOwnerBoardTerm | null;

    /**
     * Comments about the owner. The value cannot exceed 65,535 characters.
     */
    Comment?: string | null;

    /**
     * Date Of Birth for the owner. Must be formatted as `YYYY-MM-DD`.
     */
    DateOfBirth?: string | null;

    /**
     * Email of owner.
     */
    Email?: string | null;

    /**
     * Emergency contact information associated with the owner.
     */
    EmergencyContact?: OwnersAPI.SaveEmergencyContact | null;

    /**
     * Mailing preferences for the owner. If an alternate address exists and this value
     * is not provided then the primary address will be set as the preferred address.
     */
    MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

    /**
     * Phone numbers.
     */
    PhoneNumbers?: OwnersAPI.PhoneNumbers | null;

    /**
     * Taxpayer identification number of the owner. Examples of United States
     * identification numbers are Social Security number or a Employer Identification
     * Number. Valid formats are: `12-1234567`, `123-12-1234`, `123456789`.
     */
    TaxId?: string | null;
  }
}

export interface OwnershipaccountUpdateParams {
  /**
   * Date the unit was purchased by the owner. Must be formatted as YYYY-MM-DD.
   */
  DateOfPurchase: string;
}

export interface OwnershipaccountListParams {
  /**
   * Filters results to any ownership accounts who belong to the specified set of
   * association ids.
   */
  associationids?: Array<number>;

  /**
   * Filters results to any ownership account whose start date is greater than or
   * equal to the specified value.
   */
  datefrom?: string;

  /**
   * Filters results to any ownership account whose start date is less than or equal
   * to the specified value.
   */
  dateto?: string;

  /**
   * Filters results by the delinquency status of the ownership account. If no status
   * is specified, ownership accounts of any delinquency status will be returned.
   */
  delinquencystatuses?: Array<'NoDelinquency' | 'InCollections' | 'InForeclosure' | 'Foreclosed'>;

  /**
   * Filters results to the specified set of ids.
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
   * Filters results by the status of the association. If no status is specified,
   * `active`, `past` and `future` associations will be returned.
   */
  status?: Array<'Active' | 'Past' | 'Future'>;

  /**
   * Filters results to any association whose unit or owner _contains_ the specified
   * value.
   */
  unitorowner?: string;
}

export interface OwnershipaccountAutoPaymentsParams {
  /**
   * The date of the transaction. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * The payment method used for the transaction.
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
   * An indicator for whether or not to send an email receipt to the payee. If the
   * payee does not have an email address set, no email will be sent.
   */
  SendEmailReceipt: boolean;

  /**
   * The total amount of the payment being created.
   */
  TotalAmount: number;

  /**
   * A brief note describing the reason for the payment. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * The payee's user unique identifier.
   */
  PayeeUserId?: number | null;

  /**
   * The reference Number of the transaction. The value cannot exceed 30 characters.
   */
  ReferenceNumber?: string | null;
}

export interface OwnershipaccountCreditsParams {
  /**
   * Indicates how the credit should be applied.
   *
   * <ul><li>WaiveUnpaid - This credit type allows for reversing one or more charges without losing record of what has changed.</li><li>Exchange - This credit type allows for one of the following: 1) Reimburse a resident for a out-of-pocket expense, 2) Compensate for a service, 3) Write-off a resident balance considered uncollectable.</li><li>PreviouslyDeposited - This credit type allows for issuing a credit against payments that have already been deposited.</li></ul>
   */
  CreditType: 'WaiveUnpaid' | 'Exchange' | 'PreviouslyDeposited';

  /**
   * Date of the transaction. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * A collection of line items included in the credit. At least one line item is
   * required.
   */
  Lines: Array<OwnershipaccountCreditsParams.Line>;

  /**
   * Description of the transaction. The value cannot exceed 65 characters.
   */
  Memo?: string | null;

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
}

export namespace OwnershipaccountCreditsParams {
  export interface Line {
    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which the line item amount will be
     * recorded. The account must be a liability or income type.
     */
    GlAccountId: number;
  }
}

export interface OwnershipaccountGetBalancesParams {
  /**
   * Association unique identifier
   */
  associationid?: number;

  /**
   * Duration of outstanding balances
   */
  balanceduration?:
    | 'TotalBalance'
    | 'Balance0to30Days'
    | 'Balance31to60Days'
    | 'Balance61to90Days'
    | 'BalanceOver90Days';

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
   * List of ownership account ids
   */
  ownershipaccountids?: Array<number>;

  /**
   * List of ownership account statuses
   */
  ownershipaccountstatuses?: Array<'Active' | 'Past' | 'Future'>;

  /**
   * Status of notification of outstanding balances
   */
  pastdueemail?: 'NoEmailAddress' | 'Sent';
}

Ownershipaccounts.Transactions = Transactions;
Ownershipaccounts.Architecturalrequests = Architecturalrequests;
Ownershipaccounts.Charges = Charges;
Ownershipaccounts.Payments = Payments;
Ownershipaccounts.Refunds = Refunds;
Ownershipaccounts.Applieddeposits = Applieddeposits;
Ownershipaccounts.Recurringtransactions = Recurringtransactions;
Ownershipaccounts.Notes = Notes;
Ownershipaccounts.Partialpaymentsettings = Partialpaymentsettings;
Ownershipaccounts.Recurringcharges = Recurringcharges;
Ownershipaccounts.Recurringcredits = Recurringcredits;
Ownershipaccounts.Recurringpayments = Recurringpayments;

export declare namespace Ownershipaccounts {
  export {
    type AssociationOwnershipAccount as AssociationOwnershipAccount,
    type OwnershipaccountListResponse as OwnershipaccountListResponse,
    type OwnershipaccountGetBalancesResponse as OwnershipaccountGetBalancesResponse,
    type OwnershipaccountCreateParams as OwnershipaccountCreateParams,
    type OwnershipaccountUpdateParams as OwnershipaccountUpdateParams,
    type OwnershipaccountListParams as OwnershipaccountListParams,
    type OwnershipaccountAutoPaymentsParams as OwnershipaccountAutoPaymentsParams,
    type OwnershipaccountCreditsParams as OwnershipaccountCreditsParams,
    type OwnershipaccountGetBalancesParams as OwnershipaccountGetBalancesParams,
  };

  export {
    Transactions as Transactions,
    type OwnershipAccountTransaction as OwnershipAccountTransaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Architecturalrequests as Architecturalrequests,
    type AssociationArchitecturalRequest as AssociationArchitecturalRequest,
    type CreatedByUser as CreatedByUser,
    type LastUpdatedByUser as LastUpdatedByUser,
    type ArchitecturalrequestListResponse as ArchitecturalrequestListResponse,
    type ArchitecturalrequestCreateParams as ArchitecturalrequestCreateParams,
    type ArchitecturalrequestListParams as ArchitecturalrequestListParams,
  };

  export {
    Charges as Charges,
    type OwnershipAccountLedgerCharge as OwnershipAccountLedgerCharge,
    type ChargeListResponse as ChargeListResponse,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeListParams as ChargeListParams,
  };

  export {
    Payments as Payments,
    type OwnershipAccountLedgerPaymentLineSave as OwnershipAccountLedgerPaymentLineSave,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentUpdateParams as PaymentUpdateParams,
  };

  export {
    Refunds as Refunds,
    type OwnershipAccountRefund as OwnershipAccountRefund,
    type Payee as Payee,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };

  export {
    Applieddeposits as Applieddeposits,
    type ApplieddepositCreateParams as ApplieddepositCreateParams,
    type ApplieddepositUpdateParams as ApplieddepositUpdateParams,
  };

  export {
    Recurringtransactions as Recurringtransactions,
    type RecurringTransaction as RecurringTransaction,
    type RecurringtransactionListResponse as RecurringtransactionListResponse,
    type RecurringtransactionListParams as RecurringtransactionListParams,
  };

  export {
    Notes as Notes,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };

  export {
    Partialpaymentsettings as Partialpaymentsettings,
    type PartialpaymentsettingPatchAllParams as PartialpaymentsettingPatchAllParams,
  };

  export {
    Recurringcharges as Recurringcharges,
    type ChargeRecurringTransaction as ChargeRecurringTransaction,
    type OwnershipAccountChargeRecurringTransaction as OwnershipAccountChargeRecurringTransaction,
    type RecurringchargeCreateParams as RecurringchargeCreateParams,
    type RecurringchargeRetrieveParams as RecurringchargeRetrieveParams,
  };

  export {
    Recurringcredits as Recurringcredits,
    type CreditRecurringTransaction as CreditRecurringTransaction,
    type OwnershipAccountRecurringCredit as OwnershipAccountRecurringCredit,
    type RecurringTransactionLine as RecurringTransactionLine,
    type RecurringTransactionLinePost as RecurringTransactionLinePost,
    type RecurringcreditCreateParams as RecurringcreditCreateParams,
    type RecurringcreditRetrieveParams as RecurringcreditRetrieveParams,
  };

  export {
    Recurringpayments as Recurringpayments,
    type OwnershipAccountRecurringPayment as OwnershipAccountRecurringPayment,
    type PaymentRecurringTransaction as PaymentRecurringTransaction,
    type RecurringpaymentCreateParams as RecurringpaymentCreateParams,
    type RecurringpaymentRetrieveParams as RecurringpaymentRetrieveParams,
  };
}
