// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/applicants/groups/{applicantGroupId}',
  operationId: 'ExternalApiApplicantGroups_GetApplicantGroupById',
};

export const tool: Tool = {
  name: 'retrieve_applicants_groups',
  description:
    'Retrieves an applicant group.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantGroupId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applicantGroupId, ...body } = args as any;
  return asTextContentResult(await client.applicants.groups.retrieve(applicantGroupId));
};

export default { metadata, tool, handler };
