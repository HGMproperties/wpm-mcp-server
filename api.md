# Shared

Types:

- <code><a href="./src/resources/shared.ts">CcPaymentsPutMessage</a></code>
- <code><a href="./src/resources/shared.ts">EftPaymentsPutMessage</a></code>
- <code><a href="./src/resources/shared.ts">OfflinePaymentsPutMessage</a></code>

# Applications

Types:

- <code><a href="./src/resources/applications/applications.ts">OutstandingBalancesLine</a></code>
- <code><a href="./src/resources/applications/applications.ts">ReversePaymentOtherBankCharge</a></code>
- <code><a href="./src/resources/applications/applications.ts">ApplicationListOutstandingBalancesResponse</a></code>

Methods:

- <code title="post /v1/applications/{applicationId}/autoallocatedpayments">client.applications.<a href="./src/resources/applications/applications.ts">createAutoAllocatedPayment</a>(applicationID, { ...params }) -> ApplicationTransaction</code>
- <code title="post /v1/applications/{applicationId}/reversepayments">client.applications.<a href="./src/resources/applications/applications.ts">createPaymentReversal</a>(applicationID, { ...params }) -> ApplicationTransaction</code>
- <code title="get /v1/applications/outstandingbalances">client.applications.<a href="./src/resources/applications/applications.ts">listOutstandingBalances</a>({ ...params }) -> ApplicationListOutstandingBalancesResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/applications/transactions.ts">ApplicationTransaction</a></code>
- <code><a href="./src/resources/applications/transactions.ts">Journal</a></code>
- <code><a href="./src/resources/applications/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /v1/applications/{applicationId}/transactions/{transactionId}">client.applications.transactions.<a href="./src/resources/applications/transactions.ts">retrieve</a>(transactionID, { ...params }) -> ApplicationTransaction</code>
- <code title="get /v1/applications/{applicationId}/transactions">client.applications.transactions.<a href="./src/resources/applications/transactions.ts">list</a>(applicationID, { ...params }) -> TransactionListResponse</code>

## Charges

Types:

- <code><a href="./src/resources/applications/charges.ts">Charge</a></code>
- <code><a href="./src/resources/applications/charges.ts">ChargeLineSave</a></code>
- <code><a href="./src/resources/applications/charges.ts">ChargeListResponse</a></code>

Methods:

- <code title="post /v1/applications/{applicationId}/charges">client.applications.charges.<a href="./src/resources/applications/charges.ts">create</a>(applicationID, { ...params }) -> ApplicationTransaction</code>
- <code title="get /v1/applications/{applicationId}/charges/{transactionId}">client.applications.charges.<a href="./src/resources/applications/charges.ts">retrieve</a>(transactionID, { ...params }) -> Charge</code>
- <code title="put /v1/applications/{applicationId}/charges/{transactionId}">client.applications.charges.<a href="./src/resources/applications/charges.ts">update</a>(transactionID, { ...params }) -> ApplicationTransaction</code>
- <code title="get /v1/applications/{applicationId}/charges">client.applications.charges.<a href="./src/resources/applications/charges.ts">list</a>(applicationID, { ...params }) -> ChargeListResponse</code>

## Payments

Types:

- <code><a href="./src/resources/applications/payments.ts">PaymentLineSave</a></code>

Methods:

- <code title="post /v1/applications/{applicationId}/payments">client.applications.payments.<a href="./src/resources/applications/payments.ts">create</a>(applicationID, { ...params }) -> ApplicationTransaction</code>
- <code title="put /v1/applications/{applicationId}/payments/{transactionId}">client.applications.payments.<a href="./src/resources/applications/payments.ts">update</a>(transactionID, { ...params }) -> ApplicationTransaction</code>

## Refunds

Types:

- <code><a href="./src/resources/applications/refunds.ts">Refund</a></code>

Methods:

- <code title="post /v1/applications/{applicationId}/refunds">client.applications.refunds.<a href="./src/resources/applications/refunds.ts">create</a>(applicationID, { ...params }) -> Refund</code>
- <code title="get /v1/applications/{applicationId}/refunds/{transactionId}">client.applications.refunds.<a href="./src/resources/applications/refunds.ts">retrieve</a>(transactionID, { ...params }) -> Refund</code>

# Associations

Types:

- <code><a href="./src/resources/associations/associations.ts">Address</a></code>
- <code><a href="./src/resources/associations/associations.ts">Association</a></code>
- <code><a href="./src/resources/associations/associations.ts">PropertyManager</a></code>
- <code><a href="./src/resources/associations/associations.ts">SaveAddress</a></code>
- <code><a href="./src/resources/associations/associations.ts">TaxInformation</a></code>
- <code><a href="./src/resources/associations/associations.ts">AssociationListResponse</a></code>
- <code><a href="./src/resources/associations/associations.ts">AssociationListBankLockboxDataResponse</a></code>

Methods:

- <code title="post /v1/associations">client.associations.<a href="./src/resources/associations/associations.ts">create</a>({ ...params }) -> Association</code>
- <code title="get /v1/associations/{associationId}">client.associations.<a href="./src/resources/associations/associations.ts">retrieve</a>(associationID) -> Association</code>
- <code title="put /v1/associations/{associationId}">client.associations.<a href="./src/resources/associations/associations.ts">update</a>(associationID, { ...params }) -> Association</code>
- <code title="get /v1/associations">client.associations.<a href="./src/resources/associations/associations.ts">list</a>({ ...params }) -> AssociationListResponse</code>
- <code title="post /v1/associations/{associationId}/inactivationrequest">client.associations.<a href="./src/resources/associations/associations.ts">inactivate</a>(associationID) -> void</code>
- <code title="get /v1/associations/banklockboxdata">client.associations.<a href="./src/resources/associations/associations.ts">listBankLockboxData</a>({ ...params }) -> AssociationListBankLockboxDataResponse</code>
- <code title="post /v1/associations/{associationId}/reactivationrequest">client.associations.<a href="./src/resources/associations/associations.ts">reactivate</a>(associationID) -> void</code>

## Ownershipaccounts

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">AssociationOwnershipAccount</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">OwnershipaccountListResponse</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">OwnershipaccountRetrieveOutstandingbalancesResponse</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts">client.associations.ownershipaccounts.<a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">create</a>({ ...params }) -> AssociationOwnershipAccount</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}">client.associations.ownershipaccounts.<a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">retrieve</a>(ownershipAccountID) -> AssociationOwnershipAccount</code>
- <code title="put /v1/associations/ownershipaccounts/{ownershipAccountId}">client.associations.ownershipaccounts.<a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">update</a>(ownershipAccountID, { ...params }) -> AssociationOwnershipAccount</code>
- <code title="get /v1/associations/ownershipaccounts">client.associations.ownershipaccounts.<a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">list</a>({ ...params }) -> OwnershipaccountListResponse</code>
- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/autoallocatedpayments">client.associations.ownershipaccounts.<a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">autoallocatedpayments</a>(ownershipAccountID, { ...params }) -> OwnershipAccountTransaction</code>
- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/credits">client.associations.ownershipaccounts.<a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">credits</a>(ownershipAccountID, { ...params }) -> OwnershipAccountTransaction</code>
- <code title="get /v1/associations/ownershipaccounts/outstandingbalances">client.associations.ownershipaccounts.<a href="./src/resources/associations/ownershipaccounts/ownershipaccounts.ts">retrieveOutstandingbalances</a>({ ...params }) -> OwnershipaccountRetrieveOutstandingbalancesResponse</code>

### Transactions

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/transactions.ts">OwnershipAccountTransaction</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/transactions/{transactionId}">client.associations.ownershipaccounts.transactions.<a href="./src/resources/associations/ownershipaccounts/transactions.ts">retrieve</a>(transactionID, { ...params }) -> OwnershipAccountTransaction</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/transactions">client.associations.ownershipaccounts.transactions.<a href="./src/resources/associations/ownershipaccounts/transactions.ts">list</a>(ownershipAccountID, { ...params }) -> TransactionListResponse</code>

### Architecturalrequests

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/architecturalrequests/architecturalrequests.ts">AssociationArchitecturalRequest</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/architecturalrequests/architecturalrequests.ts">CreatedByUser</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/architecturalrequests/architecturalrequests.ts">LastUpdatedByUser</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/architecturalrequests/architecturalrequests.ts">ArchitecturalrequestListResponse</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts/architecturalrequests">client.associations.ownershipaccounts.architecturalrequests.<a href="./src/resources/associations/ownershipaccounts/architecturalrequests/architecturalrequests.ts">create</a>({ ...params }) -> AssociationArchitecturalRequest</code>
- <code title="get /v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}">client.associations.ownershipaccounts.architecturalrequests.<a href="./src/resources/associations/ownershipaccounts/architecturalrequests/architecturalrequests.ts">retrieve</a>(architecturalRequestID) -> AssociationArchitecturalRequest</code>
- <code title="get /v1/associations/ownershipaccounts/architecturalrequests">client.associations.ownershipaccounts.architecturalrequests.<a href="./src/resources/associations/ownershipaccounts/architecturalrequests/architecturalrequests.ts">list</a>({ ...params }) -> ArchitecturalrequestListResponse</code>

#### Files

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/architecturalrequests/files.ts">AssociationArchitecturalRequestFile</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/architecturalrequests/files.ts">FileName</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/architecturalrequests/files.ts">FileUploadTicket</a></code>

Methods:

- <code title="get /v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}/files/{fileId}">client.associations.ownershipaccounts.architecturalrequests.files.<a href="./src/resources/associations/ownershipaccounts/architecturalrequests/files.ts">retrieve</a>(fileID, { ...params }) -> AssociationArchitecturalRequestFile</code>
- <code title="get /v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}/files">client.associations.ownershipaccounts.architecturalrequests.files.<a href="./src/resources/associations/ownershipaccounts/architecturalrequests/files.ts">list</a>(architecturalRequestID, { ...params }) -> AssociationArchitecturalRequestFile</code>
- <code title="post /v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}/files/{fileId}/downloadrequests">client.associations.ownershipaccounts.architecturalrequests.files.<a href="./src/resources/associations/ownershipaccounts/architecturalrequests/files.ts">downloadrequests</a>(fileID, { ...params }) -> FileDownload</code>
- <code title="post /v1/associations/ownershipaccounts/architecturalrequests/{architecturalRequestId}/files/uploadrequests">client.associations.ownershipaccounts.architecturalrequests.files.<a href="./src/resources/associations/ownershipaccounts/architecturalrequests/files.ts">uploadrequests</a>(architecturalRequestID, { ...params }) -> FileUploadTicket</code>

### Charges

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/charges.ts">OwnershipAccountLedgerCharge</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/charges.ts">ChargeListResponse</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/charges">client.associations.ownershipaccounts.charges.<a href="./src/resources/associations/ownershipaccounts/charges.ts">create</a>(ownershipAccountID, { ...params }) -> OwnershipAccountTransaction</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/charges/{chargeId}">client.associations.ownershipaccounts.charges.<a href="./src/resources/associations/ownershipaccounts/charges.ts">retrieve</a>(chargeID, { ...params }) -> OwnershipAccountLedgerCharge</code>
- <code title="put /v1/associations/ownershipaccounts/{ownershipAccountId}/charges/{chargeId}">client.associations.ownershipaccounts.charges.<a href="./src/resources/associations/ownershipaccounts/charges.ts">update</a>(chargeID, { ...params }) -> OwnershipAccountTransaction</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/charges">client.associations.ownershipaccounts.charges.<a href="./src/resources/associations/ownershipaccounts/charges.ts">list</a>(ownershipAccountID, { ...params }) -> ChargeListResponse</code>

### Payments

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/payments.ts">OwnershipAccountLedgerPaymentLineSave</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/payments">client.associations.ownershipaccounts.payments.<a href="./src/resources/associations/ownershipaccounts/payments.ts">create</a>(ownershipAccountID, { ...params }) -> OwnershipAccountTransaction</code>
- <code title="put /v1/associations/ownershipaccounts/{ownershipAccountId}/payments/{paymentId}">client.associations.ownershipaccounts.payments.<a href="./src/resources/associations/ownershipaccounts/payments.ts">update</a>(paymentID, { ...params }) -> OwnershipAccountTransaction</code>

### Refunds

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/refunds.ts">OwnershipAccountRefund</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/refunds.ts">Payee</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/refunds">client.associations.ownershipaccounts.refunds.<a href="./src/resources/associations/ownershipaccounts/refunds.ts">create</a>(ownershipAccountID, { ...params }) -> OwnershipAccountRefund</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/refunds/{refundId}">client.associations.ownershipaccounts.refunds.<a href="./src/resources/associations/ownershipaccounts/refunds.ts">retrieve</a>(refundID, { ...params }) -> OwnershipAccountRefund</code>

### Applieddeposits

Methods:

- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/applieddeposits">client.associations.ownershipaccounts.applieddeposits.<a href="./src/resources/associations/ownershipaccounts/applieddeposits.ts">create</a>(ownershipAccountID, { ...params }) -> OwnershipAccountTransaction</code>
- <code title="put /v1/associations/ownershipaccounts/{ownershipAccountId}/applieddeposits/{depositId}">client.associations.ownershipaccounts.applieddeposits.<a href="./src/resources/associations/ownershipaccounts/applieddeposits.ts">update</a>(depositID, { ...params }) -> OwnershipAccountTransaction</code>

### Recurringtransactions

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/recurringtransactions.ts">RecurringTransaction</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/recurringtransactions.ts">RecurringtransactionListResponse</a></code>

Methods:

- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/recurringtransactions">client.associations.ownershipaccounts.recurringtransactions.<a href="./src/resources/associations/ownershipaccounts/recurringtransactions.ts">list</a>(ownershipAccountID, { ...params }) -> RecurringtransactionListResponse</code>

### Notes

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/notes">client.associations.ownershipaccounts.notes.<a href="./src/resources/associations/ownershipaccounts/notes.ts">create</a>(ownershipAccountID, { ...params }) -> Note</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/notes/{noteId}">client.associations.ownershipaccounts.notes.<a href="./src/resources/associations/ownershipaccounts/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/associations/ownershipaccounts/{ownershipAccountId}/notes/{noteId}">client.associations.ownershipaccounts.notes.<a href="./src/resources/associations/ownershipaccounts/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/notes">client.associations.ownershipaccounts.notes.<a href="./src/resources/associations/ownershipaccounts/notes.ts">list</a>(ownershipAccountID, { ...params }) -> NoteListResponse</code>

