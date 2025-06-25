# Wpm Mcp Server TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export WPM_BUILDIUM_CLIENT_ID="My Client ID"
export WPM_BUILDIUM_CLIENT_SECRET="My Client Secret"
npx -y wpm-mcp-server-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "wpm_mcp_server_api": {
      "command": "npx",
      "args": ["-y", "wpm-mcp-server-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "WPM_BUILDIUM_CLIENT_ID": "My Client ID",
        "WPM_BUILDIUM_CLIENT_SECRET": "My Client Secret"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "wpm-mcp-server-mcp/server";

// import a specific tool
import createAutoAllocatedPaymentApplications from "wpm-mcp-server-mcp/tools/applications/create-auto-allocated-payment-applications";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAutoAllocatedPaymentApplications, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `applications`:

- `create_auto_allocated_payment_applications` (`write`): Creates a payment on the application ledger. Note that the recorded payment will be automatically allocated to the general ledger accounts based on the payment allocation settings. These settings can be found under the Settings > Application Settings > Residents page in your account. If you'd like to specify the GL accounts the payment should apply to, please use the <a href="#operation/ExternalApiApplicationLedgerPayments_CreateApplicationLedgerPayment">Create a payment</a> endpoint.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `create_payment_reversal_applications` (`write`): Reverses an application ledger payment. Note, this action can only be taken on a payment that has been deposited.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
              
  <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `list_outstanding_balances_applications` (`read`): Retrieves a list of applications that have outstanding balances. Applications with a zero or credit balance will not be returned in the results.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Outstanding Balances</span> - `View`

### Resource `applications.transactions`:

- `retrieve_applications_transactions` (`read`): Retrieves a specific application transaction.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`

- `list_applications_transactions` (`read`): Retrieves all the transactions for a specific application.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `applications.charges`:

- `create_applications_charges` (`write`): Creates a charge on a specific application ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `retrieve_applications_charges` (`read`): Retrieves a specific application charge.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`

- `update_applications_charges` (`write`): Updates a charge on a specific application ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `list_applications_charges` (`read`): Retrieves all the charges for a specific application.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `applications.payments`:

- `create_applications_payments` (`write`): Creates an application ledger payment.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `update_applications_payments` (`write`): Updates an application ledger payment. Each line item must have a unique general ledger account identifier. PaymentMethod, Date, Memo, and the total Amount cannot be changed for payments with a PaymentMethod of `BuildiumEFT`, `BuildiumCC` or `RetailCash`.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

### Resource `applications.refunds`:

- `create_applications_refunds` (`write`): Creates a refund for a specific application.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `retrieve_applications_refunds` (`read`): Retrieves a specific application refund.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `associations`:

- `create_associations` (`write`): Creates an association.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `retrieve_associations` (`read`): Retrieve a specific association.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `update_associations` (`write`): Updates an association.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.

  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `list_associations` (`read`): Retrieves a list of associations.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `inactivate_associations` (`write`): Inactivates an association along with associated units and ownership accounts.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `list_bank_lockbox_data_associations` (`read`): Retrieves all association bank lockbox data.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `reactivate_associations` (`write`): Reactivates an association along with associated units and ownership accounts.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

### Resource `associations.ownershipaccounts`:

- `create_associations_ownershipaccounts` (`write`): Creates an ownership account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`

  <span class="permissionBlock">Associations > Owners</span> - `View` `Edit`

- `retrieve_associations_ownershipaccounts` (`read`): Retrieves a specific ownership account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View`

- `update_associations_ownershipaccounts` (`write`): Updates an ownership account.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`

- `list_associations_ownershipaccounts` (`read`): Retrieves a list of ownership accounts.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View`

- `autoallocatedpayments_associations_ownershipaccounts` (`write`): Creates a payment on the ownership account ledger. Note that the recorded payment will be automatically allocated to the general ledger accounts based on the payment allocation settings. These settings can be found under the Settings > Application Settings > Residents page in your account. If you'd like to specify the general ledger accounts the payment should apply to, please use the <a href="#operation/ExternalApiOwnershipAccountLedgerPayments_CreateOwnershipAccountLedgerPayment">Create a payment</a> endpoint.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

- `credits_associations_ownershipaccounts` (`write`): Creates a ledger credit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

- `retrieve_outstandingbalances_associations_ownershipaccounts` (`read`): Retrieves a list of ownership account outstanding balances.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Outstanding Balances</span> - `View`

### Resource `associations.ownershipaccounts.transactions`:

- `retrieve_ownershipaccounts_associations_transactions` (`read`): Retrieves a specific ownership account ledger transaction.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`

- `list_ownershipaccounts_associations_transactions` (`read`): Retrieves all ledger transactions for a specific ownership account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`

### Resource `associations.ownershipaccounts.architecturalrequests`:

- `create_ownershipaccounts_associations_architecturalrequests` (`write`): Creates an architectural request

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

  <span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`

  <span class="permissionBlock">Associations > Architectural requests</span> - `View` `Edit`

  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `retrieve_ownershipaccounts_associations_architecturalrequests` (`read`): Retrieves a specific architectural request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
              
  <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
              
  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
              
  <span class="permissionBlock">Associations > Architectural requests</span> - `View`

- `list_ownershipaccounts_associations_architecturalrequests` (`read`): Retrieves all architectural requests.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
              
  <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
              
  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
              
  <span class="permissionBlock">Associations > Architectural requests</span> - `View`

### Resource `associations.ownershipaccounts.architecturalrequests.files`:

- `retrieve_architecturalrequests_ownershipaccounts_associations_files` (`read`): Retrieves an architectural request file.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
              
  <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
              
  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
              
  <span class="permissionBlock">Associations > Architectural requests</span> - `View`

- `list_architecturalrequests_ownershipaccounts_associations_files` (`read`): Retrieves all files for an architectural request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
              
  <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
              
  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
              
  <span class="permissionBlock">Associations > Architectural requests</span> - `View`

- `downloadrequests_architecturalrequests_ownershipaccounts_associations_files` (`write`): Downloads a specific file associated to the architectural request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
              
  <span class="permissionBlock">Associations > Ownership accounts</span> - `View`
              
  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
              
  <span class="permissionBlock">Associations > Architectural requests</span> - `View`

- `uploadrequests_architecturalrequests_ownershipaccounts_associations_files` (`write`): Uploads a file and associates it to the specified architectural request record.

  Uploading a file requires making two API requests. Each step is outlined below.

  <strong>Step 1 - Save file metadata</strong>

  The first step in the file upload process is to submit the file metadata to `/v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId:int}/files/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.

  <strong>NOTE:</strong> The response data will expire after 5 minutes. The file metadata will not be saved in the Buildium system if step 2 of this process is not completed successfully.

  <strong>Step 2 - Upload the file binary</strong>

  Uploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:

  1. Form a POST request using the value of the `BucketUrl` property as the URL.

  2. Set the `Content-Type` header to `multipart/form-data`.

  3. Copy the fields from the `FormData` property to this request as form-data key/value pairs.

  <strong>NOTE:</strong> These values must added to the request form-data in the order they were received in the response.

  4. Lastly create a form-data key named `file` and set the value to the file binary.

  <strong>NOTE:</strong> This must be the last field in the form-data list.

  This image shows what the POST request should look like if you're using Postman:
  <img src="file-upload-example.png" />

  5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.

  <strong>NOTE:</strong> The file identifier is not generated in this response. To retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName` value received from the response of this endpoint into the `physicalfilenames` query parameter.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

  <span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`

  <span class="permissionBlock">Associations > Architectural requests</span> - `View` `Edit`

  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

### Resource `associations.ownershipaccounts.charges`:

- `create_ownershipaccounts_associations_charges` (`write`): Creates a ledger charge.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

  <span class="permissionBlock">Accounting > Bills</span> - `View` `Edit` In order to associate the charge to a bill using the BillId property, you must have this permission.

- `retrieve_ownershipaccounts_associations_charges` (`read`): Retrieves a specific ownership account ledger charge.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`

- `update_ownershipaccounts_associations_charges` (`write`): Updates a charge.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

- `list_ownershipaccounts_associations_charges` (`read`): Retrieves all ledger charges for a specific ownership account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`

### Resource `associations.ownershipaccounts.payments`:

- `create_ownershipaccounts_associations_payments` (`write`): Creates a ledger payment.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

- `update_ownershipaccounts_associations_payments` (`write`): Updates a ledger payment. Each line item must have a unique general ledger account identifier. PaymentMethod, Date, Memo, and the total Amount cannot be changed for payments with a PaymentMethod of `BuildiumEFT`, `BuildiumCC` or `RetailCash`.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

### Resource `associations.ownershipaccounts.refunds`:

- `create_ownershipaccounts_associations_refunds` (`write`): Creates a refund.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `retrieve_ownershipaccounts_associations_refunds` (`read`): Retrieves a refund.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`

### Resource `associations.ownershipaccounts.applieddeposits`:

- `create_ownershipaccounts_associations_applieddeposits` (`write`): Withholds an association owner deposit by reallocating the funds from a liability account to an income account to cover an expense(s).

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
              <span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`

- `update_ownershipaccounts_associations_applieddeposits` (`write`): Updates an ownership account deposit withholding.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`
              <span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`

### Resource `associations.ownershipaccounts.recurringtransactions`:

- `list_ownershipaccounts_associations_recurringtransactions` (`read`): Retrieves all recurring transactions for an ownership account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`

### Resource `associations.ownershipaccounts.notes`:

- `create_ownershipaccounts_associations_notes` (`write`): Creates a new ownership account note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`

- `retrieve_ownershipaccounts_associations_notes` (`read`): Retrieves an ownership account note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > OwnershipAccounts</span> - `View`

- `update_ownershipaccounts_associations_notes` (`write`): Updates an association ownership account note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership Accounts</span> - `View` `Edit`

- `list_ownershipaccounts_associations_notes` (`read`): Retrieves notes for an ownership account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > OwnershipAccounts</span> - `View`

### Resource `associations.ownershipaccounts.partialpaymentsettings`:

- `list_ownershipaccounts_associations_partialpaymentsettings` (`read`): Retrieves partial payment settings for an ownership account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > OwnershipAccounts</span> - `View`

- `patch_all_ownershipaccounts_associations_partialpaymentsettings` (`write`): Updates partial payment settings for an ownership account.

  <h4>Required Permission(s):</h4><span class="permissionBlock">Associations > Ownership Accounts</span> - `View` `Edit`
              <span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`

### Resource `associations.ownershipaccounts.recurringcharges`:

- `create_ownershipaccounts_associations_recurringcharges` (`write`): Creates a recurring charge transaction that will post automatically on the specified ownership account ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

- `retrieve_ownershipaccounts_associations_recurringcharges` (`read`): Retrieves a recurring charge.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`

### Resource `associations.ownershipaccounts.recurringcredits`:

- `create_ownershipaccounts_associations_recurringcredits` (`write`): Creates a recurring credit transaction that will post automatically on the specified ownership account ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

- `retrieve_ownershipaccounts_associations_recurringcredits` (`read`): Retrieves a recurring credit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`

### Resource `associations.ownershipaccounts.recurringpayments`:

- `create_ownershipaccounts_associations_recurringpayments` (`write`): Creates a recurring payment that will post automatically on the specified ownership account ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit`

- `retrieve_ownershipaccounts_associations_recurringpayments` (`read`): Retrieves a recurring payment.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View`

### Resource `associations.units`:

- `create_associations_units` (`write`): Creates an association unit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `retrieve_associations_units` (`read`): Retrieve a specific association unit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `update_associations_units` (`write`): Updates an association unit.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `list_associations_units` (`read`): Retrieves a list of association units.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

### Resource `associations.units.notes`:

- `create_units_associations_notes` (`write`): Creates a new association unit note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `retrieve_units_associations_notes` (`read`): Retrieves an association unit note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `update_units_associations_notes` (`write`): Updates an association unit note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `list_units_associations_notes` (`read`): Retrieves all association unit notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

### Resource `associations.owners`:

- `create_associations_owners` (`write`): Creates an association owner.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

  <span class="permissionBlock">Associations > Ownership accounts</span> - `View` `Edit`

- `retrieve_associations_owners` (`read`): Retrieve a specific association owner.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

- `update_associations_owners` (`write`): Updates an existing association owner.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `list_associations_owners` (`read`): Retrieves a list of association owners.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

### Resource `associations.owners.notes`:

- `create_owners_associations_notes` (`write`): Creates an association owner note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `retrieve_owners_associations_notes` (`read`): Retrieves an association owner note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

- `update_owners_associations_notes` (`write`): Updates an association owner note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `list_owners_associations_notes` (`read`): Retrieves all association owner notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

### Resource `associations.owners.units`:

- `retrieve_owners_associations_units` (`read`): Retrieves the owner occupancy status for an association unit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` 
  <span class="permissionBlock">Associations > Ownership Accounts</span> - `View`

- `update_owners_associations_units` (`write`): Updates whether a unit is occupied by the association owner.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit` 
  <span class="permissionBlock">Associations > Ownership Accounts</span> - `View`

- `list_owners_associations_units` (`read`): Retrieves the occupancy status for all of the units owned by the association owner.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` 
  <span class="permissionBlock">Associations > Ownership Accounts</span> - `View`

### Resource `associations.tenants`:

- `create_associations_tenants` (`write`): Creates an association tenant.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `retrieve_associations_tenants` (`read`): Retrieves a specific association tenant.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

- `update_associations_tenants` (`write`): Updates an association tenant.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `list_associations_tenants` (`read`): Retrieves a list of association tenants.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

### Resource `associations.tenants.notes`:

- `create_tenants_associations_notes` (`write`): Creates an association tenant note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `retrieve_tenants_associations_notes` (`read`): Retrieves an association tenant note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

- `update_tenants_associations_notes` (`write`): Updates an association tenant note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `list_tenants_associations_notes` (`read`): Retrieves all association tenant notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

### Resource `associations.boardmembers`:

- `create_associations_boardmembers` (`write`): Creates a board member for a given association.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `retrieve_associations_boardmembers` (`read`): Retrieves an association board member.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

- `update_associations_boardmembers` (`write`): Updates a board member for a given association.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit`

- `list_associations_boardmembers` (`read`): Retrieves all association board members.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View`

- `delete_associations_boardmembers` (`write`): Deletes a board member. Note, this is a hard delete from the database and data can not be restored.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Association owners and tenants</span> - `View` `Edit` `Delete`

### Resource `associations.epaysettings`:

- `retrieve_associations_epaysettings` (`read`): Retrieves ePay settings for an association.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `update_associations_epaysettings` (`write`): Updates ePay settings for an association.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

### Resource `associations.meterreadings`:

- `list_associations_meterreadings` (`read`): Retrieves all meter readings for an association.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

### Resource `associations.meterreadings.summary`:

- `update_meterreadings_associations_summary` (`write`): This endpoint can be used to both create and update a meter reading detail for an association.
  <ul><li>There can only be one meter reading detail for a given combination of MeterType and ReadingDate for an association</li><li>If you are updating an existing meter reading detail, use the query parameters to specify the existing meter reading detail to update.</li><li>If you are creating a new meter reading detail, do not pass any query parameters.</li><li>When adding a new item to the Details array, leave out the `Id` field.</li><li>When updating an existing item in the Details array, the `Id` field of the existing item must be included.</li></ul>

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `list_meterreadings_associations_summary` (`read`): Retrieves all meter reading details for an association.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `delete_meterreadings_associations_summary` (`write`): Delete meter reading details for an association for a given date.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Ownership account transactions</span> - `View` `Edit` `Delete`

### Resource `associations.notes`:

- `create_associations_notes` (`write`): Creates a note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `retrieve_associations_notes` (`read`): Retrieves a note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `update_associations_notes` (`write`): Updates a note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `list_associations_notes` (`read`): Retrieves all notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

### Resource `associations.vendors`:

- `update_associations_vendors` (`write`): Updates preferred vendors.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.

  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`
              
  <span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`

- `list_associations_vendors` (`read`): Retrieves all preferred vendors.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`
              
  <span class="permissionBlock">Maintenance > Vendors</span> - `View`

### Resource `associations.appliances`:

- `create_associations_appliances` (`write`): Creates an association appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `retrieve_associations_appliances` (`read`): Retrieves an association appliance by id.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `update_associations_appliances` (`write`): Updates an association appliance.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `list_associations_appliances` (`read`): Retrieves all association appliances.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `delete_associations_appliances` (`write`): Deletes an associations appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

### Resource `associations.appliances.servicehistory`:

- `create_appliances_associations_servicehistory` (`write`): Creates a service history for an appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `retrieve_appliances_associations_servicehistory` (`read`): Retrieves a specific service history record for a given appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

- `list_appliances_associations_servicehistory` (`read`): Retrieves all of the service history records for an appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Associations > Associations and units</span> - `View`

### Resource `files`:

- `retrieve_files` (`read`): Retrieves the file metadata for a specific file. Note this endpoint will only return file metadata. To download files make requests to the <a href="#operation/FileDownloadExternalApi_GetFileDownloadUrlAsync">Download File endpoint.</a>

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`

- `update_files` (`write`): Updates a metadata of the file.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`

- `list_files` (`read`): Retrieves a list of files that exist within the customer account. Note this endpoint will only return file metadata. To download files make requests to the <a href="#operation/FileDownloadExternalApi_GetFileDownloadUrlAsync">Download File</a> endpoint.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`

- `create_upload_request_files` (`write`): Uploading a file requires making two API requests. Each step is outlined below.

  <strong>Step 1 - Save file metadata</strong>

  The first step in the file upload process is to submit the file metadata to `/v1/files/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.

  <strong>NOTE:</strong> The response data will expire after 5 minutes. The file metadata will not be saved in the Buildium system if step 2 of this process is not completed successfully.

  <strong>Step 2 - Upload the file binary</strong>

  Uploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:

  1. Form a POST request using the value of the `BucketUrl` property as the URL.

  2. Set the `Content-Type` header to `multipart/form-data`.

  3. Copy the fields from the `FormData` property to this request as form-data key/value pairs.

  <strong>NOTE:</strong> These values must added to the request form-data in the order they were received in the response.

  4. Lastly create a form-data key named `file` and set the value to the file binary.

  <strong>NOTE:</strong> This must be the last field in the form-data list.

  This image shows what the POST request should look like if you're using Postman:
  <img src="file-upload-example.png" />

  5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.

  <strong>NOTE:</strong> The file identifier is not generated in this response. To retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName` value received from the response of this endpoint into the `physicalfilenames` query parameter.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`

- `request_download_files` (`write`): Downloading a file requires making two API requests. The first request to `/v1/files/{fileId}/downloadrequest` will return a secure URL that can be used to download the file contents. Note the download URL is transient and will expire after 5 minutes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`

### Resource `files.sharing`:

- `retrieve_files_sharing` (`read`): Retrieves a file's share settings. Note, that the response JSON schema includes share setting fields for all file entity types, however only fields that pertain to the queried file entity type will be populated. For example, if a file of entity type Rental is retrieved only the fields in the Rental section of the response will have values.
  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`
- `update_files_sharing` (`write`): Updates a file's share settings. Note, can only update a file's share settings based on the file's entity type (ie: If the file belongs to a rental property, you can only update the rental file sharing settings). The response payload contains file share setting values for all file entity types, but the relevant setting values correlate to the file's entity type.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`

### Resource `files.categories`:

- `create_files_categories` (`write`): Creates a file category.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`

- `retrieve_files_categories` (`read`): Retrieves a specific file category.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`

- `update_files_categories` (`write`): Updates a file category. Note that file categories where `IsEditable` is `false` can not be updated.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View` `Edit`

- `list_files_categories` (`read`): Retrieves a list of file categories.

  <h4>Required permission(s):</h4><span class="permissionBlock">Documents > Files</span> - `View`

### Resource `leases`:

- `create_leases` (`write`): Creates a signed lease.

  <span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`

  <span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`

  <span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

  <h4>Optional Permissions:</h4>
  <span class="permissionBlock">Rentals > Applicants</span> - `View` In order to add tenants to the lease using the ApplicantIds property, you must have this permission.

- `retrieve_leases` (`read`): Retrieves a specific lease.

  <span class="permissionBlock">Rentals > Leases</span> - `View`

- `update_leases` (`write`): Update a signed lease.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`

- `list_leases` (`read`): Retrieves a list of leases.

  <span class="permissionBlock">Rentals > Leases</span> - `View`

- `create_autoallocated_payment_leases` (`write`): Creates a payment on the lease ledger. Note that the recorded payment will be automatically allocated to the general ledger accounts based on the payment allocation settings. These settings can be found under the Settings > Application Settings > Residents page in your account. If you'd like to specify the GL accounts the payment should apply to, please use the <a href="#operation/ExternalApiLeaseLedgerPaymentsWrite_CreatePayment">Create a payment</a> endpoint.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `create_credit_leases` (`write`): Creates a lease ledger credit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `create_payment_reversal_leases` (`write`): Reverses a lease ledger payment. Note, this action can only be taken on a payment that has been deposited.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`
              
  <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `list_outstanding_balances_leases` (`read`): Retrieves a list of leases that have outstanding balances. Leases with a zero or credit balance will not be returned in the results.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Outstanding Balances</span> - `View`

- `list_renewal_history_leases` (`read`): Retrieves all lease renewal history

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

### Resource `leases.transactions`:

- `retrieve_leases_transactions` (`read`): Retrieves a specific lease transaction.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`

- `list_leases_transactions` (`read`): Retrieves all the transactions for a specific lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `leases.charges`:

- `create_leases_charges` (`write`): Creates a charge transaction on a specific lease ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

  <span class="permissionBlock">Accounting > Bills</span> - `View` `Edit` In order to associate the charge to a bill using the BillId property, you must have this permission.

- `retrieve_leases_charges` (`read`): Retrieves a specific lease charge.

  <h4>Required permissions(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

- `update_leases_charges` (`write`): Updates a charge.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `list_leases_charges` (`read`): Retrieves all the charges for a specific lease.

  <h4>Required permissions(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `leases.moveouts`:

- `create_leases_moveouts` (`write`): Creates move out data for a single tenant on a given lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
              
  <span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`

- `retrieve_leases_moveouts` (`read`): Retrieves move out data for a single tenant on a given lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
              
  <span class="permissionBlock">Rentals > Tenants</span> - `View`

- `list_leases_moveouts` (`read`): Retrieves a list of move out dates for a given lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`
              
  <span class="permissionBlock">Rentals > Tenants</span> - `View`

- `delete_leases_moveouts` (`write`): Deletes move out data for a tenant on a given lease.

  <h4>Required Permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
              
  <span class="permissionBlock">Rentals > Tenants</span> - `View`

### Resource `leases.payments`:

- `create_leases_payments` (`write`): Creates a lease ledger payment.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `update_leases_payments` (`write`): Updates a ledger payment. Each line item must have a unique general ledger account identifier. PaymentMethod, Date, Memo, and the total Amount cannot be changed for payments with a PaymentMethod of `BuildiumEFT`, `BuildiumCC` or `RetailCash`.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

### Resource `leases.notes`:

- `create_leases_notes` (`write`): Creates a lease note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`

- `retrieve_leases_notes` (`read`): Retrieves a lease note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

- `update_leases_notes` (`write`): Updates a lease note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`

- `list_leases_notes` (`read`): Retrieves all lease notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

### Resource `leases.refunds`:

- `create_leases_refunds` (`write`): Creates a refund.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `retrieve_leases_refunds` (`read`): Retrieves a refund.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`

### Resource `leases.renewals`:

- `create_leases_renewals` (`write`): Creates a lease renewal.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`

- `retrieve_leases_renewals` (`read`): Retrieves a specific renewal for a given lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

- `list_leases_renewals` (`read`): Retrieves all renewals for a specific a lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

- `list_upcoming_leases_renewals` (`read`): Retrieves all upcoming lease renewals across all rental properties.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

### Resource `leases.applieddeposits`:

- `create_leases_applieddeposits` (`write`): Withholds a resident deposit by reallocating the funds from a liability account to an income account to cover an expense(s).

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Ledger</span> - `View` `Edit`
             
  <span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`

- `update_leases_applieddeposits` (`write`): Updates a resident deposit withholding.

  <h4>Required permission(s):</h4><h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Ledger</span> - `View` `Edit`
              
  <span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`

### Resource `leases.recurringtransactions`:

- `list_leases_recurringtransactions` (`read`): Retrieves all recurring transactions for a given lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

- `list_all_leases_recurringtransactions` (`read`): Retrieves all recurring transactions for all leases.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `leases.epaysettings`:

- `retrieve_leases_epaysettings` (`read`): Retrieves ePay settings for a lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

- `update_leases_epaysettings` (`write`): Updates ePay settings for a lease

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`

### Resource `leases.partialpaymentsettings`:

- `retrieve_leases_partialpaymentsettings` (`read`): Retrieves partial payment settings for a lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

- `update_leases_partialpaymentsettings` (`write`): Updates partial payment settings for a lease.

  <h4>Required Permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`
              <span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`

### Resource `leases.recurringcharges`:

- `create_leases_recurringcharges` (`write`): Creates a recurring charge transaction that will post automatically on the specified lease ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `retrieve_leases_recurringcharges` (`read`): Retrieves a recurring charge.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `leases.recurringcredits`:

- `create_leases_recurringcredits` (`write`): Creates a recurring credit transaction on the specified lease ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View` `Edit`

- `retrieve_leases_recurringcredits` (`read`): Retrieves a recurring credit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `leases.recurringpayments`:

- `create_leases_recurringpayments` (`write`): Creates a recurring payment that will post automatically on the specified lease ledger.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit`

- `retrieve_leases_recurringpayments` (`read`): Retrieves a recurring payment.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View`

### Resource `leases.rent`:

- `create_leases_rent` (`write`): Creates a rent schedule.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit`

- `retrieve_leases_rent` (`read`): The rent schedule provides details (dollar amount, day of the month, etc) of the recurring charges that are applied to the lease ledger each rent cycle. A lease may have more than one rent schedule associated with it if the rent terms change within the duration of the lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

- `update_leases_rent` (`write`): Updates a rent schedule.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit`

- `get_specific_rent_leases_rent` (`read`): The rent schedule provides details (dollar amount, day of the month, etc) of the recurring charges that are applied to the lease ledger each rent cycle. A lease may have more than one rent schedule associated with it if the rent terms change within the duration of the lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

- `retrieve_all_leases_rent` (`read`): The rent schedule provides details (dollar amount, day of the month, etc) of the recurring charges that are applied to the lease ledger each rent cycle. A lease may have more than one rent schedule associated with it if the rent terms change within the duration of the lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease transactions</span> - `View`

### Resource `leases.rentersinsurance`:

- `retrieve_leases_rentersinsurance` (`read`): Retrieves a renters insurance policy.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

- `retrieve_all_leases_rentersinsurance` (`read`): Retrieves all renters insurance policies for a lease.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Leases</span> - `View`

### Resource `leases.tenants`:

- `create_leases_tenants` (`write`): Creates a rental tenant.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`

  <span class="permissionBlock">Rentals > Leases</span> - `View` `Edit`

- `retrieve_leases_tenants` (`read`): Retrieve a specific tenant.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`

- `update_leases_tenants` (`write`): Updates a rental tenant.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`

- `retrieve_all_leases_tenants` (`read`): Retrieves a list of tenants.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`

### Resource `leases.tenants.notes`:

- `create_tenants_leases_notes` (`write`): Creates a tenant note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`

- `retrieve_tenants_leases_notes` (`read`): Retrieves a tenant note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`

- `update_tenants_leases_notes` (`write`): Updates a tenant note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`

- `retrieve_all_tenants_leases_notes` (`read`): Retrieves all tenant notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`

### Resource `rentals`:

- `create_rentals` (`write`): Creates a new rental property.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `retrieve_rentals` (`read`): Retrieve a specific rental property.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_rentals` (`write`): Updates a rental property.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_rentals` (`read`): Retrieves a list of rental properties.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `inactivate_rentals` (`write`): Inactivates a rental property and all associated units. Any associated property's owners that have no remaining active properties will be inactivated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `reactivate_rentals` (`write`): Reactivates a rental property and all associated units. Any inactive rental owners assigned to this property will also be reactivated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

### Resource `rentals.units`:

- `create_rentals_units` (`write`): Creates a rental unit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `retrieve_rentals_units` (`read`): Retrieves a specific rental property unit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_rentals_units` (`write`): Updates a rental unit.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_rentals_units` (`read`): Retrieves a list of rental property units.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `retrieve_listings_rentals_units` (`read`): Retrieves all listings.

  <span class="permissionBlock">Rentals > Listings</span> - `View`

  <span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

### Resource `rentals.units.listing`:

- `create_units_rentals_listing` (`write`): This endpoint can be used to both _create_ and _update_ a listing. If no listing exists for the unit one will be created, otherwise the existing listing will be updated. A unit can only ever have one active listing.

  Upon creation the listing will post immediately to your Buildium public website, and will post to the selected syndicated sites within 24-48 hours. Updates to the listing will appear immediately in your Buildium public website and propagated to syndicated sites within 24-48 hours.

  Note, the listing will automatically pull in the information, features, and media that exists for the property and unit details.

  <span class="permissionBlock">Rentals > Listings</span> - `View` `Edit`

  <span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_units_rentals_listing` (`read`): Retrieves a specific listing.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View`

  <span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `delete_all_units_rentals_listing` (`write`): Deleting a listing will immediately remove it from your Buildium public website. The listing will also be removed
  from any syndicated sites within 24-48 hours.

  Listings manually created on craigslist using the Buildium
  guided tool will not be removed. The listing must be removed using craigslist's tools provided in your craigslist account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View` `Edit` `Delete`

### Resource `rentals.units.listingcontacts`:

- `create_units_rentals_listingcontacts` (`write`): Create a listing contact. Note, at least one contact field (phone number, email or website) is required for the listing contact.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View` `Edit`

- `retrieve_units_rentals_listingcontacts` (`read`): Retrieves a specific listing contact.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View`

- `update_units_rentals_listingcontacts` (`write`): Update a listing contact. Note, at least one contact field (phone number, email or website) is required for the listing contact.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View` `Edit`

- `list_units_rentals_listingcontacts` (`read`): Retrieves all listing contacts.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Listings</span> - `View`

### Resource `rentals.units.amenities`:

- `create_units_rentals_amenities` (`write`): Updates the amenities for a rental unit.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_units_rentals_amenities` (`read`): Retrieves all amenities for a rental unit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

### Resource `rentals.units.images`:

- `retrieve_units_rentals_images` (`read`): Retrieves a unit image.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_units_rentals_images` (`write`): Updates a unit image.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Properties and units</span> - `View` `Edit`

- `list_units_rentals_images` (`read`): Retrieves all images for a unit. Note this endpoint will only return file metadata such as file names and descriptions. To download files make requests to the [Download File](#tag/Rental-Units/operation/ExternalApiRentalUnitImageDownloadRequests_GetRentalUnitImageDownloadUrlById) endpoint.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `delete_units_rentals_images` (`write`): Deletes a unit image.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit` `Delete`

- `downloadrequests_units_rentals_images` (`write`): Use this endpoint to create a temporary URL that can be used to download a unit image. This URL expires after 5 minutes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_order_units_rentals_images` (`write`): Updates the image display order within the Buildium web application and in any associated rental listings.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `uploadrequests_units_rentals_images` (`write`): Uploads an image and associates it to the specified unit record.

  Uploading a file requires making two API requests. Each step is outlined below.

  <strong>Step 1 - Save file metadata</strong>

              The first step in the file upload process is to submit the file metadata to `/v1/rentals/units/{unitId:int}/images/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.

  <strong>NOTE:</strong> The response data will expire after 5 minutes. The file metadata will not be saved in the Buildium system if step 2 of this process is not completed successfully.

  <strong>Step 2 - Upload the file binary</strong>

              Uploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:


              1. Form a POST request using the value of the `BucketUrl` property as the URL.



              2. Set the `Content-Type` header to `multipart/form-data`.



              3. Copy the fields from the `FormData`  property to this request as form-data key/value pairs.

  <strong>NOTE:</strong> These values must added to the request form-data in the order they were received in the response.

              4. Lastly create a form-data key named `file` and set the value to the file binary.

  <strong>NOTE:</strong> This must be the last field in the form-data list.

  This image shows what the POST request should look like if you're using Postman:
  <img src="file-upload-example.png" />

              5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.

  <strong>NOTE:</strong> The file identifier is not generated in this response. To retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName` value received from the response of this endpoint into the `physicalfilenames` query parameter.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `videolinkrequests_units_rentals_images` (`write`): Creates an image for a rental unit using a video link.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Properties and units</span> - `View` `Edit`

### Resource `rentals.units.notes`:

- `create_units_rentals_notes` (`write`): Creates a rental unit note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `retrieve_units_rentals_notes` (`read`): Retrieves a rental unit note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_units_rentals_notes` (`write`): Updates a rental unit note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_units_rentals_notes` (`read`): Retrieves all rental unit notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

### Resource `rentals.vendors`:

- `create_rentals_vendors` (`write`): Updates preferred vendors.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`
              
  <span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`

- `list_rentals_vendors` (`read`): Retrieves all preferred vendors.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`
              
  <span class="permissionBlock">Maintenance > Vendors</span> - `View`

### Resource `rentals.amenities`:

- `create_rentals_amenities` (`write`): Updates the amenities for a rental property.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_rentals_amenities` (`read`): Retrieve all the amenities for a rental property.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

### Resource `rentals.epaysettings`:

- `create_rentals_epaysettings` (`write`): Updates ePay settings for a rental property.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_rentals_epaysettings` (`read`): Retrieves ePay settings for a rental property.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

### Resource `rentals.images`:

- `retrieve_rentals_images` (`read`): Retrieves a rental property image.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_rentals_images` (`write`): Updates a rental property image.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_rentals_images` (`read`): Retrieves all images for a rental property. Note this endpoint will only return file metadata such as file names and descriptions. To download files make requests to the [Download File](#tag/Rental-Properties/operation/ExternalApiRentalImageDownloadRequests_GetRentalImageDownloadUrlById) endpoint.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `delete_rentals_images` (`write`): Deletes a rental property image.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit` `Delete`

- `downloadrequests_rentals_images` (`write`): Use this endpoint to create a temporary URL that can be used to download a property image. This URL expires after 5 minutes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_order_rentals_images` (`write`): Updates the image display order within the Buildium web application and in any associated rental listings.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `uploadrequests_rentals_images` (`write`): Uploads an image and associates it to the specified rental record.

  Uploading a file requires making two API requests. Each step is outlined below.

  <strong>Step 1 - Save file metadata</strong>

              The first step in the file upload process is to submit the file metadata to `/v1/rentals/{rentalId}/images/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.

  <strong>NOTE:</strong> The response data will expire after 5 minutes. The file metadata will not be saved in the Buildium system if step 2 of this process is not completed successfully.

  <strong>Step 2 - Upload the file binary</strong>

              Uploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:


              1. Form a POST request using the value of the `BucketUrl` property as the URL.



              2. Set the `Content-Type` header to `multipart/form-data`.



              3. Copy the fields from the `FormData`  property to this request as form-data key/value pairs.

  <strong>NOTE:</strong> These values must added to the request form-data in the order they were received in the response.

              4. Lastly create a form-data key named `file` and set the value to the file binary.

  <strong>NOTE:</strong> This must be the last field in the form-data list.

  This image shows what the POST request should look like if you're using Postman:
  <img src="file-upload-example.png" />

              5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.

  <strong>NOTE:</strong> The file identifier is not generated in this response. To retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName` value received from the response of this endpoint into the `physicalfilenames` query parameter.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `videolinkrequests_rentals_images` (`write`): Creates an image for a rental using a video link.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

### Resource `rentals.meterreadings`:

- `list_rentals_meterreadings` (`read`): Retrieves all meter readings for a rental property.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

### Resource `rentals.meterreadings.summary`:

- `create_meterreadings_rentals_summary` (`write`): This endpoint can be used to both create and update a meter reading detail for a property.
  <ul><li>There can only be one meter reading detail for a given combination of MeterType and ReadingDate for a property.</li><li>If you are updating an existing meter reading detail, use the query parameters to specify the existing meter reading detail to update.</li><li>If you are creating a new meter reading detail, do not pass any query parameters.</li><li>When adding a new item to the Details array, leave out the `Id` field.</li><li>When updating an existing item in the Details array, the `Id` field of the existing item must be included.</li></ul>

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_meterreadings_rentals_summary` (`read`): Retrieves all meter reading details for a property.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `delete_all_meterreadings_rentals_summary` (`write`): Delete meter reading details for a property for a given date.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Lease Transactions</span> - `View` `Edit` `Delete`

### Resource `rentals.notes`:

- `create_rentals_notes` (`write`): Creates a note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `retrieve_rentals_notes` (`read`): Retrieves a note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_rentals_notes` (`write`): Updates a note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_rentals_notes` (`read`): Retrieves all notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

### Resource `rentals.appliances`:

- `create_rentals_appliances` (`write`): Creates a rental property appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `retrieve_rentals_appliances` (`read`): Retrieves a rental appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `update_rentals_appliances` (`write`): Updates a rental appliance.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `list_rentals_appliances` (`read`): Retrieves all rental appliances.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `delete_rentals_appliances` (`write`): Deletes an appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

### Resource `rentals.appliances.servicehistory`:

- `create_appliances_rentals_servicehistory` (`write`): Creates a service history record for an appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View` `Edit`

- `retrieve_appliances_rentals_servicehistory` (`read`): Retrieves a specific service history record for a given appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

- `list_appliances_rentals_servicehistory` (`read`): Retrieves all of the service history records for an appliance.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units</span> - `View`

### Resource `rentals.owners`:

- `create_rentals_owners` (`write`): Creates a rental owner.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View` `Edit`

- `retrieve_rentals_owners` (`read`): Retrieves a specific rental owner.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`

- `update_rentals_owners` (`write`): Updates a rental owner.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View` `Edit`

- `list_rentals_owners` (`read`): Retrieves a list of rental owners.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`

### Resource `rentals.owners.notes`:

- `create_owners_rentals_notes` (`write`): Creates a new Rental Owner note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View` `Edit`

- `retrieve_owners_rentals_notes` (`read`): Retrieves a rental owner note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`

- `update_owners_rentals_notes` (`write`): Updates a Rental Owner note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View` `Edit`

- `list_owners_rentals_notes` (`read`): Retrieves all rental owner notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Property Rental Owners</span> - `View`

### Resource `users`:

- `retrieve_users` (`read`): Retrieve a specific user.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Users</span> - `View`

- `list_users` (`read`): Retrieves a list of users.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Users</span> - `View`

### Resource `userroles`:

- `retrieve_userroles` (`read`): Retrieve a specific user role.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > User Roles</span> - `View`

- `list_userroles` (`read`): Retrieves a list of user roles.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > User Roles</span> - `View`

### Resource `administration`:

- `retrieve_account_administration` (`read`): Retrieves information related to the Buildium account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Account Information</span> - `View`

- `retrieve_accounting_lock_periods_administration` (`read`): Retrieves accounting lock periods.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Application Settings</span> - `View`

### Resource `administration.residentsettings.partialpaymentsettings`:

- `retrieve_residentsettings_administration_partialpaymentsettings` (`read`): Retrieves the partial payment settings for residents.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Application Settings</span> - `View`

- `update_residentsettings_administration_partialpaymentsettings` (`write`): Updates the partial payment settings for residents.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > Application Settings</span> - `View` `Edit`

### Resource `applicants`:

- `create_applicants` (`write`): Creates an applicant.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`

- `retrieve_applicants` (`read`): Retrieves an applicant.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

- `update_applicants` (`write`): Updates an applicant.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`

- `list_applicants` (`read`): Retrieves all applicants.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

### Resource `applicants.applications`:

- `retrieve_applicants_applications` (`read`): Retrieves an application.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

- `update_applicants_applications` (`write`): Updates a rental application.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`

- `list_applicants_applications` (`read`): Retrieves all the applications for a given applicant.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

### Resource `applicants.notes`:

- `create_applicants_notes` (`write`): Creates an applicant note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> -  `View` `Edit`

- `retrieve_applicants_notes` (`read`): Retrieves an applicant note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

- `list_applicants_notes` (`read`): Retrieves all applicant notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

### Resource `applicants.groups`:

- `create_applicants_groups` (`write`): Creates an applicant group.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`

- `retrieve_applicants_groups` (`read`): Retrieves an applicant group.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

- `update_applicants_groups` (`write`): Updates an applicant group.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`

- `list_applicants_groups` (`read`): Retrieves all applicant groups.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

### Resource `applicants.groups.notes`:

- `create_groups_applicants_notes` (`write`): Creates an applicant group note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`

- `retrieve_groups_applicants_notes` (`read`): Retrieves an applicant group note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

- `update_groups_applicants_notes` (`write`): Updates an applicant group note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`

- `list_groups_applicants_notes` (`read`): Retrieves all applicant group notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`

### Resource `bankaccounts`:

- `create_bankaccounts` (`write`): Creates a bank account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Banking</span> - `View` `Edit`

- `retrieve_bankaccounts` (`read`): Retrieves a specific bank account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`

- `update_bankaccounts` (`write`): Updates a bank account.;

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Banking</span> - `View` `Edit`

- `list_bankaccounts` (`read`): Retrieves a list of bank accounts.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`

- `retrieve_undeposited_funds_bankaccounts` (`read`): Retrieve all bank account undeposited funds.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`

### Resource `bankaccounts.checks`:

- `create_bankaccounts_checks` (`write`): Creates a check.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `retrieve_bankaccounts_checks` (`read`): Retrieves a bank account check.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
              
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>

- `update_bankaccounts_checks` (`write`): Updates a check.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `list_bankaccounts_checks` (`read`): Retrieves all bank account checks.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
              
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>

### Resource `bankaccounts.checks.files`:

- `retrieve_checks_bankaccounts_files` (`read`): Retrieves the metadata for a specific file associated with the specified check.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
              
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>

- `list_checks_bankaccounts_files` (`read`): Retrieves the metadata for all files associated to the specified check.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
              
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>

- `delete_checks_bankaccounts_files` (`write`): Deletes a file for a check

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccounts</span> - `View` `Edit` `Delete`
              
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>

- `download_checks_bankaccounts_files` (`write`): Downloads a specific file associated to the check.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`
              
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>

- `upload_checks_bankaccounts_files` (`write`): Uploads a file and associates it to the specified check record.

  Uploading a file requires making two API requests. Each step is outlined below.

  <strong>Step 1 - Save file metadata</strong>

  The first step in the file upload process is to submit the file metadata to `/v1/bankaccounts/{bankAccountId:int}/checks/{checkId:int}/files/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.

  <strong>NOTE:</strong> The response data will expire after 5 minutes. The file metadata will not be saved in the Buildium system if step 2 of this process is not completed successfully.

  <strong>Step 2 - Upload the file binary</strong>

  Uploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:

  1. Form a POST request using the value of the `BucketUrl` property as the URL.

  2. Set the `Content-Type` header to `multipart/form-data`.

  3. Copy the fields from the `FormData` property to this request as form-data key/value pairs.

  <strong>NOTE:</strong> These values must added to the request form-data in the order they were received in the response.

  4. Lastly create a form-data key named `file` and set the value to the file binary.

  <strong>NOTE:</strong> This must be the last field in the form-data list.

  This image shows what the POST request should look like if you're using Postman:
  <img src="file-upload-example.png" />

  5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.

  <strong>NOTE:</strong> The file identifier is not generated in this response. To retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName` value received from the response of this endpoint into the `physicalfilenames` query parameter.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Checks</span> - `View` `Edit`
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for checks associated with a Company) </span>

### Resource `bankaccounts.deposits`:

- `create_bankaccounts_deposits` (`write`): Creates a deposit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `retrieve_bankaccounts_deposits` (`read`): Retrieves a bank account deposit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
              
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for deposits associated with a Company) </span>

