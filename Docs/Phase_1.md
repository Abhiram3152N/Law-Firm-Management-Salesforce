# Phase 1: Client Intake Flow

###  Goal
Capture client and Matter details via a guided screen flow and automatically create records.

---

##  Flow Configuration

**Flow Type:** Screen Flow  
**Name:** Intake Flow

###  Elements

1. **Screen (Client Input)**
   - `txtClientName`
   - `txtEmail`
   - `txtPhone`

2. **Screen (Case Details)**
   - `txtMatterName`
   - `pickPracticeArea` (Picklist: Criminal, Civil, Corporate)

3. **Create Records**
   - Object: `Client__c`
   - Fields: Name, Email, Phone

4. **Create Records**
   - Object: `Matter__c`
   - Fields: Matter Name, Practice Area, Client Lookup

---

##  Deployment
- **Setup → Flows → New Flow → Screen Flow**
- Add the above elements.
- Activate the flow.

---

##  Output
Each intake automatically creates a **Client** and **Matter** record linked together.
