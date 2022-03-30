import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularComponent } from './angular.component';
@NgModule({
  declarations: [
    AngularComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AngularComponent
  ]
})
export class AngularModule { }
