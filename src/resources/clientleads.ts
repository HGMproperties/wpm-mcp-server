// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AssociationsAPI from './associations/associations';
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
  Address?: AssociationsAPI.Address | null;

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
