// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  BudgetCreateParams,
  BudgetDetailsSaveMessage,
  BudgetListParams,
  BudgetListResponse,
  BudgetMessage,
  BudgetUpdateParams,
  Budgets,
} from './resources/budgets';
import {
  ClientLeadMessage,
  ClientleadListParams,
  ClientleadListResponse,
  Clientleads,
} from './resources/clientleads';
import {
  GlAccountMessage,
  GlaccountCreateParams,
  GlaccountListBalancesParams,
  GlaccountListBalancesResponse,
  GlaccountListParams,
  GlaccountListResponse,
  GlaccountUpdateParams,
  Glaccounts,
} from './resources/glaccounts';
import {
  PropertyGroupMessage,
  PropertygroupCreateParams,
  PropertygroupListParams,
  PropertygroupListResponse,
  PropertygroupUpdateParams,
  Propertygroups,
} from './resources/propertygroups';
import {
  ResidentCenterUserListParams,
  ResidentCenterUserListResponse,
  ResidentCenterUsers,
} from './resources/resident-center-users';
import {
  RetailCashUserMessage,
  RetailcashuserListParams,
  RetailcashuserListResponse,
  RetailcashuserRetrieveParams,
  RetailcashuserUpdateParams,
  Retailcashusers,
} from './resources/retailcashusers';
import { UserRoleMessage, UserroleListParams, UserroleListResponse, Userroles } from './resources/userroles';
import { PhoneNumber, User, UserListParams, UserListResponse, Users } from './resources/users';
import {
  WorkOrder,
  WorkOrderEntryContact,
  WorkOrderLineItemSave,
  WorkorderCreateParams,
  WorkorderListParams,
  WorkorderListResponse,
  WorkorderUpdateParams,
  Workorders,
} from './resources/workorders';
import {
  Administration,
  AdministrationGetAccountResponse,
  AdministrationGetAcctLockPeriodsResponse,
} from './resources/administration/administration';
import {
  ApplicantApplication,
  ApplicantCreateParams,
  ApplicantDetails,
  ApplicantListParams,
  ApplicantListResponse,
  ApplicantUpdateParams,
  Applicants,
} from './resources/applicants/applicants';
import {
  ApplicationCreateAutoPayParams,
  ApplicationCreatePayReversalParams,
  ApplicationListBalancesParams,
  ApplicationListBalancesResponse,
  Applications,
  OutstandingBalancesLine,
  ReversePaymentOtherBankCharge,
} from './resources/applications/applications';
import {
  Address,
  Association,
  AssociationCreateParams,
  AssociationListBankLockboxDataParams,
  AssociationListBankLockboxDataResponse,
  AssociationListParams,
  AssociationListResponse,
  AssociationUpdateParams,
  Associations,
  PropertyManager,
  SaveAddress,
  TaxInformation,
} from './resources/associations/associations';
import {
  Account,
  BankaccountCreateParams,
  BankaccountGetUndepositedFundsParams,
  BankaccountGetUndepositedFundsResponse,
  BankaccountListParams,
  BankaccountListResponse,
  BankaccountUpdateParams,
  Bankaccounts,
} from './resources/bankaccounts/bankaccounts';
import {
  BillCreateParams,
  BillListParams,
  BillListResponse,
  BillMarkupSaveMessage,
  BillMessage,
  BillUpdateParams,
  Bills,
} from './resources/bills/bills';
import { Communications } from './resources/communications/communications';
import {
  File,
  FileCreateUploadRequestParams,
  FileDownload,
  FileListParams,
  FileListResponse,
  FileUpdateParams,
  Files,
} from './resources/files/files';
import {
  Generalledger,
  GeneralledgerListParams,
  GeneralledgerListResponse,
} from './resources/generalledger/generalledger';
import {
  Lease,
  LeaseCosigner,
  LeaseCreateAutoPaymentParams,
  LeaseCreateCreditParams,
  LeaseCreateParams,
  LeaseCreatePayReversalParams,
  LeaseListBalancesParams,
  LeaseListBalancesResponse,
  LeaseListParams,
  LeaseListRenewHistoryParams,
  LeaseListRenewHistoryResponse,
  LeaseListResponse,
  LeaseRentForPostMessage,
  LeaseUpdateParams,
  Leases,
} from './resources/leases/leases';
import {
  Rental,
  RentalCreateParams,
  RentalListParams,
  RentalListResponse,
  RentalUpdateParams,
  Rentals,
} from './resources/rentals/rentals';
import {
  AllTask,
  RequestedByUserEntity,
  TaskCategoryResponse,
  TaskListParams,
  TaskListResponse,
  Tasks,
} from './resources/tasks/tasks';
import {
  Vendor,
  VendorCreateParams,
  VendorInsuranceSave,
  VendorListParams,
  VendorListResponse,
  VendorListTransactionsParams,
  VendorListTransactionsResponse,
  VendorUpdateParams,
  Vendors,
} from './resources/vendors/vendors';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['WPM_BUILDIUM_CLIENT_ID'].
   */
  clientID?: string | null | undefined;

  /**
   * Defaults to process.env['WPM_BUILDIUM_CLIENT_SECRET'].
   */
  clientSecret?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['WPM_MCP_SERVER_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['WPM_MCP_SERVER_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Wpm Mcp Server API.
 */
export class WpmMcpServer {
  clientID: string | null;
  clientSecret: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Wpm Mcp Server API.
   *
   * @param {string | null | undefined} [opts.clientID=process.env['WPM_BUILDIUM_CLIENT_ID'] ?? null]
   * @param {string | null | undefined} [opts.clientSecret=process.env['WPM_BUILDIUM_CLIENT_SECRET'] ?? null]
   * @param {string} [opts.baseURL=process.env['WPM_MCP_SERVER_BASE_URL'] ?? https://apisandbox.buildium.com/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('WPM_MCP_SERVER_BASE_URL'),
    clientID = readEnv('WPM_BUILDIUM_CLIENT_ID') ?? null,
    clientSecret = readEnv('WPM_BUILDIUM_CLIENT_SECRET') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      clientID,
      clientSecret,
      ...opts,
      baseURL: baseURL || `https://apisandbox.buildium.com/`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? WpmMcpServer.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('WPM_MCP_SERVER_LOG'), "process.env['WPM_MCP_SERVER_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.clientID = clientID;
    this.clientSecret = clientSecret;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    return new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      clientID: this.clientID,
      clientSecret: this.clientSecret,
      ...options,
    });
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://apisandbox.buildium.com/';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.clientID && values.get('x-buildium-client-id')) {
      return;
    }
    if (nulls.has('x-buildium-client-id')) {
      return;
    }

    if (this.clientSecret && values.get('x-buildium-client-secret')) {
      return;
    }
    if (nulls.has('x-buildium-client-secret')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either clientID or clientSecret to be set. Or for one of the "x-buildium-client-id" or "x-buildium-client-secret" headers to be explicitly omitted',
    );
  }

  protected authHeaders(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([this.clientIDAuth(opts), this.clientSecretAuth(opts)]);
  }

  protected clientIDAuth(opts: FinalRequestOptions): NullableHeaders | undefined {
    if (this.clientID == null) {
      return undefined;
    }
    return buildHeaders([{ 'x-buildium-client-id': this.clientID }]);
  }

  protected clientSecretAuth(opts: FinalRequestOptions): NullableHeaders | undefined {
    if (this.clientSecret == null) {
      return undefined;
    }
    return buildHeaders([{ 'x-buildium-client-secret': this.clientSecret }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private shouldRetry(response: Response): boolean {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static WpmMcpServer = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static WpmMcpServerError = Errors.WpmMcpServerError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  applications: API.Applications = new API.Applications(this);
  associations: API.Associations = new API.Associations(this);
  files: API.Files = new API.Files(this);
  leases: API.Leases = new API.Leases(this);
  rentals: API.Rentals = new API.Rentals(this);
  users: API.Users = new API.Users(this);
  userroles: API.Userroles = new API.Userroles(this);
  administration: API.Administration = new API.Administration(this);
  applicants: API.Applicants = new API.Applicants(this);
  bankaccounts: API.Bankaccounts = new API.Bankaccounts(this);
  bills: API.Bills = new API.Bills(this);
  budgets: API.Budgets = new API.Budgets(this);
  clientleads: API.Clientleads = new API.Clientleads(this);
  communications: API.Communications = new API.Communications(this);
  generalledger: API.Generalledger = new API.Generalledger(this);
  glaccounts: API.Glaccounts = new API.Glaccounts(this);
  propertygroups: API.Propertygroups = new API.Propertygroups(this);
  residentCenterUsers: API.ResidentCenterUsers = new API.ResidentCenterUsers(this);
  retailcashusers: API.Retailcashusers = new API.Retailcashusers(this);
  tasks: API.Tasks = new API.Tasks(this);
  vendors: API.Vendors = new API.Vendors(this);
  workorders: API.Workorders = new API.Workorders(this);
}
WpmMcpServer.Applications = Applications;
WpmMcpServer.Associations = Associations;
WpmMcpServer.Files = Files;
WpmMcpServer.Leases = Leases;
WpmMcpServer.Rentals = Rentals;
WpmMcpServer.Users = Users;
WpmMcpServer.Userroles = Userroles;
WpmMcpServer.Administration = Administration;
WpmMcpServer.Applicants = Applicants;
WpmMcpServer.Bankaccounts = Bankaccounts;
WpmMcpServer.Bills = Bills;
WpmMcpServer.Budgets = Budgets;
WpmMcpServer.Clientleads = Clientleads;
WpmMcpServer.Communications = Communications;
WpmMcpServer.Generalledger = Generalledger;
WpmMcpServer.Glaccounts = Glaccounts;
WpmMcpServer.Propertygroups = Propertygroups;
WpmMcpServer.ResidentCenterUsers = ResidentCenterUsers;
WpmMcpServer.Retailcashusers = Retailcashusers;
WpmMcpServer.Tasks = Tasks;
WpmMcpServer.Vendors = Vendors;
WpmMcpServer.Workorders = Workorders;
export declare namespace WpmMcpServer {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Applications as Applications,
    type OutstandingBalancesLine as OutstandingBalancesLine,
    type ReversePaymentOtherBankCharge as ReversePaymentOtherBankCharge,
    type ApplicationListBalancesResponse as ApplicationListBalancesResponse,
    type ApplicationCreateAutoPayParams as ApplicationCreateAutoPayParams,
    type ApplicationCreatePayReversalParams as ApplicationCreatePayReversalParams,
    type ApplicationListBalancesParams as ApplicationListBalancesParams,
  };

  export {
    Associations as Associations,
    type Address as Address,
    type Association as Association,
    type PropertyManager as PropertyManager,
    type SaveAddress as SaveAddress,
    type TaxInformation as TaxInformation,
    type AssociationListResponse as AssociationListResponse,
    type AssociationListBankLockboxDataResponse as AssociationListBankLockboxDataResponse,
    type AssociationCreateParams as AssociationCreateParams,
    type AssociationUpdateParams as AssociationUpdateParams,
    type AssociationListParams as AssociationListParams,
    type AssociationListBankLockboxDataParams as AssociationListBankLockboxDataParams,
  };

  export {
    Files as Files,
    type File as File,
    type FileDownload as FileDownload,
    type FileListResponse as FileListResponse,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileCreateUploadRequestParams as FileCreateUploadRequestParams,
  };

  export {
    Leases as Leases,
    type Lease as Lease,
    type LeaseCosigner as LeaseCosigner,
    type LeaseRentForPostMessage as LeaseRentForPostMessage,
    type LeaseListResponse as LeaseListResponse,
    type LeaseListBalancesResponse as LeaseListBalancesResponse,
    type LeaseListRenewHistoryResponse as LeaseListRenewHistoryResponse,
    type LeaseCreateParams as LeaseCreateParams,
    type LeaseUpdateParams as LeaseUpdateParams,
    type LeaseListParams as LeaseListParams,
    type LeaseCreateAutoPaymentParams as LeaseCreateAutoPaymentParams,
    type LeaseCreateCreditParams as LeaseCreateCreditParams,
    type LeaseCreatePayReversalParams as LeaseCreatePayReversalParams,
    type LeaseListBalancesParams as LeaseListBalancesParams,
    type LeaseListRenewHistoryParams as LeaseListRenewHistoryParams,
  };

  export {
    Rentals as Rentals,
    type Rental as Rental,
    type RentalListResponse as RentalListResponse,
    type RentalCreateParams as RentalCreateParams,
    type RentalUpdateParams as RentalUpdateParams,
    type RentalListParams as RentalListParams,
  };

  export {
    Users as Users,
    type PhoneNumber as PhoneNumber,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
  };

  export {
    Userroles as Userroles,
    type UserRoleMessage as UserRoleMessage,
    type UserroleListResponse as UserroleListResponse,
    type UserroleListParams as UserroleListParams,
  };

  export {
    Administration as Administration,
    type AdministrationGetAccountResponse as AdministrationGetAccountResponse,
    type AdministrationGetAcctLockPeriodsResponse as AdministrationGetAcctLockPeriodsResponse,
  };

  export {
    Applicants as Applicants,
    type ApplicantApplication as ApplicantApplication,
    type ApplicantDetails as ApplicantDetails,
    type ApplicantListResponse as ApplicantListResponse,
    type ApplicantCreateParams as ApplicantCreateParams,
    type ApplicantUpdateParams as ApplicantUpdateParams,
    type ApplicantListParams as ApplicantListParams,
  };

  export {
    Bankaccounts as Bankaccounts,
    type Account as Account,
    type BankaccountListResponse as BankaccountListResponse,
    type BankaccountGetUndepositedFundsResponse as BankaccountGetUndepositedFundsResponse,
    type BankaccountCreateParams as BankaccountCreateParams,
    type BankaccountUpdateParams as BankaccountUpdateParams,
    type BankaccountListParams as BankaccountListParams,
    type BankaccountGetUndepositedFundsParams as BankaccountGetUndepositedFundsParams,
  };

  export {
    Bills as Bills,
    type BillMarkupSaveMessage as BillMarkupSaveMessage,
    type BillMessage as BillMessage,
    type BillListResponse as BillListResponse,
    type BillCreateParams as BillCreateParams,
    type BillUpdateParams as BillUpdateParams,
    type BillListParams as BillListParams,
  };

  export {
    Budgets as Budgets,
    type BudgetDetailsSaveMessage as BudgetDetailsSaveMessage,
    type BudgetMessage as BudgetMessage,
    type BudgetListResponse as BudgetListResponse,
    type BudgetCreateParams as BudgetCreateParams,
    type BudgetUpdateParams as BudgetUpdateParams,
    type BudgetListParams as BudgetListParams,
  };

  export {
    Clientleads as Clientleads,
    type ClientLeadMessage as ClientLeadMessage,
    type ClientleadListResponse as ClientleadListResponse,
    type ClientleadListParams as ClientleadListParams,
  };

  export { Communications as Communications };

  export {
    Generalledger as Generalledger,
    type GeneralledgerListResponse as GeneralledgerListResponse,
    type GeneralledgerListParams as GeneralledgerListParams,
  };

  export {
    Glaccounts as Glaccounts,
    type GlAccountMessage as GlAccountMessage,
    type GlaccountListResponse as GlaccountListResponse,
    type GlaccountListBalancesResponse as GlaccountListBalancesResponse,
    type GlaccountCreateParams as GlaccountCreateParams,
    type GlaccountUpdateParams as GlaccountUpdateParams,
    type GlaccountListParams as GlaccountListParams,
    type GlaccountListBalancesParams as GlaccountListBalancesParams,
  };

  export {
    Propertygroups as Propertygroups,
    type PropertyGroupMessage as PropertyGroupMessage,
    type PropertygroupListResponse as PropertygroupListResponse,
    type PropertygroupCreateParams as PropertygroupCreateParams,
    type PropertygroupUpdateParams as PropertygroupUpdateParams,
    type PropertygroupListParams as PropertygroupListParams,
  };

  export {
    ResidentCenterUsers as ResidentCenterUsers,
    type ResidentCenterUserListResponse as ResidentCenterUserListResponse,
    type ResidentCenterUserListParams as ResidentCenterUserListParams,
  };

  export {
    Retailcashusers as Retailcashusers,
    type RetailCashUserMessage as RetailCashUserMessage,
    type RetailcashuserListResponse as RetailcashuserListResponse,
    type RetailcashuserRetrieveParams as RetailcashuserRetrieveParams,
    type RetailcashuserUpdateParams as RetailcashuserUpdateParams,
    type RetailcashuserListParams as RetailcashuserListParams,
  };

  export {
    Tasks as Tasks,
    type AllTask as AllTask,
    type RequestedByUserEntity as RequestedByUserEntity,
    type TaskCategoryResponse as TaskCategoryResponse,
    type TaskListResponse as TaskListResponse,
    type TaskListParams as TaskListParams,
  };

  export {
    Vendors as Vendors,
    type Vendor as Vendor,
    type VendorInsuranceSave as VendorInsuranceSave,
    type VendorListResponse as VendorListResponse,
    type VendorListTransactionsResponse as VendorListTransactionsResponse,
    type VendorCreateParams as VendorCreateParams,
    type VendorUpdateParams as VendorUpdateParams,
    type VendorListParams as VendorListParams,
    type VendorListTransactionsParams as VendorListTransactionsParams,
  };

  export {
    Workorders as Workorders,
    type WorkOrder as WorkOrder,
    type WorkOrderEntryContact as WorkOrderEntryContact,
    type WorkOrderLineItemSave as WorkOrderLineItemSave,
    type WorkorderListResponse as WorkorderListResponse,
    type WorkorderCreateParams as WorkorderCreateParams,
    type WorkorderUpdateParams as WorkorderUpdateParams,
    type WorkorderListParams as WorkorderListParams,
  };
}
