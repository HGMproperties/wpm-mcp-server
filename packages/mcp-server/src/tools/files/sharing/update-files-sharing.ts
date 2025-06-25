// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'wpm-mcp-server-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import WpmMcpServer from 'wpm-mcp-server';

export const metadata: Metadata = {
  resource: 'files.sharing',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/files/{fileId}/sharing',
  operationId: 'ExternalApiFileSharing_UpdateFileSharingSetting',
};

export const tool: Tool = {
  name: 'update_files_sharing',
  description:
    "Updates a file's share settings. Note, can only update a file's share settings based on the file's entity type (ie: If the file belongs to a rental property, you can only update the rental file sharing settings). The response payload contains file share setting values for all file entity types, but the relevant setting values correlate to the file's entity type.\r\n            \r\n\r\n<h4>Required permission(s):</h4><span class=\"permissionBlock\">Documents > Files</span> - `View` `Edit`",
  inputSchema: {
    type: 'object',
    properties: {
      fileId: {
        type: 'integer',
      },
      Account: {
        type: 'object',
        description: 'The file share settings for the account file entity type.',
        properties: {
          AllRentalOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with all rental owners via the portal.',
          },
          AllResidents: {
            type: 'boolean',
            description: 'Indicates whether file is shared with all residents via the Resident Center.',
          },
          PropertyIds: {
            type: 'array',
            description:
              'A list of rental property unique identifiers whose residents should receive the file.',
            items: {
              type: 'integer',
            },
          },
          RentalOwnerIds: {
            type: 'array',
            description: 'A list of rental owner unique identifiers that should receive the file.',
            items: {
              type: 'integer',
            },
          },
          WebsiteVisitors: {
            type: 'boolean',
            description: "Indicates whether file is shared with anyone visiting the company's public site.",
          },
        },
        required: [],
      },
      Association: {
        type: 'object',
        description: 'The file share settings for the association file entity type.',
        properties: {
          AssociationOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with association owners.',
          },
          BoardMembers: {
            type: 'boolean',
            description:
              'Indicates whether file is shared with board members of the association. Note: file is automatically shared when file is shared with association owners.',
          },
        },
        required: [],
      },
      AssociationOwner: {
        type: 'object',
        description: 'The file share settings for the association owner file entity type.',
        properties: {
          AssociationOwner: {
            type: 'boolean',
            description: 'Indicates whether file is shared with the association owner.',
          },
        },
        required: [],
      },
      AssociationUnit: {
        type: 'object',
        description: 'The file share settings for the association unit file entity type.',
        properties: {
          AssociationOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with association owners.',
          },
          BoardMembers: {
            type: 'boolean',
            description: 'Indicates whether file is shared with board members of the association.',
          },
        },
        required: [],
      },
      Committee: {
        type: 'object',
        description: 'The file share settings for the committee file entity type.',
        properties: {
          AssociationOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with association owners.',
          },
          BoardMembers: {
            type: 'boolean',
            description: 'Indicates whether file is shared with board members of the association.',
          },
          Committee: {
            type: 'boolean',
            description: 'Indicates whether file is shared with association committee.',
          },
        },
        required: [],
      },
      Lease: {
        type: 'object',
        description: 'The file share settings for the lease file entity type.',
        properties: {
          RentalOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with rental owners of the property.',
          },
          Tenants: {
            type: 'boolean',
            description: 'Indicates whether file is shared with tenants on the lease.',
          },
        },
        required: [],
      },
      OwnershipAccount: {
        type: 'object',
        description: 'The file share settings for the ownership account file entity type.',
        properties: {
          AssociationOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with association owners.',
          },
          BoardMembers: {
            type: 'boolean',
            description: 'Indicates whether file is shared with board members of the association.',
          },
        },
        required: [],
      },
      Rental: {
        type: 'object',
        description: 'The file share settings for the rental file entity type.',
        properties: {
          RentalOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with rental owners of the property.',
          },
          Tenants: {
            type: 'boolean',
            description: 'Indicates whether file is shared with tenants of the property.',
          },
        },
        required: [],
      },
      RentalOwner: {
        type: 'object',
        description: 'The file share settings for the rental owner file entity type.',
        properties: {
          RentalOwner: {
            type: 'boolean',
            description: 'Indicates whether file is shared with the rental owner of the property.',
          },
        },
        required: [],
      },
      RentalUnit: {
        type: 'object',
        description: 'The file share settings for the rental unit file entity type.',
        properties: {
          RentalOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with rental owners of the property.',
          },
          Tenants: {
            type: 'boolean',
            description: 'Indicates whether file is shared with tenants of the property.',
          },
        },
        required: [],
      },
      Tenant: {
        type: 'object',
        description: 'The file share settings for the tenant file entity type.',
        properties: {
          RentalOwners: {
            type: 'boolean',
            description: 'Indicates whether file is shared with rental owners of the property.',
          },
          Tenants: {
            type: 'boolean',
            description: 'Indicates whether file is shared with tenants on the lease.',
          },
        },
        required: [],
      },
      Vendor: {
        type: 'object',
        description: 'The file share settings for the vendor file entity type.',
        properties: {
          Vendor: {
            type: 'boolean',
            description: 'Indicates whether file is shared with the vendor.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: WpmMcpServer, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  return asTextContentResult(await client.files.sharing.update(fileId, body));
};

export default { metadata, tool, handler };
