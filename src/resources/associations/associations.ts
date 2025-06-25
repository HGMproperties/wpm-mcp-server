// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssociationsAPI from './associations';
import * as UsersAPI from '../users';
import * as BoardmembersAPI from './boardmembers';
import {
  AssociationBoardMember,
  BoardmemberCreateParams,
  BoardmemberDeleteParams,
  BoardmemberListParams,
  BoardmemberListResponse,
  BoardmemberRetrieveParams,
  BoardmemberUpdateParams,
  Boardmembers,
} from './boardmembers';
import * as EpaysettingsAPI from './epaysettings';
import { EPaySettings, EPaySettingsPut, EpaysettingUpdateParams, Epaysettings } from './epaysettings';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import * as VendorsAPI from './vendors';
import {
  AssociationPreferredVendor,
  VendorListParams,
  VendorListResponse,
  VendorUpdateParams,
  VendorUpdateResponse,
  Vendors,
} from './vendors';
import * as AppliancesAPI from './appliances/appliances';
import {
  Appliance,
  ApplianceCreateParams,
  ApplianceListParams,
  ApplianceListResponse,
  ApplianceUpdateParams,
  Appliances,
} from './appliances/appliances';
import * as MeterreadingsAPI from './meterreadings/meterreadings';
import {
  MeterReading,
  MeterreadingListParams,
  MeterreadingListResponse,
  Meterreadings,
} from './meterreadings/meterreadings';
import * as OwnersAPI from './owners/owners';
import {
  AssociationOwner as OwnersAPIAssociationOwner,
  AssociationOwnerBoardTerm,
  EmergencyContact,
  OwnerCreateParams,
  OwnerListParams,
  OwnerListResponse,
  OwnerUpdateParams,
  Owners,
  PhoneNumbers,
  SaveEmergencyContact,
} from './owners/owners';
import * as OwnershipaccountsAPI from './ownershipaccounts/ownershipaccounts';
import {
  AssociationOwnershipAccount,
  OwnershipaccountAutoPaymentsParams,
  OwnershipaccountCreateParams,
  OwnershipaccountCreditsParams,
  OwnershipaccountGetBalancesParams,
  OwnershipaccountGetBalancesResponse,
  OwnershipaccountListParams,
  OwnershipaccountListResponse,
  OwnershipaccountUpdateParams,
  Ownershipaccounts,
} from './ownershipaccounts/ownershipaccounts';
import * as TenantsAPI from './tenants/tenants';
import {
  AssociationTenant,
  TenantCreateParams,
  TenantListParams,
  TenantListResponse,
  TenantUpdateParams,
  Tenants,
} from './tenants/tenants';
import * as UnitsAPI from './units/units';
import {
  AssociationUnit,
  UnitCreateParams,
  UnitListParams,
  UnitListResponse,
  UnitUpdateParams,
  Units,
} from './units/units';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Associations extends APIResource {
  ownershipaccounts: OwnershipaccountsAPI.Ownershipaccounts = new OwnershipaccountsAPI.Ownershipaccounts(
    this._client,
  );
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);
  owners: OwnersAPI.Owners = new OwnersAPI.Owners(this._client);
  tenants: TenantsAPI.Tenants = new TenantsAPI.Tenants(this._client);
  boardmembers: BoardmembersAPI.Boardmembers = new BoardmembersAPI.Boardmembers(this._client);
  epaysettings: EpaysettingsAPI.Epaysettings = new EpaysettingsAPI.Epaysettings(this._client);
  meterreadings: MeterreadingsAPI.Meterreadings = new MeterreadingsAPI.Meterreadings(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  vendors: VendorsAPI.Vendors = new VendorsAPI.Vendors(this._client);
  appliances: AppliancesAPI.Appliances = new AppliancesAPI.Appliances(this._client);

  /**
   * Creates an association.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const association = await client.associations.create({
   *   Address: {
   *     AddressLine1: 'x',
   *     Country: 'Afghanistan',
   *     PostalCode: 'x',
   *   },
   *   Name: 'x',
   *   OperatingBankAccountId: 0,
   * });
   * ```
   */
  create(body: AssociationCreateParams, options?: RequestOptions): APIPromise<Association> {
    return this._client.post('/v1/associations', { body, ...options });
  }

  /**
   * Retrieve a specific association.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const association = await client.associations.retrieve(0);
   * ```
   */
  retrieve(associationID: number, options?: RequestOptions): APIPromise<Association> {
    return this._client.get(path`/v1/associations/${associationID}`, options);
  }

  /**
   * Updates an association.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition.
   *
   * The recommended workflow to ensure no data is inadvertently overwritten is to
   * execute a `GET` request for the resource you're about to update and then use
   * this response to fill any of the fields that are not being updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const association = await client.associations.update(0, {
   *   Address: {
   *     AddressLine1: 'x',
   *     Country: 'Afghanistan',
   *     PostalCode: 'x',
   *   },
   *   FiscalYearEndDay: 0,
   *   FiscalYearEndMonth: 0,
   *   Name: 'x',
   *   OperatingBankAccountId: 0,
   * });
   * ```
   */
  update(
    associationID: number,
    body: AssociationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Association> {
    return this._client.put(path`/v1/associations/${associationID}`, { body, ...options });
  }

  /**
   * Retrieves a list of associations.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const associations = await client.associations.list();
   * ```
   */
  list(
    query: AssociationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssociationListResponse> {
    return this._client.get('/v1/associations', { query, ...options });
  }

  /**
   * Inactivates an association along with associated units and ownership accounts.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * await client.associations.inactivate(0);
   * ```
   */
  inactivate(associationID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/associations/${associationID}/inactivationrequest`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all association bank lockbox data.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const response =
   *   await client.associations.listBankLockboxData();
   * ```
   */
  listBankLockboxData(
    query: AssociationListBankLockboxDataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssociationListBankLockboxDataResponse> {
    return this._client.get('/v1/associations/banklockboxdata', { query, ...options });
  }

  /**
   * Reactivates an association along with associated units and ownership accounts.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * await client.associations.reactivate(0);
   * ```
   */
  reactivate(associationID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/associations/${associationID}/reactivationrequest`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

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
 * This is an object that represents home owner associations.
 */
export interface Association {
  /**
   * Address.
   */
  Address?: Address | null;

  /**
   * This is an object that represents a property manager.
   */
  AssociationManager?: PropertyManager | null;

  /**
   * Description of the association.
   */
  Description?: string | null;

  /**
   * The day the fiscal year ends for the association.
   */
  FiscalYearEndDay?: number;

  /**
   * The month the fiscal year ends for the association.
   */
  FiscalYearEndMonth?: number;

  /**
   * Association unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the association is active within the Buildium platform.
   */
  IsActive?: boolean;

  /**
   * Association name.
   */
  Name?: string | null;

  /**
   * Primary bank account that an association uses for its income and expenses.
   */
  OperatingBankAccount?: string | null;

  /**
   * Primary bank account unique identifier that an association uses for its income
   * and expenses.
   */
  OperatingBankAccountId?: number;

  /**
   * A property reserve is cash that a property manager keeps on hand in case of
   * unexpected expenses. It is available cash that simply isn't disbursed in an
   * owner draw.
   */
  Reserve?: number;

  /**
   * Association tax information.
   */
  TaxInformation?: Association.TaxInformation | null;

  /**
   * Indicates the year the association was built. Null if no value is set.
   */
  YearBuilt?: number | null;
}

export namespace Association {
  /**
   * Association tax information.
   */
  export interface TaxInformation {
    /**
     * Address.
     */
    Address?: AssociationsAPI.Address | null;

    /**
     * The tax payer identifier.
     */
    TaxPayerId?: string | null;

    /**
     * Indicates the type of tax payer id being specified in the request.
     */
    TaxPayerIdType?: 'SSN' | 'EIN' | null;

    /**
     * Tax payer name line 1.
     */
    TaxPayerName1?: string | null;

    /**
     * Tax payer name line 2.
     */
    TaxPayerName2?: string | null;
  }
}

/**
 * This is an object that represents a property manager.
 */
export interface PropertyManager {
  /**
   * Company name of the rental owner. Empty if `IsCompany` is `false`.
   */
  CompanyName?: string | null;

  /**
   * Email of the property manager.
   */
  Email?: string | null;

  /**
   * First name of the property manager.
   */
  FirstName?: string | null;

  /**
   * Property manager unique identifier.
   */
  Id?: number;

  /**
   * Denotes if the property manager is a company.
   */
  IsCompany?: boolean;

  /**
   * Last name of the property manager.
   */
  LastName?: string | null;

  /**
   * List of phone numbers associated with the property manager.
   */
  PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

  /**
   * Profile photo URL for the property manager.
   */
  ProfilePhotoUrl?: string | null;
}

/**
 * Address.
 */
export interface SaveAddress {
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
 * Tax information.
 */
export interface TaxInformation {
  /**
   * Address.
   */
  Address?: SaveAddress | null;

  /**
   * The unique identifier of the tax payer. Required if `TaxPayerType` is set.
   * Format the values based on the `TaxPayerIdType` that is specified in the
   * request. `SSN` must be formatted as 123-45-6789. `EIN` must be formatted as
   * 12-3456789.
   */
  TaxPayerId?: string | null;

  /**
   * The tax payer name 1. The value cannot exceed 40 characters.
   */
  TaxPayerName1?: string | null;

  /**
   * The tax payer name 2. The value cannot exceed 40 characters.
   */
  TaxPayerName2?: string | null;

  /**
   * The tax payer type. Required if `TaxPayerId` is set.
   */
  TaxPayerType?: 'SSN' | 'EIN' | null;
}

export type AssociationListResponse = Array<Association>;

export type AssociationListBankLockboxDataResponse =
  Array<AssociationListBankLockboxDataResponse.AssociationListBankLockboxDataResponseItem>;

export namespace AssociationListBankLockboxDataResponse {
  export interface AssociationListBankLockboxDataResponseItem {
    /**
     * Association information.
     */
    Association?: AssociationListBankLockboxDataResponseItem.Association | null;

    /**
     * Information about ownership accounts that belong to the association.
     */
    OwnershipAccounts?: Array<AssociationListBankLockboxDataResponseItem.OwnershipAccount> | null;
  }

  export namespace AssociationListBankLockboxDataResponseItem {
    /**
     * Association information.
     */
    export interface Association {
      /**
       * Association unique identifier.
       */
      Id?: number;

      /**
       * Association name.
       */
      Name?: string | null;

      /**
       * Primary bank account that an association uses for its income and expenses.
       */
      OperatingBankAccountId?: number;
    }

    export interface OwnershipAccount {
      /**
       * Association owners for this ownership account.
       */
      AssociationOwners?: Array<OwnershipAccount.AssociationOwner> | null;

      /**
       * Indicates the delinquency status of the ownership account
       */
      DelinquencyStatus?: 'NoDelinquency' | 'InCollections' | 'InForeclosure' | 'Foreclosed';

      /**
       * Association ownership account unique identifier.
       */
      Id?: number;

      /**
       * Address.
       */
      UnitAddress?: AssociationsAPI.Address | null;

      /**
       * Unit number of the unit for this ownership account.
       */
      UnitNumber?: string | null;
    }

    export namespace OwnershipAccount {
      export interface AssociationOwner {
        /**
         * Address.
         */
        AlternateAddress?: AssociationsAPI.Address | null;

        /**
         * Association owner alternate email.
         */
        AlternateEmail?: string | null;

        /**
         * Indicates the delinquency status of the association owner.
         */
        DelinquencyStatus?: 'NoDelinquency' | 'InCollections' | 'InForeclosure' | 'Foreclosed';

        /**
         * Association owner email.
         */
        Email?: string | null;

        /**
         * Association owner first name.
         */
        FirstName?: string | null;

        /**
         * Association owner unique identifier.
         */
        Id?: number;

        /**
         * Association owner last name.
         */
        LastName?: string | null;

        /**
         * Indicates the association owner's mailing preference.
         */
        MailingPreference?: 'PrimaryAddress' | 'AlternateAddress';

        /**
         * List of phone numbers associated with the association owner.
         */
        PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

        /**
         * Address.
         */
        PrimaryAddress?: AssociationsAPI.Address | null;
      }
    }
  }
}

export interface AssociationCreateParams {
  /**
   * Address.
   */
  Address: SaveAddress;

  /**
   * Association name. The value cannot exceed 127 characters.
   */
  Name: string;

  /**
   * The primary bank account that an association uses for its income and expenses.
   */
  OperatingBankAccountId: number;

  /**
   * Description of the association. The description cannot exceed 65,535 characters.
   */
  Description?: string | null;

  /**
   * Indicates whether the association is active within the Buildium platform. If no
   * value is passed in the default is `true`.
   */
  IsActive?: boolean | null;

  /**
   * Indicates the staff member identifier that acts as the property manager for this
   * association. Note, the staff member must have permissions to this association to
   * be assigned as the property manager. Leave this field null if you don't want to
   * assign a staff member to the association.
   */
  PropertyManagerId?: number | null;

  /**
   * A property reserve is cash that a property manager keeps on hand in case of
   * unexpected expenses. It is available cash that isn't disbursed in an owner draw.
   */
  Reserve?: number | null;

  /**
   * Tax information.
   */
  TaxInformation?: TaxInformation | null;

  /**
   * Indicates the year the association was established. If provided this value must
   * be a four digit integer between 1000 and the current year.
   */
  YearBuilt?: number | null;
}

export interface AssociationUpdateParams {
  /**
   * Address.
   */
  Address: SaveAddress;

  /**
   * The day the fiscal year ends for the association.
   */
  FiscalYearEndDay: number;

  /**
   * The month the fiscal year ends for the association.
   */
  FiscalYearEndMonth: number;

  /**
   * Association name. The value cannot exceed 127 characters.
   */
  Name: string;

  /**
   * The primary bank account that an association uses for its income and expenses.
   */
  OperatingBankAccountId: number;

  /**
   * Description of the association. The value cannot exceed 65,535 characters.
   */
  Description?: string | null;

  /**
   * Indicates the staff member identifier that acts as the property manager for this
   * association. Note, the staff member must have permissions to this association to
   * be assigned as the property manager. Set this field to null if you don't want to
   * assign a staff member to the association.
   */
  PropertyManagerId?: number | null;

  /**
   * A property reserve is cash that a property manager keeps on hand in case of
   * unexpected expenses. It is available cash that isn't disbursed in an owner draw.
   */
  Reserve?: number | null;

  /**
   * Indicates the year the association was established. If provided this value must
   * be a four digit integer between 1000 and the current year.
   */
  YearBuilt?: number | null;
}

export interface AssociationListParams {
  /**
   * Filters results to the specified set of ids.
   */
  ids?: Array<number>;

  /**
   * Filters results to any associations that were updated on or after the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any associations that were updated on or before the specified
   * date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to any association whose city or state _contains_ the specified
   * value.
   */
  location?: string;

  /**
   * `offset` indicates the position of the first record to return. The `offset` is
   * zero-based and the default is 0.
   */
  offset?: number;

  /**
   * Filters results to any associations associated to any of the specified set of
   * operating bank account ids.
   */
  operatingbankaccountids?: Array<number>;

  /**
   * `orderby` indicates the field(s) and direction to sort the results in the
   * response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request
   * Options</a> for more information.
   */
  orderby?: string;

  /**
   * Filters results by the status of the association. If no status is specified both
   * `active` and `inactive` associations will be returned.
   */
  status?: 'Active' | 'InActive';
}

export interface AssociationListBankLockboxDataParams {
  /**
   * Filters results to only include Associations with matching IDs
   */
  associationids?: Array<number>;

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

Associations.Ownershipaccounts = Ownershipaccounts;
Associations.Units = Units;
Associations.Owners = Owners;
Associations.Tenants = Tenants;
Associations.Boardmembers = Boardmembers;
Associations.Epaysettings = Epaysettings;
Associations.Meterreadings = Meterreadings;
Associations.Notes = Notes;
Associations.Vendors = Vendors;
Associations.Appliances = Appliances;

export declare namespace Associations {
  export {
    type Address as Address,
    type Association as Association,
    type PropertyManager as PropertyManager,
    type SaveAddress as SaveAddress,
    type TaxInformation as TaxInformation,
    type AssociationListResponse as AssociationListResponse,
    type AssociationListBankLockboxDataResponse as AssociationListBankLockboxDataResponse,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationUpdateParams as AssociationUpdateParams,
    type AssociationListParams as AssociationListParams,
    type AssociationListBankLockboxDataParams as AssociationListBankLockboxDataParams,
  };

  export {
    Ownershipaccounts as Ownershipaccounts,
    type AssociationOwnershipAccount as AssociationOwnershipAccount,
    type OwnershipaccountListResponse as OwnershipaccountListResponse,
    type OwnershipaccountGetBalancesResponse as OwnershipaccountGetBalancesResponse,
    type OwnershipaccountCreateParams as OwnershipaccountCreateParams,
    type OwnershipaccountUpdateParams as OwnershipaccountUpdateParams,
    type OwnershipaccountListParams as OwnershipaccountListParams,
    type OwnershipaccountAutoPaymentsParams as OwnershipaccountAutoPaymentsParams,
    type OwnershipaccountCreditsParams as OwnershipaccountCreditsParams,
    type OwnershipaccountGetBalancesParams as OwnershipaccountGetBalancesParams,
  };

  export {
    Units as Units,
    type AssociationUnit as AssociationUnit,
    type UnitListResponse as UnitListResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };

  export {
    Owners as Owners,
    type OwnersAPIAssociationOwner as AssociationOwner,
    type AssociationOwnerBoardTerm as AssociationOwnerBoardTerm,
    type EmergencyContact as EmergencyContact,
    type PhoneNumbers as PhoneNumbers,
    type SaveEmergencyContact as SaveEmergencyContact,
    type OwnerListResponse as OwnerListResponse,
    type OwnerCreateParams as OwnerCreateParams,
    type OwnerUpdateParams as OwnerUpdateParams,
    type OwnerListParams as OwnerListParams,
  };

  export {
    Tenants as Tenants,
    type AssociationTenant as AssociationTenant,
    type TenantListResponse as TenantListResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
  };

  export {
    Boardmembers as Boardmembers,
    type AssociationBoardMember as AssociationBoardMember,
    type BoardmemberListResponse as BoardmemberListResponse,
    type BoardmemberCreateParams as BoardmemberCreateParams,
    type BoardmemberRetrieveParams as BoardmemberRetrieveParams,
    type BoardmemberUpdateParams as BoardmemberUpdateParams,
    type BoardmemberListParams as BoardmemberListParams,
    type BoardmemberDeleteParams as BoardmemberDeleteParams,
  };

  export {
    Epaysettings as Epaysettings,
    type EPaySettings as EPaySettings,
    type EPaySettingsPut as EPaySettingsPut,
    type EpaysettingUpdateParams as EpaysettingUpdateParams,
  };

  export {
    Meterreadings as Meterreadings,
    type MeterReading as MeterReading,
    type MeterreadingListResponse as MeterreadingListResponse,
    type MeterreadingListParams as MeterreadingListParams,
  };

  export {
    Notes as Notes,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };

  export {
    Vendors as Vendors,
    type AssociationPreferredVendor as AssociationPreferredVendor,
    type VendorUpdateResponse as VendorUpdateResponse,
    type VendorListResponse as VendorListResponse,
    type VendorUpdateParams as VendorUpdateParams,
    type VendorListParams as VendorListParams,
  };

  export {
    Appliances as Appliances,
    type Appliance as Appliance,
    type ApplianceListResponse as ApplianceListResponse,
    type ApplianceCreateParams as ApplianceCreateParams,
    type ApplianceUpdateParams as ApplianceUpdateParams,
    type ApplianceListParams as ApplianceListParams,
  };
}
