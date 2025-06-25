// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssociationsAPI from '../associations/associations';
import * as AmenitiesAPI from './amenities';
import { Amenities, AmenityCreateParams, RentalFeatures } from './amenities';
import * as EpaysettingsAPI from './epaysettings';
import { EpaysettingCreateParams, Epaysettings } from './epaysettings';
import * as ImagesAPI from './images';
import {
  ImageDeleteParams,
  ImageDownloadRequestsParams,
  ImageListParams,
  ImageListResponse,
  ImageReorderRequest,
  ImageRetrieveParams,
  ImageUpdateOrderParams,
  ImageUpdateOrderResponse,
  ImageUpdateParams,
  ImageUploadRequestsParams,
  ImageVideoLinkRequestsParams,
  Images,
  ListingEntityFile,
  RentalImage,
  VideoLinkRequest,
} from './images';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import * as VendorsAPI from './vendors';
import {
  RentalPreferredVendor,
  VendorCreateParams,
  VendorCreateResponse,
  VendorListParams,
  VendorListResponse,
  Vendors,
} from './vendors';
import * as AppliancesAPI from './appliances/appliances';
import {
  ApplianceCreateParams,
  ApplianceListParams,
  ApplianceListResponse,
  ApplianceUpdateParams,
  Appliances,
  RentalAppliance,
} from './appliances/appliances';
import * as MeterreadingsAPI from './meterreadings/meterreadings';
import {
  MeterreadingListParams,
  MeterreadingListResponse,
  Meterreadings,
} from './meterreadings/meterreadings';
import * as OwnersAPI from './owners/owners';
import {
  OwnerCreateParams,
  OwnerListParams,
  OwnerListResponse,
  OwnerUpdateParams,
  Owners,
  RentalOwner,
} from './owners/owners';
import * as UnitsAPI from './units/units';
import {
  RentalUnit,
  UnitCreateParams,
  UnitListListingsParams,
  UnitListListingsResponse,
  UnitListParams,
  UnitListResponse,
  UnitUpdateParams,
  Units,
} from './units/units';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rentals extends APIResource {
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);
  vendors: VendorsAPI.Vendors = new VendorsAPI.Vendors(this._client);
  amenities: AmenitiesAPI.Amenities = new AmenitiesAPI.Amenities(this._client);
  epaysettings: EpaysettingsAPI.Epaysettings = new EpaysettingsAPI.Epaysettings(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
  meterreadings: MeterreadingsAPI.Meterreadings = new MeterreadingsAPI.Meterreadings(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  appliances: AppliancesAPI.Appliances = new AppliancesAPI.Appliances(this._client);
  owners: OwnersAPI.Owners = new OwnersAPI.Owners(this._client);

  /**
   * Creates a new rental property.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  create(body: RentalCreateParams, options?: RequestOptions): APIPromise<Rental> {
    return this._client.post('/v1/rentals', { body, ...options });
  }

  /**
   * Retrieve a specific rental property.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  retrieve(propertyID: number, options?: RequestOptions): APIPromise<Rental> {
    return this._client.get(path`/v1/rentals/${propertyID}`, options);
  }

  /**
   * Updates a rental property.
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
  update(propertyID: number, body: RentalUpdateParams, options?: RequestOptions): APIPromise<Rental> {
    return this._client.put(path`/v1/rentals/${propertyID}`, { body, ...options });
  }

  /**
   * Retrieves a list of rental properties.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(
    query: RentalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RentalListResponse> {
    return this._client.get('/v1/rentals', { query, ...options });
  }

  /**
   * Inactivates a rental property and all associated units. Any associated
   * property's owners that have no remaining active properties will be inactivated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  inactivate(propertyID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/rentals/${propertyID}/inactivationrequest`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Reactivates a rental property and all associated units. Any inactive rental
   * owners assigned to this property will also be reactivated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  reactivate(propertyID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/rentals/${propertyID}/reactivationrequest`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * This is an object that represents a rental property.
 */
export interface Rental {
  /**
   * Address.
   */
  Address?: AssociationsAPI.Address | null;

  /**
   * Rental property unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the rental property is active within the Buildium platform.
   */
  IsActive?: boolean;

  /**
   * Name of the rental property.
   */
  Name?: string | null;

  /**
   * Number of units in the rental property.
   */
  NumberUnits?: number;

  /**
   * The primary bank account that a rental property uses for its income and
   * expenses.
   */
  OperatingBankAccountId?: number;

  /**
   * This is an object that represents a property manager.
   */
  RentalManager?: AssociationsAPI.PropertyManager | null;

  /**
   * Indicates the sub type of the rental property.
   */
  RentalSubType?:
    | 'CondoTownhome'
    | 'MultiFamily'
    | 'SingleFamily'
    | 'Industrial'
    | 'Office'
    | 'Retail'
    | 'ShoppingCenter'
    | 'Storage'
    | 'ParkingSpace';

  /**
   * Indicates the type of rental property.
   */
  RentalType?: 'None' | 'Residential' | 'Commercial';

  /**
   * A property reserve is cash that a property manager keeps on hand in case of
   * unexpected expenses. It is available cash that isn't disbursed in an owner draw.
   */
  Reserve?: number;

  /**
   * Description of the rental property structure.
   */
  StructureDescription?: string | null;

  /**
   * Year the rental property was built.
   */
  YearBuilt?: number | null;
}

export type RentalListResponse = Array<Rental>;

export interface RentalCreateParams {
  /**
   * Address.
   */
  Address: AssociationsAPI.SaveAddress;

  /**
   * Rental property name. The value cannot exceed 127 characters.
   */
  Name: string;

  /**
   * The primary bank account that a rental property uses for its income and
   * expenses.
   */
  OperatingBankAccountId: number;

  /**
   * Subtype of the rental property.
   */
  RentalSubType:
    | 'CondoTownhome'
    | 'MultiFamily'
    | 'SingleFamily'
    | 'Industrial'
    | 'Office'
    | 'Retail'
    | 'ShoppingCenter'
    | 'Storage'
    | 'ParkingSpace';

  /**
   * Indicates the staff member identifier that acts as the property manager for this
   * rental property. Note, the staff member must have permissions to this rental to
   * be assigned as the property manager. Set this field to null if you don't want to
   * assign a staff member to the rental property.
   */
  PropertyManagerId?: number | null;

  /**
   * List of existing rental owner ID's that are owners of this property.
   */
  RentalOwnerIds?: Array<number> | null;

  /**
   * A property reserve is cash that a property manager keeps on hand in case of
   * unexpected expenses. It is available cash that isn't disbursed in an owner draw.
   */
  Reserve?: number | null;

  /**
   * Description of the rental property building. The description cannot exceed
   * 65,535 characters.
   */
  StructureDescription?: string | null;

  /**
   * Units of the rental property. If no values are provided, a default unit will be
   * created for the property. The number of units cannot exceed 100. If you need to
   * create more than 100 units for the property, use the
   * <a href="#operation/RentalUnitsExternalApi_CreateRentalUnit">Create a unit</a>
   * endpoint to create the additional units once the property has been created.
   */
  Units?: Array<RentalCreateParams.Unit> | null;

  /**
   * Indicates the year the rental property was built. If provided this value must be
   * a four digit integer between 1000 and the current year.
   */
  YearBuilt?: number | null;
}

export namespace RentalCreateParams {
  export interface Unit {
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
}

export interface RentalUpdateParams {
  /**
   * Address.
   */
  Address: AssociationsAPI.SaveAddress;

  /**
   * Rental property name. The value cannot exceed 127 characters.
   */
  Name: string;

  /**
   * The primary bank account that an rental property uses for its income and
   * expenses.
   */
  OperatingBankAccountId: number;

  /**
   * Subtype of the rental property
   */
  RentalSubType:
    | 'CondoTownhome'
    | 'MultiFamily'
    | 'SingleFamily'
    | 'Industrial'
    | 'Office'
    | 'Retail'
    | 'ShoppingCenter'
    | 'Storage'
    | 'ParkingSpace';

  /**
   * Indicates the staff member identifier that acts as the property manager for this
   * rental property. Note, the staff member must have permissions to this rental to
   * be assigned as the property manager. Set this field to null if you don't want to
   * assign a staff member to the rental property.
   */
  PropertyManagerId?: number | null;

  /**
   * A property reserve is cash that a property manager keeps on hand in case of
   * unexpected expenses. It is available cash that isn't disbursed in an owner draw.
   */
  Reserve?: number | null;

  /**
   * Description of the rental property building. The description cannot exceed
   * 65,535 characters.
   */
  StructureDescription?: string | null;

  /**
   * Indicates the year the rental property was built. If provided this value must be
   * a four digit integer between 1000 and the current year.
   */
  YearBuilt?: number | null;
}

export interface RentalListParams {
  /**
   * Filters results to any rental properties that were updated on or after the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any rental properties that were updated on or before the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to only rental properties whose city or state _contains_ the
   * specified value.
   */
  location?: string;

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
   * Filters results to only rental properties units whose Rental matches the
   * specified Id.
   */
  propertyids?: Array<number>;

  /**
   * Filters results to only rental properties whose RentalOwnerId matches the
   * specified Id.
   */
  rentalownerids?: Array<number>;

  /**
   * Filters results by the status of the rental property. If no status is specified
   * both `active` and `inactive` rental properties will be returned.
   */
  status?: 'Active' | 'InActive';

  /**
   * Filters results by the sub type of the rental property. If no sub type is
   * specified all sub types will be returned.
   */
  subtypes?: Array<
    | 'CondoTownhome'
    | 'MultiFamily'
    | 'SingleFamily'
    | 'Industrial'
    | 'Office'
    | 'Retail'
    | 'ShoppingCenter'
    | 'Storage'
    | 'ParkingSpace'
  >;

  /**
   * Filters results by the rental type. If no type is provided all types will be
   * returned.
   */
  types?: Array<'Residential' | 'Commercial'>;
}

Rentals.Units = Units;
Rentals.Vendors = Vendors;
Rentals.Amenities = Amenities;
Rentals.Epaysettings = Epaysettings;
Rentals.Images = Images;
Rentals.Meterreadings = Meterreadings;
Rentals.Notes = Notes;
Rentals.Appliances = Appliances;
Rentals.Owners = Owners;

export declare namespace Rentals {
  export {
    type Rental as Rental,
    type RentalListResponse as RentalListResponse,
    type RentalCreateParams as RentalCreateParams,
    type RentalUpdateParams as RentalUpdateParams,
    type RentalListParams as RentalListParams,
  };

  export {
    Units as Units,
    type RentalUnit as RentalUnit,
    type UnitListResponse as UnitListResponse,
    type UnitListListingsResponse as UnitListListingsResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
    type UnitListListingsParams as UnitListListingsParams,
  };

  export {
    Vendors as Vendors,
    type RentalPreferredVendor as RentalPreferredVendor,
    type VendorCreateResponse as VendorCreateResponse,
    type VendorListResponse as VendorListResponse,
    type VendorCreateParams as VendorCreateParams,
    type VendorListParams as VendorListParams,
  };

  export {
    Amenities as Amenities,
    type RentalFeatures as RentalFeatures,
    type AmenityCreateParams as AmenityCreateParams,
  };

  export { Epaysettings as Epaysettings, type EpaysettingCreateParams as EpaysettingCreateParams };

  export {
    Images as Images,
    type ImageReorderRequest as ImageReorderRequest,
    type ListingEntityFile as ListingEntityFile,
    type RentalImage as RentalImage,
    type VideoLinkRequest as VideoLinkRequest,
    type ImageListResponse as ImageListResponse,
    type ImageUpdateOrderResponse as ImageUpdateOrderResponse,
    type ImageRetrieveParams as ImageRetrieveParams,
    type ImageUpdateParams as ImageUpdateParams,
    type ImageListParams as ImageListParams,
    type ImageDeleteParams as ImageDeleteParams,
    type ImageDownloadRequestsParams as ImageDownloadRequestsParams,
    type ImageUpdateOrderParams as ImageUpdateOrderParams,
    type ImageUploadRequestsParams as ImageUploadRequestsParams,
    type ImageVideoLinkRequestsParams as ImageVideoLinkRequestsParams,
  };

  export {
    Meterreadings as Meterreadings,
    type MeterreadingListResponse as MeterreadingListResponse,
    type MeterreadingListParams as MeterreadingListParams,
  };

  export {
    Notes as Notes,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };

  export {
    Appliances as Appliances,
    type RentalAppliance as RentalAppliance,
    type ApplianceListResponse as ApplianceListResponse,
    type ApplianceCreateParams as ApplianceCreateParams,
    type ApplianceUpdateParams as ApplianceUpdateParams,
    type ApplianceListParams as ApplianceListParams,
  };

  export {
    Owners as Owners,
    type RentalOwner as RentalOwner,
    type OwnerListResponse as OwnerListResponse,
    type OwnerCreateParams as OwnerCreateParams,
    type OwnerUpdateParams as OwnerUpdateParams,
    type OwnerListParams as OwnerListParams,
  };
}
