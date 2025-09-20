import { test, expect } from "../pages/base.ts";

test.beforeEach(async ({ page, loginPage }) => {
  await page.goto("https://app.upskwela.com/");
  await loginPage.successfulLogin();
});

test.describe("My Communities Scenario", () => {
  test.beforeEach(async ({ homePage }) => {});

  test("Search an existing community in Owned", async ({ homePage }) => {
    await homePage.useSearchCommunity("test community");

    await expect(homePage.testCommunity).toHaveText(/test community/);
  });

  test("Search a non existing community in Owned", async ({ homePage }) => {
    await homePage.useSearchCommunity("n/a");

    await homePage.noActiveMemberships.waitFor({ state: "attached" });
    await expect(homePage.noActiveMemberships).toBeVisible();
  });
});
