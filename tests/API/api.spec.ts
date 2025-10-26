import { test, expect } from "../../pages/base.ts";
import loginData from "../../test-data/login-data.js";
import apiData from "../../test-data/api-data.js";

test.describe("Log in API Scenario", () => {
  test("Succesful Log in", async ({ request }) => {
    const response = await request.post(apiData.loginAPI, {
      data: {
        email: loginData.email,
        password: loginData.password,
      },
    });

    expect(response.status()).toBe(200);
  });
});

test.describe("Community Discussion scenario", () => {
  test("Create a Discussion/Post", async ({ page, loginPage, request }) => {
    await page.goto("https://app.upskwela.com/login");
    await loginPage.successfulLogin();
    await page.waitForURL("**/communities");
    const cookies = await page.context().cookies();

    const response = await request.post(apiData.createPostAPI, {
      data: {
        group_id: apiData.communityID,
        title: "API test title",
        content_md: "API test content",
      },
      headers: {
        Cookie: `${cookies[0].name}=${cookies[0].value}; ${cookies[1].name}=${cookies[1].value}`,
      },
    });

    expect(response.status()).toBe(201);
  });
});
