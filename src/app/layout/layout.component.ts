import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate, animateChild, group } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    trigger('outletAnimation', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild())
      ]),
    ])
  ]
})
export class LayoutComponent implements OnInit {

  side: boolean;


  constructor() { }

  ngOnInit(): void {}

  preparedRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  getSide(event: any) {
      this.side = event;
  }



}
