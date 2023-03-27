import { Component,ViewChild, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

import {
  // ApexNonAxisChartSeries,
  // ApexPlotOptions,
  // ApexChart,
  // ChartComponent,
  // ApexXAxis,
  // ApexTitleSubtitle

  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
  
}  from "ng-apexcharts";
 
export type ChartOptions = {
  // series: ApexNonAxisChartSeries;
  // chart: ApexChart;
  // labels: string[];
  // plotOptions: ApexPlotOptions;
  // title: ApexTitleSubtitle; 
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit{
  chartOptions: any;

  constructor() {
    
    this.chartOptions = {
     series: [50],
     chart: { 
       height: 350,
       width:215,
       type: "radialBar"
     },
     
     plotOptions: {
       radialBar: {
         hollow: {
           size: "40%"
         }
       }
     },
     labels: ["Lesson Progressed"]
   };
 }
 
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
    
  // }

// --------------------------------

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

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  
}

}
