import { of } from 'rxjs';
import { GitlabMocks } from './gitlab.mocks';
import { Injectable } from '@angular/core';
import { GitlabService } from '../gitlab/gitlab.service';

@Injectable()
export class GitlabServiceMock {

  getGroups = () => of(GitlabMocks.groups);

  getGroup = (groupId: number) => of(GitlabMocks.group);

  getGroupProjects = (groupId: number) => of(GitlabMocks.groupProjects);

  getProject = (projectId: number) => of(GitlabMocks.project);

  getProjects = () => of(GitlabMocks.projects);

  getPipelines = (projectId: number) => of(GitlabMocks.pipelines);

  getJobs = (projectId: number, pipelineId: number) => of(GitlabMocks.jobs);

  getTraceFile = (projectId: number, jobId: number) => of(GitlabMocks.traceFile);

  getJobDetails = (projectId: number, jobId: number) => of(GitlabMocks.job);

  getPipelineStatuses = (groupId: number) => of(GitlabMocks.pipelineStatus);

  getMembershipPipelineStatus = () => of(GitlabMocks.pipelineStatus.reduce((acc, cur) =>
    [...acc, { ...cur, group_name: undefined, group_id: undefined }], [])
  )
}
