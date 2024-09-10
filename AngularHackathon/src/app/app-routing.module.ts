import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { authenticationGuard } from './guards/authentication.guard';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'signUp',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:HomePageComponent,canActivate:[authenticationGuard]},
  {path:'orders',component:OrderComponent,canActivate:[authenticationGuard]},
  {path:'',component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
