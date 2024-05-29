// export const GITHUB_GIST_ENDPOINTS = {
//     MY_GISTS: `/users/codabytez/gists`,
//     GIST: `/gists/`,
//     CREATE_GIST: `/gists`,
//     PUBLIC_GISTS: `/gists/public`,
//     STARRED_GISTS: `/gists/starred`,
//     GET_GIST: (id: string) => `/gists/${id}`,
//     UPDATE_GIST: (id: string) => `/gists/${id}`,
//     DELETE_GIST: (id: string) => `/gists/${id}`,
//     STAR_GIST: (id: string) => `/gists/${id}/star`,
//     GISTS_BY_USER: (username: string) => `/users/${username}/gists`,
//   };

interface ApiResponse<T> {
  message: string;
  status: number;
  data: T;
}

interface MyGistsResponse {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: {
    [key: string]: {
      filename: string;
      type: string;
      language: string;
      raw_url: string;
      size: number;
    };
  };
  public: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  user: null;
  comments_url: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  truncated: boolean;
}

interface SpotifyAccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

interface SpotifyNowPlayingResponse {
  timestamp: number;
  context: Context;
  progress_ms: number;
  item: Item;
  currently_playing_type: string;
  actions: Actions;
  is_playing: boolean;
}

interface SpotifyUserResponse {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
  followers: Followers;
  country: string;
  product: string;
  explicit_content: ExplicitContent;
  email: string;
}

interface SpotifyTopArtistsResponse {
  items: TopArtistItem[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: null;
}

interface SpotifyTopTracksResponse {
  items: TopTracksItem[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: null;
}

interface ContentfulResponse {
  metadata: {
    tags: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  };
  fields: {
    title: string;
    project_img: {
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    description: string;
    tags: string[];
    link: string;
    github_repo: string;
  };
}

interface LanyardResponse {
  data: LanyardData;
  success: boolean;
}
