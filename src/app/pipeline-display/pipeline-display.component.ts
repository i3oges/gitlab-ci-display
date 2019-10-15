import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitlabService } from '../gitlab/gitlab.service';
import { PipelineStatus } from '../gitlab/gitlab';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'app-pipeline-display',
  templateUrl: './pipeline-display.component.html',
  styleUrls: ['./pipeline-display.component.scss']
})
export class PipelineDisplayComponent implements OnInit {
  pipelines: PipelineStatus[] = [];
  constructor(private gs: GitlabService, private route: ActivatedRoute, private ts: ToolbarService) { }

  ngOnInit() {
    this.gs.getPipelineStatuses(+this.route.snapshot.url[1])
      .subscribe(project => {
        this.pipelines.push(project);
        this.ts.updateGroup(project.group_name);
      });
  }

}
