// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  CreditCardPayments: EpaysettingCreateParams.CreditCardPayments;

  /**
   * Electronic payment settings.
   */
  EFTPayments: EpaysettingCreateParams.EftPayments;

  /**
   * Offline payment settings.
   */
  OfflinePayments: EpaysettingCreateParams.OfflinePayments;
}

export namespace EpaysettingCreateParams {
  /**
   * Credit card payment settings.
   */
  export interface CreditCardPayments {
    /**
     * Indicates whether credit card payments are enabled in the Buildium Resident
     * Center for all residents of this property. Note, to enable credit card payments
     * the operating bank account for the property must have credit card payments
     * provisioned.
     */
    PaymentsEnabled: boolean;
  }

  /**
   * Electronic payment settings.
   */
  export interface EftPayments {
    /**
     * Indicates whether EFT payments are enabled in the Buildium Resident Center for
     * all residents of this property. Note, to enable EFT payments the operating bank
     * account for the property must have EFT payments provisioned.
     */
    PaymentsEnabled: boolean;
  }

  /**
   * Offline payment settings.
   */
  export interface OfflinePayments {
    /**
     * Indicates whether to display the company address along with the offline payment
     * information. If `DisplayInfoInResidentCenter` is false the company address will
     * not be displayed.
     */
    DisplayCompanyAddress: boolean;

    /**
     * Indicates whether the offline payment information is displayed in the Buildium
     * Resident Center.
     */
    DisplayInfoInResidentCenter: boolean;

    /**
     * Directions for how to make offline payments. The value cannot exceed 65,535
     * characters. If `DisplayInfoInResidentCenter` is false the payment instructions
     * will not be displayed.
     */
    PaymentInstructions?: string | null;
  }
}

export declare namespace Epaysettings {
  export { type EpaysettingCreateParams as EpaysettingCreateParams };
}
