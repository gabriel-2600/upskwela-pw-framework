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
});
