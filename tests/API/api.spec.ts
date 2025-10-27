import { test, expect } from "../../pages/base.ts";
import loginData from "../../test-data/login-data.js";
import apiData from "../../test-data/api-data.js";
import { group } from "console";

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

test.describe("Community create and delete post scenario", () => {
  let postResponseObject: {
    id: string;
    content_md: string;
    created_at: string;
    title: string;
    updated_at: string;
  };
  let cookies: {
    name: string;
    value: string;
  }[];

  test.beforeAll("Retrieve cookies", async ({ page, loginPage }) => {
    await page.goto("https://app.upskwela.com/login");
    await loginPage.successfulLogin();
    await page.waitForURL("**/communities");
    cookies = await page.context().cookies();
  });

  test("Create a Post", async ({ request }) => {
    const createPostAPI = apiData.postAPI;
    const postResponse = await request.post(createPostAPI, {
      data: {
        group_id: apiData.communityID,
        title: "API test title",
        content_md: "API test content",
      },
      headers: {
        Cookie: `${cookies[0].name}=${cookies[0].value}; ${cookies[1].name}=${cookies[1].value}`,
      },
    });
    postResponseObject = await postResponse.json();

    expect(postResponse.status()).toBe(201);
  });

  test.afterAll("Delete a post", async ({ request }) => {
    const deletePostAPI = `${apiData.postAPI}/${postResponseObject.id}`;
    const deleteResponse = await request.delete(deletePostAPI, {
      data: {
        author_id: apiData.authorID,
        content_md: postResponseObject.content_md,
        created_at: postResponseObject.created_at,
        group_id: apiData.communityID,
        id: postResponseObject.id,
        is_announcement: false,
        title: postResponseObject.title,
        updated_at: postResponseObject.updated_at,
      },
      headers: {
        Cookie: `${cookies[0].name}=${cookies[0].value}; ${cookies[1].name}=${cookies[1].value}`,
      },
    });

    expect(deleteResponse.status()).toBe(200);
  });
});
