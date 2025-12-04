public with sharing class CaseSummaryController {
    @AuraEnabled(cacheable=true)
    public static Decimal getTotalInvoiceAmount(Id caseId) {
        if(caseId == null) return 0;
        AggregateResult[] agg = [
            SELECT SUM(Amount__c) total
            FROM Invoice__c
            WHERE Matter__c = :caseId
        ];
        if (agg.isEmpty()) return 0;
        Object val = agg[0].get('total');
        if (val == null) return 0;
        return (Decimal) val;
    }
}
