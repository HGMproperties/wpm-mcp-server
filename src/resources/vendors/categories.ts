// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Creates a vendor category.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`
   */
  create(body: CategoryCreateParams, options?: RequestOptions): APIPromise<VendorCategory> {
    return this._client.post('/v1/vendors/categories', { body, ...options });
  }

  /**
   * Retrieves a specific vendor category.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`
   */
  retrieve(vendorCategoryID: number, options?: RequestOptions): APIPromise<VendorCategory> {
    return this._client.get(path`/v1/vendors/categories/${vendorCategoryID}`, options);
  }

  /**
   * Updates a vendor category.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`
   */
  update(
    vendorCategoryID: number,
    body: CategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VendorCategory> {
    return this._client.put(path`/v1/vendors/categories/${vendorCategoryID}`, { body, ...options });
  }

  /**
   * Retrieves a list of vendor categories.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`
   */
  list(
    query: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListResponse> {
    return this._client.get('/v1/vendors/categories', { query, ...options });
  }
}

/**
 * This object represents a vendor category.
 */
export interface VendorCategory {
  /**
   * Unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the category is a system category.
   */
  IsSystemCategory?: boolean;

  /**
   * Name.
   */
  Name?: string | null;
}

export interface VendorCategorySave {
  /**
   * The category name.
   */
  Name: string;
}

export type CategoryListResponse = Array<VendorCategory>;

export interface CategoryCreateParams {
  /**
   * The category name.
   */
  Name: string;
}

export interface CategoryUpdateParams {
  /**
   * The category name.
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
    type VendorCategory as VendorCategory,
    type VendorCategorySave as VendorCategorySave,
    type CategoryListResponse as CategoryListResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
  };
}
