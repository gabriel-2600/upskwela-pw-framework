import dotenv from "dotenv";
dotenv.config();

const { LOGINAPI } = process.env;
if (!LOGINAPI) {
  throw new Error("Missing API DATA in environment variables");
}

interface APIData {
  loginAPI: string;
}

const apiData: APIData = {
  loginAPI: LOGINAPI,
};

export default apiData;
