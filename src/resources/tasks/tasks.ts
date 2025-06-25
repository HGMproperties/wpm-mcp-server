// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnnouncementsAPI from '../communications/announcements';
import * as JournalentriesAPI from '../generalledger/journalentries';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryCreateParams,
  CategoryListParams,
  CategoryListResponse,
  CategoryUpdateParams,
  TaskCategoryMessage,
  TaskSubCategory,
} from './categories';
import * as ContactrequestsAPI from './contactrequests';
import {
  ContactDetailSave,
  ContactRequestTask,
  ContactrequestCreateParams,
  ContactrequestListParams,
  ContactrequestListResponse,
  ContactrequestUpdateParams,
  Contactrequests,
} from './contactrequests';
import * as ResidentrequestsAPI from './residentrequests';
import {
  ResidentRequestTask,
  ResidentrequestCreateParams,
  ResidentrequestListParams,
  ResidentrequestListResponse,
  ResidentrequestUpdateParams,
  Residentrequests,
} from './residentrequests';
import * as TodorequestsAPI from './todorequests';
import {
  ToDoTask,
  TodorequestCreateParams,
  TodorequestListParams,
  TodorequestListResponse,
  TodorequestUpdateParams,
  Todorequests,
} from './todorequests';
import * as HistoryAPI from './history/history';
import {
  History,
  HistoryListParams,
  HistoryListResponse,
  HistoryRetrieveParams,
  HistoryUpdateParams,
  TaskHistory,
  TaskHistoryUser,
} from './history/history';
import * as RentalownerrequestsAPI from './rentalownerrequests/rentalownerrequests';
import {
  RentalOwnerRequestTask,
  RentalownerrequestCreateParams,
  RentalownerrequestListParams,
  RentalownerrequestListResponse,
  RentalownerrequestUpdateParams,
  Rentalownerrequests,
} from './rentalownerrequests/rentalownerrequests';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  contactrequests: ContactrequestsAPI.Contactrequests = new ContactrequestsAPI.Contactrequests(this._client);
  rentalownerrequests: RentalownerrequestsAPI.Rentalownerrequests =
    new RentalownerrequestsAPI.Rentalownerrequests(this._client);
  residentrequests: ResidentrequestsAPI.Residentrequests = new ResidentrequestsAPI.Residentrequests(
    this._client,
  );
  todorequests: TodorequestsAPI.Todorequests = new TodorequestsAPI.Todorequests(this._client);

  /**
   * Retrieves a specific task. This endpoint can be used for any task type - contact
   * requests, rental owner requests, resident requests or to do's. Note, the
   * response payload only contains fields common across all of the request types. To
   * retrieve the full details of the task query the retrieve endpoint specific to
   * the task type.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  retrieve(taskID: number, options?: RequestOptions): APIPromise<AllTask> {
    return this._client.get(path`/v1/tasks/${taskID}`, options);
  }

  /**
   * Retrieves a list of all task/request types (Contact, Owner, Resident and To Do).
   * Note, the response payload only contains fields common across all of the request
   * types. To retrieve the full details of the task query the retrieve endpoint
   * specific to the task type.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get('/v1/tasks', { query, ...options });
  }
}

/**
 * This object represents a task.
 */
export interface AllTask {
  /**
   * The unique identifier of the staff user assigned to the task.
   */
  AssignedToUserId?: number;

  /**
   * Task category.
   */
  Category?: TaskCategoryResponse | null;

  /**
   * The date and time the task was created.
   */
  CreatedDateTime?: string;

  /**
   * Task description.
   */
  Description?: string | null;

  /**
   * Task due date.
   */
  DueDate?: string | null;

  /**
   * Task unique identifier.
   */
  Id?: number;

  /**
   * The date and time the task was last updated.
   */
  LastUpdatedDateTime?: string | null;

  /**
   * Task priority.
   */
  Priority?: 'Low' | 'Normal' | 'High';

  /**
   * Property information.
   */
  Property?: AnnouncementsAPI.PropertyMessage | null;

  /**
   * Entity information for the user that submitted the task request.
   */
  RequestedByUserEntity?: RequestedByUserEntity | null;

  /**
   * Task status.
   */
  TaskStatus?: 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed';

  /**
   * The task type.
   */
  TaskType?: 'ContactRequest' | 'ResidentRequest' | 'Todo' | 'RentalOwnerRequest';

