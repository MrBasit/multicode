import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  CreateTeam(url: string) {
    // let a = environment.URL + url;
    return this.http.post(environment.URL + url, {});
  }

  GetFileContent(url: string, body: {}) {
    return this.http.post(environment.URL + url, body);
  }

  UpdateFileContent(url: string, body: {}) {
    return this.http.post(environment.URL + url, body);
  }

  GetTeamInfo(url: string) {
    return this.http.get(environment.URL + url);
  }

  LeaveTeam(url: string) {
    return this.http.delete(environment.URL + url);
  }

  CreateFile(url: string, body: {}) {
    return this.http.post(environment.URL + url, body);
  }

  GetDirectoryStructure(url: string, body: {}) {
    return this.http.post(environment.URL + url, body);
  }
}
