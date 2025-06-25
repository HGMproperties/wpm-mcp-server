// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/applicants/{applicantId}',
  operationId: 'ExternalApiApplicants_UpdateApplicant',
};

export const tool: Tool = {
  name: 'update_applicants',
  description:
    'Updates an applicant.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantId: {
        type: 'integer',
      },
      FirstName: {
        type: 'string',
        description: 'The first name of the applicant. The value can not exceed 127 characters.',
      },
      LastName: {
        type: 'string',
        description: 'The last name of the applicant. The value can not exceed 127 characters.',
      },
      Email: {
        type: 'string',
        description: 'The email address of the applicant.',
      },
      PhoneNumbers: {
        type: 'object',
        description: 'Phone numbers.',
        properties: {
          Fax: {
            type: 'string',
            description:
              'Fax number. If provided, must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
          Home: {
            type: 'string',
            description:
              'Home phone number. If provided, must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
          Mobile: {
            type: 'string',
            description:
              'Mobile phone number. If provided, must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
          Work: {
            type: 'string',
            description:
              'Work phone number. If provided, must be between 10 and 20 characters, ideally formatted as `(123) 123-1234`.',
          },
        },
        required: [],
      },
      UnitId: {
        type: 'integer',
        description: 'The rental property unit unique identifier to associate with the applicant.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { applicantId, ...body } = args as any;
  return asTextContentResult(await client.applicants.update(applicantId, body));
};

export default { metadata, tool, handler };
