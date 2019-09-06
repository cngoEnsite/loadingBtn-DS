import { NgModule } from '@angular/core';
import { LoadingBtnComponent } from './components/loading-btn/loading-btn.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LoadingBtnComponent],
  imports: [
    CommonModule,

  ],
  exports: [LoadingBtnComponent]
})
export class NgxBtnModule { }
