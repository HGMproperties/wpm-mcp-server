// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryCreateParams,
  CategoryListParams,
  CategoryListResponse,
  CategoryUpdateParams,
  FileCategory,
} from './categories';
import * as SharingAPI from './sharing';
import { FileSharing, Sharing, SharingUpdateParams } from './sharing';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  sharing: SharingAPI.Sharing = new SharingAPI.Sharing(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Retrieves the file metadata for a specific file. Note this endpoint will only
   * return file metadata. To download files make requests to the
   * <a href="#operation/FileDownloadExternalApi_GetFileDownloadUrlAsync">Download
   * File endpoint.</a>
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`
   */
  retrieve(fileID: number, options?: RequestOptions): APIPromise<File> {
    return this._client.get(path`/v1/files/${fileID}`, options);
  }

  /**
   * Updates a metadata of the file.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`
   */
  update(fileID: number, body: FileUpdateParams, options?: RequestOptions): APIPromise<File> {
    return this._client.put(path`/v1/files/${fileID}`, { body, ...options });
  }

  /**
   * Retrieves a list of files that exist within the customer account. Note this
   * endpoint will only return file metadata. To download files make requests to the
   * <a href="#operation/FileDownloadExternalApi_GetFileDownloadUrlAsync">Download
   * File</a> endpoint.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/v1/files', { query, ...options });
  }

  /**
   * Uploading a file requires making two API requests. Each step is outlined below.
   *
   * <strong>Step 1 - Save file metadata</strong>
   *
   * The first step in the file upload process is to submit the file metadata to
   * `/v1/files/uploadrequests`. The response of this call will contain a URL and a
   * collection of form data that will be used in step 2 to generate the request for
   * the file binary upload.
   *
   * <strong>NOTE:</strong> The response data will expire after 5 minutes. The file
   * metadata will not be saved in the Buildium system if step 2 of this process is
   * not completed successfully.
   *
   * <strong>Step 2 - Upload the file binary</strong>
   *
   * Uploading the file binary will require using the response from step 1 to form a
   * POST request to the Buildium file provider. Follow these steps to create the
   * request:
   *
   * 1. Form a POST request using the value of the `BucketUrl` property as the URL.
   *
   * 2. Set the `Content-Type` header to `multipart/form-data`.
   *
   * 3. Copy the fields from the `FormData` property to this request as form-data
   *    key/value pairs.
   *
   * <strong>NOTE:</strong> These values must added to the request form-data in the
   * order they were received in the response.
   *
   * 4. Lastly create a form-data key named `file` and set the value to the file
   *    binary.
   *
   * <strong>NOTE:</strong> This must be the last field in the form-data list.
   *
   * This image shows what the POST request should look like if you're using Postman:
   * <img src="file-upload-example.png" />
   *
   * 5. Send the POST request! A successful request will return with a
   *    `204 - NO CONTENT` HTTP response code. For any failure responses, please
   *    refer to
   *    <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS
   *    documentation</a> on REST error responses.
   *
   * <strong>NOTE:</strong> The file identifier is not generated in this response. To
   * retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName`
   * value received from the response of this endpoint into the `physicalfilenames`
   * query parameter.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`
   */
  createUploadRequest(
    body: FileCreateUploadRequestParams,
    options?: RequestOptions,
  ): APIPromise<FileCreateUploadRequestResponse> {
    return this._client.post('/v1/files/uploadrequests', { body, ...options });
  }

  /**
   * Downloading a file requires making two API requests. The first request to
   * `/v1/files/{fileId}/downloadrequest` will return a secure URL that can be used
   * to download the file contents. Note the download URL is transient and will
   * expire after 5 minutes.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`
   */
  requestDownload(fileID: number, options?: RequestOptions): APIPromise<FileDownload> {
    return this._client.post(path`/v1/files/${fileID}/downloadrequest`, options);
  }
}

export interface File {
  /**
   * The category identifier assigned to this file.
   */
  CategoryId?: number | null;

  /**
   * MIME type of the file.
   */
  ContentType?: string | null;

  /**
   * Description of the file.
   */
  Description?: string | null;

  /**
   * The entity the file is associated to.
   */
  FileEntity?: File.FileEntity | null;

  /**
   * File unique identifier.
   */
  Id?: number;

  /**
   * Physical name of the file on the server.
   */
  PhysicalFileName?: string | null;

  /**
   * Size of the file. Unit of measure is bytes.
   */
  Size?: number;

  /**
   * Title of the file.
   */
  Title?: string | null;

