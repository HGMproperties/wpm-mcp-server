// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PartialpaymentsettingsAPI from '../../administration/residentsettings/partialpaymentsettings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Partialpaymentsettings extends APIResource {
  /**
   * Retrieves partial payment settings for an ownership account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > OwnershipAccounts</span> - `View`
   *
   * @example
   * ```ts
   * const partialPaymentSettingsMessage =
   *   await client.associations.ownershipaccounts.partialpaymentsettings.list(
   *     0,
   *   );
   * ```
   */
  list(
    ownershipAccountID: number,
    options?: RequestOptions,
  ): APIPromise<PartialpaymentsettingsAPI.PartialPaymentSettingsMessage> {
    return this._client.get(
      path`/v1/associations/ownershipaccounts/${ownershipAccountID}/partialpaymentsettings`,
      options,
    );
  }

  /**
   * Updates partial payment settings for an ownership account.
   *
   * <h4>Required Permission(s):</h4><span class="permissionBlock">Associations > Ownership Accounts</span> - `View` `Edit`
   *             <span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const partialPaymentSettingsMessage =
   *   await client.associations.ownershipaccounts.partialpaymentsettings.patchAll(
   *     0,
   *   );
   * ```
   */
  patchAll(
    ownershipAccountID: number,
    body: PartialpaymentsettingPatchAllParams,
    options?: RequestOptions,
  ): APIPromise<PartialpaymentsettingsAPI.PartialPaymentSettingsMessage> {
    return this._client.patch(
      path`/v1/associations/ownershipaccounts/${ownershipAccountID}/partialpaymentsettings`,
      { body, ...options },
    );
  }
}

export interface PartialpaymentsettingPatchAllParams {
  /**
   * Whether or not the ownership account payments are required in full.
   */
  RequirePaymentsInFull?: boolean | null;
}

export declare namespace Partialpaymentsettings {
  export { type PartialpaymentsettingPatchAllParams as PartialpaymentsettingPatchAllParams };
}
