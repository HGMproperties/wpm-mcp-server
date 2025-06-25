// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.rentalownerrequests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tasks/rentalownerrequests/{rentalOwnerRequestTaskId}',
  operationId: 'ExternalApiRentalOwnerRequestTasks_GetRentalOwnerRequestTaskById',
};

export const tool: Tool = {
  name: 'retrieve_tasks_rentalownerrequests',
  description:
    'Retrieves a specific rental owner request.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      rentalOwnerRequestTaskId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { rentalOwnerRequestTaskId, ...body } = args as any;
  return asTextContentResult(await client.tasks.rentalownerrequests.retrieve(rentalOwnerRequestTaskId));
};

export default { metadata, tool, handler };
