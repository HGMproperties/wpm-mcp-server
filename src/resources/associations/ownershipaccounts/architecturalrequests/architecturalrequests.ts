// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FilesAPI from './files';
import {
  AssociationArchitecturalRequestFile,
  FileDownloadrequestsParams,
  FileListParams,
  FileName,
  FileRetrieveParams,
  FileUploadTicket,
  FileUploadrequestsParams,
  Files,
} from './files';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Architecturalrequests extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Creates an architectural request
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   * `Edit`
   *
   * <span class="permissionBlock">Associations > Architectural requests</span> -
   * `View` `Edit`
   *
   * <span class="permissionBlock">Associations > Association owners and
   * tenants</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationArchitecturalRequest =
   *   await client.associations.ownershipaccounts.architecturalrequests.create(
   *     {
   *       AssociationId: 0,
   *       Name: 'x',
   *       OwnershipAccountId: 0,
   *       SubmittedDateTime: '2019-12-27T18:11:19.117Z',
   *     },
   *   );
   * ```
   */
  create(
    body: ArchitecturalrequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationArchitecturalRequest> {
    return this._client.post('/v1/associations/ownershipaccounts/architecturalrequests', {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a specific architectural request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   *
   * <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * <span class="permissionBlock">Associations > Architectural requests</span> - `View`
   *
   * @example
   * ```ts
   * const associationArchitecturalRequest =
   *   await client.associations.ownershipaccounts.architecturalrequests.retrieve(
   *     0,
   *   );
   * ```
   */
  retrieve(
    architecturalRequestID: number,
    options?: RequestOptions,
  ): APIPromise<AssociationArchitecturalRequest> {
    return this._client.get(
      path`/v1/associations/ownershipaccounts/architecturalrequests/${architecturalRequestID}`,
      options,
    );
  }

  /**
   * Retrieves all architectural requests.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   *
   * <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * <span class="permissionBlock">Associations > Architectural requests</span> - `View`
   *
   * @example
   * ```ts
   * const associationArchitecturalRequests =
   *   await client.associations.ownershipaccounts.architecturalrequests.list();
   * ```
   */
  list(
    query: ArchitecturalrequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArchitecturalrequestListResponse> {
    return this._client.get('/v1/associations/ownershipaccounts/architecturalrequests', {
      query,
      ...options,
    });
  }
}

export interface AssociationArchitecturalRequest {
  /**
   * Association unique identifier.
   */
  AssociationId?: number;

  /**
   * User who created the architectural request.
   */
  CreatedByUser?: CreatedByUser | null;

  /**
   * Date and time the architectural request was created.
   */
  CreatedDateTime?: string;

  /**
   * Decision of the architectural request.
   */
  Decision?: 'Pending' | 'Approved' | 'Denied';

  /**
   * Architectural request unique identifier.
   */
  Id?: number;

  /**
   * Last updated details.
   */
  LastUpdatedByUser?: LastUpdatedByUser | null;

  /**
   * Date and time the architectural request was last updated.
   */
  LastUpdatedDateTime?: string;

  /**
   * Architectural request name.
   */
  Name?: string | null;

  /**
   * Ownership account unique identifier.
   */
  OwnershipAccountId?: number;

  /**
   * Status of the architectural request.
   */
  Status?: 'New' | 'InProgress' | 'Completed';

  /**
   * Date and time the architectural request was submitted.
   */
  SubmittedDateTime?: string;
}

export interface CreatedByUser {
  /**
   * First name of the user.
   */
  FirstName?: string | null;

  /**
   * A link to the user resource.
   */
  Href?: string | null;

  /**
   * User unique identifier.
   */
  Id?: number;

  /**
   * Last name of the user.
   */
  LastName?: string | null;
}

/**
 * Last updated details.
 */
export interface LastUpdatedByUser {
  /**
   * User first name.
   */
  FirstName?: string | null;

  /**
   * A link to the user resource.
   */
  Href?: string | null;

  /**
   * User unique identifier.
   */
  Id?: number;

  /**
   * User last name.
   */
  LastName?: string | null;

  /**
   * The date and time the note was last updated.
   */
  UpdatedDateTime?: string | null;
}

export type ArchitecturalrequestListResponse = Array<AssociationArchitecturalRequest>;

export interface ArchitecturalrequestCreateParams {
  /**
   * The ID of the association to tie the architectural request to.
   */
  AssociationId: number;

  /**
   * The name of the architectural request. Must be 30 characters or less.
   */
  Name: string;

  /**
   * The ID of the ownership account to tie the architectural request to.
   */
  OwnershipAccountId: number;

  /**
   * The date and time the architectural request was submitted. Must not be in the
   * future.
   */
  SubmittedDateTime: string;

  /**
   * The decision of the architectural request. If no value is submitted the Decision
   * will be set to "Pending".
   */
  Decision?: 'Pending' | 'Approved' | 'Denied' | null;

  /**
   * The status of the architectural request. If no value is submitted the Status
   * will be set to "New".
   */
  Status?: 'New' | 'InProgress' | 'Completed' | null;
}

export interface ArchitecturalrequestListParams {
  /**
   * Filters results to only records that belong to the specified set of association
   * identifiers.
   */
  associationids?: Array<number>;

  /**
   * Filters results to only records that were created after this date. Must be
   * formatted as `YYYY-MM-DDTHH:MM:SSZ`.
   */
  createddatetimefrom?: string;

  /**
   * Filters results to only records that were created before this date. Must be
   * formatted as `YYYY-MM-DDTHH:MM:SSZ`.
   */
  createddatetimeto?: string;

  /**
   * Filters results to only records whose decision is equal to the specified value.
   */
  decisions?: Array<'Pending' | 'Approved' | 'Denied'>;

  /**
   * Filters results to only records that belong to the specified set of
   * architectural request identifiers.
   */
  ids?: Array<number>;

  /**
   * Filters results to only records that were updated on or after the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to only records that were updated on or before the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
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
   * Filters results to only records that belong to the specified set of ownership
   * account identifiers.
   */
  ownershipaccountids?: Array<number>;

  /**
   * Filters results to only records whose status is equal to the specified value.
   */
  statuses?: Array<'New' | 'InProgress' | 'Completed'>;

  /**
   * Filters results to only records that were submitted on or after the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  submitteddatetimefrom?: string;

  /**
   * Filters results to only records that were submitted on or before the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  submitteddatetimeto?: string;
}

Architecturalrequests.Files = Files;

export declare namespace Architecturalrequests {
  export {
    type AssociationArchitecturalRequest as AssociationArchitecturalRequest,
    type CreatedByUser as CreatedByUser,
    type LastUpdatedByUser as LastUpdatedByUser,
    type ArchitecturalrequestListResponse as ArchitecturalrequestListResponse,
    type ArchitecturalrequestCreateParams as ArchitecturalrequestCreateParams,
    type ArchitecturalrequestListParams as ArchitecturalrequestListParams,
  };

  export {
    Files as Files,
    type AssociationArchitecturalRequestFile as AssociationArchitecturalRequestFile,
    type FileName as FileName,
    type FileUploadTicket as FileUploadTicket,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDownloadrequestsParams as FileDownloadrequestsParams,
    type FileUploadrequestsParams as FileUploadrequestsParams,
  };
}
