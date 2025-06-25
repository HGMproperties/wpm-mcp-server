// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersAPI from '../../users';
import * as LeasesAPI from '../leases';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListAllParams,
  NoteListAllResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tenants extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);

  /**
   * Creates a rental tenant.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const tenant = await client.leases.tenants.create({
   *   Address: {
   *     AddressLine1: 'x',
   *     Country: 'Afghanistan',
   *     PostalCode: 'x',
   *   },
   *   FirstName: 'x',
   *   LastName: 'x',
   *   LeaseId: 0,
   * });
   * ```
   */
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.post('/v1/leases/tenants', { body, ...options });
  }

  /**
   * Retrieve a specific tenant.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
   *
   * @example
   * ```ts
   * const tenant = await client.leases.tenants.retrieve(0);
   * ```
   */
  retrieve(tenantID: number, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.get(path`/v1/leases/tenants/${tenantID}`, options);
  }

  /**
   * Updates a rental tenant.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const tenant = await client.leases.tenants.update(0, {
   *   Address: {
   *     AddressLine1: 'x',
   *     Country: 'Afghanistan',
   *     PostalCode: 'x',
   *   },
   *   FirstName: 'x',
   *   LastName: 'x',
   * });
   * ```
   */
  update(tenantID: number, body: TenantUpdateParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.put(path`/v1/leases/tenants/${tenantID}`, { body, ...options });
  }

  /**
   * Retrieves a list of tenants.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
   *
   * @example
   * ```ts
   * const tenants = await client.leases.tenants.listAll();
   * ```
   */
  listAll(
    query: TenantListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListAllResponse> {
    return this._client.get('/v1/leases/tenants', { query, ...options });
  }
}

export interface RentalTenantPut {
  /**
   * Address.
   */
  Address: RentalTenantPut.Address;

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
  AlternateAddress?: RentalTenantPut.AlternateAddress | null;

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
  EmergencyContact?: RentalTenantPut.EmergencyContact | null;

  /**
   * Mailing preference for the tenant. If an alternate address exists and this value
   * is not provided then the primary address will be set as the preferred address.
   */
  MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: RentalTenantPut.PhoneNumbers | null;

  /**
   * Tax identifier of the tenant. Valid formats are: `12-1234567`, `123-12-1234`,
   * `123456789`
   */
  TaxId?: string | null;
}

export namespace RentalTenantPut {
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

/**
 * This object represents a rental property tenant.
 */
export interface Tenant {
  /**
   * Address.
   */
  Address?: Tenant.Address | null;

  /**
   * Address.
   */
  AlternateAddress?: Tenant.AlternateAddress | null;

  /**
   * Alternate email of the tenant.
   */
  AlternateEmail?: string | null;

  /**
   * Comments about the tenant.
   */
  Comment?: string | null;

  /**
   * Created date of this tenant record.
   */
  CreatedDateTime?: string | null;

  /**
   * Tenant date of birth.
   */
  DateOfBirth?: string | null;

  /**
   * Email for the tenant.
   */
  Email?: string | null;

  /**
   * This is an object that represents an emergency contact.
   */
  EmergencyContact?: Tenant.EmergencyContact | null;

  /**
   * First name of the tenant.
   */
  FirstName?: string | null;

  /**
   * Tenant unique identifier.
   */
  Id?: number;

  /**
   * Last name of the tenant.
   */
  LastName?: string | null;

  /**
   * List of leases, regardless of status, that the tenant is associated with.
   */
  Leases?: Array<LeasesAPI.Lease> | null;

  /**
   * Mailing preference for the tenant.
   */
  MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

  /**
   * List of phone numbers for the tenant.
   */
  PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

  /**
   * Indicates the tenants SMS opt in status. Null if no status exists for the
   * tenant.
   */
  SMSOptInStatus?: 'NotSet' | 'RequestSent' | 'OptedIn' | 'OptedOut' | 'Converted' | null;

