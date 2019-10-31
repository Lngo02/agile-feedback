import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Peer {
  name: string;
  reviewed: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  peers: Peer[] = [
    {name: 'David Wilkinson',   reviewed: 'valid'},
    {name: 'Nelson Ferreira',   reviewed: 'valid'},
    {name: 'Jerry Liu',         reviewed: 'valid'},
    {name: 'Michelle Luu',      reviewed: 'valid'},
    {name: 'Owen Li',           reviewed: 'valid'},
    {name: 'Souvik Dutta',      reviewed: 'valid'},
    {name: 'Azim Saiyed',       reviewed: 'valid'},
    {name: 'Sam Bian',          reviewed: 'valid'},
    {name: 'Sudhakar Kakileti', reviewed: 'valid'},
    {name: 'Arthur Liu',        reviewed: 'valid'},
    {name: 'Linda Ngo',         reviewed: 'invalid'},
  ]

  selectedPeer = this.peers[0].name;
  
  ratings: string[] = ['Exceeds Expectations', 'On Track', 'Off Track'];
  helpfulRating: string;
  openRating: string;
  reliableRating: string;
  courageRating: string;
  techRating: string;


  updateSelected(text: string){
    this.selectedPeer = text;
  }

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  constructor() { }

  ngOnInit() {
  }

}