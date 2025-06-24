// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as JournalentriesAPI from './generalledger/journalentries';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Workorders extends APIResource {
  /**
   * Creates a work order.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View` `Edit`
   */
  create(body: WorkorderCreateParams, options?: RequestOptions): APIPromise<WorkOrder> {
    return this._client.post('/v1/workorders', { body, ...options });
  }

  /**
   * Retrieves a specific work order.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View`
   */
  retrieve(workOrderID: number, options?: RequestOptions): APIPromise<WorkOrder> {
    return this._client.get(path`/v1/workorders/${workOrderID}`, options);
  }

  /**
   * Updates a work order.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View` `Edit`
   */
  update(workOrderID: number, body: WorkorderUpdateParams, options?: RequestOptions): APIPromise<WorkOrder> {
    return this._client.put(path`/v1/workorders/${workOrderID}`, { body, ...options });
  }

  /**
   * Retrieves a list of work orders.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View`
   */
  list(
    query: WorkorderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkorderListResponse> {
    return this._client.get('/v1/workorders', { query, ...options });
  }
}

export interface WorkOrder {
  /**
   * The total amount of the work order.
   */
  Amount?: number;

  /**
   * Unique identifier for the bill related to this work order. This field will be
   * `null` if no bill is related to this work order. If the BillTransactionIds field
   * is available, please refer to that field instead of this one going forward.
   */
  BillTransactionId?: number | null;

  /**
   * A collection of unique identifiers for the bills related to this work order.
   */
  BillTransactionIds?: Array<number> | null;

  /**
   * A description of the entity that will be charged for the work.
   */
  ChargeableTo?: string | null;

  /**
   * Work order due date.
   */
  DueDate?: string | null;

  /**
   * Indicates whether entry has been allowed to the unit.
   */
  EntryAllowed?: 'Unknown' | 'Yes' | 'No';

  /**
   * Contact entity for the work order.
   */
  EntryContact?: WorkOrderEntryContact | null;

  /**
   * A collection of all entry contacts for the work order
   */
  EntryContacts?: Array<WorkOrderEntryContact> | null;

  /**
   * Notes specific to entering the unit.
   */
  EntryNotes?: string | null;

  /**
   * Work order unique identifier.
   */
  Id?: number;

  /**
   * The invoice or reference number that the vendor assigned to the invoice.
   */
  InvoiceNumber?: string | null;

  /**
   * A collection of line items associated with the work order.
   */
  LineItems?: Array<WorkOrder.LineItem> | null;

  /**
   * Work order priority.
   */
  Priority?: 'Unknown' | 'Low' | 'Normal' | 'High' | null;

  /**
   * Work order status.
   */
  Status?: 'Unknown' | 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed' | null;

  /**
   * Task information related to the work order.
   */
  Task?: WorkOrder.Task | null;

  /**
   * Work order title.
   */
  Title?: string | null;

  /**
   * Vendor unique identifier.
   */
  VendorId?: number;

  /**
   * Notes specific to the vendor.
   */
  VendorNotes?: string | null;

  /**
   * Description of the work order.
   */
  WorkDetails?: string | null;
}

export namespace WorkOrder {
  /**
   * Work order line item.
   */
  export interface LineItem {
    /**
     * General ledger account unique identifier.
     */
    GlAccountId?: number | null;

    /**
     * Line item memo.
     */
    Memo?: string | null;

    /**
     * Line item quantity.
     */
    Quantity?: number;

    /**
     * Line item unit price.
     */
    UnitPrice?: number;
  }

  /**
   * Task information related to the work order.
   */
  export interface Task {
    /**
     * Task due date.
     */
    DueDate?: string | null;

    /**
     * Task unique identifier.
     */
    Id?: number;

    /**
     * Task priority.
     */
    Priority?: 'Low' | 'Normal' | 'High';

    /**
     * Task status.
     */
    Status?: 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed';

    /**
     * Task title.
     */
    Title?: string | null;

    /**
     * The task type.
     */
    Type?: 'ContactRequest' | 'ResidentRequest' | 'Todo' | 'RentalOwnerRequest';

    /**
     * Unit agreement.
     */
    UnitAgreement?: JournalentriesAPI.UnitAgreement | null;

