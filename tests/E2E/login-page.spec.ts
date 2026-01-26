import { test, expect } from "../../pages/base.ts";
import loginData from "../../test-data/login-data.js";

test.use({
  storageState: { cookies: [], origins: [] },
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.upskwela.com/login");
});

test.describe(
  "Login Scenarios",
  {
    tag: ["@smoke", "@regression"],
  },
  () => {
    test("Successful Login", async ({ loginPage, page }) => {
      await loginPage.successfulLogin();

      // await expect(page).toHaveURL("https://app.upskwela.com");
      await expect(page).not.toHaveURL("https://www.upskwela.com/login");
    });

    test("Incorrect Password", async ({ loginPage }) => {
      await loginPage.fillCredentials(loginData.email, "n/a");
      await loginPage.clickLoginButton();

      await expect(loginPage.informationField).toContainText(
        "Please check your email/username and password and try again.",
      );
    });

    test("Incorrect Email", async ({ loginPage }) => {
      await loginPage.fillCredentials("n/a", loginData.password);
      await loginPage.clickLoginButton();

      await expect(loginPage.informationField).toContainText(
        "Please check your email/username and password and try again.",
      );
    });

    test("Empty Password", async ({ loginPage }) => {
      await loginPage.fillCredentials(loginData.email, "");
      await loginPage.clickLoginButton();

      await expect(loginPage.informationField).toContainText(
        "Please enter your password",
      );
    });

    test("Empty Email/Username", async ({ loginPage }) => {
      await loginPage.fillCredentials("", loginData.password);
      await loginPage.clickLoginButton();

      await expect(loginPage.informationField).toContainText(
        "Please enter your email or username",
      );
    });
  },
);
