import { test, expect } from "../../../pages/base.ts";

test.beforeEach(async ({ page, myCommunitiesPage, communityPage }) => {
  await page.goto("https://app.upskwela.com/");
  await myCommunitiesPage.goToMyCommunitiesPage();
  await myCommunitiesPage.clickOwnedTab();
  await myCommunitiesPage.clickActiveTab();
  await myCommunitiesPage.goToCommunity();
  await communityPage.goToChatTab();
});

test.describe("Chat Tab Scenario", () => {
  test("Edit a chat, then delete", async ({ chatTab }) => {
    await chatTab.goToManualTesterChat();

    await chatTab.sendMessage("test");

    await chatTab.editChat("edited");
    await expect(chatTab.chatDiv).toHaveText("edited(edited)");

    await chatTab.deleteChat();
    await expect(chatTab.chatDiv).toHaveCount(0);
  });

  test("Send a chat, then delete", async ({ chatTab }) => {
    await chatTab.goToManualTesterChat();

    await chatTab.sendMessage("test");

    await chatTab.deleteChat();
    await expect(chatTab.chatDiv).toHaveCount(0);
  });
});
