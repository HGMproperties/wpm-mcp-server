// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases.renewals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/leases/renewals',
  operationId: 'ExternalApiLeaseRenewalsRead_GetAllLeaseRenewalsForAllProperties',
};

export const tool: Tool = {
  name: 'list_upcoming_leases_renewals',
  description:
    'Retrieves all upcoming lease renewals across all rental properties. \r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      esignaturestatuses: {
        type: 'array',
        description:
          'Filters result to any lease renewal with an esignature status that matches the given statuses.',
        items: {
          type: 'string',
          enum: [
            'Unknown',
            'NotSent',
            'ProcessingRequest',
            'AwaitingSignatures',
            'FullySigned',
            'PendingCancellation',
            'Cancelled',
            'Failed',
            'SentUsingAdobe',
          ],
        },
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
      propertyids: {
        type: 'array',
        description:
          'Filters results to only include leases whose unit belongs to the specified set of property ids.',
        items: {
          type: 'integer',
        },
      },
      rentalownerids: {
        type: 'array',
        description:
          'Filters results to any lease whose unit belongs to a property with rental owner in the specified set of rental owner ids.',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.leases.renewals.listUpcoming(body));
};

export default { metadata, tool, handler };
