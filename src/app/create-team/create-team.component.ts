import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
})
export class CreateTeamComponent implements OnInit {
  constructor(private router: Router, private teamsService: TeamsService) {}
  teamname: string = '';
  membername: string = '';
  teaminfo: any;
  // reactive form
  createTeamForm = new FormGroup({
    teamName: new FormControl(),
    memberName: new FormControl(),
  });

  ngOnInit(): void {
    this.teaminfo = localStorage.getItem('teaminfo');
    if (this.teaminfo) {
      this.router.navigate(['/editor']);
    }
  }

  CreateTeam() {
    this.teamsService
      .CreateTeam(
        `api/createteam?TeamName=${this.teamname}&CreatedBy=${this.membername}`
      )
      .subscribe((r) => {
        localStorage.setItem('teaminfo', JSON.stringify(r));
        this.router.navigate(['/editor']);
      });
  }
}
