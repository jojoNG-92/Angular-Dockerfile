import { DashService } from './../../dash.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  constructor(private service: DashService) { }

  ngOnInit(): void {

  }

  setNavBg(value: any) {
      this.service.setNav(value);
  }





}
