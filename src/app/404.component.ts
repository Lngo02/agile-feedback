import { Component, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
 
@Component({
  selector: 'page-not-found',
  template: `
    <ng-lottie
      [options]="options"
      (animationCreated)="animationCreated($event)"
    ></ng-lottie>
  `
})

export class PageNotFoundComponent  {
  options: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/datafiles/OzG1c5GtuAvq10U/data.json'
  };
 
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}