import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { GitlabService } from '../gitlab/gitlab.service';
import { ToolbarService } from '../shared/toolbar.service';

@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.scss']
})
export class LogDisplayComponent implements OnInit {
  projectId = +this.route.snapshot.url[1];
  jobId = +this.route.snapshot.url[3];
  job = this.gs.getJobDetails(this.projectId, this.jobId).pipe(
    tap(({ name }) => {
      this.tb.updateJob(name)
    })
  );
  traceFile = this.gs.getTraceFile(this.projectId, this.jobId);
  constructor(private route: ActivatedRoute, private gs: GitlabService, private tb: ToolbarService) { }

  ngOnInit() { }
}
