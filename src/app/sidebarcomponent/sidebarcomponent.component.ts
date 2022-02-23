import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sidebarcomponent',
  templateUrl: './sidebarcomponent.component.html',
  styleUrls: ['./sidebarcomponent.component.css'],
})
export class SidebarcomponentComponent implements OnInit {
  @HostListener('window:keydown.enter', ['$event']) getInputFieldValue(
    event: any
  ) {
    console.log(event.target.value);
    event.target.value = '';
    this.show = false;
  }

  show = false;

  // form
  files = new FormGroup({
    newFile: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  showHide() {
    this.show = !this.show;
  }
}
