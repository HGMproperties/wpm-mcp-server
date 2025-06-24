// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as JournalentriesAPI from './generalledger/journalentries';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Retailcashusers extends APIResource {
  /**
   * Retrieves a retail cash user.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
   *             OR
   *             <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View`
   */
  retrieve(
    unitAgreementID: number,
    params: RetailcashuserRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RetailCashUserMessage> {
    const { userId } = params;
    return this._client.get(path`/v1/retailcashusers/${userId}/${unitAgreementID}`, options);
  }

  /**
   * Updates a retail cash user.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`
   *             OR
   *             <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View` `Edit`
   */
  update(
    unitAgreementID: number,
    params: RetailcashuserUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RetailCashUserMessage> {
    const { userId, ...body } = params;
    return this._client.put(path`/v1/retailcashusers/${userId}/${unitAgreementID}`, { body, ...options });
  }

  /**
   * Retrieves all retail cash users.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
   *             OR
   *             <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View`
   */
  list(
    query: RetailcashuserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RetailcashuserListResponse> {
    return this._client.get('/v1/retailcashusers', { query, ...options });
  }
}

export interface RetailCashUserMessage {
  /**
   * Whether the user has a retail cash account created.
   */
  IsAccountCreated?: boolean;

  /**
   * Whether retail cash is enabled for the user.
   */
  IsEnabled?: boolean;

  /**
   * Whether the unit agreement associated with the retail cash user has a pending
   * eviction.
   */
  IsEvictionPending?: boolean;

  /**
   * The property associated with the retail cash user.
   */
  Property?: RetailCashUserMessage.Property | null;

  /**
   * The unit associated with the retail cash user.
   */
  Unit?: RetailCashUserMessage.Unit | null;

  /**
   * Unit agreement.
   */
  UnitAgreement?: JournalentriesAPI.UnitAgreement | null;

  /**
   * The user data associated with the retail cash user.
   */
  User?: RetailCashUserMessage.User | null;
}

export namespace RetailCashUserMessage {
  /**
   * The property associated with the retail cash user.
   */
  export interface Property {
    /**
     * A link to the property entity resource.
     */
    Href?: string | null;

    /**
     * The property unique identifier.
     */
    Id?: number;

    /**
     * The property name.
     */
    Name?: string | null;

    /**
     * The property type.
     */
    Type?: 'Association' | 'Rental';
  }

  /**
   * The unit associated with the retail cash user.
   */
  export interface Unit {
    /**
     * A link to the resource endpoint associated with the unit.
     */
    Href?: string | null;

    /**
     * Unit unique identifier.
     */
    Id?: number;

    /**
     * Unit number.
     */
    UnitNumber?: string | null;
  }

  /**
   * The user data associated with the retail cash user.
   */
  export interface User {
    /**
     * User email address.
     */
    Email?: string | null;

    /**
     * User first name.
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
     * User last name.
     */
    LastName?: string | null;

    /**
     * User phone number.
     */
    Phone?: string | null;

    /**
     * User type.
     */
    UserType?: 'Tenant' | 'AssociationOwner';
  }
}

export type RetailcashuserListResponse = Array<RetailCashUserMessage>;

export interface RetailcashuserRetrieveParams {
  userId: number;
}

export interface RetailcashuserUpdateParams {
  /**
   * Path param:
   */
  userId: number;

  /**
   * Body param: Whether retail cash is enabled for the user. If no retail cash
   * account exists for the user, enabling will create one for the user. You cannot
   * disable a user who does not have an account yet.
   */
  IsEnabled: boolean;
}

export interface RetailcashuserListParams {
  /**
   * Filters results to any users associated with the specified entity id value. The
   * value must be of the type specified in the `EntityType` field.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that the `EntityId` field refers to. This field is
   * required if the `EntityId` field is provided.
   */
  entitytype?: 'Rental' | 'RentalOwner' | 'Association';

  /**
   * Filters results to any users whose retail cash account is created.
   */
  isaccountcreated?: boolean;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to any users whose name _contains_ the specified value.
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
   * Filters results to any users whose lease is in one of the provided statuses.
   */
  statuses?: Array<'Active' | 'Past' | 'Future'>;

  /**
   * Filters results to any users whose unit address _contains_ the specified value.
   */
  unitaddress?: string;
}

export declare namespace Retailcashusers {
  export {
    type RetailCashUserMessage as RetailCashUserMessage,
    type RetailcashuserListResponse as RetailcashuserListResponse,
    type RetailcashuserRetrieveParams as RetailcashuserRetrieveParams,
    type RetailcashuserUpdateParams as RetailcashuserUpdateParams,
    type RetailcashuserListParams as RetailcashuserListParams,
  };
}
