# Phase 3: Data Modeling & Relationships

## Standard & Custom Objects
In our Salesforce law firm project, we are using both **standard** and **custom objects**:

- **Standard Objects:**
  - **Account:** Used to store client information (corporate or individual).
  - **Contact:** Used to store client contacts and associated details.
  
- **Custom Objects:**
  - **Time Entry:** Tracks employee work hours and activities related to projects.
  - **Matter Participant:** tracks all people involved in a Matter and their roles, linking Contacts or Users to specific cases.

---

## Fields
Custom fields were created in the **Time Entry** object:

- **Date of Work** – *Date*: Captures the date of the work performed.
- **Hours Spent** – *Number*: Stores hours worked by an employee.
- **Description** – *Long Text Area*: Stores additional details of the work.
- **Billable** – *Checkbox*: Indicates if the time entry is billable.

---

## Record Types
- Record Types allow differentiation of Time Entries based on business requirements, such as:
  - **Billable Time Entry**
  - **Non-Billable Time Entry**
- Custom Page Layouts can be assigned per record type to optimize data entry.

---

## Page Layouts
- Fields are organized logically for data entry efficiency:
  - **Date of Work**, **Hours Spent**, **Employee**, **Project/Task**, **Description**, **Billable**, **Status**.
- Related Lists can include attachments, comments, or approval history for context.

---

## Compact Layouts
- Compact layouts display key information in record highlights:
  - **Time Entry Number**, **Date of Work**, **Hours Spent**, **Employee**, **Status**.

---

## Schema Builder
- Salesforce **Schema Builder** can visualize:
  - Relationships between **Case**, **Time Entry**, and **Case Participant**.
  - Field-level relationships and object connections.

---

## Lookup vs Master-Detail vs Hierarchical Relationships
- **Lookup Relationship:** 
  - Used between Case Participant → Contact  
  - Flexible, allows records to exist independently.  
- **Master-Detail Relationship:**  
  - Used between Case Participant → Case  
- **Hierarchical Relationship:**  
  - Typically used within the User object to define reporting structures (manager/subordinate).
  - Used for multiple witnesses 

---

## Junction Objects
- Using the Matter_Participant__c junction object, you can attach multiple Contacts (Witness, Opposing Counsel, Client Contacts) to a single Case.

---

## External Objects
- External objects allow Salesforce to reference data outside of Salesforce (e.g., external billing or project management system) without storing it directly in Salesforce.
- Could be used for integrating with a law firm’s **external billing system** for Time Entry reporting.