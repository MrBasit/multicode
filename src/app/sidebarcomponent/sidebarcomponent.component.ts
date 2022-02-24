import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeamsService } from '../services/teams.service';
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
    let a: any = localStorage.getItem('teaminfo');
    let teaminfo = JSON.parse(a);
    let body = {
      Path: teaminfo.Team.FolderPath,
      FileName: event.target.value,
    };
    this.teamservice.CreateFile('api/CreateFile', body).subscribe((r) => {
      console.log(event.target.value);
      event.target.value = '';
      this.show = false;
    });
  }

  show = false;

  // form
  files = new FormGroup({
    newFile: new FormControl(),
  });

  constructor(private teamservice: TeamsService) {}
  currentFiles = ['index.js', 'index.txt'];

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
