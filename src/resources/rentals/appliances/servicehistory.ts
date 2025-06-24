// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Servicehistory extends APIResource {
  /**
   * Creates a service history record for an appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  create(
    applianceID: number,
    body: ServicehistoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<RentalApplianceServiceHistory> {
    return this._client.post(path`/v1/rentals/appliances/${applianceID}/servicehistory`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a specific service history record for a given appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  retrieve(
    serviceHistoryID: number,
    params: ServicehistoryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RentalApplianceServiceHistory> {
    const { applianceId } = params;
    return this._client.get(
      path`/v1/rentals/appliances/${applianceId}/servicehistory/${serviceHistoryID}`,
      options,
    );
  }

  /**
   * Retrieves all of the service history records for an appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(
    applianceID: number,
    query: ServicehistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServicehistoryListResponse> {
    return this._client.get(path`/v1/rentals/appliances/${applianceID}/servicehistory`, {
      query,
      ...options,
    });
  }
}

export interface RentalApplianceServiceHistory {
  /**
   * Date of the service.
   */
  Date?: string | null;

  /**
   * Details of the service.
   */
  Details?: string | null;

  /**
   * Appliance service history unique identifier.
   */
  Id?: number;

  /**
   * Type of service performed.
   */
  ServiceType?: 'Installed' | 'Serviced' | 'Uninstalled';
}

export type ServicehistoryListResponse = Array<RentalApplianceServiceHistory>;

export interface ServicehistoryCreateParams {
  /**
   * Date the service was performed. Must be formatted as `YYYY-MM-DD`.
   */
  Date: string;

  /**
   * Specifies the type of service that occured.
   */
  ServiceType: 'Installed' | 'Serviced' | 'Uninstalled';

  /**
   * The service history details associated with the appliance. The description
   * cannot exceed 100 characters.
   */
  Details?: string | null;
}

export interface ServicehistoryRetrieveParams {
  applianceId: number;
}

export interface ServicehistoryListParams {
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

export declare namespace Servicehistory {
  export {
    type RentalApplianceServiceHistory as RentalApplianceServiceHistory,
    type ServicehistoryListResponse as ServicehistoryListResponse,
    type ServicehistoryCreateParams as ServicehistoryCreateParams,
    type ServicehistoryRetrieveParams as ServicehistoryRetrieveParams,
    type ServicehistoryListParams as ServicehistoryListParams,
  };
}
