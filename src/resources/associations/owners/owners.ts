// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from '../../users';
import * as AssociationsAPI from '../associations';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import * as UnitsAPI from './units';
import {
  AssociationOwnerUnitOccupancyStatus,
  UnitListParams,
  UnitListResponse,
  UnitRetrieveParams,
  UnitUpdateParams,
  Units,
} from './units';
import * as OwnershipaccountsAPI from '../ownershipaccounts/ownershipaccounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Owners extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);

  /**
   * Creates an association owner.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   * `Edit`
   *
   * @example
   * ```ts
   * const associationOwner =
   *   await client.associations.owners.create({
   *     FirstName: 'x',
   *     IsOwnerOccupied: true,
   *     LastName: 'x',
   *     OwnershipAccountId: 0,
   *     PrimaryAddress: {
   *       AddressLine1: 'x',
   *       Country: 'Afghanistan',
   *       PostalCode: 'x',
   *     },
   *     SendWelcomeEmail: true,
   *   });
   * ```
   */
  create(body: OwnerCreateParams, options?: RequestOptions): APIPromise<AssociationOwner> {
    return this._client.post('/v1/associations/owners', { body, ...options });
  }

  /**
   * Retrieve a specific association owner.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * @example
   * ```ts
   * const associationOwner =
   *   await client.associations.owners.retrieve(0);
   * ```
   */
  retrieve(ownerID: number, options?: RequestOptions): APIPromise<AssociationOwner> {
    return this._client.get(path`/v1/associations/owners/${ownerID}`, options);
  }

  /**
   * Updates an existing association owner.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationOwner =
   *   await client.associations.owners.update(0, {
   *     FirstName: 'x',
   *     LastName: 'x',
   *     PrimaryAddress: {
   *       AddressLine1: 'x',
   *       Country: 'Afghanistan',
   *       PostalCode: 'x',
   *     },
   *   });
   * ```
   */
  update(ownerID: number, body: OwnerUpdateParams, options?: RequestOptions): APIPromise<AssociationOwner> {
    return this._client.put(path`/v1/associations/owners/${ownerID}`, { body, ...options });
  }

  /**
   * Retrieves a list of association owners.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * @example
   * ```ts
   * const associationOwners =
   *   await client.associations.owners.list();
   * ```
   */
  list(
    query: OwnerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OwnerListResponse> {
    return this._client.get('/v1/associations/owners', { query, ...options });
  }
}

/**
 * This object represents an owner of a unit(s) that exists within a home owner
 * association.
 */
export interface AssociationOwner {
  /**
   * Address.
   */
  AlternateAddress?: AssociationsAPI.Address | null;

  /**
   * Alternate email.
   */
  AlternateEmail?: string | null;

  /**
   * List of Board Member Terms for the given Association Owner(s)
   */
  BoardMemberTerms?: Array<AssociationOwner.BoardMemberTerm> | null;

  /**
   * General comments.
   */
  Comment?: string | null;

  /**
   * Date and time the association owner was created.
   */
  CreatedDateTime?: string;

  /**
   * Indicates the delinquency status of the association owner.
   */
  DelinquencyStatus?: 'NoDelinquency' | 'InCollections' | 'InForeclosure' | 'Foreclosed';

  /**
   * Email.
   */
  Email?: string | null;

  /**
   * This is an object that represents an emergency contact.
   */
  EmergencyContact?: EmergencyContact | null;

  /**
   * First name.
   */
  FirstName?: string | null;

  /**
   * Unique identifier.
   */
  Id?: number;

  /**
   * Last name.
   */
  LastName?: string | null;

  /**
   * Indicates the association owner's mailing preference.
   */
  MailingPreference?: 'PrimaryAddress' | 'AlternateAddress';

  /**
   * Indicates if the association owner occupies a unit(s) within the association.
   */
  OccupiesUnit?: boolean;

  /**
   * List of associated ownership accounts.
   */
  OwnershipAccounts?: Array<OwnershipaccountsAPI.AssociationOwnershipAccount> | null;

  /**
   * List of phone numbers of the association user.
   */
  PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

  /**
   * Address.
   */
  PrimaryAddress?: AssociationsAPI.Address | null;

  /**
   * Taxpayer identification number. Examples of United States identification numbers
   * are Social Security number or a Employer Identification Number.
   */
  TaxId?: string | null;

  /**
   * List of vehicles associated with the association owner.
   */
  Vehicles?: Array<AssociationOwner.Vehicle> | null;
}

export namespace AssociationOwner {
  /**
   * Board member term.
   */
  export interface BoardMemberTerm {
    /**
     * Association unique identifier.
     */
    AssociationId?: number;

    /**
     * Indicates the board position held by the association owner.
     */
    BoardPositionType?: 'President' | 'VicePresident' | 'Treasurer' | 'Secretary' | 'BoardMember';

    /**
     * Date and time the board member position was created.
     */
    CreatedDateTime?: string | null;

    /**
     * End date of the board member term.
     */
    EndDate?: string | null;

    /**
     * Board term unique identifier.
     */
    Id?: number;

    /**
     * Start date of the board member term.
     */
    StartDate?: string | null;
  }

  /**
   * This is an object that represents a vehicle.
   */
  export interface Vehicle {
    /**
     * License plate number of the vehicle.
     */
    LicensePlateNumber?: string | null;

    /**
     * Make of the vehicle.
     */
    Make?: string | null;

    /**
     * Model of the vehicle.
     */
    Model?: string | null;

    /**
     * Parking pass number assigned to the vehicle.
     */
    ParkingPassNumber?: string | null;
  }
}

/**
 * Board member term.
 */
