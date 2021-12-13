import { Component, OnInit } from '@angular/core';
import 'src/editor/lib/codemirror.js';
declare const mytest: any;
declare const CodeMirror: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Multicode';
  constructor() {}
  ngOnInit(): void {
    var mcm = CodeMirror(document.getElementById('Editor'), {
      lineNumbers: true,
      mode: 'javascript',
    });
    console.log(mcm.getValue());
    mytest();
  }
}
