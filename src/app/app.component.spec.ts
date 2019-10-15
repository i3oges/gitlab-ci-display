import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { expect } from 'chai';
import * as chai from 'chai';
import * as spies from 'chai-spies';
import { ToolbarService } from './toolbar.service';
import { of } from 'rxjs';

chai.use(spies);
describe('AppComponent', () => {
  let toolbarService: ToolbarService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    toolbarService = TestBed.get(ToolbarService);
    const app = fixture.debugElement.componentInstance;
    expect(app).to.be.ok;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).to.be.ok;
  });
});
