// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResidentsettingsPartialpaymentsettingsAPI from '../administration/residentsettings/partialpaymentsettings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Partialpaymentsettings extends APIResource {
  /**
   * Retrieves partial payment settings for a lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const partialPaymentSettingsMessage =
   *   await client.leases.partialpaymentsettings.retrieve(0);
   * ```
   */
  retrieve(
    leaseID: number,
    options?: RequestOptions,
  ): APIPromise<ResidentsettingsPartialpaymentsettingsAPI.PartialPaymentSettingsMessage> {
    return this._client.get(path`/v1/leases/${leaseID}/partialpaymentsettings`, options);
  }

  /**
   * Updates partial payment settings for a lease.
   *
   * <h4>Required Permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *             <span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const partialPaymentSettingsMessage =
   *   await client.leases.partialpaymentsettings.update(0);
   * ```
   */
  update(
    leaseID: number,
    body: PartialpaymentsettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResidentsettingsPartialpaymentsettingsAPI.PartialPaymentSettingsMessage> {
    return this._client.patch(path`/v1/leases/${leaseID}/partialpaymentsettings`, { body, ...options });
  }
}

export interface PartialpaymentsettingUpdateParams {
  /**
   * Whether or not the ownership account payments are required in full.
   */
  RequirePaymentsInFull?: boolean | null;
}

export declare namespace Partialpaymentsettings {
  export { type PartialpaymentsettingUpdateParams as PartialpaymentsettingUpdateParams };
}
