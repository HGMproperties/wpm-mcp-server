// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UserrolesAPI from './userroles';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieve a specific user.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Users</span> - `View`
   */
  retrieve(userID: number, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/v1/users/${userID}`, options);
  }

  /**
   * Retrieves a list of users.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Users</span> - `View`
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/v1/users', { query, ...options });
  }
}

/**
 * This is an object that represents a phone number.
 */
export interface PhoneNumber {
  /**
   * Phone number.
   */
  Number?: string | null;

  /**
   * Indicates the type of phone number.
   */
  Type?: 'NotSet' | 'Home' | 'Office' | 'Cell' | 'Personal' | 'Fax' | 'Other';
}

/**
 * Buildium user account.
 */
export interface User {
  /**
   * Alternate email address of user.
   */
  AlternateEmail?: string | null;

  /**
   * The company name.
   */
  CompanyName?: string | null;

  /**
   * Email address of the user.
   */
  Email?: string | null;

  /**
   * First name of the user.
   */
  FirstName?: string | null;

  /**
   * User unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the user account is still active.
   */
  IsActive?: boolean;

  /**
   * Indicates with the user account represents company versus a person.
   */
  IsCompany?: boolean;

  /**
   * Date and time the user last logged into Buildium. This value will be `NULL` if
   * the user has never logged into Buildium.
   */
  LastLogin?: string | null;

  /**
   * Last name of the user.
   */
  LastName?: string | null;

  /**
   * List of phone numbers for the user.
   */
  PhoneNumbers?: Array<PhoneNumber> | null;

  /**
   * User role.
   */
  UserRole?: UserrolesAPI.UserRoleMessage | null;

  /**
   * The user type assigned to the user account.
   */
  UserTypes?: Array<'Staff' | 'RentalOwner' | 'Vendor'> | null;
}

export type UserListResponse = Array<User>;

export interface UserListParams {
  /**
   * Filters results to only records whose email _contains_ the specified value.
   */
  email?: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to only records whose name _contains_ the specified value.
   */
  name?: string;

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
   * Describes the role of the user.
   */
  roleids?: Array<number>;

  /**
   * Filters results by the status of the user. If no status is specified both
   * `active` and `inactive` staff members will be returned.
   */
  status?: 'Inactive' | 'Active';

  /**
   * Describes the user type of the user.
   */
  usertypes?: Array<'Staff' | 'RentalOwner' | 'Vendor'>;
}

export declare namespace Users {
  export {
    type PhoneNumber as PhoneNumber,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
  };
}
