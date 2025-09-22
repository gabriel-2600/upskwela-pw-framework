import { test, expect } from "../pages/base.ts";

test.beforeEach(async ({ page, loginPage, homePage }) => {
  await page.goto("https://app.upskwela.com/login");
  await loginPage.successfulLogin();
  await homePage.testCommunity.click();
});

test.describe("Test Community Scenario", () => {});
