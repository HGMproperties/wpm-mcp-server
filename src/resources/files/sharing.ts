// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sharing extends APIResource {
  /**
   * Retrieves a file's share settings. Note, that the response JSON schema includes
   * share setting fields for all file entity types, however only fields that pertain
   * to the queried file entity type will be populated. For example, if a file of
   * entity type Rental is retrieved only the fields in the Rental section of the
   * response will have values.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`
   */
  retrieve(fileID: number, options?: RequestOptions): APIPromise<FileSharing> {
    return this._client.get(path`/v1/files/${fileID}/sharing`, options);
  }

  /**
   * Updates a file's share settings. Note, can only update a file's share settings
   * based on the file's entity type (ie: If the file belongs to a rental property,
   * you can only update the rental file sharing settings). The response payload
   * contains file share setting values for all file entity types, but the relevant
   * setting values correlate to the file's entity type.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`
   */
  update(fileID: number, body: SharingUpdateParams, options?: RequestOptions): APIPromise<FileSharing> {
    return this._client.put(path`/v1/files/${fileID}/sharing`, { body, ...options });
  }
}

export interface FileSharing {
  /**
   * The file share settings for the account file entity type.
   */
  Account?: FileSharing.Account | null;

  /**
   * The file share settings for the association file entity type.
   */
  Association?: FileSharing.Association | null;

  /**
   * The file share settings for the association owner file entity type.
   */
  AssociationOwner?: FileSharing.AssociationOwner | null;

  /**
   * The file share settings for the association unit file entity type.
   */
  AssociationUnit?: FileSharing.AssociationUnit | null;

  /**
   * The file share settings for the committee file entity type.
   */
  Committee?: FileSharing.Committee | null;

  /**
   * The file share settings for the lease file entity type.
   */
  Lease?: FileSharing.Lease | null;

  /**
   * The file share settings for the ownership account file entity type.
   */
  OwnershipAccount?: FileSharing.OwnershipAccount | null;

  /**
   * The file share settings for the rental file entity type.
   */
  Rental?: FileSharing.Rental | null;

  /**
   * The file share settings for the rental owner file entity type.
   */
  RentalOwner?: FileSharing.RentalOwner | null;

  /**
   * The file share settings for the rental unit file entity type.
   */
  RentalUnit?: FileSharing.RentalUnit | null;

  /**
   * The file share settings for the tenant file entity type.
   */
  Tenant?: FileSharing.Tenant | null;

  /**
   * The file share settings for the vendor file entity type.
   */
  Vendor?: FileSharing.Vendor | null;
}

export namespace FileSharing {
  /**
   * The file share settings for the account file entity type.
   */
  export interface Account {
    /**
     * Indicates whether file is shared with all rental owners via the portal.
     */
    AllRentalOwners?: boolean;

    /**
     * Indicates whether file is shared with all residents via the Resident Center.
     */
    AllResidents?: boolean;

    /**
     * A list of rental property unique identifiers whose residents should receive the
     * file.
     */
    PropertyIds?: Array<number> | null;

    /**
     * A list of rental owner unique identifiers that should receive the file.
     */
    RentalOwnerIds?: Array<number> | null;

    /**
     * Indicates whether file is shared with anyone visiting the company's public site.
     */
    WebsiteVisitors?: boolean;
  }

  /**
   * The file share settings for the association file entity type.
   */
  export interface Association {
    /**
     * Indicates whether file is shared with association owners.
     */
    AssociationOwners?: boolean;

    /**
     * Indicates whether file is shared with board members of the association. Note:
     * file is automatically shared when file is shared with association owners.
     */
    BoardMembers?: boolean;
  }

  /**
   * The file share settings for the association owner file entity type.
   */
  export interface AssociationOwner {
    /**
     * Indicates whether file is shared with the association owner.
     */
    AssociationOwner?: boolean;
  }

  /**
   * The file share settings for the association unit file entity type.
   */
  export interface AssociationUnit {
    /**
     * Indicates whether file is shared with association owners.
     */
    AssociationOwners?: boolean;

