import { test, expect } from "../pages/base.ts";
import createCommunityData from "../test-data/create-community-data.js";

test.beforeEach(async ({ page, loginPage, communitiesPage }) => {
  await page.goto("https://app.upskwela.com/login");
  await loginPage.successfulLogin();
  // await communityPage.goToCommunities();
});

test.describe("Search Community Scenario", () => {
  test("Search an existing community", async ({ communitiesPage }) => {
    await communitiesPage.useSearchCommunity("upskwela community");

    await expect(communitiesPage.upskwelaCommunity).toHaveText(
      /Upskwela Community/
    );
  });

  test("Search a non existing community", async ({ communitiesPage }) => {
    await communitiesPage.useSearchCommunity("n/a");

    await communitiesPage.noCommunitiesFound.waitFor({ state: "attached" });
    await expect(communitiesPage.noCommunitiesFound).toBeVisible();
  });
});

test.describe("Create Community Scenario", () => {
  test("Create a community succesfully", async ({ communitiesPage }) => {
    await communitiesPage.clickCreateCommunityBtn();

    await communitiesPage.fillInputFields(
      // createCommunityData.communityName,
      createCommunityData.communitySlug,
      createCommunityData.description
    );
    await communitiesPage.uploadImage(createCommunityData.coverImage);
    await communitiesPage.checkGuidelinesAndNDA();
    await communitiesPage.submitCommunity();
  });

  test("Create a community with empty input fields", async ({
    communitiesPage,
  }) => {
    await communitiesPage.clickCreateCommunityBtn();
    await communitiesPage.submitCommunity();

    await expect(communitiesPage.formDiv).toHaveText(
      /Community name is required/
    );
  });
});
