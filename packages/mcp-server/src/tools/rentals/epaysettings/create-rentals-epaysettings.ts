// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'rentals.epaysettings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/rentals/{propertyId}/epaysettings',
  operationId: 'ExternalApiRentalEpaySettings_UpdateEPaySettingsForRental',
};

export const tool: Tool = {
  name: 'create_rentals_epaysettings',
  description:
    'Updates ePay settings for a rental property.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'integer',
      },
      CreditCardPayments: {
        type: 'object',
        description: 'Credit card payment settings.',
        properties: {
          PaymentsEnabled: {
            type: 'boolean',
            description:
              'Indicates whether credit card payments are enabled in the Buildium Resident Center for all residents of this property. Note, to enable credit card payments the operating bank account for the property must have credit card payments provisioned.',
          },
        },
        required: ['PaymentsEnabled'],
      },
      EFTPayments: {
        type: 'object',
        description: 'Electronic payment settings.',
        properties: {
          PaymentsEnabled: {
            type: 'boolean',
            description:
              'Indicates whether EFT payments are enabled in the Buildium Resident Center for all residents of this property. Note, to enable EFT payments the operating bank account for the property must have EFT payments provisioned.',
          },
        },
        required: ['PaymentsEnabled'],
      },
      OfflinePayments: {
        type: 'object',
        description: 'Offline payment settings.',
        properties: {
          DisplayCompanyAddress: {
            type: 'boolean',
            description:
              'Indicates whether to display the company address along with the offline payment information. If `DisplayInfoInResidentCenter` is false the company address will not be displayed.',
          },
          DisplayInfoInResidentCenter: {
            type: 'boolean',
            description:
              'Indicates whether the offline payment information is displayed in the Buildium Resident Center.',
          },
          PaymentInstructions: {
            type: 'string',
            description:
              'Directions for how to make offline payments. The value cannot exceed 65,535 characters. If `DisplayInfoInResidentCenter` is false the payment instructions will not be displayed.',
          },
        },
        required: ['DisplayCompanyAddress', 'DisplayInfoInResidentCenter'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { propertyId, ...body } = args as any;
  return asTextContentResult(await client.rentals.epaysettings.create(propertyId, body));
};

export default { metadata, tool, handler };
