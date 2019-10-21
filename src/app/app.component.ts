import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ToolbarService } from './shared/toolbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface BreadcrumbLink {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  breadcrumbs = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.events.subscribe(event => {
      console.log(event);
    })
  }

}
