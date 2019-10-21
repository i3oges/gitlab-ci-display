import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDisplayComponent } from './log-display.component';
import { ActivatedRoute } from '@angular/router';
import { expect } from 'chai';
import { SharedModule } from '../shared/shared.module';
import { GitlabServiceMock } from '../gitlab/gitlab.service.mock';
import { GitlabService } from '../gitlab/gitlab.service';
import { By } from '@angular/platform-browser';
import { ToolbarService } from '../shared/toolbar.service';
import { ToolbarServiceMock } from '../shared/toolbar.service.mock';


describe('LogDisplayComponent', () => {
  let component: LogDisplayComponent;
  let fixture: ComponentFixture<LogDisplayComponent>;
  let gitlabService: GitlabService;
  let tbs: ToolbarService;

  const activatedRouteMock = {
    snapshot: {
      url: ['project', '1', 'job', '4']
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDisplayComponent],
      imports: [SharedModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: GitlabService, useClass: GitlabServiceMock },
        { provide: ToolbarService, useClass: ToolbarServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDisplayComponent);
    gitlabService = TestBed.get(GitlabService);
    tbs = TestBed.get(ToolbarService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
    expect(component.projectId).to.equal(1, 'projectId should be set from url path');
    expect(component.jobId).to.equal(4, 'jobId should be set from url path');
  });

  it('should get some info about the job', () => {
    const jobDetailsCard = fixture.debugElement.query(By.css('.job-details')).nativeElement.textContent.trim();
    expect(jobDetailsCard).to.equal('Test the CI integration.Administrator');
  })

  it('should get traceFile', async () => {
    const traceFile = await component.traceFile.toPromise();
    const job = await tbs.job.toPromise();
    const card = fixture.debugElement.query(By.css('.log-card')).nativeElement.textContent.trim();
    expect(traceFile).to.equal('here is some text');
    expect(card).to.equal('here is some text');
    expect(job).to.equal('test job'); // returned by ...mock.ts
  });
});
