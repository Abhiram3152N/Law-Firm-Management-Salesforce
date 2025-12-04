import { LightningElement, api, wire } from 'lwc';
import getTotalInvoiceAmount from '@salesforce/apex/CaseSummaryController.getTotalInvoiceAmount';

export default class CaseSummary extends LightningElement {
  @api recordId;
  totalAmount;
  error;

  @wire(getTotalInvoiceAmount, { caseId: '$recordId' })
  wiredAmount({ data, error }) {
    if (data !== undefined) {
      this.totalAmount = data;
      this.error = undefined;
    } else if (error) {
      this.totalAmount = undefined;
      this.error = 'Unable to load invoice amount';
      // optional: console.error(error);
    }
  }
}
