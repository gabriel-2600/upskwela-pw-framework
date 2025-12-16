import { test, expect } from "../../../../pages/base.ts";

test.beforeEach(async ({ page, myCommunitiesPage, communityPageNav }) => {
  await page.goto("https://app.upskwela.com/");
  await myCommunitiesPage.goToMyCommunitiesPage();
  await myCommunitiesPage.clickOwnedTab();
  await myCommunitiesPage.clickJoinedTab();
  await myCommunitiesPage.goToWebpagePortfolio();
  await communityPageNav.goToDiscussionTab();
});

test.describe("Like and Unlike Testing", () => {
  test.describe("Like Counter", () => {
    test("Like a post", async ({ webpagePortfolio }) => {
      await webpagePortfolio.discussionTab.clickLikeBtn();

      await expect(webpagePortfolio.discussionTab.likeCount).toContainText("1");
    });

    test("Remove a like in a post", async ({ webpagePortfolio }) => {
      await webpagePortfolio.discussionTab.clickLikeBtn();

      await expect(webpagePortfolio.discussionTab.likeCount).toContainText("0");
    });
  });
});
