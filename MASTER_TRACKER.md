# BR Business — Master Project Tracker
## Live Document · Updated Each Session

---

## SYSTEM STATUS

```
Live URL:  https://thanjanbaburaj.github.io/advisory-x/
PIN:       9617
GitHub:    thanjanbaburaj/advisory-x
```

### Files on GitHub (upload these after each session)
| File | Version | Status | Last Updated |
|------|---------|--------|--------------|
| index.html | 1.0 | ✅ Live | Session 2 |
| config.js | 2.1 | ✅ Updated this session | Session 3 |
| sheets.js | 2.1 | ✅ Updated this session | Session 3 |
| style.css | 1.0 | ✅ Live | Session 2 |
| logout.js | 1.0 | ✅ Live | Session 2 |
| today.html | 1.0 | ✅ Live | Session 2 |
| crm.html | 2.2 | ✅ Fixed this session | Session 3 |
| policies.html | 1.0 | ✅ Live | Session 2 |
| calculators.html | 2.1 | ✅ Fixed this session | Session 3 |
| advisory.html | 2.0 | ✅ Updated | Session 3 |

---

## LOCKED DECISIONS (never revisit these)

### Credentials
```
Cert CII · AIA/CII UK · AIA/LIMRA USA
NEVER "99%" — removed everywhere permanently
```

### Colour Palette (Jyotish-aligned, locked)
```
Navy   #0B1E35  Saturn — structure, discipline
Gold   #C9893A  Jupiter — wisdom, abundance  
Gold2  #E8B86A  Sun — authority, vitality
Green  #0D6B3A  Mercury — intelligence
Amber  #B5610A  Mars — action required
Coral  #C04444  Attention (not panic)
Cream  #FDFAF5  Moon — peace, clarity
DO NOT CHANGE
```

### Language Rules (locked)
```
"FNA"            → "Family Protection Review" (client-facing)
"Gap"            → "What remains unaddressed" / "Unaddressed exposure"
"Shortfall"      → "What needs securing"
"Cost of Delay"  → "What changes if this waits?"
"Product"        → "Plan" or "Arrangement"
"Premium"        → "Monthly investment" (first meeting)
"Gap Analysis"   → "Protection Picture"
"Total Gap"      → "Total to be secured"
"Quick FNA"      → "Quick Protection Check" (client-facing)
First name only  → WhatsApp always uses first name via U.firstName()
NRI flag         → Indian only (not Pakistani/Bangladeshi/Sri Lankan)
```

### Astrology (locked)
```
Birth: 8 Nov 1971, 9:16 PM, Tezu, Arunachal Pradesh
Ascendant: Cancer (Moon-ruled)
Sun: Libra / Vishakha (Jupiter+Mars)
Moon: Cancer / Pushya (Saturn) ← Nakshatra of the Protector
Birth number: 8 (Saturn)
Life path: 1 (Sun)
Current Mahadasha: Venus → ends Feb 2028
Next Mahadasha: Sun → Feb 2028–Jan 2034

Best meeting days: Monday (Moon), Thursday (Jupiter), Friday (Venus)
Best hora: Moon hora, Jupiter hora
Power window: Now → Feb 2028 (plant everything)
```

---

## BUGS FIXED THIS SESSION (Session 3)

- [x] CRM tabs not responding — JS syntax error (literal \n in string)
- [x] CRM import function broken — orphaned code fragment + missing }
- [x] Field ID mismatches (lgNext→lgNextAction, lgDate→lgFollowup, logList→logsList)
- [x] "99%" in calculators.html — removed
- [x] Retirement calculation overflow — PV formula, input guards, sanity cap
- [x] WhatsApp first name — U.firstName() via {firstName} template token

---

## FEATURES ADDED THIS SESSION (Session 3)

