// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from '../../files/files';
import * as ImagesAPI from '../images';
import * as ArchitecturalrequestsFilesAPI from '../../associations/ownershipaccounts/architecturalrequests/files';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Images extends APIResource {
  /**
   * Retrieves a unit image.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  retrieve(
    imageID: number,
    params: ImageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RentalUnitImage> {
    const { unitId } = params;
    return this._client.get(path`/v1/rentals/units/${unitId}/images/${imageID}`, options);
  }

  /**
   * Updates a unit image.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Properties and units</span> - `View` `Edit`
   */
  update(
    imageID: number,
    params: ImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ImagesAPI.RentalImage> {
    const { unitId, ...body } = params;
    return this._client.put(path`/v1/rentals/units/${unitId}/images/${imageID}`, { body, ...options });
  }

  /**
   * Retrieves all images for a unit. Note this endpoint will only return file
   * metadata such as file names and descriptions. To download files make requests to
   * the
   * [Download File](#tag/Rental-Units/operation/ExternalApiRentalUnitImageDownloadRequests_GetRentalUnitImageDownloadUrlById)
   * endpoint.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  list(
    unitID: number,
    query: ImageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageListResponse> {
    return this._client.get(path`/v1/rentals/units/${unitID}/images`, { query, ...options });
  }

  /**
   * Deletes a unit image.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit` `Delete`
   */
  delete(imageID: number, params: ImageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { unitId } = params;
    return this._client.delete(path`/v1/rentals/units/${unitId}/images/${imageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Use this endpoint to create a temporary URL that can be used to download a unit
   * image. This URL expires after 5 minutes.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
   */
  downloadrequests(
    imageID: number,
    params: ImageDownloadrequestsParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FileDownload> {
    const { unitId } = params;
    return this._client.post(path`/v1/rentals/units/${unitId}/images/${imageID}/downloadrequests`, options);
  }

  /**
   * Updates the image display order within the Buildium web application and in any
   * associated rental listings.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  updateOrder(
    unitID: number,
    body: ImageUpdateOrderParams,
    options?: RequestOptions,
  ): APIPromise<ImageUpdateOrderResponse> {
    return this._client.put(path`/v1/rentals/units/${unitID}/images/order`, { body, ...options });
  }

  /**
   * Uploads an image and associates it to the specified unit record.
   *
   * Uploading a file requires making two API requests. Each step is outlined below.
   *
   * <strong>Step 1 - Save file metadata</strong>
   *
   *             The first step in the file upload process is to submit the file metadata to `/v1/rentals/units/{unitId:int}/images/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.
   *
   *
   * <strong>NOTE:</strong> The response data will expire after 5 minutes. The file
   * metadata will not be saved in the Buildium system if step 2 of this process is
   * not completed successfully.
   *
   * <strong>Step 2 - Upload the file binary</strong>
   *
   *             Uploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:
   *
   *
   *             1. Form a POST request using the value of the `BucketUrl` property as the URL.
   *
   *
   *
   *             2. Set the `Content-Type` header to `multipart/form-data`.
   *
   *
   *
   *             3. Copy the fields from the `FormData`  property to this request as form-data key/value pairs.
   *
   *
   * <strong>NOTE:</strong> These values must added to the request form-data in the
   * order they were received in the response.
   *
   *             4. Lastly create a form-data key named `file` and set the value to the file binary.
   *
   *
   * <strong>NOTE:</strong> This must be the last field in the form-data list.
   *
   * This image shows what the POST request should look like if you're using Postman:
   * <img src="file-upload-example.png" />
   *
   *             5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.
   *
   *
   * <strong>NOTE:</strong> The file identifier is not generated in this response. To
   * retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName`
   * value received from the response of this endpoint into the `physicalfilenames`
   * query parameter.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
   */
  uploadrequests(
    unitID: number,
    body: ImageUploadrequestsParams,
    options?: RequestOptions,
  ): APIPromise<ArchitecturalrequestsFilesAPI.FileUploadTicket> {
    return this._client.post(path`/v1/rentals/units/${unitID}/images/uploadrequests`, { body, ...options });
  }

  /**
   * Creates an image for a rental unit using a video link.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Properties and units</span> - `View` `Edit`
   */
  videolinkrequests(
    unitID: number,
    body: ImageVideolinkrequestsParams,
    options?: RequestOptions,
  ): APIPromise<RentalUnitImage> {
    return this._client.post(path`/v1/rentals/units/${unitID}/images/videolinkrequests`, {
      body,
      ...options,
    });
  }
}

export interface RentalUnitImage {
  /**
   * Description of the image.
   */
  Description?: string | null;

  /**
   * Rental unit image unique identifier.
   */
  Id?: number;

  /**
   * Physical name of the file on the server.
   */
  PhysicalFileName?: string | null;

  /**
   * The provider for the image. If an external provider is not used to host the
   * image, this will be set to `None`.
   */
  Provider?: 'None' | 'YouTube' | 'Vimeo';

  /**
   * Indicates whether the image will be shown in listings for this unit.
   */
  ShowInListing?: boolean;
}

export type ImageListResponse = Array<RentalUnitImage>;

export type ImageUpdateOrderResponse = Array<RentalUnitImage>;

export interface ImageRetrieveParams {
  unitId: number;
}

export interface ImageUpdateParams {
  /**
   * Path param:
   */
  unitId: number;

  /**
   * Body param: Indicates whether the image will be shown in listings for this unit.
   */
  ShowInListing: boolean;

  /**
   * Body param: Description of the image. The description cannot exceed 100
   * characters.
   */
  Description?: string | null;
}

export interface ImageListParams {
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

export interface ImageDeleteParams {
  unitId: number;
}

export interface ImageDownloadrequestsParams {
  unitId: number;
}

export interface ImageUpdateOrderParams {
  /**
   * Unique identifiers for the images. The request must contain the ids of all
   * images.
   */
  Ids: Array<number>;
}

export interface ImageUploadrequestsParams {
  /**
   * Name of file being uploaded. The value can not exceed 255 characters.
   */
  FileName: string;

  /**
   * Indicates whether the image will be shown in listings.
   */
  ShowInListing: boolean;

  /**
   * A description of the file. The value cannot exceed 100 characters.
   */
  Description?: string | null;
}

export interface ImageVideolinkrequestsParams {
  /**
   * Indicates whether the video will be shown in the listing.
   */
  ShowInListing: boolean;

  /**
   * The URL of the video. Only Youtube and Vimeo URLs are supported. The URL cannot
   * exceed 255 characters.
   */
  VideoUrl: string;
}

export declare namespace Images {
  export {
    type RentalUnitImage as RentalUnitImage,
    type ImageListResponse as ImageListResponse,
    type ImageUpdateOrderResponse as ImageUpdateOrderResponse,
    type ImageRetrieveParams as ImageRetrieveParams,
    type ImageUpdateParams as ImageUpdateParams,
    type ImageListParams as ImageListParams,
    type ImageDeleteParams as ImageDeleteParams,
    type ImageDownloadrequestsParams as ImageDownloadrequestsParams,
    type ImageUpdateOrderParams as ImageUpdateOrderParams,
    type ImageUploadrequestsParams as ImageUploadrequestsParams,
    type ImageVideolinkrequestsParams as ImageVideolinkrequestsParams,
  };
}
