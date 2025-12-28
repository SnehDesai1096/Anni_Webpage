# Change Log

## December 27, 2025

### Updates to Navigation Links
1. **File:** `secret.html`
   - Moved the file into a new `secret` folder.
   - Updated the `onclick` event for the `.back-link` to navigate to `'../'` instead of `'./'`.

2. **File:** `script.js`
   - Updated the `window.location.href` in the `secondsBox` click event listener to navigate to `'./secret/'` to reflect the new location of the `secret.html` file.

These changes ensure that the project structure is cleaner and navigation works seamlessly on GitHub Pages.

## [Unreleased]
- Updated `setDayNightMode()` in `script.js` to permanently apply night mode by removing time-based logic.