  /**
   * Date the file was uploaded.
   */
  UploadedDateTime?: string;
}

export namespace File {
  /**
   * The entity the file is associated to.
   */
  export interface FileEntity {
    /**
     * The entity type.
     */
    EntityType?:
      | 'Unknown'
      | 'Account'
      | 'Association'
      | 'AssociationOwner'
      | 'AssociationUnit'
      | 'Lease'
      | 'OwnershipAccount'
      | 'PublicAsset'
      | 'Rental'
      | 'RentalOwner'
      | 'RentalUnit'
      | 'Tenant'
      | 'Vendor';

    /**
     * A link to the entity resource.
     */
    Href?: string | null;

    /**
     * Entity unique identifier.
     */
    Id?: number | null;
  }
}

export interface FileDownload {
  /**
   * A transient URL that can be used to download the requested file. This URL
   * expires after 5 minutes.
   */
  DownloadUrl?: string | null;
}

export type FileListResponse = Array<File>;

export interface FileCreateUploadRequestResponse {
  /**
   * AWS S3 Bucket Url.
   */
  BucketUrl?: string | null;

  /**
   * AWS Meta Data.
   */
  FormData?: { [key: string]: string | null } | null;

  /**
   * The physical file name.
   */
  PhysicalFileName?: string | null;
}

export interface FileUpdateParams {
  /**
   * The category identifier to assign to this file.
   */
  CategoryId: number;

  /**
   * The title of the file. The value cannot exceed 255 characters.
   */
  Title: string;

  /**
   * A description of the file. The value cannot exceed 65000 characters.
   */
  Description?: string | null;
}

export interface FileListParams {
  /**
   * Filters results to any file associated with the specified category identifier.
   */
  categoryid?: number;

  /**
   * Filters results to any file associated with the specified entity identifier.
   * This filter is used in conjunction with the `EntityType` field which must be set
   * to the type of entity this identifier references.
   */
  entityid?: number;

  /**
   * Specifies the type of entity that `EntityId` refers to. This field is required
   * if `EntityId` is specified.
   */
  entitytype?:
    | 'Account'
    | 'Association'
    | 'AssociationOwner'
    | 'AssociationUnit'
    | 'Lease'
    | 'OwnershipAccount'
    | 'PublicAsset'
    | 'Rental'
    | 'RentalOwner'
    | 'RentalUnit'
    | 'Tenant'
    | 'Vendor';

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
   * Filters results to any files with a `PhysicalFileName`exactly matching one of
   * the provided values.
   */
  physicalfilenames?: Array<string>;

  /**
   * Filters results to files whose title or description _contains_ the specified
   * value.
   */
  titleordescription?: string;

  /**
   * Filters results to any files that were updated on or after the specified date.
   * The value must be formatted as YYYY-MM-DD.
   */
  uploadedfrom?: string;

  /**
   * Filters results to any files that were updated on or before the specified date.
   * The value must be formatted as YYYY-MM-DD.
   */
  uploadedto?: string;
}

export interface FileCreateUploadRequestParams {
  /**
   * Unique identified of file category.
   */
  CategoryId: number;

  /**
   * Specifies the type of entity that `EntityId` refers to.
   */
  EntityType:
    | 'Account'
    | 'Association'
    | 'AssociationOwner'
    | 'AssociationUnit'
    | 'Lease'
    | 'OwnershipAccount'
    | 'PublicAsset'
    | 'Rental'
    | 'RentalOwner'
    | 'RentalUnit'
    | 'Tenant'
    | 'Vendor';

  /**
   * Name of file being uploaded. The value can not exceed 255 characters.
   */
  FileName: string;

  /**
   * Title of file upload. The value can not exceed 255 characters.
   */
  Title: string;

  /**
   * Description of file upload. The value can not exceed 1000 characters.
   */
  Description?: string | null;

  /**
   * Unique identified of the Entity Type.
   */
  EntityId?: number | null;
}

Files.Sharing = Sharing;
Files.Categories = Categories;

export declare namespace Files {
  export {
    type File as File,
    type FileDownload as FileDownload,
    type FileListResponse as FileListResponse,
    type FileCreateUploadRequestResponse as FileCreateUploadRequestResponse,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileCreateUploadRequestParams as FileCreateUploadRequestParams,
  };

  export {
    Sharing as Sharing,
    type FileSharing as FileSharing,
    type SharingUpdateParams as SharingUpdateParams,
  };

  export {
    Categories as Categories,
    type FileCategory as FileCategory,
    type CategoryListResponse as CategoryListResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
  };
}