- `update_bankaccounts_deposits` (`write`): Updates a deposit.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `list_bankaccounts_deposits` (`read`): Retrieves all bank account deposits.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`
              
  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` <span class="permissionBlock">(Required for deposits associated with a Company) </span>

### Resource `bankaccounts.quickdeposits`:

- `create_bankaccounts_quickdeposits` (`write`): Creates a quick deposit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`

- `retrieve_bankaccounts_quickdeposits` (`read`): Retrieves a quick deposit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`

- `update_bankaccounts_quickdeposits` (`write`): Updates a quick deposit.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `list_bankaccounts_quickdeposits` (`read`): Retrieves all quick deposits.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`

### Resource `bankaccounts.reconciliations`:

- `create_bankaccounts_reconciliations` (`write`): Creates a reconciliation. Reconciliations can only be created for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`

- `retrieve_bankaccounts_reconciliations` (`read`): Retrieves a bank account reconciliation. Reconciliations can only be retrieved for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`

- `update_bankaccounts_reconciliations` (`write`): Updates a reconciliation. Reconciliations can only be updated for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`

- `list_bankaccounts_reconciliations` (`read`): Retrieves all bank account reconciliations. Reconciliations can only be retrieved for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`

- `cleartransactionsrequest_bankaccounts_reconciliations` (`write`): Clears transactions for a reconciliation. Reconciliation transactions can only be cleared for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`

