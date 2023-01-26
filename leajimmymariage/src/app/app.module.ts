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
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    CardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
