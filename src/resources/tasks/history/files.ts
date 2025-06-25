// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from '../../files/files';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieves the metadata for a specific file associated with a task history
   * record.
   *
   * This endpoint can be used for any task type - contact requests, rental owner
   * requests, resident requests or to do's.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  retrieve(
    fileID: number,
    params: FileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TaskHistoryFile> {
    const { taskId, taskHistoryId } = params;
    return this._client.get(path`/v1/tasks/${taskId}/history/${taskHistoryId}/files/${fileID}`, options);
  }

  /**
   * Retrieves the metadata for all files associated with a task history record.
   *
   * This endpoint can be used for any task type - contact requests, rental owner
   * requests, resident requests or to do's.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  list(
    taskHistoryID: number,
    params: FileListParams,
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    const { taskId, ...query } = params;
    return this._client.get(path`/v1/tasks/${taskId}/history/${taskHistoryID}/files`, { query, ...options });
  }

  /**
   * Deletes a specific file from a task history record. The file will be permanently
   * deleted from the Buildium platform an can not be recovered.
   *
   * This endpoint can be used for any task type - contact requests, rental owner
   * requests, resident requests or to do's.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit` `Delete`
   */
  delete(fileID: number, params: FileDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { taskId, taskHistoryId } = params;
    return this._client.delete(path`/v1/tasks/${taskId}/history/${taskHistoryId}/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Downloads a specific file associated to the task history record.
   *
   * This endpoint can be used for any task type - contact requests, rental owner
   * requests, resident requests or to do's.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  downloadReq(
    fileID: number,
    params: FileDownloadReqParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FileDownload> {
    const { taskId, taskHistoryId } = params;
    return this._client.post(
      path`/v1/tasks/${taskId}/history/${taskHistoryId}/files/${fileID}/downloadrequest`,
      options,
    );
  }

  /**
   * Uploads a file and associates it to the specified task history record.
   *
   * This endpoint can be used for any task type - contact requests, rental owner
   * requests, resident requests or to do's.
   *
   * Uploading a file requires making two API requests. Each step is outlined below.
   *
   * <strong>Step 1 - Save file metadata</strong>
   *
   * The first step in the file upload process is to submit the file metadata to
   * `/v1/tasks/{taskId}/history/{taskHistoryId}/files/uploadrequests`. The response
   * of this call will contain a URL and a collection of form data that will be used
   * in step 2 to generate the request for the file binary upload.
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
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`
   */
  uploadReq(
    taskHistoryID: number,
    params: FileUploadReqParams,
    options?: RequestOptions,
  ): APIPromise<FileUploadReqResponse> {
    const { taskId, ...body } = params;
    return this._client.post(path`/v1/tasks/${taskId}/history/${taskHistoryID}/files/uploadrequests`, {
      body,
      ...options,
    });
  }
}

export interface TaskHistoryFile {
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

export type FileListResponse = Array<TaskHistoryFile>;

export interface FileUploadReqResponse {
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
  taskId: number;

  taskHistoryId: number;
}

export interface FileListParams {
  /**
   * Path param:
   */
  taskId: number;

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
  taskId: number;

  taskHistoryId: number;
}

export interface FileDownloadReqParams {
  taskId: number;

  taskHistoryId: number;
}

export interface FileUploadReqParams {
  /**
   * Path param:
   */
  taskId: number;

  /**
   * Body param: Name of file being uploaded. The value can not exceed 255
   * characters.
   */
  FileName: string;
}

export declare namespace Files {
  export {
    type TaskHistoryFile as TaskHistoryFile,
    type FileListResponse as FileListResponse,
    type FileUploadReqResponse as FileUploadReqResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileDownloadReqParams as FileDownloadReqParams,
    type FileUploadReqParams as FileUploadReqParams,
  };
}
