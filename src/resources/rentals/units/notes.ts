// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NotesAPI from '../../leases/notes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Notes extends APIResource {
  /**
   * Creates a rental unit note.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  create(unitID: number, body: NoteCreateParams, options?: RequestOptions): APIPromise<NotesAPI.Note> {
    return this._client.post(path`/v1/rentals/units/${unitID}/notes`, { body, ...options });
  }

  /**
   * Retrieves a rental unit note.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  retrieve(noteID: number, params: NoteRetrieveParams, options?: RequestOptions): APIPromise<NotesAPI.Note> {
    const { unitId } = params;
    return this._client.get(path`/v1/rentals/units/${unitId}/notes/${noteID}`, options);
  }

  /**
   * Updates a rental unit note.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  update(noteID: number, params: NoteUpdateParams, options?: RequestOptions): APIPromise<NotesAPI.Note> {
    const { unitId, ...body } = params;
    return this._client.put(path`/v1/rentals/units/${unitId}/notes/${noteID}`, { body, ...options });
  }

  /**
   * Retrieves all rental unit notes.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(
    unitID: number,
    query: NoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NoteListResponse> {
    return this._client.get(path`/v1/rentals/units/${unitID}/notes`, { query, ...options });
  }
}

export type NoteListResponse = Array<NotesAPI.Note>;

export interface NoteCreateParams {
  /**
   * Note contents. The value cannot exceed 65535 characters.
   */
  Note: string;
}

export interface NoteRetrieveParams {
  unitId: number;
}

export interface NoteUpdateParams {
  /**
   * Path param:
   */
  unitId: number;

  /**
   * Body param: Note contents. The value cannot exceed 65535 characters.
   */
  Note: string;
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
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };
}
