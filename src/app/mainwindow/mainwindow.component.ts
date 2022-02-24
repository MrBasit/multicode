import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css'],
})
export class MainwindowComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('main window init');
    this.router.navigate(['/editor/leftpanel']);
  }
}
