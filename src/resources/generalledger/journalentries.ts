// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GlaccountsAPI from '../glaccounts';
import * as QuickdepositsAPI from '../bankaccounts/quickdeposits';
import * as RefundsAPI from '../associations/ownershipaccounts/refunds';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Journalentries extends APIResource {
  /**
   * Creates a general journal entry.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` `Edit`
   */
  create(body: JournalentryCreateParams, options?: RequestOptions): APIPromise<GeneralLedgerTransaction> {
    return this._client.post('/v1/generalledger/journalentries', { body, ...options });
  }

  /**
   * Updates a general journal entry.
   *
   * <h4>Required permission(s):</h4><span class="permissionBlock">Accounting > General Ledger Transactions</span> - `View` `Edit`
   */
  update(
    journalEntryID: number,
    body: JournalentryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GeneralLedgerTransaction> {
    return this._client.put(path`/v1/generalledger/journalentries/${journalEntryID}`, { body, ...options });
  }
}

/**
 * This is an object that represents a financial transaction
 */
export interface GeneralLedgerTransaction {
  /**
   * A reference to a rental application.
   */
  Application?: GeneralLedgerTransaction.Application | null;

  /**
   * Check number associated with the transaction, if applicable.
   */
  CheckNumber?: string | null;

  /**
   * Date of the transaction.
   */
  Date?: string;

  /**
   * Deposit details.
   */
  DepositDetails?: GeneralLedgerTransaction.DepositDetails | null;

  /**
   * Transaction unique identifier.
   */
  Id?: number;

  /**
   * Journal associated with the transaction. The journal describes how the
   * transaction should be recorded for accounting purposes.
   */
  Journal?: GeneralLedgerTransaction.Journal | null;

  /**
   * The date and time the transaction was last updated.
   */
  LastUpdatedDateTime?: string;

  /**
   * This object represents payment details.
   */
  PaymentDetail?: GeneralLedgerTransaction.PaymentDetail | null;

  /**
   * Sum of all `Journal.Lines.Amount` entries in the transaction.
   */
  TotalAmount?: number;

  /**
   * Type of transaction that occurred
   */
  TransactionType?:
    | 'Bill'
    | 'Check'
    | 'Charge'
    | 'Payment'
    | 'Credit'
    | 'Refund'
    | 'ApplyDeposit'
    | 'ElectronicFundsTransfer'
    | 'Other'
    | 'Deposit'
    | 'GeneralJournalEntry'
    | 'OwnerContribution'
    | 'ReversePayment'
    | 'ReverseElectronicFundsTransfer'
    | 'VendorCredit'
    | 'RentalApplicationFeePayment'
    | 'ReverseRentalApplicationFeePayment'
    | 'ReverseOwnerContribution'
    | 'VendorRefund'
    | 'UnreversedPayment'
    | 'UnreversedElectronicFundsTransfer'
    | 'UnreversedOwnerContribution'
    | 'UnreversedRentalApplicationFeePayment'
    | 'ReversedEftRefund';

  /**
   * Unit agreement.
   */
  UnitAgreement?: UnitAgreement | null;

  /**
   * Unit unique identifier associated with the transaction, if applicable. Null if
   * value is not set.
   */
  UnitId?: number | null;

  /**
   * Unit number associated with the transaction, if applicable. Null if value is not
   * set.
   */
  UnitNumber?: string | null;
}

export namespace GeneralLedgerTransaction {
  /**
   * A reference to a rental application.
   */
  export interface Application {
    /**
     * A link to the application resource.
     */
    Href?: string | null;

    /**
     * Application id unique identifier.
     */
    Id?: number;
  }

  /**
   * Deposit details.
   */
  export interface DepositDetails {
    /**
     * Bank account general ledger identifier.
     */
    BankGLAccountId?: number | null;

    /**
     * Collection of payments that were included in the bank deposit transaction.
     */
    PaymentTransactions?: Array<DepositDetails.PaymentTransaction> | null;
  }

  export namespace DepositDetails {
    export interface PaymentTransaction {
      /**
       * An object that represents an accounting entity.
       */
      AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

      /**
       * Payment amount.
       */
      Amount?: number;

      /**
       * Payment transaction unique identifier.
       */
      Id?: number;
    }
  }

  /**
   * Journal associated with the transaction. The journal describes how the
   * transaction should be recorded for accounting purposes.
   */
  export interface Journal {
    /**
     * A collection of line items associated with the journal.
     */
    Lines?: Array<Journal.Line> | null;

    /**
     * Memo associated with the journal.
     */
    Memo?: string | null;
  }

  export namespace Journal {
    /**
     * This is an object that represents a line item for a journal entry.
     */
    export interface Line {
      /**
       * An object that represents an accounting entity.
       */
      AccountingEntity?: QuickdepositsAPI.AccountingEntity | null;

      /**
       * Amount of the line item.
       */
      Amount?: number;

      /**
       * A message that represents a general ledger account.
       */
      GLAccount?: GlaccountsAPI.GlAccountMessage | null;

      /**
       * Indicates whether the line item is a cash posting.
       */
      IsCashPosting?: boolean;

      /**
       * Memo for the line item.
       */
      Memo?: string | null;

      /**
       * Reference number for the line item.
       */
      ReferenceNumber?: string | null;
    }
  }

  /**
   * This object represents payment details.
   */
  export interface PaymentDetail {
    /**
     * This object represents the status for internal transactions
     */
    InternalTransactionStatus?: PaymentDetail.InternalTransactionStatus | null;

    /**
     * Whether the transaction is processed internally.
     */
    IsInternalTransaction?: boolean;

    /**
     * The payer of the transaction.
     */
    Payee?: RefundsAPI.Payee | null;

    /**
     * The payment method used for the transaction.
     */
    PaymentMethod?:
      | 'None'
      | 'Check'
      | 'Cash'
      | 'MoneyOrder'
      | 'CashierCheck'
      | 'DirectDeposit'
      | 'CreditCard'
      | 'ElectronicPayment'
      | 'RetailCash';
  }

  export namespace PaymentDetail {
    /**
     * This object represents the status for internal transactions
     */
    export interface InternalTransactionStatus {
      /**
       * Indicates whether the transaction is pending processing.
       */
      IsPending?: boolean;

      /**
       * The result code of the transaction.
       */
      ResultCode?: string | null;

      /**
       * The date the transaction was processed.
       */
      ResultDate?: string | null;
    }
  }
}

export interface JournalEntryLineSave {
  /**
   * Amount of the line item.
   */
  Amount: number;

  /**
   * The general ledger account identifier under which the line item amount will be
   * recorded. Query the General Ledger Account endpoint
   * <a href="#operation/AccountingExternalApi_GetAllGLAccounts">Get All
   * GLAccounts</a> for a listing of available accounts.
   */
  GLAccountId: number;

  /**
   * The posting type for the line item.
   */
  PostingType: 'Credit' | 'Debit';

  /**
   * Memo for the line item.
   */
  Memo?: string | null;
}

/**
 * Unit agreement.
 */
export interface UnitAgreement {
  /**
   * A link to the unit agreement resource.
   */
  Href?: string | null;

  /**
   * Unit agreement unique identifier.
   */
  Id?: number;

  /**
   * The type of unit agreement.
   */
  Type?: 'NotSet' | 'Lease' | 'OwnershipAccount';
}

export interface JournalentryCreateParams {
  /**
   * Object to represent an Accounting Entity
   */
  AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

  /**
   * Date of the general journal entry. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * A list of general journal entry lines. At least two lines are required. The
   * total amount of the debit PostingType lines must equal the total of the credit
   * PostingType lines.
   */
  Lines: Array<JournalEntryLineSave>;

  /**
   * Description of the general journal entry. Must be no longer than 240 characters.
   */
  Memo?: string | null;
}

export interface JournalentryUpdateParams {
  /**
   * Object to represent an Accounting Entity
   */
  AccountingEntity: QuickdepositsAPI.AccountingEntitySave;

  /**
   * Date of the general journal entry. The date must be formatted as YYYY-MM-DD.
   */
  Date: string;

  /**
   * A list of general journal entry lines. At least two lines are required. The
   * total amount of the debit PostingType lines must equal the total of the credit
   * PostingType lines.
   */
  Lines: Array<JournalEntryLineSave>;

  /**
   * Description of the general journal entry. Must be no longer than 240 characters.
   */
  Memo?: string | null;
}

export declare namespace Journalentries {
  export {
    type GeneralLedgerTransaction as GeneralLedgerTransaction,
    type JournalEntryLineSave as JournalEntryLineSave,
    type UnitAgreement as UnitAgreement,
    type JournalentryCreateParams as JournalentryCreateParams,
    type JournalentryUpdateParams as JournalentryUpdateParams,
  };
}
