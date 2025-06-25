// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
   * const response = await client.administration.getAccount();
   * ```
   */
  getAccount(options?: RequestOptions): APIPromise<AdministrationGetAccountResponse> {
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
   *   await client.administration.getAcctLockPeriods();
   * ```
   */
  getAcctLockPeriods(options?: RequestOptions): APIPromise<AdministrationGetAcctLockPeriodsResponse> {
    return this._client.get('/v1/administration/accountinglockperiod', options);
  }
}

/**
 * This is an object that represents account info.
 */
export interface AdministrationGetAccountResponse {
  /**
   * Accounting settings.
   */
  AccountingSettings?: AdministrationGetAccountResponse.AccountingSettings | null;

  /**
   * Account company name.
   */
  CompanyName?: string | null;

  /**
   * Contact information.
   */
  Contact?: AdministrationGetAccountResponse.Contact | null;

  /**
   * Account unique identifier.
   */
  Id?: number;

  /**
   * Url for this account.
   */
  Url?: string | null;
}

export namespace AdministrationGetAccountResponse {
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
    Address?: Contact.Address | null;

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

  export namespace Contact {
    /**
     * Address.
     */
    export interface Address {
      /**
       * Address line 1 (e.g., street, PO Box, or company name).
       */
      AddressLine1?: string | null;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building).
       */
      AddressLine2?: string | null;

      /**
       * Address line 3
       */
      AddressLine3?: string | null;

      /**
       * City, district, suburb, town, or village.
       */
      City?: string | null;

