function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
  const cookies = Object.fromEntries(
    document.cookie.split(';').map(cookie => {
      const [key, value] = cookie.trim().split('=');
      return [key, decodeURIComponent(value)];
    })
  );
  return cookies[name] || null;
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function setCookieFromInput() {
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;
  const days = parseInt(document.getElementById("cookieDays").value) || 0;
  setCookie(name, value, days);
  alert(`Cookie "${name}" set!`);
}

function getCookieFromInput() {
  const name = document.getElementById("getCookieName").value;
  const value = getCookie(name);
  document.getElementById("getCookieResult").textContent = value ? `Value: ${value}` : "Cookie not found.";
}

function deleteCookieFromInput() {
  const name = document.getElementById("deleteCookieName").value;
  deleteCookie(name);
  alert(`Cookie "${name}" deleted!`);
}
