import { KeyValuePipe } from '@angular/common';
import { HtmlAstPath, ParsedEventType } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { HelperService, TeamInfo } from 'src/app/services/helper.service';
import { TeamsService } from 'src/app/services/teams.service';
import 'src/editor/lib/codemirror.js';
declare const CodeMirror: any;
@Component({
  selector: 'multicodemain',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(
    private teamService: TeamsService,
    private helperservice: HelperService
  ) {}
  _codeMirror: any;
  teaminfo: TeamInfo;
  currentopenedfile: string;
  ngOnInit(): void {
    this.teaminfo = this.helperservice.teaminfo;
    this._codeMirror = CodeMirror(document.getElementById('Editor'), {
      lineNumbers: true,
      mode: 'javascript',
    });

    this.helperservice.filechangeEmitted$.subscribe((r) => {
      this.currentopenedfile = r;
      let body = {
        Path: `${this.teaminfo.Team.FolderPath}/${r}`,
      };
      this.teamService
        .GetFileContent('api/GetFileContent', body)
        .subscribe((r: any) => {
          this._codeMirror.setValue(r);
        });

      event.preventDefault();
    });
  }
  getEditorValue(event: any) {
    console.log(this._codeMirror.getValue(), '==>', this.currentopenedfile);
    let body = {
      Path: `${this.teaminfo.Team.FolderPath}/${this.currentopenedfile}`,
      Content: this._codeMirror.getValue(),
    };
    this.teamService
      .UpdateFileContent('api/updatefile', body)
      .subscribe((r) => {
        console.log(`${this.currentopenedfile} updated!`);
      });
    event.preventDefault();
  }
  // sync(event: any) {
  //   let body = {
  //     Path: `${this.teaminfo.Team.FolderPath}/index.html`,
  //   };
  //   this.teamService
  //     .GetFileContent('api/GetFileContent', body)
  //     .subscribe((r: any) => {
  //       console.log(r);
  //       this._codeMirror.setValue(r);
  //     });

  //   event.preventDefault();
  // }
}
