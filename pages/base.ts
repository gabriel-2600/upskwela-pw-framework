import { test as base } from "@playwright/test";
import LoginPage from "./login-page";
import CommunitiesPage from "./communities-page";
import MyCommunitiesPage from "./my-communities-page";

type MyFixtures = {
  loginPage: LoginPage;
  communitiesPage: CommunitiesPage;
  myCommuntiesPage: MyCommunitiesPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  communitiesPage: async ({ page }, use) => {
    await use(new CommunitiesPage(page));
  },
  myCommuntiesPage: async ({ page }, use) => {
    await use(new MyCommunitiesPage(page));
  },
});

export { expect } from "@playwright/test";
