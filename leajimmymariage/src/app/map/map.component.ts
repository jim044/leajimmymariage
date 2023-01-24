import { Component, OnInit } from '@angular/core';
declare var Module: any;
declare var Inspector: any;
declare var define: any;
declare var Library: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit(): void {
    console.log("test")
    const main = Module(define, Inspector.into(document.body));
  }

  
}

