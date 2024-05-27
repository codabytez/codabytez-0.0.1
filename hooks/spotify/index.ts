/* eslint-disable camelcase */
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  getAccessToken,
  getNowPlaying,
  getTopArtists,
  getTopTracks,
  getUserProfile,
} from "@/api/spotify";

export const useSpotifyAccessToken = () =>
  useQuery<SpotifyAccessTokenResponse>({
    queryKey: ["spotify", "access-token"],
    queryFn: () => getAccessToken(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

export const useNowPlaying = (accessToken: string) => {
  return useQuery<SpotifyNowPlayingResponse>({
    queryKey: ["spotify", "now-playing"],
    queryFn: () => getNowPlaying(accessToken),
    enabled: !!accessToken,
    refetchOnWindowFocus: true,
    refetchInterval: 10000,
  });
};

export const useUserProfile = (accessToken: string) => {
  return useQuery<SpotifyUserResponse>({
    queryKey: ["spotify", "user-profile"],
    queryFn: () => getUserProfile(accessToken),
    enabled: !!accessToken,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useTopArtists = (accessToken: string) => {
  return useQuery<SpotifyTopArtistsResponse>({
    queryKey: ["spotify", "top-artists"],
    queryFn: () => getTopArtists(accessToken),
    enabled: !!accessToken,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useTopTracks = (accessToken: string) => {
  return useQuery<SpotifyTopTracksResponse>({
    queryKey: ["spotify", "top-tracks"],
    queryFn: () => getTopTracks(accessToken),
    enabled: !!accessToken,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
