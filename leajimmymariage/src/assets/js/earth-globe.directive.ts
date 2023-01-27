import { Directive, OnInit, ElementRef } from '@angular/core';

declare let d3: any;
declare let versor: any;
declare let topojson: any;

@Directive({
  selector: 'canvas[earth-globe]'
})
export class EarthGlobeDirective implements OnInit {

  canvas = d3.select(this.elRef.nativeElement);
  context = this.canvas.node().getContext('2d')

  projection = d3.geoOrthographic().precision(0.1);
  graticule = d3.geoGraticule10()

  path = d3.geoPath(this.projection).context(this.context);
  autorotate: any;

  v0: any; // Mouse position in Cartesian coordinates at start of drag gesture.
  r0: any; // Projection rotation as Euler angles at start.
  q0: any; // Projection rotation as versor at start.

  land: any;
  countries: any;
  countryList: any;
  currentCountry: any;

  width: any;
  height: any;

  scaleFactor = 0.7;
  degPerSec = 6;
  rotationDelay = 500;
  water = {
    type: 'Sphere'
  };
  colorWater = '#505467';
  colorLand = '#dbb998';
  colorGraticule = '#ccc';
  colorCountry = '#c48e5a';
  colorCountryBorder = '#393b41';

  now: any;
  diff: any;
  lastTime = d3.now();
  degPerMs = this.degPerSec / 1000;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    tooltipDOMElement = document.getElementById('tooltip');
    this.canvas
      .call(d3.drag()
        .on('start', this.dragstarted)
        .on('drag', this.dragged)
        .on('end', this.dragended)
      )
      .on('mousemove', this.mousemove)
    // .on('click', selectCountry);

    this.loadData((world: any, cList: any) => {
      this.land = topojson.feature(world, world.objects.land);
      this.countries = topojson.feature(world, world.objects.countries);
      this.countryList = cList;

      window.addEventListener('resize', this.scale);
      this.scale();
      this.autorotate = d3.timer(this.rotate);
    })
  }

  getCountry(event: any) {
    let pos = this.projection.invert(d3.mouse(event));
    if (!this.countries) return; /* To avoid errors if countries are not loaded yet */
    return this.countries.features.find(function (f: any) {
      return f.geometry.coordinates.find(function (c1: any) {
        return polygonContains(c1, pos) || c1.find(function (c2: any) {
          return polygonContains(c2, pos);
        })
      })
    })
  }

  mousemove = () => {
    let c = this.getCountry(this.canvas.node());
    if (!c) {
      if (this.currentCountry) {
        this.leave(this.currentCountry);
        this.currentCountry = undefined;
        this.render();
      }
      return;
    }
    if (c === this.currentCountry) {
      return;
    }
    this.currentCountry = c;
    this.render();
    this.enter(c);
  }

  enter(country: any) {
    let countryName = this.getCountryName(country);
    showTooltip(countryName);
  }

  leave(country: any) {
    //hideTooltip();
  }

  getCountryName(country: any) {
    if (!country) return; /* For clicks outside any country */
    let findCountry = this.countryList
      .find((c: any) => Number(c.id) === Number(country.id));
    let countryName = findCountry ? findCountry.name : '';

    return countryName;
  }

  dragstarted = () => {
    this.v0 = versor.cartesian(this.projection.invert(d3.mouse(this.canvas.node())));
    this.r0 = this.projection.rotate();
    this.q0 = versor(this.r0);
    this.stopRotation();
  };

  dragged = () => {
    let v1 = versor.cartesian(this.projection.rotate(this.r0).invert(d3.mouse(this.canvas.node())));
    let q1 = versor.multiply(this.q0, versor.delta(this.v0, v1));
    let r1 = versor.rotation(q1);
    this.projection.rotate(r1);
    this.render();
  };

  dragended = () => {
    this.startRotation(this.rotationDelay);
  }

  scale = () => {
    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight;
    this.canvas.attr('width', this.width).attr('height', this.height);
    this.projection
      .scale((this.scaleFactor * Math.min(this.width, this.height)) / 2)
      .translate([this.width / 2, this.height / 2])
    this.render();
  }

  render() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.fill(this.water, this.colorWater);
    this.stroke(this.graticule, this.colorGraticule);
    this.fill(this.land, this.colorLand);
    this.stroke(this.land, this.colorCountryBorder);

    /* Draw borders for each country */
    this.countries.features.forEach((country: any) => {
      this.stroke(country, this.colorCountryBorder);
    });


    if (this.currentCountry) {
      this.fill(this.currentCountry, this.colorCountry);
      this.stroke(this.currentCountry, this.colorCountryBorder);
    }
  }

  fill(obj: any, color: any) {
    this.context.beginPath()
    this.path(obj)
    this.context.fillStyle = color
    this.context.fill()
  }

  stroke(obj: any, color: any) {
    this.context.beginPath();
    this.path(obj);
    this.context.strokeStyle = color;
    this.context.stroke();
  }

  rotate = (elapsed: any) => {
    this.now = d3.now();
    this.diff = this.now - this.lastTime;
    if (this.diff < elapsed) {
      const rotation = this.projection.rotate();
      rotation[0] += this.diff * this.degPerMs;
      this.projection.rotate(rotation);
      this.render();
    }
    this.lastTime = this.now;
  }

  startRotation(delay: any) {
    this.autorotate.restart(this.rotate, delay || 0);
  }

  stopRotation() {
    this.autorotate.stop();
  }

  loadData(cb: any) {
    d3.json('https://unpkg.com/world-atlas@1/world/110m.json', function (error: any, world: any) {
      if (error) throw error;
      d3.tsv('https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv', function (error: any, countries: any) {
        if (error) throw error;
        cb(world, countries);
      })
    })
  }

}

