import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    //check the member and team info from local storage
    let isUserAlreadyjoined = true;

    if (isUserAlreadyjoined) {
      //already login and has correct team code in local storage
      // this.router.navigate(['/editor']);
      this.router.navigate(['/create']);
      this.router.navigate(['/join']);
    } else {
      this.router.navigate(['/start']);
    }
  }
}
