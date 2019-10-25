import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from 'chai';
import { GitlabMocks } from '../testing/gitlab.mocks';
import { SharedModule } from '../shared/shared.module';
import { GroupSelectorComponent } from './group-selector.component';

@Component({
  selector: 'app-test-home-component', template: `<app-group-selector [groups]="groups"></app-group-selector>`
})
class MockHomeComponent {
  groups = GitlabMocks.groups;
}

describe('GroupSelectorComponent', () => {
  let component: MockHomeComponent;
  let fixture: ComponentFixture<MockHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupSelectorComponent, MockHomeComponent],
      imports: [SharedModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
  });

  it('should populate with groups data', () => {
    const card = fixture.debugElement.query(By.css('.group-card')).nativeElement.textContent.trim();
    expect(card).to.equal('Foobar Group');
  });
});
