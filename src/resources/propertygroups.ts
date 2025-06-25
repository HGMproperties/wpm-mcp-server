// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AnnouncementsAPI from './communications/announcements';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Propertygroups extends APIResource {
  /**
   * Creates a property group.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View` `Edit`
   *             <span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   */
  create(body: PropertygroupCreateParams, options?: RequestOptions): APIPromise<PropertyGroupMessage> {
    return this._client.post('/v1/propertygroups', { body, ...options });
  }

  /**
   * Retrieves a property group.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View`
   *             <span class="permissionBlock">Associations > Associations and units</span> - `View`
   */
  retrieve(propertyGroupID: number, options?: RequestOptions): APIPromise<PropertyGroupMessage> {
    return this._client.get(path`/v1/propertygroups/${propertyGroupID}`, options);
  }

  /**
   * Updates a property group. A property group can only be updated by the user that
   * created it.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View` `Edit`
   *             <span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   */
  update(
    propertyGroupID: number,
    body: PropertygroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PropertyGroupMessage> {
    return this._client.put(path`/v1/propertygroups/${propertyGroupID}`, { body, ...options });
  }

  /**
   * Retrieves all property groups.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View`
   *
   * <span class="permissionBlock">Associations > Associations and units</span> - `View`
   */
  list(
    query: PropertygroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PropertygroupListResponse> {
    return this._client.get('/v1/propertygroups', { query, ...options });
  }
}

export interface PropertyGroupMessage {
  /**
   * User who created the property group.
   */
  CreatedByUser?: PropertyGroupMessage.CreatedByUser | null;

  /**
   * Property group description.
   */
  Description?: string | null;

  /**
   * Property group unique identifier.
   */
  Id?: number;

  /**
   * Property group name.
   */
  Name?: string | null;

  /**
   * A list of association and/or rental property unique identifiers assigned to the
   * property group.
   */
  Properties?: Array<AnnouncementsAPI.PropertyMessage> | null;
}

export namespace PropertyGroupMessage {
  /**
   * User who created the property group.
   */
  export interface CreatedByUser {
    /**
     * First name of the user.
     */
    FirstName?: string | null;

    /**
     * A link to the user resource.
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
  }
}

export type PropertygroupListResponse = Array<PropertyGroupMessage>;

export interface PropertygroupCreateParams {
  /**
   * Property group name. The name can not exceed 127 characters.
   */
  Name: string;

  /**
   * A list of association and/or rental property unique identifiers to assign to the
   * property group. Property groups cannot be created using inactive associations
   * and/or rental properties.
   */
  PropertyIds: Array<number>;

  /**
   * Description of the property group. The description can not exceed 1000
   * characters.
   */
  Description?: string | null;
}

export interface PropertygroupUpdateParams {
  /**
   * Property group name. The name can not exceed 127 characters.
   */
  Name: string;

  /**
   * A list of association and/or rental property unique identifiers to assign to the
   * property group. Property groups cannot be updated using inactive associations
   * and/or rental properties.
   */
  PropertyIds: Array<number>;

  /**
   * Description of the property group. The description can not exceed 1000
   * characters.
   */
  Description?: string | null;
}

export interface PropertygroupListParams {
  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to any property group whose name or description contains the
   * specified value.
   */
  nameordescription?: string;

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
   * Filters results to property groups that contain any of the specified property
   * ids.
   */
  propertyids?: Array<number>;
}

export declare namespace Propertygroups {
  export {
    type PropertyGroupMessage as PropertyGroupMessage,
    type PropertygroupListResponse as PropertygroupListResponse,
    type PropertygroupCreateParams as PropertygroupCreateParams,
    type PropertygroupUpdateParams as PropertygroupUpdateParams,
    type PropertygroupListParams as PropertygroupListParams,
  };
}