- `finalizerequest_bankaccounts_reconciliations` (`write`): Finalizes a manual reconciliation. Reconciliations can only be finalized for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`

- `retrieve_transactions_bankaccounts_reconciliations` (`read`): Retrieves all transactions, both cleared and uncleared, up to the Statement Ending Date of the related reconciliation. This is true for pending and completed reconciliations. Transactions can only be retrieved for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`

- `uncleartransactionsrequest_bankaccounts_reconciliations` (`write`): Un-clears transactions for a reconciliation. Reconciliation transactions can only be un-cleared for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`

### Resource `bankaccounts.reconciliations.balances`:

- `create_reconciliations_bankaccounts_balances` (`write`): Updates a bank account reconciliation's balance. Reconciliation balances can only be updated for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View` `Edit`

- `list_reconciliations_bankaccounts_balances` (`read`): Retrieves a bank account reconciliation's balance. Reconciliation balances can only be retrieved for bank accounts that are not linked externally.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`

### Resource `bankaccounts.transactions`:

- `retrieve_bankaccounts_transactions` (`read`): Retrieves a specific bank account transaction.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Account</span> - `View`

- `list_bankaccounts_transactions` (`read`): Retrieves all bank account transactions.

              Note: When using the `orderby` query string parameter, the only supported parameter is `EntryDate`.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`

### Resource `bankaccounts.transfers`:

- `create_bankaccounts_transfers` (`write`): Creates a bank account transfer.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `retrieve_bankaccounts_transfers` (`read`): Retrieves a bank account transfer.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View`

