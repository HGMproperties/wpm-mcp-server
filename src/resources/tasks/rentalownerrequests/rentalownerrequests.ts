// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnnouncementsAPI from '../../communications/announcements';
import * as TasksAPI from '../tasks';
import * as ContributiondataAPI from './contributiondata';
import { ContributionData, Contributiondata, ContributiondataUpdateParams } from './contributiondata';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Rentalownerrequests extends APIResource {
  contributiondata: ContributiondataAPI.Contributiondata = new ContributiondataAPI.Contributiondata(
    this._client,
  );

  /**
   * Creates a rental owner request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`
   */
  create(body: RentalownerrequestCreateParams, options?: RequestOptions): APIPromise<RentalOwnerRequestTask> {
    return this._client.post('/v1/tasks/rentalownerrequests', { body, ...options });
  }

  /**
   * Retrieves a specific rental owner request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  retrieve(rentalOwnerRequestTaskID: number, options?: RequestOptions): APIPromise<RentalOwnerRequestTask> {
    return this._client.get(path`/v1/tasks/rentalownerrequests/${rentalOwnerRequestTaskID}`, options);
  }

  /**
   * Updates a rental owner request.
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
    rentalOwnerRequestTaskID: number,
    body: RentalownerrequestUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RentalOwnerRequestTask> {
    return this._client.put(path`/v1/tasks/rentalownerrequests/${rentalOwnerRequestTaskID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all rental owner requests.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  list(
    query: RentalownerrequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RentalownerrequestListResponse> {
    return this._client.get('/v1/tasks/rentalownerrequests', { query, ...options });
  }
}

export interface RentalOwnerRequestTask {
  /**
   * The unique identifier of the staff user assigned to the request.
   */
  AssignedToUserId?: number | null;

  /**
   * Task category.
   */
  Category?: TasksAPI.TaskCategoryResponse | null;

  /**
   * Date and time the request was created.
   */
  CreatedDateTime?: string | null;

  /**
   * Request description.
   */
  Description?: string | null;

  /**
   * Request due date.
   */
  DueDate?: string | null;

  /**
   * Request unique identifier.
   */
  Id?: number;

  /**
   * Date and time the request was last updated.
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
   * Request status.
   */
  TaskStatus?: 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed';

  /**
   * Request title.
   */
  Title?: string | null;

  /**
   * The unit unique identifier associated with the request.
   */
  UnitId?: number | null;
}

export type RentalownerrequestListResponse = Array<RentalOwnerRequestTask>;

export interface RentalownerrequestCreateParams {
  /**
   * Request priority.
   */
  Priority: 'Low' | 'Normal' | 'High';

  /**
   * The unique identifier of the rental owner that submitted the request.
   */
  RequestedByRentalOwnerId: number;

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
   * Request description. The description can not exceed 65500 characters.
   */
  Description?: string | null;

  /**
   * Request due date. The date must be formatted as YYYY-MM-DD.
   */
  DueDate?: string | null;

  /**
   * The unique identifier of property associated with the request. The assigned
   * property must be active.
   */
  PropertyId?: number | null;

  /**
   * The subcategory identifier to assign the request.
   */
  SubCategoryId?: number | null;

  /**
   * The unique identifier of the unit associated with the request. The unit must be
   * associated with the `PropertyId` specified.
   */
  UnitId?: number | null;
}

export interface RentalownerrequestUpdateParams {
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
   * The unique identifier of property associated with the request. The assigned
   * property must be active.
   */
  PropertyId?: number | null;

  /**
   * The subcategory identifier to assign the request.
   */
  SubCategoryId?: number | null;

  /**
   * The unique identifier of the unit associated with the request. The unit must be
   * associated with the `PropertyId` specified.
   */
  UnitId?: number | null;
}

export interface RentalownerrequestListParams {
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
   * Filters results to any task associated with the unit identifier.
   */
  unitid?: number;
}

Rentalownerrequests.Contributiondata = Contributiondata;

export declare namespace Rentalownerrequests {
  export {
    type RentalOwnerRequestTask as RentalOwnerRequestTask,
    type RentalownerrequestListResponse as RentalownerrequestListResponse,
    type RentalownerrequestCreateParams as RentalownerrequestCreateParams,
    type RentalownerrequestUpdateParams as RentalownerrequestUpdateParams,
    type RentalownerrequestListParams as RentalownerrequestListParams,
  };

  export {
    Contributiondata as Contributiondata,
    type ContributionData as ContributionData,
    type ContributiondataUpdateParams as ContributiondataUpdateParams,
  };
}
