import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { Jsonp, JsonpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  name = 'Angular 5 Highstock from chart component';
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  aaplData;

  constructor(private jsonp: Jsonp, private http: HttpClient, private stockService: StockService) { }

  ngOnInit() {
    let context = this;
    this.refreshChart();

    this.stockService.simpleObservable.subscribe((res)=>{
      console.log('observable', res);
    });
  }

  refreshChart(){
    console.log('refreshChart()');
      Highcharts.stockChart(this.container.nativeElement,<any> {
        rangeSelector: {
          buttons: [{
            type: 'month',
            count: 1,
            text: '1m',
            events: {
              click: function (e) {
                console.log('button clickd');
              }
            }
          }, {
            type: 'month',
            count: 3,
            text: '3m'
          }, {
            type: 'month',
            count: 6,
            text: '6m'
          }, {
            type: 'ytd',
            text: 'YTD'
          }, {
            type: 'year',
            count: 1,
            text: '1y'
          }, {
            type: 'all',
            text: 'All1'
          }]
        },
        chart: {
          zoomType: 'x'
        },
        series: this.stockService.allStockData,
        xAxis: {
          events: {
            afterSetExtremes: (e) => {
              // console.log(e);
              // this.button = e.rangeSelectorButton.count;

            }
          }
        },
      })
  

  }

}
