import { KeyValuePipe } from '@angular/common';
import { HtmlAstPath, ParsedEventType } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import 'src/editor/lib/codemirror.js';
declare const CodeMirror: any;
@Component({
  selector: 'multicodemain',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private teamService: TeamsService) {}
  _codeMirror: any;
  ngOnInit(): void {
    this._codeMirror = CodeMirror(document.getElementById('Editor'), {
      lineNumbers: true,
      mode: 'javascript',
    });
  }
  getEditorValue(event: any) {
    console.log(this._codeMirror.getValue());
    let body = {
      Path: '~/Projects/filing/index.html',
      Content: this._codeMirror.getValue(),
    };
    this.teamService
      .UpdateFileContent('api/updatefile', body)
      .subscribe((r) => {
        console.log(r);
      });
    event.preventDefault();
  }
  sync(event: any) {
    // this._codeMirror.setValue('welcome to the code  room project.');
    let body = {
      Path: '~/Projects/filing/index.html',
    };
    this.teamService
      .GetFileContent('api/GetFileContent', body)
      .subscribe((r: any) => {
        console.log(r);
        this._codeMirror.setValue(r);
      });

    event.preventDefault();
  }
}
