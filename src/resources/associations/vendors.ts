// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from '../users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Vendors extends APIResource {
  /**
   * Updates preferred vendors.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition.
   *
   * The recommended workflow to ensure no data is inadvertently overwritten is to
   * execute a `GET` request for the resource you're about to update and then use
   * this response to fill any of the fields that are not being updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationPreferredVendors =
   *   await client.associations.vendors.update(0, {
   *     VendorIds: [0],
   *   });
   * ```
   */
  update(
    associationID: number,
    body: VendorUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VendorUpdateResponse> {
    return this._client.put(path`/v1/associations/${associationID}/vendors`, { body, ...options });
  }

  /**
   * Retrieves all preferred vendors.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * <span class="permissionBlock">Maintenance > Vendors</span> - `View`
   *
   * @example
   * ```ts
   * const associationPreferredVendors =
   *   await client.associations.vendors.list(0);
   * ```
   */
  list(
    associationID: number,
    query: VendorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VendorListResponse> {
    return this._client.get(path`/v1/associations/${associationID}/vendors`, { query, ...options });
  }
}

export interface AssociationPreferredVendor {
  /**
   * Alternate email for the preferred vendor.
   */
  AlternateEmail?: string | null;

  /**
   * Company name of the preferred vendor.
   */
  CompanyName?: string | null;

  /**
   * First name of the preferred vendor.
   */
  FirstName?: string | null;

  /**
   * Preferred vendor unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the preferred vendor is a company.
   */
  IsCompany?: boolean;

  /**
   * Last name of the preferred vendor.
   */
  LastName?: string | null;

  /**
   * List of phone numbers of the preferred vendor.
   */
  PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

  /**
   * Primary email for the preferred vendor.
   */
  PrimaryEmail?: string | null;

  /**
   * Website of the preferred vendor.
   */
  Website?: string | null;
}

export type VendorUpdateResponse = Array<AssociationPreferredVendor>;

export type VendorListResponse = Array<AssociationPreferredVendor>;

export interface VendorUpdateParams {
  /**
   * A list of vendor identifiers that will be assigned as preferred vendors to the
   * specified association. The submitted list of identifiers will overwrite any
   * existing preferred vendors. Leaving the array empty will remove all vendors from
   * the association.
   */
  VendorIds: Array<number>;
}

export interface VendorListParams {
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

export declare namespace Vendors {
  export {
    type AssociationPreferredVendor as AssociationPreferredVendor,
    type VendorUpdateResponse as VendorUpdateResponse,
    type VendorListResponse as VendorListResponse,
    type VendorUpdateParams as VendorUpdateParams,
    type VendorListParams as VendorListParams,
  };
}
