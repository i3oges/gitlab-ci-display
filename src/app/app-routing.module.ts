import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupSelectorComponent } from './group-selector/group-selector.component';
import { PipelineDisplayComponent } from './pipeline-display/pipeline-display.component';


const routes: Routes = [
  { path: '', component: GroupSelectorComponent },
  { path: 'group/:id', component: PipelineDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
