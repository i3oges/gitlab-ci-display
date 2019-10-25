import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { ActivatedRouteMock } from '../testing/activated-route.mock';
import { GitlabService } from '../gitlab/gitlab.service';
import { SharedModule } from '../shared/shared.module';
import { GitlabServiceMock } from '../testing/gitlab.service.mock';
import { PipelineDisplayComponent } from './pipeline-display.component';

describe('PipelineDisplayComponent', () => {
  let component: PipelineDisplayComponent;
  let fixture: ComponentFixture<PipelineDisplayComponent>;
  let service: GitlabService;
  let route: ActivatedRouteMock;
  let jobs: any;
  beforeEach(async(() => {
    route = new ActivatedRouteMock();
    TestBed.configureTestingModule({
      declarations: [PipelineDisplayComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        { provide: GitlabService, useClass: GitlabServiceMock },
        { provide: ActivatedRoute, useValue: route }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    route.testParams = {
      groupId: '1'
    };
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

  describe('when no group id is supplied', () => {
    beforeEach(() => {
      route.testParams = {
        projectId: '1'
      };
      fixture = TestBed.createComponent(PipelineDisplayComponent);
      fixture.detectChanges();
    });

    it('should use project id when no group id is available', () => {
      expect(component).to.be.ok;
    });

    it('should populate correctly', () => {
      const body = fixture.nativeElement.textContent;
      const [link1, link2] = fixture.debugElement.queryAll(By.css('a'));

      expect(body).to.contain('Html5 Boilerplate test');
      expect(body).to.contain('rspec:other');
      expect(body).to.contain('teaspoon');

      expect(link1.attributes['ng-reflect-router-link']).to.equal('/project,9,job,6');
      expect(link2.attributes['ng-reflect-router-link']).to.equal('/project,9,job,7');
    });
  });
});
