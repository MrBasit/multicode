import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpClient) {}

  JoinTeam(url: string) {
    return this.http.post(environment.URL + url, {});
  }
}
