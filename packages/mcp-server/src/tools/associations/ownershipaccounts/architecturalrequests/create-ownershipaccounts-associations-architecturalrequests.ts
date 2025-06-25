// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'associations.ownershipaccounts.architecturalrequests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/associations/ownershipaccounts/architecturalrequests',
  operationId: 'ExternalApiAssociationArchitecturalRequests_CreateArchitecturalRequestAsync',
};

export const tool: Tool = {
  name: 'create_ownershipaccounts_associations_architecturalrequests',
  description:
    'Creates an architectural request\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Associations > Architectural requests</span> - `View` `Edit`\r\n\r\n<span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`\r\n\r\n',
  inputSchema: {
    type: 'object',
    properties: {
      AssociationId: {
        type: 'integer',
        description: 'The ID of the association  to tie the architectural request to.',
      },
      Name: {
        type: 'string',
        description: 'The name of the architectural request. Must be 30 characters or less.',
      },
      OwnershipAccountId: {
        type: 'integer',
        description: 'The ID of the ownership account to tie the architectural request to.',
      },
      SubmittedDateTime: {
        type: 'string',
        description: 'The date and time the architectural request was submitted. Must not be in the future.',
        format: 'date-time',
      },
      Decision: {
        type: 'string',
        description:
          'The decision of the architectural request. If no value is submitted the Decision will be set to "Pending".',
        enum: ['Pending', 'Approved', 'Denied'],
      },
      Status: {
        type: 'string',
        description:
          'The status of the architectural request. If no value is submitted the Status will be set to "New".',
        enum: ['New', 'InProgress', 'Completed'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.associations.ownershipaccounts.architecturalrequests.create(body));
};

export default { metadata, tool, handler };