    /**
     * The unit unique identifier associated with the task.
     */
    UnitId?: number | null;
  }
}

/**
 * Contact entity for the work order.
 */
export interface WorkOrderEntryContact {
  /**
   * Contact entity unique identifier.
   */
  Id?: number;

  /**
   * List of contact entity resources.
   */
  Resources?: Array<WorkOrderEntryContact.Resource> | null;
}

export namespace WorkOrderEntryContact {
  /**
   * Work order entry contact.
   */
  export interface Resource {
    /**
     * Link to the contact resource.
     */
    Href?: string | null;

    /**
     * Contact entity type.
     */
    Type?: 'RentalTenant' | 'AssociationOwner' | 'Staff' | 'RentalOwner';
  }
}

export interface WorkOrderLineItemSave {
  /**
   * Line item quantity.
   */
  Quantity: number;

  /**
   * Line item unit price.
   */
  UnitPrice: number;

  /**
   * General ledger account unique identifier.
   */
  GlAccountId?: number | null;

  /**
   * Line item memo.
   */
  Memo?: string | null;
}

export type WorkorderListResponse = Array<WorkOrder>;

export interface WorkorderCreateParams {
  /**
   * Indicates whether entry has been allowed to the unit.
   */
  EntryAllowed: 'Unknown' | 'Yes' | 'No';

  /**
   * Vendor unique identifier.
   */
  VendorId: number;

  /**
   * A description of the entity that will be charged for the work. The value cannot
   * exceed 100 characters.
   */
  ChargeableTo?: string | null;

  /**
   * Contact user unique identifier. The user type must be one of the following:
   * `RentalTenant`, `AssociationOwner`, `Staff`, `RentalOwner`.
   */
  EntryContactId?: number | null;

  /**
   * Collection of entry contact user unique identifiers for the work order. The user
   * type of each user in the collection must be one of the following:
   * `RentalTenant`, `AssociationOwner`, `Staff`, `RentalOwner`.
   */
  EntryContactIds?: Array<number> | null;

  /**
   * Notes specific to entering the unit. The value cannot exceed 65,535 characters.
   */
  EntryNotes?: string | null;

  /**
   * The invoice or reference number that the vendor assigned to the work order. The
   * value cannot exceed 50 characters.
   */
  InvoiceNumber?: string | null;

  /**
   * Work order line items.
   */
  LineItems?: Array<WorkOrderLineItemSave> | null;

  /**
   * Task information to create and associate with the work order.
   */
  Task?: WorkorderCreateParams.Task | null;

  /**
   * Task unique identifier to associate with the work order.
   */
  TaskId?: number | null;

  /**
   * Notes specific to the vendor. The value cannot exceed 65,535 characters.
   */
  VendorNotes?: string | null;

  /**
   * Description of the work order. The value cannot exceed 65,535 characters.
   */
  WorkDetails?: string | null;
}

export namespace WorkorderCreateParams {
  /**
   * Task information to create and associate with the work order.
   */
  export interface Task {
    /**
     * The unique identifier of the staff user assigned to the request. The user must
     * be a `Staff` user type.
     */
    AssignedToUserId: number;

    /**
     * Task priority.
     */
    Priority: 'Low' | 'Normal' | 'High';

    /**
     * Task status.
     */
    Status: 'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed';

    /**
     * Task title. The title can not exceed 127 characters.
     */
    Title: string;

    /**
     * Task due date. The date must be formatted as YYYY-MM-DD.
     */
    DueDate?: string | null;

    /**
     * The unique identifier of property associated with the request. The assigned
     * property must be active.
     */
    PropertyId?: number | null;

    /**
     * The unique identifier of the unit associated with the request. The unit must be
     * associated with the `PropertyId` specified.
     */
    UnitId?: number | null;
  }
}

export interface WorkorderUpdateParams {
  /**
   * Indicates whether entry has been allowed to the unit.
   */
  EntryAllowed: 'Unknown' | 'Yes' | 'No';

  /**
   * Vendor unique identifier.
   */
  VendorId: number;

  /**
   * A description of the entity that will be charged for the work. The value cannot
   * exceed 100 characters.
   */
  ChargeableTo?: string | null;

  /**
   * Contact user unique identifier. The user type must be one of the following:
   * `RentalTenant`, `AssociationOwner`, `Staff`, `RentalOwner`.
   */
  EntryContactId?: number | null;

