import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HindiComponent } from './hindi/hindi.component';
import { ActionComponent } from './action/action.component';
import { KidsComponent } from './kids/kids.component';
import { authGuard } from './auth/auth.guard';
import { UserDetailsComponent } from './user-details/user-details.component';





const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent}, // For normal routes and then Guards example.
  {path:'hindi',component:HindiComponent},
  {path:'action',component:ActionComponent},
  {path:'kids',component:KidsComponent},
  {path:'user',component:UserDetailsComponent,canActivate:[authGuard]},
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
