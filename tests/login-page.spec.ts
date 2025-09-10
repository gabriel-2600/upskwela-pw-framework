import { test, expect } from "../pages/base.ts";
import dotenv from "dotenv";
dotenv.config();

const { EMAIL, PW } = process.env;

test.beforeEach(async ({ page }) => {
  await page.goto("https://app.upskwela.com/login");
});

test.describe("Login Scenarios", () => {
  test("Successful Login", async ({ loginPage, page }) => {
    if (!EMAIL || !PW) {
      throw new Error("Missing EMAIL or PW in environment variables");
    }

    await loginPage.fillCredentials(EMAIL, PW);
    await loginPage.clickLoginButton();

    await expect(page).toHaveURL("https://app.upskwela.com/communities");
    await expect(page).not.toHaveURL("https://www.upskwela.com/communities");
  });

  test("Incorrect Password", async ({ loginPage }) => {
    if (!EMAIL) {
      throw new Error("Missing EMAIL in environment variables");
    }

    await loginPage.fillCredentials(EMAIL, "n/a");
    await loginPage.clickLoginButton();

    await expect(loginPage.informationField).toContainText(
      "Please check your email/username and password and try again.",
    );
  });

  test("Incorrect Email", async ({ loginPage }) => {
    if (!PW) {
      throw new Error("Missing EMAIL in environment variables");
    }

    await loginPage.fillCredentials("n/a", PW);
    await loginPage.clickLoginButton();

    await expect(loginPage.informationField).toContainText(
      "Please check your email/username and password and try again.",
    );
  });

  test("Empty Password", async ({ loginPage }) => {
    if (!EMAIL) {
      throw new Error("Missing EMAIL in environment variables");
    }

    await loginPage.fillCredentials(EMAIL, "");
    await loginPage.clickLoginButton();

    await expect(loginPage.informationField).toContainText(
      "Please enter your password",
    );
  });

  test("Empty Email/Username", async ({ loginPage }) => {
    if (!PW) {
      throw new Error("Missing EMAIL in environment variables");
    }

    await loginPage.fillCredentials("", PW);
    await loginPage.clickLoginButton();

    await expect(loginPage.informationField).toContainText(
      "Please enter your email or username",
    );
  });
});
