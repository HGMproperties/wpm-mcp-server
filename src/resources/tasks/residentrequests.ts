// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnnouncementsAPI from '../communications/announcements';
import * as JournalentriesAPI from '../generalledger/journalentries';
import * as TasksAPI from './tasks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Residentrequests extends APIResource {
  /**
   * Creates a resident request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`
   */
  create(body: ResidentrequestCreateParams, options?: RequestOptions): APIPromise<ResidentRequestTask> {
    return this._client.post('/v1/tasks/residentrequests', { body, ...options });
  }

  /**
   * Retrieves a specific resident request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  retrieve(residentRequestTaskID: number, options?: RequestOptions): APIPromise<ResidentRequestTask> {
    return this._client.get(path`/v1/tasks/residentrequests/${residentRequestTaskID}`, options);
  }

  /**
   * Update a resident request.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`
   */
  update(
    residentRequestTaskID: number,
    body: ResidentrequestUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResidentRequestTask> {
    return this._client.put(path`/v1/tasks/residentrequests/${residentRequestTaskID}`, { body, ...options });
  }

  /**
   * Retrieves a list of resident requests.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  list(
    query: ResidentrequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResidentrequestListResponse> {
    return this._client.get('/v1/tasks/residentrequests', { query, ...options });
  }
}

export interface ResidentRequestTask {
  /**
   * Appliance information.
   */
  Appliance?: ResidentRequestTask.Appliance | null;

  /**
   * The unique identifier of the staff user assigned to the request.
   */
  AssignedToUserId?: number | null;

  /**
   * Task category.
   */
  Category?: TasksAPI.TaskCategoryResponse | null;

  /**
   * The date and time the request was created.
   */
  CreatedDateTime?: string;

  /**
   * Request description.
   */
  Description?: string | null;

  /**
   * Indicates whether the resident has pets. A null value represents no response was
   * provided from the resident.
   */
  DoesResidentHavePets?: boolean | null;

  /**
   * Request due date.
   */
  DueDate?: string | null;

  /**
   * Request unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the resident has permitted entry. A null value represents no
   * response was provided from the resident.
   */
  IsEntryPermittedByResident?: boolean | null;

  /**
   * The date and time the request was last updated.
   */
  LastUpdatedDateTime?: string | null;

  /**
   * Request priority.
   */
  Priority?: 'Low' | 'Normal' | 'High';

  /**
   * Property information.
   */
  Property?: AnnouncementsAPI.PropertyMessage | null;

  /**
   * Entity information for the user that submitted the task request.
   */
  RequestedByUserEntity?: TasksAPI.RequestedByUserEntity | null;

  /**
   * Notes provided by the resident specific to entering the premises.
   */
  ResidentEntryNotes?: string | null;

  /**
   * Request status.
   */
  TaskStatus?: 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed';

  /**
   * Request title.
   */
  Title?: string | null;

  /**
   * Unit agreement.
   */
  UnitAgreement?: JournalentriesAPI.UnitAgreement | null;

  /**
   * The unit unique identifier associated with the request.
   */
  UnitId?: number;
}

export namespace ResidentRequestTask {
  /**
   * Appliance information.
   */
  export interface Appliance {
    /**
     * Description of the appliance.
     */
    Description?: string | null;

    /**
     * Unique identifier of the appliance.
     */
    Id?: number;

    /**
     * Make of the appliance.
     */
    Make?: string | null;

    /**
     * Model of the appliance.
     */
    Model?: string | null;

    /**
     * Name of the appliance.
     */
    Name?: string | null;
  }
}

export type ResidentrequestListResponse = Array<ResidentRequestTask>;

export interface ResidentrequestCreateParams {
  /**
   * Request priority.
   */
  Priority: 'Low' | 'Normal' | 'High';

  /**
   * The unique identifier of the resident that submitted the request.
   */
  RequestedByEntityId: number;

  /**
   * Request status.
   */
  TaskStatus: 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed';

  /**
   * Request title. The title can not exceed 127 characters.
   */
  Title: string;

  /**
   * The unique identifier of the unit agreement associated with the request.
   */
  UnitAgreementId: number;

  /**
   * The unique identifier of the staff user assigned to the request. The user must
   * be a `Staff` user type. If not provided, assignment rules in the resident center
   * settings (if configured) will be used for assignment.
   */
  AssignedToUserId?: number | null;

