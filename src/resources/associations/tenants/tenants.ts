// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from '../../users';
import * as AssociationsAPI from '../associations';
import * as OwnersAPI from '../owners/owners';
import * as OwnershipaccountsAPI from '../ownershipaccounts/ownershipaccounts';
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

export class Tenants extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);

  /**
   * Creates an association tenant.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationTenant =
   *   await client.associations.tenants.create({
   *     FirstName: 'x',
   *     LastName: 'x',
   *     OwnershipAccountId: 0,
   *     PrimaryAddress: {
   *       AddressLine1: 'x',
   *       Country: 'Afghanistan',
   *       PostalCode: 'x',
   *     },
   *   });
   * ```
   */
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<AssociationTenant> {
    return this._client.post('/v1/associations/tenants', { body, ...options });
  }

  /**
   * Retrieves a specific association tenant.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * @example
   * ```ts
   * const associationTenant =
   *   await client.associations.tenants.retrieve(0);
   * ```
   */
  retrieve(tenantID: number, options?: RequestOptions): APIPromise<AssociationTenant> {
    return this._client.get(path`/v1/associations/tenants/${tenantID}`, options);
  }

  /**
   * Updates an association tenant.
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
   * const associationTenant =
   *   await client.associations.tenants.update(0, {
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
  update(
    tenantID: number,
    body: TenantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationTenant> {
    return this._client.put(path`/v1/associations/tenants/${tenantID}`, { body, ...options });
  }

  /**
   * Retrieves a list of association tenants.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * @example
   * ```ts
   * const associationTenants =
   *   await client.associations.tenants.list();
   * ```
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResponse> {
    return this._client.get('/v1/associations/tenants', { query, ...options });
  }
}

/**
 * This object represents a home owner association tenant.
 */
export interface AssociationTenant {
  /**
   * Address.
   */
  AlternateAddress?: AssociationsAPI.Address | null;

  /**
   * Alternate email.
   */
  AlternateEmail?: string | null;

  /**
   * General comments.
   */
  Comment?: string | null;

  /**
   * Date and time the tenant was created.
   */
  CreatedDateTime?: string;

  /**
   * Email.
   */
  Email?: string | null;

  /**
   * This is an object that represents an emergency contact.
   */
  EmergencyContact?: OwnersAPI.EmergencyContact | null;

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
   * Move in date for the tenant.
   */
  MoveInDate?: string | null;

  /**
   * Move out date for the tenant.
   */
  MoveOutDate?: string | null;

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
}

export type TenantListResponse = Array<AssociationTenant>;

export interface TenantCreateParams {
  /**
   * First name of tenant. The value cannot exceed 127 characters.
   */
  FirstName: string;

  /**
   * Last name of tenant. The value cannot exceed 127 characters.
   */
  LastName: string;

  /**
   * Ownership account id for the tenant.
   */
  OwnershipAccountId: number;

  /**
   * Address.
   */
  PrimaryAddress: AssociationsAPI.SaveAddress;

  /**
   * Address.
   */
  AlternateAddress?: AssociationsAPI.SaveAddress | null;

  /**
   * Alternate email of tenant.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the tenant. The value cannot exceed 65,535 characters.
   */
  Comment?: string | null;

  /**
   * Date of birth for the tenant. Must be formatted as `YYYY-MM-DD`.
   */
  DateOfBirth?: string | null;

  /**
   * Email of tenant.
   */
  Email?: string | null;

  /**
   * Emergency contact information associated with the tenant.
   */
  EmergencyContact?: OwnersAPI.SaveEmergencyContact | null;

  /**
   * Move in date for the tenant. This date is not editable and can only be set when
   * creating the tenant. Must be formatted as `YYYY-MM-DD`.
   */
  MoveInDate?: string | null;

  /**
   * Move out date for the tenant. Must be formatted as `YYYY-MM-DD`.
   */
  MoveOutDate?: string | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: OwnersAPI.PhoneNumbers | null;
}

export interface TenantUpdateParams {
  /**
   * First name of tenant. The value cannot exceed 127 characters.
   */
  FirstName: string;

  /**
   * Last name of tenant. The value cannot exceed 127 characters.
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
   * Alternate email of tenant.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the tenant. The value cannot exceed 65,535 characters.
   */
  Comment?: string | null;

  /**
   * Date of birth for the tenant. Must be formatted as `YYYY-MM-DD`.
   */
  DateOfBirth?: string | null;

  /**
   * Email of tenant.
   */
  Email?: string | null;

  /**
   * Emergency contact information associated with the tenant.
   */
  EmergencyContact?: OwnersAPI.SaveEmergencyContact | null;

  /**
   * Move out date for the tenant. Must be formatted as `YYYY-MM-DD`.
   */
  MoveOutDate?: string | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: OwnersAPI.PhoneNumbers | null;
}

export interface TenantListParams {
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

Tenants.Notes = Notes;

export declare namespace Tenants {
  export {
    type AssociationTenant as AssociationTenant,
    type TenantListResponse as TenantListResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
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
