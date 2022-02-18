import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.component.html',
  styleUrls: ['./join-team.component.css'],
})
export class JoinTeamComponent implements OnInit {
  membername: string = '';
  secretnumber: string = '';
  joinTeamForm = new FormGroup({
    memberName: new FormControl(),
    secretNumber: new FormControl(),
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
  JoinTeam() {
    //call the api to join the team and save information in local storage

    this.router.navigate(['/editor']);
  }

  getJoinTeamData() {
    console.log('memberName: ', this.membername);
    console.log('secretNumber: ', this.secretnumber);
  }
}
