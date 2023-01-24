import { Component, OnInit } from '@angular/core';

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
        status: "2011",
      },
      {
        status: "2013",
      },
      {
        status: "Time3",
      },
      {
        status: "Time4",
      },
    ];
  }

}
