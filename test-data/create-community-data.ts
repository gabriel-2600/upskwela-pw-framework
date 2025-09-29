import dotenv from "dotenv";
dotenv.config();

const { COVER_IMAGE } = process.env;
if (!COVER_IMAGE) {
  throw new Error("Missing EMAIL or PASSWORD in environment variables");
}

interface CreateCommunityData {
  communityName: string;
  communitySlug: string;
  description: string;
  coverImage: string;
}

const createCommunityData: CreateCommunityData = {
  communityName: "test community v2",
  communitySlug: "test-comunnity-v2",
  description: "Test commmunity description v2",
  coverImage: COVER_IMAGE,
};

export default createCommunityData;
