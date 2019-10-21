import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { GitlabService } from '../gitlab/gitlab.service';

@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.scss']
})
export class LogDisplayComponent implements OnInit {
  projectId = +this.route.snapshot.url[3];
  jobId = +this.route.snapshot.url[5];
  job = this.gs.getJobDetails(this.projectId, this.jobId);
  traceFile = this.gs.getTraceFile(this.projectId, this.jobId);
  constructor(private route: ActivatedRoute, private gs: GitlabService) { }

  ngOnInit() {
  }
}
