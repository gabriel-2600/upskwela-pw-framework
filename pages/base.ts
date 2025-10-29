import { test as base } from "@playwright/test";
import LoginPage from "./login-page";
import CommunitiesPage from "./communities-page";
import MyCommunitiesPage from "./my-communities-page";
import CommunityPage from "./communitiy-page/community-page";
import ChatTab from "./communitiy-page/chat-tab-page";

type MyFixtures = {
  loginPage: LoginPage;
  communitiesPage: CommunitiesPage;
  myCommunitiesPage: MyCommunitiesPage;
  communityPage: CommunityPage;
  chatTab: ChatTab;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  communitiesPage: async ({ page }, use) => {
    await use(new CommunitiesPage(page));
  },
  myCommunitiesPage: async ({ page }, use) => {
    await use(new MyCommunitiesPage(page));
  },
  communityPage: async ({ page }, use) => {
    await use(new CommunityPage(page));
  },
  chatTab: async ({ page }, use) => {
    await use(new ChatTab(page));
  },
});

export { expect } from "@playwright/test";
