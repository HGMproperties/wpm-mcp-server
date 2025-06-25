// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from '../users';
import * as ApplicationsAPI from './applications';
import {
  Application,
  ApplicationListParams,
  ApplicationListResponse,
  ApplicationRetrieveParams,
  ApplicationUpdateParams,
  Applications,
} from './applications';
import * as NotesAPI from './notes';
import { NoteCreateParams, NoteListParams, NoteListResponse, NoteRetrieveParams, Notes } from './notes';
import * as GroupsAPI from './groups/groups';
import {
  ApplicantGroup,
  GroupCreateParams,
  GroupListParams,
  GroupListResponse,
  GroupUpdateParams,
  Groups,
} from './groups/groups';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Applicants extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);

  /**
   * Creates an applicant.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`
   */
  create(body: ApplicantCreateParams, options?: RequestOptions): APIPromise<ApplicantDetails> {
    return this._client.post('/v1/applicants', { body, ...options });
  }

  /**
   * Retrieves an applicant.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  retrieve(applicantID: number, options?: RequestOptions): APIPromise<ApplicantDetails> {
    return this._client.get(path`/v1/applicants/${applicantID}`, options);
  }

  /**
   * Updates an applicant.
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
    applicantID: number,
    body: ApplicantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApplicantDetails> {
    return this._client.put(path`/v1/applicants/${applicantID}`, { body, ...options });
  }

  /**
   * Retrieves all applicants.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  list(
    query: ApplicantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApplicantListResponse> {
    return this._client.get('/v1/applicants', { query, ...options });
  }
}

export interface ApplicantApplication {
  /**
   * An alpha numeric value that can be used to uniquely identify the application.
   * This is typically provided to an applicant to use as a reference when making
   * inquiries about their application.
   */
  ApplicationNumber?: string | null;

  /**
   * Indicates the current application status.
   */
  ApplicationStatus?:
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
   * Date and time the application was submitted.
   */
  ApplicationSubmittedDateTime?: string;

  /**
   * Rental application unique identifier.
   */
  Id?: number;
}

export interface ApplicantDetails {
  /**
   * Applicant group unique identifier.
   */
  ApplicantGroupId?: number | null;

  /**
   * A collection of applications associated with the applicant.
   */
  Applications?: Array<ApplicantApplication> | null;

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

  /**
   * A collection of unsubmitted applications associated with the applicant.
   */
  UnsubmittedApplications?: Array<ApplicantDetails.UnsubmittedApplication> | null;
}

export namespace ApplicantDetails {
  /**
   * This object represents an unsubmitted application
   */
  export interface UnsubmittedApplication {
    /**
     * The unsubmitted application unique identifier
     */
    Id?: number;
  }
}

export type ApplicantListResponse = Array<ApplicantDetails>;

export interface ApplicantCreateParams {
  /**
   * The first name of the applicant. The value can not exceed 127 characters.
   */
  FirstName: string;

  /**
   * The last name of the applicant. The value can not exceed 127 characters.
   */
  LastName: string;

  /**
   * Indicates whether to send the applicant an email with a link to the online
   * rental application form.
   */
  SendRentalApplicationEmail: boolean;

  /**
   * The email address of the applicant.
   */
  Email?: string | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: ApplicantCreateParams.PhoneNumbers | null;

  /**
   * The rental property unit unique identifier to associate with the applicant.
   */
  UnitId?: number | null;
}

export namespace ApplicantCreateParams {
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
}

export interface ApplicantUpdateParams {
  /**
   * The first name of the applicant. The value can not exceed 127 characters.
   */
  FirstName: string;

  /**
   * The last name of the applicant. The value can not exceed 127 characters.
   */
  LastName: string;

  /**
   * The email address of the applicant.
   */
  Email?: string | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: ApplicantUpdateParams.PhoneNumbers | null;

  /**
   * The rental property unit unique identifier to associate with the applicant.
   */
  UnitId?: number | null;
}

export namespace ApplicantUpdateParams {
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
}

export interface ApplicantListParams {
  /**
   * Filters results by the applicant application status. If no status is specified,
   * applicants with an application in any status will be returned.
   */
  applicationstatuses?: Array<
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
   * Filters results to any applicant who submitted an application on or prior to the
   * date specified.
   */
  applicationsubmittedenddate?: string;

  /**
   * Filters results to any applicant who submitted an application on or after the
   * date specified.
   */
  applicationsubmittedstartdate?: string;

  /**
   * Filters results to applicants whose email _contains_ the specified value
   */
  email?: string;

  /**
   * Filters results to any applicant associated with the specified entity
   * identifier. This filter is used in conjunction with the `EntityType` field which
   * must be set to the type of entity this identifier references.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that `EntityId` refers to. This field is required
   * if `EntityId` is specified.
   */
  entitytype?: 'Rental' | 'RentalOwner';

  /**
   * Filters results to any applicants that were updated on or after the specified
   * date and time. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any applicants that were updated on or before the specified
   * date and time. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to applicants whose name _contains_ the specified value.
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
   * Filters results to applicants associated to any of the specified rental property
   * unit identifiers.
   */
  unitids?: Array<number>;
}

Applicants.Applications = Applications;
Applicants.Notes = Notes;
Applicants.Groups = Groups;

export declare namespace Applicants {
  export {
    type ApplicantApplication as ApplicantApplication,
    type ApplicantDetails as ApplicantDetails,
    type ApplicantListResponse as ApplicantListResponse,
    type ApplicantCreateParams as ApplicantCreateParams,
    type ApplicantUpdateParams as ApplicantUpdateParams,
    type ApplicantListParams as ApplicantListParams,
  };

  export {
    Applications as Applications,
    type Application as Application,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationRetrieveParams as ApplicationRetrieveParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
  };

  export {
    Notes as Notes,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteListParams as NoteListParams,
  };

  export {
    Groups as Groups,
    type ApplicantGroup as ApplicantGroup,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };
}
