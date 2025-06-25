// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/applicants/{applicantId}',
  operationId: 'ExternalApiApplicants_GetApplicantById',
};

export const tool: Tool = {
  name: 'retrieve_applicants',
  description:
    'Retrieves an applicant.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applicantId, ...body } = args as any;
  return asTextContentResult(await client.applicants.retrieve(applicantId));
};

export default { metadata, tool, handler };
