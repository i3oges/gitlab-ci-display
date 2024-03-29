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
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupSelectorComponent,
    PipelineDisplayComponent,
    LogDisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
