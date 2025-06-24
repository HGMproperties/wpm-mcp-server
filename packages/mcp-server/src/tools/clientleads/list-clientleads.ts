// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'clientleads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/clientleads',
  operationId: 'ExternalApiClientLeads_GetClientLeads',
};

export const tool: Tool = {
  name: 'list_clientleads',
  description:
    'Retrieves all client leads\r\n            \r\n\r\n\r\n            Note: When using the `orderby` query string parameter, the only supported options are DateReceived.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Administration > All Property Management</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      datereceivedfrom: {
        type: 'string',
        description:
          'Filters results to any client leads that were received on or after the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date-time',
      },
      datereceivedto: {
        type: 'string',
        description:
          'Filters results to any client leads that were received on or before the specified date. The value must be formatted as YYYY-MM-DD.',
        format: 'date-time',
      },
      includecreditedleads: {
        type: 'boolean',
        description:
          'This will also return client leads that were credited. By default credited leads will not be returned.',
      },
      leadstatuses: {
        type: 'array',
        description: 'Filters results to any client leads that are in one of the given statuses.',
        items: {
          type: 'string',
          enum: ['Unknown', 'New', 'Contacting', 'Qualifying', 'Closing', 'ClosedWon', 'ClosedLost'],
        },
      },
      limit: {
        type: 'integer',
        description:
          '`limit` indicates the maximum number of results to be returned in the response. `limit` can range between 1 and 1000 and the default is 50.',
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
      propertytypes: {
        type: 'array',
        description:
          'Filters results to any client leads that have a property in one of the given property types.',
        items: {
          type: 'string',
          enum: [
            'SingleHomeUpToThreeHundredThousand',
            'SingleHomeThreeHundredToFiveHundredThousand',
            'SingleHomeFiveHundredThousandToOneMillion',
            'SingleHomeOverOneMillion',
            'MultiFamilyTwoToFourUnits',
            'MultiFamilyFiveToNineteenUnits',
            'MultiFamilyTwentyToFortyNineUnits',
            'MultiFamilyOverOneHundredUnits',
            'OfficeLessThanTenThousandSqFt',
            'OfficeTenThousandToOneHundredThousandSqFt',
            'OfficeOverOneHundredThousandSqFt',
            'RetailLessThanTenThousandSqFt',
            'RetailTenThousandToOneHundredThousandSqFt',
            'RetailOverOneHundredThousandSqFt',
            'LightManufacturingUpToOneHundredThousandSqFt',
            'LightManufacturingOverOneHundredThousandSqFt',
            'WarehouseUpToOneHundredThousandSqFt',
            'WarehouseOverOneHundredThousandSqFt',
            'VacationOneToTwoUnits',
            'VacationOverThreeUnits',
            'ParkingGarage',
            'OtherAssociation',
            'BiotechMissionCritical',
            'HOATwoToFortyNineUnits',
            'HOAFiftyToNinetyNineUnits',
            'HOAOverOneHundredUnits',
            'COATwoToFortyNineUnits',
            'COAFiftyToNinetyNineUnits',
            'COAOverOneHundredUnits',
            'MobileHomeCommunity',
          ],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.clientleads.list(body));
};

export default { metadata, tool, handler };
