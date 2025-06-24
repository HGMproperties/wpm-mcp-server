// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.vendors',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/associations/{associationId}/vendors',
  operationId: 'ExternalApiAssociationPreferredVendors_UpdateAssociationPreferredVendors',
};

export const tool: Tool = {
  name: 'update_associations_vendors',
  description:
    'Updates preferred vendors.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\n\r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`\r\n            \r\n<span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      associationId: {
        type: 'integer',
      },
      VendorIds: {
        type: 'array',
        description:
          'A list of vendor identifiers that will be assigned as preferred vendors to the specified association. The submitted list of identifiers will overwrite any existing preferred vendors. Leaving the array empty will remove all vendors from the association.',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { associationId, ...body } = args as any;
  return asTextContentResult(await client.associations.vendors.update(associationId, body));
};

export default { metadata, tool, handler };
