interface GithubGistDataTypes {
  description: string;
  files: Record<string, { content: string }>;
  public?: boolean;
  id?: string;
}
