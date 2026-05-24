# BR Business · Advisory System

**A professional insurance and financial advisory management system built for Babu Raj, Dubai UAE.**

---

## Access

**Live URL:** https://thanjanbaburaj.github.io/advisory-x/

*PIN protected. Private use only.*

---

## What This System Does

- **Today Dashboard** — Smart One Action, lead priorities, renewal alerts, live hora guide, weekly score
- **CRM** — Contact management, lead scoring, one-click WhatsApp and calling, interaction logging, pipeline view, CSV import
- **Policies** — Policy management, renewal engine, commission tracker *(Session 2)*
- **Calculators** — FNA, SME Group Medical, Group Life, Scenario Modeller *(Session 3-4)*
- **Leads** — Lead generation, referral chain, partner pipeline, content calendar *(Session 7)*

---

## File Structure

```
advisory-x/
├── index.html        Login screen with PIN authentication
├── config.js         System settings — edit PIN and IDs here
├── sheets.js         Database engine (IndexedDB + Google Sheets API)
├── style.css         Master stylesheet
├── logout.js         Session management and logout
├── today.html        Today Dashboard
├── crm.html          Contact Relationship Manager
└── README.md         This file
```

---

## Session Build Log

| Session | Delivered | Status |
|---------|-----------|--------|
| S1 | Foundation — Login, Today, CRM | ✅ Complete |
| S2 | Policies, Renewals, FNA Calculator | ⏳ Next |
| S3 | SME, Group Life, Calculators | 🔜 |
| S4 | Investment Tracker | 🔜 |
| S5 | Import Engine + Google Sheets Sync | 🔜 |
| S6 | Lead Generation Suite | 🔜 |
| S7 | AI Layer | 🔜 |
| S8 | Personal System | 🔜 |
| S9 | NRI Module + Compliance | 🔜 |
| S10 | Full Integration + Optimisation | 🔜 |

---

## Configuration

Edit `config.js` to update:
- `PIN` — your 4-digit access PIN
- `SHEET_ID` — your Google Sheet ID
- `CLIENT_ID` — your Google OAuth Client ID
- `VERSION` — increment by 0.1 after each change

After editing — commit to GitHub and wait 2 minutes.

---

## Data Storage

- **Local:** IndexedDB in your browser (up to 20,000 contacts)
- **Cloud:** Google Sheets (unlimited, syncs automatically)
- **Backup:** Export from CRM → Import tab at any time

---

## UAT Tracking

UAT log maintained in Google Sheet tab: `UAT`
38 test cases across all Session 1 features.

---

*Built session by session. Each module independent. Zero ongoing cost.*
