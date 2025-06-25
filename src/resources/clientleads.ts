// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Clientleads extends APIResource {
  /**
   * Retrieves a specific client lead
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > All Property Management</span> - `View`
   */
  retrieve(clientLeadID: number, options?: RequestOptions): APIPromise<ClientLeadMessage> {
    return this._client.get(path`/v1/clientleads/${clientLeadID}`, options);
  }

  /**
   * Retrieves all client leads
   *
   *             Note: When using the `orderby` query string parameter, the only supported options are DateReceived.
   *
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Administration > All Property Management</span> - `View`
   */
  list(
    query: ClientleadListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClientleadListResponse> {
    return this._client.get('/v1/clientleads', { query, ...options });
  }
}

/**
 * This is an object that represents a client lead
 */
export interface ClientLeadMessage {
  /**
   * Address.
   */
  Address?: ClientLeadMessage.Address | null;

  /**
   * Additional comments submitted for the lead.
   */
  Comments?: string | null;

  /**
   * Lead credit request.
   */
  CreditRequest?: ClientLeadMessage.CreditRequest | null;

  /**
   * The date the lead was received.
   */
  DateReceived?: string;

  /**
   * The email of the lead.
   */
  Email?: string | null;

  /**
   * Client lead unique identifier.
   */
  Id?: number;

  /**
   * The current status of the client lead.
   */
  LeadStatus?: 'Unknown' | 'New' | 'Contacting' | 'Qualifying' | 'Closing' | 'ClosedWon' | 'ClosedLost';

  /**
   * The name of the lead.
   */
  Name?: string | null;

  /**
   * The phone number of the lead.
   */
  PhoneNumber?: string | null;

  /**
   * The price paid for the lead.
   */
  PricePaid?: number;

  /**
   * The property type of the lead's property.
   */
  PropertyType?:
    | 'SingleHomeUpToThreeHundredThousand'
    | 'SingleHomeThreeHundredToFiveHundredThousand'
    | 'SingleHomeFiveHundredThousandToOneMillion'
    | 'SingleHomeOverOneMillion'
    | 'MultiFamilyTwoToFourUnits'
    | 'MultiFamilyFiveToNineteenUnits'
    | 'MultiFamilyTwentyToFortyNineUnits'
    | 'MultiFamilyOverOneHundredUnits'
    | 'OfficeLessThanTenThousandSqFt'
    | 'OfficeTenThousandToOneHundredThousandSqFt'
    | 'OfficeOverOneHundredThousandSqFt'
    | 'RetailLessThanTenThousandSqFt'
    | 'RetailTenThousandToOneHundredThousandSqFt'
    | 'RetailOverOneHundredThousandSqFt'
    | 'LightManufacturingUpToOneHundredThousandSqFt'
    | 'LightManufacturingOverOneHundredThousandSqFt'
    | 'WarehouseUpToOneHundredThousandSqFt'
    | 'WarehouseOverOneHundredThousandSqFt'
    | 'VacationOneToTwoUnits'
    | 'VacationOverThreeUnits'
    | 'ParkingGarage'
    | 'OtherAssociation'
    | 'BiotechMissionCritical'
    | 'HOATwoToFortyNineUnits'
    | 'HOAFiftyToNinetyNineUnits'
    | 'HOAOverOneHundredUnits'
    | 'COATwoToFortyNineUnits'
    | 'COAFiftyToNinetyNineUnits'
    | 'COAOverOneHundredUnits'
    | 'MobileHomeCommunity';
}

export namespace ClientLeadMessage {
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
   * Lead credit request.
   */
  export interface CreditRequest {
    /**
     * Additional comments about the credit request.
     */
    Comments?: string | null;

    /**
     * Indicates the reason a credit was requested.
     */
    CreditReason?:
      | 'AccidentalFormSubmission'
      | 'DuplicateLead'
      | 'InvalidContactInformation'
      | 'JobSeeker'
      | 'Tenant'
      | 'Vendor'
      | 'WrongPropertyType'
      | 'WrongZipCode'
      | 'Other';

    /**
     * Indicates the current status of the credit.
     */
    CreditStatus?: 'Approved' | 'Declined' | 'Requested';

    /**
     * The date the credit was requested.
     */
    RequestDate?: string | null;
  }
}

export type ClientleadListResponse = Array<ClientLeadMessage>;

export interface ClientleadListParams {
  /**
   * Filters results to any client leads that were received on or after the specified
   * date. The value must be formatted as YYYY-MM-DD.
   */
  datereceivedfrom?: string;

  /**
   * Filters results to any client leads that were received on or before the
   * specified date. The value must be formatted as YYYY-MM-DD.
   */
  datereceivedto?: string;

  /**
   * This will also return client leads that were credited. By default credited leads
   * will not be returned.
   */
  includecreditedleads?: boolean;

  /**
   * Filters results to any client leads that are in one of the given statuses.
   */
  leadstatuses?: Array<
    'Unknown' | 'New' | 'Contacting' | 'Qualifying' | 'Closing' | 'ClosedWon' | 'ClosedLost'
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
   * Filters results to any client leads that have a property in one of the given
   * property types.
   */
  propertytypes?: Array<
    | 'SingleHomeUpToThreeHundredThousand'
    | 'SingleHomeThreeHundredToFiveHundredThousand'
    | 'SingleHomeFiveHundredThousandToOneMillion'
    | 'SingleHomeOverOneMillion'
    | 'MultiFamilyTwoToFourUnits'
    | 'MultiFamilyFiveToNineteenUnits'
    | 'MultiFamilyTwentyToFortyNineUnits'
    | 'MultiFamilyOverOneHundredUnits'
    | 'OfficeLessThanTenThousandSqFt'
    | 'OfficeTenThousandToOneHundredThousandSqFt'
    | 'OfficeOverOneHundredThousandSqFt'
    | 'RetailLessThanTenThousandSqFt'
    | 'RetailTenThousandToOneHundredThousandSqFt'
    | 'RetailOverOneHundredThousandSqFt'
    | 'LightManufacturingUpToOneHundredThousandSqFt'
    | 'LightManufacturingOverOneHundredThousandSqFt'
    | 'WarehouseUpToOneHundredThousandSqFt'
    | 'WarehouseOverOneHundredThousandSqFt'
    | 'VacationOneToTwoUnits'
    | 'VacationOverThreeUnits'
    | 'ParkingGarage'
    | 'OtherAssociation'
    | 'BiotechMissionCritical'
    | 'HOATwoToFortyNineUnits'
    | 'HOAFiftyToNinetyNineUnits'
    | 'HOAOverOneHundredUnits'
    | 'COATwoToFortyNineUnits'
    | 'COAFiftyToNinetyNineUnits'
    | 'COAOverOneHundredUnits'
    | 'MobileHomeCommunity'
  >;
}

export declare namespace Clientleads {
  export {
    type ClientLeadMessage as ClientLeadMessage,
    type ClientleadListResponse as ClientleadListResponse,
    type ClientleadListParams as ClientleadListParams,
  };
}
