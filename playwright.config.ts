import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
import { on } from "events";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  retries: 1,

  workers: 10,

  reporter: [
    ["json", { outputFile: "test-results/jsonReport.json" }],
    ["junit", { outputFile: "test-results/junitReport.xml" }],
    ["allure-playwright"],
  ],

  use: {
    baseURL: "https://app.upskwela.com/login",
    trace: "on-first-retry",
    actionTimeout: 20000,
    storageState: ".auth/user.json",
  },
  timeout: 60000,

  /* Configure projects for major browsers */
  projects: [
    { name: "setup", testMatch: "auth.setup.ts" },

    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        screenshot: "only-on-failure",
      },
      dependencies: ["setup"],
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      dependencies: ["setup"],
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      dependencies: ["setup"],
    },

    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      testMatch: "mobile-emul.spec.ts",
      use: {
        ...devices["Pixel 5"],
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"],
    },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'], storageState: ".auth/user.json", },
    //   dependencies: ["setup"]
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
