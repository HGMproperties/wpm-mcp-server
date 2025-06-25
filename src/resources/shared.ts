// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Credit card payment settings.
 */
export interface CcPaymentsPutMessage {
  /**
   * Indicates whether credit card payments are enabled in the Buildium Resident
   * Center for all residents of this property. Note, to enable credit card payments
   * the operating bank account for the property must have credit card payments
   * provisioned.
   */
  PaymentsEnabled: boolean;
}

/**
 * Electronic payment settings.
 */
export interface EftPaymentsPutMessage {
  /**
   * Indicates whether EFT payments are enabled in the Buildium Resident Center for
   * all residents of this property. Note, to enable EFT payments the operating bank
   * account for the property must have EFT payments provisioned.
   */
  PaymentsEnabled: boolean;
}

/**
 * Offline payment settings.
 */
export interface OfflinePaymentsPutMessage {
  /**
   * Indicates whether to display the company address along with the offline payment
   * information. If `DisplayInfoInResidentCenter` is false the company address will
   * not be displayed.
   */
  DisplayCompanyAddress: boolean;

  /**
   * Indicates whether the offline payment information is displayed in the Buildium
   * Resident Center.
   */
  DisplayInfoInResidentCenter: boolean;

  /**
   * Directions for how to make offline payments. The value cannot exceed 65,535
   * characters. If `DisplayInfoInResidentCenter` is false the payment instructions
   * will not be displayed.
   */
  PaymentInstructions?: string | null;
}