- `update_bankaccounts_transfers` (`write`): Updates a bank account transfer.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `list_bankaccounts_transfers` (`read`): Retrieves all bank account transfers.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccount</span> - `View`

### Resource `bankaccounts.withdrawals`:

- `create_bankaccounts_withdrawals` (`write`): Creates a bank account withdrawal.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `retrieve_bankaccounts_withdrawals` (`read`): Retrieves a bank account withdrawal.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccounts</span> - `View`

- `update_bankaccounts_withdrawals` (`write`): Updates a bank account withdrawal.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `list_bankaccounts_withdrawals` (`read`): Retrieves all bank account withdrawals.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > BankAccounts</span> - `View`

### Resource `bills`:

- `create_bills` (`write`): Creates a bill.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`

- `retrieve_bills` (`read`): Retrieves a single bill.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`

- `update_bills` (`write`): Use this operation to update any of the writable fields of an existing bill resource. When updating this resource keep the following in mind:
  <ul><li>Writable fields omitted from the request or that do not have a value in the request message are set to `NULL`. If you do not want to update the field, submit the original field value.</li><li>When a bill has an existing payment any edits to the line items that change the total bill amount must result in the new total bill amount being equal to or greater than the amount paid.</li><li>When adding a new line item leave the `LineItem.Id` field empty.</li><li>You cannot update a bill that has a pending EFT associated with it.</li></ul>

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`

- `list_bills` (`read`): Retrieves a list of bills.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`

