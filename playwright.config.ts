import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  retries: process.env.CI ? 2 : 1,

  workers: process.env.CI ? 1 : 5,

  reporter: "html",

  use: {
    baseURL: "https://app.upskwela.com/login",

    trace: "on-first-retry",
    actionTimeout: 20000,
    video: {
      mode: "off",
      size: { width: 1920, height: 1080 },
    },
  },
  timeout: 60000,

  /* Configure projects for major browsers */
  projects: [
    { name: "setup", testMatch: "auth.setup.ts" },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth/user.json",
        video: {
          mode: "on",
          size: { width: 1920, height: 1080 },
        },
      },
      dependencies: ["setup"],
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], storageState: ".auth/user.json" },
      dependencies: ["setup"],
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], storageState: ".auth/user.json" },
      dependencies: ["setup"],
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      testMatch: "mobile-emul.spec.ts",
      use: { 
        ...devices['Pixel 5'], 
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"]
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
