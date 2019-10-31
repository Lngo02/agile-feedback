import { Component, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
 
@Component({
  selector: 'hello',
  template: `
    <ng-lottie
      [options]="options"
      (animationCreated)="animationCreated($event)"
    ></ng-lottie>
  `
})

export class HelloComponent  {
  options: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_cbTr7B.json'
  };
 
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
