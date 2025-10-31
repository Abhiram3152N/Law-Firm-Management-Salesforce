# Phase 3: Auto-Assign Attorney (Apex Trigger)

###  Goal
Automatically assign an attorney when a new Matter is created.

---

##  Apex Trigger

```apex
trigger AssignAttorney on Matter__c (before insert) {
    // Fetch default attorney (first active user)
    User defaultAttorney = [SELECT Id FROM User WHERE IsActive = TRUE LIMIT 1];
    for (Matter__c c : Trigger.new) {
        if (c.Assigned_Attorney__c == null) {
            c.Assigned_Attorney__c = defaultAttorney.Id;
        }
    }
}
