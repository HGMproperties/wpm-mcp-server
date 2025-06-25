// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.architecturalrequests.files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}/files/uploadrequests',
  operationId: 'ExternalApiAssociationArchitecturalRequests_CreateUploadFileRequest',
};

export const tool: Tool = {
  name: 'upload_requests_architecturalrequests_ownershipaccounts_associations_files',
  description:
    'Uploads a file and associates it to the specified architectural request record.\r\n\r\n\r\nUploading a file requires making two API requests. Each step is outlined below.\r\n\r\n\r\n<strong>Step 1 - Save file metadata</strong>\r\n\r\nThe first step in the file upload process is to submit the file metadata to `/v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId:int}/files/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.\r\n\r\n\r\n<strong>NOTE:</strong> The response data will expire after 5 minutes. The file metadata will not be saved in the Buildium system if step 2 of this process is not completed successfully.\r\n\r\n\r\n<strong>Step 2 - Upload the file binary</strong>\r\n\r\nUploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:\r\n\r\n\r\n1. Form a POST request using the value of the `BucketUrl` property as the URL. \r\n\r\n\r\n\r\n2. Set the `Content-Type` header to `multipart/form-data`.\r\n\r\n\r\n\r\n3. Copy the fields from the `FormData`  property to this request as form-data key/value pairs.\r\n\r\n<strong>NOTE:</strong> These values must added to the request form-data in the order they were received in the response.\r\n\r\n\r\n\r\n4. Lastly create a form-data key named `file` and set the value to the file binary.\r\n\r\n<strong>NOTE:</strong> This must be the last field in the form-data list.\r\n\r\n\r\nThis image shows what the POST request should look like if you\'re using Postman:\r\n<img src="file-upload-example.png" />\r\n\r\n\r\n5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.\r\n\r\n\r\n<strong>NOTE:</strong> The file identifier is not generated in this response. To retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName` value received from the response of this endpoint into the `physicalfilenames` query parameter.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Associations > Architectural requests</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      architecturalRequestId: {
        type: 'integer',
      },
      FileName: {
        type: 'string',
        description: 'Name of file being uploaded. The value can not exceed 255 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { architecturalRequestId, ...body } = args as any;
  return asTextContentResult(
    await client.associations.ownershipaccounts.architecturalrequests.files.uploadRequests(
      architecturalRequestId,
      body,
    ),
  );
};

export default { metadata, tool, handler };
