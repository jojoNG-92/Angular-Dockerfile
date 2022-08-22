import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  state = false;
  search = '';

  team = [
    {
      name: 'A R kuete',
      avatar: 'https://gravatar.com/avatar/61f49a88d728ed09dc65432a651321bb?s=400&d=robohash&r=x'
    },
    {
      name: 'Arline Baker',
      avatar: 'https://gravatar.com/avatar/8c548df7644340531484f663b239e7a8?s=400&d=robohash&r=x'
    },
    {
      name: 'Poole Walters',
      avatar: 'https://gravatar.com/avatar/a02302b277f6aebff4402f9a3e838c5e?s=400&d=robohash&r=x'
    },
    {
      name: 'Myrtle Mcintyre',
      avatar: 'https://gravatar.com/avatar/8f10e68333363f8c70afdf8d100547a1?s=400&d=robohash&r=x'
    },
    {
      name: 'Josie Mullen',
      avatar: 'https://gravatar.com/avatar/a5b8a25ece063e93b1e0f1ce6db75094?s=400&d=robohash&r=x'
    },
    {
      name: 'Rosa Richards',
      avatar: 'https://gravatar.com/avatar/8080b11e18f130aa523df28d55a648eb?s=400&d=robohash&r=x'
    },
    {
      name: 'Dyer Roy',
      avatar: 'https://gravatar.com/avatar/59546b956cd1fcc1e55cb891e3cd3775?s=400&d=robohash&r=x'
    },
    {
      name: 'Loretta Torres',
      avatar: 'https://gravatar.com/avatar/8153b55772b8239cc3ec332c074f52c3?s=400&d=robohash&r=x'
    },
    {
      name: 'Stanton Peters',
      avatar: 'https://gravatar.com/avatar/c0193f1f43576b22fcf381200d5a7326?s=400&d=robohash&r=x'
    },
    {
      name: 'Mya Glover',
      avatar: 'https://gravatar.com/avatar/ccc9b063327c684bcd86074d08947e1d?s=400&d=robohash&r=x'
    },
    {
      name: 'Ori Mcdaniel',
      avatar: 'https://gravatar.com/avatar/32c5c1757ee277f7fe29db194f785f47?s=400&d=robohash&r=x'
    },
    {
      name: 'Lilia Oneill',
      avatar: 'https://gravatar.com/avatar/f0b5107c134cbafe0fae0c362dfa359c?s=400&d=robohash&r=x'
    },
    {
      name: 'Rollins Oliver',
      avatar: 'https://robohash.org/f0b5107c134cbafe0fae0c362dfa359c?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Zelma Palmer',
      avatar: 'https://robohash.org/f23150b33698a8d926a1646e9dcdb071?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Leanne Allison',
      avatar: 'https://robohash.org/de7289b6f1f88091aa579b6a8628589b?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Hyde Hawkins',
      avatar: 'https://robohash.org/503a42fc0510d53b7e51b761ae848313?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Knowles Huge',
      avatar: 'https://robohash.org/a997b792a97754eaae597547e72787c5?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Gilda Perez',
      avatar: 'https://robohash.org/040c5b6755c1ed4911aaa8f8965fc4f3?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Christ Vargas',
      avatar: 'https://robohash.org/183e1e3e0e3c1eb368cea926a52fbbdd?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Chase Luke',
      avatar: 'https://robohash.org/3a4edefbae69a99989da2f756a15500f?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Justice Allen',
      avatar: 'https://robohash.org/378f2f6c1e564e524f45b3dc842f7e3c?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Kristy Mcintyre',
      avatar: 'https://robohash.org/69ecce13727f01ac463eb17c2309a281?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Maura Casey',
      avatar: 'https://gravatar.com/avatar/85d54b17665c25e5273ae09085b20d18?s=400&d=robohash&r=x'
    },
    {
      name: 'Chavez Oneal',
      avatar: 'https://gravatar.com/avatar/a6b09eca12a34d6062ffd4d9dda19440?s=400&d=robohash&r=x'
    },
    {
      name: 'Pamela Pace',
      avatar: 'https://gravatar.com/avatar/e54ce489ae05c77171ccafcca8aa71ce?s=400&d=robohash&r=x'
    },
    {
      name: 'Ras Shannon',
      avatar: 'https://gravatar.com/avatar/5d4e5b6feb351b8c21eb244d8015ab12?s=400&d=robohash&r=x'
    },
    {
      name: 'Stephens Sy',
      avatar: 'https://gravatar.com/avatar/56a595350ff9e4758f9cf70b20e5adb3?s=400&d=robohash&r=x'
    },
    {
      name: 'Rosemary Abla',
      avatar: 'https://gravatar.com/avatar/8e66c2d0e6d302698bc309690eed5c1a?s=400&d=robohash&r=x'
    },
    {
      name: 'David John',
      avatar: 'https://robohash.org/b3be078473cf631cb75496596fb005a4?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Duran Roman',
      avatar: 'https://robohash.org/50ee3ecd9a68e57cb13bee066b6eeb08?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Tommie Mckay',
      avatar: 'https://robohash.org/5dc0362ed23468b437769c9826478b60?set=set4&bgset=&size=400x400'
    },
    {
      name: 'Jimmie Weeks',
      avatar: 'https://gravatar.com/avatar/be1acb4c0940f0fb3be1b1f6ba17ec95?s=400&d=robohash&r=x'
    }
  ];

  statement = false;

  constructor() { }

  ngOnInit(): void {
  }


  get iconState() {
    return {
      fal: true,
      'fa-th': this.state === true,
      'fa-list': this.state === false
    };
  }

  switchIcon() {
    this.state = !this.state;
  }

  @HostListener('window:scroll', [])
  scroll() {
    this.statement = !this.statement;

    if (this.statement === true) {
      $('.r-height').animate({
        scrollTop: $('.r-height')[0].scrollHeight - $('.r-height')[0].clientHeight
      }, 1000);
    }

    if (this.statement === false) {
      $('.r-height').animate({
        scrollTop: 0
      }, 1000);
    }


  }


  get icoChevron() {
    return {
      fal: true,
      'fa-chevron-circle-down': this.statement === false,
      'fa-chevron-circle-up': this.statement === true,
      'fa-2x': true
    };
  }

}
