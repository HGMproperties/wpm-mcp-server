// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Moveouts extends APIResource {
  /**
   * Creates move out data for a single tenant on a given lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseMoveOutData =
   *   await client.leases.moveouts.create(0, {
   *     MoveOutDate: '2019-12-27',
   *     TenantId: 0,
   *   });
   * ```
   */
  create(leaseID: number, body: MoveoutCreateParams, options?: RequestOptions): APIPromise<LeaseMoveOutData> {
    return this._client.post(path`/v1/leases/${leaseID}/moveouts`, { body, ...options });
  }

  /**
   * Retrieves move out data for a single tenant on a given lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Tenants</span> - `View`
   *
   * @example
   * ```ts
   * const leaseMoveOutData =
   *   await client.leases.moveouts.retrieve(0, { leaseId: 0 });
   * ```
   */
  retrieve(
    tenantID: number,
    params: MoveoutRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LeaseMoveOutData> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/moveouts/${tenantID}`, options);
  }

  /**
   * Retrieves a list of move out dates for a given lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Tenants</span> - `View`
   *
   * @example
   * ```ts
   * const leaseMoveOutData = await client.leases.moveouts.list(
   *   0,
   * );
   * ```
   */
  list(
    leaseID: number,
    query: MoveoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MoveoutListResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/moveouts`, { query, ...options });
  }

  /**
   * Deletes move out data for a tenant on a given lease.
   *
   * <h4>Required Permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Rentals > Tenants</span> - `View`
   *
   * @example
   * ```ts
   * await client.leases.moveouts.delete(0, { leaseId: 0 });
   * ```
   */
  delete(tenantID: number, params: MoveoutDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { leaseId } = params;
    return this._client.delete(path`/v1/leases/${leaseId}/moveouts/${tenantID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LeaseMoveOutData {
  /**
   * Date the tenant will move out of the leased unit.
   */
  MoveOutDate?: string;

  /**
   * Date the tenant move out notice was received.
   */
  NoticeGivenDate?: string | null;

  /**
   * Tenant unique identifier.
   */
  TenantId?: number;
}

export type MoveoutListResponse = Array<LeaseMoveOutData>;

export interface MoveoutCreateParams {
  /**
   * Date the tenant(s) will move out of the leased unit.
   */
  MoveOutDate: string;

  /**
   * Tenant unique identifier.
   */
  TenantId: number;

  /**
   * Date the tenant(s) gave their move out notice.
   */
  NoticeGivenDate?: string | null;
}

export interface MoveoutRetrieveParams {
  leaseId: number;
}

export interface MoveoutListParams {
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

export interface MoveoutDeleteParams {
  leaseId: number;
}

export declare namespace Moveouts {
  export {
    type LeaseMoveOutData as LeaseMoveOutData,
    type MoveoutListResponse as MoveoutListResponse,
    type MoveoutCreateParams as MoveoutCreateParams,
    type MoveoutRetrieveParams as MoveoutRetrieveParams,
    type MoveoutListParams as MoveoutListParams,
    type MoveoutDeleteParams as MoveoutDeleteParams,
  };
}
