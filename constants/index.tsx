export const GITHUB_API_BASE_URL = "https://api.github.com";
export const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";

export const PAGES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contact",
};

export const SOCIALS = {
  EMAIL: "chidiobinna0001@gmail.com",
  TWITTER: "https://twitter.com/codabytez",
  GITHUB: "https://github.com/codabytez",
  LINKEDIN: "https://linkedin.com/in/codabytez",
  INSTAGRAM: "https://instagram.com/codabytez",
  BENTO: "https://bento.me/codabytez",
  WAKATIME: "https://wakatime.com/@codabytez",
};

export const spotifyPlaylists = [
  {
    name: "bytez-mode",
    url: "https://open.spotify.com/playlist/3EJimNyBZ4gDOc4x5ictIz?si=2ca925e113864371",
  },
  {
    name: "melancholic-teen",
    url: "https://open.spotify.com/playlist/4a49DQDdB7RTKJozra9BBg?si=681c40129c4a41b4",
  },
  {
    name: "timeless-echoes",
    url: "https://open.spotify.com/playlist/1IW8B2XJPoT8mNbssrHUgf?si=fc7e6353098a402f",
  },
  {
    name: "modern-maverick",
    url: "https://open.spotify.com/playlist/28TcBJelFnYtuHQCozSPH2?si=62bff936bc614d89",
  },
  {
    name: "darker-goodbye",
    url: "https://open.spotify.com/playlist/4IDOYEMZ1xbPqqM2LPcCQM?si=37eba53a665a4fcc",
  },
];

export const GITHUB_GIST_ENDPOINTS = {
  MY_GISTS: `/gists/`,
  CREATE_GIST: `/gists`,
  PUBLIC_GISTS: `/gists/public`,
  STARRED_GISTS: `/gists/starred`,
  GET_GIST: (id: string) => `/gists/${id}`,
  UPDATE_GIST: (id: string) => `/gists/${id}`,
  DELETE_GIST: (id: string) => `/gists/${id}`,
  STAR_GIST: (id: string) => `/gists/${id}/star`,
  GISTS_BY_USER: (username: string) => `/users/${username}/gists`,
};

export const SPOTIFY_ENDPOINTS = {
  TOKEN: "https://accounts.spotify.com/api/token",
  USER_PROFILE: "/me",
  NOW_PLAYING: "/me/player/currently-playing",
  TOP_TRACKS: "/me/top/tracks?time_range=medium_term&limit=5&offset=0",
  TOP_ARTISTS: "/me/top/artists?time_range=medium_term&limit=5&offset=0",
};
