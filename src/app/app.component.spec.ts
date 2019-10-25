import { Location } from '@angular/common';
import { DebugElement, NgZone } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { MockAppComponent, MockGroupComponent, MockLogComponent, routes } from './app-routing.mock';
import { AppComponent } from './app.component';
import { GitlabService } from './gitlab/gitlab.service';
import { GitlabServiceMock } from './gitlab/gitlab.service.mock';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let toolbar: DebugElement;
  let router: Router;
  let location: Location;
  let gitlabService: GitlabService;
  let zone: NgZone;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        SharedModule
      ],
      providers: [
        { provide: GitlabService, useClass: GitlabServiceMock }
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
    zone = new NgZone({ enableLongStackTrace: false });
    fixture = TestBed.createComponent(AppComponent);

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
    zone.run(() => router.navigate(['group', 1]));
    tick();
    expect(location.path()).to.equal('/group/1');
    fixture.detectChanges();
    const elm = fixture.debugElement;
    expect(elm.query(By.css('.breadcrumb')).nativeElement.textContent.trim()).to.equal('/ Foobar Group');
  }));

  it('should not be able to navigate with just group and project', fakeAsync(() => {
    zone.run(() => router.navigate(['group', 1, 'project', 3])).catch(err => {
      expect(err).to.be.ok;
      expect(location.path()).to.equal('/');
    });
  }))

  it('should navigate to job with group, project and job id', fakeAsync(() => {
    const completeWithBreadcrumbs = 'Pipeline Viewer / Foobar Group / Diaspora Project Site / rubocop';
    zone.run(() => router.navigate(['group', 1, 'project', 3, 'job', 8]));
    tick()
    expect(location.path()).to.equal('/group/1/project/3/job/8');
    fixture.detectChanges();

    const [
      { nativeElement: { textContent: groupBreadcrumb } },
      { nativeElement: { textContent: jobBreadcrumb } }
    ] = fixture.debugElement.queryAll(By.css('.breadcrumb'));

    // replace &nbsp with ' ' with .replace method
    const noBreadcrumbElm = fixture.debugElement.query(By.css('.breadcrumb-no-link')).nativeElement.textContent.replace(/\u00a0/g, ' ');
    const toolbarText = fixture.debugElement.query(By.css('mat-toolbar')).nativeElement.textContent.replace(/\u00a0/g, ' ');

    expect(groupBreadcrumb.replace(/\u00a0/g, ' ')).to.equal(' / Foobar Group');
    expect(jobBreadcrumb.replace(/\u00a0/g, ' ')).to.equal(' / rubocop');
    expect(noBreadcrumbElm).to.equal(' / Diaspora Project Site');
    expect(toolbarText).to.equal(completeWithBreadcrumbs);
  }));

});
