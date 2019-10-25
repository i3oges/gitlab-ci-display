import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { expect } from 'chai';
import { ActivatedRouteMock } from '../testing/activated-route.mock';
import { GitlabService } from '../gitlab/gitlab.service';
import { SharedModule } from '../shared/shared.module';
import { GitlabServiceMock } from '../testing/gitlab.service.mock';
import { LogDisplayComponent } from './log-display.component';

describe('LogDisplayComponent', () => {
  let component: LogDisplayComponent;
  let fixture: ComponentFixture<LogDisplayComponent>;
  let gitlabService: GitlabService;
  let route: ActivatedRouteMock;
  beforeEach(async(() => {
    route = new ActivatedRouteMock();
    TestBed.configureTestingModule({
      declarations: [LogDisplayComponent],
      imports: [SharedModule],
      providers: [
        { provide: ActivatedRoute, useValue: route },
        { provide: GitlabService, useClass: GitlabServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    route.testParams = {
      projectId: '1',
      jobId: '1'
    };
    fixture = TestBed.createComponent(LogDisplayComponent);
    gitlabService = TestBed.get(GitlabService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
    expect(component.projectId).to.equal(1, 'projectId should be set from url params');
    expect(component.jobId).to.equal(1, 'jobId should be set from url params');
  });

  it('should get some info about the job', () => {
    const job = fixture.debugElement.query(By.css('.job-details')).nativeElement.textContent.trim();
    expect(job).to.equal('Test the CI integration.Administrator');
  });

  it('should get traceFile', () => {
    const traceFile = fixture.debugElement.query(By.css('.log-card')).nativeElement.textContent.trim();
    expect(traceFile).to.equal('here is some text');
  });
});
