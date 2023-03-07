import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
import { LoginPageComponent } from './common/login-page/login-page.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
  },
  {
    path: 'login', component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
