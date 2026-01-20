import { test, expect } from "../../pages/base.ts";

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.upskwela.com/");
});

test.describe("Search Community Scenario", () => {
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
});

test.describe("Create Community Scenario", () => {
  // test("Create a community succesfully", async ({ communitiesPage }) => {
  //   await communitiesPage.clickCreateCommunityBtn();

  //   await communitiesPage.fillInputFields(
  //     // createCommunityData.communityName,
  //     createCommunityData.communitySlug,
  //     createCommunityData.description
  //   );

  //   await communitiesPage.checkGuidelinesAndNDA();
  //   await communitiesPage.submitCommunity();
  // });

  test("Create a community with empty input fields", async ({
    communitiesPage,
  }) => {
    await communitiesPage.clickCreateCommunityBtn();
    await communitiesPage.submitCommunity();

    await expect(communitiesPage.formDiv).toHaveText(
      /Community name is required/,
    );
    // await expect(communitiesPage.formDiv).toHaveScreenshot();
  });
});
