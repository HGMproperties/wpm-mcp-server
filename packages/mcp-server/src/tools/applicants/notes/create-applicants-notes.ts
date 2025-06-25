// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.notes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/applicants/{applicantId}/notes',
  operationId: 'ExternalApiApplicantNotes_CreateApplicantNote',
};

export const tool: Tool = {
  name: 'create_applicants_notes',
  description:
    'Creates an applicant note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> -  `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantId: {
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
  const { applicantId, ...body } = args as any;
  return asTextContentResult(await client.applicants.notes.create(applicantId, body));
};

export default { metadata, tool, handler };
