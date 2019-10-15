import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  group: string;
  constructor(private ts: ToolbarService) { }

  ngOnInit() {
    this.group = '';
    this.ts.group.subscribe(name => this.group = name);
  }
}
