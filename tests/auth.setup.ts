import { test as setup } from "../pages/base.ts";

const authfile = ".auth/user.json";

setup("authentication", async ({ page, loginPage }) => {
  await page.goto("https://app.upskwela.com/login");
  await loginPage.successfulLogin();
  await page.waitForLoadState("networkidle");

  await page.context().storageState({ path: authfile });
});
