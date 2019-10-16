import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as chai from 'chai';
import { expect } from 'chai';
import * as spies from 'chai-spies';
import { GitlabMocks } from '../gitlab/gitlab.mocks';
import { GitlabService } from '../gitlab/gitlab.service';
import { GitlabServiceMock } from '../gitlab/gitlab.service.mock';
import { SharedModule } from '../shared/shared.module';
import { ToolbarService } from '../shared/toolbar.service';
import { GroupSelectorComponent } from './group-selector.component';


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

  it('should populate with groups data', async () => {
    const groups = await component.groups.toPromise();
    expect(groups).to.equal(GitlabMocks.groups);
    expect(fixture.nativeElement.textContent).to.include('Foobar Group');
  });

  it('should call ToolbarService.updateGroup when updating group', () => {
    const updateGroupSpy = chai.spy.on(toolbarService, 'updateGroup');
    component.updateGroup('bobby');
    expect(updateGroupSpy).to.have.been.called.with('bobby');
  });
});
