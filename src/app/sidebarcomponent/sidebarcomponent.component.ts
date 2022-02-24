import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventManager } from '@angular/platform-browser';

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

  currentFiles = ['index.js', 'index.txt'];

  constructor() {}

  ngOnInit(): void {}

  showHide() {
    this.show = !this.show;
  }
  getFileValue(event: any) {
    console.log(event.target.value);
    // for (let index = 0; index < this.currentFiles.length; index++) {
    //   console.log(this.currentFiles[index]);
    // }
  }
}
