import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ToolbarService } from './shared/toolbar.service';

describe('AppComponent', () => {
  let toolbarService: ToolbarService;
  let fixture: ComponentFixture<AppComponent>;
  let toolbar: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    toolbarService = TestBed.get(ToolbarService);
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

  it('should get group breadcrumb from toolbar service', () => {
    expect(toolbar.nativeElement.textContent).to.equal('Pipeline Viewer');

    toolbarService.updateGroup('test group');

    fixture.detectChanges();
    expect(toolbar.nativeElement.textContent).to.contain('TEST GROUP');
  });
  it('should get job breadcrumb from toolbar service', () => {
    toolbarService.updateJob('test job');

    fixture.detectChanges();
    expect(toolbar.nativeElement.textContent).to.contain('test job');
  });
});