### Resource `bills.files`:

- `retrieve_bills_files` (`read`): Retrieves the metadata for a specific file associated with the specified bill.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`

- `list_bills_files` (`read`): Retrieves the metadata for all files associated to the specified bill. To download the actual file view the [Download a bill file](#tag/Bills/operation/ExternalApiBillFileDownloadRequests_DownloadBillFile).

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`

- `delete_bills_files` (`write`): Deletes the specified file from a bill. The file will be permanently deleted from the Buildium platform and can not be recovered.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit` `Delete`

- `download_bills_files` (`write`): Downloads a specific file associated to the bill.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`

- `upload_bills_files` (`write`): Uploads a file and associates it to the specified bill record.

  Uploading a file requires making two API requests. Each step is outlined below.

  <strong>Step 1 - Save file metadata</strong>

  The first step in the file upload process is to submit the file metadata to `/v1/bills/{billId:int}/files/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.

  <strong>NOTE:</strong> The response data will expire after 5 minutes. The file metadata will not be saved in the Buildium system if step 2 of this process is not completed successfully.

  <strong>Step 2 - Upload the file binary</strong>

  Uploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:

  1. Form a POST request using the value of the `BucketUrl` property as the URL.

  2. Set the `Content-Type` header to `multipart/form-data`.

  3. Copy the fields from the `FormData` property to this request as form-data key/value pairs.

  <strong>NOTE:</strong> These values must added to the request form-data in the order they were received in the response.

  4. Lastly create a form-data key named `file` and set the value to the file binary.

  <strong>NOTE:</strong> This must be the last field in the form-data list.

  This image shows what the POST request should look like if you're using Postman:
  <img src="file-upload-example.png" />

  5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.

  <strong>NOTE:</strong> The file identifier is not generated in this response. To retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName` value received from the response of this endpoint into the `physicalfilenames` query parameter.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`

### Resource `bills.payments`:

- `create_bills_payments` (`write`): Creates a bill payment.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`
              <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

