interface GithubGistDataTypes {
  description: string;
  files: Record<string, { content: string }>;
  public?: boolean;
  id?: string;
}

// spotify types

interface ExternalUrls {
  spotify: string;
}

interface Context {
  external_urls: ExternalUrls;
  href: string;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface Item {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface Disallows {
  resuming: boolean;
  toggling_repeat_context: boolean;
  toggling_repeat_track: boolean;
  toggling_shuffle: boolean;
}

interface Actions {
  disallows: Disallows;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Followers {
  href: null;
  total: number;
}

interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

interface TopArtistItem {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface ExternalIds {
  isrc: string;
}

interface TopTracksItem {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface LanyardData {
  kv: Record<string, unknown>;
  spotify: Spotify | null;
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
}

interface Spotify {
  track_id: string;
  timestamps: Timestamps;
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
}

interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  clan: null;
  global_name: string;
  avatar_decoration_data: null;
  display_name: string;
  public_flags: number;
}

interface Activity {
  id: string;
  name: string;
  type: number;
  timestamps: Timestamps;
  emoji?: Emoji;
  created_at: number;
  state?: string;
  session_id?: string;
  details?: string;
  assets?: Assets;
  sync_id?: string;
  party?: Party;
  flags?: number;
  application_id?: string;
}

interface Emoji {
  name: string;
}

interface Timestamps {
  start: number;
  end?: number;
}

interface Assets {
  large_image: string;
  large_text: string;
  small_image?: string;
  small_text?: string;
}

interface Party {
  id: string;
}
