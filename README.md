# Playwright Healthcare UI Demo

Lightweight Playwright + TypeScript demo project with smoke and regression test coverage for a publicly accessible healthcare-related web application.

## Tech Stack
- Playwright
- TypeScript
- GitHub Actions

## Test Coverage
- Main navigation visibility
- Dropdown menu validation
- Navigation and redirect checks
- Join page validation

## Framework Notes
- Page Object Model (POM)
- Role-based locators
- Smoke and regression test tagging

## CI
GitHub Actions workflow included for automated Playwright test execution.

## Run Tests
```bash
npx playwright test

## Run Smoke Tests
```bash
npx playwright test --grep @smoke

## Run Smoke Tests
```bash
npx playwright test --grep @regression