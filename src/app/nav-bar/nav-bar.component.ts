import { Component, OnInit } from '@angular/core';
import { faHome, faEdit, faHistory, faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = "360 Degree Agile Feedback";
  
  home = faHome;
  edit = faEdit;
  history = faHistory;
  wrench = faWrench;

  constructor() { }

  ngOnInit() {
  }

}