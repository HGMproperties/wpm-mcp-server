// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssociationsAPI from '../associations/associations';
import * as OwnershipaccountsRefundsAPI from '../associations/ownershipaccounts/refunds';
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
  Lines?: Array<LeaseLedgerRefund.Line> | null;

  /**
   * Memo associated with the refund, if applicable.
   */
  Memo?: string | null;

  /**
   * List of payees being refunded.
   */
  Payees?: Array<OwnershipaccountsRefundsAPI.Payee> | null;

  /**
   * Total amount of the refund.
   */
  TotalAmount?: number;
}

export namespace LeaseLedgerRefund {
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
