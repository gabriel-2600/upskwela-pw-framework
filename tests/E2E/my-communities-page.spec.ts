import { test, expect } from "../../pages/base.ts";

test.beforeEach(async ({ page, myCommunitiesPage }) => {
  await page.goto("https://app.upskwela.com/");
  await myCommunitiesPage.clickOwnedTab();
});

test.describe("My Community Test Scenario", () => {
  test("Click a community in Joined Section", async ({ myCommunitiesPage }) => {
    await myCommunitiesPage.clickJoinedTab();
    await myCommunitiesPage.goToQAAutomationTester();

    await expect(myCommunitiesPage.headerOne).toContainText(
      "QA Automation Tester",
    );
  });
})