- `retrieve_bills_payments` (`read`): Retrieves specific bill payment.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`

- `list_bills_payments` (`read`): Retrieves a list of bill payments for a specific bill.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`

- `create_multiple_bills_payments` (`write`): Creates a payment for multiple bills with one check.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`
              <span class="permissionBlock">Accounting > Bank Accounts</span> - `View` `Edit`

### Resource `budgets`:

- `create_budgets` (`write`): Creates a budget.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View` `Edit`

- `retrieve_budgets` (`read`): Retrieves a budget.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View`

- `update_budgets` (`write`): Updates a budget.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View` `Edit`

- `list_budgets` (`read`): Retrieves all budgets.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Budgets</span> - `View`

### Resource `clientleads`:

- `retrieve_clientleads` (`read`): Retrieves a specific client lead

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > All Property Management</span> - `View`

- `list_clientleads` (`read`): Retrieves all client leads

              Note: When using the `orderby` query string parameter, the only supported options are DateReceived.

  <h4>Required permission(s):</h4><span class="permissionBlock">Administration > All Property Management</span> - `View`

### Resource `communications.announcements`:

- `create_communications_announcements` (`write`): Creates and publishes an announcement.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View` `Edit`

- `retrieve_communications_announcements` (`read`): Retrieves an announcement.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View`

