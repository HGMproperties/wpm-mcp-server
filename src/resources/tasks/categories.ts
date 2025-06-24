// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Create a task category.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`
   */
  create(body: CategoryCreateParams, options?: RequestOptions): APIPromise<TaskCategoryMessage> {
    return this._client.post('/v1/tasks/categories', { body, ...options });
  }

  /**
   * Retrieves a specific task category.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  retrieve(taskCategoryID: number, options?: RequestOptions): APIPromise<TaskCategoryMessage> {
    return this._client.get(path`/v1/tasks/categories/${taskCategoryID}`, options);
  }

  /**
   * Updates a task category.
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
    taskCategoryID: number,
    body: CategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TaskCategoryMessage> {
    return this._client.put(path`/v1/tasks/categories/${taskCategoryID}`, { body, ...options });
  }

  /**
   * Retrieves a list of task categories.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  list(
    query: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListResponse> {
    return this._client.get('/v1/tasks/categories', { query, ...options });
  }
}

/**
 * Task category.
 */
export interface TaskCategoryMessage {
  /**
   * Task category unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the category is a system category. Note, system categories can
   * not be edited.
   */
  IsSystemCategory?: boolean;

  /**
   * Name of the task category.
   */
  Name?: string | null;

  /**
   * Subcategories associated with the task category.
   */
  SubCategories?: Array<TaskSubCategory> | null;
}

/**
 * Task subcategory.
 */
export interface TaskSubCategory {
  /**
   * Task subcategory unique identifier.
   */
  Id?: number;

  /**
   * Name of the task subcategory.
   */
  Name?: string | null;
}

export type CategoryListResponse = Array<TaskCategoryMessage>;

export interface CategoryCreateParams {
  /**
   * Name of the task category.
   */
  Name: string;
}

export interface CategoryUpdateParams {
  /**
   * Name of the task category.
   */
  Name: string;
}

export interface CategoryListParams {
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

export declare namespace Categories {
  export {
    type TaskCategoryMessage as TaskCategoryMessage,
    type TaskSubCategory as TaskSubCategory,
    type CategoryListResponse as CategoryListResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
  };
}
