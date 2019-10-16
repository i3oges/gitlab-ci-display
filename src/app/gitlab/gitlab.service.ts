import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GroupProject, Group, Job, Pipeline } from './gitlab';
import { switchMap, mergeMap, take, map, tap } from 'rxjs/operators';
import { from } from 'rxjs';

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

  getGroupProjects(groupId: number) {
    return this.http.get<GroupProject[]>(`${this.baseUrl}/groups/${groupId}/projects`, this.tokenHeader);
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

  getPipelineStatuses(groupId: number) {
    return this.getGroupProjects(groupId).pipe(
      switchMap(projects => from(projects)),
      mergeMap(project => this.getPipelines(project.id).pipe(
        switchMap(pipelines => from(pipelines)),
        take(1),
        map(pipeline => ({
          ...pipeline,
          project_id: project.id,
          project_name: project.name,
          group_name: project.namespace.name
        }))
      )),
      mergeMap(pipeline => this.getJobs(pipeline.project_id, pipeline.id).pipe(
        map(jobs => ({
          ...pipeline, jobs, stage: []
        }))
      )),
      map(project => {
        project.jobs.forEach(job => {
          if (!project.stage.find(stage => job.stage === stage.name)) {
            project.stage.push({ name: job.stage, jobs: [job] });
          } else {
            project.stage.find(stage => job.stage === stage.name).jobs.push(job);
          }
        });
        return project;
      }),
      tap(project => delete project.jobs)
    );
  }
}
