import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { forkJoin, of, Observable } from 'rxjs';
import { filter, map, mergeMap, pluck, tap } from 'rxjs/operators';
import { GitlabService } from './gitlab/gitlab.service';
import { Group, Project, Job } from './gitlab/gitlab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private gs: GitlabService) { }
  breadcrumbs = this.getBreadcrumbs();

  ngOnInit(): void {
  }

  getBreadcrumbs() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      pluck<ActivationEnd, ActivatedRouteSnapshot>('snapshot'),
      mergeMap((snap: ActivatedRouteSnapshot) => {
        const { groupId, projectId, jobId } = snap.params;
        const { url: snapUrl } = snap;
        const obs: Observable<any>[] = [];
        const makeUrl = (elm: Group | Project | Job) => {
          const idIndex = snapUrl.findIndex(u => +u.path === elm.id) + 1;
          const url = snapUrl.slice(0, idIndex).join('/');
          return { ...elm, url };
        };
        if (groupId) {
          obs.push(this.gs.getGroup(+groupId).pipe(
            map(makeUrl)
          ));
        }
        if (projectId && jobId) {
          obs.push(this.gs.getProject(+projectId));
          obs.push(this.gs.getJobDetails(+projectId, +jobId).pipe(
            map(makeUrl)
          ));
        }
        if (obs.length === 0) {
          obs.push(of([]));
        }
        return forkJoin(obs);
      })
    );
  }

}