- `list_communications_announcements` (`read`): Retrieves all announcements.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View`

- `expire_communications_announcements` (`write`): Removes the announcement from the Resident Center immediately.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View` `Edit`

- `retrieve_properties_communications_announcements` (`read`): Retrieves a list of association and/or rental properties whose residents received the announcement. An empty response collection indicates that the announcement was sent to all properties at the time of its creation.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Announcements</span> - `View`

### Resource `communications.emails`:

- `retrieve_communications_emails` (`read`): Retrieves the content of an email. To retrieve the recipients of the email see the [Retrieve all email recipients](#tag/Communications/operation/ExternalApiEmailRecipients_GetEmailRecipients) endpoint.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Emails</span> - `View`

- `list_communications_emails` (`read`): Retrieves all emails.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communication > Emails</span> - `View`

- `retrieve_recipients_communications_emails` (`read`): Retrieves all email recipients.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Email</span> - `View`
              
  <h4>Optional Permissions:</h4>

              The following permissions are optional, but results with a missing permission will be filtered out.
              <span class="permissionBlock">Maintenance > Vendors</span> - `View` In order to retrieve recipients that are Vendors, you must have this permission.
              <span class="permissionBlock">Administration > Users</span> - `View` In order to see recipients that are Staff, you must have this permission.

- `send_communications_emails` (`write`): Sends an email to one or more recipients using the specified email template.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communication > Emails</span> - `View` `Edit`

### Resource `communications.phonelogs`:

- `create_communications_phonelogs` (`write`): Creates a phone log.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View` `Edit`

- `retrieve_communications_phonelogs` (`read`): Retrieves a specific phone log.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View`

- `update_communications_phonelogs` (`write`): Update a phone log

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View` `Edit`

- `list_communications_phonelogs` (`read`): Retrieves all phone logs.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Timelines (Phone Logs)</span> - `View`

### Resource `communications.templates`:

- `retrieve_communications_templates` (`read`): Retrieves a communication template. A template is a tool in Buildium that allows you to create "mail merge" templates for emails and postal mailings to easily send common messages to residents, rental owners and vendors.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Mailing Templates</span> - `View`
              
  <h4>Optional Permissions:</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
              
  <span class="permissionBlock">Rentals > Property Rental owners</span> - `View`
              
  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
              
  <span class="permissionBlock">Maintenance > Vendors</span> - `View`
              
  <span class="permissionBlock">Rentals > Applicants</span> - `View`

- `list_communications_templates` (`read`): Retrieves all mailing and email templates. A template is a tool in Buildium that allows you to create "mail merge" templates for emails and postal mailings to easily send common messages to residents, rental owners and vendors.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Mailing Templates</span> - `View`
              
  <h4>Optional Permissions:</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
              
  <span class="permissionBlock">Rentals > Property Rental owners</span> - `View`
              
  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View`
              
  <span class="permissionBlock">Maintenance > Vendors</span> - `View`
              
  <span class="permissionBlock">Rentals > Applicants</span> - `View`

### Resource `generalledger`:

- `list_generalledger` (`read`): Retrieves all general ledger entries

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`

### Resource `generalledger.journalentries`:

- `create_generalledger_journalentries` (`write`): Creates a general journal entry.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` `Edit`

- `update_generalledger_journalentries` (`write`): Updates a general journal entry.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` `Edit`

### Resource `generalledger.transactions`:

- `retrieve_generalledger_transactions` (`read`): Retrieves a specific general ledger transaction.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`

- `list_generalledger_transactions` (`read`): Retrieves a list of general ledger transactions.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`

### Resource `glaccounts`:

- `create_glaccounts` (`write`): Creates a general ledger account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View` `Edit`

- `retrieve_glaccounts` (`read`): Retrieves a specific general ledger account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`

- `update_glaccounts` (`write`): Updates a general ledger account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View` `Edit`

- `list_glaccounts` (`read`): Retrieves a list of general ledger accounts.

  General ledger accounts are used to categorize transactions for accounting purposes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`

- `list_balances_glaccounts` (`read`): Retrieves all general ledger account balances as of a given date. The response includes the total balance of each account along with the subtotals for any accounting entities (company, associations or rental properties) that have transactions assigned to the account.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Accounts</span> - `View`

### Resource `propertygroups`:

- `create_propertygroups` (`write`): Creates a property group.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View` `Edit`
              <span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `retrieve_propertygroups` (`read`): Retrieves a property group.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View`
              <span class="permissionBlock">Associations > Associations and units</span> - `View`

- `update_propertygroups` (`write`): Updates a property group. A property group can only be updated by the user that created it.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View` `Edit`
              <span class="permissionBlock">Associations > Associations and units</span> - `View` `Edit`

- `list_propertygroups` (`read`): Retrieves all property groups.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Rental properties and units or</span> - `View`
              
  <span class="permissionBlock">Associations > Associations and units</span> - `View`

### Resource `resident_center_users`:

- `list_resident_center_users` (`read`): Retrieves all resident center users for both rentals and associations.

  <h4>Required permission(s):</h4><span class="permissionBlock">Communications > Resident Center Users</span> - `View`
              
  <span class="permissionBlock">Rentals > Tenants</span> - `View` is required to retrieve resident center users that are tenants.
              
  <span class="permissionBlock">Associations > Association owners and tenants</span> - `View` is required to retrieve resident center users that are association owners.

### Resource `retailcashusers`:

- `retrieve_retailcashusers` (`read`): Retrieves a retail cash user.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
              OR
              <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View`

- `update_retailcashusers` (`write`): Updates a retail cash user.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View` `Edit`
              OR
              <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View` `Edit`

- `list_retailcashusers` (`read`): Retrieves all retail cash users.

  <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Tenants</span> - `View`
              OR
              <span class="permissionBlock"> Associations > Association owners and tenants</span> - `View`

### Resource `tasks`:

- `retrieve_tasks` (`read`): Retrieves a specific task. This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's. Note, the response payload only contains fields common across all of the request types. To retrieve the full details of the task query the retrieve endpoint specific to the task type.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `list_tasks` (`read`): Retrieves a list of all task/request types (Contact, Owner, Resident and To Do). Note, the response payload only contains fields common across all of the request types. To retrieve the full details of the task query the retrieve endpoint specific to the task type.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

### Resource `tasks.history`:

- `retrieve_tasks_history` (`read`): Retrieves a specific task history record for a task.

  This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `update_tasks_history` (`write`): Updates a specific task history record for a task.

  This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `list_tasks_history` (`read`): Retrieves all task history records for a specific task.

  This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

### Resource `tasks.history.files`:

- `retrieve_history_tasks_files` (`read`): Retrieves the metadata for a specific file associated with a task history record.

  This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `list_history_tasks_files` (`read`): Retrieves the metadata for all files associated with a task history record.

  This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `delete_history_tasks_files` (`write`): Deletes a specific file from a task history record. The file will be permanently deleted from the Buildium platform an can not be recovered.

  This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit` `Delete`

- `download_request_history_tasks_files` (`write`): Downloads a specific file associated to the task history record.

  This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `upload_request_history_tasks_files` (`write`): Uploads a file and associates it to the specified task history record.

  This endpoint can be used for any task type - contact requests, rental owner requests, resident requests or to do's.

  Uploading a file requires making two API requests. Each step is outlined below.

  <strong>Step 1 - Save file metadata</strong>

  The first step in the file upload process is to submit the file metadata to `/v1/tasks/{taskId}/history/{taskHistoryId}/files/uploadrequests`. The response of this call will contain a URL and a collection of form data that will be used in step 2 to generate the request for the file binary upload.

  <strong>NOTE:</strong> The response data will expire after 5 minutes. The file metadata will not be saved in the Buildium system if step 2 of this process is not completed successfully.

  <strong>Step 2 - Upload the file binary</strong>

  Uploading the file binary will require using the response from step 1 to form a POST request to the Buildium file provider. Follow these steps to create the request:

  1. Form a POST request using the value of the `BucketUrl` property as the URL.

  2. Set the `Content-Type` header to `multipart/form-data`.

  3. Copy the fields from the `FormData` property to this request as form-data key/value pairs.

  <strong>NOTE:</strong> These values must added to the request form-data in the order they were received in the response.

  4. Lastly create a form-data key named `file` and set the value to the file binary.

  <strong>NOTE:</strong> This must be the last field in the form-data list.

  This image shows what the POST request should look like if you're using Postman:
  <img src="file-upload-example.png" />

  5. Send the POST request! A successful request will return with a `204 - NO CONTENT` HTTP response code. For any failure responses, please refer to <a target="_blank" href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">AWS documentation</a> on REST error responses.

  <strong>NOTE:</strong> The file identifier is not generated in this response. To retrieve the file identifier, call `/v1/files` and pass the `PhysicalFileName` value received from the response of this endpoint into the `physicalfilenames` query parameter.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

### Resource `tasks.categories`:

- `create_tasks_categories` (`write`): Create a task category.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `retrieve_tasks_categories` (`read`): Retrieves a specific task category.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `update_tasks_categories` (`write`): Updates a task category.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `list_tasks_categories` (`read`): Retrieves a list of task categories.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

### Resource `tasks.contactrequests`:

- `create_tasks_contactrequests` (`write`): Creates a contact request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `retrieve_tasks_contactrequests` (`read`): Retrieves a contact request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `update_tasks_contactrequests` (`write`): Updates a contact request.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `list_tasks_contactrequests` (`read`): Retrieves a list of contact requests.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

### Resource `tasks.rentalownerrequests`:

- `create_tasks_rentalownerrequests` (`write`): Creates a rental owner request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `retrieve_tasks_rentalownerrequests` (`read`): Retrieves a specific rental owner request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `update_tasks_rentalownerrequests` (`write`): Updates a rental owner request.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `list_tasks_rentalownerrequests` (`read`): Retrieves all rental owner requests.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

### Resource `tasks.rentalownerrequests.contributiondata`:

- `retrieve_rentalownerrequests_tasks_contributiondata` (`read`): Retrieves the contribution details for a rental owner contribution request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `update_rentalownerrequests_tasks_contributiondata` (`write`): Updates the contribution details for a rental owner contribution request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

### Resource `tasks.residentrequests`:

- `create_tasks_residentrequests` (`write`): Creates a resident request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `retrieve_tasks_residentrequests` (`read`): Retrieves a specific resident request.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `update_tasks_residentrequests` (`write`): Update a resident request.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `list_tasks_residentrequests` (`read`): Retrieves a list of resident requests.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

### Resource `tasks.todorequests`:

- `create_tasks_todorequests` (`write`): Creates a to do task.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `retrieve_tasks_todorequests` (`read`): Retrieves a to do task.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

- `update_tasks_todorequests` (`write`): Updates a to do task

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`

- `list_tasks_todorequests` (`read`): Retrieves a list of to do tasks.

  <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`

### Resource `vendors`:

- `create_vendors` (`write`): Creates a vendor.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`

- `retrieve_vendors` (`read`): Retrieve a specific vendor.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`

- `update_vendors` (`write`): Updates a vendor.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`

- `list_vendors` (`read`): Retrieves a list of vendors.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`

- `retrieve_transactions_vendors` (`read`): Retrieves all transactions for a given vendor.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`

  <span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View`

### Resource `vendors.credits`:

- `create_vendors_credits` (`write`): Creates a credit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View` `Edit`

- `retrieve_vendors_credits` (`read`): Retrieves a credit.

  <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > Bills</span> - `View`

### Resource `vendors.notes`:

- `create_vendors_notes` (`write`): Creates a vendor note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`

- `retrieve_vendors_notes` (`read`): Retrieves a vendor note.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`

- `update_vendors_notes` (`write`): Updates a vendor note.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`

- `list_vendors_notes` (`read`): Retrieves all vendor notes.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`

### Resource `vendors.refunds`:

- `create_vendors_refunds` (`write`): Creates a refund.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`
              <span class="permissionBlock">Accounting > Bank Accounts</span> - `View`

- `retrieve_vendors_refunds` (`read`): Retrieves a refund.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`

### Resource `vendors.categories`:

- `create_vendors_categories` (`write`): Creates a vendor category.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`

- `retrieve_vendors_categories` (`read`): Retrieves a specific vendor category.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`

- `update_vendors_categories` (`write`): Updates a vendor category.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View` `Edit`

- `list_vendors_categories` (`read`): Retrieves a list of vendor categories.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Vendors</span> - `View`

### Resource `workorders`:

- `create_workorders` (`write`): Creates a work order.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View` `Edit`

- `retrieve_workorders` (`read`): Retrieves a specific work order.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View`

- `update_workorders` (`write`): Updates a work order.

  <strong>NOTE:</strong> Any field not included in the update request will be set to either an empty string or `null` in the database depending on the field definition.
  The recommended workflow to ensure no data is inadvertently overwritten is to execute a `GET` request for the resource you're about to update and then use this response to fill any of the fields that are not being updated.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View` `Edit`

- `list_workorders` (`read`): Retrieves a list of work orders.

  <h4>Required permission(s):</h4><span class="permissionBlock">Maintenance > Work Orders</span> - `View`