### Partialpaymentsettings

Methods:

- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/partialpaymentsettings">client.associations.ownershipaccounts.partialpaymentsettings.<a href="./src/resources/associations/ownershipaccounts/partialpaymentsettings.ts">list</a>(ownershipAccountID) -> PartialPaymentSettingsMessage</code>
- <code title="patch /v1/associations/ownershipaccounts/{ownershipAccountId}/partialpaymentsettings">client.associations.ownershipaccounts.partialpaymentsettings.<a href="./src/resources/associations/ownershipaccounts/partialpaymentsettings.ts">patchAll</a>(ownershipAccountID, { ...params }) -> PartialPaymentSettingsMessage</code>

### Recurringcharges

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/recurringcharges.ts">ChargeRecurringTransaction</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/recurringcharges.ts">OwnershipAccountChargeRecurringTransaction</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/recurringcharges">client.associations.ownershipaccounts.recurringcharges.<a href="./src/resources/associations/ownershipaccounts/recurringcharges.ts">create</a>(ownershipAccountID, { ...params }) -> OwnershipAccountChargeRecurringTransaction</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/recurringcharges/{transactionId}">client.associations.ownershipaccounts.recurringcharges.<a href="./src/resources/associations/ownershipaccounts/recurringcharges.ts">retrieve</a>(transactionID, { ...params }) -> OwnershipAccountChargeRecurringTransaction</code>

### Recurringcredits

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/recurringcredits.ts">CreditRecurringTransaction</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/recurringcredits.ts">OwnershipAccountRecurringCredit</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/recurringcredits.ts">RecurringTransactionLine</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/recurringcredits.ts">RecurringTransactionLinePost</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/recurringcredits">client.associations.ownershipaccounts.recurringcredits.<a href="./src/resources/associations/ownershipaccounts/recurringcredits.ts">create</a>(ownershipAccountID, { ...params }) -> OwnershipAccountRecurringCredit</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/recurringcredits/{transactionId}">client.associations.ownershipaccounts.recurringcredits.<a href="./src/resources/associations/ownershipaccounts/recurringcredits.ts">retrieve</a>(transactionID, { ...params }) -> OwnershipAccountRecurringCredit</code>

### Recurringpayments

Types:

- <code><a href="./src/resources/associations/ownershipaccounts/recurringpayments.ts">OwnershipAccountRecurringPayment</a></code>
- <code><a href="./src/resources/associations/ownershipaccounts/recurringpayments.ts">PaymentRecurringTransaction</a></code>

Methods:

- <code title="post /v1/associations/ownershipaccounts/{ownershipAccountId}/recurringpayments">client.associations.ownershipaccounts.recurringpayments.<a href="./src/resources/associations/ownershipaccounts/recurringpayments.ts">create</a>(ownershipAccountID, { ...params }) -> OwnershipAccountRecurringPayment</code>
- <code title="get /v1/associations/ownershipaccounts/{ownershipAccountId}/recurringpayments/{paymentId}">client.associations.ownershipaccounts.recurringpayments.<a href="./src/resources/associations/ownershipaccounts/recurringpayments.ts">retrieve</a>(paymentID, { ...params }) -> OwnershipAccountRecurringPayment</code>

## Units

Types:

- <code><a href="./src/resources/associations/units/units.ts">AssociationUnit</a></code>
- <code><a href="./src/resources/associations/units/units.ts">UnitListResponse</a></code>

Methods:

- <code title="post /v1/associations/units">client.associations.units.<a href="./src/resources/associations/units/units.ts">create</a>({ ...params }) -> AssociationUnit</code>
- <code title="get /v1/associations/units/{unitId}">client.associations.units.<a href="./src/resources/associations/units/units.ts">retrieve</a>(unitID) -> AssociationUnit</code>
- <code title="put /v1/associations/units/{unitId}">client.associations.units.<a href="./src/resources/associations/units/units.ts">update</a>(unitID, { ...params }) -> AssociationUnit</code>
- <code title="get /v1/associations/units">client.associations.units.<a href="./src/resources/associations/units/units.ts">list</a>({ ...params }) -> UnitListResponse</code>

### Notes

Types:

- <code><a href="./src/resources/associations/units/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/associations/units/{unitId}/notes">client.associations.units.notes.<a href="./src/resources/associations/units/notes.ts">create</a>(unitID, { ...params }) -> Note</code>
- <code title="get /v1/associations/units/{unitId}/notes/{noteId}">client.associations.units.notes.<a href="./src/resources/associations/units/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/associations/units/{unitId}/notes/{noteId}">client.associations.units.notes.<a href="./src/resources/associations/units/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/associations/units/{unitId}/notes">client.associations.units.notes.<a href="./src/resources/associations/units/notes.ts">list</a>(unitID, { ...params }) -> NoteListResponse</code>

## Owners

Types:

- <code><a href="./src/resources/associations/owners/owners.ts">AssociationOwner</a></code>
- <code><a href="./src/resources/associations/owners/owners.ts">AssociationOwnerBoardTerm</a></code>
- <code><a href="./src/resources/associations/owners/owners.ts">EmergencyContact</a></code>
- <code><a href="./src/resources/associations/owners/owners.ts">PhoneNumbers</a></code>
- <code><a href="./src/resources/associations/owners/owners.ts">SaveEmergencyContact</a></code>
- <code><a href="./src/resources/associations/owners/owners.ts">OwnerListResponse</a></code>

Methods:

- <code title="post /v1/associations/owners">client.associations.owners.<a href="./src/resources/associations/owners/owners.ts">create</a>({ ...params }) -> AssociationOwner</code>
- <code title="get /v1/associations/owners/{ownerId}">client.associations.owners.<a href="./src/resources/associations/owners/owners.ts">retrieve</a>(ownerID) -> AssociationOwner</code>
- <code title="put /v1/associations/owners/{ownerId}">client.associations.owners.<a href="./src/resources/associations/owners/owners.ts">update</a>(ownerID, { ...params }) -> AssociationOwner</code>
- <code title="get /v1/associations/owners">client.associations.owners.<a href="./src/resources/associations/owners/owners.ts">list</a>({ ...params }) -> OwnerListResponse</code>

### Notes

Types:

- <code><a href="./src/resources/associations/owners/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/associations/owners/{ownerId}/notes">client.associations.owners.notes.<a href="./src/resources/associations/owners/notes.ts">create</a>(ownerID, { ...params }) -> Note</code>
- <code title="get /v1/associations/owners/{ownerId}/notes/{noteId}">client.associations.owners.notes.<a href="./src/resources/associations/owners/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/associations/owners/{ownerId}/notes/{noteId}">client.associations.owners.notes.<a href="./src/resources/associations/owners/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/associations/owners/{ownerId}/notes">client.associations.owners.notes.<a href="./src/resources/associations/owners/notes.ts">list</a>(ownerID, { ...params }) -> NoteListResponse</code>

### Units

Types:

- <code><a href="./src/resources/associations/owners/units.ts">AssociationOwnerUnitOccupancyStatus</a></code>
- <code><a href="./src/resources/associations/owners/units.ts">UnitListResponse</a></code>

Methods:

- <code title="get /v1/associations/owners/{ownerId}/units/{unitId}">client.associations.owners.units.<a href="./src/resources/associations/owners/units.ts">retrieve</a>(unitID, { ...params }) -> AssociationOwnerUnitOccupancyStatus</code>
- <code title="put /v1/associations/owners/{ownerId}/units/{unitId}">client.associations.owners.units.<a href="./src/resources/associations/owners/units.ts">update</a>(unitID, { ...params }) -> AssociationOwnerUnitOccupancyStatus</code>
- <code title="get /v1/associations/owners/{ownerId}/units">client.associations.owners.units.<a href="./src/resources/associations/owners/units.ts">list</a>(ownerID, { ...params }) -> UnitListResponse</code>

## Tenants

Types:

- <code><a href="./src/resources/associations/tenants/tenants.ts">AssociationTenant</a></code>
- <code><a href="./src/resources/associations/tenants/tenants.ts">TenantListResponse</a></code>

Methods:

- <code title="post /v1/associations/tenants">client.associations.tenants.<a href="./src/resources/associations/tenants/tenants.ts">create</a>({ ...params }) -> AssociationTenant</code>
- <code title="get /v1/associations/tenants/{tenantId}">client.associations.tenants.<a href="./src/resources/associations/tenants/tenants.ts">retrieve</a>(tenantID) -> AssociationTenant</code>
- <code title="put /v1/associations/tenants/{tenantId}">client.associations.tenants.<a href="./src/resources/associations/tenants/tenants.ts">update</a>(tenantID, { ...params }) -> AssociationTenant</code>
- <code title="get /v1/associations/tenants">client.associations.tenants.<a href="./src/resources/associations/tenants/tenants.ts">list</a>({ ...params }) -> TenantListResponse</code>

### Notes

Types:

- <code><a href="./src/resources/associations/tenants/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/associations/tenants/{tenantId}/notes">client.associations.tenants.notes.<a href="./src/resources/associations/tenants/notes.ts">create</a>(tenantID, { ...params }) -> Note</code>
- <code title="get /v1/associations/tenants/{tenantId}/notes/{noteId}">client.associations.tenants.notes.<a href="./src/resources/associations/tenants/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/associations/tenants/{tenantId}/notes/{noteId}">client.associations.tenants.notes.<a href="./src/resources/associations/tenants/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/associations/tenants/{tenantId}/notes">client.associations.tenants.notes.<a href="./src/resources/associations/tenants/notes.ts">list</a>(tenantID, { ...params }) -> NoteListResponse</code>

## Boardmembers

Types:

- <code><a href="./src/resources/associations/boardmembers.ts">AssociationBoardMember</a></code>
- <code><a href="./src/resources/associations/boardmembers.ts">BoardmemberListResponse</a></code>

Methods:

- <code title="post /v1/associations/{associationId}/boardmembers">client.associations.boardmembers.<a href="./src/resources/associations/boardmembers.ts">create</a>(associationID, { ...params }) -> AssociationBoardMember</code>
- <code title="get /v1/associations/{associationId}/boardmembers/{boardMemberId}">client.associations.boardmembers.<a href="./src/resources/associations/boardmembers.ts">retrieve</a>(boardMemberID, { ...params }) -> AssociationBoardMember</code>
- <code title="put /v1/associations/{associationId}/boardmembers/{boardMemberId}">client.associations.boardmembers.<a href="./src/resources/associations/boardmembers.ts">update</a>(boardMemberID, { ...params }) -> AssociationBoardMember</code>
- <code title="get /v1/associations/{associationId}/boardmembers">client.associations.boardmembers.<a href="./src/resources/associations/boardmembers.ts">list</a>(associationID, { ...params }) -> BoardmemberListResponse</code>
- <code title="delete /v1/associations/{associationId}/boardmembers/{boardMemberId}">client.associations.boardmembers.<a href="./src/resources/associations/boardmembers.ts">delete</a>(boardMemberID, { ...params }) -> void</code>

## Epaysettings

Types:

- <code><a href="./src/resources/associations/epaysettings.ts">EPaySettings</a></code>
- <code><a href="./src/resources/associations/epaysettings.ts">EPaySettingsPut</a></code>

Methods:

- <code title="get /v1/associations/{associationId}/epaysettings">client.associations.epaysettings.<a href="./src/resources/associations/epaysettings.ts">retrieve</a>(associationID) -> EPaySettings</code>
- <code title="put /v1/associations/{associationId}/epaysettings">client.associations.epaysettings.<a href="./src/resources/associations/epaysettings.ts">update</a>(associationID, { ...params }) -> EPaySettings</code>

## Meterreadings

Types:

- <code><a href="./src/resources/associations/meterreadings/meterreadings.ts">MeterReading</a></code>
- <code><a href="./src/resources/associations/meterreadings/meterreadings.ts">MeterreadingListResponse</a></code>

Methods:

- <code title="get /v1/associations/{associationId}/meterreadings">client.associations.meterreadings.<a href="./src/resources/associations/meterreadings/meterreadings.ts">list</a>(associationID, { ...params }) -> MeterreadingListResponse</code>

### Summary

Types:

- <code><a href="./src/resources/associations/meterreadings/summary.ts">MeterReadingDetails</a></code>
- <code><a href="./src/resources/associations/meterreadings/summary.ts">MeterReadingDetailsPut</a></code>

Methods:

- <code title="put /v1/associations/{associationId}/meterreadings/summary">client.associations.meterreadings.summary.<a href="./src/resources/associations/meterreadings/summary.ts">update</a>(associationID, { ...params }) -> MeterReadingDetails</code>
- <code title="get /v1/associations/{associationId}/meterreadings/summary">client.associations.meterreadings.summary.<a href="./src/resources/associations/meterreadings/summary.ts">list</a>(associationID, { ...params }) -> MeterReadingDetails</code>
- <code title="delete /v1/associations/{associationId}/meterreadings/summary">client.associations.meterreadings.summary.<a href="./src/resources/associations/meterreadings/summary.ts">delete</a>(associationID, { ...params }) -> void</code>

## Notes

Types:

- <code><a href="./src/resources/associations/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/associations/{associationId}/notes">client.associations.notes.<a href="./src/resources/associations/notes.ts">create</a>(associationID, { ...params }) -> Note</code>
- <code title="get /v1/associations/{associationId}/notes/{noteId}">client.associations.notes.<a href="./src/resources/associations/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/associations/{associationId}/notes/{noteId}">client.associations.notes.<a href="./src/resources/associations/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/associations/{associationId}/notes">client.associations.notes.<a href="./src/resources/associations/notes.ts">list</a>(associationID, { ...params }) -> NoteListResponse</code>

## Vendors

Types:

- <code><a href="./src/resources/associations/vendors.ts">AssociationPreferredVendor</a></code>
- <code><a href="./src/resources/associations/vendors.ts">VendorUpdateResponse</a></code>
- <code><a href="./src/resources/associations/vendors.ts">VendorListResponse</a></code>

Methods:

