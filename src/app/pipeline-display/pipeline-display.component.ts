import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { GitlabService } from '../gitlab/gitlab.service';

@Component({
  selector: 'app-pipeline-display',
  templateUrl: './pipeline-display.component.html',
  styleUrls: ['./pipeline-display.component.scss']
})
export class PipelineDisplayComponent {
  groupId: number;
  pipelines = this.route.params.pipe(
    mergeMap(params => {
      if (params.groupId) {
        this.groupId = params.groupId;
        return this.gs.getPipelineStatuses(+params.groupId);
      } else {
        return this.gs.getMembershipPipelineStatus();
      }
    })
  );
  constructor(private gs: GitlabService, private route: ActivatedRoute) { }
}
