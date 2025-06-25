// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Epaysettings extends APIResource {
  /**
   * Retrieves ePay settings for a lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const epaysetting =
   *   await client.leases.epaysettings.retrieve(0);
   * ```
   */
  retrieve(leaseID: number, options?: RequestOptions): APIPromise<EpaysettingRetrieveResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/epaysettings`, options);
  }

  /**
   * Updates ePay settings for a lease
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const epaysetting = await client.leases.epaysettings.update(
   *   0,
   *   {
   *     CreditCardPayments: { PaymentsEnabled: true },
   *     EFTPayments: { PaymentsEnabled: true },
   *     OfflinePayments: {
   *       DisplayCompanyAddress: true,
   *       DisplayInfoInResidentCenter: true,
   *     },
   *   },
   * );
   * ```
   */
  update(
    leaseID: number,
    body: EpaysettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EpaysettingUpdateResponse> {
    return this._client.put(path`/v1/leases/${leaseID}/epaysettings`, { body, ...options });
  }
}

export interface EpaysettingRetrieveResponse {
  /**
   * Credit card payment settings.
   */
  CreditCardPayments?: EpaysettingRetrieveResponse.CreditCardPayments | null;

  /**
   * Electronic payment settings.
   */
  EFTPayments?: EpaysettingRetrieveResponse.EftPayments | null;

  /**
   * Offline payment settings.
   */
  OfflinePayments?: EpaysettingRetrieveResponse.OfflinePayments | null;
}

export namespace EpaysettingRetrieveResponse {
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

export interface EpaysettingUpdateResponse {
  /**
   * Credit card payment settings.
   */
  CreditCardPayments?: EpaysettingUpdateResponse.CreditCardPayments | null;

  /**
   * Electronic payment settings.
   */
  EFTPayments?: EpaysettingUpdateResponse.EftPayments | null;

  /**
   * Offline payment settings.
   */
  OfflinePayments?: EpaysettingUpdateResponse.OfflinePayments | null;
}

export namespace EpaysettingUpdateResponse {
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
    type EpaysettingRetrieveResponse as EpaysettingRetrieveResponse,
    type EpaysettingUpdateResponse as EpaysettingUpdateResponse,
    type EpaysettingUpdateParams as EpaysettingUpdateParams,
  };
}
