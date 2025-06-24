// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Applications extends APIResource {
  /**
   * Retrieves an application.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  retrieve(
    applicationID: number,
    params: ApplicationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Application> {
    const { applicantId } = params;
    return this._client.get(path`/v1/applicants/${applicantId}/applications/${applicationID}`, options);
  }

  /**
   * Updates a rental application.
   *
   * <strong>NOTE:</strong> Any field not included in the update request will be set
   * to either an empty string or `null` in the database depending on the field
   * definition. The recommended workflow to ensure no data is inadvertently
   * overwritten is to execute a `GET` request for the resource you're about to
   * update and then use this response to fill any of the fields that are not being
   * updated.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View` `Edit`
   */
  update(
    applicationID: number,
    params: ApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Application> {
    const { applicantId, ...body } = params;
    return this._client.put(path`/v1/applicants/${applicantId}/applications/${applicationID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all the applications for a given applicant.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Rentals > Applicants</span> - `View`
   */
  list(
    applicantID: number,
    query: ApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApplicationListResponse> {
    return this._client.get(path`/v1/applicants/${applicantID}/applications`, { query, ...options });
  }
}

export interface Application {
  /**
   * A submitted rental application.
   */
  Application?: Array<Application.Application> | null;

  /**
   * An alpha numeric value that can be used to uniquely identify the application.
   * This is typically provided to an applicant to use as a reference when making
   * inquiries about their application.
   */
  ApplicationNumber?: string | null;

  /**
   * Indicates the current application status.
   */
  ApplicationStatus?:
    | 'Unknown'
    | 'Undecided'
    | 'Approved'
    | 'Rejected'
    | 'AddedToLease'
    | 'Cancelled'
    | 'Deferred'
    | 'New'
    | 'Draft'
    | 'AddedToDraftLease';

  /**
   * Date and time the application was submitted.
   */
  ApplicationSubmittedDateTime?: string;

  /**
   * Rental application unique identifier.
   */
  Id?: number;
}

export namespace Application {
  export interface Application {
    /**
     * A user defined description of the application section.
     */
    SectionLabel?: string | null;

    /**
     * A collection of form fields within the section.
     */
    SectionResponses?: Array<Application.SectionResponse> | null;

    /**
     * Indicates the application section type. The `SectionType` can be used to
     * identify specific sections within the application.
     */
    SectionType?:
      | 'ApplicantInformation'
      | 'PropertyInformation'
      | 'RentalHistory'
      | 'Employment'
      | 'References'
      | 'Cosigners'
      | 'AdditionalOccupants'
      | 'Pets'
      | 'Vehicles'
      | 'TermsAndConditions'
      | 'Other'
      | 'CosignerInformation'
      | 'CosignerEmploymentHistory'
      | 'CosignerTermsAndConditions'
      | 'CosignerOther'
      | 'LocationOfInterest';
  }

  export namespace Application {
    export interface SectionResponse {
      SectionFields?: Array<SectionResponse.SectionField> | null;
    }

    export namespace SectionResponse {
      export interface SectionField {
        /**
         * Indicates the field category type the field is assigned. The `FieldCategoryType`
         * can be used to identify specific data points within the application. For
         * example, to identify the fields that contain the applicants full name you would
         * filter the fields within the application where the `FieldCategoryType` is equal
         * to `ApplicantName`.
         */
        FieldCategoryType?:
          | 'ApplicantName'
          | 'ApplicantEmail'
          | 'ApplicantSocialSecurityNumber'
          | 'ApplicantAlternateEmail'
          | 'ApplicantHomePhone'
          | 'ApplicantCellPhone'
          | 'ApplicantWorkPhone'
          | 'ApplicantFax'
          | 'ApplicantBirthDate'
          | 'ApplicantDriversLicense'
          | 'ApplicantCurrentAddress'
          | 'ApplicantAlternateAddress'
          | 'EmergencyContactName'
          | 'EmergencyContactRelationship'
          | 'EmergencyContactEmail'
          | 'EmergencyContactPhone'
          | 'OccupantName'
          | 'OccupantRelationship'
          | 'OccupantBirthDate'
          | 'OccupantEmail'
          | 'OccupantPhoneNumber'
          | 'CosignerName'
          | 'CosignerRelationship'
          | 'CosignerSocialSecurityNumber'
          | 'CosignerPhoneNumber'
          | 'CosignerEmail'
          | 'EmployerName'
          | 'EmployerAddress'
          | 'EmployerPhoneNumber'
          | 'EmployerEmail'
          | 'PositionHeld'
          | 'EmploymentDates'
          | 'MonthlyGrossSalary'
          | 'SupervisorName'
          | 'SupervisorTitle'
          | 'PetType'
          | 'PetName'
          | 'PetAge'
          | 'PetSpayedOrNeutered'
          | 'PetLicenseNumber'
          | 'PetWeight'
          | 'DesiredMoveInDate'
          | 'DesiredLeaseDuration'
          | 'DesiredRent'
          | 'DesiredNumberOfBedrooms'
          | 'DesiredNumberOfBathrooms'
          | 'ReferenceName'
          | 'ReferenceRelationship'
          | 'ReferencePhoneNumber'
          | 'ReferenceEmail'
          | 'RentalAddress'
          | 'RentalDates'
          | 'MonthlyRent'
          | 'ReasonForLeaving'
          | 'LandlordName'
          | 'LandlordPhoneNumber'
          | 'LandlordEmail'
          | 'VehicleMake'
          | 'VehicleModel'
          | 'VehicleColor'
          | 'VehicleYear'
          | 'VehicleLicensePlate'
          | 'AgreedTo'
          | 'AgreedBy'
          | 'CosignerAddress'
          | 'ApplicantAddress'
          | 'OtherComments'
          | 'EmailApplication'
          | 'OptInSms'
          | 'Location'
          | 'CosignerApplicationFullName'
          | 'CosignerApplicationRelationshipToApplicant'
          | 'CosignerApplicationSocialSecurityNumber'
          | 'CosignerApplicationPhoneNumber'
          | 'CosignerApplicationEmailAddress'
          | 'CosignerApplicationPrimaryAddress'
          | 'CosignerApplicationEmployerName'
          | 'CosignerApplicationEmployerAddress'
          | 'CosignerApplicationEmployerPhoneNumber'
          | 'CosignerApplicationEmployerEmail'
          | 'CosignerApplicationPositionHeld'
          | 'CosignerApplicationEmploymentDates'
          | 'CosignerApplicationMonthlyGrossSalary'
          | 'CosignerApplicationSupervisorName'
          | 'CosignerApplicationSupervisorTitle'
          | 'CosignerApplicationAgreedTo'
          | 'CosignerApplicationAgreedBy'
          | 'CosignerApplicationOtherComments'
          | null;

        /**
         * A user defined description of the field. This value is typically displayed as
         * the form field label on the application.
         */
        FieldLabel?: string | null;

        /**
         * Indicates the fields expected input value format and/or data type. For example,
         * a field can be assigned a `FieldType` of `DateDayMonthYear` which indicates the
         * input value must be a date containing a day, month and year.
         */
        FieldType?:
          | 'TextSingleLine'
          | 'Email'
          | 'DateDayMonthYear'
          | 'Number'
          | 'DateMonthYear'
          | 'DateYear'
          | 'GroupHeading'
          | 'NumberOfBathrooms'
          | 'NumberOfBedrooms'
          | 'PhoneNumber'
          | 'SocialSecurityNumber'
          | 'TextMultipleLines'
          | 'TrueFalse'
          | 'YesNo'
          | 'Currency'
          | 'FirstName'
          | 'LastName'
          | 'DateRangeFromDate'
          | 'DateRangeToDate'
          | 'AddressCountry'
          | 'AddressStreet'
          | 'AddressCity'
          | 'AddressState'
          | 'AddressZip'
          | 'DriversLicenseNumber'
          | 'DriversLicenseState'
          | 'Attachment'
          | 'AutoScreeningCity'
          | 'AutoScreeningState'
          | null;

        /**
         * The field input value from the applicant.
         */
        Value?: string | null;
      }
    }
  }
}

export type ApplicationListResponse = Array<Application>;

export interface ApplicationRetrieveParams {
  applicantId: number;
}

export interface ApplicationUpdateParams {
  /**
   * Path param:
   */
  applicantId: number;

  /**
   * Body param: Sets the status of the application.
   */
  ApplicationStatus: 'Undecided' | 'Approved' | 'Rejected' | 'Cancelled' | 'Deferred';
}

export interface ApplicationListParams {
  /**
   * `limit` indicates the maximum number of results to be returned in the response.
   * `limit` can range between 1 and 1000 and the default is 50.
   */
  limit?: number;

  /**
   * `offset` indicates the position of the first record to return. The `offset` is
   * zero-based and the default is 0.
   */
  offset?: number;

  /**
   * `orderby` indicates the field(s) and direction to sort the results in the
   * response. See <a href="#section/API-Overview/Bulk-Request-Options">Bulk Request
   * Options</a> for more information.
   */
  orderby?: string;
}

export declare namespace Applications {
  export {
    type Application as Application,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationRetrieveParams as ApplicationRetrieveParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
  };
}
