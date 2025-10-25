import { test, expect } from "@playwright/test";
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
