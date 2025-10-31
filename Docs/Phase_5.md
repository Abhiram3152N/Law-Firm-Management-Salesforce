# Phase 5: Reports & Dashboard

###  Goal
Visualize firm performance and workload distribution.

---

##  Report Setup

**Custom Report Type**
- Primary Object: `Matter__c`
- Related Object: `Client__c`
- Optional Object: `Invoice__c`

**Fields to Include**
- Client Name
- Matter Name
- Attorney (`Assigned_Attorney__c`)
- Days_Open__c (Formula)
- Invoice Amount

---

##  Chart
**Type:** Bar / Pie  
**Y-Axis:** Invoice Amount  
**X-Axis:** Attorney

---

## Formula (Days Open)
TODAY() - DATEVALUE(CreatedDate)


---

##  Dashboard: “Law Firm Dashboard”
- Component 1: Total Invoice Amount by Clients
- Component 2: Active vs Closed Matters
- Component 3: Matters by Practice Area

---

##  Result
One-click visibility of firm revenue, workload, and performance.