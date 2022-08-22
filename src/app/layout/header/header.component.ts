import { DashService } from './../dash.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  background = '';

  constructor(private service: DashService) { }

  ngOnInit(): void {
    this.service.getNavColor().subscribe(
      (_) => {
        console.log(_);
        this.background = _;
      }
    );
  }

}
