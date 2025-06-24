// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.groups',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/applicants/groups/{applicantGroupId}',
  operationId: 'ExternalApiApplicantGroups_UpdateApplicantGroup',
};

export const tool: Tool = {
  name: 'update_applicants_groups',
  description:
    'Updates an applicant group.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantGroupId: {
        type: 'integer',
      },
      ApplicantGroupStatus: {
        type: 'string',
        description: 'Sets the status of the applicant group.',
        enum: ['Undecided', 'Approved', 'Rejected', 'Cancelled', 'Deferred'],
      },
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
  const { applicantGroupId, ...body } = args as any;
  return asTextContentResult(await client.applicants.groups.update(applicantGroupId, body));
};

export default { metadata, tool, handler };
