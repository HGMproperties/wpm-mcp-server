// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JournalentriesAPI from '../generalledger/journalentries';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Phonelogs extends APIResource {
  /**
   * Creates a phone log.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View` `Edit`
   */
  create(body: PhonelogCreateParams, options?: RequestOptions): APIPromise<PhoneLogMessage> {
    return this._client.post('/v1/communications/phonelogs', { body, ...options });
  }

  /**
   * Retrieves a specific phone log.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View`
   */
  retrieve(phoneLogID: number, options?: RequestOptions): APIPromise<PhoneLogMessage> {
    return this._client.get(path`/v1/communications/phonelogs/${phoneLogID}`, options);
  }

  /**
   * Update a phone log
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View` `Edit`
   */
  update(
    phoneLogID: number,
    body: PhonelogUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneLogMessage> {
    return this._client.put(path`/v1/communications/phonelogs/${phoneLogID}`, { body, ...options });
  }

  /**
   * Retrieves all phone logs.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View`
   */
  list(
    query: PhonelogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhonelogListResponse> {
    return this._client.get('/v1/communications/phonelogs', { query, ...options });
  }
}

export interface PhoneLogMessage {
  /**
   * The date and time in UTC of when the call took place.
   */
  CallDateTime?: string;

  /**
   * Description of the phone call.
   */
  Description?: string | null;

  /**
   * Phone log unique identifier.
   */
  Id?: number;

  /**
   * The staff member that logged the call.
   */
  LoggedByStaffUser?: PhoneLogMessage.LoggedByStaffUser | null;

  /**
   * The participant in the phone call.
   */
  Participant?: PhoneLogMessage.Participant | null;

  /**
   * Subject of the phone call.
   */
  Subject?: string | null;
}

export namespace PhoneLogMessage {
  /**
   * The staff member that logged the call.
   */
  export interface LoggedByStaffUser {
    /**
     * First name of the staff user.
     */
    FirstName?: string | null;

    /**
     * A link to the staff user resource.
     */
    Href?: string | null;

    /**
     * The staff user unique identifier.
     */
    Id?: number;

    /**
     * Last name of the staff user.
     */
    LastName?: string | null;
  }

  /**
   * The participant in the phone call.
   */
  export interface Participant {
    /**
     * The unique identifier for the participant entity.
     */
    EntityId?: number;

    /**
     * A list of the participants entity types and links to the entity resource. Note,
     * that a participant can have more than one type assigned to them. For example,
     * they could be both a vendor and a rental owner.
     */
    EntityResources?: Array<Participant.EntityResource> | null;

    /**
     * Unit agreement.
     */
    UnitAgreement?: JournalentriesAPI.UnitAgreement | null;
  }

  export namespace Participant {
    /**
     * The participant in the phone call.
     */
    export interface EntityResource {
      /**
       * A link to the participant resource.
       */
      Href?: string | null;

      /**
       * Indicates the participant type.
       */
      Type?: 'Vendor' | 'RentalOwner' | 'RentalTenant' | 'AssociationOwner';
    }
  }
}

export type PhonelogListResponse = Array<PhoneLogMessage>;

export interface PhonelogCreateParams {
  /**
   * The date and time the call took place. Time of the phone call must be UTC.
   * Example format: "2021-01-26T13:59:15Z"
   */
  CallDateTime: string;

  /**
   * Description of the phone call. This value is restricted to a maximum of 65,535
   * characters.
   */
  Description: string;

  /**
   * The participant in the phone call.
   */
  Participant: PhonelogCreateParams.Participant;

  /**
   * Subject of the phone call. This value is restricted to a maximum of 255
   * characters.
   */
  Subject: string;
}

export namespace PhonelogCreateParams {
  /**
   * The participant in the phone call.
   */
  export interface Participant {
    /**
     * The unique identifier for the participant entity.
     */
    EntityId: number;

    /**
     * The type of participant entity.
     */
    EntityType: 'Vendor' | 'RentalOwner' | 'RentalTenant' | 'AssociationOwner';

    /**
     * The unit agreement associated with the participant.
     */
    UnitAgreement?: Participant.UnitAgreement | null;
  }

  export namespace Participant {
    /**
     * The unit agreement associated with the participant.
     */
    export interface UnitAgreement {
      /**
       * The unit agreement unique identifier. Note, if a value is provided in this field
       * then `Type` must also be provided.
       */
      Id?: number;

      /**
       * The type of unit agreement. Note, this field is required if a value is provided
       * for the `Id` field.
       */
      Type?: 'NotSet' | 'Lease' | 'OwnershipAccount';
    }
  }
}

export interface PhonelogUpdateParams {
  /**
   * The date and time the call took place. Time of the phone call must be UTC.
   * Example format: "2021-01-26T13:59:15Z"
   */
  CallDateTime: string;

  /**
   * Description of the phone call. This value is restricted to a maximum of 65,535
   * characters.
   */
  Description: string;

  /**
   * Subject of the phone call. This value is restricted to a maximum of 255
   * characters.
   */
  Subject: string;
}

export interface PhonelogListParams {
  /**
   * Filters results to any phone log whose call date is greater than or equal to the
   * specified value.
   */
  fromdate?: string;

  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Filters results to any phone log that was logged by staff user(s).
   */
  loggedbystaffuserids?: Array<number>;

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
   * Filters results to any phone logs that match the participant identifier. Note,
   * if a value is provided in this field the `ParticipantEntityType` must also be
   * provided.
   */
  participantentityid?: number;

  /**
   * Filters results to any phone log with the specified participant type. This field
   * is required if a value is provided for the `ParticipantEntityId` field.
   */
  participantentitytype?: 'Vendor' | 'RentalOwner' | 'RentalTenant' | 'AssociationOwner';

  /**
   * Filters results to any phone log whose subject _contains_ the specified value.
   */
  subject?: string;

  /**
   * Filters results to any phone log whose call date is less than or equal to the
   * specified value.
   */
  todate?: string;

  /**
   * Filters results to any phone log with the specified unit agreement identifier.
   * Note, if a value is provided in this field the `UnitAgreementType` must also be
   * provided.
   */
  unitagreementid?: number;

  /**
   * Filters results to any phone log with the specified unit agreement type. This
   * field is required if a value is provided for the `UnitAgreementId` field.
   */
  unitagreementtype?: 'Lease' | 'OwnershipAccount';
}

export declare namespace Phonelogs {
  export {
    type PhoneLogMessage as PhoneLogMessage,
    type PhonelogListResponse as PhonelogListResponse,
    type PhonelogCreateParams as PhonelogCreateParams,
    type PhonelogUpdateParams as PhonelogUpdateParams,
    type PhonelogListParams as PhonelogListParams,
  };
}
