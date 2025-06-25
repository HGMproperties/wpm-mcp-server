// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from '../users';
import * as ApplicationsAPI from '../applications/applications';
import * as ApplieddepositsAPI from './applieddeposits';
import { ApplieddepositCreateParams, ApplieddepositUpdateParams, Applieddeposits } from './applieddeposits';
import * as ChargesAPI from './charges';
import {
  ChargeCreateParams,
  ChargeCreateResponse,
  ChargeListParams,
  ChargeListResponse,
  ChargeRetrieveParams,
  ChargeUpdateParams,
  Charges,
  LeaseCharge,
  LeaseChargeLine,
} from './charges';
import * as EpaysettingsAPI from './epaysettings';
import {
  EpaysettingRetrieveResponse,
  EpaysettingUpdateParams,
  EpaysettingUpdateResponse,
  Epaysettings,
} from './epaysettings';
import * as MoveoutsAPI from './moveouts';
import {
  LeaseMoveOutData,
  MoveoutCreateParams,
  MoveoutDeleteParams,
  MoveoutListParams,
  MoveoutListResponse,
  MoveoutRetrieveParams,
  Moveouts,
} from './moveouts';
import * as NotesAPI from './notes';
import {
  Note,
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NotePost,
  NotePut,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import * as PartialpaymentsettingsAPI from './partialpaymentsettings';
import { PartialpaymentsettingUpdateParams, Partialpaymentsettings } from './partialpaymentsettings';
import * as PaymentsAPI from './payments';
import { LeaseLedgerPaymentLine, PaymentCreateParams, PaymentUpdateParams, Payments } from './payments';
import * as RecurringchargesAPI from './recurringcharges';
import {
  LeaseChargeRecurringTransaction,
  RecurringchargeCreateParams,
  RecurringchargeRetrieveParams,
  Recurringcharges,
} from './recurringcharges';
import * as RecurringcreditsAPI from './recurringcredits';
import {
  LeaseRecurringCredit,
  RecurringcreditCreateParams,
  RecurringcreditRetrieveParams,
  Recurringcredits,
} from './recurringcredits';
import * as RecurringpaymentsAPI from './recurringpayments';
import {
  LeaseRecurringPayment,
  RecurringpaymentCreateParams,
  RecurringpaymentRetrieveParams,
  Recurringpayments,
} from './recurringpayments';
import * as RecurringtransactionsAPI from './recurringtransactions';
import {
  RecurringtransactionListAllParams,
  RecurringtransactionListAllResponse,
  RecurringtransactionListParams,
  RecurringtransactionListResponse,
  Recurringtransactions,
} from './recurringtransactions';
import * as RefundsAPI from './refunds';
import { LeaseLedgerRefund, RefundCreateParams, RefundRetrieveParams, Refunds } from './refunds';
import * as RenewalsAPI from './renewals';
import {
  LeaseRenewal,
  RenewalCreateParams,
  RenewalListParams,
  RenewalListResponse,
  RenewalListUpcomingParams,
  RenewalListUpcomingResponse,
  RenewalRetrieveParams,
  Renewals,
} from './renewals';
import * as RentAPI from './rent';
import {
  LeaseRentCharge,
  LeaseRentMessage,
  Rent,
  RentCreateParams,
  RentGetByLeaseParams,
  RentGetByLeaseResponse,
  RentListAllParams,
  RentListAllResponse,
  RentRetrieveParams,
  RentRetrieveResponse,
  RentUpdateParams,
} from './rent';
import * as RentersinsuranceAPI from './rentersinsurance';
import {
  RentersInsurancePolicy,
  Rentersinsurance,
  RentersinsuranceListAllParams,
  RentersinsuranceListAllResponse,
  RentersinsuranceRetrieveParams,
} from './rentersinsurance';
import * as TransactionsAPI from './transactions';
import {
  LeaseTransaction,
  TransactionListParams,
  TransactionListResponse,
  TransactionRetrieveParams,
  Transactions,
} from './transactions';
import * as TenantsAPI from './tenants/tenants';
import {
  RentalTenantPut,
  Tenant as TenantsAPITenant,
  TenantCreateParams,
  TenantListAllParams,
  TenantListAllResponse,
  TenantUpdateParams,
  Tenants,
} from './tenants/tenants';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Leases extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  charges: ChargesAPI.Charges = new ChargesAPI.Charges(this._client);
  moveouts: MoveoutsAPI.Moveouts = new MoveoutsAPI.Moveouts(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);
  refunds: RefundsAPI.Refunds = new RefundsAPI.Refunds(this._client);
  renewals: RenewalsAPI.Renewals = new RenewalsAPI.Renewals(this._client);
  applieddeposits: ApplieddepositsAPI.Applieddeposits = new ApplieddepositsAPI.Applieddeposits(this._client);
  recurringtransactions: RecurringtransactionsAPI.Recurringtransactions =
    new RecurringtransactionsAPI.Recurringtransactions(this._client);
  epaysettings: EpaysettingsAPI.Epaysettings = new EpaysettingsAPI.Epaysettings(this._client);
  partialpaymentsettings: PartialpaymentsettingsAPI.Partialpaymentsettings =
    new PartialpaymentsettingsAPI.Partialpaymentsettings(this._client);
  recurringcharges: RecurringchargesAPI.Recurringcharges = new RecurringchargesAPI.Recurringcharges(
    this._client,
  );
  recurringcredits: RecurringcreditsAPI.Recurringcredits = new RecurringcreditsAPI.Recurringcredits(
    this._client,
  );
  recurringpayments: RecurringpaymentsAPI.Recurringpayments = new RecurringpaymentsAPI.Recurringpayments(
    this._client,
  );
  rent: RentAPI.Rent = new RentAPI.Rent(this._client);
  rentersinsurance: RentersinsuranceAPI.Rentersinsurance = new RentersinsuranceAPI.Rentersinsurance(
    this._client,
  );
  tenants: TenantsAPI.Tenants = new TenantsAPI.Tenants(this._client);

  /**
   * Creates a signed lease.
   *
   * <span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   * `Edit`
   *
   * <h4>Optional Permissions:</h4>
   * <span class="permissionBlock">Rentals > Applicants</span> - `View` In order to add tenants to the lease using the ApplicantIds property, you must have this permission.
   *
   * @example
   * ```ts
   * const lease = await client.leases.create({
   *   LeaseFromDate: '2019-12-27',
   *   LeaseType: 'Fixed',
   *   SendWelcomeEmail: true,
   *   UnitId: 0,
   * });
   * ```
   */
  create(body: LeaseCreateParams, options?: RequestOptions): APIPromise<Lease> {
    return this._client.post('/v1/leases', { body, ...options });
  }

  /**
   * Retrieves a specific lease.
   *
   * <span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const lease = await client.leases.retrieve(0);
   * ```
   */
  retrieve(leaseID: number, options?: RequestOptions): APIPromise<Lease> {
    return this._client.get(path`/v1/leases/${leaseID}`, options);
  }

  /**
   * Update a signed lease.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const lease = await client.leases.update(0, {
   *   IsEvictionPending: true,
   *   LeaseFromDate: '2019-12-27',
   *   LeaseType: 'Fixed',
   *   UnitId: 0,
   * });
   * ```
   */
  update(leaseID: number, body: LeaseUpdateParams, options?: RequestOptions): APIPromise<Lease> {
    return this._client.put(path`/v1/leases/${leaseID}`, { body, ...options });
  }

  /**
   * Retrieves a list of leases.
   *
   * <span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const leases = await client.leases.list();
   * ```
   */
  list(
    query: LeaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeaseListResponse> {
    return this._client.get('/v1/leases', { query, ...options });
  }

  /**
   * Creates a payment on the lease ledger. Note that the recorded payment will be
   * automatically allocated to the general ledger accounts based on the payment
   * allocation settings. These settings can be found under the Settings >
   * Application Settings > Residents page in your account. If you'd like to specify
   * the GL accounts the payment should apply to, please use the
   * <a href="#operation/ExternalApiLeaseLedgerPaymentsWrite_CreatePayment">Create a
   * payment</a> endpoint.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseTransaction =
   *   await client.leases.createAutoPayment(0, {
   *     Date: '2019-12-27',
   *     PaymentMethod: 'Check',
   *     SendEmailReceipt: true,
   *     TotalAmount: 0,
   *   });
   * ```
   */
  createAutoPayment(
    leaseID: number,
    body: LeaseCreateAutoPaymentParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.LeaseTransaction> {
    return this._client.post(path`/v1/leases/${leaseID}/autoallocatedpayments`, { body, ...options });
  }

  /**
   * Creates a lease ledger credit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseTransaction = await client.leases.createCredit(
   *   0,
   *   {
   *     CreditType: 'WaiveUnpaid',
   *     Date: '2019-12-27',
   *     Lines: [{ Amount: 0, GlAccountId: 0 }],
   *   },
   * );
   * ```
   */
  createCredit(
    leaseID: number,
    body: LeaseCreateCreditParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.LeaseTransaction> {
    return this._client.post(path`/v1/leases/${leaseID}/credits`, { body, ...options });
  }

  /**
   * Reverses a lease ledger payment. Note, this action can only be taken on a
   * payment that has been deposited.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const leaseTransaction =
   *   await client.leases.createPayReversal(0, {
   *     EntryDate: '2019-12-27',
   *     PaymentTransactionId: 0,
   *   });
   * ```
   */
  createPayReversal(
    leaseID: number,
    body: LeaseCreatePayReversalParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.LeaseTransaction> {
    return this._client.post(path`/v1/leases/${leaseID}/reversepayments`, { body, ...options });
  }

  /**
   * Retrieves a list of leases that have outstanding balances. Leases with a zero or
   * credit balance will not be returned in the results.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Outstanding Balances</span> - `View`
   *
   * @example
   * ```ts
   * const response = await client.leases.listBalances();
   * ```
   */
  listBalances(
    query: LeaseListBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeaseListBalancesResponse> {
    return this._client.get('/v1/leases/outstandingbalances', { query, ...options });
  }

  /**
   * Retrieves all lease renewal history
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const response = await client.leases.listRenewHistory();
   * ```
   */
  listRenewHistory(
    query: LeaseListRenewHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeaseListRenewHistoryResponse> {
    return this._client.get('/v1/leases/renewalhistory', { query, ...options });
  }
}

/**
 * This object represents a rental property lease.
 */
export interface Lease {
  /**
   * This is an object that represents lease financial details.
   */
  AccountDetails?: Lease.AccountDetails | null;

  /**
   * Indicates whether to automatically move out all tenants assigned to the lease
   * and set the lease status to past when the lease ends.
   */
  AutomaticallyMoveOutTenants?: boolean;

  /**
   * List of the cosigners on the lease.
   */
  Cosigners?: Array<Lease.Cosigner> | null;

  /**
   * Date and time the lease was created.
   */
  CreatedDateTime?: string;

  /**
   * Count of current tenants.
   */
  CurrentNumberOfOccupants?: number;

  /**
   * List of the current tenants on the lease.
   */
  CurrentTenants?: Array<TenantsAPI.Tenant> | null;

  /**
   * Lease unique identifier.
   */
  Id?: number;

  /**
   * Indicates whether the lease has an eviction pending.
   */
  IsEvictionPending?: boolean;

  /**
   * The date and time the lease was last updated.
   */
  LastUpdatedDateTime?: string | null;

  /**
   * Start date of the lease.
   */
  LeaseFromDate?: string | null;

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
   * Move out data of lease
   */
  MoveOutData?: Array<MoveoutsAPI.LeaseMoveOutData> | null;

  /**
   * Day of the month payment is due.
   */
  PaymentDueDay?: number;

  /**
   * Rental property unique identifier.
   */
  PropertyId?: number;

  /**
   * Describes the status of the renewal offer. Null if no renewal offer exists.
   */
  RenewalOfferStatus?:
    | 'NotSet'
    | 'NotStarted'
    | 'Generated'
    | 'Declined'
    | 'Renewed'
    | 'Draft'
    | 'Unsigned'
    | 'PartiallySigned'
    | 'Countersign'
    | 'Activated'
    | 'Sent'
    | 'Accepted'
    | null;

  /**
   * List of all tenants ever associated with the lease
   */
  Tenants?: Array<Lease.Tenant> | null;

  /**
   * Describes the term type of the lease.
   */
  TermType?: 'MonthToMonth' | 'Standard' | 'Owner';

  /**
   * Unit unique identifier.
   */
  UnitId?: number;

  /**
   * Unit number specified in the lease.
   */
  UnitNumber?: string | null;
}

export namespace Lease {
  /**
   * This is an object that represents lease financial details.
   */
  export interface AccountDetails {
    /**
     * Rent for the lease. Null if no rent exists.
     */
    Rent?: number | null;

    /**
     * Security deposit for the lease. Null if no security deposit exists.
     */
    SecurityDeposit?: number | null;
  }

  /**
   * This object represents a rental property cosigner.
   */
  export interface Cosigner {
    /**
     * Address.
     */
    Address?: Cosigner.Address | null;

    /**
     * Address.
     */
    AlternateAddress?: Cosigner.AlternateAddress | null;

    /**
     * Alternate Email for the cosigner.
     */
    AlternateEmail?: string | null;

    /**
     * Created date of this cosigner record.
     */
    CreatedDateTime?: string | null;

    /**
     * Email for the cosigner.
     */
    Email?: string | null;

    /**
     * First name of the cosigner.
     */
    FirstName?: string | null;

    /**
     * Cosigner unique identifier.
     */
    Id?: number;

    /**
     * Last name of the cosigner.
     */
    LastName?: string | null;

    /**
     * Mailing preference for the cosigner.
     */
    MailingPreference?: 'PrimaryAddress' | 'AlternateAddress';

    /**
     * List of phone numbers for the cosigner.
     */
    PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;
  }

  export namespace Cosigner {
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
  }

  export interface Tenant {
    /**
     * Tenant unique identifier.
     */
    Id?: number;

    /**
     * Indicates the tenant's move-in date.
     */
    MoveInDate?: string | null;

    /**
     * Indicates the tenant's current status in relation to the lease.
     */
    Status?: 'MovedOut' | 'Current' | 'Future';
  }
}

/**
 * This object represents a rental lease cosigner.
 */
export interface LeaseCosigner {
  /**
   * First name of the cosigner.
   */
  FirstName: string;

  /**
   * Last name of the cosigner.
   */
  LastName: string;

  /**
   * Address.
   */
  Address?: LeaseCosigner.Address | null;

  /**
   * Address.
   */
  AlternateAddress?: LeaseCosigner.AlternateAddress | null;

  /**
   * Alternate Email for the cosigner.
   */
  AlternateEmail?: string | null;

  /**
   * Email for the cosigner.
   */
  Email?: string | null;

  /**
   * Mailing preferences for the cosigner. If an alternate address exists and this
   * value is not provided then the primary address will be set as the preferred
   * address.
   */
  MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

  /**
   * Phone numbers.
   */
  PhoneNumbers?: LeaseCosigner.PhoneNumbers | null;
}

export namespace LeaseCosigner {
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
 * The rent for the lease. When provided in the request the charges for the
 * specified amount will be automatically applied to the lease ledger on the
 * cadence specified in the `Cycle`.
 */
export interface LeaseRentForPostMessage {
  /**
   * List of charges to apply to the lease.
   */
  Charges: Array<LeaseRentForPostMessage.Charge>;

  /**
   * Indicates the cadence of when rent `Charges` will be applied automatically to
   * the lease ledger.
   */
  Cycle:
    | 'Monthly'
    | 'Weekly'
    | 'Every2Weeks'
    | 'Quarterly'
    | 'Yearly'
    | 'Every2Months'
    | 'Daily'
    | 'Every6Months'
    | 'OneTime';
}

export namespace LeaseRentForPostMessage {
  export interface Charge {
    /**
     * The amount of the charge.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which to record the charge.
     */
    GlAccountId: number;

    /**
     * Indicates the next date the charge will be applied to the lease ledger. This
     * date will also be used as the start date for the calculating the `Cycle` of when
     * to apply the next charge. The date must be formatted as YYYY-MM-DD.
     */
    NextDueDate: string;

    /**
     * Memo for the charge.
     */
    Memo?: string | null;
  }
}

export type LeaseListResponse = Array<Lease>;

export type LeaseListBalancesResponse = Array<LeaseListBalancesResponse.LeaseListBalancesResponseItem>;

export namespace LeaseListBalancesResponse {
  export interface LeaseListBalancesResponseItem {
    /**
     * Outstanding balance due from within the last 30 days.
     */
    Balance0To30Days?: number;

    /**
     * Outstanding balance due from within 31 to 60 days ago.
     */
    Balance31To60Days?: number;

    /**
     * Outstanding balance due from within 61 to 90 days ago.
     */
    Balance61To90Days?: number;

    /**
     * Outstanding balance due from over 90 days ago.
     */
    BalanceOver90Days?: number;

    /**
     * Breakdown of outstanding balance due by general ledger account.
     */
    Balances?: Array<ApplicationsAPI.OutstandingBalancesLine> | null;

    /**
     * Date of notification for pending eviction.
     */
    EvictionPendingDate?: string | null;

    /**
     * Indicates if notice was sent.
     */
    IsNoticeGiven?: boolean;

    /**
     * Lease unique identifier.
     */
    LeaseId?: number;

    /**
     * Date of notification for outstanding balance.
     */
    PastDueEmailSentDate?: string | null;

    /**
     * Property unique identifier.
     */
    PropertyId?: number;

    /**
     * Total outstanding balance due.
     */
    TotalBalance?: number;

    /**
     * Property unit unique identifier.
     */
    UnitId?: number | null;
  }
}

export type LeaseListRenewHistoryResponse =
  Array<LeaseListRenewHistoryResponse.LeaseListRenewHistoryResponseItem>;

export namespace LeaseListRenewHistoryResponse {
  export interface LeaseListRenewHistoryResponseItem {
    /**
     * Date and time the lease renewal was created.
     */
    CreatedDateTime?: string;

    /**
     * Lease renewal unique identifier.
     */
    Id?: number;

    /**
     * The date and time the lease renewal was last updated.
     */
    LastUpdatedDateTime?: string | null;

    /**
     * Start date of the lease.
     */
    LeaseFromDate?: string;

    /**
     * Lease unique identifier.
     */
    LeaseId?: number;

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
}

export interface LeaseCreateParams {
  /**
   * Start date of the lease.
   */
  LeaseFromDate: string;

  /**
   * Describes the type of lease.
   *
   * `AtWill` leases are month-to-month leases. Setting a lease as at will tells
   * Buildium when the tenant's lease initially started, but since there is no lease
   * end date, Buildium will never move the lease to expired, and it will continue to
   * post any automatic transactions (like recurring monthly rent charges or late
   * fees) until you manually end the lease.
   *
   * `Fixed` leases are leases that have specific start and end dates.When the end
   * date occurs, the lease will move from active to expired, and any transactions
   * set to post automatically(like recurring monthly rent charges or late fees) will
   * stop posting.
   *
   * `FixedWithRollover` leases are similar to fixed leases, but instead of Buildium
   * moving this lease to expired as of the end date, it will move the lease to an at
   * will status, which tells Buildium to continue posting monthly rent charges, late
   * fees for you until you manually end the lease.
   */
  LeaseType: 'Fixed' | 'FixedWithRollover' | 'AtWill';

  /**
   * Indicates whether to send a welcome email to all tenants on the lease inviting
   * them to the resident center website.
   */
  SendWelcomeEmail: boolean;

  /**
   * Unit unique identifier associated with the lease.
   */
  UnitId: number;

  /**
   * List of identifiers for applicants to become tenants on the lease. Identifiers
   * must refer to applicants with a Status of `Approved`. The list cannot exceed
   * five applicants.
   */
  ApplicantIds?: Array<number> | null;

  /**
   * List of the cosigners on the lease.
   */
  Cosigners?: Array<LeaseCosigner> | null;

  /**
   * End date of the lease.
   */
  LeaseToDate?: string | null;

  /**
   * Prorated rent charged for the first month of the lease. Must be null if the
   * lease begins on the first day of a month.
   */
  ProratedFirstMonthRent?: number | null;

  /**
   * Prorated rent charged for the last month of the lease. Must be null if the lease
   * ends on the last day of a month.
   */
  ProratedLastMonthRent?: number | null;

  /**
   * The rent for the lease. When provided in the request the charges for the
   * specified amount will be automatically applied to the lease ledger on the
   * cadence specified in the `Cycle`.
   */
  Rent?: LeaseRentForPostMessage | null;

  /**
   * The security deposit on the lease. When provided in the request a one-time
   * charge for the specified amount will be applied to the lease ledger.
   */
  SecurityDeposit?: LeaseCreateParams.SecurityDeposit | null;

  /**
   * List of identifiers for existing tenants to add to the lease. The list cannot
   * exceed five tenants.
   */
  TenantIds?: Array<number> | null;

  /**
   * List of new tenants to add to the lease. The list cannot exceed five tenants.
   */
  Tenants?: Array<TenantsAPI.RentalTenantPut> | null;
}

export namespace LeaseCreateParams {
  /**
   * The security deposit on the lease. When provided in the request a one-time
   * charge for the specified amount will be applied to the lease ledger.
   */
  export interface SecurityDeposit {
    /**
     * Security deposit amount.
     */
    Amount: number;

    /**
     * The date the security deposit is due. This date will be used as the transaction
     * date when applying the charge to the lease ledger.
     */
    DueDate: string;
  }
}

export interface LeaseUpdateParams {
  /**
   * Indicates whether the lease has an eviction pending.
   */
  IsEvictionPending: boolean;

  /**
   * Start date of the lease.
   */
  LeaseFromDate: string;

  /**
   * Describes the type of lease.
   */
  LeaseType: 'Fixed' | 'FixedWithRollover' | 'AtWill';

  /**
   * Unit unique identifier associated with the lease.
   */
  UnitId: number;

  /**
   * Indicates whether to automatically move out all tenants assigned to the lease
   * and set the lease status to past when the lease ends.
   */
  AutomaticallyMoveOutTenants?: boolean | null;

  /**
   * End date of the lease.
   */
  LeaseToDate?: string | null;
}

export interface LeaseListParams {
  /**
   * Filters results to any lease whose created date and time are greater than or
   * equal to the specified value. The value must be formatted as YYYY-MM-DD
   * HH:MM:SS.
   */
  createddatetimefrom?: string;

  /**
   * Filters results to any lease whose created date and time are less than or equal
   * to the specified value. The value must be formatted as YYYY-MM-DD HH:MM:SS.
   */
  createddatetimeto?: string;

  /**
   * Filters results to any leases that were updated on or after the specified date.
   * The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any leases that were updated on or before the specified date.
   * The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedto?: string;

  /**
   * Filters results to any lease whose start date is greater than or equal to the
   * specified value.
   */
  leasedatefrom?: string;

  /**
   * Filters results to any lease whose end date is less than or equal to the
   * specified value.
   */
  leasedateto?: string;

  /**
   * Filters results to any lease whose lease term matches the specified status. If
   * no status is specified, leases with any lease term status will be returned.
   */
  leasestatuses?: Array<'Active' | 'Past' | 'Future'>;

  /**
   * Filters results to any lease whose lease type matches the specified status. If
   * no type is specified, leases with any type will be returned.
   */
  leasetypes?: Array<'None' | 'Fixed' | 'FixedWithRollover' | 'AtWill'>;

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
   * Filters results to any lease whose unit belongs to the specified set of property
   * ids.
   */
  propertyids?: Array<number>;

  /**
   * Filters results to any lease whose unit belongs to a property with a rental
   * owner in the specified set of rental owner ids.
   */
  rentalownerids?: Array<number>;

  /**
   * Filters results to any lease whose current tenants' names _contain_ the
   * specified value.
   */
  tenantname?: string;

  /**
   * Filters results to any lease whose unit number _contains_ the specified value.
   */
  unitnumber?: string;
}

export interface LeaseCreateAutoPaymentParams {
  /**
   * The date of the transaction. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * The payment method used for the transaction.
   */
  PaymentMethod:
    | 'Check'
    | 'Cash'
    | 'MoneyOrder'
    | 'CashierCheck'
    | 'DirectDeposit'
    | 'CreditCard'
    | 'ElectronicPayment';

  /**
   * An indicator for whether or not to send an email receipt to the payee. If the
   * payee does not have an email address set, no email will be sent.
   */
  SendEmailReceipt: boolean;

  /**
   * The total amount of the payment being created.
   */
  TotalAmount: number;

  /**
   * A brief note describing the reason for the payment. The value cannot exceed 65
   * characters.
   */
  Memo?: string | null;

  /**
   * The payee's user unique identifier.
   */
  PayeeUserId?: number | null;

  /**
   * The reference Number of the transaction. The value cannot exceed 30 characters.
   */
  ReferenceNumber?: string | null;
}

export interface LeaseCreateCreditParams {
  /**
   * Indicates how the credit should be applied.
   *
   * <ul><li>WaiveUnpaid - This credit type allows for reversing one or more charges without losing record of what has changed.</li><li>Exchange - This credit type allows for one of the following: 1) Reimburse a resident for a out-of-pocket expense, 2) Compensate for a service, 3) Write-off a resident balance considered uncollectable.</li><li>PreviouslyDeposited - This credit type allows for issuing a credit against payments that have already been deposited.</li></ul>
   */
  CreditType: 'WaiveUnpaid' | 'Exchange' | 'PreviouslyDeposited';

  /**
   * Date of the transaction. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * A collection of line items included in the credit. At least one line item is
   * required.
   */
  Lines: Array<LeaseCreateCreditParams.Line>;

  /**
   * Description of the transaction. The value cannot exceed 65 characters.
   */
  Memo?: string | null;

  /**
   * Sets the offsetting general ledger account identifier for the credit.
   *
   * This value must be provided when the `CreditType` field is set to `Exchange` or
   * `PreviouslyDeposited`.
   *
   * When the `CreditType` is `Exchange` this must be an _expense_ general ledger
   * account type.
   *
   * When the `CreditType` is `PreviouslyDeposited` this must be an _equity_ general
   * ledger account type.
   */
  OffsettingGLAccountId?: number | null;
}

export namespace LeaseCreateCreditParams {
  /**
   * Credit line item.
   */
  export interface Line {
    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which the line item amount will be
     * recorded. The account must be a liability or income type.
     */
    GlAccountId: number;
  }
}

export interface LeaseCreatePayReversalParams {
  /**
   * Date of the transaction.
   */
  EntryDate: string;

  /**
   * Transaction identifier of the payment to reverse. Note, this payment transaction
   * must be deposited.
   */
  PaymentTransactionId: number;

  /**
   * Fee assessed by the bank for the reversed payment.
   */
  BankFee?: LeaseCreatePayReversalParams.BankFee | null;

  /**
   * Non-sufficient funds (NSF) charge to the tenant.
   */
  NSFCharge?: LeaseCreatePayReversalParams.NsfCharge | null;
}

export namespace LeaseCreatePayReversalParams {
  /**
   * Fee assessed by the bank for the reversed payment.
   */
  export interface BankFee {
    /**
     * Expense general ledger account to associate the bank fee.
     */
    GLAccountId: number;

    /**
     * Total amount of the bank fee.
     */
    TotalAmount: number;
  }

  /**
   * Non-sufficient funds (NSF) charge to the tenant.
   */
  export interface NsfCharge {
    /**
     * Income general ledger income account to record the charge under.
     */
    GLAccountId: number;

    /**
     * Total amount to charge the tenant.
     */
    TotalAmount: number;
  }
}

export interface LeaseListBalancesParams {
  balanceduration?:
    | 'TotalBalance'
    | 'Balance0to30Days'
    | 'Balance31to60Days'
    | 'Balance61to90Days'
    | 'BalanceOver90Days';

  entityid?: number;

  entitytype?: 'Rental' | 'RentalOwner';

  evictionstatus?: 'NotEvictionPending' | 'EvictionPending';

  leaseids?: Array<number>;

  leasestatuses?: Array<'Active' | 'Past' | 'Future'>;

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

  pastdueemail?: 'NoEmailAddress' | 'Sent';
}

export interface LeaseListRenewHistoryParams {
  /**
   * Filters results to only lease renewals that were created after this date. The
   * value must be in UTC and formatted as `YYYY-MM-DDTHH:MM:SSZ`. The maximum date
   * range is 365 days.
   */
  createddatetimefrom?: string;

  /**
   * Filters results to only lease renewals that were created before this date.The
   * value must be in UTC and formatted as `YYYY-MM-DDTHH:MM:SSZ`. The maximum date
   * range is 365 days.
   */
  createddatetimeto?: string;

  /**
   * Filters results to any lease renewals that were updated on or after the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   * The maximum date range is 365 days.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any lease renewals were updated on or before the specified
   * date.The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ. The maximum
   * date range is 365 days.
   */
  lastupdatedto?: string;

  /**
   * Filters results to only include lease renewals whose renewals belongs to the
   * specified set of lease ids.
   */
  leaseids?: Array<number>;

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

Leases.Transactions = Transactions;
Leases.Charges = Charges;
Leases.Moveouts = Moveouts;
Leases.Payments = Payments;
Leases.Notes = Notes;
Leases.Refunds = Refunds;
Leases.Renewals = Renewals;
Leases.Applieddeposits = Applieddeposits;
Leases.Recurringtransactions = Recurringtransactions;
Leases.Epaysettings = Epaysettings;
Leases.Partialpaymentsettings = Partialpaymentsettings;
Leases.Recurringcharges = Recurringcharges;
Leases.Recurringcredits = Recurringcredits;
Leases.Recurringpayments = Recurringpayments;
Leases.Rent = Rent;
Leases.Rentersinsurance = Rentersinsurance;
Leases.Tenants = Tenants;

export declare namespace Leases {
  export {
    type Lease as Lease,
    type LeaseCosigner as LeaseCosigner,
    type LeaseRentForPostMessage as LeaseRentForPostMessage,
    type LeaseListResponse as LeaseListResponse,
    type LeaseListBalancesResponse as LeaseListBalancesResponse,
    type LeaseListRenewHistoryResponse as LeaseListRenewHistoryResponse,
    type LeaseCreateParams as LeaseCreateParams,
    type LeaseUpdateParams as LeaseUpdateParams,
    type LeaseListParams as LeaseListParams,
    type LeaseCreateAutoPaymentParams as LeaseCreateAutoPaymentParams,
    type LeaseCreateCreditParams as LeaseCreateCreditParams,
    type LeaseCreatePayReversalParams as LeaseCreatePayReversalParams,
    type LeaseListBalancesParams as LeaseListBalancesParams,
    type LeaseListRenewHistoryParams as LeaseListRenewHistoryParams,
  };

  export {
    Transactions as Transactions,
    type LeaseTransaction as LeaseTransaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Charges as Charges,
    type LeaseCharge as LeaseCharge,
    type LeaseChargeLine as LeaseChargeLine,
    type ChargeCreateResponse as ChargeCreateResponse,
    type ChargeListResponse as ChargeListResponse,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeListParams as ChargeListParams,
  };

  export {
    Moveouts as Moveouts,
    type LeaseMoveOutData as LeaseMoveOutData,
    type MoveoutListResponse as MoveoutListResponse,
    type MoveoutCreateParams as MoveoutCreateParams,
    type MoveoutRetrieveParams as MoveoutRetrieveParams,
    type MoveoutListParams as MoveoutListParams,
    type MoveoutDeleteParams as MoveoutDeleteParams,
  };

  export {
    Payments as Payments,
    type LeaseLedgerPaymentLine as LeaseLedgerPaymentLine,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentUpdateParams as PaymentUpdateParams,
  };

  export {
    Notes as Notes,
    type Note as Note,
    type NotePost as NotePost,
    type NotePut as NotePut,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };

  export {
    Refunds as Refunds,
    type LeaseLedgerRefund as LeaseLedgerRefund,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };

  export {
    Renewals as Renewals,
    type LeaseRenewal as LeaseRenewal,
    type RenewalListResponse as RenewalListResponse,
    type RenewalListUpcomingResponse as RenewalListUpcomingResponse,
    type RenewalCreateParams as RenewalCreateParams,
    type RenewalRetrieveParams as RenewalRetrieveParams,
    type RenewalListParams as RenewalListParams,
    type RenewalListUpcomingParams as RenewalListUpcomingParams,
  };

  export {
    Applieddeposits as Applieddeposits,
    type ApplieddepositCreateParams as ApplieddepositCreateParams,
    type ApplieddepositUpdateParams as ApplieddepositUpdateParams,
  };

  export {
    Recurringtransactions as Recurringtransactions,
    type RecurringtransactionListResponse as RecurringtransactionListResponse,
    type RecurringtransactionListAllResponse as RecurringtransactionListAllResponse,
    type RecurringtransactionListParams as RecurringtransactionListParams,
    type RecurringtransactionListAllParams as RecurringtransactionListAllParams,
  };

  export {
    Epaysettings as Epaysettings,
    type EpaysettingRetrieveResponse as EpaysettingRetrieveResponse,
    type EpaysettingUpdateResponse as EpaysettingUpdateResponse,
    type EpaysettingUpdateParams as EpaysettingUpdateParams,
  };

  export {
    Partialpaymentsettings as Partialpaymentsettings,
    type PartialpaymentsettingUpdateParams as PartialpaymentsettingUpdateParams,
  };

  export {
    Recurringcharges as Recurringcharges,
    type LeaseChargeRecurringTransaction as LeaseChargeRecurringTransaction,
    type RecurringchargeCreateParams as RecurringchargeCreateParams,
    type RecurringchargeRetrieveParams as RecurringchargeRetrieveParams,
  };

  export {
    Recurringcredits as Recurringcredits,
    type LeaseRecurringCredit as LeaseRecurringCredit,
    type RecurringcreditCreateParams as RecurringcreditCreateParams,
    type RecurringcreditRetrieveParams as RecurringcreditRetrieveParams,
  };

  export {
    Recurringpayments as Recurringpayments,
    type LeaseRecurringPayment as LeaseRecurringPayment,
    type RecurringpaymentCreateParams as RecurringpaymentCreateParams,
    type RecurringpaymentRetrieveParams as RecurringpaymentRetrieveParams,
  };

  export {
    Rent as Rent,
    type LeaseRentCharge as LeaseRentCharge,
    type LeaseRentMessage as LeaseRentMessage,
    type RentRetrieveResponse as RentRetrieveResponse,
    type RentGetByLeaseResponse as RentGetByLeaseResponse,
    type RentListAllResponse as RentListAllResponse,
    type RentCreateParams as RentCreateParams,
    type RentRetrieveParams as RentRetrieveParams,
    type RentUpdateParams as RentUpdateParams,
    type RentGetByLeaseParams as RentGetByLeaseParams,
    type RentListAllParams as RentListAllParams,
  };

  export {
    Rentersinsurance as Rentersinsurance,
    type RentersInsurancePolicy as RentersInsurancePolicy,
    type RentersinsuranceListAllResponse as RentersinsuranceListAllResponse,
    type RentersinsuranceRetrieveParams as RentersinsuranceRetrieveParams,
    type RentersinsuranceListAllParams as RentersinsuranceListAllParams,
  };

  export {
    Tenants as Tenants,
    type RentalTenantPut as RentalTenantPut,
    type TenantsAPITenant as Tenant,
    type TenantListAllResponse as TenantListAllResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListAllParams as TenantListAllParams,
  };
}
