import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitHubRepo } from './githubRepo.service'; // Make sure this path is correct


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  // Method being called in your component
  getRepos(username: string): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(`${this.apiUrl}/users/${username}/repos`);
  }

  // Method being called in your component
  getRepoDetails(owner: string, repoName: string): Observable<GitHubRepo> {
    return this.http.get<GitHubRepo>(`${this.apiUrl}/repos/${owner}/${repoName}`);
  }

  
}