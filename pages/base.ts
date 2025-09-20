import { test as base } from "@playwright/test";
import LoginPage from "./login-page";
import HomePage from "./home-page";
import TestCommunity from "./test-community-pages";

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  testCommunity: TestCommunity;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  testCommunity: async ({ page }, use) => {
    await use(new TestCommunity(page));
  },
});

export { expect } from "@playwright/test";
