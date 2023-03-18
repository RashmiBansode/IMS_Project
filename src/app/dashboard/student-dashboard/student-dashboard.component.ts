
import { Component,ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})

export class StudentDashboardComponent {
  chartOptions: any;
  constructor() {
    this.chartOptions = {
     series: [20],
     
     chart: {
       height: 180,
       type: "radialBar"
     },
     
     plotOptions: {
       radialBar: {
         hollow: {
           size: "60%"
         }
       } 
     },
    //  labels: [" "]
   };

  
 }

//  ---------------------------------------

series: ApexAxisChartSeries = []
chart: ApexChart = {
  type: 'area',
  toolbar: {
    show: true
  }
}
title: ApexTitleSubtitle = {
  text: 'Revenue'
}

ngOnInit(): void {
  this.initializeChartOptions()
}

private initializeChartOptions(): void {
  var options = {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();
  
}
}

