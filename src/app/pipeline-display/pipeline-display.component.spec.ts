import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { GitlabService } from '../gitlab/gitlab.service';
import { GitlabServiceMock } from '../gitlab/gitlab.service.mock';
import { SharedModule } from '../shared/shared.module';
import { PipelineDisplayComponent } from './pipeline-display.component';
import { GitlabMocks } from '../gitlab/gitlab.mocks';
import { of } from 'rxjs';


describe('PipelineDisplayComponent', () => {
  let component: PipelineDisplayComponent;
  let fixture: ComponentFixture<PipelineDisplayComponent>;
  let service: GitlabService;
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
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineDisplayComponent);
    service = TestBed.get(GitlabService);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
  });

  it('should populate with pipeline job data', () => {
    jobs = fixture.nativeElement.textContent;
    expect(jobs).to.contain('rspec:other');
    expect(jobs).to.contain('teaspoon');
  });

  it('should update jobs when status changes', async () => {
    service.getPipelineStatuses = jest.fn().mockImplementationOnce(() => of(GitlabMocks.pipelineStatus))
    fixture = TestBed.createComponent(PipelineDisplayComponent);
    component = fixture.componentInstance;

    const [firstPipelineCheck] = await component.pipelines.toPromise();
    expect(firstPipelineCheck.stage[0].jobs).to.have.length(2);
    expect(firstPipelineCheck.stage[0].jobs[1].status).to.equal('running');
    expect(firstPipelineCheck).to.equal(GitlabMocks.pipelineStatus);

    service.getPipelineStatuses = jest.fn().mockImplementationOnce(() => of(GitlabMocks.pipelineStatusDifferentStatuses));
    fixture = TestBed.createComponent(PipelineDisplayComponent);
    component = fixture.componentInstance;

    const [secondPipelineCheck] = await component.pipelines.toPromise();
    expect(secondPipelineCheck.stage[0].jobs).to.have.length(2);
    expect(secondPipelineCheck.stage[0].jobs[1].status).to.equal('passed');
    expect(secondPipelineCheck).to.equal(GitlabMocks.pipelineStatusDifferentStatuses);
  })
});
