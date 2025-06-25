// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.amenities',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/{propertyId}/amenities',
  operationId: 'ExternalApiRentalFeatures_UpdateRentalFeatures',
};

export const tool: Tool = {
  name: 'create_rentals_amenities',
  description:
    'Updates the amenities for a rental property.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'integer',
      },
      Features: {
        type: 'array',
        description:
          'A list of overall property amenities. Any previously saved values that are not submitted in the update request will be deleted.',
        items: {
          type: 'string',
          enum: [
            'LaundryRoom',
            'WheelchairAccess',
            'DoorAttendant',
            'Elevator',
            'Parking',
            'StorageUnits',
            'Pool',
            'FitnessCenter',
            'TennisCourt',
            'ClubHouse',
            'Power',
            'ParkingCommercial',
            'SprinklerSystem',
            'DockHighDoorsOrLoadingAvailable',
            'Availability24Hours',
            'AccentWalls',
            'BasketballCourt',
            'Bilingual',
            'BoatDocks',
            'BusinessCenter',
            'CarWashArea',
            'ChildCare',
            'ClubDiscount',
            'ConferenceRoom',
            'Concierge',
            'FreeWeights',
            'FurnishedAvailable',
            'GamingStations',
            'Garage',
            'Gate',
            'GroceryService',
            'GroupExercise',
            'GuestRoom',
            'Housekeeping',
            'HouseSitting',
            'JoggingWalkingTrails',
            'LakeFront',
            'LakeAccess',
            'Library',
            'MealService',
            'MediaRoom',
            'MultiUseRoom',
            'NightPatrol',
            'OnSiteMaintenance',
            'OnSiteManagement',
            'PackageReceiving',
            'PerDiemAccepted',
            'PlayGround',
            'Racquetball',
            'RecRoom',
            'Recycling',
            'Sauna',
            'ShortTermLease',
            'SmokeFree',
            'Spa',
            'Sundeck',
            'Transportation',
            'TVLounge',
            'ValetTrash',
            'Vintage',
            'VolleyballCourt',
            'WirelessInternet',
            'HighSpeedInternet',
          ],
        },
      },
      IncludedInRent: {
        type: 'array',
        description:
          'A list of amenities that are included in rent. Any previously saved values that are not submitted in the update request will be deleted.',
        items: {
          type: 'string',
          enum: [
            'Gas',
            'Electric',
            'Trash',
            'Water',
            'HotWater',
            'Telephone',
            'Heat',
            'Cable',
            'AirCon',
            'Satellite',
            'Sewer',
            'BroadbandInternet',
          ],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { propertyId, ...body } = args as any;
  return asTextContentResult(await client.rentals.amenities.create(propertyId, body));
};

export default { metadata, tool, handler };
