// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PartialpaymentsettingsAPI from './partialpaymentsettings';
import {
  PartialPaymentSettingsMessage,
  PartialPaymentSettingsPatchMessage,
  PartialpaymentsettingUpdateParams,
  Partialpaymentsettings,
} from './partialpaymentsettings';

export class Residentsettings extends APIResource {
  partialpaymentsettings: PartialpaymentsettingsAPI.Partialpaymentsettings =
    new PartialpaymentsettingsAPI.Partialpaymentsettings(this._client);
}

Residentsettings.Partialpaymentsettings = Partialpaymentsettings;

export declare namespace Residentsettings {
  export {
    Partialpaymentsettings as Partialpaymentsettings,
    type PartialPaymentSettingsMessage as PartialPaymentSettingsMessage,
    type PartialPaymentSettingsPatchMessage as PartialPaymentSettingsPatchMessage,
    type PartialpaymentsettingUpdateParams as PartialpaymentsettingUpdateParams,
  };
}
