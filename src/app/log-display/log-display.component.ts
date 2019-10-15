import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitlabService } from '../gitlab.service';

@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.scss']
})
export class LogDisplayComponent implements OnInit {
  projectId = this.route.snapshot.url[1];
  jobId = this.route.snapshot.url[3];
  traceFile = this.gs.getTraceFile(+this.projectId, +this.jobId)
  constructor(private route: ActivatedRoute, private gs: GitlabService) { }

  ngOnInit() {
  }

}
