// githubRepo.service.ts (although typically this would be in a models or interfaces folder)
export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}