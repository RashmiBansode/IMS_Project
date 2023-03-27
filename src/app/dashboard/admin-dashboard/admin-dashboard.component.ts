import { Component,OnInit,ViewChild  } from '@angular/core';
import * as ApexCharts from 'apexcharts';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle; 
};

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {

  series: ApexAxisChartSeries=[]
  chart: ApexChart = {
    type:'area',
toolbar:{
  show:true 
}
  }
  title: ApexTitleSubtitle={
    text:'Revenue'
  }

  ngOnInit():void{
    this.initializeChartOptions()
  }

// =========================================
serie: ApexAxisChartSeries=[]
charts: ApexChart = {
  type:'bar',
toolbar:{
show:true
}
}
titles: ApexTitleSubtitle={
  text:'Revenue'
}




  private initializeChartOptions():void{
    var options = {
      series: [{
      name: 'Teachers',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Students',
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
    
    // -------------------------------------------------------------------------------
  
   
    var option = {
      series: [{
      name: 'Boys ',
      data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
      name: 'Girls ',
      data: [13, 23, 20, 8, 13, 27, 33, 12]
    } ],
      chart: {
      type: 'bar',
      height: 350,
      width:500,
      stacked: true,
      stackType: '100%'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
        '2012 Q3', '2012 Q4'
      ],
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'right',
      offsetX: 0,
      offsetY: 50
    },
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), option);
    chart2.render();




  }
  
}




