// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.units.amenities',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/units/{unitId}/amenities',
  operationId: 'ExternalApiRentalUnitAmenities_UpdateRentalUnitFeatures',
};

export const tool: Tool = {
  name: 'create_units_rentals_amenities',
  description:
    'Updates the amenities for a rental unit.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
        type: 'integer',
      },
      Features: {
        type: 'array',
        description:
          'A list of unit amenities. Any existing amenities associated with the unit that are not submitted in the request will be removed from the unit.',
        items: {
          type: 'string',
          enum: [
            'CableReady',
            'Microwave',
            'HardwoodFloors',
            'HighSpeedInternet',
            'AirConditioning',
            'Refrigerator',
            'Dishwasher',
            'WalkinClosets',
            'BalconyOrDeckOrPatio',
            'GarageParking',
            'Carport',
            'FencedYard',
            'LaundryRoomOrHookups',
            'Fireplace',
            'CableReadyCommercial',
            'HighSpeedInternetCommercial',
            'AirConditioningCommercial',
            'Heating',
            'OvenOrRange',
            'HeatElectric',
            'HeatGas',
            'HeatOil',
            'PetsAllowed',
            'Balcony',
            'PrivateBalcony',
            'PrivatePatio',
            'Dryer',
            'Heat',
            'WD_Hookup',
            'Washer',
            'AdditionalStorage',
            'Alarm',
            'Carpet',
            'CeilingFan',
            'ControlledAccess',
            'Courtyard',
            'Disposal',
            'DoubleSinkVanity',
            'FramedMirrors',
            'Furnished',
            'Handrails',
            'IndividualClimateControl',
            'IslandKitchen',
            'LinenCloset',
            'Pantry',
            'Satellite',
            'Skylight',
            'TileFlooring',
            'VaultedCeiling',
            'View',
            'VinylFlooring',
            'WheelChair',
            'WindowCoverings',
            'DogFriendly',
            'CatFriendly',
          ],
        },
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return asTextContentResult(await client.rentals.units.amenities.create(unitId, body));
};

export default { metadata, tool, handler };
