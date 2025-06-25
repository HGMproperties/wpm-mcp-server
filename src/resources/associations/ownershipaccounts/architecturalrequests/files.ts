// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FilesAPI from '../../../files/files';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieves an architectural request file.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   *
   * <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * <span class="permissionBlock">Associations > Architectural requests</span> - `View`
   *
   * @example
   * ```ts
   * const associationArchitecturalRequestFile =
   *   await client.associations.ownershipaccounts.architecturalrequests.files.retrieve(
   *     0,
   *     { architecturalRequestId: 0 },
   *   );
   * ```
   */
  retrieve(
    fileID: number,
    params: FileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AssociationArchitecturalRequestFile> {
    const { architecturalRequestId } = params;
    return this._client.get(
      path`/v1/associations/ownershipaccounts/architecturalrequests/${architecturalRequestId}/files/${fileID}`,
      options,
    );
  }

  /**
   * Retrieves all files for an architectural request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   *
   * <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * <span class="permissionBlock">Associations > Architectural requests</span> - `View`
   *
   * @example
   * ```ts
   * const associationArchitecturalRequestFile =
   *   await client.associations.ownershipaccounts.architecturalrequests.files.list(
   *     0,
   *   );
   * ```
   */
  list(
    architecturalRequestID: number,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssociationArchitecturalRequestFile> {
    return this._client.get(
      path`/v1/associations/ownershipaccounts/architecturalrequests/${architecturalRequestID}/files`,
      { query, ...options },
    );
  }

  /**
   * Downloads a specific file associated to the architectural request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
   *
   * <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   *
   * <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
   *
   * <span class="permissionBlock">Associations > Architectural requests</span> - `View`
   *
   * @example
   * ```ts
   * const fileDownload =
   *   await client.associations.ownershipaccounts.architecturalrequests.files.downloadRequests(
   *     0,
   *     { architecturalRequestId: 0 },
   *   );
   * ```
   */
  downloadRequests(
    fileID: number,
    params: FileDownloadRequestsParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FileDownload> {
    const { architecturalRequestId } = params;
    return this._client.post(
      path`/v1/associations/ownershipaccounts/architecturalrequests/${architecturalRequestId}/files/${fileID}/downloadrequests`,
      options,
    );
  }

  /**
   * Uploads a file and associates it to the specified architectural request record.
   *
   * Uploading a file requires making two API requests. Each step is outlined below.
   *
   * <strong>Step 1 - Save file metadata</strong>
   *
   * The first step in the file upload process is to submit the file metadata to
   * `/v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId:int}/files/uploadrequests`.
   * The response of this call will contain a URL and a collection of form data that
   * will be used in step 2 to generate the request for the file binary upload.
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
   * <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
   *
   * <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
   * `Edit`
   *
   * <span class="permissionBlock">Associations > Architectural requests</span> -
   * `View` `Edit`
   *
   * <span class="permissionBlock">Associations > Association owners and
   * tenants</span> - `View` `Edit`
   *
   * @example
   * ```ts
   * const fileUploadTicket =
   *   await client.associations.ownershipaccounts.architecturalrequests.files.uploadRequests(
   *     0,
   *     { FileName: 'x' },
   *   );
   * ```
   */
  uploadRequests(
    architecturalRequestID: number,
    body: FileUploadRequestsParams,
    options?: RequestOptions,
  ): APIPromise<FileUploadTicket> {
    return this._client.post(
      path`/v1/associations/ownershipaccounts/architecturalrequests/${architecturalRequestID}/files/uploadrequests`,
      { body, ...options },
    );
  }
}

export interface AssociationArchitecturalRequestFile {
  /**
   * MIME type of the file.
   */
  ContentType?: string | null;

  /**
   * File unique identifier.
   */
  Id?: number;

  /**
   * Physical name of the file on the server.
   */
  PhysicalFileName?: string | null;

  /**
   * Size of the file, in kilobytes.
   */
  Size?: number;

  /**
   * The title of the file.
   */
  Title?: string | null;

  /**
   * Date and time the file was uploaded.
   */
  UploadedDateTime?: string;
}

export interface FileName {
  /**
   * Name of file being uploaded. The value can not exceed 255 characters.
   */
  FileName: string;
}

export interface FileUploadTicket {
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

export interface FileRetrieveParams {
  architecturalRequestId: number;
}

export interface FileListParams {
  /**
   * The IDs of the architectural request files to filter by.
   */
  ids?: Array<number>;

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

export interface FileDownloadRequestsParams {
  architecturalRequestId: number;
}

export interface FileUploadRequestsParams {
  /**
   * Name of file being uploaded. The value can not exceed 255 characters.
   */
  FileName: string;
}

export declare namespace Files {
  export {
    type AssociationArchitecturalRequestFile as AssociationArchitecturalRequestFile,
    type FileName as FileName,
    type FileUploadTicket as FileUploadTicket,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDownloadRequestsParams as FileDownloadRequestsParams,
    type FileUploadRequestsParams as FileUploadRequestsParams,
  };
}
