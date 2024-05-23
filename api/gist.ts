import { axiosInstance } from "./axiosInstance";
import { GITHUB_GIST_ENDPOINTS } from "@/constants";

export const getMyGists = async () => {
  return (await axiosInstance.get(GITHUB_GIST_ENDPOINTS.MY_GISTS)).data;
};

export const getGist = async (id: string) => {
  return (await axiosInstance.get(GITHUB_GIST_ENDPOINTS.GET_GIST(id))).data;
};

export const createGist = async (data: GithubGistDataTypes) => {
  return (await axiosInstance.post(GITHUB_GIST_ENDPOINTS.CREATE_GIST, data))
    .data;
};

export const updateGist = async (id: string, data: GithubGistDataTypes) => {
  return (
    await axiosInstance.patch(GITHUB_GIST_ENDPOINTS.UPDATE_GIST(id), data)
  ).data;
};

export const deleteGist = async (id: string) => {
  return (await axiosInstance.delete(GITHUB_GIST_ENDPOINTS.DELETE_GIST(id)))
    .data;
};

export const starGist = async (id: string) => {
  return (await axiosInstance.put(GITHUB_GIST_ENDPOINTS.STAR_GIST(id))).data;
};

export const getGistsByUser = async (username: string) => {
  return (
    await axiosInstance.get(GITHUB_GIST_ENDPOINTS.GISTS_BY_USER(username))
  ).data;
};

export const getPublicGists = async () => {
  return (await axiosInstance.get(GITHUB_GIST_ENDPOINTS.PUBLIC_GISTS)).data;
};

export const getStarredGists = async () => {
  return (await axiosInstance.get(GITHUB_GIST_ENDPOINTS.STARRED_GISTS)).data;
};

// Path: api/index.ts
