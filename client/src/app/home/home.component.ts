import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StockService } from '../stock.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myform: FormGroup;

  constructor(private stockService:StockService) {
   }

  ngOnInit() {
    //Initialize form
    this.myform = new FormGroup({
      stockSymbol: new FormControl('')
    });

    this.stockService.updateStocks();
    this.stockService.socketListener();

  }

  formSubmit(){

    /*
      1.  validate the stock symbol and make sure that it is a valid stock symbol
            If valid: proceed
            If !valid: return error msg or some shit
      2.  Emit the socket event 'send message' and pass in the stock symbol
      3.  Listen for the socket event 'send message'.  --> add data to UI as another list item
      3.  clear the form
    */

    var newStock = this.myform.value.stockSymbol;

    this.stockService.addNewStock(newStock);

    this.myform.reset();
  }

}
