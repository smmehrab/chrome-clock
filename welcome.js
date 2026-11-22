async function check() {
  const { isOnToolbar } = await chrome.action.getUserSettings();
  document.body.classList.toggle('pinned', isOnToolbar);
}

check();
setInterval(check, 1000);