      /**
       * Country.
       */
      Country?:
        | 'Afghanistan'
        | 'Akrotiri'
        | 'Albania'
        | 'Algeria'
        | 'AmericanSamoa'
        | 'Andorra'
        | 'Angola'
        | 'Anguilla'
        | 'Antarctica'
        | 'AntiguaandBarbuda'
        | 'Argentina'
        | 'Armenia'
        | 'Aruba'
        | 'AshmoreandCartierIslands'
        | 'Australia'
        | 'Austria'
        | 'Azerbaijan'
        | 'Bahamas'
        | 'Bahrain'
        | 'Bangladesh'
        | 'Barbados'
        | 'BassasdaIndia'
        | 'Belarus'
        | 'Belgium'
        | 'Belize'
        | 'Benin'
        | 'Bermuda'
        | 'Bhutan'
        | 'Bolivia'
        | 'BosniaandHerzegovina'
        | 'Botswana'
        | 'BouvetIsland'
        | 'Brazil'
        | 'BritishIndianOceanTerritory'
        | 'BritishVirginIslands'
        | 'Brunei'
        | 'Bulgaria'
        | 'BurkinaFaso'
        | 'Burma'
        | 'Burundi'
        | 'Cambodia'
        | 'Cameroon'
        | 'Canada'
        | 'CapeVerde'
        | 'CaymanIslands'
        | 'CentralAfricanRepublic'
        | 'Chad'
        | 'Chile'
        | 'China'
        | 'ChristmasIsland'
        | 'ClippertonIsland'
        | 'CocosIslands'
        | 'Colombia'
        | 'Comoros'
        | 'DemocraticRepublicOfTheCongo'
        | 'RepublicOfTheCongo'
        | 'CookIslands'
        | 'CoralSeaIslands'
        | 'CostaRica'
        | 'CotedIvoire'
        | 'Croatia'
        | 'Cuba'
        | 'Cyprus'
        | 'CzechRepublic'
        | 'Denmark'
        | 'Dhekelia'
        | 'Djibouti'
        | 'Dominica'
        | 'DominicanRepublic'
        | 'Ecuador'
        | 'Egypt'
        | 'ElSalvador'
        | 'EquatorialGuinea'
        | 'Eritrea'
        | 'Estonia'
        | 'Ethiopia'
        | 'EuropaIsland'
        | 'FalklandIslands'
        | 'FaroeIslands'
        | 'Fiji'
        | 'Finland'
        | 'France'
        | 'FrenchGuiana'
        | 'FrenchPolynesia'
        | 'FrenchSouthernandAntarcticLands'
        | 'Gabon'
        | 'Gambia'
        | 'GazaStrip'
        | 'Georgia'
        | 'Germany'
        | 'Ghana'
        | 'Gibraltar'
        | 'GloriosoIslands'
        | 'Greece'
        | 'Greenland'
        | 'Grenada'
        | 'Guadeloupe'
        | 'Guam'
        | 'Guatemala'
        | 'Guernsey'
        | 'Guinea'
        | 'GuineaBissau'
        | 'Guyana'
        | 'Haiti'
        | 'HeardIslandandMcDonaldIslands'
        | 'VaticanCity'
        | 'Honduras'
        | 'HongKong'
        | 'Hungary'
        | 'Iceland'
        | 'India'
        | 'Indonesia'
        | 'Iran'
        | 'Iraq'
        | 'Ireland'
        | 'IsleofMan'
        | 'Israel'
        | 'Italy'
        | 'Jamaica'
        | 'JanMayen'
        | 'Japan'
        | 'Jersey'
        | 'Jordan'
        | 'JuandeNovaIsland'
        | 'Kazakhstan'
        | 'Kenya'
        | 'Kiribati'
        | 'NorthKorea'
        | 'SouthKorea'
        | 'Kuwait'
        | 'Kyrgyzstan'
        | 'Laos'
        | 'Latvia'
        | 'Lebanon'
        | 'Lesotho'
        | 'Liberia'
        | 'Libya'
        | 'Liechtenstein'
        | 'Lithuania'
        | 'Luxembourg'
        | 'Macau'
        | 'Macedonia'
        | 'Madagascar'
        | 'Malawi'
        | 'Malaysia'
        | 'Maldives'
        | 'Mali'
        | 'Malta'
        | 'MarshallIslands'
        | 'Martinique'
        | 'Mauritania'
        | 'Mauritius'
        | 'Mayotte'
        | 'Mexico'
        | 'Micronesia'
        | 'Moldova'
        | 'Monaco'
        | 'Mongolia'
        | 'Montserrat'
        | 'Morocco'
        | 'Mozambique'
        | 'Namibia'
        | 'Nauru'
        | 'NavassaIsland'
        | 'Nepal'
        | 'Netherlands'
        | 'NetherlandsAntilles'
        | 'NewCaledonia'
        | 'NewZealand'
        | 'Nicaragua'
        | 'Niger'
        | 'Nigeria'
        | 'Niue'
        | 'NorfolkIsland'
        | 'NorthernMarianaIslands'
        | 'Norway'
        | 'Oman'
        | 'Pakistan'
        | 'Palau'
        | 'Panama'
        | 'PapuaNewGuinea'
        | 'ParacelIslands'
        | 'Paraguay'
        | 'Peru'
        | 'Philippines'
        | 'PitcairnIslands'
        | 'Poland'
        | 'Portugal'
        | 'PuertoRico'
        | 'Qatar'
        | 'Reunion'
        | 'Romania'
        | 'Russia'
        | 'Rwanda'
        | 'SaintHelena'
        | 'SaintKittsandNevis'
        | 'SaintLucia'
        | 'SaintPierreandMiquelon'
        | 'SaintVincentandtheGrenadines'
        | 'Samoa'
        | 'SanMarino'
        | 'SaoTomeandPrincipe'
        | 'SaudiArabia'
        | 'Senegal'
        | 'SerbiaandMontenegro'
        | 'Seychelles'
        | 'SierraLeone'
        | 'Singapore'
        | 'Slovakia'
        | 'Slovenia'
        | 'SolomonIslands'
        | 'Somalia'
        | 'SouthAfrica'
        | 'SouthGeorgiaandtheSouthSandwichIslands'
        | 'Spain'
        | 'SpratlyIslands'
        | 'SriLanka'
        | 'Sudan'
        | 'Suriname'
        | 'Svalbard'
        | 'Swaziland'
        | 'Sweden'
        | 'Switzerland'
        | 'Syria'
        | 'Taiwan'
        | 'Tajikistan'
        | 'Tanzania'
        | 'Thailand'
        | 'TimorLeste'
        | 'Togo'
        | 'Tokelau'
        | 'Tonga'
        | 'TrinidadandTobago'
        | 'TromelinIsland'
        | 'Tunisia'
        | 'Turkey'
        | 'Turkmenistan'
        | 'TurksandCaicosIslands'
        | 'Tuvalu'
        | 'Uganda'
        | 'Ukraine'
        | 'UnitedArabEmirates'
        | 'UnitedKingdom'
        | 'UnitedStates'
        | 'Uruguay'
        | 'Uzbekistan'
        | 'Vanuatu'
        | 'Venezuela'
        | 'Vietnam'
        | 'VirginIslands'
        | 'WakeIsland'
        | 'WallisandFutuna'
        | 'WestBank'
        | 'WesternSahara'
        | 'Yemen'
        | 'Zambia'
        | 'Zimbabwe';

      /**
       * ZIP or postal code.
       */
      PostalCode?: string | null;

      /**
       * State, county, province, or region.
       */
      State?: string | null;
    }
  }
}

/**
 * Accounting lock period settings.
 */
export interface AdministrationGetAcctLockPeriodsResponse {
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
  Global?: AdministrationGetAcctLockPeriodsResponse.Global | null;

  /**
   * Settings overrides for specific properties.
   */
  Overrides?: Array<AdministrationGetAcctLockPeriodsResponse.Override> | null;
}

export namespace AdministrationGetAcctLockPeriodsResponse {
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
    type AdministrationGetAccountResponse as AdministrationGetAccountResponse,
    type AdministrationGetAcctLockPeriodsResponse as AdministrationGetAcctLockPeriodsResponse,
  };

  export { Residentsettings as Residentsettings };
}
