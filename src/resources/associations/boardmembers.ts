// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from '../users';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Boardmembers extends APIResource {
  /**
   * Creates a board member for a given association.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationBoardMember =
   *   await client.associations.boardmembers.create(0, {
   *     AssociationOwnerId: 0,
   *     BoardPositionType: 'President',
   *   });
   * ```
   */
  create(
    associationID: number,
    body: BoardmemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationBoardMember> {
    return this._client.post(path`/v1/associations/${associationID}/boardmembers`, { body, ...options });
  }

  /**
   * Retrieves an association board member.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * @example
   * ```ts
   * const associationBoardMember =
   *   await client.associations.boardmembers.retrieve(0, {
   *     associationId: 0,
   *   });
   * ```
   */
  retrieve(
    boardMemberID: number,
    params: BoardmemberRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AssociationBoardMember> {
    const { associationId } = params;
    return this._client.get(path`/v1/associations/${associationId}/boardmembers/${boardMemberID}`, options);
  }

  /**
   * Updates a board member for a given association.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationBoardMember =
   *   await client.associations.boardmembers.update(0, {
   *     associationId: 0,
   *     BoardPositionType: 'President',
   *   });
   * ```
   */
  update(
    boardMemberID: number,
    params: BoardmemberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssociationBoardMember> {
    const { associationId, ...body } = params;
    return this._client.put(path`/v1/associations/${associationId}/boardmembers/${boardMemberID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all association board members.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * @example
   * ```ts
   * const associationBoardMembers =
   *   await client.associations.boardmembers.list(0);
   * ```
   */
  list(
    associationID: number,
    query: BoardmemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoardmemberListResponse> {
    return this._client.get(path`/v1/associations/${associationID}/boardmembers`, { query, ...options });
  }

  /**
   * Deletes a board member. Note, this is a hard delete from the database and data
   * can not be restored.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit` `Delete`
   *
   * @example
   * ```ts
   * await client.associations.boardmembers.delete(0, {
   *   associationId: 0,
   * });
   * ```
   */
  delete(boardMemberID: number, params: BoardmemberDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { associationId } = params;
    return this._client.delete(path`/v1/associations/${associationId}/boardmembers/${boardMemberID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AssociationBoardMember {
  /**
   * Association owner unique identifier.
   */
  AssociationOwnerId?: number;

  /**
   * Indicates the board position held by the association owner.
   */
  BoardPositionType?: 'President' | 'VicePresident' | 'Treasurer' | 'Secretary' | 'BoardMember';

  /**
   * Date and time when the board member was created.
   */
  CreatedDateTime?: string;

  /**
   * Association owner email.
   */
  Email?: string | null;

  /**
   * End date of the association owner's term as board member
   */
  EndDate?: string | null;

  /**
   * Association owner first name.
   */
  FirstName?: string | null;

  /**
   * Association board member unique identifier.
   */
  Id?: number;

  /**
   * Association owner last name.
   */
  LastName?: string | null;

  /**
   * List of phone numbers of the association owner.
   */
  PhoneNumbers?: Array<UsersAPI.PhoneNumber> | null;

  /**
   * Start date of the association owner's term as board member
   */
  StartDate?: string | null;
}

export type BoardmemberListResponse = Array<AssociationBoardMember>;

export interface BoardmemberCreateParams {
  /**
   * The association owner's unique identifier.
   */
  AssociationOwnerId: number;

  /**
   * Indicates the board position held by the association owner.
   */
  BoardPositionType: 'President' | 'VicePresident' | 'Treasurer' | 'Secretary' | 'BoardMember';

  /**
   * End date of the association owners term as a board member. Must be formatted as
   * `YYYY-MM-DD`.
   */
  EndDate?: string | null;

  /**
   * Start date of the association owners term as a board member. Must be formatted
   * as `YYYY-MM-DD`.
   */
  StartDate?: string | null;
}

export interface BoardmemberRetrieveParams {
  associationId: number;
}

export interface BoardmemberUpdateParams {
  /**
   * Path param:
   */
  associationId: number;

  /**
   * Body param: Indicates the board position held by the association owner.
   */
  BoardPositionType: 'President' | 'VicePresident' | 'Treasurer' | 'Secretary' | 'BoardMember';

  /**
   * Body param: End date of the association owners term as a board member. Must be
   * formatted as `YYYY-MM-DD`.
   */
  EndDate?: string | null;

  /**
   * Body param: Start date of the association owners term as a board member. Must be
   * formatted as `YYYY-MM-DD`.
   */
  StartDate?: string | null;
}

export interface BoardmemberListParams {
  /**
   * Filters results to only records whose board position type is equal to the
   * specified values.
   */
  boardpositiontypes?: Array<'President' | 'VicePresident' | 'Treasurer' | 'Secretary' | 'BoardMember'>;

  /**
   * Filters results to only records that were created after this date. Must be
   * formatted as `YYYY-MM-DD`.
   */
  createddatetimefrom?: string;

  /**
   * Filters results to only records that were created before this date. Must be
   * formatted as `YYYY-MM-DD`.
   */
  createddatetimeto?: string;

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
   * Filters results to only records whose status is equal to the specified values.
   */
  statuses?: Array<'Current' | 'Former' | 'Future'>;
}

export interface BoardmemberDeleteParams {
  associationId: number;
}

export declare namespace Boardmembers {
  export {
    type AssociationBoardMember as AssociationBoardMember,
    type BoardmemberListResponse as BoardmemberListResponse,
    type BoardmemberCreateParams as BoardmemberCreateParams,
    type BoardmemberRetrieveParams as BoardmemberRetrieveParams,
    type BoardmemberUpdateParams as BoardmemberUpdateParams,
    type BoardmemberListParams as BoardmemberListParams,
    type BoardmemberDeleteParams as BoardmemberDeleteParams,
  };
}