- <code title="put /v1/associations/{associationId}/vendors">client.associations.vendors.<a href="./src/resources/associations/vendors.ts">update</a>(associationID, { ...params }) -> VendorUpdateResponse</code>
- <code title="get /v1/associations/{associationId}/vendors">client.associations.vendors.<a href="./src/resources/associations/vendors.ts">list</a>(associationID, { ...params }) -> VendorListResponse</code>

## Appliances

Types:

- <code><a href="./src/resources/associations/appliances/appliances.ts">Appliance</a></code>
- <code><a href="./src/resources/associations/appliances/appliances.ts">ApplianceListResponse</a></code>

Methods:

- <code title="post /v1/associations/appliances">client.associations.appliances.<a href="./src/resources/associations/appliances/appliances.ts">create</a>({ ...params }) -> Appliance</code>
- <code title="get /v1/associations/appliances/{applianceId}">client.associations.appliances.<a href="./src/resources/associations/appliances/appliances.ts">retrieve</a>(applianceID) -> Appliance</code>
- <code title="put /v1/associations/appliances/{applianceId}">client.associations.appliances.<a href="./src/resources/associations/appliances/appliances.ts">update</a>(applianceID, { ...params }) -> Appliance</code>
- <code title="get /v1/associations/appliances">client.associations.appliances.<a href="./src/resources/associations/appliances/appliances.ts">list</a>({ ...params }) -> ApplianceListResponse</code>
- <code title="delete /v1/associations/appliances/{applianceId}">client.associations.appliances.<a href="./src/resources/associations/appliances/appliances.ts">delete</a>(applianceID) -> void</code>

### Servicehistory

Types:

- <code><a href="./src/resources/associations/appliances/servicehistory.ts">ServiceHistory</a></code>
- <code><a href="./src/resources/associations/appliances/servicehistory.ts">ServicehistoryListResponse</a></code>

Methods:

- <code title="post /v1/associations/appliances/{applianceId}/servicehistory">client.associations.appliances.servicehistory.<a href="./src/resources/associations/appliances/servicehistory.ts">create</a>(applianceID, { ...params }) -> ServiceHistory</code>
- <code title="get /v1/associations/appliances/{applianceId}/servicehistory/{serviceHistoryId}">client.associations.appliances.servicehistory.<a href="./src/resources/associations/appliances/servicehistory.ts">retrieve</a>(serviceHistoryID, { ...params }) -> ServiceHistory</code>
- <code title="get /v1/associations/appliances/{applianceId}/servicehistory">client.associations.appliances.servicehistory.<a href="./src/resources/associations/appliances/servicehistory.ts">list</a>(applianceID, { ...params }) -> ServicehistoryListResponse</code>

# Files

Types:

- <code><a href="./src/resources/files/files.ts">File</a></code>
- <code><a href="./src/resources/files/files.ts">FileDownload</a></code>
- <code><a href="./src/resources/files/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/files/{fileId}">client.files.<a href="./src/resources/files/files.ts">retrieve</a>(fileID) -> File</code>
- <code title="put /v1/files/{fileId}">client.files.<a href="./src/resources/files/files.ts">update</a>(fileID, { ...params }) -> File</code>
- <code title="get /v1/files">client.files.<a href="./src/resources/files/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="post /v1/files/uploadrequests">client.files.<a href="./src/resources/files/files.ts">createUploadRequest</a>({ ...params }) -> FileUploadTicket</code>
- <code title="post /v1/files/{fileId}/downloadrequest">client.files.<a href="./src/resources/files/files.ts">requestDownload</a>(fileID) -> FileDownload</code>

## Sharing

Types:

- <code><a href="./src/resources/files/sharing.ts">FileSharing</a></code>

Methods:

- <code title="get /v1/files/{fileId}/sharing">client.files.sharing.<a href="./src/resources/files/sharing.ts">retrieve</a>(fileID) -> FileSharing</code>
- <code title="put /v1/files/{fileId}/sharing">client.files.sharing.<a href="./src/resources/files/sharing.ts">update</a>(fileID, { ...params }) -> FileSharing</code>

## Categories

Types:

- <code><a href="./src/resources/files/categories.ts">FileCategory</a></code>
- <code><a href="./src/resources/files/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="post /v1/files/categories">client.files.categories.<a href="./src/resources/files/categories.ts">create</a>({ ...params }) -> FileCategory</code>
- <code title="get /v1/files/categories/{fileCategoryId}">client.files.categories.<a href="./src/resources/files/categories.ts">retrieve</a>(fileCategoryID) -> FileCategory</code>
- <code title="put /v1/files/categories/{fileCategoryId}">client.files.categories.<a href="./src/resources/files/categories.ts">update</a>(fileCategoryID, { ...params }) -> FileCategory</code>
- <code title="get /v1/files/categories">client.files.categories.<a href="./src/resources/files/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>

# Leases

Types:

- <code><a href="./src/resources/leases/leases.ts">Lease</a></code>
- <code><a href="./src/resources/leases/leases.ts">LeaseCosigner</a></code>
- <code><a href="./src/resources/leases/leases.ts">LeaseRentChargePostMessage</a></code>
- <code><a href="./src/resources/leases/leases.ts">LeaseRentForPostMessage</a></code>
- <code><a href="./src/resources/leases/leases.ts">LeaseListResponse</a></code>
- <code><a href="./src/resources/leases/leases.ts">LeaseListOutstandingBalancesResponse</a></code>
- <code><a href="./src/resources/leases/leases.ts">LeaseListRenewalHistoryResponse</a></code>

Methods:

- <code title="post /v1/leases">client.leases.<a href="./src/resources/leases/leases.ts">create</a>({ ...params }) -> Lease</code>
- <code title="get /v1/leases/{leaseId}">client.leases.<a href="./src/resources/leases/leases.ts">retrieve</a>(leaseID) -> Lease</code>
- <code title="put /v1/leases/{leaseId}">client.leases.<a href="./src/resources/leases/leases.ts">update</a>(leaseID, { ...params }) -> Lease</code>
- <code title="get /v1/leases">client.leases.<a href="./src/resources/leases/leases.ts">list</a>({ ...params }) -> LeaseListResponse</code>
- <code title="post /v1/leases/{leaseId}/autoallocatedpayments">client.leases.<a href="./src/resources/leases/leases.ts">createAutoallocatedPayment</a>(leaseID, { ...params }) -> LeaseTransaction</code>
- <code title="post /v1/leases/{leaseId}/credits">client.leases.<a href="./src/resources/leases/leases.ts">createCredit</a>(leaseID, { ...params }) -> LeaseTransaction</code>
- <code title="post /v1/leases/{leaseId}/reversepayments">client.leases.<a href="./src/resources/leases/leases.ts">createPaymentReversal</a>(leaseID, { ...params }) -> LeaseTransaction</code>
- <code title="get /v1/leases/outstandingbalances">client.leases.<a href="./src/resources/leases/leases.ts">listOutstandingBalances</a>({ ...params }) -> LeaseListOutstandingBalancesResponse</code>
- <code title="get /v1/leases/renewalhistory">client.leases.<a href="./src/resources/leases/leases.ts">listRenewalHistory</a>({ ...params }) -> LeaseListRenewalHistoryResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/leases/transactions.ts">LeaseTransaction</a></code>
- <code><a href="./src/resources/leases/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /v1/leases/{leaseId}/transactions/{transactionId}">client.leases.transactions.<a href="./src/resources/leases/transactions.ts">retrieve</a>(transactionID, { ...params }) -> LeaseTransaction</code>
- <code title="get /v1/leases/{leaseId}/transactions">client.leases.transactions.<a href="./src/resources/leases/transactions.ts">list</a>(leaseID, { ...params }) -> TransactionListResponse</code>

## Charges

Types:

- <code><a href="./src/resources/leases/charges.ts">LeaseCharge</a></code>
- <code><a href="./src/resources/leases/charges.ts">LeaseChargeLine</a></code>
- <code><a href="./src/resources/leases/charges.ts">ChargeCreateResponse</a></code>
- <code><a href="./src/resources/leases/charges.ts">ChargeListResponse</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/charges">client.leases.charges.<a href="./src/resources/leases/charges.ts">create</a>(leaseID, { ...params }) -> ChargeCreateResponse</code>
- <code title="get /v1/leases/{leaseId}/charges/{chargeId}">client.leases.charges.<a href="./src/resources/leases/charges.ts">retrieve</a>(chargeID, { ...params }) -> LeaseCharge</code>
- <code title="put /v1/leases/{leaseId}/charges/{chargeId}">client.leases.charges.<a href="./src/resources/leases/charges.ts">update</a>(chargeID, { ...params }) -> LeaseTransaction</code>
- <code title="get /v1/leases/{leaseId}/charges">client.leases.charges.<a href="./src/resources/leases/charges.ts">list</a>(leaseID, { ...params }) -> ChargeListResponse</code>

## Moveouts

Types:

- <code><a href="./src/resources/leases/moveouts.ts">LeaseMoveOutData</a></code>
- <code><a href="./src/resources/leases/moveouts.ts">MoveoutListResponse</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/moveouts">client.leases.moveouts.<a href="./src/resources/leases/moveouts.ts">create</a>(leaseID, { ...params }) -> LeaseMoveOutData</code>
- <code title="get /v1/leases/{leaseId}/moveouts/{tenantId}">client.leases.moveouts.<a href="./src/resources/leases/moveouts.ts">retrieve</a>(tenantID, { ...params }) -> LeaseMoveOutData</code>
- <code title="get /v1/leases/{leaseId}/moveouts">client.leases.moveouts.<a href="./src/resources/leases/moveouts.ts">list</a>(leaseID, { ...params }) -> MoveoutListResponse</code>
- <code title="delete /v1/leases/{leaseId}/moveouts/{tenantId}">client.leases.moveouts.<a href="./src/resources/leases/moveouts.ts">delete</a>(tenantID, { ...params }) -> void</code>

## Payments

Types:

- <code><a href="./src/resources/leases/payments.ts">LeaseLedgerPaymentLine</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/payments">client.leases.payments.<a href="./src/resources/leases/payments.ts">create</a>(leaseID, { ...params }) -> LeaseTransaction</code>
- <code title="put /v1/leases/{leaseId}/payments/{paymentId}">client.leases.payments.<a href="./src/resources/leases/payments.ts">update</a>(paymentID, { ...params }) -> LeaseTransaction</code>

## Notes

Types:

- <code><a href="./src/resources/leases/notes.ts">Note</a></code>
- <code><a href="./src/resources/leases/notes.ts">NotePost</a></code>
- <code><a href="./src/resources/leases/notes.ts">NotePut</a></code>
- <code><a href="./src/resources/leases/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/notes">client.leases.notes.<a href="./src/resources/leases/notes.ts">create</a>(leaseID, { ...params }) -> Note</code>
- <code title="get /v1/leases/{leaseId}/notes/{noteId}">client.leases.notes.<a href="./src/resources/leases/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/leases/{leaseId}/notes/{noteId}">client.leases.notes.<a href="./src/resources/leases/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/leases/{leaseId}/notes">client.leases.notes.<a href="./src/resources/leases/notes.ts">list</a>(leaseID, { ...params }) -> NoteListResponse</code>

## Refunds

Types:

- <code><a href="./src/resources/leases/refunds.ts">LeaseLedgerRefund</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/refunds">client.leases.refunds.<a href="./src/resources/leases/refunds.ts">create</a>(leaseID, { ...params }) -> LeaseLedgerRefund</code>
- <code title="get /v1/leases/{leaseId}/refunds/{refundId}">client.leases.refunds.<a href="./src/resources/leases/refunds.ts">retrieve</a>(refundID, { ...params }) -> LeaseLedgerRefund</code>

## Renewals

Types:

- <code><a href="./src/resources/leases/renewals.ts">LeaseRenewal</a></code>
- <code><a href="./src/resources/leases/renewals.ts">RenewalListResponse</a></code>
- <code><a href="./src/resources/leases/renewals.ts">RenewalListUpcomingResponse</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/renewals">client.leases.renewals.<a href="./src/resources/leases/renewals.ts">create</a>(leaseID, { ...params }) -> LeaseRenewal</code>
- <code title="get /v1/leases/{leaseId}/renewals/{renewalId}">client.leases.renewals.<a href="./src/resources/leases/renewals.ts">retrieve</a>(renewalID, { ...params }) -> LeaseRenewal</code>
- <code title="get /v1/leases/{leaseId}/renewals">client.leases.renewals.<a href="./src/resources/leases/renewals.ts">list</a>(leaseID, { ...params }) -> RenewalListResponse</code>
- <code title="get /v1/leases/renewals">client.leases.renewals.<a href="./src/resources/leases/renewals.ts">listUpcoming</a>({ ...params }) -> RenewalListUpcomingResponse</code>

## Applieddeposits

Methods:

- <code title="post /v1/leases/{leaseId}/applieddeposits">client.leases.applieddeposits.<a href="./src/resources/leases/applieddeposits.ts">create</a>(leaseID, { ...params }) -> LeaseTransaction</code>
- <code title="put /v1/leases/{leaseId}/applieddeposits/{depositId}">client.leases.applieddeposits.<a href="./src/resources/leases/applieddeposits.ts">update</a>(depositID, { ...params }) -> LeaseTransaction</code>

## Recurringtransactions

Types:

- <code><a href="./src/resources/leases/recurringtransactions.ts">RecurringtransactionListResponse</a></code>
- <code><a href="./src/resources/leases/recurringtransactions.ts">RecurringtransactionListAllResponse</a></code>

Methods:

- <code title="get /v1/leases/{leaseId}/recurringtransactions">client.leases.recurringtransactions.<a href="./src/resources/leases/recurringtransactions.ts">list</a>(leaseID, { ...params }) -> RecurringtransactionListResponse</code>
- <code title="get /v1/leases/recurringtransactions">client.leases.recurringtransactions.<a href="./src/resources/leases/recurringtransactions.ts">listAll</a>({ ...params }) -> RecurringtransactionListAllResponse</code>

## Epaysettings

Methods:

- <code title="get /v1/leases/{leaseId}/epaysettings">client.leases.epaysettings.<a href="./src/resources/leases/epaysettings.ts">retrieve</a>(leaseID) -> EPaySettings</code>
- <code title="put /v1/leases/{leaseId}/epaysettings">client.leases.epaysettings.<a href="./src/resources/leases/epaysettings.ts">update</a>(leaseID, { ...params }) -> EPaySettings</code>

