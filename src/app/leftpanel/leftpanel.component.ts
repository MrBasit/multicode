import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarcontrolsComponent } from '../sidebarcontrols/sidebarcontrols.component';

@Component({
  selector: 'leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css'],
})
export class LeftpanelComponent implements OnInit {
  collapse = false;
  constructor() {}

  ngOnInit(): void {
    this.teamInfoCollaps();
  }

  teamInfoCollaps() {
    this.collapse = !this.collapse;
  }
}
