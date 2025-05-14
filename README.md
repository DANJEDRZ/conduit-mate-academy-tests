# conduit-mate-academy-tests

**End-to-End (E2E) tests for the Conduit Mate Academy web application using Playwright.**

## 🧪 Project Overview

This project contains automated E2E tests written in [Playwright](https://playwright.dev/) for the [Conduit](https://conduit.mate.academy) app.

These tests ensure the critical user flows are working correctly, such as:

- User loggin
- Article creation

## 📦 Tech Stack

- [Playwright](https://playwright.dev/) – browser automation
- [Node.js](https://nodejs.org/) – JavaScript runtime
- [npm](https://www.npmjs.com/) – dependency manager
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DANJEDRZ/conduit-mate-academy-tests.git
cd conduit-mate-academy-tests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Run tests in headless mode

```bash
npx playwright test
```

### 5. View HTML report

After the tests run, you can view the report with:

```bash
npx playwright show-report
```

### 5. To run the tests in UI mode

```bash
npx playwright test --ui
```