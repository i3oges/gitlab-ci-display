import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';

interface BreadcrumbLink {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  breadcrumbs$: Observable<BreadcrumbLink>;
  constructor() { }

  updateBreadcrumbs(url: string[]) {

  }
}
