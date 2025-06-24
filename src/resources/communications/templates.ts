// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * Retrieves a communication template. A template is a tool in Buildium that allows
   * you to create "mail merge" templates for emails and postal mailings to easily
   * send common messages to residents, rental owners and vendors.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Mailing Templates</span> - `View`
   *
   * <h4>Optional Permissions:</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Property Rental owners</span> - `View`
   *
   * <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * <span class="permissionBlock">Maintenance > Vendors</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  retrieve(templateID: number, options?: RequestOptions): APIPromise<MailingTemplateMessage> {
    return this._client.get(path`/v1/communications/templates/${templateID}`, options);
  }

  /**
   * Retrieves all mailing and email templates. A template is a tool in Buildium that
   * allows you to create "mail merge" templates for emails and postal mailings to
   * easily send common messages to residents, rental owners and vendors.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Mailing Templates</span> - `View`
   *
   * <h4>Optional Permissions:</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Property Rental owners</span> - `View`
   *
   * <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * <span class="permissionBlock">Maintenance > Vendors</span> - `View`
   *
   * <span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/v1/communications/templates', { query, ...options });
  }
}

export interface MailingTemplateMessage {
  /**
   * Description of the mailing template.
   */
  Description?: string | null;

  /**
   * Unique identifier of the mailing template.
   */
  Id?: number;

  /**
   * Name of the mailing template.
   */
  Name?: string | null;

  /**
   * Intended recipient type for mailings using the template.
   */
  RecipientType?: 'Tenants' | 'AssociationOwners' | 'RentalOwners' | 'Vendors' | 'Applicants';
}

export type TemplateListResponse = Array<MailingTemplateMessage>;

export interface TemplateListParams {
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

export declare namespace Templates {
  export {
    type MailingTemplateMessage as MailingTemplateMessage,
    type TemplateListResponse as TemplateListResponse,
    type TemplateListParams as TemplateListParams,
  };
}
