import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { of } from 'rxjs';
import { GitlabService } from '../gitlab/gitlab.service';
import { GitlabServiceMock } from '../testing/gitlab.service.mock';
import { GroupSelectorComponent } from '../group-selector/group-selector.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { Location } from '@angular/common';

@Component({
  template: 'pipeline display'
})
class MockPipelineDisplayComponent {
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: GitlabService;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, GroupSelectorComponent, MockPipelineDisplayComponent],
      providers: [
        { provide: GitlabService, useClass: GitlabServiceMock }
      ],
      imports: [RouterTestingModule.withRoutes([
        { path: '', component: HomeComponent },
        { path: 'projects', component: MockPipelineDisplayComponent }
      ]), SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
  });

  it('should get groups on initilization', () => {
    const groupSelector = fixture.debugElement.query(By.css('app-group-selector')).nativeElement.textContent.trim();

    expect(groupSelector).to.equal('Foobar Group');
  });

  describe('when the user is in no groups', () => {
    beforeEach(() => {
      service = TestBed.get(GitlabService);
      jest.spyOn(service, 'getGroups').mockImplementationOnce(() => of([]));
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should redirect to /projects', () => {
      expect(location.path()).to.equal('/projects');
    });
  });
});
