// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'bankaccounts.checks.files',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/bankaccounts/{bankAccountId}/checks/{checkId}/files/{fileId}',
  operationId: 'ExternalApiBankAccountCheckFiles_DeleteBankAccountCheckFile',
};

export const tool: Tool = {
  name: 'delete_checks_bankaccounts_files',
  description:
    'Deletes a file for a check\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccounts</span> - `View` `Edit` `Delete`\r\n            \r\n<span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>',
  inputSchema: {
    type: 'object',
    properties: {
      bankAccountId: {
        type: 'integer',
      },
      checkId: {
        type: 'integer',
      },
      fileId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  const response = await client.bankaccounts.checks.files.delete(fileId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
