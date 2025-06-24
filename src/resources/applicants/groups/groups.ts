// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from '../../users';
import * as ApplicantsAPI from '../applicants';
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

export class Groups extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);

  /**
   * Creates an applicant group.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<ApplicantGroup> {
    return this._client.post('/v1/applicants/groups', { body, ...options });
  }

  /**
   * Retrieves an applicant group.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  retrieve(applicantGroupID: number, options?: RequestOptions): APIPromise<ApplicantGroup> {
    return this._client.get(path`/v1/applicants/groups/${applicantGroupID}`, options);
  }

  /**
   * Updates an applicant group.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`
   */
  update(
    applicantGroupID: number,
    body: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApplicantGroup> {
    return this._client.put(path`/v1/applicants/groups/${applicantGroupID}`, { body, ...options });
  }

  /**
   * Retrieves all applicant groups.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get('/v1/applicants/groups', { query, ...options });
  }
}

export interface ApplicantGroup {
  /**
   * A collection of applicants in the group.
   */
  Applicants?: Array<ApplicantGroup.Applicant> | null;

  /**
   * Indicates the current applicant group status. Note, this status is independent
   * from individual application statuses within the group.
   */
  ApplicationGroupStatus?:
    | 'Unknown'
    | 'Undecided'
    | 'Approved'
    | 'Rejected'
    | 'AddedToLease'
    | 'Cancelled'
    | 'Deferred'
    | 'New'
    | 'Draft'
    | 'AddedToDraftLease';

  /**
   * Applicant group unique identifier.
   */
  Id?: number;

  /**
   * Rental property unique identifier that the applicant group is associated with.
   */
  PropertyId?: number | null;

  /**
   * Rental property unit unique identifier that the applicant group is associated
   * with.
   */
  UnitId?: number | null;
}

export namespace ApplicantGroup {
  export interface Applicant {
    /**
     * Applicant group unique identifier.
     */
    ApplicantGroupId?: number | null;

    /**
     * A collection of applications associated with the applicant.
     */
    Applications?: Array<ApplicantsAPI.ApplicantApplication> | null;

    /**
     * Applicant email address.
     */
    Email?: string | null;

    /**
     * Applicant first name.
     */
    FirstName?: string | null;

    /**
     * Applicant unique identifier.
     */
    Id?: number;

    /**
     * Applicant last name.
     */
    LastName?: string | null;

    /**
     * Date and time the applicant was last updated.
     */
    LastUpdatedDateTime?: string | null;

    /**
     * Applicant phone numbers.
     */
    PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

    /**
     * Rental property unique identifier that the applicant is associated with.
     */
    PropertyId?: number | null;

    /**
     * Applicant status.
     */
    Status?:
      | 'Unknown'
      | 'Undecided'
      | 'Approved'
      | 'Rejected'
      | 'AddedToLease'
      | 'Cancelled'
      | 'Deferred'
      | 'New'
      | 'Draft'
      | 'AddedToDraftLease';

    /**
     * The rental tenant identifier associated with the applicant. This value will be
     * null if the applicant never transitioned into a tenant.
     */
    TenantId?: number | null;

    /**
     * Rental property unit unique identifier that the applicant is associated with.
     */
    UnitId?: number | null;
  }
}

export type GroupListResponse = Array<ApplicantGroup>;

export interface GroupCreateParams {
  /**
   * The applicant unique identifiers to include in the applicant group. Note, that
   * applicants can only be included in one applicant group.
   */
  ApplicantIds: Array<number>;

  /**
   * Rental property unit unique identifier to associate with the applicant group.
   */
  UnitId?: number | null;
}

export interface GroupUpdateParams {
  /**
   * Sets the status of the applicant group.
   */
  ApplicantGroupStatus: 'Undecided' | 'Approved' | 'Rejected' | 'Cancelled' | 'Deferred';

  /**
   * The applicant unique identifiers to include in the applicant group. Note, that
   * applicants can only be included in one applicant group.
   */
  ApplicantIds: Array<number>;

  /**
   * Rental property unit unique identifier to associate with the applicant group.
   */
  UnitId?: number | null;
}

export interface GroupListParams {
  /**
   * Filters results by the applicant group status. If no status is specified,
   * applicant groups in any status will be returned.
   */
  applicationgroupstatuses?: Array<
    | 'Undecided'
    | 'Approved'
    | 'Rejected'
    | 'AddedToLease'
    | 'Cancelled'
    | 'Deferred'
    | 'New'
    | 'Draft'
    | 'AddedToDraftLease'
  >;

  /**
   * Specifies the type of entity that `EntityId` refers to. This field is required
   * if `EntityId` is specified.
   */
  entityid?: number;

  /**
   * Filters results to any applicant groups associated with the specified entity
   * identifier. This filter is used in conjunction with the `EntityType` field which
   * must be set to the type of entity this identifier references.
   */
  entitytype?: 'Rental' | 'RentalOwner';

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to applicant groups that includes applicants whose name
   * _contains_ the specified value.
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
   * Filters results to applicant groups associated to any of the specified rental
   * property unit identifiers.
   */
  unitids?: Array<number>;
}

Groups.Notes = Notes;

export declare namespace Groups {
  export {
    type ApplicantGroup as ApplicantGroup,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
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
