# Copilot Instructions for KrishnaAgui.github.io

## Project Overview

This is a static website project consisting of HTML, CSS, and JavaScript files. There is no build system or framework; all files are loaded directly by the browser.

## File Structure

- `index.html`: Main entry point for the website.  
  **Note:** `index.html` only contains a single `<div class="main-body" id="main-body"></div>`. All content for the site should be dynamically inserted or modified via JavaScript (`script.js`) by targeting this element.
- `style.css`: Main stylesheet for site-wide styles.
- `reset.css`: CSS reset to ensure consistent styling across browsers.
- `script.js`: Main JavaScript file for client-side interactivity.
- `test.html`: Secondary HTML file, possibly for testing or alternate layouts.

## Key Patterns & Conventions

- All styling is handled via `style.css` and `reset.css`. Avoid inline styles in HTML.
- JavaScript logic is placed in `script.js`. No module system is used; all code is in the global scope.
- Use semantic HTML in `test.html`.
- **For `index.html`, only modify or populate the `main-body` div via JavaScript. Do not add static content directly to `index.html`.**
- No external dependencies or package managers are present.
- No build, test, or deployment scripts are defined. All changes are reflected immediately in the browser.

## Development Workflow

- Edit HTML, CSS, or JS files directly.
- Open `index.html` (or `test.html`) in a browser to view changes.
- Use browser developer tools for debugging.

## Examples

- To add a new style, edit `style.css` and reference the class or ID in your dynamically generated HTML.
- To add interactivity or content, write functions in `script.js` that select and modify the `main-body` div in `index.html`.

## Recommendations for AI Agents

- Maintain separation of concerns: HTML for structure, CSS for style, JS for behavior.
- Do not introduce frameworks, build tools, or package managers unless explicitly requested.
- Keep code readable and well-commented, as there is no documentation or README.
- Reference existing patterns in `test.html` and `style.css` when adding new features.
- **For `index.html`, always use JavaScript to modify the `main-body` div.**
