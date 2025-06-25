// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EpaysettingsAPI from '../associations/epaysettings';
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
   * const ePaySettings =
   *   await client.leases.epaysettings.retrieve(0);
   * ```
   */
  retrieve(leaseID: number, options?: RequestOptions): APIPromise<EpaysettingsAPI.EPaySettings> {
    return this._client.get(path`/v1/leases/${leaseID}/epaysettings`, options);
  }

  /**
   * Updates ePay settings for a lease
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const ePaySettings =
   *   await client.leases.epaysettings.update(0, {
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
    leaseID: number,
    body: EpaysettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EpaysettingsAPI.EPaySettings> {
    return this._client.put(path`/v1/leases/${leaseID}/epaysettings`, { body, ...options });
  }
}

export interface EpaysettingUpdateParams {
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
  export { type EpaysettingUpdateParams as EpaysettingUpdateParams };
}
