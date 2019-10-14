import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitlabService } from '../gitlab.service';
import { PipelineStatus } from '../gitlab';

@Component({
  selector: 'app-pipeline-display',
  templateUrl: './pipeline-display.component.html',
  styleUrls: ['./pipeline-display.component.scss']
})
export class PipelineDisplayComponent implements OnInit {
  pipelines: PipelineStatus[] = [];
  constructor(private gs: GitlabService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.gs.getPipelineStatuses(+this.route.snapshot.url[1])
      .subscribe(project => this.pipelines.push(project));
  }

}
