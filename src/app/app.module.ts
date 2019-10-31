import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello.component';
import { PageNotFoundComponent } from './404.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReviewComponent } from './review/review.component';
import { AppRoutingModule }from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PastReviewsComponent } from './past-reviews/past-reviews.component';
import { WebsiteFeedbackComponent } from './website-feedback/website-feedback.component';

import { BarRatingModule } from 'ngx-bar-rating';

// We need a separate function as it's required
// by the AOT compiler
export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player: playerFactory}),BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatToolbarModule, 
    MatTabsModule, 
    MatButtonModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatCheckboxModule, 
    MatRadioModule,
    MatCardModule, 
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BarRatingModule,
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    PageNotFoundComponent, 
    LoginPageComponent,
    DashboardComponent,
    ReviewComponent,
    NavBarComponent,
    PastReviewsComponent,
    WebsiteFeedbackComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