## Partialpaymentsettings

Methods:

- <code title="get /v1/leases/{leaseId}/partialpaymentsettings">client.leases.partialpaymentsettings.<a href="./src/resources/leases/partialpaymentsettings.ts">retrieve</a>(leaseID) -> PartialPaymentSettingsMessage</code>
- <code title="patch /v1/leases/{leaseId}/partialpaymentsettings">client.leases.partialpaymentsettings.<a href="./src/resources/leases/partialpaymentsettings.ts">update</a>(leaseID, { ...params }) -> PartialPaymentSettingsMessage</code>

## Recurringcharges

Types:

- <code><a href="./src/resources/leases/recurringcharges.ts">LeaseChargeRecurringTransaction</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/recurringcharges">client.leases.recurringcharges.<a href="./src/resources/leases/recurringcharges.ts">create</a>(leaseID, { ...params }) -> LeaseChargeRecurringTransaction</code>
- <code title="get /v1/leases/{leaseId}/recurringcharges/{transactionId}">client.leases.recurringcharges.<a href="./src/resources/leases/recurringcharges.ts">retrieve</a>(transactionID, { ...params }) -> LeaseChargeRecurringTransaction</code>

## Recurringcredits

Types:

- <code><a href="./src/resources/leases/recurringcredits.ts">LeaseRecurringCredit</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/recurringcredits">client.leases.recurringcredits.<a href="./src/resources/leases/recurringcredits.ts">create</a>(leaseID, { ...params }) -> LeaseRecurringCredit</code>
- <code title="get /v1/leases/{leaseId}/recurringcredits/{transactionId}">client.leases.recurringcredits.<a href="./src/resources/leases/recurringcredits.ts">retrieve</a>(transactionID, { ...params }) -> LeaseRecurringCredit</code>

## Recurringpayments

Types:

- <code><a href="./src/resources/leases/recurringpayments.ts">LeaseRecurringPayment</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/recurringpayments">client.leases.recurringpayments.<a href="./src/resources/leases/recurringpayments.ts">create</a>(leaseID, { ...params }) -> LeaseRecurringPayment</code>
- <code title="get /v1/leases/{leaseId}/recurringpayments/{paymentId}">client.leases.recurringpayments.<a href="./src/resources/leases/recurringpayments.ts">retrieve</a>(paymentID, { ...params }) -> LeaseRecurringPayment</code>

## Rent

Types:

- <code><a href="./src/resources/leases/rent.ts">LeaseRentCharge</a></code>
- <code><a href="./src/resources/leases/rent.ts">LeaseRentMessage</a></code>
- <code><a href="./src/resources/leases/rent.ts">RentRetrieveResponse</a></code>
- <code><a href="./src/resources/leases/rent.ts">RentRetrieveAllResponse</a></code>

Methods:

- <code title="post /v1/leases/{leaseId}/rent">client.leases.rent.<a href="./src/resources/leases/rent.ts">create</a>(leaseID, { ...params }) -> LeaseRentMessage</code>
- <code title="get /v1/leases/{leaseId}/rent">client.leases.rent.<a href="./src/resources/leases/rent.ts">retrieve</a>(leaseID, { ...params }) -> RentRetrieveResponse</code>
- <code title="put /v1/leases/{leaseId}/rent/{rentId}">client.leases.rent.<a href="./src/resources/leases/rent.ts">update</a>(rentID, { ...params }) -> LeaseRentMessage</code>
- <code title="get /v1/leases/rent">client.leases.rent.<a href="./src/resources/leases/rent.ts">retrieveAll</a>({ ...params }) -> RentRetrieveAllResponse</code>

## Rentersinsurance

Types:

- <code><a href="./src/resources/leases/rentersinsurance.ts">RentersInsurancePolicy</a></code>
- <code><a href="./src/resources/leases/rentersinsurance.ts">RentersinsuranceRetrieveAllResponse</a></code>

Methods:

- <code title="get /v1/leases/{leaseId}/rentersinsurance/{policyId}">client.leases.rentersinsurance.<a href="./src/resources/leases/rentersinsurance.ts">retrieve</a>(policyID, { ...params }) -> RentersInsurancePolicy</code>
- <code title="get /v1/leases/{leaseId}/rentersinsurance">client.leases.rentersinsurance.<a href="./src/resources/leases/rentersinsurance.ts">retrieveAll</a>(leaseID, { ...params }) -> RentersinsuranceRetrieveAllResponse</code>

## Tenants

Types:

- <code><a href="./src/resources/leases/tenants/tenants.ts">RentalTenantPut</a></code>
- <code><a href="./src/resources/leases/tenants/tenants.ts">Tenant</a></code>
- <code><a href="./src/resources/leases/tenants/tenants.ts">TenantRetrieveAllResponse</a></code>

Methods:

- <code title="post /v1/leases/tenants">client.leases.tenants.<a href="./src/resources/leases/tenants/tenants.ts">create</a>({ ...params }) -> Tenant</code>
- <code title="get /v1/leases/tenants/{tenantId}">client.leases.tenants.<a href="./src/resources/leases/tenants/tenants.ts">retrieve</a>(tenantID) -> Tenant</code>
- <code title="put /v1/leases/tenants/{tenantId}">client.leases.tenants.<a href="./src/resources/leases/tenants/tenants.ts">update</a>(tenantID, { ...params }) -> Tenant</code>
- <code title="get /v1/leases/tenants">client.leases.tenants.<a href="./src/resources/leases/tenants/tenants.ts">retrieveAll</a>({ ...params }) -> TenantRetrieveAllResponse</code>

### Notes

Types:

- <code><a href="./src/resources/leases/tenants/notes.ts">NoteRetrieveAllResponse</a></code>

Methods:

- <code title="post /v1/leases/tenants/{tenantId}/notes">client.leases.tenants.notes.<a href="./src/resources/leases/tenants/notes.ts">create</a>(tenantID, { ...params }) -> Note</code>
- <code title="get /v1/leases/tenants/{tenantId}/notes/{noteId}">client.leases.tenants.notes.<a href="./src/resources/leases/tenants/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/leases/tenants/{tenantId}/notes/{noteId}">client.leases.tenants.notes.<a href="./src/resources/leases/tenants/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/leases/tenants/{tenantId}/notes">client.leases.tenants.notes.<a href="./src/resources/leases/tenants/notes.ts">retrieveAll</a>(tenantID, { ...params }) -> NoteRetrieveAllResponse</code>

# Rentals

Types:

- <code><a href="./src/resources/rentals/rentals.ts">Rental</a></code>
- <code><a href="./src/resources/rentals/rentals.ts">RentalListResponse</a></code>

Methods:

- <code title="post /v1/rentals">client.rentals.<a href="./src/resources/rentals/rentals.ts">create</a>({ ...params }) -> Rental</code>
- <code title="get /v1/rentals/{propertyId}">client.rentals.<a href="./src/resources/rentals/rentals.ts">retrieve</a>(propertyID) -> Rental</code>
- <code title="put /v1/rentals/{propertyId}">client.rentals.<a href="./src/resources/rentals/rentals.ts">update</a>(propertyID, { ...params }) -> Rental</code>
- <code title="get /v1/rentals">client.rentals.<a href="./src/resources/rentals/rentals.ts">list</a>({ ...params }) -> RentalListResponse</code>
- <code title="post /v1/rentals/{propertyId}/inactivationrequest">client.rentals.<a href="./src/resources/rentals/rentals.ts">inactivate</a>(propertyID) -> void</code>
- <code title="post /v1/rentals/{propertyId}/reactivationrequest">client.rentals.<a href="./src/resources/rentals/rentals.ts">reactivate</a>(propertyID) -> void</code>

## Units

Types:

- <code><a href="./src/resources/rentals/units/units.ts">RentalUnit</a></code>
- <code><a href="./src/resources/rentals/units/units.ts">UnitListResponse</a></code>
- <code><a href="./src/resources/rentals/units/units.ts">UnitRetrieveListingsResponse</a></code>

Methods:

- <code title="post /v1/rentals/units">client.rentals.units.<a href="./src/resources/rentals/units/units.ts">create</a>({ ...params }) -> RentalUnit</code>
- <code title="get /v1/rentals/units/{unitId}">client.rentals.units.<a href="./src/resources/rentals/units/units.ts">retrieve</a>(unitID) -> RentalUnit</code>
- <code title="put /v1/rentals/units/{unitId}">client.rentals.units.<a href="./src/resources/rentals/units/units.ts">update</a>(unitID, { ...params }) -> RentalUnit</code>
- <code title="get /v1/rentals/units">client.rentals.units.<a href="./src/resources/rentals/units/units.ts">list</a>({ ...params }) -> UnitListResponse</code>
- <code title="get /v1/rentals/units/listings">client.rentals.units.<a href="./src/resources/rentals/units/units.ts">retrieveListings</a>({ ...params }) -> UnitRetrieveListingsResponse</code>

### Listing

Types:

- <code><a href="./src/resources/rentals/units/listing.ts">Listing</a></code>
- <code><a href="./src/resources/rentals/units/listing.ts">ListingFile</a></code>

Methods:

- <code title="put /v1/rentals/units/{unitId}/listing">client.rentals.units.listing.<a href="./src/resources/rentals/units/listing.ts">create</a>(unitID, { ...params }) -> Listing</code>
- <code title="get /v1/rentals/units/{unitId}/listing">client.rentals.units.listing.<a href="./src/resources/rentals/units/listing.ts">list</a>(unitID) -> Listing</code>
- <code title="delete /v1/rentals/units/{unitId}/listing">client.rentals.units.listing.<a href="./src/resources/rentals/units/listing.ts">deleteAll</a>(unitID) -> void</code>

### Listingcontacts

Types:

- <code><a href="./src/resources/rentals/units/listingcontacts.ts">ListingContact</a></code>
- <code><a href="./src/resources/rentals/units/listingcontacts.ts">ListingContactSave</a></code>
- <code><a href="./src/resources/rentals/units/listingcontacts.ts">ListingcontactListResponse</a></code>

Methods:

- <code title="post /v1/rentals/units/listingcontacts">client.rentals.units.listingcontacts.<a href="./src/resources/rentals/units/listingcontacts.ts">create</a>({ ...params }) -> ListingContact</code>
- <code title="get /v1/rentals/units/listingcontacts/{listingContactId}">client.rentals.units.listingcontacts.<a href="./src/resources/rentals/units/listingcontacts.ts">retrieve</a>(listingContactID) -> ListingContact</code>
- <code title="put /v1/rentals/units/listingcontacts/{listingContactId}">client.rentals.units.listingcontacts.<a href="./src/resources/rentals/units/listingcontacts.ts">update</a>(listingContactID, { ...params }) -> ListingContact</code>
- <code title="get /v1/rentals/units/listingcontacts">client.rentals.units.listingcontacts.<a href="./src/resources/rentals/units/listingcontacts.ts">list</a>({ ...params }) -> ListingcontactListResponse</code>

### Amenities

Types:

- <code><a href="./src/resources/rentals/units/amenities.ts">RentalUnitFeatures</a></code>

Methods:

- <code title="put /v1/rentals/units/{unitId}/amenities">client.rentals.units.amenities.<a href="./src/resources/rentals/units/amenities.ts">create</a>(unitID, { ...params }) -> RentalUnitFeatures</code>
- <code title="get /v1/rentals/units/{unitId}/amenities">client.rentals.units.amenities.<a href="./src/resources/rentals/units/amenities.ts">list</a>(unitID) -> RentalUnitFeatures</code>

### Images

Types:

- <code><a href="./src/resources/rentals/units/images.ts">RentalUnitImage</a></code>
- <code><a href="./src/resources/rentals/units/images.ts">ImageListResponse</a></code>
- <code><a href="./src/resources/rentals/units/images.ts">ImageUpdateOrderResponse</a></code>

Methods:

- <code title="get /v1/rentals/units/{unitId}/images/{imageId}">client.rentals.units.images.<a href="./src/resources/rentals/units/images.ts">retrieve</a>(imageID, { ...params }) -> RentalUnitImage</code>
- <code title="put /v1/rentals/units/{unitId}/images/{imageId}">client.rentals.units.images.<a href="./src/resources/rentals/units/images.ts">update</a>(imageID, { ...params }) -> RentalImage</code>
- <code title="get /v1/rentals/units/{unitId}/images">client.rentals.units.images.<a href="./src/resources/rentals/units/images.ts">list</a>(unitID, { ...params }) -> ImageListResponse</code>
- <code title="delete /v1/rentals/units/{unitId}/images/{imageId}">client.rentals.units.images.<a href="./src/resources/rentals/units/images.ts">delete</a>(imageID, { ...params }) -> void</code>
- <code title="post /v1/rentals/units/{unitId}/images/{imageId}/downloadrequests">client.rentals.units.images.<a href="./src/resources/rentals/units/images.ts">downloadrequests</a>(imageID, { ...params }) -> FileDownload</code>
- <code title="put /v1/rentals/units/{unitId}/images/order">client.rentals.units.images.<a href="./src/resources/rentals/units/images.ts">updateOrder</a>(unitID, { ...params }) -> ImageUpdateOrderResponse</code>
- <code title="post /v1/rentals/units/{unitId}/images/uploadrequests">client.rentals.units.images.<a href="./src/resources/rentals/units/images.ts">uploadrequests</a>(unitID, { ...params }) -> FileUploadTicket</code>
- <code title="post /v1/rentals/units/{unitId}/images/videolinkrequests">client.rentals.units.images.<a href="./src/resources/rentals/units/images.ts">videolinkrequests</a>(unitID, { ...params }) -> RentalUnitImage</code>

### Notes

Types:

- <code><a href="./src/resources/rentals/units/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/rentals/units/{unitId}/notes">client.rentals.units.notes.<a href="./src/resources/rentals/units/notes.ts">create</a>(unitID, { ...params }) -> Note</code>
- <code title="get /v1/rentals/units/{unitId}/notes/{noteId}">client.rentals.units.notes.<a href="./src/resources/rentals/units/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/rentals/units/{unitId}/notes/{noteId}">client.rentals.units.notes.<a href="./src/resources/rentals/units/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/rentals/units/{unitId}/notes">client.rentals.units.notes.<a href="./src/resources/rentals/units/notes.ts">list</a>(unitID, { ...params }) -> NoteListResponse</code>

## Vendors

Types:

- <code><a href="./src/resources/rentals/vendors.ts">RentalPreferredVendor</a></code>
- <code><a href="./src/resources/rentals/vendors.ts">VendorCreateResponse</a></code>
- <code><a href="./src/resources/rentals/vendors.ts">VendorListResponse</a></code>

Methods:

- <code title="put /v1/rentals/{propertyId}/vendors">client.rentals.vendors.<a href="./src/resources/rentals/vendors.ts">create</a>(propertyID, { ...params }) -> VendorCreateResponse</code>
- <code title="get /v1/rentals/{propertyId}/vendors">client.rentals.vendors.<a href="./src/resources/rentals/vendors.ts">list</a>(propertyID, { ...params }) -> VendorListResponse</code>

## Amenities

Types:

- <code><a href="./src/resources/rentals/amenities.ts">RentalFeatures</a></code>

Methods:

- <code title="put /v1/rentals/{propertyId}/amenities">client.rentals.amenities.<a href="./src/resources/rentals/amenities.ts">create</a>(propertyID, { ...params }) -> RentalFeatures</code>
- <code title="get /v1/rentals/{propertyId}/amenities">client.rentals.amenities.<a href="./src/resources/rentals/amenities.ts">list</a>(propertyID) -> RentalFeatures</code>

## Epaysettings

Methods:

- <code title="put /v1/rentals/{propertyId}/epaysettings">client.rentals.epaysettings.<a href="./src/resources/rentals/epaysettings.ts">create</a>(propertyID, { ...params }) -> EPaySettings</code>
- <code title="get /v1/rentals/{propertyId}/epaysettings">client.rentals.epaysettings.<a href="./src/resources/rentals/epaysettings.ts">list</a>(propertyID) -> EPaySettings</code>

## Images

Types:

- <code><a href="./src/resources/rentals/images.ts">ImageReorderRequest</a></code>
- <code><a href="./src/resources/rentals/images.ts">ListingEntityFile</a></code>
- <code><a href="./src/resources/rentals/images.ts">RentalImage</a></code>
- <code><a href="./src/resources/rentals/images.ts">VideoLinkRequest</a></code>
- <code><a href="./src/resources/rentals/images.ts">ImageListResponse</a></code>
- <code><a href="./src/resources/rentals/images.ts">ImageUpdateOrderResponse</a></code>

Methods:

- <code title="get /v1/rentals/{propertyId}/images/{imageId}">client.rentals.images.<a href="./src/resources/rentals/images.ts">retrieve</a>(imageID, { ...params }) -> RentalImage</code>
- <code title="put /v1/rentals/{propertyId}/images/{imageId}">client.rentals.images.<a href="./src/resources/rentals/images.ts">update</a>(imageID, { ...params }) -> RentalImage</code>
- <code title="get /v1/rentals/{propertyId}/images">client.rentals.images.<a href="./src/resources/rentals/images.ts">list</a>(propertyID, { ...params }) -> ImageListResponse</code>
- <code title="delete /v1/rentals/{propertyId}/images/{imageId}">client.rentals.images.<a href="./src/resources/rentals/images.ts">delete</a>(imageID, { ...params }) -> void</code>
- <code title="post /v1/rentals/{propertyId}/images/{imageId}/downloadrequests">client.rentals.images.<a href="./src/resources/rentals/images.ts">downloadrequests</a>(imageID, { ...params }) -> FileDownload</code>
- <code title="put /v1/rentals/{propertyId}/images/order">client.rentals.images.<a href="./src/resources/rentals/images.ts">updateOrder</a>(propertyID, { ...params }) -> ImageUpdateOrderResponse</code>
- <code title="post /v1/rentals/{propertyId}/images/uploadrequests">client.rentals.images.<a href="./src/resources/rentals/images.ts">uploadrequests</a>(propertyID, { ...params }) -> FileUploadTicket</code>
- <code title="post /v1/rentals/{propertyId}/images/videolinkrequests">client.rentals.images.<a href="./src/resources/rentals/images.ts">videolinkrequests</a>(propertyID, { ...params }) -> RentalImage</code>

## Meterreadings

Types:

- <code><a href="./src/resources/rentals/meterreadings/meterreadings.ts">MeterreadingListResponse</a></code>

Methods:

- <code title="get /v1/rentals/{propertyId}/meterreadings">client.rentals.meterreadings.<a href="./src/resources/rentals/meterreadings/meterreadings.ts">list</a>(propertyID, { ...params }) -> MeterreadingListResponse</code>

### Summary

Methods:

- <code title="put /v1/rentals/{propertyId}/meterreadings/summary">client.rentals.meterreadings.summary.<a href="./src/resources/rentals/meterreadings/summary.ts">create</a>(propertyID, { ...params }) -> MeterReadingDetails</code>
- <code title="get /v1/rentals/{propertyId}/meterreadings/summary">client.rentals.meterreadings.summary.<a href="./src/resources/rentals/meterreadings/summary.ts">list</a>(propertyID, { ...params }) -> MeterReadingDetails</code>
- <code title="delete /v1/rentals/{propertyId}/meterreadings/summary">client.rentals.meterreadings.summary.<a href="./src/resources/rentals/meterreadings/summary.ts">deleteAll</a>(propertyID, { ...params }) -> void</code>

## Notes

Types:

- <code><a href="./src/resources/rentals/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/rentals/{propertyId}/notes">client.rentals.notes.<a href="./src/resources/rentals/notes.ts">create</a>(propertyID, { ...params }) -> Note</code>
- <code title="get /v1/rentals/{propertyId}/notes/{noteId}">client.rentals.notes.<a href="./src/resources/rentals/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/rentals/{propertyId}/notes/{noteId}">client.rentals.notes.<a href="./src/resources/rentals/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/rentals/{propertyId}/notes">client.rentals.notes.<a href="./src/resources/rentals/notes.ts">list</a>(propertyID, { ...params }) -> NoteListResponse</code>

## Appliances

Types:

- <code><a href="./src/resources/rentals/appliances/appliances.ts">RentalAppliance</a></code>
- <code><a href="./src/resources/rentals/appliances/appliances.ts">ApplianceListResponse</a></code>

Methods:

- <code title="post /v1/rentals/appliances">client.rentals.appliances.<a href="./src/resources/rentals/appliances/appliances.ts">create</a>({ ...params }) -> RentalAppliance</code>
- <code title="get /v1/rentals/appliances/{applianceId}">client.rentals.appliances.<a href="./src/resources/rentals/appliances/appliances.ts">retrieve</a>(applianceID) -> RentalAppliance</code>
- <code title="put /v1/rentals/appliances/{applianceId}">client.rentals.appliances.<a href="./src/resources/rentals/appliances/appliances.ts">update</a>(applianceID, { ...params }) -> RentalAppliance</code>
- <code title="get /v1/rentals/appliances">client.rentals.appliances.<a href="./src/resources/rentals/appliances/appliances.ts">list</a>({ ...params }) -> ApplianceListResponse</code>
- <code title="delete /v1/rentals/appliances/{applianceId}">client.rentals.appliances.<a href="./src/resources/rentals/appliances/appliances.ts">delete</a>(applianceID) -> void</code>

### Servicehistory

Types:

- <code><a href="./src/resources/rentals/appliances/servicehistory.ts">RentalApplianceServiceHistory</a></code>
- <code><a href="./src/resources/rentals/appliances/servicehistory.ts">ServicehistoryListResponse</a></code>

Methods:

- <code title="post /v1/rentals/appliances/{applianceId}/servicehistory">client.rentals.appliances.servicehistory.<a href="./src/resources/rentals/appliances/servicehistory.ts">create</a>(applianceID, { ...params }) -> RentalApplianceServiceHistory</code>
- <code title="get /v1/rentals/appliances/{applianceId}/servicehistory/{serviceHistoryId}">client.rentals.appliances.servicehistory.<a href="./src/resources/rentals/appliances/servicehistory.ts">retrieve</a>(serviceHistoryID, { ...params }) -> RentalApplianceServiceHistory</code>
- <code title="get /v1/rentals/appliances/{applianceId}/servicehistory">client.rentals.appliances.servicehistory.<a href="./src/resources/rentals/appliances/servicehistory.ts">list</a>(applianceID, { ...params }) -> ServicehistoryListResponse</code>

## Owners

Types:

- <code><a href="./src/resources/rentals/owners/owners.ts">RentalOwner</a></code>
- <code><a href="./src/resources/rentals/owners/owners.ts">OwnerListResponse</a></code>

Methods:

- <code title="post /v1/rentals/owners">client.rentals.owners.<a href="./src/resources/rentals/owners/owners.ts">create</a>({ ...params }) -> RentalOwner</code>
- <code title="get /v1/rentals/owners/{rentalOwnerId}">client.rentals.owners.<a href="./src/resources/rentals/owners/owners.ts">retrieve</a>(rentalOwnerID) -> RentalOwner</code>
- <code title="put /v1/rentals/owners/{rentalOwnerId}">client.rentals.owners.<a href="./src/resources/rentals/owners/owners.ts">update</a>(rentalOwnerID, { ...params }) -> RentalOwner</code>
- <code title="get /v1/rentals/owners">client.rentals.owners.<a href="./src/resources/rentals/owners/owners.ts">list</a>({ ...params }) -> OwnerListResponse</code>

### Notes

Types:

- <code><a href="./src/resources/rentals/owners/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/rentals/owners/{rentalOwnerId}/notes">client.rentals.owners.notes.<a href="./src/resources/rentals/owners/notes.ts">create</a>(rentalOwnerID, { ...params }) -> Note</code>
- <code title="get /v1/rentals/owners/{rentalOwnerId}/notes/{noteId}">client.rentals.owners.notes.<a href="./src/resources/rentals/owners/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/rentals/owners/{rentalOwnerId}/notes/{noteId}">client.rentals.owners.notes.<a href="./src/resources/rentals/owners/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/rentals/owners/{rentalOwnerId}/notes">client.rentals.owners.notes.<a href="./src/resources/rentals/owners/notes.ts">list</a>(rentalOwnerID, { ...params }) -> NoteListResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">PhoneNumber</a></code>
- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /v1/users/{userId}">client.users.<a href="./src/resources/users.ts">retrieve</a>(userID) -> User</code>
- <code title="get /v1/users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>

# Userroles

Types:

- <code><a href="./src/resources/userroles.ts">UserRoleMessage</a></code>
- <code><a href="./src/resources/userroles.ts">UserroleListResponse</a></code>

Methods:

- <code title="get /v1/userroles/{userRoleId}">client.userroles.<a href="./src/resources/userroles.ts">retrieve</a>(userRoleID) -> UserRoleMessage</code>
- <code title="get /v1/userroles">client.userroles.<a href="./src/resources/userroles.ts">list</a>({ ...params }) -> UserroleListResponse</code>

# Administration

Types:

- <code><a href="./src/resources/administration/administration.ts">AdministrationRetrieveAccountResponse</a></code>
- <code><a href="./src/resources/administration/administration.ts">AdministrationRetrieveAccountingLockPeriodsResponse</a></code>

Methods:

- <code title="get /v1/administration/account">client.administration.<a href="./src/resources/administration/administration.ts">retrieveAccount</a>() -> AdministrationRetrieveAccountResponse</code>
- <code title="get /v1/administration/accountinglockperiod">client.administration.<a href="./src/resources/administration/administration.ts">retrieveAccountingLockPeriods</a>() -> AdministrationRetrieveAccountingLockPeriodsResponse</code>

## Residentsettings

### Partialpaymentsettings

Types:

- <code><a href="./src/resources/administration/residentsettings/partialpaymentsettings.ts">PartialPaymentSettingsMessage</a></code>
- <code><a href="./src/resources/administration/residentsettings/partialpaymentsettings.ts">PartialPaymentSettingsPatchMessage</a></code>

Methods:

- <code title="get /v1/administration/residentsettings/partialpaymentsettings">client.administration.residentsettings.partialpaymentsettings.<a href="./src/resources/administration/residentsettings/partialpaymentsettings.ts">retrieve</a>() -> PartialPaymentSettingsMessage</code>
- <code title="patch /v1/administration/residentsettings/partialpaymentsettings">client.administration.residentsettings.partialpaymentsettings.<a href="./src/resources/administration/residentsettings/partialpaymentsettings.ts">update</a>({ ...params }) -> PartialPaymentSettingsMessage</code>

# Applicants

Types:

- <code><a href="./src/resources/applicants/applicants.ts">ApplicantApplication</a></code>
- <code><a href="./src/resources/applicants/applicants.ts">ApplicantDetails</a></code>
- <code><a href="./src/resources/applicants/applicants.ts">ApplicantListResponse</a></code>

Methods:

- <code title="post /v1/applicants">client.applicants.<a href="./src/resources/applicants/applicants.ts">create</a>({ ...params }) -> ApplicantDetails</code>
- <code title="get /v1/applicants/{applicantId}">client.applicants.<a href="./src/resources/applicants/applicants.ts">retrieve</a>(applicantID) -> ApplicantDetails</code>
- <code title="put /v1/applicants/{applicantId}">client.applicants.<a href="./src/resources/applicants/applicants.ts">update</a>(applicantID, { ...params }) -> ApplicantDetails</code>
- <code title="get /v1/applicants">client.applicants.<a href="./src/resources/applicants/applicants.ts">list</a>({ ...params }) -> ApplicantListResponse</code>

## Applications

Types:

- <code><a href="./src/resources/applicants/applications.ts">Application</a></code>
- <code><a href="./src/resources/applicants/applications.ts">ApplicationListResponse</a></code>

Methods:

- <code title="get /v1/applicants/{applicantId}/applications/{applicationId}">client.applicants.applications.<a href="./src/resources/applicants/applications.ts">retrieve</a>(applicationID, { ...params }) -> Application</code>
- <code title="put /v1/applicants/{applicantId}/applications/{applicationId}">client.applicants.applications.<a href="./src/resources/applicants/applications.ts">update</a>(applicationID, { ...params }) -> Application</code>
- <code title="get /v1/applicants/{applicantId}/applications">client.applicants.applications.<a href="./src/resources/applicants/applications.ts">list</a>(applicantID, { ...params }) -> ApplicationListResponse</code>

## Notes

Types:

- <code><a href="./src/resources/applicants/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/applicants/{applicantId}/notes">client.applicants.notes.<a href="./src/resources/applicants/notes.ts">create</a>(applicantID, { ...params }) -> Note</code>
- <code title="get /v1/applicants/{applicantId}/notes/{noteId}">client.applicants.notes.<a href="./src/resources/applicants/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/applicants/{applicantId}/notes">client.applicants.notes.<a href="./src/resources/applicants/notes.ts">list</a>(applicantID, { ...params }) -> NoteListResponse</code>

## Groups

Types:

- <code><a href="./src/resources/applicants/groups/groups.ts">ApplicantGroup</a></code>
- <code><a href="./src/resources/applicants/groups/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="post /v1/applicants/groups">client.applicants.groups.<a href="./src/resources/applicants/groups/groups.ts">create</a>({ ...params }) -> ApplicantGroup</code>
- <code title="get /v1/applicants/groups/{applicantGroupId}">client.applicants.groups.<a href="./src/resources/applicants/groups/groups.ts">retrieve</a>(applicantGroupID) -> ApplicantGroup</code>
- <code title="put /v1/applicants/groups/{applicantGroupId}">client.applicants.groups.<a href="./src/resources/applicants/groups/groups.ts">update</a>(applicantGroupID, { ...params }) -> ApplicantGroup</code>
- <code title="get /v1/applicants/groups">client.applicants.groups.<a href="./src/resources/applicants/groups/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>

### Notes

Types:

- <code><a href="./src/resources/applicants/groups/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/applicants/groups/{applicantGroupId}/notes">client.applicants.groups.notes.<a href="./src/resources/applicants/groups/notes.ts">create</a>(applicantGroupID, { ...params }) -> Note</code>
- <code title="get /v1/applicants/groups/{applicantGroupId}/notes/{noteId}">client.applicants.groups.notes.<a href="./src/resources/applicants/groups/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/applicants/groups/{applicantGroupId}/notes/{noteId}">client.applicants.groups.notes.<a href="./src/resources/applicants/groups/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/applicants/groups/{applicantGroupId}/notes">client.applicants.groups.notes.<a href="./src/resources/applicants/groups/notes.ts">list</a>(applicantGroupID, { ...params }) -> NoteListResponse</code>

# Bankaccounts

Types:

- <code><a href="./src/resources/bankaccounts/bankaccounts.ts">Account</a></code>
- <code><a href="./src/resources/bankaccounts/bankaccounts.ts">BankaccountListResponse</a></code>
- <code><a href="./src/resources/bankaccounts/bankaccounts.ts">BankaccountRetrieveUndepositedFundsResponse</a></code>

Methods:

- <code title="post /v1/bankaccounts">client.bankaccounts.<a href="./src/resources/bankaccounts/bankaccounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="get /v1/bankaccounts/{bankAccountId}">client.bankaccounts.<a href="./src/resources/bankaccounts/bankaccounts.ts">retrieve</a>(bankAccountID) -> Account</code>
- <code title="put /v1/bankaccounts/{bankAccountId}">client.bankaccounts.<a href="./src/resources/bankaccounts/bankaccounts.ts">update</a>(bankAccountID, { ...params }) -> Account</code>
- <code title="get /v1/bankaccounts">client.bankaccounts.<a href="./src/resources/bankaccounts/bankaccounts.ts">list</a>({ ...params }) -> BankaccountListResponse</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/undepositedfunds">client.bankaccounts.<a href="./src/resources/bankaccounts/bankaccounts.ts">retrieveUndepositedFunds</a>(bankAccountID, { ...params }) -> BankaccountRetrieveUndepositedFundsResponse</code>

## Checks

Types:

- <code><a href="./src/resources/bankaccounts/checks/checks.ts">Check</a></code>
- <code><a href="./src/resources/bankaccounts/checks/checks.ts">CheckLineSave</a></code>
- <code><a href="./src/resources/bankaccounts/checks/checks.ts">CheckPayeeSave</a></code>
- <code><a href="./src/resources/bankaccounts/checks/checks.ts">CheckListResponse</a></code>

Methods:

- <code title="post /v1/bankaccounts/{bankAccountId}/checks">client.bankaccounts.checks.<a href="./src/resources/bankaccounts/checks/checks.ts">create</a>(bankAccountID, { ...params }) -> Check</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/checks/{checkId}">client.bankaccounts.checks.<a href="./src/resources/bankaccounts/checks/checks.ts">retrieve</a>(checkID, { ...params }) -> Check</code>
- <code title="put /v1/bankaccounts/{bankAccountId}/checks/{checkId}">client.bankaccounts.checks.<a href="./src/resources/bankaccounts/checks/checks.ts">update</a>(checkID, { ...params }) -> Check</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/checks">client.bankaccounts.checks.<a href="./src/resources/bankaccounts/checks/checks.ts">list</a>(bankAccountID, { ...params }) -> CheckListResponse</code>

### Files

Types:

- <code><a href="./src/resources/bankaccounts/checks/files.ts">CheckFile</a></code>
- <code><a href="./src/resources/bankaccounts/checks/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/bankaccounts/{bankAccountId}/checks/{checkId}/files/{fileId}">client.bankaccounts.checks.files.<a href="./src/resources/bankaccounts/checks/files.ts">retrieve</a>(fileID, { ...params }) -> CheckFile</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/checks/{checkId}/files">client.bankaccounts.checks.files.<a href="./src/resources/bankaccounts/checks/files.ts">list</a>(checkID, { ...params }) -> FileListResponse</code>
- <code title="delete /v1/bankaccounts/{bankAccountId}/checks/{checkId}/files/{fileId}">client.bankaccounts.checks.files.<a href="./src/resources/bankaccounts/checks/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /v1/bankaccounts/{bankAccountId}/checks/{checkId}/files/{fileId}/downloadrequests">client.bankaccounts.checks.files.<a href="./src/resources/bankaccounts/checks/files.ts">download</a>(fileID, { ...params }) -> FileDownload</code>
- <code title="post /v1/bankaccounts/{bankAccountId}/checks/{checkId}/files/uploadrequests">client.bankaccounts.checks.files.<a href="./src/resources/bankaccounts/checks/files.ts">upload</a>(checkID, { ...params }) -> FileUploadTicket</code>

## Deposits

Types:

- <code><a href="./src/resources/bankaccounts/deposits.ts">Deposit</a></code>
- <code><a href="./src/resources/bankaccounts/deposits.ts">DepositLineSave</a></code>
- <code><a href="./src/resources/bankaccounts/deposits.ts">DepositListResponse</a></code>

Methods:

- <code title="post /v1/bankaccounts/{bankAccountId}/deposits">client.bankaccounts.deposits.<a href="./src/resources/bankaccounts/deposits.ts">create</a>(bankAccountID, { ...params }) -> Deposit</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/deposits/{depositId}">client.bankaccounts.deposits.<a href="./src/resources/bankaccounts/deposits.ts">retrieve</a>(depositID, { ...params }) -> Deposit</code>
- <code title="put /v1/bankaccounts/{bankAccountId}/deposits/{depositId}">client.bankaccounts.deposits.<a href="./src/resources/bankaccounts/deposits.ts">update</a>(depositID, { ...params }) -> Deposit</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/deposits">client.bankaccounts.deposits.<a href="./src/resources/bankaccounts/deposits.ts">list</a>(bankAccountID, { ...params }) -> DepositListResponse</code>

## Quickdeposits

Types:

- <code><a href="./src/resources/bankaccounts/quickdeposits.ts">AccountingEntity</a></code>
- <code><a href="./src/resources/bankaccounts/quickdeposits.ts">AccountingEntitySave</a></code>
- <code><a href="./src/resources/bankaccounts/quickdeposits.ts">QuickDeposit</a></code>
- <code><a href="./src/resources/bankaccounts/quickdeposits.ts">QuickDepositSave</a></code>
- <code><a href="./src/resources/bankaccounts/quickdeposits.ts">QuickdepositListResponse</a></code>

Methods:

- <code title="post /v1/bankaccounts/{bankAccountId}/quickdeposits">client.bankaccounts.quickdeposits.<a href="./src/resources/bankaccounts/quickdeposits.ts">create</a>(bankAccountID, { ...params }) -> QuickDeposit</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/quickdeposits/{quickDepositId}">client.bankaccounts.quickdeposits.<a href="./src/resources/bankaccounts/quickdeposits.ts">retrieve</a>(quickDepositID, { ...params }) -> QuickDeposit</code>
- <code title="put /v1/bankaccounts/{bankAccountId}/quickdeposits/{quickDepositId}">client.bankaccounts.quickdeposits.<a href="./src/resources/bankaccounts/quickdeposits.ts">update</a>(quickDepositID, { ...params }) -> QuickDeposit</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/quickdeposits">client.bankaccounts.quickdeposits.<a href="./src/resources/bankaccounts/quickdeposits.ts">list</a>(bankAccountID, { ...params }) -> QuickdepositListResponse</code>

## Reconciliations

Types:

- <code><a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">Reconciliation</a></code>
- <code><a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">ReconciliationListResponse</a></code>
- <code><a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">ReconciliationRetrieveTransactionsResponse</a></code>

Methods:

- <code title="post /v1/bankaccounts/{bankAccountId}/reconciliations">client.bankaccounts.reconciliations.<a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">create</a>(bankAccountID, { ...params }) -> Reconciliation</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}">client.bankaccounts.reconciliations.<a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">retrieve</a>(reconciliationID, { ...params }) -> Reconciliation</code>
- <code title="put /v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}">client.bankaccounts.reconciliations.<a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">update</a>(reconciliationID, { ...params }) -> Reconciliation</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/reconciliations">client.bankaccounts.reconciliations.<a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">list</a>(bankAccountID, { ...params }) -> ReconciliationListResponse</code>
- <code title="post /v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/cleartransactionsrequest">client.bankaccounts.reconciliations.<a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">cleartransactionsrequest</a>(reconciliationID, { ...params }) -> void</code>
- <code title="post /v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/finalizerequest">client.bankaccounts.reconciliations.<a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">finalizerequest</a>(reconciliationID, { ...params }) -> void</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/transactions">client.bankaccounts.reconciliations.<a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">retrieveTransactions</a>(reconciliationID, { ...params }) -> ReconciliationRetrieveTransactionsResponse</code>
- <code title="post /v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/uncleartransactionsrequest">client.bankaccounts.reconciliations.<a href="./src/resources/bankaccounts/reconciliations/reconciliations.ts">uncleartransactionsrequest</a>(reconciliationID, { ...params }) -> void</code>

### Balances

Types:

- <code><a href="./src/resources/bankaccounts/reconciliations/balances.ts">ReconciliationBalance</a></code>

Methods:

- <code title="put /v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/balances">client.bankaccounts.reconciliations.balances.<a href="./src/resources/bankaccounts/reconciliations/balances.ts">create</a>(reconciliationID, { ...params }) -> ReconciliationBalance</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/reconciliations/{reconciliationId}/balances">client.bankaccounts.reconciliations.balances.<a href="./src/resources/bankaccounts/reconciliations/balances.ts">list</a>(reconciliationID, { ...params }) -> ReconciliationBalance</code>

## Transactions

Types:

- <code><a href="./src/resources/bankaccounts/transactions.ts">BankAccountTransaction</a></code>
- <code><a href="./src/resources/bankaccounts/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /v1/bankaccounts/{bankAccountId}/transactions/{transactionId}">client.bankaccounts.transactions.<a href="./src/resources/bankaccounts/transactions.ts">retrieve</a>(transactionID, { ...params }) -> BankAccountTransaction</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/transactions">client.bankaccounts.transactions.<a href="./src/resources/bankaccounts/transactions.ts">list</a>(bankAccountID, { ...params }) -> TransactionListResponse</code>

## Transfers

Types:

- <code><a href="./src/resources/bankaccounts/transfers.ts">BankAccountTransferAccountingEntitySaveMessage</a></code>
- <code><a href="./src/resources/bankaccounts/transfers.ts">Transfer</a></code>
- <code><a href="./src/resources/bankaccounts/transfers.ts">TransferSave</a></code>
- <code><a href="./src/resources/bankaccounts/transfers.ts">TransferListResponse</a></code>

Methods:

- <code title="post /v1/bankaccounts/{bankAccountId}/transfers">client.bankaccounts.transfers.<a href="./src/resources/bankaccounts/transfers.ts">create</a>(bankAccountID, { ...params }) -> Transfer</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/transfers/{transferId}">client.bankaccounts.transfers.<a href="./src/resources/bankaccounts/transfers.ts">retrieve</a>(transferID, { ...params }) -> Account</code>
- <code title="put /v1/bankaccounts/{bankAccountId}/transfers/{transferId}">client.bankaccounts.transfers.<a href="./src/resources/bankaccounts/transfers.ts">update</a>(transferID, { ...params }) -> Transfer</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/transfers">client.bankaccounts.transfers.<a href="./src/resources/bankaccounts/transfers.ts">list</a>(bankAccountID, { ...params }) -> TransferListResponse</code>

## Withdrawals

Types:

- <code><a href="./src/resources/bankaccounts/withdrawals.ts">Withdrawal</a></code>
- <code><a href="./src/resources/bankaccounts/withdrawals.ts">WithdrawalSave</a></code>
- <code><a href="./src/resources/bankaccounts/withdrawals.ts">WithdrawalListResponse</a></code>

Methods:

- <code title="post /v1/bankaccounts/{bankAccountId}/withdrawals">client.bankaccounts.withdrawals.<a href="./src/resources/bankaccounts/withdrawals.ts">create</a>(bankAccountID, { ...params }) -> Withdrawal</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/withdrawals/{withdrawalId}">client.bankaccounts.withdrawals.<a href="./src/resources/bankaccounts/withdrawals.ts">retrieve</a>(withdrawalID, { ...params }) -> Withdrawal</code>
- <code title="put /v1/bankaccounts/{bankAccountId}/withdrawals/{withdrawalId}">client.bankaccounts.withdrawals.<a href="./src/resources/bankaccounts/withdrawals.ts">update</a>(withdrawalID, { ...params }) -> Withdrawal</code>
- <code title="get /v1/bankaccounts/{bankAccountId}/withdrawals">client.bankaccounts.withdrawals.<a href="./src/resources/bankaccounts/withdrawals.ts">list</a>(bankAccountID, { ...params }) -> WithdrawalListResponse</code>

