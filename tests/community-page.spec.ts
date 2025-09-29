import { test, expect } from "../pages/base.ts";
import createCommunityData from "../test-data/create-community-data.js";

test.beforeEach(async ({ page, loginPage, communityPage }) => {
  await page.goto("https://app.upskwela.com/login");
  await loginPage.successfulLogin();
  await communityPage.goToCommunities();
});

test.describe("Communities Scenario", () => {
  test("Search an existing community", async ({ communityPage }) => {
    await communityPage.useSearchCommunity("upskwela community");

    await expect(communityPage.upskwelaCommunity).toHaveText(
      /Upskwela Community/
    );
  });

  test("Search a non existing community", async ({ communityPage }) => {
    await communityPage.useSearchCommunity("n/a");

    await communityPage.noCommunitiesFound.waitFor({ state: "attached" });
    await expect(communityPage.noCommunitiesFound).toBeVisible();
  });
});

test.describe("Create Community Scenario", () => {
  test.only("Create community succesfully", async ({ communityPage }) => {
    await communityPage.clickCreateCommunityBtn();

    await communityPage.fillInputFields(
      // createCommunityData.communityName,
      createCommunityData.communitySlug,
      createCommunityData.description
    );
    await communityPage.uploadImage(createCommunityData.coverImage);
    await communityPage.checkGuidelinesAndNDA();
    await communityPage.submitCommunity();
  });
});
