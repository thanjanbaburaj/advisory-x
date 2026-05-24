// Logout helper — included in all pages
function doLogout() {
  localStorage.removeItem('br_auth');
  localStorage.removeItem('br_login_time');
  localStorage.removeItem('br_token');
  window.location.href = 'index.html';
}

// Show logout button on all pages after login
document.addEventListener('DOMContentLoaded', function() {
  if (!localStorage.getItem('br_auth')) {
    window.location.href = 'index.html';
    return;
  }
  // Add logout button to top right
  const btn = document.createElement('button');
  btn.className = 'logout-btn visible';
  btn.textContent = 'Logout';
  btn.onclick = function() {
    if (confirm('Log out of BR Business?')) doLogout();
  };
  document.body.appendChild(btn);
  // Session check — 8 hours
  const last = parseInt(localStorage.getItem('br_login_time')||0);
  if (Date.now() - last > 8*60*60*1000) doLogout();
});

// Cache-busting config loader
function loadConfig(callback) {
  const s = document.createElement('script');
  s.src = 'config.js?v=' + Date.now();
  s.onload = callback || function(){};
  document.head.appendChild(s);
}
