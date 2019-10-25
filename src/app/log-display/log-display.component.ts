import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { GitlabService } from '../gitlab/gitlab.service';

@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.scss']
})
export class LogDisplayComponent {
  projectId: number;
  jobId: number;
  traceFile: Observable<string>;
  job = this.route.params.pipe(
    switchMap(params => {
      this.projectId = +params.projectId;
      this.jobId = +params.jobId;
      return this.gs.getJobDetails(this.projectId, this.jobId);
    }),
    tap(() => this.traceFile = this.gs.getTraceFile(this.projectId, this.jobId))
  );
  constructor(private route: ActivatedRoute, private gs: GitlabService) { }
}