  /**
   * Collection of entry contact user unique identifiers for the work order. The user
   * type of each user in the list must be one of the following: `RentalTenant`,
   * `AssociationOwner`, `Staff`, `RentalOwner`.
   */
  EntryContactIds?: Array<number> | null;

  /**
   * Notes specific to entering the unit. The value cannot exceed 65,535 characters.
   */
  EntryNotes?: string | null;

  /**
   * The invoice or reference number that the vendor assigned to the invoice. The
   * value cannot exceed 50 characters.
   */
  InvoiceNumber?: string | null;

  /**
   * Work order line items. Note that all existing work order line items will be
   * removed and replaced with this list of line items.
   */
  LineItems?: Array<WorkOrderLineItemSave> | null;

  /**
   * Notes specific to the vendor. The value cannot exceed 65,535 characters.
   */
  VendorNotes?: string | null;

  /**
   * Description of the work order. The value cannot exceed 65,535 characters.
   */
  WorkDetails?: string | null;
}

export interface WorkorderListParams {
  /**
   * Filters results to any work orders whose total amounts are equal or greater than
   * the specified amount.
   */
  amountfrom?: number;

  /**
   * Filters results to any work orders whose total amounts are equal or less than
   * the specified amount.
   */
  amountto?: number;

  /**
   * Filters results to any work orders that have been assigned to the specified
   * staff user identifier.
   */
  assignedtoid?: number;

  /**
   * Filters results to any work orders with a due date on or after the specified
   * date. The value must be formatted as YYYY-MM-DD.
   */
  duedatefrom?: string;

  /**
   * Filters results to any work orders with a due date on or before the specified
   * date. The value must be formatted as YYYY-MM-DD.
   */
  duedateto?: string;

  /**
   * Filters results to any work order associated with the specified entity id value.
   * The value must be of the type specified in the `EntityType` field.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that the `EntityId` field refers to. This field is
   * required if the `EntityId` field is populated.
   */
  entitytype?: 'Rental' | 'RentalOwner' | 'Association';

  /**
   * Filters results to work orders that have an associated bill.
   */
  isbilled?: boolean;

  /**
   * Filters results to any work orders were updated on or after the specified date.
   * The value must be formatted as YYYY-MM-DD.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any work orders were updated on or before the specified date.
   * The value must be formatted as YYYY-MM-DD.
   */
  lastupdatedto?: string;

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
   * Filters results to any work orders whose priority matches the specified values.
   * If no priority is specified, tasks with any priority will be returned.
   */
  priorities?: Array<'Low' | 'Normal' | 'High'>;

  /**
   * Filters results by the status of the task associated with the work order. If no
   * status is specified, work orders with any status will be returned.
   */
  statuses?: Array<'New' | 'InProgress' | 'Completed' | 'Deferred' | 'Closed'>;

  /**
   * Filters results to any work orders with the specified task category identifier.
   */
  taskcategoryid?: number;

  /**
   * Filters results to work orders that have an associated to a task in the
   * specified list.
   */
  taskids?: Array<number>;

  /**
   * Filters results to any work orders whose title _contains_ the specified value.
   */
  title?: string;

  /**
   * Filters results to any work order with an associated task with the task type
   * specified.
   */
  type?: 'ContactRequest' | 'ResidentRequest' | 'Todo' | 'RentalOwnerRequest';

  /**
   * Filters results to any work order associated with the unit agreement identifier
   * specified.
   */
  unitagreementid?: number;

  /**
   * Filters results to any work order associated with the unit identifier.
   */
  unitid?: number;

  /**
   * Filters results to any work orders that have been assigned to the specified
   * vendor identifier.
   */
  vendorids?: Array<number>;
}

export declare namespace Workorders {
  export {
    type WorkOrder as WorkOrder,
    type WorkOrderEntryContact as WorkOrderEntryContact,
    type WorkOrderLineItemSave as WorkOrderLineItemSave,
    type WorkorderListResponse as WorkorderListResponse,
    type WorkorderCreateParams as WorkorderCreateParams,
    type WorkorderUpdateParams as WorkorderUpdateParams,
    type WorkorderListParams as WorkorderListParams,
  };
}
