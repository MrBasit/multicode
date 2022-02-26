import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService, TeamInfo } from '../services/helper.service';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.css'],
})
export class TeaminfoComponent implements OnInit {
  constructor(
    private teamservice: TeamsService,
    private helperservice: HelperService,
    private router: Router
  ) {}
  teaminfo: TeamInfo;
  ngOnInit(): void {
    this.teaminfo = this.helperservice.teaminfo;
    let url = `api/GetTeamInfo/${this.teaminfo.Team.SecretNumber}/${this.teaminfo.CurrentMember.Name}`;
    this.teamservice.GetTeamInfo(url).subscribe((r) => {
      this.helperservice.teaminfo = <TeamInfo>r;
    });
    this.teaminfo = this.helperservice.teaminfo;
  }

  leaveteam() {
    let url = `api/leaveteam/${this.teaminfo.CurrentMember.Id}`;
    this.teamservice.LeaveTeam(url).subscribe((r) => {
      localStorage.removeItem('teaminfo');
      this.router.navigate(['/start']);
    });
  }
}
