// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/applicants/groups',
  operationId: 'ExternalApiApplicantGroups_GetApplicantGroups',
};

export const tool: Tool = {
  name: 'list_applicants_groups',
  description:
    'Retrieves all applicant groups.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      applicationgroupstatuses: {
        type: 'array',
        description:
          'Filters results by the applicant group status. If no status is specified, applicant groups in any status will be returned.',
        items: {
          type: 'string',
          enum: [
            'Undecided',
            'Approved',
            'Rejected',
            'AddedToLease',
            'Cancelled',
            'Deferred',
            'New',
            'Draft',
            'AddedToDraftLease',
          ],
        },
      },
      entityid: {
        type: 'integer',
        description:
          'Specifies the type of entity that `EntityId` refers to. This field is required if `EntityId` is specified.',
      },
      entitytype: {
        type: 'string',
        description:
          'Filters results to any applicant groups associated with the specified entity identifier. This filter is used in conjunction with the `EntityType` field which must be set to the type of entity this identifier references.',
        enum: ['Rental', 'RentalOwner'],
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
      },
      name: {
        type: 'string',
        description:
          'Filters results to applicant groups that includes applicants whose name *contains* the specified value.',
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
      unitids: {
        type: 'array',
        description:
          'Filters results to applicant groups associated to any of the specified rental property unit identifiers.',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.applicants.groups.list(body));
};

export default { metadata, tool, handler };
