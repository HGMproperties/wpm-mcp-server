// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/leases/{leaseId}/credits',
  operationId: 'ExternalApiLeaseLedgerCreditsWrite_CreateLeaseCredit',
};

export const tool: Tool = {
  name: 'create_credit_leases',
  description:
    'Creates a lease ledger credit.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'integer',
      },
      CreditType: {
        type: 'string',
        description:
          'Indicates how the credit should be applied.\r\n<ul><li>WaiveUnpaid - This credit type allows for reversing one or more charges without losing record of what has changed.</li><li>Exchange - This credit type allows for one of the following: 1) Reimburse a resident for a out-of-pocket expense, 2) Compensate for a service, 3) Write-off a resident balance considered uncollectable.</li><li>PreviouslyDeposited - This credit type allows for issuing a credit against payments that have already been deposited.</li></ul>',
        enum: ['WaiveUnpaid', 'Exchange', 'PreviouslyDeposited'],
      },
      Date: {
        type: 'string',
        description: 'Date of the transaction. The date must be formatted as YYYY-MM-DD.',
        format: 'date',
      },
      Lines: {
        type: 'array',
        description: 'A collection of line items included in the credit. At least one line item is required.',
        items: {
          type: 'object',
          description: 'Credit line item.',
          properties: {
            Amount: {
              type: 'number',
              description: 'Line item amount.',
            },
            GlAccountId: {
              type: 'integer',
              description:
                'The general ledger account identifier under which the line item amount will be recorded. The account must be a liability or income type.',
            },
          },
          required: ['Amount', 'GlAccountId'],
        },
      },
      Memo: {
        type: 'string',
        description: 'Description of the transaction. The value cannot exceed 65 characters.',
      },
      OffsettingGLAccountId: {
        type: 'integer',
        description:
          'Sets the offsetting general ledger account identifier for the credit.\r\n\r\nThis value must be provided when the `CreditType` field is set to `Exchange` or `PreviouslyDeposited`.\r\n\r\nWhen the `CreditType` is `Exchange` this must be an *expense* general ledger account type.\r\n\r\nWhen the `CreditType` is `PreviouslyDeposited` this must be an *equity* general ledger account type.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return asTextContentResult(await client.leases.createCredit(leaseId, body));
};

export default { metadata, tool, handler };
