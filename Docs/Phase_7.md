# Phase 7: Case Summary LWC

## Purpose
A lightweight Lightning Web Component to display key Matter (Case) details and the total invoice amount for the record.

## Files added
- `force-app/main/default/lwc/caseSummary/*` (html, js, meta, css)
- `force-app/main/default/classes/CaseSummaryController.cls`
- `force-app/main/default/classes/CaseSummaryController.cls-meta.xml`

## Prerequisites
- `Matter__c` object exists and contains fields:
  - `Client__c` (lookup)
  - `Assigned_Attorney__c` (lookup to User)
  - `Status__c`, `Practice_Area__c`, `Days_Open__c`
- `Invoice__c` object has a lookup to Matter (`Matter__c` used in this code)
- Users viewing the LWC need **Read** access on `Matter__c` and `Invoice__c`, and Field-Level Security for the shown fields.

## Deploy & Usage
   sf project deploy start --source-dir force-app/main/default/lwc/caseSummary --target-org Law-Firm-Salesforce
   sf project deploy start --source-dir force-app/main/default/classes/CaseSummaryController.cls --target-org Law-Firm-Salesforce
