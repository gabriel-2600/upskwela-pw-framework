import { test, expect, request } from "../../pages/base.ts";
import loginData from "../../test-data/login-data.js";
import apiData from "../../test-data/api-data.js";

test.describe("Authentication API Scenario", () => {
  test("Succesful Log in", async ({ request }) => {
    const loginResponse = await request.post(apiData.loginAPI, {
      data: {
        email: loginData.email,
        password: loginData.password,
      },
    });

    expect(loginResponse.status()).toBe(200);
  });

  test("Log out user", async ({ request }) => {
    const logoutReponse = await request.delete(apiData.logoutAPI);

    const logoutReponseObject = await logoutReponse.json();

    expect(logoutReponse.status()).toBe(200);
    expect(logoutReponseObject).toBe("Logged out successfully");
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

  test("Create a Post", async ({ request }) => {
    const createPostAPI = apiData.postAPI;
    const postResponse = await request.post(createPostAPI, {
      data: {
        group_id: apiData.communityID,
        title: "API test title",
        content_md: "API test content",
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
    });

    expect(deleteResponse.status()).toBe(200);
  });
});
