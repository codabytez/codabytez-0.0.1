import {
  useMutation,
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import {
  getGist,
  getGistsByUser,
  getMyGists,
  getPublicGists,
  getStarredGists,
  createGist,
  updateGist,
  deleteGist,
} from "@/api/gist";

export const useMyGists = () =>
  useQuery<MyGistsResponse[]>({
    queryKey: ["myGists"],
    queryFn: getMyGists,
    placeholderData: keepPreviousData,
  });

export const useGistsByUser = (username: string) =>
  useQuery({
    queryKey: ["gistsByUser", username],
    queryFn: () => getGistsByUser(username),
    placeholderData: keepPreviousData,
  });

export const usePublicGists = () =>
  useQuery({
    queryKey: ["publicGists"],
    queryFn: getPublicGists,
    placeholderData: keepPreviousData,
  });

export const useStarredGists = () =>
  useQuery<MyGistsResponse[]>({
    queryKey: ["starredGists"],
    queryFn: getStarredGists,
    placeholderData: keepPreviousData,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

export const useGist = (id: string) =>
  useQuery({
    queryKey: ["gist", id],
    queryFn: () => getGist(id),
    placeholderData: keepPreviousData,
  });

export const useCreateGist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: GithubGistDataTypes) => createGist(data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["gists"] });
      const previousGists = queryClient.getQueryData(["gists"]);
      queryClient.setQueryData(["gists"], (old: GithubGistDataTypes[]) => [
        ...old,
        data,
      ]);
      return { previousGists };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["gists"], context?.previousGists);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["gists"] });
    },
  });
};

export const useUpdateGist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: GithubGistDataTypes) => updateGist(data.id!, data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["gists"] });
      const previousGists = queryClient.getQueryData(["gists"]);
      queryClient.setQueryData(["gists"], (old: GithubGistDataTypes[]) => {
        const index = old.findIndex(
          (gist: GithubGistDataTypes) => gist.id === data.id
        );
        old[index] = data;
        return old;
      });
      return { previousGists };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["gists"], context?.previousGists);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["gists"] });
    },
  });
};

export const useDeleteGist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteGist(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["gists"] });
      const previousGists = queryClient.getQueryData(["gists"]);
      queryClient.setQueryData(["gists"], (old: GithubGistDataTypes[]) =>
        old.filter((gist: GithubGistDataTypes) => gist.id !== id)
      );
      return { previousGists };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["gists"], context?.previousGists);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["gists"] });
    },
  });
};
