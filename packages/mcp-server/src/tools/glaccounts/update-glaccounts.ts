// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'glaccounts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/glaccounts/{glAccountId}',
  operationId: 'ExternalApiGeneralLedgerAccounts_UpdateGLAccount',
};

export const tool: Tool = {
  name: 'update_glaccounts',
  description:
    'Updates a general ledger account.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View` `Edit`',
  inputSchema: {
    type: 'object',
    properties: {
      glAccountId: {
        type: 'integer',
      },
      Name: {
        type: 'string',
        description:
          'Name of the general ledger account. The name cannot exceed 50 characters and must be unique across all general ledger accounts.',
      },
      SubType: {
        type: 'string',
        description: 'Describes the subtype of the general ledger account.',
        enum: [
          'CurrentAsset',
          'FixedAsset',
          'CurrentLiability',
          'LongTermLiability',
          'Equity',
          'Income',
          'NonOperatingIncome',
          'OperatingExpenses',
          'NonOperatingExpenses',
        ],
      },
      AccountNumber: {
        type: 'string',
        description:
          'General ledger account number. The account number cannot exceed 12 characters and must be unique across all general ledger accounts.',
      },
      CashFlowClassification: {
        type: 'string',
        description:
          'Describes the cash flow classification for the general ledger account. Must be null if `IsCashAsset` field is set to true.',
        enum: ['OperatingActivities', 'InvestingActivities', 'FinancingActivities'],
      },
      Description: {
        type: 'string',
        description:
          'Description of the general ledger account. The description cannot exceed 250 characters.',
      },
      IsCashAsset: {
        type: 'boolean',
        description:
          'Indicates if an account is a Cash Asset. Can only have a value if SubType is `CurrentAsset`',
      },
      IsContraAccount: {
        type: 'boolean',
        description:
          'Indicates whether the account is a contra account. Must be null if `IsCashAsset` field is set to true.',
      },
      ParentGLAccountId: {
        type: 'integer',
        description:
          'Unique identifier of the parent general ledger account. Indicates if this is a sub general ledger account.',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { glAccountId, ...body } = args as any;
  return asTextContentResult(await client.glaccounts.update(glAccountId, body));
};

export default { metadata, tool, handler };
