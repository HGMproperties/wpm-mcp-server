// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LeasesAPI from './leases';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Renewals extends APIResource {
  /**
   * Creates a lease renewal.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseRenewal = await client.leases.renewals.create(
   *   0,
   *   {
   *     LeaseType: 'Fixed',
   *     Rent: {
   *       Charges: [
   *         {
   *           Amount: 0,
   *           GlAccountId: 0,
   *           NextDueDate: '2019-12-27',
   *         },
   *       ],
   *       Cycle: 'Monthly',
   *     },
   *     SendWelcomeEmail: true,
   *   },
   * );
   * ```
   */
  create(leaseID: number, body: RenewalCreateParams, options?: RequestOptions): APIPromise<LeaseRenewal> {
    return this._client.post(path`/v1/leases/${leaseID}/renewals`, { body, ...options });
  }

  /**
   * Retrieves a specific renewal for a given lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const leaseRenewal = await client.leases.renewals.retrieve(
   *   0,
   *   { leaseId: 0 },
   * );
   * ```
   */
  retrieve(
    renewalID: number,
    params: RenewalRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LeaseRenewal> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/renewals/${renewalID}`, options);
  }

  /**
   * Retrieves all renewals for a specific a lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const leaseRenewals = await client.leases.renewals.list(0);
   * ```
   */
  list(
    leaseID: number,
    query: RenewalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RenewalListResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/renewals`, { query, ...options });
  }

  /**
   * Retrieves all upcoming lease renewals across all rental properties.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const leaseRenewals =
   *   await client.leases.renewals.listUpcoming({
   *     esignaturestatuses: ['Unknown'],
   *   });
   * ```
   */
  listUpcoming(
    query: RenewalListUpcomingParams,
    options?: RequestOptions,
  ): APIPromise<RenewalListUpcomingResponse> {
    return this._client.get('/v1/leases/renewals', { query, ...options });
  }
}

export interface LeaseRenewal {
  /**
   * Lease renewal unique identifier.
   */
  Id?: number;

  /**
   * Start date of the lease.
   */
  LeaseFromDate?: string;

  /**
   * Indicates the status of the lease.
   */
  LeaseStatus?: 'Active' | 'Past' | 'Future';

  /**
   * End date of the lease.
   */
  LeaseToDate?: string | null;

  /**
   * Describes the type of lease.
   */
  LeaseType?: 'None' | 'Fixed' | 'FixedWithRollover' | 'AtWill';

  /**
   * Rent for the lease.
   */
  Rent?: number;

  /**
   * The unique identifier of the scheduled Rent entity. If the renewal is not
   * associated with a Rent entity then the value will be `NULL`.
   */
  RentId?: number | null;

  /**
   * Unique identifiers of tenants on the lease.
   */
  TenantIds?: Array<number> | null;
}

export type RenewalListResponse = Array<LeaseRenewal>;

export type RenewalListUpcomingResponse = Array<LeaseRenewal>;

export interface RenewalCreateParams {
  /**
   * Describes the type of lease.
   */
  LeaseType: 'Fixed' | 'FixedWithRollover' | 'AtWill';

  /**
   * The rent for the lease. When provided in the request the charges for the
   * specified amount will be automatically applied to the lease ledger on the
   * cadence specified in the `Cycle`.
   */
  Rent: LeasesAPI.LeaseRentForPostMessage;

  /**
   * Indicates whether to send a welcome email to all tenants on the lease inviting
   * them to the resident center website.
   */
  SendWelcomeEmail: boolean;

  /**
   * Indicates whether to automatically move out all tenants assigned to the lease
   * and set the lease status to past when the lease ends.
   */
  AutomaticallyMoveOutTenants?: boolean | null;

  /**
   * List of the cosigners to create on the lease.
   */
  Cosigners?: Array<LeasesAPI.LeaseCosigner> | null;

  /**
   * End date of the lease. This is required if `LeaseType` is `Fixed` or
   * `FixedWithRollover`
   */
  LeaseToDate?: string | null;

  /**
   * List of new recurring charges to create.
   */
  RecurringChargesToCreate?: Array<RenewalCreateParams.RecurringChargesToCreate> | null;

  /**
   * Unique identifiers of existing recurring charges on the lease to stop.
   */
  RecurringChargesToStop?: Array<number> | null;

  /**
   * List of existing recurring charges to update.
   */
  RecurringChargesToUpdate?: Array<RenewalCreateParams.RecurringChargesToUpdate> | null;

  /**
   * Unique identifiers of existing tenants to include on the lease. The request must
   * include at least one tenant in this property OR the `Tenants` property.
   */
  TenantIds?: Array<number> | null;

  /**
   * List of new tenants to create on the lease. The request must include at least
   * one tenant in this property OR the `TenantIds` property.
   */
  Tenants?: Array<RenewalCreateParams.Tenant> | null;
}

export namespace RenewalCreateParams {
  export interface RecurringChargesToCreate {
    /**
     * The amount to record when applying the charge to the lease ledger.
     */
    Amount: number;

    /**
     * The date the charge will first be processed. This value along with the
     * `Frequency` is also used as the basis for the date set on the transactions in
     * future occurrences.
     */
    FirstOccurrenceDate: string;

    /**
     * Specifies the frequency at which the recurring charge will be processed.
     */
    Frequency:
      | 'Monthly'
      | 'Weekly'
      | 'Every2Weeks'
      | 'Quarterly'
      | 'Yearly'
      | 'Every2Months'
      | 'Daily'
      | 'Every6Months'
      | 'OneTime';

    /**
     * The general ledger account unique identifier under which the charge amount will
     * be recorded. The general ledger account can only be an income or liability
     * account.
     */
    GLAccountId: number;

    /**
     * Specifies the number of days ahead of the transaction date the charge will post
     * on the lease ledger. This setting can be used to add the charge to the ledger
     * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
     * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
     * ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value
     * must be between 0 to 45 or set to 60, 75 or 90.
     */
    PostDaysInAdvance: number;

    /**
     * Specifies the period of time/occurrences the recurring payment will be
     * processed. Note, if the `Frequency` field is set to `OneTime` this field should
     * be set to `NULL` as any submitted value will be ignored.
     */
    Duration?: 'UntilEndOfTerm' | 'SpecificNumber' | null;

    /**
     * Memo associated with the recurring charge. This value cannot exceed 65
     * characters.
     */
    Memo?: string | null;

    /**
     * Indicates the number of times the recurring transaction should be processed.
     * This value is required if the `Duration` field is set to `SpecificNumber`. This
     * value can not exceed 100.
     */
    NumberOfOccurrences?: number | null;
  }

  export interface RecurringChargesToUpdate {
    /**
     * The amount to record when applying the charge to the lease ledger.
     */
    Amount: number;

    /**
     * The date the charge will first be processed. This value along with the
     * `Frequency` is also used as the basis for the date set on the transactions in
     * future occurrences.
     */
    FirstOccurrenceDate: string;

    /**
     * Specifies the frequency at which the recurring charge will be processed.
     */
    Frequency:
      | 'Monthly'
      | 'Weekly'
      | 'Every2Weeks'
      | 'Quarterly'
      | 'Yearly'
      | 'Every2Months'
      | 'Daily'
      | 'Every6Months'
      | 'OneTime';

    /**
     * The general ledger account unique identifier under which the charge amount will
     * be recorded. The general ledger account can only be an income or liability
     * account.
     */
    GLAccountId: number;

    /**
     * The unique identifier for the charge.
     */
    Id: number;

    /**
     * Specifies the number of days ahead of the transaction date the charge will post
     * on the lease ledger. This setting can be used to add the charge to the ledger
     * ahead of the due date for visibility. For example, if the `FirstOccurrenceDate`
     * is set to 8/10/2022 and this value is set to 5 then the charge will added to the
     * ledger on 8/5/2022, but will have transaction date of 8/10/2022. Note, the value
     * must be between 0 to 45 or set to 60, 75 or 90.
     */
    PostDaysInAdvance: number;

    /**
     * Specifies the period of time/occurrences the recurring payment will be
     * processed. Note, if the `Frequency` field is set to `OneTime` this field should
     * be set to `NULL` as any submitted value will be ignored.
     */
    Duration?: 'UntilEndOfTerm' | 'SpecificNumber' | null;

    /**
     * Memo associated with the recurring charge. This value cannot exceed 65
     * characters.
     */
    Memo?: string | null;

    /**
     * Indicates the number of times the recurring transaction should be processed.
     * This value is required if the `Duration` field is set to `SpecificNumber`. This
     * value can not exceed 100.
     */
    NumberOfOccurrences?: number | null;
  }

  export interface Tenant {
    /**
     * Address.
     */
    Address: Tenant.Address;

    /**
     * First name of the tenant. The value cannot exceed 127 characters.
     */
    FirstName: string;

    /**
     * Last name of the tenant. The value cannot exceed 127 characters.
     */
    LastName: string;

    /**
     * Address.
     */
    AlternateAddress?: Tenant.AlternateAddress | null;

    /**
     * Alternate email of the tenant.
     */
    AlternateEmail?: string | null;

    /**
     * Comments about the tenant. The value cannot exceed 65,535 characters.
     */
    Comment?: string | null;

    /**
     * Date of birth for the tenant. Must be formatted as `YYYY-MM-DD`.
     */
    DateOfBirth?: string | null;

    /**
     * Email of the tenant.
     */
    Email?: string | null;

    /**
     * Emergency contact information associated with the tenant.
     */
    EmergencyContact?: Tenant.EmergencyContact | null;

    /**
     * Mailing preference for the tenant. If an alternate address exists and this value
     * is not provided then the primary address will be set as the preferred address.
     */
    MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

    /**
     * Phone numbers.
     */
    PhoneNumbers?: Tenant.PhoneNumbers | null;

    /**
     * Tax identifier of the tenant. Valid formats are: `12-1234567`, `123-12-1234`,
     * `123456789`
     */
    TaxId?: string | null;
  }

  export namespace Tenant {
    /**
     * Address.
     */
    export interface Address {
      /**
       * Address line 1 (e.g., street, PO Box, or company name). This value cannot exceed
       * 100 characters.
       */
      AddressLine1: string;

      /**
       * Country. Must be a valid `Country` enumeration value.
       */
      Country:
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
      PostalCode: string;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building). This value cannot
       * exceed 100 characters.
       */
      AddressLine2?: string | null;

      /**
       * Address line 3. This value cannot exceed 100 characters.
       */
      AddressLine3?: string | null;

      /**
       * City, district, suburb, town, or village. This value cannot exceed 100
       * characters.
       */
      City?: string | null;

      /**
       * State, county, province, or region. When `Country` is set to `UnitedStates` this
       * value must be a valid state name or abbreviation. If the value is `Canada` this
       * value must be a valid Canadian province. For all other countries this field is
       * optional and not validated.
       */
      State?: string | null;
    }

    /**
     * Address.
     */
    export interface AlternateAddress {
      /**
       * Address line 1 (e.g., street, PO Box, or company name). This value cannot exceed
       * 100 characters.
       */
      AddressLine1: string;

      /**
       * Country. Must be a valid `Country` enumeration value.
       */
      Country:
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
      PostalCode: string;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building). This value cannot
       * exceed 100 characters.
       */
      AddressLine2?: string | null;

      /**
       * Address line 3. This value cannot exceed 100 characters.
       */
      AddressLine3?: string | null;

      /**
       * City, district, suburb, town, or village. This value cannot exceed 100
       * characters.
       */
      City?: string | null;

      /**
       * State, county, province, or region. When `Country` is set to `UnitedStates` this
       * value must be a valid state name or abbreviation. If the value is `Canada` this
       * value must be a valid Canadian province. For all other countries this field is
       * optional and not validated.
       */
      State?: string | null;
    }

    /**
     * Emergency contact information associated with the tenant.
     */
    export interface EmergencyContact {
      /**
       * Emergency contact email address.
       */
      Email?: string | null;

      /**
       * This is an object that represents an emergency contact.
       */
      Name?: string | null;

      /**
       * Emergency contact phone number
       */
      Phone?: string | null;

      /**
       * Emergency contact relationship to the person.
       */
      RelationshipDescription?: string | null;
    }

    /**
     * Phone numbers.
     */
    export interface PhoneNumbers {
      /**
       * Fax number. If provided, must be between 10 and 20 characters, ideally formatted
       * as `(123) 123-1234`.
       */
      Fax?: string | null;

      /**
       * Home phone number. If provided, must be between 10 and 20 characters, ideally
       * formatted as `(123) 123-1234`.
       */
      Home?: string | null;

      /**
       * Mobile phone number. If provided, must be between 10 and 20 characters, ideally
       * formatted as `(123) 123-1234`.
       */
      Mobile?: string | null;

      /**
       * Work phone number. If provided, must be between 10 and 20 characters, ideally
       * formatted as `(123) 123-1234`.
       */
      Work?: string | null;
    }
  }
}

