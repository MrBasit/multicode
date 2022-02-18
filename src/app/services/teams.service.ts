import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  CreateTeam(url: string) {
    let a = environment.URL + url;
    return this.http.post(environment.URL + url, {});
  }
}
