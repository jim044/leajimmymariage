import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private dateSelected: BehaviorSubject<string> = new BehaviorSubject("2013");

  constructor() { }

  selecteDateTimeline(event: any){
    this.dateSelected.next(event);
  }

  public getDateSelected(): BehaviorSubject<string> {
    return this.dateSelected;
  }
}
