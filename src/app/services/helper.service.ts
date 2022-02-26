import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  // Observable string sources
  private fileChangeSource = new Subject<any>();
  // Observable string streams
  filechangeEmitted$ = this.fileChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.fileChangeSource.next(change);
  }

  get teaminfo(): TeamInfo {
    let teaminfostring: any = localStorage.getItem('teaminfo');
    return JSON.parse(teaminfostring);
  }

  set teaminfo(value: TeamInfo) {
    localStorage.setItem('teaminfo', JSON.stringify(value));
  }
}

export class TeamInfo {
  constructor() {}
  CurrentMember: Member;
  Team: Team;
  Members: Member[];
}

interface Member {
  Id: number;
  Name: string;
  TeamId: number;
}
interface Team {
  Id: 27;
  TeamName: string;
  SecretNumber: string;
  FolderPath: string;
  CreatedOn: string;
  ClosedOn: string;
}
