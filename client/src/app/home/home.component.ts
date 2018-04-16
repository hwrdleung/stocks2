import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myform: FormGroup;
  private url = 'http://localhost:3000/';
  private socket;
  private stocks;

  constructor(private http:HttpClient) {
    this.socket = io(this.url);
   }

  ngOnInit() {
    
    var onInit = this;

    //Initialize form
    this.myform = new FormGroup({
      stockSymbol: new FormControl('')
    });

    //Initialize stocks array with updated list of saved stocks from db
    this.updateStocks();

    this.socket.on('connection', function(){
      console.log('Socket connected');
    });

    this.socket.on('new stock added', function(data){
      console.log(data);
      onInit.updateStocks();
    });

  }

  updateStocks(){
    this.http.get(this.url + 'update').subscribe((res)=>{
      console.log(res);      
      this.stocks = res;
    });
  }

  sendMessage(){

    /*
      1.  validate the stock symbol and make sure that it is a valid stock symbol
            If valid: proceed
            If !valid: return error msg or some shit
      2.  Emit the socket event 'send message' and pass in the stock symbol
      3.  Listen for the socket event 'send message'.  --> add data to UI as another list item
      3.  clear the form
    */

    var msg = this.myform.value.stockSymbol;

    this.socket.emit('new stock added', msg);

    this.myform.reset();
  }

}
