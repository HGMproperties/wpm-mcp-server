// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Emails extends APIResource {
  /**
   * Retrieves the content of an email. To retrieve the recipients of the email see
   * the
   * [Retrieve all email recipients](#tag/Communications/operation/ExternalApiEmailRecipients_GetEmailRecipients)
   * endpoint.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Emails</span> - `View`
   */
  retrieve(emailID: number, options?: RequestOptions): APIPromise<EmailMessage> {
    return this._client.get(path`/v1/communications/emails/${emailID}`, options);
  }

  /**
   * Retrieves all emails.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communication > Emails</span> - `View`
   */
  list(query: EmailListParams, options?: RequestOptions): APIPromise<EmailListResponse> {
    return this._client.get('/v1/communications/emails', { query, ...options });
  }

  /**
   * Retrieves all email recipients.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Email</span> - `View`
   *
   * <h4>Optional Permissions:</h4>
   *
   *             The following permissions are optional, but results with a missing permission will be filtered out.
   *             <span class="permissionBlock">Maintenance > Vendors</span> - `View` In order to retrieve recipients that are Vendors, you must have this permission.
   *             <span class="permissionBlock">Administration > Users</span> - `View` In order to see recipients that are Staff, you must have this permission.
   */
  retrieveRecipients(
    emailID: number,
    query: EmailRetrieveRecipientsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailRetrieveRecipientsResponse> {
    return this._client.get(path`/v1/communications/emails/${emailID}/recipients`, { query, ...options });
  }

  /**
   * Sends an email to one or more recipients using the specified email template.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communication > Emails</span> - `View` `Edit`
   */
  send(body: EmailSendParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/communications/emails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EmailMessage {
  /**
   * Email unique identifier.
   */
  Id?: number;

  /**
   * User who sent the email.
   */
  Sender?: EmailMessage.Sender | null;

  /**
   * The date and time the email was sent.
   */
  SentDateTime?: string;

  /**
   * Email subject.
   */
  Subject?: string | null;
}

export namespace EmailMessage {
  /**
   * User who sent the email.
   */
  export interface Sender {
    /**
     * First name of the user.
     */
    FirstName?: string | null;

    /**
     * A link to the user resource.
     */
    Href?: string | null;

    /**
     * User unique identifier.
     */
    Id?: number;

    /**
     * Last name of the user.
     */
    LastName?: string | null;
  }
}

export type EmailListResponse = Array<EmailMessage>;

export type EmailRetrieveRecipientsResponse =
  Array<EmailRetrieveRecipientsResponse.EmailRetrieveRecipientsResponseItem>;

export namespace EmailRetrieveRecipientsResponse {
  export interface EmailRetrieveRecipientsResponseItem {
    /**
     * Email address of the recipient.
     */
    Email?: string | null;

    /**
     * A link to the resource associated with the recipient.
     */
    Href?: string | null;

    /**
     * Recipient unique identifier.
     */
    Id?: number | null;

    /**
     * Name of the recipient.
     */
    Name?: string | null;

    /**
     * The type of recipient.
     */
    RecipientType?:
      | 'Tenant'
      | 'AssociationOwner'
      | 'RentalOwner'
      | 'AssociationTenant'
      | 'Applicant'
      | 'Vendor'
      | 'Staff';
  }
}

export interface EmailListParams {
  /**
   * Filters results to any emails whose sent date and time are greater than or equal
   * to the specified value. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ. The
   * maximum date range is 90 days.
   */
  sentdatetimefrom: string;

  /**
   * Filters results to any emails whose sent date and time are less than or equal to
   * the specified value. The value must be formatted as YYYY-MM-DDTHH:MM:SSZ. The
   * maximum date range is 90 days.
   */
  sentdatetimeto: string;

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
   * Filters results to any email with a recipient whose name or email address
   * _contains_ the specified value.
   */
  recipientnameoremail?: string;

  /**
   * Filters results to only emails that were sent by the specified user identifier.
   */
  senderuserid?: number;

  /**
   * Filters results to any email whose subject _contains_ the specified value.
   */
  subject?: string;
}

export interface EmailRetrieveRecipientsParams {
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

export interface EmailSendParams {
  /**
   * Indicates whether to exclude sending emails to association owners that are
   * flagged as delinquent. This only applies to association recipients.
   */
  ExcludeDelinquentRecipients: boolean;

  /**
   * Indicates whether to send the email to the recipient's primary and alternate
   * email addresses.
   */
  IncludeAlternateEmails: boolean;

  /**
   * Indicates whether to include association tenants. Only applies to association
   * properties.
   */
  IncludeAssociationTenants: boolean;

  /**
   * Email subject.
   */
  Subject: string;

  /**
   * Unique identifier of the email template to use for the body of the email. Any
   * tokens present in the template will be replaced based on the recipient(s) of the
   * email. The following email templates cannot be used:
   *
   * <ul><li>1 (Tenant Statement)</li><li>2 (Homeowner Statement)</li><li>3 (Rental Owner Statement)</li><li>123 (Association Tenant Invoice)</li><li>124 (Rental Tenant Invoice)</li></ul>
   */
  TemplateId: number;

  /**
   * A list of association and/or rental property unique identifiers to send the
   * email to. Cannot be populated if 'RecipientIds' is present.
   */
  PropertyIds?: Array<number> | null;

  /**
   * A list of individual unique identifiers to send the email to. Cannot be
   * populated if 'PropertyIds' is present.
   */
  RecipientIds?: Array<number> | null;
}

export declare namespace Emails {
  export {
    type EmailMessage as EmailMessage,
    type EmailListResponse as EmailListResponse,
    type EmailRetrieveRecipientsResponse as EmailRetrieveRecipientsResponse,
    type EmailListParams as EmailListParams,
    type EmailRetrieveRecipientsParams as EmailRetrieveRecipientsParams,
    type EmailSendParams as EmailSendParams,
  };
}
