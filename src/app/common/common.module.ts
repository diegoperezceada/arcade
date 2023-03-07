import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LayoutComponent,
    LoginPageComponent
  ],
  imports: [
    AngularCommon
  ],
  exports:[ButtonComponent, LayoutComponent]

})
export class CommonModule { }
