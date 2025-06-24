// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as JournalentriesAPI from './generalledger/journalentries';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ResidentCenterUsers extends APIResource {
  /**
   * Retrieves all resident center users for both rentals and associations.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Resident Center Users</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Tenants</span> - `View` is required to retrieve resident center users that are tenants.
   *
   * <span class="permissionBlock">Associations > Association owners and tenants</span> - `View` is required to retrieve resident center users that are association owners.
   */
  list(
    query: ResidentCenterUserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResidentCenterUserListResponse> {
    return this._client.get('/v1/residentCenterUsers', { query, ...options });
  }
}

export type ResidentCenterUserListResponse =
  Array<ResidentCenterUserListResponse.ResidentCenterUserListResponseItem>;

export namespace ResidentCenterUserListResponse {
  export interface ResidentCenterUserListResponseItem {
    /**
     * Indicates if the user has an automatic payment scheduled for the future.
     */
    IsAutoPayEnabled?: boolean;

    /**
     * Resident center status for the user.
     */
    ResidentCenterUserStatus?:
      | 'AccountExistsButNoEmailSent'
      | 'PasswordSent'
      | 'EmailFailed'
      | 'SignedIn'
      | 'Blocked';

    /**
     * Unit agreement.
     */
    UnitAgreement?: JournalentriesAPI.UnitAgreement | null;

    /**
     * Information about the user.
     */
    User?: ResidentCenterUserListResponseItem.User | null;
  }

  export namespace ResidentCenterUserListResponseItem {
    /**
     * Information about the user.
     */
    export interface User {
      /**
       * First name of the resident center user.
       */
      FirstName?: string | null;

      /**
       * A link to the user resource.
       */
      Href?: string | null;

      /**
       * Resident center user unique identifier.
       */
      Id?: number;

      /**
       * Last name of the resident center user.
       */
      LastName?: string | null;

      /**
       * Indicates if the resident center user is a tenant or association owner
       */
      UserType?: 'Tenant' | 'AssociationOwner';
    }
  }
}

export interface ResidentCenterUserListParams {
  /**
   * If true, filters results to any resident center users who have automatic
   * payments scheduled for the future. If false, filters results to any resident
   * center users who do not have automatic payments scheduled for the future. If not
   * provided, will not filter results based on automatic payments.
   */
  isautopayenabled?: boolean;

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
   * Filters results to any resident center user with the specified resident center
   * user statuses.
   */
  residentcenteruserstatuses?: Array<
    'AccountExistsButNoEmailSent' | 'PasswordSent' | 'EmailFailed' | 'SignedIn' | 'Blocked'
  >;

  /**
   * Filters results to any resident center user who is associated with the specified
   * lease and/or association ownership account identifiers.
   */
  unitagreementids?: Array<number>;

  /**
   * Filters results to any resident center user with the specified tenant and/or
   * association owner identifiers.
   */
  userids?: Array<number>;

  /**
   * Filters results to any resident center user with the specified types.
   */
  usertypes?: Array<'Tenant' | 'AssociationOwner'>;
}

export declare namespace ResidentCenterUsers {
  export {
    type ResidentCenterUserListResponse as ResidentCenterUserListResponse,
    type ResidentCenterUserListParams as ResidentCenterUserListParams,
  };
}
