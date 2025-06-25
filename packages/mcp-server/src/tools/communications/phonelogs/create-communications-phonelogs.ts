// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.phonelogs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/communications/phonelogs',
  operationId: 'ExternalApiPhoneLogs_CreatePhoneLog',
};

export const tool: Tool = {
  name: 'create_communications_phonelogs',
  description:
    'Creates a phone log.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
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
      Participant: {
        type: 'object',
        description: 'The participant in the phone call.',
        properties: {
          EntityId: {
            type: 'integer',
            description: 'The unique identifier for the participant entity.',
          },
          EntityType: {
            type: 'string',
            description: 'The type of participant entity.',
            enum: ['Vendor', 'RentalOwner', 'RentalTenant', 'AssociationOwner'],
          },
          UnitAgreement: {
            type: 'object',
            description: 'The unit agreement associated with the participant.',
            properties: {
              Id: {
                type: 'integer',
                description:
                  'The unit agreement unique identifier. Note, if a value is provided in this field then `Type` must also be provided.',
              },
              Type: {
                type: 'string',
                description:
                  'The type of unit agreement. Note, this field is required if a value is provided for the `Id` field.',
                enum: ['NotSet', 'Lease', 'OwnershipAccount'],
              },
            },
            required: [],
          },
        },
        required: ['EntityId', 'EntityType'],
      },
      Subject: {
        type: 'string',
        description: 'Subject of the phone call. This value is restricted to a maximum of 255 characters.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.communications.phonelogs.create(body));
};

export default { metadata, tool, handler };
