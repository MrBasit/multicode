import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css'],
})
export class LeftpanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const ele = document.querySelectorAll('sidebarcontrols .icons i');
    ele.forEach((element) => {
      element.addEventListener('click', function (event) {
        let sidebar = document.querySelector('sidebarcomponent');
        sidebar?.classList.toggle('active');
        event.preventDefault();
      });
    });
  }
}
