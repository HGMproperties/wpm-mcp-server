// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssociationsAPI from '../associations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Refunds extends APIResource {
  /**
   * Creates a refund.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const ownershipAccountRefund =
   *   await client.associations.ownershipaccounts.refunds.create(
   *     0,
   *     {
   *       Address: {
   *         AddressLine1: 'x',
   *         Country: 'Afghanistan',
   *         PostalCode: 'x',
   *       },
   *       BankAccountId: 0,
   *       Date: '2019-12-27',
   *       Lines: [{ Amount: 0, GLAccountId: 0 }],
   *       PayeeUserIds: [0],
   *     },
   *   );
   * ```
   */
  create(
    ownershipAccountID: number,
    body: RefundCreateParams,
    options?: RequestOptions,
  ): APIPromise<OwnershipAccountRefund> {
    return this._client.post(path`/v1/associations/ownershipaccounts/${ownershipAccountID}/refunds`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a refund.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   *
   * @example
   * ```ts
   * const ownershipAccountRefund =
   *   await client.associations.ownershipaccounts.refunds.retrieve(
   *     0,
   *     { ownershipAccountId: 0 },
   *   );
   * ```
   */
  retrieve(
    refundID: number,
    params: RefundRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OwnershipAccountRefund> {
    const { ownershipAccountId } = params;
    return this._client.get(
      path`/v1/associations/ownershipaccounts/${ownershipAccountId}/refunds/${refundID}`,
      options,
    );
  }
}

export interface OwnershipAccountRefund {
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
  Lines?: Array<OwnershipAccountRefund.Line> | null;

  /**
   * Memo associated with the refund, if applicable.
   */
  Memo?: string | null;

  /**
   * List of payees being refunded.
   */
  Payees?: Array<Payee> | null;

  /**
   * Total amount of the refund.
   */
  TotalAmount?: number;
}

export namespace OwnershipAccountRefund {
  export interface Line {
    /**
     * Amount of the account on the line item.
     */
    Amount?: number;

    /**
     * Unique identifier of the general ledger account associated with the refund.
     */
    GLAccountId?: number;
  }
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
  export interface Line {
    /**
     * Line item amount.
     */
    Amount: number;

    /**
     * The general ledger account identifier under which the line item amount will be
     * recorded. The account must be a liability or income type.
     */
    GLAccountId: number;
  }
}

export interface RefundRetrieveParams {
  ownershipAccountId: number;
}

export declare namespace Refunds {
  export {
    type OwnershipAccountRefund as OwnershipAccountRefund,
    type Payee as Payee,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };
}
