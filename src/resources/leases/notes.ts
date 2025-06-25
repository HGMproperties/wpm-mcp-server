// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Notes extends APIResource {
  /**
   * Creates a lease note.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const note = await client.leases.notes.create(0, {
   *   Note: 'x',
   * });
   * ```
   */
  create(leaseID: number, body: NoteCreateParams, options?: RequestOptions): APIPromise<Note> {
    return this._client.post(path`/v1/leases/${leaseID}/notes`, { body, ...options });
  }

  /**
   * Retrieves a lease note.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const note = await client.leases.notes.retrieve(0, {
   *   leaseId: 0,
   * });
   * ```
   */
  retrieve(noteID: number, params: NoteRetrieveParams, options?: RequestOptions): APIPromise<Note> {
    const { leaseId } = params;
    return this._client.get(path`/v1/leases/${leaseId}/notes/${noteID}`, options);
  }

  /**
   * Updates a lease note.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const note = await client.leases.notes.update(0, {
   *   leaseId: 0,
   *   Note: 'x',
   * });
   * ```
   */
  update(noteID: number, params: NoteUpdateParams, options?: RequestOptions): APIPromise<Note> {
    const { leaseId, ...body } = params;
    return this._client.put(path`/v1/leases/${leaseId}/notes/${noteID}`, { body, ...options });
  }

  /**
   * Retrieves all lease notes.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
   *
   * @example
   * ```ts
   * const notes = await client.leases.notes.list(0);
   * ```
   */
  list(
    leaseID: number,
    query: NoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NoteListResponse> {
    return this._client.get(path`/v1/leases/${leaseID}/notes`, { query, ...options });
  }
}

export interface Note {
  /**
   * Note unique identifier.
   */
  Id?: number;

  /**
   * Last updated details.
   */
  LastUpdatedByUser?: Note.LastUpdatedByUser | null;

  /**
   * Note contents.
   */
  Note?: string | null;
}

export namespace Note {
  /**
   * Last updated details.
   */
  export interface LastUpdatedByUser {
    /**
     * User first name.
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
     * User last name.
     */
    LastName?: string | null;

    /**
     * The date and time the note was last updated.
     */
    UpdatedDateTime?: string | null;
  }
}

export interface NotePost {
  /**
   * Note contents. The value cannot exceed 65535 characters.
   */
  Note: string;
}

export interface NotePut {
  /**
   * Note contents. The value cannot exceed 65535 characters.
   */
  Note: string;
}

export type NoteListResponse = Array<Note>;

export interface NoteCreateParams {
  /**
   * Note contents. The value cannot exceed 65535 characters.
   */
  Note: string;
}

export interface NoteRetrieveParams {
  leaseId: number;
}

export interface NoteUpdateParams {
  /**
   * Path param:
   */
  leaseId: number;

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
    type Note as Note,
    type NotePost as NotePost,
    type NotePut as NotePut,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };
}
