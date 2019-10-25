import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, scan, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Group, GroupProject, Job, Pipeline, PipelineStatus, Project, SimpleProject } from './gitlab';

@Injectable({
  providedIn: 'root'
})
export class GitlabService {
  tokenHeader = {
    headers: {
      'PRIVATE-TOKEN': environment.gitlabPrivateToken
    }
  };
  baseUrl = `https://${environment.gitlabUrl}/api/v4`;

  constructor(private http: HttpClient) { }

  getGroups(search?: string) {
    return this.http.get<Group[]>(`${this.baseUrl}/groups${search ? `?search=${search}` : ''}`, this.tokenHeader);
  }

  getGroup(groupId: number) {
    return this.http.get<Group>(`${this.baseUrl}/groups/${groupId}`, this.tokenHeader);
  }

  getGroupProjects(groupId: number) {
    return this.http.get<GroupProject[]>(`${this.baseUrl}/groups/${groupId}/projects`, this.tokenHeader);
  }

  getProject(projectId: number) {
    return this.http.get<Project>(`${this.baseUrl}/projects/${projectId}`, this.tokenHeader);
  }

  getProjects() {
    return this.http.get<SimpleProject[]>(`${this.baseUrl}/projects?membership=true&simple=true`, this.tokenHeader);
  }

  getPipelines(projectId: number) {
    return this.http.get<Pipeline[]>(`${this.baseUrl}/projects/${projectId}/pipelines`, this.tokenHeader);
  }

  getJobs(projectId: number, pipelineId: number) {
    return this.http.get<Job[]>(`${this.baseUrl}/projects/${projectId}/pipelines/${pipelineId}/jobs`, this.tokenHeader);
  }

  getJobDetails(projectId: number, jobId: number) {
    return this.http.get<Job>(`${this.baseUrl}/projects/${projectId}/jobs/${jobId}`, this.tokenHeader);
  }

  getTraceFile(projectId: number, jobId: number) {
    return this.http.get(`${this.baseUrl}/projects/${projectId}/jobs/${jobId}/trace`, { ...this.tokenHeader, responseType: 'text' });
  }

  getMembershipPipelineStatus() {
    return this.getProjects().pipe(
      switchMap(projects => this.mapProjects(projects))
    );
  }

  getPipelineStatuses(groupId: number): Observable<PipelineStatus[]> {
    return this.getGroupProjects(groupId).pipe(
      switchMap(projects => this.mapProjects(projects))
    );
  }

  private mapProjects(projectArray: SimpleProject[] | GroupProject[]) {
    return of(projectArray).pipe(
      switchMap(projects => from(projects)),
      // get the latest pipeline by project id, map to new object
      mergeMap(project => this.getPipelines(project.id).pipe(
        switchMap(pipelines => from(pipelines)),
        take(1),
        map(pipeline => {
          let groupName;
          let groupId;
          // users without groups may not have a namespace
          if ('namespace' in project) {
            groupName = project.namespace.name;
            groupId = project.namespace.id;
          }
          return {
            ...pipeline,
            project_id: project.id,
            project_name: project.name,
            group_name: groupName,
            group_id: groupId
          };
        })
      )),
      // get jobs in pipeline, collect to new object
      mergeMap(pipeline => this.getJobs(pipeline.project_id, pipeline.id).pipe(
        map(jobs => ({
          ...pipeline, jobs, stage: []
        }))
      )),
      // all data is collected at this point
      map(this.transformProject),
      // scan to an array, updating indexes when status changes
      scan((acc, cur) => [...acc, cur], []),
      map(ps => ps.sort())
    );
  }

  // take an intermeary project object with jobs at the root level
  // move jobs into their appropriate stage category
  private transformProject = project => {
    project.jobs.forEach(job => {
      if (!project.stage.find(stage => job.stage === stage.name)) {
        project.stage.push({ name: job.stage, jobs: [job] });
      } else {
        project.stage.find(stage => job.stage === stage.name).jobs.push(job);
      }
    });
    delete project.jobs;
    return project;
  }

  // TODO when polling is implemented
  // private mergeJobs = (acc, cur) => {
  //   const index = acc.findIndex(p => p.project_id === cur.project_id);
  //   if (index !== -1) {
  //     if (acc[index].status !== cur.status) {
  //       acc[index] = cur;
  //     }
  //   } else {
  //     acc.push(cur);
  //   }
  //   return acc;
  // }
}
