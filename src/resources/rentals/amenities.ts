// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Amenities extends APIResource {
  /**
   * Updates the amenities for a rental property.
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
  create(
    propertyID: number,
    body: AmenityCreateParams,
    options?: RequestOptions,
  ): APIPromise<RentalFeatures> {
    return this._client.put(path`/v1/rentals/${propertyID}/amenities`, { body, ...options });
  }

  /**
   * Retrieve all the amenities for a rental property.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(propertyID: number, options?: RequestOptions): APIPromise<RentalFeatures> {
    return this._client.get(path`/v1/rentals/${propertyID}/amenities`, options);
  }
}

/**
 * Rental property amenities.
 */
export interface RentalFeatures {
  /**
   * A list of overall property amenities.
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
   * A list of amenities that are included in rent.
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
}

export interface AmenityCreateParams {
  /**
   * A list of overall property amenities. Any previously saved values that are not
   * submitted in the update request will be deleted.
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
   * A list of amenities that are included in rent. Any previously saved values that
   * are not submitted in the update request will be deleted.
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
}

export declare namespace Amenities {
  export { type RentalFeatures as RentalFeatures, type AmenityCreateParams as AmenityCreateParams };
}
