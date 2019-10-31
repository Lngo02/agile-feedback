import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-feedback',
  templateUrl: './website-feedback.component.html',
  styleUrls: ['./website-feedback.component.css']
})
export class WebsiteFeedbackComponent implements OnInit {
  websiteRating = 0;
  feedbackRating = 0;
  
  constructor() { }

  updateRating($event){
    console.log($event);
  }

  ngOnInit() {
  }

}