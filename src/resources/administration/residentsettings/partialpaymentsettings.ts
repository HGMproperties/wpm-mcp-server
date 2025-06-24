// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Partialpaymentsettings extends APIResource {
  /**
   * Retrieves the partial payment settings for residents.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Application Settings</span> - `View`
   *
   * @example
   * ```ts
   * const partialPaymentSettingsMessage =
   *   await client.administration.residentsettings.partialpaymentsettings.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<PartialPaymentSettingsMessage> {
    return this._client.get('/v1/administration/residentsettings/partialpaymentsettings', options);
  }

  /**
   * Updates the partial payment settings for residents.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const partialPaymentSettingsMessage =
   *   await client.administration.residentsettings.partialpaymentsettings.update();
   * ```
   */
  update(
    body: PartialpaymentsettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PartialPaymentSettingsMessage> {
    return this._client.patch('/v1/administration/residentsettings/partialpaymentsettings', {
      body,
      ...options,
    });
  }
}

export interface PartialPaymentSettingsMessage {
  /**
   * Partial payment settings.
   */
  RequirePaymentsInFull?: boolean;
}

export interface PartialPaymentSettingsPatchMessage {
  /**
   * Whether or not the ownership account payments are required in full.
   */
  RequirePaymentsInFull?: boolean | null;
}

export interface PartialpaymentsettingUpdateParams {
  /**
   * Whether or not the ownership account payments are required in full.
   */
  RequirePaymentsInFull?: boolean | null;
}

export declare namespace Partialpaymentsettings {
  export {
    type PartialPaymentSettingsMessage as PartialPaymentSettingsMessage,
    type PartialPaymentSettingsPatchMessage as PartialPaymentSettingsPatchMessage,
    type PartialpaymentsettingUpdateParams as PartialpaymentsettingUpdateParams,
  };
}