  /**
   * The category identifier to assign the request.
   */
  CategoryId?: number | null;

  /**
   * Request description. The description can not exceed 65500 characters.
   */
  Description?: string | null;

  /**
   * Indicates whether the resident has pets. Set this value to null if the resident
   * has not provided a response.
   */
  DoesResidentHavePets?: boolean | null;

  /**
   * Request due date. The date must be formatted as YYYY-MM-DD.
   */
  DueDate?: string | null;

  /**
   * Indicates whether the resident has explicitly granted permission to enter the
   * unit. Set this value to null if the resident has not provided a response.
   */
  IsEntryPermittedByResident?: boolean | null;

  /**
   * Notes provided by the resident specific to entering the premises. The value
   * cannot exceed 65535 characters.
   */
  ResidentEntryNotes?: string | null;

  /**
   * Indicates whether the request is shared with board members (applies to requests
   * for associations only). Defaults to False if not set or for rental requests.
   */
  ShareWithBoardMembers?: boolean | null;

  /**
   * Indicates whether the request is shared with rental owners (applies to requests
   * for rentals only). Defaults to False if not set or for association requests.
   */
  ShareWithRentalOwners?: boolean | null;

  /**
   * The subcategory identifier to assign the request.
   */
  SubCategoryId?: number | null;
}

export interface ResidentrequestUpdateParams {
  /**
   * Request priority.
   */
  Priority: 'Low' | 'Normal' | 'High';

  /**
   * Request status.
   */
  TaskStatus: 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed';

  /**
   * Request title. The title can not exceed 127 characters.
   */
  Title: string;

  /**
   * The unique identifier of the staff user assigned to the request. The user must
   * be a `Staff` user type.
   */
  AssignedToUserId?: number | null;

  /**
   * The category identifier to assign the request.
   */
  CategoryId?: number | null;

  /**
   * Request due date. The date must be formatted as YYYY-MM-DD.
   */
  DueDate?: string | null;

  /**
   * Description of the request update. The message can not exceed 65500 characters.
   */
  Message?: string | null;

  /**
   * The subcategory identifier to assign the request.
   */
  SubCategoryId?: number | null;
}

export interface ResidentrequestListParams {
  /**
   * Filters results to any tasks that have been assigned to the specified staff user
   * identifier.
   */
  assignedtoid?: number;

  /**
   * Filters results to any tasks with a due date on or after the specified date. The
   * value must be formatted as YYYY-MM-DD.
   */
  duedatefrom?: string;

  /**
   * Filters results to any tasks with a due date on or before the specified date.
   * The value must be formatted as YYYY-MM-DD.
   */
  duedateto?: string;

  /**
   * Filters results to any task associated with the specified entity id value. The
   * value must be of the type specified in the `EntityType` field.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that the `EntityId` field refers to. This field is
   * required if the `EntityId` field is populated.
   */
  entitytype?: 'Rental' | 'RentalOwner' | 'Association';

  /**
   * Filters results to any tasks were updated on or after the specified date. The
   * value must be formatted as YYYY-MM-DD.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any tasks were updated on or before the specified date. The
   * value must be formatted as YYYY-MM-DD.
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
   * Filters results to any tasks whose priority matches the specified values. If no
   * priority is specified, tasks with any priority will be returned.
   */
  priorities?: Array<'Low' | 'Normal' | 'High'>;

  /**
   * Filters results by the status of the task. If no status is specified, tasks with
   * any status will be returned.
   */
  statuses?: Array<'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed'>;

  /**
   * Filters results to any tasks with the specified category identifier.
   */
  taskcategoryid?: number;

  /**
   * Filters results to any task whose title _contains_ the specified value.
   */
  tasktitle?: string;

  /**
   * Filters results to any task associated with the unit agreement identifier
   * specified.
   */
  unitagreementid?: number;

  /**
   * Filters results to any task associated with the unit identifier.
   */
  unitid?: number;
}

export declare namespace Residentrequests {
  export {
    type ResidentRequestTask as ResidentRequestTask,
    type ResidentrequestListResponse as ResidentrequestListResponse,
    type ResidentrequestCreateParams as ResidentrequestCreateParams,
    type ResidentrequestUpdateParams as ResidentrequestUpdateParams,
    type ResidentrequestListParams as ResidentrequestListParams,
  };
}
