// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.meterreadings.summary',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/associations/{associationId}/meterreadings/summary',
  operationId: 'ExternalApiAssociationDeleteMeterReadingDetails_DeleteMeterReadingDetailsForAssociation',
};

export const tool: Tool = {
  name: 'delete_meterreadings_associations_summary',
  description:
    'Delete meter reading details for an association for a given date.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit` `Delete`',
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
  const response = await client.associations.meterreadings.summary.delete(associationId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
