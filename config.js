// ═══════════════════════════════════════════════════════════
// BR BUSINESS SYSTEM — YOUR SETTINGS FILE
// ═══════════════════════════════════════════════════════════
//
// INSTRUCTIONS — Edit only the 3 lines marked with ★
//
// ★ LINE 1: Replace YOUR_GOOGLE_SHEET_ID_HERE
//   with the long ID from your Google Sheet URL
//   (the part between /d/ and /edit in the URL)
//
// ★ LINE 2: Replace YOUR_GOOGLE_CLIENT_ID_HERE
//   with the Client ID from Google Cloud Console
//   (ends in .apps.googleusercontent.com)
//
// ★ LINE 3: Replace 1234 with your chosen 4-digit PIN
//   Use any 4 numbers you will remember
//
// After editing — save this file and upload to GitHub
// ═══════════════════════════════════════════════════════════

const BR_CONFIG = {

  SHEET_ID:  'YOUR_GOOGLE_SHEET_ID_HERE',   // ★ LINE 1
  CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',   // ★ LINE 2
  PIN:       '1234',                          // ★ LINE 3

  NAME:        'Babu Raj',
  PHONE:       '+971569102951',
  EMAIL:       'thanjanbaburaj@gmail.com',
  DESIGNATION: 'Insurance & Financial Advisor',
  CREDENTIALS: 'Cert CII · AIA/CII UK · AIA/LIMRA USA',

  TARGETS: {
    contacts:  15,
    meetings:   5,
    proposals:  3,
    closings:   1,
    referrals:  3
  },

  COMMISSION: {
    life_initial:       15,
    life_renewal:        8,
    investment_initial:  2,
    investment_trail:    0.75,
    group_medical:      10,
    group_life:         12,
    liability:          15
  },

  MESSAGES: {
    touch1:          "Hi {name}, hope you and the family are well. Was thinking about you today — how have things been? Are you still at {company}?",
    touch2:          "Hi {name}, saw this and thought of you — did you know most UAE expats are underinsured for their actual salary? Happy to share what I found out if you're curious.",
    touch3:          "Hi {name}, I've been doing complimentary financial health checks for a few people lately — no obligation, no pressure, just a 20-minute conversation to map out whether there are any gaps. Would you be open to that?",
    post_meeting:    "Hi {name}, thank you so much for your time today. I really enjoyed our conversation. I'll send you the details we discussed — if any questions come to mind before then, just reply here or call me anytime.",
    renewal_30:      "Hi {name}, your {product} with {insurer} renews in about 4 weeks. I'd like to do a quick review before then to make sure the coverage still fits your situation perfectly — 20 minutes, I can come to you or we do it on a call. When works for you?",
    renewal_14:      "Hi {name}, just following up — your {product} renews in 2 weeks. Shall we do a quick review this week? I want to make sure everything is in order for you.",
    renewal_7:       "Hi {name}, your {product} renewal is next week. I want to make sure this is sorted for you with no gaps. Can we confirm the renewal today?",
    referral:        "I work almost entirely through referrals. Is there one person in your life — a colleague, a friend — who you think would benefit from this conversation? Just one name.",
    proposal_follow: "Hi {name}, following up on the proposal I shared — I want to make sure you had a chance to review it and that I answered all your questions. Happy to go through any part of it again. When suits you?",
    annual_review:   "Hi {name}, it's been a year since we put your plan in place — I'd love to do a quick annual review to make sure everything still fits your situation. 20 minutes. When works for you this week?",
    birthday:        "Hi {name}, wishing you a very happy birthday! Hope you have a wonderful day with your family.",
    claim_follow:    "Hi {name}, just checking in to make sure the claim process is going smoothly for you. Please don't hesitate to call me directly if you need anything — I'm here to make this as easy as possible."
  },

  SCORING: {
    has_dependants:       10,
    uae_3plus_years:       8,
    age_30_to_50:          7,
    industry_bonus:        5,
    contact_last_7_days:  15,
    contact_last_30_days:  8,
    followup_date_set:     8,
    two_plus_interactions: 5,
    status_hot:           15,
    status_warm:           8,
    premium_entered:       7,
    products_tagged:       5,
    referred_by_client:    8,
    no_contact_90_days:  -10,
    cold_no_followup:     -8,
    no_phone_or_email:    -5
  },

  PROVIDERS: {
    investment: [
      'Zurich International','Friends Provident / Evelyn Partners',
      'Generali Worldwide','RL360','Investors Trust',
      'MetLife International','LIC International','SunLife',
      'Old Mutual International','Standard Life International',
      'Quilter International','AXA Wealth','HDFC International',
      'Lombard International','Utmost International'
    ],
    life: [
      'Zurich','AXA','MetLife','LIC International',
      'Friends Provident','SunLife','Takaful Emarat',
      'Al Hilal Takaful','Noor Takaful',
      'Old Mutual International','Standard Life'
    ],
    group_medical: [
      'Daman','Sukoon','QIC','AXA','Neuron',
      'ADNIC','Takaful Emarat','Noor Takaful',
      'MSH International','NextCare'
    ],
    group_life: [
      'Zurich','AXA','MetLife','Oman Insurance',
      'ADNIC','Takaful Emarat'
    ],
    general: ['Jumbo','AXA','RSA','Oman Insurance','ADNIC']
  }
};

const SHEETS = {
  contacts:    'CONTACTS',
  policies:    'POLICIES',
  investments: 'INVESTMENTS',
  logs:        'LOGS',
  fna:         'FNA',
  sme:         'SME',
  commission:  'COMMISSION',
  goals:       'GOALS',
  partners:    'PARTNERS',
  workshops:   'WORKSHOPS'
};
