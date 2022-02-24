import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-popup',
  templateUrl: './start-popup.component.html',
  styleUrls: ['./start-popup.component.css'],
})
export class StartPopupComponent implements OnInit {
  constructor(private router: Router) {}
  teaminfo: any;
  ngOnInit(): void {
    //check the member and team info from local storage
    let isUserAlreadyjoined = false;
    this.teaminfo = localStorage.getItem('teaminfo');
    if (this.teaminfo) {
      //already login and has correct team code in local storage
      let a = JSON.parse(this.teaminfo);
      this.router.navigate(['/editor']);
    }
  }
  CreateTeam() {
    this.router.navigate(['/create']);
  }
  JoinTeam() {
    this.router.navigate(['/join']);
  }
}
