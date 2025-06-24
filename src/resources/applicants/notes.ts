// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LeasesNotesAPI from '../leases/notes';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Notes extends APIResource {
  /**
   * Creates an applicant note.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> -  `View` `Edit`
   */
  create(
    applicantID: number,
    body: NoteCreateParams,
    options?: RequestOptions,
  ): APIPromise<LeasesNotesAPI.Note> {
    return this._client.post(path`/v1/applicants/${applicantID}/notes`, { body, ...options });
  }

  /**
   * Retrieves an applicant note.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  retrieve(
    noteID: number,
    params: NoteRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LeasesNotesAPI.Note> {
    const { applicantId } = params;
    return this._client.get(path`/v1/applicants/${applicantId}/notes/${noteID}`, options);
  }

  /**
   * Retrieves all applicant notes.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  list(
    applicantID: number,
    query: NoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NoteListResponse> {
    return this._client.get(path`/v1/applicants/${applicantID}/notes`, { query, ...options });
  }
}

export type NoteListResponse = Array<LeasesNotesAPI.Note>;

export interface NoteCreateParams {
  /**
   * Note contents. The value cannot exceed 65535 characters.
   */
  Note: string;
}

export interface NoteRetrieveParams {
  applicantId: number;
}

export interface NoteListParams {
  /**
   * Filters results to only notes that were last updated by the specified user
   * identifier.
   */
  lastupdatedbyuserid?: number;

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
   * Filters results to any note whose updated date and time are greater than or
   * equal to the specified value. The value must be formatted as YYYY-MM-DD
   * HH:MM:SS.
   */
  updateddatetimefrom?: string;

  /**
   * Filters results to any note whose updated date and time are less than or equal
   * to the specified value. The value must be formatted as YYYY-MM-DD HH:MM:SS.
   */
  updateddatetimeto?: string;
}

export declare namespace Notes {
  export {
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteListParams as NoteListParams,
  };
}
