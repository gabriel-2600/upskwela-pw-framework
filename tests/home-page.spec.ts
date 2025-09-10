import { test, expect } from "@playwright/test";
import HomePage from "../pages/home-page";

test.beforeEach("Go to Upskwela.com", async ({ page }) => {
  await page.goto("https://app.upskwela.com/login");
});

test.describe("Login Scenarios", () => {});