# Bills

Types:

- <code><a href="./src/resources/bills/bills.ts">BillMarkupSaveMessage</a></code>
- <code><a href="./src/resources/bills/bills.ts">BillMessage</a></code>
- <code><a href="./src/resources/bills/bills.ts">BillListResponse</a></code>

Methods:

- <code title="post /v1/bills">client.bills.<a href="./src/resources/bills/bills.ts">create</a>({ ...params }) -> BillMessage</code>
- <code title="get /v1/bills/{billId}">client.bills.<a href="./src/resources/bills/bills.ts">retrieve</a>(billID) -> BillMessage</code>
- <code title="put /v1/bills/{billId}">client.bills.<a href="./src/resources/bills/bills.ts">update</a>(billID, { ...params }) -> BillMessage</code>
- <code title="get /v1/bills">client.bills.<a href="./src/resources/bills/bills.ts">list</a>({ ...params }) -> BillListResponse</code>

## Files

Types:

- <code><a href="./src/resources/bills/files.ts">BillFileMessage</a></code>
- <code><a href="./src/resources/bills/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/bills/{billId}/files/{fileId}">client.bills.files.<a href="./src/resources/bills/files.ts">retrieve</a>(fileID, { ...params }) -> BillFileMessage</code>
- <code title="get /v1/bills/{billId}/files">client.bills.files.<a href="./src/resources/bills/files.ts">list</a>(billID, { ...params }) -> FileListResponse</code>
- <code title="delete /v1/bills/{billId}/files/{fileId}">client.bills.files.<a href="./src/resources/bills/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /v1/bills/{billId}/files/{fileId}/downloadrequest">client.bills.files.<a href="./src/resources/bills/files.ts">download</a>(fileID, { ...params }) -> FileDownload</code>
- <code title="post /v1/bills/{billId}/files/uploadrequests">client.bills.files.<a href="./src/resources/bills/files.ts">upload</a>(billID, { ...params }) -> FileUploadTicket</code>

## Payments

Types:

- <code><a href="./src/resources/bills/payments.ts">BillPaymentLinePostMessage</a></code>
- <code><a href="./src/resources/bills/payments.ts">BillPaymentMessage</a></code>
- <code><a href="./src/resources/bills/payments.ts">PaymentListResponse</a></code>

Methods:

- <code title="post /v1/bills/{billId}/payments">client.bills.payments.<a href="./src/resources/bills/payments.ts">create</a>(billID, { ...params }) -> BillPaymentMessage</code>
- <code title="get /v1/bills/{billId}/payments/{paymentId}">client.bills.payments.<a href="./src/resources/bills/payments.ts">retrieve</a>(paymentID, { ...params }) -> BillPaymentMessage</code>
- <code title="get /v1/bills/{billId}/payments">client.bills.payments.<a href="./src/resources/bills/payments.ts">list</a>(billID, { ...params }) -> PaymentListResponse</code>
- <code title="post /v1/bills/payments">client.bills.payments.<a href="./src/resources/bills/payments.ts">createMultiple</a>({ ...params }) -> BillPaymentMessage</code>

# Budgets

Types:

- <code><a href="./src/resources/budgets.ts">BudgetDetailsSaveMessage</a></code>
- <code><a href="./src/resources/budgets.ts">BudgetMessage</a></code>
- <code><a href="./src/resources/budgets.ts">BudgetListResponse</a></code>

Methods:

- <code title="post /v1/budgets">client.budgets.<a href="./src/resources/budgets.ts">create</a>({ ...params }) -> BudgetMessage</code>
- <code title="get /v1/budgets/{budgetId}">client.budgets.<a href="./src/resources/budgets.ts">retrieve</a>(budgetID) -> BudgetMessage</code>
- <code title="put /v1/budgets/{budgetId}">client.budgets.<a href="./src/resources/budgets.ts">update</a>(budgetID, { ...params }) -> BudgetMessage</code>
- <code title="get /v1/budgets">client.budgets.<a href="./src/resources/budgets.ts">list</a>({ ...params }) -> BudgetListResponse</code>

# Clientleads

Types:

- <code><a href="./src/resources/clientleads.ts">ClientLeadMessage</a></code>
- <code><a href="./src/resources/clientleads.ts">ClientleadListResponse</a></code>

Methods:

- <code title="get /v1/clientleads/{clientLeadId}">client.clientleads.<a href="./src/resources/clientleads.ts">retrieve</a>(clientLeadID) -> ClientLeadMessage</code>
- <code title="get /v1/clientleads">client.clientleads.<a href="./src/resources/clientleads.ts">list</a>({ ...params }) -> ClientleadListResponse</code>

# Communications

## Announcements

Types:

- <code><a href="./src/resources/communications/announcements.ts">AnnouncementMessage</a></code>
- <code><a href="./src/resources/communications/announcements.ts">PropertyMessage</a></code>
- <code><a href="./src/resources/communications/announcements.ts">AnnouncementListResponse</a></code>
- <code><a href="./src/resources/communications/announcements.ts">AnnouncementRetrievePropertiesResponse</a></code>

Methods:

- <code title="post /v1/communications/announcements">client.communications.announcements.<a href="./src/resources/communications/announcements.ts">create</a>({ ...params }) -> AnnouncementMessage</code>
- <code title="get /v1/communications/announcements/{announcementId}">client.communications.announcements.<a href="./src/resources/communications/announcements.ts">retrieve</a>(announcementID) -> AnnouncementMessage</code>
- <code title="get /v1/communications/announcements">client.communications.announcements.<a href="./src/resources/communications/announcements.ts">list</a>({ ...params }) -> AnnouncementListResponse</code>
- <code title="post /v1/communications/announcements/{announcementId}/expirationrequest">client.communications.announcements.<a href="./src/resources/communications/announcements.ts">expire</a>(announcementID) -> void</code>
- <code title="get /v1/communications/announcements/{announcementId}/properties">client.communications.announcements.<a href="./src/resources/communications/announcements.ts">retrieveProperties</a>(announcementID, { ...params }) -> AnnouncementRetrievePropertiesResponse</code>

## Emails

Types:

- <code><a href="./src/resources/communications/emails.ts">EmailMessage</a></code>
- <code><a href="./src/resources/communications/emails.ts">EmailListResponse</a></code>
- <code><a href="./src/resources/communications/emails.ts">EmailRetrieveRecipientsResponse</a></code>

Methods:

- <code title="get /v1/communications/emails/{emailId}">client.communications.emails.<a href="./src/resources/communications/emails.ts">retrieve</a>(emailID) -> EmailMessage</code>
- <code title="get /v1/communications/emails">client.communications.emails.<a href="./src/resources/communications/emails.ts">list</a>({ ...params }) -> EmailListResponse</code>
- <code title="get /v1/communications/emails/{emailId}/recipients">client.communications.emails.<a href="./src/resources/communications/emails.ts">retrieveRecipients</a>(emailID, { ...params }) -> EmailRetrieveRecipientsResponse</code>
- <code title="post /v1/communications/emails">client.communications.emails.<a href="./src/resources/communications/emails.ts">send</a>({ ...params }) -> void</code>

## Phonelogs

Types:

- <code><a href="./src/resources/communications/phonelogs.ts">PhoneLogMessage</a></code>
- <code><a href="./src/resources/communications/phonelogs.ts">PhonelogListResponse</a></code>

Methods:

- <code title="post /v1/communications/phonelogs">client.communications.phonelogs.<a href="./src/resources/communications/phonelogs.ts">create</a>({ ...params }) -> PhoneLogMessage</code>
- <code title="get /v1/communications/phonelogs/{phoneLogId}">client.communications.phonelogs.<a href="./src/resources/communications/phonelogs.ts">retrieve</a>(phoneLogID) -> PhoneLogMessage</code>
- <code title="put /v1/communications/phonelogs/{phoneLogId}">client.communications.phonelogs.<a href="./src/resources/communications/phonelogs.ts">update</a>(phoneLogID, { ...params }) -> PhoneLogMessage</code>
- <code title="get /v1/communications/phonelogs">client.communications.phonelogs.<a href="./src/resources/communications/phonelogs.ts">list</a>({ ...params }) -> PhonelogListResponse</code>

## Templates

Types:

- <code><a href="./src/resources/communications/templates.ts">MailingTemplateMessage</a></code>
- <code><a href="./src/resources/communications/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="get /v1/communications/templates/{templateId}">client.communications.templates.<a href="./src/resources/communications/templates.ts">retrieve</a>(templateID) -> MailingTemplateMessage</code>
- <code title="get /v1/communications/templates">client.communications.templates.<a href="./src/resources/communications/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>

# Generalledger

Types:

- <code><a href="./src/resources/generalledger/generalledger.ts">GeneralledgerListResponse</a></code>

Methods:

- <code title="get /v1/generalledger">client.generalledger.<a href="./src/resources/generalledger/generalledger.ts">list</a>({ ...params }) -> GeneralledgerListResponse</code>

## Journalentries

Types:

- <code><a href="./src/resources/generalledger/journalentries.ts">GeneralLedgerTransaction</a></code>
- <code><a href="./src/resources/generalledger/journalentries.ts">JournalEntryLineSave</a></code>
- <code><a href="./src/resources/generalledger/journalentries.ts">UnitAgreement</a></code>

Methods:

- <code title="post /v1/generalledger/journalentries">client.generalledger.journalentries.<a href="./src/resources/generalledger/journalentries.ts">create</a>({ ...params }) -> GeneralLedgerTransaction</code>
- <code title="put /v1/generalledger/journalentries/{journalEntryId}">client.generalledger.journalentries.<a href="./src/resources/generalledger/journalentries.ts">update</a>(journalEntryID, { ...params }) -> GeneralLedgerTransaction</code>

## Transactions

Types:

- <code><a href="./src/resources/generalledger/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /v1/generalledger/transactions/{transactionId}">client.generalledger.transactions.<a href="./src/resources/generalledger/transactions.ts">retrieve</a>(transactionID) -> GeneralLedgerTransaction</code>
- <code title="get /v1/generalledger/transactions">client.generalledger.transactions.<a href="./src/resources/generalledger/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# Glaccounts

Types:

- <code><a href="./src/resources/glaccounts.ts">GlAccountMessage</a></code>
- <code><a href="./src/resources/glaccounts.ts">GlaccountListResponse</a></code>
- <code><a href="./src/resources/glaccounts.ts">GlaccountListBalancesResponse</a></code>

Methods:

- <code title="post /v1/glaccounts">client.glaccounts.<a href="./src/resources/glaccounts.ts">create</a>({ ...params }) -> GlAccountMessage</code>
- <code title="get /v1/glaccounts/{glAccountId}">client.glaccounts.<a href="./src/resources/glaccounts.ts">retrieve</a>(glAccountID) -> GlAccountMessage</code>
- <code title="put /v1/glaccounts/{glAccountId}">client.glaccounts.<a href="./src/resources/glaccounts.ts">update</a>(glAccountID, { ...params }) -> GlAccountMessage</code>
- <code title="get /v1/glaccounts">client.glaccounts.<a href="./src/resources/glaccounts.ts">list</a>({ ...params }) -> GlaccountListResponse</code>
- <code title="get /v1/glaccounts/balances">client.glaccounts.<a href="./src/resources/glaccounts.ts">listBalances</a>({ ...params }) -> GlaccountListBalancesResponse</code>

# Propertygroups

Types:

- <code><a href="./src/resources/propertygroups.ts">PropertyGroupMessage</a></code>
- <code><a href="./src/resources/propertygroups.ts">PropertygroupListResponse</a></code>

Methods:

- <code title="post /v1/propertygroups">client.propertygroups.<a href="./src/resources/propertygroups.ts">create</a>({ ...params }) -> PropertyGroupMessage</code>
- <code title="get /v1/propertygroups/{propertyGroupId}">client.propertygroups.<a href="./src/resources/propertygroups.ts">retrieve</a>(propertyGroupID) -> PropertyGroupMessage</code>
- <code title="put /v1/propertygroups/{propertyGroupId}">client.propertygroups.<a href="./src/resources/propertygroups.ts">update</a>(propertyGroupID, { ...params }) -> PropertyGroupMessage</code>
- <code title="get /v1/propertygroups">client.propertygroups.<a href="./src/resources/propertygroups.ts">list</a>({ ...params }) -> PropertygroupListResponse</code>

# ResidentCenterUsers

Types:

- <code><a href="./src/resources/resident-center-users.ts">ResidentCenterUserListResponse</a></code>

Methods:

- <code title="get /v1/residentCenterUsers">client.residentCenterUsers.<a href="./src/resources/resident-center-users.ts">list</a>({ ...params }) -> ResidentCenterUserListResponse</code>

# Retailcashusers

Types:

- <code><a href="./src/resources/retailcashusers.ts">RetailCashUserMessage</a></code>
- <code><a href="./src/resources/retailcashusers.ts">RetailcashuserListResponse</a></code>

Methods:

- <code title="get /v1/retailcashusers/{userId}/{unitAgreementId}">client.retailcashusers.<a href="./src/resources/retailcashusers.ts">retrieve</a>(unitAgreementID, { ...params }) -> RetailCashUserMessage</code>
- <code title="put /v1/retailcashusers/{userId}/{unitAgreementId}">client.retailcashusers.<a href="./src/resources/retailcashusers.ts">update</a>(unitAgreementID, { ...params }) -> RetailCashUserMessage</code>
- <code title="get /v1/retailcashusers">client.retailcashusers.<a href="./src/resources/retailcashusers.ts">list</a>({ ...params }) -> RetailcashuserListResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">AllTask</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">RequestedByUserEntity</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskCategoryResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /v1/tasks/{taskId}">client.tasks.<a href="./src/resources/tasks/tasks.ts">retrieve</a>(taskID) -> AllTask</code>
- <code title="get /v1/tasks">client.tasks.<a href="./src/resources/tasks/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>

## History

Types:

