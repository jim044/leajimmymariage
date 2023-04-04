import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';

import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
  
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { EarthGlobeDirective } from '../assets/js/earth-globe.directive';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer.component';
import { CardComponent } from './card/card.component';
import { ImagecarouselComponent } from './imagecarousel/imagecarousel.component';
import {MatDialogModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    MapComponent,
    TestComponent,
    EarthGlobeDirective,
    CountdowntimerComponent,
    CardComponent,
    ImagecarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    CardModule,
    RippleModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
