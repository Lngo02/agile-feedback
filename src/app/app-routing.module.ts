import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent }   from './login-page/login-page.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ReviewComponent } from './review/review.component';
import { PageNotFoundComponent } from './404.component';
import { PastReviewsComponent } from './past-reviews/past-reviews.component';
import { WebsiteFeedbackComponent } from './website-feedback/website-feedback.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reviews', component: ReviewComponent },
  { path: 'error', component: PageNotFoundComponent},
  { path: 'past-reviews', component: PastReviewsComponent },
  { path: 'website-feedback', component: WebsiteFeedbackComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }