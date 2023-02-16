import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { MainComponent } from './main/pages/main/main.component';
import { ProfileComponent } from './main/pages/main/profile/profile.component';
import { ReviewListComponent } from './main/pages/main/review-list/review-list.component';
import { ReviewComponent } from './main/pages/main/review/review.component';
import { AuthGuard } from './main/services/guards/auth.guard';
import { NotFoundComponent } from './errorpages/not-found/not-found.component';
import { CanDeactivateGuard } from './main/services/guards/canDeactivateGuard/can-deactivate.guard';

const routes: Routes = [
  {
    path: "home", component: MainComponent, children: [
      { path: "reviews", component: ReviewListComponent },
      { path: "profile", component: ProfileComponent, canActivate:[AuthGuard], canDeactivate:[CanDeactivateGuard] },
      { path: "review", component: ReviewComponent, canActivate:[AuthGuard], canDeactivate:[CanDeactivateGuard] },
    ]
  },
  { path: "", redirectTo: "home/reviews", pathMatch: "full" },
  { path: 'login', component: AuthComponent },
  {path:"not-found", component:NotFoundComponent},
  { path: "**", redirectTo: "not-found" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

