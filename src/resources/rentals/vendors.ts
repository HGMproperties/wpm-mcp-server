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
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`
   */
  create(
    propertyID: number,
    body: VendorCreateParams,
    options?: RequestOptions,
  ): APIPromise<VendorCreateResponse> {
    return this._client.put(path`/v1/rentals/${propertyID}/vendors`, { body, ...options });
  }

  /**
   * Retrieves all preferred vendors.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   *
   * <span class="permissionBlock">Maintenance > Vendors</span> - `View`
   */
  list(
    propertyID: number,
    query: VendorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VendorListResponse> {
    return this._client.get(path`/v1/rentals/${propertyID}/vendors`, { query, ...options });
  }
}

export interface RentalPreferredVendor {
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

export type VendorCreateResponse = Array<RentalPreferredVendor>;

export type VendorListResponse = Array<RentalPreferredVendor>;

export interface VendorCreateParams {
  /**
   * A list of vendor identifiers that will be assigned as preferred vendors to the
   * specified rental property. The submitted list of identifiers will overwrite any
   * existing preferred vendors. Leaving the array empty will remove all vendors from
   * the rental property.
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
    type RentalPreferredVendor as RentalPreferredVendor,
    type VendorCreateResponse as VendorCreateResponse,
    type VendorListResponse as VendorListResponse,
    type VendorCreateParams as VendorCreateParams,
    type VendorListParams as VendorListParams,
  };
}
