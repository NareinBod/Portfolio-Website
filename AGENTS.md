# Repository Guidelines

## Project Structure & Module Organization

This is an Angular 19 single-page portfolio site. Application bootstrap and global styling live in `src/main.ts` and `src/styles.scss`. Feature UI is organized under `src/app/` by page or shared component, for example `home/`, `about/`, `projects/`, and `header/`; each component keeps its `.ts`, `.html`, `.scss`, and `.spec.ts` files together. Reusable API logic is in `src/services/`. Static images, PDFs, and icons belong in `public/` and are served from the site root.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies from `package-lock.json`.
- `npm start` runs the Angular development server with live reload.
- `npm run build` creates a production build.
- `npm run watch` rebuilds continuously using the development configuration.
- `npm test` runs Jasmine tests through Karma (Chrome required).

Run commands from the repository root. Do not commit generated build output or `node_modules/`.

## Coding Style & Naming Conventions

Follow `.editorconfig`: UTF-8, two-space indentation, final newlines, and no trailing whitespace. Use single quotes in TypeScript. Keep Angular components standalone and use the existing adjacent-file convention: `feature.component.ts`, `feature.component.html`, `feature.component.scss`, and `feature.component.spec.ts`. Name classes in PascalCase (`ProjectsComponent`), properties and methods in camelCase (`getRepoDetails`), and selectors with the `app-` prefix.

Use SCSS for component-local styles; reserve `src/styles.scss` for global rules. Keep API endpoints and integration details in services rather than templates or components. Avoid placing secrets or EmailJS credentials in client-side source; use deployment configuration where possible.

## Testing Guidelines

Tests use Jasmine and Karma. Add or update the colocated `*.spec.ts` file whenever component behavior, services, or routing changes. Describe the unit under test and use readable cases such as `it('should create', ...)`. Run `npm test` before opening a pull request; verify responsive UI changes manually at desktop and mobile widths.

## Commit & Pull Request Guidelines

Recent history favors short imperative summaries, such as `Updated Responsiveness` and `Fix formatting in README.md`. Keep commits focused and describe the user-visible change. Pull requests should include a concise summary, testing performed, linked issue when applicable, and screenshots or recordings for visual changes. Call out changes to public assets, routes, or external integrations explicitly.
