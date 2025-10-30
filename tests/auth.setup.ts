import { test as setup, request } from "../pages/base.ts";
import fs from "fs";
import loginData from "../test-data/login-data.js";
import apiData from "../test-data/api-data.js";

const authfile = ".auth/user.json";

setup("authentication", async ({}) => {
  const apiContext = await request.newContext();
  await apiContext.post(apiData.loginAPI, {
    data: {
      email: loginData.email,
      password: loginData.password,
    },
  });

  await apiContext.storageState({ path: authfile });

  const storageState = JSON.parse(fs.readFileSync(".auth/user.json", "utf-8"));
  const cookies = storageState.cookies;
  process.env["COOKIES"] =
    `${cookies[0].name}=${cookies[0].value}; ${cookies[1].name}=${cookies[1].value}`;
});
