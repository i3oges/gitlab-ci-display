import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  group = new EventEmitter<string>();
  constructor() { }

  updateGroup(name: string) {
    this.group.emit(name);
  }
}
