// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from '../users';
import * as AssociationsAPI from '../associations/associations';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryCreateParams,
  CategoryListParams,
  CategoryListResponse,
  CategoryUpdateParams,
  VendorCategory,
  VendorCategorySave,
} from './categories';
import * as CreditsAPI from './credits';
import { CreditCreateParams, CreditRetrieveParams, Credits, VendorCredit } from './credits';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import * as RefundsAPI from './refunds';
import { RefundCreateParams, RefundRetrieveParams, Refunds, VendorRefund } from './refunds';
import * as OwnersAPI from '../associations/owners/owners';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Vendors extends APIResource {
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  refunds: RefundsAPI.Refunds = new RefundsAPI.Refunds(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Creates a vendor.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`
   */
  create(body: VendorCreateParams, options?: RequestOptions): APIPromise<Vendor> {
    return this._client.post('/v1/vendors', { body, ...options });
  }

  /**
   * Retrieve a specific vendor.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`
   */
  retrieve(vendorID: number, options?: RequestOptions): APIPromise<Vendor> {
    return this._client.get(path`/v1/vendors/${vendorID}`, options);
  }

  /**
   * Updates a vendor.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`
   */
  update(vendorID: number, body: VendorUpdateParams, options?: RequestOptions): APIPromise<Vendor> {
    return this._client.put(path`/v1/vendors/${vendorID}`, { body, ...options });
  }

  /**
   * Retrieves a list of vendors.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`
   */
  list(
    query: VendorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VendorListResponse> {
    return this._client.get('/v1/vendors', { query, ...options });
  }

  /**
   * Retrieves all transactions for a given vendor.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`
   *
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> -
   * `View`
   */
  listTransactions(
    vendorID: number,
    query: VendorListTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<VendorListTransactionsResponse> {
    return this._client.get(path`/v1/vendors/${vendorID}/transactions`, { query, ...options });
  }
}

/**
 * This is an object that represents a vendor.
 */
export interface Vendor {
  /**
   * Vendor account number.
   */
  AccountNumber?: string | null;

  /**
   * Address.
   */
  Address?: AssociationsAPI.Address | null;

  /**
   * Alternate email for the vendor.
   */
  AlternateEmail?: string | null;

  /**
   * Vendor category.
   */
  Category?: Vendor.Category | null;

  /**
   * General comments about the vendor.
   */
  Comments?: string | null;

  /**
   * Company name for the vendor. Empty if `IsCompany` is `false`
   */
  CompanyName?: string | null;

  /**
   * The unique identifier of the default expense general ledger account to associate
   * with the vendor.
   */
  ExpenseGLAccountId?: number | null;

  /**
   * First name of the vendor. Empty if `IsCompany` is `true`.
   */
  FirstName?: string | null;

  /**
   * Vendor unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the vendor is active within the Buildium platform.
   */
  IsActive?: boolean;

  /**
   * Indicates whether the vendor is a company.
   */
  IsCompany?: boolean;

  /**
   * Last name of the vendor. Empty if `IsCompany` is `true`.
   */
  LastName?: string | null;

  /**
   * List of phone numbers for the vendor.
   */
  PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

  /**
   * Primary email for the vendor.
   */
  PrimaryEmail?: string | null;

  /**
   * Vendor tax information.
   */
  TaxInformation?: Vendor.TaxInformation | null;

  /**
   * Vendor insurance information.
   */
  VendorInsurance?: Vendor.VendorInsurance | null;

  /**
   * Website of the vendor.
   */
  Website?: string | null;
}

export namespace Vendor {
  /**
   * Vendor category.
   */
  export interface Category {
    Id?: number;

    Name?: string | null;
  }

  /**
   * Vendor tax information.
   */
  export interface TaxInformation {
    /**
     * Address.
     */
    Address?: AssociationsAPI.Address | null;

    /**
     * Indicates whether the vendor should be included in 1099 form generation.
     */
    IncludeIn1099?: boolean;

    /**
     * The tax payer identifier.
     */
    TaxPayerId?: string | null;

    /**
     * Indicates the type of tax payer id being specified in the request.
     */
    TaxPayerIdType?: 'SSN' | 'EIN' | null;

    /**
     * Tax payer name line 1.
     */
    TaxPayerName1?: string | null;

    /**
     * Tax payer name line 2.
     */
    TaxPayerName2?: string | null;
  }

  /**
   * Vendor insurance information.
   */
  export interface VendorInsurance {
    /**
     * Expiration date of the insurance policy. Null if no expiration exists.
     */
    ExpirationDate?: string | null;

    /**
     * Insurance policy number.
     */
    PolicyNumber?: string | null;

    /**
     * Insurance provider.
     */
    Provider?: string | null;
  }
}

/**
 * Vendor insurance information.
 */
export interface VendorInsuranceSave {
  /**
   * Expiration date of the insurance policy. The date must be formatted as
   * YYYY-MM-DD.
   */
  ExpirationDate?: string | null;

  /**
   * Insurance policy number. This value can not exceed 65 characters.
   */
  PolicyNumber?: string | null;

  /**
   * Insurance provider. This value can not exceed 65 characters.
   */
  Provider?: string | null;
}

export type VendorListResponse = Array<Vendor>;

export type VendorListTransactionsResponse =
  Array<VendorListTransactionsResponse.VendorListTransactionsResponseItem>;

export namespace VendorListTransactionsResponse {
  export interface VendorListTransactionsResponseItem {
    /**
     * Date of the transaction.
     */
    Date?: string;

    /**
     * Transaction unique identifier.
     */
    Id?: number;

    /**
     * Memo for the transaction.
     */
    Memo?: string | null;

    /**
     * Reference number for the transaction.
     */
    ReferenceNumber?: string | null;

    /**
     * Total amount of the transaction.
     */
    TotalAmount?: number;

    /**
     * Type of transaction.
     */
    TransactionType?:
      | 'Bill'
      | 'Check'
      | 'Charge'
      | 'Payment'
      | 'Credit'
      | 'Refund'
      | 'ApplyDeposit'
      | 'ElectronicFundsTransfer'
      | 'Other'
      | 'Deposit'
      | 'GeneralJournalEntry'
      | 'OwnerContribution'
      | 'ReversePayment'
      | 'ReverseElectronicFundsTransfer'
      | 'VendorCredit'
      | 'RentalApplicationFeePayment'
      | 'ReverseRentalApplicationFeePayment'
      | 'ReverseOwnerContribution'
      | 'VendorRefund'
      | 'UnreversedPayment'
      | 'UnreversedElectronicFundsTransfer'
      | 'UnreversedOwnerContribution'
      | 'UnreversedRentalApplicationFeePayment'
      | 'ReversedEftRefund';
  }
}

export interface VendorCreateParams {
  /**
   * The unique identifier of the vendor category.
   */
  CategoryId: number;

  /**
   * Indicates whether the vendor should be considered a company or person.
   */
  IsCompany: boolean;

  /**
   * The account number of the vendor. The value cannot exceed 30 characters.
   */
  AccountNumber?: string | null;

  /**
   * Address.
   */
  Address?: AssociationsAPI.SaveAddress | null;

  /**
   * Alternate email for the vendor.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the vendor. The value cannot exceed 65,535 characters.
   */
  Comments?: string | null;

  /**
   * Company name of the vendor. Required if `IsCompany` is `true`. The value cannot
   * exceed 127 characters.
   */
  CompanyName?: string | null;

  /**
   * The unique identifier of the default expense general ledger account to associate
   * with the vendor.
   */
  ExpenseGlAccountId?: number | null;

  /**
   * First name of the vendor. Required if `IsCompany` is `false`. The value cannot
   * exceed 127 characters.
   */
  FirstName?: string | null;

  /**
   * Last name of the vendor. Required if `IsCompany` is `false`. The value cannot
   * exceed 127 characters.
   */
  LastName?: string | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: OwnersAPI.PhoneNumbers | null;

  /**
   * Primary email for the vendor.
   */
  PrimaryEmail?: string | null;

  /**
   * Tax information.
   */
  TaxInformation?: AssociationsAPI.TaxInformation | null;

  /**
   * Vendor insurance information.
   */
  VendorInsurance?: VendorInsuranceSave | null;

  /**
   * The website of the vendor. The value must be a valid URL. For example
   * `http://www.example.com`. The value cannot exceed 100 characters.
   */
  Website?: string | null;
}

export interface VendorUpdateParams {
  /**
   * The unique identifier of the vendor category.
   */
  CategoryId: number;

  /**
   * Indicates whether the vendor should be considered a company or person.
   */
  IsCompany: boolean;

  /**
   * The account number of the vendor. The value cannot exceed 30 characters.
   */
  AccountNumber?: string | null;

  /**
   * Address.
   */
  Address?: AssociationsAPI.SaveAddress | null;

  /**
   * Alternate email for the vendor.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the vendor. The value cannot exceed 65,535 characters.
   */
  Comments?: string | null;

  /**
   * Company name of the vendor. Required if `IsCompany` is `true`. The value cannot
   * exceed 127 characters.
   */
  CompanyName?: string | null;

  /**
   * The unique identifier of the default expense general ledger account to associate
   * with the vendor.
   */
  ExpenseGlAccountId?: number | null;

  /**
   * First name of the vendor. Required if `IsCompany` is `false`. The value cannot
   * exceed 127 characters.
   */
  FirstName?: string | null;

  /**
   * Last name of the vendor. Required if `IsCompany` is `false`. The value cannot
   * exceed 127 characters.
   */
  LastName?: string | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: OwnersAPI.PhoneNumbers | null;

  /**
   * Primary email for the vendor.
   */
  PrimaryEmail?: string | null;

  /**
   * Tax information.
   */
  TaxInformation?: VendorUpdateParams.TaxInformation | null;

  /**
   * Vendor insurance information.
   */
  VendorInsurance?: VendorInsuranceSave | null;

  /**
   * The website of the vendor. The value must be a valid URL. For example
   * "http://www.example.com". The value cannot exceed 100 characters.
   */
  Website?: string | null;
}

export namespace VendorUpdateParams {
  /**
   * Tax information.
   */
  export interface TaxInformation {
    /**
     * Indicates whether the vendor should be included in 1099 form generation.
     */
    IncludeIn1099: boolean;

    /**
     * Address.
     */
    Address?: AssociationsAPI.SaveAddress | null;

    /**
     * The unique identifier of the tax payer. Required if `TaxPayerType` is set.
     * Format the values based on the `TaxPayerIdType` that is specified in the
     * request. `SSN` must be formatted as 123-45-6789. `EIN` must be formatted as
     * 12-3456789.
     */
    TaxPayerId?: string | null;

    /**
     * The tax payer name 1. The value cannot exceed 40 characters.
     */
    TaxPayerName1?: string | null;

    /**
     * The tax payer name 2. The value cannot exceed 40 characters.
     */
    TaxPayerName2?: string | null;

    /**
     * The tax payer type. Required if `TaxPayerId` is set.
     */
    TaxPayerType?: 'SSN' | 'EIN' | null;
  }
}

export interface VendorListParams {
  /**
   * Filters results to any vendor whose email _contains_ the specified value.
   */
  email?: string;

  /**
   * Filters results to any vendor whose insurance will expire in the specified date
   * range.
   */
  insuranceexpiration?:
    | 'Expired'
    | 'ThirtyDaysOrLess'
    | 'SixtyDaysOrLess'
    | 'NinetyDaysOrLess'
    | 'None'
    | 'Any';

  /**
   * Filters results to any vendors that were updated on or after the specified date.
   * The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any vendors that were updated on or before the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to any vendor whose name _contains_ the specified value.
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
   * Filters results to any vendor who has a phone number that _contains_ the
   * specified value.
   */
  phone?: string;

  /**
   * Filters results by the status of the vendor. If no status is specified both
   * `active` and `inactive` vendors will be returned.
   */
  status?: 'Inactive' | 'Active';

  /**
   * Filters results to any vendor whose website _contains_ the specified value.
   */
  website?: string;
}

export interface VendorListTransactionsParams {
  /**
   * Filters results to any vendor transaction whose entry date that is greater than
   * or equal to the specified value. The maximum date range is 365 days.
   */
  transactiondatefrom: string;

  /**
   * Filters results to any vendor transaction whose entry date is less than or equal
   * to the specified value. The maximum date range is 365 days.
   */
  transactiondateto: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to vendor transaction whose memo contains the specified value.
   * The memo cannot exceed 40 characters.
   */
  memo?: string;

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
   * Filters results to vendor transaction whose reference number contains the
   * specified value. The reference number cannot exceed 40 characters.
   */
  referencenumber?: string;

  /**
   * Filters results to any vendor transaction whose vendor transaction type matches
   * the specified status. If no type is specified, vendor transactions with any type
   * will be returned.
   */
  transactiontypes?: Array<
    | 'Bill'
    | 'Check'
    | 'Charge'
    | 'Payment'
    | 'Credit'
    | 'Refund'
    | 'ApplyDeposit'
    | 'ElectronicFundsTransfer'
    | 'Other'
    | 'Deposit'
    | 'GeneralJournalEntry'
    | 'OwnerContribution'
    | 'ReversePayment'
    | 'ReverseElectronicFundsTransfer'
    | 'VendorCredit'
    | 'RentalApplicationFeePayment'
    | 'ReverseRentalApplicationFeePayment'
    | 'ReverseOwnerContribution'
    | 'VendorRefund'
    | 'UnreversedPayment'
    | 'UnreversedElectronicFundsTransfer'
    | 'UnreversedOwnerContribution'
    | 'UnreversedRentalApplicationFeePayment'
    | 'ReversedEftRefund'
  >;
}

Vendors.Credits = Credits;
Vendors.Notes = Notes;
Vendors.Refunds = Refunds;
Vendors.Categories = Categories;

export declare namespace Vendors {
  export {
    type Vendor as Vendor,
    type VendorInsuranceSave as VendorInsuranceSave,
    type VendorListResponse as VendorListResponse,
    type VendorListTransactionsResponse as VendorListTransactionsResponse,
    type VendorCreateParams as VendorCreateParams,
    type VendorUpdateParams as VendorUpdateParams,
    type VendorListParams as VendorListParams,
    type VendorListTransactionsParams as VendorListTransactionsParams,
  };

  export {
    Credits as Credits,
    type VendorCredit as VendorCredit,
    type CreditCreateParams as CreditCreateParams,
    type CreditRetrieveParams as CreditRetrieveParams,
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
    Refunds as Refunds,
    type VendorRefund as VendorRefund,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };

  export {
    Categories as Categories,
    type VendorCategory as VendorCategory,
    type VendorCategorySave as VendorCategorySave,
    type CategoryListResponse as CategoryListResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
  };
}
