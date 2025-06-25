// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssociationsAPI from '../associations/associations';
import * as LeasesAPI from './leases';
import * as OwnersAPI from '../associations/owners/owners';
import * as RecurringchargesAPI from '../associations/ownershipaccounts/recurringcharges';
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
  RecurringChargesToCreate?: Array<RecurringchargesAPI.ChargeRecurringTransaction> | null;

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
    Address: AssociationsAPI.SaveAddress;

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
    AlternateAddress?: AssociationsAPI.SaveAddress | null;

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
    EmergencyContact?: OwnersAPI.SaveEmergencyContact | null;

    /**
     * Mailing preference for the tenant. If an alternate address exists and this value
     * is not provided then the primary address will be set as the preferred address.
     */
    MailingPreference?: 'PrimaryAddress' | 'AlternateAddress' | null;

    /**
     * Phone numbers.
     */
    PhoneNumbers?: OwnersAPI.PhoneNumbers | null;

    /**
     * Tax identifier of the tenant. Valid formats are: `12-1234567`, `123-12-1234`,
     * `123456789`
     */
    TaxId?: string | null;
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
