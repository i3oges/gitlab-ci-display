import { of } from 'rxjs';
import { GitlabMocks } from './gitlab.mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class GitlabServiceMock {

  public getGroups() {
    return of(GitlabMocks.groups);
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

  public getPipelineStatuses(groupId: number) {
    return of(GitlabMocks.pipelineStatus);
  }
}
