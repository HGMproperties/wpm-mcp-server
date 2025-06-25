// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnnouncementsAPI from './announcements';
import {
  AnnouncementCreateParams,
  AnnouncementListParams,
  AnnouncementListPropertiesParams,
  AnnouncementListPropertiesResponse,
  AnnouncementListResponse,
  AnnouncementMessage,
  Announcements,
  PropertyMessage,
} from './announcements';
import * as EmailsAPI from './emails';
import {
  EmailListParams,
  EmailListRecipientsParams,
  EmailListRecipientsResponse,
  EmailListResponse,
  EmailMessage,
  EmailSendParams,
  Emails,
} from './emails';
import * as PhonelogsAPI from './phonelogs';
import {
  PhoneLogMessage,
  PhonelogCreateParams,
  PhonelogListParams,
  PhonelogListResponse,
  PhonelogUpdateParams,
  Phonelogs,
} from './phonelogs';
import * as TemplatesAPI from './templates';
import { MailingTemplateMessage, TemplateListParams, TemplateListResponse, Templates } from './templates';

export class Communications extends APIResource {
  announcements: AnnouncementsAPI.Announcements = new AnnouncementsAPI.Announcements(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  phonelogs: PhonelogsAPI.Phonelogs = new PhonelogsAPI.Phonelogs(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
}

Communications.Announcements = Announcements;
Communications.Emails = Emails;
Communications.Phonelogs = Phonelogs;
Communications.Templates = Templates;

export declare namespace Communications {
  export {
    Announcements as Announcements,
    type AnnouncementMessage as AnnouncementMessage,
    type PropertyMessage as PropertyMessage,
    type AnnouncementListResponse as AnnouncementListResponse,
    type AnnouncementListPropertiesResponse as AnnouncementListPropertiesResponse,
    type AnnouncementCreateParams as AnnouncementCreateParams,
    type AnnouncementListParams as AnnouncementListParams,
    type AnnouncementListPropertiesParams as AnnouncementListPropertiesParams,
  };

  export {
    Emails as Emails,
    type EmailMessage as EmailMessage,
    type EmailListResponse as EmailListResponse,
    type EmailListRecipientsResponse as EmailListRecipientsResponse,
    type EmailListParams as EmailListParams,
    type EmailListRecipientsParams as EmailListRecipientsParams,
    type EmailSendParams as EmailSendParams,
  };

  export {
    Phonelogs as Phonelogs,
    type PhoneLogMessage as PhoneLogMessage,
    type PhonelogListResponse as PhonelogListResponse,
    type PhonelogCreateParams as PhonelogCreateParams,
    type PhonelogUpdateParams as PhonelogUpdateParams,
    type PhonelogListParams as PhonelogListParams,
  };

  export {
    Templates as Templates,
    type MailingTemplateMessage as MailingTemplateMessage,
    type TemplateListResponse as TemplateListResponse,
    type TemplateListParams as TemplateListParams,
  };
}
