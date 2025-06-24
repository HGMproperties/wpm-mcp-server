// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contributiondata extends APIResource {
  /**
   * Retrieves the contribution details for a rental owner contribution request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View`
   */
  retrieve(rentalOwnerRequestTaskID: number, options?: RequestOptions): APIPromise<ContributionData> {
    return this._client.get(
      path`/v1/tasks/rentalownerrequests/${rentalOwnerRequestTaskID}/contributiondata`,
      options,
    );
  }

  /**
   * Updates the contribution details for a rental owner contribution request.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Tasks > Tasks</span> - `View` `Edit`
   */
  update(
    rentalOwnerRequestTaskID: number,
    body: ContributiondataUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ContributionData> {
    return this._client.put(
      path`/v1/tasks/rentalownerrequests/${rentalOwnerRequestTaskID}/contributiondata`,
      { body, ...options },
    );
  }
}

export interface ContributionData {
  /**
   * The contribution request details associated with the task.
   */
  ContributionRequests?: Array<ContributionData.ContributionRequest> | null;

  /**
   * Rental owner contribution reminder settings
   */
  ReminderSettings?: ContributionData.ReminderSettings | null;
}

export namespace ContributionData {
  /**
   * Rental owner contribution detail
   */
  export interface ContributionRequest {
    /**
     * Amount being requested for the contribution.
     */
    Amount?: number | null;

    /**
     * Description of the contribution.
     */
    Description?: string | null;
  }

  /**
   * Rental owner contribution reminder settings
   */
  export interface ReminderSettings {
    /**
     * Flag for enabling the reminders.
     */
    IsActive?: boolean;

    /**
     * Interval of days for the reminder to be sent on.
     */
    RecurrenceDays?: number;
  }
}

export interface ContributiondataUpdateParams {
  /**
   * The contribution request details associated with the task.
   */
  ContributionRequests?: Array<ContributiondataUpdateParams.ContributionRequest> | null;

  /**
   * Rental owner contribution reminder settings
   */
  ReminderSettings?: ContributiondataUpdateParams.ReminderSettings | null;
}

export namespace ContributiondataUpdateParams {
  /**
   * Rental owner contribution detail
   */
  export interface ContributionRequest {
    /**
     * Amount being requested for the contribution.
     */
    Amount?: number | null;

    /**
     * Description of the contribution.
     */
    Description?: string | null;
  }

  /**
   * Rental owner contribution reminder settings
   */
  export interface ReminderSettings {
    /**
     * Flag for enabling the reminders.
     */
    IsActive?: boolean | null;

    /**
     * Interval of days for the reminder to be sent on.
     */
    RecurrenceDays?: number | null;
  }
}

export declare namespace Contributiondata {
  export {
    type ContributionData as ContributionData,
    type ContributiondataUpdateParams as ContributiondataUpdateParams,
  };
}
