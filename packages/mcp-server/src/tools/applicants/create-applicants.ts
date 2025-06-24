// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/applicants',
  operationId: 'ExternalApiApplicants_CreateApplicant',
};

export const tool: Tool = {
  name: 'create_applicants',
  description:
    'Creates an applicant.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      FirstName: {
        type: 'string',
        description: 'The first name of the applicant. The value can not exceed 127 characters.',
      },
      LastName: {
        type: 'string',
        description: 'The last name of the applicant. The value can not exceed 127 characters.',
      },
      SendRentalApplicationEmail: {
        type: 'boolean',
        description:
          'Indicates whether to send the applicant an email with a link to the online rental application form.',
      },
      Email: {
        type: 'string',
        description: 'The email address of the applicant.',
      },
      PhoneNumbers: {
        $ref: '#/$defs/phone_numbers',
      },
      UnitId: {
        type: 'integer',
        description: 'The rental property unit unique identifier to associate with the applicant.',
      },
    },
    $defs: {
      phone_numbers: {
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
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.applicants.create(body));
};

export default { metadata, tool, handler };
