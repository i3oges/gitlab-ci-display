import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { expect } from 'chai';
import { GitlabService } from '../gitlab/gitlab.service';
import { GitlabServiceMock } from '../gitlab/gitlab.service.mock';
import { SharedModule } from '../shared/shared.module';
import { LogDisplayComponent } from './log-display.component';
import { GitlabMocks } from '../gitlab/gitlab.mocks';



describe('LogDisplayComponent', () => {
  let component: LogDisplayComponent;
  let fixture: ComponentFixture<LogDisplayComponent>;
  let gitlabService: GitlabService;

  const activatedRouteMock = {
    snapshot: {
      url: ['group', '1', 'project', '1', 'job', '4']
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDisplayComponent],
      imports: [SharedModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: GitlabService, useClass: GitlabServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDisplayComponent);
    gitlabService = TestBed.get(GitlabService);
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
    const job = await component.job.toPromise();
    const card = fixture.debugElement.query(By.css('.log-card')).nativeElement.textContent.trim();
    expect(traceFile).to.equal('here is some text');
    expect(card).to.equal('here is some text');
    expect(job).to.equal(GitlabMocks.job); // returned by ...mock.ts
  });
});
