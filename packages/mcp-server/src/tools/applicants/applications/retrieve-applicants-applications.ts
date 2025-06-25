// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/applicants/{applicantId}/applications/{applicationId}',
  operationId: 'ExternalApiApplicantApplications_GetApplicationForApplicantById',
};

export const tool: Tool = {
  name: 'retrieve_applicants_applications',
  description:
    'Retrieves an application.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantId: {
        type: 'integer',
      },
      applicationId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applicationId, ...body } = args as any;
  return asTextContentResult(await client.applicants.applications.retrieve(applicationId, body));
};

export default { metadata, tool, handler };
