// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ListingAPI from './listing';
import * as AssociationsAPI from '../../associations/associations';
import * as ListingcontactsAPI from './listingcontacts';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ListingResource extends APIResource {
  /**
   * This endpoint can be used to both _create_ and _update_ a listing. If no listing
   * exists for the unit one will be created, otherwise the existing listing will be
   * updated. A unit can only ever have one active listing.
   *
   * Upon creation the listing will post immediately to your Buildium public website,
   * and will post to the selected syndicated sites within 24-48 hours. Updates to
   * the listing will appear immediately in your Buildium public website and
   * propagated to syndicated sites within 24-48 hours.
   *
   * Note, the listing will automatically pull in the information, features, and
   * media that exists for the property and unit details.
   *
   * <span class="permissionBlock">Rentals > Listings</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Rentals > Rental properties and units</span> -
   * `View` `Edit`
   */
  create(unitID: number, body: ListingCreateParams, options?: RequestOptions): APIPromise<Listing> {
    return this._client.put(path`/v1/rentals/units/${unitID}/listing`, { body, ...options });
  }

  /**
   * Retrieves a specific listing.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Rental properties and units</span> -
   * `View`
   */
  list(unitID: number, options?: RequestOptions): APIPromise<Listing> {
    return this._client.get(path`/v1/rentals/units/${unitID}/listing`, options);
  }

  /**
   * Deleting a listing will immediately remove it from your Buildium public website.
   * The listing will also be removed from any syndicated sites within 24-48 hours.
   *
   * Listings manually created on craigslist using the Buildium guided tool will not
   * be removed. The listing must be removed using craigslist's tools provided in
   * your craigslist account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View` `Edit` `Delete`
   */
  deleteAll(unitID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/rentals/units/${unitID}/listing`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Listing {
  /**
   * The date the unit will be available to move in.
   */
  AvailableDate?: string;

  /**
   * The contact information for the listing.
   */
  Contact?: ListingcontactsAPI.ListingContact | null;

  /**
   * The deposit amount for the unit.
   */
  Deposit?: number | null;

  /**
   * Indicates if the listing is managed by an external vendor. Note, the `Contact`
   * property will be `null` if the this property is `true` as the contact
   * information is managed by a vendor outside of Buildium.
   */
  IsManagedExternally?: boolean;

  /**
   * A summary of the lease terms.
   */
  LeaseTerms?: string | null;

  /**
   * The date the listing was created in Buildium. It does not reflect when the
   * listing was syndicated and listed in external systems. It can take 24-48 hours
   * for a listing to be syndicated once it is created in Buildium.
   */
  ListingDate?: string;

  /**
   * Details of the unit property.
   */
  Property?: Listing.Property | null;

  /**
   * The asking rent amount for this unit.
   */
  Rent?: number;

  /**
   * The URL to the online rental application hosted by Buildium.
   */
  RentalApplicationUrl?: string | null;

  /**
   * Details of the unit.
   */
  Unit?: Listing.Unit | null;
}

export namespace Listing {
  /**
   * Details of the unit property.
   */
  export interface Property {
    /**
     * Address.
     */
    Address?: AssociationsAPI.Address | null;

    /**
     * List of features for the property.
     */
    Features?: Array<
      | 'LaundryRoom'
      | 'WheelchairAccess'
      | 'DoorAttendant'
      | 'Elevator'
      | 'Parking'
      | 'StorageUnits'
      | 'Pool'
      | 'FitnessCenter'
      | 'TennisCourt'
      | 'ClubHouse'
      | 'Power'
      | 'ParkingCommercial'
      | 'SprinklerSystem'
      | 'DockHighDoorsOrLoadingAvailable'
      | 'Availability24Hours'
      | 'AccentWalls'
      | 'BasketballCourt'
      | 'Bilingual'
      | 'BoatDocks'
      | 'BusinessCenter'
      | 'CarWashArea'
      | 'ChildCare'
      | 'ClubDiscount'
      | 'ConferenceRoom'
      | 'Concierge'
      | 'FreeWeights'
      | 'FurnishedAvailable'
      | 'GamingStations'
      | 'Garage'
      | 'Gate'
      | 'GroceryService'
      | 'GroupExercise'
      | 'GuestRoom'
      | 'Housekeeping'
      | 'HouseSitting'
      | 'JoggingWalkingTrails'
      | 'LakeFront'
      | 'LakeAccess'
      | 'Library'
      | 'MealService'
      | 'MediaRoom'
      | 'MultiUseRoom'
      | 'NightPatrol'
      | 'OnSiteMaintenance'
      | 'OnSiteManagement'
      | 'PackageReceiving'
      | 'PerDiemAccepted'
      | 'PlayGround'
      | 'Racquetball'
      | 'RecRoom'
      | 'Recycling'
      | 'Sauna'
      | 'ShortTermLease'
      | 'SmokeFree'
      | 'Spa'
      | 'Sundeck'
      | 'Transportation'
      | 'TVLounge'
      | 'ValetTrash'
      | 'Vintage'
      | 'VolleyballCourt'
      | 'WirelessInternet'
      | 'HighSpeedInternet'
    > | null;

    /**
     * List of media files associated with the property.
     */
    Files?: Array<ListingAPI.ListingFile> | null;

    /**
     * Rental property unique identifier.
     */
    Id?: number;

    /**
     * The list of amenities included in rent the property has.
     */
    IncludedInRent?: Array<
      | 'Gas'
      | 'Electric'
      | 'Trash'
      | 'Water'
      | 'HotWater'
      | 'Telephone'
      | 'Heat'
      | 'Cable'
      | 'AirCon'
      | 'Satellite'
      | 'Sewer'
      | 'BroadbandInternet'
    > | null;

    /**
     * Name of the rental property.
     */
    Name?: string | null;

    /**
     * Number of units in the rental property.
     */
    NumberUnits?: number;

    /**
     * Description of the rental property structure.
     */
    StructureDescription?: string | null;

    /**
     * Year the rental property was built.
     */
    YearBuilt?: number | null;
  }

  /**
   * Details of the unit.
   */
  export interface Unit {
    /**
     * Address.
     */
    Address?: AssociationsAPI.Address | null;

    /**
     * Description of the unit.
     */
    Description?: string | null;

    /**
     * List of features for the unit.
     */
    Features?: Array<
      | 'CableReady'
      | 'Microwave'
      | 'HardwoodFloors'
      | 'HighSpeedInternet'
      | 'AirConditioning'
      | 'Refrigerator'
      | 'Dishwasher'
      | 'WalkinClosets'
      | 'BalconyOrDeckOrPatio'
      | 'GarageParking'
      | 'Carport'
      | 'FencedYard'
      | 'LaundryRoomOrHookups'
      | 'Fireplace'
      | 'CableReadyCommercial'
      | 'HighSpeedInternetCommercial'
      | 'AirConditioningCommercial'
      | 'Heating'
      | 'OvenOrRange'
      | 'HeatElectric'
      | 'HeatGas'
      | 'HeatOil'
      | 'PetsAllowed'
      | 'Balcony'
      | 'PrivateBalcony'
      | 'PrivatePatio'
      | 'Dryer'
      | 'Heat'
      | 'WD_Hookup'
      | 'Washer'
      | 'AdditionalStorage'
      | 'Alarm'
      | 'Carpet'
      | 'CeilingFan'
      | 'ControlledAccess'
      | 'Courtyard'
      | 'Disposal'
      | 'DoubleSinkVanity'
      | 'FramedMirrors'
      | 'Furnished'
      | 'Handrails'
      | 'IndividualClimateControl'
      | 'IslandKitchen'
      | 'LinenCloset'
      | 'Pantry'
      | 'Satellite'
      | 'Skylight'
      | 'TileFlooring'
      | 'VaultedCeiling'
      | 'View'
      | 'VinylFlooring'
      | 'WheelChair'
      | 'WindowCoverings'
      | 'DogFriendly'
      | 'CatFriendly'
    > | null;

    /**
     * List of media files associated with the unit.
     */
    Files?: Array<ListingAPI.ListingFile> | null;

    /**
     * Rental unit unique identifier.
     */
    Id?: number;

    /**
     * Market rent of the unit. This value is separate from the lease rent and is
     * typically used for rental listings. Null if no value is set.
     */
    MarketRent?: number | null;

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
}

export interface ListingFile {
  /**
   * The name of the file.
   */
  Name?: string | null;

  /**
   * Indicates the media type of file.
   */
  Type?: 'Image' | 'Video';

  /**
   * The the full URL to access the file.
   */
  Url?: string | null;
}

export interface ListingCreateParams {
  /**
   * The date the listing is available.
   */
  AvailableDate: string;

  IsManagedExternally: boolean;

  /**
   * Rent for the listing.
   */
  Rent: number;

  /**
   * The contact Id for the listing.
   */
  ContactId?: number | null;

  /**
   * Deposit for the listing.
   */
  Deposit?: number | null;

  /**
   * The lease term for the listing.
   */
  LeaseTerms?: string | null;
}

export declare namespace ListingResource {
  export {
    type Listing as Listing,
    type ListingFile as ListingFile,
    type ListingCreateParams as ListingCreateParams,
  };
}
