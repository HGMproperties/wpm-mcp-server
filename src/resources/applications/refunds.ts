// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssociationsAPI from '../associations/associations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Refunds extends APIResource {
  /**
   * Creates a refund for a specific application.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
   */
  create(applicationID: number, body: RefundCreateParams, options?: RequestOptions): APIPromise<Refund> {
    return this._client.post(path`/v1/applications/${applicationID}/refunds`, { body, ...options });
  }

  /**
   * Retrieves a specific application refund.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`
   */
  retrieve(
    transactionID: number,
    params: RefundRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Refund> {
    const { applicationId } = params;
    return this._client.get(path`/v1/applications/${applicationId}/refunds/${transactionID}`, options);
  }
}

/**
 * This is an object that represents a refund tied to an application.
 */
export interface Refund {
  /**
   * Address.
   */
  Address?: AssociationsAPI.Address | null;

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
  Lines?: Array<Refund.Line> | null;

  /**
   * Memo associated with the refund, if applicable.
   */
  Memo?: string | null;

  /**
   * List of payees being refunded.
   */
  Payees?: Array<Refund.Payee> | null;

  /**
   * Total amount of the refund.
   */
  TotalAmount?: number;
}

export namespace Refund {
  /**
   * This is an object that represents a line on an application refund.
   */
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
   * This is an object that represents an applicant payee.
   */
  export interface Payee {
    /**
     * A link to the resource endpoint associated with the payee.
     */
    Href?: string | null;

    /**
     * The unique identifier of the applicant payee.
     */
    Id?: number;

    /**
     * The name of the payee.
     */
    Name?: string | null;

    /**
     * The payee user entity type.
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
  Address: AssociationsAPI.SaveAddress;

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
   * This is an object that represents a line item on an application ledger refund.
   */
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
  applicationId: number;
}

export declare namespace Refunds {
  export {
    type Refund as Refund,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };
}
