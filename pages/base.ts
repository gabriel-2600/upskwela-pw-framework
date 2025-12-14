import { test as base } from "@playwright/test";
import LoginPage from "./login-page";
import CommunitiesPage from "./communities-page";
import MyCommunitiesPage from "./my-communities-page";
import CommunityPageNav from "./community-page/community-page-nav";

type MyFixtures = {
  loginPage: LoginPage;
  communitiesPage: CommunitiesPage;
  myCommunitiesPage: MyCommunitiesPage;
  communityPageNav: CommunityPageNav;
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
  communityPageNav: async ({ page }, use) => {
    await use(new CommunityPageNav(page));
  },
});

export { expect, request } from "@playwright/test";
