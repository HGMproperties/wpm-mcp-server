// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Units extends APIResource {
  /**
   * Retrieves the owner occupancy status for an association unit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   * <span class="permissionBlock">Associations > Ownership Accounts</span> - `View`
   *
   * @example
   * ```ts
   * const associationOwnerUnitOccupancyStatus =
   *   await client.associations.owners.units.retrieve(0, {
   *     ownerId: 0,
   *   });
   * ```
   */
  retrieve(
    unitID: number,
    params: UnitRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AssociationOwnerUnitOccupancyStatus> {
    const { ownerId } = params;
    return this._client.get(path`/v1/associations/owners/${ownerId}/units/${unitID}`, options);
  }

  /**
   * Updates whether a unit is occupied by the association owner.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`
   * <span class="permissionBlock">Associations > Ownership Accounts</span> - `View`
   *
   * @example
   * ```ts
   * const associationOwnerUnitOccupancyStatus =
   *   await client.associations.owners.units.update(0, {
   *     ownerId: 0,
   *     IsOccupied: true,
   *   });
   * ```
   */
  update(
    unitID: number,
    params: UnitUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationOwnerUnitOccupancyStatus> {
    const { ownerId, ...body } = params;
    return this._client.put(path`/v1/associations/owners/${ownerId}/units/${unitID}`, { body, ...options });
  }

  /**
   * Retrieves the occupancy status for all of the units owned by the association
   * owner.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   * <span class="permissionBlock">Associations > Ownership Accounts</span> - `View`
   *
   * @example
   * ```ts
   * const associationOwnerUnitOccupancyStatuses =
   *   await client.associations.owners.units.list(0);
   * ```
   */
  list(
    ownerID: number,
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitListResponse> {
    return this._client.get(path`/v1/associations/owners/${ownerID}/units`, { query, ...options });
  }
}

export interface AssociationOwnerUnitOccupancyStatus {
  /**
   * Indicates whether the unit is occupied by the association owner.
   */
  IsOccupied?: boolean;

  /**
   * Association unit unique identifier.
   */
  UnitId?: number;
}

export type UnitListResponse = Array<AssociationOwnerUnitOccupancyStatus>;

export interface UnitRetrieveParams {
  ownerId: number;
}

export interface UnitUpdateParams {
  /**
   * Path param:
   */
  ownerId: number;

  /**
   * Body param: Indicates whether the unit is occupied by the association owner.
   */
  IsOccupied: boolean;
}

export interface UnitListParams {
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

export declare namespace Units {
  export {
    type AssociationOwnerUnitOccupancyStatus as AssociationOwnerUnitOccupancyStatus,
    type UnitListResponse as UnitListResponse,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };
}
