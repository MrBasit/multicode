import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.css'],
})
export class TeaminfoComponent implements OnInit {
  constructor(private teamservice: TeamsService, private router: Router) {}
  teaminfo: any;
  ngOnInit(): void {
    this.teaminfo = {
      CurrentMember: {
        Id: 27,
        Name: 'mem10',
        TeamId: 27,
      },
      Team: {
        Id: 27,
        TeamName: 'test',
        SecretNumber: 'YZL7IiJI',
        FolderPath: '~/Projects/test',
        CreatedOn: '2022-02-23T12:55:15.793',
        ClosedOn: '0001-01-01T00:00:00',
      },
      Members: [
        {
          Id: 24,
          Name: 'mem1',
          TeamId: 27,
        },
        {
          Id: 25,
          Name: 'mem2',
          TeamId: 27,
        },
        {
          Id: 26,
          Name: 'mem4',
          TeamId: 27,
        },
      ],
    };
    let teaminfostring: any = localStorage.getItem('teaminfo');
    this.teaminfo = JSON.parse(teaminfostring);

    let url = `api/GetTeamInfo/${this.teaminfo.Team.SecretNumber}/${this.teaminfo.CurrentMember.Name}`;
    this.teamservice.GetTeamInfo(url).subscribe((r) => {
      localStorage.setItem('teaminfo', JSON.stringify(r));
    });

    teaminfostring = localStorage.getItem('teaminfo');
    this.teaminfo = JSON.parse(teaminfostring);
    console.log(this.teaminfo.Members);
  }

  leaveteam() {
    let url = `api/leaveteam/${this.teaminfo.CurrentMember.Id}`;
    this.teamservice.LeaveTeam(url).subscribe((r) => {
      localStorage.removeItem('teaminfo');
      this.router.navigate(['/start']);
    });
  }
}
