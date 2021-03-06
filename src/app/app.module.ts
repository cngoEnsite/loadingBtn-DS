import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpicUiModuleModule } from './epic-ui-module/epic-ui-module.module';
import { NgxBtnModule } from 'projects/ngx-btn/src/public-api';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EpicUiModuleModule,
    NgxBtnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
