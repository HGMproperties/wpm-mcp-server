// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'workorders',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/workorders/{workOrderId}',
  operationId: 'ExternalApiWorkOrders_UpdateWorkOrder',
};

export const tool: Tool = {
  name: 'update_workorders',
  description:
    'Updates a work order.\r\n            \r\n\r\n<strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition. \r\nThe recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you\'re about to update and then use this response to fill any of the fields that are not being updated.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      workOrderId: {
        type: 'integer',
      },
      EntryAllowed: {
        type: 'string',
        description: 'Indicates whether entry has been allowed to the unit.',
        enum: ['Unknown', 'Yes', 'No'],
      },
      VendorId: {
        type: 'integer',
        description: 'Vendor unique identifier.',
      },
      ChargeableTo: {
        type: 'string',
        description:
          'A description of the entity that will be charged for the work. The value cannot exceed 100 characters.',
      },
      EntryContactId: {
        type: 'integer',
        description:
          'Contact user unique identifier. The user type must be one of the following: `RentalTenant`, `AssociationOwner`, `Staff`, `RentalOwner`.',
      },
      EntryContactIds: {
        type: 'array',
        description:
          'Collection of entry contact user unique identifiers for the work order. The user type of each user in the list must be one of the following: `RentalTenant`, `AssociationOwner`, `Staff`, `RentalOwner`.',
        items: {
          type: 'integer',
        },
      },
      EntryNotes: {
        type: 'string',
        description: 'Notes specific to entering the unit. The value cannot exceed 65,535 characters.',
      },
      InvoiceNumber: {
        type: 'string',
        description:
          'The invoice or reference number that the vendor assigned to the invoice. The value cannot exceed 50 characters.',
      },
      LineItems: {
        type: 'array',
        description:
          'Work order line items. Note that all existing work order line items will be removed and replaced with this list of line items.',
        items: {
          $ref: '#/$defs/work_order_line_item_save',
        },
      },
      VendorNotes: {
        type: 'string',
        description: 'Notes specific to the vendor. The value cannot exceed 65,535 characters.',
      },
      WorkDetails: {
        type: 'string',
        description: 'Description of the work order. The value cannot exceed 65,535 characters.',
      },
    },
    $defs: {
      work_order_line_item_save: {
        type: 'object',
        properties: {
          Quantity: {
            type: 'number',
            description: 'Line item quantity.',
          },
          UnitPrice: {
            type: 'number',
            description: 'Line item unit price.',
          },
          GlAccountId: {
            type: 'integer',
            description: 'General ledger account unique identifier.',
          },
          Memo: {
            type: 'string',
            description: 'Line item memo.',
          },
        },
        required: ['Quantity', 'UnitPrice'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { workOrderId, ...body } = args as any;
  return asTextContentResult(await client.workorders.update(workOrderId, body));
};

export default { metadata, tool, handler };
