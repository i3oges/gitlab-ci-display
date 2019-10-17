import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed, fakeAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { GitlabMocks } from '../gitlab/gitlab.mocks';
import { GitlabService } from '../gitlab/gitlab.service';
import { GitlabServiceMock } from '../gitlab/gitlab.service.mock';
import { SharedModule } from '../shared/shared.module';
import { ToolbarService } from '../shared/toolbar.service';
import { ToolbarServiceMock } from '../shared/toolbar.service.mock';
import { PipelineDisplayComponent } from './pipeline-display.component';

describe('PipelineDisplayComponent', () => {
  let component: PipelineDisplayComponent;
  let fixture: ComponentFixture<PipelineDisplayComponent>;
  let service: GitlabService;
  let tbs: ToolbarService;
  let jobs: any;
  const activatedRouteMock = {
    snapshot: {
      url: ['group', '123']
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipelineDisplayComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        { provide: GitlabService, useClass: GitlabServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ToolbarService, useClass: ToolbarServiceMock },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineDisplayComponent);
    service = TestBed.get(GitlabService);
    tbs = TestBed.get(ToolbarService);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
  });

  it('should call service when updateJob runs', async () => {
    component.updateJob('');
    const job = await tbs.job.toPromise();
    expect(job).to.equal('test job'); // returned by ...mock.ts
  });

  it('should populate with pipeline job data', () => {
    jobs = fixture.nativeElement.textContent;
    expect(jobs).to.contain('rspec:other');
    expect(jobs).to.contain('teaspoon');
  });
});
