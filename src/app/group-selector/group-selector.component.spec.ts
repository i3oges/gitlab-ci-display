import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSelectorComponent } from './group-selector.component';
import { SharedModule } from '../shared/shared.module';
import { GitlabService } from '../gitlab.service';
import { GitlabServiceMock } from '../gitlab.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { GitlabMocks } from '../gitlab.mocks';

describe('GroupSelectorComponent', () => {
  let component: GroupSelectorComponent;
  let fixture: ComponentFixture<GroupSelectorComponent>;
  let gitlabService: GitlabService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupSelectorComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        { provide: GitlabService, useClass: GitlabServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSelectorComponent);
    gitlabService = TestBed.get(GitlabService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate with groups data', () => {
    component.groups.subscribe(groups => {
      expect(groups).toEqual(GitlabMocks.groups);
    })
  })
});
