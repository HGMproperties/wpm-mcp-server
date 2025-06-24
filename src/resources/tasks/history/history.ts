// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from './files';
import {
  FileDeleteParams,
  FileDownloadRequestParams,
  FileListParams,
  FileListResponse,
  FileRetrieveParams,
  FileUploadRequestParams,
  Files,
  TaskHistoryFile,
} from './files';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class History extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Retrieves a specific task history record for a task.
   *
   * This endpoint can be used for any task type - contact requests, rental owner
   * requests, resident requests or to do's.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  retrieve(
    taskHistoryID: number,
    params: HistoryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TaskHistory> {
    const { taskId } = params;
    return this._client.get(path`/v1/tasks/${taskId}/history/${taskHistoryID}`, options);
  }

  /**
   * Updates a specific task history record for a task.
   *
   * This endpoint can be used for any task type - contact requests, rental owner
   * requests, resident requests or to do's.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`
   */
  update(
    taskHistoryID: number,
    params: HistoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TaskHistory> {
    const { taskId, ...body } = params;
    return this._client.put(path`/v1/tasks/${taskId}/history/${taskHistoryID}`, { body, ...options });
  }

  /**
   * Retrieves all task history records for a specific task.
   *
   * This endpoint can be used for any task type - contact requests, rental owner
   * requests, resident requests or to do's.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  list(
    taskID: number,
    query: HistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryListResponse> {
    return this._client.get(path`/v1/tasks/${taskID}/history`, { query, ...options });
  }
}

export interface TaskHistory {
  /**
   * The unique identifier of the staff user assigned to the task.
   */
  AssignedToUserId?: number;

  /**
   * User information.
   */
  CreatedByUser?: TaskHistoryUser | null;

  /**
   * The date and time the task history was created.
   */
  CreatedDateTIme?: string;

  /**
   * Task due date.
   */
  DueDate?: string | null;

  /**
   * List of file unique identifiers associated with the task history. These
   * identifiers can be used to retrieve the file metadata and/or download the files.
   */
  FileIds?: Array<number> | null;

  /**
   * Task history unique identifier.
   */
  Id?: number;

  /**
   * User information.
   */
  LastUpdatedByUser?: TaskHistoryUser | null;

  /**
   * The date and time the task was last updated.
   */
  LastUpdatedDateTime?: string | null;

  /**
   * Description of the task update.
   */
  Message?: string | null;

  /**
   * Task priority.
   */
  Priority?: 'Low' | 'Normal' | 'High';

  /**
   * Indicates the who the task update was shared with.
   */
  SharedWith?: Array<'Residents' | 'RentalOwners' | 'AssociationBoardMembers'> | null;

  /**
   * Task status.
   */
  TaskStatus?: 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed';
}

/**
 * User information.
 */
export interface TaskHistoryUser {
  /**
   * First name of the user.
   */
  FirstName?: string | null;

  /**
   * A link to the resource endpoint associated with the user.
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

  /**
   * Describes the user type of the user
   */
  UserType?:
    | 'Unknown'
    | 'Tenant'
    | 'AssociationOwner'
    | 'AssociationTenant'
    | 'Staff'
    | 'Vendor'
    | 'RentalOwner'
    | null;
}

export type HistoryListResponse = Array<TaskHistory>;

export interface HistoryRetrieveParams {
  taskId: number;
}

export interface HistoryUpdateParams {
  /**
   * Path param:
   */
  taskId: number;

  /**
   * Body param: A message to include with the task update. The value can not exceed
   * 65500 characters.
   */
  Message: string;
}

export interface HistoryListParams {
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
}

History.Files = Files;

export declare namespace History {
  export {
    type TaskHistory as TaskHistory,
    type TaskHistoryUser as TaskHistoryUser,
    type HistoryListResponse as HistoryListResponse,
    type HistoryRetrieveParams as HistoryRetrieveParams,
    type HistoryUpdateParams as HistoryUpdateParams,
    type HistoryListParams as HistoryListParams,
  };

  export {
    Files as Files,
    type TaskHistoryFile as TaskHistoryFile,
    type FileListResponse as FileListResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileDownloadRequestParams as FileDownloadRequestParams,
    type FileUploadRequestParams as FileUploadRequestParams,
  };
}
