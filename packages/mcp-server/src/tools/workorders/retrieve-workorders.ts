// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'workorders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/workorders/{workOrderId}',
  operationId: 'ExternalApiWorkOrders_GetWorkOrderById',
};

export const tool: Tool = {
  name: 'retrieve_workorders',
  description:
    'Retrieves a specific work order.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      workOrderId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { workOrderId, ...body } = args as any;
  return asTextContentResult(await client.workorders.retrieve(workOrderId));
};

export default { metadata, tool, handler };
