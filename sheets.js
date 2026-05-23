// ═══════════════════════════════════════════════════════════
// GOOGLE SHEETS API CONNECTOR
// Handles all read/write operations to Google Sheets
// ═══════════════════════════════════════════════════════════

const GS = {

  token: null,
  mode: 'pin', // 'google' or 'pin'

  // ── INITIALISE ─────────────────────────────────────────
  init() {
    this.token = localStorage.getItem('br_token');
    this.mode  = localStorage.getItem('br_auth') || 'pin';
  },

  // ── CHECK IF ONLINE AND AUTHENTICATED ──────────────────
  canSync() {
    return navigator.onLine && this.token && this.mode === 'google';
  },

  // ── READ ALL ROWS FROM A SHEET ──────────────────────────
  async readSheet(sheetName) {
    if (!this.canSync()) return null;
    try {
      const range = encodeURIComponent(sheetName + '!A1:AK');
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${BR_CONFIG.SHEET_ID}/values/${range}`;
      const res = await fetch(url, {
        headers: { Authorization: 'Bearer ' + this.token }
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.values || [];
    } catch(e) {
      console.log('Sheet read error:', e);
      return null;
    }
  },

  // ── APPEND A ROW TO A SHEET ────────────────────────────
  async appendRow(sheetName, values) {
    if (!this.canSync()) return false;
    try {
      const range = encodeURIComponent(sheetName + '!A1');
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${BR_CONFIG.SHEET_ID}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values: [values] })
      });
      return res.ok;
    } catch(e) {
      console.log('Sheet append error:', e);
      return false;
    }
  },

  // ── UPDATE A SPECIFIC ROW ──────────────────────────────
  async updateRow(sheetName, rowNum, values) {
    if (!this.canSync()) return false;
    try {
      const range = encodeURIComponent(sheetName + '!A' + rowNum);
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${BR_CONFIG.SHEET_ID}/values/${range}?valueInputOption=RAW`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + this.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values: [values] })
      });
      return res.ok;
    } catch(e) {
      console.log('Sheet update error:', e);
      return false;
    }
  },

  // ── SYNC QUEUE — saves offline actions ─────────────────
  addToQueue(action, sheetName, data) {
    const q = JSON.parse(localStorage.getItem('br_syncq') || '[]');
    q.push({ action, sheetName, data, ts: Date.now() });
    localStorage.setItem('br_syncq', JSON.stringify(q));
  },

  // ── PROCESS SYNC QUEUE WHEN BACK ONLINE ────────────────
  async processQueue() {
    if (!this.canSync()) return;
    const q = JSON.parse(localStorage.getItem('br_syncq') || '[]');
    if (!q.length) return;
    const remaining = [];
    for (const item of q) {
      let ok = false;
      if (item.action === 'append') ok = await this.appendRow(item.sheetName, item.data);
      if (!ok) remaining.push(item);
    }
    localStorage.setItem('br_syncq', JSON.stringify(remaining));
  }
};

