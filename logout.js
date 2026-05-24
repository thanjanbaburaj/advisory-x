// ═══════════════════════════════════════════════════
// BR BUSINESS — SESSION + LOGOUT MANAGER
// Included in every page except index.html
// ═══════════════════════════════════════════════════

(function() {
  'use strict';

  // ── SESSION CHECK ──────────────────────────────
  // If not logged in — redirect to login
  var auth     = localStorage.getItem('br_auth');
  var lastLogin = parseInt(localStorage.getItem('br_login_time') || '0');
  var age      = Date.now() - lastLogin;
  var maxAge   = 8 * 60 * 60 * 1000; // 8 hours

  if (auth !== 'ok' || age > maxAge) {
    localStorage.removeItem('br_auth');
    localStorage.removeItem('br_login_time');
    window.location.href = 'index.html';
    return; // stop executing
  }

  // ── ADD LOGOUT BUTTON ──────────────────────────
  // Wait for DOM to be ready
  function addLogout() {
    var btn = document.createElement('button');
    btn.id        = 'logoutBtn';
    btn.textContent = 'Logout';
    btn.style.cssText = [
      'position:fixed',
      'top:14px',
      'right:14px',
      'background:rgba(255,255,255,0.08)',
      'border:1px solid rgba(255,255,255,0.18)',
      'border-radius:20px',
      'padding:6px 14px',
      'color:rgba(255,255,255,0.55)',
      'font-size:12px',
      'font-weight:700',
      'cursor:pointer',
      'z-index:999',
      'font-family:Inter,sans-serif',
      'letter-spacing:0.05em',
      'text-transform:uppercase'
    ].join(';');

    btn.addEventListener('click', function() {
      if (confirm('Log out of BR Business?')) {
        localStorage.removeItem('br_auth');
        localStorage.removeItem('br_login_time');
        localStorage.removeItem('br_token');
        window.location.href = 'index.html';
      }
    });

    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addLogout);
  } else {
    addLogout();
  }

})();
