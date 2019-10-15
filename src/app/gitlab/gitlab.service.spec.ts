import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { GitlabMocks } from './gitlab.mocks';
import { GitlabService } from './gitlab.service';
import { expect } from 'chai';

describe('GitlabService', () => {
  let service: GitlabService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitlabService
      ]
    });
  });

  beforeEach(
    inject([GitlabService, HttpTestingController], (svc, mock) => {
      service = svc;
      httpMock = mock;
      service.baseUrl = 'gitlab.com';
      service.tokenHeader = { headers: { 'PRIVATE-TOKEN': '12345' } };
    })
  );

  it('should retrieve groups when getGroups is called', () => {
    service.getGroups().subscribe(([group]) => {
      expect(group).to.equal(GitlabMocks.groups[0]);
    });
    const req = httpMock.expectOne(`${service.baseUrl}/groups`);
    req.flush(GitlabMocks.groups);
    httpMock.verify();
  });

  it('should retrieve projects when getGroupProjects is called', () => {
    service.getGroupProjects(12).subscribe(projects => {
      expect(projects).to.equal(GitlabMocks.groupProjects);
    });
    const req = httpMock.expectOne(`${service.baseUrl}/groups/12/projects`);
    req.flush(GitlabMocks.groupProjects);
    httpMock.verify();
  });

  it('should retrieve pipelines when getPipelines is called', () => {
    service.getPipelines(12).subscribe(pipelines => {
      expect(pipelines).to.equal(GitlabMocks.pipelines);
    });
    const req = httpMock.expectOne(`${service.baseUrl}/projects/12/pipelines`);
    req.flush(GitlabMocks.pipelines);
    httpMock.verify();
  });

  it('should retrieve jobs when getJobs is called', () => {
    service.getJobs(123, 321).subscribe(jobs => {
      expect(jobs).to.equal(GitlabMocks.jobs);
    });
    const req = httpMock.expectOne(`${service.baseUrl}/projects/123/pipelines/321/jobs`);
    req.flush(GitlabMocks.jobs);
    httpMock.verify();
  });

  it('should retrieve traceFile when getTraceFile is called', () => {
    service.getTraceFile(1, 4).subscribe(traceFile => {
      expect(traceFile).to.equal(GitlabMocks.traceFile);
    });
    const req = httpMock.expectOne(`${service.baseUrl}/projects/1/jobs/4/trace`);
    req.flush(GitlabMocks.traceFile);
    httpMock.verify();
  });

  it('should combine data from projects, pipelines and jobs when getPipelineStatuses is called', () => {
    service.getPipelineStatuses(1).subscribe(jobbies => {
      expect(jobbies.stage[0]).to.equal(GitlabMocks.pipelineStatus[0].stage[0]);
    });
    const projects = httpMock.expectOne(`${service.baseUrl}/groups/1/projects`);
    projects.flush(GitlabMocks.groupProjects);
    const pipelines = httpMock.expectOne(`${service.baseUrl}/projects/9/pipelines`);
    pipelines.flush(GitlabMocks.pipelines);
    const jobs = httpMock.expectOne(`${service.baseUrl}/projects/9/pipelines/47/jobs`);
    jobs.flush(GitlabMocks.jobs);
    httpMock.verify();
  });
});
