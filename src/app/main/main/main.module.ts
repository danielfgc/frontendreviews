import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../pages/main/main.component';
import { HeaderComponent } from '../pages/main/header/header.component';
import { ReviewListComponent } from '../pages/main/review-list/review-list.component';
import { ReviewComponent } from '../pages/main/review/review.component';
import { ProfileComponent } from '../pages/main/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ReviewListComponent,
    ReviewComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class MainModule { }
