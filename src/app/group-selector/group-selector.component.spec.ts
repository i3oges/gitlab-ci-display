import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSelectorComponent } from './group-selector.component';
import { SharedModule } from '../shared/shared.module';
import { GitlabService } from '../gitlab/gitlab.service';
import { GitlabServiceMock } from '../gitlab/gitlab.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { GitlabMocks } from '../gitlab/gitlab.mocks';
import { expect } from 'chai';
import * as chai from 'chai';
import { ToolbarService } from '../toolbar.service';
import * as spies from 'chai-spies';

chai.use(spies);

describe('GroupSelectorComponent', () => {
  let component: GroupSelectorComponent;
  let fixture: ComponentFixture<GroupSelectorComponent>;
  let gitlabService: GitlabService;
  let toolbarService: ToolbarService;

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
    toolbarService = TestBed.get(ToolbarService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
  });

  it('should populate with groups data', () => {
    component.groups.subscribe(groups => {
      expect(groups).to.equal(GitlabMocks.groups);
    });
  });

  it('should call ToolbarService.updateGroup when updating group', () => {
    let updateGroupSpy = chai.spy.on(toolbarService, 'updateGroup');
    component.updateGroup('bobby');
    expect(updateGroupSpy).to.have.been.called.with('bobby');
  });
});
