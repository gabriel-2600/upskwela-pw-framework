import dotenv from "dotenv";
dotenv.config();

const { LOGIN_API, LOGOUT_API, POST_API, COMMUNITY_ID, AUTHOR_ID } =
  process.env;
if (!LOGIN_API || !LOGOUT_API || !POST_API || !COMMUNITY_ID || !AUTHOR_ID) {
  throw new Error("Missing API DATA in environment variables");
}

interface APIData {
  loginAPI: string;
  logoutAPI: string;
  postAPI: string;
  communityID: string;
  authorID: string;
}

const apiData: APIData = {
  loginAPI: LOGIN_API,
  logoutAPI: LOGOUT_API,
  postAPI: POST_API,
  communityID: COMMUNITY_ID,
  authorID: AUTHOR_ID,
};

export default apiData;
