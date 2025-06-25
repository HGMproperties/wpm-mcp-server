// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from '../../users';
import * as AssociationsAPI from '../../associations/associations';
import * as OwnersAPI from '../../associations/owners/owners';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Owners extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);

  /**
   * Creates a rental owner.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View` `Edit`
   */
  create(body: OwnerCreateParams, options?: RequestOptions): APIPromise<RentalOwner> {
    return this._client.post('/v1/rentals/owners', { body, ...options });
  }

  /**
   * Retrieves a specific rental owner.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`
   */
  retrieve(rentalOwnerID: number, options?: RequestOptions): APIPromise<RentalOwner> {
    return this._client.get(path`/v1/rentals/owners/${rentalOwnerID}`, options);
  }

  /**
   * Updates a rental owner.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View` `Edit`
   */
  update(rentalOwnerID: number, body: OwnerUpdateParams, options?: RequestOptions): APIPromise<RentalOwner> {
    return this._client.put(path`/v1/rentals/owners/${rentalOwnerID}`, { body, ...options });
  }

  /**
   * Retrieves a list of rental owners.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`
   */
  list(
    query: OwnerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OwnerListResponse> {
    return this._client.get('/v1/rentals/owners', { query, ...options });
  }
}

/**
 * This is an object that represents a rental property owner.
 */
export interface RentalOwner {
  /**
   * Address.
   */
  Address?: AssociationsAPI.Address | null;

  /**
   * Alternate email of the rental owner.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the rental owner.
   */
  Comment?: string | null;

  /**
   * Company name of the rental owner. Empty if `IsCompany` is `false`.
   */
  CompanyName?: string | null;

  /**
   * Email of the rental owner.
   */
  Email?: string | null;

  /**
   * First name of the rental owner. Empty if `IsCompany` is `true`.
   */
  FirstName?: string | null;

  /**
   * Rental property owner unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the rental owner is active within the Buildium platform.
   */
  IsActive?: boolean;

  /**
   * Indicates whether the rental owner is a company.
   */
  IsCompany?: boolean;

  /**
   * Last name of the rental owner. Empty if `IsCompany` is `true`.
   */
  LastName?: string | null;

  /**
   * End date of the management agreement with the rental owner. Null if value is not
   * set.
   */
  ManagementAgreementEndDate?: string | null;

  /**
   * Start date of the management agreement with the rental owner. Null if value is
   * not set.
   */
  ManagementAgreementStartDate?: string | null;

  /**
   * Phone numbers associated with the rental owner.
   */
  PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

  /**
   * A list of rental property ID's associated with this rental owner.
   */
  PropertyIds?: Array<number> | null;

  /**
   * Rental owner tax information.
   */
  TaxInformation?: RentalOwner.TaxInformation | null;
}

export namespace RentalOwner {
  /**
   * Rental owner tax information.
   */
  export interface TaxInformation {
    /**
     * Address.
     */
    Address?: AssociationsAPI.Address | null;

    /**
     * Indicates whether the rental owner should be included in 1099 form generation.
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
}

export type OwnerListResponse = Array<RentalOwner>;

export interface OwnerCreateParams {
  /**
   * Address.
   */
  Address: AssociationsAPI.SaveAddress;

  /**
   * Indicates whether the rental owner should be considered a company or person.
   */
  IsCompany: boolean;

  /**
   * A list of rental property ID's to associate with this rental owner. At least one
   * property ID must be provided.
   */
  PropertyIds: Array<number>;

  /**
   * Alternate email of the rental owner.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the rental owner. The comments cannot exceed 65,535 characters.
   */
  Comment?: string | null;

  /**
   * Company name of the rental owner. Required if `IsCompany` is `true`. The value
   * cannot exceed 127 characters.
   */
  CompanyName?: string | null;

  /**
   * Date of birth of the rental owner. Must be formatted as `YYYY-MM-DD`.
   */
  DateOfBirth?: string | null;

  /**
   * Email of the rental owner.
   */
  Email?: string | null;

  /**
   * First name of the rental owner. Required if `IsCompany` is `false`. The value
   * cannot exceed 127 characters.
   */
  FirstName?: string | null;

  /**
   * Last name of the rental owner. Required if `IsCompany` is `false`. The value
   * cannot exceed 127 characters.
   */
  LastName?: string | null;

  /**
   * End date of the management agreement with the rental owner. Must be formatted as
   * `YYYY-MM-DD`.
   */
  ManagementAgreementEndDate?: string | null;

  /**
   * Start date of the management agreement with the rental owner. Must be formatted
   * as `YYYY-MM-DD`.
   */
  ManagementAgreementStartDate?: string | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: OwnersAPI.PhoneNumbers | null;

  /**
   * Tax information.
   */
  TaxInformation?: AssociationsAPI.TaxInformation | null;
}

export interface OwnerUpdateParams {
  /**
   * Address.
   */
  Address: AssociationsAPI.SaveAddress;

  /**
   * Indicates whether the rental owner should be considered a company or person.
   */
  IsCompany: boolean;

  /**
   * A list of rental property ID's to associate with this rental owner. At least one
   * property ID must be provided.
   */
  PropertyIds: Array<number>;

  /**
   * Alternate email of the rental owner.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the rental owner. The comments cannot exceed 65,535 characters.
   */
  Comment?: string | null;

  /**
   * Company name of the rental owner. Required if `IsCompany` is `true`. The value
   * cannot exceed 127 characters.
   */
  CompanyName?: string | null;

  /**
   * Date of birth of the rental owner. Must be formatted as `YYYY-MM-DD`.
   */
  DateOfBirth?: string | null;

  /**
   * Email of the rental owner.
   */
  Email?: string | null;

  /**
   * First name of the rental owner. Required if `IsCompany` is `false`. The value
   * cannot exceed 127 characters.
   */
  FirstName?: string | null;

  /**
   * Last name of the rental owner. Required if `IsCompany` is `false`. The value
   * cannot exceed 127 characters.
   */
  LastName?: string | null;

  /**
   * End date of the management agreement with the rental owner. Must be formatted as
   * `YYYY-MM-DD`.
   */
  ManagementAgreementEndDate?: string | null;

  /**
   * Start date of the management agreement with the rental owner. Must be formatted
   * as `YYYY-MM-DD`.
   */
  ManagementAgreementStartDate?: string | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: OwnersAPI.PhoneNumbers | null;
}

export interface OwnerListParams {
  /**
   * Filters results by the days remaining on their lease agreement.
   */
  agreementdaysremaining?: number;

  /**
   * Filters results to any rental owners that were updated on or after the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any rental owners that were updated on or before the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
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
   * Filters results to any owner whose name _contains_ the specified value.
   */
  ownername?: string;

  /**
   * Filters results to any owner who has a phone number that _contains_ the
   * specified value.
   */
  phone?: string;

  /**
   * Filters results to any lease whose unit belongs to the specified set of property
   * ids.
   */
  propertyids?: Array<number>;

  /**
   * Filters results by the status of the user. If no status is specified both
   * `active` and `inactive` users will be returned.
   */
  status?: 'Inactive' | 'Active';
}

Owners.Notes = Notes;

export declare namespace Owners {
  export {
    type RentalOwner as RentalOwner,
    type OwnerListResponse as OwnerListResponse,
    type OwnerCreateParams as OwnerCreateParams,
    type OwnerUpdateParams as OwnerUpdateParams,
    type OwnerListParams as OwnerListParams,
  };

  export {
    Notes as Notes,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };
}
