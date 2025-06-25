// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/applicants/groups',
  operationId: 'ExternalApiApplicantGroups_CreateApplicantGroup',
};

export const tool: Tool = {
  name: 'create_applicants_groups',
  description:
    'Creates an applicant group.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      ApplicantIds: {
        type: 'array',
        description:
          'The applicant unique identifiers to include in the applicant group. Note, that applicants can only be included in one applicant group.',
        items: {
          type: 'integer',
        },
      },
      UnitId: {
        type: 'integer',
        description: 'Rental property unit unique identifier to associate with the applicant group.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.applicants.groups.create(body));
};

export default { metadata, tool, handler };