export interface RenewalRetrieveParams {
  leaseId: number;
}

export interface RenewalListParams {
  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * `offset` indicates the position of the first record to return. The `offset` is
   * zero-based and the default is 0.
   */
  offset?: number;

  /**
   * `orderby` indicates the field(s) and direction to sort the results in the
   * response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request
   * Options</a> for more information.
   */
  orderby?: string;
}

export interface RenewalListUpcomingParams {
  /**
   * Filters result to any lease renewal with an esignature status that matches the
   * given statuses.
   */
  esignaturestatuses: Array<
    | 'Unknown'
    | 'NotSent'
    | 'ProcessingRequest'
    | 'AwaitingSignatures'
    | 'FullySigned'
    | 'PendingCancellation'
    | 'Cancelled'
    | 'Failed'
    | 'SentUsingAdobe'
  >;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * `offset` indicates the position of the first record to return. The `offset` is
   * zero-based and the default is 0.
   */
  offset?: number;

  /**
   * `orderby` indicates the field(s) and direction to sort the results in the
   * response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request
   * Options</a> for more information.
   */
  orderby?: string;

  /**
   * Filters results to only include leases whose unit belongs to the specified set
   * of property ids.
   */
  propertyids?: Array<number>;

  /**
   * Filters results to any lease whose unit belongs to a property with rental owner
   * in the specified set of rental owner ids.
   */
  rentalownerids?: Array<number>;
}

export declare namespace Renewals {
  export {
    type LeaseRenewal as LeaseRenewal,
    type RenewalListResponse as RenewalListResponse,
    type RenewalListUpcomingResponse as RenewalListUpcomingResponse,
    type RenewalCreateParams as RenewalCreateParams,
    type RenewalRetrieveParams as RenewalRetrieveParams,
    type RenewalListParams as RenewalListParams,
    type RenewalListUpcomingParams as RenewalListUpcomingParams,
  };
}
