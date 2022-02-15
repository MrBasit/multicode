import { Component, OnInit } from '@angular/core';
import 'src/editor/lib/codemirror.js';
declare const CodeMirror: any;
@Component({
  selector: 'multicodemain',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var mcm = CodeMirror(document.getElementById('Editor'), {
      lineNumbers: true,
      mode: 'javascript',
    });
    console.log(mcm);
  }
}
