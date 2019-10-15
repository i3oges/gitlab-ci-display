import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDisplayComponent } from './log-display.component';
import { ActivatedRoute } from '@angular/router';
import { expect } from 'chai';
import { SharedModule } from '../shared/shared.module';
import { GitlabServiceMock } from '../gitlab.service.mock';
import { GitlabService } from '../gitlab.service';


describe('LogDisplayComponent', () => {
  let component: LogDisplayComponent;
  let fixture: ComponentFixture<LogDisplayComponent>;
  let gitlabService: GitlabService;

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
    expect(component.projectId).to.equal('1');
    expect(component.jobId).to.equal('4');
  });

  it('should get traceFile', () => {
    component.traceFile.subscribe(traceFile => {
      expect(traceFile).to.equal("here is some text");
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('mat-card')).to.be.ok;
      expect(compiled.querySelector('mat-card').innerText).to.equal("here is some text");
    })
  })
});
