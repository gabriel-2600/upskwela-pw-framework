# Upskwela Playwright Test Automation Framework

This is my Test Automation Framework for [Upskwela.com](https://www.upskwela.com/) using Playwright Typescript. I developed this test automation framework as a QA Tester volunteer work for the beta release of Upskwela, and to also learn and solidify my skills in test automation.

The generated report using Allure is accessible in:

- https://gabriel-2600.github.io/upskwela-pw-framework/

## Tech Stack

- Playwright
- TypeScript
- Docker
- Github Actions

## Project Structure

Brief overview of files:

```
upskwela-pw-framework/
├── compose.yaml
├── Dockerfile
├── eslint.config.js
├── eslint.config.mts
├── package-lock.json
├── package.json
├── pages
│   ├── base.ts
│   ├── communities-page.ts
│   ├── community-page
│   ├── login-page.ts
│   └── my-communities-page.ts
├── playwright-report
├── playwright.config.ts
├── README.md
├── test-data
│   ├── api-data.ts
│   └── login-data.ts
├── test-results
└── tests
├── API
├── auth.setup.ts
└── E2E
```

## Types of Tests

1. End-to-End (E2E) Tests
   Located in tests/E2E/, aims to verify the functionality of the web application.
   Tests include:
   - Login functionality
   - Mobile emulator, for mobile functionality
   - Search communities functionality
   - Create community functionality
   - Specific commmunity
     - Like and Unlike Button functionality

2. API Tests
   Located in tests/API, aims to verify the API calls of the web application.
   Tests include:
   - Login and Logout API call
   - Create and delete a community post API call

## Page Object Model

- The project adapts a POM pattern to achieve scalability, maintainablity, and code organization. Pages are located in pages/.

## Test Data

- The test data are inside test-data/ folder, where each data are securely stored inside an env file.

## Project Workflow

### Project Setup

1. Clone repository and navigate to project

```
cd upskwela-pw-framework
```

2. Install dependencies

```
npm install
```

or

```
npm ci
```

3. Install Playwright browsers

```
npx playwright install --with-deps
```

4. Install Allure Report

```
npm install -D allure-playwright
```

5. Run all Tests

```
npx playwright test
```

### Generate Allure Report

1. Clean other existing Allure Report to avoid duplication

```
npm run allure:clean
```

2. After running test, allure-results will automatically added, then generate an allure report based from the result

```
npm run allure:generate
```

3. Open Allure HTML report

```
npm run allure:open
```

### Docker

- Docker is used for containerization, providing a consistent environment allowing the projects to work the same on other machines.

1. Build Docker image

```
docker-compose build
```

2. Run the container

```
docker-compose up
```

## Github Actions

- This project has a CI using Github Actions, where every push, the projects tests are executed, Allure reports are generated and deployed using Github Pages.
