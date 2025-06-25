// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.applications',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/applicants/{applicantId}/applications/{applicationId}',
  operationId: 'ExternalApiApplicantApplications_UpdateApplication',
};

export const tool: Tool = {
  name: 'update_applicants_applications',
  description:
    'Updates a rental application.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantId: {
        type: 'integer',
      },
      applicationId: {
        type: 'integer',
      },
      ApplicationStatus: {
        type: 'string',
        description: 'Sets the status of the application.',
        enum: ['Undecided', 'Approved', 'Rejected', 'Cancelled', 'Deferred'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applicationId, ...body } = args as any;
  return asTextContentResult(await client.applicants.applications.update(applicationId, body));
};

export default { metadata, tool, handler };