// ── LOCAL DATABASE (IndexedDB) ──────────────────────────────
const DB = {

  db: null,
  version: 1,

  async open() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('BRBusiness', this.version);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        const stores = [
          { name: 'contacts',    key: 'id',        indexes: ['status','score','followup','name'] },
          { name: 'logs',        key: 'id',        indexes: ['contactId','date'] },
          { name: 'policies',    key: 'id',        indexes: ['contactId','renewal'] },
          { name: 'investments', key: 'id',        indexes: ['contactId'] },
          { name: 'fna',         key: 'id',        indexes: ['contactId'] },
          { name: 'sme',         key: 'id',        indexes: ['contactId'] },
          { name: 'partners',    key: 'id',        indexes: [] },
          { name: 'workshops',   key: 'id',        indexes: [] },
          { name: 'settings',    key: 'key',       indexes: [] }
        ];
        stores.forEach(s => {
          if (!db.objectStoreNames.contains(s.name)) {
            const store = db.createObjectStore(s.name, { keyPath: s.key });
            s.indexes.forEach(idx => store.createIndex(idx, idx, { unique: false }));
          }
        });
      };
      req.onsuccess = (e) => { this.db = e.target.result; resolve(); };
      req.onerror   = () => reject(req.error);
    });
  },

  async getAll(store) {
    return new Promise((resolve, reject) => {
      const tx  = this.db.transaction(store, 'readonly');
      const req = tx.objectStore(store).getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  },

  async get(store, key) {
    return new Promise((resolve, reject) => {
      const tx  = this.db.transaction(store, 'readonly');
      const req = tx.objectStore(store).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  },

  async put(store, item) {
    return new Promise((resolve, reject) => {
      const tx  = this.db.transaction(store, 'readwrite');
      const req = tx.objectStore(store).put(item);
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  },

  async delete(store, key) {
    return new Promise((resolve, reject) => {
      const tx  = this.db.transaction(store, 'readwrite');
      const req = tx.objectStore(store).delete(key);
      req.onsuccess = () => resolve();
      req.onerror   = () => reject(req.error);
    });
  },

  async getByIndex(store, indexName, value) {
    return new Promise((resolve, reject) => {
      const tx    = this.db.transaction(store, 'readonly');
      const index = tx.objectStore(store).index(indexName);
      const req   = index.getAll(value);
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  },

  async count(store) {
    return new Promise((resolve, reject) => {
      const tx  = this.db.transaction(store, 'readonly');
      const req = tx.objectStore(store).count();
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  }
};

// ── LEAD SCORING ENGINE ─────────────────────────────────────
function calcScore(contact, logs) {
  let score = 0;
  const W = BR_CONFIG.SCORING;
  const now = new Date();

  // Demographic signals
  if (parseInt(contact.dependantsUAE) > 0 || parseInt(contact.dependantsHome) > 0)
    score += W.has_dependants;
  if (parseInt(contact.yearsUAE) >= 3)
    score += W.uae_3plus_years;
  const ageBand = contact.ageBand || '';
  if (ageBand.includes('30') || ageBand.includes('40') || ageBand.includes('50'))
    score += W.age_30_to_50;
  const goodIndustries = ['finance','banking','healthcare','education','technology','management'];
  if (goodIndustries.some(i => (contact.industry || '').toLowerCase().includes(i)))
    score += W.industry_bonus;

  // Engagement signals
  const contactLogs = (logs || []).filter(l => l.contactId === contact.id);
  if (contactLogs.length > 0) {
    const lastLog = contactLogs.sort((a,b) => new Date(b.date) - new Date(a.date))[0];
    const daysSince = (now - new Date(lastLog.date)) / 86400000;
    if (daysSince <= 7)  score += W.contact_last_7_days;
    else if (daysSince <= 30) score += W.contact_last_30_days;
    else if (daysSince >= 90) score += W.no_contact_90_days;
  }
  if (contact.followup) score += W.followup_date_set;
  if (contactLogs.length >= 2) score += W.two_plus_interactions;

  // Pipeline signals
  if (contact.status === 'hot')    score += W.status_hot;
  if (contact.status === 'warm')   score += W.status_warm;
  if (parseInt(contact.premium) > 0) score += W.premium_entered;
  if (contact.products && contact.products.length > 0) score += W.products_tagged;
  if (contact.referredBy) score += W.referred_by_client;

  // Negative signals
  if (!contact.phone && !contact.email) score += W.no_phone_or_email;
  if (contact.status === 'cold' && !contact.followup) score += W.cold_no_followup;

  return Math.max(0, Math.min(100, Math.round(score)));
}

// ── HORA ENGINE ─────────────────────────────────────────────
function getHora(date) {
  const HSEQ = ['Sun','Venus','Mercury','Moon','Saturn','Jupiter','Mars'];
  const DSTART = {0:0,1:3,2:6,3:1,4:5,5:2,6:4};
  const HINFO = {
    Sun:     { icon:'☀️', color:'#FFF8E0', label:'Authority', desc:'Formal proposals · Approaching seniors · Applications', good: true },
    Moon:    { icon:'🌙', color:'#EEF4FF', label:'Empathy',   desc:'FNA meetings · Family conversations · Emotional topics', good: true },
    Mars:    { icon:'♂️', color:'#FFF0EE', label:'Action',    desc:'Overdue follow-ups · Courage calls · Avoid signing', good: false },
    Mercury: { icon:'☿',  color:'#EEFBEE', label:'Peak',      desc:'Calls · Emails · Proposals · Contracts · Your best hora', good: true },
    Jupiter: { icon:'♃',  color:'#F5EEFF', label:'Wisdom',    desc:'Investment meetings · Advisory · Senior conversations', good: true },
    Venus:   { icon:'♀️', color:'#FFF0F8', label:'Harmony',   desc:'Referral asks · Relationship building · Warm outreach', good: true },
    Saturn:  { icon:'♄',  color:'#F4F4F4', label:'Structure', desc:'Admin · Documentation · Systematic follow-up', good: false }
  };
  const MITIGATION = {
    Mars:   'Use this time for overdue follow-ups that require directness. Keep meetings short — facts only. Schedule proposals for Mercury or Jupiter hora.',
    Saturn: 'Clear your admin backlog. Update your CRM. Prepare proposals you will present in a better hora. Do not start new client relationships now.'
  };
  const DAY_QUALITY = {
    0: { planet:'Sun',     label:'Authority Day',    tip:'Formal correspondence and senior meetings' },
    1: { planet:'Moon',    label:'Empathy Day',      tip:'Client relationship meetings and FNA conversations' },
    2: { planet:'Mars',    label:'Action Day',       tip:'Bold follow-ups — keep meetings brief and factual' },
    3: { planet:'Mercury', label:'⭐ PEAK DAY',      tip:'Your most important calls and proposals go today' },
    4: { planet:'Jupiter', label:'⭐ Wisdom Day',    tip:'Investment and advisory meetings — go deep' },
    5: { planet:'Venus',   label:'Harmony Day',      tip:'Referral conversations and relationship nurturing' },
    6: { planet:'Saturn',  label:'Structure Day',    tip:'Admin, documentation and systematic backlog clearing' }
  };

  const d   = date || new Date();
  const dow  = d.getDay();
  const si   = DSTART[dow];
  const hSince6 = Math.floor(((d.getHours() - 6) + 24) % 24);
  const curIdx  = (si + hSince6) % 7;
  const nxtIdx  = (curIdx + 1) % 7;
  const curName = HSEQ[curIdx];
  const nxtName = HSEQ[nxtIdx];

  // Build full day schedule
  const schedule = [];
  for (let h = 0; h < 24; h++) {
    const horaIdx = (si + Math.floor(((h - 6) + 24) % 24)) % 7;
    schedule.push({ hour: h, hora: HSEQ[horaIdx], info: HINFO[HSEQ[horaIdx]] });
  }

  return {
    current:    { name: curName, ...HINFO[curName] },
    next:       { name: nxtName, ...HINFO[nxtName] },
    dayQuality: DAY_QUALITY[dow],
    schedule,
    mitigation: MITIGATION[curName] || null,
    isAbhijit:  d.getHours() === 12 || (d.getHours() === 12 && d.getMinutes() < 48),
    isPowerDay: dow === 3 || dow === 4
  };
}

// ── UTILITIES ───────────────────────────────────────────────
const U = {
  id()     { return Date.now().toString(36) + Math.random().toString(36).slice(2,5); },
  today()  { return new Date().toISOString().split('T')[0]; },
  now()    { return new Date().toTimeString().slice(0,5); },
  fmt(d)   {
    if (!d) return '';
    const dt = new Date(d);
    return dt.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
  },
  daysTo(d) {
    if (!d) return null;
    const diff = new Date(d) - new Date();
    return Math.round(diff / 86400000);
  },
  dayOfWeek() {
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
  },
  phone(num) {
    if (!num) return '';
    let n = num.replace(/[\s\-\(\)\.]/g, '');
    if (n.startsWith('00971')) n = '+971' + n.slice(5);
    if (n.startsWith('971') && !n.startsWith('+')) n = '+' + n;
    if (n.startsWith('05') || n.startsWith('04')) n = '+971' + n.slice(1);
    return n;
  },
  waLink(phone, msg) {
    const p = this.phone(phone).replace('+','');
    const m = encodeURIComponent(msg || '');
    return `https://wa.me/${p}?text=${m}`;
  },
  callLink(phone) {
    return `tel:${this.phone(phone)}`;
  },
  msg(template, contact) {
    return template
      .replace(/{name}/g,    contact.name    || '')
      .replace(/{company}/g, contact.company || 'your company')
      .replace(/{product}/g, contact.lastProduct || 'your policy')
      .replace(/{insurer}/g, contact.lastInsurer || 'your insurer');
  },
  touchMsg(contact) {
    const t = parseInt(contact.touch) || 1;
    const templates = BR_CONFIG.MESSAGES;
    const tpl = t === 1 ? templates.touch1 :
                t === 2 ? templates.touch2 :
                t === 3 ? templates.touch3 :
                templates.post_meeting;
    return this.msg(tpl, contact);
  }
};
