# Phase 6: Permission Sets, Report Access & Dashboard Sharing

###  Goal
Define fine-grained access controls for each user role using **Permission Sets**,  
and ensure correct visibility of **Reports** and **Dashboards**.

---

##  Step 1: User Permission Sets

Permission Sets provide additional privileges on top of Profiles.  
They are reusable and make access management flexible.

| Permission Set | Purpose | Assigned To |
|----------------|----------|--------------|
| **Invoice Override** | Allow edit/delete of invoices | Partner |
| **Flow Access** | Allow running the Intake Flow | Attorney, Intake Clerk |
| **Reports Access** | Enable viewing dashboards/reports | Partner, Attorney, Billing Clerk |

###  Create Each Permission Set
1. Setup → **Permission Sets → New**
2. **Label:** (e.g., “Invoice Override”)
3. Leave License blank (works for all users)
4. Under **Object Settings**, configure:
   - For Invoice Override → Object: `Invoice__c` → Check `Read`, `Edit`, `Delete`
   - For Flow Access → Object: `Flow` → Grant “Run Flow” access
   - For Reports Access → Under **System Permissions** → Enable:
     - `Run Reports`
     - `View Dashboards`
5. Save → **Manage Assignments → Add Assignments** → select users.

---

##  Step 2: Report & Dashboard Folders

Organize content by folder for secure access.

| Folder Name | Type | Contents |
|--------------|------|-----------|
| **Law Firm Reports** | Report Folder | Case, Client, and Billing Reports |
| **Law Firm Dashboard** | Dashboard Folder | KPI and Summary Visuals |

**Steps:**
1. Go to **Reports** → **All Folders** → click **New Folder**
   - Name: `Law Firm Reports`
2. Go to **Dashboards** → **All Folders** → click **New Folder**
   - Name: `Law Firm Dashboard`

---

##  Step 3: Share Folders by Role

###  Law Firm Reports Folder
| Role | Access |
|------|---------|
| Partner | View & Edit |
| Attorney | View Only |
| Billing Clerk | View Only |
| Paralegal | None |
| Intake Clerk | None |

###  Law Firm Dashboard Folder
| Role | Access |
|------|---------|
| Partner | View & Edit |
| Attorney | View Only |
| Billing Clerk | View Only |
| Paralegal | None |
| Intake Clerk | None |

**To Configure:**
1. In the folder → click ▼ → **Share**
2. Choose **Share With → Roles**
3. Add roles and access levels per above → **Save**

---

##  Step 4: Profile Permissions for Reporting

Each profile needs minimum rights to use the Reports & Dashboards tabs.

| Profile | Run Reports | View Dashboards | Create Reports | Edit Dashboards |
|----------|--------------|----------------|----------------|-----------------|
| Partner | ✅ | ✅ | ✅ | ✅ |
| Attorney | ✅ | ✅ | ❌ | ❌ |
| Billing Clerk | ✅ | ✅ | ❌ | ❌ |
| Paralegal | ❌ | ❌ | ❌ | ❌ |
| Intake Clerk | ❌ | ❌ | ❌ | ❌ |

**How to Enable:**
1. Setup → **Profiles**
2. Open each relevant profile (Partner, Attorney, Billing Clerk)
3. Under **System Permissions**, check:
   - `Run Reports`
   - `View Dashboards`
   - (Optional) `Create and Customize Reports` for Partner only
4. Save.

---

##  Step 5: Verification Matrix

| Role | Reports Tab | Dashboard Tab | Access Type | Result |
|------|--------------|----------------|--------------|---------|
| Partner | ✅ | ✅ | Full Control | Can create/edit/share |
| Attorney | ✅ | ✅ | View Only | Can view all reports |
| Billing Clerk | ✅ | ✅ | View Only | See billing data |
| Paralegal | ❌ | ❌ | No Access | Tabs hidden |
| Intake Clerk | ❌ | ❌ | No Access | Tabs hidden |

###  Testing Steps
- Login as (or “Login As”) each role
- Try accessing **Reports** and **Dashboards**
- Validate folder visibility and access type match the matrix above.