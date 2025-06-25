// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.groups.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/applicants/groups/{applicantGroupId}/notes',
  operationId: 'ExternalApiApplicantGroupNotes_CreateApplicationGroupNote',
};

export const tool: Tool = {
  name: 'create_groups_applicants_notes',
  description:
    'Creates an applicant group note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantGroupId: {
        type: 'integer',
      },
      Note: {
        type: 'string',
        description: 'Note contents. The value cannot exceed 65535 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applicantGroupId, ...body } = args as any;
  return asTextContentResult(await client.applicants.groups.notes.create(applicantGroupId, body));
};

export default { metadata, tool, handler };