- [x] Eid Mubarak filter (🌙 Eid button in CRM contacts)
- [x] Send Eid batch (📤 one-tap WhatsApp to all Muslim contacts)
- [x] Occasion messages: Eid, Diwali, Christmas, Onam, Gurpurab, Birthday
- [x] logOccasion() — auto-logs every occasion message sent
- [x] Days-since-last-contact badge on every contact card
- [x] Outcome dropdown in Log (9 outcomes, required field)
- [x] Outcome → auto-suggests next action
- [x] Quick tags → pre-populated note lines (tap tag = note appears)
- [x] Referral quick-add panel (name/mobile/email when outcome=referred)

---

## PENDING — SESSION 4 (Advisory Tool)

### Approved to build
- [ ] Language: Remove all "Gap" from client-facing labels
- [ ] Language: Remove "FNA" → "Family Protection Review" on client screens  
- [ ] Quick Protection Check: 4 fields only (no cover fields)
- [ ] Quick result: Protection score ring (not emoji traffic light)
- [ ] Quick result: "What needs securing" (not "Est. Gap")
- [ ] [i] logic modal on every calculated number
- [ ] "What changes if this waits 12 months?" after each module
- [ ] Priority checklist: "What matters most?" before detailed review
- [ ] Advisor strategy notes panel (private, hidden from print)
- [ ] Pre-fill Detailed FNA from Quick result

### Awaiting approval before building
- [ ] Existing cover — capture once only (redesign flow)
- [ ] Min/Max cover range (Floor vs Ceiling — from GEM v3)
- [ ] Underwriting alert (when gap > 20× annual income)
- [ ] Advisory letter generator (narrative from numbers)
- [ ] Session save/resume (IndexedDB)

---

## PENDING — SESSION 5 (CRM Enhanced)

- [ ] Contact timeline: Full interaction history inline on contact view
- [ ] Kanban pipeline: Drag-and-drop stage columns
- [ ] Focus View tab: Today's overdue contacts only  
- [ ] Calendar View: Contacts by follow-up date
- [ ] Inline contact edit: Tap any field to edit directly
- [ ] Swipe actions (mobile): right=WhatsApp, left=Log
- [ ] Lead score decay: -5 every 30 days without interaction
- [ ] Engagement signals: score +/- from logged outcomes

---

## PENDING — SESSION 6 (Calculators Enhanced)

- [ ] Real-time calculation (every keystroke updates result)
- [ ] Daily cost anchor: "AED X per day" in all tier displays
- [ ] Child name in education report ("Fund for Arjun")
- [ ] Save FNA to contact record with full detail
- [ ] Print: investment grade, page-break perfect
- [ ] Report: client name in every page header
- [ ] Report: page numbers in footer

---

## PENDING — SESSION 7 (Today Dashboard Enhanced)

