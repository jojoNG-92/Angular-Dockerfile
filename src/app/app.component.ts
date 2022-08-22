import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dashboard-ui';
  boot = false;

  constructor(private router: Router) {}

  ngOnInit(): void {

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });

    setTimeout(() => {
      this.boot = true;
      this.router.navigate(['/workspace']);
    }, 2500);
  }
}
