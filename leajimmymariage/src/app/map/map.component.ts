import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { queue } from 'rxjs';
import * as topojson from 'topojson-client';
import { TopographyService } from '../service/topography.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
/*   svg: any;
  projection: any;
  topoFeatureStates: any;
  path: any; */
  topWorld: any;
  width = 960;
  height = 500;
  config = {
    speed: 0.005,
    verticalTilt: -30,
    horizontalTilt: 0
  }
  locations = [];
  svg :any;
  //markerGroup = this.svg.append('g');
  projection = d3.geoOrthographic();
  initialScale = this.projection.scale();
  path: any = d3.geoPath().projection(this.projection);
  center: [number, number] = [this.width/2, this.height/2];


  constructor(
    private topographyService: TopographyService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.topographyService.getTopographyData().subscribe((topography: any) => {
      this.drawGlobe(topography);
      //this.drawGraticule();
      //this.enableRotation();
    });

/*     this.topographyService.getTopoFeature().subscribe((topography: any) => {
      this.drawGlobe(topography);
      //this.drawGraticule();
      this.enableRotation();
    }); */

    //this.drawGlobe();    
    /* this.drawGraticule();
    this.enableRotation(); */
  }

  drawGlobe(topography: any) {  
    
    this.topWorld = topojson.feature(
      topography,
      topography.objects.countries
    );

    this.projection.fitSize([this.width, this.height], this.topWorld);

    this.path = d3.geoPath(this.projection);
    
    // render svg
    this.svg = d3
      .select('svg')
      .attr('width', this.width)
      .attr('height', this.height);

      
       /* this.svg.selectAll(".segment")
          .datum(topojson.feature(topography,
            topography.objects.countries))
          .enter().append("path")
          .attr("class", "segment")
          .attr("d", this.path)
          .style("stroke", "#888")
          .style("stroke-width", "1px")
          .style("fill", (d, i) => '#e5e5e5')
          .style("opacity", ".6"); */
         

      this.renderNationFeaturesWithShadow(topography);

     // d3.select(window).on('resize', this.resizeMap);        
  }

  renderNationFeaturesWithShadow(topography: any): void {
    const defs = this.svg.select('defs');
    defs
      .append('path')
      .datum(topojson.feature(topography, topography.objects.countries))
      .attr('id', 'nation')
      .attr('d', this.path);

    this.svg
      .append('use')
      .attr('xlink:href', '#nation')
      .attr('fill-opacity', 0.2)
      .attr('filter', 'url(#blur)');

    this.svg.append('use').attr('xlink:href', '#nation').attr('fill', '#fff');

    // extra touch (counties in grid)
    this.svg
      .append('path')
      .attr('fill', 'none')
      .attr('stroke', '#777')
      .attr('stroke-width', 0.35)
      .attr(
        'd',
        this.path(
          topojson.mesh(
            topography,
            topography.objects.countries,
            (a: any, b: any) => {
              // tslint:disable-next-line:no-bitwise
              return ((a.id / 1000) | 0) === ((b.id / 1000) | 0);
            }
          )
        )
      );
    // end extra touch
  }

  resizeMap = () => {
    const { width, height } = this.getMapContainerWidthAndHeight();

    this.svg.attr('width', width + 50).attr('height', height);

    // update projection
    this.projection.fitSize([width, height], this.topWorld);

    // resize the map
    this.svg.selectAll('path').attr('d', this.path);
  };

  getMapContainerWidthAndHeight = (): { width: number; height: number } => {
    const mapContainerEl = this.el.nativeElement.querySelector(
      '#map'
    ) as HTMLDivElement;
    const width = mapContainerEl.clientWidth - 50;
    const height = (width / 960) * 600;

    return { width, height };
  };

  drawGraticule() {
      const graticule = d3.geoGraticule()
          .step([10, 10]);

      this.svg.append("path")
          .datum(graticule)
          .attr("class", "graticule")
          .attr("d", this.path)
          .style("fill", "#fff")
          .style("stroke", "#ccc");
  }

  enableRotation() {
      d3.timer((elapsed) => {
          this.projection.rotate([this.config.speed * elapsed - 120, this.config.verticalTilt, this.config.horizontalTilt]);
          this.svg.selectAll("path").attr("d", this.path);
          //this.drawMarkers();
      });
  }        

  drawMarkers() {
/*       let markers: any = this.markerGroup.selectAll('circle')
          .data(this.locations);
      markers
          .enter()
          .append('circle')
          .merge(markers)
          .attr('cx', (d: { longitude: number; latitude: number; }) => this.projection([d.longitude, d.latitude])?.[0])
          .attr('cy', (d: { longitude: number; latitude: number; }) => this.projection([d.longitude, d.latitude])?.[1])
          .attr('fill', (d: { longitude: any; latitude: any; }) => {
              const coordinate:any = [d.longitude, d.latitude];
              const gdistance = d3.geoDistance(coordinate, this.projection.invert?(this.center):[0,0]);
              return gdistance > 1.57 ? 'none' : 'steelblue';
          })
          .attr('r', 7); */

      /* this.markerGroup.each(function () {
          parentNode.appendChild(this);
      }); */
  }
  
}

