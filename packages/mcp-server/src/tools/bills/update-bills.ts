// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bills',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/bills/{billId}',
  operationId: 'ExternalApiBills_PatchBill',
};

export const tool: Tool = {
  name: 'update_bills',
  description:
    'Updates a bill.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      billId: {
        type: 'integer',
      },
      Date: {
        type: 'string',
        description:
          'The date that an invoice was received. This date typically corresponds with a Bill Received Date, Invoice Date, or Invoice Received Date from an invoice. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      DueDate: {
        type: 'string',
        description:
          'The date that payment for a bill is due to the vendor. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of line items associated with the bill.',
        items: {
          type: 'object',
          properties: {
            AccountingEntity: {
              type: 'object',
              description: 'The accounting entity associated with the bill line item.',
              properties: {
                AccountingEntityType: {
                  type: 'string',
                  description: 'The type of the accounting entity',
                  enum: ['Association', 'Rental', 'Company'],
                },
                Id: {
                  type: 'integer',
                  description: 'The unique identifier of the accounting entity',
                },
                UnitId: {
                  type: 'integer',
                  description: 'The unit unique identifier for the accounting entity.',
                },
              },
              required: [],
            },
            Amount: {
              type: 'number',
              description: 'Line item amount.',
            },
            GlAccountId: {
              type: 'integer',
              description:
                'The general ledger account identifier under which the line item amount will be recorded. The following general ledger accounts are not valid: Accounts Payable, Accounts Receivable, Undeposited Funds or any general leger account referencing a bank account.',
            },
            Id: {
              type: 'integer',
              description: 'Bill line item unique identifier.',
            },
            Markup: {
              type: 'object',
              description: 'Bill markup.',
              properties: {
                Amount: {
                  type: 'number',
                  description:
                    'The mark up amount. The value should be relative to the markup `Type`. If the mark up `Type` is `Percent` the value cannot exceed 100.',
                },
                Type: {
                  type: 'string',
                  description: 'The markup type.',
                  enum: ['Percent', 'Amount'],
                },
              },
              required: [],
            },
            Memo: {
              type: 'string',
              description: 'Memo for the line item. The value cannot exceed 240 characters.',
            },
          },
          required: [],
        },
      },
      Memo: {
        type: 'string',
        description: 'A description of what the invoice was for. The value cannot exceed 245 characters.',
      },
      ReferenceNumber: {
        type: 'string',
        description:
          'The reference or invoice number that the vendor assigned to the invoice. The value cannot exceed 40 characters.',
      },
      VendorId: {
        type: 'integer',
        description: 'The unique identifier of the vendor or supplier who sent you an invoice.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { billId, ...body } = args as any;
  return asTextContentResult(await client.bills.update(billId, body));
};

export default { metadata, tool, handler };
