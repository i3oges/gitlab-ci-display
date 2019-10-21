import { Component, OnInit } from '@angular/core';
import { GitlabService } from '../gitlab/gitlab.service';
import { ToolbarService } from '../shared/toolbar.service';

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss']
})
export class GroupSelectorComponent implements OnInit {
  groups = this.gs.getGroups();
  constructor(private gs: GitlabService) { }

  ngOnInit() {
  }

}