    /**
     * Indicates whether file is shared with board members of the association.
     */
    BoardMembers?: boolean;
  }

  /**
   * The file share settings for the committee file entity type.
   */
  export interface Committee {
    /**
     * Indicates whether file is shared with association owners.
     */
    AssociationOwners?: boolean;

    /**
     * Indicates whether file is shared with board members of the association.
     */
    BoardMembers?: boolean;

    /**
     * Indicates whether file is shared with association committee.
     */
    Committee?: boolean;
  }

  /**
   * The file share settings for the lease file entity type.
   */
  export interface Lease {
    /**
     * Indicates whether file is shared with rental owners of the property.
     */
    RentalOwners?: boolean;

    /**
     * Indicates whether file is shared with tenants on the lease.
     */
    Tenants?: boolean;
  }

  /**
   * The file share settings for the ownership account file entity type.
   */
  export interface OwnershipAccount {
    /**
     * Indicates whether file is shared with association owners.
     */
    AssociationOwners?: boolean;

    /**
     * Indicates whether file is shared with board members of the association.
     */
    BoardMembers?: boolean;
  }

  /**
   * The file share settings for the rental file entity type.
   */
  export interface Rental {
    /**
     * Indicates whether file is shared with rental owners of the property.
     */
    RentalOwners?: boolean;

    /**
     * Indicates whether file is shared with tenants of the property.
     */
    Tenants?: boolean;
  }

  /**
   * The file share settings for the rental owner file entity type.
   */
  export interface RentalOwner {
    /**
     * Indicates whether file is shared with rental owner of the property.
     */
    RentalOwner?: boolean;
  }

  /**
   * The file share settings for the rental unit file entity type.
   */
  export interface RentalUnit {
    /**
     * Indicates whether file is shared with rental owners of the property.
     */
    RentalOwners?: boolean;

    /**
     * Indicates whether file is shared with tenants of the property.
     */
    Tenants?: boolean;
  }

  /**
   * The file share settings for the tenant file entity type.
   */
  export interface Tenant {
    /**
     * Indicates whether file is shared with rental owners of the property.
     */
    RentalOwners?: boolean;

    /**
     * Indicates whether file is shared with tenants on the lease.
     */
    Tenants?: boolean;
  }

  /**
   * The file share settings for the vendor file entity type.
   */
  export interface Vendor {
    /**
     * Indicates whether file is shared with the vendor.
     */
    Vendor?: boolean;
  }
}

export interface SharingUpdateParams {
  /**
   * The file share settings for the account file entity type.
   */
  Account?: SharingUpdateParams.Account | null;

  /**
   * The file share settings for the association file entity type.
   */
  Association?: SharingUpdateParams.Association | null;

  /**
   * The file share settings for the association owner file entity type.
   */
  AssociationOwner?: SharingUpdateParams.AssociationOwner | null;

  /**
   * The file share settings for the association unit file entity type.
   */
  AssociationUnit?: SharingUpdateParams.AssociationUnit | null;

  /**
   * The file share settings for the committee file entity type.
   */
  Committee?: SharingUpdateParams.Committee | null;

  /**
   * The file share settings for the lease file entity type.
   */
  Lease?: SharingUpdateParams.Lease | null;

  /**
   * The file share settings for the ownership account file entity type.
   */
  OwnershipAccount?: SharingUpdateParams.OwnershipAccount | null;

  /**
   * The file share settings for the rental file entity type.
   */
  Rental?: SharingUpdateParams.Rental | null;

  /**
   * The file share settings for the rental owner file entity type.
   */
  RentalOwner?: SharingUpdateParams.RentalOwner | null;

  /**
   * The file share settings for the rental unit file entity type.
   */
  RentalUnit?: SharingUpdateParams.RentalUnit | null;

  /**
   * The file share settings for the tenant file entity type.
   */
  Tenant?: SharingUpdateParams.Tenant | null;

  /**
   * The file share settings for the vendor file entity type.
   */
  Vendor?: SharingUpdateParams.Vendor | null;
}

