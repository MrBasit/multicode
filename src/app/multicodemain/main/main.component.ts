import { KeyValuePipe } from '@angular/common';
import { HtmlAstPath, ParsedEventType } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import 'src/editor/lib/codemirror.js';
declare const CodeMirror: any;
@Component({
  selector: 'multicodemain',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  _codeMirror: any;
  ngOnInit(): void {
    this._codeMirror = CodeMirror(document.getElementById('Editor'), {
      lineNumbers: true,
      mode: 'javascript',
    });
  }
  getEditorValue(event: any) {
    console.log(this._codeMirror.getValue());
    event.preventDefault();
  }
  sync(event: any) {
    this._codeMirror.setValue('welcome to the code  room project.');
    event.preventDefault();
  }
}
