const BG = '#202124';
const FG = '#ffffff';

const DIGITS = [
  [14, 17, 17, 17, 17, 17, 14],
  [4, 12, 4, 4, 4, 4, 14],
  [14, 17, 1, 2, 4, 8, 31],
  [31, 2, 4, 2, 1, 17, 14],
  [2, 6, 10, 18, 31, 2, 2],
  [31, 16, 30, 1, 1, 17, 14],
  [6, 8, 16, 30, 17, 17, 14],
  [31, 1, 2, 4, 8, 8, 8],
  [14, 17, 17, 14, 17, 17, 14],
  [14, 17, 17, 15, 1, 2, 12],
];

const pad = (n) => String(n).padStart(2, '0');

function drawDigit(ctx, d, x, y, k) {
  DIGITS[d].forEach((row, r) => {
    for (let c = 0; c < 5; c++) {
      if (row & (16 >> c)) ctx.fillRect((x + c) * k, (y + r) * k, k, k);
    }
  });
}

function draw() {
  const now = new Date();
  const h = pad(now.getHours());
  const m = pad(now.getMinutes());
  const imageData = {};
  for (const k of [1, 2]) {
    const s = 16 * k;
    const ctx = new OffscreenCanvas(s, s).getContext('2d');
    ctx.fillStyle = BG;
    ctx.beginPath();
    ctx.roundRect(0, 0, s, s, 3 * k);
    ctx.fill();
    ctx.fillStyle = FG;
    [h, m].forEach((pair, row) => {
      drawDigit(ctx, +pair[0], 2, row * 9, k);
      drawDigit(ctx, +pair[1], 9, row * 9, k);
    });
    imageData[s] = ctx.getImageData(0, 0, s, s);
  }
  chrome.action.setIcon({ imageData });
  chrome.action.setTitle({ title: `${h}:${m}` });
}

function start() {
  chrome.alarms.create('tick', { periodInMinutes: 0.5 });
  draw();
}

chrome.runtime.onInstalled.addListener(({ reason }) => {
  start();
  if (reason === 'install') chrome.tabs.create({ url: 'welcome.html' });
});
chrome.runtime.onStartup.addListener(start);
chrome.alarms.onAlarm.addListener(draw);
