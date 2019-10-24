import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MockAppComponent, MockGroupComponent, MockLogComponent, routes } from './app-routing.mock';
import { Router } from '@angular/router';
import { GitlabService } from './gitlab/gitlab.service';
import { GitlabServiceMock } from './gitlab/gitlab.service.mock';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let toolbar: DebugElement;
  let router: Router;
  let location: Location;
  let gitlabService: GitlabService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        SharedModule
      ],
      providers: [
        { provide: GitlabService, useValue: GitlabServiceMock }
      ],
      declarations: [
        AppComponent,
        MockAppComponent,
        MockGroupComponent,
        MockLogComponent
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    gitlabService = TestBed.get(GitlabService);

    fixture = TestBed.createComponent(AppComponent);

    router.initialNavigation();
    toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).to.be.ok;
  });

  it('should render title', () => {
    expect(toolbar).to.be.ok;
    expect(toolbar.nativeElement.textContent).to.equal('Pipeline Viewer');
  });

  it('should navigate to group with an id', fakeAsync(() => {
    // router.navigate(['group', 1]);
    // tick();
    // expect(location.path).to.equal('/group/1');
  }));
});
