import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { GroupSelectorComponent } from './group-selector/group-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { PipelineDisplayComponent } from './pipeline-display/pipeline-display.component';
import { LogDisplayComponent } from './log-display/log-display.component';
import { ToolbarService } from './toolbar.service';

@NgModule({
  declarations: [
    AppComponent,
    GroupSelectorComponent,
    PipelineDisplayComponent,
    LogDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
