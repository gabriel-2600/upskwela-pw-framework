import { test, expect } from "../../pages/base.ts";

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.upskwela.com/");
});

test.describe(
  "Search Community Scenario",
  {
    tag: "@mobile",
  },
  () => {
    test("Search an existing community", async ({ communitiesPage }) => {
      await communitiesPage.useSearchCommunity("upskwela community");

      await expect(communitiesPage.upskwelaCommunity).toHaveText(
        /Upskwela Community/,
      );
    });

    test("Search a non existing community", async ({ communitiesPage }) => {
      await communitiesPage.useSearchCommunity("n/a");

      await expect(communitiesPage.noCommunitiesJoined).toBeVisible();
    });
  },
);