  /**
   * TaxId of the tenant.
   */
  TaxId?: string | null;
}

export namespace Tenant {
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

  /**
   * Address.
   */
  export interface AlternateAddress {
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

  /**
   * This is an object that represents an emergency contact.
   */
  export interface EmergencyContact {
    /**
     * Emergency contact email address.
     */
    Email?: string | null;

    /**
     * Emergency contact name
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
}

export type TenantListAllResponse = Array<Tenant>;

export interface TenantCreateParams {
  /**
   * Address.
   */
  Address: TenantCreateParams.Address;

  /**
   * First name of the tenant. The value cannot exceed 127 characters.
   */
  FirstName: string;

  /**
   * Last name of the tenant. The value cannot exceed 127 characters.
   */
  LastName: string;

  /**
   * Lease ID to associate the tenant with.
   */
  LeaseId: number;

  /**
   * Address.
   */
  AlternateAddress?: TenantCreateParams.AlternateAddress | null;

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
  EmergencyContact?: TenantCreateParams.EmergencyContact | null;

  /**
   * Mailing preference for the tenant. If an alternate address exists and this value
   * is not provided then the primary address will be set as the preferred address.
   */
  MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: TenantCreateParams.PhoneNumbers | null;

  /**
   * Tax identifier of the tenant. Valid formats are: `12-1234567`, `123-12-1234`,
   * `123456789`
   */
  TaxId?: string | null;
}

export namespace TenantCreateParams {
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

export interface TenantUpdateParams {
  /**
   * Address.
   */
  Address: TenantUpdateParams.Address;

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
  AlternateAddress?: TenantUpdateParams.AlternateAddress | null;

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
  EmergencyContact?: TenantUpdateParams.EmergencyContact | null;

  /**
   * Mailing preference for the tenant. If an alternate address exists and this value
   * is not provided then the primary address will be set as the preferred address.
   */
  MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: TenantUpdateParams.PhoneNumbers | null;

  /**
   * Tax identifier of the tenant. Valid formats are: `12-1234567`, `123-12-1234`,
   * `123456789`
   */
  TaxId?: string | null;
}

export namespace TenantUpdateParams {
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

export interface TenantListAllParams {
  /**
   * Filters results by the status of the rental property the tenants are associated
   * with. If no status is specified tenants in either `active` and `inactive` rental
   * properties will be returned.
   */
  buildingstatuses?: Array<'Active' | 'InActive'>;

  /**
   * Filters results to any tenant whose email _contains_ the specified value.
   */
  email?: string;

  /**
   * Filters results to any rental tenants that were updated on or after the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any rental tenants that were updated on or before the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

  /**
   * Filters results to any tenant whose lease term matches the specified status. If
   * no status is specified tenants with any lease terms status will be returned.
   */
  leasetermstatuses?: Array<'Active' | 'Past' | 'Future'>;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to any tenant whose name _contains_ the specified value.
   */
  name?: string;

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
   * Filters results to any tenant whose phone number _contains_ the specified value.
   */
  phone?: string;

  /**
   * Filters results to tenants whose rental unit belongs to the specified set of
   * property ids.
   */
  propertyids?: Array<number>;

  /**
   * Filters results to tenants whose rental unit belongs to a property with a rental
   * owner in the specified set of rental owner ids.
   */
  rentalownerids?: Array<number>;

  /**
   * Filters results to only tenants associated with the specified set of unit ids.
   */
  unitids?: Array<number>;

  /**
   * Filters results to any tenant whose unit number _contains_ the specified value.
   */
  unitnumber?: string;
}

Tenants.Notes = Notes;

export declare namespace Tenants {
  export {
    type RentalTenantPut as RentalTenantPut,
    type Tenant as Tenant,
    type TenantListAllResponse as TenantListAllResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListAllParams as TenantListAllParams,
  };

  export {
    Notes as Notes,
    type NoteListAllResponse as NoteListAllResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListAllParams as NoteListAllParams,
  };
}
