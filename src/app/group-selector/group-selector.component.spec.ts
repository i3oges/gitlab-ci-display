import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as chai from 'chai';
import { expect } from 'chai';
import * as spies from 'chai-spies';
import { GitlabMocks } from '../gitlab/gitlab.mocks';
import { GitlabService } from '../gitlab/gitlab.service';
import { GitlabServiceMock } from '../gitlab/gitlab.service.mock';
import { SharedModule } from '../shared/shared.module';
import { GroupSelectorComponent } from './group-selector.component';


chai.use(spies);

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
    expect(component).to.be.ok;
  });

  it('should populate with groups data', async () => {
    const groups = await component.groups.toPromise();
    expect(groups).to.equal(GitlabMocks.groups);
    expect(fixture.nativeElement.textContent).to.include('Foobar Group');
  });
});
