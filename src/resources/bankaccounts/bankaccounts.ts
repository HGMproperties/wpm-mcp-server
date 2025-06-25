// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GlaccountsAPI from '../glaccounts';
import * as DepositsAPI from './deposits';
import {
  Deposit,
  DepositCreateParams,
  DepositLineSave,
  DepositListParams,
  DepositListResponse,
  DepositRetrieveParams,
  DepositUpdateParams,
  Deposits,
} from './deposits';
import * as QuickdepositsAPI from './quickdeposits';
import {
  AccountingEntity,
  AccountingEntitySave,
  QuickDeposit,
  QuickDepositSave,
  QuickdepositCreateParams,
  QuickdepositListParams,
  QuickdepositListResponse,
  QuickdepositRetrieveParams,
  QuickdepositUpdateParams,
  Quickdeposits,
} from './quickdeposits';
import * as TransactionsAPI from './transactions';
import {
  BankAccountTransaction,
  TransactionListParams,
  TransactionListResponse,
  TransactionRetrieveParams,
  Transactions,
} from './transactions';
import * as TransfersAPI from './transfers';
import {
  Transfer,
  TransferCreateParams,
  TransferListParams,
  TransferListResponse,
  TransferRetrieveParams,
  TransferSave,
  TransferUpdateParams,
  Transfers,
} from './transfers';
import * as WithdrawalsAPI from './withdrawals';
import {
  Withdrawal,
  WithdrawalCreateParams,
  WithdrawalListParams,
  WithdrawalListResponse,
  WithdrawalRetrieveParams,
  WithdrawalSave,
  WithdrawalUpdateParams,
  Withdrawals,
} from './withdrawals';
import * as ChecksAPI from './checks/checks';
import {
  Check,
  CheckCreateParams,
  CheckLineSave,
  CheckListParams,
  CheckListResponse,
  CheckPayeeSave,
  CheckRetrieveParams,
  CheckUpdateParams,
  Checks,
} from './checks/checks';
import * as ReconciliationsAPI from './reconciliations/reconciliations';
import {
  Reconciliation,
  ReconciliationClearTransactionsParams,
  ReconciliationCreateParams,
  ReconciliationFinalizeParams,
  ReconciliationListParams,
  ReconciliationListResponse,
  ReconciliationListTransactionsParams,
  ReconciliationListTransactionsResponse,
  ReconciliationRetrieveParams,
  ReconciliationUnclearTransactionsParams,
  ReconciliationUpdateParams,
  Reconciliations,
} from './reconciliations/reconciliations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bankaccounts extends APIResource {
  checks: ChecksAPI.Checks = new ChecksAPI.Checks(this._client);
  deposits: DepositsAPI.Deposits = new DepositsAPI.Deposits(this._client);
  quickdeposits: QuickdepositsAPI.Quickdeposits = new QuickdepositsAPI.Quickdeposits(this._client);
  reconciliations: ReconciliationsAPI.Reconciliations = new ReconciliationsAPI.Reconciliations(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
  withdrawals: WithdrawalsAPI.Withdrawals = new WithdrawalsAPI.Withdrawals(this._client);

  /**
   * Creates a bank account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Banking</span> - `View` `Edit`
   */
  create(body: BankaccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.post('/v1/bankaccounts', { body, ...options });
  }

  /**
   * Retrieves a specific bank account.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   */
  retrieve(bankAccountID: number, options?: RequestOptions): APIPromise<Account> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}`, options);
  }

  /**
   * Updates a bank account.;
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Banking</span> - `View` `Edit`
   */
  update(
    bankAccountID: number,
    body: BankaccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Account> {
    return this._client.put(path`/v1/bankaccounts/${bankAccountID}`, { body, ...options });
  }

  /**
   * Retrieves a list of bank accounts.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   */
  list(
    query: BankaccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BankaccountListResponse> {
    return this._client.get('/v1/bankaccounts', { query, ...options });
  }

  /**
   * Retrieve all bank account undeposited funds.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   */
  getUndepositedFunds(
    bankAccountID: number,
    query: BankaccountGetUndepositedFundsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BankaccountGetUndepositedFundsResponse> {
    return this._client.get(path`/v1/bankaccounts/${bankAccountID}/undepositedfunds`, { query, ...options });
  }
}

/**
 * This is an object that represents a bank account.
 */
export interface Account {
  /**
   * Bank account number.
   */
  AccountNumber?: string | null;

  /**
   * Unmasked bank account number
   */
  AccountNumberUnmasked?: string | null;

  /**
   * Bank Account balance
   */
  Balance?: number;

  /**
   * Type of bank account. Values are `Checking` or `Savings`.
   */
  BankAccountType?: string | null;

  /**
   * Check printing info.
   */
  CheckPrintingInfo?: Account.CheckPrintingInfo | null;

  /**
   * The country the bank account is in.
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
    | 'Zimbabwe'
    | null;

  /**
   * Bank account description.
   */
  Description?: string | null;

  /**
   * Electronic Payments.
   */
  ElectronicPayments?: Account.ElectronicPayments | null;

  /**
   * A message that represents a general ledger account.
   */
  GLAccount?: GlaccountsAPI.GlAccountMessage | null;

  /**
   * Bank account unique identifier.
   */
  Id?: number;

  /**
   * Bank Account Status
   */
  IsActive?: boolean;

  /**
   * Bank Account name.
   */
  Name?: string | null;

  /**
   * Bank routing number.
   */
  RoutingNumber?: string | null;
}

export namespace Account {
  /**
   * Check printing info.
   */
  export interface CheckPrintingInfo {
    /**
     * Bank information line 1.
     */
    BankInformationLine1?: string | null;

    /**
     * Bank information line 2.
     */
    BankInformationLine2?: string | null;

    /**
     * Bank information line 3.
     */
    BankInformationLine3?: string | null;

    /**
     * Bank information line 4.
     */
    BankInformationLine4?: string | null;

    /**
     * Bank information line 5.
     */
    BankInformationLine5?: string | null;

    /**
     * The check layout type.
     */
    CheckLayoutType?:
      | 'Voucher1StubBottomMemo1Signature'
      | 'Voucher2StubBottomMemo1Signature'
      | 'Voucher2StubBottomMemo2Signatures'
      | 'Voucher2StubTopMemo'
      | 'Voucher2StubsPrePrintedLayout';

    /**
     * Company information 1.
     */
    CompanyInformationLine1?: string | null;

    /**
     * Company information 2.
     */
    CompanyInformationLine2?: string | null;

    /**
     * Company information 3.
     */
    CompanyInformationLine3?: string | null;

    /**
     * Company information 4.
     */
    CompanyInformationLine4?: string | null;

    /**
     * Company information 5.
     */
    CompanyInformationLine5?: string | null;

    /**
     * Indicates whether local check printing is enabled.
     */
    EnableLocalCheckPrinting?: boolean;

    /**
     * Indicates whether remote check printing is enabled.
     */
    EnableRemoteCheckPrinting?: boolean;

    /**
     * The fractional form of the routing number. Typically is used to identify the
     * bank of the check in cases where the MICR is unreadable.
     */
    FractionalNumber?: string | null;

    /**
     * The check signature heading.
     */
    SignatureHeading?: string | null;
  }

  /**
   * Electronic Payments.
   */
  export interface ElectronicPayments {
    /**
     * Fee charged for using a Credit Card in transactions
     */
    CreditCardServiceFeePercentage?: number | null;

    /**
     * Monthly credit limit
     */
    CreditMonthlyLimit?: number;

    /**
     * Credit transaction limit
     */
    CreditTransactionLimit?: number;

    /**
     * Monthly debt limit
     */
    DebitMonthlyLimit?: number;

    /**
     * Debit transaction limit
     */
    DebitTransactionLimit?: number;

    /**
     * Whether the credit card service fee is paid by residents
     */
    IsCreditCardServiceFeePaidByResident?: boolean | null;

    /**
     * Fee charged per transaction by Credit Card
     */
    ResidentCreditCardConvenienceFeeAmount?: number | null;

    /**
     * Fee charged per transaction by EFT
     */
    ResidentEFTConvienceFeeAmount?: number | null;
  }
}

export type BankaccountListResponse = Array<Account>;

export type BankaccountGetUndepositedFundsResponse =
  Array<BankaccountGetUndepositedFundsResponse.BankaccountGetUndepositedFundsResponseItem>;

export namespace BankaccountGetUndepositedFundsResponse {
  export interface BankaccountGetUndepositedFundsResponseItem {
    /**
     * General ledger transaction.
     */
    GeneralLedgerTransaction?: BankaccountGetUndepositedFundsResponseItem.GeneralLedgerTransaction | null;
  }

  export namespace BankaccountGetUndepositedFundsResponseItem {
    /**
     * General ledger transaction.
     */
    export interface GeneralLedgerTransaction {
      /**
       * General ledger transaction amount.
       */
      Amount?: number;

      /**
       * General ledger transaction check number.
       */
      CheckNumber?: string | null;

      /**
       * Date the transaction was made.
       */
      EntryDate?: string;

      /**
       * General ledger transaction unique identifier.
       */
      Id?: number;

      /**
       * General ledger transaction memo.
       */
      Memo?: string | null;
    }
  }
}

export interface BankaccountCreateParams {
  /**
   * Type of bank account.
   */
  BankAccountType: 'Checking' | 'Savings';

  /**
   * The country the bank account exists in.
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
   * Bank account name.
   */
  Name: string;

  /**
   * Bank account number.
   */
  AccountNumber?: string | null;

  /**
   * Check printing info.
   */
  CheckPrintingInfo?: BankaccountCreateParams.CheckPrintingInfo | null;

  /**
   * Bank account description.
   */
  Description?: string | null;

  /**
   * Bank routing number. If the bank is in Canada, the routing number should be
   * provided as a zero followed by the three digit institution number, followed by
   * the five digit transit number.
   */
  RoutingNumber?: string | null;
}

export namespace BankaccountCreateParams {
  /**
   * Check printing info.
   */
  export interface CheckPrintingInfo {
    /**
     * Bank information line 1.
     */
    BankInformationLine1?: string | null;

    /**
     * Bank information line 2.
     */
    BankInformationLine2?: string | null;

    /**
     * Bank information line 3.
     */
    BankInformationLine3?: string | null;

    /**
     * Bank information line 4.
     */
    BankInformationLine4?: string | null;

    /**
     * Bank information line 5.
     */
    BankInformationLine5?: string | null;

    /**
     * The check layout type. Defaults to `Voucher2StubsPrePrintedLayout` if not
     * specified.
     */
    CheckLayoutType?:
      | 'Voucher1StubBottomMemo1Signature'
      | 'Voucher2StubBottomMemo1Signature'
      | 'Voucher2StubBottomMemo2Signatures'
      | 'Voucher2StubTopMemo'
      | 'Voucher2StubsPrePrintedLayout'
      | null;

    /**
     * Company information 1. Defaults to the company name from the account if not
     * specified.
     */
    CompanyInformationLine1?: string | null;

    /**
     * Company information 2. Defaults to the company address if not specified.
     */
    CompanyInformationLine2?: string | null;

    /**
     * Company information 3. Defaults to the company address if not specified.
     */
    CompanyInformationLine3?: string | null;

    /**
     * Company information 4. Defaults to the company address if not specified.
     */
    CompanyInformationLine4?: string | null;

    /**
     * Company information 5. Defaults to the company address if not specified.
     */
    CompanyInformationLine5?: string | null;

    /**
     * Indicates whether local check printing is enabled.
     */
    EnableLocalCheckPrinting?: boolean | null;

    /**
     * Indicates whether remote check printing is enabled.
     */
    EnableRemoteCheckPrinting?: boolean | null;

    /**
     * The fractional form of the routing number. Typically is used to identify the
     * bank of the check in cases where the MICR is unreadable.
     */
    FractionalNumber?: string | null;

    /**
     * The signature heading. Defaults to "VOID AFTER 90 DAYS" if not specified.
     */
    SignatureHeading?: string | null;
  }
}

export interface BankaccountUpdateParams {
  /**
   * Type of bank account.
   */
  BankAccountType: 'Checking' | 'Savings';

  /**
   * Check printing info.
   */
  CheckPrintingInfo: BankaccountUpdateParams.CheckPrintingInfo;

  /**
   * The country the bank account exists in.
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
   * Bank account name.
   */
  Name: string;

  /**
   * Bank account number.
   */
  AccountNumber?: string | null;

  /**
   * Bank account description.
   */
  Description?: string | null;

  /**
   * Bank routing number. If the bank is in Canada, the routing number should be
   * provided as a zero followed by the three digit institution number, followed by
   * the five digit transit number.
   */
  RoutingNumber?: string | null;
}

export namespace BankaccountUpdateParams {
  /**
   * Check printing info.
   */
  export interface CheckPrintingInfo {
    /**
     * The check layout type.
     */
    CheckLayoutType:
      | 'Voucher1StubBottomMemo1Signature'
      | 'Voucher2StubBottomMemo1Signature'
      | 'Voucher2StubBottomMemo2Signatures'
      | 'Voucher2StubTopMemo'
      | 'Voucher2StubsPrePrintedLayout';

    /**
     * Indicates whether local check printing is enabled.
     */
    EnableLocalCheckPrinting: boolean;

    /**
     * Indicates whether remote check printing is enabled.
     */
    EnableRemoteCheckPrinting: boolean;

    /**
     * Bank information line 1.
     */
    BankInformationLine1?: string | null;

    /**
     * Bank information line 2.
     */
    BankInformationLine2?: string | null;

    /**
     * Bank information line 3.
     */
    BankInformationLine3?: string | null;

    /**
     * Bank information line 4.
     */
    BankInformationLine4?: string | null;

    /**
     * Bank information line 5.
     */
    BankInformationLine5?: string | null;

    /**
     * Company information 1.
     */
    CompanyInformationLine1?: string | null;

    /**
     * Company information 2.
     */
    CompanyInformationLine2?: string | null;

    /**
     * Company information 3.
     */
    CompanyInformationLine3?: string | null;

    /**
     * Company information 4.
     */
    CompanyInformationLine4?: string | null;

    /**
     * Company information 5.
     */
    CompanyInformationLine5?: string | null;

    /**
     * The fractional form of the routing number. Typically is used to identify the
     * bank of the check in cases where the MICR is unreadable.
     */
    FractionalNumber?: string | null;

    /**
     * The signature heading.
     */
    SignatureHeading?: string | null;
  }
}

export interface BankaccountListParams {
  /**
   * Filters results by the status of the bank account. If no status is specified,
   * bank accounts with any status will be returned.
   */
  bankaccountstatus?: 'Active' | 'InActive';

  /**
   * Filters results to any bank account whose name _contains_ the specified value.
   */
  bankname?: string;

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
   * Filters results to any bank accounts whose routing number _contains_ the
   * specified value.
   */
  routingnumbers?: Array<string>;
}

export interface BankaccountGetUndepositedFundsParams {
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

Bankaccounts.Checks = Checks;
Bankaccounts.Deposits = Deposits;
Bankaccounts.Quickdeposits = Quickdeposits;
Bankaccounts.Reconciliations = Reconciliations;
Bankaccounts.Transactions = Transactions;
Bankaccounts.Transfers = Transfers;
Bankaccounts.Withdrawals = Withdrawals;

export declare namespace Bankaccounts {
  export {
    type Account as Account,
    type BankaccountListResponse as BankaccountListResponse,
    type BankaccountGetUndepositedFundsResponse as BankaccountGetUndepositedFundsResponse,
    type BankaccountCreateParams as BankaccountCreateParams,
    type BankaccountUpdateParams as BankaccountUpdateParams,
    type BankaccountListParams as BankaccountListParams,
    type BankaccountGetUndepositedFundsParams as BankaccountGetUndepositedFundsParams,
  };

  export {
    Checks as Checks,
    type Check as Check,
    type CheckLineSave as CheckLineSave,
    type CheckPayeeSave as CheckPayeeSave,
    type CheckListResponse as CheckListResponse,
    type CheckCreateParams as CheckCreateParams,
    type CheckRetrieveParams as CheckRetrieveParams,
    type CheckUpdateParams as CheckUpdateParams,
    type CheckListParams as CheckListParams,
  };

  export {
    Deposits as Deposits,
    type Deposit as Deposit,
    type DepositLineSave as DepositLineSave,
    type DepositListResponse as DepositListResponse,
    type DepositCreateParams as DepositCreateParams,
    type DepositRetrieveParams as DepositRetrieveParams,
    type DepositUpdateParams as DepositUpdateParams,
    type DepositListParams as DepositListParams,
  };

  export {
    Quickdeposits as Quickdeposits,
    type AccountingEntity as AccountingEntity,
    type AccountingEntitySave as AccountingEntitySave,
    type QuickDeposit as QuickDeposit,
    type QuickDepositSave as QuickDepositSave,
    type QuickdepositListResponse as QuickdepositListResponse,
    type QuickdepositCreateParams as QuickdepositCreateParams,
    type QuickdepositRetrieveParams as QuickdepositRetrieveParams,
    type QuickdepositUpdateParams as QuickdepositUpdateParams,
    type QuickdepositListParams as QuickdepositListParams,
  };

  export {
    Reconciliations as Reconciliations,
    type Reconciliation as Reconciliation,
    type ReconciliationListResponse as ReconciliationListResponse,
    type ReconciliationListTransactionsResponse as ReconciliationListTransactionsResponse,
    type ReconciliationCreateParams as ReconciliationCreateParams,
    type ReconciliationRetrieveParams as ReconciliationRetrieveParams,
    type ReconciliationUpdateParams as ReconciliationUpdateParams,
    type ReconciliationListParams as ReconciliationListParams,
    type ReconciliationClearTransactionsParams as ReconciliationClearTransactionsParams,
    type ReconciliationFinalizeParams as ReconciliationFinalizeParams,
    type ReconciliationListTransactionsParams as ReconciliationListTransactionsParams,
    type ReconciliationUnclearTransactionsParams as ReconciliationUnclearTransactionsParams,
  };

  export {
    Transactions as Transactions,
    type BankAccountTransaction as BankAccountTransaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Transfers as Transfers,
    type Transfer as Transfer,
    type TransferSave as TransferSave,
    type TransferListResponse as TransferListResponse,
    type TransferCreateParams as TransferCreateParams,
    type TransferRetrieveParams as TransferRetrieveParams,
    type TransferUpdateParams as TransferUpdateParams,
    type TransferListParams as TransferListParams,
  };

  export {
    Withdrawals as Withdrawals,
    type Withdrawal as Withdrawal,
    type WithdrawalSave as WithdrawalSave,
    type WithdrawalListResponse as WithdrawalListResponse,
    type WithdrawalCreateParams as WithdrawalCreateParams,
    type WithdrawalRetrieveParams as WithdrawalRetrieveParams,
    type WithdrawalUpdateParams as WithdrawalUpdateParams,
    type WithdrawalListParams as WithdrawalListParams,
  };
}
