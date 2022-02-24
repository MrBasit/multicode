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
    let teaminfo = localStorage.getItem('teaminfo');
    if (teaminfo) {
      this.router.navigate(['/editor']);
    }
  }

  JoinTeam() {
    console.log('joining team...');
    this.membersService
      .JoinTeam(
        `api/jointeam?SecretNumber=${this.secretnumber}&MemberName=${this.membername}`
      )
      .subscribe((r) => {
        localStorage.setItem('teaminfo', JSON.stringify(r));
        this.router.navigate(['/editor']);
      });
  }
}
