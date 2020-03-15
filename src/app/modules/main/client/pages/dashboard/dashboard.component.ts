import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart1Type = 'BarChart';
  chart1Data: any[] = [
    ['London', Math.round(Math.random() * 100000000)],
    ['New York', Math.round(Math.random() * 100000000)],
    ['Paris', Math.round(Math.random() * 100000000)],
    ['Berlin', Math.round(Math.random() * 100000000)],
    ['Kairo', Math.round(Math.random() * 100000000)]
  ];
  chart2Type = 'PieChart';
  chart2Data: any[] = [
    ['London', Math.round(Math.random() * 100000000)],
    ['New York', Math.round(Math.random() * 100000000)],
    ['Paris', Math.round(Math.random() * 100000000)],
    ['Berlin', Math.round(Math.random() * 100000000)],
    ['Kairo', Math.round(Math.random() * 100000000)]
  ];
  chart3Type = 'ColumnChart';
  chart3Data: any[] = [
    ['London', Math.round(Math.random() * 100000000)],
    ['New York', Math.round(Math.random() * 100000000)],
    ['Paris', Math.round(Math.random() * 100000000)],
    ['Berlin', Math.round(Math.random() * 100000000)],
    ['Kairo', Math.round(Math.random() * 100000000)]
  ];
  chart4Type = 'AreaChart';
  chart4Data: any[] = [
    ['London', Math.round(Math.random() * 100000000)],
    ['New York', Math.round(Math.random() * 100000000)],
    ['Paris', Math.round(Math.random() * 100000000)],
    ['Berlin', Math.round(Math.random() * 100000000)],
    ['Kairo', Math.round(Math.random() * 100000000)]
  ];
  chart5Type = 'Bubblechart';
  chart5Data: any[] = [
    ['London', Math.round(Math.random() * 100000000)],
    ['New York', Math.round(Math.random() * 100000000)],
    ['Paris', Math.round(Math.random() * 100000000)],
    ['Berlin', Math.round(Math.random() * 100000000)],
    ['Kairo', Math.round(Math.random() * 100000000)]
  ];

  constructor() { }

  ngOnInit() {
  }
}
