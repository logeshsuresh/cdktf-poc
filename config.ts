import * as dotenv from "dotenv";

dotenv.config();

export const CREDENTIALS_PATH = process.env.CREDENTIALS_PATH !== undefined ? process.env.CREDENTIALS_PATH : "DEFAULT-CREDS.json";
export const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID !== undefined ? process.env.GOOGLE_PROJECT_ID: "PROJECT_ID";
export const GOOGLE_REGION = process.env.GOOGLE_REGION !== undefined ? process.env.GOOGLE_REGION : "asia-east1";