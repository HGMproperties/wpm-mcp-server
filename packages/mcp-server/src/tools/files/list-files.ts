// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/files',
  operationId: 'ExternalApiFiles_GetFiles',
};

export const tool: Tool = {
  name: 'list_files',
  description:
    'Retrieves a list of files that exist within the customer account. Note this endpoint will only return file metadata. To download files make requests to the <a href="#operation/FileDownloadExternalApi_GetFileDownloadUrlAsync">Download File</a> endpoint. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      categoryid: {
        type: 'integer',
        description: 'Filters results to any file associated with the specified category identifier.',
      },
      entityid: {
        type: 'integer',
        description:
          'Filters results to any file associated with the specified entity identifier. This filter is used in conjunction with the `EntityType` field which must be set to the type of entity this identifier references.',
      },
      entitytype: {
        type: 'string',
        description:
          'Specifies the type of entity that `EntityId` refers to. This field is required if `EntityId` is specified.',
        enum: [
          'Account',
          'Association',
          'AssociationOwner',
          'AssociationUnit',
          'Lease',
          'OwnershipAccount',
          'PublicAsset',
          'Rental',
          'RentalOwner',
          'RentalUnit',
          'Tenant',
          'Vendor',
        ],
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      offset: {
        type: 'integer',
        description:
          '`offset` indicates the position of the first record to return. The `offset` is zero-based and the default is 0.',
      },
      orderby: {
        type: 'string',
        description:
          '`orderby` indicates the field(s) and direction to sort the results in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request Options</a> for more information.',
      },
      physicalfilenames: {
        type: 'array',
        description:
          'Filters results to any files with a `PhysicalFileName`exactly matching one of the provided values.',
        items: {
          type: 'string',
        },
      },
      titleordescription: {
        type: 'string',
        description: 'Filters results to files whose title or description *contains* the specified value.',
      },
      uploadedfrom: {
        type: 'string',
        description:
          'Filters results to any files that were updated on or after the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      uploadedto: {
        type: 'string',
        description:
          'Filters results to any files that were updated on or before the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.files.list(body));
};

export default { metadata, tool, handler };
