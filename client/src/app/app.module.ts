import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { StockService } from './stock.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartModule } from 'angular-highcharts';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ChartModule,
    JsonpModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
