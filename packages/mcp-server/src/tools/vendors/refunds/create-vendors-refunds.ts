// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'vendors.refunds',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/vendors/{vendorId}/refunds',
  operationId: 'ExternalApiVendorRefundsWrite_CreateVendorRefund',
};

export const tool: Tool = {
  name: 'create_vendors_refunds',
  description:
    'Creates a refund.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`\r\n            <span class="permissionBlock">Accounting > Bank Accounts</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      vendorId: {
        type: 'integer',
      },
      EntryDate: {
        type: 'string',
        description: 'Date the vendor refund was made.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of line items associated with the vendor refund.',
        items: {
          type: 'object',
          properties: {
            AccountingEntity: {
              $ref: '#/$defs/accounting_entity_save',
            },
            Amount: {
              type: 'number',
              description: 'Amount of the vendor refund line item.',
            },
            GLAccountId: {
              type: 'integer',
              description:
                'Unique identifier of the general ledger account associated with the vendor refund.',
            },
            Memo: {
              type: 'string',
              description: 'Memo for the vendor refund line item. Memo cannot exceed 215 characters.',
            },
          },
          required: ['AccountingEntity', 'Amount', 'GLAccountId'],
        },
      },
      PaymentMethod: {
        type: 'string',
        description: 'The payment method used for the refund.',
        enum: [
          'Check',
          'Cash',
          'MoneyOrder',
          'CashierCheck',
          'DirectDeposit',
          'CreditCard',
          'ElectronicPayment',
        ],
      },
      BankAccountId: {
        type: 'integer',
        description: 'Unique identifier of the bank account that the refund was deposited into.',
      },
      Memo: {
        type: 'string',
        description:
          'Memo associated with the vendor refund, if applicable. Memo cannot exceed 65 characters',
      },
      ReferenceNumber: {
        type: 'string',
        description:
          'The invoice or reference number that the vendor assigned to the refund. Reference number cannot exceed 45 characters.',
      },
    },
    $defs: {
      accounting_entity_save: {
        type: 'object',
        description: 'Object to represent an Accounting Entity',
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
        required: ['AccountingEntityType', 'Id'],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { vendorId, ...body } = args as any;
  return asTextContentResult(await client.vendors.refunds.create(vendorId, body));
};

export default { metadata, tool, handler };
