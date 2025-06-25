// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EpaysettingsAPI from '../associations/epaysettings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Epaysettings extends APIResource {
  /**
   * Updates ePay settings for a rental property.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  create(
    propertyID: number,
    body: EpaysettingCreateParams,
    options?: RequestOptions,
  ): APIPromise<EpaysettingsAPI.EPaySettings> {
    return this._client.put(path`/v1/rentals/${propertyID}/epaysettings`, { body, ...options });
  }

  /**
   * Retrieves ePay settings for a rental property.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(propertyID: number, options?: RequestOptions): APIPromise<EpaysettingsAPI.EPaySettings> {
    return this._client.get(path`/v1/rentals/${propertyID}/epaysettings`, options);
  }
}

export interface EpaysettingCreateParams {
  /**
   * Credit card payment settings.
   */
  CreditCardPayments: Shared.CcPaymentsPutMessage;

  /**
   * Electronic payment settings.
   */
  EFTPayments: Shared.EftPaymentsPutMessage;

  /**
   * Offline payment settings.
   */
  OfflinePayments: Shared.OfflinePaymentsPutMessage;
}

export declare namespace Epaysettings {
  export { type EpaysettingCreateParams as EpaysettingCreateParams };
}
