// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Userroles extends APIResource {
  /**
   * Retrieve a specific user role.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > User Roles</span> - `View`
   */
  retrieve(userRoleID: number, options?: RequestOptions): APIPromise<UserRoleMessage> {
    return this._client.get(path`/v1/userroles/${userRoleID}`, options);
  }

  /**
   * Retrieves a list of user roles.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > User Roles</span> - `View`
   */
  list(
    query: UserroleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserroleListResponse> {
    return this._client.get('/v1/userroles', { query, ...options });
  }
}

/**
 * User role.
 */
export interface UserRoleMessage {
  /**
   * User role description.
   */
  Description?: string | null;

  /**
   * User role unique identifier.
   */
  Id?: number;

  /**
   * User role name.
   */
  Name?: string | null;

  /**
   * Number of users assigned to this user role.
   */
  NumberOfUsers?: number;
}

export type UserroleListResponse = Array<UserRoleMessage>;

export interface UserroleListParams {
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

export declare namespace Userroles {
  export {
    type UserRoleMessage as UserRoleMessage,
    type UserroleListResponse as UserroleListResponse,
    type UserroleListParams as UserroleListParams,
  };
}
