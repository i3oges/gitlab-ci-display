import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { GitlabService } from '../gitlab/gitlab.service';
import { GitlabServiceMock } from '../gitlab/gitlab.service.mock';
import { SharedModule } from '../shared/shared.module';
import { PipelineDisplayComponent } from './pipeline-display.component';

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
});
