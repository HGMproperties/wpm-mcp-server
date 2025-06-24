// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.vendors',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/{propertyId}/vendors',
  operationId: 'ExternalApiRentalPreferredVendors_UpdateRentalPreferredVendors',
};

export const tool: Tool = {
  name: 'create_rentals_vendors',
  description:
    'Updates preferred vendors.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`\r\n            \r\n<span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'integer',
      },
      VendorIds: {
        type: 'array',
        description:
          'A list of vendor identifiers that will be assigned as preferred vendors to the specified rental property. The submitted list of identifiers will overwrite any existing preferred vendors. Leaving the array empty will remove all vendors from the rental property.',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { propertyId, ...body } = args as any;
  return asTextContentResult(await client.rentals.vendors.create(propertyId, body));
};

export default { metadata, tool, handler };
