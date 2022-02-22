import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MembersService } from '../services/members.service';
import { TeamsService } from '../services/teams.service';

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
  constructor(private router: Router, private membersService: MembersService) {}

  ngOnInit(): void {
    //check the member and team info from local storage
    let isUserAlreadyjoined = false;

    if (isUserAlreadyjoined) {
      //already login and has correct team code in local storage
      this.router.navigate(['/editor']);
    }
  }

  JoinTeam() {
    // this.membersService
    //   .JoinTeam(
    //     `api/jointeam?SecretNumber=${this.secretnumber}&MemberName=${this.membername}`
    //   )
    //   .subscribe((r) => {
    //     console.log('memberName: ', this.membername);
    //     console.log('secretNumber: ', this.secretnumber);
    //     this.router.navigate(['/editor']);
    //   });

    this.router.navigate(['/editor']);
  }
}
