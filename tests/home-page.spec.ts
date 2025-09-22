import { test, expect } from "../pages/base.ts";

test.beforeEach(async ({ page, loginPage }) => {
  await page.goto("https://app.upskwela.com/login");
  await loginPage.successfulLogin();
});

test.describe("My Communities Scenario", () => {
  test("Search an existing community in Owned", async ({
    page,
    homePage,
    loginPage,
  }) => {
    // await page.goto("https://app.upskwela.com/login");
    // await loginPage.successfulLogin();

    await homePage.useSearchCommunity("test community");

    await expect(homePage.testCommunity).toHaveText(/test community/);
  });

  test("Search a non existing community in Owned", async ({
    page,
    homePage,
    loginPage,
  }) => {
    // await page.goto("https://app.upskwela.com/login");
    // await loginPage.successfulLogin();

    await homePage.useSearchCommunity("n/a");

    await homePage.noCommunitiesFound.waitFor({ state: "attached" });
    await expect(homePage.noCommunitiesFound).toBeVisible();
  });
});
