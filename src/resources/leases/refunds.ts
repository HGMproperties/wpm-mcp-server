// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Refunds extends APIResource {
  /**
   * Creates a refund.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseLedgerRefund =
   *   await client.leases.refunds.create(0, {
   *     Address: {
   *       AddressLine1: 'x',
   *       Country: 'Afghanistan',
   *       PostalCode: 'x',
   *     },
   *     BankAccountId: 0,
   *     Date: '2019-12-27',
   *     Lines: [{ Amount: 0, GLAccountId: 0 }],
   *     PayeeUserIds: [0],
   *   });
   * ```
   */
  create(leaseID: number, body: RefundCreateParams, options?: RequestOptions): APIPromise<LeaseLedgerRefund> {
    return this._client.post(path`/v1/leases/${leaseID}/refunds`, { body, ...options });
  }

  /**
   * Retrieves a refund.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   *
   * @example
   * ```ts
   * const leaseLedgerRefund =
   *   await client.leases.refunds.retrieve(0, { leaseId: 0 });
   * ```
   */
  retrieve(
    refundID: number,
    params: RefundRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LeaseLedgerRefund> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/refunds/${refundID}`, options);
  }
}

export interface LeaseLedgerRefund {
  /**
   * Address.
   */
  Address?: LeaseLedgerRefund.Address | null;

  /**
   * Unique identifier of the bank account that the refund was made from.
   */
  BankAccountId?: number;

  /**
   * Check number associated with the refund, if applicable.
   */
  CheckNumber?: string | null;

  /**
   * Date of the refund.
   */
  Date?: string;

  /**
   * Refund unique identifier.
   */
  Id?: number;

  /**
   * A collection of line items included in the refund.
   */
  Lines?: Array<LeaseLedgerRefund.Line> | null;

  /**
   * Memo associated with the refund, if applicable.
   */
  Memo?: string | null;

  /**
   * List of payees being refunded.
   */
  Payees?: Array<LeaseLedgerRefund.Payee> | null;

  /**
   * Total amount of the refund.
   */
  TotalAmount?: number;
}

export namespace LeaseLedgerRefund {
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

  export interface Line {
    /**
     * Amount of the line item.
     */
    Amount?: number;

    /**
     * Unique identifier of the general ledger account associated with the refund.
     */
    GLAccountId?: number;
  }

  /**
   * The payer of the transaction.
   */
  export interface Payee {
    /**
     * A link to the resource endpoint associated with the payer.
     */
    Href?: string | null;

    /**
     * The payer user unique identifier.
     */
    Id?: number;

    /**
     * The name of the payer.
     */
    Name?: string | null;

    /**
     * The payer user entity type.
     */
    Type?:
      | 'Tenant'
      | 'AssociationTenant'
      | 'AssociationOwner'
      | 'RentalOwner'
      | 'Vendor'
      | 'Staff'
      | 'Applicant';
  }
}

export interface RefundCreateParams {
  /**
   * Address.
   */
  Address: RefundCreateParams.Address;

  /**
   * Unique identifier of the bank account the refund is issued from.
   */
  BankAccountId: number;

  /**
   * The date of the refund. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * A collection of line items included in the refund. At least one line item is
   * required.
   */
  Lines: Array<RefundCreateParams.Line>;

  /**
   * Unique identifiers of the users receiving the refund.
   */
  PayeeUserIds: Array<number>;

  /**
   * Check number associated with the refund, if applicable. The value cannot exceed
   * 30 characters.
   */
  CheckNumber?: string | null;

  /**
   * A brief note describing the reason for the refund. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;
}

export namespace RefundCreateParams {
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

  export interface Line {
    /**
     * Amount of the line item.
     */
    Amount: number;

    /**
     * Unique identifier of the general ledger account associated with the refund.
     */
    GLAccountId: number;
  }
}

export interface RefundRetrieveParams {
  leaseId: number;
}

export declare namespace Refunds {
  export {
    type LeaseLedgerRefund as LeaseLedgerRefund,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };
}