- [ ] Daily streak counter
- [ ] Today Score 0–100 (updates as actions completed)
- [ ] Completion message when all priorities done
- [ ] Birthday reminders (this week / this month) 
- [ ] Religious occasion alerts (Eid, Diwali, Christmas, Onam)
- [ ] Hora highlighted for Moon + Jupiter (Babu's power hours)
- [ ] Focus mode (hide everything except today's actions)
- [ ] Weekly benchmark vs target

---

## PENDING — SESSION 8 (Policies + Commission)

- [ ] Trail commission dashboard
- [ ] Lapse alert engine (30/14/7 day warnings)
- [ ] Renewal pipeline value (weighted probability)
- [ ] Commission projection: this month / next / quarter
- [ ] Book of business total
- [ ] Policy health score per client

---

## PENDING — SESSION 9 (Import + Google Sheets)

- [ ] Google Sheets full two-way sync
- [ ] Bulk import all formats (CSV, vCard, Excel)
- [ ] Lapse recovery workflow
- [ ] Contact data enrichment hooks
- [ ] Backup/restore one-tap
- [ ] Compliance export

---

## PENDING — SESSION 10 (Lead Generation)

- [ ] Referral chain tracking (who referred whom, degrees)
- [ ] Partner pipeline (CA, lawyer, HR)
- [ ] WhatsApp broadcast list manager
- [ ] Segment by community/religion/nationality/life stage
- [ ] LinkedIn outreach template library
- [ ] Event follow-up sequence builder
- [ ] SME Group Medical prospect identifier

---

## PENDING — SESSION 11 (AI Layer — Claude Embedded)

- [ ] Personalised FNA advisory letter (generated per client)
- [ ] Objection response suggestions
- [ ] Meeting preparation brief (from contact history)
- [ ] WhatsApp reply drafts in Babu's voice
- [ ] FNA narrative generator (numbers → story)
- [ ] Product recommendation reasoning
- [ ] NRI planning summary generator

---

## PENDING — SESSION 12 (NRI Module + Compliance)

- [ ] India repatriation planning calculator
- [ ] FEMA remittance tracker
- [ ] India vs UAE inflation comparison
- [ ] KYC expiry tracking (passport, visa, Emirates ID)
- [ ] Annual review reminder engine
- [ ] Suitability records per client
- [ ] Professional disclaimer with CII reference on all docs

---

## PENDING — SESSION 13 (Personal System + Astrology)

- [ ] Moon + Jupiter hora highlighted in Today dashboard
- [ ] Venus mahadasha countdown (ends Feb 2028)
- [ ] Auspicious muhurta for signings
- [ ] Daily ritual tracker
- [ ] Weekly planning session (Sunday)

---

## PENDING — SESSION 14 (Final Integration)

- [ ] Mobile perfect (iOS Safari + Android Chrome)
- [ ] Offline mode (service worker)
- [ ] UAT all 38 test cases
- [ ] Performance < 1 second load
- [ ] Final design review
- [ ] GitHub Pages deployment verification

---

## IDEAS FROM UPLOADED TOOLS — STATUS

### From AdvisoryTool v4
- [ ] Three-dimension scoring (Protection / Clarity / Urgency) — Session 4
- [x] Pillow Test question — DONE (in advisory.html)
- [ ] Mathematical cost of delay box — Session 4
- [ ] Commitment checklist (printable) — Session 4
- [ ] Advisor strategy notes panel — Session 4
- [ ] Session save/resume — Session 9

### From GEM v3 (NewConversionTool)
- [ ] [i] Logic modal on every number — Session 4
- [ ] Choice Architecture (Floor vs Ceiling) — Session 4 (awaiting approval)
- [ ] Underwriting alert — Session 4 (awaiting approval)
- [ ] Advisory letter narrative generator — Session 11 (AI layer)
- [x] Liquidity haircut model — DONE (in advisory.html)
- [x] Survival timeline / Runway — DONE

### From QuickAnalysis GEM v1
- [ ] Priority checkbox first ("What matters most?") — Session 4

### From Stage 1 Tool
- [ ] "Show full methodology" button — Session 4

### From Stage 2 Tool
- [x] Liquidity layers 3-tier — DONE
- [ ] Volatility alignment score — Session 12 (NRI)
- [ ] Advisory script generator — Session 11 (AI)

### From Visual Gap Analysis v3.4.6
- [ ] 5-stage named navigation — Session 4
- [ ] KYC / underwriting tab — Session 12

### NOT implementing (decided)
- AdvisoryTool v1 score-based routing — manipulative, skip
- Stage 2 full 192KB complexity — overkill, take ideas only
- Visual Gap Analysis extreme red alarm design — wrong tone

---

## DESIGN PRINCIPLES (locked)

```
1. One screen, one message
2. Numbers do the selling, not the advisor
3. Every number has a [i] explanation
4. Client name appears throughout (not "client")
5. Partner and children names used (not "your wife")
6. Daily cost anchor on every premium shown
7. Mobile-first (phone in meetings, not laptop)
8. Print = Investment Grade (page breaks, headers, page numbers)
9. Advisor script box on every psyche screen (purple, private feel)
10. Progress always visible (5 named stages)
```

---

## KNOWN ISSUES (active)

| # | Issue | File | Priority | Status |
|---|-------|------|----------|--------|
| 1 | Calculator: retirement still needs validation testing | calculators.html | High | Fixed, needs UAT |
| 2 | Advisory.html: report page breaks not perfect | advisory.html | Medium | Session 4 |
| 3 | CRM: contact edit modal shows full name not firstName | crm.html | Low | Session 5 |
| 4 | Today.html: birthday alerts not yet using DOB from contacts | today.html | Medium | Session 7 |

---

## HOW TO USE THIS TRACKER

```
Before each session:
  Read this file to know exactly where we are.
  Identify which session we are building.
  Confirm the LOCKED DECISIONS section.

During each session:
  Tick items as completed [x].
  Add new items discovered.
  Move "Awaiting approval" → "Approved" when confirmed.

After each session:
  Update "Files on GitHub" table.
  Move completed items to "DONE" status.
  Add any new bugs found to KNOWN ISSUES.
  Update "Last Updated" column.
```


---

## FINAL ADDITIONS BEFORE CLOSING CHAT

### HubSpot Reverse Chronological Order — APPROVED
All interaction logs will display newest first.
Most recent contact = top of list. Always.
Applies to: CRM log tab, contact timeline, Today dashboard activity.
Rationale: In sales, what happened yesterday matters more than 3 months ago.
You should never scroll to find the last interaction.
Status: Add to Session 5 (CRM Enhanced)

### $0 Budget Principles — LOCKED
Every feature must work with zero external cost:
- GitHub Pages (free hosting)
- IndexedDB (free local storage)
- Google Sheets API (free tier — 100 req/100sec)
- Google OAuth (free)
- WhatsApp API links (free — no Business API needed)
- Web fonts via Google Fonts CDN (free)
- NO paid services, NO subscriptions, NO APIs with cost
- Apollo.io / LinkedIn Sales Navigator = future only, when revenue justifies

### Sales-First Principle — LOCKED
Every feature must answer: "Does this help close a sale?"
If not — it does not get built.
Priority order for every build decision:
1. Does it create a conversation?
2. Does it move the conversation forward?
3. Does it make the advisor look professional?
4. Does it reduce friction to a decision?
5. Does it create a record that protects the advisor?

### Simplicity Principle — LOCKED
- Maximum 3 taps to reach any function
- Maximum 1 screen per decision
- No feature that requires reading instructions to use
- If it needs explanation on screen — redesign it

### Efficiency Principle — LOCKED
- Every field pre-filled where possible (from CRM → FNA → Report)
- Enter once, used everywhere
- No data entered twice
- Every action logged automatically where possible

### Things REMOVED from scope (keep it clean)
- Volatility alignment score (complexity, not sales)
- Full Stage 2 tool replication (overkill)
- Extreme red alarm UI design (wrong tone)
- Score-based routing manipulation (v1 approach)
- Any feature requiring manual data re-entry

---

## SESSION HANDOFF NOTES (read at start of next chat)

### What was done this session
1. CRM JS syntax fixed (tabs now work, import works)
2. All "99%" removed from every file
3. Retirement calculation overflow fixed (PV formula)
4. Eid batch message system added
5. Log interaction completely redesigned
6. Language: "gap" → "picture" in Quick FNA
7. Credentials standardised everywhere
8. This master tracker created

### What to do FIRST in next session
1. Upload all 5 updated files to GitHub immediately
2. Test CRM tabs on phone (should all respond now)
3. Test import with clients_for_import.csv
4. Test Eid filter → send a test message to yourself
5. Then begin Session 4 builds (Advisory tool language + [i] modals)

### Files to upload to GitHub NOW
- config.js (updated)
- sheets.js (updated)
- crm.html (fixed + enhanced)
- calculators.html (fixed)
- advisory-cx-mockup.html → upload as advisory.html

### Password / PIN
9617

### Next session should start with:
"Continue BR Business advisory system build.
Read MASTER_TRACKER.md for full context.
Begin Session 4."
