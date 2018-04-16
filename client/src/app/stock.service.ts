import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class StockService {
  private socket;
  private stocks;
  private url = 'http://localhost:3000/';

  constructor(private http:HttpClient) { 
    this.socket = io(this.url);
  }

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
    this.socket.emit('new stock added', newStock);
  }

  deleteStock(stockSymbol){
    console.log('deleteStock:', stockSymbol);
    this.socket.emit('delete stock', stockSymbol);
    //I should probably change this to a delete request
  }

  updateStocks(){
    this.http.get(this.url + 'update').subscribe((res)=>{
      console.log(res);      
      this.stocks = res;
    });
  }
}
