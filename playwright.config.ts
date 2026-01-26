import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  // retries: 1,s

  workers: 5,

  reporter: [
    // ["allure-playwright"],
    ["html"],
  ],

  use: {
    baseURL: "https://app.upskwela.com/login",
    trace: "on-first-retry",
    actionTimeout: 20000,
  },

  /* Configure projects for major browsers */
  projects: [
    { name: "setup", testMatch: "auth.setup.ts" },

    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        screenshot: "only-on-failure",
        storageState: ".auth/user.json",
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
      name: "Mobile Chrome",
      testMatch: "mobile-emul.spec.ts",
      use: {
        ...devices["Pixel 5"],
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"],
    },
  ],
});
