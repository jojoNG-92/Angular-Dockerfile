import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  state = false;


  constructor() { }

  ngOnInit(): void {
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }

  get pie() {
    return {
      'fal fa-chart-pie': true,
      'icon-state': this.state === true
    };
  }


  get bar() {
    return {
      'fal fa-chart-bar': true,
      'icon-state': this.state === false
    };
  }

}
