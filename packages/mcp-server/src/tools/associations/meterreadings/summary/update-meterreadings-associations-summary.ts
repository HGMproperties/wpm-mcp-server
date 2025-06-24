// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.meterreadings.summary',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/associations/{associationId}/meterreadings/summary',
  operationId: 'ExternalApiAssociationMeterReadingDetailsUpsert_UpsertAssociationMeterReadingDetailsAsync',
};

export const tool: Tool = {
  name: 'update_meterreadings_associations_summary',
  description:
    'This endpoint can be used to both create and update a meter reading detail for an association.\r\n            <ul><li>There can only be one meter reading detail for a given combination of MeterType and ReadingDate for an association</li><li>If you are updating an existing meter reading detail, use the query parameters to specify the existing meter reading detail to update.</li><li>If you are creating a new meter reading detail, do not pass any query parameters.</li><li>When adding a new item to the Details array, leave out the `Id` field.</li><li>When updating an existing item in the Details array, the `Id` field of the existing item must be included.</li></ul>\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      associationId: {
        type: 'integer',
      },
      Details: {
        type: 'array',
        description: 'Collection of detailed meter readings. At least one item is required.',
        items: {
          type: 'object',
          properties: {
            PriorValue: {
              type: 'integer',
              description: 'Previous meter reading value.',
            },
            UnitId: {
              type: 'integer',
              description: 'Unique identifier of the unit associated with the meter reading.',
            },
            Value: {
              type: 'integer',
              description: 'Current meter reading value.',
            },
            Id: {
              type: 'integer',
              description: 'Unique identifier of the detail being updated.',
            },
          },
          required: ['PriorValue', 'UnitId', 'Value'],
        },
      },
      MeterType: {
        type: 'string',
        description: 'Type of meter being read.',
        enum: ['Electric', 'Gas', 'Oil', 'Water', 'Sewer'],
      },
      ReadingDate: {
        type: 'string',
        description: 'Date the meter reading occurred on. Date must be formatted as YYYY-MM-DD.',
        format: 'date',
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
  return asTextContentResult(await client.associations.meterreadings.summary.update(associationId, body));
};

export default { metadata, tool, handler };
