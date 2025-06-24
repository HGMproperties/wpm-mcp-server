// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ServicehistoryAPI from './servicehistory';
import {
  RentalApplianceServiceHistory,
  Servicehistory,
  ServicehistoryCreateParams,
  ServicehistoryListParams,
  ServicehistoryListResponse,
  ServicehistoryRetrieveParams,
} from './servicehistory';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Appliances extends APIResource {
  servicehistory: ServicehistoryAPI.Servicehistory = new ServicehistoryAPI.Servicehistory(this._client);

  /**
   * Creates a rental property appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  create(body: ApplianceCreateParams, options?: RequestOptions): APIPromise<RentalAppliance> {
    return this._client.post('/v1/rentals/appliances', { body, ...options });
  }

  /**
   * Retrieves a rental appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  retrieve(applianceID: number, options?: RequestOptions): APIPromise<RentalAppliance> {
    return this._client.get(path`/v1/rentals/appliances/${applianceID}`, options);
  }

  /**
   * Updates a rental appliance.
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
  update(
    applianceID: number,
    body: ApplianceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RentalAppliance> {
    return this._client.put(path`/v1/rentals/appliances/${applianceID}`, { body, ...options });
  }

  /**
   * Retrieves all rental appliances.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(
    query: ApplianceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApplianceListResponse> {
    return this._client.get('/v1/rentals/appliances', { query, ...options });
  }

  /**
   * Deletes an appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  delete(applianceID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/rentals/appliances/${applianceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RentalAppliance {
  /**
   * Description of the appliance.
   */
  Description?: string | null;

  /**
   * Appliance unique identifier.
   */
  Id?: number;

  /**
   * Make of the appliance.
   */
  Make?: string | null;

  /**
   * Model of the appliance.
   */
  Model?: string | null;

  /**
   * Name of the appliance.
   */
  Name?: string | null;

  /**
   * Rental property unique identifier that the appliance belongs to.
   */
  PropertyId?: number;

  /**
   * Rental unit unique identifier that the appliance belongs to.
   */
  UnitId?: number | null;

  /**
   * Warranty end date of the appliance.
   */
  WarrantyEndDate?: string | null;
}

export type ApplianceListResponse = Array<RentalAppliance>;

export interface ApplianceCreateParams {
  /**
   * The name of the appliance. The name cannot exceed 100 characters.
   */
  Name: string;

  /**
   * Rental property unique identifier that the appliance belongs to.
   */
  PropertyId: number;

  /**
   * The description of the appliance. The description cannot exceed 500 characters.
   */
  Description?: string | null;

  /**
   * The install date for the appliance's warranty. Must be formatted as
   * `YYYY-MM-DD`.
   */
  InstallDate?: string | null;

  /**
   * The make of the appliance. The make cannot exceed 30 characters.
   */
  Make?: string | null;

  /**
   * The model of the appliance. The model cannot exceed 30 characters.
   */
  Model?: string | null;

  /**
   * Rental unit unique identifier that the appliance belongs to.
   */
  UnitId?: number | null;

  /**
   * The end date for the appliance's warranty. The warranty's end date cannot be
   * before the installed date, if it exists. Must be formatted as `YYYY-MM-DD`.
   */
  WarrantyEndDate?: string | null;
}

export interface ApplianceUpdateParams {
  /**
   * The name of the rental appliance. The name cannot exceed 100 characters.
   */
  Name: string;

  /**
   * The description of the rental appliance. The description cannot exceed 500
   * characters.
   */
  Description?: string | null;

  /**
   * The make of the rental appliance. The make cannot exceed 30 characters.
   */
  Make?: string | null;

  /**
   * The model of the rental appliance. The model cannot exceed 30 characters.
   */
  Model?: string | null;

  /**
   * The unit identifier the rental appliance belongs to. Must be within the rental
   * property the appliance is in.
   */
  UnitId?: number | null;

  /**
   * The end date for the rental appliance's warranty. The warranty's end date cannot
   * be before the installed date, if it exists. Must be formatted as `YYYY-MM-DD`.
   */
  WarrantyEndDate?: string | null;
}

export interface ApplianceListParams {
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
   * Filters results to appliances associated to any of the specified rental property
   * identifiers.
   */
  propertyids?: Array<number>;

  /**
   * Filters results to appliances associated to any of the specified rental unit
   * identifiers.
   */
  unitids?: Array<number>;
}

Appliances.Servicehistory = Servicehistory;

export declare namespace Appliances {
  export {
    type RentalAppliance as RentalAppliance,
    type ApplianceListResponse as ApplianceListResponse,
    type ApplianceCreateParams as ApplianceCreateParams,
    type ApplianceUpdateParams as ApplianceUpdateParams,
    type ApplianceListParams as ApplianceListParams,
  };

  export {
    Servicehistory as Servicehistory,
    type RentalApplianceServiceHistory as RentalApplianceServiceHistory,
    type ServicehistoryListResponse as ServicehistoryListResponse,
    type ServicehistoryCreateParams as ServicehistoryCreateParams,
    type ServicehistoryRetrieveParams as ServicehistoryRetrieveParams,
    type ServicehistoryListParams as ServicehistoryListParams,
  };
}
