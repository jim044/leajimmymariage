import { Component, OnInit } from '@angular/core';
import { PrimeIcons, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  arr!: any[];
  dateSelected: string = '2013';
  distinctDate: any[] = [];
  selectedPlaceByDate: any[] = [];
  
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

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
      ,
      {
        status: "Saint-Malo",
        date: "2020",
        icon: PrimeIcons.CAR,
        image: "/assets/images/2015 Saint Malo avec Titie.jpg"
      }
    ];

    this.selectedPlaceByDate = [
      {
        status: "Mont Saint-Michel",
        date: "2013",
        icon: PrimeIcons.HEART_FILL,
        image: "/assets/images/Mont-Saint-Michel.jpg"
      }];

    let arrayDate = this.arr.map(place => place.date);
    this.distinctDate = arrayDate.filter((n, i) => arrayDate.indexOf(n) === i);

  }

  selecteDateTimeline(event: any){
    this.dateSelected = event;
  }

  filteredDate(){

  }

}
