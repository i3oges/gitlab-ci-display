import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable()
export class ToolbarServiceMock {

  group = of('test group');
  job = of('test job');
  constructor() { }

  updateGroup(name: string) { }

  updateJob(name: string) { }
}
