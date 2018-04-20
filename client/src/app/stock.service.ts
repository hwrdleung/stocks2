import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class StockService {
  private socket;
  private stocks;
  private url = 'http://localhost:3000/';
  private alphaVantageApiKey = 'QA392CBZXI80H0IX';
  private alphaVantageApi = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=' + this.alphaVantageApiKey + '&symbol=';
  allStockData = [];

  constructor(private http:HttpClient) { 
    this.socket = io(this.url);
  }


  // Socket.io emitters and listeners
  socketListener(){
    var onInit = this;

    this.socket.on('connection', function(){
      console.log('Socket connected');
    });

    this.socket.on('refresh', function(){
      onInit.updateStocks();
    });
  }

  addNewStock(newStock){
    var stockSymbols = [];
    for(var i=0; i<this.stocks.length; i++){
      stockSymbols.push(this.stocks[i].stockSymbol);
    }
    if(!stockSymbols.includes(newStock)){
      this.socket.emit('new stock added', newStock);
    }
  }

  deleteStock(stockSymbol){
    console.log('deleteStock:', stockSymbol);
    this.socket.emit('delete stock', stockSymbol);
    //I should probably change this to a delete request
  }

  updateChart(stockSymbol){
      //Get data for stockSymbol from Alpha Vantage
      //Format the data for use in highstocks
      //Push to allStockData array <--this is bound to stockChart in chartComponent
    this.http.get(this.alphaVantageApi + stockSymbol).subscribe((res)=>{
      console.log('Stock data retrival for ' + stockSymbol + ' successful', res);

      let stockDataObj = {
        name: stockSymbol,
        data: [],
        tooltip: {
            valueDecimals: 2
          }
      };

      let dates = Object.keys(res['Time Series (Daily)']);
      // console.log(dates);

      dates.forEach(function(date){
        let timeSerie = [];
        let unixDate = new Date(date).getTime();
        let closingValue = res['Time Series (Daily)'][date]['4. close']; //This is a string
        closingValue = parseFloat(closingValue); //Change to float for use in Highstocks

        timeSerie.push(unixDate);
        timeSerie.push(closingValue);
        //timeSerie is not in the correct format: [1511481600000, 195.75]
        stockDataObj.data.unshift(timeSerie); //Data must be in ascending order
      });
      this.allStockData.push(stockDataObj);
      console.log('allStockData', this.allStockData);



    });
  }

  updateStocks(){
    //Updates stocks array with a list of all stocks currently saved in DB
    //Calls function updateChart for each stock
    let context = this;
    this.http.get(this.url + 'update').subscribe((res)=>{
      this.stocks = res;//IDK why but res doesn't register as an array unless so I have to do this work-around
      this.stocks.forEach(function(data){
        context.updateChart(data.stockSymbol);
      });
    });
  }
}
