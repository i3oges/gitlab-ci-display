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
    inject([GitlabService, HttpTestingController], (svc: GitlabService, mock: HttpTestingController) => {
      service = svc;
      httpMock = mock;
      service.baseUrl = 'gitlab.com';
      service.tokenHeader = { headers: { 'PRIVATE-TOKEN': '12345' } };
    })
  );

  it('should retrieve groups when getGroups is called', done => {
    service.getGroups().subscribe(([group]) => {
      expect(group).to.equal(GitlabMocks.groups[0]);
      done();
    });
    const req = httpMock.expectOne(`${service.baseUrl}/groups`);
    req.flush(GitlabMocks.groups);
    httpMock.verify();
  });

  it('should retrieve groups with a search term', done => {
    service.getGroups('Jimbo').subscribe(([group]) => {
      expect(group).to.equal(GitlabMocks.groups[0]);
      done();
    });
    const req = httpMock.expectOne(`${service.baseUrl}/groups?search=Jimbo`);
    req.flush(GitlabMocks.groups);
    httpMock.verify();
  });

  it('should get a single group when getGroup is called', done => {
    service.getGroup(1).subscribe(group => {
      expect(group).to.equal(GitlabMocks.group);
      done();
    });
    const req = httpMock.expectOne(`${service.baseUrl}/groups/1`);
    req.flush(GitlabMocks.group);
    httpMock.verify();
  });

  it('should retrieve projects when getGroupProjects is called', done => {
    service.getGroupProjects(12).subscribe(projects => {
      expect(projects).to.equal(GitlabMocks.groupProjects);
      done();
    });
    const req = httpMock.expectOne(`${service.baseUrl}/groups/12/projects`);
    req.flush(GitlabMocks.groupProjects);
    httpMock.verify();
  });

  it('should retrieve single project when getProject is called', done => {
    service.getProject(3).subscribe(project => {
      expect(project).to.equal(GitlabMocks.project);
      done();
    });
    const req = httpMock.expectOne(`${service.baseUrl}/projects/3`);
    req.flush(GitlabMocks.project);
    httpMock.verify();
  });

  it('should retrieve pipelines when getPipelines is called', done => {
    service.getPipelines(12).subscribe(pipelines => {
      expect(pipelines).to.equal(GitlabMocks.pipelines);
      done();
    });
    const req = httpMock.expectOne(`${service.baseUrl}/projects/12/pipelines`);
    req.flush(GitlabMocks.pipelines);
    httpMock.verify();
  });

  it('should retrieve jobs when getJobs is called', done => {
    service.getJobs(123, 321).subscribe(jobs => {
      expect(jobs).to.equal(GitlabMocks.jobs);
      done();
    });
    const req = httpMock.expectOne(`${service.baseUrl}/projects/123/pipelines/321/jobs`);
    req.flush(GitlabMocks.jobs);
    httpMock.verify();
  });

  it('should retrieve traceFile when getTraceFile is called', done => {
    service.getTraceFile(1, 4).subscribe(traceFile => {
      expect(traceFile).to.equal(GitlabMocks.traceFile);
      done();
    });
    const req = httpMock.expectOne(`${service.baseUrl}/projects/1/jobs/4/trace`);
    req.flush(GitlabMocks.traceFile);
    httpMock.verify();
  });

  it('should get job details when getJobDetails is called', done => {
    service.getJobDetails(1, 10).subscribe(job => {
      expect(job).to.equal(GitlabMocks.job);
      done();
    });

    const req = httpMock.expectOne(`${service.baseUrl}/projects/1/jobs/10`);
    req.flush(GitlabMocks.job);
    httpMock.verify();
  });

  it('should combine data from projects, pipelines and jobs when getPipelineStatuses is called', done => {
    service.getPipelineStatuses(1).subscribe(jobbies => {
      expect(jobbies.stage).to.have.length(GitlabMocks.pipelineStatus.stage.length);
      expect(jobbies.stage[0].name).to.equal(GitlabMocks.pipelineStatus.stage[0].name);
      done();
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
