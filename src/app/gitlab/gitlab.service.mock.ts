import { of } from 'rxjs';
import { GitlabMocks } from './gitlab.mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class GitlabServiceMock {

  public getGroups() {
    return of(GitlabMocks.groups);
  }

  public getGroup(groupId: number) {
    return of(GitlabMocks.group);
  }

  public getGroupProjects(groupId: number) {
    return of(GitlabMocks.groupProjects);
  }

  public getPipelines(projectId: number) {
    return of(GitlabMocks.pipelines);
  }

  public getJobs(projectId: number, pipelineId: number) {
    return of(GitlabMocks.jobs);
  }

  public getTraceFile(projectId: number, jobId: number) {
    return of(GitlabMocks.traceFile);
  }

  public getJobDetails(projectId: number, jobId: number) {
    return of(GitlabMocks.job);
  }

  public getPipelineStatuses(groupId: number) {
    return of(GitlabMocks.pipelineStatus);
  }
}
