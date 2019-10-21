import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, scan, tap } from 'rxjs/operators';
import { PipelineStatus } from '../gitlab/gitlab';
import { GitlabService } from '../gitlab/gitlab.service';
import { ToolbarService } from '../shared/toolbar.service';

@Component({
  selector: 'app-pipeline-display',
  templateUrl: './pipeline-display.component.html',
  styleUrls: ['./pipeline-display.component.scss']
})
export class PipelineDisplayComponent implements OnInit {
  groupId = +this.route.snapshot.url[1];
  pipelines = this.gs.getPipelineStatuses(this.groupId).pipe(
    scan<PipelineStatus>((acc, cur) => {
      const index = acc.findIndex(p => p.project_id === cur.project_id);
      if (index !== -1) {
        if (acc[index].status !== cur.status) {
          acc[index] = cur;
        }
      } else {
        acc.push(cur);
      }
      return acc;
    }, []),
    map(ps => ps.sort()),
  );
  constructor(private gs: GitlabService, private route: ActivatedRoute, private ts: ToolbarService) { }

  ngOnInit() {

  }

}
