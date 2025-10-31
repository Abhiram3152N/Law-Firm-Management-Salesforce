# Phase 2: Prevent Duplicate Clients

###  Goal
Avoid creating duplicate client records during intake.

---

##  Flow Enhancement
Before creating a new client:

1. Add **Get Records**
   - Object: `Client__c`
   - Condition: `Name = {!txtClientName}` OR `Email = {!txtEmail}`
   - Store First Record Only = TRUE

2. Add **Decision**
   - Label: "Existing Client?"
   - Condition: `Get_Existing_Client.Id` **is null**

3. In **True Path** → Create new `Client__c`
4. In **False Path** → Use existing client: varClientId = {!Get_Existing_Client.Id}


---

##  Output
Flow checks existing clients by name or email and only creates new ones if needed.
