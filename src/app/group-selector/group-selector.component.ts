import { Component, Input } from '@angular/core';
import { Group } from '../gitlab/gitlab';

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.scss']
})
export class GroupSelectorComponent {
  @Input() groups: Group[];
}
