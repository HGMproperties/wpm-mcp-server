// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Creates a file category.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`
   */
  create(body: CategoryCreateParams, options?: RequestOptions): APIPromise<FileCategory> {
    return this._client.post('/v1/files/categories', { body, ...options });
  }

  /**
   * Retrieves a specific file category.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`
   */
  retrieve(fileCategoryID: number, options?: RequestOptions): APIPromise<FileCategory> {
    return this._client.get(path`/v1/files/categories/${fileCategoryID}`, options);
  }

  /**
   * Updates a file category. Note that file categories where `IsEditable` is `false`
   * can not be updated.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`
   */
  update(
    fileCategoryID: number,
    body: CategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FileCategory> {
    return this._client.put(path`/v1/files/categories/${fileCategoryID}`, { body, ...options });
  }

  /**
   * Retrieves a list of file categories.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`
   */
  list(
    query: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListResponse> {
    return this._client.get('/v1/files/categories', { query, ...options });
  }
}

/**
 * File category.
 */
export interface FileCategory {
  /**
   * File category unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the category is editable.
   */
  IsEditable?: boolean;

  /**
   * Name of the file category.
   */
  Name?: string | null;
}

export type CategoryListResponse = Array<FileCategory>;

export interface CategoryCreateParams {
  /**
   * Name of the file category. The value cannot exceed 100 characters.
   */
  Name: string;
}

export interface CategoryUpdateParams {
  /**
   * Name of the file category. The value cannot exceed 100 characters.
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
    type FileCategory as FileCategory,
    type CategoryListResponse as CategoryListResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
  };
}
