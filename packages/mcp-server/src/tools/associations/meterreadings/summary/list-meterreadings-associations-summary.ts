// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.meterreadings.summary',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/associations/{associationId}/meterreadings/summary',
  operationId: 'ExternalApiAssociationMeterReadingDetails_GetAssociationMeterReadingDetailsAsync',
};

export const tool: Tool = {
  name: 'list_meterreadings_associations_summary',
  description:
    'Retrieves all meter reading details for an association.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      associationId: {
        type: 'integer',
      },
      metertype: {
        type: 'string',
        description: 'Filters results to the specified meter type.',
        enum: ['Electric', 'Gas', 'Oil', 'Water', 'Sewer'],
      },
      readingdate: {
        type: 'string',
        description:
          'Filters results to any meter readings whose entry date is equal to the specified value. The value must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { associationId, ...body } = args as any;
  return asTextContentResult(await client.associations.meterreadings.summary.list(associationId, body));
};

export default { metadata, tool, handler };
