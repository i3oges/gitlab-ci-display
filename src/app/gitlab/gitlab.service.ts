import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { delay, map, mergeMap, repeat, switchMap, take, tap, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Group, GroupProject, Job, Pipeline, Project } from './gitlab';

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
          group_name: project.namespace.name,
          group_id: project.namespace.id
        })),
        // delay(5000),
        // repeat()
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
