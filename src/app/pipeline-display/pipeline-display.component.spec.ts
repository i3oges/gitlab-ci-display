import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { GitlabMocks } from '../gitlab.mocks';
import { GitlabService } from '../gitlab.service';
import { GitlabServiceMock } from '../gitlab.service.mock';
import { SharedModule } from '../shared/shared.module';
import { PipelineDisplayComponent } from './pipeline-display.component';
import { expect } from 'chai';

describe('PipelineDisplayComponent', () => {
  let component: PipelineDisplayComponent;
  let fixture: ComponentFixture<PipelineDisplayComponent>;
  let service: GitlabService;
  const activatedRouteMock = {
    snapshot: {
      url: ['group', '123']
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PipelineDisplayComponent],
      imports: [SharedModule],
      providers: [
        { provide: GitlabService, useClass: GitlabServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
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
    expect(component.pipelines[0][0]).to.equal(GitlabMocks.pipelineStatus[0]);
  });
});
