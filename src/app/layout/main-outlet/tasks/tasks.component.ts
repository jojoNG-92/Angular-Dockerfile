import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  animations: [
    trigger('itemType', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        // Cards will disappear sequentially with the delay of 300ms
        query(':leave', stagger('300ms', [
          animate('500ms ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
  ])
  ]
})
export class TasksComponent implements OnInit {

  users = [
    {
      name: 'A R kuete',
      avatar: 'https://gravatar.com/avatar/61f49a88d728ed09dc65432a651321bb?s=400&d=robohash&r=x',
      grade: 'Chef de Projet',
      progression: 54,
      color: '#3171b7'
    },
    {
      name: 'Arline Baker',
      avatar: 'https://gravatar.com/avatar/8c548df7644340531484f663b239e7a8?s=400&d=robohash&r=x',
      grade: 'Vice chef',
      progression: 70,
      color: 'green'
    },
    {
      name: 'Poole Walters',
      avatar: 'https://gravatar.com/avatar/a02302b277f6aebff4402f9a3e838c5e?s=400&d=robohash&r=x',
      grade: 'UI/UX Designer',
      progression: 45,
      color: 'orange'
    },
    {
      name: 'Myrtle Mcintyre',
      avatar: 'https://gravatar.com/avatar/8f10e68333363f8c70afdf8d100547a1?s=400&d=robohash&r=x',
      grade: 'Codeur',
      progression: 10,
      color: 'red'
    },
    {
      name: 'Josie Mullen',
      avatar: 'https://gravatar.com/avatar/a5b8a25ece063e93b1e0f1ce6db75094?s=400&d=robohash&r=x',
      grade: 'Codeur',
      progression: 100,
      color: 'green'
    }
  ];

  tasks = [
      { title: '#Task_number_1' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a neque at lorem convallis pharetra.'},
      { title: '#Task_number_2' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a neque at lorem convallis pharetra.'},
      { title: '#Task_number_3' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a neque at lorem convallis pharetra.'},
      { title: '#Task_number_4' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a neque at lorem convallis pharetra.'},
      { title: '#Task_number_5' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a neque at lorem convallis pharetra.'},
      { title: '#Task_number_6' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a neque at lorem convallis pharetra.'},
  ];

  selectedIndex = 0;
  taskTitle = '#Task_number_1';

  taskForm: FormGroup;
  spin = false;
  indx: number;
  btnState = false;


  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.taskForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  selection(i: any, title: any) {
    this.selectedIndex = i;
    this.taskTitle = title;
  }

  getItem(item: any, i: any) {

    $('#addTask').collapse({
      toggle: true
    });
    this.btnState = true;
    this.indx = i;
    this.taskForm = new FormGroup({
        title: new FormControl(item?.title, Validators.required),
        description: new FormControl(item?.description, Validators.required)
      });
  }

  delete(i: any) {
    this.tasks.splice(i, 1);
  }

  add() {
    this.spin = true;
    const form = this.taskForm.value;
    this.tasks.unshift({title: form.title, description: form.description});
    setTimeout(() => {
      this.spin = false;
    }, 3000);
  }

  edit() {
    this.spin = true;
    const form = this.taskForm.value;
    this.tasks.splice(this.indx, 0, {title: form.title, description: form.description});
    setTimeout(() => {
      this.spin = false;
    }, 3000);
  }

}
