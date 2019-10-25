import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogDisplayComponent } from './log-display/log-display.component';
import { PipelineDisplayComponent } from './pipeline-display/pipeline-display.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'group/:groupId', component: PipelineDisplayComponent },
  { path: 'group/:groupId/project/:projectId/job/:jobId', component: LogDisplayComponent },
  { path: 'projects', component: PipelineDisplayComponent },
  { path: 'project/:projectId/job/:jobId', component: LogDisplayComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
