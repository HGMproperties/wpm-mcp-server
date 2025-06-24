// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.listing',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/units/{unitId}/listing',
  operationId: 'ExternalApiListings_UpsertListingsAsync',
};

export const tool: Tool = {
  name: 'create_units_rentals_listing',
  description:
    'This endpoint can be used to both *create* and *update* a listing. If no listing exists for the unit one will be created, otherwise the existing listing will be updated. A unit can only ever have one active listing. \r\n \r\n\r\n\r\nUpon creation the listing will post immediately to your Buildium public website, and will post to the selected syndicated sites within 24-48 hours. Updates to the listing will appear immediately in your Buildium public website and propagated to syndicated sites within 24-48 hours. \r\n\r\n\r\n\r\nNote, the listing will automatically pull in the information, features, and media that exists for the property and unit details. \r\n\r\n\r\n<span class="permissionBlock">Rentals > Listings</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
        type: 'integer',
      },
      AvailableDate: {
        type: 'string',
        description: 'The date the listing is available.',
        format: 'date',
      },
      IsManagedExternally: {
        type: 'boolean',
      },
      Rent: {
        type: 'number',
        description: 'Rent for the listing.',
      },
      ContactId: {
        type: 'integer',
        description: 'The contact Id for the listing.',
      },
      Deposit: {
        type: 'number',
        description: 'Deposit for the listing.',
      },
      LeaseTerms: {
        type: 'string',
        description: 'The lease term for the listing.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.rentals.units.listing.create(unitId, body));
};

export default { metadata, tool, handler };
