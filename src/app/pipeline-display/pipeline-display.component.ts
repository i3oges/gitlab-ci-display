import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { concatMap, scan, tap, take, map } from 'rxjs/operators';
import { GitlabService } from '../gitlab/gitlab.service';
import { ToolbarService } from '../shared/toolbar.service';
import { PipelineStatus } from '../gitlab/gitlab';

@Component({
  selector: 'app-pipeline-display',
  templateUrl: './pipeline-display.component.html',
  styleUrls: ['./pipeline-display.component.scss']
})
export class PipelineDisplayComponent implements OnInit {
  pipelines = this.gs.getPipelineStatuses(+this.route.snapshot.url[1]).pipe(
    tap(({ group_name }) => {
      this.ts.updateGroup(group_name);
      this.ts.updateJob('');
    }),
    scan<PipelineStatus>((acc, cur) => [...acc, cur], [])
  );
  constructor(private gs: GitlabService, private route: ActivatedRoute, private ts: ToolbarService) { }

  ngOnInit() {
  }

  updateJob = (name: string) => {
    this.ts.updateJob(name);
  }

}
