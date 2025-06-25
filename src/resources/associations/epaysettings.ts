// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Epaysettings extends APIResource {
  /**
   * Retrieves ePay settings for an association.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const ePaySettings =
   *   await client.associations.epaysettings.retrieve(0);
   * ```
   */
  retrieve(associationID: number, options?: RequestOptions): APIPromise<EPaySettings> {
    return this._client.get(path`/v1/associations/${associationID}/epaysettings`, options);
  }

  /**
   * Updates ePay settings for an association.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const ePaySettings =
   *   await client.associations.epaysettings.update(0, {
   *     CreditCardPayments: { PaymentsEnabled: true },
   *     EFTPayments: { PaymentsEnabled: true },
   *     OfflinePayments: {
   *       DisplayCompanyAddress: true,
   *       DisplayInfoInResidentCenter: true,
   *     },
   *   });
   * ```
   */
  update(
    associationID: number,
    body: EpaysettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EPaySettings> {
    return this._client.put(path`/v1/associations/${associationID}/epaysettings`, { body, ...options });
  }
}

export interface EPaySettings {
  /**
   * Credit card payment settings.
   */
  CreditCardPayments?: EPaySettings.CreditCardPayments | null;

  /**
   * Electronic payment settings.
   */
  EFTPayments?: EPaySettings.EftPayments | null;

  /**
   * Offline payment settings.
   */
  OfflinePayments?: EPaySettings.OfflinePayments | null;
}

export namespace EPaySettings {
  /**
   * Credit card payment settings.
   */
  export interface CreditCardPayments {
    /**
     * Indicates whether credit card payments are enabled in the Buildium Resident
     * Center for all residents of this property.
     */
    PaymentsEnabled?: boolean;
  }

  /**
   * Electronic payment settings.
   */
  export interface EftPayments {
    /**
     * Indicates whether EFT payments are enabled in the Buildium Resident Center for
     * all residents of this property.
     */
    PaymentsEnabled?: boolean;
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
    DisplayCompanyAddress?: boolean;

    /**
     * Indicates whether the offline payment information is displayed in the Buildium
     * Resident Center.
     */
    DisplayInfoInResidentCenter?: boolean;

    /**
     * Directions for how to make offline payments. If `DisplayInfoInResidentCenter` is
     * false the payment instructions will not be displayed.
     */
    PaymentInstructions?: string | null;
  }
}

export interface EPaySettingsPut {
  /**
   * Credit card payment settings.
   */
  CreditCardPayments: EPaySettingsPut.CreditCardPayments;

  /**
   * Electronic payment settings.
   */
  EFTPayments: EPaySettingsPut.EftPayments;

  /**
   * Offline payment settings.
   */
  OfflinePayments: EPaySettingsPut.OfflinePayments;
}

export namespace EPaySettingsPut {
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

export interface EpaysettingUpdateParams {
  /**
   * Credit card payment settings.
   */
  CreditCardPayments: EpaysettingUpdateParams.CreditCardPayments;

  /**
   * Electronic payment settings.
   */
  EFTPayments: EpaysettingUpdateParams.EftPayments;

  /**
   * Offline payment settings.
   */
  OfflinePayments: EpaysettingUpdateParams.OfflinePayments;
}

export namespace EpaysettingUpdateParams {
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
  export {
    type EPaySettings as EPaySettings,
    type EPaySettingsPut as EPaySettingsPut,
    type EpaysettingUpdateParams as EpaysettingUpdateParams,
  };
}
