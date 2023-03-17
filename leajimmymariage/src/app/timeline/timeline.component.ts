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
        icon: PrimeIcons.HEART_FILL,
        image: "/assets/images/Mont-Saint-Michel.jpg"
      },
      {
        status: "Londres",
        date: "2015",
        icon: PrimeIcons.CAR,
        image: "/assets/images/2015 Royaume Uni avec Marlou et Tit.jpg"
      },
      {
        status: "Saint-Malo",
        date: "2015",
        icon: PrimeIcons.CAR,
        image: "/assets/images/2015 Saint Malo avec Titie.jpg"
      }
    ];
  }

}
