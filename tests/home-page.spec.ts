import { test, expect } from "../pages/base.ts";

test.beforeEach(async ({ page, loginPage }) => {
  await page.goto("https://app.upskwela.com/");
  await loginPage.successfulLogin();
});

test.describe("Home Page Scenario", () => {
  test("Search Bar", async ({ homePage }) => {
    await homePage.useSearchCommunity("test community");

    await homePage.testCommunity.click();
  });
});
