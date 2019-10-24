import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({ template: 'Log' })
export class LogComponentMock { }

@Component({ template: 'Group' })
export class GroupComponentMock { }

@Component({ template: `<router-outlet></router-outlet>` })
export class AppComponentMock { }

export const routes: Routes = [
  { path: '', component: AppComponentMock },
  { path: 'group/:groupId', component: GroupComponentMock },
  { path: 'group/:groupId/project/:projectId/job/:jobId', component: LogComponentMock }
];