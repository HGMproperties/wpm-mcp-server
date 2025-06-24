// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssociationsAPI from '../associations/associations';
import * as AnnouncementsAPI from '../communications/announcements';
import * as ResidentsettingsAPI from './residentsettings/residentsettings';
import { Residentsettings } from './residentsettings/residentsettings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Administration extends APIResource {
  residentsettings: ResidentsettingsAPI.Residentsettings = new ResidentsettingsAPI.Residentsettings(
    this._client,
  );

  /**
   * Retrieves information related to the Buildium account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Account Information</span> - `View`
   *
   * @example
   * ```ts
   * const response =
   *   await client.administration.retrieveAccount();
   * ```
   */
  retrieveAccount(options?: RequestOptions): APIPromise<AdministrationRetrieveAccountResponse> {
    return this._client.get('/v1/administration/account', options);
  }

  /**
   * Retrieves accounting lock periods.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Application Settings</span> - `View`
   *
   * @example
   * ```ts
   * const response =
   *   await client.administration.retrieveAccountingLockPeriods();
   * ```
   */
  retrieveAccountingLockPeriods(
    options?: RequestOptions,
  ): APIPromise<AdministrationRetrieveAccountingLockPeriodsResponse> {
    return this._client.get('/v1/administration/accountinglockperiod', options);
  }
}

/**
 * This is an object that represents account info.
 */
export interface AdministrationRetrieveAccountResponse {
  /**
   * Accounting settings.
   */
  AccountingSettings?: AdministrationRetrieveAccountResponse.AccountingSettings | null;

  /**
   * Account company name.
   */
  CompanyName?: string | null;

  /**
   * Contact information.
   */
  Contact?: AdministrationRetrieveAccountResponse.Contact | null;

  /**
   * Account unique identifier.
   */
  Id?: number;

  /**
   * Url for this account.
   */
  Url?: string | null;
}

export namespace AdministrationRetrieveAccountResponse {
  /**
   * Accounting settings.
   */
  export interface AccountingSettings {
    /**
     * The accounting book entity unique identifier.
     */
    AccountingBookId?: number;

    /**
     * The default accounting basis.
     */
    DefaultAccountingBasis?: 'Accrual' | 'Cash';

    /**
     * The default bank account unique identifier.
     */
    DefaultBankAccountId?: number | null;

    /**
     * The day the fiscal year ends.
     */
    FiscalYearEndDay?: number;

    /**
     * The month the fiscal year ends.
     */
    FiscalYearEndMonth?: number;

    /**
     * Indicates the type of trust account warnings are enable within the account, if
     * any.
     */
    TrustAccountWarning?: 'Off' | 'ByProperty' | 'ByRentalOwner';
  }

  /**
   * Contact information.
   */
  export interface Contact {
    /**
     * Address.
     */
    Address?: AssociationsAPI.Address | null;

    /**
     * Contact first name.
     */
    FirstName?: string | null;

    /**
     * Contact last name.
     */
    LastName?: string | null;

    /**
     * Contact phone number.
     */
    PhoneNumber?: string | null;
  }
}

/**
 * Accounting lock period settings.
 */
export interface AdministrationRetrieveAccountingLockPeriodsResponse {
  /**
   * A collection of identifiers for users that have been designated financial
   * administrators. These users will have permission to add, edit, and delete
   * transactions during a locked period. This won't conflict with any property-level
   * permissions for this account. By default, account administrators have permission
   * to add, edit, and delete transactions within a locked period.
   */
  FinancialAdministratorUserIds?: Array<number> | null;

  /**
   * Global settings.
   */
  Global?: AdministrationRetrieveAccountingLockPeriodsResponse.Global | null;

  /**
   * Settings overrides for specific properties.
   */
  Overrides?: Array<AdministrationRetrieveAccountingLockPeriodsResponse.Override> | null;
}

export namespace AdministrationRetrieveAccountingLockPeriodsResponse {
  /**
   * Global settings.
   */
  export interface Global {
    /**
     * Financial transactions on or prior to this date will be locked.
     */
    LockDate?: string;
  }

  export interface Override {
    /**
     * Accounting transactions related to the property specified in the Property field
     * on or prior to this date will be locked.
     */
    LockDate?: string;

    /**
     * Property information.
     */
    Property?: AnnouncementsAPI.PropertyMessage | null;
  }
}

Administration.Residentsettings = Residentsettings;

export declare namespace Administration {
  export {
    type AdministrationRetrieveAccountResponse as AdministrationRetrieveAccountResponse,
    type AdministrationRetrieveAccountingLockPeriodsResponse as AdministrationRetrieveAccountingLockPeriodsResponse,
  };

  export { Residentsettings as Residentsettings };
}
