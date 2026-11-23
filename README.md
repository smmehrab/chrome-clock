# Clock

A Chrome extension that shows the current time (HH:MM) in the toolbar.

[![Install from Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-Install-4285F4?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/clock/glpadgnfdfenllfdmkcbijnjdpjpnene)

![Clock in the Chrome toolbar](store/screenshot-1280x800.png)

- 24-hour time from your system clock, refreshed every 30 seconds
- Readable on light and dark Chrome themes
- No data collected, no access to websites ([privacy policy](PRIVACY.md))

## Install

Get it from the [Chrome Web Store](https://chromewebstore.google.com/detail/clock/glpadgnfdfenllfdmkcbijnjdpjpnene), then pin **Clock** from the puzzle-piece menu.

## Install (development)

1. Open `chrome://extensions` and enable **Developer mode**.
2. Click **Load unpacked** and select this folder.
3. Pin **Clock** from the puzzle-piece menu.

## Package

```
zip -qr clock.zip manifest.json service-worker.js welcome.html welcome.js icons
```

Store listing text and screenshot are in `store/`.
