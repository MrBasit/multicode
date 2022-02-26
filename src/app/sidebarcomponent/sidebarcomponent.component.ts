import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeamsService } from '../services/teams.service';
import { EventManager } from '@angular/platform-browser';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'sidebarcomponent',
  templateUrl: './sidebarcomponent.component.html',
  styleUrls: ['./sidebarcomponent.component.css'],
})
export class SidebarcomponentComponent implements OnInit {
  files = new FormGroup({
    newFile: new FormControl(),
  });
  currentFiles: any;
  show = false;

  constructor(
    private teamservice: TeamsService,
    private helperservice: HelperService
  ) {}

  ngOnInit(): void {
    let body = {
      Path: this.helperservice.teaminfo.Team.FolderPath,
    };
    this.teamservice
      .GetDirectoryStructure('api/GetDirectoryStructure', body)
      .subscribe((r: any) => {
        this.currentFiles = r;
      });
  }

  // @HostListener('window:keydown.enter', ['$event'])
  CreateFile(input: any) {
    let teaminfo = this.helperservice.teaminfo;
    let body = {
      Path: teaminfo.Team.FolderPath,
      FileName: input.value,
    };
    this.teamservice.CreateFile('api/CreateFile', body).subscribe((r) => {
      input.value = '';
      this.show = false;
    });
  }
  showHide() {
    this.show = !this.show;
  }
  getFileValue(event: any) {
    console.log(event.innerHTML);
    // for (let index = 0; index < this.currentFiles.length; index++) {
    //   console.log(this.currentFiles[index]);
    // }

    this.helperservice.emitChange(event.innerHTML);
  }
}
