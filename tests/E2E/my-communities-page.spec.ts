import { test, expect } from "../../pages/base.ts";

test.beforeEach(async ({ page, myCommunitiesPage }) => {
  await page.goto("https://app.upskwela.com/");
  await myCommunitiesPage.goToMyCommunitiesPage();
  await myCommunitiesPage.clickOwnedTab();
});

test.describe("", () => {
  test("Click a community in Active Membership Section", async ({
    myCommunitiesPage,
  }) => {
    await myCommunitiesPage.clickJoinedTab();
    await myCommunitiesPage.goToQAAutomationTester();

    await expect(myCommunitiesPage.headerOne).toContainText(
      "QA Automation Tester"
    );
  });
});
