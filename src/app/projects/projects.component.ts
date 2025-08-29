import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { GitHubRepo } from '../../services/githubRepo.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
    // Change these values to your GitHub username and repositories
    username = 'NareinBod';
    repositories: GitHubRepo[] = [];
    selectedRepo: GitHubRepo | null = null;
    loading = false;
    error: string | null = null;
  
    constructor(private githubService: ApiService) { }
  
    ngOnInit(): void {
      this.fetchRepositories();
    }
  
    fetchRepositories(): void {
      this.loading = true;
      this.error = null;
      
      this.githubService.getRepos(this.username).subscribe({
        next: (repos) => {
          this.repositories = repos;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load repositories. Please try again later.';
          console.error('Error fetching repositories:', err);
          this.loading = false;
        }
      });
    }
  
    fetchRepoDetails(owner: string, repoName: string): void {
      this.loading = true;
      this.error = null;
      
      this.githubService.getRepoDetails(owner, repoName).subscribe({
        next: (repo) => {
          this.selectedRepo = repo;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load repository details. Please try again later.';
          console.error('Error fetching repository details:', err);
          this.loading = false;
        }
      });
    }
}