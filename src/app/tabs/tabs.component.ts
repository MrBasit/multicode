import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  tabtitle: string;
  constructor(private helperservice: HelperService) {
    helperservice.filechangeEmitted$.subscribe((r) => {
      this.tabtitle = r;
    });
  }

  ngOnInit(): void {}
}
