import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({ template: 'Log' })
export class MockLogComponent { }

@Component({ template: 'Group' })
export class MockGroupComponent { }

@Component({ template: `<router-outlet></router-outlet>` })
export class MockAppComponent { }

export const routes: Routes = [
  { path: '', component: MockAppComponent },
  { path: 'group/:groupId', component: MockGroupComponent },
  { path: 'group/:groupId/project/:projectId/job/:jobId', component: MockLogComponent }
];