  /**
   * Task title.
   */
  Title?: string | null;

  /**
   * Unit agreement.
   */
  UnitAgreement?: JournalentriesAPI.UnitAgreement | null;

  /**
   * The unit unique identifier associated with the task.
   */
  UnitId?: number | null;
}

/**
 * Entity information for the user that submitted the task request.
 */
export interface RequestedByUserEntity {
  /**
   * First name.
   */
  FirstName?: string | null;

  /**
   * A link to the entity resource.
   */
  Href?: string | null;

  /**
   * Entity identifier.
   */
  Id?: number | null;

  /**
   * Indicates whether entity is a company.
   */
  IsCompany?: boolean;

  /**
   * Last name.
   */
  LastName?: string | null;

  /**
   * Entity type.
   */
  Type?: 'ContactRequestor' | 'RentalOwner' | 'RentalTenant' | 'AssociationOwner';
}

/**
 * Task category.
 */
export interface TaskCategoryResponse {
  /**
   * A link to the task category resource.
   */
  Href?: string | null;

  /**
   * Task category unique identifier.
   */
  Id?: number;

  /**
   * Name of the task category.
   */
  Name?: string | null;

  /**
   * Task subcategory.
   */
  SubCategory?: CategoriesAPI.TaskSubCategory | null;
}

export type TaskListResponse = Array<AllTask>;

export interface TaskListParams {
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
   * Filters results to any task associated with the task type specified.
   */
  type?: 'ContactRequest' | 'ResidentRequest' | 'Todo' | 'RentalOwnerRequest';

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

Tasks.History = History;
Tasks.Categories = Categories;
Tasks.Contactrequests = Contactrequests;
Tasks.Rentalownerrequests = Rentalownerrequests;
Tasks.Residentrequests = Residentrequests;
Tasks.Todorequests = Todorequests;

export declare namespace Tasks {
  export {
    type AllTask as AllTask,
    type RequestedByUserEntity as RequestedByUserEntity,
    type TaskCategoryResponse as TaskCategoryResponse,
    type TaskListResponse as TaskListResponse,
    type TaskListParams as TaskListParams,
  };

  export {
    History as History,
    type TaskHistory as TaskHistory,
    type TaskHistoryUser as TaskHistoryUser,
    type HistoryListResponse as HistoryListResponse,
    type HistoryRetrieveParams as HistoryRetrieveParams,
    type HistoryUpdateParams as HistoryUpdateParams,
    type HistoryListParams as HistoryListParams,
  };

  export {
    Categories as Categories,
    type TaskCategoryMessage as TaskCategoryMessage,
    type TaskSubCategory as TaskSubCategory,
    type CategoryListResponse as CategoryListResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
  };

  export {
    Contactrequests as Contactrequests,
    type ContactDetailSave as ContactDetailSave,
    type ContactRequestTask as ContactRequestTask,
    type ContactrequestListResponse as ContactrequestListResponse,
    type ContactrequestCreateParams as ContactrequestCreateParams,
    type ContactrequestUpdateParams as ContactrequestUpdateParams,
    type ContactrequestListParams as ContactrequestListParams,
  };

  export {
    Rentalownerrequests as Rentalownerrequests,
    type RentalOwnerRequestTask as RentalOwnerRequestTask,
    type RentalownerrequestListResponse as RentalownerrequestListResponse,
    type RentalownerrequestCreateParams as RentalownerrequestCreateParams,
    type RentalownerrequestUpdateParams as RentalownerrequestUpdateParams,
    type RentalownerrequestListParams as RentalownerrequestListParams,
  };

  export {
    Residentrequests as Residentrequests,
    type ResidentRequestTask as ResidentRequestTask,
    type ResidentrequestListResponse as ResidentrequestListResponse,
    type ResidentrequestCreateParams as ResidentrequestCreateParams,
    type ResidentrequestUpdateParams as ResidentrequestUpdateParams,
    type ResidentrequestListParams as ResidentrequestListParams,
  };

  export {
    Todorequests as Todorequests,
    type ToDoTask as ToDoTask,
    type TodorequestListResponse as TodorequestListResponse,
    type TodorequestCreateParams as TodorequestCreateParams,
    type TodorequestUpdateParams as TodorequestUpdateParams,
    type TodorequestListParams as TodorequestListParams,
  };
}
