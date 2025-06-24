// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Listingcontacts extends APIResource {
  /**
   * Create a listing contact. Note, at least one contact field (phone number, email
   * or website) is required for the listing contact.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View` `Edit`
   */
  create(body: ListingcontactCreateParams, options?: RequestOptions): APIPromise<ListingContact> {
    return this._client.post('/v1/rentals/units/listingcontacts', { body, ...options });
  }

  /**
   * Retrieves a specific listing contact.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View`
   */
  retrieve(listingContactID: number, options?: RequestOptions): APIPromise<ListingContact> {
    return this._client.get(path`/v1/rentals/units/listingcontacts/${listingContactID}`, options);
  }

  /**
   * Update a listing contact. Note, at least one contact field (phone number, email
   * or website) is required for the listing contact.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View` `Edit`
   */
  update(
    listingContactID: number,
    body: ListingcontactUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ListingContact> {
    return this._client.put(path`/v1/rentals/units/listingcontacts/${listingContactID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all listing contacts.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View`
   */
  list(
    query: ListingcontactListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListingcontactListResponse> {
    return this._client.get('/v1/rentals/units/listingcontacts', { query, ...options });
  }
}

/**
 * The contact information for the listing.
 */
export interface ListingContact {
  /**
   * Email of the listing contact.
   */
  Email?: string | null;

  /**
   * Listing contact unique identifier.
   */
  Id?: number;

  /**
   * Name of listing contact.
   */
  Name?: string | null;

  /**
   * Phone number of the listing contact.
   */
  PhoneNumber?: string | null;

  /**
   * Website of the listing contact.
   */
  Website?: string | null;
}

export interface ListingContactSave {
  /**
   * Name of the listing contact. This name must be unique across all listing
   * contacts.
   */
  Name: string;

  /**
   * Email address for the listing contact.
   */
  Email?: string | null;

  /**
   * Phone number of the listing contact. The value must be between 10 and 20
   * characters, ideally formatted as (123) 123-1234.
   */
  PhoneNumber?: string | null;

  /**
   * Website associated with the listing contact. The value must be a valid URL
   * including the HTTP protocol. For example http://www.example.com.
   */
  Website?: string | null;
}

export type ListingcontactListResponse = Array<ListingContact>;

export interface ListingcontactCreateParams {
  /**
   * Name of the listing contact. This name must be unique across all listing
   * contacts.
   */
  Name: string;

  /**
   * Email address for the listing contact.
   */
  Email?: string | null;

  /**
   * Phone number of the listing contact. The value must be between 10 and 20
   * characters, ideally formatted as (123) 123-1234.
   */
  PhoneNumber?: string | null;

  /**
   * Website associated with the listing contact. The value must be a valid URL
   * including the HTTP protocol. For example http://www.example.com.
   */
  Website?: string | null;
}

export interface ListingcontactUpdateParams {
  /**
   * Name of the listing contact. This name must be unique across all listing
   * contacts.
   */
  Name: string;

  /**
   * Email address for the listing contact.
   */
  Email?: string | null;

  /**
   * Phone number of the listing contact. The value must be between 10 and 20
   * characters, ideally formatted as (123) 123-1234.
   */
  PhoneNumber?: string | null;

  /**
   * Website associated with the listing contact. The value must be a valid URL
   * including the HTTP protocol. For example http://www.example.com.
   */
  Website?: string | null;
}

export interface ListingcontactListParams {
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

export declare namespace Listingcontacts {
  export {
    type ListingContact as ListingContact,
    type ListingContactSave as ListingContactSave,
    type ListingcontactListResponse as ListingcontactListResponse,
    type ListingcontactCreateParams as ListingcontactCreateParams,
    type ListingcontactUpdateParams as ListingcontactUpdateParams,
    type ListingcontactListParams as ListingcontactListParams,
  };
}
