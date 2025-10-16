import { test } from "../../pages/base.ts";

test.beforeEach(async ({ page, loginPage, myCommuntiesPage }) => {
  await page.goto("https://app.upskwela.com/login");
  await loginPage.successfulLogin();
  await myCommuntiesPage.goToMyCommunitiesPage();
  await myCommuntiesPage.clickOwnedTab();
});

test.describe("", () => {
  test("Click a community in Active Membership Section", async ({
    myCommuntiesPage,
  }) => {
    await myCommuntiesPage.clickActiveTab();
    await myCommuntiesPage.goToCommunity();
  });
});
