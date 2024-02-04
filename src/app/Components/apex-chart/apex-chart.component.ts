import { Component, ViewChild } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { NgApexchartsModule } from 'ng-apexcharts';

import { series } from './data';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  // colors for the chart series
  // ApexFill,

  // direction of the chart
  ApexTheme,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  colors: string[];
  theme: ApexTheme;

  crosshairs: {
    show: boolean;
    position: string;

    stroke: {
      color: string;
      width: number;
      dashArray: number;
    };
  };
};

@Component({
  selector: 'app-apex-chart',
  standalone: true,
  imports: [NgApexchartsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './apex-chart.component.html',
  styleUrl: './apex-chart.component.scss',
})
export class ApexChartComponent {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    // Reverse the data series
    const reversedData = series.monthDataSeries2.prices.slice().reverse();
    const reversedLabels = series.monthDataSeries2.dates.slice().reverse();

    this.chartOptions = {
      series: [
        {
          name: 'السعر',
          // data: series.monthDataSeries1.prices,
          data: reversedData,
        },
      ],
      // labels: series.monthDataSeries1.dates,
      labels: reversedLabels,

      chart: {
        type: 'area',
        height: 260,
        zoom: {
          enabled: false,
        },

        // download: false, // not working
        toolbar: {
          show: true,
          tools: {
            download: false, // Set download to false to hide the download option
          },
        },
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: 'straight',
      },

      // colors
      colors: ['#8A74F9'],

      title: {
        // text: 'إحصائيات إستخدام القسيمة',
        // align: 'center',
      },

      subtitle: {
        // text: 'Price Movements',
        // align: 'left',
      },

      xaxis: {
        // type: 'datetime',
        // months
        type: 'category',
      },

      yaxis: {
        opposite: true,
      },

      legend: {
        horizontalAlign: 'left',
      },
    };
  }
}
