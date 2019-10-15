import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './shared/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  group: string;
  job: string;
  constructor(private ts: ToolbarService) { }

  ngOnInit() {
    this.group = '';
    this.ts.group.subscribe(name => this.group = name);
    this.ts.job.subscribe(name => this.job = name);
  }
}
