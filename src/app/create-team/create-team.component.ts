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
  // reactive form
  createTeamForm = new FormGroup({
    teamName: new FormControl(),
    memberName: new FormControl(),
  });

  ngOnInit(): void {
    //check the member and team info from local storage
    let isUserAlreadyjoined = false;

    if (isUserAlreadyjoined) {
      //already login and has correct team code in local storage
      this.router.navigate(['/editor']);
    }
  }

  CreateTeam() {
    //call the api to create the team

    // this.router.navigate(['/editor']);

    this.teamsService
      .CreateTeam('api/createteam?TeamName=team_app1&CreatedBy=teammember_1')
      .subscribe((r) => console.log(r));
  }

  // getformdata
  getDataFormData() {
    console.log('teamname: ', this.teamname);
    console.log('membername: ', this.membername);
  }
}
