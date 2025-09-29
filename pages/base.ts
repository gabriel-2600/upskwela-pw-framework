import { test as base } from "@playwright/test";
import LoginPage from "./login-page";
import CommunitiesPage from "./communities-page";

type MyFixtures = {
  loginPage: LoginPage;
  communityPage: CommunitiesPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  communityPage: async ({ page }, use) => {
    await use(new CommunitiesPage(page));
  },
});

export { expect } from "@playwright/test";
