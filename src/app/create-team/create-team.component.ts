import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
})
export class CreateTeamComponent implements OnInit {
  teamname: string = '';
  membername: string = '';
  // reactive form
  createTeamForm = new FormGroup({
    teamName: new FormControl(),
    memberName: new FormControl(),
  });
  constructor(private router: Router) {}

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

    this.router.navigate(['/editor']);
  }

  // getformdata
  getDataFormData() {
    console.log('teamname: ', this.teamname);
    console.log('membername: ', this.membername);
  }
}
