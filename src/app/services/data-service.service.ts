import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  getMessage(): any{
    return this.messageSource.getValue();
  }
   
}
