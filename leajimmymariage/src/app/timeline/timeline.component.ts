import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  arr!: any[];
  
  ngOnInit() {
    this.arr = [
      {
        status: "Mont Saint-Michel",
        date: "2013",
        icon: PrimeIcons.CAR,
        image: "../../assets/Mont-Saint-Michel.jpg"
      }
    ];
  }

}
