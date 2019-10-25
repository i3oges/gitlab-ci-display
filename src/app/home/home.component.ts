import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from, iif, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GitlabService } from '../gitlab/gitlab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  groups = this.gs.getGroups().pipe(
    mergeMap(groups => iif(() => groups.length === 0,
      from(this.route.navigateByUrl('/projects')),
      of(groups)
    ))
  );
  constructor(private gs: GitlabService, private route: Router) { }
}
