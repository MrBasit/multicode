import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css'],
})
export class LeftpanelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['editor/leftpanel/file']);

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
