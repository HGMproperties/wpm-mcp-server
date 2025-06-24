// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'communications.phonelogs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/communications/phonelogs',
  operationId: 'ExternalApiPhoneLogs_GetPhoneLogs',
};

export const tool: Tool = {
  name: 'list_communications_phonelogs',
  description:
    'Retrieves all phone logs.\r\n\r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      fromdate: {
        type: 'string',
        description:
          'Filters results to any phone log whose call date is greater than or equal to the specified value.',
        format: 'date',
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      loggedbystaffuserids: {
        type: 'array',
        description: 'Filters results to any phone log that was logged by staff user(s).',
        items: {
          type: 'integer',
        },
      },
      offset: {
        type: 'integer',
        description:
          '`offset` indicates the position of the first record to return. The `offset` is zero-based and the default is 0.',
      },
      orderby: {
        type: 'string',
        description:
          '`orderby` indicates the field(s) and direction to sort the results in the response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request Options</a> for more information.',
      },
      participantentityid: {
        type: 'integer',
        description:
          'Filters results to any phone logs that match the participant identifier. Note, if a value is provided in this field the `ParticipantEntityType` must also be provided.',
      },
      participantentitytype: {
        type: 'string',
        description:
          'Filters results to any phone log with the specified participant type. This field is required if a value is provided for the `ParticipantEntityId` field.',
        enum: ['Vendor', 'RentalOwner', 'RentalTenant', 'AssociationOwner'],
      },
      subject: {
        type: 'string',
        description: 'Filters results to any phone log whose subject *contains* the specified value.',
      },
      todate: {
        type: 'string',
        description:
          'Filters results to any phone log whose call date is less than or equal to the specified value.',
        format: 'date',
      },
      unitagreementid: {
        type: 'integer',
        description:
          'Filters results to any phone log with the specified unit agreement identifier. Note, if a value is provided in this field the `UnitAgreementType` must also be provided.',
      },
      unitagreementtype: {
        type: 'string',
        description:
          'Filters results to any phone log with the specified unit agreement type. This field is required if a value is provided for the `UnitAgreementId` field.',
        enum: ['Lease', 'OwnershipAccount'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.communications.phonelogs.list(body));
};

export default { metadata, tool, handler };
