import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { MainComponent } from './main/pages/main/main.component';
import { ProfileComponent } from './main/pages/main/profile/profile.component';
import { ReviewListComponent } from './main/pages/main/review-list/review-list.component';

const routes: Routes = [
  {path:"home", component: MainComponent, children:[
    {path:"reviews", component: ReviewListComponent},
    {path:"profile", component: ProfileComponent},
  ]},
  {path:"", redirectTo: "home", pathMatch:"full"},
  
  {path:'login', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
