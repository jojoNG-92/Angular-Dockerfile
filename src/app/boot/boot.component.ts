import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.css']
})
export class BootComponent implements OnInit {

  progression: string;

  constructor() { }

  ngOnInit(): void {
  }

}
