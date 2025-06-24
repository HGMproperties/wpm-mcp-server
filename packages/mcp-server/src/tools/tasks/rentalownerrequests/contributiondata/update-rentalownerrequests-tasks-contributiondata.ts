// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'tasks.rentalownerrequests.contributiondata',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/tasks/rentalownerrequests/{rentalOwnerRequestTaskId}/contributiondata',
  operationId: 'ExternalApiRentalOwnerRequestTasks_UpdateRentalOwnerRequestTaskContributionData',
};

export const tool: Tool = {
  name: 'update_rentalownerrequests_tasks_contributiondata',
  description:
    'Updates the contribution details for a rental owner contribution request.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      rentalOwnerRequestTaskId: {
        type: 'integer',
      },
      ContributionRequests: {
        type: 'array',
        description: 'The contribution request details associated with the task.',
        items: {
          type: 'object',
          description: 'Rental owner contribution detail',
          properties: {
            Amount: {
              type: 'number',
              description: 'Amount being requested for the contribution.',
            },
            Description: {
              type: 'string',
              description: 'Description of the contribution.',
            },
          },
          required: [],
        },
      },
      ReminderSettings: {
        type: 'object',
        description: 'Rental owner contribution reminder settings',
        properties: {
          IsActive: {
            type: 'boolean',
            description: 'Flag for enabling the reminders.',
          },
          RecurrenceDays: {
            type: 'integer',
            description: 'Interval of days for the reminder to be sent on.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { rentalOwnerRequestTaskId, ...body } = args as any;
  return asTextContentResult(
    await client.tasks.rentalownerrequests.contributiondata.update(rentalOwnerRequestTaskId, body),
  );
};

export default { metadata, tool, handler };
