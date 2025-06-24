// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssociationsAPI from '../../associations/associations';
import * as AmenitiesAPI from './amenities';
import { Amenities, AmenityCreateParams, RentalUnitFeatures } from './amenities';
import * as ImagesAPI from './images';
import {
  ImageDeleteParams,
  ImageDownloadrequestsParams,
  ImageListParams,
  ImageListResponse,
  ImageRetrieveParams,
  ImageUpdateOrderParams,
  ImageUpdateOrderResponse,
  ImageUpdateParams,
  ImageUploadrequestsParams,
  ImageVideolinkrequestsParams,
  Images,
  RentalUnitImage,
} from './images';
import * as ListingAPI from './listing';
import { Listing, ListingCreateParams, ListingFile, ListingResource } from './listing';
import * as ListingcontactsAPI from './listingcontacts';
import {
  ListingContact,
  ListingContactSave,
  ListingcontactCreateParams,
  ListingcontactListParams,
  ListingcontactListResponse,
  ListingcontactUpdateParams,
  Listingcontacts,
} from './listingcontacts';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Units extends APIResource {
  listing: ListingAPI.ListingResource = new ListingAPI.ListingResource(this._client);
  listingcontacts: ListingcontactsAPI.Listingcontacts = new ListingcontactsAPI.Listingcontacts(this._client);
  amenities: AmenitiesAPI.Amenities = new AmenitiesAPI.Amenities(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);

  /**
   * Creates a rental unit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  create(body: UnitCreateParams, options?: RequestOptions): APIPromise<RentalUnit> {
    return this._client.post('/v1/rentals/units', { body, ...options });
  }

  /**
   * Retrieves a specific rental property unit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  retrieve(unitID: number, options?: RequestOptions): APIPromise<RentalUnit> {
    return this._client.get(path`/v1/rentals/units/${unitID}`, options);
  }

  /**
   * Updates a rental unit.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  update(unitID: number, body: UnitUpdateParams, options?: RequestOptions): APIPromise<RentalUnit> {
    return this._client.put(path`/v1/rentals/units/${unitID}`, { body, ...options });
  }

  /**
   * Retrieves a list of rental property units.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitListResponse> {
    return this._client.get('/v1/rentals/units', { query, ...options });
  }

  /**
   * Retrieves all listings.
   *
   * <span class="permissionBlock">Rentals > Listings</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Rental properties and units</span> -
   * `View`
   */
  retrieveListings(
    query: UnitRetrieveListingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitRetrieveListingsResponse> {
    return this._client.get('/v1/rentals/units/listings', { query, ...options });
  }
}

/**
 * This object represents a rental property unit.
 */
export interface RentalUnit {
  /**
   * Address.
   */
  Address?: AssociationsAPI.Address | null;

  /**
   * Building name that the unit belongs to.
   */
  BuildingName?: string | null;

  /**
   * Description of the unit.
   */
  Description?: string | null;

  /**
   * Rental unit unique identifier.
   */
  Id?: number;

  /**
   * Whether the unit is currently listed for rent.
   *
   * Note: this value is transient and determined at query time based on whether an
   * active listing exists for the unit. Because this value is not persisted in the
   * database, changes to value are not reflected in the last updated date for the
   * unit.
   */
  IsUnitListed?: boolean | null;

  /**
   * Whether the unit is currently being rented by a tenent.
   *
   * Note: this value is transient and determined at query time based on whether an
   * active lease exists for the unit. Because this value is not persisted in the
   * database, changes to value are not reflected in the last updated date for the
   * unit.
   */
  IsUnitOccupied?: boolean | null;

  /**
   * Market rent of the unit. This value is separate from the lease rent and is
   * typically used for rental listings. Null if no value is set.
   */
  MarketRent?: number | null;

  /**
   * Rental property unique identifier that the unit belongs to.
   */
  PropertyId?: number;

  /**
   * Number of bathrooms in the unit. Null if no value is set.
   */
  UnitBathrooms?:
    | 'NotSet'
    | 'OneBath'
    | 'OnePointFiveBath'
    | 'TwoBath'
    | 'TwoPointFiveBath'
    | 'ThreeBath'
    | 'FourBath'
    | 'FiveBath'
    | 'FivePlusBath'
    | 'ThreePointFiveBath'
    | 'FourPointFiveBath'
    | null;

  /**
   * Number of bedrooms in the unit. Null if no value is set.
   */
  UnitBedrooms?:
    | 'NotSet'
    | 'Studio'
    | 'OneBed'
    | 'TwoBed'
    | 'ThreeBed'
    | 'FourBed'
    | 'FiveBed'
    | 'SixBed'
    | 'SevenBed'
    | 'EightBed'
    | 'NineBedPlus'
    | null;

  /**
   * Unit number.
   */
  UnitNumber?: string | null;

  /**
   * Size of the unit. Null if no value is set.
   */
  UnitSize?: number | null;
}

export type UnitListResponse = Array<RentalUnit>;

export type UnitRetrieveListingsResponse = Array<ListingAPI.Listing>;

export interface UnitCreateParams {
  /**
   * Address.
   */
  Address: AssociationsAPI.SaveAddress;

  /**
   * Rental property unique identifier that the unit belongs to.
   */
  PropertyId: number;

  /**
   * Unit number. Must be unique within the rental property and cannot exceed 30
   * characters.
   */
  UnitNumber: string;

  /**
   * Description of the unit. The description cannot exceed 65,535 characters.
   */
  Description?: string | null;

  /**
   * Market rent of the unit. This value is separate from the lease rent and is
   * typically used for rental listings.
   */
  MarketRent?: number | null;

  /**
   * Number of bathrooms in the unit.
   */
  UnitBathrooms?:
    | 'NotSet'
    | 'OneBath'
    | 'OnePointFiveBath'
    | 'TwoBath'
    | 'TwoPointFiveBath'
    | 'ThreeBath'
    | 'FourBath'
    | 'FiveBath'
    | 'FivePlusBath'
    | 'ThreePointFiveBath'
    | 'FourPointFiveBath'
    | null;

  /**
   * Number of bedrooms in the unit.
   */
  UnitBedrooms?:
    | 'NotSet'
    | 'Studio'
    | 'OneBed'
    | 'TwoBed'
    | 'ThreeBed'
    | 'FourBed'
    | 'FiveBed'
    | 'SixBed'
    | 'SevenBed'
    | 'EightBed'
    | 'NineBedPlus'
    | null;

  /**
   * Size of the unit.
   */
  UnitSize?: number | null;
}

export interface UnitUpdateParams {
  /**
   * Address.
   */
  Address: AssociationsAPI.SaveAddress;

  /**
   * Unit number. Must be unique within the rental property and cannot exceed 30
   * characters.
   */
  UnitNumber: string;

  /**
   * Description of the unit. The description cannot exceed 65,535 characters.
   */
  Description?: string | null;

  /**
   * Market rent of the unit. This value is separate from the lease rent and is
   * typically used for rental listings.
   */
  MarketRent?: number | null;

  /**
   * Number of bathrooms in the unit.
   */
  UnitBathrooms?:
    | 'NotSet'
    | 'OneBath'
    | 'OnePointFiveBath'
    | 'TwoBath'
    | 'TwoPointFiveBath'
    | 'ThreeBath'
    | 'FourBath'
    | 'FiveBath'
    | 'FivePlusBath'
    | 'ThreePointFiveBath'
    | 'FourPointFiveBath'
    | null;

  /**
   * Number of bedrooms in the unit.
   */
  UnitBedrooms?:
    | 'NotSet'
    | 'Studio'
    | 'OneBed'
    | 'TwoBed'
    | 'ThreeBed'
    | 'FourBed'
    | 'FiveBed'
    | 'SixBed'
    | 'SevenBed'
    | 'EightBed'
    | 'NineBedPlus'
    | null;

  /**
   * Size of the unit.
   */
  UnitSize?: number | null;
}

export interface UnitListParams {
  /**
   * Filters results to any rental units that were updated on or after the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any rental units that were updated on or before the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

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
   * Filters results to rental units that belong to the specified set of property
   * ids.
   */
  propertyids?: Array<number>;
}

export interface UnitRetrieveListingsParams {
  /**
   * Filters results to only listings that are associated with the specified entity
   * id value. The id must be of the type specified in `EntityType` property.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that `EntityId` refers to.
   */
  entitytype?: 'Property' | 'RentalOwner';

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

Units.ListingResource = ListingResource;
Units.Listingcontacts = Listingcontacts;
Units.Amenities = Amenities;
Units.Images = Images;
Units.Notes = Notes;

export declare namespace Units {
  export {
    type RentalUnit as RentalUnit,
    type UnitListResponse as UnitListResponse,
    type UnitRetrieveListingsResponse as UnitRetrieveListingsResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
    type UnitRetrieveListingsParams as UnitRetrieveListingsParams,
  };

  export {
    ListingResource as ListingResource,
    type Listing as Listing,
    type ListingFile as ListingFile,
    type ListingCreateParams as ListingCreateParams,
  };

  export {
    Listingcontacts as Listingcontacts,
    type ListingContact as ListingContact,
    type ListingContactSave as ListingContactSave,
    type ListingcontactListResponse as ListingcontactListResponse,
    type ListingcontactCreateParams as ListingcontactCreateParams,
    type ListingcontactUpdateParams as ListingcontactUpdateParams,
    type ListingcontactListParams as ListingcontactListParams,
  };

  export {
    Amenities as Amenities,
    type RentalUnitFeatures as RentalUnitFeatures,
    type AmenityCreateParams as AmenityCreateParams,
  };

  export {
    Images as Images,
    type RentalUnitImage as RentalUnitImage,
    type ImageListResponse as ImageListResponse,
    type ImageUpdateOrderResponse as ImageUpdateOrderResponse,
    type ImageRetrieveParams as ImageRetrieveParams,
    type ImageUpdateParams as ImageUpdateParams,
    type ImageListParams as ImageListParams,
    type ImageDeleteParams as ImageDeleteParams,
    type ImageDownloadrequestsParams as ImageDownloadrequestsParams,
    type ImageUpdateOrderParams as ImageUpdateOrderParams,
    type ImageUploadrequestsParams as ImageUploadrequestsParams,
    type ImageVideolinkrequestsParams as ImageVideolinkrequestsParams,
  };

  export {
    Notes as Notes,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };
}
