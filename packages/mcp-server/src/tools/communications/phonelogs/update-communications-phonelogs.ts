// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.phonelogs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/communications/phonelogs/{phoneLogId}',
  operationId: 'ExternalApiPhoneLogs_UpdatePhoneLog',
};

export const tool: Tool = {
  name: 'update_communications_phonelogs',
  description:
    'Update a phone log\r\n\r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      phoneLogId: {
        type: 'integer',
      },
      CallDateTime: {
        type: 'string',
        description:
          'The date and time the call took place. Time of the phone call must be UTC. Example format: "2021-01-26T13:59:15Z"',
        format: 'date-time',
      },
      Description: {
        type: 'string',
        description:
          'Description of the phone call. This value is restricted to a maximum of 65,535 characters.',
      },
      Subject: {
        type: 'string',
        description: 'Subject of the phone call. This value is restricted to a maximum of 255 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { phoneLogId, ...body } = args as any;
  return asTextContentResult(await client.communications.phonelogs.update(phoneLogId, body));
};

export default { metadata, tool, handler };
