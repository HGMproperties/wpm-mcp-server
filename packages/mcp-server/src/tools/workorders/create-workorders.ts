// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'workorders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workorders',
  operationId: 'ExternalApiWorkOrders_CreateWorkOrder',
};

export const tool: Tool = {
  name: 'create_workorders',
  description:
    'Creates a work order.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
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
          'Collection of entry contact user unique identifiers for the work order. The user type of each user in the collection must be one of the following: `RentalTenant`, `AssociationOwner`, `Staff`, `RentalOwner`.',
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
          'The invoice or reference number that the vendor assigned to the work order. The value cannot exceed 50 characters.',
      },
      LineItems: {
        type: 'array',
        description: 'Work order line items.',
        items: {
          $ref: '#/$defs/work_order_line_item_save',
        },
      },
      Task: {
        type: 'object',
        description: 'Task information to create and associate with the work order.',
        properties: {
          AssignedToUserId: {
            type: 'integer',
            description:
              'The unique identifier of the staff user assigned to the request. The user must be a `Staff` user type.',
          },
          Priority: {
            type: 'string',
            description: 'Task priority.',
            enum: ['Low', 'Normal', 'High'],
          },
          Status: {
            type: 'string',
            description: 'Task status.',
            enum: ['New', 'InProgress', 'Completed', 'Deferred', 'Closed'],
          },
          Title: {
            type: 'string',
            description: 'Task title. The title can not exceed 127 characters.',
          },
          DueDate: {
            type: 'string',
            description: 'Task due date. The date must be formatted as YYYY-MM-DD.',
            format: 'date',
          },
          PropertyId: {
            type: 'integer',
            description:
              'The unique identifier of property associated with the request. The assigned property must be active.',
          },
          UnitId: {
            type: 'integer',
            description:
              'The unique identifier of the unit associated with the request. The unit must be associated with the `PropertyId` specified.',
          },
        },
        required: ['AssignedToUserId', 'Priority', 'Status', 'Title'],
      },
      TaskId: {
        type: 'integer',
        description: 'Task unique identifier to associate with the work order.',
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
  const body = args as any;
  return asTextContentResult(await client.workorders.create(body));
};

export default { metadata, tool, handler };
