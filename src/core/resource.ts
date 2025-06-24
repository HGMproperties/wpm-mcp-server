// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { WpmMcpServer } from '../client';

export abstract class APIResource {
  protected _client: WpmMcpServer;

  constructor(client: WpmMcpServer) {
    this._client = client;
  }
}
