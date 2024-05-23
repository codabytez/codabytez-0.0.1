import { GITHUB_API_BASE_URL } from "@/constants";
import axios from "axios";
const ACCESS_TOKEN = String(process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN);

export const axiosInstance = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    Accept: "application/vnd.github+json",
  },
});
