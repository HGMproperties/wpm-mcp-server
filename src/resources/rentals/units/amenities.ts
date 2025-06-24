// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Amenities extends APIResource {
  /**
   * Updates the amenities for a rental unit.
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
    unitID: number,
    body: AmenityCreateParams,
    options?: RequestOptions,
  ): APIPromise<RentalUnitFeatures> {
    return this._client.put(path`/v1/rentals/units/${unitID}/amenities`, { body, ...options });
  }

  /**
   * Retrieves all amenities for a rental unit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(unitID: number, options?: RequestOptions): APIPromise<RentalUnitFeatures> {
    return this._client.get(path`/v1/rentals/units/${unitID}/amenities`, options);
  }
}

/**
 * Rental unit amenities.
 */
export interface RentalUnitFeatures {
  /**
   * A list of unit amenities.
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
}

export interface AmenityCreateParams {
  /**
   * A list of unit amenities. Any existing amenities associated with the unit that
   * are not submitted in the request will be removed from the unit.
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
}

export declare namespace Amenities {
  export { type RentalUnitFeatures as RentalUnitFeatures, type AmenityCreateParams as AmenityCreateParams };
}
