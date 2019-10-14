import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineDisplayComponent } from './pipeline-display.component';
import { SharedModule } from '../shared/shared.module';
import { GitlabService } from '../gitlab.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GitlabServiceMock } from '../gitlab.service.mock';
import { GitlabMocks } from '../gitlab.mocks';

describe('PipelineDisplayComponent', () => {
  let component: PipelineDisplayComponent;
  let fixture: ComponentFixture<PipelineDisplayComponent>;
  let service: GitlabService;
  const activatedRouteMock = {
    snapshot: {
      url: ["group", "123"]
    }
  }
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
    expect(component).toBeTruthy();
  });

  it('should populate with pipeline job data', () => {
    expect(component.pipelines[0][0]).toEqual(GitlabMocks.pipelineStatus[0]);
  })
});
