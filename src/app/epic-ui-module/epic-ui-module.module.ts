import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NgxBtnModule } from 'projects/ngx-btn/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    NgxBtnModule
  ],
  declarations: [],
  exports: [

  ]
})
export class EpicUiModuleModule { }
