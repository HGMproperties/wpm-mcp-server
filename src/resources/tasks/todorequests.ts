// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnnouncementsAPI from '../communications/announcements';
import * as TasksAPI from './tasks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Todorequests extends APIResource {
  /**
   * Creates a to do task.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`
   */
  create(body: TodorequestCreateParams, options?: RequestOptions): APIPromise<ToDoTask> {
    return this._client.post('/v1/tasks/todorequests', { body, ...options });
  }

  /**
   * Retrieves a to do task.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  retrieve(toDoTaskID: number, options?: RequestOptions): APIPromise<ToDoTask> {
    return this._client.get(path`/v1/tasks/todorequests/${toDoTaskID}`, options);
  }

  /**
   * Updates a to do task
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
  update(toDoTaskID: number, body: TodorequestUpdateParams, options?: RequestOptions): APIPromise<ToDoTask> {
    return this._client.put(path`/v1/tasks/todorequests/${toDoTaskID}`, { body, ...options });
  }

  /**
   * Retrieves a list of to do tasks.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  list(
    query: TodorequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TodorequestListResponse> {
    return this._client.get('/v1/tasks/todorequests', { query, ...options });
  }
}

export interface ToDoTask {
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

export type TodorequestListResponse = Array<ToDoTask>;

export interface TodorequestCreateParams {
  /**
   * The unique identifier of the staff user assigned to the request. The user must
   * be a `Staff` user type.
   */
  AssignedToUserId: number;

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

export interface TodorequestUpdateParams {
  /**
   * The unique identifier of the staff user assigned to the request. The user must
   * be a `Staff` user type.
   */
  AssignedToUserId: number;

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

export interface TodorequestListParams {
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
   * Filters results to any task associated with the unit identifier.
   */
  unitid?: number;
}

export declare namespace Todorequests {
  export {
    type ToDoTask as ToDoTask,
    type TodorequestListResponse as TodorequestListResponse,
    type TodorequestCreateParams as TodorequestCreateParams,
    type TodorequestUpdateParams as TodorequestUpdateParams,
    type TodorequestListParams as TodorequestListParams,
  };
}
