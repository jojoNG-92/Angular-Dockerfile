import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() activeIds: any;
  @Input() closeOther: boolean;

  constructor() { }

  ngOnInit(): void {
    $('#' + this.activeIds).collapse('toggle');
  }



}