export namespace SharingUpdateParams {
  /**
   * The file share settings for the account file entity type.
   */
  export interface Account {
    /**
     * Indicates whether file is shared with all rental owners via the portal.
     */
    AllRentalOwners?: boolean | null;

    /**
     * Indicates whether file is shared with all residents via the Resident Center.
     */
    AllResidents?: boolean | null;

    /**
     * A list of rental property unique identifiers whose residents should receive the
     * file.
     */
    PropertyIds?: Array<number> | null;

    /**
     * A list of rental owner unique identifiers that should receive the file.
     */
    RentalOwnerIds?: Array<number> | null;

    /**
     * Indicates whether file is shared with anyone visiting the company's public site.
     */
    WebsiteVisitors?: boolean | null;
  }

  /**
   * The file share settings for the association file entity type.
   */
  export interface Association {
    /**
     * Indicates whether file is shared with association owners.
     */
    AssociationOwners?: boolean | null;

    /**
     * Indicates whether file is shared with board members of the association. Note:
     * file is automatically shared when file is shared with association owners.
     */
    BoardMembers?: boolean | null;
  }

  /**
   * The file share settings for the association owner file entity type.
   */
  export interface AssociationOwner {
    /**
     * Indicates whether file is shared with the association owner.
     */
    AssociationOwner?: boolean | null;
  }

  /**
   * The file share settings for the association unit file entity type.
   */
  export interface AssociationUnit {
    /**
     * Indicates whether file is shared with association owners.
     */
    AssociationOwners?: boolean | null;

    /**
     * Indicates whether file is shared with board members of the association.
     */
    BoardMembers?: boolean | null;
  }

  /**
   * The file share settings for the committee file entity type.
   */
  export interface Committee {
    /**
     * Indicates whether file is shared with association owners.
     */
    AssociationOwners?: boolean | null;

    /**
     * Indicates whether file is shared with board members of the association.
     */
    BoardMembers?: boolean | null;

    /**
     * Indicates whether file is shared with association committee.
     */
    Committee?: boolean | null;
  }

  /**
   * The file share settings for the lease file entity type.
   */
  export interface Lease {
    /**
     * Indicates whether file is shared with rental owners of the property.
     */
    RentalOwners?: boolean | null;

    /**
     * Indicates whether file is shared with tenants on the lease.
     */
    Tenants?: boolean | null;
  }

  /**
   * The file share settings for the ownership account file entity type.
   */
  export interface OwnershipAccount {
    /**
     * Indicates whether file is shared with association owners.
     */
    AssociationOwners?: boolean | null;

    /**
     * Indicates whether file is shared with board members of the association.
     */
    BoardMembers?: boolean | null;
  }

  /**
   * The file share settings for the rental file entity type.
   */
  export interface Rental {
    /**
     * Indicates whether file is shared with rental owners of the property.
     */
    RentalOwners?: boolean | null;

    /**
     * Indicates whether file is shared with tenants of the property.
     */
    Tenants?: boolean | null;
  }

  /**
   * The file share settings for the rental owner file entity type.
   */
  export interface RentalOwner {
    /**
     * Indicates whether file is shared with the rental owner of the property.
     */
    RentalOwner?: boolean | null;
  }

  /**
   * The file share settings for the rental unit file entity type.
   */
  export interface RentalUnit {
    /**
     * Indicates whether file is shared with rental owners of the property.
     */
    RentalOwners?: boolean | null;

    /**
     * Indicates whether file is shared with tenants of the property.
     */
    Tenants?: boolean | null;
  }

  /**
   * The file share settings for the tenant file entity type.
   */
  export interface Tenant {
    /**
     * Indicates whether file is shared with rental owners of the property.
     */
    RentalOwners?: boolean | null;

    /**
     * Indicates whether file is shared with tenants on the lease.
     */
    Tenants?: boolean | null;
  }

  /**
   * The file share settings for the vendor file entity type.
   */
  export interface Vendor {
    /**
     * Indicates whether file is shared with the vendor.
     */
    Vendor?: boolean | null;
  }
}

export declare namespace Sharing {
  export { type FileSharing as FileSharing, type SharingUpdateParams as SharingUpdateParams };
}
