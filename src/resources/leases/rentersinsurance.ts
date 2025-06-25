// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rentersinsurance extends APIResource {
  /**
   * Retrieves a renters insurance policy.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const rentersInsurancePolicy =
   *   await client.leases.rentersinsurance.retrieve(0, {
   *     leaseId: 0,
   *   });
   * ```
   */
  retrieve(
    policyID: number,
    params: RentersinsuranceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RentersInsurancePolicy> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/rentersinsurance/${policyID}`, options);
  }

  /**
   * Retrieves all renters insurance policies for a lease.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const rentersInsurancePolicies =
   *   await client.leases.rentersinsurance.listAll(0);
   * ```
   */
  listAll(
    leaseID: number,
    query: RentersinsuranceListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RentersinsuranceListAllResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/rentersinsurance`, { query, ...options });
  }
}

export interface RentersInsurancePolicy {
  /**
   * The cancellation date of the policy. This only applies to policies with a
   * `CarrierType` of `MSI`, and is independent of `ExpirationDate`.
   */
  CancellationDate?: string | null;

  /**
   * The carrier type for the policy.
   */
  CarrierType?: 'Other' | 'MSI';

  /**
   * The date that the policy becomes effective.
   */
  EffectiveDate?: string | null;

  /**
   * The date that the policy expires.
   */
  ExpirationDate?: string | null;

  /**
   * Renters insurance policy unique identifier.
   */
  Id?: number;

  /**
   * The name of the insurance company that issued the policy.
   */
  InsuranceCompany?: string | null;

  /**
   * A collection of tenants associated with this policy.
   */
  InsuredTenants?: Array<RentersInsurancePolicy.InsuredTenant> | null;

  /**
   * The policy identifier.
   */
  PolicyIdentifier?: string | null;
}

export namespace RentersInsurancePolicy {
  export interface InsuredTenant {
    /**
     * First name of the tenant.
     */
    FirstName?: string | null;

    /**
     * Tenant unique identifier.
     */
    Id?: number;

    /**
     * Indicates whether this tenant is the primary insured person on the policy. This
     * only applies to policies with a `CarrierType` of `MSI`.
     */
    IsPrimaryInsured?: boolean | null;

    /**
     * Last name of the tenant.
     */
    LastName?: string | null;
  }
}

export type RentersinsuranceListAllResponse = Array<RentersInsurancePolicy>;

export interface RentersinsuranceRetrieveParams {
  leaseId: number;
}

export interface RentersinsuranceListAllParams {
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

export declare namespace Rentersinsurance {
  export {
    type RentersInsurancePolicy as RentersInsurancePolicy,
    type RentersinsuranceListAllResponse as RentersinsuranceListAllResponse,
    type RentersinsuranceRetrieveParams as RentersinsuranceRetrieveParams,
    type RentersinsuranceListAllParams as RentersinsuranceListAllParams,
  };
}
