# AmiAmi THB Converter & MFC Helper

A Chrome extension that enhances the AmiAmi shopping experience by converting JPY prices to THB in real-time and adding quick links to MyFigureCollection (MFC).

## Features

* **Currency Conversion:** Automatically converts JPY prices to THB using real-time exchange rates (via Frankfurter API).
* **Smart Caching:** Caches exchange rates for 24 hours to ensure instant loading and minimal API usage.
* **MFC Integration:** Adds a direct search link `[MFC]` next to item JAN codes to check figure details/database.
* **Dynamic Support:** Works on product pages, search results, and the cart (handles dynamic loading via MutationObserver).

## Tech Stack

* **Runtime/Bundler:** [Bun](https://bun.sh)
* **Language:** TypeScript
* **Target:** Chrome Manifest V3

## Development Setup

### 1. Prerequisites
Ensure you have [Bun](https://bun.sh) installed.

### 2. Installation
Clone the repository and install dependencies:

```bash
bun install
```

### 3. Build & Watch
Run the development server to watch for changes and compile TypeScript to JavaScript automatically:

```bash
bun run dev
```

*Input*: `src/main.ts`

*Output*: `dist/content.js`

## Loading into Chrome
1. Open Chrome and navigate to chrome://extensions.
2. Enable Developer mode (toggle in the top-right corner).
3. Click Load unpacked.
4. Select the root folder of this project.

## Project Structure
```
.
├── manifest.json      # Extension configuration
├── package.json       # Scripts and dependencies
├── src/
│   └── main.ts        # Source logic (TypeScript)
└── dist/
    └── content.js     # Compiled output (Loaded by Chrome)
```

## Configuration
**Exchange Rate:** By default, the extension fetches from `api.frankfurter.app`. If the API fails, it falls back to a hardcoded rate (`0.22`).

**Debounce:** DOM observation is debounced by 500ms to prevent performance issues on heavy pages.
