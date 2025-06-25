// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'applicants.groups.notes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/applicants/groups/{applicantGroupId}/notes/{noteId}',
  operationId: 'ExternalApiApplicantGroupNotes_GetApplicantGroupNoteByNoteId',
};

export const tool: Tool = {
  name: 'retrieve_groups_applicants_notes',
  description:
    'Retrieves an applicant group note.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`',
  inputSchema: {
    type: 'object',
    properties: {
      applicantGroupId: {
        type: 'integer',
      },
      noteId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { noteId, ...body } = args as any;
  return asTextContentResult(await client.applicants.groups.notes.retrieve(noteId, body));
};

export default { metadata, tool, handler };