export interface AssociationOwnerBoardTerm {
  /**
   * Indicates the board position held by the association owner.
   */
  BoardPositionType: 'President' | 'VicePresident' | 'Treasurer' | 'Secretary' | 'BoardMember';

  /**
   * End date of the board member term. Must be formatted as `YYYY-MM-DD`.
   */
  EndDate?: string | null;

  /**
   * Start date of the board member term. Must be formatted as `YYYY-MM-DD`.
   */
  StartDate?: string | null;
}

/**
 * This is an object that represents an emergency contact.
 */
export interface EmergencyContact {
  /**
   * Emergency contact email address.
   */
  Email?: string | null;

  /**
   * Emergency contact name
   */
  Name?: string | null;

  /**
   * Emergency contact phone number
   */
  Phone?: string | null;

  /**
   * Emergency contact relationship to the person.
   */
  RelationshipDescription?: string | null;
}

/**
 * Phone numbers.
 */
export interface PhoneNumbers {
  /**
   * Fax number. If provided, must be between 10 and 20 characters, ideally formatted
   * as `(123) 123-1234`.
   */
  Fax?: string | null;

  /**
   * Home phone number. If provided, must be between 10 and 20 characters, ideally
   * formatted as `(123) 123-1234`.
   */
  Home?: string | null;

  /**
   * Mobile phone number. If provided, must be between 10 and 20 characters, ideally
   * formatted as `(123) 123-1234`.
   */
  Mobile?: string | null;

  /**
   * Work phone number. If provided, must be between 10 and 20 characters, ideally
   * formatted as `(123) 123-1234`.
   */
  Work?: string | null;
}

export interface SaveEmergencyContact {
  /**
   * Emergency contact email address.
   */
  Email?: string | null;

  /**
   * This is an object that represents an emergency contact.
   */
  Name?: string | null;

  /**
   * Emergency contact phone number
   */
  Phone?: string | null;

  /**
   * Emergency contact relationship to the person.
   */
  RelationshipDescription?: string | null;
}

export type OwnerListResponse = Array<AssociationOwner>;

export interface OwnerCreateParams {
  /**
   * First name of the owner. The value can not exceed 127 characters.
   */
  FirstName: string;

  /**
   * Indicates if the association owner occupies a unit(s) within the association.
   */
  IsOwnerOccupied: boolean;

  /**
   * Last name of the owner. The value can not exceed 127 characters.
   */
  LastName: string;

  /**
   * Ownership account Id for the owner.
   */
  OwnershipAccountId: number;

  /**
   * Address.
   */
  PrimaryAddress: AssociationsAPI.SaveAddress;

  /**
   * Send a welcome email to any homeowner at the association
   */
  SendWelcomeEmail: boolean;

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
  BoardMemberTerm?: AssociationOwnerBoardTerm | null;

  /**
   * Comments about the owner. The value can not exceed 65,535 characters.
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
   * Emergency Contact information associated with the owner.
   */
  EmergencyContact?: SaveEmergencyContact | null;

  /**
   * Mailing preferences for the owner. If an alternate address exists and this value
   * is not provided then the primary address will be set as the preferred address.
   */
  MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: PhoneNumbers | null;

  /**
   * Taxpayer identification number of the owner. Examples of United States
   * identification numbers are Social Security number or a Employer Identification
   * Number. Valid formats are: `12-1234567`, `123-12-1234`, `123456789`.
   */
  TaxId?: string | null;
}

export interface OwnerUpdateParams {
  /**
   * First name of the owner. The value cannot exceed 127 characters.
   */
  FirstName: string;

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
   * Alternate email of the owner.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the owner. The value cannot exceed 65,535 characters.
   */
  Comment?: string | null;

  /**
   * Email of the owner.
   */
  Email?: string | null;

  /**
   * Emergency contact information associated with the owner.
   */
  EmergencyContact?: SaveEmergencyContact | null;

  /**
   * Mailing preferences for the owner. If an alternate address exists and this value
   * is not provided then the primary address will be set as the preferred address.
   */
  MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: PhoneNumbers | null;

  /**
   * Taxpayer identification number of the owner. Examples of United States
   * identification numbers are Social Security number or a Employer Identification
   * Number. Valid formats are: `12-1234567`, `123-12-1234`, `123456789`.
   */
  TaxId?: string | null;
}

export interface OwnerListParams {
  /**
   * Filters results to only records that belong to the specified set of association
   * identifiers.
   */
  associationids?: Array<number>;

  /**
   * Filters results to only records that were created after this date. Must be
   * formatted as `YYYY-MM-DD`.
   */
  createddatetimefrom?: string;

  /**
   * Filters results to only records that were created before this date. Must be
   * formatted as `YYYY-MM-DD`.
   */
  createddatetimeto?: string;

  /**
   * Filters results to only records whose email _contains_ the specified value.
   */
  email?: string;

  /**
   * Filters results to any association owners that were updated on or after the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any association owners that were updated on or before the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to only records whose name _contains_ the specified value.
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
   * Filters results to only records whose phone number _contains_ the specified
   * value.
   */
  phone?: string;

  /**
   * Filters results to only records whose status is equal to the specified value.
   */
  statuses?: Array<'Active' | 'Past' | 'Future'>;
}

Owners.Notes = Notes;
Owners.Units = Units;

export declare namespace Owners {
  export {
    type AssociationOwner as AssociationOwner,
    type AssociationOwnerBoardTerm as AssociationOwnerBoardTerm,
    type EmergencyContact as EmergencyContact,
    type PhoneNumbers as PhoneNumbers,
    type SaveEmergencyContact as SaveEmergencyContact,
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

  export {
    Units as Units,
    type AssociationOwnerUnitOccupancyStatus as AssociationOwnerUnitOccupancyStatus,
    type UnitListResponse as UnitListResponse,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };
}