- <code><a href="./src/resources/tasks/history/history.ts">TaskHistory</a></code>
- <code><a href="./src/resources/tasks/history/history.ts">TaskHistoryUser</a></code>
- <code><a href="./src/resources/tasks/history/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /v1/tasks/{taskId}/history/{taskHistoryId}">client.tasks.history.<a href="./src/resources/tasks/history/history.ts">retrieve</a>(taskHistoryID, { ...params }) -> TaskHistory</code>
- <code title="put /v1/tasks/{taskId}/history/{taskHistoryId}">client.tasks.history.<a href="./src/resources/tasks/history/history.ts">update</a>(taskHistoryID, { ...params }) -> TaskHistory</code>
- <code title="get /v1/tasks/{taskId}/history">client.tasks.history.<a href="./src/resources/tasks/history/history.ts">list</a>(taskID, { ...params }) -> HistoryListResponse</code>

### Files

Types:

- <code><a href="./src/resources/tasks/history/files.ts">TaskHistoryFile</a></code>
- <code><a href="./src/resources/tasks/history/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/tasks/{taskId}/history/{taskHistoryId}/files/{fileId}">client.tasks.history.files.<a href="./src/resources/tasks/history/files.ts">retrieve</a>(fileID, { ...params }) -> TaskHistoryFile</code>
- <code title="get /v1/tasks/{taskId}/history/{taskHistoryId}/files">client.tasks.history.files.<a href="./src/resources/tasks/history/files.ts">list</a>(taskHistoryID, { ...params }) -> FileListResponse</code>
- <code title="delete /v1/tasks/{taskId}/history/{taskHistoryId}/files/{fileId}">client.tasks.history.files.<a href="./src/resources/tasks/history/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /v1/tasks/{taskId}/history/{taskHistoryId}/files/{fileId}/downloadrequest">client.tasks.history.files.<a href="./src/resources/tasks/history/files.ts">downloadRequest</a>(fileID, { ...params }) -> FileDownload</code>
- <code title="post /v1/tasks/{taskId}/history/{taskHistoryId}/files/uploadrequests">client.tasks.history.files.<a href="./src/resources/tasks/history/files.ts">uploadRequest</a>(taskHistoryID, { ...params }) -> FileUploadTicket</code>

## Categories

Types:

- <code><a href="./src/resources/tasks/categories.ts">TaskCategoryMessage</a></code>
- <code><a href="./src/resources/tasks/categories.ts">TaskSubCategory</a></code>
- <code><a href="./src/resources/tasks/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="post /v1/tasks/categories">client.tasks.categories.<a href="./src/resources/tasks/categories.ts">create</a>({ ...params }) -> TaskCategoryMessage</code>
- <code title="get /v1/tasks/categories/{taskCategoryId}">client.tasks.categories.<a href="./src/resources/tasks/categories.ts">retrieve</a>(taskCategoryID) -> TaskCategoryMessage</code>
- <code title="put /v1/tasks/categories/{taskCategoryId}">client.tasks.categories.<a href="./src/resources/tasks/categories.ts">update</a>(taskCategoryID, { ...params }) -> TaskCategoryMessage</code>
- <code title="get /v1/tasks/categories">client.tasks.categories.<a href="./src/resources/tasks/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>

## Contactrequests

Types:

- <code><a href="./src/resources/tasks/contactrequests.ts">ContactDetailSave</a></code>
- <code><a href="./src/resources/tasks/contactrequests.ts">ContactDetailSavePhoneMessage</a></code>
- <code><a href="./src/resources/tasks/contactrequests.ts">ContactRequestTask</a></code>
- <code><a href="./src/resources/tasks/contactrequests.ts">ContactrequestListResponse</a></code>

Methods:

- <code title="post /v1/tasks/contactrequests">client.tasks.contactrequests.<a href="./src/resources/tasks/contactrequests.ts">create</a>({ ...params }) -> ContactRequestTask</code>
- <code title="get /v1/tasks/contactrequests/{contactRequestTaskId}">client.tasks.contactrequests.<a href="./src/resources/tasks/contactrequests.ts">retrieve</a>(contactRequestTaskID) -> ContactRequestTask</code>
- <code title="put /v1/tasks/contactrequests/{contactRequestTaskId}">client.tasks.contactrequests.<a href="./src/resources/tasks/contactrequests.ts">update</a>(contactRequestTaskID, { ...params }) -> ContactRequestTask</code>
- <code title="get /v1/tasks/contactrequests">client.tasks.contactrequests.<a href="./src/resources/tasks/contactrequests.ts">list</a>({ ...params }) -> ContactrequestListResponse</code>

## Rentalownerrequests

Types:

- <code><a href="./src/resources/tasks/rentalownerrequests/rentalownerrequests.ts">RentalOwnerRequestTask</a></code>
- <code><a href="./src/resources/tasks/rentalownerrequests/rentalownerrequests.ts">RentalownerrequestListResponse</a></code>

Methods:

- <code title="post /v1/tasks/rentalownerrequests">client.tasks.rentalownerrequests.<a href="./src/resources/tasks/rentalownerrequests/rentalownerrequests.ts">create</a>({ ...params }) -> RentalOwnerRequestTask</code>
- <code title="get /v1/tasks/rentalownerrequests/{rentalOwnerRequestTaskId}">client.tasks.rentalownerrequests.<a href="./src/resources/tasks/rentalownerrequests/rentalownerrequests.ts">retrieve</a>(rentalOwnerRequestTaskID) -> RentalOwnerRequestTask</code>
- <code title="put /v1/tasks/rentalownerrequests/{rentalOwnerRequestTaskId}">client.tasks.rentalownerrequests.<a href="./src/resources/tasks/rentalownerrequests/rentalownerrequests.ts">update</a>(rentalOwnerRequestTaskID, { ...params }) -> RentalOwnerRequestTask</code>
- <code title="get /v1/tasks/rentalownerrequests">client.tasks.rentalownerrequests.<a href="./src/resources/tasks/rentalownerrequests/rentalownerrequests.ts">list</a>({ ...params }) -> RentalownerrequestListResponse</code>

### Contributiondata

Types:

- <code><a href="./src/resources/tasks/rentalownerrequests/contributiondata.ts">ContributionData</a></code>

Methods:

- <code title="get /v1/tasks/rentalownerrequests/{rentalOwnerRequestTaskId}/contributiondata">client.tasks.rentalownerrequests.contributiondata.<a href="./src/resources/tasks/rentalownerrequests/contributiondata.ts">retrieve</a>(rentalOwnerRequestTaskID) -> ContributionData</code>
- <code title="put /v1/tasks/rentalownerrequests/{rentalOwnerRequestTaskId}/contributiondata">client.tasks.rentalownerrequests.contributiondata.<a href="./src/resources/tasks/rentalownerrequests/contributiondata.ts">update</a>(rentalOwnerRequestTaskID, { ...params }) -> ContributionData</code>

## Residentrequests

Types:

- <code><a href="./src/resources/tasks/residentrequests.ts">ResidentRequestTask</a></code>
- <code><a href="./src/resources/tasks/residentrequests.ts">ResidentrequestListResponse</a></code>

Methods:

- <code title="post /v1/tasks/residentrequests">client.tasks.residentrequests.<a href="./src/resources/tasks/residentrequests.ts">create</a>({ ...params }) -> ResidentRequestTask</code>
- <code title="get /v1/tasks/residentrequests/{residentRequestTaskId}">client.tasks.residentrequests.<a href="./src/resources/tasks/residentrequests.ts">retrieve</a>(residentRequestTaskID) -> ResidentRequestTask</code>
- <code title="put /v1/tasks/residentrequests/{residentRequestTaskId}">client.tasks.residentrequests.<a href="./src/resources/tasks/residentrequests.ts">update</a>(residentRequestTaskID, { ...params }) -> ResidentRequestTask</code>
- <code title="get /v1/tasks/residentrequests">client.tasks.residentrequests.<a href="./src/resources/tasks/residentrequests.ts">list</a>({ ...params }) -> ResidentrequestListResponse</code>

## Todorequests

Types:

- <code><a href="./src/resources/tasks/todorequests.ts">ToDoTask</a></code>
- <code><a href="./src/resources/tasks/todorequests.ts">TodorequestListResponse</a></code>

Methods:

- <code title="post /v1/tasks/todorequests">client.tasks.todorequests.<a href="./src/resources/tasks/todorequests.ts">create</a>({ ...params }) -> ToDoTask</code>
- <code title="get /v1/tasks/todorequests/{toDoTaskId}">client.tasks.todorequests.<a href="./src/resources/tasks/todorequests.ts">retrieve</a>(toDoTaskID) -> ToDoTask</code>
- <code title="put /v1/tasks/todorequests/{toDoTaskId}">client.tasks.todorequests.<a href="./src/resources/tasks/todorequests.ts">update</a>(toDoTaskID, { ...params }) -> ToDoTask</code>
- <code title="get /v1/tasks/todorequests">client.tasks.todorequests.<a href="./src/resources/tasks/todorequests.ts">list</a>({ ...params }) -> TodorequestListResponse</code>

# Vendors

Types:

- <code><a href="./src/resources/vendors/vendors.ts">Vendor</a></code>
- <code><a href="./src/resources/vendors/vendors.ts">VendorInsuranceSave</a></code>
- <code><a href="./src/resources/vendors/vendors.ts">VendorListResponse</a></code>
- <code><a href="./src/resources/vendors/vendors.ts">VendorRetrieveTransactionsResponse</a></code>

Methods:

- <code title="post /v1/vendors">client.vendors.<a href="./src/resources/vendors/vendors.ts">create</a>({ ...params }) -> Vendor</code>
- <code title="get /v1/vendors/{vendorId}">client.vendors.<a href="./src/resources/vendors/vendors.ts">retrieve</a>(vendorID) -> Vendor</code>
- <code title="put /v1/vendors/{vendorId}">client.vendors.<a href="./src/resources/vendors/vendors.ts">update</a>(vendorID, { ...params }) -> Vendor</code>
- <code title="get /v1/vendors">client.vendors.<a href="./src/resources/vendors/vendors.ts">list</a>({ ...params }) -> VendorListResponse</code>
- <code title="get /v1/vendors/{vendorId}/transactions">client.vendors.<a href="./src/resources/vendors/vendors.ts">retrieveTransactions</a>(vendorID, { ...params }) -> VendorRetrieveTransactionsResponse</code>

## Credits

Types:

- <code><a href="./src/resources/vendors/credits.ts">VendorCredit</a></code>

Methods:

- <code title="post /v1/vendors/{vendorId}/credits">client.vendors.credits.<a href="./src/resources/vendors/credits.ts">create</a>(vendorID, { ...params }) -> VendorCredit</code>
- <code title="get /v1/vendors/{vendorId}/credits/{vendorCreditId}">client.vendors.credits.<a href="./src/resources/vendors/credits.ts">retrieve</a>(vendorCreditID, { ...params }) -> VendorCredit</code>

## Notes

Types:

- <code><a href="./src/resources/vendors/notes.ts">NoteListResponse</a></code>

Methods:

- <code title="post /v1/vendors/{vendorId}/notes">client.vendors.notes.<a href="./src/resources/vendors/notes.ts">create</a>(vendorID, { ...params }) -> Note</code>
- <code title="get /v1/vendors/{vendorId}/notes/{noteId}">client.vendors.notes.<a href="./src/resources/vendors/notes.ts">retrieve</a>(noteID, { ...params }) -> Note</code>
- <code title="put /v1/vendors/{vendorId}/notes/{noteId}">client.vendors.notes.<a href="./src/resources/vendors/notes.ts">update</a>(noteID, { ...params }) -> Note</code>
- <code title="get /v1/vendors/{vendorId}/notes">client.vendors.notes.<a href="./src/resources/vendors/notes.ts">list</a>(vendorID, { ...params }) -> NoteListResponse</code>

## Refunds

Types:

- <code><a href="./src/resources/vendors/refunds.ts">VendorRefund</a></code>

Methods:

- <code title="post /v1/vendors/{vendorId}/refunds">client.vendors.refunds.<a href="./src/resources/vendors/refunds.ts">create</a>(vendorID, { ...params }) -> VendorRefund</code>
- <code title="get /v1/vendors/{vendorId}/refunds/{vendorRefundId}">client.vendors.refunds.<a href="./src/resources/vendors/refunds.ts">retrieve</a>(vendorRefundID, { ...params }) -> VendorRefund</code>

## Categories

Types:

- <code><a href="./src/resources/vendors/categories.ts">VendorCategory</a></code>
- <code><a href="./src/resources/vendors/categories.ts">VendorCategorySave</a></code>
- <code><a href="./src/resources/vendors/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="post /v1/vendors/categories">client.vendors.categories.<a href="./src/resources/vendors/categories.ts">create</a>({ ...params }) -> VendorCategory</code>
- <code title="get /v1/vendors/categories/{vendorCategoryId}">client.vendors.categories.<a href="./src/resources/vendors/categories.ts">retrieve</a>(vendorCategoryID) -> VendorCategory</code>
- <code title="put /v1/vendors/categories/{vendorCategoryId}">client.vendors.categories.<a href="./src/resources/vendors/categories.ts">update</a>(vendorCategoryID, { ...params }) -> VendorCategory</code>
- <code title="get /v1/vendors/categories">client.vendors.categories.<a href="./src/resources/vendors/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>

# Workorders

Types:

- <code><a href="./src/resources/workorders.ts">WorkOrder</a></code>
- <code><a href="./src/resources/workorders.ts">WorkOrderEntryContact</a></code>
- <code><a href="./src/resources/workorders.ts">WorkOrderLineItemSave</a></code>
- <code><a href="./src/resources/workorders.ts">WorkorderListResponse</a></code>

Methods:

- <code title="post /v1/workorders">client.workorders.<a href="./src/resources/workorders.ts">create</a>({ ...params }) -> WorkOrder</code>
- <code title="get /v1/workorders/{workOrderId}">client.workorders.<a href="./src/resources/workorders.ts">retrieve</a>(workOrderID) -> WorkOrder</code>
- <code title="put /v1/workorders/{workOrderId}">client.workorders.<a href="./src/resources/workorders.ts">update</a>(workOrderID, { ...params }) -> WorkOrder</code>
- <code title="get /v1/workorders">client.workorders.<a href="./src/resources/workorders.ts">list</a>({ ...params }) -> WorkorderListResponse</code>
