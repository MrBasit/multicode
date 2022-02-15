import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-popup',
  templateUrl: './start-popup.component.html',
  styleUrls: ['./start-popup.component.css'],
})
export class StartPopupComponent implements OnInit {
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
    this.router.navigate(['/create']);
  }
  JoinTeam() {
    this.router.navigate(['/join']);
  }
}
