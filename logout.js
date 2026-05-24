// BR BUSINESS — SESSION + LOGOUT MANAGER
// Loaded on every page after index.html

(function() {

  // Session check
  var auth      = localStorage.getItem('br_auth');
  var lastLogin = parseInt(localStorage.getItem('br_login_time') || '0');
  var age       = Date.now() - lastLogin;
  var maxAge    = 8 * 60 * 60 * 1000; // 8 hours

  if (auth !== 'ok' || age > maxAge) {
    localStorage.removeItem('br_auth');
    localStorage.removeItem('br_login_time');
    window.location.href = 'index.html';
    return;
  }

  // Add logout button — always visible top right
  function addBtn() {
    if (document.getElementById('logoutBtn')) return;
    var b = document.createElement('button');
    b.id  = 'logoutBtn';
    b.innerHTML = 'Logout';
    b.style.cssText = [
      'position:fixed', 'top:12px', 'right:12px',
      'background:#1A3A5C', 'color:rgba(255,255,255,0.7)',
      'border:1px solid rgba(255,255,255,0.2)',
      'border-radius:20px', 'padding:6px 14px',
      'font-size:11px', 'font-weight:800',
      'cursor:pointer', 'z-index:9999',
      'font-family:Inter,sans-serif',
      'letter-spacing:0.07em', 'text-transform:uppercase',
      'box-shadow:0 2px 8px rgba(0,0,0,0.2)'
    ].join(';');
    b.addEventListener('click', function() {
      if (confirm('Log out of BR Business?')) {
        localStorage.removeItem('br_auth');
        localStorage.removeItem('br_login_time');
        localStorage.removeItem('br_token');
        window.location.href = 'index.html';
      }
    });
    document.body.appendChild(b);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addBtn);
  } else {
    addBtn();
  }

})();
