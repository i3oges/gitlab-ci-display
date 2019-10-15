import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  group = new Subject<string>();
  job = new Subject<string>();
  constructor() { }

  updateGroup(name: string) {
    this.group.next(name);
  }

  updateJob(name: string) {
    this.job.next(name);
  }
}
