import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BlogTemplateComponent } from './blog-template/blog-template.component';
import { authenticatedGuard } from './guards/authenticated.guard';


const routes: Routes = [
  {path:'signUp',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:MainContentComponent,canActivate:[authenticatedGuard]},
  {path:'createBlog',component:BlogTemplateComponent,canActivate:[authenticatedGuard]},
  {path:'',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
