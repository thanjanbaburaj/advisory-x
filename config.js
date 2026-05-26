// ── BR BUSINESS CONFIG ─────────────────────────────────────
// Edit these values before uploading to GitHub

var BR_CONFIG = {

  PIN: '9617',

  ADVISOR: {
    name:   'Babu Raj',
    creds:  'Cert CII · AIA/CII UK · AIA/LIMRA USA',
    phone:  '+971569102951',
    email:  'thanjanbaburaj@gmail.com',
    wa:     '971569102951'
  },

  // Google Sheets
  SHEET_ID:  '1g59Rq4tz9ochU5_9qQNfGhOJ13XUaLqSLzPLFyVz7mo',
  CLIENT_ID: 'http://973273003983-3uki430667q7ujjqts70b051q48fbude.apps.googleusercontent.com',
  SCOPES:    'https://www.googleapis.com/auth/spreadsheets',

  VERSION: '2.1.0',

  COMMISSION: {
    life_new:       40,
    life_renewal:   5,
    investment_new: 30,
    sme_new:        15,
    pa_new:         25
  },

  // ── MESSAGE TEMPLATES ─────────────────────────────────────
  // {firstName} = first name only (e.g. "Roshan" not "Roshan Thayyil")
  // {name}      = full name
  // {company}   = company name
  MESSAGES: {
    touch1:
      'Hi {firstName}, hope you and the family are well. ' +
      'Was thinking about you today — how have things been? ' +
      'Are you still at {company}?',

    touch2:
      'Hi {firstName}, saw this and thought of you — ' +
      'did you know most UAE expats are significantly underinsured ' +
      'for their actual salary? Happy to share what I found out ' +
      'if you\'re curious.',

    touch3:
      'Hi {firstName}, I\'ve been doing complimentary family ' +
      'protection reviews for a few people lately — no obligation, ' +
      'no pressure, just a 20-minute conversation to map out ' +
      'whether there are any gaps. Would you be open to that?',

    post_meeting:
      'Hi {firstName}, great speaking with you today. ' +
      'I\'ll prepare the full Family Protection Review report ' +
      'and send it across shortly. Any questions in the meantime ' +
      '— just message me here.',

    // ── OCCASION MESSAGES ────────────────────────────────────
    eid:
      'Eid Mubarak, {firstName}! 🌙✨\n' +
      'Wishing you and your family a blessed and joyful Eid. ' +
      'May this occasion bring peace, happiness, and prosperity ' +
      'to you and your loved ones.\n\n' +
      '— Babu Raj',

    diwali:
      'Happy Diwali, {firstName}! 🪔✨\n' +
      'Wishing you and your family a year filled with light, ' +
      'joy, and abundance. May this festival bring you ' +
      'everything you wish for.\n\n' +
      '— Babu Raj',

    christmas:
      'Merry Christmas, {firstName}! 🎄✨\n' +
      'Wishing you and your family a wonderful Christmas filled ' +
      'with love, warmth, and joy.\n\n' +
      '— Babu Raj',

    onam:
      'Happy Onam, {firstName}! 🌸✨\n' +
      'Wishing you and your family a joyful and prosperous ' +
      'Onam celebration. Onashamsakal!\n\n' +
      '— Babu Raj',

    gurpurab:
      'Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh!\n' +
      'Happy Gurpurab, {firstName}! 🙏✨\n' +
      'Wishing you and your family a blessed celebration.\n\n' +
      '— Babu Raj',

    birthday:
      'Happy Birthday, {firstName}! 🎂🎉\n' +
      'Wishing you a wonderful day and a year filled with ' +
      'joy, good health, and everything you\'ve worked towards.\n\n' +
      '— Babu Raj'
  },

  // ── PIPELINE STAGES ───────────────────────────────────────
  STAGES: [
    { id: 'prospect',  label: 'Prospect',  colour: '#E6EEFF' },
    { id: 'touched',   label: 'Touched',   colour: '#FEF3E6' },
    { id: 'engaged',   label: 'Engaged',   colour: '#FFF3CD' },
    { id: 'meeting',   label: 'Meeting',   colour: '#E6F0FF' },
    { id: 'proposal',  label: 'Proposal',  colour: '#F0E6FF' },
    { id: 'decision',  label: 'Decision',  colour: '#FDEAEA' },
    { id: 'client',    label: 'Won ✓',     colour: '#E6F4EC' },
    { id: 'nurture',   label: 'Nurture',   colour: '#F5F5F5' }
  ],

  // ── INTERACTION OUTCOMES ──────────────────────────────────
  OUTCOMES: [
    { id: 'positive',     label: '✅ Positive — follow-up agreed' },
    { id: 'later',        label: '📅 Requested later — date set' },
    { id: 'no_answer',    label: '📵 No answer — try again' },
    { id: 'not_interested',label: '❌ Not interested — move to Nurture' },
    { id: 'referred',     label: '🔄 Referred someone' },
    { id: 'fna_discussed',label: '📋 FNA / Protection Review discussed' },
    { id: 'proposal_sent',label: '💼 Proposal sent' },
    { id: 'application',  label: '✍️ Application started' },
    { id: 'concern',      label: '⚠️ Concern raised — needs follow-up' }
  ],

  // ── QUICK LOG TAGS ────────────────────────────────────────
  LOG_TAGS: [
    {
      id: 'family',
      label: '👨‍👩‍👧 Family mentioned',
      note: 'Client mentioned family situation: [edit here]'
    },
    {
      id: 'income_change',
      label: '💰 Income change',
      note: 'Client indicated income has changed. Review FNA: [edit here]'
    },
    {
      id: 'objection',
      label: '🚧 Objection raised',
      note: 'Objection: [Premium / Spouse / Timing / Already covered / Other]\nResponse given: [edit here]'
    },
    {
      id: 'fna',
      label: '📊 Protection gaps discussed',
      note: 'Gaps discussed: Life ☐  CI ☐  Disability ☐  Emergency ☐  Education ☐  Retirement ☐\nClient response: [edit here]'
    },
    {
      id: 'referred',
      label: '🤝 Referred someone',
      note: 'Referral received from this contact. New contact added.'
    },
    {
      id: 'meeting_scheduled',
      label: '📅 Meeting scheduled',
      note: 'Meeting confirmed for: [date/time]. Location: [edit here]'
    },
    {
      id: 'policy_concern',
      label: '📋 Policy concern',
      note: 'Client raised concern about existing policy: [edit here]\nAction required: [edit here]'
    },
    {
      id: 'birthday',
      label: '🎂 Birthday / Occasion',
      note: 'Wished [occasion]. Client response: [edit here]'
    }
  ]
};
