// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.listingcontacts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/units/listingcontacts/{listingContactId}',
  operationId: 'ExternalApiListingContacts_UpdateListingContact',
};

export const tool: Tool = {
  name: 'update_units_rentals_listingcontacts',
  description:
    'Update a listing contact. Note, at least one contact field (phone number, email or website) is required for the listing contact.\r\n\r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      listingContactId: {
        type: 'integer',
      },
      Name: {
        type: 'string',
        description: 'Name of the listing contact. This name must be unique across all listing contacts.',
      },
      Email: {
        type: 'string',
        description: 'Email address for the listing contact.',
      },
      PhoneNumber: {
        type: 'string',
        description:
          'Phone number of the listing contact. The value must be between 10 and 20 characters, ideally formatted as (123) 123-1234.',
      },
      Website: {
        type: 'string',
        description:
          'Website associated with the listing contact. The value must be a valid URL including the HTTP protocol. For example http://www.example.com.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { listingContactId, ...body } = args as any;
  return asTextContentResult(await client.rentals.units.listingcontacts.update(listingContactId, body));
};

export default { metadata, tool, handler };
