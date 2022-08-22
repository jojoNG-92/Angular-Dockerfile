import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  private subject = new Subject<any>();

  constructor() { }

  setNav(color: string) {
    this.subject.next(color);
  }

  getNavColor(): Observable<any> {
      return this.subject.asObservable();
  }

}
