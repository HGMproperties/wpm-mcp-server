// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Announcements extends APIResource {
  /**
   * Creates and publishes an announcement.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View` `Edit`
   */
  create(body: AnnouncementCreateParams, options?: RequestOptions): APIPromise<AnnouncementMessage> {
    return this._client.post('/v1/communications/announcements', { body, ...options });
  }

  /**
   * Retrieves an announcement.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View`
   */
  retrieve(announcementID: number, options?: RequestOptions): APIPromise<AnnouncementMessage> {
    return this._client.get(path`/v1/communications/announcements/${announcementID}`, options);
  }

  /**
   * Retrieves all announcements.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View`
   */
  list(
    query: AnnouncementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnnouncementListResponse> {
    return this._client.get('/v1/communications/announcements', { query, ...options });
  }

  /**
   * Removes the announcement from the Resident Center immediately.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View` `Edit`
   */
  expire(announcementID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/communications/announcements/${announcementID}/expirationrequest`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of association and/or rental properties whose residents
   * received the announcement. An empty response collection indicates that the
   * announcement was sent to all properties at the time of its creation.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View`
   */
  retrieveProperties(
    announcementID: number,
    query: AnnouncementRetrievePropertiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnnouncementRetrievePropertiesResponse> {
    return this._client.get(path`/v1/communications/announcements/${announcementID}/properties`, {
      query,
      ...options,
    });
  }
}

export interface AnnouncementMessage {
  /**
   * Date the announcement was published.
   */
  AnnouncementDate?: string;

  /**
   * Content of the announcement.
   */
  Body?: string | null;

  /**
   * List of the distribution channels the announcement was sent through.
   */
  Channels?: Array<'None' | 'ResidentCenter' | 'Email' | 'Sms'> | null;

  /**
   * Indicates the date on which the announcement will be removed from the Resident
   * Center.
   */
  ExpirationDate?: string | null;

  /**
   * Unique identifier of the announcement.
   */
  Id?: number;

  /**
   * The Buildium user who published the announcement.
   */
  Sender?: AnnouncementMessage.Sender | null;

  /**
   * Subject line of the announcement.
   */
  Subject?: string | null;
}

export namespace AnnouncementMessage {
  /**
   * The Buildium user who published the announcement.
   */
  export interface Sender {
    /**
     * Display name of the user who sent the announcement.
     */
    DisplayName?: string | null;

    /**
     * A link to the user resource.
     */
    Href?: string | null;

    /**
     * Unique identifier of the user who sent the announcement.
     */
    Id?: number;
  }
}

/**
 * Property information.
 */
export interface PropertyMessage {
  /**
   * A link to the property entity resource.
   */
  Href?: string | null;

  /**
   * The property unique identifier.
   */
  Id?: number;

  /**
   * The property type.
   */
  Type?: 'Association' | 'Rental';
}

export type AnnouncementListResponse = Array<AnnouncementMessage>;

export type AnnouncementRetrievePropertiesResponse = Array<PropertyMessage>;

export interface AnnouncementCreateParams {
  /**
   * The content of the announcement. The value cannot exceed 65535 characters. Note:
   * if your message is over 140 characters, the announcement will not be sent via
   * SMS. Announcement texts are available for US numbers only.
   */
  Body: string;

  /**
   * Indicates whether to send the announcement to alternate emails in addition to
   * the main email addresses when publishing the announcement.
   */
  IncludeAlternateEmail: boolean;

  /**
   * Indicates whether to include notifying the association tenants in addition to
   * the association owners when publishing the announcement. Note this is only
   * pertains to announcements sent to residents of `Association` properties.
   */
  NotifyAssociationTenants: boolean;

  /**
   * A list of association and/or rental property unique identifiers whose residents
   * should receive the announcement.
   */
  PropertyIds: Array<number>;

  /**
   * The subject of the announcement. Note, this will only show up in announcements
   * sent via email and in the Resident Center. The value cannot exceed 100
   * characters.
   */
  Subject: string;

  /**
   * Optional date that indicates when the announcement should be removed from the
   * Resident Center. If no date is provided the announcement will appear
   * indefinitely The date must be formatted as YYYY-MM-DD.
   */
  ExpirationDate?: string | null;
}

export interface AnnouncementListParams {
  /**
   * Filters results to any announcements created on or after the specified date. The
   * value must be formatted as YYYY-MM-DD.
   */
  announcementdatefrom?: string;

  /**
   * Filters results to any announcements created on or before the specified date.
   * The value must be formatted as YYYY-MM-DD.
   */
  announcementdateto?: string;

  /**
   * Filters results to any announcement associated with the specified entity id
   * value. The value must be of the type specified in the `EntityType` field.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that the `EntityId` field refers to. This field is
   * required if the `EntityId` field is provided.
   */
  entitytype?: 'Rental' | 'RentalOwner' | 'Association';

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
   * Unique identifier of the user that published the announcement.
   */
  senderid?: number;
}

export interface AnnouncementRetrievePropertiesParams {
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

export declare namespace Announcements {
  export {
    type AnnouncementMessage as AnnouncementMessage,
    type PropertyMessage as PropertyMessage,
    type AnnouncementListResponse as AnnouncementListResponse,
    type AnnouncementRetrievePropertiesResponse as AnnouncementRetrievePropertiesResponse,
    type AnnouncementCreateParams as AnnouncementCreateParams,
    type AnnouncementListParams as AnnouncementListParams,
    type AnnouncementRetrievePropertiesParams as AnnouncementRetrievePropertiesParams,
  };
}
