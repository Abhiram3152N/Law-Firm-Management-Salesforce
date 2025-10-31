# Phase 4: Auto-Close Billing

###  Goal
When a Matter is closed, automatically mark related invoices as Paid.

---

##  Flow Configuration

**Flow Type:** Record-Triggered Flow  
**Object:** Matter__c  
**Trigger:** When record is updated → Status = "Closed"

### Steps

1. **Get Records**
   - Object: `Invoice__c`
   - Condition: `Matter__c = $Record.Id`

2. **Update Records**
   - Field: `Status__c = "Paid"`

---

##  Result
When a Matter is marked “Closed”, all related invoices automatically update to “Paid”.
