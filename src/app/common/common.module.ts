import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LayoutComponent
  ],
  imports: [
    AngularCommon
  ],
  exports:[ButtonComponent, LayoutComponent]

})
export class CommonModule { }
