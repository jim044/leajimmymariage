import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopographyService {

  constructor(private http: HttpClient) {}

  getTopographyData(): Observable<any> {
    const topoDataURL =
      'https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json';

    return this.http.get(topoDataURL);
  }

  getTopoFeature(): Observable<any> {
    const topoDataURL =
      'https://raw.githubusercontent.com/andybarefoot/andybarefoot-www/master/maps/mapdata/custom50.json';

    return this.http.get(topoDataURL);
  }
}
