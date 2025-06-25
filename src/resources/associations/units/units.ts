// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssociationsAPI from '../associations';
import * as NotesAPI from './notes';
import {
  NoteCreateParams,
  NoteListParams,
  NoteListResponse,
  NoteRetrieveParams,
  NoteUpdateParams,
  Notes,
} from './notes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Units extends APIResource {
  notes: NotesAPI.Notes = new NotesAPI.Notes(this._client);

  /**
   * Creates an association unit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationUnit =
   *   await client.associations.units.create({
   *     Address: {
   *       AddressLine1: 'x',
   *       Country: 'Afghanistan',
   *       PostalCode: 'x',
   *     },
   *     AssociationId: 0,
   *     UnitNumber: 'x',
   *   });
   * ```
   */
  create(body: UnitCreateParams, options?: RequestOptions): APIPromise<AssociationUnit> {
    return this._client.post('/v1/associations/units', { body, ...options });
  }

  /**
   * Retrieve a specific association unit.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const associationUnit =
   *   await client.associations.units.retrieve(0);
   * ```
   */
  retrieve(unitID: number, options?: RequestOptions): APIPromise<AssociationUnit> {
    return this._client.get(path`/v1/associations/units/${unitID}`, options);
  }

  /**
   * Updates an association unit.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const associationUnit =
   *   await client.associations.units.update(0, {
   *     Address: {
   *       AddressLine1: 'x',
   *       Country: 'Afghanistan',
   *       PostalCode: 'x',
   *     },
   *     UnitNumber: 'x',
   *   });
   * ```
   */
  update(unitID: number, body: UnitUpdateParams, options?: RequestOptions): APIPromise<AssociationUnit> {
    return this._client.put(path`/v1/associations/units/${unitID}`, { body, ...options });
  }

  /**
   * Retrieves a list of association units.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * @example
   * ```ts
   * const associationUnits =
   *   await client.associations.units.list();
   * ```
   */
  list(
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitListResponse> {
    return this._client.get('/v1/associations/units', { query, ...options });
  }
}

/**
 * This object represents a home owners association unit.
 */
export interface AssociationUnit {
  /**
   * Address.
   */
  Address?: AssociationsAPI.Address | null;

  /**
   * Association unique identifier that the unit belongs to.
   */
  AssociationId?: number;

  /**
   * Association name that the unit belongs to.
   */
  AssociationName?: string | null;

  /**
   * Association unit unique identifier.
   */
  Id?: number;

  /**
   * Number of bathrooms in the unit.
   */
  UnitBathrooms?:
    | 'NotSet'
    | 'OneBath'
    | 'OnePointFiveBath'
    | 'TwoBath'
    | 'TwoPointFiveBath'
    | 'ThreeBath'
    | 'FourBath'
    | 'FiveBath'
    | 'FivePlusBath'
    | 'ThreePointFiveBath'
    | 'FourPointFiveBath'
    | null;

  /**
   * Number of bedrooms in the unit.
   */
  UnitBedrooms?:
    | 'NotSet'
    | 'Studio'
    | 'OneBed'
    | 'TwoBed'
    | 'ThreeBed'
    | 'FourBed'
    | 'FiveBed'
    | 'SixBed'
    | 'SevenBed'
    | 'EightBed'
    | 'NineBedPlus'
    | null;

  /**
   * Unit number.
   */
  UnitNumber?: string | null;

  /**
   * Size of the unit.
   */
  UnitSize?: number | null;
}

export type UnitListResponse = Array<AssociationUnit>;

export interface UnitCreateParams {
  /**
   * Address.
   */
  Address: AssociationsAPI.SaveAddress;

  /**
   * Association unique identifier that the unit belongs to.
   */
  AssociationId: number;

  /**
   * Unit number. Must be unique within the association and cannot exceed 30
   * characters.
   */
  UnitNumber: string;

  /**
   * Number of bathrooms in the unit.
   */
  UnitBathrooms?:
    | 'NotSet'
    | 'OneBath'
    | 'OnePointFiveBath'
    | 'TwoBath'
    | 'TwoPointFiveBath'
    | 'ThreeBath'
    | 'FourBath'
    | 'FiveBath'
    | 'FivePlusBath'
    | 'ThreePointFiveBath'
    | 'FourPointFiveBath'
    | null;

  /**
   * Number of bedrooms in the unit.
   */
  UnitBedrooms?:
    | 'NotSet'
    | 'Studio'
    | 'OneBed'
    | 'TwoBed'
    | 'ThreeBed'
    | 'FourBed'
    | 'FiveBed'
    | 'SixBed'
    | 'SevenBed'
    | 'EightBed'
    | 'NineBedPlus'
    | null;

  /**
   * Size of the unit.
   */
  UnitSize?: number | null;
}

export interface UnitUpdateParams {
  /**
   * Address.
   */
  Address: AssociationsAPI.SaveAddress;

  /**
   * Unit Number. Must be unique within the association and cannot exceed 30
   * characters.
   */
  UnitNumber: string;

  /**
   * Number of bathrooms in the unit.
   */
  UnitBathrooms?:
    | 'NotSet'
    | 'OneBath'
    | 'OnePointFiveBath'
    | 'TwoBath'
    | 'TwoPointFiveBath'
    | 'ThreeBath'
    | 'FourBath'
    | 'FiveBath'
    | 'FivePlusBath'
    | 'ThreePointFiveBath'
    | 'FourPointFiveBath'
    | null;

  /**
   * Number of bedrooms in the unit.
   */
  UnitBedrooms?:
    | 'NotSet'
    | 'Studio'
    | 'OneBed'
    | 'TwoBed'
    | 'ThreeBed'
    | 'FourBed'
    | 'FiveBed'
    | 'SixBed'
    | 'SevenBed'
    | 'EightBed'
    | 'NineBedPlus'
    | null;

  /**
   * Size of the unit.
   */
  UnitSize?: number | null;
}

export interface UnitListParams {
  /**
   * Filters results to only include Associations with matching IDs
   */
  associationids?: Array<number>;

  /**
   * Filters results to any association units that were updated on or after the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
   */
  lastupdatedfrom?: string;

  /**
   * Filters results to any association units that were updated on or before the
   * specified date. The value must be in UTC and formatted as YYYY-MM-DDTHH:MM:SSZ.
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
}

Units.Notes = Notes;

export declare namespace Units {
  export {
    type AssociationUnit as AssociationUnit,
    type UnitListResponse as UnitListResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };

  export {
    Notes as Notes,
    type NoteListResponse as NoteListResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteRetrieveParams as NoteRetrieveParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };
}
