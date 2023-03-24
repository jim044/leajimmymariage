import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PrimeIcons, PrimeNGConfig } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  
  events!: any[];
  
  constructor(private primengConfig: PrimeNGConfig, private cardService: CardService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.events = [
      "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"
    ]

  }

  selecteDateTimeline(event: any){
    this.cardService.selecteDateTimeline(event);
  }

}
