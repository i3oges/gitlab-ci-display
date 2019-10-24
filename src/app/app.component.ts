import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { forkJoin, of, Observable } from 'rxjs';
import { filter, map, mergeMap, pluck, tap } from 'rxjs/operators';
import { GitlabService } from './gitlab/gitlab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  breadcrumbs = this.getBreadcrumbs();
  constructor(private router: Router, private gs: GitlabService) { }

  ngOnInit(): void {
  }

  mapNameAndId = map(({ name, id }) => ({
    name, id
  }));

  getBreadcrumbs() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      pluck<ActivationEnd, ActivatedRouteSnapshot>('snapshot'),
      mergeMap(snap => {
        const { groupId, projectId, jobId } = snap.params;
        const { url: snapUrl } = snap;
        const obs: Observable<any>[] = [];
        if (groupId) {
          obs.push(this.gs.getGroup(+groupId).pipe(
            map(elm => {
              const url = snapUrl.slice(0, snapUrl.findIndex(u => +u.path === elm.id) + 1).join('/')
              return { ...elm, url }
            })
          ));
        }
        if (projectId) {
          obs.push(this.gs.getProject(+projectId));
          if (jobId) {
            obs.push(this.gs.getJobDetails(+projectId, +jobId).pipe(
              map(elm => {
                const url = snapUrl.slice(0, snapUrl.findIndex(u => +u.path === elm.id) + 1).join('/')
                return { ...elm, url }
              })
            ));
          }
        }
        if (obs.length === 0) {
          obs.push(of([]))
        }
        return forkJoin(obs)
      })
    )
  }

}
