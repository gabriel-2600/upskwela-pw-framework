import dotenv from "dotenv";
dotenv.config();

const { LOGIN_API, CREATE_POST_API, COMMUNITY_ID } = process.env;
if (!LOGIN_API || !CREATE_POST_API || !COMMUNITY_ID) {
  throw new Error("Missing API DATA in environment variables");
}

interface APIData {
  loginAPI: string;
  createPostAPI: string;
  communityID: string;
}

const apiData: APIData = {
  loginAPI: LOGIN_API,
  createPostAPI: CREATE_POST_API,
  communityID: COMMUNITY_ID,
};

export default apiData;
