import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import 'rxjs/Rx';

@Injectable()
export class StockService {
  private socket;
  private stocks; //updateStocks() saves all current stocks to this stocks array.
  public allStockData = []; //Stores stock data formatted correctly for use in Highstocks.  This is used in chartComponent.
  private url = 'https://noodlestocks.herokuapp.com/';
  private alphaVantageApiKey = 'QA392CBZXI80H0IX';
  private alphaVantageApi = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=' + this.alphaVantageApiKey + '&symbol=';

  constructor(private http: HttpClient) {
    this.socket = io(this.url);
  }

  // This observable is used to notify chartComponent to refresh the chart
  // after stock data is fetched from external api. (Asynchronous)
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  // Socket.io emitters and listeners
  socketListener() {
    var onInit = this;
    //Connection is made
    this.socket.on('connection', function () {
      console.log('Socket connected');
    });
    //User adds or deletes a stock
    this.socket.on('refresh', function () {
      onInit.updateStocks();
    });
  }

  addNewStock(newStock) {
    //Create an array with JUST the stock symbols and no extra data
    var stockSymbols = [];
    this.stocks.forEach(function (stock) {
      stockSymbols.push(stock.stockSymbol);
    });
    //Prevent users from adding duplicate stocks
    if (!stockSymbols.includes(newStock)) {
      this.socket.emit('new stock added', newStock);
    }
  }

  deleteStock(stockSymbol) {
    this.socket.emit('delete stock', stockSymbol);
  }

  //---The following methods are used for preparing data for use in Highstocks
  updateStocks() {
    // allStockData will store the finalized data for use in Highstocks 
    // First, clear allStockData to prevent duplicate data from being saved when new data is fetched
    this.allStockData = [];

    // Update stocks array with a list of all stocks currently saved in DB
    // Call function updateChart for each stock
    let context = this;
    this.http.get(this.url + 'update').subscribe((res) => {
      this.stocks = res; // res doesn't register as an array unless so I have to do this work-around
      this.stocks.forEach(function (data) {
        context.updateChartSeriesData(data.stockSymbol);
      });
    });
  }

  updateChartSeriesData(stockSymbol) {
    // Get data for stockSymbol from Alpha Vantage
    this.http.get(this.alphaVantageApi + stockSymbol).subscribe((res) => {

      let stockDataObj = {
        name: stockSymbol,
        data: [],
        tooltip: {
          valueDecimals: 2
        }
      };
      // Format the data for use in highstocks
      let dates = Object.keys(res['Time Series (Daily)']);

      dates.forEach(function (date) {
        let timeSerie = [];
        let unixDate = new Date(date).getTime();
        let closingValue = res['Time Series (Daily)'][date]['4. close']; //This is a decimal number in string format
        closingValue = parseFloat(closingValue); //Change to float for use in Highstocks

        timeSerie.push(unixDate);
        timeSerie.push(closingValue);
        //timeSerie should be in this format: [1511481600000, 195.75]
        stockDataObj.data.unshift(timeSerie); //Data should be in ascending order
      });
      //Data is now formmated correctly.  Save and notify chartComponent to refresh UI with new stock data
      this.allStockData.push(stockDataObj);
      this.sendMessage('Stock data fetched');
    });
  }


}
