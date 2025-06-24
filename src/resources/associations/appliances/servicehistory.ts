// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Servicehistory extends APIResource {
  /**
   * Creates a service history for an appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const serviceHistory =
   *   await client.associations.appliances.servicehistory.create(
   *     0,
   *     { Date: '2019-12-27', ServiceType: 'Installed' },
   *   );
   * ```
   */
  create(
    applianceID: number,
    body: ServicehistoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceHistory> {
    return this._client.post(path`/v1/associations/appliances/${applianceID}/servicehistory`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a specific service history record for a given appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const serviceHistory =
   *   await client.associations.appliances.servicehistory.retrieve(
   *     0,
   *     { applianceId: 0 },
   *   );
   * ```
   */
  retrieve(
    serviceHistoryID: number,
    params: ServicehistoryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ServiceHistory> {
    const { applianceId } = params;
    return this._client.get(
      path`/v1/associations/appliances/${applianceId}/servicehistory/${serviceHistoryID}`,
      options,
    );
  }

  /**
   * Retrieves all of the service history records for an appliance.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const serviceHistories =
   *   await client.associations.appliances.servicehistory.list(
   *     0,
   *   );
   * ```
   */
  list(
    applianceID: number,
    query: ServicehistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServicehistoryListResponse> {
    return this._client.get(path`/v1/associations/appliances/${applianceID}/servicehistory`, {
      query,
      ...options,
    });
  }
}

export interface ServiceHistory {
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

export type ServicehistoryListResponse = Array<ServiceHistory>;

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
    type ServiceHistory as ServiceHistory,
    type ServicehistoryListResponse as ServicehistoryListResponse,
    type ServicehistoryCreateParams as ServicehistoryCreateParams,
    type ServicehistoryRetrieveParams as ServicehistoryRetrieveParams,
    type ServicehistoryListParams as ServicehistoryListParams,
  };
}
