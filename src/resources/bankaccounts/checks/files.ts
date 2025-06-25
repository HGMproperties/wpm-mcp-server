// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieves the metadata for a specific file associated with the specified check.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   *
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>
   */
  retrieve(fileID: number, params: FileRetrieveParams, options?: RequestOptions): APIPromise<CheckFile> {
    const { bankAccountId, checkId } = params;
    return this._client.get(
      path`/v1/bankaccounts/${bankAccountId}/checks/${checkId}/files/${fileID}`,
      options,
    );
  }

  /**
   * Retrieves the metadata for all files associated to the specified check.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
   *
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>
   */
  list(checkID: number, params: FileListParams, options?: RequestOptions): APIPromise<FileListResponse> {
    const { bankAccountId, ...query } = params;
    return this._client.get(path`/v1/bankaccounts/${bankAccountId}/checks/${checkID}/files`, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a file for a check
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccounts</span> - `View` `Edit` `Delete`
   *
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>
   */
  delete(fileID: number, params: FileDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { bankAccountId, checkId } = params;
    return this._client.delete(path`/v1/bankaccounts/${bankAccountId}/checks/${checkId}/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Uploads a file and associates it to the specified check record.
   *
   * Uploading a file requires making two API requests. Each step is outlined below.
   *
   * <strong>Step 1 - Save file metadata</strong>
   *
   * The first step in the file upload process is to submit the file metadata to
   * `/v1/bankaccounts/{bankAccountId:int}/checks/{checkId:int}/files/uploadrequests`.
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
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Checks</span> - `View` `Edit`
   * <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>
   */
  upload(
    checkID: number,
    params: FileUploadParams,
    options?: RequestOptions,
  ): APIPromise<FileUploadResponse> {
    const { bankAccountId, ...body } = params;
    return this._client.post(path`/v1/bankaccounts/${bankAccountId}/checks/${checkID}/files/uploadrequests`, {
      body,
      ...options,
    });
  }
}

export interface CheckFile {
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

export type FileListResponse = Array<CheckFile>;

export interface FileUploadResponse {
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
  bankAccountId: number;

  checkId: number;
}

export interface FileListParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Query param: `limit` indicates the maximum number of results to be returned in
   * the response. `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * Query param: `offset` indicates the position of the first record to return. The
   * `offset` is zero-based and the default is 0.
   */
  offset?: number;

  /**
   * Query param: `orderby` indicates the field(s) and direction to sort the results
   * in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk
   * Request Options</a> for more information.
   */
  orderby?: string;
}

export interface FileDeleteParams {
  bankAccountId: number;

  checkId: number;
}

export interface FileUploadParams {
  /**
   * Path param:
   */
  bankAccountId: number;

  /**
   * Body param: Name of file being uploaded. The value can not exceed 255
   * characters.
   */
  FileName: string;
}

export declare namespace Files {
  export {
    type CheckFile as CheckFile,
    type FileListResponse as FileListResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileUploadParams as FileUploadParams,
  };
}
