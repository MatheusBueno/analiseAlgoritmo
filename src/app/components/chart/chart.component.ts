import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true   // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  @Input() labels;

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  @Input() chartData;

  // CHART COLOR.
  @Input() colors;

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}