let tooltipDOMElement: any;


// https://github.com/d3/d3-polygon
function polygonContains(polygon: any, point: any) {
  let n = polygon.length;
  let p = polygon[n - 1];
  let x = point[0],
    y = point[1];
  let x0 = p[0],
    y0 = p[1];
  let x1, y1;
  let inside = false;
  for (let i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
    x0 = x1, y0 = y1;
  }
  return inside;
}

function showTooltip(countryName: any) {
  /* --- Generates fake data for each country to display on tooltip --- */
  const channelData = [Math.round(Math.random() * 30 * 10) / 10 + 10, Math.round(Math.random() * 35 * 10) / 10 + 10];
  channelData.push(Math.round((100.0 - channelData[0] - channelData[1]) * 10) / 10);

  const paymentType = [Math.round(Math.random() * 50 * 10) / 10 + 10];
  paymentType.push(Math.round((100.0 - paymentType[0]) * 10) / 10);

  const customerType = [Math.round(Math.random() * 50 * 10) / 10 + 10];
  customerType.push(Math.round((100.0 - customerType[0]) * 10) / 10);

  const caseType = [Math.round(Math.random() * 50 * 10) / 10 + 10];
  caseType.push(Math.round((100.0 - caseType[0]) * 10) / 10);

  const TOOLTIP_MAX_WIDTH = 190;
  const TOOLTIP_MAX_HEIGHT = 110;

  const tooltip = `
    <span class='tooltip-country-name'>${countryName}:</span><br />
    <span class="channel01">Channel01: ${channelData[0]}%</span><br />
    <span class="channel02">Channel02: ${channelData[1]}%</span><br />
    <span class="channel03">Channel03: ${channelData[2]}%</span><br />
  `;

  /* Calculates mouse coords and shows the tooltip */

  const absoluteMouseX = d3.event.clientX;
  const absoluteMouseY = d3.event.clientY;
  const ww = window.innerWidth;
  const hh = window.innerHeight;
  let tooltipX;
  let tooltipY;

  if (ww - absoluteMouseX < TOOLTIP_MAX_WIDTH) {
    tooltipX = ww - TOOLTIP_MAX_WIDTH;
  } else {
    tooltipX = absoluteMouseX + 2;
  }

  if (hh - absoluteMouseY < TOOLTIP_MAX_HEIGHT) {
    tooltipY = hh - TOOLTIP_MAX_HEIGHT;
  } else {
    tooltipY = absoluteMouseY + 2;
  }

  tooltipDOMElement.style.top = tooltipY + 'px';
  tooltipDOMElement.style.left = tooltipX + 'px';
  tooltipDOMElement.style.display = 'block';

  tooltipDOMElement.innerHTML = tooltip;
}

function hideTooltip() {
  tooltipDOMElement.style.display = 'none';
}